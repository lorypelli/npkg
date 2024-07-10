export async function GET({ params: { pkg }, fetch }) {
    const res = await fetch(`/${pkg}/v/latest`)
    const response = new Response(await res.text())
    response.headers.set("Content-Type", "text/html")
    return response
}
