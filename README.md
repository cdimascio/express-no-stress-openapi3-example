# express-no-stress-openapi3-example

This is a project to demonstrate [express-openapi-validator](https://github.com/cdimascio/express-openapi-validator) using an [express-no-stress](https://github.com/cdimascio/generator-express-no-stress) scaffolded api.

[express-openapi-validator](https://github.com/cdimascio/express-openapi-validator) is a new middleware style validator for OpenApi 3.x and expressjs. I intend to include this validator as an option for [generator-express-no-stress](https://github.com/cdimascio/generator-express-no-stress). This project exists as an early proof of concept.

## Get Started

Get started developing...

```shell
# clone this repo
git clone https://github.com/cdimascio/express-no-stress-openapi3-example
cd express-no-stress-openapi3-example

# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

## Differences from the current express-no-stress generated app

1. [`Api.yaml`](server/common/Api.yaml) is converted to OpenApi 3
2. [`Api.yaml`](server/common/Api.yaml) is moved from `server/common/swagger` to `server/common`
3. `server/common/swagger`has been removed
4. [`server/common/server.js`](server/common/server.js) has been edited to:
  - remove its dependencies on swagger
  - add a dependency on [express-openapi-validator](https://github.com/cdimascio/express-openapi-validator) 



## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```
express-openapi-validator