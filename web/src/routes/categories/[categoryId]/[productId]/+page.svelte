<script>
	export let data;

    let quantity = 1;

	function incrementQuantity() {
		quantity += 1;
	}
	function decrementQuantity() {
		if (quantity > 1) {
			quantity -= 1;
		}
	}
	
</script>

<div class="flex flex-row mb-5">
	<h2 class="text-2xl w-full font-bold text-center">{data.product_name}</h2>
</div>
<div class="flex flex-col justify-center">
    <h3 class="text-8xl w-full font-bold my-10 text-center">{quantity}</h3>
	<div class="flex flex-row justify-evenly space-x-4 w-full">
		<button on:click={incrementQuantity} class="btn btn-outline w-1/2 py-10 text-3xl">+</button>
		<button on:click={decrementQuantity} class="btn btn-outline w-1/2 py-10 text-3xl">-</button>
	</div>
</div>

<div class="flex flex-row my-20 justify-evenly space-x-4 w-full">
    <form action="?/addItem" method="POST" class="w-1/3">
		<input name="quantity" type="hidden" value="{quantity}">
        <button type="submit" class="btn btn-primary w-full">ADD</button>
    </form>
    <form action="/categories" class="w-1/3">
        <button class="btn btn-secondary w-full">Cancel</button>
    </form>
</div>
