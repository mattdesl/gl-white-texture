# gl-white-texture

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Creates an opaque white 2x2 texture. These are often used when drawing filled lines and rectangles with quad/sprite batchers, as it allows us to use the same texture-based shader as the rest of the batch.

```js
var tex = require('gl-white-texture')(gl)

//bind and draw that sucker
tex.bind()
```

## Usage

[![NPM](https://nodei.co/npm/gl-white-texture.png)](https://nodei.co/npm/gl-white-texture/)

### `tex = createWhiteTexture(gl)`

Creates and returns a new 2x2 RGBA texture using an unsigned byte array.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/gl-white-texture/blob/master/LICENSE.md) for details.
