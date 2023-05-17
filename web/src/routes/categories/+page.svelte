<script>
	import CategoryItem from "../../lib/components/CategoryItem.svelte";
	export let data;
</script>

<h2 class="text-3xl w-full font-bold">Categories</h2>
{#if data.categories == undefined}
    <h2>Nothing here!</h2>
{:else}
	{#each data.categories as category}
		<CategoryItem category_name = {category.category_name} category_group = {category.group} />
	{/each}
{/if}
