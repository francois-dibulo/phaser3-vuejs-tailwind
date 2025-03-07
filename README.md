# phaser3-vuejs - iframe solution

This template should help get you started developing with Phaser3 and Vue 3 in Vite.

## What?

The Phaser3 game runs in an iframe and a separate entry point. I wrote an [article](https://medium.com/@franzeus/how-to-integrate-your-phaser-3-game-with-any-javascript-framework-879c1354e766) about why this is useful.

There are two entry points: one for your app (Menu, pages, ...) and one for your game. This structure makes it possible to run your game in an iframe while still using all of the benefits of the vite build tools and VueJS framework.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```
