<script lang="ts">
    import Arrow from './Arrow.svelte';
    import PageSelector from './PageSelector.svelte';
    export let currentPage: number;
    export let lastPage: number;
    export let query: string;
    const pages = 2;
    const pageRemains = lastPage - currentPage;
</script>

<div class="flex flex-wrap justify-center gap-x-1 pt-0.5">
    <Arrow {currentPage} {query} type="previous" />
    {#if currentPage - 1 > pages}
        <a href="/search?q={query}&page=1">
            <button
                class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                >1</button
            >
        </a>
        {#if currentPage - 2 > pages}
            <PageSelector {lastPage} {query} />
        {/if}
    {/if}
    {#if currentPage != 1}
        <div class="flex flex-row-reverse flex-wrap justify-center gap-x-1">
            {#each { length: pages } as _, i}
                {@const page = currentPage - i - 1}
                {#if page > 0}
                    <a href="/search?q={query}&page={page}">
                        <button
                            class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                            >{page}</button
                        >
                    </a>
                {/if}
            {/each}
        </div>
    {/if}
    <a href="/search?q={query}&page={currentPage}">
        <button
            class="mb-2 rounded-md border-2 border-black bg-gray-700 px-1 text-xl dark:border-white"
            >{currentPage}</button
        >
    </a>
    {#if currentPage != lastPage}
        <div class="flex flex-wrap justify-center gap-x-1">
            {#each { length: pages } as _, i}
                {@const page = currentPage + i + 1}
                {#if page <= lastPage}
                    <a href="/search?q={query}&page={page}">
                        <button
                            class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                            >{page}</button
                        >
                    </a>
                {/if}
            {/each}
        </div>
    {/if}
    {#if pageRemains > pages}
        {#if pageRemains - 1 > pages}
            <PageSelector {lastPage} {query} />
        {/if}
        <a href="/search?q={query}&page={lastPage}">
            <button
                class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                >{lastPage}</button
            >
        </a>
    {/if}
    <Arrow {currentPage} {query} type="next" />
</div>
