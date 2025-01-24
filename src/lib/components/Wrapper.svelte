<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    import { twMerge } from 'tailwind-merge';
    interface Props {
        innerHash: string;
        outerHash: string;
        close?: 'center' | 'right';
        children?: import('svelte').Snippet;
    }
    let { innerHash, outerHash, close = 'right', children }: Props = $props();
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
        <div class="flex flex-col gap-y-1">
            <div class={twMerge(close == 'center' ? 'order-2' : 'order-1')}>
                {@render children?.()}
            </div>
            <a
                href="#{outerHash}"
                class={twMerge(
                    'rounded-full border-2 border-black p-1 text-sm font-extrabold dark:border-white',
                    close == 'center'
                        ? 'order-1 flex justify-center'
                        : 'absolute right-2 top-2',
                )}>Close</a
            >
        </div>
    </div>
</div>
