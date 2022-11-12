# CodeLabsProStore
CodeLabsProStore is built using various frameworks including SvelteKit

## Screenshots

![Screenshot 1](https://raw.githubusercontent.com/codelabspro/CodeLabsProStore/main/CodeLabsProStore-sveltekit/screenshots/code_labs_pro_store_1.png)

## Steps

### Bootstrap

```
==> npm create svelte@latest codekit

create-svelte version 2.0.0-next.190

Welcome to SvelteKit!

This is release candidate software; expect bugs and missing features.

Problems? Open an issue on https://github.com/sveltejs/kit/issues if none exists already.

✔ Which Svelte app template? › Skeleton project
✔ Add type checking with TypeScript? › No
✔ Add ESLint for code linting? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Playwright for browser testing? … No / Yes

Your project is ready!
✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte3
✔ Prettier
  https://prettier.io/docs/en/options.html
  https://github.com/sveltejs/prettier-plugin-svelte#options
✔ Playwright
  https://playwright.dev

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-adders

Next steps:
  1: cd codekit
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat

```

### Install dotenv
```
==> npm install dotenv
```

### Integrate Tailwind and DaisyUI
https://github.com/svelte-add/tailwindcss

```
==> npx svelte-add@latest tailwindcss

==> npm install

==> npm install -D daisyui
```

### Dev

```
==> npm install

==> npm run dev -- --open
```


### Snippets

* home +page.svelte

```
<div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">CodeLabsPro Store</h1>
        <p class="mb-5">CodeLabsPro Store</p>
        <a href="/"><button class="btn btn-primary">Home</button></a>
        <a href="/about"><button class="btn btn-primary">About</button></a>
        <a href="/news" data-sveltekit-prefetch><button class="btn btn-primary">News</button></a>
        <a href="/store" data-sveltekit-prefetch><button class="btn btn-primary">Store</button></a>
      </div>
    </div>
  </div>

```


* home +layout.svelte

```
<script>
	import '../app.postcss';
</script>

<main>
	<nav>
    <div class="navbar bg-secondary text-secondary-content flex-1 flex justify-center mr-auto">
            <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
            <a href="/about" class="btn btn-ghost normal-case text-xl">About</a>
            <a href="/news" class="btn btn-ghost normal-case text-xl">News</a>
            <a href="/store" class="btn btn-ghost normal-case text-xl">Store</a>
    </div>
	</nav>
</main>
<slot />
<style>
	
</style>


```

* store +page.js

```
export const load = async ({ fetch }) => {
    const productsResponse = await fetch('https://dummyjson.com/products?limit=20');
    const productsData = await productsResponse.json()
    const products = productsData.products;
    return {
        products: products
    }
}
```

* store +page.svelte 

```
<script>
    export let data;
    const { products } = data;
</script>
<div class="flex h-screen">
    <div class="m-auto">
        {#each products as product}
            <div class="card w-96 glass">
                <figure><img src="{product.thumbnail}" alt="car!"/></figure>
                <div class="card-body">
                <h2 class="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">$ {product.price}</button>
                </div>
                </div>
            </div>
            <div class="divider"></div> 
        {/each}
    </div>
</div>
```