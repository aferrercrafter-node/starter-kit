# Javascript Starter-kit

What belongs to your __Starter-kit__

* Package Management
* Bundling
* Minification
* Sourcemaps
* Transpiling
* Dynamic HTLM Generation
* Centralized HTTP
* Mock API Framework
* Component libraries
* Development Webservers
* Linting
* Automated Testing
* Continuous Integration
* Automated Build
* Automated deployment
* Working example app

__Github__
    - Continuous Integration
    - Automated Deploy

### Javascript Editos

__What to look for__

* _Strong ES2015+ support_
    - Autocompletion
    - Parse ES6 imports
    - Report unused imports
    - Automated refactoring
* _Framework Intelligence_
* _Built-in Terminal_

Options: Atom, WebStorm, Brackets, VSCode

Note: Even if Visual Studio / Eclipse or Net Beans, are more stronger/used IDEs, they are not focused on bring the last features of javascript. 
It´s fine to use this IDE for backend code, and VSCode for frontend javascrpit code. _You are using the best tool, for each job!_

__Automated Consistency via Editorconfig__

_EditorConfig_ helps developers define and mantain consistent coding styles between different editors and IDEs. Consists in a file format for defining conding styles and a collection of text editor plugins that enables editor to read the file format and adhere to defined styles.

.editorconfig

 ``` bash
    # editorconfig
    root = true

    [*]
    indent_styles = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true

    [*.md] 
    trim_trailing_whitespace = false
 ```

 Some editors need a plugin. You can go to editorconfig.org and check there for the plugin, for each IDE,

 ### Javascript Package Manager

some options:
- __NPM__ _best option out there_
- Bower
- JSPM
- JAM
- Volo

### Development Web Servers

[http-server](https://www.npmjs.com/package/http-server)
- Ultra-simple
- Single command serves current directory

[live-server](https://www.npmjs.com/package/live-server)
- Lightweight
- Support live-reloading

[express](https://expressjs.com)
- Comprehensive
- Highly configurable
- Production Grade
- Can run it everywhere

[budo](https://www.npmjs.com/package/budo)
- Integrates with Browserify
- Inlcudes hot reloading

[webpack](https://www.npmjs.com/package/webpack)
- Built in Webpack
- Servers from memory
- Includes hot reloading

[browsersync](https://www.browsersync.io/)
- Dedicated IP for sharing work on LAN
- All interactions remain in sync!
- Great for cross-device testing
- Integrates with Webpack, Express

### Sharing work-in-progress

[localtunnel](https://localtunnel.github.io/www/)
 _Easily share work on your local machine, Easiest setup, ULTRA versatile_

 __setup__:
   1. npm install localtunnel -g
   2. Start your app
   3. lt -port 3000

[ngrock](https://ngrok.com/)
  _Secure tunnel to your local machine. Easy setup, secure_

  __setup__:
   1. Sign up
   2. Install ngrock
   3. Install authtoken
   4. Start your app
   5. ../ngrock http 80

[now](https://zeit.co/now)    
_No firewall hole, Hosting persist_

 __setup__:
   1. npm install -g now
   2. Create start script
   3. now   

[surge](https://surge.sh/)
_No firewall hole, Hosting persist, only static files_

 __setup__:
   1. npm install -g surge
   2. surge


### Automation

[Grunt](https://gruntjs.com/)

   * The "original"
   * Configuration over code
   * Writes intermediary files between steps
   * Large plugin ecosystems

[Gulp](https://gulpjs.com/)

   * In-memory streams
   * Fast
   * Code over configuration
   * Large Plugin ecosystems

[Npm scripts](https://docs.npmjs.com/misc/scripts)
 
   * Declared in package.json
   * Leverage your OS´s command line
   * Directly use npm packages
   * Call separate Node scripts
   * Convention-based pre/post hocks
   * Leverage world´s largest package manager
   - Use tools directly
   - No need for separate plugins
   - Simpler debugging
   - Better docs
   - Easy to learn
   - Simple

   _start_ and _test_ are by convention, the scripts for start and test the application. So:

``` bash
   npm start
   # Is equivalent for
   npm run start

   npm test
   # Is equivalent for
   npm run test    
 ```

__Pre/Post Hooks__

npm scripts supports conventions base pre and post hooks.
_Any scripts with the prefix pre, will run beofre the sxcript with the same name_


``` json
{
   "scripts" : {
      "prestart" : "commnand", //This run before automatically when run npm start
      "start" : "command",
      "poststart" : "command" //This run after automatically when run npm start
   }   
}
 ```

 __Parallel Tasks__

``` bash
   npm-run-all task1 task2 task3
   # run all the task list after

   npm-run-all --parallel task1 task2 task3
   # run all the task in parallel
```
