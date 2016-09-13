const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
// const ReactRedux = require('react-redux')
// const Provider = ReactRedux.Provider
// const store = require('./js/Store.jsx').store
const _ = require('lodash')
const fs = require('fs')
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const Routes = require('../../js/ClientApp.jsx').Routes

module.exports = (req, res) => {
  match({ routes: Routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(RouterContext, renderProps)
        // React.createElement(Provider, {store}, React.createElement(RouterContext, renderProps))
      )
      res.status(200).send(template({body}))
    } else {
      res.status(404).send('not found')
    }
  })
}
