import { error } from '@sveltejs/kit'
import { serializeNonPOJs } from '$lib/utils'


export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unathorized!');
    }

    const getCategories = async () => {
        try {
            return serializeNonPOJs(await locals.pb.collection('categories').getFullList(undefined))
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message)
        }
    }

    return {
        categories: getCategories()
    }
}

