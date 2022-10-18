# Script: Git Add Commit Push

```bash
#! /usr/bin/env zsh

set -e

MESSAGE=$1

function gitcp(){
    echo "Running...

    git add . && git commit -m '$MESSAGE' && git push
    "

    sleep 1.5

    git add . && git commit -m "$MESSAGE" && git push
}

if [ -z "$MESSAGE" ]; then
    echo "Please enter a commit message."
    exit 1
fi


gitcp "$MESSAGE"

exit 0
```
