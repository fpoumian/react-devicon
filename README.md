# React Devicon
[![Build Status](https://travis-ci.org/fpoumian/react-devicon.svg?branch=master)](https://travis-ci.org/fpoumian/react-devicon)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

https://fpoumian.github.io/react-devicon/

React Devicon is a React implementation of the [Devicon](https://github.com/konpa/devicon) package, a library that contains the logos of several programming languages and libraries, as well as of different design and development tools.

React Devicon includes all of the SVG icons of the original package exported as individual React components. In addition, each SVG file has been optimized using **SVGO** to ensure the smallest component size possible.

## Instalation
Install this package using NPM:
```bash
npm install 'react-devicon' --save
```
Or Yarn:
```bash
yarn add 'react-devicon'
```

## Usage
Import each icon component from its respective module. You can find the paths for all the modules of every icon looking at the documentation on https://fpoumian.github.io/react-devicon/. Please note that every icon typically has at least two or more different versions.

Each icon component exposes two props: **width** and **height**. You can enter either a string (i.e. "10em", "100px", etc) or an integer, which will be automatically converted to pixels.

```js
import IconAmazonwebservices from 'react-devicon/amazonwebservices/original'

  export default () => (
    <div>
      <IconAmazonwebservices width={100} height={100}/>
    </div>
    )
```

## Credits
All of the SVG files were taken directly from the [Devicon](https://github.com/konpa/devicon) library created by [konpa](https://github.com/konpa).

React Devicon is an open source project created by [Fernando Poumián](https://github.com/fpoumian) and released under the **MIT license**.