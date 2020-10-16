import json
import re
import io
import shutil

JSON_FOLDER = './defold-doc-1.2.134/'

class DefoldTS:

    def __init__(self, stream, file, namespace):
        self.stream = stream
        self.file = file
        self.namespace = namespace
        self.exclude_function_list = []
        self.include_string = ""

    @staticmethod
    def __clean_html(raw_html):
        clean_re = re.compile('<.*?>')
        clean_text = re.sub(clean_re, '', raw_html)
        return clean_text

    def __remove_namespace(self, full_name):
        if "." not in full_name:
            return full_name
        ns, value = full_name.split('.', 1)
        if ns != self.namespace:
            raise Exception(f'Namespace for function {full_name} != {self.namespace}')
        return value

    def generate_function_doc(self, elem):
        self.stream.write('\t/**\n')
        doc = self.__clean_html(elem['description']).replace('\n', '\n\t')
        self.stream.write('\t' + doc + '\n')
        for param in elem['parameters']:
            self.stream.write("\t@param " + param['name'] + " " + self.__clean_html(param['doc']).replace('\n', '\n\t') + '\n')
        for ret_val in elem['returnvalues']:
            self.stream.write("\t@return " + self.__clean_html(ret_val['doc']).replace('\n', '\n\t') + '\n')

        self.stream.write('\t**/\n')

    def parse_type(self, param_text, param_type):
        lent = param_text['doc'].find('</span>')
        val = []

        if param_text['doc'].find('string', 0, lent) >= 0:
            val.append('string')

        if param_text['doc'].find('boolean', 0, lent) >= 0:
            val.append('boolean')

        if param_text['doc'].find('hash', 0, lent) >= 0:
            val.append('hash')

        if param_text['doc'].find('url', 0, lent) >= 0:
            val.append('url')

        if param_text['doc'].find('number', 0, lent) >= 0:
            val.append('number')

        if param_text['doc'].find('vector3', 0, lent) >= 0:
            val.append('vmath.vector3')

        if param_text['doc'].find('vector4', 0, lent) >= 0:
            val.append('vmath.vector4')

        if param_text['doc'].find('matrix4', 0, lent) >= 0:
            val.append('vmath.matrix4')

        if param_text['doc'].find('quaternion', 0, lent) >= 0:
            val.append('vmath.quaternion')

        if param_text['doc'].find('node', 0, lent) >= 0:
            val.append('node')

        # Any
        if param_text['doc'].find('function', 0, lent) >= 0 or param_text['doc'].find('table', 0, lent) >= 0:
            val.clear()

        if len(val) == 0:
            param_type.append('any')
        else:
            first = True
            param_str = ''
            for i in val:
                if not first:
                    param_str += ' | '
                param_str += i
                first = False

            param_type.append(param_str)

    def get_function_param_type(self, elem):
        param_type = []
        for param in elem['parameters']:
            self.parse_type(param, param_type)

        if len(elem['returnvalues']) > 0:
            for param in elem['returnvalues']:
                self.parse_type(param, param_type)
        else:
            param_type.append('void')

        return param_type

    def generate_function_signature(self, elem):
        self.stream.write('\tfunction ')
        self.stream.write(self.__remove_namespace(elem['name']))
        self.stream.write('(')
        first = True
        i = 0
        param_type = self.get_function_param_type(elem)
        param_prev = ''
        for param in elem['parameters']:
            if not first:
                self.stream.write(", ")
            first = False
            param_cur = param['name'].replace('[', '').replace(']', '?').replace('-', '_')
            if param_prev == param_cur:
                param_cur += '_'
            param_prev = param_cur
            self.stream.write(param_cur)
            self.stream.write(': ' + param_type[i])
            i += 1

        self.stream.write('): ' + param_type[i] + '\n\n')

    def parse_to_stream(self, with_docs=True):
        # load and parse .json file
        with open(self.file, encoding='utf-8') as data_file:
            data = json.loads(data_file.read())

        # TS namespace start
        namespace_name = self.namespace
        if namespace_name == 'window':
            namespace_name += '_'
        self.stream.write('declare namespace ' + namespace_name + ' {\n\n')

        # TS functions
        for elem in data["elements"]:
            if elem['type'] == 'FUNCTION' and (self.__remove_namespace(elem['name']) not in self.exclude_function_list):
                # doc
                if with_docs:
                    self.generate_function_doc(elem)
                # function signature
                self.generate_function_signature(elem)

            if elem['type'] == 'VARIABLE' and (self.__remove_namespace(elem['name']) not in self.exclude_function_list):
                var_name = self.__remove_namespace(elem['name'])
                self.stream.write('\tlet ' + var_name + ': any\n')

        # TS namespace end
        self.stream.write(self.include_string)
        self.stream.write('}\n\n')


# -----------------------------------------------------------------------------


STREAM = io.StringIO()

# header
STREAM.write('''
// DEFOLD. Version 1.2.134

///////////////////////////////////////////////////////////////////////////////

''')
# crash

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'crash_doc.json', 'crash')
PARSER.parse_to_stream(with_docs = True)

# gui

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'gui_doc.json', 'gui')
PARSER.exclude_function_list.append('final')
PARSER.exclude_function_list.append('init')
PARSER.exclude_function_list.append('on_input')
PARSER.exclude_function_list.append('on_message')
PARSER.exclude_function_list.append('on_reload')
PARSER.exclude_function_list.append('update')
PARSER.parse_to_stream(with_docs=True)

# go

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'go_doc.json', 'go')
PARSER.exclude_function_list.append('delete')
PARSER.exclude_function_list.append('init')
PARSER.exclude_function_list.append('on_input')
PARSER.exclude_function_list.append('on_message')
PARSER.exclude_function_list.append('on_reload')
PARSER.exclude_function_list.append('update')
PARSER.exclude_function_list.append('final')
PARSER.include_string = '''
	/**
    Custom function ("delete" reserved word in TypeScript)
	Delete one or more game objects identified by id. Deletion is asynchronous meaning that
	the game object(s) are scheduled for deletion which will happen at the end of the current
	frame. Note that game objects scheduled for deletion will be counted against
	max_instances in "game.project" until they are actually removed.
	@param [id] string | hash | url | table optional id or table of id's of the instance(s) to delete, the instance of the calling script is deleted by default
	@param [recursive] boolean optional boolean, set to true to recursively delete child hiearchy in child to parent order
	**/
	function delete_(id?: any, recursive?: boolean): void
'''
PARSER.parse_to_stream(with_docs = True)

# profiler

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'profiler_doc.json', 'profiler')
PARSER.parse_to_stream(with_docs=True)

# render

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'render_doc.json', 'render')
PARSER.parse_to_stream(with_docs=True)

# resource

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'resource_doc.json', 'resource')
PARSER.parse_to_stream(with_docs=True)

# sys

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'sys_doc.json', 'sys')
PARSER.parse_to_stream(with_docs = True)

# window

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'window_doc.json', 'window')
PARSER.parse_to_stream(with_docs=True)

# collectionfactory

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'collectionfactory_doc.json', 'collectionfactory')
PARSER.parse_to_stream(with_docs=True)

# collectionproxy

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'collectionproxy_doc.json', 'collectionproxy')
PARSER.parse_to_stream(with_docs=True)

# physics (collision object)

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'physics_doc.json', 'physics')
PARSER.parse_to_stream(with_docs=True)

# factory
PARSER = DefoldTS(STREAM, JSON_FOLDER + 'factory_doc.json', 'factory')
PARSER.parse_to_stream(with_docs=True)

# label

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'label_doc.json', 'label')
PARSER.parse_to_stream(with_docs=True)

# model

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'model_doc.json', 'model')
PARSER.parse_to_stream(with_docs=True)

# particlefx

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'particlefx_doc.json', 'particlefx')
PARSER.parse_to_stream(with_docs=True)

# sound

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'sound_doc.json', 'sound')
PARSER.parse_to_stream(with_docs=True)

# spine

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'spine_doc.json', 'spine')
PARSER.parse_to_stream(with_docs=True)

# sprite

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'sprite_doc.json', 'sprite')
PARSER.parse_to_stream(with_docs=True)

# tilemap

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'tilemap_doc.json', 'tilemap')
PARSER.parse_to_stream(with_docs=True)

# buffer

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'buffer_doc.json', 'buffer')
PARSER.parse_to_stream(with_docs=True)

# html5

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'html5_doc.json', 'html5')
PARSER.parse_to_stream(with_docs=True)

# http

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'http_doc.json', 'http')
PARSER.parse_to_stream(with_docs=True)

# image

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'image_doc.json', 'image')
PARSER.parse_to_stream(with_docs=True)

# json

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'json_doc.json', 'json')
PARSER.parse_to_stream(with_docs=True)

# msg

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'msg_doc.json', 'msg')
PARSER.parse_to_stream(with_docs=True)

# timer

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'timer_doc.json', 'timer')
PARSER.parse_to_stream(with_docs=True)

# vmath

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'vmath_doc.json', 'vmath')
PARSER.parse_to_stream(with_docs=True)

# zlib

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'zlib_doc.json', 'zlib')
PARSER.parse_to_stream(with_docs=True)

# facebook

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'facebook_doc.json', 'facebook')
PARSER.parse_to_stream(with_docs=True)

# iap

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'iap_doc.json', 'iap')
PARSER.parse_to_stream(with_docs=True)

# iac

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'iac_doc.json', 'iac')
PARSER.parse_to_stream(with_docs=True)

# push

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'push_doc.json', 'push')
PARSER.parse_to_stream(with_docs=True)

# webview

PARSER = DefoldTS(STREAM, JSON_FOLDER + 'webview_doc.json', 'webview')
PARSER.parse_to_stream(with_docs=True)

# Done

with open('out.temp.ts', 'w') as file:
    STREAM.seek(0)
    shutil.copyfileobj(STREAM, file)

STREAM.close()
