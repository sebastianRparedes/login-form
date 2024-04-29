<script setup>

</script>

<template>
  <pv-toolbar class="toolbar-content">
    <template #start>
      <div class="container">
        <img src="/src/img/logo.png" alt="startup's logo" width="35px">
        <p>CargoApp</p>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
  .toolbar-content {
    background-color: #1E3A8A;
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

</style>