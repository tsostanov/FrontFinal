<template>
  <header>
  </header>
  <main>
<!--    <div id="clock">-->
<!--      <span class="clocks" id="h"/> : <span class="clocks" id="m"/> : <span class="clocks" id="s"/>-->
<!--    </div>-->
    <div class="start-container">

    <div class="start-item" id="buttons">
        <img class="first" src="../img/first.jpg" alt="confession">

    </div>

      <div class="start-item">
        <button
            v-for="button in buttons"
            v-bind:key="button"
            v-bind:class="['tab-button', {active: currentButton === button.value}]"
            v-on:click="currentButton = button.value"
        >
          {{button.name}}
        </button>
        <component v-bind:is="currentButtonComponent"></component>
      </div>

    <div class="start-item">
     <img src="../img/second.jpg" alt="just tired">
    </div>
    </div>
  </main>

</template>

<script>
import LogInComponent from "@/components/LogInComponent.vue";
import RegistrationComponent from "@/components/RegistrationComponent.vue";

export default {
  name: "StartView",
  components: {
    LogInComponent,
    RegistrationComponent
  },
  data(){
    return {
      headerParams: {
        title: "Лабораторная работа 4",
        name: "Состанов Тимур Айратович",
        group: "P3214",
        variant: "2473"
      },
      buttons: [{"value": "Registration", "name": "Регистрация"}, {"value": "LogIn", "name": "Вход"}],
      currentButton: "LogIn",
    }
  },
  computed: {
    currentButtonComponent: function (){
      return this.currentButton + "Component";
    }
  }
  // mounted() {
  //   this.updateClock();
  //   //sessionStorage.removeItem("userToken");
  // },
  // methods: {
  //   clock: function (){
  //     let date = new Date();
  //     let hour = date.getHours();
  //     let min = date.getMinutes();
  //     let sec = date.getSeconds();
  //     if(hour < 10) hour = "0" + hour;
  //     if(min < 10) min = "0" + min;
  //     if(sec < 10) sec = "0" + sec;
  //     document.getElementById("h").innerHTML = hour;
  //     document.getElementById("m").innerHTML = min;
  //     document.getElementById("s").innerHTML = sec;
  //   },
  //   updateClock: function (){
  //     this.clock();
  //     setInterval(this.clock, 1000);
  //   }
  // }
}
</script>

<style scoped>
.tab-button{
  background-color: #ffffff;
  font-weight: bold;
  padding: 4px 9px 4px;
  font-size: large;
  /*margin: 30px 10px;*/
  margin: auto;
}
.tab-button:hover, .tab-button:focus, .tab-button:active{
  background-color: #8c8c8c;
}
/*#clock{*/
/*   font-family: fantasy;*/
/*   color: dodgerblue;*/
/*   text-shadow: 2px 2px 2px black;*/
/*   font-size: 5rem;*/
/*   word-spacing: 4pt;*/
/*   letter-spacing: 2pt;*/
/* }*/

.start-container{
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));*/
  /*gap: 20px;*/
  grid-template-columns: 1fr 1fr 1fr;
}

@media (min-width: 737px) and (max-width: 1265px) {
  .start-container{
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 747px) {
  .start-container{
    grid-template-columns: 1fr;
  }
}

.start-item{
  align-self: center;

}
#clock{
  margin-bottom: 20px;
}
img{
  height: 400px;
  margin: 20px;
}
/*.capy{*/

/*  height: 300px*/
/*;*/
/*}*/
</style>