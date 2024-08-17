<script lang="ts">
    export let name: string;
    export let version: string;
</script>

<iframe
    class="h-full md:w-1/2"
    src="/{name}/v/{version}/readme"
    title="Readme"
    sandbox="allow-popups allow-popups-to-escape-sandbox"
/>
