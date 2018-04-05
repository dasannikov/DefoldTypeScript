![Defold TypeScript](img/logo.jpg?raw=true "Defold TypeScript")

# TypeScript support for Defold game engine
It's early version with very basic functionally but it works.
Use an [example project](https://github.com/dasannikov/DefoldTypeScriptHello) for basic tests.

## How to Install.
- Install [Node.js](https://nodejs.org/en/)
- Install TypeScript to Lua transpiller `npm install -g typescript-to-lua` or from [GitHub repository](https://github.com/Perryvw/TypescriptToLua)

## Example
- Install [Defold game engine](https://www.defold.com) and [VS Code](https://code.visualstudio.com)
- Install Node.js and TypeScript to Lua transpiller (see above)
- Clone [GitHub repo with example](https://github.com/dasannikov/DefoldTypeScriptHello)
- Open workspace `DefoldTypeScriptHello\tssrc\DefoldTypeScriptHello.code-workspace` in VS Code.
- Use Task `TS to Lua` to build Lua files (or default VS Code buld task shortcut `Cmd + Shift + B`)
- Open example project in Defold Editor 2 and Run.

## TODO
- Generate `defold.d.ts` file with full Defold support.
- Add types to functions where it's possible
- Add build system (Webpack?)