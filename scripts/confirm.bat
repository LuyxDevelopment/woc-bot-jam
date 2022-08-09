@echo off

set /p "confirmed=Are you sure you want to continue? (y/n) "

if not %confirmed% == y (
	echo Aborting
	exit 1
)