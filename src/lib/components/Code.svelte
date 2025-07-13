<script lang="ts">
    import type { FileEntries } from '../../../types/package.ts';
    interface Props {
        code: FileEntries;
        pkg: string;
        version: string;
    }
    const { code, pkg, version }: Props = $props();
</script>

<span class="text-center text-xl">Code for {pkg}</span>
<span class="text-md text-center font-bold">{version}</span>
{#if !code}
    <div
        class="mx-2 flex justify-center rounded-md bg-red-600 py-1 text-center"
    >
        <span>Not Found!</span>
    </div>
{:else}
    <a href="#select">
        <div
            class="flex justify-center rounded-md border-2 border-black py-1 dark:border-white"
        >
            <button class="cursor-pointer">Select a File</button>
        </div>
    </a>
    <div class="pt-1">
        <div
            id="select"
            class="hidden flex-col items-center overflow-auto rounded-xl border-2 border-black target:flex dark:border-white"
        >
            {#each Object.keys(code) as k}
                <a class="p-1" href="/{pkg}/v/{version}/code/{k.slice(1)}"
                    ><button
                        class="cursor-pointer rounded-md border-2 border-black p-1 break-all dark:border-white"
                        >{k.slice(1)}</button
                    ></a
                >
            {/each}
        </div>
    </div>
{/if}
