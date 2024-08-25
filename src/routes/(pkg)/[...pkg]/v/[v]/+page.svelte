<script lang="ts">
    import Keywords from '$lib/components/Keywords.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Dependencies from '$lib/components/Dependencies.svelte';
    import Readme from '$lib/components/Readme.svelte';
    import Scripts from '$lib/components/Scripts.svelte';
    import md5 from 'crypto-js/md5';
    import Avatar from '$lib/components/Avatar.svelte';
    export let data;
    const pkg = `${data.name}@${data.version}`;
    onMount(() => {
        const unsubscribe = page.subscribe(($p) => {
            if (
                !$p.url.hash ||
                ($p.url.hash.slice(1) != 'pkg' &&
                    $p.url.hash.slice(1) != 'deps')
            ) {
                location.href = '#pkg';
            }
        });
        return () => unsubscribe();
    });
</script>

<svelte:head>
    <title>npkg - {pkg}</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/github-dark.min.css"
    />
</svelte:head>

<div
    id="pkg"
    class="flex h-auto flex-col justify-center overflow-hidden text-center md:h-screen md:flex-row"
>
    <div class="flex h-full flex-col overflow-auto px-2 md:w-1/4">
        <span class="font-extrabold">{pkg}</span>
        <span class="text-sm">{data.description}</span>
        <span class="text-lg font-bold">Installation:</span>
        <pre class="flex items-center justify-center">
            <code class="hljs language-sh rounded-lg">npm i {pkg}</code>
        </pre>
        <div class="grid grid-cols-2">
            <div class="flex flex-col">
                <span class="text-lg font-bold">Versions:</span>
                <a href="/{data.name}/v" class="text-sm hover:underline"
                    >Click Here...</a
                >
            </div>
            <div class="flex flex-col">
                <span class="text-lg font-bold">Dependencies:</span>
                <a href="#deps" class="text-sm hover:underline">Click Here...</a
                >
            </div>
        </div>
        {#if data.keywords}
            <span class="text-lg font-bold">Keywords:</span>
            <div class="grid grid-cols-2 gap-2">
                <Keywords keywords={data.keywords} />
            </div>
        {/if}
        {#if data.scripts}
            <Scripts scripts={data.scripts} />
        {/if}
    </div>
    <Readme name={data.name} version={data.version} />
    <div class="flex h-full flex-col overflow-auto px-2 md:w-1/4">
        <div class="grid grid-cols-3">
            {#if data.homepage}
                <div class="flex flex-col">
                    <span class="font-extrabold">Homepage:</span>
                    <a
                        href={data.homepage}
                        target="_blank"
                        class="hover:underline"
                    >
                        <span class="break-words"
                            >{data.homepage.replace(
                                /(http?s:\/\/)|(\/$)/g,
                                '',
                            )}</span
                        >
                    </a>
                </div>
            {/if}
            {#if data.license}
                <div class="flex flex-col">
                    <span class="font-extrabold">License:</span>
                    <span>{data.license}</span>
                </div>
            {/if}
            <div class="flex flex-col">
                <span class="font-extrabold">Size:</span>
                <span
                    >{(data.dist.unpackedSize / (1000 * 1000)).toFixed(2)} MB<br
                    />{(data.dist.unpackedSize / (1024 * 1024)).toFixed(2)} MiB</span
                >
            </div>
        </div>
        <span class="font-extrabold">Code:</span>
        <a href="/{data.name}/v/{data.version}/code" class="hover:underline"
            >Click Here...</a
        >
        {#if data.author}
            {#if data.author.username || data.author.name}
                <span class="font-extrabold">Author:</span>
                <div class="flex items-center justify-center gap-x-1 space-y-1">
                    <Avatar email={data.author.email} />
                    {#if data.author.url}
                        <a
                            href={data.author.url}
                            target="_blank"
                            class="hover:underline"
                        >
                            <span
                                >{data.author.username ||
                                    data.author.name}</span
                            >
                        </a>
                    {:else}
                        <span>{data.author.username || data.author.name}</span>
                    {/if}
                </div>
            {/if}
        {/if}
        {#if data.contributors}
            <span class="font-extrabold"
                >Contributors ({data.contributors.length}):</span
            >
            {#each data.contributors as c}
                {#if c.username || c.name}
                    <div
                        class="flex items-center justify-center gap-x-1 space-y-1"
                    >
                        <Avatar email={c.email} />
                        {#if c.url}
                            <a
                                href={c.url}
                                target="_blank"
                                class="hover:underline"
                            >
                                <span>{c.username || c.name}</span>
                            </a>
                        {:else}
                            <span>{c.username || c.name}</span>
                        {/if}
                    </div>
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
                    <div
                        class="flex items-center justify-center gap-x-1 space-y-1"
                    >
                        <Avatar email={m.email} />
                        {#if m.url}
                            <a
                                href={m.url}
                                target="_blank"
                                class="hover:underline"
                            >
                                <span>{m.username || m.name}</span>
                            </a>
                        {:else}
                            <span>{m.username || m.name}</span>
                        {/if}
                    </div>
                {:else}
                    <span class="text-red-600">An error occurred!</span>
                {/if}
            {/each}
        {/if}
    </div>
</div>
<Dependencies
    dependencies={data.dependencies}
    devDependencies={data.devDependencies}
/>
