<template>

  <h1>Регистрация</h1>
  <form @submit.prevent="registration">
    <div>
      <label for="login">Логин </label>
      <input type="text" id="login" name="login" v-model="regData.login" required>
    </div>
    <div>
      <label for="password">Пароль </label>
      <input type="password" id="password" name="password" v-model="regData.password" required>
    </div>
    <input class="but" type="submit" value="Зарегистрироваться">
  </form>
  <span id="res"></span>

</template>

<script>
import {api} from '@/axios'
import {errorHandler} from "@/js/utils";

export default {
  name: "RegistrationComponent",
  data(){
    return {
      regData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    registration: function (){
      api.post("/user/reg", this.regData, {
        headers: {
          "Content-Type" : "application/json"
        }
      })
          .then(response => {
            if(response.status === 200){
              document.getElementById("res").innerHTML = "Вы зарегистрированы, теперь можете входить";
             }
          })
          .catch(error => {
            errorHandler(error.response.status, "res", "reg");
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


