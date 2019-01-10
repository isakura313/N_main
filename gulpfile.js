const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
 
imagemin(['img/*.png'], 'build/images', {use: [imageminPngquant()]}).then(() => {
    console.log('Images optimized');
});

//добавить ftp 
//добавить css nano
// продумать вопрос с библиотекой изображений
// дописать php скрипт
//найти библиотеку анимаций
//написать футер по Бэм