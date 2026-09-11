#!/usr/bin/env bash
# Post a new day (or any change) to the live site.
#   ./deploy.sh "day 2 — inside a neural network"
# Bumps the ?v= cache key on days.js so GitHub's CDN can never serve a new
# page with yesterday's content file, then commits, pushes and waits for Pages.
set -euo pipefail
cd "$(dirname "$0")"

MSG="${1:-update}"
V=$(( $(git rev-list --count HEAD) + 1 ))
if [[ "$(uname)" == "Darwin" ]]; then
  sed -i '' -E "s|days\.js\?v=[0-9]+|days.js?v=$V|" index.html
else
  sed -i -E "s|days\.js\?v=[0-9]+|days.js?v=$V|" index.html
fi

node --check days.js || { echo "✗ days.js has a syntax error — fix it before deploying"; exit 1; }

git add -A
git commit -q -m "$MSG" || { echo "nothing to commit"; exit 0; }
git push -q origin main
echo "pushed (cache key v$V) — waiting for GitHub Pages…"

for i in $(seq 1 12); do
  s=$(gh api repos/devkancheti4-design/devjobs/pages/builds/latest --jq '.status' 2>/dev/null || echo '?')
  [[ "$s" == "built" ]] && { echo "✓ live: https://devkancheti4-design.github.io/devjobs/"; exit 0; }
  sleep 10
done
echo "still building — check https://devkancheti4-design.github.io/devjobs/ in a minute"
