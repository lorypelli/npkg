<script lang="ts">
    export let lastPage: number;
    export let query: string;
</script>

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
