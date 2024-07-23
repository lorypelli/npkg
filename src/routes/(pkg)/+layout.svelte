<script lang="ts">
    import Search from '$lib/components/Search.svelte';
    import '../../globals.css';
</script>

<nav class="flex justify-between p-2">
    <a href="/">
        <button
            class="w-32 rounded-xl border-2 border-black bg-primary p-3 dark:border-white dark:bg-primary_dark"
            >Home</button
        >
    </a>
    <Search nav />
</nav>
<slot />
