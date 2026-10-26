# raspberryCandy — Markdown styling test

## Heading level 2
### Heading level 3

Plain paragraph text with **bold**, *italic*, ***bold italic***, and ~~strikethrough~~.
Here is some `inline code` in a sentence, plus a [link to the repo](https://github.com/tomWritesCode/raspberryCandy).

> A blockquote line to check the quote styling.
> Second line of the quote.

- Unordered list item one
- Item two with a [link](https://example.com)
  - Nested item
1. Ordered item one
2. Ordered item two

---

Fenced code block (readability check — this used to be invisible):

```js
// JavaScript inside markdown
function greet(name) {
  const message = `Hello, ${name}!`;
  return message.length > 0 ? message : "empty";
}
```

```json
{ "theme": "raspberryCandy", "version": "0.0.7", "enabled": true }
```

| Column A | Column B |
| -------- | -------- |
| cell 1   | cell 2   |
| cell 3   | cell 4   |
