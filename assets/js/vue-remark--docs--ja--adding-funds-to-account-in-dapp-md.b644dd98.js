(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--adding-funds-to-account-in-dapp-md"],{

/***/ "KUCM":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/adding-funds-to-account-in-dapp.md?vue&type=template&id=5f1e93ae& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"Robonomicsポータルでアカウントを作成した後、それらに資金を追加してトランザクションを開始できるようにしましょう。\")])]),_c('robo-wiki-note',{attrs:{\"type\":\"warnオフセットサービスg\",\"title\":\"Dev Node\"}},[_c('p',[_vm._v(\"このチュートリアルおよび以下のチュートリアルは、Robonomicsノードのローカルインスタンスでデモンストレーションされいることに注意してください。 \"),_c('a',{attrs:{\"href\":\"/docs/run-dev-node\"}},[_vm._v(\"以下の手順で自分のものをセットアップしてください。 \")]),_vm._v(\".\")])]),_c('h2',{attrs:{\"id\":\"1-robonomicsポータルのアカウントセクションに移動します。\"}},[_c('a',{attrs:{\"href\":\"#1-robonomics%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%81%AE%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E7%A7%BB%E5%8B%95%E3%81%97%E3%81%BE%E3%81%99%E3%80%82\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1. Robonomicsポータルのアカウントセクションに移動します。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Accounts&title=Accounts!../images/creating-an-account/portal-top-left.jpg */ \"oXp7\"),\"alt\":\"Accounts\",\"title\":\"Accounts\"}})],1),_c('h2',{attrs:{\"id\":\"2-資金を送金したいアカウントを選択します。\"}},[_c('a',{attrs:{\"href\":\"#2-%E8%B3%87%E9%87%91%E3%82%92%E9%80%81%E9%87%91%E3%81%97%E3%81%9F%E3%81%84%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"2. 資金を送金したいアカウントを選択します。\")]),_c('p',[_vm._v(\"開発モードでは、開発ネットワークで作成された他のアカウントに資金を送金するために使用できる、それぞれ10000ユニットの資金を持つ複数のアカウントが存在します。これらのアカウントは、 \"),_c('img',{attrs:{\"alt\":\"wrench sign\",\"src\":__webpack_require__(/*! ../images/adding-funds/wrench.png */ \"434g\"),\"width\":\"20\"}}),_vm._v(\" レンチのマークで示されています\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Accounts-for-sending&title=Accounts-for-sending!../images/adding-funds/accounts-for-sending.svg */ \"/Qdd\"),\"alt\":\"Accounts-for-sending\",\"title\":\"Accounts-for-sending\"}})],1),_c('ul',[_c('li',[_vm._v(\"資金を送金したいアカウントの「送信」ボタンをクリックします。例えばBOBです。\")])]),_c('h2',{attrs:{\"id\":\"3-資金を送金したいアカウントを選択します。\"}},[_c('a',{attrs:{\"href\":\"#3-%E8%B3%87%E9%87%91%E3%82%92%E9%80%81%E9%87%91%E3%81%97%E3%81%9F%E3%81%84%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"3. 資金を送金したいアカウントを選択します。\")]),_c('p',[_vm._v(\"「送信」ボタンをクリックした後、「資金送信ウィンドウ」が表示されます。表示されたウィンドウで以下の操作を行います。 \")]),_c('ul',[_c('li',[_vm._v(\"利用可能なアカウントのリストから、資金を送信したいアカウントを選択します\")]),_c('li',[_vm._v(\"送信したいユニット数を入力します。\")]),_c('li',[_vm._v(\"「送金を作成」ボタンを押します。\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Transfer-Funds&title=Transfer-Funds!../images/adding-funds/send-funds.png */ \"Zr1m\"),\"alt\":\"Transfer-Funds\",\"title\":\"Transfer-Funds\"}})],1),_c('h2',{attrs:{\"id\":\"4-トランザクションを承認します。\"}},[_c('a',{attrs:{\"href\":\"#4-%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B6%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E6%89%BF%E8%AA%8D%E3%81%97%E3%81%BE%E3%81%99%E3%80%82\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"4. トランザクションを承認します。\")]),_c('p',[_vm._v(\"前のステージで「送金を作成」ボタンを押した後、「トランザクション承認ウィンドウ」が表示されます。\"),_c('br'),_vm._v(\"\\nトランザクションの詳細を確認し、「署名と送信」ボタンをクリックします。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=sign-transaction&title=sign-transaction!../images/adding-funds/sign-transaction.png */ \"leYS\"),\"alt\":\"sign-transaction\",\"title\":\"sign-transaction\"}}),_vm._v(\"\\nこの例では、「BOB」から「EMPLOYER」に500ユニットの資金を送金しました。EMPLOYERのアカウントは元々資金を持っていなかったため、現在500ユニットの資金があります.\")],1),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=funds-added&title=funds-added!../images/adding-funds/funds-added.svg */ \"uH0Z\"),\"alt\":\"funds-added\",\"title\":\"funds-added\"}})],1),_c('p',[_c('strong',[_vm._v(\"プレイグラウンドで使用するアカウントに十分な資金があることを確認してください.\")])])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ja/adding-funds-to-account-in-dapp.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "OBdV":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/adding-funds-to-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/adding-funds-to-account-in-dapp.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "VfxQ":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/adding-funds-to-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"ロボノミクス ポータルのアカウントに資金を追加する\",\n  \"contributors\": [\"Houman\"],\n  \"tools\": [\"Robonomics 2.4.0 https://github.com/airalab/robonomics\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/adding-funds-to-account-in-dapp.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "WU8F":
/*!***********************************************************************************!*\
  !*** ./docs/ja/adding-funds-to-account-in-dapp.md?vue&type=template&id=5f1e93ae& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_adding_funds_to_account_in_dapp_md_vue_type_template_id_5f1e93ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./adding-funds-to-account-in-dapp.md?vue&type=template&id=5f1e93ae& */ \"KUCM\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_adding_funds_to_account_in_dapp_md_vue_type_template_id_5f1e93ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_adding_funds_to_account_in_dapp_md_vue_type_template_id_5f1e93ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/adding-funds-to-account-in-dapp.md?");

/***/ }),

/***/ "dFyP":
/*!*************************************************************************************************************!*\
  !*** ./docs/ja/adding-funds-to-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_adding_funds_to_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./adding-funds-to-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"VfxQ\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_adding_funds_to_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/adding-funds-to-account-in-dapp.md?");

/***/ }),

/***/ "mvy8":
/*!****************************************************!*\
  !*** ./docs/ja/adding-funds-to-account-in-dapp.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _adding_funds_to_account_in_dapp_md_vue_type_template_id_5f1e93ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adding-funds-to-account-in-dapp.md?vue&type=template&id=5f1e93ae& */ \"WU8F\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _adding_funds_to_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adding-funds-to-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"xrEn\");\n/* harmony import */ var _adding_funds_to_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adding-funds-to-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"dFyP\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _adding_funds_to_account_in_dapp_md_vue_type_template_id_5f1e93ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _adding_funds_to_account_in_dapp_md_vue_type_template_id_5f1e93ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _adding_funds_to_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_adding_funds_to_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _adding_funds_to_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_adding_funds_to_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/adding-funds-to-account-in-dapp.md?");

/***/ }),

/***/ "xrEn":
/*!********************************************************************************************************!*\
  !*** ./docs/ja/adding-funds-to-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_adding_funds_to_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./adding-funds-to-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"OBdV\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_adding_funds_to_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/adding-funds-to-account-in-dapp.md?");

/***/ })

}]);