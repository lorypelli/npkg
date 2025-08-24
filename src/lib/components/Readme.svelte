<script lang="ts">
    interface Props {
        name: string;
        version: string;
    }
    const { name, version }: Props = $props();
</script>

<iframe
    class="h-screen py-2 md:h-auto md:w-1/2"
    src="/{name}/v/{version}/readme"
    title="Readme"
    sandbox="allow-popups allow-popups-to-escape-sandbox"
></iframe>
