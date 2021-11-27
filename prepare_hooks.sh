#!/bin/bash

# Colors# Reset
RESET='\033[0m'       # Text Reset

# Regular Colors
Red='\033[0;31m'          # Red
Yellow='\033[0;33m'       # Yellow
Green='\033[0;32m'        # Green
Blue='\033[0;34m'         # Blue

# Folders
MY_HOOK_DIR="./git_hooks"
GIT_HOOK_DIR="$(pwd)/.git/hooks"

which ln > /dev/null 
if [ $? -ne 0 ]; then
    echo -e "${Red}ln not found. Please link manually all files on folder ${MY_HOOK_DIR} to ${GIT_HOOK_DIR}.${RESET}\n"
    exit 1
fi

for hook in $MY_HOOK_DIR/*; do
    if [ -f $GIT_HOOK_DIR/$(basename $hook) ]; then
        echo -e "Overwriting $GIT_HOOK_DIR/$(basename $hook)\n"
    fi
    ln -s $hook $GIT_HOOK_DIR/$(basename $hook) 2>/dev/null
    if [ $? -ne 0 ]; then
        echo -e "[ ${Red}X${RESET}  ] ${Red}Failed to link${Yellow} $hook${RESET}\n"
    else
        echo -e "[ ${Green}OK${RESET} ] ${Green}Success link${Blue} $hook${RESET}\n"
    fi
done
