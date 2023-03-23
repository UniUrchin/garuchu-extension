# garuchu-extension

<div align="center">
<img width="240" src="./images/logo.png">
</div>

GaroonのスケジュールをDiscord Webhookを通して投稿する擬似チャットボットのようなChrome拡張です。

使いたい企業のGaroonがSAML認証でAPIも使えない環境下でなければ実用性はありませんが、Next.js with TypeScriptとかTailwind CSSを使っているのでプロジェクト構造くらいは参考になるかもしれません。

## How to Build & Export

- ローカルでNext.jsの開発環境を立ち上げる

  ```
  $ yarn dev
  ```

- ローカルでビルドして、Next.jsの本番環境を立ち上げる

  ```
  $ yarn build & yarn start
  ```

- Chrome拡張として読み込ませるためのフォルダをエクスポートする

  ```
  $ yarn export
  ```

## Usage of Extension

**TODO**: 完成したら書くつもり