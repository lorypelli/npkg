<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    export let innerHash: string;
    export let outerHash: string;
    export let close: 'center' | 'right' = 'right';
</script>

<div
    id={innerHash}
    class="fixed inset-0 hidden items-center justify-center bg-black/60 target:flex"
>
    <div
        class="relative cursor-move overflow-y-auto rounded-xl border-2 border-black bg-primary p-3 max-size-3/4 {close ==
            'right' &&
            'pt-9'} shadow-lg shadow-black dark:border-white dark:bg-primary_dark"
        use:draggable={{ bounds: 'parent', gpuAcceleration: false }}
    >
        <div class="flex flex-col">
            <div class={close == 'center' ? 'order-2' : 'order-1'}>
                <slot />
            </div>
            <a
                href="#{outerHash}"
                class="{close == 'center'
                    ? 'order-1 mb-1 flex justify-center'
                    : 'absolute right-2 top-2'} rounded-full border-2 border-black p-1 text-sm font-extrabold dark:border-white"
                >Close</a
            >
        </div>
    </div>
</div>
