<script lang="ts">
    import { twMerge } from 'tailwind-merge';
    import type { Entries } from '@npkg/types';
    import Wrapper from './Wrapper.svelte';
    interface Props {
        dependencies?: Entries;
        devDependencies?: Entries;
    }
    const { dependencies = {}, devDependencies = {} }: Props = $props();
    const deps = $derived(Object.keys(dependencies));
    const devDeps = $derived(Object.keys(devDependencies));
    const hasDeps = $derived(deps.length != 0);
    const hasDevDeps = $derived(devDeps.length != 0);
</script>

<svelte:window
    onkeydown={(e) => {
        if (e.shiftKey && e.key == 'D') {
            e.preventDefault();
            location.hash = '#deps';
        }
        if (location.hash == '#deps' && e.key == 'Escape') {
            e.preventDefault();
            location.hash = '#';
        }
    }}
/>

<Wrapper hash="deps">
    {#if !hasDeps && !hasDevDeps}
        <div class="pt-1">
            <span class="font-extrabold">No Dependencies Found!</span>
        </div>
    {:else}
        <div
            class={twMerge(
                'flex flex-col items-center overflow-hidden text-center md:grid-cols-2',
                hasDeps && hasDevDeps && 'md:grid',
            )}
        >
            {#if hasDeps}
                <div class="flex flex-col">
                    <span class="text-lg font-bold">Dependencies:</span>
                    <div class="flex flex-col overflow-auto">
                        {#each deps as k}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if hasDevDeps}
                <div class="flex flex-col">
                    <span class="text-lg font-bold">Dev Dependencies:</span>
                    <div class="flex flex-col overflow-auto">
                        {#each devDeps as k}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    {/if}
</Wrapper>
