# Svelte x DatoCMS Starter

Everything you need to build a Svelte project with DatoCMS:

- Svelte 5 (SvelteKit)
- Storybook
- Svelte Intl Precompile
- DatoCMS CDA Client & Components
- TypeScript
- SCSS / SASS
- GraphQL

## Use Template

Choose `Use this template` and `Create new repository` directly on GitHub. Then clone repository and install dependencies:

```bash
npm install
```

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
Generate Types from GraphQL Schema:

```bash
npm run generate-ts
```

## Prepare DatoCMS

*TODO: DatoCMS manual*


## SSR vs SSG

*TODO: SSR vs SSG manual*

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
