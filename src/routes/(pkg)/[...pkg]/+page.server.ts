import { error, redirect } from '@sveltejs/kit';

export function load({ params: { pkg } }) {
    if (!pkg) {
        error(404);
    }
    redirect(302, `/${pkg}/v/latest`);
}
