This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### 2022/09/19

- React ≤ v17: Chakra v1 ☞ <code>yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion</code>

- Install Chakra UI: nextjs-blog 폴더 내 v1 설치 이후 → 여전히 Error 화면!

  - Unhandled Runtime Error
    TypeError: (0 , react**WEBPACK_IMPORTED_MODULE_0**.useSyncExternalStore) is not a function

### 2022/09/16

- B1. Getting Started with Chakra UI in Next.js Project

  - Install Chakra UI: my-next 폴더 내 v1 설치 이후 → Error 발생 (원복)

  - React ≥ v18: Chakra v2 ☞ <code>npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6</code>

  - React ≤ v17: Chakra v1 ☞ <code>npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion</code>

### 2022/09/14

- A9. Convering My blog app into TypeScript

  - Custom `App`: \_app.js → \_app.tsx
  - Converting My App: 총7개 파일 → TypeScript 로 전환

### 2022/09/13

- A8. TypeScript 설치

  - tsconfig.json 파일: You may customize this file.
  - next-env.d.ts 파일: This file should not be edited.

  <code>touch tsconfig.json</code>

  <code>yarn add --dev typescript @types/react @types/node</code>

### 2022/09/07

- Builds the production application in the .next folder.

  <code>npm run build</code>

  <code>npm run start</code>

  <code>yarn add sharp</code>

### 2022/09/06

- A7. Deploying Your Next.js App

  - Deploy to Vercel: Create a Vercel Account ☞ https://vercel.com/signup

### 2022/09/05

- A6. API Routes

### 2022/09/02

- Dynamic Routes  
  Use `getStaticPaths` to fetch an array of product IDs and use `getStaticProps` to fetch data for each product.

### 2022/08/31

- Polishing the Index Page

### 2022/08/29

- Polishing the Post Page - date-fns 설치

  <code>npm install date-fns</code>

### 2022/08/25

- Render Markdown - remark 설치

  <code>npm install remark remark-html</code>

### 2022/08/23

- A5. Dynamic Routes - Implement getStaticPaths & getStaticProps

### 2022/08/17

- A5. Dynamic Routes ☞ https://nextjs.org/learn/basics/dynamic-routes/setup

### 2022/08/01

- A4. Pre-rendering and Data Fetching ☞ https://nextjs.org/learn/basics/data-fetching/setup
- A3. Assets, Metadata, and CSS ☞ https://nextjs.org/learn/basics/assets-metadata-css/setup
- A2. Navigate Between Pages ☞ https://nextjs.org/learn/basics/navigate-between-pages/setup

### 2022/07/13

- A1. Create a Next.js App ☞ https://nextjs.org/learn/basics/create-nextjs-app/setup
- A0. Next.js & TypeScript 설치

  <code>npx create-next-app@latest --typescript</code>
