<svelte:head>
    <title>npkg</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center text-center">
    <span class="text-8xl font-extrabold">NPKG</span>
    <form action="/search" autocomplete="off">
        <input
            name="q"
            placeholder="Search Packages..."
            required
            class="w-96 rounded-xl border-2 border-black bg-primary p-3 text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
        />
    </form>
</div>
