// Libraries
import CMS, { init } from 'netlify-cms'

// Local
import FileSystemBackend from './components/FileSystemBackend'

// console.log('CMS.config', config)

// Use 'file-system' backend on development
if (process.env.NODE_ENV === 'development') {
  window.CMS_ENV = 'development_overrides'
  CMS.registerBackend('file-system', FileSystemBackend)
}

// do manual init (accepts a config object)
// init({ config: {...} }) that would be merged with
// the config.yml settings, but this doesn't currently work
// as expected. instead setting window.CMS_ENV and including
// development_overrides in config.yml
init()

// another option would be to render the config as json and
// add it to the page via:
// window.CMS_CONFIG = { /* JSON */ }

// const fs = require('fs')
// const yaml = require('js-yaml')
// function getConfig() {
//   const file = `${__dirname}/static/admin/config.yml`
//   obj = yaml.load(fs.readFileSync(file, { encoding: 'utf-8' }))
//   // override obj as neccessary
//   window.CMS_CONFIG = JSON.stringify(obj)
// }