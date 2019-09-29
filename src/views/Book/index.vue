<template>
  <div class="book-wrap">
    <Card v-for="item in list" dis-hover class="book-item">
      <h3 slot="title">{{item.title}}</h3>
      <div v-html="item.content"></div>
    </Card>
  </div>
</template>

<script>
import data from './data'
export default {
  data(){
    return {
      list:data
    }
  }
}
</script>

<style lang="less">
  .book-item{
    margin-bottom: 15px;
  }
</style>