# express-no-stress-openapi3-example

This is a project i put together to test [express-middleware-openapi](https://github.com/cdimascio/express-middleware-openapi) using an [express-no-stress](https://github.com/cdimascio/generator-express-no-stress) scaffolded api

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


## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file
## Lint It

View prettier linter output

```
npm run lint
```

Fix all prettier linter errors

```
npm run lint
```

## Deploy It

Deploy to CloudFoundry

```shell
cf push myapp
```


   
