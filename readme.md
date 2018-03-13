In general, webpack is a new way for import the library and files.
It has benefits (server, bundle) but it requires some benifits for making all things work.

### demo01 Import module and create bundle

* Webpack is used for managing the dependencies for the project and also for the different js files.
* Before start, we need to seprate source code /src and distribution code /dist
* Webpack supports modules methods like import and export https://webpack.js.org/api/module-methods/, which solves the problem of global scope pollution. (if want to use more es6 function, need to use compiler like babel)
* How webpack works: build a dependency graph. Use the graph to build optimized bundle.
* Use **npx** to excute the binary for node modules
* Use node module **webpack-cli** to use the command webpack. Run `npx webpack src/index.js --output dist/bundle.js` to create the bundle

### demo02 add npm script and webpack config file

* New: entry and output in webpack config js

* Webpack configuration file is a Node.js CommonJS module, we can use require but not import
* In the end, we run `npx webpack --config webpack.config.js` to compile
* We can specify loader rules, plugins, resolve options and many other enhancements
* If we add a webpack command for build in npm scripts, it is much more easier to create bundle

### demo03 assets management

* New: Use different modules for parsing different type of files

* Link: https://webpack.js.org/guides/asset-management/
* Use the same method of import for css and image
* In order to import css, need to install style-loader and css-loader and add rules for module configuration. **style-loader**: create style node from js string and **css-loader**: translate css into CommonJS
* Module configration in webpack config is for importing different type of files with rules
* **test**: use regular expression to determine file type like `/\.css$/`, **use**: an array of loaders
* use file-loader module for importing images
* With the module file-loader, the image will be moved into the dist folder and the url will be changed dynamiclly.
* With csv-loader, we can load the data file into the js, which is really helpful for d3.

### demo04 output management

* New: Use plugin.

* If there are multiple entries, we can compile to multiple bundles. Entry can be an object with key-path, output is filename: [name].bundle.js
* HtmlWebpackPlugin will create a index.html. It is useful when we need to import multiple bundlejs.
* CleanWebpackPlugin for cleaning the dist folder before we start building.

### demo05 development

* New: devtool (source-map) and devServer

* Creating bundle is not good for finding the source, and this is why we need source maps.
* `devtool: 'inline-source-map'` is just an option for allowing sourcemap for javascript bundle.
* Add a script task: `"watch": "webpack --watch"`, webpack will create bundle automatiquement, but the browser cannot be refreshed automatiquement.
* Node module **webpack-dev-server** is used as a devServer.

### demo 06 production

* developpment: source mapping, local server, live reloading. production: mifiniy bundle, optimize asset. So we separate webpack configurations.
* common configuration for dev and prod: use webpack-merge node module to combine common configuration and configuration just for dev or prod.
* Avoid inline- for source-mapping in production as they can increase bundle size and reduce the overall performance. Use sourcemap: true in **uglifyjs-webpack-plugin** in prod.
* Many libraries use process.env.NODE_ENV for determining environment. We use **DefinePlugin** to define this variable.

### demo 07 react

I used to use create-react-app to create react apps. This demo is for creating a project with webpack for compiling jsx, scss, import imgs, including dev version and prod version.

* config babelrc for presets and install babel-loader for .js and .jsx
* use htmlwebpackplugin for pass a template html file

### other important features

* Hot Module Replacement (HMR) https://webpack.js.org/guides/hot-module-replacement/
* Remove dead code with uglifyjs-webpack-plugin
* webpack command line interface: add --profile and --progress and we can see the detail of webpack compliation.
