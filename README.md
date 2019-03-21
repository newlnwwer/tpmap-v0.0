# Webpack and Vue for data visualization

> Webpack + Vue (element + vuex) + d3.js

## Build Setup

``` bash

*Note these commands are commanded thought VS code

# install webpack + vue dependencies
npm install -g vue-cli
vue init webpack directory-name
cd directory-name
npm install
npm run dev

# install vue element
npm i element-ui -S

# install vuex
npm install vuex --save

# may use material Icon
npm install vue-material-icon
```

## Usage

``` bash
# serve with hot reload at localhost:1514
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

``` bash
In main.js file
import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterialIcon from 'vue-material-icon'

Vue.use(Vuex)
Vue.component(VueMaterialIcon.name, VueMaterialIcon)
```

## Usage

``` bash
# serve with hot reload at localhost:1514
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Get Started

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
