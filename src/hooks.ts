export function reroute({ url: { pathname, searchParams } }) {
    const paths = pathname.split('/').filter((v) => v != '');
    if (paths.length == 1 && !searchParams.has('q')) {
        return `/${paths[0]}/v/latest`;
    }
    return pathname;
}
