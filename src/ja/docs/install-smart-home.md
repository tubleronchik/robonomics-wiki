---
title: スマートホームのインストール
contributors: [nakata5321, PaTara43]
tools:
  - Home-assistant-web3-build 0.0.5
    https://github.com/airalab/home-assistant-web3-build
  - Home Assistant 2024.11.3
    https://github.com/home-assistant/core
  - Robonomics Home Assistant Integration 2.0.2
    https://github.com/airalab/homeassistant-robonomics-integration
  - IPFS 0.29.0
    https://docs.ipfs.tech/
  - Zigbee2MQTT 1.40.1
    https://github.com/Koenkk/zigbee2mqtt
---

**Home AssistantとRobonomics統合のインストールガイドへようこそ。Home Assistantはオープンソースのホームオートメーションシステムであり、家庭ネットワーク内のスマートデバイスを制御するための中央ハブを提供します。Robonomicsと統合することで、分散型クラウドサービスを活用し、スマートホームの機能性とセキュリティを向上させることができます。この記事では、Home AssistantとRobonomicsをインストールする手順をステップバイステップで説明し、安全で分散化されたソリューションを使用して家庭のさまざまな側面を自動化および制御する方法を提供します。さあ、始めましょう！**

{% roboWikiPicture {src:"docs/home-assistant/INSTALLATION.png", alt:"installation"} %}{% endroboWikiPicture %}

## デモ

ここにこれは完全なスマートホームとRobonomicsの統合インストールの例です。インターネット接続にかかる時間は異なる場合があることを念頭に置いてください。

{% roboWikiVideo {videos:[{src: 'QmULXX4rjkuHuCF42c3V37MxEk6HpnFpJF4bZSQPR2c3Xo', type: 'mp4'}], attrs:['loop', 'controls', 'autoplay']} %}{% endroboWikiVideo %}

## インストールに必要なハードウェア

すでにHome Assistantをスマートホームのセットアップに組み込んでいない場合、最初から完全なスマートホームシステムを構築するために必要な機器を把握することが重要です。Robonomicsチームは、スマートホームサーバーとしてRaspberry Pi 4の使用を推奨しています。

{% roboWikiGridWrapper {columns: '2', textAlign: 'center', flexible: true} %}
	{% roboWikiGrid %} {% roboWikiPicture {src:"docs/home-assistant/need_2.png", alt:"need"} %}{% endroboWikiPicture %}
	<b>Raspberry Pi 4（少なくとも2 GB RAM）</b>
	{% endroboWikiGrid %}
	{% roboWikiGrid %} 	{% roboWikiPicture {src:"docs/home-assistant/need_3.png", alt:"need"} %}{% endroboWikiPicture %}
	<b>SDカード16Gb</b> {% endroboWikiGrid %}
{% endroboWikiGridWrapper %}

{% roboWikiGridWrapper {columns: '2', textAlign: 'center'} %}
    {% roboWikiGrid %} {% roboWikiPicture {src:"docs/home-assistant/need_5.png", alt:"need"} %}{% endroboWikiPicture %}
     <a href="https://www.zigbee2mqtt.io/supported-devices/" target="_blank"> <b> Zigbeeスマートデバイス（オプション） </b> </a>  {% endroboWikiGrid %}
    {% roboWikiGrid %}     {% roboWikiPicture {src:"docs/home-assistant/need_7.png", alt:"need"} %}{% endroboWikiPicture %}
    <a href="https://www.zigbee2mqtt.io/information/supported_adapters.html" target="_blank"> <b> Zigbeeアダプタ（オプション） </b> </a>  {% endroboWikiGrid %}
    
{% endroboWikiGridWrapper %}


## 1. 事前要件のインストール


{% roboWikiNote {type: "warning", title: "重要な情報" }%} これらの手順は、Ubuntuシステムを搭載したRaspberry Pi 4で実行する必要があります。 {% endroboWikiNote %}

Robonomics Dockerには次のものが含まれています：
- Home Assistant
- IPFS
- MQTTブローカーおよび統合- Zigbee2MQTT
- libp2pプロキシ
- Robonomics統合

まず、次のパッケージをインストールする必要があります:


{% codeHelper {copy: true}%}

```
sudo apt-get install wget unzip git jq
```

{% endcodeHelper %}

次に、Raspberry Pi 4にDockerをインストールする必要があります。インストール手順は[公式ウェブサイト](https://docs.docker.com/engine/install/)で見つけることができます。

{% roboWikiNote {type: "warning", title: "重要な情報"}%} ユーザーをdockerグループに追加して、ルート権限なしでDockerコンテナを起動できるようにしてください。[こちらの手順](https://docs.docker.com/engine/install/linux-postinstall/)を見つけてください。 {% endroboWikiNote %}

## 2. 設定

GitHubリポジトリをダウンロードし、その中に移動します:


{% codeHelper {copy: true}%}

```
git clone https://github.com/airalab/home-assistant-web3-build.git
cd home-assistant-web3-build/
```

{% endcodeHelper %}

その後、`template.env`から`.env`ファイルを作成します:


{% codeHelper {copy: true}%}

```
cp template.env .env
```

{% endcodeHelper %}

その後、`.env`ファイルを開き、リポジトリのパスなどのデフォルト値を編集できます:
- すべての構成フォルダが保存されるリポジトリへのパス。
- ["tzデータベース名"](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)。

## 3. 開始

Bashスクリプトを実行し、すべての必要なパッケージがインストールされるまで待ちます：

{% codeHelper {copy: true}%}

```
bash setup.sh
```

{% endcodeHelper %}

スクリプトは、前の手順で完了したすべての必要なアクションを確認し、何かが間違っている場合はエラーを表示します。

インストールプロセス中には、次のような状況が発生する可能性があります：
- Zigbeeコーディネーターを使用しないことを決定した場合、インストールを続行するかどうかを確認するダイアログ行が表示されます：

{% codeHelper %}

```
このスクリプトはすべての必要なリポジトリを作成し、Dockerコンテナを起動します
Zigbeeコーディネーターの場所が見つかりません。 挿入してスクリプトを再実行してください。 ディレクトリ/dev/serial/by-id/が存在しません
Zigbeeコーディネーターを使用せずに続行しますか？ Zigbee2MQTTコンテナは起動しません。
続行しますか？ (Y/n)
```

{% endcodeHelper %}


- Raspberry Pi 4にシリアルポートを使用する複数のデバイスがある場合、スクリプトはどのデバイスを使用するかを尋ねます：

{% codeHelper %}

```
this script will create all necessary repositories and start docker containers
the zigbee coordinator is installed
You have more that 1 connected devices. Please choose one
1) /dev/serial/by-id/usb-ITEAD_SONOFF_Zigbee_3.0_USB_Dongle_Plus_V2_20240123142833-if00
2) /dev/シリアル/by-id/usb-Silicon_Labs_Sonoff_Zigbee_3.0_USB_Dongle_Plus_0001-if00-port0
#?
```

{% endcodeHelper %}

## インストール後

すべてが開始された後、`update.sh`スクリプトを使用してDockerパッケージのバージョンを更新できます：
{% codeHelper {copy: true}%}

```
bash update.sh
```

{% endcodeHelper %} 
このスクリプトは新しいバージョンをダウンロードし、古いバージョンのパッケージを削除し、すべてを自動的に再起動して、すべての構成を保存します。

すべてを停止するには、`stop.sh`スクリプトを使用してください：
{% codeHelper {copy: true}%}

```
bash stop.sh
```

{% endcodeHelper %}

以上です。次の記事に進んでください。