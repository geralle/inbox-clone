<template lang="html">
  <div>
    <app-toolbar v-bind:emails="emails" v-bind:selections="selections" v-bind:unredMsg="unredMsg" v-bind:markUnread="markUnread" v-bind:markRead="markRead" v-bind:checkSomeMsg="checkSomeMsg" v-bind:selectAll="selectAll" v-bind:deleteEmail="deleteEmail" v-bind:findIndex="findIndex"></app-toolbar>
    <app-messages v-bind:emails="emails" v-bind:toggleStar="toggleStar" ></app-messages>
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
    selectAll: function(){
      for(var i=0;i<this.emails.length;i++){
        var selectedEmail = this.emails[i].selected
        // console.log(selectedEmail)
        if(selectedEmail === false || selectedEmail === undefined){
          this.emails[i]["selected"] = true;
        }
      }
      return this.emails
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
    },
    findIndex: function(data, position, selectedDataArr){
      // console.log("all emails",data)
      // console.log("checkmark arr position",position)
      // console.log("checkmark arr",selectedDataArr)
      var index = 0
      for(var i=0;i<data.length;i++){
        if(selectedDataArr[position].id === data[i].id){
          index = i
        }
      }
      return index
    },
    deleteEmail: function(data){
      var selectedDataArr = this.selections(data)
      var selectedIndex = 0
      for(var i=0; i<selectedDataArr.length; i++){
        selectedIndex = this.findIndex(data, i, selectedDataArr)
        data.splice(selectedIndex, 1)
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
    checkSomeMsg: function(){
      var some = false
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
