import {error, redirect} from "@sveltejs/kit"

export const actions = {
    login: async ({locals, request}) => {
        const body = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').authWithPassword(body.username, body.password)
        } catch (err) {
            if (!locals.pb?.authStore.isValid) {
                return {
                    userNotAuthorized: true
                };
            }
            console.log('Error: ', err);
            throw error(500, 'Something went wrong at login!');
    
        }
        throw redirect(303, '/')
    }
}