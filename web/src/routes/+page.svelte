<script>
    export let data;
</script>

<h1>Welcome to PocketRegister</h1>
{#if data.user}
<div class="flex flex-row place-content-between">
    <form action="/categories">
        <button class="btn btn-primary">Products</button>
    </form>
    <form action="/logout" method="POST">
        <button class="btn btn-secondary">Logout</button>
    </form>
</div>
{/if}
