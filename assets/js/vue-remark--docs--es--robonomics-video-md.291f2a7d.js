(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--es--robonomics-video-md"],{

/***/ "AIDz":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/robonomics-video.md?vue&type=template&id=6ba171d7& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"Este artículo muestra cómo agregar una cámara IP a Home Assistant y enviar videos al Servicio Web Robonomics.\")]),_c('p',[_vm._v(\"Para conectar una cámara a Home Assistant, necesitas conocer su dirección IP y crear una cuenta de cámara local para conectarte al flujo RTSP.\")]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\"}},[_vm._v(\"\\nDado que esto se hace de manera diferente para cada cámara, este proceso no se considera en este artículo.\\n\")]),_c('p',[_vm._v(\"Requisitos:\")]),_c('ul',[_c('li',[_vm._v(\"Cámara IP\")]),_c('li',[_vm._v(\"Cuenta de cámara local configurada\")]),_c('li',[_vm._v(\"Dirección IP de la cámara\")]),_c('li',[_vm._v(\"Home Assistant configurado\")])]),_c('robo-wiki-note',{attrs:{\"type\":\"note\"}},[_c('p',[_vm._v(\"Este artículo asume que tienes una cámara IP general sin opciones de RTZ (rotar, inclinar, hacer zoom). \\nSi tienes una cámara RTZ, consulta el artículo \\\"Cámara RTZ\\\" (/docs/ptz-camera). Y luego regresa al segundo paso aquí.\")])]),_c('h2',{attrs:{\"id\":\"conectar-la-cámara\"}},[_c('a',{attrs:{\"href\":\"#conectar-la-c%C3%A1mara\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Conectar la cámara\")]),_c('p',[_vm._v(\"Primero, necesita encontrar la URL de la transmisión RTSP de la cámara.\\nPara hacerlo, intenta ingresar la siguiente consulta en Internet: \\\"<NOMBRE_DE_LA_CÁMARA> flujo RTSP\\\".\\nLa URL del flujo debe comenzar con \"),_c('code',{pre:true},[_vm._v(\"rtsp://<DIRECCIÓN_IP>...\")]),_vm._v(\". \")]),_c('p',[_vm._v(\"Este artículo utiliza una cámara \\\"Tapo\\\" y la ruta del flujo es \"),_c('code',{pre:true},[_vm._v(\"rtsp://<DIRECCIÓN_IP>/stream1\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"Abre Home Assistant y ve a \\\"Settings\\\"-> \\\"Devices & Services\\\". Presiona el botón \\\"ADD INTEGRATION\\\" y\\ncomienza a escribir \\\"Generic Camera\\\". Elígelo.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/generic.jpg\"}}),_c('p',[_vm._v(\"En la ventana de configuración proporciona la siguiente información:\")]),_c('ul',[_c('li',[_vm._v(\"Stream Source URL - La URL del flujo RTSP de la cámara\")]),_c('li',[_vm._v(\"Username - escribe el nombre de usuario de tu cuenta de cámara local\")]),_c('li',[_vm._v(\"Password - escribe una contraseña para tu cuenta de cámara local\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/genericconf.jpg\"}}),_c('p',[_vm._v(\"Desplázate hacia abajo en la configuración y presiona el botón \\\"Submit\\\".\")]),_c('p',[_vm._v(\"En la ventana de vista previa, activa la casilla \\\"This image looks good.\\\" y presiona el botón \\\"Submit\\\". Luego - \\\"Finish\\\".\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/preview-camera.jpg\"}}),_c('h3',{attrs:{\"id\":\"agregar-al-tablero\"}},[_c('a',{attrs:{\"href\":\"#agregar-al-tablero\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Agregar al tablero\")]),_c('p',[_vm._v(\"Además, puedes agregar el flujo a tu tablero. Para hacer esto, ve al tablero y crea una nueva tarjeta \\n\\\"Picture Glance\\\". Pasos adicionales:\")]),_c('ul',[_c('li',[_vm._v(\"ingresa el \\\"Títle\\\" que desees\")]),_c('li',[_vm._v(\"borra los datos de \\\"Image path\\\"\")]),_c('li',[_vm._v(\"selecciona la cámara en \\\"Camera Entity\\\"\")]),_c('li',[_vm._v(\"en la \\\"Camera View\\\", selecciona \\\"en vivo\\\" para que haya menos retraso\")])]),_c('p',[_vm._v(\"Y guárdalo.\\n\"),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/camera_picture_glance.jpg\"}})],1),_c('h2',{attrs:{\"id\":\"verificar-la-carpeta-de-medios\"}},[_c('a',{attrs:{\"href\":\"#verificar-la-carpeta-de-medios\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Verificar la carpeta de medios\")]),_c('p',[_vm._v(\"Before being sent to the Robonomics Video Service, the video must be saved in a folder, and Home Assistant must have access to this folder. \\nLa opción más fácil en este caso es usar un paquete de medios, en el cual Home Assistant almacena todos los medios.\")]),_c('ul',[_c('li',[_vm._v(\"Si usas HAOS o una imagen preinstalada, tu Home Assistant \"),_c('strong',[_vm._v(\"ya tiene una carpeta de medios\")]),_vm._v(\".\")]),_c('li',[_vm._v(\"Si usas Home Assistant Core, debes ir a la carpeta \"),_c('code',{pre:true},[_vm._v(\".homeassistant\")]),_vm._v(\" y crear la carpeta \"),_c('code',{pre:true},[_vm._v(\"media\")]),_vm._v(\" en ella.\")]),_c('li',[_vm._v(\"Si usas Home Assistant Docker, agrega la línea \"),_c('code',{pre:true},[_vm._v(\"-v /RUTA_A_TU_MEDIA:/media \\\\\")]),_vm._v(\" al comando Docker.\")])]),_c('p',[_vm._v(\"Para verificar que todo se configuró correctamente, ve a la pestaña “Media” -> “local media” en tu Home Assistant. \\nDeberías ver una carpeta vacía (sin errores):\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/media-folder.jpg\"}}),_c('h2',{attrs:{\"id\":\"llamada-de-servicio\"}},[_c('a',{attrs:{\"href\":\"#llamada-de-servicio\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Llamada de servicio\")]),_c('p',[_vm._v(\"Para enviar un video a Robonomics, debes llamar a un servicio dedicado en Home Assistant. \\nEn este artículo se hace manualmente, pero puedes crear una automatización para ello.\")]),_c('p',[_vm._v(\"Para hacer esto, ve a \\\"Developer tools\\\" -> \\\"Services\\\" y busca \\\"Robonomics: Save recording to Robonomics \\\".\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/robonomics-service.jpg\"}}),_c('p',[_vm._v(\"En \\\"Targets\\\" elige la entidad de tu cámara.\\nEn \\\"Path to save the recording\\\" debes proporcionar una ruta absoluta a la carpeta,\\ndonde Home Assistant puede guardar el video:\")]),_c('ul',[_c('li',[_vm._v(\"Para imagen preinstalada - \"),_c('code',{pre:true},[_vm._v(\"/home/homeassistant/.homeassistant/media\")]),_vm._v(\";\")]),_c('li',[_vm._v(\"Para HA OS o Home Assistant Docker- \"),_c('code',{pre:true},[_vm._v(\"/media\")]),_vm._v(\";\")]),_c('li',[_vm._v(\"Para Home Assistant Core - Ruta a la carpeta de medios creada anteriormente.\")])]),_c('p',[_vm._v(\"Además, puedes elegir la Duración de la grabación. \")]),_c('p',[_vm._v(\"Completa los datos y llama al servicio con el botón \\\"CALL SERVICE\\\".\")]),_c('h2',{attrs:{\"id\":\"dapp\"}},[_c('a',{attrs:{\"href\":\"#dapp\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"DAPP\")]),_c('p',[_vm._v(\"Para ver el video resultante, ve a \"),_c('a',{attrs:{\"href\":\"https://vol4tim.github.io/videostream/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics DAPP\")]),_vm._v(\".\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/video-dapp.jpg\"}}),_c('p',[_vm._v(\"Pega la dirección de cuenta de tu controlador y haz clic en el botón de abajo. Espera el proceso de \\\"Search for Twins\\\". \\nComo resultado, obtendrás un CID de IPFS con todos los videos grabados.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/video-ipfs.jpg\"}}),_c('p',[_vm._v(\"A continuación, selecciona la cuenta del controlador (u otra) de la lista desplegable y firma un mensaje para autorizar en\\nla puerta de enlace Web3 IPFS para descargar todos los videos. Como resultado, obtendrás todos los videos grabados por tu hogar inteligente.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/show-videos.jpg\"}}),_c('p',[_vm._v(\"Dado que todos los videos en la carpeta están encriptados con la clave del controlador, debes insertarla para descifrar los videos.\\nDespués de eso, se activa el botón de reproducción de video. Haz clic en él para descargar el video.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/video-seed.jpg\"}})],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/es/robonomics-video.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Bql6":
/*!*************************************!*\
  !*** ./docs/es/robonomics-video.md ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _robonomics_video_md_vue_type_template_id_6ba171d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robonomics-video.md?vue&type=template&id=6ba171d7& */ \"mFG6\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _robonomics_video_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robonomics-video.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"NRXZ\");\n/* harmony import */ var _robonomics_video_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./robonomics-video.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"FZPv\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _robonomics_video_md_vue_type_template_id_6ba171d7___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _robonomics_video_md_vue_type_template_id_6ba171d7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _robonomics_video_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_robonomics_video_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _robonomics_video_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_robonomics_video_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/es/robonomics-video.md?");

/***/ }),

/***/ "Cpju":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/robonomics-video.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/es/robonomics-video.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "FZPv":
/*!**********************************************************************************************!*\
  !*** ./docs/es/robonomics-video.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_video_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-video.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"jQ82\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_video_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/robonomics-video.md?");

/***/ }),

/***/ "NRXZ":
/*!*****************************************************************************************!*\
  !*** ./docs/es/robonomics-video.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_video_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-video.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"Cpju\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_video_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/robonomics-video.md?");

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

/***/ "jQ82":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/robonomics-video.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Servicio de Video Robonomics\",\n  \"contributors\": [\"nakata5321\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/es/robonomics-video.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "mFG6":
/*!********************************************************************!*\
  !*** ./docs/es/robonomics-video.md?vue&type=template&id=6ba171d7& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_video_md_vue_type_template_id_6ba171d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-video.md?vue&type=template&id=6ba171d7& */ \"AIDz\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_video_md_vue_type_template_id_6ba171d7___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_video_md_vue_type_template_id_6ba171d7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/es/robonomics-video.md?");

/***/ })

}]);