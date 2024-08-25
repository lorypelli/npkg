<script lang="ts">
    import md5 from 'crypto-js/md5';
    export let email = '';
</script>

{#if email}
    <img
        class="size-6"
        src="https://s.gravatar.com/avatar/{md5(email)}?default=retro"
        alt="pic"
    />
{:else}
    <img
        class="size-6"
        src="https://s.gravatar.com/avatar/?default=retro"
        alt="pic"
    />
{/if}
