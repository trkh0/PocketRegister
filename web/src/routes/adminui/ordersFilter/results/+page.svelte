<script>
	import AdminOrderListComponent from '../../../../lib/components/AdminOrderListComponent.svelte';
	export let data;
	$: orders = data.orders;
</script>

<div class="w-full flex flex-col">
	{#each orders as order}
		<AdminOrderListComponent {order} />
	{/each}
</div>
