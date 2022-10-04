(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ru--gaka-chu-md"],{

/***/ "5QaH":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/gaka-chu.md?vue&type=template&id=5b3fe981& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c('VueRemarkRoot', [_c('div', {\n    staticClass: \"youtube-embed\"\n  }, [_c('div', {\n    staticStyle: {\n      \"width\": \"100%\",\n      \"margin\": \"0 auto\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      \"position\": \"relative\",\n      \"padding-bottom\": \"56.25%\",\n      \"padding-top\": \"25px\",\n      \"height\": \"0\"\n    }\n  }, [_c('iframe', {\n    staticStyle: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\"\n    },\n    attrs: {\n      \"src\": \"https://www.youtube-nocookie.com/embed/GxlYxaykqTU\",\n      \"allow\": \"autoplay; encrypted-media\",\n      \"allowfullscreen\": \"\"\n    }\n  })])])]), _c('p', [_c('strong', [_vm._v(\"In this article we will go through some installation and launching steps to set up a robot-painter. Requirements:\")])]), _c('ul', [_c('li', [_vm._v(\"KUKA KR6 R900 sixx with KRC4 and a SmartPad;\")]), _c('li', [_vm._v(\"Intel NUC with \"), _c('a', {\n    attrs: {\n      \"href\": \"http://wiki.ros.org/melodic/Installation/Ubuntu\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"ROS melodic\")]), _vm._v(\" installed;\")]), _c('li', [_vm._v(\"Table, paint, brush, water.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"software-installation-on-krc4\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#software-installation-on-krc4\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Software installation on KRC4\")]), _c('p', [_vm._v(\"EKI interface is required on both, KRC4 and NUC. Detailed information on how to set it up on KRC4 is presented \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/AlexeiOvcharov/kuka_experimental/tree/a915bf4e932990379c84164713e7ae11a24a2a13/kuka_eki_hw_interface/krl\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\". Launch it on robot's controller.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"software-installation-on-nuc\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#software-installation-on-nuc\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Software installation on NUC\")]), _c('p', [_vm._v(\"Create a catkin workspace:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"mkdir -p ~/catkin_ws/src\\ncd ~/catkin_ws/\\ncatkin build\\n\")])]), _c('p', [_vm._v(\"Download ROS packages. All the scripts are stored \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robot_painter/tree/test_branch\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\". Clone the repository:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"cd src\\ngit clone --branch test_branch https://github.com/airalab/robot_painter\\ncd robot_painter\\nrm -rf scenes\\nmv * ../\\ncd ..\\nrmdir robot_painter\\n\")])]), _c('p', [_vm._v(\"You may need some header files and libraries to make it all work correctly. Download them:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"cd ~\\ngit clone https://github.com/PaTara43/kuka_moveit_webots\\ncd kuka_moveit_webots\\nsudo mv -r headers/* usr/include/c++/7/\\nsudo mv libs/* usr/local/lib/\\ncd ~\\nsvn checkout https://github.com/PX4/Matrix/trunk/matrix\\nmv matrix -r /usr/include/c++/7/\\nsudo apt-get install ros-melodic-brics-actuator\\ncd ~/catkin_ws\\ncatkin build\\n\")])]), _c('p', [_vm._v(\"Add source command to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\".bashrc\")]), _vm._v(\" file:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"echo “source ~/catkin_ws/devel/setup.bash” >> ~/.bashrc\\nsource ~/.bashrc\\n\")])]), _c('p', [_vm._v(\"Up to now. you should be able to launch the scripts. If something goes wrong, try some \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robot_painter/issues\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"troubleshooting\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"filling-in-constants\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#filling-in-constants\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Filling in constants\")]), _c('p', [_vm._v(\"First of all, the robot needs to know canvas location and orientation as well as the paint tin position. All of this is specified in \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"fake_painter_enviroment_tf/src/tf_broadcaster.cpp\")]), _vm._v(\". Let's take a look into it.\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"// Plane constants\\nconst double A = -0.0641;\\nconst double B = 0.0214;\\nconst double C = 0.9977;\\nconst double D = -0.2198;\\n\\n// Canvas transform\\nconst double px = 0.52;\\nconst double py = -0.24;\\nconst double qx = -0.011;\\nconst double qy = -0.032;\\nconst double qz = 0.0;\\nconst double qw = 0.999;\\n\")])]), _c('p', [_vm._v(\"These are the plane equation constants which specify canvas position in 3-D space. They are to be obtained during a calibration process described below. Next goes the paint.\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"colorTransform.transform.translation.x = 0.5;\\ncolorTransform.transform.translation.y = 0.2;\\ncolorTransform.transform.translation.z = 0.258;\\n\")])]), _c('p', [_vm._v(\"These are paint tin coordinates. They also may be specified while calibrating. Canvas size is specified in\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"canvas.width = 0.5;\\ncanvas.height = 0.4;\\n\")])]), _c('p', [_vm._v(\"Several more important constants are stored in \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"local_task_planner/src/Drawing.cpp\")]), _vm._v(\":\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"const double COLOR_BOTLE_HEIGHT = 0.06;\\nconst double COLOR_HEIGHT = 0.045;\\nconst double HEIGHT_OFFSET = COLOR_BOTLE_HEIGHT - COLOR_HEIGHT + 0.02;\\nconst double BRUSH_HEIGHT = 0.01;\\nconst double BRUSH_WIDTH = 0.01;\\n\")])]), _c('p', [_vm._v(\"Their names say it all, so fill them in according to the situation.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"calibrating-gaka-chu\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#calibrating-gaka-chu\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Calibrating Gaka-Chu\")]), _c('p', [_vm._v(\"The calibration process itself is pretty simple.\")]), _c('p', [_vm._v(\"1) Start EKI interface on the KRC4:\")]), _c('p', [_vm._v(\"Log in in 'AUT' mode, turn on drivers and launch the script \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"eki_hw_interface\")])]), _c('p', [_vm._v(\"2) Start EKI interface on the NUC\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"roslaunch kuka_eki_hw_interface test_hardware_interface.launch\\n\")])]), _c('p', [_vm._v(\"It should output endless logs.\")]), _c('p', [_vm._v(\"3) Start RViz\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"roslaunch kuka_moveit_config demo.launch\\n\")])]), _c('p', [_vm._v(\"You should see the following:\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=KUKA%20in%20RViz&title=KUKA%20in%20RViz!../images/kuka-real/kuka_rviz.png */ \"L0J8\"),\n      \"alt\": \"KUKA in RViz\",\n      \"title\": \"KUKA in RViz\"\n    }\n  })], 1), _c('p', [_vm._v(\"Try moving the end effector and clicking 'Plan and Execute'. The robot should move. On SmartPad go to \"), _c('strong', [_vm._v(\"Display -> Actual position\")]), _vm._v(\" and observe end effector's coordinate. Place a canvas horizontally to the robot base. Plug a brush into the brush holder and carefully move it till it barely touches the canvas. At this position, save end effector's coordinates. Repeat 12-15 times. Also, save the coordinates of the canvas center and paint tin.\\nWhen you have a set of coordinates, use \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/nakata5321/Matlab_scripts_gaka-chu\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"these\")]), _vm._v(\" Matlab scripts to resolve the missing constants and quaternion. Paste them. Rebuild your workspace with\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"cd ~/catkin_workspace\\nrm -rf build logs devel\\ncatkin build\\n\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"testing-gaka-chu-calibration\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#testing-gaka-chu-calibration\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Testing Gaka-Chu calibration\")]), _c('p', [_vm._v(\"When calibrated, Gaka-Chu needs to be tested by drawing the borders of canvas. To make him do so execute each in new terminal:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"roslaunch kuka_eki_hw_interface test_hardware_interface.launch\\nroslaunch kuka_moveit_config demo.launch\\nrosrun fake_painter_enviroment_tf tf_broadcaster\\nrosrun local_task_planner draw_workspace\\n\")])]), _c('p', [_vm._v(\"After this, you should see a canvas contour in RViz:\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=KUKA%20in%20RViz%20canvas&title=KUKA%20in%20RViz%20canvas!../images/kuka-real/kuka_rviz_canvas.png */ \"O0ag\"),\n      \"alt\": \"KUKA in RViz canvas\",\n      \"title\": \"KUKA in RViz canvas\"\n    }\n  })], 1), _c('p', [_vm._v(\"In terminal press \\\"S\\\" to perform testing. Robot's end effector should move right above the borders of the canvas and the brush should gently touch the canvas during the entire movement. If not so, try recalibrating. If the canvas model is rotated wrong, you can rotate it by changing quaternion in Matlab.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"making-art\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#making-art\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Making art\")]), _c('p', [_vm._v(\"You need 6 basic modules to make it all work:\")]), _c('ul', [_c('li', [_vm._v(\"EKI interface;\")]), _c('li', [_vm._v(\"MOVEit + RViz;\")]), _c('li', [_vm._v(\"Environment frames broadcasting;\")]), _c('li', [_vm._v(\"Picture converter service;\")]), _c('li', [_vm._v(\"Trajectories drawing module;\")]), _c('li', [_vm._v(\"Starting trigger.\")])]), _c('p', [_vm._v(\"Let's launch them one by one.\")]), _c('h3', {\n    attrs: {\n      \"id\": \"eki-interface\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#eki-interface\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Eki interface\")]), _c('p', [_vm._v(\"On KRC4 launch \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"eki_hw_interface\")]), _vm._v(\", on NUC in a new terminal do:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"roslaunch kuka_eki_hw_interface test_hardware_interface.launch\\n\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"rviz-and-moveit\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#rviz-and-moveit\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"RViz and MOVEit\")]), _c('p', [_vm._v(\"You need a planner and a simulation. Launch them with\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"roslaunch kuka_moveit_config demo.launch\\n\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"environment\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#environment\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Environment\")]), _c('p', [_vm._v(\"Tell the robot where the paint tin and the canvas are. Note that it is not necessary to launch \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"draw workspace\")]), _vm._v(\" node, the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"tf_broadcaster\")]), _vm._v(\" shares the canvas size. It just doesn't show it in RViz.\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"rosrun fake_painter_enviroment_tf tf_broadcaster\\n\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"pictures-processor\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#pictures-processor\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Pictures processor\")]), _c('p', [_vm._v(\"All incoming pictures need to be processed. Launch the service.\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"rosrun picture_preprocessing TextConverter.py\\n\")])]), _c('p', [_vm._v(\"When it receives the call, it processes a picture with a HP filter and creates a rosbag file with trajectories.\")]), _c('h3', {\n    attrs: {\n      \"id\": \"trajectories-drawer\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#trajectories-drawer\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Trajectories drawer\")]), _c('p', [_vm._v(\"The mainest script here is the trajectories drawer itself. It waits for the picture, calls TextConverter service and draws the painting.\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"rosrun local_task_planner trajectory_drawing\\n\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"send-the-robot-a-picture-to-draw\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#send-the-robot-a-picture-to-draw\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Send the robot a picture to draw\")]), _c('p', [_vm._v(\"The robot listens to a specific ROS-topic where you need to pass the path to a desired picture. The picture should be square (width equals height) and made of lines. Send the path:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"rostopic pub /run std_msgs/String \\\"data: '<path_to_picture>'\\\"\\n\")])]), _c('p', [_vm._v(\"After that. Two windows pop up showing the contours and the tracks. Close them and see Gaka-Chu drawing. Watch out for safety and alwasy be ready to press emergency stop button.\\nWhen Gaka-Chu finishes his art, you can send another path to picture and painter repeats the whole process.\")])]);\n};\n\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ru/gaka-chu.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "PVO3":
/*!*****************************!*\
  !*** ./docs/ru/gaka-chu.md ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gaka_chu_md_vue_type_template_id_5b3fe981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaka-chu.md?vue&type=template&id=5b3fe981& */ \"iu33\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _gaka_chu_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gaka-chu.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"Uub1\");\n/* harmony import */ var _gaka_chu_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gaka-chu.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"xx9i\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _gaka_chu_md_vue_type_template_id_5b3fe981___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _gaka_chu_md_vue_type_template_id_5b3fe981___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _gaka_chu_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_gaka_chu_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _gaka_chu_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_gaka_chu_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ru/gaka-chu.md?");

/***/ }),

/***/ "Uub1":
/*!*********************************************************************************!*\
  !*** ./docs/ru/gaka-chu.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gaka_chu_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gaka-chu.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"YfMZ\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gaka_chu_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/gaka-chu.md?");

/***/ }),

/***/ "YfMZ":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/gaka-chu.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ru/gaka-chu.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "g2TG":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/gaka-chu.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Gaka-Chu setup and software Installation\",\n  \"contributors\": [\"PaTara43\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ru/gaka-chu.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "iu33":
/*!************************************************************!*\
  !*** ./docs/ru/gaka-chu.md?vue&type=template&id=5b3fe981& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gaka_chu_md_vue_type_template_id_5b3fe981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gaka-chu.md?vue&type=template&id=5b3fe981& */ \"5QaH\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gaka_chu_md_vue_type_template_id_5b3fe981___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gaka_chu_md_vue_type_template_id_5b3fe981___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ru/gaka-chu.md?");

/***/ }),

/***/ "xx9i":
/*!**************************************************************************************!*\
  !*** ./docs/ru/gaka-chu.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gaka_chu_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gaka-chu.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"g2TG\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gaka_chu_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/gaka-chu.md?");

/***/ })

}]);