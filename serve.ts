// Secure by default, HTTP out of the box
// And in two lines? - This comes from the standard library!
import { serve } from "https://deno.land/std@0.149.0/http/server.ts";
serve((_req) => new Response("Hello Bounteous\n"));
