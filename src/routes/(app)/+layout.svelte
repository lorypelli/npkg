<script lang="ts">
    import '../../globals.css';
    interface Props {
        children?: import('svelte').Snippet;
    }
    let { children }: Props = $props();
</script>

{@render children?.()}
