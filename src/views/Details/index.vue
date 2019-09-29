<template>
    <div class="detail-wrap">
        <Card dis-hover>
            <div class="title" slot="title">
                <h3>{{res.title}}</h3>
                <router-link :to="`/user/${res.author.loginname}`">{{res.author.loginname}}</router-link>
                <span :style="{marginLeft:'10px'}">{{res.create_at.split('T')[0]}}</span>
            </div>
            <div v-html="this.res.content"></div>
        </Card>
        <Card dis-hover :style="{marginTop:'15px'}">
            <div slot="title">
                <p>{{res.replies.length}}回复</p>
            </div>
            <div class="replie-list">
                <ul>
                    <li v-for="item in res.replies" class="replie-item">
                        <div class="avatar">
                            <Avatar :src="item.author.avatar_url" />
                        </div>
                        <div class="replie">
                            <div class="title">
                                <router-link :to="`/user/${item.author.loginname}`">{{item.author.loginname}}</router-link>
                                <span :style="{marginLeft:'10px'}">{{item.create_at.split('T')[0]}}</span>
                                <span class="ups" v-if="item.ups.length">
                                    赞
                                    <span>{{item.ups.length}}</span>
                                </span>
                            </div>
                            <p v-html="item.content"></p>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </Card>
    </div>
</template>

<script>
export default {
    name: "detail",
    data(){
        return {
            artId: '',
            res: {}
        }
    },
    created(){
        this.artId = this.$route.params.id
        // console.log(this.$route.params.id);
        this.getArticle()
    },
    methods:{
        getArticle(){
            this.axios
            .get(`https://cnodejs.org/api/v1/topic/${this.artId}`)
            .then(res=>this.res=res.data.data)
            .catch(err=>console.log(err))
        }
    }
}
</script>

<style lang="less">
    .detail-wrap{
        p{
            margin: 5px 0;
        }
        h3{
            margin-bottom: 5px;
        }
        .replie-list{
            ul{
                .replie-item{
                    display: flex;
                    margin: 10px 20px 10px 0;
                    padding: 10px 0 10px 10px;
                    border-top: 1px solid #f0f0f0;
                    .replie{
                        width: 100%;
                        margin-left: 20px;
                        .title{
                            .ups{
                                float: right;
                            }
                        } 
                    }
                }
                :first-child{
                    border-top:none;
                }
            }
        }
        img{
            max-width:100%; 
        }
    }
</style>