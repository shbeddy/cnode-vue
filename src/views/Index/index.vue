<template>
  <div class="art-list">
    <ul class="art-list">
      <li v-for="item in this.list" :key="item.id" class="art-item">
        <div class="avatar">
          <Avatar :src="item.author.avatar_url" />
        </div>
        <div class="title">
          <h3><TxtTag :item="item"></TxtTag><router-link :to="`/details/${item.id}`">{{item.title}}</router-link></h3>
          <span><router-link :to="`/user/${item.author_id}`">{{item.author.loginname}}</router-link></span>
          <span :style="{marginLeft:'10px'}">{{item.create_at.split('T')[0]}}</span>
        </div>
      </li>
    </ul>
    <Page :total="200" :page-size='20' @on-change="handlePage" />
  </div>

</template>

<script>
  // import data from './data'
  import TxtTag from '../../components/TxtTag'
  export default {
    name: 'index',
    data(){
      return {
        list: [],
        pageNum: 1,
        pageSize: 20,
      }
    },
    components:{
      TxtTag
    },
    methods:{
      handlePage(value){
        this.pageNum = value
        this.getList()
      },
      getList: function(){
        this.axios
        .get(`https://cnodejs.org/api/v1/topics?page=${this.pageNum}&tab=${this.tab}&limit=${this.pageSize}`)
        .then(res=>{this.list = res.data.data})
        .catch(err=>console.log(err))
      },
    },
    props:["tab"],
    created(){
      this.getList()
    },
    watch:{
      'tab':function(to,from){
        this.getList()
      }
    }
  }
</script>

<style lang='less'>
  .art-list{
    margin-bottom: 15px;
    .art-item{
      padding: 10px 20px;
      // margin: 0 10px;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      .avatar{
        float: left;
        width: 50px;
      }
      .title{
        margin-left: 30px;
      }
    }
  }
</style>