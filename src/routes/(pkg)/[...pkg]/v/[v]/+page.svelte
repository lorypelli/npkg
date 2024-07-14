<script lang="ts">
    export let data;
    const pkg = `${data.name}@${data.version}`;
</script>

<svelte:head>
    <title>npkg - {pkg}</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/styles/github-dark.min.css"
    />
</svelte:head>

<div class="flex h-screen columns-3">
    <div class="flex h-full w-container_min flex-col">
        <span class="text-center font-extrabold">{pkg}</span>
        <span class="text-center text-sm">{data.description}</span>
        <span class="text-center font-bold">Installation:</span>
        <pre class="flex items-center justify-center">
            <code class="hljs language-sh rounded-lg">npm i {pkg}</code>
        </pre>
    </div>
    <div class="flex w-container_max items-center justify-center">
        <iframe
            class="pl-5"
            src="/{data.name}/v/{data.version}/readme"
            width="1150px"
            height="100%"
            title="Readme"
            sandbox=""
        ></iframe>
    </div>
    <div class="flex h-full w-container_min flex-col p-2 text-center">
        {#if data.author}
            {#if data.author.username || data.author.name}
                <span class="font-extrabold">Author:</span>
                {#if data.author.url}
                    <a href={data.author.url}>
                        <span>{data.author.username || data.author.name}</span>
                    </a>
                {:else}
                    <span>{data.author.username || data.author.name}</span>
                {/if}
            {/if}
        {/if}
        {#if data.contributors}
            <span class="font-extrabold"
                >Contributors ({data.contributors.length}):</span
            >
            {#each data.contributors as c}
                {#if c.username || c.name}
                    {#if c.url}
                        <a href={c.url}>
                            <span>{c.username || c.name}</span>
                        </a>
                    {:else}
                        <span>{c.username || c.name}</span>
                    {/if}
                {:else}
                    <span class="text-red-600">An error occurred!</span>
                {/if}
            {/each}
        {/if}
        {#if data.maintainers}
            <span class="font-extrabold"
                >Maintainers ({data.maintainers.length}):</span
            >
            {#each data.maintainers as m}
                {#if m.username || m.name}
                    {#if m.url}
                        <a href={m.url}>
                            <span>{m.username || m.name}</span>
                        </a>
                    {:else}
                        <span>{m.username || m.name}</span>
                    {/if}
                {:else}
                    <span class="text-red-600">An error occurred!</span>
                {/if}
            {/each}
        {/if}
    </div>
</div>
