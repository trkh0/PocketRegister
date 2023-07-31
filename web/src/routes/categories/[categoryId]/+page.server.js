import { serializeNonPOJs } from '$lib/utils'
import { error } from '@sveltejs/kit'

export const load = async ({locals, params}) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unathorized!');
    }

    const category = serializeNonPOJs(await locals.pb.collection('categories').getFullList(undefined, {
        filter: `id = "${params.categoryId}"`,
    }))

    const getCategoryItems = async () => {
        try {
            const categoryItems = serializeNonPOJs(await locals.pb.collection('products').getFullList(undefined, {
                filter: `category = "${category[0].id}"`,
            }));
            return categoryItems
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    }
    const getCategoryName = async () => {
        return category[0].category_name
    }

    return {
        categoryItems: getCategoryItems(),
        category_id: params.categoryId,
        category_title: getCategoryName()
    }
}