import Layout from '@/layout'

const managementRouter = {
  path: '/management',
  component: Layout,
  name: 'management-index',
  meta: { title: 'management.root', icon: 'dashboard' },
  children: [
    {
      path: 'users',
      component: () => import(/* webpackChunkName: 'management' */ '@/views/tsplus/management/users/users'),
      name: 'management-users',
      meta: { title: 'management.users.root' },
      redirect: '/management/users/list',
      children: [
        {
          path: 'list',
          component: () => import(/* webpackChunkName: 'management' */ '@/views/tsplus/management/users/list'),
          name: 'management-users-list',
          meta: { title: 'management.users.list', tabs: true }
        },
        {
          path: 'recommend',
          name: 'management-users-recommend',
          meta: { title: 'management.users.recommend', tabs: true }
        },
        {
          path: 'certificated',
          name: 'management-users-certificated',
          meta: { title: 'management.users.certificated', tabs: true }
        },
        {
          path: 'roles',
          name: 'management-users-roles',
          component: () => import(/* webpackChunkName: 'management' */ '@/views/tsplus/management/users/roles'),
          meta: { title: 'management.users.roles', tabs: true }
        },
        {
          path: 'abilities',
          name: 'management-users-abilities',
          meta: { title: 'management.users.abilities', tabs: true }
        },
        {
          path: 'edit/:uid',
          hidden: true,
          name: 'management-users-edit',
          component: () => import(/* webpackChunkName: 'management' */ '@/views/tsplus/management/users/edit'),
          meta: { title: 'management.users.edit', hidden: true, noCache: true }
        },
        {
          path: 'add',
          hidden: true,
          name: 'management-users-add',
          component: () => import(/* webpackChunkName: 'management' */ '@/views/tsplus/management/users/add'),
          meta: { title: 'management.users.edit', hidden: true, noCache: true }
        }
      ]
    },
    {
      path: 'tags',
      component: () => import(/* webpackChunkName: 'management' */ '@/views/tsplus/management/tags/index'),
      name: 'management-tags',
      meta: { title: 'management.tags.root' },
      redirect: '/management/tags/list',
      children: [
        {
          path: 'list',
          name: 'Management-Tags-List',
          meta: { title: 'management.tags.list', tabs: true }
        },
        {
          path: 'categories',
          name: 'Management-Tags-Categories',
          meta: { title: 'management.tags.categories', tabs: true }
        },
        {
          path: 'add',
          name: 'Management-Tags-Addd',
          meta: { title: 'management.tags.add', tabs: true }
        }
      ]
    },
    {
      path: 'integral',
      component: () => import(/* webpackChunkName: 'management' */ '@/views/tsplus/management/integral/index'),
      name: 'management-integral',
      meta: { title: 'management.integral.root' }
    }
  ]
}

export default managementRouter
