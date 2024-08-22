<script lang="ts">
    import type { User } from '../../../types/user.ts';
    import Keywords from './Keywords.svelte';
    export let date: string;
    export let description = '';
    export let keywords: string[] = [];
    export let name: string;
    export let publisher: User;
    export let version: string;
    export let small = false;
</script>

<a href="/{name}/v/latest#pkg">
    <div
        class="m-1 flex flex-col rounded-xl border-2 border-black bg-primary p-2 hover:bg-gray-400 dark:border-white dark:bg-primary_dark dark:hover:bg-gray-800"
    >
        <div class="flex space-x-1">
            <span class="font-extrabold">{name}</span>
            {#if !small}
                <span>({publisher.username || publisher.name})</span>
            {/if}
        </div>
        {#if description}
            <span class="break-words text-sm">{description}</span>
        {/if}
        <div class="flex flex-wrap gap-2">
            <span
                class="rounded-xl border-2 border-black p-1 text-center dark:border-white"
                >{version}
                <span
                    class="rounded-md border-2 border-black px-1 dark:border-white"
                    >{new Date(date).toLocaleDateString()}</span
                ></span
            >
            {#if !small && keywords}
                <div class="flex flex-wrap gap-2">
                    <Keywords {keywords} limit={5} />
                </div>
            {/if}
        </div>
    </div>
</a>
