<script>
    export let data;
</script>

<h1>Welcome to PocketRegister</h1>
{#if data.user}
    <form action="/categories">
        <button class="btn btn-primary">Products</button>
    </form>
{/if}
