<script lang="ts">
    import type { Entries } from '../../../types/package.ts';
    import Wrapper from './Wrapper.svelte';
    interface Props {
        scripts?: Entries;
    }
    let { scripts = {} }: Props = $props();
    const s = Object.entries(scripts);
</script>

<svelte:window
    onkeydown={(e) => {
        if (e.shiftKey && e.key == 'S') {
            e.preventDefault();
            location.href = '#scripts';
        }
        if (location.hash.slice(1) == 'scripts' && e.key == 'Escape') {
            e.preventDefault();
            location.href = '#pkg';
        }
    }}
/>

<Wrapper innerHash="scripts" outerHash="pkg">
    {#if s.length == 0}
        <span class="font-extrabold">No Scripts Found!</span>
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
