## GitHub Copilot Chat

- Extension Version: 0.26.7 (prod)
- VS Code: vscode/1.99.3
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.6 (54 ms)
- DNS ipv6 Lookup: Error (153 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (28 ms)
- Electron fetch (configured): HTTP 200 (639 ms)
- Node.js https: HTTP 200 (654 ms)
- Node.js fetch: HTTP 200 (561 ms)
- Helix fetch: HTTP 200 (623 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.21 (40 ms)
- DNS ipv6 Lookup: Error (39 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (13 ms)
- Electron fetch (configured): HTTP 200 (799 ms)
- Node.js https: HTTP 200 (761 ms)
- Node.js fetch: HTTP 200 (761 ms)
- Helix fetch: HTTP 200 (818 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).