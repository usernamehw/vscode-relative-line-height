## 🔴 DEPRECATED

Starting from VSCode **1.58** it's possible to use relative line height without this extension:

```js
"editor.lineHeight": 1.5,
```

---

Extension calculates and changes global editor setting `editor.lineHeight` based on `editor.fontSize` and `relativeLineHeight.value`.

`editor.lineHeight` value becomes generated, so you can't change it manually until you disable the extension or set `relativeLineHeight.value` to `0`.

```js
"relativeLineHeight.value": 1.5,
```
