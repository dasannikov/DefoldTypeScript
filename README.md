![Defold TypeScript](img/logo.jpg?raw=true "Defold TypeScript")

# TypeScript support for Defold game engine
**Disclaimer:** It's early version with very basic functionality (currently have only functions for sample projects) but it works. A lot to do.
Use an [example project](https://github.com/dasannikov/DefoldTypeScriptHello) for basic tests.

## How to Install.
- Install [Node.js](https://nodejs.org/en/)
- Install TypeScript to Lua transpiller `npm install -g typescript-to-lua` or from [GitHub repository](https://github.com/Perryvw/TypescriptToLua)

## Example
![VS Code Defold TypeScript](img/vscode.jpg?raw=true "VS Code Defold TypeScript")
- Install [Defold game engine](https://www.defold.com) and [VS Code](https://code.visualstudio.com)
- Install Node.js and TypeScript to Lua transpiller (see above)
- Clone [GitHub repo with example](https://github.com/dasannikov/DefoldTypeScriptHello)
- Open workspace `DefoldTypeScriptHello\tssrc\DefoldTypeScriptHello.code-workspace` in VS Code.
- Use Task `TS to Lua` to build Lua files (or default VS Code buld task shortcut `Cmd + Shift + B`)
- Open example project in Defold Editor 2 and Run.

## Code Generation
Using TypeScript you get strong type check, typed arguments, classes, inheritance and so on. All reflects to Lua basic constructions. TS to Lua work the same way as TS to JS. Very useful for big projects development. Here is code examples:

**Input TS script:**

``` TypeScript
export class Unit {
    
    private rotationRadius = 100;    
    private phase = 0;    
    private startPos = vmath.vector3();
    private id: any = null;
    
    public update(dt: number) {
        if(this.id == null) return
        this.phase += dt
        let pos = vmath.vector3(this.startPos);
        pos.x += math.cos(this.phase) * this.rotationRadius
        pos.y += math.sin(this.phase) * this.rotationRadius
        pos.x = math.ceil(pos.x);
        pos.y = math.ceil(pos.y);
        go.set_position(pos, this.id);
    }

    public create() {
        this.phase = math.random()
        this.startPos.x = math.random(200, 800)
        this.startPos.y = math.random(200, 500)
        this.startPos.z = 0
        this.id = factory.create("/main#factory")
    }
}
```
Output Lua script:
``` Lua
require("typescript_lualib")
local exports = exports or {}
local Unit = Unit or {}
exports.Unit = Unit
Unit.__index = Unit
function Unit.new(construct, ...)
    local instance = setmetatable({}, Unit)
    if construct and Unit.constructor then Unit.constructor(instance, ...) end
    return instance
end
function Unit.constructor(self)
    self.rotationRadius = 100
    self.phase = 0
    self.startPos = vmath.vector3()
    self.id = undefined
end
function Unit.update(self,dt)
    if self.id==undefined then
        return
    end
    self.phase=self.phase+dt
    local pos = vmath.vector3(self.startPos)

    pos.x=pos.x+(math.cos(self.phase)*self.rotationRadius)
    pos.y=pos.y+(math.sin(self.phase)*self.rotationRadius)
    pos.x=math.ceil(pos.x)
    pos.y=math.ceil(pos.y)
    go.set_position(pos,self.id)
end
function Unit.create(self)
    self.phase=math.random()
    self.startPos.x=math.random(200,800)
    self.startPos.y=math.random(200,500)
    self.startPos.z=0
    self.id=factory.create("/main#factory")
end
return exports
```

## TODO (Do not hesitate to contribute!)
- Auto generate `defold.d.ts` file with full Defold support.
- Add types to function's arguments where it's possible
- Further development of [TypeScript to Lua Transpiler](https://github.com/Perryvw/TypescriptToLua)
- Add build system (Webpack?)
