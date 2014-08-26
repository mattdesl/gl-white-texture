var test = require('tape').test
var gl = require('webgl-context')()
var createTex = require('./')
var getPixels = require('gl-texture2d-pixels')

if (!gl)
    throw new Error("no webGL context")

test('creates an opaque white texture', function(t) {
    var tex = createTex(gl)

    t.ok(tex.shape[0]===2 && tex.shape[1]===2, 'should have correct shape')

    var expected = Array.apply(null, new Array(16))
            .map(Number.prototype.valueOf, 0xFF);

    var array = getPixels(tex)
    t.deepEqual(array, expected, 'the pixels are all 0xFF')
    t.end()
})