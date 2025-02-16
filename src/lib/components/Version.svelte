<script lang="ts">
    import type { Entries } from '../../../types/package.ts';
    interface Props {
        pkg: string;
        tags: Entries;
        versions: Entries[];
    }
    let { pkg, tags, versions }: Props = $props();
</script>

<div class="px-4">
    <div class="grid grid-cols-3 gap-2 md:grid-cols-4">
        {#each Object.entries(tags) as [k, v]}
            <a href="/{pkg}/v/{k}#pkg">
                <div
                    class="bg-primary dark:bg-primary_dark flex h-full flex-col rounded-xl border-2 border-black p-2 text-center break-words dark:border-white"
                >
                    <span class="font-extrabold">{k}</span>
                    <span>{v}</span>
                </div>
            </a>
        {/each}
    </div>
    <br />
    <div class="grid grid-cols-3 gap-2 md:grid-cols-4">
        {#each versions as v}
            {#each Object.keys(v) as k}
                <a href="/{pkg}/v/{k}#pkg">
                    <div
                        class="bg-primary dark:bg-primary_dark flex h-full flex-col rounded-xl border-2 border-black p-2 text-center break-words dark:border-white"
                    >
                        <span class="font-extrabold">{k}</span>
                        <span>{new Date(v[k]).toLocaleDateString()}</span>
                    </div>
                </a>
            {/each}
        {/each}
    </div>
</div>
