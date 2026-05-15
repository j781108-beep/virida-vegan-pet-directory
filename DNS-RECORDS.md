# DNS records to add at your domain registrar

Add these to wherever **virida.pet** is currently managed (Cloudflare DNS, GoDaddy, Namecheap, etc.).

## For directory.virida.pet (the directory site)

| Type  | Name        | Value                                       | TTL  | Proxy |
|-------|-------------|---------------------------------------------|------|-------|
| CNAME | `directory` | `virida-vegan-pet-directory.pages.dev`      | Auto | ✅ on (if Cloudflare DNS) |

## Optional: self-hosted Plausible at analytics.virida.pet

If you self-host Plausible (skip if using plausible.io cloud):

| Type | Name        | Value                  | TTL  |
|------|-------------|------------------------|------|
| A    | `analytics` | `<your-vps-ipv4>`      | 3600 |
| AAAA | `analytics` | `<your-vps-ipv6>`      | 3600 |

## Verification

After adding records, verify with:

```powershell
nslookup directory.virida.pet 8.8.8.8
# Expected output should resolve to a Cloudflare Pages IP
# (e.g. 172.x.x.x — anycast IP)
```

Propagation: usually 5 min on Cloudflare DNS, up to 1 hour elsewhere.
