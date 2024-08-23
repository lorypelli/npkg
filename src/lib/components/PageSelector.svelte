<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    export let lastPage: number;
    export let query: string;
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.shiftKey && e.key == 'P') {
            e.preventDefault();
            location.href = '#p_select';
        }
        if (location.hash.slice(1) == 'p_select' && e.key == 'Escape') {
            e.preventDefault();
            location.href = '#s';
        }
    }}
/>
<a href="#p_select">...</a>
<div
    id="p_select"
    class="fixed inset-0 hidden items-center justify-center bg-black/60 target:flex"
>
    <div
        class="relative cursor-move rounded-xl border-2 border-black bg-primary p-3 shadow-lg shadow-black dark:border-white dark:bg-primary_dark"
        use:draggable={{ bounds: 'parent', gpuAcceleration: false }}
    >
        <a
            href="#s"
            class="mb-1 flex justify-center rounded-full border-2 border-black p-1 text-sm font-extrabold dark:border-white"
            >Close</a
        >
        <form action="/search#s" autocomplete="off">
            <input type="hidden" name="q" value={query} readonly required />
            <input
                class="rounded-xl border-2 border-black bg-primary p-3 dark:border-white dark:bg-primary_dark"
                type="number"
                name="page"
                min="1"
                max={lastPage}
                required
            />
            <button
                type="submit"
                class="rounded-xl border-2 border-black bg-primary p-3 active:bg-gray-300 dark:border-white dark:bg-primary_dark dark:active:bg-gray-700"
                >Go</button
            >
        </form>
    </div>
</div>
