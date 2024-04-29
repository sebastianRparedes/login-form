<script setup>
import Toolbar from '../src/public/components/the-header/the-header.component.vue'
import Form_register from './login/components/register.component.vue'
import Form_login from './login/components/login.component.vue'
import Form_recover_account from './login/components/recover-account.component.vue'
</script>

<template>
  <header>
    <Toolbar />
  </header>
  <main>
    <div>
      <router-view />
    </div>

    <!--<Form_register />-->
    <!--<Form_login />-->
    <!--<Form_recover_account /> -->
  </main>

</template>

<style scoped>

</style>
