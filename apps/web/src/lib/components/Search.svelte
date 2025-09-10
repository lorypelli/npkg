<script lang="ts">
    import type { Search } from '@npkg/types';
    import { twMerge } from 'tailwind-merge';
    import { BASE_URL } from '$lib/utils/url.ts';
    import SearchResult from './SearchResult.svelte';
    import SearchIcon from './SearchIcon.svelte';
    interface Props {
        nav?: boolean;
    }
    const { nav = false }: Props = $props();
    let input = $state('');
    let suggestions = $state<Search['packages']>([]);
    let showSuggestions = $state(false);
    let inputElement = $state<HTMLInputElement>();
    async function getSuggestions(input: string) {
        const len = input.length;
        if (len > 2 && len < 64) {
            const suggestions = await fetch(
                `${BASE_URL}/search?q=${input}&size=3&suggestions`,
            );
            if (!suggestions.ok) {
                return [];
            }
            const pkg_suggestions: Search['packages'] =
                await suggestions.json();
            return pkg_suggestions;
        }
        return [];
    }
</script>

<div class={twMerge('flex flex-col gap-y-1', nav && 'w-full')}>
    <form
        action="/search"
        autocomplete="off"
        class="flex justify-center gap-x-2"
        onsubmit={() => {
            showSuggestions = false;
        }}
    >
        <input
            name="q"
            type="search"
            placeholder="Search Packages..."
            onkeyup={async (e) => {
                input = e.currentTarget.value.trim();
                suggestions = await getSuggestions(input);
                showSuggestions = true;
            }}
            bind:this={inputElement}
            required
            class={twMerge(
                'bg-primary dark:bg-primary_dark w-64 rounded-xl border-2 border-black p-3 dark:border-white',
                nav && 'w-full',
            )}
        />
        <button
            type="submit"
            class="bg-primary dark:bg-primary_dark cursor-pointer rounded-xl border-2 border-black p-3 active:bg-gray-300 dark:border-white dark:active:bg-gray-800"
            ><SearchIcon /></button
        >
    </form>
    {#if showSuggestions && input.trim() != ''}
        <div
            class={twMerge('flex flex-col gap-y-1', nav && `absolute top-16`)}
            style:width="{inputElement.offsetWidth}px"
        >
            {#each suggestions as s}
                <SearchResult
                    date={s.date}
                    description={s.description}
                    keywords={s.keywords}
                    name={s.name}
                    publisher={s.publisher}
                    version={s.version}
                    small
                    onclick={() => {
                        showSuggestions = false;
                    }}
                />
            {:else}
                <div
                    class="bg-primary dark:bg-primary_dark text-center rounded-xl border-2 border-black p-2 hover:bg-gray-300 dark:border-white dark:hover:bg-gray-800"
                >
                    <span class="text-xl">...</span>
                </div>
            {/each}
        </div>
    {/if}
</div>
