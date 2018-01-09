# Webpack/ES6 Seed

* This is a project skeleton for developing in ES6 with Webpack
* To setup, run `npm install`, remove remote origin, and start coding!

### Install

```Terminal
npm install
git remote rm origin
```

### Run

```Terminal
npm start
```

Shoud start the project and open a browser window at `http://localhost:8080/`

### Build

```Terminal
npm run-script build
```

### Noteworthy properties

About some webpack and babel properties:

**presets-env:** If you want to use ES6

**plugins-transform-runtime:** Eliminates duplication of babel helper functions (increases performance)

**entry:** The file you want to convert

**output:** The converted file named `app.bundle.js`

**rules:** Sets the loaders

**source-map:** If you want to edit sass/css in devtools

## Credits


Inspired and improved from [this seed project](https://github.com/jdiejim/Seed-project-webpack)