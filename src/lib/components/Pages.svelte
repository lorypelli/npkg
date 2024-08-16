<script lang="ts">
    export let lastPage: number;
    export let pages: number[];
    export let query: string;
</script>

<div class="space-x-2 p-1 text-center">
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
                if (parseInt(p) <= 0 || parseInt(p) > lastPage) {
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
