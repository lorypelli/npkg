<script lang="ts">
    export let name: string;
    export let version: string;
</script>

<div class="flex h-full w-full items-center justify-center md:w-1/2">
    <iframe
        src="/{name}/v/{version}/readme"
        width="100%"
        height="100%"
        title="Readme"
        sandbox="allow-popups allow-popups-to-escape-sandbox"
    ></iframe>
</div>
