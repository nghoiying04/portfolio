#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises'
import { basename } from 'node:path'

async function main() {
  const args = process.argv.slice(2)
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    printHelp()
    process.exit(0)
  }

  const inputPath = args[0]
  if (!inputPath) {
    console.error('Error: missing input PDF path')
    printHelp()
    process.exit(1)
  }

  const dataUrl = args.includes('--data-url')
  const outFlagIndex = args.findIndex((arg) => arg === '--out')
  const outPath = outFlagIndex !== -1 ? args[outFlagIndex + 1] : undefined
  if (outFlagIndex !== -1 && !outPath) {
    console.error('Error: --out flag provided without a file path')
    process.exit(1)
  }

  const buf = await readFile(inputPath)
  const base64 = buf.toString('base64')
  const result = dataUrl ? `data:application/pdf;base64,${base64}` : base64

  if (outPath) {
    await writeFile(outPath, result)
    console.log(`Wrote ${formatBytes(result.length)} to ${outPath}`)
  } else {
    // Print to stdout
    process.stdout.write(result)
  }
}

function printHelp() {
  const cmd = basename(process.argv[1] || 'pdf-to-base64.mjs')
  console.log(`
Usage:
  node ${cmd} <input.pdf> [--data-url] [--out output.txt]

Options:
  --data-url        Prepend data URL prefix (data:application/pdf;base64,)
  --out <file>      Write output to file instead of stdout
  -h, --help        Show this help message
`)
}

function formatBytes(n) {
  const units = ['B', 'KB', 'MB', 'GB']
  let i = 0
  let num = n
  while (num >= 1024 && i < units.length - 1) {
    num /= 1024
    i++
  }
  return `${num.toFixed(1)} ${units[i]}`
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
