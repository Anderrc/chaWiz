@echo off
SET SourceFolder=./dist
SET ZipFileName=chaWiz.zip

IF EXIST %ZipFileName% (
  DEL /F /A %ZipFileName%
)

PowerShell.exe -Command "& {Compress-Archive -Path %SourceFolder%\* -DestinationPath %ZipFileName%}"