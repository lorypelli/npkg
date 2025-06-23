export function reroute({ url }) {
    const paths = url.pathname.split('/');
    if (
        url.pathname != '/' &&
        paths.length == 2 &&
        !url.searchParams.has('q')
    ) {
        return `/${paths[1]}/v/latest`;
    }
    return url.pathname;
}
