(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["carma-forms"] = factory();
	else
		root["carma-forms"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/workers/parserWorker.js ***!
  \*************************************/
onmessage = function onmessage(e) {
  console.log('worker');
  debugger; // const { data } = e;
}; // serialize the functions
// https://stackoverflow.com/questions/11909934/how-to-pass-functions-to-javascript-web-worker
// cache them by the name of the project
// or...
// just have this

/**
 *     
 * import { transform } from '@babel/standalone';
 * 
 * const { code } = transform(rawCode, { presets: ['es2015', 'react'] });
    return code.replace(/require\(/gm, '__customRequire(__webpack_require__, ');
 */
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=src_workers_parserWorker_js.index.js.map