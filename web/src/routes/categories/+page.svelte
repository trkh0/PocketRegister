<script>
	import CategoryItem from "../../lib/components/CategoryItem.svelte";
	export let data;
</script>

<h2 class="text-3xl w-full font-bold mb-8">Categories</h2>
{#if data.categories == undefined || data.categories.length == 0}
    <h2>Nothing here!</h2>
{:else}
	{#each data.categories as category}
		<a href="/categories/{category.id}">
			<CategoryItem category_name = {category.category_name} category_group = {category.group} />
		</a>
	{/each}
{/if}
