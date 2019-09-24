import About from './src/pages/About'
import Blog from './src/pages/Blog'
import Contact from './src/pages/Contact'
import Home from './src/pages/Home'
import Portfolio from './src/pages/Portfolio'
import Resume from './src/pages/Resume'
import PageNotFound from './src/pages/PageNotFound'

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/about/', component: About },
  { path: '/blog/', component: Blog },
  { path: '/contact/', component: Contact },
  { path: '/portfolio/', component: Portfolio },
  { path: '/resume/', component: Resume },
  { component: PageNotFound },
]

export default routes
