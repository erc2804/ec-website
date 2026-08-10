#!/usr/bin/env bash
# --- Runs after every Write/Edit: formats the touched file and lints it.
# Disable with EC_HOOKS=0 (export it, or prefix a single command).

set -uo pipefail

[ "${EC_HOOKS:-1}" = "0" ] && exit 0

# --- The hook receives the tool payload as JSON on stdin
payload=$(cat)
filePath=$(printf '%s' "$payload" | node -e \
  'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(JSON.parse(s)?.tool_input?.file_path??"")}catch{}})')

[ -z "$filePath" ] && exit 0
[ -f "$filePath" ] || exit 0

# --- Only files this toolchain owns
case "$filePath" in
  *.astro|*.ts|*.js|*.mjs|*.css|*.md|*.json) ;;
  *) exit 0 ;;
esac

cd "$(dirname "$0")/../.." || exit 0

npx prettier --write "$filePath" >/dev/null 2>&1

# --- Lint only what ESLint actually handles
case "$filePath" in
  *.astro|*.ts|*.js|*.mjs)
    if ! lintOutput=$(npx eslint --fix "$filePath" 2>&1); then
      echo "ESLint found problems in $filePath:" >&2
      echo "$lintOutput" >&2
      exit 2   # --- exit 2 surfaces the message back to Claude
    fi
    ;;
esac

exit 0
