import { error } from '@sveltejs/kit'
import { serializeNonPOJs } from '$lib/utils'




export async function load({ locals, parent, url }) {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unauthorized!');
    }
    if (locals.pb.authStore.model.dashboardAccess == false) {
        throw error(401, 'Unauthorized!')
    }
    const filterUser = url.searchParams.get('userFilter')
    const filterPayment = url.searchParams.get('paymentFilter')
    const filterDate = url.searchParams.get('dateFilter')
    // console.log(filterDate)

    var filterParams = ""
    if (filterUser != "none"){
        filterParams = filterParams.concat(`user = "${filterUser}"`)
    }
    if (filterPayment != "none"){
        if (filterParams != ""){
            filterParams = filterParams.concat(" && ")
        }
        filterParams = filterParams.concat(`payment_option = "${filterPayment}"`)
    }
    if (filterDate != ""){
        if (filterParams != ""){
            filterParams = filterParams.concat(" && ")
        }
        filterParams = filterParams.concat(`created ~ "${filterDate}"`)
    }

    // console.log(filterParams)

    var products

    try {
        products = serializeNonPOJs(await locals.pb.collection('products').getFullList({
            sort: '-created'
        }))
    } catch (err) {
        console.log(err)
        throw error(err.status, err.message)
    }


    const getItemById = async (id) => {
        return products.find((product) => product.id == id).product_name
    }

    const orders = serializeNonPOJs(await locals.pb.collection('orders').getFullList({
        filter: `${filterParams}`, sort: '-created', expand: 'user'
    }))

    for (const order in orders) {
        for (const item in orders[order].order_content) {
            orders[order].order_content[item].item_name = await getItemById(orders[order].order_content[item].product)
        }
    }

    return {
        orders: orders
    };
};

export const actions = {
    markOrder: async ({ request, locals }) => {
        const formData = Object.fromEntries(await request.formData())
        try {
            let data = {
                checked: formData.marked == "true" ? false : true
            }
            await locals.pb.collection('orders').update(formData.orderId, data)
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    }
}