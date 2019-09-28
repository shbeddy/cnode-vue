<template>
  <div>
      <Card dis-hover="true">
          <h3 slot="title">{{res.title}}</h3>
          <div v-html="this.res.content"></div>
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

<style>

</style>