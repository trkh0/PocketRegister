<script>
	export let data;
	import { product_quantity } from '$lib/stores'
    import { onDestroy } from 'svelte'

    let quantity;

    const unsubscribe = product_quantity.subscribe(value => {
        quantity = value
    });
    onDestroy(unsubscribe);

	function incrementQuantity() {
		product_quantity.update(n => n + 1);
	}
	function decrementQuantity() {
		if (quantity > 1) {
			product_quantity.update(n => n - 1);
		}
	}
</script>

<div class="flex flex-row mb-5">
	<h2 class="text-2xl w-full font-bold text-center">{data.title}</h2>
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
        <button class="btn btn-primary w-full">ADD</button>
    </form>
    <form action="/categories" class="w-1/3">
        <button class="btn btn-secondary w-full">Cancel</button>
    </form>
</div>
