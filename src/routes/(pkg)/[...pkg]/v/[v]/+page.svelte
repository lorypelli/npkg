<script lang="ts">
    import Keywords from '$lib/components/Keywords.svelte';
    import Dependencies from '$lib/components/Dependencies.svelte';
    import Readme from '$lib/components/Readme.svelte';
    import Scripts from '$lib/components/Scripts.svelte';
    import Avatar from '$lib/components/Avatar.svelte';
    import TypescriptIcon from '$lib/components/TypescriptIcon.svelte';
    import { twMerge } from 'tailwind-merge';
    import DownloadsWrapper from '$lib/components/DownloadsWrapper.svelte';
    import { fixURL } from '$lib/utils/url.ts';
    import Highlight from '$lib/components/Highlight.svelte';
    const { data } = $props();
    const pkg = $derived(`${data.name}@${data.version}`);
</script>

<svelte:head>
    <title>npkg: fast and efficient - {pkg}</title>
    <meta name="og:title" content="npkg: fast and efficient - {pkg}" />
    {#if data.description}
        <meta name="description" content={data.description} />
        <meta name="og:description" content={data.description} />
    {/if}
    {#if data.author}
        {#if data.author.username || data.author.name}
            <meta
                name="author"
                content={data.author.username || data.author.name}
            />
        {/if}
    {/if}
    {#if data.keywords}
        <meta name="keywords" content={data.keywords.join(', ')} />
    {/if}
    <Highlight />
</svelte:head>

{#if data.deprecated}
    <div
        class="mx-2 flex justify-center rounded-md bg-red-600 py-1 text-center"
    >
        <span>{data.deprecated}</span>
    </div>
{/if}
<div
    class={twMerge(
        'flex flex-col justify-center text-center md:h-full md:flex-row md:overflow-hidden',
        data.deprecated && 'pt-1',
    )}
>
    <div class="flex flex-col px-2 md:w-1/4 md:overflow-auto">
        <div class="flex justify-center gap-x-1">
            <span class="font-extrabold">{pkg}</span>
            <TypescriptIcon external={data.external} />
        </div>
        <span class="text-sm">{data.description}</span>
        <span class="text-lg font-bold">Installation:</span>
        <pre class="flex items-center justify-center">
            <code class="hljs rounded-lg" data-highlighted="no"
                >npm i {pkg}</code
            >
        </pre>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col items-center">
                <span class="text-lg font-bold">Versions:</span>
                <a href="/{data.name}/v" class="text-sm hover:underline"
                    >Click Here...</a
                >
            </div>
            <div class="flex flex-col items-center">
                <span class="text-lg font-bold">Dependencies:</span>
                <a href="#deps" class="text-sm hover:underline">Click Here...</a
                >
            </div>
            <div class="flex flex-col items-center">
                <span class="text-lg font-bold">Scripts:</span>
                <a href="#scripts" class="text-sm hover:underline"
                    >Click Here...</a
                >
            </div>
            <div class="flex flex-col items-center">
                <span class="text-lg font-bold">Code:</span>
                <a
                    href="/{data.name}/v/{data.version}/code"
                    class="text-sm hover:underline">Click Here...</a
                >
            </div>
        </div>
        {#if data.keywords && data.keywords.length > 0}
            <span class="text-lg font-bold">Keywords:</span>
            <div class="grid grid-cols-2 gap-2">
                <Keywords keywords={data.keywords} />
            </div>
        {/if}
    </div>
    <Readme name={data.name} version={data.version} />
    <div class="flex flex-col px-2 md:w-1/4 md:overflow-auto">
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
            {#if data.dist.unpackedSize}
                <div class="flex flex-col">
                    <span class="font-extrabold">Size:</span>
                    <div class="grid grid-cols-2">
                        <span
                            >{(data.dist.unpackedSize / (1000 * 1000)).toFixed(
                                2,
                            )} MB</span
                        >
                        <span
                            >{(data.dist.unpackedSize / (1024 * 1024)).toFixed(
                                2,
                            )} MiB</span
                        >
                    </div>
                </div>
            {/if}
        </div>
        {#if data.author && (data.author.username || data.author.name)}
            <span class="font-extrabold">Author:</span>
            <div class="flex items-center justify-center space-y-1 gap-x-1">
                <Avatar email={data.author.email} />
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
            </div>
        {/if}
        {#if data.contributors && data.contributors.length > 0}
            <span class="font-extrabold"
                >Contributors ({data.contributors.length}):</span
            >
            {#each data.contributors as c}
                {#if c.username || c.name}
                    <div
                        class="flex items-center justify-center space-y-1 gap-x-1"
                    >
                        <Avatar email={c.email} />
                        {#if c.url}
                            <a
                                href={fixURL(c.url)}
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
                    <span class="font-bold text-red-600"
                        >An error occurred!</span
                    >
                {/if}
            {/each}
        {/if}
        {#if data.maintainers && data.maintainers.length > 0}
            <span class="font-extrabold"
                >Maintainers ({data.maintainers.length}):</span
            >
            {#each data.maintainers as m}
                {#if m.username || m.name}
                    <div
                        class="flex items-center justify-center space-y-1 gap-x-1"
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
                    <span class="font-bold text-red-600"
                        >An error occurred!</span
                    >
                {/if}
            {/each}
        {/if}
        <DownloadsWrapper range={data.range} downloads={data.downloads} />
    </div>
</div>
<Dependencies
    dependencies={data.dependencies}
    devDependencies={data.devDependencies}
/>
<Scripts scripts={data.scripts} />
