<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
</script>

<div class="flex flex-row mb-5">
	<h2 class="text-2xl w-full font-bold text-center">Cart content</h2>
</div>

{#if data.cartData == undefined || data.cartData.length == 0}
    <h2>Nothing here!</h2>
{:else}
    {#each data.cartData as item}
        <p>{item.product_name} : {item.product_number} x {item.product_price} RON = {item.product_number * item.product_price} RON</p>
    {/each}
    <br>
    <p>Total price: {data.totalPrice} RON</p>
{/if}