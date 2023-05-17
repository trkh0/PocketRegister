<script>
	export let product_name;
	export let product_group;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->

<div class="card my-2 w-full bg-primary text-primary-content">
	<div class="card-body">
		<h2 class="card-title">{product_name}</h2>
		<p>{product_group}</p>
	</div>
</div>
