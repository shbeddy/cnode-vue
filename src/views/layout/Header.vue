<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">
            <img src="../../assets/cnodejs_light.svg" />
        </div>
        <div class="layout-nav">
            <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                
                <router-link to="/home/index">首页</router-link>
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                <router-link to="/book">教程</router-link>
            </MenuItem>
            <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                <router-link to="/about">关于</router-link>
            </MenuItem>
        </div>
    </Menu>
    
</template>
   
<script>
    import {Header} from 'iview'
    export default {
        name: 'main-header'
    }
</script>

<style>
    .layout-logo{
        width: 200px;
        height: 60px;
        /* background: #5b6270; */
        border-radius: 3px;
        float: left;
        position: relative;
        top: 5px;
        left: 20px;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>