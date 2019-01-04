#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 8
cp src/index.html src/index.html.org
sed -i 's/forRoot(.*),/forRoot(JsonFormMaterialModule),/' src/app/json-schema-examples/json-schema-examples.module.ts
mkdir -p build && ./node_modules/.bin/ng build --base-href=/ngx-tru-forms/ --deploy-url=/ngx-tru-forms/ && cp -R dist/ngx-tru-forms-app/* build
mkdir -p build/material && cp -R dist/ngx-tru-forms-app/* build/material
sed -i 's/forRoot(.*),/forRoot(JsonFormBootstrap4Module),/' src/app/json-schema-examples/json-schema-examples.module.ts
sed -i 's/<!-- bootstrap4-cdn -->/<link rel="stylesheet" href="https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.1.3\/css\/bootstrap.min.css" crossorigin="anonymous">/' src/index.html
mkdir -p build/bootstrap4 && ./node_modules/.bin/ng build --base-href=/ngx-tru-forms/bootstrap4/ --deploy-url=/ngx-tru-forms/bootstrap4/ && cp -R dist/ngx-tru-forms-app/* build/bootstrap4
mv src/index.html.org src/index.html
sed -i 's/forRoot(.*),/forRoot(JsonFormMaterialModule),/' src/app/json-schema-examples/json-schema-examples.module.ts
