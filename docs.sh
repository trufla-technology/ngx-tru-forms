#!/bin/bash
BASE_HREF=/ngx-tru-forms
rm -fr docs/*
cp src/index.html src/index.html.org
sed -i 's/forRoot(.*),/forRoot(JsonFormMaterialModule),/' src/app/json-schema-examples/json-schema-examples.module.ts
mkdir -p docs && ./node_modules/.bin/ng build --base-href=$BASE_HREF/ --deploy-url=$BASE_HREF/ && cp -R dist/ngx-tru-forms-app/* docs
sed -i 's/forRoot(.*),/forRoot(JsonFormBootstrap4Module),/' src/app/json-schema-examples/json-schema-examples.module.ts
sed -i 's/<!-- bootstrap4-cdn -->/<link rel="stylesheet" href="https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.1.3\/css\/bootstrap.min.css" crossorigin="anonymous">/' src/index.html
mkdir -p docs/bootstrap4 && ./node_modules/.bin/ng build --base-href=$BASE_HREF/bootstrap4/ --deploy-url=$BASE_HREF/bootstrap4/ && cp -R dist/ngx-tru-forms-app/* docs/bootstrap4
mv src/index.html.org src/index.html
sed -i 's/forRoot(.*),/forRoot(JsonFormMaterialModule),/' src/app/json-schema-examples/json-schema-examples.module.ts
