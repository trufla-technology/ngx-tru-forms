#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 8
mkdir -p build
sed -i '' 's/forRoot(.*),/forRoot(JsonFormBootstrap4Module),/' src/app/json-schema-examples/json-schema-examples.module.ts
mkdir -p build/bootstrap4 && ng build --base-href=/ngx-tru-forms/bootstrap4/ --deploy-url=/ngx-tru-forms/bootstrap4/ && cp -R dist/ngx-tru-forms-app/* build/bootstrap4
sed -i '' 's/forRoot(.*),/forRoot(JsonFormMaterialModule),/' src/app/json-schema-examples/json-schema-examples.module.ts
ng build --base-href=/ngx-tru-forms/ --deploy-url=/ngx-tru-forms/ && cp -R dist/ngx-tru-forms-app/* build
mkdir -p build/material && ng build --base-href=/ngx-tru-forms/material/ --deploy-url=/ngx-tru-forms/material/ && cp -R dist/ngx-tru-forms-app/* build/material
