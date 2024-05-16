(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--es--how-to-launch-the-robonomics-collator-md"],{

/***/ "EoqK":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Cómo lanzar el colador Robonomics\",\n  \"contributors\": [\"dergudzon\", \"Leemo94\"],\n  \"tools\": [\"Ubuntu 22.04.1 https://releases.ubuntu.com/22.04/\", \"Robonomics 2.6.0 https://github.com/airalab/robonomics\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/es/how-to-launch-the-robonomics-collator.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Tfxf":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/how-to-launch-the-robonomics-collator.md?vue&type=template&id=aa2070fc& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('robo-wiki-note',{attrs:{\"type\":\"note\",\"title\":\"Note\"}},[_vm._v(\"\\n  En el screencast y las capturas de pantalla de este artículo, utilizamos la versión 1.4.0 de Robonomics. Debes usar los mismos comandos, pero reemplazar la versión de Robonomics por la actual.\\n\")]),_c('div',{staticClass:\"youtube-embed\"},[_c('div',{staticStyle:{\"width\":\"100%\",\"margin\":\"0 auto\"}},[_c('div',{staticStyle:{\"position\":\"relative\",\"padding-bottom\":\"56.25%\",\"padding-top\":\"25px\",\"height\":\"0\"}},[_c('iframe',{staticStyle:{\"position\":\"absolute\",\"top\":\"0\",\"left\":\"0\",\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"src\":\"https://www.youtube-nocookie.com/embed/wUTDDLDbzTg\",\"allow\":\"autoplay; encrypted-media\",\"allowfullscreen\":\"\"}})])])]),_c('p',[_vm._v(\"Actualmente, la red Robonomics es mantenida principalmente por los desarrolladores iniciales, pero cualquier persona puede apoyar el proyecto. Cada nodo completo adicional de la cadena de bloques ayuda a que sea más sostenible y tolerante a fallos. Los binarios del nodo Robonomics están disponibles en \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics/releases\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"release\")]),_vm._v(\" o se pueden \"),_c('a',{attrs:{\"href\":\"/docs/how-to-build-collator-node/\"}},[_vm._v(\"compilar desde el código fuente\")]),_vm._v(\".\")]),_c('h2',{attrs:{\"id\":\"¿qué-es-un-collator\"}},[_c('a',{attrs:{\"href\":\"#%C2%BFqu%C3%A9-es-un-collator\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"¿Qué es un collator?\")]),_c('p',[_vm._v(\"Un colador es parte de la paracadena Robonomics. Este tipo de nodo crea nuevos bloques para la cadena Robonomics.\")]),_c('blockquote',[_c('p',[_vm._v(\"Los collators mantienen las parachains recopilando transacciones de los usuarios y produciendo pruebas de transición de estado para los validadores de la Relay Chain. En otras palabras, los collators mantienen las parachains agregando transacciones de parachain en candidatos de bloques de parachain y produciendo pruebas de transición de estado para los validadores basadas en esos bloques.\")])]),_c('p',[_vm._v(\"Puedes obtener más información sobre los coladores en la página wiki relacionada de \"),_c('a',{attrs:{\"href\":\"https://wiki.polkadot.network/docs/learn-collator\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Polkadot\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"En la parachain de Robonomics, cada clasificador obtiene recompensas de (\"),_c('strong',[_vm._v(\"0.001598184 XRT\")]),_vm._v(\") por cada bloque que construye (las recompensas se producen cuando los bloques se sellan a la cadena).\\nAdemás, el colador que construye el bloque recibe \"),_c('strong',[_vm._v(\"el 50% de las tarifas de transacción\")]),_vm._v(\" contenidas en el bloque que crean.\")]),_c('h2',{attrs:{\"id\":\"requisitos\"}},[_c('a',{attrs:{\"href\":\"#requisitos\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Requisitos\")]),_c('p',[_vm._v(\"Se recomienda lanzar un colador utilizando los \"),_c('strong',[_vm._v(\"requisitos de hardware estándar\")]),_vm._v(\" para \"),_c('a',{attrs:{\"href\":\"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#standard-hardware\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"validadores de Polkadot\")]),_vm._v(\":\")]),_c('ul',[_c('li',[_vm._v(\"Compatible con x86-64.\")]),_c('li',[_vm._v(\"Intel Ice Lake, o más nuevo (Xeon o serie Core); AMD Zen3, o más nuevo (EPYC o Ryzen).\")]),_c('li',[_vm._v(\"4 núcleos físicos a 3.4GHz.\")]),_c('li',[_vm._v(\"Multihilo simultáneo desactivado (Hyper-Threading en Intel, SMT en AMD).\")]),_c('li',[_vm._v(\"Almacenamiento: Un SSD NVMe de 1 TB (debe tener un tamaño razonable para manejar el crecimiento de la cadena de bloques).\")]),_c('li',[_vm._v(\"Memoria: 32 GB DDR4 ECC.\")])]),_c('p',[_vm._v(\"En este artículo utilizamos las siguientes especificaciones:\")]),_c('ul',[_c('li',[_vm._v(\"4 vCPU\")]),_c('li',[_vm._v(\"700 GB de espacio NVMe para las bases de datos del colador. Se requiere la capacidad de ampliar este espacio en disco.\")]),_c('li',[_vm._v(\"8GB de RAM.\")])]),_c('h2',{attrs:{\"id\":\"información-importante\"}},[_c('a',{attrs:{\"href\":\"#informaci%C3%B3n-importante\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Información importante\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Utilizamos algunas variables en estas instrucciones y deberás reemplazar los valores por los tuyos en todos los comandos:\")]),_c('ul',[_c('li',[_c('strong',[_vm._v(\"%NODE_NAME%\")]),_vm._v(\" es el nombre del nodo. Ejemplo: \"),_c('em',[_vm._v(\"mi-robonomics-kusama-collator\")]),_vm._v(\".\")]),_c('li',[_c('strong',[_vm._v(\"%BASE_PATH%\")]),_vm._v(\" es la ruta al volumen montado. Ejemplo: \"),_c('em',[_vm._v(\"/mnt/HC_Volume_16056435/\")]),_vm._v(\".\")]),_c('li',[_c('strong',[_vm._v(\"%POLKADOT_ACCOUNT_ADDRESS%\")]),_vm._v(\" es la dirección de la cuenta en el ecosistema de Polkadot en formato SS58. Ejemplo: \"),_c('em',[_vm._v(\"4Gp3QpacQhp4ZReGhJ47pzExQiwoNPgqTWYqEQca9XAvrYsu\")]),_vm._v(\".\")])])]),_c('li',[_c('p',[_vm._v(\"Ten en cuenta que debes incluir \"),_c('em',[_vm._v(\"--state-cache-size=0\")]),_vm._v(\" en el lanzamiento del servicio del colador. Este parámetro es importante para la estabilidad del colador.\\nPuedes ver más información en el \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics/issues/234\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"issue\")]),_vm._v(\" relacionado en GitHub.\")])])]),_c('h2',{attrs:{\"id\":\"lanzar-fácilmente-un-colador-robonomics-por-primera-vez\"}},[_c('a',{attrs:{\"href\":\"#lanzar-f%C3%A1cilmente-un-colador-robonomics-por-primera-vez\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Lanzar fácilmente un colador Robonomics por primera vez\")]),_c('p',[_vm._v(\"Puedes lanzar fácilmente un colador directamente desde la línea de comandos para verificar errores.\\nDespués de hacer esto, se recomienda encarecidamente lanzar el colador Robonomics como un servicio (siguiente paso).\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# robonomics \\\\\\n  --parachain-id=2048 \\\\\\n  --name=\\\"%NODE_NAME%\\\" \\\\\\n  --validator \\\\\\n  --lighthouse-account=\\\"%POLKADOT_ACCOUNT_ADDRESS%\\\" \\\\\\n  --telemetry-url=\\\"wss://telemetry.parachain.robonomics.network/submit/ 0\\\" \\\\\\n  --base-path=\\\"%BASE_PATH%\\\" \\\\\\n  --state-cache-size=0 \\\\\\n  -- \\\\\\n  --database=RocksDb \\n\")])]),_c('h2',{attrs:{\"id\":\"lanzar-el-colador-robonomics-como-un-servicio\"}},[_c('a',{attrs:{\"href\":\"#lanzar-el-colador-robonomics-como-un-servicio\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Lanzar el colador Robonomics como un servicio\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Crea el usuario para el servicio con directorio de inicio.\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# useradd -m robonomics\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Descarga, extrae y mueve el binario de Robonomics al directorio \"),_c('em',[_vm._v(\"/usr/local/bin/\")]),_vm._v(\". Debes reemplazar \"),_c('em',[_vm._v(\"$ROBONOMICS_VERSION\")]),_vm._v(\" con la versión actual de Robonomics en los comandos de esta sección. Puedes encontrar la versión actual en la \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics/releases\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"página de lanzamientos del repositorio de Robonomics en GitHub\")]),_vm._v(\".\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# wget https://github.com/airalab/robonomics/releases/download/v$ROBONOMICS_VERSION/robonomics-$ROBONOMICS_VERSION-x86_64-unknown-linux-gnu.tar.gz\\nroot@robokusama-collator-screencast:~# tar -xf robonomics-$ROBONOMICS_VERSION-x86_64-unknown-linux-gnu.tar.gz\\nroot@robokusama-collator-screencast:~# mv robonomics /usr/local/bin/\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Download%20Robonomics%201.4.0%20binary!../images/how-to-launch-the-robonomics-collator/wget_binary.png */ \"DckE\"),\"alt\":\"Download Robonomics 1.4.0 binary\"}})],1)])]),_c('ol',{attrs:{\"start\":\"3\"}},[_c('li',[_c('p',[_vm._v(\"Crea el archivo de servicio systemd llamado \"),_c('em',[_vm._v(\"robonomics.service\")]),_vm._v(\":\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# nano /etc/systemd/system/robonomics.service\\n\")])]),_c('p',[_vm._v(\"Y agrega las siguientes líneas en el archivo de servicio:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"[Unit]\\nDescription=robonomics\\nAfter=network.target\\n\\n[Service]\\nUser=robonomics\\nGroup=robonomics\\nType=simple\\nRestart=on-failure\\n\\nExecStart=/usr/local/bin/robonomics \\\\\\n  --parachain-id=2048 \\\\\\n  --name=\\\"%NODE_NAME%\\\" \\\\\\n  --validator \\\\\\n  --lighthouse-account=\\\"%POLKADOT_ACCOUNT_ADDRESS%\\\" \\\\\\n  --telemetry-url=\\\"wss://telemetry.parachain.robonomics.network/submit/ 0\\\" \\\\\\n  --base-path=\\\"%BASE_PATH%\\\" \\\\\\n  --state-cache-size=0 \\\\\\n  --execution=Wasm \\\\\\n  -- \\\\\\n  --database=RocksDb \\\\\\n  --execution=Wasm\\n\\n[Install]\\nWantedBy=multi-user.target\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Create%20Robonomics%20service%20file!../images/how-to-launch-the-robonomics-collator/nano_robonomics_service.png */ \"uVHJ\"),\"alt\":\"Create Robonomics service file\"}})],1)])]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# chown -R robonomics:robonomics %BASE_PATH%\\n```\\n\")])]),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Guarda este archivo, luego habilita y inicia el servicio:\"),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl enable robonomics.service \\nroot@robokusama-collator-screencast:~# systemctl start robonomics.service\\n\")])])])]),_c('p',[_vm._v(\"URL de telemetría: \"),_c('a',{attrs:{\"href\":\"https://telemetry.parachain.robonomics.network/#/Robonomics\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"https://telemetry.parachain.robonomics.network/#/Robonomics\")])]),_c('p',[_vm._v(\"Los registros de los clasificadores se pueden monitorear con: \"),_c('code',{pre:true},[_vm._v(\"journalctl -u robonomics.service -f\")])]),_c('p',[_vm._v(\"Una vez que se inicia el clasificador Robonomics, comenzará a sincronizarse con Kusama Relay Chain, esto puede llevar una cantidad de tiempo considerable, dependiendo de la velocidad de su red y las especificaciones del sistema, por lo que recomendamos descargar una instantánea de Kusama.\")]),_c('h2',{attrs:{\"id\":\"acelerar-el-proceso-de-sincronización-utilizando-una-instantánea-de-kusama\"}},[_c('a',{attrs:{\"href\":\"#acelerar-el-proceso-de-sincronizaci%C3%B3n-utilizando-una-instant%C3%A1nea-de-kusama\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Acelerar el proceso de sincronización utilizando una instantánea de Kusama\")]),_c('p',[_vm._v(\"Recomendamos hacer esto inmediatamente después de haber creado e iniciado el servicio de Robonomics. Puedes encontrar más información sobre instantáneas e instrucciones de uso en la siguiente página: \"),_c('a',{attrs:{\"href\":\"https://ksm-rocksdb.polkashots.io/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"https://ksm-rocksdb.polkashots.io/\")])]),_c('p',[_vm._v(\"Instrucciones:\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Detén el servicio de Robonomics y elimina el directorio actual de la base de datos de Kusama:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl stop robonomics.service\\nroot@robokusama-collator-screencast:~# rm -rf %BASE_PATH%/polkadot/chains/ksmcc3/db/\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Descarga la instantánea actual y extráela:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# wget https://ksm-rocksdb.polkashots.io/snapshot -O kusama.RocksDb.tar.lz4\\nroot@robokusama-collator-screencast:~# lz4 -c -d kusama.RocksDb.tar.lz4 | tar -x -C %BASE_PATH%/polkadot/chains/ksmcc3\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Download%20Kusama%20snapshot!../images/how-to-launch-the-robonomics-collator/wget_kusama_snapshot.png */ \"5AcP\"),\"alt\":\"Download Kusama snapshot\"}})],1),_c('p',[_vm._v(\"Puede eliminar el archivo descargado después de descomprimirlo correctamente:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# rm -v kusama.RocksDb.tar.lz4\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Establece la propiedad correcta para la carpeta de la base de datos:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# chown -R robonomics:robonomics %BASE_PATH%/polkadot/chains/ksmcc3\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Inicia nuevamente el servicio de Robonomics:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl start robonomics.service\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Verifica los registros del servicio:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# journalctl -u robonomics.service -f\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Check%20service%20logs!../images/how-to-launch-the-robonomics-collator/finish_journalctl.png */ \"0J1J\"),\"alt\":\"Check service logs\"}})],1)])]),_c('h2',{attrs:{\"id\":\"solución-de-problemas\"}},[_c('a',{attrs:{\"href\":\"#soluci%C3%B3n-de-problemas\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Solución de problemas\")]),_c('h3',{attrs:{\"id\":\"error-state-database-error-too-many-sibling-blocks-inserted\"}},[_c('a',{attrs:{\"href\":\"#error-state-database-error-too-many-sibling-blocks-inserted\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Error: \\\"State Database error: Too many sibling blocks inserted\\\"\")]),_c('p',[_vm._v(\"Para corregir este error, simplemente puede iniciar su clasificador en modo archivo:\")]),_c('p',[_vm._v(\"1) Primero, debes detener el servicio de Robonomics. \")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl stop robonomics.service\\n\")])]),_c('p',[_vm._v(\"2) Luego agregue el parámetro \"),_c('code',{pre:true},[_vm._v(\"--state-pruning=archive\")]),_vm._v(\" a la parte de la parachain del archivo de servicio. Ejemplo del archivo de servicio editado:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\n[Unit]\\nDescription=robonomics\\nAfter=network.target\\n\\n[Service]\\nUser=robonomics\\nGroup=robonomics\\nType=simple\\nRestart=on-failure\\n\\nExecStart=/usr/local/bin/robonomics \\\\\\n--parachain-id=2048 \\\\\\n--name=\\\"%NODE_NAME%\\\" \\\\\\n--validator \\\\\\n--lighthouse-account=\\\"%POLKADOT_ACCOUNT_ADDRESS%\\\" \\\\\\n--telemetry-url=\\\"wss://telemetry.parachain.robonomics.network/submit/ 0\\\" \\\\\\n--base-path=\\\"%BASE_PATH%\\\" \\\\\\n--state-cache-size=0 \\\\\\n--execution=Wasm \\\\\\n--state-pruning=archive \\\\\\n-- \\\\\\n--database=RocksDb \\\\\\n--execution=Wasm \\n\\n[Install]\\nWantedBy=multi-user.target\\n```\\n\")])]),_c('p',[_vm._v(\"3) Recargue la configuración del administrador de systemd:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# systemctl daemon-reload\\n```\\n\")])]),_c('p',[_vm._v(\"4) Elimine la base de datos existente de la parachain:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# rm -rf %BASE_PATH%/chains/robonomics/db/\\n```\\n\")])]),_c('p',[_vm._v(\"5) Inicie el servicio de robonomics:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# systemctl start robonomics.service\\n```\\n\\nDespués de eso, es necesario esperar la sincronización de la base de datos de la parachain.\\n\")])]),_c('h3',{attrs:{\"id\":\"error-cannot-create-module-compilation-settings-are-not-compatible-with-the-native-host\"}},[_c('a',{attrs:{\"href\":\"#error-cannot-create-module-compilation-settings-are-not-compatible-with-the-native-host\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Error: \\\"cannot create module: compilation settings are not compatible with the native host\\\"\")]),_c('p',[_vm._v(\"Este error está relacionado con los parámetros de virtualización. Es necesario utilizar el tipo \\\"host-model\\\" del procesador emulado. Puede configurarlo en el host de virtualización.\")]),_c('p',[_vm._v(\"Pero, si encuentra este error en cualquier alojamiento, es necesario consultar al soporte técnico solo sobre este problema.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/es/how-to-launch-the-robonomics-collator.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "WJIN":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/es/how-to-launch-the-robonomics-collator.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "dZev":
/*!**************************************************************************************************************!*\
  !*** ./docs/es/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"WJIN\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/how-to-launch-the-robonomics-collator.md?");

/***/ }),

/***/ "jm7d":
/*!**********************************************************!*\
  !*** ./docs/es/how-to-launch-the-robonomics-collator.md ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _how_to_launch_the_robonomics_collator_md_vue_type_template_id_aa2070fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-to-launch-the-robonomics-collator.md?vue&type=template&id=aa2070fc& */ \"quib\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"dZev\");\n/* harmony import */ var _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"m22E\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _how_to_launch_the_robonomics_collator_md_vue_type_template_id_aa2070fc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _how_to_launch_the_robonomics_collator_md_vue_type_template_id_aa2070fc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/es/how-to-launch-the-robonomics-collator.md?");

/***/ }),

/***/ "m22E":
/*!*******************************************************************************************************************!*\
  !*** ./docs/es/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"EoqK\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/how-to-launch-the-robonomics-collator.md?");

/***/ }),

/***/ "quib":
/*!*****************************************************************************************!*\
  !*** ./docs/es/how-to-launch-the-robonomics-collator.md?vue&type=template&id=aa2070fc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_template_id_aa2070fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./how-to-launch-the-robonomics-collator.md?vue&type=template&id=aa2070fc& */ \"Tfxf\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_template_id_aa2070fc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_template_id_aa2070fc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/es/how-to-launch-the-robonomics-collator.md?");

/***/ })

}]);