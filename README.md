# webpack+babel ES6 seed

This is a project skeleton for developing in ES6 with **webpack** and **babel**

## Install

```Terminal
npm install
git remote rm origin
```

Adapt `package.json` to your project (remove author GitHub URLs)

## Run

```Terminal
npm start
```

Shoud start the project and open a browser window at `http://localhost:8080/`
with a green background and a big "Success" message.

## Build

```Terminal
npm run-script build
```

## Noteworthy properties

About some webpack and babel properties:

* **presets-env:** If you want to use ES6
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

* `hoek` dependency vulnerability. Read [the appalling comment](https://github.com/sass/node-sass/issues/2252) and cry.

## Credits

Inspired and improved from [this seed project](https://github.com/jdiejim/Seed-project-webpack)

## License

GNU General Public License v3.0. Read [LICENSE.txt](LICENSE.txt)
