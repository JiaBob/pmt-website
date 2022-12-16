#!/usr/bin/env sh

set -e

yarn generate

cd .output/public

touch .nojekyll

echo 'privacypromedical.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:1isten/pmt-website.git master:gh-pages

cd -
