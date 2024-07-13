<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - results for "{data.q}"</title>
</svelte:head>

{#each data.objects as o}
    <a href="/{o.package.name}">
        <div
            class="m-2 flex flex-col rounded-xl border-2 border-black bg-primary p-2 text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
        >
            <div class="flex space-x-1">
                <span class="font-extrabold">{o.package.name}</span>
                <span
                    >({o.package.publisher.username ||
                        o.package.publisher.name})</span
                >
            </div>
            {#if o.package.description}
                <span class="text-sm">{o.package.description}</span>
            {/if}
            <div class="flex items-center pt-1">
                <span
                    class="w-fit rounded-xl border-2 border-black p-1 dark:border-white"
                    >{o.package.version}
                    <span
                        class="w-fit rounded-xl border-2 border-black px-1 dark:border-white"
                        >{new Date(o.package.date).toLocaleDateString()}</span
                    ></span
                >
                {#if o.package.keywords}
                    <div class="space-x-2 pl-2">
                        {#each o.package.keywords.slice(0, 5) as k}
                            <span
                                class="rounded-xl border-2 border-black p-1 dark:border-white"
                                >{k}</span
                            >
                        {/each}
                        {#if o.package.keywords.length > 5}
                            <span>View More...</span>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
    </a>
{:else}
    <div class="flex items-center justify-center">
        <span class="pt-5 font-extrabold text-3xl">No Packages Found!</span>
    </div>
{/each}
<div class="flex justify-center space-x-2">
    {#each data.pages as p}
        <a href="/search?q={data.q}&page={p}">
            <button
                class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                >{p}</button
            >
        </a>
    {/each}
    {#if data.pages.at(-1) && (data.pages.at(-1) || 0) + 1 != data.lastPage}
        <span>...</span>
    {/if}
    <a href="/search?q={data.q}&page={data.lastPage}">
        <button
            class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
            >{data.lastPage}</button
        >
    </a>
</div>
