(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--de--hass-core-upgrade-md"],{

/***/ "/Xgw":
/*!***********************************************************************************************!*\
  !*** ./docs/de/hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"5amq\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/de/hass-core-upgrade.md?");

/***/ }),

/***/ "/oAw":
/*!**************************************!*\
  !*** ./docs/de/hass-core-upgrade.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_core_upgrade_md_vue_type_template_id_76685178__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-core-upgrade.md?vue&type=template&id=76685178 */ \"CzXn\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"I0o3\");\n/* harmony import */ var _hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"/Xgw\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_core_upgrade_md_vue_type_template_id_76685178__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_core_upgrade_md_vue_type_template_id_76685178__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_core_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/de/hass-core-upgrade.md?");

/***/ }),

/***/ "5amq":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/de/hass-core-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Rüsten Sie Ihren Home Assistant Core auf\",\n  \"contributors\": [\"PaTara43\", \"makyul\"],\n  \"tools\": [\"Ubuntu Server 22.04.2 LTS for RaspPi https://ubuntu.com/download/raspberry-pi\", \"Home Assistant 2023.1.7 https://github.com/home-assistant/core\", \"Robonomics Home Assistant Integration 1.2.0 https://github.com/airalab/homeassistant-robonomics-integration\", \"robonomics-interface 1.3.6 https://github.com/Multi-Agent-io/robonomics-interface/\", \"IPFS 0.17.0 https://docs.ipfs.tech/\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/de/hass-core-upgrade.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "A5aX":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/de/hass-core-upgrade.md?vue&type=template&id=76685178 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"Dieser Artikel enthält Anweisungen zum Upgrade Ihres bestehenden Home Assistant Core mit der Robonomics-Integration.\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/ha_core.png\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"DISCLAIMER\"\n    }\n  }, [_c('ol', [_c('li', [_vm._v(\"Es wird angenommen, dass die Installierenierenation Ihres Home Assistant Core gemäß den \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-core\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"offiziellen Anweisungen\")]), _vm._v(\" abgeschlossen wurde und ein \"), _c('u', [_vm._v(\"homeassistant\")]), _vm._v(\"-Benutzer sowie die \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"venv\")]), _vm._v(\"-Umgebung vorhanden sind. Falls dies nicht der Fall ist, befolgen Sie die Anweisungen unten, \"), _c('strong', [_vm._v(\"aber bearbeiten Sie das Skript entsprechend\")]), _vm._v(\".\")]), _c('li', [_vm._v(\"IPFS wird als \"), _c('u', [_vm._v(\"systemd\")]), _vm._v(\"-Dienst auf dem Host-Computer installiert und ausgeführt.\")]), _c('li', [_vm._v(\"Es wird davon ausgegangen, dass Sie \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.python.org/downloads/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Python3.10\")]), _vm._v(\" oder höher installiert haben.\")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"installieren\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#installieren\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Installieren\")]), _c('p', [_vm._v(\"Laden Sie das Installationsskript herunter und führen Sie es im Terminal aus:\")]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"wget https://raw.githubusercontent.com/airalab/robonomics-hass-utils/main/raspberry_pi/install_integration_core.sh\\nbash install_integration_core.sh\")])])]), _c('p', [_vm._v(\"Sie sehen die folgende Ausgabe:\")]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"<...>\\nhttps://raw.githubusercontent.com/airalab/robonomics-hass-utils/main/raspberry_pi/install_ipfs_arc_dependent.sh\\n<...>\\nIPFS daemon installed and launched, use ipfs-daemon.service to manage.\\n<...>\\nA    robonomics/utils.py\\nChecked out revision 125.\\nIntegration downloaded!\")])])]), _c('p', [_vm._v(\"Während des Vorgangs werden Sie aufgefordert, die Neustartbestätigung für mehrere Dienste zu bestätigen. Navigieren Sie mit \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Tab\")]), _vm._v(\" zur Option \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"yes\")]), _vm._v(\".\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Error: `custom_components` exists\"\n    }\n  }, [_c('p', [_vm._v(\"  Es kann ein Fehler wie \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"mkdir: can't create directory 'custom_components': File exists\")]), _vm._v(\" auftreten. Dies bedeutet, dass Sie bereits diesen Ordner mit einigen benutzerdefinierten Komponenten installiert haben. Ignorieren Sie einfach diese Meldung.\")])]), _vm._v(\"\\n  \\nNach Abschluss starten Sie Ihren Home Assistant neu.\\n\"), _c('h2', {\n    attrs: {\n      \"id\": \"verifizieren\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#verifizieren\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Verifizieren\")]), _c('p', [_vm._v(\"Überprüfen Sie, ob der IPFS-Dienst aktiv und ausgeführt ist:\")]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"systemctl status ipfs-daemon.service \")])])]), _c('p', [_vm._v(\"Sie sehen die folgende Ausgabe:\")]), _c('code-helper', {\n    attrs: {\n      \"additionalLine\": \"rasppi_username@rasppi_hostname\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"● ipfs-daemon.service - IPFS Daemon Service\\n     Loaded: loaded (/etc/systemd/system/ipfs-daemon.service; enabled; preset: enabled)\\n     Active: active (running) since Thu 2022-11-03 11:30:39 UTC; 14min ago\\n   Main PID: 4400 (ipfs)\\n      Tasks: 12 (limit: 4416)\\n     Memory: 141.9M\\n        CPU: 3min 5.031s\\n     CGroup: /system.slice/ipfs-daemon.service\\n             └─4400 /usr/local/bin/ipfs daemon\\n\")])])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/de/hass-core-upgrade.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "CzXn":
/*!********************************************************************!*\
  !*** ./docs/de/hass-core-upgrade.md?vue&type=template&id=76685178 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_template_id_76685178__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-core-upgrade.md?vue&type=template&id=76685178 */ \"A5aX\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_template_id_76685178__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_template_id_76685178__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/de/hass-core-upgrade.md?");

/***/ }),

/***/ "I0o3":
/*!******************************************************************************************!*\
  !*** ./docs/de/hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"S73H\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_core_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/de/hass-core-upgrade.md?");

/***/ }),

/***/ "S73H":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/de/hass-core-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/de/hass-core-upgrade.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ })

}]);