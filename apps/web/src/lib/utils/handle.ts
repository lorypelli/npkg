export function keydown(hash: string, e: KeyboardEvent) {
    if (e.shiftKey && e.key == hash.substring(0).toUpperCase()) {
        e.preventDefault();
        location.hash = hash;
    } else if (location.hash == hash && e.key == 'Escape') {
        e.preventDefault();
        location.hash = '#';
    }
}
