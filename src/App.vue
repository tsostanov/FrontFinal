<script >
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return {
      headerParams: {
        title: "Лабораторная работа 4",
        name: "Состанов Тимур Айратович",
        group: "P3214",
        variant: "2476"
      }
    }
  }
}
</script>

<template >
  <header>
    <div class="wrapper">
      <Header v-bind="headerParams"/>
    </div>
  </header>

  <main>
    <router-view/>
  </main>

</template>

<style scoped>

header {
  line-height: 1.5;
}

header, main{
  text-align: center;
}

</style>
