(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--wschool-2021-connectivity-service-md"],{

/***/ "31L4":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/wschool2021-connectivity-service.md?vue&type=template&id=429a03c0& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('h2', {\n    attrs: {\n      \"id\": \"複数のパイとしてのiot\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E8%A4%87%E6%95%B0%E3%81%AE%E3%83%91%E3%82%A4%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AEiot\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"複数のパイとしてのIoT\")]), _c('ul', [_c('li', [_vm._v(\"Device Software\"), _c('ul', [_c('li', [_vm._v(\"FreeRTOS\")]), _c('li', [_vm._v(\"ESP/Arduino\")]), _c('li', [_vm._v(\"シングルボードコンピュータ (RPi、LattePandaなど)\")])])]), _c('li', [_vm._v(\"Connectivity\"), _c('ul', [_c('li', [_vm._v(\"IoT Hub\")]), _c('li', [_vm._v(\"IoT Manager\")])])]), _c('li', [_vm._v(\"Analytics Services\"), _c('ul', [_c('li', [_vm._v(\"AWS\")]), _c('li', [_vm._v(\"Google Cloud IoT Core\")]), _c('li', [_vm._v(\"ThingsBoard\")])])])]), _c('p', [_vm._v(\"ふつう、ほとんどの方はセンサーやサーバーには興味がなく、データ分析に興味があります。それを手に入れるためには、どのデバイスを使うか、どのように連携するか、どこに接続するかを決める必要があります\")]), _c('h2', {\n    attrs: {\n      \"id\": \"device-software\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#device-software\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Device Software\")]), _c('p', [_vm._v(\"家庭用のウェザーステーションを例に考えてみましょう。大気汚染（SDS011）、温度、湿度（BME）のデータを収集する必要があります。ESP8266マイクロコントローラは、このタスクを処理することができます。\")]), _c('p', [_vm._v(\"必要なもの:\")]), _c('ul', [_c('li', [_vm._v(\"センサーからのデータを正しく読み取ることができる\")]), _c('li', [_vm._v(\"固有の識別子を持つこと\")]), _c('li', [_vm._v(\"データを既知のサーバに転送する\")]), _c('li', [_vm._v(\"データのデジタル署名を行う（オプション）\")])]), _c('p', [_vm._v(\"現在のファームウェアは\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/LoSk-p/sensors-software/tree/366b19bf447a5fc19220ef89eab0f2440f8db1c2\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"こちら\")]), _vm._v(\"\\nからご覧いただけます。\")]), _c('h2', {\n    attrs: {\n      \"id\": \"connectivityって何\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#connectivity%E3%81%A3%E3%81%A6%E4%BD%95\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Connectivityって何?\")]), _c('p', [_vm._v(\"IoTの世界で、Connectivityとは、さまざまなIoTデバイスをインターネットに接続し、データを送信したり、デバイスを制御したりすることを指します。\")]), _c('p', [_vm._v(\"よく知られているアーキテクチャのソリューションは、大きく3つのグループに分けられます。\")]), _c('ul', [_c('li', [_vm._v(\"完全に分散化されたもの。たとえば、デバイスをメッシュネットワークで接続する。ハードウェア要件が高いため、広域ネットワークには適さない\")]), _c('li', [_vm._v(\"集中型。たとえば、AWSなど。単一のエントリーポイントと接続の容易さを提供するが、サーバーに問題が発生した場合の障害リスクが高い\")]), _c('li', [_vm._v(\"ハイブリッド。たとえば、 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/sensors-connectivity\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robonomics Connectivity\")]), _vm._v(\"。ローカルネットワーク上のデバイスにアドレスを提供し、分散したIPFSメッセージチャネルにデータを公開する\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"aws-と-robonomics-connectivityの比較\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#aws-%E3%81%A8-robonomics-connectivity%E3%81%AE%E6%AF%94%E8%BC%83\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"AWS と Robonomics Connectivityの比較\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"管理サービス\")]), _c('th', [_vm._v(\"AWS\")]), _c('th', [_vm._v(\"Robonomics\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"トランザクションのタイプ\")]), _c('td', [_vm._v(\"テクニカル\")]), _c('td', [_vm._v(\"テクニカル、経済的\")])]), _c('tr', [_c('td', [_vm._v(\"セキュリティ\")]), _c('td', [_vm._v(\"IT会社によるクラウド管理\")]), _c('td', [_vm._v(\"Polkadot ,Ethereum\")])]), _c('tr', [_c('td', [_vm._v(\"プロトコル\")]), _c('td', [_vm._v(\"HTTPS, MQTT\")]), _c('td', [_vm._v(\"IPFS, Robonomics\")])]), _c('tr', [_c('td', [_vm._v(\"エコシステム\")]), _c('td', [_vm._v(\"private\")]), _c('td', [_vm._v(\"shared\")])]), _c('tr', [_c('td', [_vm._v(\"DeFiへのアクセス\")]), _c('td', [_vm._v(\"No\")]), _c('td', [_vm._v(\"Yes\")])]), _c('tr', [_c('td', [_vm._v(\"コスト\")]), _c('td', [_vm._v(\"Pushing data - $1-2 a sensor\")]), _c('td', [_vm._v(\"Pushing data - $0\")])]), _c('tr', [_c('td'), _c('td', [_vm._v(\"Shadow         - from $10 a month\")]), _c('td', [_vm._v(\"Digital Twin    - $0,01 a transaction\")])])])]), _c('h2', {\n    attrs: {\n      \"id\": \"aira上にconnectivityをインストール\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#aira%E4%B8%8A%E3%81%ABconnectivity%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Aira上にConnectivityをインストール\")]), _c('div', {\n    staticClass: \"youtube-embed\"\n  }, [_c('div', {\n    staticStyle: {\n      \"width\": \"100%\",\n      \"margin\": \"0 auto\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      \"position\": \"relative\",\n      \"padding-bottom\": \"56.25%\",\n      \"padding-top\": \"25px\",\n      \"height\": \"0\"\n    }\n  }, [_c('iframe', {\n    staticStyle: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\"\n    },\n    attrs: {\n      \"src\": \"https://www.youtube-nocookie.com/embed/JbBNMHAzJKM\",\n      \"allow\": \"autoplay; encrypted-media\",\n      \"allowfullscreen\": \"\"\n    }\n  })])])]), _c('h3', {\n    attrs: {\n      \"id\": \"必要なもの\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E5%BF%85%E8%A6%81%E3%81%AA%E3%82%82%E3%81%AE\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"必要なもの\")]), _c('ul', [_c('li', [_c('a', {\n    attrs: {\n      \"href\": \"https://www.virtualbox.org/wiki/Downloads\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"VirtualBox 6.1\")]), _vm._v(\"以上\")]), _c('li', [_c('a', {\n    attrs: {\n      \"href\": \"https://static.aira.life/ova/airaos-21.03_robonomics-winter-school.ova\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Aira OS ova image\")])])]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/aira-installation-on-vb/\"\n    }\n  }, [_vm._v(\"この記事を参考に\")]), _vm._v(\"AiraのイメージをVirtualBoxに取り込みます。\")]), _c('p', [_vm._v(\"SSHでの\"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/aira-connecting-via-ssh/\"\n    }\n  }, [_vm._v(\"接続設定\")])]), _c('p', [_vm._v(\"すべての準備が整い、SSHでのログインに成功したら、メインパッケージをクローンしてビルドしましょう。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/airalab/sensors-connectivity\\ncd sensors-connectivity\\ngit checkout v0.9\\nnix build -f release.nix\\n\")])]), _c('p', [_vm._v(\"それでは、後で使えるようにデフォルトの設定ファイルのコピーを作成しましょう。すべてのオプションについて知りたい方は\"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/configuration-options-description/\"\n    }\n  }, [_vm._v(\"こちらの記事\")]), _vm._v(\" をご覧ください。次に、パッケージを \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"roslaunch\")]), _vm._v(\" で起動します。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"cp config/default.json config/my.json\\nsource result/setup.zsh\\nroslaunch sensors_connectivity agent.launch config:=$PWD/config/my.json\\n\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"センサーをコネクティビティに接続\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%E3%82%92%E3%82%B3%E3%83%8D%E3%82%AF%E3%83%86%E3%82%A3%E3%83%93%E3%83%86%E3%82%A3%E3%81%AB%E6%8E%A5%E7%B6%9A\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"センサーをコネクティビティに接続\")]), _c('div', {\n    staticClass: \"youtube-embed\"\n  }, [_c('div', {\n    staticStyle: {\n      \"width\": \"100%\",\n      \"margin\": \"0 auto\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      \"position\": \"relative\",\n      \"padding-bottom\": \"56.25%\",\n      \"padding-top\": \"25px\",\n      \"height\": \"0\"\n    }\n  }, [_c('iframe', {\n    staticStyle: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\"\n    },\n    attrs: {\n      \"src\": \"https://www.youtube-nocookie.com/embed/yxqxBk-6bpI\",\n      \"allow\": \"autoplay; encrypted-media\",\n      \"allowfullscreen\": \"\"\n    }\n  })])])]), _c('h3', {\n    attrs: {\n      \"id\": \"必要なもの-1\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E5%BF%85%E8%A6%81%E3%81%AA%E3%82%82%E3%81%AE-1\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"必要なもの\")]), _c('ul', [_c('li', [_c('a', {\n    attrs: {\n      \"href\": \"https://aqicn.org/sensor/sds011\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Nova SDS011\")]), _vm._v(\" センサー\")]), _c('li', [_c('a', {\n    attrs: {\n      \"href\": \"https://yarnpkg.com/getting-started/install\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Yarn Packet Manager\")])])]), _c('p', [_vm._v(\"それでは、実際にセンサーを接続し、USBポートを仮想マシンに転送し、マップを設定して、自分の測定結果を見てみましょう。\")]), _c('p', [_vm._v(\"まず、Aira OSが起動している場合は停止し、対応するUSBデバイスを追加します。\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=VB%20USB%20Forwarding!../images/vb_forward_usb.jpg */ \"PUd7\"),\n      \"alt\": \"VB USB Forwarding\"\n    }\n  })], 1), _c('p', [_vm._v(\"仮想マシンを起動し、SSHで接続し、仮想マシンのUSBデバイスに合わせて\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"comstation/port\")]), _vm._v(\"オプションを設定します。また、\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"comstation\")]), _vm._v(\"を有効にして、緯度と経度を設定します。最終的に \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"config/my.json\")]), _vm._v(\" は以下のようになります。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"{\\n   \\\"general\\\":{\\n      \\\"publish_interval\\\":30\\n   },\\n   \\\"comstation\\\":{\\n      \\\"enable\\\":true,\\n      \\\"port\\\":\\\"/dev/ttyUSB0\\\",\\n      \\\"work_period\\\":0,\\n      \\\"geo\\\":\\\"59.944917,30.294558\\\",\\n      \\\"public_key\\\":\\\"\\\"\\n   },\\n   \\\"httpstation\\\":{\\n      \\\"enable\\\":false,\\n      \\\"port\\\":8001\\n   },\\n   \\\"mqttstation\\\": {\\n      \\\"enable\\\": false,\\n      \\\"host\\\": \\\"connectivity.robonomics.network\\\",\\n      \\\"port\\\": 1883\\n   },\\n   \\\"luftdaten\\\":{\\n      \\\"enable\\\":false\\n   },\\n   \\\"robonomics\\\":{\\n      \\\"enable\\\":true,\\n      \\\"ipfs_provider\\\":\\\"/ip4/127.0.0.1/tcp/5001/http\\\",\\n      \\\"ipfs_topic\\\":\\\"airalab.lighthouse.5.robonomics.eth\\\"\\n   },\\n   \\\"datalog\\\":{\\n      \\\"enable\\\":false,\\n      \\\"path\\\":\\\"\\\",\\n      \\\"suri\\\":\\\"\\\",\\n      \\\"remote\\\":\\\"wss://substrate.ipci.io\\\",\\n      \\\"dump_interval\\\":3600,\\n      \\\"temporal_username\\\":\\\"\\\",\\n      \\\"temporal_password\\\":\\\"\\\"\\n   },\\n   \\\"dev\\\":{\\n      \\\"sentry\\\":\\\"\\\"\\n   }\\n}\\n\")])]), _c('blockquote', [_c('p', [_vm._v(\"本物のセンサーがない場合は、\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sensers-connectivity/utils/virtual-sensor.py\")]), _vm._v(\" スクリプトを使ってエミュレートすることができます。\")]), _c('p', [_vm._v(\"設定ファイルを以下のように変更することで、\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"HTTPStation\")]), _vm._v(\"を有効にし、\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"COMStation\")]), _vm._v(\"を無効にします。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"{\\n   \\\"general\\\":{\\n      \\\"publish_interval\\\":30\\n   },\\n   \\\"comstation\\\":{\\n      \\\"enable\\\":false,\\n      \\\"port\\\":\\\"/dev/ttyUSB0\\\",\\n      \\\"work_period\\\":0,\\n      \\\"geo\\\":\\\"59.944917,30.294558\\\",\\n      \\\"public_key\\\":\\\"\\\"\\n   },\\n   \\\"httpstation\\\":{\\n      \\\"enable\\\":true,\\n      \\\"port\\\":8001\\n   },\\n   ...\\n}\\n\")])]), _c('p', [_vm._v(\"そして、VM内の専用端末で\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"utils/virtual-sensor.py\")]), _vm._v(\"を起動します。\")])]), _c('p', [_vm._v(\"ファイルを保存し、\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sensers-connectivity\")]), _vm._v(\"フォルダからconnectivityを起動します。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"source result/setup.zsh\\nroslaunch sensors_connectivity agent.launch config:=$PWD/config/my.json\\n\")])]), _c('p', [_vm._v(\"コンソール出力に最初の測定値が表示されます。\")]), _c('p', [_vm._v(\"VMの中であなたのIPFS IDを探します。イメージを起動した直後、または \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ipfs id\")]), _vm._v(\" コマンドで表示されます。これは後で必要になります。\")]), _c('p', [_vm._v(\"それでは、マップの独自のインスタンスをセットアップしましょう。ラップトップ（VMではない）で\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/sensors.robonomics.network\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"このリポジトリ\")]), _vm._v(\"をクローンし、アプリをビルドします。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/airalab/sensors.robonomics.network\\ncd sensors.robonomics.network\\nyarn install\\n\")])]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"src/agents.json\")]), _vm._v(\" ファイルを編集し、IPFS ID を入力します。たとえば、以下のようになります。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"[\\n  \\\"12D3KooWSCFAD3Lpew1HijniE6oFTuo4jsMwHzF87wNnXkpCRYWn\\\"\\n]\\n\")])]), _c('p', [_vm._v(\"マップを起動します。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"yarn serve\\n\")])]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"http://localhost:8080/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"http://localhost:8080/\")]), _vm._v(\"または yarn が教えてくれたアドレスに行き、センサーを探します。\")]), _c('h2', {\n    attrs: {\n      \"id\": \"実践編\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E5%AE%9F%E8%B7%B5%E7%B7%A8\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"実践編\")]), _c('h3', {\n    attrs: {\n      \"id\": \"軌道-1-esp--sds011-センサーを点滅させる\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E8%BB%8C%E9%81%93-1-esp--sds011-%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%E3%82%92%E7%82%B9%E6%BB%85%E3%81%95%E3%81%9B%E3%82%8B\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"軌道 1. ESP + SDS011 センサーを点滅させる\")]), _c('p', [_vm._v(\"必要なもの:\")]), _c('ul', [_c('li', [_vm._v(\"ESP8266\")]), _c('li', [_vm._v(\"少なくともこの中から1つのセンサー SDS011, BME280, HTU21D\")])]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://wiki.robonomics.network/docs/connect-sensor-to-robonomics/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"このインストラクション\")]), _vm._v(\" を使って、センサーをRobonomics Connectivityに接続します。\")]), _c('p', [_vm._v(\"センサーが\"), _c('a', {\n    attrs: {\n      \"href\": \"https://sensors.robonomics.network/#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"地図\")]), _vm._v(\"上に表示されることを確認します。 \")]), _c('h3', {\n    attrs: {\n      \"id\": \"軌道-2-connectivityの起動\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E8%BB%8C%E9%81%93-2-connectivity%E3%81%AE%E8%B5%B7%E5%8B%95\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"軌道 2. Connectivityの起動\")]), _c('p', [_vm._v(\"必要なもの:\")]), _c('ul', [_c('li', [_vm._v(\"ROS\")]), _c('li', [_vm._v(\"Python\")]), _c('li', [_vm._v(\"Nix (optional)\")])]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/sensors-connectivity#get-a-package-and-build\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"sensors-connectivity\")]), _vm._v(\"の構築と起動\")]), _c('blockquote', [_c('p', [_vm._v(\"ビルド方法、インストール方法は \"), _c('a', {\n    attrs: {\n      \"href\": \"https://wiki.robonomics.network/docs/iot-sensors-connectivity/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"こちら\")]), _vm._v(\" 設定方法は \"), _c('a', {\n    attrs: {\n      \"href\": \"https://wiki.robonomics.network/docs/configuration-options-description/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"こちら\")])])]), _c('p', [_vm._v(\"パッケージの全体像です。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"    station1 \\\\                        / feeder1\\n    station2 -  sensors-connectivity  - feeder2\\n    station3 /                        \\\\ feeder3\\n\")])]), _c('p', [_vm._v(\"たとえば、乱数発生器などの新しいステーションや、画面に文字列を表示するなどの新しいフィーダーを実装することが提案されています。\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"IStation\")]), _vm._v(\" のInterfaceは\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/sensors-connectivity/blob/master/src/stations/istation.py#L73\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"こちら\")]), _vm._v(\".\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"IFeeder\")]), _vm._v(\" のInterfaceは\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/sensors-connectivity/blob/master/src/feeders/ifeeder.py#L5\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"こちら\")])])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-connectivity-service.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "AnNk":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/wschool2021-connectivity-service.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-connectivity-service.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "PUd7":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=VB%20USB%20Forwarding!./docs/images/vb_forward_usb.jpg ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"type\":\"image\",\"mimeType\":\"image/jpeg\",\"src\":\"/assets/static/vb_forward_usb.15e281f.c901501db27dfd3335fe02e6aad25cb0.jpg\",\"size\":{\"width\":708,\"height\":586},\"sizes\":\"(max-width: 708px) 100vw, 708px\",\"srcset\":[\"/assets/static/vb_forward_usb.15e281f.c901501db27dfd3335fe02e6aad25cb0.jpg 708w\"],\"dataUri\":\"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 708 586' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-4b33453b2874275aee9d1006f50f8ddf'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-4b33453b2874275aee9d1006f50f8ddf)' width='708' height='586' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA1AEADASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAIDBAYHAQX/xAA8EAABAgMEBAkJCQAAAAAAAAABAAIDBBEFEiExBgdBURMyNEJEYXGx0QgUFiJSgZGUwRUYIyVUVnODk//EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIhEAAgIBAwQDAAAAAAAAAAAAAAECEQMxUdESU5HBE0GB/9oADAMBAAIRAxEAPwC8QdS%2bhdpRI0ackIzojXNhhzbRNSAwUqMKHLBTZjUBoFBhNcLPm3OdgGmee0E0yqr9Y8GI2DMuAjuDogcPwYfsDLeOs4r3ZtrXtgh7Q4B1aEZEBXklF0tDODco29TKJXUJoC1jIhkZuHFLcW%2bevdTeK7VJGorQM9GnDs5U5aG0VbXgiwkcUsbUJTbzeKHAZkBgxVbZoZy3UToG1xIlZypp0p2xMnyftXpPIpz5yItSabwNWub2pSWDK/u/avf0U585E8UqHqD0AhG9Dk5wHHpbzsotSQoGh4FkRIYhRi%2bJL1EYXQZfi%2bqNtcT1r3DHZGbCuPDnVNRkcjsVEgaI2VPGZjzF%2b899COFI2VPN31Xs6NaM2bYs2%2bZs%2b9fe3giTFLxTPIgUyWmRKzhwzzuk4Lp3v1XsY%2b0LZN78kmziQCTDx3bE8y1bUAaHaNzDiOdwjR9FcBkEKlrY1%2bHJ3H4XBVBbVrHPR2aH9o8EybftkEj0Wnj18MzwVxQlrYPDl7j8R4Kd6QWz%2b1Z7/Zngp1l2rOzLnieseYkAC1rTFiNN4knu%2bqsahWm0kS9Gk0itOAaadeP0xRtbEww5FK3kb/FwOWcAJCXoAKw21%2bCVM5w%2b09xXLO5BLfxt7l2Zzh9p7ioNvofGQQgZBCFgQhCAEzMtvXMcjVPJqPzfegIksxvm8H1RxG9wTga0GoGKEIRSFV6yip3lCEJCp3lcJIGZ%2bKEIBF5wJNSQ44D2fFcAffLi8lhwDaZe9CEB/9k=' /%3e%3c/svg%3e\"}\n\n//# sourceURL=webpack:///./docs/images/vb_forward_usb.jpg?./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=VB%2520USB%2520Forwarding");

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

/***/ "bWSQ":
/*!**************************************************************************************************************!*\
  !*** ./docs/ja/wschool2021-connectivity-service.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_connectivity_service_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-connectivity-service.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"mVrP\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_connectivity_service_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/wschool2021-connectivity-service.md?");

/***/ }),

/***/ "cuRx":
/*!************************************************************************************!*\
  !*** ./docs/ja/wschool2021-connectivity-service.md?vue&type=template&id=429a03c0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_connectivity_service_md_vue_type_template_id_429a03c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-connectivity-service.md?vue&type=template&id=429a03c0& */ \"31L4\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_connectivity_service_md_vue_type_template_id_429a03c0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_connectivity_service_md_vue_type_template_id_429a03c0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-connectivity-service.md?");

/***/ }),

/***/ "mVrP":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/wschool2021-connectivity-service.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 5, コネクティビティ\",\n  \"contributors\": [\"KiichiSugihara\"],\n  \"translated\": true\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-connectivity-service.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "tAs3":
/*!*********************************************************************************************************!*\
  !*** ./docs/ja/wschool2021-connectivity-service.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_connectivity_service_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-connectivity-service.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"AnNk\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_connectivity_service_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/wschool2021-connectivity-service.md?");

/***/ }),

/***/ "tys5":
/*!*****************************************************!*\
  !*** ./docs/ja/wschool2021-connectivity-service.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wschool2021_connectivity_service_md_vue_type_template_id_429a03c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wschool2021-connectivity-service.md?vue&type=template&id=429a03c0& */ \"cuRx\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _wschool2021_connectivity_service_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wschool2021-connectivity-service.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"tAs3\");\n/* harmony import */ var _wschool2021_connectivity_service_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wschool2021-connectivity-service.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"bWSQ\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _wschool2021_connectivity_service_md_vue_type_template_id_429a03c0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _wschool2021_connectivity_service_md_vue_type_template_id_429a03c0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _wschool2021_connectivity_service_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_wschool2021_connectivity_service_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _wschool2021_connectivity_service_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_wschool2021_connectivity_service_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-connectivity-service.md?");

/***/ })

}]);