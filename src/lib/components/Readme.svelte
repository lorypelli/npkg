<script lang="ts">
    interface Props {
        name: string;
        version: string;
    }
    let { name, version }: Props = $props();
</script>

<iframe
    class="md:w-1/2"
    src="/{name}/v/{version}/readme"
    title="Readme"
    sandbox="allow-popups allow-popups-to-escape-sandbox"
></iframe>
