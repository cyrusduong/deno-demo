---
marp: true
---
# [Deno](https://deno.land/)

The all-in-one TS/JS runtime
Since we already talked about [bun](https://bun.sh/), the *other, newer* TS/JS runtime.

![w:200](https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg)

---

# A Great DX (developer experience)  

<!-- _footer: bundling not meant for web ATM, recommends ESBuild for shipping browser JS -->

[Install](#install) as a single executable/binary and out-of-box Deno provides

- Fast* (it was until bun showed up)
- config-less (test, lint, fmt)
- Secure
- ES Module loading via URLs (no package manager required)
- Bundling* "apps"
- Top-level async/await
- Go to reference (web modules)

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

Or download binaries [directly](https://github.com/denoland/deno/releases) - less than 35MB.

---

# IDE Integrations

Deno provides a language server out of the box that can integrate with the [Language server protocol](https://langserver.org/) and provides amazing [plugin/extension support for modern IDEs](https://deno.land/manual/getting_started/setup_your_environment#using-an-editoride).

- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- [Jetbrains IDE Plguin](https://plugins.jetbrains.com/plugin/14382-deno)
- [Vim/Neovim LSP Plugins](https://github.com/prabirshrestha/vim-lsp) - `deno lsp`

---

# Demo

```sh
deno run serve.ts
```
 

---

# Running "apps" from web

```sh
deno run https://deno.land/std/examples/welcome.ts
```

```sh
deno run https://deno.land/std@0.149.0/examples/chat/server.ts
```

---

# Installable "apps"!

```sh
deno install --allow-net fetch.ts
```
🤔 Can we install `deno` using our own `fetch` implementation?


```
deno install --allow-net myip.ts
```
What was my public ip again?



---

# Built in toolchain with IDE integration

We can format, lint, test using CLI or extensions!

Formatting react 18 minified to something readable

```sh
deno fmt unformatted.ts
```

Linting and Testing whenever & wherever

```sh
deno lint unformatted.ts
deno test benchmarks/deno.ts
```

---

# Bundle for use, bundle as lib

```sh
deno bundle monorepo/index.ts app.ts
```

---

# Benchmarks

Testing is fast (I think...)

```
hyperfine -N -w=3 'deno test benchmarks/deno.ts' 'bun wiptest bun.test.ts' 'npx jest node.test.js' 
```

---

# Now the *really* cool demo

* Lets make our own [blog](https://deno.land/x/blog@0.3.3)
* " deploy on the web [Deno Deploy](https://deno.com/deploy)
* " at the edge in [32 regions](https://deno.com/deploy/docs/regions)

<!-- This shouldn't take long... -->

*[And GA is on the way](https://deno.com/blog/deploy-beta4)*

