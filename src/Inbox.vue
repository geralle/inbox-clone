<template lang="html">
  <div>
    <app-toolbar v-bind:emails="emails"></app-toolbar>
    <app-messages v-bind:emails="emails" v-bind:toggleStar="toggleStar"></app-messages>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import Messages from './Messages.vue'
import emailData from './seeds.js'

export default {
  components: {
    'app-toolbar': Toolbar,
    'app-messages': Messages
  },
  data() {
    return{
      emails: emailData
    }
  },
  methods:{
    toggleStar(email){
      console.log(email)
      if(email.starred === true){
        email.starred = false
      }else if(email.starred === false){
        email.starred = true
      }
    }
  }
}
</script>

<style lang="css">
</style>
