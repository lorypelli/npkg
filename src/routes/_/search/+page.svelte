<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - results for</title>
</svelte:head>

{#each data.objects as o}
    <a href={o.package.links.npm}>
        <div
            class="m-2 flex h-24 flex-col rounded-xl border-2 border-black bg-primary p-2 text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
        >
            <span class="font-extrabold">{o.package.name}</span>
            <span>{o.package.description}</span>
            <div class="pt-1">
                <span
                    class="w-fit rounded-xl border-2 border-black p-1 dark:border-white"
                    >{o.package.version}
                    <span
                        class="w-fit rounded-xl border-2 border-black px-1 dark:border-white"
                        >{new Date(o.package.date).toLocaleDateString()}</span
                    ></span
                >
            </div>
        </div>
    </a>
{/each}
