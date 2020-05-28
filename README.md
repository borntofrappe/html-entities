# HTML Entities

A handy reference for special characters, inspired by [this article](https://www.freecodecamp.org/news/html-entities-symbols-special-character-codes-list/) from [Quincy Larson](https://twitter.com/ossia)

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

This instruction requires `puppeteer`. It runs `eleventy`, produces he necessary page(s), and then `puppeteer` to create the `.png` images for the list of entities and the twitter card.
