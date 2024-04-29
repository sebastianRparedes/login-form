import { createRouter, createWebHistory } from 'vue-router'

import Form_register from '../login/components/register.component.vue'
import Form_login from '../login/components/login.component.vue'
import Form_recover_account from '../login/components/recover-account.component.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Form_login, alias: '/Form_login' },
    { path: '/register', component: Form_register, name: 'Form_register' },
    { path: '/login', component: Form_login, name: 'Form_login' },
    { path: '/recover-account', component: Form_recover_account, name: 'Form_recover_account' }
  ]
})

export default router;