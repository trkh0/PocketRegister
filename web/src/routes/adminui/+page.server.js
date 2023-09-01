import { error } from '@sveltejs/kit'

export async function load({ locals }) {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unauthorized!');
    }
    if (locals.pb.authStore.model.dashboardAccess == false){
        throw error(401, 'Unauthorized!')
    }

    return {};
};