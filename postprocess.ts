import { parse } from "https://deno.land/std/encoding/csv.ts"

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const rawContent = Deno.readFileSync(Deno.args[0])
const decodedContent = decoder.decode(rawContent)
// Parse it
const parsed = await parse(decodedContent)
// Write it to a json file
const encodedContent = encoder.encode(JSON.stringify(parsed))
await Deno.writeFile("uk_HPI_full_file_2023.json", encodedContent);