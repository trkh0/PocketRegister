<script>
	import ProductItem from "../../../lib/components/ProductItem.svelte";
    export let data
</script>

<div class="flex flex-row mb-5">
    <h2 class="text-3xl w-full font-bold">Items</h2>
    <form action='/categories'>
        <button class="btn btn-primary">Back</button>
    </form>
</div>

{#if data.categoryItems == undefined || data.categoryItems.length == 0}
    <h2>Nothing here!</h2>
{:else}
    {#each data.categoryItems as item}
    <a href="/categories/{data.category_title}/{item.product_name}">
        <ProductItem product_name = {item.product_name} product_group = {item.size} />
    </a>
    {/each}
{/if}