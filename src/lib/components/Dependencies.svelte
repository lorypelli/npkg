<script lang="ts">
    import type { Entries } from '../../../types/package.ts';
    import Wrapper from './Wrapper.svelte';
    interface Props {
        dependencies?: Entries;
        devDependencies?: Entries;
    }
    let { dependencies = {}, devDependencies = {} }: Props = $props();
</script>

<svelte:window
    onkeydown={(e) => {
        if (e.shiftKey && e.key == 'D') {
            e.preventDefault();
            location.href = '#deps';
        }
        if (location.hash.slice(1) == 'deps' && e.key == 'Escape') {
            e.preventDefault();
            location.href = '#pkg';
        }
    }}
/>

<Wrapper innerHash="deps" outerHash="pkg">
    {#if !dependencies && !devDependencies}
        <span class="font-extrabold">No dependencies found!</span>
    {:else}
        <div
            class="flex flex-col overflow-hidden text-center md:grid md:grid-cols-2"
        >
            {#if dependencies}
                <div class="flex flex-col">
                    <span class="text-lg font-bold">Dependencies:</span>
                    <div class="flex flex-col overflow-auto">
                        {#each Object.entries(dependencies) as [k]}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if devDependencies}
                <div class="flex flex-col">
                    <span class="text-lg font-bold">Dev Dependencies</span>
                    <div class="flex flex-col overflow-auto">
                        {#each Object.entries(devDependencies) as [k]}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    {/if}
</Wrapper>
