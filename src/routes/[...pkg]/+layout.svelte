<script>
    import '../../globals.css';
</script>

<nav class="flex justify-between p-2">
    <a href="/">
        <button
            class="w-32 rounded-xl border-2 border-black bg-primary p-3 text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
            >Home</button
        >
    </a>
    <form action="/search" autocomplete="off" class="flex justify-center">
        <input
            name="q"
            placeholder="Search Packages..."
            required
            class="w-96 rounded-xl border-2 border-black bg-primary p-3 text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
        />
    </form>
</nav>
<slot />
