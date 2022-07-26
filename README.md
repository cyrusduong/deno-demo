# Deno Demo

If you've landed here you've stumbled across my demo repo for Deno!

The "next-generation", "bleeding-edge", "post-modern", "typescript-first" 
runtime.

Check out the full slide-deck `DECK.md`. Uses Marp for pretty slides!

## Using this repo

This repository contains a variety of very simple set of files meant to 
demonstrate what Deno the runtime can do. It includes examples of running "apps"
from the web, installing "apps", an overview of the tool-chain for linting, 
formatting, and testing. And more.

The only thing to start using it is to install Deno following the install guide
[here](https://deno.land/#installation).

Now you can run these example files using Deno! 

## Uh this has a package.json?

The `package.json` is merely included to benchmark the `jest` library against 
the built-in `Deno.test` functionality/test-runners.

Using npm you can install the required packages with `npm i` then benchmark
the testing suites following the instructions below.

## Benchmarks

Using [hyperfine](https://github.com/sharkdp/hyperfine) we can benchmark the
Deno test-runner, against Jest, and bun's test-runner!

I've included a task for this

```
deno task benchmark
```

This assumes we have all the required binaries installed. 
You may need to `npm i` and ensure you have Deno and bun installed.
