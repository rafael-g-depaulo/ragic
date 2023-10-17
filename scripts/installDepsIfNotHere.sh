#!/bin/bash

if ! command -v jq &>/dev/null; then
	sudo apt update
	sudo apt install -y jq
fi

if ! command -v jq &>/dev/null; then
	sudo apt update
	sudo apt install -y fzf
fi
