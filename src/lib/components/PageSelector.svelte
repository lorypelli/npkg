<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    export let lastPage: number;
    export let query: string;
</script>

<a href="#p_selector">...</a>
<div
    id="p_selector"
    class="absolute inset-0 hidden items-center justify-center bg-black/60 target:flex"
>
    <div
        class="relative cursor-move rounded-xl border-2 border-black bg-primary p-3 shadow-lg shadow-black dark:border-white dark:bg-primary_dark"
        use:draggable={{ bounds: 'parent', gpuAcceleration: false }}
    >
        <form action="/search" autocomplete="off">
            <input type="hidden" name="q" value={query} />
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
                class="rounded-xl border-2 border-black bg-primary p-3 active:bg-gray-700 dark:border-white dark:bg-primary_dark"
                >Go</button
            >
        </form>
    </div>
</div>
