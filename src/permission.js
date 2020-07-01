import router from './router'
import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/', '/about', '/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  // set page title
  // document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()
  console.log(hasToken)
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
    }
  }
})

router.afterEach(() => {})
