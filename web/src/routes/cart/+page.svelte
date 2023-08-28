<script>
	import CartItem from '../../lib/components/CartItem.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// cash or card selection -- cash: false, card: true
	let outline = false;
    
    let checkout_modal = false
</script>

{#if data.cartData == undefined || data.cartData.length == 0}
	<h2>Nothing here!</h2>
{:else}
	<div class="flex flex-col">
		{#each data.cartData as item}
			<CartItem
				cartItemId={item.id}
				cartItemName={item.product_name}
				cartItemQuantity={item.product_number}
				cartItemUnitPrice={item.product_price}
			/>
		{/each}
	</div>
	<div class="">
		<div class="divider" />
		<div class="flex flex-row justify-between">
			<p class="text-2xl font-bold">Total:</p>
			<p class="text-2xl font-bold">{data.totalPrice} RON</p>
		</div>
		<div class="grid grid-flow-col justify-stretch">
			<button
				class="btn btn-neutral my-5 mx-1 px-10 text-xl"
				class:btn-outline={outline}
				on:click={() => (outline = false)}>Cash</button
			>
			<button
				class="btn btn-neutral my-5 mx-1 px-10 text-xl"
				class:btn-outline={!outline}
				on:click={() => (outline = true)}>Card</button
			>
		</div>
		<button class="btn btn-primary my-5 text-xl w-full" on:click={() => checkout_modal = true}>CHECKOUT</button>
        <!-- confirmation dialog -->
        <dialog id="checkout_modal" class="modal modal-middle h-full w-full" class:modal-open={checkout_modal}>
            <div class="modal-box">
              <h3 class="font-bold text-lg">Confirm checkout</h3>
              <p class="py-4">Are you sure you want to submit this order?</p>
              <div class="flex flex-row justify-between">
                <button on:click={() => checkout_modal = false} class="btn">Cancel</button>
                <form action="?/checkout" method="POST">
                    <input name="paymentOption" type="hidden" value={outline}>
                    <input name="totalPrice" type="hidden" value={data.totalPrice}>
                    <button class="btn btn-primary">Checkout</button>
                </form>
              </div>
            </div>
          </dialog>

	</div>
    {/if}
