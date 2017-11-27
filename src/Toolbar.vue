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

    <button class="btn btn-default" >
      <i v-if="selectBox === 'all'" class="fa fa-check-square-o" v-on:click="removeSelectAll()"></i>
      <i v-if="selectBox === 'some'" class="fa fa-minus-square-o" v-on:click="selectAll()"></i>
      <i v-if="selectBox === 'none'" class="fa fa-square-o" v-on:click="selectAll()"></i>
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
    'selectBox',
    'selectAll',
    'removeSelectAll',
    'markRead',
    'markUnread',
    'deleteEmail',
    'findIndex'
  ]
}
</script>

<style lang="css">
</style>
