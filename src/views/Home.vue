<template>
  <div class="home">
    <HelloWorld msg="Here is simple boilerplate of vue project with vue-router and vuex modular system!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
