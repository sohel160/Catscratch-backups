export default {
  async fetch(request) {

    const url = new URL(request.url)

    if (url.searchParams.get("token") !== "abc123") {
      return new Response("Forbidden", { status: 403 })
    }

    const ua = request.headers.get("User-Agent") || ""

    const allowedUA = [
      "Clash",
      "clash",
      "ClashMeta",
      "ClashforWindows",
      "ClashX",
      "Stash",
      "FiClash"
    ]

    let allowed = false

    for (const a of allowedUA) {
      if (ua.includes(a)) {
        allowed = true
        break
      }
    }

    if (!allowed) {
      return new Response("404 Not Found", { status: 404 })
    }

    const proxies = `
proxies:

- name: renew
  type: socks5
  server: 121.200.62.7
  port: 64182
- name: buy from Omar
  type: socks5
  server: 121.200.62.25
  port: 64182
- name: purchase
  type: socks5
  server: 121.200.62.24
  port: 64182
- name: pay again
  type: socks5
  server: 121.200.62.23
  port: 64182
- name: contact omar
  type: socks5
  server: 121.200.62.8
  port: 64182
- name: renew again
  type: socks5
  server: 121.200.62.14
  port: 64182
  

`

    return new Response(proxies, {
      headers: {
        "Content-Type": "text/plain"
      }
    })

  }
}
