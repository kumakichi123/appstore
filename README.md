# app-store

シンプルな買い切りアプリ販売サイトです。

## セットアップ

1. `npm install`
2. `.env.example` を `.env.local` にコピー
3. `STRIPE_SECRET_KEY` と `NEXT_PUBLIC_SITE_URL` を設定
4. `npm run dev`

## 商品追加

`src/data/products.ts` に商品を追加すると一覧に表示されます。
