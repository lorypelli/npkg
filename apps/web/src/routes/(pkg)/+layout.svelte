<script lang="ts">
    import Search from '$lib/components/Search.svelte';
    import '$lib/styles/globals.css';
    import '$lib/styles/scrollbar.css';
    const { children } = $props();
</script>

<nav class="flex gap-x-2 p-2">
    <div class="hidden sm:block">
        <a href="/">
            <button
                class="bg-primary dark:bg-primary_dark w-32 cursor-pointer rounded-xl border-2 border-black p-3 dark:border-white"
                >Home</button
            >
        </a>
    </div>
    <Search nav />
</nav>
{@render children()}
