#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo "echo 1"
#git init
echo "echo 2"
#git config user.email "kuc8301@gmail.com"
echo "echo 3"
#git config user.name "kujo205"
echo "echo 4"
git add -A
echo "echo 5"
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:boldak/<USERNAME>.github.io.git master
echo "echo 6"
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/KPI-kujo205/2course_db master:gh-pages

cd -
