<script>
	import '../app.postcss';
    export let data
</script>

<div class="min-h-full">

    <nav class="navbar bg-base-100 border-b">
        {#if !data.user}
        <div class="flex-1">
            <a href="/login" class="btn btn-ghost normal-case text-xl">Pocket POS</a>
        </div>
        {:else}
        <div class="flex-1">
            <a href="/" class="btn btn-ghost normal-case text-xl">{data.user.name}</a>
        </div>
        {/if}
        <div class="flex-none">
            {#if !data.user}
            <div class="dropdown dropdown-end">
                <a href="/login" class="btn btn-primary">Login</a>
            </div>
            {:else}
            <div class="dropdown dropdown-end">
                <form action="/cart">
                    <button class="btn btn-ascent btn-outline">Cart</button>
                </form>
            </div>
            {/if}
        </div>
    </nav>
    <div class="py-10 mx-8">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <slot />
        </div>
    </div>
  
</div>
