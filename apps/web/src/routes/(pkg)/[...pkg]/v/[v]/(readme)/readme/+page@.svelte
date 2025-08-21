<script lang="ts">
	import Highlight from '$lib/components/Highlight.svelte';
	import '$lib/styles/readme.css';
	import '$lib/styles/scrollbar.css';
	const { data } = $props();
</script>

<svelte:head>
	<title>npkg: fast and efficient - Readme</title>
	<meta name="og:title" content="npkg: fast and efficient - Readme" />
	<meta http-equiv="content-security-policy" content="upgrade-insecure-requests" />
	<Highlight />
	<base target="_blank" />
</svelte:head>

{@html data.pkg_readme}
