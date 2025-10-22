<script lang="ts">
    interface Props {
        keywords: string[];
        limit: number;
    }
    const { keywords, limit }: Props = $props();
</script>

{#each keywords.slice(0, limit) as k}
    <span
        class="rounded-xl border-2 border-black p-1 wrap-break-word dark:border-white"
        >{k}</span
    >
{/each}
{#if keywords.length > limit}
    <div class="flex items-center">
        <span>View More...</span>
    </div>
{/if}
