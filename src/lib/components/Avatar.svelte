<script lang="ts">
    interface Props {
        email?: string;
    }
    let { email = '' }: Props = $props();
</script>

{#if email}
    <img
        class="size-6 rounded-full border-2 border-black dark:border-white"
        src="https://cdn.npkg.lorypelli.dev/?email={email}"
        alt="pic"
    />
{:else}
    <img
        class="size-6 rounded-full border-2 border-black dark:border-white"
        src="https://cdn.npkg.lorypelli.dev/"
        alt="pic"
    />
{/if}
