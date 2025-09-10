<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    import { twMerge } from 'tailwind-merge';
    import type { LayoutProps } from '../../routes/$types';
    interface Props {
        hash: string;
        close?: 'center' | 'right';
        children: LayoutProps['children'];
    }
    const { hash, close = 'right', children }: Props = $props();
</script>

<div
    id={hash}
    class="fixed inset-0 hidden items-center justify-center bg-black/60 target:flex"
>
    <div
        class={twMerge(
            'bg-primary dark:bg-primary_dark max-h-3/4 max-w-3/4 relative cursor-move overflow-y-auto rounded-xl border-2 border-black p-3 shadow-lg shadow-black dark:border-white',
            close == 'right' && 'pt-9',
        )}
        use:draggable={{ bounds: 'parent', gpuAcceleration: false }}
    >
        <div class="flex flex-col gap-y-1">
            <div class={twMerge(close == 'center' ? 'order-2' : 'order-1')}>
                {@render children()}
            </div>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a
                href="#"
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
