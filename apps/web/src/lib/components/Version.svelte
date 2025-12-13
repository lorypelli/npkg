<script lang="ts">
    import { twMerge } from 'tailwind-merge';
    import type { Entries, VersionEntries } from '@npkg/types';
    import Check from './Check.svelte';
    import Uncheck from './Uncheck.svelte';
    import { browser } from '$app/environment';
    interface Props {
        pkg: string;
        tags: Entries;
        versions: VersionEntries[];
    }
    const { pkg, tags, versions }: Props = $props();
    let filteredVersions = $derived([...versions]);
    let exactMatch = $state(false);
    let hideDeprecated = $state(false);
    let input = $state('');
    $effect(() =>
        input.length > 0 || exactMatch || hideDeprecated
            ? void (document.body.style.overflowY = 'scroll')
            : document.body.removeAttribute('style'),
    );
    $effect(() =>
        filterVersions(input.toLowerCase(), exactMatch, hideDeprecated),
    );
    function filterVersions(
        input: string,
        exactMatch: boolean,
        hideDeprecated: boolean,
    ) {
        filteredVersions = [...versions]
            .filter((v) =>
                Object.keys(v).some((k) =>
                    input.length > 0 && exactMatch
                        ? k == input
                        : k.includes(input),
                ),
            )
            .filter((v) =>
                Object.values(v).some((k) =>
                    hideDeprecated ? !k.deprecated : true,
                ),
            );
    }
</script>

<div class="px-4">
    <div class="grid grid-cols-3 gap-2 md:grid-cols-4">
        {#each Object.entries(tags) as [k, v]}
            <a href="/{pkg}/v/{k}">
                <div
                    class="bg-primary dark:bg-primary_dark flex h-full flex-col rounded-xl border-2 border-black p-2 text-center wrap-break-word dark:border-white"
                >
                    <span class="font-extrabold">{k}</span>
                    <span>{v}</span>
                </div>
            </a>
        {/each}
    </div>
    {#if !browser}
        <br />
    {:else}
        <div class="flex flex-col gap-y-1 py-1">
            <div class="flex items-center justify-center gap-x-2 py-1">
                <button
                    class="bg-primary dark:bg-primary_dark cursor-pointer rounded-xl border-2 border-black p-3 active:bg-gray-300 dark:border-white dark:active:bg-gray-800"
                    onclick={() => (exactMatch = !exactMatch)}
                >
                    <div class="flex items-center gap-x-2">
                        {#if exactMatch}
                            <Check />
                        {:else}
                            <Uncheck />
                        {/if}
                        <span>Exact Match!</span>
                    </div>
                </button>
                <button
                    class="bg-primary dark:bg-primary_dark cursor-pointer rounded-xl border-2 border-black p-3 active:bg-gray-300 dark:border-white dark:active:bg-gray-800"
                    onclick={() => (hideDeprecated = !hideDeprecated)}
                >
                    <div class="flex items-center gap-x-2">
                        {#if hideDeprecated}
                            <Check />
                        {:else}
                            <Uncheck />
                        {/if}
                        <span>Hide Deprecated!</span>
                    </div>
                </button>
            </div>
            <input
                type="search"
                placeholder="Search Versions..."
                onkeyup={async (e) => (input = e.currentTarget.value.trim())}
                class="bg-primary dark:bg-primary_dark w-full rounded-xl border-2 border-black p-3 text-center dark:border-white"
            />
        </div>
    {/if}
    <div class="grid grid-cols-3 gap-2 pt-1 md:grid-cols-4">
        {#each filteredVersions as version}
            {#each Object.entries(version) as [k, v]}
                <a href="/{pkg}/v/{k}">
                    <div
                        class={twMerge(
                            'bg-primary dark:bg-primary_dark flex h-full flex-col rounded-xl border-2 border-black p-2 text-center wrap-break-word dark:border-white',
                            v.deprecated && 'bg-red-400 dark:bg-red-600',
                        )}
                    >
                        <span class="font-extrabold">{k}</span>
                        <span>{new Date(v.time).toLocaleDateString()}</span>
                    </div>
                </a>
            {/each}
        {/each}
    </div>
</div>
