import Vue from 'vue'
import Router from 'vue-router'
import AppSelect from '@/components/AppSelect'

import ClientSideMain from '@/components/ClientSidePlaygroundMain'
import ClientSideHelp from '@/components/ClientSideHelp'
import ClientSideConnect from '@/components/ClientSideConnect'
import ClientSideMatchAllQ from '@/components/ClientSideMatchAllQ'

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
      component: ClientSideMain,
      children: [
        {
          path: '/',
          name: 'ClientSideHelp',
          component: ClientSideHelp
        },
        {
          path: '/ClientSideConnect',
          name: 'ClientSideConnect',
          component: ClientSideConnect
        },
        {
          path: '/ClientSideMatchAllQ',
          name: 'ClientSideMatchAllQ',
          component: ClientSideMatchAllQ
        }
      ]
    },
    {
      path: '/serverSideMain',
      name: 'ServerSideMain',
      component: ServerSideMain
    }
  ]
})
