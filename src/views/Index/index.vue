<template>
  <div>
    <ul >
      <li v-for="item in this.list" :key="item.id" class="art-item">
        <div class="avatar">
          <Avatar :src="item.author.avatar_url" />
        </div>
        <div class="title">
          <h3><router-link :to="`/details/${item.id}`">{{item.title}}</router-link></h3>
          <span><router-link :to="`/user/${item.author_id}`">{{item.author.loginname}}</router-link></span>
          <span :style="{marginLeft:'10px'}">{{item.create_at.split('T')[0]}}</span>
        </div>
      </li>
    </ul>
    <Page :total="100" :page-size='20' />
  </div>

</template>

<script>
  import data from './data'
  export default {
    name: 'index',
    data(){
      return {
        list: data.data
      }
    },
    created(){
      console.log(this.list);
    }
    // computed: {
      //   list: data.data
    // }
  }
</script>

<style lang='less'>
  .art-item{
    padding: 10px 20px;
    margin: 0 10px;
    border-bottom: 1px solid #eee;
    .avatar{
      float: left;
      width: 50px;
    }
    .title{
      margin-left: 30px;
    }
  }
</style>