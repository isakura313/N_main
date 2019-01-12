const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const ftp = require( 'vinyl-ftp' ) //здесь добавляется ftp загрузка
 
imagemin(['img/*.png'], 'build/images', {use: [imageminPngquant()]}).then(() => {
    console.log('Images optimized');
});

