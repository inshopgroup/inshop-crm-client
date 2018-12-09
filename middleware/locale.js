export default function ({ app, store, params, redirect, req, route }) {
  if (store.state.locale !== app.i18n.locale && req && route.name) {
    app.i18n.locale = store.state.locale
    redirect(app.localePath({name: app.getRouteBaseName(), params: params}))
  }
}
