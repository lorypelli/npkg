<script lang="ts">
    export let file: string;
    export let fname: string;
    export let pkg: string;
    export let pkg_file: string;
    export let version: string;
</script>

<div class="flex items-center justify-center space-x-4">
    <a href="/{pkg}/v/{version}/code" class="text-sm hover:underline"
        >Go Back!</a
    >
    <span class="text-center text-xl">{pkg}@{version}</span>
</div>
<span class="text-md break-words text-center font-bold">{fname} - {file}</span>
<div class="h-3/4 px-4">
    <pre class="flex h-full justify-center">
        <code class="hljs">{pkg_file}</code>
    </pre>
</div>
