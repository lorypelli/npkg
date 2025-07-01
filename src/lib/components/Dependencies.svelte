<script lang="ts">
    import type { Entries } from '../../../types/package.ts';
    import Wrapper from './Wrapper.svelte';
    interface Props {
        dependencies?: Entries;
        devDependencies?: Entries;
    }
    const { dependencies = {}, devDependencies = {} }: Props = $props();
    const deps = $derived(Object.keys(dependencies));
    const devDeps = $derived(Object.keys(devDependencies));
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
    {#if deps.length == 0 && devDeps.length == 0}
        <div class="pt-1">
            <span class="font-extrabold">No Dependencies Found!</span>
        </div>
    {:else}
        <div
            class="flex flex-col overflow-hidden text-center md:grid md:grid-cols-2"
        >
            {#if deps.length != 0}
                <div class="flex flex-col">
                    <span class="text-lg font-bold">Dependencies:</span>
                    <div class="flex flex-col overflow-auto">
                        {#each deps as k}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if devDeps.length != 0}
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
