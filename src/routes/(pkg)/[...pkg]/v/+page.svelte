<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - {data.pkg} versions</title>
</svelte:head>

<div class="px-4">
    <div class="grid grid-cols-4 gap-2">
        {#each Object.entries(data.tags).reverse() as [k, v]}
            <a href="/{data.pkg}/v/{k}">
                <div
                    class="h-full rounded-xl border-2 border-black bg-primary p-2 text-center text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
                >
                    <span class="font-extrabold">{k}</span>
                    <span>{v}</span>
                </div>
            </a>
        {/each}
    </div>
    <br />
    <div class="grid grid-cols-4 gap-2">
        {#each Object.entries(data.versions).reverse() as [k]}
            <a href="/{data.pkg}/v/{k}">
                <div
                    class="h-full rounded-xl border-2 border-black bg-primary p-2 text-center text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
                >
                    <span class="font-extrabold">{k}</span>
                    <span>{new Date(data.time[k]).toLocaleDateString()}</span>
                </div>
            </a>
        {/each}
    </div>
</div>
