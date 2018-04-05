// DEFOLD. Version 1.2.124

///////////////////////////////////////////////////////////////////////////////
// ADITIONAL - TYPESCRIPT TO LUA
declare function require(file: string): void

///////////////////////////////////////////////////////////////////////////////
// SYSTEM

declare namespace go {
    
    function get_id(path?: string): hash
    function get_position(id?: string | hash | url): vmath.vector3
    function set_position(position: vmath.vector3, id?: string | hash): void

    // go.delete(id, recursive)
    function delete_(): void
    function delete_id(id: string | hash): void
    function delete_id_recursive(id: string | hash, recursive: boolean): void
}

declare namespace profiler { // DONE
    /**
    Get the percent of CPU usage by the application, as reported by the OS.
    This function is not available on  HTML5.
    For some platforms ( Android,  Linux and  Windows), this information is only available by default in the debug version of the engine. It can be enabled in release version as well by checking track_cpu under profiler in the game.project file. (This means that the engine will sample the CPU usage in intervalls during execution even in release mode.)
    @return percent of CPU used by the application
    */
    function get_cpu_usage(): number

    /**
    Get the amount of memory used (resident/working set) by the application in bytes, as reported by the OS.
    This function is not available on  HTML5.
    @return bytes used by the application
    */
    function get_memory_usage(): number
}

///////////////////////////////////////////////////////////////////////////////
// COMPONENTS
declare namespace factory {
    /**
    The URL identifies which factory should create the game object. If the game object is created inside of the frame (e.g. from an update callback), the game object will be created instantly, but none of its component will be updated in the same frame.
    Properties defined in scripts in the created game object can be overridden through the properties-parameter below. See go.property for more information on script properties.
    Calling factory.create create on a factory that is marked as dynamic without having loaded resources using factory.load will synchronously load and create resources which may affect application performance.
    @param url the factory that should create a game object.
    @param position the position of the new game object, the position of the game object calling factory.create() is used by default, or if the value is nil.
    @param rotation the rotation of the new game object, the rotation of the game object calling factory.create() is is used by default, or if the value is nil.
    @param properties table the properties defined in a script attached to the new game object.
    @param scale the scale of the new game object (must be greater than 0), the scale of the game object containing the factory is used by default, or if the value is nil
    @return the global id of the spawned game object
    */
    function create(url: string | hash | url, position?: vmath.vector3, rotation?: vmath.quaternion, properties?: any, scale?: number | vmath.vector3): hash
}

declare namespace label {
    function set_text(url: string | hash, text: any): void;
}

/////////////////////////////////////////////////////////////////////////////// DONE
// SCRIPT Built-ins API

declare interface hash {}
declare interface url {}

/**
All ids in the engine are represented as hashes, so a string
needs to be hashed before it can be compared with an id.
@param s string to hash
@return a hashed string
*/
declare function hash(s: string): hash

/**
Returns a hexadecimal representation of a hash value.
The returned string is always padded with leading zeros.
@param h hash value to get hex string for
@return hex representation of the hash
*/
declare function hash_to_hex(h: hash): string

/**
Pretty printing of Lua values. This function prints Lua values in a manner
similar to print(), but will also recurse into tables and pretty print them.
There is a limit to how deep the function will recurse.
*/
declare function pprint(text: any): void

///////////////////////////////////////////////////////////////////////////////
// SCRIPT

declare namespace msg{
    function post(receiver: any, message_id: any, message?: any): void;
}

declare namespace vmath {

    interface vector3 {
        x: number
        y: number
        z: number
    }

    interface quaternion {
        x: number
        y: number
        z: number
        w: number
    }

    function vector3(): vector3
    function vector3(x: number): vector3
    function vector3(x: vector3): vector3
    function vector3(x: number, y: number, z: number): vector3
}

///////////////////////////////////////////////////////////////////////////////
// LUA STANDART LIBs
declare function print(text: any): void

declare namespace math {
    function cos(x: number): number
    function sin(x: number): number
    function ceil(x: number): number
    function random(m?: number, n?: number): number
}

declare namespace string {
    function format(text: string, ...args: any[]): void;
}