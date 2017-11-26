<template lang="html">
  <div>
    <app-toolbar v-bind:emails="emails" v-bind:unredMsg="unredMsg" v-bind:selections="selections" v-bind:markUnread="markUnread" v-bind:markRead="markRead" v-bind:checkMsgSelection="checkMsgSelection"></app-toolbar>
    <app-messages v-bind:emails="emails" v-bind:toggleStar="toggleStar" v-bind:selections="selections" ></app-messages>
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
      emails: emailData,
    }
  },
  methods:{
    toggleStar: function(email){
      if(email.starred === true){
        email.starred = false
      }else if(email.starred === false){
        email.starred = true
      }
    },
    selections: function(data){
      var selected = []
      for(var i=0;i<data.length;i++){
        if(data[i].selected === true){
          selected.push(data[i])
        }
      }
      return selected
    },
    markUnread: function(data){
      var selectedUnread = this.selections(data)
      for(var i=0;i<selectedUnread.length;i++){
        if(selectedUnread[i].read === true){
          selectedUnread[i].read = false
        }
      }
    },
    markRead: function(data){
      var selectedRead = this.selections(data)
      for(var i=0;i<selectedRead.length;i++){
        if(selectedRead[i].read === false){
          selectedRead[i].read = true
        }
      }
    }
  },
  computed:{
    unredMsg: function(){
      var unread = 0
      for(var i=0;i<this.emails.length;i++){
        if(this.emails[i].read === false){
          unread++
        }
      }
      return unread
    },
    checkMsgSelection: function(){
      var some = false
      var noMsg = false
      var allMsg = false
      var selectedMsgs = 0
      for(var i=0;i<this.emails.length;i++){
        if(this.emails[i].selected == true){
          selectedMsgs++
        }
      }
      if(selectedMsgs > 0){
        some = true
      }
      return some
    }
  }
}
</script>

<style lang="css">
</style>
