(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "1det":
/*!*************************************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./RoboWikiFeedbackForm.vue?vue&type=script&lang=js */ \"rk/g\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ }),

/***/ "An4q":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoboWikiFeedbackForm.vue?vue&type=template&id=4e62b03c&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('div', {\n    staticClass: \"robo-wiki-feedback-form__wrapper\"\n  }, [_c('div', {\n    staticClass: \"robo-wiki-feedback-form__header\"\n  }, [_c('div', [_vm.$store.state.currentReaction === _vm.text ? _c('span', {\n    staticClass: \"robo-wiki-feedback-form__check\"\n  }) : _vm._e(), _c('h3', [_vm._v(_vm._s(_vm.$store.state.currentReaction))])]), _c('span', {\n    staticClass: \"robo-wiki-feedback-form__close\",\n    attrs: {\n      \"tabindex\": \"0\"\n    },\n    on: {\n      \"click\": function ($event) {\n        return _vm.$emit('closeForm');\n      }\n    }\n  }, [_c('font-awesome-icon', {\n    attrs: {\n      \"icon\": \"fa-solid fa-xmark\",\n      \"aria-hidden\": \"true\"\n    }\n  })], 1)]), _vm.result !== 'success' && _vm.$store.state.currentReaction === _vm.text ? _c('gsp-form', {\n    staticClass: \"robo-wiki-feedback-form__form\",\n    class: _vm.result,\n    attrs: {\n      \"gscriptID\": _vm.gscript,\n      \"captchaStyle\": _vm.captchaStyle\n    }\n  }, [_c('div', [_c('input', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.email,\n      expression: \"email\"\n    }],\n    attrs: {\n      \"type\": \"email\",\n      \"placeholder\": \"Your email\",\n      \"required\": \"\",\n      \"data-gsp-name\": \"Email (optional)\",\n      \"data-gsp-data\": _vm.email\n    },\n    domProps: {\n      \"value\": _vm.email\n    },\n    on: {\n      \"input\": function ($event) {\n        if ($event.target.composing) return;\n        _vm.email = $event.target.value;\n      }\n    }\n  }), _c('textarea', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.comment,\n      expression: \"comment\"\n    }],\n    attrs: {\n      \"type\": \"text\",\n      \"placeholder\": \"Your comment\",\n      \"data-gsp-name\": \"Feedback (optional)\",\n      \"data-gsp-data\": _vm.comment\n    },\n    domProps: {\n      \"value\": _vm.comment\n    },\n    on: {\n      \"input\": function ($event) {\n        if ($event.target.composing) return;\n        _vm.comment = $event.target.value;\n      }\n    }\n  }), _c('input', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.location,\n      expression: \"location\"\n    }],\n    attrs: {\n      \"type\": \"hidden\",\n      \"placeholder\": \"location\",\n      \"data-gsp-name\": \"Location\",\n      \"data-gsp-data\": _vm.location\n    },\n    domProps: {\n      \"value\": _vm.location\n    },\n    on: {\n      \"input\": function ($event) {\n        if ($event.target.composing) return;\n        _vm.location = $event.target.value;\n      }\n    }\n  }), _c('input', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.$store.state.currentReaction,\n      expression: \"$store.state.currentReaction\"\n    }],\n    attrs: {\n      \"type\": \"hidden\",\n      \"placeholder\": \"reaction\",\n      \"data-gsp-name\": \"Reaction\",\n      \"data-gsp-data\": _vm.$store.state.currentReaction\n    },\n    domProps: {\n      \"value\": _vm.$store.state.currentReaction\n    },\n    on: {\n      \"input\": function ($event) {\n        if ($event.target.composing) return;\n        _vm.$set(_vm.$store.state, \"currentReaction\", $event.target.value);\n      }\n    }\n  }), _c('button', {\n    staticClass: \"robo-wiki-feedback-form__btn\",\n    attrs: {\n      \"disabled\": _vm.result === 'wait'\n    },\n    on: {\n      \"click\": _vm.form\n    }\n  }, [_vm.result === 'init' || _vm.result === 'error' ? _c('div', {\n    staticClass: \"robo-wiki-feedback-form__btn-wrapper\"\n  }, [_c('font-awesome-icon', {\n    attrs: {\n      \"icon\": \"fa-solid fa-envelope\",\n      \"aria-hidden\": \"true\"\n    }\n  }), _c('span', [_vm._v(_vm._s(_vm.$t('Tell us more')))])], 1) : _vm._e(), _vm.result === 'wait' ? _c('div', {\n    staticClass: \"robo-wiki-feedback-form__btn-wrapper\"\n  }, [_c('Loader', {\n    staticClass: \"loader\"\n  }), _c('span', [_vm._v(_vm._s(_vm.$t('Sending your info...')))])], 1) : _vm._e()])])]) : _vm._e(), _vm.result === 'success' ? _c('div', {\n    staticClass: \"robo-wiki-feedback-form__success\"\n  }, [_c('font-awesome-icon', {\n    attrs: {\n      \"icon\": \"fa-solid fa-envelope\",\n      \"aria-hidden\": \"true\"\n    }\n  }), _c('div', [_vm._v(_vm._s(_vm.$t('Thanks')) + \",\"), _c('br'), _vm._v(\" \" + _vm._s(_vm.$t(\"we'll keep in touch!\")))])], 1) : _vm._e()], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "IhEH":
/*!*******************************************************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue?vue&type=template&id=4e62b03c&scoped=true ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_template_id_4e62b03c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./RoboWikiFeedbackForm.vue?vue&type=template&id=4e62b03c&scoped=true */ \"An4q\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_template_id_4e62b03c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_template_id_4e62b03c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ }),

/***/ "N/jY":
/*!*************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RoboWikiFeedbackForm_vue_vue_type_template_id_4e62b03c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoboWikiFeedbackForm.vue?vue&type=template&id=4e62b03c&scoped=true */ \"IhEH\");\n/* harmony import */ var _RoboWikiFeedbackForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoboWikiFeedbackForm.vue?vue&type=script&lang=js */ \"1det\");\n/* empty/unused harmony star reexport *//* harmony import */ var _RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_4e62b03c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=4e62b03c&prod&scoped=true&lang=css */ \"dOYL\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _RoboWikiFeedbackForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _RoboWikiFeedbackForm_vue_vue_type_template_id_4e62b03c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _RoboWikiFeedbackForm_vue_vue_type_template_id_4e62b03c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4e62b03c\",\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ }),

/***/ "dOYL":
/*!**************************************************************************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=4e62b03c&prod&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_4e62b03c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=4e62b03c&prod&scoped=true&lang=css */ \"jbOm\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_4e62b03c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_4e62b03c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_4e62b03c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_4e62b03c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ }),

/***/ "jbOm":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=4e62b03c&prod&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "rk/g":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoboWikiFeedbackForm.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Loader: () => Promise.all(/*! import() */[__webpack_require__.e(\"styles\"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ~/components/Spinner.vue */ \"I3XD\"))\n  },\n  props: {\n    text: {\n      type: String,\n      required: true,\n      default: ''\n    }\n  },\n  data() {\n    return {\n      gscript: \"\",\n      email: '',\n      result: this.$response,\n      location: '',\n      comment: '',\n      interval: null,\n      captchaStyle: {\n        width: 100,\n        height: 25,\n        textBaseline: 'top',\n        font: '25px Roboto',\n        textAlign: 'left',\n        fillStyle: '#F38488'\n      }\n    };\n  },\n  methods: {\n    form() {\n      this.interval = setInterval(() => {\n        this.result = this.$response;\n        // console.log(this.result)\n      }, 1000);\n\n      // if (this.$response === 'success' || this.$response === 'error') {\n      //   clearInterval(this.interval)\n      // }\n    }\n  },\n\n  mounted() {\n    this.location = 'https://wiki.robonomics.network' + this.$route.path;\n    if (this.$response === 'success' || this.$response === 'error') {\n      clearInterval(this.interval);\n      this.result = 'init';\n    }\n    document.body.addEventListener('click', e => {\n      if (this.$store.state.currentReaction && !e.target.closest('form')) {\n        this.$emit('closeForm');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

}]);