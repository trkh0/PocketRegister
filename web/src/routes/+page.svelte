<script>
    export let data;
    let logout_modal = false
</script>

{#if data.user}
<div class="flex flex-row place-content-between">
    <div class="flex flex-col w-full">
        <h1 class="text-2xl font-bold mb-5 text-center">Pocket POS</h1>
        <form action="/categories" class="w-full p-2">
            <button class="btn btn-neutral btn-outline w-full h-20">Products</button>
        </form>
        {#if data.user.dashboardAccess == true}
            <form action="/adminui" class="w-full p-2">
                <button class="btn btn-neutral btn-outline w-full h-20">Admin Dashboard</button>
            </form>
        {/if}
        <div class="w-full p-2">
            <button class="btn btn-error w-full" on:click={() => logout_modal = true}>Logout</button>
        </div>
    </div>
</div>
<dialog id="logout_modal" class="modal modal-middle h-full w-full" class:modal-open={logout_modal}>
    <div class="modal-box">
      <h3 class="font-bold text-lg">Confirm logout</h3>
      <p class="py-4">Are you sure you want to log out?</p>
      <div class="flex flex-row justify-between">
        <button on:click={() => logout_modal = false} class="btn">Cancel</button>
        <form action="/logout" method="POST">
            <button class="btn btn-primary">Logout</button>
        </form>
      </div>
    </div>
  </dialog>
{/if}
