import Root from './components'
import link from '@frontity/html2react/processors/link'

export default {
  name: "eazipr-theme",
  roots: {
    eaziprTheme: Root
  },
  state: {
    eaziprTheme: {}
  },
  actions: {
    eaziprTheme: {}
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
};
