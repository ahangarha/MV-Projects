# MV-Projects

This is an unofficial selection of projects made by stundents in [Microverse](https://microverse.org). Live Demo of this project can be [seen here](https://ahangarha.github.io/MV-Projects/).

## Add Project

Edit [`./src/data.js`](https://github.com/ahangarha/MV-Projects/blob/main/src/data.js) file and add required information in proper format. Make sure nothing else is touched. Then send a PR.

## How to Contribute
Please read the [guideline](./CONTRIBUTING.md).

## Run Locally

You need `node` and `npm` installed on your machine. If so, Get the code and run the following commands:
```
$ npm install
$ npm run build
```
By now, your `style.css` must be generated in `./dist` directory. Open `index.html` in browswer.

If you want to change HTML and add Tailwindcss classes, run the following commant:

```
$ npm run watch
```
Now, by editing HTML and adding classes, the relevant class gets added to the `style.css` on the fly. If using this, you won't need to run `npm run build` anymore.

## License

This is Free/Libre and Open Source software under [AGPL-3.0+](./LICENSE) license.
