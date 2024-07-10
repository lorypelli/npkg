<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - {data.name}@{data.version}</title>
</svelte:head>

<div class="flex columns-3">
    <div class="flex h-full w-container_min flex-col">
        <span class="font-extrabold text-center">{data.name}@{data.version}</span>
        <span class="text-sm text-center">{data.description}</span>
    </div>
    <div class="pl-5 w-container_max">
        {@html data.readme}
    </div>
    <div class="flex h-full w-container_min text-center flex-col p-2">
        {#if data.author}
            <span class="font-extrabold">Author:</span>
            {#if data.author.url}
                <a href={data.author.url}>
                    <span>{data.author.username || data.author.name}</span>
                </a>
            {:else}
                <span>{data.author.username || data.author.name}</span>
            {/if}
        {/if}
        {#if data.contributors}
            <span class="font-extrabold">Contributors ({data.contributors.length}):</span>
            {#each data.contributors as c}
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
            <span class="font-extrabold">Maintainers ({data.maintainers.length}):</span>
            {#each data.maintainers as m}
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
