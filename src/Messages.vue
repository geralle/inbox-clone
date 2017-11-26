<template lang="html">
  <div>
    <app-message v-for="email in emails" v-bind:email="email" v-bind:toggleStar="toggleStar" key="">
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
    'toggleStar'
  ],
  components: {
    'app-message': Message
  }
}
</script>

<style lang="css">
</style>
