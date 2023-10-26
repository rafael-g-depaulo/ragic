#!/bin/bash

yarn nx e2e app-ragic --headed --watch &

URL=http://localhost:4201
xdg-open $URL || sensible-browser $URL || x-www-browser $URL || echo "Sorry, i couldn't auto open the server for you.\nHere's the link: $URL"
