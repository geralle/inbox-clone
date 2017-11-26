<template lang="html">
  <div>
    <app-message v-for="email in emails" v-bind:email="email" v-bind:toggleStar="toggleStar" v-bind:selections="selections" key="">
      <!-- message component -->
    </app-message>
  </div>
</template>

<script>
import Message from './Message.vue'
export default {
  name: 'app-messages',
  props:[
    'emails',
    'toggleStar',
    'selections'
  ],
  components: {
    'app-message': Message
  }
}
</script>

<style lang="css">
</style>
