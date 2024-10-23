<script lang="ts">
    interface Props {
        keywords: string[];
        limit?: number;
    }
    let { keywords, limit = keywords.length }: Props = $props();
</script>

{#each keywords.slice(0, limit) as k}
    <span
        class="break-words rounded-xl border-2 border-black p-1 dark:border-white"
        >{k}</span
    >
{/each}
{#if keywords.length > limit}
    <div class="flex items-center">
        <span>View More...</span>
    </div>
{/if}
