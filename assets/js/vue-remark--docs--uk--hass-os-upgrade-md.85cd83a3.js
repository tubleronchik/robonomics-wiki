(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--uk--hass-os-upgrade-md"],{

/***/ "+Kvl":
/*!************************************!*\
  !*** ./docs/uk/hass-os-upgrade.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_os_upgrade_md_vue_type_template_id_7f9f90b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=template&id=7f9f90b0 */ \"YEVD\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"RfKS\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"r3XB\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_os_upgrade_md_vue_type_template_id_7f9f90b0__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_os_upgrade_md_vue_type_template_id_7f9f90b0__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/uk/hass-os-upgrade.md?");

/***/ }),

/***/ "8fU+":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/uk/hass-os-upgrade.md?vue&type=template&id=7f9f90b0 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"У цій статті містяться інструкції щодо оновлення вашої існуючої операційної системи Home Assistant з інтеграцією Robonomics.\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/homeassistant_os.png\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"встановити-ipfs-add-on\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B2%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D0%B8-ipfs-add-on\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Встановити IPFS Add-on\")]), _c('p', [_vm._v(\"Інтеграція Robonomics зберігає дані за допомогою локального демона IPFS, тому спочатку вам потрібно встановити його. \")]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmdAmUHW9bpTU6sUwBYu4ai4DVJ6nZ5xerjM9exvooGKGq',\n        type: 'mp4'\n      }]\n    }\n  }), _c('ol', [_c('li', [_c('p', [_vm._v(\"Існує \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/ipfs-addon\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"додаток IPFS для Home Assistant\")]), _vm._v(\". Щоб встановити його, перейдіть до \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Settings\")]), _vm._v(\" -> \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Add-ons\")]), _vm._v(\" та натисніть кнопку \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ADD-ON STORE\")]), _vm._v(\" в нижньому правому куті.\")])]), _c('li', [_c('p', [_vm._v(\"Натисніть на три крапки в правому верхньому куті та виберіть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Repositories\")]), _vm._v(\". Додайте туди наступне посилання:\")])])]), _c('code-helper', {\n    attrs: {\n      \"copy\": \"\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"https://github.com/airalab/ipfs-addon\\n\")])])]), _c('ol', {\n    attrs: {\n      \"start\": \"3\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Натисніть кнопку \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ADD\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"Закрийте менеджер репозиторіїв і оновіть сторінку. Тепер в кінці сторінки ви можете побачити додаток IPFS Daemon.\")])]), _c('li', [_c('p', [_vm._v(\"Відкрийте додаток і натисніть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"INSTALL\")]), _vm._v(\". Після встановлення натисніть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"START\")]), _vm._v(\".\")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"встановіть-hacs\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B2%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D1%96%D1%82%D1%8C-hacs\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Встановіть HACS\")]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://hacs.xyz/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Home Assistant Community Store (HACS)\")]), _vm._v(\" дозволяє встановлювати користувацькі інтеграції.\")]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmYJFpxrww9PRvcAUhdgKufeDbyUFoBZTREZHPgV452kzs',\n        type: 'mp4'\n      }]\n    }\n  }), _c('ol', [_c('li', [_vm._v(\"Перед початком вам потрібно встановити додаток для підключення до пристрою Home Assistant за допомогою SSH. У магазині додатків шукайте \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ssh\")]), _vm._v(\". Рекомендуємо встановити додаток \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SSH & Web Terminal\")]), _vm._v(\".\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Warning\"\n    }\n  }, [_c('p', [_vm._v(\"  Якщо додаток SSH не знайдено, спробуйте увімкнути розширений режим у налаштуваннях вашого користувацького профілю. Для цього натисніть на значок профілю в лівому нижньому куті та знайдіть опцію Розширений режим.\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Виберіть додаток і натисніть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"INSTALL\")]), _vm._v(\". Після завершення встановлення перейдіть на вкладку \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Конфігурація\")]), _vm._v(\" та додайте \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"password\")]), _vm._v(\" або \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"authorized_keys\")]), _vm._v(\". Не забудьте зберегти цю частину конфігурації.\")])]), _c('li', [_c('p', [_vm._v(\"На вкладці \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Info\")]), _vm._v(\" натисніть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"START\")]), _vm._v(\". Якщо ви хочете побачити додаток у бічній панелі, не забудьте увімкнути \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Show in sidebar\")]), _vm._v(\".\")])])]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmcijfJ45fmW9omB67xWyPKvHhZuwLMTTQ7DBqnyxHUXR1',\n        type: 'mp4'\n      }]\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"4\"\n    }\n  }, [_c('li', [_vm._v(\"Відкрийте додаток SSH і виконайте наступну команду:\")])]), _c('code-helper', {\n    attrs: {\n      \"copy\": \"\",\n      \"additionalLine\": \"Home Assistant Command Line\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"wget -O - https://get.hacs.xyz | bash -\")])])]), _c('ol', {\n    attrs: {\n      \"start\": \"5\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Перезапустіть Home Assistant (це можна зробити в \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Settings\")]), _vm._v(\"->\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"System\")]), _vm._v(\"). \")])]), _c('li', [_c('p', [_vm._v(\"Тепер інтеграція HACS буде доступна для додавання в меню \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Integrations\")]), _vm._v(\". Перейдіть до \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Settings\")]), _vm._v(\"->\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Devices & Services\")]), _vm._v(\", натисніть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Add Integration\")]), _vm._v(\" та знайдіть HACS.\")])])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Warning\"\n    }\n  }, [_c('p', [_vm._v(\"  Для використання HACS вам потрібен обліковий запис Github.\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"7\"\n    }\n  }, [_c('li', [_vm._v(\"Натисніть на нього та дотримуйтесь інструкцій щодо встановлення. \")])]), _c('h2', {\n    attrs: {\n      \"id\": \"встановіть-інтеграцію-robonomics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B2%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D1%96%D1%82%D1%8C-%D1%96%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D1%96%D1%8E-robonomics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Встановіть інтеграцію Robonomics\")]), _c('p', [_vm._v(\"Тепер ви можете встановити інтеграцію Robonomics за допомогою HACS.\")]), _c('robo-wiki-video', {\n    attrs: {\n      \"autoplay\": \"\",\n      \"loop\": \"\",\n      \"controls\": \"\",\n      \"videos\": [{\n        src: 'https://cloudflare-ipfs.com/ipfs/QmUodGanHyTE8hCJdcCHzvdnmuyVVGvnfTuYvYTPVKhh5d',\n        type: 'mp4'\n      }]\n    }\n  }), _c('p', [_vm._v(\"Відкрийте HACS із меню бічної панелі та перейдіть до \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Integrations\")]), _vm._v(\". Натисніть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Explore & Download Repositories\")]), _vm._v(\", потім знайдіть \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Robonomics\")]), _vm._v(\" і натисніть кнопку \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Download\")]), _vm._v(\", розташовану в нижньому правому куті. Після завершення завантаження перезапустіть Home Assistant.\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/uk/hass-os-upgrade.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Dju5":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/uk/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/uk/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "RfKS":
/*!****************************************************************************************!*\
  !*** ./docs/uk/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"Dju5\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/uk/hass-os-upgrade.md?");

/***/ }),

/***/ "TCXF":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/uk/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Оновіть вашу операційну систему Home Assistant\",\n  \"contributors\": [\"LoSk-p\"],\n  \"tools\": [\"Home Assistant OS 64-9.5 for RaspPi https://github.com/home-assistant/operating-system\", \"HACS 1.31.0 https://github.com/hacs/integration/\", \"Robonomics Home Assistant Integration 1.4.1 https://github.com/airalab/homeassistant-robonomics-integration\", \"IPFS Home Assistant Addon 1.1.0 https://github.com/airalab/ipfs-addon\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/uk/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "YEVD":
/*!******************************************************************!*\
  !*** ./docs/uk/hass-os-upgrade.md?vue&type=template&id=7f9f90b0 ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_7f9f90b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=template&id=7f9f90b0 */ \"8fU+\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_7f9f90b0__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_7f9f90b0__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/uk/hass-os-upgrade.md?");

/***/ }),

/***/ "r3XB":
/*!*********************************************************************************************!*\
  !*** ./docs/uk/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"TCXF\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/uk/hass-os-upgrade.md?");

/***/ })

}]);