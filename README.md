# CheckPermissions
BOTの権限の確認
- package.jsonを作成
```
npm init -y
```
- discord.js, dotenvをインストール
```
npm i discord.js dotenv
```
- envファイルにTOKEN, サーバーIDを指定
```
TOKEN= BOTのtoken
GUILD_ID= サーバーID
```
- 実行
```
node index.js
```
## 出力形式
```
BOT名#◯◯◯◯ is online!
Server: サーバー名 (サーバーID)
Permissions:
- ViewChannel
- SendMessages
- ManageMessages
- ReadMessageHistory
```
