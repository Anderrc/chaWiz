#!/bin/bash

SourceFolder="./dist"
ZipFileName="chaWiz.zip"

if [ -f $ZipFileName ]; then
    rm $ZipFileName
fi

zip -r $ZipFileName $SourceFolder/*