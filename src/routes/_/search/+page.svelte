<script lang="ts">
    export let data
</script>

{#each data.objects as d}
<div class="flex flex-col h-24 rounded-xl border-2 border-black bg-primary p-2 mx-2 mt-2 text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary">
    <span>{d.package.name}</span>
    <span>{d.package.author?.username || d.package.author?.name || ''}</span>
</div>
{/each}