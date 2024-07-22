<script lang="ts">
    import Keywords from '../../../../../components/Keywords.svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    export let data;
    const pkg = `${data.name}@${data.version}`;
    onMount(() => {
        const unsubscribe = page.subscribe(($p) => {
            if (
                !$p.url.hash ||
                ($p.url.hash != '#pkg' && $p.url.hash != '#deps')
            ) {
                goto('#pkg', { replaceState: true });
            }
        });
        return () => unsubscribe();
    });
</script>

<svelte:head>
    <title>npkg - {pkg}</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/styles/github-dark.min.css"
    />
</svelte:head>

<div id="pkg" class="flex h-screen columns-3 justify-center overflow-hidden">
    <div class="flex h-full w-1/4 flex-col overflow-auto px-2">
        <span class="text-center font-extrabold">{pkg}</span>
        <span class="text-center text-sm">{data.description}</span>
        <span class="text-center text-lg font-bold">Installation:</span>
        <pre class="flex items-center justify-center">
            <code class="hljs language-sh rounded-lg">npm i {pkg}</code>
        </pre>
        <div class="flex justify-center space-x-14">
            <div class="flex flex-col">
                <span class="text-center text-lg font-bold">Versions:</span>
                <a href="/{data.name}/v" class="text-center hover:underline"
                    >Click Here...</a
                >
            </div>
            <div class="flex flex-col">
                <span class="text-center text-lg font-bold">Dependencies:</span>
                <a href="#deps" class="text-center hover:underline"
                    >Click Here...</a
                >
            </div>
        </div>
        {#if data.keywords}
            <span class="text-center text-lg font-bold">Keywords:</span>
            <div class="grid grid-cols-2 gap-2 text-center">
                <Keywords keywords={data.keywords} />
            </div>
        {/if}
        {#if data.scripts}
            <span class="text-center text-lg font-bold">Scripts:</span>
            {#each Object.entries(data.scripts) as [k, v]}
                <span class="text-center font-bold">{k}</span>
                <pre class="flex items-center justify-center">
                    <code class="hljs language-sh rounded-lg">{v}</code>
                </pre>
            {/each}
        {/if}
    </div>
    <div class="flex w-1/2 items-center justify-center">
        <iframe
            src="/{data.name}/v/{data.version}/readme"
            width="1150px"
            height="100%"
            title="Readme"
            sandbox="allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
    </div>
    <div class="flex h-full w-1/4 flex-col overflow-auto px-2 text-center">
        {#if data.homepage}
            <span class="font-extrabold">Homepage:</span>
            <a href={data.homepage} target="_blank" class="hover:underline">
                <span
                    >{data.homepage
                        .replace(/http?s:\/\//, '')
                        .replace(/\/$/, '')}</span
                >
            </a>
        {/if}
        {#if data.author}
            {#if data.author.username || data.author.name}
                <span class="font-extrabold">Author:</span>
                {#if data.author.url}
                    <a
                        href={data.author.url}
                        target="_blank"
                        class="hover:underline"
                    >
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
                        <a href={c.url} target="_blank" class="hover:underline">
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
                        <a href={m.url} target="_blank" class="hover:underline">
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
<div
    id="deps"
    class="absolute inset-0 hidden items-center justify-center target:flex"
>
    <div
        class="relative rounded-xl border-2 border-black bg-primary p-3 pt-9 shadow-2xl dark:border-white dark:bg-primary_dark"
    >
        <div class="flex space-x-8">
            {#if data.dependencies}
                <div class="flex flex-col">
                    <span class="text-center text-lg font-bold"
                        >Dependencies:</span
                    >
                    <div class="grid grid-cols-3 justify-items-center gap-4">
                        {#each Object.entries(data.dependencies) as [k]}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if data.devDependencies}
                <div class="flex flex-col">
                    <span class="text-center text-lg font-bold"
                        >Dev Dependencies</span
                    >
                    <div class="grid grid-cols-3 justify-items-center gap-4">
                        {#each Object.entries(data.devDependencies) as [k]}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
        <a
            href="#pkg"
            class="absolute right-2 top-2 rounded-full border-2 p-1 text-sm font-extrabold"
            >Close</a
        >
    </div>
</div>
