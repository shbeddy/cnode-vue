<template>
  <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
               
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <router-view/>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
import Header from './views/layout/Header';
import Content from './views/layout/Content';
import Footer from './views/layout/Footer';

export default {
  name: 'index',
  components: {
    Header,
    Content,
    Footer,
  }
}
</script>

<style lang="less">
  ul{
    list-style: none;
  }
</style>
