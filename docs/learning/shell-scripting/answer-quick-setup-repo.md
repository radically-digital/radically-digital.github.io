# Script: Quick Setup Repo

```bash
#!/bin/bash

# Check if ASDF is installed
if [ -z "$(asdf --version 2> /dev/null)" ]; then
    echo "no asdf found"
    exit 1
fi

# Add the node plugin and install as per readme
asdf plugin add nodejs
asdf install

# Check npm is working
if [ -z "$(npm --version 2> /dev/null)" ]; then
    echo "no npm found"
    exit 1
fi

# Install dependencies
npm install

# Start dev server
npm run start
```
