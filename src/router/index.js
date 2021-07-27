import Sys from '../components/Sys.vue';

import Usermanage from '../pages/UserManage.vue';

const routes = [

  {
    path: '/sys',
    component: Sys,
    alias:'系统管理',
    children: [
      {
        path: "user",
        alias:'用户管理',
        component: Usermanage
      }
    ]
  },
];


export default routes;