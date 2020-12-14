const mkdirp = require('mkdirp')
const rollup = require('rollup').rollup
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const cjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue2')
const css = require('rollup-plugin-css-only')

// Make sure dist dir exists
mkdirp('dist')

const { name, version } = require('../package.json')

function rollupBundle({ env, plugins = [] }) {
  return rollup({
    input: 'src/index.js',
    plugins: [
      vue(),
      css(),
      peerDepsExternal(),
      resolve({
        extensions: ['.js']
      }),
      cjs(),
      replace(
        Object.assign(
          {
            __VERSION__: version
          },
          env
        )
      ),
      buble({
        objectAssign: 'Object.assign'
      }),
      ...plugins
    ]
  })
}

const createBundle = ({ name, env, plugins }) => {
  return rollupBundle({
    name,
    env,
    plugins
  })
    .then((bundle) => {
      bundle.write({
        file: `dist/${name}.js`
      })
    })
    .catch(console.log)
}

// Browser bundle (can be used with script)
createBundle({
  name: `${name}`,
  env: {
    'process.env.NODE_ENV': '"development"'
  }
})

// Commonjs bundle (preserves process.env.NODE_ENV) so
// the user can replace it in dev and prod mode
createBundle({
  name: `${name}.common`,
  env: {},
  format: 'cjs'
})

// uses export and import syntax. Should be used with modern bundlers
// like rollup and webpack 2
createBundle({
  name: `${name}.esm`,
  env: {},
  format: 'es'
})

// Minified version for browser
createBundle({
  name: `${name}.min`,
  env: {
    'process.env.NODE_ENV': '"production"'
  },
  plugins: [terser()]
})
