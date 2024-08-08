<script lang="ts">
    import type { FileEntries } from '../../../types/package.ts';
    export let code: FileEntries;
    export let pkg: string;
    export let version: string;
</script>

<select class="mx-2 rounded-md">
    <option>Select a File</option>
    {#each Object.entries(code) as [k, v]}
        <option>{k.slice(1)}</option>
    {/each}
</select>
