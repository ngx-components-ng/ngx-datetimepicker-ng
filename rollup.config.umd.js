const sass = require('node-sass');

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import CleanCSS from 'clean-css';
import { minify as minifyHtml } from 'html-minifier';

import { nameLibrary, PATH_SRC, PATH_DIST } from './config-library.js';

const cssmin = new CleanCSS();

const htmlminOpts = {
  caseSensitive: true,
  collapseWhitespace: true,
  removeComments: true,
};

export default {
  input: `${PATH_SRC}${nameLibrary}.ts`,

  output: {
    name: nameLibrary,
    file: `${PATH_DIST}${nameLibrary}.umd.js`,
    format: 'umd',
    sourcemap: true,
  },

  external: [
    '@angular/core',
    '@angular/forms',
    '@angular/common',
    'moment',
    'rxjs',
  ],

  plugins: [
    angular({
      replace: true,
      preprocessors:{
        template: template => minifyHtml(template, htmlminOpts),
        style: scss => {
          const css = sass.renderSync({ data: scss }).css;
          return cssmin.minify(css).styles;
        },
      }
    }),
    typescript({
      typescript: require('typescript')
    }),
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
