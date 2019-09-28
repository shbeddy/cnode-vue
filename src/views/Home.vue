<template>
  <Row>
    <Col span="6">
      <Menu :active-name="this.tab" theme="light" class="art-nav" @on-select="handleTab">
        <MenuItem name="all">
            全部
        </MenuItem>
        <MenuItem name="good">
            精华
        </MenuItem>
        <MenuItem name="share">
            分享
        </MenuItem>
        <MenuItem name="ask">
            问答
        </MenuItem>
        <MenuItem name="job">
            招聘
        </MenuItem>
        <MenuItem name="dev">
            测试
        </MenuItem>
      </Menu>
    </Col>
    <Col span="18">
        <!-- <router-view /> -->
        <Index :tab="this.tab"></Index>
    </Col>
  </Row>
</template>

<script>
import Index from './Index'
export default {
    name: 'home',
    methods:{
        handleTab(name){
            this.tab = name
        }
    },
    data(){
        return {
            tab: 'all'
        }
    },
    components: {
        Index
    },
    created(){
        // this.tab = this.$route.params.id
        // console.log(this.tab);
    },
    watch:{}
};
</script>

<style lang='less'>
    .art-nav{
        width: 100%!important;
        text-align: center;
        li.ivu-menu-item{
            // padding: 0;
        }
        // a{
        //     display: block;
        //     width: 100%;
        //     line-height: 48px;
        // }
    }
</style>