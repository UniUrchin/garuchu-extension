# garuchu-extension

<div align="center">
<img width="240" src="./images/logo.png">
</div>

GaroonのスケジュールをDiscord Webhookを通して投稿する擬似チャットボットのようなChrome拡張です。

まだまだ未完成なので、あんまり見ないでください。

## Requirement

- Node 16(Gallium)
- Next 13
- React 18
- TypeScript 5
- TailWind CSS v3
- Chrome Extension Manifest v3

## How to Build & Export

- 必要パッケージをローカルにインストール

  ```
  yarn install
  ```

- ローカルでNext.jsの開発環境を立ち上げる

  ```
  $ yarn dev
  ```

- ローカルでビルドして、Next.jsの本番環境を立ち上げる

  ```
  $ yarn build & yarn start
  ```

- Chrome拡張として読み込ませるための`out`ディレクトリを出力する

  ```
  $ yarn export
  ```

## Usage of Extension

**TODO**: 完成したら書くつもり
