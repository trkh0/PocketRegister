/** @type {import('./$types').PageServerLoad} */
import { serializeNonPOJs } from '$lib/utils'
import { error, redirect } from '@sveltejs/kit'


export async function load({ locals, params }) {

    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unathorized!');
    }

    var cartData = []

    const getItemById = async (id) => {
        try {
            const item = serializeNonPOJs(await locals.pb.collection('products').getOne(id))
            return item
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    }

    const cartContent = serializeNonPOJs(await locals.pb.collection('cart').getFullList(undefined, {
        filter: `user = "${locals.user.id}"`,
    }))

    for (const item in cartContent) {
        const product = await getItemById(cartContent[item].product)
        const data = {
            id: cartContent[item].id,
            product_name: product.product_name,
            product_size: product.size,
            product_price: product.price,
            product_id: product.id,
            product_number: cartContent[item].number_item
        }
        cartData.push(data)
    }

    var totalPrice = 0
    for (let item in cartData) {
        totalPrice += (cartData[item].product_number * cartData[item].product_price)
    }

    return {
        cartData: cartData,
        totalPrice: totalPrice
    };
};

export const actions = {
    removeItem: async ({ request, locals }) => {
        const formData = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('cart').delete(formData.cartItemId);
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    },

    checkout: async ({ request, locals }) => {
        const formData = Object.fromEntries(await request.formData())
        try {
            const cartContent = serializeNonPOJs(await locals.pb.collection('cart').getFullList(undefined, {
                filter: `user = "${locals.user.id}"`,
            }))
            const data = {
                user: locals.user.id,
                total_price: formData.totalPrice,
                payment_option: formData.paymentOption == 'true' ? 'card' : 'cash',
                order_content: JSON.stringify(cartContent)
            }
            await locals.pb.collection('orders').create(data)
            
            for (let item in cartContent) {
                locals.pb.collection('cart').delete(cartContent[item].id)
            }

        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
        throw redirect(303, '/categories')
    }
}