<script lang="ts">
    import type { ValidRange } from '../../../types/downloads.ts';
    export let range: ValidRange;
    export let num = -1;
</script>

<div class="flex flex-col items-center">
    {#if range == 'd'}
        <span>Downloads for last day:</span>
    {:else if range == 'w'}
        <span>Downloads for last week:</span>
    {:else if range == 'm'}
        <span>Downloads for last month:</span>
    {:else if range == 'y'}
        <span>Downloads for last year:</span>
    {/if}
    {#if num > -1}
        <span>{num}</span>
    {:else}
        <a href="?range={range}">
            <button
                class="rounded-xl border-2 border-black bg-primary p-3 active:bg-gray-300 dark:border-white dark:bg-primary_dark dark:active:bg-gray-700"
                >Show Downloads!</button
            >
        </a>
    {/if}
</div>
