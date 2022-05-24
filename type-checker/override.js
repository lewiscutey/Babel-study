const {
  transformFromAstSync
} = require('@babel/core');
const parser = require('@babel/parser');
const overrideCheckerPlugin = require('./plugins/override-checker-plugin.js');
const fs = require('fs');
const path = require('path');

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf-8'
});

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['typescript']
});

const {
  code
} = transformFromAstSync(ast, sourceCode, {
  plugins: [overrideCheckerPlugin]
});

console.log(code)