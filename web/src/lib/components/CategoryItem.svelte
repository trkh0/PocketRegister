<script>
    export let category_name;
    export let category_group;
</script>

<a href="/categories/{category_name}">
    <div class="card my-2 w-full bg-primary text-primary-content">
        <div class="card-body">
            <h2 class="card-title">{category_name}</h2>
            <p>{category_group}</p>
        </div>
    </div>
</a>