# 構築手順

## RocketChat + hubot

* BitBucketからアクセスできるところに構築する前提。
* Port 3000, 3001を空けておく。

1. docker-compose upするとローカルにRocketChatとhubotが起動する。
2. `http://hostname:3000` にアクセスして、適当に管理ユーザ作ってセットアップ。
3. docker-compose.ymlに記載している `ROCKETCHAT_USER` , `ROCKETCHAT_PASSWORD` でbotユーザを作成する。

## BitBucket

1. BitBucketのリポジトリで「設定」=>「Webhoooks」
2. 「Add new webhook」でURLに `http://hostname:3001/bitbucket-webhook` を指定。
3. 「Triggers」の「プルリクエスト」で「作成」「更新」などをチェックして「「Save」

# 実行例

上記構築したBitBucketリポジトリでプルリクを投げると  
RocketChat上のチャネルにbotユーザから投稿される。はず。
