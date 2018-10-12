
// DEFOLD. Version 1.2.134

///////////////////////////////////////////////////////////////////////////////

declare function require(file: string): void

type hash = {}
type url = {}
type node = {}

///////////////////////////////////////////////////////////////////////////////
// Build-Ins

/**
All ids in the engine are represented as hashes, so a string needs to be hashed before it can be compared with an id.
@param s string string to hash
@return hash a hashed string
**/
declare function hash(s: string): hash

/**
Returns a hexadecimal representation of a hash value. The returned string is always padded with leading zeros.
@param h hash value to get hex string for
@return string hex representation of the hash
**/
declare function hash_to_hex(h: hash): string

/**
Pretty printing of Lua values. This function prints Lua values in a manner similar to +print()+, but will also recurse into tables and pretty print them. There is a limit to how deep the function will recurse.
@param v any value to print
**/
declare function pprint(...v: any[]): void

///////////////////////////////////////////////////////////////////////////////

declare namespace vmath {

    type matrix4 = {}

    interface vector3 {
        x: number
        y: number
        z: number
    }

    interface vector4 {
        x: number
        y: number
        z: number
        w: number
	}
	
	interface quaternion {
        x: number
        y: number
        z: number
        w: number
    }
}

///////////////////////////////////////////////////////////////////////////////
// LUA STANDART LIBs
declare function print(...rest: any[]): void
declare function collectgarbage(opt?:any, arg?:any): any

declare namespace math {
    function cos(x: number): number
    function sin(x: number): number
    function ceil(x: number): number
    function random(m?: number, n?: number): number
}

declare namespace string {
    function format(text: string, ...args: any[]): void;
}
