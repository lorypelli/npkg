<script lang="ts">
    export let keywords: string[];
    export let limit = keywords.length;
</script>

{#each keywords.slice(0, limit) as k}
    <span class="rounded-xl border-2 border-black p-1 dark:border-white"
        >{k}</span
    >
{/each}
{#if keywords.length > limit}
    <div class="flex items-center">
        <span>View More...</span>
    </div>
{/if}
