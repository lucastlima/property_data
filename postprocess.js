import { parse } from "https://deno.land/std/encoding/csv.ts"
// First get the csv data
const rawContent = Deno.readFileSync("UK-HPI-full-file-2023-01.csv")
const decodedContent = new TextDecoder().decode(rawContent)
// Parse it
const parsed = await parse(decodedContent)
// parsed is already valid JSON. which results in a value that is exactly the same that CSV to JSON would produce
console.log(parsed);
//await writeJson("uk_HPI_full_file_2023.json", parsed)
