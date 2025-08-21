<script lang="ts">
	import Version from '$lib/components/Version.svelte';
	const { data } = $props();
</script>

<svelte:head>
	<title>npkg: fast and efficient - {data.pkg} versions</title>
	<meta name="og:title" content="npkg: fast and efficient - {data.pkg} versions" />
</svelte:head>

<Version pkg={data.pkg} tags={data.tags} versions={data.versions} />
