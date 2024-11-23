# markdown-it-razradka

Плагин для markdown-it для выделения разрядки.

Из

```
Этот текст __выделен разрядкой__
```

делает

```
Этот текст <span class="md-it-razradka">выделен разрядкой</span>
```

## Installation

With [Yarn](https://yarnpkg.com/):

```
yarn add -D @comtext/markdown-it-razradka
```

With npm

```
npm i @comtext/markdown-it-razradka
```

## Using

```js
const md = require("markdown-it")();
const mk = require("@comtext/markdown-it-razradka");

md.use(mk);

var result = md.render("Этот текст __выделен разрядкой__");
```

## CSS

Пример CSS

```css
.md-it-underline {
    letter-spacing: 0.4em;
}
```
