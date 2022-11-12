<script>
	import '../app.postcss';
</script>

<main>
	<nav class="flex w-screen">
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
