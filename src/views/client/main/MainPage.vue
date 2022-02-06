<template>
  <div class="content">
      <heading>
          Обсуждения
      </heading>

        <events-filter></events-filter>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'
import EventsFilter from './components/EventsFilter.vue'
export default {
    components: { Heading, EventsFilter },

}
</script>

<style>
    .content{
        margin-top: 45px;
    }
</style>