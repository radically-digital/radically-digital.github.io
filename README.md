# Engineering Standards

## Uses

- [Docusaurus 2](https://docusaurus.io/)

## Development

```sh
asdf install

npm install

npm run start
```

## Adding Blogs back

By default, docusaurus has a blog capability. To add it back:

```sh
git checkout 4706e6280f7cc015349accebb9433fb1ca60ecce -- blog
git diff 4706e6280f7cc015349accebb9433fb1ca60ecce -- docusaurus.config.js
```
