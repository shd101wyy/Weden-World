var persistence = .25;
var octaves = 6;
var baseScale = .05
var width = 300, height = 300;

/* NOISE FUNCTION
Generates a number between 1 and -1
*/
var values = [];
for(var i = 0; i < height; i++) {
    values[i] = [];
    for(var j = 0; j < width; j++) {
        values[i][j] = Math.random() * 2 - 1;
    }
}
function noise(x, y) {
    x = parseInt(Math.min(width - 1, Math.max(0, x)));
    y = parseInt(Math.min(height - 1, Math.max(0, y)));
    return values[x][y];
}

/* SMOOTH NOISE
Averages the spaces around a given point to smooth the noise
*/
function smoothing(x, y) {
    var corners = ( noise(x-1, y-1)+noise(x+1, y-1)+noise(x-1, y+1)+noise(x+1, y+1) ) / 16;
    var sides   = ( noise(x-1, y)  +noise(x+1, y)  +noise(x, y-1)  +noise(x, y+1) ) /  8;
    var center  =  noise(x, y) / 4;
    var total = corners + sides + center;
    return total;
}

/* INTERPOLATE
*/
function interpolate(a, b, x) {
    var ft = x * 3.1415927;
    var f = (1 - Math.cos(ft)) * .5;
    return  a*(1-f) + b*f;
}

/* INTERPOLATE NOISE
*/
function interpolatenoise(x, y) {
      integer_X    = Math.floor(x);
      fractional_X = x - integer_X;

      integer_Y    = Math.floor(y);
      fractional_Y = y - integer_Y;

      v1 = smoothing(integer_X,     integer_Y);
      v2 = smoothing(integer_X + 1, integer_Y);
      v3 = smoothing(integer_X,     integer_Y + 1);
      v4 = smoothing(integer_X + 1, integer_Y + 1);

      i1 = interpolate(v1 , v2 , fractional_X);
      i2 = interpolate(v3 , v4 , fractional_X);

      return interpolate(i1 , i2 , fractional_Y);
}

/* NOISE—Tie it all together
*/
function perlin2d(x,y){
    var total = 0;

    var p = persistence;
    var n = octaves - 1;

    for(var i = 0; i <= n; i++) {
        var frequency = Math.pow(2, i);
        var amplitude = Math.pow(p, i);

        total = total + interpolatenoise(x * baseScale * frequency, y * baseScale * frequency) * amplitude;
    }
    return total;
}

var tiles = [];
var min = Number.MAX_VALUE;
var max = Number.MIN_VALUE;
        for(var i = 0; i<= height; i++){
            tiles[i] = [];
            for(var j = 0; j <= width; j++) {
                tiles[i][j] = perlin2d(i,j);
                min = Math.min(min, tiles[i][j]);
                max = Math.max(max, tiles[i][j]);
            }
        }


        var elem = document.getElementById('canvas');
        var mapArea = width * height;
        var r = 0;
        var g = 0;
        var b = 0;
        var tileSize = 10;













