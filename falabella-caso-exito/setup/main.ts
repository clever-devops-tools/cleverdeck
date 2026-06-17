import type { AppContext } from '@slidev/types'

export default ({ router }: AppContext) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (!base) return
  router.beforeEach((to) => {
    if (to.path.startsWith(base + '/'))
      return { path: to.path.slice(base.length), replace: true }
  })
}
