<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - {data.name}@{data.version}</title>
</svelte:head>

<div class="flex columns-3">
    <div class="flex h-full w-container_min flex-col">
        <span class="p-2 font-extrabold text-center">{data.name}@{data.version}</span>
        <span class="p-2 text-sm">{data.description}</span>
    </div>
    <div class="w-container_max text-justify">
        <span>{data.readme}</span>
    </div>
    <div class="flex h-full w-container_min text-center flex-col p-2">
        {#if data.author}
            <span>Author:</span>
            {#if data.author.url}
                <a href={data.author.url}>
                    <span>{data.author.username || data.author.name}</span>
                </a>
            {:else}
                <span>{data.author.username || data.author.name}</span>
            {/if}
        {/if}
        {#if data.contributors}
            {#each data.contributors as c}
                <span>Contributors ({data.contributors.length}):</span>
                {#if c.url}
                    <a href={c.url}>
                        <span>{c.username || c.name}</span>
                    </a>
                {:else}
                    <span>{c.username || c.name}</span>
                {/if}
            {/each}
        {/if}
        {#if data.maintainers}
            {#each data.maintainers as m}
                <span>Maintainers ({data.maintainers.length}):</span>
                {#if m.url}
                    <a href={m.url}>
                        <span>{m.username || m.name}</span>
                    </a>
                {:else}
                    <span>{m.username || m.name}</span>
                {/if}
            {/each}
        {/if}
    </div>
</div>
