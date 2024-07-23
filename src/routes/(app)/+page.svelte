<script>
    import Search from '$lib/components/Search.svelte';
</script>

<svelte:head>
    <title>npkg</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center">
    <span class="text-8xl font-extrabold">NPKG</span>
    <Search />
    <span class="text-lg font-bold"
        >View the source code on: <a
            href="https://github.com/lorypelli/npkg"
            target="_blank"
            class="hover:underline">Github</a
        ></span
    >
</div>
