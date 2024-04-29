<script setup>

</script>

<template>
  <form class="registration-form">
    <h2>Iniciar sesion</h2>
    <div class="form-group">
      <label for="username">Usuario</label><br>
      <input type="text" id="username">
    </div>
    <div class="form-group">
      <label for="email">Contraseña</label><br>
      <input type="password" id="password">
    </div>
    <p class="link"> <router-link to="/recover-account">¿Se te olvido la contraseña?</router-link></p>
    <div class="form-group-btn">
      <pv-button label="Acceder" class="btn"></pv-button>
    </div>
    <p class="link">¿No tienes una cuenta? <router-link to="/register">Registrate aqui</router-link></p>
  </form>
</template>

<style scoped>
/*Title Registrate*/
h2 {
  font-weight: normal;
  font-size: 24px;
  text-align:center;
  margin-bottom: 25px;
}
/*All form*/
.registration-form {
  font-family: Roboto, "sans-serif";
  background-color: #FFA500;
  color: #1E3A8A;
  padding: 20px;
  max-width: 500px;
  margin: 25px auto;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 371px;
  width: 391px
}
.form-group {
  margin: 25px 10px auto; /*top | both sides | bottom*/
}
/*Labels*/
.form-group label {
  font-weight: lighter;
  font-size: 15px;
}
/*Inputs*/
.form-group input {
  width: 326px;
  height: 28px;
  border-radius: 3px;
  background-color: #FCE8CC;
  border: none;
  margin-bottom: 5px;
}

.form-group-btn {
  margin: 55px auto 8px; /*top | both sides | bottom*/
  display: flex;
  justify-content: center;
  align-items: center;
}

/*Buttons Gestion Logistica and Cliente*/
.btn {
  font-size: 18px;
  font-weight: lighter;
  color: #FFFFFF;
  background-color: #1E3A8A;
  margin: 0 10px;
  width: 326px;
  height: 33px;
  border-radius: 25px;
  border: none;
  cursor:pointer;
}
.link {
  margin: auto 10px;
  font-weight: lighter;
  font-size: 12px;
}
</style>