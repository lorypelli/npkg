<script lang="ts">
    import type { Entries } from '../../types/package';
    export let pkg: string;
    export let tags: Entries;
    export let versions: Entries[];
</script>

<div class="px-4">
    <div class="grid grid-cols-4 gap-2">
        {#each Object.entries(tags) as [k, v]}
            <a href="/{pkg}/v/{k}#pkg">
                <div
                    class="h-full rounded-xl border-2 border-black bg-primary p-2 text-center dark:border-white dark:bg-primary_dark"
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
                        class="h-full rounded-xl border-2 border-black bg-primary p-2 text-center dark:border-white dark:bg-primary_dark"
                    >
                        <span class="font-extrabold">{k}</span>
                        <span>{new Date(v[k]).toLocaleDateString()}</span>
                    </div>
                </a>
            {/each}
        {/each}
    </div>
</div>
