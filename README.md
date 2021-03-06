# 開発環境の準備

1. Node.js v14.15.4 をインストール
1. リポジトリをクローン
1. .env ファイルをプロジェクト直下に追加し
   `NHK_API_KEY=OOOOOOOOO`, `NHK_API_URL=https://api.nhk.or.jp/v2/pg` の 2 つを記述
1. Terminal から`npm install`を実行
1. `npm run start`で実行開始
1. 立ち上がったブラウザから`Run on Android device/emulator`か`Run on iOS simulator`を押下

注：Android エミュレータは実行前に起動しておくこと

# Git のコミットメッセージの書き方

- 1 行目：変更内容の要約（タイトル、概要）
- 2 行目 ：空行
- 3 行目以降：変更した理由（内容、詳細）

## 1 行目

コミット種別と要約を書きます。フォーマットは以下とします。

[コミット種別]要約

### コミット種別

以下の中から適切な種別を選びます。

- fix：バグ修正
- add：新規（ファイル）機能追加
- update：機能修正（バグではない）
- remove：削除（ファイル）

### 要約

変更内容の概要を書きます。シンプルかつ分かりやすく。（難しい）
【例】削除フラグが更新されない不具合の修正

## 3 行目

変更した理由を出来るかぎり具体的に書きます。
【例】refs #110 更新 SQL の対象カラムに削除フラグが含まれていなかったため追加しました。

# Git フローについて

- develop：開発の起点になるブランチ
- feature：個々の機能の開発ブランチ
- staging：リリース直前のブランチ
- master：リリースされるブランチ
- hotfix：リリースされたコードの修正のためのブランチ

# Trello

[ボード](https://trello.com/b/T33d9Chv/nhk-guide)

# 苦労した点

## ユーザーは番組表を見ることが出来る

### GuideCard の追加

- 普通の CSS が使えると思って display: flex を使おうとしたら動かず、flexDirection: "row"で横なることが判明。しかし、今度は image と text を横並びにしたら text が画面が今で伸びてしまい、flex:1 flex:2 で対応出来ることに気づくまで時間がかかった。
- Android Emulator が重く、起動・ホットリロードが上手く動作しなかった。iPhone Emulator のみで対応して、Android は毎回ではなく適宜確認した。

### API 経由で GuideList のデータを取得する

- .env を使用できる API が複数あり、やりたいことは単純なのに単純には導入できなさそうだった。色々調べて単純に出来そうなものを使用した。
- new Promise<Guide[]>((resolve, reject) => {})の resolve と reject の理解が曖昧。この 2 つはどこからやってくるのだろうか…。2 月中に非同期についてもう少し勉強しなければいけないと感じた。
- ただ repository を追加したが、interface とかきちんと整備しなければいけないような気がした。しかし、今回は mock と api の出し分けのための追加なので、一旦スルーして、2 月に再勉強しようと思う。

### テストの作成

- テストの準備をするのに手間取ってしまった。結局 expo init で tabs で template を作り、package.json や差分を見て環境を作った。
- image コンポーネントのテストのしかたがわからなかった。image の DOM までは取得できたが、どうテストすればよいかわからなかった。
  考えたこと
  - 渡している url で検証できないか（以下を参考）
  - https://callstack.github.io/react-native-testing-library/docs/api-queries/#queries
  - https://jestjs.io/docs/ja/expect#tobevalue
- そもそも Expect のメソッドがどういうモノがあるのかがあまり把握できていない。

## ユーザーは番組を詳しく知ることが出来る

- HomeStackNavigator を作っている時、initialRouteName を Home と Details で入れ替えた時にホットリロードで反映されず上手く動かないコードになっていると思い、色々と周辺コードを探り、時間を使ってしまった。再起動させたら普通に動いた。
- subTitle と act が表示されていない時のテストの書き方がわからなかった。

## 初回起動時エリアとサービスを設定出来る

- area と service を state 管理してしまい、嵌った。

  `const { setting } = useContext(SettingContext);`

  `const [area, setArea] = useState<string>("")`

  `const [service, setService] = useState<string>("")`

  と最初書いており、area・service が更新されるたび、再レンダリングされ、最終的に area と service は""になり、list と recommendedGuide は undefined になってしまう問題に嵌った。
