<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - {data.name}@{data.version}</title>
</svelte:head>

<div>
    <span class="font-extrabold p-2">{data.name}@{data.version}</span>
</div>