<template>
  <div class="user-wrap">
    <div>
      <div class="avatar">
        <Avatar :src="userData.data.avatar_url" class="user-avat"></Avatar>
      </div>
      <div class="info">
        <Row>
          <Col span="8">
            <span>用户名：{{userName}}</span>
          </Col>
          <Col span="8">
            <span>积分：{{userData.data.score}}</span>
          </Col>
          <Col span="8">
            <span>注册时间：{{userData.data.create_at?userData.data.create_at.split('T')[0]:''}}</span>
          </Col>
        </Row>
      </div>
    </div>
    <Card dis-hover class="list">
      <div slot="title">最近创建的话题</div>
      <ul>
        <li v-for="item in userData.data.recent_topics" class="item">
          <div class="avatar">
            <router-link :to="`/user/${item.author.loginname}`">
              <Avatar :src="item.author.avatar_url"></Avatar>
            </router-link>
          </div>
          <div class="title">
            <router-link :to="`/details/${item.id}`">{{item.title}}</router-link>
          </div>
          <div class="last-time">
            <span>最后回复：{{item.last_reply_at?item.last_reply_at.split("T")[0]:''}}</span>
          </div>
        </li>
      </ul>
    </Card>
    <Card dis-hover class="list">
      <div slot="title">最近参与的话题</div>
      <ul>
        <li v-for="item in userData.data.recent_replies" class="item">
          <div class="avatar">
            <router-link :to="`/user/${item.author.loginname}`">
              <Avatar :src="item.author.avatar_url"></Avatar>
            </router-link>
          </div>
          <div class="title">
            <router-link :to="`/details/${item.id}`">{{item.title}}</router-link>
          </div>
          <div class="last-time">
            <span>最后回复：{{item.last_reply_at?item.last_reply_at.split("T")[0]:''}}</span>
          </div>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  data(){
      return {
        userName: '',
        userData: {
          data: {
            avatar_url:""
          }
        }
      }
    },
  methods:{
    getUser(){
      this.axios
      .get(`https://cnodejs.org/api/v1/user/${this.userName}`)
      .then(res=>this.userData=res.data)
      .catch(err=>console.log(err))
    },
    getPath(){
      this.userName = this.$route.params.id
      this.getUser()
    }
  },
  created(){
    this.userName = this.$route.params.id
    this.getUser()
  },
  watch:{
    '$route': 'getPath'
    }
  
}
</script>

<style lang="less">
  .user-wrap{
    .avatar{
      margin: 15px 0;
      text-align: center;
      .user-avat{
        width: 50px;
        height: 50px;
      }
     
    }
    .info{
      text-align: center;
      font-size: 14px;
    }
    .list{
      margin-top: 15px;
      .item{
        display: flex;
        border-bottom: 1px solid #eee;
        .title{
          width: 100%;
          margin: 15px 10px;
        }
        .last-time{
          width: 190px;
          line-height: 60px;
        }
      }
    }
  }
</style>