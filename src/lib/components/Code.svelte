<script lang="ts">
    import type { FileEntries } from '../../../types/package.ts';
    export let code: FileEntries;
    export let pkg: string;
    export let version: string;
</script>

<span class="text-center text-xl">Code for {pkg}</span>
<span class="text-md text-center font-bold">{version}</span>
<a href="#select">
    <div
        class="flex justify-center rounded-md border-2 border-black py-1 dark:border-white"
    >
        <button class="toggle">Select a File</button>
    </div>
</a>
<div
    id="select"
    class="m-1 hidden flex-col items-center overflow-auto rounded-xl border-2 border-black target:flex dark:border-white"
>
    {#each Object.entries(code) as [k, v]}
        <a href="/{pkg}/v/{version}/code/{k.slice(1)}?hex={v.hex}"
            ><button
                class="my-1 rounded-md border-2 border-black p-1 dark:border-white"
                >{k.slice(1)}</button
            ></a
        >
    {/each}
</div>
