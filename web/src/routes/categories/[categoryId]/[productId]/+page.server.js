import {error, redirect} from "@sveltejs/kit"
import { product_quantity } from '$lib/stores.js'
import { onDestroy } from 'svelte'


let quantity;

const unsubscribe = product_quantity.subscribe(value => {
    quantity = value
    console.log(quantity)
});

onDestroy(unsubscribe);

export const load = ({locals, params}) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unathorized!');
    }
    return {
        title: params.productId
    }
}


export const actions = {
    addItem: async ({locals, request, params}) => {
        console.log(`${quantity} x ${params.productId}`)
        throw redirect(303, '/categories')
    }
}