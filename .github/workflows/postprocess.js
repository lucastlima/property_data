import { parse } from "https://deno.land/std/encoding/csv.ts"
// First get the csv data
const rawContent = Deno.readFileSync(Deno.args[0])
const decodedContent = new TextDecoder().decode(rawContent)
// Parse it
const parsed = await parse(decodedContent)
// parsed is already valid JSON. which results in a value that is exactly the same that CSV to JSON would produce
await writeJson("uk_HPI_full_file_2023.json", parsed)
