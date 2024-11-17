<script lang="ts">
    import Search from '$lib/components/Search.svelte';
    import '$lib/styles/globals.css';
    interface Props {
        children?: import('svelte').Snippet;
    }
    let { children }: Props = $props();
</script>

<nav class="flex justify-center p-2 sm:justify-between">
    <div class="hidden sm:block">
        <a href="/">
            <button
                class="w-32 rounded-xl border-2 border-black bg-primary p-3 dark:border-white dark:bg-primary_dark"
                >Home</button
            >
        </a>
    </div>
    <Search nav />
</nav>
{@render children?.()}
