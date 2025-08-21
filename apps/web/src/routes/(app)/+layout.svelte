<script lang="ts">
	import '$lib/styles/globals.css';
	import '$lib/styles/scrollbar.css';
	const { children } = $props();
</script>

<svelte:head>
	<title>npkg: fast and efficient alternative to the slow npm website!</title>
	<meta name="og:title" content="npkg - fast and efficient alternative to the slow npm website!" />
	<meta
		name="description"
		content="NPKG is a fast and efficient alternative to the slow npm website. If you're tired of sluggish page loads and inefficient browsing on npm's official site, npkg is here to offer you a lightning-fast experience for exploring packages, managing dependencies, and copying useful scripts."
	/>
	<meta
		name="og:description"
		content="NPKG is a fast and efficient alternative to the slow npm website. If you're tired of sluggish page loads and inefficient browsing on npm's official site, npkg is here to offer you a lightning-fast experience for exploring packages, managing dependencies, and copying useful scripts."
	/>
</svelte:head>

{@render children?.()}
