
%set -e%
yarn install
yarn generate

cd .output/public

echo >> .nojekyll

echo 'privacypromedical.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:JiaBob/pmt-website.git master:gh-pages

cd -
