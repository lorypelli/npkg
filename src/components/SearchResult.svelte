<script lang="ts">
    import type { User } from '../../types/user';
    export let date: string;
    export let description = '';
    export let keywords: string[] = [];
    export let name: string;
    export let publisher: User;
    export let version: string;
</script>

<a href="/{name}">
    <div
        class="m-1 flex flex-col rounded-xl border-2 border-black bg-primary p-2 text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
    >
        <div class="flex space-x-1">
            <span class="font-extrabold">{name}</span>
            <span>({publisher.username || publisher.name})</span>
        </div>
        {#if description}
            <span class="text-sm">{description}</span>
        {/if}
        <div class="flex items-center pt-1">
            <span
                class="w-fit rounded-xl border-2 border-black p-1 dark:border-white"
                >{version}
                <span
                    class="w-fit rounded-xl border-2 border-black px-1 dark:border-white"
                    >{new Date(date).toLocaleDateString()}</span
                ></span
            >
            {#if keywords}
                <div class="space-x-2 pl-2">
                    {#each keywords.slice(0, 5) as k}
                        <span
                            class="rounded-xl border-2 border-black p-1 dark:border-white"
                            >{k}</span
                        >
                    {/each}
                    {#if keywords.length > 5}
                        <span>View More...</span>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</a>
