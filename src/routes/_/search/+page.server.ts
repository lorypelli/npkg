import type { Search } from '../../../../types/search.ts'
export async function load({ url }) {
    const q = url.searchParams.get("q")
    const res = await fetch(`https://registry.npmjs.com/-/v1/search?text=${q}`)
    const pkgs: Search = await res.json()
    return pkgs
}