(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--it--hass-core-upgrade-md"],{

/***/ "1Lqe":
/*!******************************************************************************************!*\
  !*** ./docs/it/hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"FSgc\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/it/hass-core-upgrade.md?");

/***/ }),

/***/ "1RQe":
/*!**************************************!*\
  !*** ./docs/it/hass-core-upgrade.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_core_upgrade_md_vue_type_template_id_83c12448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-core-upgrade.md?vue&type=template&id=83c12448& */ \"SG98\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"1Lqe\");\n/* harmony import */ var _hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"cS2w\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_core_upgrade_md_vue_type_template_id_83c12448___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_core_upgrade_md_vue_type_template_id_83c12448___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/it/hass-core-upgrade.md?");

/***/ }),

/***/ "57EQ":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/it/hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Aggiorna il tuo Home Assistant Core\",\n  \"contributors\": [\"PaTara43\", \"makyul\"],\n  \"tools\": [\"Ubuntu Server 22.04.2 LTS for RaspPi https://ubuntu.com/download/raspberry-pi\", \"Home Assistant 2023.1.7 https://github.com/home-assistant/core\", \"Robonomics Home Assistant Integration 1.2.0 https://github.com/airalab/homeassistant-robonomics-integration\", \"robonomics-interface 1.3.6 https://github.com/Multi-Agent-io/robonomics-interface/\", \"IPFS 0.17.0 https://docs.ipfs.tech/\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/it/hass-core-upgrade.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "FSgc":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/it/hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/it/hass-core-upgrade.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "SG98":
/*!*********************************************************************!*\
  !*** ./docs/it/hass-core-upgrade.md?vue&type=template&id=83c12448& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_template_id_83c12448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-core-upgrade.md?vue&type=template&id=83c12448& */ \"hCZV\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_template_id_83c12448___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_template_id_83c12448___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/it/hass-core-upgrade.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "cS2w":
/*!***********************************************************************************************!*\
  !*** ./docs/it/hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"57EQ\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/it/hass-core-upgrade.md?");

/***/ }),

/***/ "hCZV":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/it/hass-core-upgrade.md?vue&type=template&id=83c12448& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"Questo articolo contiene istruzioni per aggiornare il tuo Home Assistant Core esistente con l'integrazione di Robonomics.\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/ha_core.png\"}}),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"DISCLAIMER\"}},[_c('ol',[_c('li',[_vm._v(\"Si presume che l'installazione del tuo Home Assistant Core sia stata completata in conformità alle \"),_c('a',{attrs:{\"href\":\"https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-core\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"istruzioni ufficiali\")]),_vm._v(\" e che ci sia un utente \"),_c('u',[_vm._v(\"homeassistant\")]),_vm._v(\" e l'ambiente \"),_c('code',{pre:true},[_vm._v(\"venv\")]),_vm._v(\". Se non è il caso, segui le istruzioni di seguito, \"),_c('strong',[_vm._v(\"ma modifica lo script di conseguenza\")]),_vm._v(\".\")]),_c('li',[_vm._v(\"IPFS verrà installato ed eseguito come un servizio \"),_c('u',[_vm._v(\"systemd\")]),_vm._v(\" sulla macchina host.\")]),_c('li',[_vm._v(\"Si presuppone che tu abbia \"),_c('a',{attrs:{\"href\":\"https://www.python.org/downloads/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Python 3.9\")]),_vm._v(\" o versione successiva installata.\")])])]),_c('h2',{attrs:{\"id\":\"installaare\"}},[_c('a',{attrs:{\"href\":\"#installaare\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Installaare\")]),_c('p',[_vm._v(\"Scarica lo script di installazione ed eseguilo nel terminale:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"wget https://raw.githubusercontent.com/airalab/robonomics-hass-utils/main/raspberry_pi/install_integration_core.sh\\nbash install_integration_core.sh\")])])]),_c('p',[_vm._v(\"Vedrai il seguente output:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"<...>\\nhttps://raw.githubusercontent.com/airalab/robonomics-hass-utils/main/raspberry_pi/install_ipfs_arc_dependent.sh\\n<...>\\nIPFS daemon installed and launched, use ipfs-daemon.service to manage.\\n<...>\\nA    robonomics/utils.py\\nChecked out revision 125.\\nIntegration downloaded!\")])])]),_c('p',[_vm._v(\"Durante il processo, ti verrà chiesto di confermare il riavvio di diversi servizi. Navigando con \"),_c('code',{pre:true},[_vm._v(\"tab\")]),_vm._v(\", seleziona l'opzione \"),_c('code',{pre:true},[_vm._v(\"yes\")]),_vm._v(\".\")]),_c('robo-wiki-note',{attrs:{\"type\":\"note\",\"title\":\"Error: `custom_components` exists\"}},[_c('p',[_vm._v(\"  Potresti vedere un errore come \"),_c('code',{pre:true},[_vm._v(\"mkdir: can't create directory 'custom_components': File exists\")]),_vm._v(\". Questo significa che hai già questa cartella con alcuni componenti personalizzati installati. Ignora semplicemente questo messaggio.\")])]),_vm._v(\"\\n  \\nDopo aver finito, riavvia il tuo Home Assistant.\\n\"),_c('h2',{attrs:{\"id\":\"verificare\"}},[_c('a',{attrs:{\"href\":\"#verificare\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Verificare\")]),_c('p',[_vm._v(\"Verifica che il servizio IPFS sia attivo e in esecuzione:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"systemctl status ipfs-daemon.service \")])])]),_c('p',[_vm._v(\"Vedrai il seguente output:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"● ipfs-daemon.service - IPFS Daemon Service\\n     Loaded: loaded (/etc/systemd/system/ipfs-daemon.service; enabled; preset: enabled)\\n     Active: active (running) since Thu 2022-11-03 11:30:39 UTC; 14min ago\\n   Main PID: 4400 (ipfs)\\n      Tasks: 12 (limit: 4416)\\n     Memory: 141.9M\\n        CPU: 3min 5.031s\\n     CGroup: /system.slice/ipfs-daemon.service\\n             └─4400 /usr/local/bin/ipfs daemon\\n\")])])])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/it/hass-core-upgrade.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);