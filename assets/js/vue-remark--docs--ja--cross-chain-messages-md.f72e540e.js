(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--cross-chain-messages-md"],{

/***/ "/vzk":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"293f11d7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/cross-chain-messages.md?vue&type=template&id=50bcd9dc& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"XCM (Cross-chain Message) allows sending messages between parachains. You can send launchXcm transaction to run/stop your robot or datalogXcm transaction to save data to blockchain.\")]),_c('div',{staticClass:\"youtube-embed\"},[_c('div',{staticStyle:{\"width\":\"100%\",\"margin\":\"0 auto\"}},[_c('div',{staticStyle:{\"position\":\"relative\",\"padding-bottom\":\"56.25%\",\"padding-top\":\"25px\",\"height\":\"0\"}},[_c('iframe',{staticStyle:{\"position\":\"absolute\",\"top\":\"0\",\"left\":\"0\",\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"src\":\"https://www.youtube-nocookie.com/embed/a6XrqoaYhK8\",\"allow\":\"autoplay; encrypted-media\",\"allowfullscreen\":\"\"}})])])]),_c('h2',{attrs:{\"id\":\"create-account\"}},[_c('a',{attrs:{\"href\":\"#create-account\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Create Account\")]),_c('p',[_vm._v(\"Lets try to send message from Earth to Mars.\\nGo to \"),_c('a',{attrs:{\"href\":\"https://parachain.robonomics.network/#/explorer\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"parachain.robonomics.network\")]),_vm._v(\" and choose \"),_c('code',{pre:true},[_vm._v(\"Airalab Rococo\")]),_vm._v(\" testnet:\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=testnets!../images/cross-chain/testnet.jpg */ \"FAU5\"),\"alt\":\"testnets\"}})],1),_c('p',[_vm._v(\"In \"),_c('code',{pre:true},[_vm._v(\"Network/Parachains\")]),_vm._v(\" you will see two parachains with their id:\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=ids!../images/cross-chain/Parachains_id.jpg */ \"sgen\"),\"alt\":\"ids\"}})],1),_c('p',[_vm._v(\"Then go to Earth parachain and \"),_c('a',{attrs:{\"href\":\"https://wiki.robonomics.network/docs/create-account-in-dapp/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"create\")]),_vm._v(\" two accounts (for example \"),_c('code',{pre:true},[_vm._v(\"ROBOT\")]),_vm._v(\" and \"),_c('code',{pre:true},[_vm._v(\"EMPLOYER\")]),_vm._v(\"). In a new tab go to Mars parachain.\")]),_c('h2',{attrs:{\"id\":\"launchxcm\"}},[_c('a',{attrs:{\"href\":\"#launchxcm\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"LaunchXcm\")]),_c('p',[_vm._v(\"In Earth parachain go to \"),_c('code',{pre:true},[_vm._v(\"Developer/Extrinsics\")]),_vm._v(\" and choose your \"),_c('code',{pre:true},[_vm._v(\"EMPLOYER\")]),_vm._v(\" account and launchXcm. Then write Mars parachain id (2000) and choose the \"),_c('code',{pre:true},[_vm._v(\"ROBOT\")]),_vm._v(\" account:\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=launch!../images/cross-chain/launch.jpg */ \"LOc/\"),\"alt\":\"launch\"}})],1),_c('p',[_vm._v(\"Now press \"),_c('code',{pre:true},[_vm._v(\"Submit Transaction\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"To see your transaction in Mars parachain go to \"),_c('code',{pre:true},[_vm._v(\"Network/Explorer\")]),_vm._v(\" and look at Recent Events.\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=recent_launch!../images/cross-chain/recent_launch.jpg */ \"mL+y\"),\"alt\":\"recent_launch\"}})],1),_c('h2',{attrs:{\"id\":\"datalogxcm\"}},[_c('a',{attrs:{\"href\":\"#datalogxcm\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"DatalogXcm\")]),_c('p',[_vm._v(\"In Earth parachain go to \"),_c('code',{pre:true},[_vm._v(\"Developer/Extrinsics\")]),_vm._v(\" and choose your \"),_c('code',{pre:true},[_vm._v(\"ROBOT\")]),_vm._v(\" account and datalogXcm. Write Mars parachain id (2000) and the message:\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=datalog!../images/cross-chain/datalog.jpg */ \"moN4\"),\"alt\":\"datalog\"}})],1),_c('p',[_vm._v(\"Now press \"),_c('code',{pre:true},[_vm._v(\"Submit Transaction\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"You can see your transaction in Recent Events in Mars parachain:\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=recent_datalog!../images/cross-chain/recent_datalog.jpg */ \"Mbtw\"),\"alt\":\"recent_datalog\"}})],1)])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ja/cross-chain-messages.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22293f11d7-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "1Ile":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/cross-chain-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Cross-chain Message\",\n  \"contributors\": [\"Vourhey\", \"LoSk-p\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/cross-chain-messages.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "5Qjt":
/*!*********************************************************************************************!*\
  !*** ./docs/ja/cross-chain-messages.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_cross_chain_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./cross-chain-messages.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"MyYO\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_cross_chain_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/cross-chain-messages.md?");

/***/ }),

/***/ "Kz2L":
/*!*****************************************!*\
  !*** ./docs/ja/cross-chain-messages.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cross_chain_messages_md_vue_type_template_id_50bcd9dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cross-chain-messages.md?vue&type=template&id=50bcd9dc& */ \"MHMM\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _cross_chain_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cross-chain-messages.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"5Qjt\");\n/* harmony import */ var _cross_chain_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross-chain-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"rGeX\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _cross_chain_messages_md_vue_type_template_id_50bcd9dc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _cross_chain_messages_md_vue_type_template_id_50bcd9dc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _cross_chain_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_cross_chain_messages_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _cross_chain_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_cross_chain_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/cross-chain-messages.md?");

/***/ }),

/***/ "MHMM":
/*!************************************************************************!*\
  !*** ./docs/ja/cross-chain-messages.md?vue&type=template&id=50bcd9dc& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_293f11d7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_cross_chain_messages_md_vue_type_template_id_50bcd9dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"293f11d7-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./cross-chain-messages.md?vue&type=template&id=50bcd9dc& */ \"/vzk\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_293f11d7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_cross_chain_messages_md_vue_type_template_id_50bcd9dc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_293f11d7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_cross_chain_messages_md_vue_type_template_id_50bcd9dc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/cross-chain-messages.md?");

/***/ }),

/***/ "MyYO":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/cross-chain-messages.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/cross-chain-messages.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "rGeX":
/*!**************************************************************************************************!*\
  !*** ./docs/ja/cross-chain-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_cross_chain_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./cross-chain-messages.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"1Ile\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_cross_chain_messages_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/cross-chain-messages.md?");

/***/ })

}]);