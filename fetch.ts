// Fetch Web API out-of-box
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());

await Deno.stdout.write(body);
