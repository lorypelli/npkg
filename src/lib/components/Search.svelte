<script lang="ts">
    import type { Search } from '../../../types/search.ts';
    import { twMerge } from 'tailwind-merge';
    import { BASE_URL } from '$lib/utils/url.ts';
    import SearchResult from './SearchResult.svelte';
    import SearchIcon from './SearchIcon.svelte';
    interface Props {
        nav?: boolean;
    }
    let { nav = false }: Props = $props();
    let input = $state('');
    let suggestions: Search['packages'] = $state([]);
    let showSuggestions = $state(false);
    async function getSuggestions(input: string) {
        if (input.trim() != '') {
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

<div class="flex flex-col">
    <form
        action="/search#s"
        autocomplete="off"
        class="flex justify-center gap-x-2"
    >
        <input
            name="q"
            placeholder="Search Packages..."
            oninput={async (e) => {
                input = e.currentTarget.value;
                suggestions = await getSuggestions(input);
                showSuggestions = true;
            }}
            required
            class="w-64 rounded-xl border-2 border-black bg-primary p-3 dark:border-white dark:bg-primary_dark"
        />
        <button
            type="submit"
            class="rounded-xl border-2 border-black bg-primary p-3 active:bg-gray-300 dark:border-white dark:bg-primary_dark dark:active:bg-gray-800"
            ><SearchIcon /></button
        >
    </form>
    {#if suggestions.length > 0 && input.trim() != ''}
        {#if showSuggestions}
            <div class={twMerge('w-64 pt-1', nav && 'absolute top-14')}>
                {#each suggestions as s}
                    <SearchResult
                        date={s.date}
                        description={s.description}
                        keywords={s.keywords}
                        name={s.name}
                        publisher={s.publisher}
                        version={s.version}
                        small
                    />
                {/each}
            </div>
        {/if}
    {/if}
</div>
