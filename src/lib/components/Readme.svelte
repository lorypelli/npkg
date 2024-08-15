<script lang="ts">
    export let name: string;
    export let version: string;
</script>

<div class="flex w-full items-center justify-center md:w-1/2">
    <iframe
        src="/{name}/v/{version}/readme"
        width="1150px"
        height="100%"
        title="Readme"
        sandbox="allow-popups allow-popups-to-escape-sandbox"
    ></iframe>
</div>
