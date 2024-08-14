<script lang="ts">
    import type { Entries } from '../../../types/package.ts';
    export let scripts: Entries;
</script>

<span class="text-center text-lg font-bold">Scripts:</span>
{#each Object.entries(scripts) as [k, v]}
    <span class="text-center font-bold">{k}</span>
    <pre class="flex items-center justify-center">
        <code class="hljs language-sh rounded-lg">{v}</code>
    </pre>
{/each}
