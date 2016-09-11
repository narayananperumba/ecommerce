#Cart beta model 1.0
Sample project with react

## Tech Specification
- Node v5.4.0
- npm  v3.5.2
- React

## How to start
Clone this repo into new project folder (e.g., `cart`).
```bash
Git clone git@github.com:narayananperumba/ecommerce.git cart
cd cart
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:
We are using webpack/sebpack-dev-server for compilation
Install packages and dependancies and review webpack.config.js for config changes for compilation.

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm init
npm install
npm run dev (as per config)
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.
Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests

