# portfolio

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
