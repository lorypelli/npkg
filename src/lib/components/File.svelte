<script lang="ts">
    interface Props {
        file: string;
        fname: string;
        pkg: string;
        pkg_file: string;
        version: string;
    }
    const { file, fname, pkg, pkg_file, version }: Props = $props();
</script>

<div class="flex items-center justify-center space-x-4">
    <a href="/{pkg}/v/{version}/code" class="text-sm hover:underline"
        >Go Back!</a
    >
    <span class="text-center text-xl">{pkg}@{version}</span>
</div>
<span class="text-md text-center font-bold break-words">{fname} - {file}</span>
<div class="h-3/4 px-4">
    <pre class="flex h-full justify-center">
        <code class="hljs">{pkg_file}</code>
    </pre>
</div>
