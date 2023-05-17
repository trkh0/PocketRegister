<script>
    import CategoryItem from "../../../lib/components/CategoryItem.svelte";
	import ProductItem from "../../../lib/components/ProductItem.svelte";
    export let data
</script>

<h2 class="text-3xl w-full font-bold">Items</h2>
{#if data.categoryItems == undefined}
    <h2>Nothing here!</h2>
{:else}
    {#each data.categoryItems as item}
        <ProductItem product_name = {item.product_name} product_group = {item.size} />
    {/each}
{/if}