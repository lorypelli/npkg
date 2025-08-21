<script lang="ts">
    import type { Entries } from '../../../types/package.ts';
    import Wrapper from './Wrapper.svelte';
    interface Props {
        scripts?: Entries;
    }
    const { scripts = {} }: Props = $props();
    const s = $derived(Object.entries(scripts));
</script>

<svelte:window
    onkeydown={(e) => {
        if (e.shiftKey && e.key == 'S') {
            e.preventDefault();
            location.hash = '#scripts';
        }
        if (location.hash == '#scripts' && e.key == 'Escape') {
            e.preventDefault();
            location.hash = '#';
        }
    }}
/>

<Wrapper hash="scripts">
    {#if s.length == 0}
        <div class="pt-1">
            <span class="font-extrabold">No Scripts Found!</span>
        </div>
    {:else}
        {#each s as [k, v]}
            <div class="text-center">
                <span class="font-bold">{k}</span>
                <pre class="flex items-center justify-center">
                    <code class="hljs rounded-lg">{v}</code>
                </pre>
            </div>
        {/each}
    {/if}
</Wrapper>
