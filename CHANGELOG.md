# チェンジログ

全ての変更内容はこのファイルに記録されます。

フォーマットは [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) にしたがっており、バージョニングは [Semantic Versioning](https://semver.org/spec/v2.0.0.html) にしたがっています。

## [まだリリースされていないもの]

## [6.0.8] - 2025-08-30

### 修正

- パッケージアップグレード

## [6.0.7] - 2025-08-13

### 修正

- OGP 画像が表示されなかったので修正

## [6.0.6] - 2025-08-13

### 修正

- パスの調整

## [6.0.5] - 2025-08-12

### 修正

- OGP の URL やデフォルト値の活用設定を調整

## [6.0.4] - 2025-08-12

### 修正

- Footer のサイトマップへのリンクがまちがっていたので修正

## [6.0.3] - 2025-08-12

### 修正

- sitemap の日付は常に `new Date()` するようにした

## [6.0.2] - 2025-08-12

### 修正

- sitemap のパスが重複していたり存在しないものを提供していたので中身を調整

## [6.0.1] - 2025-08-12

### 修正

- ホームページを `<main>` で囲っていなかったので修正

## [6.0.0] - 2025-08-12

### 修正

- ページ関連のコンポーネントは直接ページ内に記載

### 削除

- 自動生成した sitemap.xml が認識されないので Next.js で自分で生成するようにした

## [5.1.1] - 2025-08-10

### 修正

- sitemap.xml と robots.txt の生成ができなかったので `export const dynamic = "force-static"` を追加

## [5.1.0] - 2025-08-10

### 追加

- クローラー向けサイトマップを追加
- robots.txt 追加

### 修正

## [5.0.1] - 2025-08-10

- メタデータの調整

## [5.0.0] - 2025-08-10

### 修正

- ページのタイトルを `'%s | サイト名'` のようなテンプレートにした
- ページのタイトルをテンプレートにするためにグループルートを追加

## [4.0.1] - 2025-05-17

### 修正

- FAQ ページが About Us ページコンポーネントへの参照になっていたので修正

## [4.0.0] - 2025-05-17

### 追加

- クローラー向けサイトマップを追加
- メタデータの設定

### 削除

- FAQ から著作権譲渡の文言削除
  - 実施していないため

## [3.1.2] - 2025-05-17

### 変更

- 統率者の再選択時にロード画面を表示するようにした

## [3.1.1] - 2025-05-11

### 修正

- デバッグ用途にのこっていたコードがあったので修正

## [3.1.0] - 2025-05-11

### 追加

- 合体カードに対応

## [3.0.1] - 2025-05-11

### 修正

- タブのロジックを修正して子から親への伝搬を簡素に

## [3.0.0] - 2025-05-11

### 追加

- 反転カード対応
- 出来事カード対応
- 両面カード対応
- 両面カードのためにタブ機能の追加
- フッターにホームへ戻るリンクを追加
- サイトマップへプライバシーポリシーを追記
- カードテキストにシンボルを表示できるようにした

### 変更

- ライトモードのときのヘッダーの色を調整してロゴを見易いように変更

### 修正

- モバイル利用時のパディングや要素の並び方を調整

## [2.1.0] - 2025-05-08

### 追加

- FAQ ページを追加
- プライバシーポリシーを表示するページを追加
- サイトマップを追加
- 行動規範を制定

### 修正

- 一部スペースの表示が正しくなかったので修正
- フッターのリンク名を一般的なものに調整

## [2.0.1] - 2025-05-08

### 修正

- CHANGELOG.md の変更内容が一部フォーマットがただしくなかった

## [2.0.0] - 2025-05-08

### 追加

- About Us ページの追加
- ヘッダーの追加
- 忠誠度、収録カードセット、マナ総量を記載

### 修正

- カードのスキーマの修正

### 変更

- HTML の `lang` を `ja` に変更
- フックのファイル名を `useXXX` に統一
- フッターのテキストを中央寄せ

## [1.2.0] - 2025-05-07

### 追加

- リンクを追加

### 変更

- カードのスタイルを rounded に
- ローディング画面をグルグルするように

## [1.1.0] - 2025-05-07

### 追加

- FAQ のリンクを追加
- エラーダイアログの表示機能
- favicon 追加

### 変更

- FAQ と連絡先のリンクを外から設定できるようにした
- マナコストと色についてマナシンボルを表示できるようにした

## [1.0.0] - 2025-05-07

### 追加

ファーストリリース

[まだリリースされていないもの]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.8...HEAD
[6.0.8]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.7...v6.0.8
[6.0.7]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.6...v6.0.7
[6.0.6]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.5...v6.0.6
[6.0.5]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.4...v6.0.5
[6.0.4]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.3...v6.0.4
[6.0.3]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.2...v6.0.3
[6.0.2]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.1...v6.0.2
[6.0.1]: https://github.com/izzet-mtg/random-commander-jp/compare/v6.0.0...v6.0.1
[6.0.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v5.1.1...v6.0.0
[5.1.1]: https://github.com/izzet-mtg/random-commander-jp/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v5.0.1...v5.1.0
[5.0.1]: https://github.com/izzet-mtg/random-commander-jp/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v4.0.1...v5.0.0
[4.0.1]: https://github.com/izzet-mtg/random-commander-jp/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v3.1.2...v4.0.0
[3.1.2]: https://github.com/izzet-mtg/random-commander-jp/compare/v3.1.1...v3.1.2
[3.1.1]: https://github.com/izzet-mtg/random-commander-jp/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/izzet-mtg/random-commander-jp/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/izzet-mtg/random-commander-jp/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/izzet-mtg/random-commander-jp/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/izzet-mtg/random-commander-jp/releases/tag/v1.0.0
