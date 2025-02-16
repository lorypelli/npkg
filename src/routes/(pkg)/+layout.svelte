<script lang="ts">
    import Search from '$lib/components/Search.svelte';
    import '$lib/styles/globals.css';
    import '$lib/styles/scrollbar.css';
    interface Props {
        children?: import('svelte').Snippet;
    }
    let { children }: Props = $props();
</script>

<nav class="flex justify-center p-2 sm:justify-between">
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
{@render children?.()}
