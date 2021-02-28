#!/usr/local/bin/bash
shopt -s nullglob

htmlFiles=(*.html)

for file in "${htmlFiles[@]}"
do
    bin/minify-html --src $file --out minified/$file
done