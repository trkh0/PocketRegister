import { error } from '@sveltejs/kit'

export async function load({ locals, params }) {

    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unathorized!');
    }
}