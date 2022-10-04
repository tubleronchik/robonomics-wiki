(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ru--spot-lesson-1-md"],{

/***/ "02gg":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson1.md?vue&type=template&id=07f99c5a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"Welcome to the first lesson!\")]), _c('p', [_vm._v(\"During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.\")]), _c('p', [_vm._v(\"Watch our introductory video if you haven't seen it already:\")]), _c('div', {\n    staticClass: \"youtube-embed\"\n  }, [_c('div', {\n    staticStyle: {\n      \"width\": \"100%\",\n      \"margin\": \"0 auto\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      \"position\": \"relative\",\n      \"padding-bottom\": \"56.25%\",\n      \"padding-top\": \"25px\",\n      \"height\": \"0\"\n    }\n  }, [_c('iframe', {\n    staticStyle: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\"\n    },\n    attrs: {\n      \"src\": \"https://www.youtube-nocookie.com/embed/qdk7BjWJprc\",\n      \"allow\": \"autoplay; encrypted-media\",\n      \"allowfullscreen\": \"\"\n    }\n  })])])]), _c('h2', {\n    attrs: {\n      \"id\": \"the-challenge\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#the-challenge\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"The challenge\")]), _c('p', [_vm._v(\"Create a Python script controls robot body position. Run your script on Spot to let it execute a sequence of motions:\")]), _c('ol', [_c('li', [_vm._v(\"Stand-up,\")]), _c('li', [_vm._v(\"Trace your initials with it's face (one letter, at least 3 points),\")]), _c('li', [_vm._v(\"Sit-down.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"theory\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#theory\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Theory\")]), _c('p', [_vm._v(\"Read \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/python/understanding_spot_programming\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Understanding Spot Programming\")]), _vm._v(\" page in Spot SDK documentation.\\nYou need to understand what is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"E-Stop\")]), _vm._v(\" and how make initialization in your Python script in order to to let the robot execute commands.\")]), _c('p', [_vm._v(\"You can find more detailed information for this lesson in \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/concepts/base_services\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Base Services\")]), _vm._v(\", \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/concepts/geometry_and_frames\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Geometry and Frames\")]), _vm._v(\", \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/concepts/robot_services\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robot Services\")]), _vm._v(\" and \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/concepts/estop_service\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"E-Stop\")]), _vm._v(\" sections of the Spot SDK documentation.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"practice\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#practice\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Practice\")]), _c('blockquote', [_c('p', [_vm._v(\"Ensure you have Yggdrasil Network software running and configured as described in the \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/spot-lesson0\"\n    }\n  }, [_vm._v(\"Lesson 0\")]), _vm._v(\". Otherwise you will not have connection to the robot.\\nOn macOS you may need to launch Yggdrasil Network in the terminal:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo yggdrasil -useconffile /etc/yggdrasil.conf\")])])]), _c('ol', [_c('li', [_vm._v(\"Connect to SpotCORE by SSH from the terminal,\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-console\"\n    }\n  }, [_vm._v(\"ssh student@strelka.ygg.merklebot.com\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Create a script can authenticate in Spot, acquire control (lease) and power on the robot.\")])]), _c('p', [_vm._v(\"We create \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/python/examples/estop/readme\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"E-Stop endpoint\")]), _vm._v(\" for you, so you should not create it.\\nFor Spot authentication use username and password from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/home/student/credentials\")]), _vm._v(\" file. Spot address is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"192.168.50.3\")]), _vm._v(\".\")]), _c('blockquote', [_c('p', [_vm._v(\"In \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Taking ownership of Spot (Leases)\")]), _vm._v(\" section use \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"lease = lease_client.acquire()\")]), _vm._v(\" before \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)\")])])]), _c('ol', {\n    attrs: {\n      \"start\": \"3\"\n    }\n  }, [_c('li', [_vm._v(\"Try your script with stand-up and sit-down commands. Ensure robot moves as expected,\")])]), _c('blockquote', [_c('p', [_vm._v(\"Make sure you run your script by Python 3 with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"python3\")]), _vm._v(\" command. Command \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"python\")]), _vm._v(\" refers to an obsolete Python 2 interpreter.\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"4\"\n    }\n  }, [_c('li', [_vm._v(\"Add body position control to your script. Experiment with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"bosdyn.geometry.EulerZXY\")]), _vm._v(\" robot command argument builder in order to identify what yaw, roll and pitch parameters you need to set to solve the challenge. The range of Pitch, Yaw and Roll is from -0.5 to 0.5.\")])])]);\n};\n\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson1.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "0Vku":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson1.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson1.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "CR1D":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson1.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 1. Emergency stop, initialization, body position control\",\n  \"contributors\": [\"LoSk-p\", \"vitl2907\", \"khssnv\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson1.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "D+Eh":
/*!*********************************!*\
  !*** ./docs/ru/spot-lesson1.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spot_lesson1_md_vue_type_template_id_07f99c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-lesson1.md?vue&type=template&id=07f99c5a& */ \"xd45\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _spot_lesson1_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-lesson1.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"TbSH\");\n/* harmony import */ var _spot_lesson1_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spot-lesson1.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"KTan\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _spot_lesson1_md_vue_type_template_id_07f99c5a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _spot_lesson1_md_vue_type_template_id_07f99c5a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _spot_lesson1_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_spot_lesson1_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _spot_lesson1_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_spot_lesson1_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson1.md?");

/***/ }),

/***/ "KTan":
/*!******************************************************************************************!*\
  !*** ./docs/ru/spot-lesson1.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson1_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson1.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"CR1D\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson1_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/spot-lesson1.md?");

/***/ }),

/***/ "TbSH":
/*!*************************************************************************************!*\
  !*** ./docs/ru/spot-lesson1.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson1_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson1.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"0Vku\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson1_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/spot-lesson1.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "xd45":
/*!****************************************************************!*\
  !*** ./docs/ru/spot-lesson1.md?vue&type=template&id=07f99c5a& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson1_md_vue_type_template_id_07f99c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson1.md?vue&type=template&id=07f99c5a& */ \"02gg\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson1_md_vue_type_template_id_07f99c5a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson1_md_vue_type_template_id_07f99c5a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson1.md?");

/***/ })

}]);