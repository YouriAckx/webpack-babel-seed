# webpack+babel typescript seed

Project skeleton for developing in Typescript with **webpack 4** and **babel 7**.
No ReactJS
([see here](https://github.com/rwieruch/minimal-react-webpack-babel-setup) if you need a react seed project).

## Features

* Webpack 4
* Babel 7
* Hot Module Replacement
* scss
* HtmlWebpackPlugin
* yarn

## Install

Install yarn. This step is optional. You can use the equivalent `npm` commands if you prefer.

```Terminal
npm install -g yarn
```

Fix npm out-of-memory errors:

```Terminal
export NODE_OPTIONS=--max_old_space_size=4096
```

Install

```Terminal
yarn install
```

Remove seed project git origin (and replace by your own if applicable)

```Terminal
git remote rm origin
```

Adapt `package.json` to your project (remove author GitHub URLs)

## Run

```Terminal
yarn start
```

Open `http://localhost:8080/`

## Build

```Terminal
yarn build
```

## Noteworthy properties

About some webpack and babel properties:

* **presets-env:** If you want to use ES6
* **html-webpack-plugin** To use your own index.html template
* **plugins-transform-runtime:** Eliminates duplication of babel helper functions (increases performance)
* **entry:** The file you want to convert
* **output:** The converted file named `app.bundle.js`
* **rules:** Sets the loaders
* **source-map:** If you want to edit sass/css in devtools

## Troubleshooting

In doubt, a safe bet is:

```Terminal
$ rm -rf node_modules
$ npm install
```

## Known issues

* Slightly slow to boot (might be due to html-webpack-plugin)

## Credits

Inspired and improved from [this seed project](https://github.com/rwieruch/minimal-react-webpack-babel-setup)

## License

GNU General Public License v3.0. Read [LICENSE.txt](LICENSE.txt)
