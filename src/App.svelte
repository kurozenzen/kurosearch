<script>
  import Header from './lib/navigation/Header.svelte'
  import Router from './lib/router/Router.svelte'
  import Footer from './lib/navigation/Footer.svelte'
  import theme from './lib/theme/theme'
  import './lib/theme/theme.css'

  // set theme and immediately unsubscribe
  theme.subscribe((value) => theme.set(value))()
</script>

<Header />
<Router />
<Footer />
