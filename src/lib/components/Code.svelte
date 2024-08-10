<script lang="ts">
    import type { FileEntries } from '../../../types/package.ts';
    export let code: FileEntries;
    export let pkg: string;
    export let version: string;
</script>

<span class="text-center text-xl">Code for {pkg}</span>
<span class="text-center text-md font-bold">{version}</span>
<select class="mx-2 rounded-md p-1" on:change={(e) => {
    location.href = `/${pkg}/v/${version}/code/${e.currentTarget.value}`;
}}>
    <option hidden selected value>Select a File</option>
    {#each Object.entries(code) as [k, v]}
        <option value={v.hex}>{k.slice(1)}</option>
    {/each}
</select>
