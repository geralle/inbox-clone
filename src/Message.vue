<template lang="html">
<!-- v-bind:class creates a bunch of class depending on the seed.js data -->
  <div class="row message" v-bind:class="{
      read: email.read,
      unread: !email.read,
      selected: email.selected
    }">
    <div class="col-xs-1">
      <div class="row">
        <div class="col-xs-2">
<!-- v-model listens and toggles my selected class above -->
          <input type="checkbox" v-model="email.selected" />
        </div>
        <div class="col-xs-2">
          <div class="" v-on:click="toggleStar(email)">
<!-- "v-if" the toggleStar function is true.. show the star.. if false show the empty star-->
            <i v-if="!email.starred" class="star fa fa-star-o"></i>
            <i v-else="email.starred" class="star fa fa-star"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-11">
      <span v-for="label in email.labels" class="label label-warning">{{label}}</span>
      <a href="#">
        {{email.subject}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'email',
    'toggleStar',
    'selections'
  ]
}
</script>

<style lang="css">
</style>
