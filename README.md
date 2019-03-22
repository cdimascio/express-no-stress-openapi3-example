# express-no-stress-openapi3-example

This is a project to demonstrate [express-middleware-openapi](https://github.com/cdimascio/express-middleware-openapi) using an [express-no-stress](https://github.com/cdimascio/generator-express-no-stress) scaffolded api.

[express-middleware-openapi](https://github.com/cdimascio/express-middleware-openapi) is a new middleware style validator for OpenApi 3.x and expressjs. I intend to include this validator as an option for [generator-express-no-stress](https://github.com/cdimascio/generator-express-no-stress). This project exists as an early proof of concept.

## Get Started

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

## Differences from the express-no-stress generated app

1. `Api.yaml` is converted to openapi3 and moved from `server/common/swagger` to `server/common`
2. `server/common/swagger` has been removed
3. `server/common/server.js` 
  - removes is dependencies on swagger
  - adds a dependency on [express-middleware-openapi](https://github.com/cdimascio/express-middleware-openapi) 



## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```
