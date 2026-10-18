# 公開手順（Cloudflare Pages）

1. このフォルダを GitHub のリポジトリにして push する
   ```
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```
2. Cloudflare ダッシュボード → Workers & Pages → Create → Pages → Connect to Git
3. リポジトリを選ぶ。設定は次のとおり
   - Framework preset: None
   - Build command: （空欄）
   - Build output directory: `/`
4. Save and Deploy。`https://<プロジェクト名>.pages.dev` で公開される
5. 以降は `git push` するだけで自動更新

## 公開前チェック
- 各HTMLの `TODO` コメント（連絡先・紹介文・ブログURL）を実際の内容にする
- `images/` の生成画像を本物の写真に差し替える（同じファイル名で上書き）
- `works.html` の `#blog-link` の href を外部ブログのURLにする
