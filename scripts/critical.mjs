import * as critical from "critical";

// process.exit(0)
critical.generate({
    base: 'build/',
    src: './index.html',
    inline: true,
    css: ['build/static/css/*.css'],
    target: 'index.html'
}, (err, output) => {
    if (err) {
        console.error(err);
    }
    else if (output) {
        console.log('Generated critical CSS');
    }
});
