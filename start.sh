#!/usr/bin/env bash
cp index.html dist
webpack --watch &
live-server --port=8000
exit 0