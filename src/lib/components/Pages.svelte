<script lang="ts">
    export let lastPage: number;
    export let pages: number[];
    export let query: string;
</script>

<div class="flex flex-wrap justify-center gap-x-1 gap-y-0.5 pt-0.5">
    {#each pages as p}
        <a href="/search?q={query}&page={p}">
            <button
                class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                >{p}</button
            >
        </a>
    {/each}
    <button
        on:click={() => {
            const p = prompt('Enter page number...');
            if (p) {
                const page = parseInt(p);
                if (isNaN(page) || page <= 0 || page > lastPage) {
                    alert(
                        `Number must be a positive integer and must not be greater than ${lastPage}`,
                    );
                    return;
                }
                location.href = `./search?q=${query}&page=${p}`;
            }
        }}>...</button
    >
    <a href="/search?q={query}&page={lastPage}">
        <button
            class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
            >{lastPage}</button
        >
    </a>
</div>
