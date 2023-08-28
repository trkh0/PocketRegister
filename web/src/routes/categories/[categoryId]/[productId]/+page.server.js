import {error, redirect} from "@sveltejs/kit"
import { serializeNonPOJs } from '$lib/utils'

export const load = async ({locals, params}) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unathorized!');
    }

    const product = serializeNonPOJs(await locals.pb.collection('products').getFullList(undefined, {
        filter: `id = "${params.productId}"`,
    }))

    return {
        title: params.productId,
        product_name: product[0].product_name
    }
}


export const actions = {
    addItem: async ({request, params, locals}) => {
        const formData = Object.fromEntries(await request.formData())
        const data = {
            user: locals.user.id,
            product: params.productId,
            number_item: formData.quantity
        }
        try {
            const itemInCart = await locals.pb.collection('cart').getList(1, 1, {
                filter: `user.id = "${data.user}" && product.id = "${data.product}"`,
            });
            // if the item is already in the cart, increase the quantity of that item, if not add as a new item to the cart
            if (itemInCart.items[0] == undefined){
                await locals.pb.collection('cart').create(data)
            } else {
                const newQuantity = {
                    number_item : parseInt(itemInCart.items[0].number_item) + parseInt(data.number_item)
                }
               await locals.pb.collection('cart').update(itemInCart.items[0].id, newQuantity) 
            }
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
        throw redirect(303, '/categories')
    }
}