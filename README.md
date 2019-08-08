# portfolio
[![Netlify Status](https://api.netlify.com/api/v1/badges/66d7bf3c-c063-45f3-beb6-f38d878da28e/deploy-status)](https://app.netlify.com/sites/did0es/deploys)

### Build Setup
```shell
# install
$ yarn install

# up dev server
$ yarn dev

# build, launch
$ yarn build
$ yarn start

# generate
$ yarn generate
```

### scripts
```javascript
"scripts": {
    "lint": "eslint --ext .js,.ts,.vue --ignore-path .gitignore .",
    "lint:fix": "eslint --fix --ext .js,.ts,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint",
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate"
}
```
