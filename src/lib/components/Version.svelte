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
    <div class="grid grid-cols-4 gap-2">
        {#each Object.entries(tags) as [k, v]}
            <a href="/{pkg}/v/{k}#pkg">
                <div
                    class="flex h-full flex-col break-words rounded-xl border-2 border-black bg-primary p-2 text-center dark:border-white dark:bg-primary_dark"
                >
                    <span class="font-extrabold">{k}</span>
                    <span>{v}</span>
                </div>
            </a>
        {/each}
    </div>
    <br />
    <div class="grid grid-cols-4 gap-2">
        {#each versions as v}
            {#each Object.keys(v) as k}
                <a href="/{pkg}/v/{k}#pkg">
                    <div
                        class="flex h-full flex-col break-words rounded-xl border-2 border-black bg-primary p-2 text-center dark:border-white dark:bg-primary_dark"
                    >
                        <span class="font-extrabold">{k}</span>
                        <span>{new Date(v[k]).toLocaleDateString()}</span>
                    </div>
                </a>
            {/each}
        {/each}
    </div>
</div>
