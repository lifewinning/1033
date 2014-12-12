#All The Things From the 1033 Program

##How to get all the cleaned up data from The Marshall Project

Turns out you can be p sloppy about it.

`wget -r -H -nc -np -nH --cut-dirs=2 -A .json -e robots=off -l1 -i ./states.txt -B 'https://tmp-dod1033.s3.amazonaws.com/v1/state/'`