<template lang="html">
  <div class="row toolbar">
  <div class="col-md-12">
    <p class="pull-right">
      <span class="badge badge">{{unredMsg}}</span>
      unread messages
    </p>

    <a class="btn btn-danger">
      <i class="fa fa-plus"></i>
    </a>

    <button class="btn btn-default" v-on:click="selectAll()">
      <!-- <p>{{checkSomeMsg}}</p> -->
      <i class="fa fa-check-square-o"></i>
      <i v-if="checkSomeMsg == true" class="fa fa-minus-square-o"></i>
      <i v-if="checkSomeMsg == false" class="fa fa-square-o"></i>
    </button>

    <button class="btn btn-default" v-on:click="markRead(emails)">Mark As Read</button>

    <button class="btn btn-default" v-on:click="markUnread(emails)">Mark As Unread</button>

    <select class="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select class="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button class="btn btn-default" v-on:click="deleteEmail(emails)">
      <i class="fa fa-trash-o"></i>
    </button>
  </div>
</div>
</template>

<script>
export default {
  props:[
    'emails',
    'unredMsg',
    'checkSomeMsg',
    'selectAll',
    'markRead',
    'markUnread',
    'deleteEmail',
    'findIndex'
  ]
}
</script>

<style lang="css">
</style>
