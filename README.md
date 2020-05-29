# HTML Entities

> A handy reference for special characters.

Inspired by [HTML Entities](https://www.freecodecamp.org/news/html-entities-symbols-special-character-codes-list/), an insightful article from [Quincy Larson](https://twitter.com/ossia)

## Contributing

Pull requests are welcomed.

For the list of entities, edit the markdown file [index.md](https://github.com/borntofrappe/html-entities/blob/master/src/index.md). Once the pull request is merged, the website will be updated to mirror the changes.

For the source code, consider the sections which follow.

> A word of caution: this repository uses [11ty](https://www.11ty.dev/) to build the website, and [nunjucks](https://mozilla.github.io/nunjucks/) as a templating language. As a novice with both technologies, I ask you to tolerate my inexperience. Thank you for understanding.

## Development

1. install the necessary packages

   ```bash
   npm install
   ```

   It might take a while to install the packages necessary to run `puppeteer`. If you don't care about the specific script, feel free to remove the dependency.

   ```diff
   -"dependencies": {
   - "puppeteer": "^3.1.0"
   -}
   ```

2. run on localhost/8080

   ```bash
   npm run serve
   ```

## Build

```bash
npm run build
```

**`puppeteer` is required** to create the `.png` images for the list of entities and the twitter card.
