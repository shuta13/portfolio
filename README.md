# portfolio

### Build Setup
```shell
# install
$ yarn install

# serve(develop)
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
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "lint:fix": "eslint --fix --ext .js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint",
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate"
 }
```
For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
