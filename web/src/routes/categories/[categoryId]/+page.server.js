import { serializeNonPOJs } from '$lib/utils'
import { error } from '@sveltejs/kit'

export const load = ({locals, params}) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unathorized!');
    }

    const getCategoryItems = async (categoryName) => {
        try {
            const categoryId = serializeNonPOJs(await locals.pb.collection('categories').getFullList(undefined, {
                filter: `category_name = "${categoryName}"`,
            }))
            const categoryItems = serializeNonPOJs(await locals.pb.collection('products').getFullList(undefined, {
                filter: `category = "${categoryId[0].id}"`,
            }));
            return categoryItems
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    }

    return {
        categoryItems: getCategoryItems(params.categoryId)
    }
}