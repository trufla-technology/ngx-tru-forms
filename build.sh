#!/bin/bash
cd /Users/boris/Documents/projects/angular-json-form && \
    npm run build && \
    rsync -av . ../bullfrog-form/node_modules/angular-json-form/ --exclude node_modules --exclude src --exclude tests --exclude .git
