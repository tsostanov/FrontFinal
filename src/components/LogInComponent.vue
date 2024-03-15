<template>

  <h1>Вход</h1>
  <form @submit.prevent="logIn">
    <div>
      <label for="login">Логин </label>
      <input type="text" id="login" name="login" v-model="logData.login" required>
    </div>
    <div>
      <label for="password">Пароль </label>
      <input type="password" id="password" name="password" v-model="logData.password" required>
    </div>
    <input class="but" type="submit" value="Войти">
  </form>
  <span id="res"></span>


</template>

<script>
import {errorHandler} from "@/js/utils";
import {api} from "@/axios";

export default {
  name: "LogInComponent",
  data(){
    return {
      logData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    logIn: function (){
      api.post("/user/logIn", this.logData, {
        headers: {
          "Content-Type" : "application/json"
        }
      })
          .then(response => {
            if(response.status === 200){
              localStorage.setItem("userToken", response.data.token);
              this.$router.push({name: 'main-page'});
            }
          })
          .catch(error => {
            errorHandler(error.response.status, "res");
          });
    }
  }
}
</script>

<style scoped>
.but{
  background-color: #ffffff;
  font-weight: bold;
  padding: 4px 9px 4px;
  font-size: large;
  margin-top: 30px;
  margin-bottom: 30px;
}
.but:hover, .but:focus{
  background-color: #8c8c8c;
}

label{
  font-size: large;
}
</style>