import { redirect } from '@sveltejs/kit';

export function load({ params: { pkg } }) {
    if (!pkg) {
        redirect(302, '/');
    }
    redirect(302, `${pkg}/v/latest`);
}
