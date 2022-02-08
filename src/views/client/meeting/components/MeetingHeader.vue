<template>
  <div class="meeting_header">
    <div class="meeting_title">План стратегического развития</div>
    <div class="meeting_desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, lorem
      aliquam volutpat scelerisque gravida sapien. Malesuada amet volutpat eget
      ut malesuada interdum fringilla. Commodo, elementum faucibus purus
      fringilla suspendisse quis ornare augue. Ut quam amet, sapien consequat
      viverra et, dis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Minima ipsum harum ex deserunt necessitatibus voluptates! Velit distinctio
      quaerat beatae consequuntur ipsa, exercitationem rerum quibusdam inventore
      deleniti porro dolore ut, libero blanditiis optio reprehenderit! Quasi
      natus cupiditate eveniet eius distinctio nam, quo dolores commodi, ratione
      aspernatur suscipit omnis facere odio ea totam maiores neque sunt
      dignissimos temporibus! Molestiae soluta iusto velit illo voluptatum
      aliquam odit eos fuga debitis modi alias nulla neque ducimus nemo,
      tenetur, ratione eligendi officiis. Quod, officiis illum ipsa, tenetur
      labore, dolorem fuga odio rerum perspiciatis minima doloremque optio quia
      ex possimus dicta sunt dolor quos. Eum, itaque!
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeetingHeader',
  props: {
    title: String,
    desc: String,
  },
}
</script>

<style lang="scss">
.meeting_header {
  margin-bottom: 20px;
}

.meeting_title {
  font-weight: 600;
  font-size: 32px;
  line-height: 37px;
  color: var(--dark);
  margin-bottom: 15px;
}

.meeting_desc {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: var(--grey);
}
</style>
