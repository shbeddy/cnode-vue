<template>
    <Tag :color="this.tab.color">{{this.tab.txt}}</Tag>
</template>

<script>
const tab ={
    top:{
        color:'error',
        txt:'置顶'        
    },
    good:{
        color:'warning',
        txt:'精华'
    },
    ask:{
        color:'magenta',
        txt:'问答'
    },
    job:{
        color:'red',
        txt:'招聘'
    },
    dev:{
        color:'cyan',
        txt:'测试'
    },
    share:{
        color:'blue',
        txt:'分享'
    },
    default:{
        color:'default'
    }
}
export default {
    name: 'txtTag',
    data(){
        return{
            tab: {}
        }
    },
    props: ["item"],
    created(){
        this.tab = tab[this.getTag(this.item)]

    },
    methods:{
        getTag(data){
            return (
                data.top?'top':
                    data.good?'good':
                        data.tab||'dev'
            )
        }
    }
}
</script>

<style>

</style>