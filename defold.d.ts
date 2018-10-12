
// DEFOLD. Version 1.2.134

///////////////////////////////////////////////////////////////////////////////

declare namespace crash {

	let SYSFIELD_ANDROID_BUILD_FINGERPRINT: any
	let SYSFIELD_DEVICE_LANGUAGE: any
	let SYSFIELD_DEVICE_MANUFACTURER: any
	let SYSFIELD_DEVICE_MODEL: any
	let SYSFIELD_ENGINE_HASH: any
	let SYSFIELD_ENGINE_VERSION: any
	let SYSFIELD_LANGUAGE: any
	let SYSFIELD_SYSTEM_NAME: any
	let SYSFIELD_SYSTEM_VERSION: any
	let SYSFIELD_TERRITORY: any
	/**
	A table is returned containing the addresses of the call stack.
	@param handle number crash dump handle
	@return table table containing the backtrace
	**/
	function get_backtrace(handle: number): any

	/**
	The format of read text blob is platform specific
	and not guaranteed
	but can be useful for manual inspection.
	@param handle number crash dump handle
	@return string string with the platform specific data
	**/
	function get_extra_data(handle: number): string

	/**
	The function returns a table containing entries with sub-tables that
	have fields 'name' and 'address' set for all loaded modules.
	@param handle number crash dump handle
	@return table module table
	**/
	function get_modules(handle: number): any

	/**
	
	@param handle number crash dump handle
	@return number signal number
	**/
	function get_signum(handle: number): number

	/**
	
	@param handle number crash dump handle
	@param index number system field enum
	@return string value recorded in the crash dump
	**/
	function get_sys_field(handle: number, index: number): string

	/**
	
	@param handle number crash dump handle
	@param index number user data slot index
	@return string user data value recorded in the crash dump
	**/
	function get_user_field(handle: number, index: number): string

	/**
	The crash dump will be removed from disk upon a successful
	load, so loading is one-shot.
	@return number handle to the loaded dump, or nil if no dump was found
	**/
	function load_previous(): number

	/**
	
	@param handle number handle to loaded crash dump
	**/
	function release(handle: number): void

	/**
	Crashes occuring before the path is set will be stored to a default engine location.
	@param path string file path to use
	**/
	function set_file_path(path: string): void

	/**
	Store a user value that will get written to a crash dump when
	a crash occurs. This can be user id:s, breadcrumb data etc.
	There are 32 slots indexed from 0. Each slot stores at most 255 characters.
	@param index number slot index. 0-indexed
	@param value string string value to store
	**/
	function set_user_field(index: number, value: string): void

	/**
	Performs the same steps as if a crash had just occured but
	allows the program to continue.
	The generated dump can be read by crash.load_previous
	**/
	function write_dump(): void

}

declare namespace gui {

	let ADJUST_FIT: any
	let ADJUST_STRETCH: any
	let ADJUST_ZOOM: any
	let ANCHOR_BOTTOM: any
	let ANCHOR_LEFT: any
	let ANCHOR_RIGHT: any
	let ANCHOR_TOP: any
	let BLEND_ADD: any
	let BLEND_ADD_ALPHA: any
	let BLEND_ALPHA: any
	let BLEND_MULT: any
	let CLIPPING_MODE_NONE: any
	let CLIPPING_MODE_STENCIL: any
	let EASING_INBACK: any
	let EASING_INBOUNCE: any
	let EASING_INCIRC: any
	let EASING_INCUBIC: any
	let EASING_INELASTIC: any
	let EASING_INEXPO: any
	let EASING_INOUTBACK: any
	let EASING_INOUTBOUNCE: any
	let EASING_INOUTCIRC: any
	let EASING_INOUTCUBIC: any
	let EASING_INOUTELASTIC: any
	let EASING_INOUTEXPO: any
	let EASING_INOUTQUAD: any
	let EASING_INOUTQUART: any
	let EASING_INOUTQUINT: any
	let EASING_INOUTSINE: any
	let EASING_INQUAD: any
	let EASING_INQUART: any
	let EASING_INQUINT: any
	let EASING_INSINE: any
	let EASING_LINEAR: any
	let EASING_OUTBACK: any
	let EASING_OUTBOUNCE: any
	let EASING_OUTCIRC: any
	let EASING_OUTCUBIC: any
	let EASING_OUTELASTIC: any
	let EASING_OUTEXPO: any
	let EASING_OUTINBACK: any
	let EASING_OUTINBOUNCE: any
	let EASING_OUTINCIRC: any
	let EASING_OUTINCUBIC: any
	let EASING_OUTINELASTIC: any
	let EASING_OUTINEXPO: any
	let EASING_OUTINQUAD: any
	let EASING_OUTINQUART: any
	let EASING_OUTINQUINT: any
	let EASING_OUTINSINE: any
	let EASING_OUTQUAD: any
	let EASING_OUTQUART: any
	let EASING_OUTQUINT: any
	let EASING_OUTSINE: any
	let KEYBOARD_TYPE_DEFAULT: any
	let KEYBOARD_TYPE_EMAIL: any
	let KEYBOARD_TYPE_NUMBER_PAD: any
	let KEYBOARD_TYPE_PASSWORD: any
	let PIEBOUNDS_ELLIPSE: any
	let PIEBOUNDS_RECTANGLE: any
	let PIVOT_CENTER: any
	let PIVOT_E: any
	let PIVOT_N: any
	let PIVOT_NE: any
	let PIVOT_NW: any
	let PIVOT_S: any
	let PIVOT_SE: any
	let PIVOT_SW: any
	let PIVOT_W: any
	let PLAYBACK_LOOP_BACKWARD: any
	let PLAYBACK_LOOP_FORWARD: any
	let PLAYBACK_LOOP_PINGPONG: any
	let PLAYBACK_ONCE_BACKWARD: any
	let PLAYBACK_ONCE_FORWARD: any
	let PLAYBACK_ONCE_PINGPONG: any
	let PROP_COLOR: any
	let PROP_FILL_ANGLE: any
	let PROP_INNER_RADIUS: any
	let PROP_OUTLINE: any
	let PROP_POSITION: any
	let PROP_ROTATION: any
	let PROP_SCALE: any
	let PROP_SHADOW: any
	let PROP_SIZE: any
	let PROP_SLICE9: any
	let SIZE_MODE_AUTO: any
	let SIZE_MODE_MANUAL: any
	/**
	This starts an animation of a node property according to the specified parameters.
	If the node property is already being animated, that animation will be canceled and
	replaced by the new one. Note however that several different node properties
	can be animated simultaneously. Use gui.cancel_animation to stop the animation
	before it has completed.
	Composite properties of type vector3, vector4 or quaternion
	also expose their sub-components (x, y, z and w).
	You can address the components individually by suffixing the name with a dot '.'
	and the name of the component.
	For instance, "position.x" (the position x coordinate) or "color.w"
	(the color alpha value).
	If a complete_function (Lua function) is specified, that function will be called
	when the animation has completed.
	By starting a new animation in that function, several animations can be sequenced
	together. See the examples below for more information.
	@param node node node to animate
	@param property string | constant property to animate
	
	"position"
	"rotation"
	"scale"
	"color"
	"outline"
	"shadow"
	"size"
	"fill_angle" (pie)
	"inner_radius" (pie)
	"slice9" (slice9)
	
	The following property constants are defined equaling the corresponding property string names.
	
	gui.PROP_POSITION
	gui.PROP_ROTATION
	gui.PROP_SCALE
	gui.PROP_COLOR
	gui.PROP_OUTLINE
	gui.PROP_SHADOW
	gui.PROP_SIZE
	gui.PROP_FILL_ANGLE
	gui.PROP_INNER_RADIUS
	gui.PROP_SLICE9
	
	@param to vector3 | vector4 target property value
	@param easing constant | vector easing to use during animation.
	     Either specify one of the gui.EASING_* constants or provide a
	     vector with a custom curve.
	@param duration number duration of the animation in seconds.
	@param [delay] number delay before the animation starts in seconds.
	@param [complete_function] function(self, node) function to call when the
	     animation has completed
	@param [playback] constant playback mode
	
	gui.PLAYBACK_ONCE_FORWARD
	gui.PLAYBACK_ONCE_BACKWARD
	gui.PLAYBACK_ONCE_PINGPONG
	gui.PLAYBACK_LOOP_FORWARD
	gui.PLAYBACK_LOOP_BACKWARD
	gui.PLAYBACK_LOOP_PINGPONG
	
	**/
	function animate(node: node, property: string, to: vmath.vector3 | vmath.vector4, easing: any, duration: number, delay?: number, complete_function?: any, playback?: any): void

	/**
	If an animation of the specified node is currently running (started by gui.animate), it will immediately be canceled.
	@param node node node that should have its animation canceled
	@param property string | constant property for which the animation should be canceled
	
	"position"
	"rotation"
	"scale"
	"color"
	"outline"
	"shadow"
	"size"
	"fill_angle" (pie)
	"inner_radius" (pie)
	"slice9" (slice9)
	
	**/
	function cancel_animation(node: node, property: string): void

	/**
	Cancels any running flipbook animation on the specified node.
	@param node node node cancel flipbook animation for
	**/
	function cancel_flipbook(node: node): void

	/**
	
	@param node node spine node that should cancel its animation
	**/
	function cancel_spine(node: node): void

	/**
	Make a clone instance of a node.
	This function does not clone the supplied node's children nodes.
	Use gui.clone_tree for that purpose.
	@param node node node to clone
	@return node the cloned node
	**/
	function clone(node: node): node

	/**
	Make a clone instance of a node and all its children.
	Use gui.clone to clone a node excluding its children.
	@param node node root node to clone
	@return table a table mapping node ids to the corresponding cloned nodes
	**/
	function clone_tree(node: node): any

	/**
	Deletes the specified node. Any child nodes of the specified node will be
	recursively deleted.
	@param node node node to delete
	**/
	function delete_node(node: node): void

	/**
	Delete a dynamically created texture.
	@param texture string | hash texture id
	**/
	function delete_texture(texture: string | hash): void

	/**
	Returns the adjust mode of a node.
	The adjust mode defines how the node will adjust itself to screen
	resolutions that differs from the one in the project settings.
	@param node node node from which to get the adjust mode (node)
	@return constant the current adjust mode
	
	gui.ADJUST_FIT
	gui.ADJUST_ZOOM
	gui.ADJUST_STRETCH
	
	**/
	function get_adjust_mode(node: node): any

	/**
	Returns the blend mode of a node.
	Blend mode defines how the node will be blended with the background.
	@param node node node from which to get the blend mode
	@return constant blend mode
	
	gui.BLEND_ALPHA
	gui.BLEND_ADD
	gui.BLEND_ADD_ALPHA
	gui.BLEND_MULT
	
	**/
	function get_blend_mode(node: node): any

	/**
	If node is set as an inverted clipping node, it will clip anything inside as opposed to outside.
	@param node node node from which to get the clipping inverted state
	@return boolean true or false
	**/
	function get_clipping_inverted(node: node): boolean

	/**
	Clipping mode defines how the node will clipping it's children nodes
	@param node node node from which to get the clipping mode
	@return constant clipping mode
	
	  gui.CLIPPING_MODE_NONE
	  gui.CLIPPING_MODE_STENCIL
	
	**/
	function get_clipping_mode(node: node): any

	/**
	If node is set as visible clipping node, it will be shown as well as clipping. Otherwise, it will only clip but not show visually.
	@param node node node from which to get the clipping visibility state
	@return boolean true or false
	**/
	function get_clipping_visible(node: node): boolean

	/**
	Returns the color of the supplied node. The components
	of the returned vector4 contains the color channel values:
	
	
	
	Component
	Color value
	
	
	
	
	x
	Red value
	
	
	y
	Green value
	
	
	z
	Blue value
	
	
	w
	Alpha value
	
	
	
	@param node node node to get the color from
	@return vector4 node color
	**/
	function get_color(node: node): vmath.vector4

	/**
	Returns the sector angle of a pie node.
	@param node node node from which to get the fill angle
	@return number sector angle
	**/
	function get_fill_angle(node: node): number

	/**
	Get node flipbook animation.
	@param node node node to get flipbook animation from
	@return hash animation id
	**/
	function get_flipbook(node: node): hash

	/**
	This is only useful for text nodes. The font must be mapped to the gui scene in the gui editor.
	@param node node node from which to get the font
	@return hash font id
	**/
	function get_font(node: node): hash

	/**
	Returns the scene height.
	@return number scene height
	**/
	function get_height(): number

	/**
	Retrieves the id of the specified node.
	@param node node the node to retrieve the id from
	@return hash the id of the node
	**/
	function get_id(node: node): hash

	/**
	Retrieve the index of the specified node.
	The index defines the order in which a node appear in a GUI scene.
	Higher index means the node is drawn on top of lower indexed nodes.
	@param node node the node to retrieve the id from
	@return number the index of the node
	**/
	function get_index(node: node): number

	/**
	
	@param node node node from which to get the inherit alpha state
	**/
	function get_inherit_alpha(node: node): void

	/**
	Returns the inner radius of a pie node.
	The radius is defined along the x-axis.
	@param node node node from where to get the inner radius
	@return number inner radius
	**/
	function get_inner_radius(node: node): number

	/**
	The layer must be mapped to the gui scene in the gui editor.
	@param node node node from which to get the layer
	@return hash layer id
	**/
	function get_layer(node: node): hash

	/**
	
	@return hash layout id
	**/
	function get_layout(): hash

	/**
	Returns the leading value for a text node.
	@param node node node from where to get the leading
	@return number leading scaling value (default=1)
	**/
	function get_leading(node: node): number

	/**
	Returns whether a text node is in line-break mode or not.
	This is only useful for text nodes.
	@param node node node from which to get the line-break for
	@return boolean true or false
	**/
	function get_line_break(node: node): boolean

	/**
	Retrieves the node with the specified id.
	@param id string | hash id of the node to retrieve
	@return node a new node instance
	**/
	function get_node(id: string | hash): node

	/**
	Returns the outer bounds mode for a pie node.
	@param node node node from where to get the outer bounds mode
	@return constant the outer bounds mode of the pie node:
	
	gui.PIEBOUNDS_RECTANGLE
	gui.PIEBOUNDS_ELLIPSE
	
	**/
	function get_outer_bounds(node: node): any

	/**
	Returns the outline color of the supplied node.
	See gui.get_color for info how vectors encode color values.
	@param node node node to get the outline color from
	@return vector4 outline color
	**/
	function get_outline(node: node): vmath.vector4

	/**
	Returns the parent node of the specified node.
	If the supplied node does not have a parent, nil is returned.
	@param node node the node from which to retrieve its parent
	@return node parent instance or nil
	**/
	function get_parent(node: node): node

	/**
	Get the paricle fx for a gui node
	@param node node node to get particle fx for
	@return particle fx id
	**/
	function get_particlefx(node: node): any

	/**
	Returns the number of generated vertices around the perimeter
	of a pie node.
	@param node node pie node
	@return number vertex count
	**/
	function get_perimeter_vertices(node: node): number

	/**
	The pivot specifies how the node is drawn and rotated from its position.
	@param node node node to get pivot from
	@return constant pivot constant
	
	  gui.PIVOT_CENTER
	  gui.PIVOT_N
	  gui.PIVOT_NE
	  gui.PIVOT_E
	  gui.PIVOT_SE
	  gui.PIVOT_S
	  gui.PIVOT_SW
	  gui.PIVOT_W
	  gui.PIVOT_NW
	
	**/
	function get_pivot(node: node): any

	/**
	Returns the position of the supplied node.
	@param node node node to get the position from
	@return vector3 node position
	**/
	function get_position(node: node): vmath.vector3

	/**
	Returns the rotation of the supplied node.
	The rotation is expressed in degree Euler angles.
	@param node node node to get the rotation from
	@return vector3 node rotation
	**/
	function get_rotation(node: node): vmath.vector3

	/**
	Returns the scale of the supplied node.
	@param node node node to get the scale from
	@return vector3 node scale
	**/
	function get_scale(node: node): vmath.vector3

	/**
	Returns the screen position of the supplied node. This function returns the
	calculated transformed position of the node, taking into account any parent node
	transforms.
	@param node node node to get the screen position from
	@return vector3 node screen position
	**/
	function get_screen_position(node: node): vmath.vector3

	/**
	Returns the shadow color of the supplied node.
	See gui.get_color for info how vectors encode color values.
	@param node node node to get the shadow color from
	@return vector4 node shadow color
	**/
	function get_shadow(node: node): vmath.vector4

	/**
	Returns the size of the supplied node.
	@param node node node to get the size from
	@return vector3 node size
	**/
	function get_size(node: node): vmath.vector3

	/**
	Returns the size of a node.
	The size mode defines how the node will adjust itself in size. Automatic
	size mode alters the node size based on the node's content.
	@param node node node from which to get the size mode (node)
	@return constant the current size mode
	
	gui.SIZE_MODE_MANUAL
	gui.SIZE_MODE_AUTO
	
	**/
	function get_size_mode(node: node): any

	/**
	Returns the slice9 configuration values for the node.
	@param node node node to manipulate
	@return vector4 configuration values
	**/
	function get_slice9(node: node): vmath.vector4

	/**
	Gets the playing animation on a spine node
	@param node node node to get spine skin from
	@return hash spine animation id, 0 if no animation is playing
	**/
	function get_spine_animation(node: node): hash

	/**
	The returned node can be used for parenting and transform queries.
	This function has complexity O(n), where n is the number of bones in the spine model skeleton.
	@param node node spine node to query for bone node
	@param bone_id string | hash id of the corresponding bone
	@return node node corresponding to the spine bone
	**/
	function get_spine_bone(node: node, bone_id: string | hash): node

	/**
	This is only useful for spine nodes. Gets the normalized cursor of the animation on a spine node.
	@param node spine node to set the cursor for (node)
	@return value number cursor value
	**/
	function get_spine_cursor(node: node): number

	/**
	This is only useful for spine nodes. Gets the playback rate of the animation on a spine node.
	@param node node spine node to set the cursor for
	@return number playback rate
	**/
	function get_spine_playback_rate(node: node): number

	/**
	Returns the spine scene id of the supplied node.
	This is currently only useful for spine nodes.
	The returned spine scene must be mapped to the gui scene in the gui editor.
	@param node node node to get texture from
	@return hash spine scene id
	**/
	function get_spine_scene(node: node): hash

	/**
	Gets the spine skin of a spine node
	@param node node node to get spine skin from
	@return hash spine skin id, 0 if no explicit skin is set
	**/
	function get_spine_skin(node: node): hash

	/**
	Returns the text value of a text node. This is only useful for text nodes.
	@param node node node from which to get the text
	@return string text value
	**/
	function get_text(node: node): string

	/**
	Get text metrics given the provided font, text and parameters.
	@param font string | hash font id
	@param text string text to measure
	@param width number max-width. Use for line-breaks (default=FLT_MAX)
	@param line_break boolean true to break lines accordingly to width (default=false)
	@param leading number scale value for line spacing (default=1)
	@param tracking number scale value for letter spacing (default=0)
	@return table a table with the following fields:
	
	width
	height
	max_ascent
	max_descent
	
	**/
	function get_text_metrics(font: string | hash, text: string, width: number, line_break: boolean, leading: number, tracking: number): any

	/**
	Get the text metrics from a text node.
	@param node node text node to measure text from
	@return table a table with the following fields:
	
	width
	height
	max_ascent
	max_descent
	
	**/
	function get_text_metrics_from_node(node: node): any

	/**
	Returns the texture of a node.
	This is currently only useful for box or pie nodes.
	The texture must be mapped to the gui scene in the gui editor.
	@param node node node to get texture from
	@return hash texture id
	**/
	function get_texture(node: node): hash

	/**
	Returns the tracking value of a text node.
	@param node node node from where to get the tracking
	@return number tracking scaling number (default=0)
	**/
	function get_tracking(node: node): number

	/**
	Returns the scene width.
	@return number scene width
	**/
	function get_width(): number

	/**
	The x-anchor specifies how the node is moved when the game is run in a different resolution.
	@param node node node to get x-anchor from
	@return constant anchor constant
	
	gui.ANCHOR_NONE
	gui.ANCHOR_LEFT
	gui.ANCHOR_RIGHT
	
	**/
	function get_xanchor(node: node): any

	/**
	The y-anchor specifies how the node is moved when the game is run in a different resolution.
	@param node node node to get y-anchor from
	@return constant anchor constant
	
	gui.ANCHOR_NONE
	gui.ANCHOR_TOP
	gui.ANCHOR_BOTTOM
	
	**/
	function get_yanchor(node: node): any

	/**
	Hides the on-display touch keyboard on the device.
	**/
	function hide_keyboard(): void

	/**
	Returns true if a node is enabled and false if it's not.
	Disabled nodes are not rendered and animations acting on them are not evaluated.
	@param node node node to query
	@return boolean whether the node is enabled or not
	**/
	function is_enabled(node: node): boolean

	/**
	Alters the ordering of the two supplied nodes by moving the first node
	above the second.
	If the second argument is nil the first node is moved to the top.
	@param node node to move
	@param node node | nil reference node above which the first node should be moved
	**/
	function move_above(node: node, node_: node): void

	/**
	Alters the ordering of the two supplied nodes by moving the first node
	below the second.
	If the second argument is nil the first node is moved to the bottom.
	@param node node to move
	@param node node | nil reference node below which the first node should be moved
	**/
	function move_below(node: node, node_: node): void

	/**
	Dynamically create a new box node.
	@param pos vector3 | vector4 node position
	@param size vector3 node size
	@return node new box node
	**/
	function new_box_node(pos: vmath.vector3 | vmath.vector4, size: vmath.vector3): node

	/**
	Dynamically create a particle fx node.
	@param pos vector3 | vector4 node position
	@param particlefx hash | string particle fx resource name
	@return node new particle fx node
	**/
	function new_particlefx_node(pos: vmath.vector3 | vmath.vector4, particlefx: string | hash): node

	/**
	Dynamically create a new pie node.
	@param pos vector3 | vector4 node position
	@param size vector3 node size
	@return node new box node
	**/
	function new_pie_node(pos: vmath.vector3 | vmath.vector4, size: vmath.vector3): node

	/**
	Dynamically create a new spine node.
	@param pos vector3 | vector4 node position
	@param spine_scene string | hash spine scene id
	@return node new spine node
	**/
	function new_spine_node(pos: vmath.vector3 | vmath.vector4, spine_scene: string | hash): node

	/**
	Dynamically create a new text node.
	@param pos vector3 | vector4 node position
	@param text string node text
	@return node new text node
	**/
	function new_text_node(pos: vmath.vector3 | vmath.vector4, text: string): node

	/**
	Dynamically create a new texture.
	@param texture string | hash texture id
	@param width number texture width
	@param height number texture height
	@param type string | constant texture type
	
	"rgb" - RGB
	"rgba" - RGBA
	"l" - LUMINANCE
	
	@param buffer string texture data
	@param flip boolean flip texture vertically
	@return boolean texture creation was successful
	**/
	function new_texture(texture: string | hash, width: number, height: number, type: string, buffer: string, flip: boolean): boolean

	/**
	Tests whether a coordinate is within the bounding box of a
	node.
	@param node node node to be tested for picking
	@param x number x-coordinate (see on_input )
	@param y number y-coordinate (see on_input )
	@return boolean pick result
	**/
	function pick_node(node: node, x: number, y: number): boolean

	/**
	Play flipbook animation on a box or pie node.
	The current node texture must contain the animation.
	Use this function to set one-frame still images on the node.
	@param node node node to set animation for
	@param animation string | hash animation id
	@param [complete_function] function(self, node) optional function to call when the animation has completed
	
	self
	
	object The current object.
	
	node
	
	node The node that is animated.
	
	
	**/
	function play_flipbook(node: node, animation: string | hash, complete_function?: any): void

	/**
	Plays the paricle fx for a gui node
	@param node node node to play particle fx for
	@param [emitter_state_function] function(self, node, emitter, state) optional callback function that will be called when an emitter attached to this particlefx changes state.
	
	self
	object The current object
	id
	hash The id of the particle fx component
	emitter
	hash The id of the emitter
	state
	constant the new state of the emitter:
	
	
	gui.EMITTER_STATE_SLEEPING
	gui.EMITTER_STATE_PRESPAWN
	gui.EMITTER_STATE_SPAWNING
	gui.EMITTER_STATE_POSTSPAWN
	
	**/
	function play_particlefx(node: node, emitter_state_function?: any): void

	/**
	Starts a spine animation.
	@param node node spine node that should play the animation
	@param animation_id string | hash id of the animation to play
	@param playback constant playback mode
	
	gui.PLAYBACK_ONCE_FORWARD
	gui.PLAYBACK_ONCE_BACKWARD
	gui.PLAYBACK_ONCE_PINGPONG
	gui.PLAYBACK_LOOP_FORWARD
	gui.PLAYBACK_LOOP_BACKWARD
	gui.PLAYBACK_LOOP_PINGPONG
	
	@param [play_properties] table optional table with properties
	
	blend_duration
	number The duration of a linear blend between the current and new animation
	offset
	number The normalized initial value of the animation cursor when the animation starts playing
	playback_rate
	number The rate with which the animation will be played. Must be positive
	
	@param [complete_function] function(self, node) function to call when the animation has completed
	**/
	function play_spine_anim(node: node, animation_id: string | hash, playback: any, play_properties?: any, complete_function?: any): void

	/**
	Resets the input context of keyboard. This will clear marked text.
	**/
	function reset_keyboard(): void

	/**
	Resets all nodes in the current GUI scene to their initial state.
	The reset only applies to static node loaded from the scene.
	Nodes that are created dynamically from script are not affected.
	**/
	function reset_nodes(): void

	/**
	Sets the adjust mode on a node.
	The adjust mode defines how the node will adjust itself to screen
	resolutions that differs from the one in the project settings.
	@param node node node to set adjust mode for
	@param adjust_mode constant adjust mode to set
	
	gui.ADJUST_FIT
	gui.ADJUST_ZOOM
	gui.ADJUST_STRETCH
	
	**/
	function set_adjust_mode(node: node, adjust_mode: any): void

	/**
	Set the blend mode of a node.
	Blend mode defines how the node will be blended with the background.
	@param node node node to set blend mode for
	@param blend_mode constant blend mode to set
	
	gui.BLEND_ALPHA
	gui.BLEND_ADD
	gui.BLEND_ADD_ALPHA
	gui.BLEND_MULT
	
	**/
	function set_blend_mode(node: node, blend_mode: any): void

	/**
	If node is set as an inverted clipping node, it will clip anything inside as opposed to outside.
	@param node node node to set clipping inverted state for
	@param inverted boolean true or false
	**/
	function set_clipping_inverted(node: node, inverted: boolean): void

	/**
	Clipping mode defines how the node will clipping it's children nodes
	@param node node node to set clipping mode for
	@param clipping_mode constant clipping mode to set
	
	  gui.CLIPPING_MODE_NONE
	  gui.CLIPPING_MODE_STENCIL
	
	**/
	function set_clipping_mode(node: node, clipping_mode: any): void

	/**
	If node is set as an visible clipping node, it will be shown as well as clipping. Otherwise, it will only clip but not show visually.
	@param node node node to set clipping visibility for
	@param visible boolean true or false
	**/
	function set_clipping_visible(node: node, visible: boolean): void

	/**
	Sets the color of the supplied node. The components
	of the supplied vector3 or vector4 should contain the color channel values:
	
	
	
	Component
	Color value
	
	
	
	
	x
	Red value
	
	
	y
	Green value
	
	
	z
	Blue value
	
	
	w vector4
	Alpha value
	
	
	
	@param node node node to set the color for
	@param color vector3 | vector4 new color
	**/
	function set_color(node: node, color: vmath.vector3 | vmath.vector4): void

	/**
	Sets a node to the disabled or enabled state.
	Disabled nodes are not rendered and animations acting on them are not evaluated.
	@param node node node to be enabled/disabled
	@param enabled boolean whether the node should be enabled or not
	**/
	function set_enabled(node: node, enabled: boolean): void

	/**
	Set the sector angle of a pie node.
	@param node node node to set the fill angle for
	@param angle number sector angle
	**/
	function set_fill_angle(node: node, angle: number): void

	/**
	This is only useful for text nodes.
	The font must be mapped to the gui scene in the gui editor.
	@param node node node for which to set the font
	@param font string | hash font id
	**/
	function set_font(node: node, font: string | hash): void

	/**
	Set the id of the specicied node to a new value.
	Nodes created with the gui.new_*_node() functions get
	an empty id. This function allows you to give dynamically
	created nodes an id.
	 No checking is done on the uniqueness of supplied ids.
	It is up to you to make sure you use unique ids.
	@param node node node to set the id for
	@param id string | hash id to set
	**/
	function set_id(node: node, id: string | hash): void

	/**
	
	@param node node node from which to set the inherit alpha state
	@param inherit_alpha boolean true or false
	**/
	function set_inherit_alpha(node: node, inherit_alpha: boolean): void

	/**
	Sets the inner radius of a pie node.
	The radius is defined along the x-axis.
	@param node node node to set the inner radius for
	@param radius number inner radius
	**/
	function set_inner_radius(node: node, radius: number): void

	/**
	The layer must be mapped to the gui scene in the gui editor.
	@param node node node for which to set the layer
	@param layer string | hash layer id
	**/
	function set_layer(node: node, layer: string | hash): void

	/**
	Sets the leading value for a text node. This value is used to
	scale the line spacing of text.
	@param node node node for which to set the leading
	@param leading number a scaling value for the line spacing (default=1)
	**/
	function set_leading(node: node, leading: number): void

	/**
	Sets the line-break mode on a text node.
	This is only useful for text nodes.
	@param node node node to set line-break for
	@param line_break boolean true or false
	**/
	function set_line_break(node: node, line_break: boolean): void

	/**
	Sets the outer bounds mode for a pie node.
	@param node node node for which to set the outer bounds mode
	@param bounds_mode constant the outer bounds mode of the pie node:
	
	gui.PIEBOUNDS_RECTANGLE
	gui.PIEBOUNDS_ELLIPSE
	
	**/
	function set_outer_bounds(node: node, bounds_mode: any): void

	/**
	Sets the outline color of the supplied node.
	See gui.set_color for info how vectors encode color values.
	@param node node node to set the outline color for
	@param color vector3 | vector4 new outline color
	**/
	function set_outline(node: node, color: vmath.vector3 | vmath.vector4): void

	/**
	Sets the parent node of the specified node.
	@param node node node for which to set its parent
	@param parent node parent node to set
	**/
	function set_parent(node: node, parent: node): void

	/**
	Set the paricle fx for a gui node
	@param node node node to set particle fx for
	@param particlefx hash | string particle fx id
	**/
	function set_particlefx(node: node, particlefx: string | hash): void

	/**
	Sets the number of generated vertices around the perimeter of a pie node.
	@param node node pie node
	@param vertices number vertex count
	**/
	function set_perimeter_vertices(node: node, vertices: number): void

	/**
	The pivot specifies how the node is drawn and rotated from its position.
	@param node node node to set pivot for
	@param pivot constant pivot constant
	
	  gui.PIVOT_CENTER
	  gui.PIVOT_N
	  gui.PIVOT_NE
	  gui.PIVOT_E
	  gui.PIVOT_SE
	  gui.PIVOT_S
	  gui.PIVOT_SW
	  gui.PIVOT_W
	  gui.PIVOT_NW
	
	**/
	function set_pivot(node: node, pivot: any): void

	/**
	Sets the position of the supplied node.
	@param node node node to set the position for
	@param position vector3 | vector4 new position
	**/
	function set_position(node: node, position: vmath.vector3 | vmath.vector4): void

	/**
	Set the order number for the current GUI scene.
	The number dictates the sorting of the "gui" render predicate,
	in other words in which order the scene will be rendered in relation
	to other currently rendered GUI scenes.
	The number must be in the range 0 to 15.
	@param order number rendering order (0-15)
	**/
	function set_render_order(order: number): void

	/**
	Sets the rotation of the supplied node.
	The rotation is expressed in degree Euler angles.
	@param node node node to set the rotation for
	@param rotation vector3 | vector4 new rotation
	**/
	function set_rotation(node: node, rotation: vmath.vector3 | vmath.vector4): void

	/**
	Sets the scaling of the supplied node.
	@param node node node to set the scale for
	@param scale vector3 | vector4 new scale
	**/
	function set_scale(node: node, scale: vmath.vector3 | vmath.vector4): void

	/**
	Sets the shadow color of the supplied node.
	See gui.set_color for info how vectors encode color values.
	@param node node node to set the shadow color for
	@param color vector3 | vector4 new shadow color
	**/
	function set_shadow(node: node, color: vmath.vector3 | vmath.vector4): void

	/**
	Sets the size of the supplied node.
	 You can only set size on nodes with size mode set to SIZE_MODE_MANUAL
	@param node node node to set the size for
	@param size vector3 | vector4 new size
	**/
	function set_size(node: node, size: vmath.vector3 | vmath.vector4): void

	/**
	Sets the size mode of a node.
	The size mode defines how the node will adjust itself in size. Automatic
	size mode alters the node size based on the node's content.
	@param node node node to set size mode for
	@param size_mode constant size mode to set
	
	gui.SIZE_MODE_MANUAL
	gui.SIZE_MODE_AUTO
	
	**/
	function set_size_mode(node: node, size_mode: any): void

	/**
	Set the slice9 configuration values for the node.
	@param node node node to manipulate
	@param values vector4 new values
	**/
	function set_slice9(node: node, values: vmath.vector4): void

	/**
	This is only useful for spine nodes. The cursor is normalized.
	@param node node spine node to set the cursor for
	@param cursor number cursor value
	**/
	function set_spine_cursor(node: node, cursor: number): void

	/**
	This is only useful for spine nodes. Sets the playback rate of the animation on a spine node. Must be positive.
	@param node node spine node to set the cursor for
	@param playback_rate number playback rate
	**/
	function set_spine_playback_rate(node: node, playback_rate: number): void

	/**
	Set the spine scene on a spine node. The spine scene must be mapped to the gui scene in the gui editor.
	@param node node node to set spine scene for
	@param spine_scene string | hash spine scene id
	**/
	function set_spine_scene(node: node, spine_scene: string | hash): void

	/**
	Sets the spine skin on a spine node.
	@param node node node to set the spine skin on
	@param spine_skin string | hash spine skin id
	@param [spine_slot] string | hash optional slot id to only change a specific slot
	**/
	function set_spine_skin(node: node, spine_skin: string | hash, spine_slot?: string | hash): void

	/**
	Set the text value of a text node. This is only useful for text nodes.
	@param node node node to set text for
	@param text string text to set
	**/
	function set_text(node: node, text: string): void

	/**
	Set the texture on a box or pie node. The texture must be mapped to
	the gui scene in the gui editor. The function points out which texture
	the node should render from. If the texture is an atlas, further
	information is needed to select which image/animation in the atlas
	to render. In such cases, use gui.play_flipbook() in
	addition to this function.
	@param node node node to set texture for
	@param texture string | hash texture id
	**/
	function set_texture(node: node, texture: string | hash): void

	/**
	Set the texture buffer data for a dynamically created texture.
	@param texture string | hash texture id
	@param width number texture width
	@param height number texture height
	@param type string | constant texture type
	
	  "rgb" - RGB
	  "rgba" - RGBA
	  "l" - LUMINANCE
	
	@param buffer string texture data
	@param flip boolean flip texture vertically
	@return boolean setting the data was successful
	**/
	function set_texture_data(texture: string | hash, width: number, height: number, type: string, buffer: string, flip: boolean): boolean

	/**
	Sets the tracking value of a text node. This value is used to
	adjust the vertical spacing of characters in the text.
	@param node node node for which to set the tracking
	@param tracking number a scaling number for the letter spacing (default=0)
	**/
	function set_tracking(node: node, tracking: number): void

	/**
	The x-anchor specifies how the node is moved when the game is run in a different resolution.
	@param node node node to set x-anchor for
	@param anchor constant anchor constant
	
	gui.ANCHOR_NONE
	gui.ANCHOR_LEFT
	gui.ANCHOR_RIGHT
	
	**/
	function set_xanchor(node: node, anchor: any): void

	/**
	The y-anchor specifies how the node is moved when the game is run in a different resolution.
	@param node node node to set y-anchor for
	@param anchor constant anchor constant
	
	gui.ANCHOR_NONE
	gui.ANCHOR_TOP
	gui.ANCHOR_BOTTOM
	
	**/
	function set_yanchor(node: node, anchor: any): void

	/**
	Shows the on-display touch keyboard.
	The specified type of keyboard is displayed if it is available on
	the device.
	This function is only available on iOS and Android.  .
	@param type constant keyboard type
	
	gui.KEYBOARD_TYPE_DEFAULT
	gui.KEYBOARD_TYPE_EMAIL
	gui.KEYBOARD_TYPE_NUMBER_PAD
	gui.KEYBOARD_TYPE_PASSWORD
	
	@param autoclose boolean if the keyboard should automatically close when clicking outside
	**/
	function show_keyboard(type: any, autoclose: boolean): void

	/**
	Stops the paricle fx for a gui node
	@param node node node to stop particle fx for
	**/
	function stop_particlefx(node: node): void

}

declare namespace go {

	let EASING_INBACK: any
	let EASING_INBOUNCE: any
	let EASING_INCIRC: any
	let EASING_INCUBIC: any
	let EASING_INELASTIC: any
	let EASING_INEXPO: any
	let EASING_INOUTBACK: any
	let EASING_INOUTBOUNCE: any
	let EASING_INOUTCIRC: any
	let EASING_INOUTCUBIC: any
	let EASING_INOUTELASTIC: any
	let EASING_INOUTEXPO: any
	let EASING_INOUTQUAD: any
	let EASING_INOUTQUART: any
	let EASING_INOUTQUINT: any
	let EASING_INOUTSINE: any
	let EASING_INQUAD: any
	let EASING_INQUART: any
	let EASING_INQUINT: any
	let EASING_INSINE: any
	let EASING_LINEAR: any
	let EASING_OUTBACK: any
	let EASING_OUTBOUNCE: any
	let EASING_OUTCIRC: any
	let EASING_OUTCUBIC: any
	let EASING_OUTELASTIC: any
	let EASING_OUTEXPO: any
	let EASING_OUTINBACK: any
	let EASING_OUTINBOUNCE: any
	let EASING_OUTINCIRC: any
	let EASING_OUTINCUBIC: any
	let EASING_OUTINELASTIC: any
	let EASING_OUTINEXPO: any
	let EASING_OUTINQUAD: any
	let EASING_OUTINQUART: any
	let EASING_OUTINQUINT: any
	let EASING_OUTINSINE: any
	let EASING_OUTQUAD: any
	let EASING_OUTQUART: any
	let EASING_OUTQUINT: any
	let EASING_OUTSINE: any
	let PLAYBACK_LOOP_BACKWARD: any
	let PLAYBACK_LOOP_FORWARD: any
	let PLAYBACK_LOOP_PINGPONG: any
	let PLAYBACK_NONE: any
	let PLAYBACK_ONCE_BACKWARD: any
	let PLAYBACK_ONCE_FORWARD: any
	let PLAYBACK_ONCE_PINGPONG: any
	/**
	This is only supported for numerical properties. If the node property is already being
	animated, that animation will be canceled and replaced by the new one.
	If a complete_function (lua function) is specified, that function will be called when the animation has completed.
	By starting a new animation in that function, several animations can be sequenced together. See the examples for more information.
	 If you call go.animate() from a game object's final() function,
	any passed complete_function will be ignored and never called upon animation completion.
	See the properties guide for which properties can be animated and the animation guide for how to animate them.
	@param url string | hash | url url of the game object or component having the property
	@param property string | hash id of the property to animate
	@param playback constant playback mode of the animation
	
	go.PLAYBACK_ONCE_FORWARD
	go.PLAYBACK_ONCE_BACKWARD
	go.PLAYBACK_ONCE_PINGPONG
	go.PLAYBACK_LOOP_FORWARD
	go.PLAYBACK_LOOP_BACKWARD
	go.PLAYBACK_LOOP_PINGPONG
	
	@param to number | vector3 | vector4 | quaternion target property value
	@param easing constant | vector easing to use during animation. Either specify a constant, see the animation guide for a complete list, or a vmath.vector with a curve
	@param duration number duration of the animation in seconds
	@param [delay] number delay before the animation starts in seconds
	@param [complete_function] function(self, url, property) optional function to call when the animation has completed
	
	self
	
	object The current object.
	
	url
	
	url The game object or component instance for which the property is animated.
	
	property
	
	hash The id of the animated property.
	
	
	**/
	function animate(url: string | hash | url, property: string | hash, playback: any, to: number | vmath.vector3 | vmath.vector4 | vmath.quaternion, easing: any, duration: number, delay?: number, complete_function?: any): void

	/**
	By calling this function, all stored animations of the given property will be canceled.
	See the properties guide for which properties can be animated and the animation guide for how to animate them.
	@param url string | hash | url url of the game object or component having the property
	@param property string | hash ide of the property to animate
	**/
	function cancel_animations(url: string | hash | url, property: string | hash): void

	/**
	
	@param url string | hash | url url of the game object or component having the property
	@param property string | hash id of the property to retrieve
	@return any the value of the specified property
	**/
	function get(url: string | hash | url, property: string | hash): any

	/**
	Returns or constructs an instance identifier. The instance id is a hash
	of the absolute path to the instance.
	
	If path is specified, it can either be absolute or relative to the instance of the calling script.
	If path is not specified, the id of the game object instance the script is attached to will be returned.
	
	@param [path] string path of the instance for which to return the id
	@return hash instance id
	**/
	function get_id(path?: string): hash

	/**
	The position is relative the parent (if any). Use go.get_world_position to retrieve the global world position.
	@param [id] string | hash | url optional id of the game object instance to get the position for, by default the instance of the calling script
	@return vector3 instance position
	**/
	function get_position(id?: string | hash | url): vmath.vector3

	/**
	The rotation is relative to the parent (if any). Use go.get_world_rotation to retrieve the global world position.
	@param [id] string | hash | url optional id of the game object instance to get the rotation for, by default the instance of the calling script
	@return quaternion instance rotation
	**/
	function get_rotation(id?: string | hash | url): vmath.quaternion

	/**
	The scale is relative the parent (if any). Use go.get_world_scale to retrieve the global world 3D scale factor.
	@param [id] string | hash | url optional id of the game object instance to get the scale for, by default the instance of the calling script
	@return vector3 instance scale factor
	**/
	function get_scale(id?: string | hash | url): vmath.vector3

	/**
	The uniform scale is relative the parent (if any). If the underlying scale vector is non-uniform the min element of the vector is returned as the uniform scale factor.
	@param [id] string | hash | url optional id of the game object instance to get the uniform scale for, by default the instance of the calling script
	@return number uniform instance scale factor
	**/
	function get_scale_uniform(id?: string | hash | url): number

	/**
	Use go.get_position to retrieve the position relative to the parent.
	@param [id] string | hash | url optional id of the game object instance to get the world position for, by default the instance of the calling script
	@return vector3 instance world position
	**/
	function get_world_position(id?: string | hash | url): vmath.vector3

	/**
	Use go.get_rotation to retrieve the rotation relative to the parent.
	@param [id] string | hash | url optional id of the game object instance to get the world rotation for, by default the instance of the calling script
	@return quaternion instance world rotation
	**/
	function get_world_rotation(id?: string | hash | url): vmath.quaternion

	/**
	Use go.get_scale to retrieve the 3D scale factor relative to the parent.
	This vector is derived by decomposing the transformation matrix and should be used with care.
	For most cases it should be fine to use go.get_world_scale_uniform instead.
	@param [id] string | hash | url optional id of the game object instance to get the world scale for, by default the instance of the calling script
	@return vector3 instance world 3D scale factor
	**/
	function get_world_scale(id?: string | hash | url): vmath.vector3

	/**
	Use go.get_scale_uniform to retrieve the scale factor relative to the parent.
	@param [id] string | hash | url optional id of the game object instance to get the world scale for, by default the instance of the calling script
	@return number instance world scale factor
	**/
	function get_world_scale_uniform(id?: string | hash | url): number

	/**
	This function defines a property which can then be used in the script through the self-reference.
	The properties defined this way are automatically exposed in the editor in game objects and collections which use the script.
	Note that you can only use this function outside any callback-functions like init and update.
	@param name string the id of the property
	@param value number | hash | url | vector3 | vector4 | quaternion default value of the property. In the case of a url, only the empty constructor msg.url() is allowed
	**/
	function property(name: string, value: hash | url | number | vmath.vector3 | vmath.vector4 | vmath.quaternion): void

	/**
	
	@param url string | hash | url url of the game object or component having the property
	@param property string | hash id of the property to set
	@param value any the value to set
	**/
	function set(url: string | hash | url, property: string | hash, value: any): void

	/**
	The position is relative to the parent (if any). The global world position cannot be manually set.
	@param position vector3 position to set
	@param [id] string | hash | url optional id of the game object instance to set the position for, by default the instance of the calling script
	**/
	function set_position(position: vmath.vector3, id?: string | hash | url): void

	/**
	The rotation is relative to the parent (if any). The global world rotation cannot be manually set.
	@param rotation quaternion rotation to set
	@param [id] string | hash | url optional id of the game object instance to get the rotation for, by default the instance of the calling script
	**/
	function set_rotation(rotation: vmath.quaternion, id?: string | hash | url): void

	/**
	The scale factor is relative to the parent (if any). The global world scale factor cannot be manually set.
	 Physics are currently not affected when setting scale from this function.
	@param scale number | vector3 vector or uniform scale factor, must be greater than 0
	@param [id] string | hash | url optional id of the game object instance to get the scale for, by default the instance of the calling script
	**/
	function set_scale(scale: number | vmath.vector3, id?: string | hash | url): void


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
}

declare namespace profiler {

	/**
	Get the percent of CPU usage by the application, as reported by the OS.
	 This function is not available on  HTML5.
	For some platforms ( Android,  Linux and  Windows), this information is only available
	by default in the debug version of the engine. It can be enabled in release version as well
	by checking track_cpu under profiler in the game.project file.
	(This means that the engine will sample the CPU usage in intervalls during execution even in release mode.)
	@return number of CPU used by the application
	**/
	function get_cpu_usage(): number

	/**
	Get the amount of memory used (resident/working set) by the application in bytes, as reported by the OS.
	 This function is not available on  HTML5.
	The values are gathered from internal OS functions which correspond to the following;
	
	
	
	OS
	Value
	
	
	
	
	 iOS MacOSAndrod Linux
	Resident memory
	
	
	 Windows
	Working set
	
	
	 HTML5
	 Not available
	
	
	
	@return number used by the application
	**/
	function get_memory_usage(): number

}

declare namespace render {

	let BLEND_CONSTANT_ALPHA: any
	let BLEND_CONSTANT_COLOR: any
	let BLEND_DST_ALPHA: any
	let BLEND_DST_COLOR: any
	let BLEND_ONE: any
	let BLEND_ONE_MINUS_CONSTANT_ALPHA: any
	let BLEND_ONE_MINUS_CONSTANT_COLOR: any
	let BLEND_ONE_MINUS_DST_ALPHA: any
	let BLEND_ONE_MINUS_DST_COLOR: any
	let BLEND_ONE_MINUS_SRC_ALPHA: any
	let BLEND_ONE_MINUS_SRC_COLOR: any
	let BLEND_SRC_ALPHA: any
	let BLEND_SRC_ALPHA_SATURATE: any
	let BLEND_SRC_COLOR: any
	let BLEND_ZERO: any
	let BUFFER_COLOR_BIT: any
	let BUFFER_DEPTH_BIT: any
	let BUFFER_STENCIL_BIT: any
	let COMPARE_FUNC_ALWAYS: any
	let COMPARE_FUNC_EQUAL: any
	let COMPARE_FUNC_GEQUAL: any
	let COMPARE_FUNC_GREATER: any
	let COMPARE_FUNC_LEQUAL: any
	let COMPARE_FUNC_LESS: any
	let COMPARE_FUNC_NEVER: any
	let COMPARE_FUNC_NOTEQUAL: any
	let FACE_BACK: any
	let FACE_FRONT: any
	let FACE_FRONT_AND_BACK: any
	let FILTER_LINEAR: any
	let FILTER_NEAREST: any
	let FORMAT_DEPTH: any
	let FORMAT_LUMINANCE: any
	let FORMAT_RGB: any
	let FORMAT_RGBA: any
	let FORMAT_RGBA_DXT1: any
	let FORMAT_RGBA_DXT3: any
	let FORMAT_RGBA_DXT5: any
	let FORMAT_RGB_DXT1: any
	let FORMAT_STENCIL: any
	let STATE_BLEND: any
	let STATE_CULL_FACE: any
	let STATE_DEPTH_TEST: any
	let STATE_POLYGON_OFFSET_FILL: any
	let STATE_STENCIL_TEST: any
	let STENCIL_OP_DECR: any
	let STENCIL_OP_DECR_WRAP: any
	let STENCIL_OP_INCR: any
	let STENCIL_OP_INCR_WRAP: any
	let STENCIL_OP_INVERT: any
	let STENCIL_OP_KEEP: any
	let STENCIL_OP_REPLACE: any
	let STENCIL_OP_ZERO: any
	let WRAP_CLAMP_TO_BORDER: any
	let WRAP_CLAMP_TO_EDGE: any
	let WRAP_MIRRORED_REPEAT: any
	let WRAP_REPEAT: any
	/**
	Clear buffers in the currently enabled render target with specified value.
	@param buffers table table with keys specifying which buffers to clear and values set to clear values. Available keys are:
	
	render.BUFFER_COLOR_BIT
	render.BUFFER_DEPTH_BIT
	render.BUFFER_STENCIL_BIT
	
	**/
	function clear(buffers: any): void

	/**
	Constant buffers are used to set shader program variables and are optionally passed to the render.draw() function. The buffer's constant elements can be indexed like an ordinary Lua table, but you can't iterate over them with pairs() or ipairs().
	@return constant_buffer new constant buffer
	**/
	function constant_buffer(): any

	/**
	Deletes a previously created render target.
	@param render_target render_target render target to delete
	**/
	function delete_render_target(render_target: any): void

	/**
	If a material is currently enabled, disable it.
	The name of the material must be specified in the ".render" resource set
	in the "game.project" setting.
	**/
	function disable_material(): void

	/**
	Disables a previously enabled render target. Subsequent draw operations
	will be drawn to the frame buffer unless another render target is
	enabled.
	@param render_target render_target render target to disable
	**/
	function disable_render_target(render_target: any): void

	/**
	Disables a render state.
	@param state constant state to disable
	
	render.STATE_DEPTH_TEST
	render.STATE_STENCIL_TEST
	render.STATE_BLEND
	render.STATE_ALPHA_TEST ( not available on iOS and Android)
	render.STATE_CULL_FACE
	render.STATE_POLYGON_OFFSET_FILL
	
	**/
	function disable_state(state: any): void

	/**
	Disables a texture unit for a render target that has previourly been enabled.
	@param unit number texture unit to disable
	**/
	function disable_texture(unit: number): void

	/**
	Draws all objects that match a specified predicate. An optional constant buffer can be
	provided to override the default constants. If no constants buffer is provided, a default
	system constants buffer is used containing constants as defined in materials and set through
	*.set_constant() and *.reset_constant() on visual components.
	@param predicate predicate predicate to draw for
	@param [constants] constant_buffer optional constants to use while rendering
	**/
	function draw(predicate: any, constants?: any): void

	/**
	Draws all 3d debug graphics such as lines drawn with "draw_line" messages and physics visualization.
	**/
	function draw_debug3d(): void

	/**
	If another material was already enabled, it will be automatically disabled
	and the specified material is used instead.
	The name of the material must be specified in the ".render" resource set
	in the "game.project" setting.
	@param material_id string | hash material id to enable
	**/
	function enable_material(material_id: string | hash): void

	/**
	Enables a render target. Subsequent draw operations will be to the
	enabled render target until it is disabled.
	@param render_target render_target render target to enable
	**/
	function enable_render_target(render_target: any): void

	/**
	Enables a particular render state. The state will be enabled until disabled.
	@param state constant state to enable
	
	render.STATE_DEPTH_TEST
	render.STATE_STENCIL_TEST
	render.STATE_BLEND
	render.STATE_ALPHA_TEST ( not available on iOS and Android)
	render.STATE_CULL_FACE
	render.STATE_POLYGON_OFFSET_FILL
	
	**/
	function enable_state(state: any): void

	/**
	Sets the specified render target's specified buffer to be
	used as texture with the specified unit.
	A material shader can then use the texture to sample from.
	@param unit number texture unit to enable texture for
	@param render_target render_target render target from which to enable the specified texture unit
	@param buffer_type constant buffer type from which to enable the texture
	
	render.BUFFER_COLOR_BIT
	render.BUFFER_DEPTH_BIT
	render.BUFFER_STENCIL_BIT
	
	**/
	function enable_texture(unit: number, render_target: any, buffer_type: any): void

	/**
	Returns the logical window height that is set in the "game.project" settings.
	Note that the actual window pixel size can change, either by device constraints
	or user input.
	@return number specified window height
	**/
	function get_height(): number

	/**
	Returns the specified buffer height from a render target.
	@param render_target render_target render target from which to retrieve the buffer height
	@param buffer_type constant which type of buffer to retrieve the height from
	
	render.BUFFER_COLOR_BIT
	render.BUFFER_DEPTH_BIT
	render.BUFFER_STENCIL_BIT
	
	@return number the height of the render target buffer texture
	**/
	function get_render_target_height(render_target: any, buffer_type: any): number

	/**
	Returns the specified buffer width from a render target.
	@param render_target render_target render target from which to retrieve the buffer width
	@param buffer_type constant which type of buffer to retrieve the width from
	
	render.BUFFER_COLOR_BIT
	render.BUFFER_DEPTH_BIT
	render.BUFFER_STENCIL_BIT
	
	@return number the width of the render target buffer texture
	**/
	function get_render_target_width(render_target: any, buffer_type: any): number

	/**
	Returns the logical window width that is set in the "game.project" settings.
	Note that the actual window pixel size can change, either by device constraints
	or user input.
	@return number specified window width (number)
	**/
	function get_width(): number

	/**
	Returns the actual physical window height.
	Note that this value might differ from the logical height that is set in the
	"game.project" settings.
	@return number actual window height
	**/
	function get_window_height(): number

	/**
	Returns the actual physical window width.
	Note that this value might differ from the logical width that is set in the
	"game.project" settings.
	@return number actual window width
	**/
	function get_window_width(): number

	/**
	This function returns a new render predicate for objects with materials matching
	the provided material tags. The provided tags are combined into a bit mask
	for the predicate. If multiple tags are provided, the predicate matches materials
	with all tags ANDed together.
	The current limit to the number of tags that can be defined is 32.
	@param tags table table of tags that the predicate should match. The tags can be of either hash or string type
	@return predicate new predicate
	**/
	function predicate(tags: any): any

	/**
	Creates a new render target according to the supplied
	specification table.
	The table should contain keys specifying which buffers should be created
	with what parameters. Each buffer key should have a table value consisting
	of parameters. The following parameter keys are available:
	
	
	
	Key
	Values
	
	
	
	
	format
	render.FORMAT_LUMINANCErender.FORMAT_RGBrender.FORMAT_RGBA render.FORMAT_RGB_DXT1render.FORMAT_RGBA_DXT1render.FORMAT_RGBA_DXT3 render.FORMAT_RGBA_DXT5render.FORMAT_DEPTHrender.FORMAT_STENCIL
	
	
	width
	number
	
	
	height
	number
	
	
	min_filter
	render.FILTER_LINEARrender.FILTER_NEAREST
	
	
	mag_filter
	render.FILTER_LINEARrender.FILTER_NEAREST
	
	
	u_wrap
	render.WRAP_CLAMP_TO_BORDERrender.WRAP_CLAMP_TO_EDGErender.WRAP_MIRRORED_REPEATrender.WRAP_REPEAT
	
	
	v_wrap
	render.WRAP_CLAMP_TO_BORDERrender.WRAP_CLAMP_TO_EDGErender.WRAP_MIRRORED_REPEATrender.WRAP_REPEAT
	
	
	
	@param name string render target name
	@param parameters table table of buffer parameters, see the description for available keys and values
	@return render_target new render target
	**/
	function render_target(name: string, parameters: any): any

	/**
	Specifies the arithmetic used when computing pixel values that are written to the frame
	buffer. In RGBA mode, pixels can be drawn using a function that blends the source RGBA
	pixel values with the destination pixel values already in the frame buffer.
	Blending is initially disabled.
	source_factor specifies which method is used to scale the source color components.
	destination_factor specifies which method is used to scale the destination color
	components.
	Source color components are referred to as (Rs,Gs,Bs,As).
	Destination color components are referred to as (Rd,Gd,Bd,Ad).
	The color specified by setting the blendcolor is referred to as (Rc,Gc,Bc,Ac).
	The source scale factor is referred to as (sR,sG,sB,sA).
	The destination scale factor is referred to as (dR,dG,dB,dA).
	The color values have integer values between 0 and (kR,kG,kB,kA), where kc = 2mc - 1 and mc is the number of bitplanes for that color. I.e for 8 bit color depth, color values are between 0 and 255.
	Available factor constants and corresponding scale factors:
	
	
	
	Factor constant
	Scale factor (fR,fG,fB,fA)
	
	
	
	
	render.BLEND_ZERO
	(0,0,0,0)
	
	
	render.BLEND_ONE
	(1,1,1,1)
	
	
	render.BLEND_SRC_COLOR
	(Rs/kR,Gs/kG,Bs/kB,As/kA)
	
	
	render.BLEND_ONE_MINUS_SRC_COLOR
	(1,1,1,1) - (Rs/kR,Gs/kG,Bs/kB,As/kA)
	
	
	render.BLEND_DST_COLOR
	(Rd/kR,Gd/kG,Bd/kB,Ad/kA)
	
	
	render.BLEND_ONE_MINUS_DST_COLOR
	(1,1,1,1) - (Rd/kR,Gd/kG,Bd/kB,Ad/kA)
	
	
	render.BLEND_SRC_ALPHA
	(As/kA,As/kA,As/kA,As/kA)
	
	
	render.BLEND_ONE_MINUS_SRC_ALPHA
	(1,1,1,1) - (As/kA,As/kA,As/kA,As/kA)
	
	
	render.BLEND_DST_ALPHA
	(Ad/kA,Ad/kA,Ad/kA,Ad/kA)
	
	
	render.BLEND_ONE_MINUS_DST_ALPHA
	(1,1,1,1) - (Ad/kA,Ad/kA,Ad/kA,Ad/kA)
	
	
	render.BLEND_CONSTANT_COLOR
	(Rc,Gc,Bc,Ac)
	
	
	render.BLEND_ONE_MINUS_CONSTANT_COLOR
	(1,1,1,1) - (Rc,Gc,Bc,Ac)
	
	
	render.BLEND_CONSTANT_ALPHA
	(Ac,Ac,Ac,Ac)
	
	
	render.BLEND_ONE_MINUS_CONSTANT_ALPHA
	(1,1,1,1) - (Ac,Ac,Ac,Ac)
	
	
	render.BLEND_SRC_ALPHA_SATURATE
	(i,i,i,1) where i = min(As, kA - Ad) /kA
	
	
	
	The blended RGBA values of a pixel comes from the following equations:
	
	Rd = min(kR, Rs * sR + Rd * dR)
	Gd = min(kG, Gs * sG + Gd * dR)
	Bd = min(kB, Bs * sB + Bd * dB)
	Ad = min(kA, As * sB + Ad * dA)
	
	Blend function (render.BLEND_SRC_ALPHA, render.BLEND_ONE_MINUS_SRC_ALPHA) is useful for
	drawing with transparency when the drawn objects are sorted from farthest to nearest.
	It is also useful for drawing antialiased points and lines in arbitrary order.
	@param source_factor constant source factor
	@param destination_factor constant destination factor
	**/
	function set_blend_func(source_factor: any, destination_factor: any): void

	/**
	Specifies whether the individual color components in the frame buffer is enabled for writing (true) or disabled (false). For example, if blue is false, nothing is written to the blue component of any pixel in any of the color buffers, regardless of the drawing operation attempted. Note that writing are either enabled or disabled for entire color components, not the individual bits of a component.
	The component masks are all initially true.
	@param red boolean red mask
	@param green boolean green mask
	@param blue boolean blue mask
	@param alpha boolean alpha mask
	**/
	function set_color_mask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void

	/**
	Specifies whether front- or back-facing polygons can be culled
	when polygon culling is enabled. Polygon culling is initially disabled.
	If mode is render.FACE_FRONT_AND_BACK, no polygons are drawn, but other
	primitives such as points and lines are drawn. The initial value for
	face_type is render.FACE_BACK.
	@param face_type constant face type
	
	render.FACE_FRONT
	render.FACE_BACK
	render.FACE_FRONT_AND_BACK
	
	**/
	function set_cull_face(face_type: any): void

	/**
	Specifies the function that should be used to compare each incoming pixel
	depth value with the value present in the depth buffer.
	The comparison is performed only if depth testing is enabled and specifies
	the conditions under which a pixel will be drawn.
	Function constants:
	
	render.COMPARE_FUNC_NEVER (never passes)
	render.COMPARE_FUNC_LESS (passes if the incoming depth value is less than the stored value)
	render.COMPARE_FUNC_LEQUAL (passes if the incoming depth value is less than or equal to the stored value)
	render.COMPARE_FUNC_GREATER (passes if the incoming depth value is greater than the stored value)
	render.COMPARE_FUNC_GEQUAL (passes if the incoming depth value is greater than or equal to the stored value)
	render.COMPARE_FUNC_EQUAL (passes if the incoming depth value is equal to the stored value)
	render.COMPARE_FUNC_NOTEQUAL (passes if the incoming depth value is not equal to the stored value)
	render.COMPARE_FUNC_ALWAYS (always passes)
	
	The depth function is initially set to render.COMPARE_FUNC_LESS.
	@param func constant depth test function, see the description for available values
	**/
	function set_depth_func(func: any): void

	/**
	Specifies whether the depth buffer is enabled for writing. The supplied mask governs
	if depth buffer writing is enabled (true) or disabled (false).
	The mask is initially true.
	@param depth boolean depth mask
	**/
	function set_depth_mask(depth: boolean): void

	/**
	Sets the scale and units used to calculate depth values.
	If render.STATE_POLYGON_OFFSET_FILL is enabled, each fragment's depth value
	is offset from its interpolated value (depending on the depth value of the
	appropriate vertices). Polygon offset can be used when drawing decals, rendering
	hidden-line images etc.
	factor specifies a scale factor that is used to create a variable depth
	offset for each polygon. The initial value is 0.
	units is multiplied by an implementation-specific value to create a
	constant depth offset. The initial value is 0.
	The value of the offset is computed as factor &times; DZ + r &times; units
	DZ is a measurement of the depth slope of the polygon which is the change in z (depth)
	values divided by the change in either x or y coordinates, as you traverse a polygon.
	The depth values are in window coordinates, clamped to the range [0, 1].
	r is the smallest value that is guaranteed to produce a resolvable difference.
	It's value is an implementation-specific constant.
	The offset is added before the depth test is performed and before the
	value is written into the depth buffer.
	@param factor number polygon offset factor
	@param units number polygon offset units
	**/
	function set_polygon_offset(factor: number, units: number): void

	/**
	Sets the projection matrix to use when rendering.
	@param matrix matrix4 projection matrix
	**/
	function set_projection(matrix: vmath.matrix4): void

	/**
	
	@param render_target render_target render target to set size for
	@param width number new render target width
	@param height number new render target height
	**/
	function set_render_target_size(render_target: any, width: number, height: number): void

	/**
	Stenciling is similar to depth-buffering as it enables and disables drawing on a
	per-pixel basis. First, GL drawing primitives are drawn into the stencil planes.
	Second, geometry and images are rendered but using the stencil planes to mask out
	where to draw.
	The stencil test discards a pixel based on the outcome of a comparison between the
	reference value ref and the corresponding value in the stencil buffer.
	func specifies the comparison function. See the table below for values.
	The initial value is render.COMPARE_FUNC_ALWAYS.
	ref specifies the reference value for the stencil test. The value is clamped to
	the range [0, 2n-1], where n is the number of bitplanes in the stencil buffer.
	The initial value is 0.
	mask is ANDed with both the reference value and the stored stencil value when the test
	is done. The initial value is all 1's.
	Function constant:
	
	render.COMPARE_FUNC_NEVER (never passes)
	render.COMPARE_FUNC_LESS (passes if (ref &amp; mask) &lt; (stencil &amp; mask))
	render.COMPARE_FUNC_LEQUAL (passes if (ref &amp; mask) &lt;= (stencil &amp; mask))
	render.COMPARE_FUNC_GREATER (passes if (ref &amp; mask) &gt; (stencil &amp; mask))
	render.COMPARE_FUNC_GEQUAL (passes if (ref &amp; mask) &gt;= (stencil &amp; mask))
	render.COMPARE_FUNC_EQUAL (passes if (ref &amp; mask) = (stencil &amp; mask))
	render.COMPARE_FUNC_NOTEQUAL (passes if (ref &amp; mask) != (stencil &amp; mask))
	render.COMPARE_FUNC_ALWAYS (always passes)
	
	@param func constant stencil test function, see the description for available values
	@param ref number reference value for the stencil test
	@param mask number mask that is ANDed with both the reference value and the stored stencil value when the test is done
	**/
	function set_stencil_func(func: any, ref: number, mask: number): void

	/**
	The stencil mask controls the writing of individual bits in the stencil buffer.
	The least significant n bits of the parameter mask, where n is the number of
	bits in the stencil buffer, specify the mask.
	Where a 1 bit appears in the mask, the corresponding
	bit in the stencil buffer can be written. Where a 0 bit appears in the mask,
	the corresponding bit in the stencil buffer is never written.
	The mask is initially all 1's.
	@param mask number stencil mask
	**/
	function set_stencil_mask(mask: number): void

	/**
	The stencil test discards a pixel based on the outcome of a comparison between the
	reference value ref and the corresponding value in the stencil buffer.
	To control the test, call render.set_stencil_func.
	This function takes three arguments that control what happens to the stored stencil
	value while stenciling is enabled. If the stencil test fails, no change is made to the
	pixel's color or depth buffers, and sfail specifies what happens to the stencil buffer
	contents.
	Operator constants:
	
	render.STENCIL_OP_KEEP (keeps the current value)
	render.STENCIL_OP_ZERO (sets the stencil buffer value to 0)
	render.STENCIL_OP_REPLACE (sets the stencil buffer value to ref, as specified by render.set_stencil_func)
	render.STENCIL_OP_INCR (increments the stencil buffer value and clamp to the maximum representable unsigned value)
	render.STENCIL_OP_INCR_WRAP (increments the stencil buffer value and wrap to zero when incrementing the maximum representable unsigned value)
	render.STENCIL_OP_DECR (decrements the current stencil buffer value and clamp to 0)
	render.STENCIL_OP_DECR_WRAP (decrements the current stencil buffer value and wrap to the maximum representable unsigned value when decrementing zero)
	render.STENCIL_OP_INVERT (bitwise inverts the current stencil buffer value)
	
	dppass and dpfail specify the stencil buffer actions depending on whether subsequent
	depth buffer tests succeed (dppass) or fail (dpfail).
	The initial value for all operators is render.STENCIL_OP_KEEP.
	@param sfail constant action to take when the stencil test fails
	@param dpfail constant the stencil action when the stencil test passes
	@param dppass constant the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled
	**/
	function set_stencil_op(sfail: any, dpfail: any, dppass: any): void

	/**
	Sets the view matrix to use when rendering.
	@param matrix matrix4 view matrix to set
	**/
	function set_view(matrix: vmath.matrix4): void

	/**
	Set the render viewport to the specified rectangle.
	@param x number left corner
	@param y number bottom corner
	@param width number viewport width
	@param height number viewport height
	**/
	function set_viewport(x: number, y: number, width: number, height: number): void

}

declare namespace resource {

	let LIVEUPDATE_ENGINE_VERSION_MISMATCH: any
	let LIVEUPDATE_INVALID_RESOURCE: any
	let LIVEUPDATE_OK: any
	let LIVEUPDATE_SCHEME_MISMATCH: any
	let LIVEUPDATE_SIGNATURE_MISMATCH: any
	let LIVEUPDATE_VERSION_MISMATCH: any
	let TEXTURE_FORMAT_LUMINANCE: any
	let TEXTURE_FORMAT_RGB: any
	let TEXTURE_FORMAT_RGBA: any
	let TEXTURE_TYPE_2D: any
	/**
	Return a reference to the Manifest that is currently loaded.
	@return number reference to the Manifest that is currently loaded
	**/
	function get_current_manifest(): number

	/**
	Loads the resource data for a specific resource.
	@param path string | hash The path to the resource
	@return buffer Returns the buffer stored on disc
	**/
	function load(path: string | hash): any

	/**
	Sets the resource data for a specific resource
	@param path string | hash The path to the resource
	@param buffer buffer The buffer of precreated data, suitable for the intended resource type
	**/
	function set(path: string | hash, buffer: any): void

	/**
	Sets the pixel data for a specific texture.
	@param path hash | string The path to the resource
	@param table table A table containing info about the texture. Supported entries:
	
	type
	number The texture type. Supported values:
	
	
	resource.TEXTURE_TYPE_2D
	
	
	width
	number The width of the texture (in pixels)
	height
	number The width of the texture (in pixels)
	format
	number The texture format. Supported values:
	
	
	resource.TEXTURE_FORMAT_LUMINANCE
	resource.TEXTURE_FORMAT_RGB
	resource.TEXTURE_FORMAT_RGBA
	
	@param buffer buffer The buffer of precreated pixel data
	 Currently, only 1 mipmap is generated.
	**/
	function set_texture(path: string | hash, table: any, buffer: any): void

	/**
	Create a new manifest from a buffer. The created manifest is verified
	by ensuring that the manifest was signed using the bundled public/private
	key-pair during the bundle process and that the manifest supports the current
	running engine version. Once the manifest is verified it is stored on device.
	The next time the engine starts (or is rebooted) it will look for the stored
	manifest before loading resources. Storing a new manifest allows the
	developer to update the game, modify existing resources, or add new
	resources to the game through LiveUpdate.
	@param manifest_buffer string the binary data that represents the manifest
	@param callback function(self, status) the callback function
	executed once the engine has attempted to store the manifest.
	
	self
	object The current object.
	status
	constant the status of the store operation:
	
	
	resource.LIVEUPATE_OK
	resource.LIVEUPATE_INVALID_RESOURCE
	resource.LIVEUPATE_VERSION_MISMATCH
	resource.LIVEUPATE_ENGINE_VERSION_MISMATCH
	resource.LIVEUPATE_SIGNATURE_MISMATCH
	
	**/
	function store_manifest(manifest_buffer: string, callback: any): void

	/**
	add a resource to the data archive and runtime index. The resource will be verified
	internally before being added to the data archive.
	@param manifest_reference number The manifest to check against.
	@param data string The resource data that should be stored.
	@param hexdigest string The expected hash for the resource,
	retrieved through collectionproxy.missing_resources.
	@param callback function(self, hexdigest, status) The callback
	function that is executed once the engine has been attempted to store
	the resource.
	
	self
	object The current object.
	hexdigest
	string The hexdigest of the resource.
	status
	boolean Whether or not the resource was successfully stored.
	
	**/
	function store_resource(manifest_reference: number, data: string, hexdigest: string, callback: any): void

}

declare namespace sys {

	let NETWORK_CONNECTED: any
	let NETWORK_CONNECTED_CELLULAR: any
	let NETWORK_DISCONNECTED: any
	/**
	Returns a table with application information for the requested app.
	 On iOS, the app_string is an url scheme for the app that is queried. Your
	game needs to list the schemes that are queried in an LSApplicationQueriesSchemes array
	in a custom "Info.plist".
	 On Android, the app_string is the package identifier for the app.
	@param app_string string platform specific string with application package or query, see above for details.
	@return table table with application information in the following fields:
	
	installed
	boolean true if the application is installed, false otherwise.
	
	**/
	function get_application_info(app_string: string): any

	/**
	Get config value from the game.project configuration file.
	@param key string key to get value for. The syntax is SECTION.KEY
	@return string config value as a string. nil if the config key doesn't exists
	**/
	function get_config(key: string): string

	/**
	Get config value from the game.project configuration file with default value
	@param key string key to get value for. The syntax is SECTION.KEY
	@param default_value string default value to return if the value does not exist
	@return string config value as a string. default_value if the config key does not exist
	**/
	function get_config(key: string, default_value: string): string

	/**
	  Returns the current network connectivity status
	on mobile platforms.
	On desktop, this function always return sys.NETWORK_CONNECTED.
	@return constant network connectivity status:
	
	sys.NETWORK_DISCONNECTED (no network connection is found)
	sys.NETWORK_CONNECTED_CELLULAR (connected through mobile cellular)
	sys.NETWORK_CONNECTED (otherwise, Wifi)
	
	**/
	function get_connectivity(): any

	/**
	Returns a table with engine information.
	@return table table with engine information in the following fields:
	
	version
	string The current Defold engine version, i.e. "1.2.96"
	version_sha1
	string The SHA1 for the current engine build, i.e. "0060183cce2e29dbd09c85ece83cbb72068ee050"
	is_debug
	boolean If the engine is a debug or release version
	
	**/
	function get_engine_info(): any

	/**
	Returns an array of tables with information on network interfaces.
	@return table an array of tables. Each table entry contain the following fields:
	
	name
	string Interface name
	address
	string IP address.  might be nil if not available.
	mac
	string Hardware MAC address.  might be nil if not available.
	up
	boolean true if the interface is up (available to transmit and receive data), false otherwise.
	running
	boolean true if the interface is running, false otherwise.
	
	**/
	function get_ifaddrs(): any

	/**
	The save-file path is operating system specific and is typically located under the user's home directory.
	@param application_id string user defined id of the application, which helps define the location of the save-file
	@param file_name string file-name to get path for
	@return string path to save-file
	**/
	function get_save_file(application_id: string, file_name: string): string

	/**
	Returns a table with system information.
	@return table table with system information in the following fields:
	
	device_model
	string  Only available on iOS and Android.
	manufacturer
	string  Only available on iOS and Android.
	system_name
	string The system OS name: "Darwin", "Linux", "Windows", "HTML5", "Android" or "iPhone OS"
	system_version
	string The system OS version.
	api_version
	string The API version on the system.
	language
	string Two character ISO-639 format, i.e. "en".
	device_language
	string Two character ISO-639 format (i.e. "sr") and, if applicable, followed by a dash (-) and an ISO 15924 script code (i.e. "sr-Cyrl" or "sr-Latn"). Reflects the device preferred language.
	territory
	string Two character ISO-3166 format, i.e. "US".
	gmt_offset
	number The current offset from GMT (Greenwich Mean Time), in minutes.
	device_ident
	string  "identifierForVendor" on iOS.  "android_id" on Android.
	ad_ident
	string  "advertisingIdentifier" on iOS.  advertising ID provided by Google Play on Android.
	ad_tracking_enabled
	boolean true if ad tracking is enabled, false otherwise.
	user_agent
	string  The HTTP user agent, i.e. "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8"
	
	**/
	function get_sys_info(): any

	/**
	If the file exists, it must have been created by sys.save to be loaded.
	@param filename string file to read from
	@return table lua table, which is empty if the file could not be found
	**/
	function load(filename: string): any

	/**
	Loads a custom resource. Specify the full filename of the resource that you want
	to load. When loaded, the file data is returned as a string.
	If loading fails, the function returns nil.
	In order for the engine to include custom resources in the build process, you need
	to specify them in the "custom_resources" key in your "game.project" settings file.
	You can specify single resource files or directories. If a directory is is included
	in the resource list, all files and directories in that directory is recursively
	included:
	For example "main/data/,assets/level_data.json".
	@param filename string resource to load, full path
	@return string loaded data, or nil if the resource could not be loaded
	**/
	function load_resource(filename: string): string

	/**
	Open URL in default application, typically a browser
	@param url string url to open
	@return boolean a boolean indicating if the url could be opened or not
	**/
	function open_url(url: string): boolean

	/**
	The table can later be loaded by sys.load.
	Use sys.get_save_file to obtain a valid location for the file.
	Internally, this function uses a workspace buffer sized output file sized 512kb.
	This size reflects the output file size which must not exceed this limit.
	Additionally, the total number of rows that any one table may contain is limited to 65536
	(i.e. a 16 bit range). When tables are used to represent arrays, the values of
	keys are permitted to fall within a 32 bit range, supporting sparse arrays, however
	the limit on the total number of rows remains in effect.
	@param filename string file to write to
	@param table table lua table to save
	@return boolean a boolean indicating if the table could be saved or not
	**/
	function save(filename: string, table: any): boolean

	/**
	Sets the host that is used to check for network connectivity against.
	@param host string hostname to check against
	**/
	function set_connectivity_host(host: string): void

	/**
	Set the Lua error handler function.
	The error handler is a function which is called whenever a lua runtime error occurs.
	@param error_handler function(source, message, traceback) the function to be called on error
	
	source
	string The runtime context of the error. Currently, this is always "lua".
	message
	string The source file, line number and error message.
	traceback
	string The stack traceback.
	
	**/
	function set_error_handler(error_handler: any): void

}

declare namespace window_ {

	let DIMMING_OFF: any
	let DIMMING_ON: any
	let DIMMING_UNKNOWN: any
	let WINDOW_EVENT_FOCUS_GAINED: any
	let WINDOW_EVENT_FOCUS_LOST: any
	let WINDOW_EVENT_RESIZED: any
	/**
	  Returns the current dimming mode set on a mobile device.
	The dimming mode specifies whether or not a mobile device should dim the screen after a period without user interaction.
	On platforms that does not support dimming, window.DIMMING_UNKNOWN is always returned.
	@return constant The mode for screen dimming
	
	window.DIMMING_UNKNOWN
	window.DIMMING_ON
	window.DIMMING_OFF
	
	**/
	function get_dim_mode(): any

	/**
	  Sets the dimming mode on a mobile device.
	The dimming mode specifies whether or not a mobile device should dim the screen after a period without user interaction. The dimming mode will only affect the mobile device while the game is in focus on the device, but not when the game is running in the background.
	This function has no effect on platforms that does not support dimming.
	@param mode constant The mode for screen dimming
	
	window.DIMMING_ON
	window.DIMMING_OFF
	
	**/
	function set_dim_mode(mode: any): void

	/**
	Sets a window event listener.
	@param callback function(self, event, data) A callback which receives info about window events. Pass an empty function if you no longer wish to receive callbacks.
	
	self
	object The calling script
	event
	constant The type of event. Can be one of these:
	
	
	window.WINDOW_EVENT_FOCUS_LOST
	window.WINDOW_EVENT_FOCUS_GAINED
	window.WINDOW_EVENT_RESIZED
	
	
	data
	table The callback value data is a table which currently holds these values
	
	
	number width: The width of a resize event. nil otherwise.
	number height: The height of a resize event. nil otherwise.
	
	**/
	function set_listener(callback: any): void

}

declare namespace collectionfactory {

	let STATUS_LOADED: any
	let STATUS_LOADING: any
	let STATUS_UNLOADED: any
	/**
	The URL identifies the collectionfactory component that should do the spawning.
	Spawning is instant, but spawned game objects get their first update calls the following frame. The supplied parameters for position, rotation and scale
	will be applied to the whole collection when spawned.
	Script properties in the created game objects can be overridden through
	a properties-parameter table. The table should contain game object ids
	(hash) as keys and property tables as values to be used when initiating each
	spawned game object.
	See go.property for more information on script properties.
	The function returns a table that contains a key for each game object
	id (hash), as addressed if the collection file was top level, and the
	corresponding spawned instance id (hash) as value with a unique path
	prefix added to each instance.
	 Calling collectionfactory.create create on a collection factory that is marked as dynamic without having loaded resources
	using collectionfactory.load will synchronously load and create resources which may affect application performance.
	@param url string | hash | url the collection factory component to be used
	@param [position] vector3 position to assign to the newly spawned collection
	@param [rotation] quaternion rotation to assign to the newly spawned collection
	@param [properties] table table of script properties to propagate to any new game object instances
	@param [scale] number uniform scaling to apply to the newly spawned collection (must be greater than 0).
	@return table a table mapping the id:s from the collection to the new instance id:s
	**/
	function create(url: string | hash | url, position?: vmath.vector3, rotation?: vmath.quaternion, properties?: any, scale?: number): any

	/**
	This returns status of the collection factory.
	Calling this function when the factory is not marked as dynamic loading always returns COMP_COLLECTION_FACTORY_STATUS_LOADED.
	@param [url] string | hash | url the collection factory component to get status from
	@return constant status of the collection factory component
	
	collectionfactory.STATUS_UNLOADED
	collectionfactory.STATUS_LOADING
	collectionfactory.STATUS_LOADED
	
	**/
	function get_status(url?: string | hash | url): any

	/**
	Resources loaded are referenced by the collection factory component until the existing (parent) collection is destroyed or collectionfactory.unload is called.
	Calling this function when the factory is not marked as dynamic loading does nothing.
	@param [url] string | hash | url the collection factory component to load
	@param [complete_function] function(self, url, result)) function to call when resources are loaded.
	
	self
	object The current object.
	url
	url url of the collection factory component
	result
	boolean True if resource were loaded successfully
	
	**/
	function load(url?: string | hash | url, complete_function?: any): void

	/**
	This decreases the reference count for each resource loaded with collectionfactory.load. If reference is zero, the resource is destroyed.
	Calling this function when the factory is not marked as dynamic loading does nothing.
	@param [url] string | hash | url the collection factory component to unload
	**/
	function unload(url?: string | hash | url): void

}

declare namespace collectionproxy {

	/**
	return an indexed table of missing resources for a collection proxy. Each
	entry is a hexadecimal string that represents the data of the specific
	resource. This representation corresponds with the filename for each
	individual resource that is exported when you bundle an application with
	LiveUpdate functionality. It should be considered good practise to always
	check whether or not there are any missing resources in a collection proxy
	before attempting to load the collection proxy.
	@param collectionproxy url the collectionproxy to check for missing
	resources.
	@return table the missing resources
	**/
	function missing_resources(collectionproxy: url): any

}

declare namespace physics {

	/**
	Ray casts are used to test for intersections against collision objects in the physics world.
	Collision objects of types kinematic, dynamic and static are tested against. Trigger objects
	do not intersect with ray casts.
	Which collision objects to hit is filtered by their collision groups and can be configured
	through groups.
	The actual ray cast will be performed during the physics-update.
	
	If an object is hit, the result will be reported via a ray_cast_response message.
	If there is no object hit, the result will be reported via a ray_cast_missed message.
	
	@param from vector3 the world position of the start of the ray
	@param to vector3 the world position of the end of the ray
	@param groups table a lua table containing the hashed groups for which to test collisions against
	@param [request_id] number a number between 0-255 that will be sent back in the response for identification, 0 by default
	**/
	function ray_cast(from: vmath.vector3, to: vmath.vector3, groups: any, request_id?: number): void

}

declare namespace factory {

	let STATUS_LOADED: any
	let STATUS_LOADING: any
	let STATUS_UNLOADED: any
	/**
	The URL identifies which factory should create the game object.
	If the game object is created inside of the frame (e.g. from an update callback), the game object will be created instantly, but none of its component will be updated in the same frame.
	Properties defined in scripts in the created game object can be overridden through the properties-parameter below.
	See go.property for more information on script properties.
	 Calling factory.create on a factory that is marked as dynamic without having loaded resources
	using factory.load will synchronously load and create resources which may affect application performance.
	@param url string | hash | url the factory that should create a game object.
	@param [position] vector3 the position of the new game object, the position of the game object calling factory.create() is used by default, or if the value is nil.
	@param [rotation] quaternion the rotation of the new game object, the rotation of the game object calling factory.create() is is used by default, or if the value is nil.
	@param [properties] table the properties defined in a script attached to the new game object.
	@param [scale] number | vector3 the scale of the new game object (must be greater than 0), the scale of the game object containing the factory is used by default, or if the value is nil
	@return hash the global id of the spawned game object
	**/
	function create(url: string | hash | url, position?: vmath.vector3, rotation?: vmath.quaternion, properties?: any, scale?: number | vmath.vector3): hash

	/**
	This returns status of the factory.
	Calling this function when the factory is not marked as dynamic loading always returns
	factory.STATUS_LOADED.
	@param [url] string | hash | url the factory component to get status from
	@return constant status of the factory component
	
	factory.STATUS_UNLOADED
	factory.STATUS_LOADING
	factory.STATUS_LOADED
	
	**/
	function get_status(url?: string | hash | url): any

	/**
	Resources are referenced by the factory component until the existing (parent) collection is destroyed or factory.unload is called.
	Calling this function when the factory is not marked as dynamic loading does nothing.
	@param [url] string | hash | url the factory component to load
	@param [complete_function] function(self, url, result)) function to call when resources are loaded.
	
	self
	object The current object.
	url
	url url of the factory component
	result
	boolean True if resources were loaded successfully
	
	**/
	function load(url?: string | hash | url, complete_function?: any): void

	/**
	This decreases the reference count for each resource loaded with factory.load. If reference is zero, the resource is destroyed.
	Calling this function when the factory is not marked as dynamic loading does nothing.
	@param [url] string | hash | url the factory component to unload
	**/
	function unload(url?: string | hash | url): void

}

declare namespace label {

	/**
	Gets the text metrics from a label component
	@param url string | hash | url the label to get the (unscaled) metrics from
	@return table a table with the following fields:
	
	width
	height
	max_ascent
	max_descent
	
	function init(self)
	    local metrics = label.get_text_metrics(&quot;#label&quot;)
	    pprint(metrics)
	end
	
	**/
	function get_text_metrics(url: string | hash | url): any

	/**
	Sets the text of a label component
	@param url string | hash | url the label that should have a constant set
	@param text string the text
	**/
	function set_text(url: string | hash | url, text: string): void

}

declare namespace model {

	/**
	Cancels all animation on a model component.
	@param url string | hash | url the model for which to cancel the animation
	**/
	function cancel(url: string | hash | url): void

	/**
	Gets the id of the game object that corresponds to a model skeleton bone.
	The returned game object can be used for parenting and transform queries.
	This function has complexity O(n), where n is the number of bones in the model skeleton.
	Game objects corresponding to a model skeleton bone can not be individually deleted.
	@param url string | hash | url the model to query
	@param bone_id string | hash id of the corresponding bone
	@return hash id of the game object
	**/
	function get_go(url: string | hash | url, bone_id: string | hash): hash

	/**
	Plays an animation on a model component with specified playback
	mode and parameters.
	An optional completion callback function can be provided that will be called when
	the animation has completed playing. If no function is provided,
	a model_animation_done message is sent to the script that started the animation.
	 The callback is not called (or message sent) if the animation is
	cancelled with model.cancel. The callback is called (or message sent) only for
	animations that play with the following playback modes:
	
	go.PLAYBACK_ONCE_FORWARD
	go.PLAYBACK_ONCE_BACKWARD
	go.PLAYBACK_ONCE_PINGPONG
	
	@param url string | hash | url the model for which to play the animation
	@param anim_id string | hash id of the animation to play
	@param playback constant playback mode of the animation
	
	go.PLAYBACK_ONCE_FORWARD
	go.PLAYBACK_ONCE_BACKWARD
	go.PLAYBACK_ONCE_PINGPONG
	go.PLAYBACK_LOOP_FORWARD
	go.PLAYBACK_LOOP_BACKWARD
	go.PLAYBACK_LOOP_PINGPONG
	
	@param [play_properties] table optional table with properties
	Play properties table:
	
	blend_duration
	number Duration of a linear blend between the current and new animation.
	offset
	number The normalized initial value of the animation cursor when the animation starts playing.
	playback_rate
	number The rate with which the animation will be played. Must be positive.
	
	@param [complete_function] function(self, message_id, message, sender)) function to call when the animation has completed.
	
	self
	object The current object.
	message_id
	hash The name of the completion message, "model_animation_done".
	message
	table Information about the completion:
	
	
	hash animation_id - the animation that was completed.
	constant playback - the playback mode for the animation.
	
	
	sender
	url The invoker of the callback: the model component.
	
	**/
	function play_anim(url: string | hash | url, anim_id: string | hash, playback: any, play_properties?: any, complete_function?: any): void

	/**
	Resets a shader constant for a model component.
	The constant must be defined in the material assigned to the model.
	Resetting a constant through this function implies that the value defined in the material will be used.
	Which model to reset a constant for is identified by the URL.
	@param url string | hash | url the model that should have a constant reset.
	@param constant string | hash name of the constant.
	**/
	function reset_constant(url: string | hash | url, constant: string | hash): void

	/**
	Sets a shader constant for a model component.
	The constant must be defined in the material assigned to the model.
	Setting a constant through this function will override the value set for that constant in the material.
	The value will be overridden until model.reset_constant is called.
	Which model to set a constant for is identified by the URL.
	@param url string | hash | url the model that should have a constant set
	@param constant string | hash name of the constant
	@param value vector4 value of the constant
	**/
	function set_constant(url: string | hash | url, constant: string | hash, value: vmath.vector4): void

}

declare namespace particlefx {

	let EMITTER_STATE_POSTSPAWN: any
	let EMITTER_STATE_PRESPAWN: any
	let EMITTER_STATE_SLEEPING: any
	let EMITTER_STATE_SPAWNING: any
	/**
	Starts playing a particle FX component.
	Particle FX started this way need to be manually stopped through particlefx.stop().
	Which particle FX to play is identified by the URL.
	@param url string | hash | url the particle fx that should start playing.
	@param [emitter_state_function] function(self, id, emitter, state) optional callback function that will be called when an emitter attached to this particlefx changes state.
	
	self
	object The current object
	id
	hash The id of the particle fx component
	emitter
	hash The id of the emitter
	state
	constant the new state of the emitter:
	
	
	particlefx.EMITTER_STATE_SLEEPING
	particlefx.EMITTER_STATE_PRESPAWN
	particlefx.EMITTER_STATE_SPAWNING
	particlefx.EMITTER_STATE_POSTSPAWN
	
	**/
	function play(url: string | hash | url, emitter_state_function?: any): void

	/**
	Resets a shader constant for a particle FX component emitter.
	The constant must be defined in the material assigned to the emitter.
	Resetting a constant through this function implies that the value defined in the material will be used.
	Which particle FX to reset a constant for is identified by the URL.
	@param url string | hash | url the particle FX that should have a constant reset
	@param emitter string | hash the id of the emitter
	@param constant string | hash the name of the constant
	**/
	function reset_constant(url: string | hash | url, emitter: string | hash, constant: string | hash): void

	/**
	Sets a shader constant for a particle FX component emitter.
	The constant must be defined in the material assigned to the emitter.
	Setting a constant through this function will override the value set for that constant in the material.
	The value will be overridden until particlefx.reset_constant is called.
	Which particle FX to set a constant for is identified by the URL.
	@param url string | hash | url the particle FX that should have a constant set
	@param emitter string | hash the id of the emitter
	@param constant string | hash the name of the constant
	@param value vector4 the value of the constant
	**/
	function set_constant(url: string | hash | url, emitter: string | hash, constant: string | hash, value: vmath.vector4): void

	/**
	Stops a particle FX component from playing.
	Stopping a particle FX does not remove already spawned particles.
	Which particle FX to stop is identified by the URL.
	@param url string | hash | url the particle fx that should stop playing
	**/
	function stop(url: string | hash | url): void

}

declare namespace sound {

	/**
	Get mixer group gain
	 Note that gain is in linear scale, between 0 and 1.
	To get the dB value from the gain, use the formula 20 * log(gain).
	Inversely, to find the linear value from a dB value, use the formula
	10db/20.
	@param group string | hash group name
	@return number gain in linear scale
	**/
	function get_group_gain(group: string | hash): number

	/**
	Get a mixer group name as a string.
	 This function is to be used for debugging and
	development tooling only. The function does a reverse hash lookup, which does not
	return a proper string value when the game is built in release mode.
	@param group string | hash group name
	@return string group name
	**/
	function get_group_name(group: string | hash): string

	/**
	Get a table of all mixer group names (hashes).
	@return table table of mixer group names
	**/
	function get_groups(): any

	/**
	Get peak value from mixer group.
	 Note that gain is in linear scale, between 0 and 1.
	To get the dB value from the gain, use the formula 20 * log(gain).
	Inversely, to find the linear value from a dB value, use the formula
	10db/20.
	Also note that the returned value might be an approximation and in particular
	the effective window might be larger than specified.
	@param group string | hash group name
	@param window number window length in seconds
	@return number peak value for left channel
	@return number peak value for right channel
	**/
	function get_peak(group: string | hash, window: number): number

	/**
	Get RMS (Root Mean Square) value from mixer group. This value is the
	square root of the mean (average) value of the squared function of
	the instantaneous values.
	For instance: for a sinewave signal with a peak gain of -1.94 dB (0.8 linear),
	the RMS is 0.8 &times; 1/sqrt(2) which is about 0.566.
	 Note the returned value might be an approximation and in particular
	the effective window might be larger than specified.
	@param group string | hash group name
	@param window number window length in seconds
	@return number RMS value for left channel
	@return number RMS value for right channel
	**/
	function get_rms(group: string | hash, window: number): number

	/**
	Checks if background music is playing, e.g. from iTunes.
	 On non mobile platforms,
	this function always return false.
	@return boolean true if music is playing, otherwise false.
	**/
	function is_music_playing(): boolean

	/**
	Checks if a phone call is active. If there is an active phone call all
	other sounds will be muted until the phone call is finished.
	 On non mobile platforms,
	this function always return false.
	@return boolean true if there is an active phone call, false otherwise.
	**/
	function is_phone_call_active(): boolean

	/**
	Make the sound component play its sound. Multiple voices is supported. The limit is set to 32 voices per sound component.
	 Note that gain is in linear scale, between 0 and 1.
	To get the dB value from the gain, use the formula 20 * log(gain).
	Inversely, to find the linear value from a dB value, use the formula
	10db/20.
	@param url string | hash | url the sound that should play
	@param [play_properties] 
	table optional table with properties:
	delay
	number delay in seconds before the sound starts playing, default is 0.
	gain
	number sound gain between 0 and 1, default is 1. The final gain of the sound will be a combination of this gain, the group gain and the master gain.
	
	**/
	function play(url: string | hash | url, play_properties?: any): void

	/**
	Set gain on all active playing voices of a sound.
	 Note that gain is in linear scale, between 0 and 1.
	To get the dB value from the gain, use the formula 20 * log(gain).
	Inversely, to find the linear value from a dB value, use the formula
	10db/20.
	@param url string | hash | url the sound to set the gain of
	@param [gain] number sound gain between 0 and 1. The final gain of the sound will be a combination of this gain, the group gain and the master gain.
	**/
	function set_gain(url: string | hash | url, gain?: number): void

	/**
	Set mixer group gain
	 Note that gain is in linear scale, between 0 and 1.
	To get the dB value from the gain, use the formula 20 * log(gain).
	Inversely, to find the linear value from a dB value, use the formula
	10db/20.
	@param group string | hash group name
	@param gain number gain in linear scale
	**/
	function set_group_gain(group: string | hash, gain: number): void

	/**
	Stop playing all active voices
	@param url string | hash | url the sound that should stop
	**/
	function stop(url: string | hash | url): void

}

declare namespace spine {

	/**
	Cancels all running animations on a specified spine model component.
	@param url string | hash | url the spine model for which to cancel the animation
	**/
	function cancel(url: string | hash | url): void

	/**
	Returns the id of the game object that corresponds to a specified skeleton bone.
	The returned game object can be used for parenting and transform queries.
	This function has complexity O(n), where n is the number of bones in the spine model skeleton.
	Game objects corresponding to a spine model skeleton bone can not be individually deleted.
	@param url string | hash | url the spine model to query
	@param bone_id string | hash id of the corresponding bone
	@return hash id of the game object
	**/
	function get_go(url: string | hash | url, bone_id: string | hash): hash

	/**
	Plays a specified animation on a spine model component with specified playback
	mode and parameters.
	An optional completion callback function can be provided that will be called when
	the animation has completed playing. If no function is provided,
	a spine_animation_done message is sent to the script that started the animation.
	 The callback is not called (or message sent) if the animation is
	cancelled with spine.cancel. The callback is called (or message sent) only for
	animations that play with the following playback modes:
	
	go.PLAYBACK_ONCE_FORWARD
	go.PLAYBACK_ONCE_BACKWARD
	go.PLAYBACK_ONCE_PINGPONG
	
	@param url string | hash | url the spine model for which to play the animation
	@param anim_id string | hash id of the animation to play
	@param playback constant playback mode of the animation
	
	go.PLAYBACK_ONCE_FORWARD
	go.PLAYBACK_ONCE_BACKWARD
	go.PLAYBACK_ONCE_PINGPONG
	go.PLAYBACK_LOOP_FORWARD
	go.PLAYBACK_LOOP_BACKWARD
	go.PLAYBACK_LOOP_PINGPONG
	
	@param [play_properties] table optional table with properties:
	
	blend_duration
	number duration of a linear blend between the current and new animation.
	offset
	number the normalized initial value of the animation cursor when the animation starts playing.
	playback_rate
	number the rate with which the animation will be played. Must be positive.
	
	@param [complete_function] function(self, message_id, message, sender)) function to call when the animation has completed.
	
	self
	object The current object.
	message_id
	hash The name of the completion message, "spine_animation_done".
	message
	table Information about the completion:
	
	
	hash animation_id - the animation that was completed.
	constant playback - the playback mode for the animation.
	
	
	sender
	url The invoker of the callback: the spine model component.
	
	**/
	function play_anim(url: string | hash | url, anim_id: string | hash, playback: any, play_properties?: any, complete_function?: any): void

	/**
	Resets a shader constant for a spine model component.
	The constant must be defined in the material assigned to the spine model.
	Resetting a constant through this function implies that the value defined in the material will be used.
	Which spine model to reset a constant for is identified by the URL.
	@param url string | hash | url the spine model that should have a constant reset
	@param constant string | hash name of the constant
	**/
	function reset_constant(url: string | hash | url, constant: string | hash): void

	/**
	Resets any previously set IK target of a spine model, the position will be reset
	to the original position from the spine scene.
	@param url string | hash | url the spine model containing the object
	@param ik_constraint_id string | hash id of the corresponding IK constraint object
	**/
	function reset_ik_target(url: string | hash | url, ik_constraint_id: string | hash): void

	/**
	Sets a shader constant for a spine model component.
	The constant must be defined in the material assigned to the spine model.
	Setting a constant through this function will override the value set for that constant in the material.
	The value will be overridden until spine.reset_constant is called.
	Which spine model to set a constant for is identified by the URL.
	@param url string | hash | url the spine model that should have a constant set
	@param constant string | hash name of the constant
	@param value vector4 value of the constant
	**/
	function set_constant(url: string | hash | url, constant: string | hash, value: vmath.vector4): void

	/**
	Sets a game object as target position of an inverse kinematic (IK) object. As the
	target game object's position is updated, the constraint object is updated with the
	new position.
	@param url string | hash | url the spine model containing the object
	@param ik_constraint_id string | hash id of the corresponding IK constraint object
	@param target_url string | hash | url target game object
	**/
	function set_ik_target(url: string | hash | url, ik_constraint_id: string | hash, target_url: string | hash | url): void

	/**
	Sets a static (vector3) target position of an inverse kinematic (IK) object.
	@param url string | hash | url the spine model containing the object
	@param ik_constraint_id string | hash id of the corresponding IK constraint object
	@param position vector3 target position
	**/
	function set_ik_target_position(url: string | hash | url, ik_constraint_id: string | hash, position: vmath.vector3): void

	/**
	Sets the spine skin on a spine model.
	@param url string | hash | url the spine model for which to set skin
	@param spine_skin string | hash spine skin id
	@param [spine_slot] string | hash optional slot id to only change a specific slot
	**/
	function set_skin(url: string | hash | url, spine_skin: string | hash, spine_slot?: string | hash): void

}

declare namespace sprite {

	/**
	Play an animation on a sprite component from its tile set
	An optional completion callback function can be provided that will be called when
	the animation has completed playing. If no function is provided,
	a animation_done message is sent to the script that started the animation.
	@param url string | hash | url the sprite that should play the animation
	@param id hash name hash of the animation to play
	@param [complete_function] function(self, message_id, message, sender)) function to call when the animation has completed.
	
	self
	object The current object.
	message_id
	hash The name of the completion message, "animation_done".
	message
	table Information about the completion:
	
	
	number current_tile - the current tile of the sprite.
	hash id - id of the animation that was completed.
	
	
	sender
	url The invoker of the callback: the sprite component.
	
	**/
	function play_flipbook(url: string | hash | url, id: hash, complete_function?: any): void

	/**
	Resets a shader constant for a sprite component.
	The constant must be defined in the material assigned to the sprite.
	Resetting a constant through this function implies that the value defined in the material will be used.
	Which sprite to reset a constant for is identified by the URL.
	@param url string | hash | url the sprite that should have a constant reset
	@param constant string | hash name of the constant
	**/
	function reset_constant(url: string | hash | url, constant: string | hash): void

	/**
	Sets a shader constant for a sprite component.
	The constant must be defined in the material assigned to the sprite.
	Setting a constant through this function will override the value set for that constant in the material.
	The value will be overridden until sprite.reset_constant is called.
	Which sprite to set a constant for is identified by the URL.
	@param url string | hash | url the sprite that should have a constant set
	@param constant string | hash name of the constant
	@param value vector4 of the constant
	**/
	function set_constant(url: string | hash | url, constant: string | hash, value: vmath.vector4): void

	/**
	Sets horizontal flipping of the provided sprite's animations.
	The sprite is identified by its URL.
	If the currently playing animation is flipped by default, flipping it again will make it appear like the original texture.
	@param url string | hash | url the sprite that should flip its animations
	@param flip boolean true if the sprite should flip its animations, false if not
	**/
	function set_hflip(url: string | hash | url, flip: boolean): void

	/**
	Sets vertical flipping of the provided sprite's animations.
	The sprite is identified by its URL.
	If the currently playing animation is flipped by default, flipping it again will make it appear like the original texture.
	@param url string | hash | url the sprite that should flip its animations
	@param flip boolean true if the sprite should flip its animations, false if not
	**/
	function set_vflip(url: string | hash | url, flip: boolean): void

}

declare namespace tilemap {

	/**
	Get the bounds for a tile map. This function returns multiple values:
	The lower left corner index x and y coordinates (1-indexed),
	the tile map width and the tile map height.
	The resulting values take all tile map layers into account, meaning that
	the bounds are calculated as if all layers were collapsed into one.
	@param url string | hash | url the tile map
	@return number x coordinate of the bottom left corner
	@return number y coordinate of the bottom left corner
	@return number number of columns (width) in the tile map
	@return number number of rows (height) in the tile map
	**/
	function get_bounds(url: string | hash | url): number

	/**
	Get the tile set at the specified position in the tilemap.
	The position is identified by the tile index starting at origo
	with index 1, 1. (see tilemap.set_tile())
	Which tile map and layer to query is identified by the URL and the
	layer name parameters.
	@param url string | hash | url the tile map
	@param layer string | hash name of the layer for the tile
	@param x number x-coordinate of the tile
	@param y number y-coordinate of the tile
	@return number index of the tile
	**/
	function get_tile(url: string | hash | url, layer: string | hash, x: number, y: number): number

	/**
	Resets a shader constant for a tile map component.
	The constant must be defined in the material assigned to the tile map.
	Resetting a constant through this function implies that the value defined in the material will be used.
	Which tile map to reset a constant for is identified by the URL.
	@param url string | hash | url the tile map that should have a constant reset
	@param constant string | hash name of the constant
	**/
	function reset_constant(url: string | hash | url, constant: string | hash): void

	/**
	Sets a shader constant for a tile map component.
	The constant must be defined in the material assigned to the tile map.
	Setting a constant through this function will override the value set for that constant in the material.
	The value will be overridden until tilemap.reset_constant is called.
	Which tile map to set a constant for is identified by the URL.
	@param url string | hash | url the tile map that should have a constant set
	@param constant string | hash name of the constant
	@param value vector4 value of the constant
	**/
	function set_constant(url: string | hash | url, constant: string | hash, value: vmath.vector4): void

	/**
	Replace a tile in a tile map with a new tile.
	The coordinates of the tiles are indexed so that the "first" tile just
	above and to the right of origo has coordinates 1,1.
	Tiles to the left of and below origo are indexed 0, -1, -2 and so forth.
	
	+-------+-------+------+------+
	|  0,3  |  1,3  | 2,3  | 3,3  |
	+-------+-------+------+------+
	|  0,2  |  1,2  | 2,2  | 3,2  |
	+-------+-------+------+------+
	|  0,1  |  1,1  | 2,1  | 3,1  |
	+-------O-------+------+------+
	|  0,0  |  1,0  | 2,0  | 3,0  |
	+-------+-------+------+------+
	
	
	The coordinates must be within the bounds of the tile map as it were created.
	That is, it is not possible to extend the size of a tile map by setting tiles outside the edges.
	To clear a tile, set the tile to number 0. Which tile map and layer to manipulate is identified by the URL and the layer name parameters.
	@param url string | hash | url the tile map
	@param layer string | hash name of the layer for the tile
	@param x number x-coordinate of the tile
	@param y number y-coordinate of the tile
	@param tile number index of new tile to set
	@param [h-flipped] boolean optional if the tile should be horizontally flipped
	@param [v-flipped] boolean optional i the tile should be vertically flipped
	**/
	function set_tile(url: string | hash | url, layer: string | hash, x: number, y: number, tile: number, h_flipped?: boolean, v_flipped?: boolean): void

}

declare namespace buffer {

	let VALUE_TYPE_FLOAT32: any
	let VALUE_TYPE_INT16: any
	let VALUE_TYPE_INT32: any
	let VALUE_TYPE_INT64: any
	let VALUE_TYPE_INT8: any
	let VALUE_TYPE_UINT16: any
	let VALUE_TYPE_UINT32: any
	let VALUE_TYPE_UINT64: any
	let VALUE_TYPE_UINT8: any
	/**
	Copy all data streams from one buffer to another, element wise.
	 Each of the source streams must have a matching stream in the
	destination buffer. The streams must match in both type and size.
	The source and destination buffer can be the same.
	@param dst buffer the destination buffer
	@param dstoffset number the offset to start copying data to
	@param src buffer the source data buffer
	@param srcoffset number the offset to start copying data from
	@param count number the number of elements to copy
	**/
	function copy_buffer(dst: any, dstoffset: number, src: any, srcoffset: number, count: number): void

	/**
	Copy a specified amount of data from one stream to another.
	 The value type and size must match between source and destination streams.
	The source and destination streams can be the same.
	@param dst bufferstream the destination stream
	@param dstoffset number the offset to start copying data to (measured in value type)
	@param src bufferstream the source data stream
	@param srcoffset number the offset to start copying data from (measured in value type)
	@param count number the number of values to copy (measured in value type)
	**/
	function copy_stream(dst: any, dstoffset: number, src: any, srcoffset: number, count: number): void

	/**
	Create a new data buffer containing a specified set of streams. A data buffer
	can contain one or more streams with typed data. This is useful for managing
	compound data, for instance a vertex buffer could contain separate streams for
	vertex position, color, normal etc.
	@param element_count number The number of elements the buffer should hold
	@param declaration table A table where each entry (table) describes a stream
	
	hash | string name: The name of the stream
	constant type: The data type of the stream
	number count: The number of values each element should hold
	
	**/
	function create(element_count: number, declaration: any): void

	/**
	Get a copy of all the bytes from a specified stream as a Lua string.
	@param buffer buffer the source buffer
	@param stream_name hash the name of the stream
	@return string the buffer data as a Lua string
	**/
	function get_bytes(buffer: any, stream_name: hash): string

	/**
	Get a specified stream from a buffer.
	@param buffer buffer the buffer to get the stream from
	@param stream_name hash | string the stream name
	@return bufferstream the data stream
	**/
	function get_stream(buffer: any, stream_name: string | hash): any

}

declare namespace html5 {

	/**
	Executes the supplied string as JavaScript inside the browser.
	A call to this function is blocking, the result is returned as-is, as a string.
	(Internally this will execute the string using the eval() JavaScript function.)
	@param code string Javascript code to run
	@return string result as string
	**/
	function run(code: string): string

}

declare namespace http {

	/**
	Perform a HTTP/HTTPS request.
	 If no timeout value is passed, the configuration value "network.http_timeout" is used. If that is not set, the timeout value is 0 (which blocks indefinitely).
	@param url string target url
	@param method string HTTP/HTTPS method, e.g. "GET", "PUT", "POST" etc.
	@param callback function(self, id, response) response callback function
	
	self
	object The current object
	id
	hash Internal message identifier. Do not use!
	response
	table The response data. Contains the fields:
	
	
	number status: the status of the response
	string response: the response data
	table headers: all the returned headers
	
	@param [headers] table optional table with custom headers
	@param [post_data] string optional data to send
	@param [options] table optional table with request parameters. Supported entries:
	
	number timeout: timeout in seconds
	
	**/
	function request(url: string, method: string, callback: any, headers?: any, post_data?: string, options?: any): void

}

declare namespace image {

	let TYPE_LUMINANCE: any
	let TYPE_RGB: any
	let TYPE_RGBA: any
	/**
	Load image (PNG or JPEG) from buffer.
	@param buffer string image data buffer
	@param [premult] boolean optional flag if alpha should be premultiplied. Defaults to false
	@return table object or nil if loading fails. The object is a table with the following fields:
	
	number width: image width
	number height: image height
	constant type: image type
	image.TYPE_RGB
	image.TYPE_RGBA
	image.TYPE_LUMINANCE
	
	
	string buffer: the raw image data
	
	**/
	function load(buffer: string, premult?: boolean): any

}

declare namespace json {

	/**
	Decode a string of JSON data into a Lua table.
	A Lua error is raised for syntax errors.
	@param json string json data
	@return table decoded json
	**/
	function decode(json: string): any

}

declare namespace msg {

	/**
	Post a message to a receiving URL. The most common case is to send messages
	to a component. If the component part of the receiver is omitted, the message
	is broadcast to all components in the game object.
	The following receiver shorthands are available:
	
	"." the current game object
	"#" the current component
	
	 There is a 2 kilobyte limit to the message parameter table size.
	@param receiver string | url | hash | nil The receiver must be a string in URL-format, a URL object, a hashed string or nil.
	@param message_id string | hash The id must be a string or a hashed string.
	@param [message] table a lua table with message parameters to send.
	**/
	function post(receiver: string | hash | url, message_id: string | hash, message?: any): void

	/**
	This is equivalent to msg.url(nil) or msg.url("#"), which creates an url to the current
	script component.
	@return url a new URL
	**/
	function url(): url

	/**
	The format of the string must be [socket:][path][#fragment], which is similar to a HTTP URL.
	When addressing instances:
	
	socket is the name of a valid world (a collection)
	path is the id of the instance, which can either be relative the instance of the calling script or global
	fragment would be the id of the desired component
	
	In addition, the following shorthands are available:
	
	"." the current game object
	"#" the current component
	
	@param urlstring string string to create the url from
	@return url a new URL
	**/
	function url(urlstring: string): url

	/**
	
	@param [socket] string | hash socket of the URL
	@param [path] string | hash path of the URL
	@param [fragment] string | hash fragment of the URL
	@return url a new URL
	**/
	function url(socket?: string | hash, path?: string | hash, fragment?: string | hash): url

}

declare namespace timer {

	let INVALID_TIMER_HANDLE: any
	/**
	You may cancel a timer from inside a timer callback.
	Cancelling a timer that is already executed or cancelled is safe.
	@param handle the timer handle returned by timer.delay()
	@return if the timer was active, false if the timer is already cancelled / complete
	**/
	function cancel(handle: any): any

	/**
	Adds a timer and returns a unique handle
	You may create more timers from inside a timer callback.
	Using a delay of 0 will result in a timer that triggers at the next frame just before
	script update functions.
	If you want a timer that triggers on each frame, set delay to 0.0f and repeat to true.
	Timers created within a script will automatically die when the script is deleted.
	@param delay time interval in seconds
	@param repeat true = repeat timer until cancel, false = one-shot timer
	@param callback function(self, handle, time_elapsed) timer callback function
	
	self
	object The current object
	handle
	number The handle of the timer
	time_elapsed
	number The elapsed time - on first trigger it is time since timer.delay call, otherwise time since last trigger
	
	@return identifier for the create timer, returns timer.INVALID_TIMER_HANDLE if the timer can not be created
	**/
	function delay(delay: any, repeat: any, callback: any): any

}

declare namespace vmath {

	/**
	Calculates the conjugate of a quaternion. The result is a
	quaternion with the same magnitudes but with the sign of
	the imaginary (vector) parts changed:
	q* = [w, -v]
	@param q1 quatertion quaternion of which to calculate the conjugate
	@return quatertion the conjugate
	**/
	function conj(q1: any): any

	/**
	Given two linearly independent vectors P and Q, the cross product,
	P &#x00D7; Q, is a vector that is perpendicular to both P and Q and
	therefore normal to the plane containing them.
	If the two vectors have the same direction (or have the exact
	opposite direction from one another, i.e. are not linearly independent)
	or if either one has zero length, then their cross product is zero.
	@param v1 vector3 first vector
	@param v2 vector3 second vector
	@return vector3 a new vector representing the cross product
	**/
	function cross(v1: vmath.vector3, v2: vmath.vector3): vmath.vector3

	/**
	The returned value is a scalar defined as:
	P &#x22C5; Q = |P| |Q| cos &#x03B8;
	where &#x03B8; is the angle between the vectors P and Q.
	
	If the dot product is positive then the angle between the vectors is below 90 degrees.
	If the dot product is zero the vectors are perpendicular (at right-angles to each other).
	If the dot product is negative then the angle between the vectors is more than 90 degrees.
	
	@param v1 vector3 | vector4 first vector
	@param v2 vector3 | vector4 second vector
	@return number dot product
	**/
	function dot(v1: vmath.vector3 | vmath.vector4, v2: vmath.vector3 | vmath.vector4): number

	/**
	The resulting matrix is the inverse of the supplied matrix.
	 For ortho-normal matrices, e.g. regular object transformation,
	use vmath.ortho_inv() instead.
	The specialized inverse for ortho-normalized matrices is much faster
	than the general inverse.
	@param m1 matrix4 matrix to invert
	@return matrix4 inverse of the supplied matrix
	**/
	function inv(m1: vmath.matrix4): vmath.matrix4

	/**
	Returns the length of the supplied vector or quaternion.
	If you are comparing the lengths of vectors or quaternions, you should compare
	the length squared instead as it is slightly more efficient to calculate
	(it eliminates a square root calculation).
	@param v vector3 | vector4 | quat value of which to calculate the length
	@return number length
	**/
	function length(v: vmath.vector3 | vmath.vector4): number

	/**
	Returns the squared length of the supplied vector or quaternion.
	@param v vector3 | vector4 | quat value of which to calculate the squared length
	@return number squared length
	**/
	function length_sqr(v: vmath.vector3 | vmath.vector4): number

	/**
	Linearly interpolate between two vectors. The function
	treats the vectors as positions and interpolates between
	the positions in a straight line. Lerp is useful to describe
	transitions from one place to another over time.
	 The function does not clamp t between 0 and 1.
	@param t number interpolation parameter, 0-1
	@param v1 vector3 | vector4 vector to lerp from
	@param v2 vector3 | vector4 vector to lerp to
	@return vector3 | vector4 the lerped vector
	**/
	function lerp(t: number, v1: vmath.vector3 | vmath.vector4, v2: vmath.vector3 | vmath.vector4): vmath.vector3 | vmath.vector4

	/**
	Linearly interpolate between two quaternions. Linear
	interpolation of rotations are only useful for small
	rotations. For interpolations of arbitrary rotations,
	vmath.slerp yields much better results.
	 The function does not clamp t between 0 and 1.
	@param t number interpolation parameter, 0-1
	@param q1 quaternion quaternion to lerp from
	@param q2 quaternion quaternion to lerp to
	@return quaternion the lerped quaternion
	**/
	function lerp(t: number, q1: vmath.quaternion, q2: vmath.quaternion): vmath.quaternion

	/**
	Linearly interpolate between two values. Lerp is useful
	to describe transitions from one value to another over time.
	 The function does not clamp t between 0 and 1.
	@param t number interpolation parameter, 0-1
	@param n1 number number to lerp from
	@param n2 number number to lerp to
	@return number the lerped number
	**/
	function lerp(t: number, n1: number, n2: number): number

	/**
	The resulting identity matrix describes a transform with
	no translation or rotation.
	@return matrix4 identity matrix
	**/
	function matrix4(): vmath.matrix4

	/**
	Creates a new matrix with all components set to the
	corresponding values from the supplied matrix. I.e.
	the function creates a copy of the given matrix.
	@param m1 matrix4 existing matrix
	@return matrix4 matrix which is a copy of the specified matrix
	**/
	function matrix4(m1: vmath.matrix4): vmath.matrix4

	/**
	The resulting matrix describes a rotation around the axis by the specified angle.
	@param v vector3 axis
	@param angle number angle in radians
	@return matrix4 matrix represented by axis and angle
	**/
	function matrix4_axis_angle(v: vmath.vector3, angle: number): vmath.matrix4

	/**
	The resulting matrix describes the same rotation as the quaternion, but does not have any translation (also like the quaternion).
	@param q quaternion quaternion to create matrix from
	@return matrix4 matrix represented by quaternion
	**/
	function matrix4_from_quat(q: vmath.quaternion): vmath.matrix4

	/**
	Constructs a frustum matrix from the given values. The left, right,
	top and bottom coordinates of the view cone are expressed as distances
	from the center of the near clipping plane. The near and far coordinates
	are expressed as distances from the tip of the view frustum cone.
	@param left number coordinate for left clipping plane
	@param right number coordinate for right clipping plane
	@param bottom number coordinate for bottom clipping plane
	@param top number coordinate for top clipping plane
	@param near number coordinate for near clipping plane
	@param far number coordinate for far clipping plane
	@return matrix4 matrix representing the frustum
	**/
	function matrix4_frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): vmath.matrix4

	/**
	The resulting matrix is created from the supplied look-at parameters.
	This is useful for constructing a view matrix for a camera or
	rendering in general.
	@param eye vector3 eye position
	@param look_at vector3 look-at position
	@param up vector3 up vector
	@return matrix4 look-at matrix
	**/
	function matrix4_look_at(eye: vmath.vector3, look_at: vmath.vector3, up: vmath.vector3): vmath.matrix4

	/**
	Creates an orthographic projection matrix.
	This is useful to construct a projection matrix for a camera or rendering in general.
	@param left number coordinate for left clipping plane
	@param right number coordinate for right clipping plane
	@param bottom number coordinate for bottom clipping plane
	@param top number coordinate for top clipping plane
	@param near number coordinate for near clipping plane
	@param far number coordinate for far clipping plane
	@return matrix4 orthographic projection matrix
	**/
	function matrix4_orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): vmath.matrix4

	/**
	Creates a perspective projection matrix.
	This is useful to construct a projection matrix for a camera or rendering in general.
	@param fov number angle of the full vertical field of view in radians
	@param aspect number aspect ratio
	@param near number coordinate for near clipping plane
	@param far number coordinate for far clipping plane
	@return matrix4 perspective projection matrix
	**/
	function matrix4_perspective(fov: number, aspect: number, near: number, far: number): vmath.matrix4

	/**
	The resulting matrix describes a rotation around the x-axis
	by the specified angle.
	@param angle number angle in radians around x-axis
	@return matrix4 matrix from rotation around x-axis
	**/
	function matrix4_rotation_x(angle: number): vmath.matrix4

	/**
	The resulting matrix describes a rotation around the y-axis
	by the specified angle.
	@param angle number angle in radians around y-axis
	@return matrix4 matrix from rotation around y-axis
	**/
	function matrix4_rotation_y(angle: number): vmath.matrix4

	/**
	The resulting matrix describes a rotation around the z-axis
	by the specified angle.
	@param angle number angle in radians around z-axis
	@return matrix4 matrix from rotation around z-axis
	**/
	function matrix4_rotation_z(angle: number): vmath.matrix4

	/**
	Performs an element wise multiplication between two vectors of the same type
	The returned value is a vector defined as (e.g. for a vector3):
	v = vmath.mul_per_elem(a, b) = vmath.vector3(a.x * b.x, a.y * b.y, a.z * b.z)
	@param v1 vector3 | vector4 first vector
	@param v2 vector3 | vector4 second vector
	@return vector3 | vector4 multiplied vector
	**/
	function mul_per_elem(v1: vmath.vector3 | vmath.vector4, v2: vmath.vector3 | vmath.vector4): vmath.vector3 | vmath.vector4

	/**
	Normalizes a vector, i.e. returns a new vector with the same
	direction as the input vector, but with length 1.
	 The length of the vector must be above 0, otherwise a
	division-by-zero will occur.
	@param v1 vector3 | vector4 | quat vector to normalize
	@return vector3 | vector4 | quat new normalized vector
	**/
	function normalize(v1: vmath.vector3 | vmath.vector4): vmath.vector3 | vmath.vector4

	/**
	The resulting matrix is the inverse of the supplied matrix.
	The supplied matrix has to be an ortho-normal matrix, e.g.
	describe a regular object transformation.
	 For matrices that are not ortho-normal
	use the general inverse vmath.inv() instead.
	@param m1 matrix4 ortho-normalized matrix to invert
	@return matrix4 inverse of the supplied matrix
	**/
	function ortho_inv(m1: vmath.matrix4): vmath.matrix4

	/**
	Calculates the extent the projection of the first vector onto the second.
	The returned value is a scalar p defined as:
	p = |P| cos &#x03B8; / |Q|
	where &#x03B8; is the angle between the vectors P and Q.
	@param v1 vector3 vector to be projected on the second
	@param v2 vector3 vector onto which the first will be projected, must not have zero length
	@return number the projected extent of the first vector onto the second
	**/
	function project(v1: vmath.vector3, v2: vmath.vector3): number

	/**
	Creates a new identity quaternion. The identity
	quaternion is equal to:
	vmath.quat(0, 0, 0, 1)
	@return quaternion new identity quaternion
	**/
	function quat(): vmath.quaternion

	/**
	Creates a new quaternion with all components set to the
	corresponding values from the supplied quaternion. I.e.
	This function creates a copy of the given quaternion.
	@param q1 quaternion existing quaternion
	@return quaternion new quaternion
	**/
	function quat(q1: vmath.quaternion): vmath.quaternion

	/**
	Creates a new quaternion with the components set
	according to the supplied parameter values.
	@param x number x coordinate
	@param y number y coordinate
	@param z number z coordinate
	@param w number w coordinate
	@return quaternion new quaternion
	**/
	function quat(x: number, y: number, z: number, w: number): vmath.quaternion

	/**
	The resulting quaternion describes a rotation of angle
	radians around the axis described by the unit vector v.
	@param v vector3 axis
	@param angle number angle
	@return quaternion quaternion representing the axis-angle rotation
	**/
	function quat_axis_angle(v: vmath.vector3, angle: number): vmath.quaternion

	/**
	The resulting quaternion describes the rotation from the
	identity quaternion (no rotation) to the coordinate system
	as described by the given x, y and z base unit vectors.
	@param x vector3 x base vector
	@param y vector3 y base vector
	@param z vector3 z base vector
	@return quaternion quaternion representing the rotation of the specified base vectors
	**/
	function quat_basis(x: vmath.vector3, y: vmath.vector3, z: vmath.vector3): vmath.quaternion

	/**
	The resulting quaternion describes the rotation that,
	if applied to the first vector, would rotate the first
	vector to the second. The two vectors must be unit
	vectors (of length 1).
	 The result is undefined if the two vectors point in opposite directions
	@param v1 vector3 first unit vector, before rotation
	@param v2 vector3 second unit vector, after rotation
	@return quaternion quaternion representing the rotation from first to second vector
	**/
	function quat_from_to(v1: vmath.vector3, v2: vmath.vector3): vmath.quaternion

	/**
	The resulting quaternion describes a rotation of angle
	radians around the x-axis.
	@param angle number angle in radians around x-axis
	@return quaternion quaternion representing the rotation around the x-axis
	**/
	function quat_rotation_x(angle: number): vmath.quaternion

	/**
	The resulting quaternion describes a rotation of angle
	radians around the y-axis.
	@param angle number angle in radians around y-axis
	@return quaternion quaternion representing the rotation around the y-axis
	**/
	function quat_rotation_y(angle: number): vmath.quaternion

	/**
	The resulting quaternion describes a rotation of angle
	radians around the z-axis.
	@param angle number angle in radians around z-axis
	@return quaternion quaternion representing the rotation around the z-axis
	**/
	function quat_rotation_z(angle: number): vmath.quaternion

	/**
	Returns a new vector from the supplied vector that is
	rotated by the rotation described by the supplied
	quaternion.
	@param q quatertion quaternion
	@param v1 vector3 vector to rotate
	@return vector3 the rotated vector
	**/
	function rotate(q: any, v1: vmath.vector3): vmath.vector3

	/**
	Spherically interpolates between two vectors. The difference to
	lerp is that slerp treats the vectors as directions instead of
	positions in space.
	The direction of the returned vector is interpolated by the angle
	and the magnitude is interpolated between the magnitudes of the
	from and to vectors.
	 Slerp is computationally more expensive than lerp.
	The function does not clamp t between 0 and 1.
	@param t number interpolation parameter, 0-1
	@param v1 vector3 | vector4 vector to slerp from
	@param v2 vector3 | vector4 vector to slerp to
	@return vector3 | vector4 the slerped vector
	**/
	function slerp(t: number, v1: vmath.vector3 | vmath.vector4, v2: vmath.vector3 | vmath.vector4): vmath.vector3 | vmath.vector4

	/**
	Slerp travels the torque-minimal path maintaining constant
	velocity, which means it travels along the straightest path along
	the rounded surface of a sphere. Slerp is useful for interpolation
	of rotations.
	Slerp travels the torque-minimal path, which means it travels
	along the straightest path the rounded surface of a sphere.
	 The function does not clamp t between 0 and 1.
	@param t number interpolation parameter, 0-1
	@param q1 quaternion quaternion to slerp from
	@param q2 quaternion quaternion to slerp to
	@return quaternion the slerped quaternion
	**/
	function slerp(t: number, q1: vmath.quaternion, q2: vmath.quaternion): vmath.quaternion

	/**
	Creates a vector of arbitrary size. The vector is initialized
	with numeric values from a table.
	 The table values are converted to floating point
	values. If a value cannot be converted, a 0 is stored in that
	value position in the vector.
	@param t table table of numbers
	@return vector new vector
	**/
	function vector(t: any): any

	/**
	Creates a new zero vector with all components set to 0.
	@return vector3 new zero vector
	**/
	function vector3(): vmath.vector3

	/**
	Creates a new vector with all components set to the
	supplied scalar value.
	@param n number scalar value to splat
	@return vector3 new vector
	**/
	function vector3(n: number): vmath.vector3

	/**
	Creates a new vector with all components set to the
	corresponding values from the supplied vector. I.e.
	This function creates a copy of the given vector.
	@param v1 vector3 existing vector
	@return vector3 new vector
	**/
	function vector3(v1: vmath.vector3): vmath.vector3

	/**
	Creates a new vector with the components set to the
	supplied values.
	@param x number x coordinate
	@param y number y coordinate
	@param z number z coordinate
	@return vector3 new vector
	**/
	function vector3(x: number, y: number, z: number): vmath.vector3

	/**
	Creates a new zero vector with all components set to 0.
	@return vector4 new zero vector
	**/
	function vector4(): vmath.vector4

	/**
	Creates a new vector with all components set to the
	supplied scalar value.
	@param n number scalar value to splat
	@return vector4 new vector
	**/
	function vector4(n: number): vmath.vector4

	/**
	Creates a new vector with all components set to the
	corresponding values from the supplied vector. I.e.
	This function creates a copy of the given vector.
	@param v1 vector4 existing vector
	@return vector4 new vector
	**/
	function vector4(v1: vmath.vector4): vmath.vector4

	/**
	Creates a new vector with the components set to the
	supplied values.
	@param x number x coordinate
	@param y number y coordinate
	@param z number z coordinate
	@param w number w coordinate
	@return vector4 new vector
	**/
	function vector4(x: number, y: number, z: number, w: number): vmath.vector4

}

declare namespace zlib {

	/**
	A lua error is raised is on error
	@param buf string buffer to deflate
	@return string deflated buffer
	**/
	function deflate(buf: string): string

	/**
	A lua error is raised is on error
	@param buf string buffer to inflate
	@return string inflated buffer
	**/
	function inflate(buf: string): string

}

declare namespace facebook {

	let AUDIENCE_EVERYONE: any
	let AUDIENCE_FRIENDS: any
	let AUDIENCE_NONE: any
	let AUDIENCE_ONLYME: any
	let EVENT_ADDED_PAYMENT_INFO: any
	let EVENT_ADDED_TO_CART: any
	let EVENT_ADDED_TO_WISHLIST: any
	let EVENT_COMPLETED_REGISTRATION: any
	let EVENT_COMPLETED_TUTORIAL: any
	let EVENT_INITIATED_CHECKOUT: any
	let EVENT_PURCHASED: any
	let EVENT_RATED: any
	let EVENT_SEARCHED: any
	let EVENT_SPENT_CREDITS: any
	let EVENT_TIME_BETWEEN_SESSIONS: any
	let EVENT_UNLOCKED_ACHIEVEMENT: any
	let EVENT_VIEWED_CONTENT: any
	let GAMEREQUEST_ACTIONTYPE_ASKFOR: any
	let GAMEREQUEST_ACTIONTYPE_NONE: any
	let GAMEREQUEST_ACTIONTYPE_SEND: any
	let GAMEREQUEST_ACTIONTYPE_TURN: any
	let GAMEREQUEST_FILTER_APPNONUSERS: any
	let GAMEREQUEST_FILTER_APPUSERS: any
	let GAMEREQUEST_FILTER_NONE: any
	let PARAM_CONTENT_ID: any
	let PARAM_CONTENT_TYPE: any
	let PARAM_CURRENCY: any
	let PARAM_DESCRIPTION: any
	let PARAM_LEVEL: any
	let PARAM_MAX_RATING_VALUE: any
	let PARAM_NUM_ITEMS: any
	let PARAM_PAYMENT_INFO_AVAILABLE: any
	let PARAM_REGISTRATION_METHOD: any
	let PARAM_SEARCH_STRING: any
	let PARAM_SOURCE_APPLICATION: any
	let PARAM_SUCCESS: any
	let STATE_CLOSED_LOGIN_FAILED: any
	let STATE_OPEN: any
	/**
	This function returns the currently stored access token after a previous
	sucessful login. If it returns nil no access token exists and you need
	to perform a login to get the wanted permissions.
	@return string the access token or nil if the user is not logged in
	**/
	function access_token(): string

	/**
	This function will disable event usage for Facebook Analytics which means
	that Facebook won't be able to use event data for ad-tracking. Events will
	still be sent to Facebook for insights.
	 Event usage cannot be controlled and is always enabled for the
	Facebook Canvas platform, therefore this function has no effect on Facebook
	Canvas.
	**/
	function disable_event_usage(): void

	/**
	This function will enable event usage for Facebook Analytics which means
	that Facebook will be able to use event data for ad-tracking.
	 Event usage cannot be controlled and is always enabled for the
	Facebook Canvas platform, therefore this function has no effect on Facebook
	Canvas.
	**/
	function enable_event_usage(): void

	/**
	Login to Facebook and request a set of publish permissions. The user is
	prompted to authorize the application using the login dialog of the specific
	platform. Even if the user is already logged in to Facebook this function
	can still be used to request additional publish permissions.
	 Note that this function cannot be used to request read permissions.
	If the application requires both publish and read permissions, individual
	calls to both login_with_publish_permissions
	and login_with_read_permissions has to be made.
	A comprehensive list of permissions can be found in the Facebook documentation,
	as well as a guide to best practises for login management.
	@param permissions table Table with the requested publish permission strings.
	@param audience constant | number The audience that should be able to see the publications.
	
	facebook.AUDIENCE_NONE
	facebook.AUDIENCE_ONLYME
	facebook.AUDIENCE_FRIENDS
	facebook.AUDIENCE_EVERYONE
	
	@param callback function(self, data) Callback function that is executed when the permission request dialog is closed.
	
	self
	object The context of the calling script
	data
	table A table that contains the response
	
	**/
	function login_with_publish_permissions(permissions: any, audience: number, callback: any): void

	/**
	Login to Facebook and request a set of read permissions. The user is
	prompted to authorize the application using the login dialog of the specific
	platform. Even if the user is already logged in to Facebook this function
	can still be used to request additional read permissions.
	 Note that this function cannot be used to request publish permissions.
	If the application requires both read and publish permissions, individual
	calls to both login_with_publish_permissions
	and login_with_read_permissions has to be made.
	A comprehensive list of permissions can be found in the Facebook documentation,
	as well as a guide to best practises for login management.
	@param permissions table Table with the requested read permission strings.
	@param callback function(self, data) callback function that is executed when the permission request dialog is closed.
	
	self
	object The context of the calling script
	data
	table A table that contains the response
	
	**/
	function login_with_read_permissions(permissions: any, callback: any): void

	/**
	Logout from Facebook.
	**/
	function logout(): void

	/**
	This function returns a table with all the currently granted permission strings.
	@return table the permissions
	**/
	function permissions(): any

	/**
	This function will post an event to Facebook Analytics where it can be used
	in the Facebook Insights system.
	@param event constant | string An event can either be one of the predefined
	constants below or a text string which can be used to define a custom event that is
	registered with Facebook Analytics.
	
	facebook.EVENT_ACHIEVED_LEVEL
	facebook.EVENT_ACTIVATED_APP
	facebook.EVENT_ADDED_PAYMENT_INFO
	facebook.EVENT_ADDED_TO_CART
	facebook.EVENT_ADDED_TO_WISHLIST
	facebook.EVENT_COMPLETED_REGISTRATION
	facebook.EVENT_COMPLETED_TUTORIAL
	facebook.EVENT_DEACTIVATED_APP
	facebook.EVENT_INITIATED_CHECKOUT
	facebook.EVENT_PURCHASED
	facebook.EVENT_RATED
	facebook.EVENT_SEARCHED
	facebook.EVENT_SESSION_INTERRUPTIONS
	facebook.EVENT_SPENT_CREDITS
	facebook.EVENT_TIME_BETWEEN_SESSIONS
	facebook.EVENT_UNLOCKED_ACHIEVEMENT
	facebook.EVENT_VIEWED_CONTENT
	
	@param value number a numeric value for the event. This should
	represent the value of the event, such as the level achieved, price for an
	item or number of orcs killed.
	@param [params] table optional table with parameters and their values. A key in the
	table can either be one of the predefined constants below or a text which
	can be used to define a custom parameter.
	
	facebook.PARAM_CONTENT_ID
	facebook.PARAM_CONTENT_TYPE
	facebook.PARAM_CURRENCY
	facebook.PARAM_DESCRIPTION
	facebook.PARAM_LEVEL
	facebook.PARAM_MAX_RATING_VALUE
	facebook.PARAM_NUM_ITEMS
	facebook.PARAM_PAYMENT_INFO_AVAILABLE
	facebook.PARAM_REGISTRATION_METHOD
	facebook.PARAM_SEARCH_STRING
	facebook.PARAM_SOURCE_APPLICATION
	facebook.PARAM_SUCCESS
	
	**/
	function post_event(event: string, value: number, params?: any): void

	/**
	Display a Facebook web dialog of the type specified in the dialog parameter.
	The param table should be set up according to the requirements of each dialog
	type. Note that some parameters are mandatory. Below is the list of available dialogs and
	where to find Facebook's developer documentation on parameters and response data.
	"apprequests"
	Shows a Game Request dialog. Game Requests allows players to invite their friends to play a
	game. Available parameters:
	
	string title
	string message
	number action_type
	number filters
	string data
	string object_id
	table suggestions
	table recipients
	string to
	
	On success, the "result" table parameter passed to the callback function will include the following fields:
	
	string request_id
	table to
	
	Details for each parameter: https://developers.facebook.com/docs/games/services/gamerequests/v2.6#dialogparameters
	"feed"
	The Feed Dialog allows people to publish individual stories to their timeline.
	
	string caption
	string description
	string picture
	string link
	table people_ids
	string place_id
	string ref
	
	On success, the "result" table parameter passed to the callback function will include the following fields:
	
	string post_id
	
	Details for each parameter: https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.6#params
	"appinvite"
	The App Invite dialog is available only on iOS and Android.
	Note that the url parameter
	corresponds to the appLinkURL (iOS) and setAppLinkUrl (Android) properties.
	
	string url
	string preview_image
	
	Details for each parameter: https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAppInviteContent/
	@param dialog string dialog to show.
	- "apprequests"
	- "feed"
	- "appinvite"
	@param param table table with dialog parameters
	@param callback function(self, result, error) callback function that is called when the dialog is closed.
	
	self
	object The context of the calling script
	result
	table Table with dialog specific results. See above.
	error
	table Error message. If there is no error, error is nil.
	
	**/
	function show_dialog(dialog: string, param: any, callback: any): void

}

declare namespace iap {

	let PROVIDER_ID_AMAZON: any
	let PROVIDER_ID_APPLE: any
	let PROVIDER_ID_FACEBOOK: any
	let PROVIDER_ID_GAMEROOM: any
	let PROVIDER_ID_GOOGLE: any
	let REASON_UNSPECIFIED: any
	let REASON_USER_CANCELED: any
	let TRANS_STATE_FAILED: any
	let TRANS_STATE_PURCHASED: any
	let TRANS_STATE_PURCHASING: any
	let TRANS_STATE_RESTORED: any
	let TRANS_STATE_UNVERIFIED: any
	/**
	Perform a product purchase.
	 Calling iap.finish() is required on a successful transaction if
	auto_finish_transactions is disabled in project settings.
	@param id string product to buy
	@param [options] table optional parameters as properties. The following parameters can be set:
	
	request_id ( Facebook only. Optional custom unique request id to
	set for this transaction. The id becomes attached to the payment within the Graph API.)
	
	**/
	function buy(id: string, options?: any): void

	/**
	 Performs a purchase of a premium game license. The purchase transaction
	is handled like regular iap purchases; calling the currently set iap_listener with the
	transaction results.
	 This function does not work when testing the application
	locally in the Gameroom client.
	**/
	function buy_premium(): void

	/**
	Explicitly finish a product transaction.
	 Calling iap.finish is required on a successful transaction
	if auto_finish_transactions is disabled in project settings. Calling this function
	with auto_finish_transactions set will be ignored and a warning is printed.
	The transaction.state field must equal iap.TRANS_STATE_PURCHASED.
	@param transaction table transaction table parameter as supplied in listener callback
	**/
	function finish(transaction: any): void

	/**
	
	@return constant provider id.
	
	iap.PROVIDER_ID_GOOGLE
	iap.PROVIDER_ID_AMAZON
	iap.PROVIDER_ID_APPLE
	iap.PROVIDER_ID_FACEBOOK
	iap.PROVIDER_ID_GAMEROOM
	
	**/
	function get_provider_id(): any

	/**
	 Checks if a license for the game has been purchased by the user.
	You should provide a callback function that will be called with the result of the check.
	 This function does not work when testing the application
	locally in the Gameroom client.
	@param callback function(self, has_premium) result callback
	
	self
	object The current object.
	has_premium
	boolean true if the user has premium license, false otherwise.
	
	**/
	function has_premium(callback: any): void

	/**
	Get a list of all avaliable iap products. Products are described as a table
	with the following fields:
	
	ident
	The product identifier.
	title
	The product title.
	description
	The product description.
	price
	The price of the product.
	price_string
	The price of the product, as a formatted string (amount and currency symbol).
	currency_code   
	The currency code. On Google Play, this reflects the merchant's locale, instead of the user's.
	
	 Nested calls, that is calling iap.list() from within the callback is
	not supported. Doing so will result in call being ignored with the engine reporting
	"Unexpected callback set".
	@param ids table table (array) of identifiers to get products from
	@param callback function(self, products, error) result callback
	
	self
	object The current object.
	products
	table Table describing the available iap products. See above for details.
	error
	table a table containing error information. nil if there is no error.
	- error (the error message)
	
	**/
	function list(ids: any, callback: any): void

	/**
	Restore previously purchased products.
	@return boolean true if current store supports handling
	restored transactions, otherwise false.
	**/
	function restore(): boolean

	/**
	Set the callback function to receive purchase transaction events. Transactions are
	described as a table with the following fields:
	
	ident
	The product identifier.
	state
	The transaction state. See iap.TRANS_STATE_*.
	date
	The date and time for the transaction.
	trans_ident
	The transaction identifier. This field is only set when state is TRANS_STATE_RESTORED,
	TRANS_STATE_UNVERIFIED or TRANS_STATE_PURCHASED.
	receipt
	The transaction receipt. This field is only set when state is TRANS_STATE_PURCHASED
	or TRANS_STATE_UNVERIFIED.
	original_trans 
	Apple only. The original transaction. This field is only set when state is
	TRANS_STATE_RESTORED.
	signature 
	Google Play only. A string containing the signature of the purchase data that was signed
	with the private key of the developer.
	request_id 
	Facebook only. This field is set to the optional custom unique request id request_id
	if set in the iap.buy() call parameters.
	purchase_token 
	Facebook Gameroom only. The purchase token.
	currency 
	Facebook Gameroom only. The currency used for the purchase.
	amount 
	Facebook Gameroom only. The amount the player will be charged for a single unit
	of this product.
	quantity 
	Facebook Gameroom only. The quantity of this item the user is purchasing.
	user_id 
	Amazon Pay only. The user ID.
	is_sandbox_mode 
	Amazon Pay only. If true, the SDK is running in Sandbox mode. This only allows
	interactions with the Amazon AppTester. Use this mode only for testing locally.
	cancel_date 
	Amazon Pay only. The cancel date for the purchase. This field is only set if the
	purchase is canceled.
	canceled 
	Amazon Pay only. Is set to true if the receipt was canceled or has expired;
	otherwise false.
	
	@param listener function(self, transaction, error) listener callback function.
	Pass an empty function if you no longer wish to receive callbacks.
	
	self
	object The current object.
	transaction
	table a table describing the transaction. See above for details.
	error
	table a table containing error information. nil if there is no error.
	- error (the error message)
	- reason (the reason for the error, see iap.REASON_*)
	
	**/
	function set_listener(listener: any): void

}

declare namespace iac {

	let TYPE_INVOCATION: any
	/**
	Sets the listener function for inter-app communication events.
	@param listener function(self, payload, type) listener callback function.
	Pass an empty function if you no longer wish to receive callbacks.
	
	self
	
	object The current object.
	
	payload
	
	table The iac payload.
	
	type
	
	constant The type of iac, an iac.TYPE_ enumeration.
	
	
	**/
	function set_listener(listener: any): void

}

declare namespace push {

	let NOTIFICATION_ALERT: any
	let NOTIFICATION_BADGE: any
	let NOTIFICATION_SOUND: any
	let ORIGIN_LOCAL: any
	let PRIORITY_DEFAULT: any
	let PRIORITY_HIGH: any
	let PRIORITY_LOW: any
	let PRIORITY_MAX: any
	let PRIORITY_MIN: any
	/**
	Use this function to cancel a previously scheduled local push notification. The
	notification is identified by a numeric id as returned by push.schedule().
	@param id number the numeric id of the local push notification
	**/
	function cancel(id: number): void

	/**
	Returns a table with all data associated with all scheduled local push notifications.
	The table contains key, value pairs where the key is the push notification id and the
	value is a table with the notification data, corresponding to the data given by
	push.get_scheduled(id).
	@return table table with all data associated with all scheduled notifications
	**/
	function get_all_scheduled(): any

	/**
	Returns a table with all data associated with a specified local push notification.
	The notification is identified by a numeric id as returned by push.schedule().
	@param id number the numeric id of the local push notification
	@return table table with all data associated with the notification
	**/
	function get_scheduled(id: number): any

	/**
	Send a request for push notifications. Note that the notifications table parameter
	is iOS only and will be ignored on Android.
	@param notifications table the types of notifications to listen to. 
	@param callback function(self, token, error) register callback function.
	
	self
	
	object The current object.
	
	token
	
	string The returned push token if registration is successful.
	
	error
	
	table A table containing eventual error information.
	
	
	**/
	function register(notifications: any, callback: any): void

	/**
	Local push notifications are scheduled with this function.
	The returned id value is uniquely identifying the scheduled notification
	and can be stored for later reference.
	@param time number number of seconds into the future until the notification should be triggered
	@param title string localized title to be displayed to the user if the application is not running
	@param alert string localized body message of the notification to be displayed to the user if the application is not running
	@param payload string JSON string to be passed to the registered listener function
	@param notification_settings table table with notification and platform specific fields
	
	action 
	string
	 The alert action string to be used as the title of the right button of the
	 alert or the value of the unlock slider, where the value replaces
	 "unlock" in "slide to unlock" text.
	badge_count 
	number The numeric value of the icon badge.
	badge_number
	Deprecated! Use badge_count instead
	priority 
	number
	 The priority is a hint to the device UI about how the notification
	 should be displayed. There are five priority levels, from -2 to 2 where -1 is the
	 lowest priority and 2 the highest. Unless specified, a default priority level of 2
	 is used.
	
	@return number unique id that can be used to cancel or inspect the notification
	@return string error string if something went wrong, otherwise nil
	**/
	function schedule(time: number, title: string, alert: string, payload: string, notification_settings: any): number

	/**
	Set the badge count for application icon.
	This function is only available on iOS. 
	@param count number badge count
	**/
	function set_badge_count(count: number): void

	/**
	Sets a listener function to listen to push notifications.
	@param listener function(self, payload, origin, activated) listener callback function.
	Pass an empty function if you no longer wish to receive callbacks.
	
	self
	object The current object
	payload
	function the push payload
	origin
	constant push.ORIGIN_LOCAL or push.ORIGIN_REMOTE
	activated
	boolean true or false depending on if the application was
	 activated via the notification.
	
	**/
	function set_listener(listener: any): void

}

declare namespace webview {

	/**
	Creates a webview instance. It can show HTML pages as well as evaluate Javascript.
	The view remains hidden until the first call. There can exist a maximum of 4 webviews at the same time.
	 On iOS, the callback will never get a webview.CALLBACK_RESULT_EVAL_ERROR,
	due to the iOS SDK implementation.
	@param callback function(self, webview_id, request_id, type, data) A callback which receives info about finished requests taking the following parameters
	
	self
	object The calling script
	webview_id
	number The webview id
	request_id
	number The request id
	type
	number The type of the callback. Can be one of these:
	
	
	webview.CALLBACK_RESULT_URL_OK
	webview.CALLBACK_RESULT_URL_ERROR
	webview.CALLBACK_RESULT_EVAL_OK
	webview.CALLBACK_RESULT_EVAL_ERROR
	
	
	data
	table A table holding the data. The table has these fields:
	
	
	string url: The url used in the webview.open() call. nil otherwise.
	string result: Holds the result of either: a failed url open, a successful eval request or a failed eval. nil otherwise
	
	@return number The id number of the webview
	**/
	function create(callback: any): number

	/**
	Destroys an instance of a webview.
	@param webview_id number The webview id (returned by the webview.create() call)
	**/
	function destroy(webview_id: number): void

	/**
	Evaluates java script within the context of the currently loaded page (if any).
	Once the request is done, the callback (registered in webview.create())
	is invoked. The callback will get the result in the data["result"] field.
	@param webview_id number The webview id
	@param code string The java script code to evaluate
	@return number The id number of the request
	**/
	function eval(webview_id: number, code: string): number

	/**
	Returns the visibility state of the webview.
	@param webview_id number The webview id (returned by the webview.create() call)
	@return number Returns 0 if not visible, 1 if it is visible
	**/
	function is_visible(webview_id: number): number

	/**
	Opens a web page in the webview, using an url. Once the request is done, the
	callback (registered in webview.create()) is invoked.
	@param webview_id number The webview id
	@param url string The url to open
	@param options table A table of options for the request. Currently it holds these options
	
	hidden
	boolean If true, the webview will stay hidden (default=false)
	
	@return number The id number of the request
	**/
	function open(webview_id: number, url: string, options: any): number

	/**
	Opens a web page in the webview, using html data. Once the request is done,
	the callback (registered in webview.create()) is invoked.
	@param webview_id number The webview id
	@param html string The html data to display
	@param options table A table of options for the request. See webview.open()
	@return number The id number of the request
	**/
	function open_raw(webview_id: number, html: string, options: any): number

	/**
	Sets the size of the webview
	@param webview_id number The webview id (returned by the webview.create() call)
	@return number The width of the webview
	@return number The height of the webview
	**/
	function set_size(webview_id: number): number

	/**
	Shows or hides a web view
	@param webview_id number The webview id (returned by the webview.create() call)
	@param visible number If 0, hides the webview. If non zero, shows the view
	**/
	function set_visible(webview_id: number, visible: number): void

}
