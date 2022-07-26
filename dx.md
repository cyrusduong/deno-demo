---
marp: true
---
# [Deno](https://deno.land/)

The all-in-one TS/JS runtime
Since we already talked about [bun](https://bun.sh/), the *other* TS/JS runtime.

![w:200](https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg)

---

# A Great DX (developer experience)  

<!-- _footer: bundling not meant for web ATM, recommends ESBuild for browser JS -->

[Install](#install) as a single executable/binary and out-of-box Deno provides

- Security
- Strong native std library
- Linting, formatting, Testing (tool-chain built in)
- ES Module loading via URLs (no package manager required)
- Bundling*
- REPL
- Source code in your editor (my favorite)

---

# Less config files and boilerplate

Just for React...

- CRA
- Next
- Remix
- Expo
- Vite
- Rolling your own
- ... And more...

--- 

# Detailed manual and API docs

Manual: https://deno.land/manual/
Stable: https://doc.deno.land/deno/stable
Unstable: https://doc.deno.land/deno/unstable

---

# Install

## macOS / Linux / WSL 

`curl -fsSL https://deno.land/x/install/install.sh | sh`

## Using PowerShell (Windows):

`iwr https://deno.land/x/install/install.ps1 -useb | iex`

Or other various package managers like Scoop, Homebrew, Chocolatey, Nix, Cargo.

Or download binaries directly at [https://github.com/denoland/deno/releases] - less than 35MB.

---

# IDE Integrations

Deno provides a language server out of the box that can integrate with the [Language server protocol](https://langserver.org/) and provides amazing [plugin/extension support for modern IDEs](https://deno.land/manual/getting_started/setup_your_environment#using-an-editoride).

- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- [Jetbrains IDE Plguin](https://plugins.jetbrains.com/plugin/14382-deno)
- [Vim/Neovim LSP Plugins](https://github.com/prabirshrestha/vim-lsp) - `deno lsp`

---

# Demo
 
```
deno run https://deno.land/std@0.149.0/examples/welcome.ts
```

- Overview of linting, formatting, bundling.
- Benchmarks
- Deno Deploy at the edge, in 2 minutes or less.
