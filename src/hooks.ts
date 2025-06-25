export function reroute({ url: { pathname, searchParams } }) {
    const paths = pathname.split('/').filter((v) => v != '');
    if (
        !searchParams.has('q') &&
        (paths.length == 1 ||
            (paths.length > 0 && paths.length < 3 && paths[0].startsWith('@')))
    ) {
        return `/${paths.join('/')}/v/latest`;
    }
    return pathname;
}
