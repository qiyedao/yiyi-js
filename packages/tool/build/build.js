const esbuild = require('esbuild');
const argv = require('yargs-parser')(process.argv.slice(2));
const concurrently = require('concurrently');
const packageJson = require('../package.json');
console.log('argv', argv);

if (!argv.format) {
    buildAll();
} else {
    buildFormat(argv.format || 'cjs', argv.out || 'dist');
}
function buildAll() {
    const { result } = concurrently(
        [
            { name: 'build:cjs', command: 'node build/build --format=cjs --out=lib' },
            { name: 'build:esm', command: 'node build/build --format=esm --out=es' },
            { name: 'build:cli', command: 'node build/build --format=iife --out=dist' },
        ],
        {
            prefix: 'name',
            killOthers: ['failure'],
            restartTries: 0,
        }
    );
    result.then(
        () => {
            console.log('all done.');
        },
        () => {
            process.exit(1);
        }
    );
}

async function buildDist(format, outDir) {
    try {
        const startTime = Date.now();
        console.log('building...');
        const result = await esbuild.build({
            entryPoints: ['index.js'],
            outfile: `${outDir}/index.js`,
            bundle: true,
            platform: 'node',
            target: ['node10'],
            format: 'cjs',
            sourcemap: true,
            sourcesContent: true,
            plugins: [
                // ignorePlugin([
                //   // @alilc/lowcode-types 中误依赖了 react，这里忽略下
                //   {
                //     resourceRegExp: /^react$/,
                //     contextRegExp: /./,
                //   },
                //   {
                //     resourceRegExp: /setter-config/,
                //     contextRegExp: /lowcode-types/,
                //   },
                // ]),
            ],
            define: {},
            treeShaking: true,
            minify: false,
            minifyWhitespace: false,
            minifyIdentifiers: false,
            minifySyntax: false,
            legalComments: 'external',
            //   external: Object.keys(require('../package.json').dependencies),
        });
        if (result.errors.length > 0) {
            throw result.errors;
        }

        if (result.warnings.length > 0) {
            result.warnings.forEach(warnings => {
                console.warn(warnings);
            });
        }
        console.log('built %s in %ds', format, ((Date.now() - startTime) / 1000).toFixed(2));

        console.log('done');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

function buildFormat(format, outDir) {
    try {
        // console.log('building %s...', format);
        const startTime = Date.now();
        const result = esbuild.buildSync({
            entryPoints: ['index.js'],
            outfile: `${outDir}/index.js`,
            bundle: true,
            platform: 'node',
            target: ['node10'],
            format,
            sourcemap: true,
            sourcesContent: true,
            define: {},
            treeShaking: true,
            // external: _.keys(packageJson.dependencies),
            minify: false,
            legalComments: 'external',
        });
        if (result.errors.length > 0) {
            throw result.errors;
        }

        if (result.warnings.length > 0) {
            result.warnings.forEach(warnings => {
                console.warn(warnings);
            });
        }

        console.log('built %s in %ds', format, ((Date.now() - startTime) / 1000).toFixed(2));
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
