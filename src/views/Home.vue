<template>
  <Row>
    <Col span="6">
      <Menu active-name="1" theme="light" class="art-nav">
        <MenuItem name="1">
            <router-link to="/home/index">全部</router-link>
        </MenuItem>
        <MenuItem name="2">
            <router-link to="/home/good">精华</router-link>
        </MenuItem>
        <MenuItem name="3">
            <router-link to="/home/share">分享</router-link>
        </MenuItem>
        <MenuItem name="4">
            <router-link to="/home/ask">问答</router-link>
        </MenuItem>
        <MenuItem name="5">
            <router-link to="/home/job">招聘</router-link>
        </MenuItem>
        <MenuItem name="6">
            <router-link to="/home/dev">测试</router-link>
        </MenuItem>
      </Menu>
    </Col>
    <Col span="18">
        <Index></Index>
    </Col>
  </Row>
</template>

<script>
import Index from './Index/index'
export default {
    components: {
        Index
    }
};
</script>

<style lang='less'>
    .art-nav{
        width: 100%!important;
        text-align: center;
        li.ivu-menu-item{
            padding: 0;
        }
        a{
            display: block;
            width: 100%;
            line-height: 48px;
        }
    }
</style>