<script>
    import { enhance } from '$app/forms';

    export let data;
</script>

<div class="flex flex-col bg-white w-full">
	<form action="?/setFilter" use:enhance method="POST">
		<div class="flex flex-col w-full">
			<p>Operator:</p>
			<select name="filterUserSelect" class="select select-bordered w-full">
				<option selected value="none">All</option>
				{#each data.users as user}
					<option value={user.id}>{user.name}</option>
				{/each}
			</select>
		</div>
		<div class="flex flex-col pt-2 w-full">
			<p>Payment option:</p>
			<select name="filterPaymentSelect" class="select select-bordered w-full">
				<option selected value="none">All</option>
				<option value="cash">Cash</option>
				<option value="card">Card</option>
			</select>
		</div>
		<div class="flex flex-col pt-2">
			<p>Date:</p>
			<input name="filterDate" type="date" class="w-full h-12 rounded-lg bg-white border border-grey">
		</div>
		<button class="btn btn-primary w-full mt-5" type="submit">Show results</button>
	</form>
</div>