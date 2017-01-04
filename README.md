## njconf

Simple node.js JSON5 config module.

```
npm install njconf --save
```

![It's Mixin' time!](https://media.giphy.com/media/5182loUnKvBCM/giphy.gif)

### API

njconf.load('config1.json5', 'config2.json5', ...) - This loads the given JSON5 config files and deep merges them in such a way
that the configuration defined earlier takes priority over the the ones defined later.

### Usage

```js
const njconf = require('njconf');

njconf.load('config-specific.json5', 'config.default.json5')
```

### Example
So lets's say that content of config-specific.json5 is:
```js
{
  a: 'a',
  b: 'b'
}
```

and config.default.json5 is:
```js
{
  a: '',
  c: 'c'
}
```

then the result will be:
```js
{
  a: 'a',
  b: 'b',
  c: 'c'
}
```
