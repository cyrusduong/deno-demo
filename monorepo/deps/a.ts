export const welcome = (s = "world") => {
  const str = `Hello ${s}`;
  const encoder = new TextEncoder();
  Deno.stdout.write(encoder.encode(str));
};
