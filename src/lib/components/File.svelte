<script lang="ts">
    import flourite from 'flourite';
    import Monaco from 'svelte-monaco';

    export let file: string;
    export let fname: string;
    export let pkg: string;
    export let pkg_file: string;
    export let version: string;
</script>

<div class="flex items-center justify-center space-x-4">
    <a href="./" class="text-sm hover:underline">Go Back!</a>
    <span class="text-center text-xl">{pkg}@{version}</span>
</div>
<span class="text-md text-center font-bold">{fname} - {file}</span>
<div class="h-full p-4">
    <Monaco
        bind:value={pkg_file}
        options={{
            language: flourite(pkg_file).language.toLowerCase(),
            automaticLayout: true,
            minimap: { enabled: false },
            maxTokenizationLineLength: Infinity,
            readOnly: true,
        }}
        theme="vs-dark"
    />
    <noscript>
        <pre class="flex justify-center">{pkg_file}</pre>
        <style>
            .monaco-container {
                @apply hidden;
            }
        </style>
    </noscript>
</div>
