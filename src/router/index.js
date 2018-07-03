import Vue from 'vue'
import Router from 'vue-router'
import AppSelect from '@/components/AppSelect'
import ClientSideMain from '@/components/ClientSidePlaygroundMain'
import ServerSideMain from '@/components/ServerSidePlaygroundMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppSelect',
      component: AppSelect
    },
    {
      path: '/clientSideMain',
      name: 'ClientSideMain',
      component: ClientSideMain
    },
    {
      path: '/serverSideMain',
      name: 'ServerSideMain',
      component: ServerSideMain
    }
  ]
})
