<template>
  <button class="but" @click.prevent="logout">Выйти</button>
  <br>
  <span id="logout"></span>
</template>

<script>

export default {
  name: "LogOutComponent",
  data(){
    return {
      token: ''
    }
  },
  methods: {
    logout: function (){

      localStorage.removeItem("userToken");
      localStorage.removeItem("dots");
      localStorage.removeItem("lastR")
      this.$router.push({name: 'start-page'});

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

</style>