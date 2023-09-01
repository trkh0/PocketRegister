import { error, redirect } from '@sveltejs/kit'
import { serializeNonPOJs } from '$lib/utils'

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {

    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unauthorized!');
    }
    if (locals.pb.authStore.model.dashboardAccess == false) {
        throw error(401, 'Unauthorized!')
    }

    const users = serializeNonPOJs(await locals.pb.collection('users').getFullList({
        sort: '-created'
    }))
    return {
        users: users
    };
};

export const actions = {
    setFilter: async ({ request, locals }) => {
        const formData = Object.fromEntries(await request.formData())

        throw redirect(303, `./ordersFilter/results/?userFilter=${formData.filterUserSelect}&paymentFilter=${formData.filterPaymentSelect}&dateFilter=${formData.filterDate}`)
    }
}