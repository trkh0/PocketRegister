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
    addItem: async ({request, params}) => {
        const formData = Object.fromEntries(await request.formData())
        console.log(`${formData.quantity} x ${params.productId}`)

        throw redirect(303, '/categories')
    }
}