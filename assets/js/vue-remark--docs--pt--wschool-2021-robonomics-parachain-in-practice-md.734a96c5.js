(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--pt--wschool-2021-robonomics-parachain-in-practice-md"],{

/***/ "1Eyf":
/*!************************************************************************************************!*\
  !*** ./docs/pt/wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=0fb29a19& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_0fb29a19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=0fb29a19& */ \"CDsg\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_0fb29a19___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_0fb29a19___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/pt/wschool2021-robonomics-parachain-in-practice.md?");

/***/ }),

/***/ "CDsg":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=0fb29a19& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"At the moment, Robonomics, in addition to the Ethereum network, also operates on the basis of the Polkadot ecosystem, which has greater scalability through the use of sharded blockchains. To do this, the ecosystem uses a \"), _c('a', {\n    attrs: {\n      \"href\": \"https://wiki.polkadot.network/docs/getting-started\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"sharded model\")]), _vm._v(\", with the following elements:\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=Polkadot%20base%20scheme&title=Polkadot%20base%20scheme%20(from%20Polkadot%20Wiki)!../images/ws_lesson4/polkadot-base-scheme.png */ \"i5AK\"),\n      \"alt\": \"Polkadot base scheme\",\n      \"title\": \"Polkadot base scheme (from Polkadot Wiki)\"\n    }\n  })], 1), _c('ul', [_c('li', [_vm._v(\"relay chain — central blockchain used by others for basic coordination of work;\")]), _c('li', [_vm._v(\"parachains — data structures (usually also blockchains) used for specific applications; Robonomics operates as a parachain;\")]), _c('li', [_vm._v(\"validators — nodes that create blocks in the relay chain and also verify new block candidates from parachains for inclusion to the shared state of Polkadot;\")]), _c('li', [_vm._v(\"collators — nodes that maintain a parachain by collecting its transactions and producing new block candidates to pass to validators;\")]), _c('li', [_vm._v(\"Cross-Consensus Messaging Format (XCM) — format that allows parachains to send messages of any type to each other.\")])]), _c('p', [_vm._v(\"The goal of this lesson is to get to know the basic elements of the Polkadot ecosystem and understand how they interact with each other. To do this, you will run your local relay chain and several Robonomics-based parachains.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"requirements\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#requirements\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Requirements\")]), _c('ul', [_c('li', [_vm._v(\"Docker, please \"), _c('a', {\n    attrs: {\n      \"href\": \"https://docs.docker.com/engine/install/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"install it\")]), _vm._v(\".\")]), _c('li', [_vm._v(\"Polkadot-launch, please \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/paritytech/polkadot-launch#install\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"install it\")]), _vm._v(\" (optionally, if you don't want to use docker).\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"launch-the-relay\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#launch-the-relay\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Launch the relay\")]), _c('p', [_vm._v(\"Run a local instance of Rococo (polkadot testnet) relay chain with two Robonomics-based parachains as the children. \")]), _c('p', [_vm._v(\"First, pull version 2 of WinterSchool Docker using the command below:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"docker pull robonomics/robonomics:winter-school-2\\n\")])]), _c('p', [_vm._v(\"Now run the docker using the command below:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"docker run -ti --rm --network host robonomics/robonomics:winter-school-2 bash\\ncd polkadot-launch/\\n./launch.sh\\n\")])]), _c('p', [_vm._v(\"Depending on the specs of your machine, it can take up to several minutes, but be patient. As a result, you should have three chain instances.\")]), _c('p', [_vm._v(\"The video below is a walk through the previous steps. Refer to the video if you would have problems with the chain instances.\\n\"), _c('Asciinema', {\n    attrs: {\n      \"vid\": \"419Jrg22ziFfMFPZlh2WtiLvg\"\n    }\n  })], 1), _c('p', [_vm._v(\"Once the instances are created, you can access them by their IDs. In our case, the IDs are as the following: \")]), _c('ul', [_c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"9944\")]), _vm._v(\" - local Rococo relay chain. (\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer\")]), _vm._v(\")\")]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"9988\")]), _vm._v(\" - robonomics parachain with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"id=100\")]), _vm._v(\" (\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9988#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9988#/explorer\")]), _vm._v(\")\")]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"9989\")]), _vm._v(\" - robonomics parachain with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"id=200\")]), _vm._v(\" (\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9989#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9989#/explorer\")]), _vm._v(\")\")])]), _c('p', [_vm._v(\"As the next step, let's create an HRMP channel to pass messages between parachains. We would use \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sudo\")]), _vm._v(\" module to call on relay chain page. To do this, Open Rocco relay chain(\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer\")]), _vm._v(\") and switch to local node from the top left. Then, go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Developer->Sudo\")]), _vm._v(\", fill in parts as shown in figure below and click on \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Submit Sudo\")]), _vm._v(\".\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=hrmp!../images/ws_lesson4/hrmp.jpg */ \"F2Da\"),\n      \"alt\": \"hrmp\"\n    }\n  })], 1), _c('p', [_vm._v(\"When the channel is created, the XCM calls would become available. Let's use \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalogXcm\")]), _vm._v(\" pallet - a XCM version of \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalog\")]), _vm._v(\" pallet in first parachain (9988).\")]), _c('p', [_vm._v(\"In the next step, switch to the first parachain(\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9988#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9988#/explorer\")]), _vm._v(\"). Find \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Settings->Developer\")]), _vm._v(\", paste the following configurations, and click on \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Save\")]), _vm._v(\".\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"{\\n    \\\"Address\\\": \\\"AccountId\\\",\\n    \\\"LookupSource\\\": \\\"AccountId\\\",\\n    \\\"AccountInfo\\\": \\\"AccountInfoWithDualRefCount\\\"\\n}\\n\")])]), _c('p', [_vm._v(\"After saving the configurations, find \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Extrinsics\")]), _vm._v(\" under the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Developer\")]), _vm._v(\" tab. Fill in the parts as shown in figure below and click on \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Submit Transaction\")]), _vm._v(\". Wait for transaction to be finalized.\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=datalogXcmSend!../images/ws_lesson4/datalogXcmSend.jpg */ \"UbU3\"),\n      \"alt\": \"datalogXcmSend\"\n    }\n  })], 1), _c('p', [_vm._v(\"As a result of the above operation, the message on second parachain will call \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalog\")]), _vm._v(\" pallet and write data onto the chain.\")]), _c('p', [_vm._v(\"To view the message, go to the other parachain (\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9989#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9989#/explorer\")]), _vm._v(\").\")]), _c('p', [_vm._v(\"You should be able to see that your message has been sent from the first parachain (9998) to the second one (9999). The message will appear in the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Explorer\")]), _vm._v(\" tab under \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"recent events\")]), _vm._v(\".\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=datalogXcmRecv!../images/ws_lesson4/datalogXcmRecv.jpg */ \"RcY6\"),\n      \"alt\": \"datalogXcmRecv\"\n    }\n  })], 1), _c('p', [_vm._v(\"This example demonstrated that how XCM could be used for cross chain usage of standard Robonomics pallets.\")])]);\n};\n\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/pt/wschool2021-robonomics-parachain-in-practice.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Dx4/":
/*!**************************************************************************************************************************!*\
  !*** ./docs/pt/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"WqbS\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/wschool2021-robonomics-parachain-in-practice.md?");

/***/ }),

/***/ "WqbS":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 4, Robonomics Parachain in Practice\",\n  \"contributors\": [\"akru\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/pt/wschool2021-robonomics-parachain-in-practice.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "gPn+":
/*!*********************************************************************************************************************!*\
  !*** ./docs/pt/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"xINx\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/wschool2021-robonomics-parachain-in-practice.md?");

/***/ }),

/***/ "wlqd":
/*!*****************************************************************!*\
  !*** ./docs/pt/wschool2021-robonomics-parachain-in-practice.md ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_0fb29a19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=0fb29a19& */ \"1Eyf\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"gPn+\");\n/* harmony import */ var _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Dx4/\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_0fb29a19___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_0fb29a19___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/pt/wschool2021-robonomics-parachain-in-practice.md?");

/***/ }),

/***/ "xINx":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Asciinema_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/Asciinema.vue */ \"+Gqu\");\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  Asciinema: _components_Asciinema_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/pt/wschool2021-robonomics-parachain-in-practice.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);