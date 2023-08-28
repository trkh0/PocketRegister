<script>
	export let cartItemName;
	export let cartItemQuantity;
	export let cartItemUnitPrice;
    export let cartItemId;
</script>

<div class="w-full my-2">
    <div class="flex flex-row">
        <form action="?/removeItem" method="POST">
            <input name="cartItemId" type="hidden" value="{cartItemId}">
            <button class="m-0 p-0 mt-2 text-xl h-10 w-10 bg-red-500 border rounded-md">
                X
            </button>
        </form>
        <div class="flex flex-col w-full pl-3">
            <h2 class="indent-0 font-bold text-base">{cartItemName}</h2>
			<div class="flex flex-row justify-between">
                <p class="text-slate-500 indent-10">{cartItemQuantity} pc. x {cartItemUnitPrice} RON</p>
				<p class="text-slate-500 font-bold">{cartItemQuantity * cartItemUnitPrice} RON</p>
			</div>
		</div>
	</div>
</div>
