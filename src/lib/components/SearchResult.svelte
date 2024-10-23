<script lang="ts">
    import type { User } from '../../../types/user.ts';
    import { twMerge } from 'tailwind-merge';
    import Avatar from './Avatar.svelte';
    import Keywords from './Keywords.svelte';
    interface Props {
        date: string;
        description?: string;
        keywords?: string[];
        name: string;
        publisher: User;
        version: string;
        small?: boolean;
    }
    let {
        date,
        description = '',
        keywords = [],
        name,
        publisher,
        version,
        small = false,
    }: Props = $props();
</script>

<a href="/{name}/v/latest#pkg">
    <div
        class="m-1 flex flex-col rounded-xl border-2 border-black bg-primary p-2 hover:bg-gray-300 dark:border-white dark:bg-primary_dark dark:hover:bg-gray-800"
    >
        <div class="flex space-x-1">
            <span class="font-extrabold">{name}</span>
            {#if !small}
                <span>({publisher.username || publisher.name})</span>
                <Avatar email={publisher.email} />
            {/if}
        </div>
        {#if description}
            <div
                class={twMerge(
                    'mb-1 overflow-y-hidden whitespace-normal leading-3',
                    small && 'max-h-20',
                )}
            >
                <span class="break-words text-sm">{description}</span>
            </div>
        {/if}
        <div class="flex flex-wrap items-center gap-2">
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
