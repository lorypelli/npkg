export function reroute({ url: { pathname, searchParams } }) {
    const paths = pathname.split('/');
    if (
        pathname != '/' &&
        paths.length == 2 &&
        !searchParams.has('q')
    ) {
        return `/${paths[1]}/v/latest`;
    }
    return pathname;
}
