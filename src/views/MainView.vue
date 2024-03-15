<template>

  <div>
    <LogOutComponent/>
    <FormComponent/>
  </div>

</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import LogOutComponent from "@/components/LogOutComponent.vue";

export default {
  name: "MainView",
  components: {
    FormComponent,
    LogOutComponent
  }
}
</script>

<style scoped>


</style>