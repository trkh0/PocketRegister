<script>
  import { enhance } from '$app/forms';

	export let order;

</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	tabindex="0"
	class="w-full border-2 bg-white my-1 rounded-lg"
	class:border-green-500={order.checked == true}
	class:border-red-500={order.checked == false}
>
	<div class="flex flex-col collapse-title font-medium mb-0">
    <div class="flex flex-row">
      <p class="pr-1 italic font-bold">id: </p>
      <p class="font-normal">{order.id}</p>
    </div>
    <div class="flex flex-row">
      <p class="pr-1 italic font-bold">Operator: </p>
      <p class="font-normal">{order.expand.user.name}</p>
    </div>
    <div class="flex flex-row">
      <p class="pr-1 italic font-bold">Payment: </p>
      <p class="font-normal">{order.payment_option == "card" ? "CARD" : "CASH"}</p>
    </div>
    <div class="flex flex-row">
      <p class="pr-1 italic font-bold">Value: </p>
      <p class="font-normal">{order.total_price} RON</p>
    </div>
    <div class="flex flex-row">
      <p class="pr-1 italic font-bold">Date: </p>
      <p class="font-normal">{order.created.slice(5, order.created.length - 5)}</p>
    </div>
	</div>
	<div class="mx-4 mb-4 ">
    <div class="divider m-0" />
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col">
        {#each order.order_content as orderItem}
        <p>{orderItem.item_name} x {orderItem.number_item}</p>
        {/each}
      </div>
      <form action="?/markOrder" use:enhance method="POST">
        <input name="marked" type="hidden" value={order.checked}>
        <input name="orderId" type="hidden" value={order.id}>
        <button class='btn btn-sm' type="submit">Mark</button>
      </form>
    </div>
		
	</div>
</div>
