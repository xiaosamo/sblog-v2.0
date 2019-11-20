<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',zIndex:'999'}"
                    style="border-color: #e7e7e7;"
                    theme="light"
                    breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed" >


<!--            <Menu theme="dark" mode="horizontal" active-name="1-2" :open-names="['1']">-->
<!--                <div class="layout-logo">logo</div>-->

<!--                 <MenuItem name="index" to="/" >-->
<!--                      <Input search placeholder="Enter something..." width="auto"/> -->
<!--                 </MenuItem>-->

<!--              -->
<!--              -->
<!--                    <MenuItem name="index" to="/" >-->
<!--                        <Icon type="ios-navigate"></Icon>-->
<!--                        首页-->
<!--                    </MenuItem>-->

<!--             -->
<!--                <Submenu name="2">-->
<!--                    <template slot="title">-->
<!--                        <Icon type="ios-people" />-->
<!--                        Java-->
<!--                    </template>-->
<!--                    <MenuItem name="2-1">新增用户</MenuItem>-->
<!--                    <MenuItem name="2-2">活跃用户</MenuItem>-->
<!--                </Submenu>-->
<!--                <Submenu name="3">-->
<!--                    <template slot="title">-->
<!--                        <Icon type="ios-stats" />-->
<!--                        框架-->
<!--                    </template>-->
<!--                    <MenuGroup title="使用">-->
<!--                        <MenuItem name="3-1">新增和启动</MenuItem>-->
<!--                        <MenuItem name="3-2">活跃分析</MenuItem>-->
<!--                        <MenuItem name="3-3">时段分析</MenuItem>-->
<!--                    </MenuGroup>-->
<!--                    <MenuGroup title="留存">-->
<!--                        <MenuItem name="3-4">用户留存</MenuItem>-->
<!--                        <MenuItem name="3-5">流失用户</MenuItem>-->
<!--                    </MenuGroup>-->
<!--                </Submenu>-->

<!--                  <Submenu name="4">-->
<!--                    <template slot="title">-->
<!--                        <Icon type="ios-stats" />-->
<!--                        统计分析-->
<!--                    </template>-->
<!--                    <MenuGroup title="使用">-->
<!--                        <MenuItem name="3-1">新增和启动</MenuItem>-->
<!--                        <MenuItem name="3-2">活跃分析</MenuItem>-->
<!--                        <MenuItem name="3-3">时段分析</MenuItem>-->
<!--                    </MenuGroup>-->
<!--                    <MenuGroup title="留存">-->
<!--                        <MenuItem name="3-4">用户留存</MenuItem>-->
<!--                        <MenuItem name="3-5">流失用户</MenuItem>-->
<!--                    </MenuGroup>-->
<!--                </Submenu>-->

<!--                   <MenuItem name="index" to="/" >-->
<!--                        <Icon type="ios-navigate"></Icon>-->
<!--                        关于我-->
<!--                    </MenuItem>-->





<!--            </Menu>-->
                 <Menu mode="horizontal" theme="dark" active-name="1">

                     <div class="layout-logo" style="">

                         <a href="/">
                             <span class="logo">小萨摩 ' Blog</span>
                         </a>

<!--                         <h1>logo</h1>-->

<!--                                                  <Avatar src="https://img2.woyaogexing.com/2019/08/14/e57b3c206b344e1480ece079efba4f3b!400x400.jpeg" size="large" shape="square"/>-->

                         <!--                         <img src="../../../public/favicon.ico" alt="">-->
                     </div>





<!--                     <MenuItem name="index" to="/" style="float: left">-->
<!--                         <Input search placeholder="Enter something..." style="background: #5b6270"/>-->
<!--                     </MenuItem>-->

                    <div class="layout-nav">
<!--                    <div style="float: right">-->




                        <MenuItem name="index" to="/" >
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>

                        <Submenu name="2" to="/">
                            <template slot="title">
                                <Icon type="ios-stats" />
                                Java
                            </template>
                            <MenuGroup title="jdk">
                                <MenuItem name="3-1">jvm</MenuItem>
                                <MenuItem name="3-2">容器 & 集合</MenuItem>
                                <MenuItem name="3-3">并发</MenuItem>
                                <MenuItem name="3-3">多线程</MenuItem>
                                <MenuItem name="3-3">同步锁</MenuItem>
                                <MenuItem name="3-3">线程池</MenuItem>
                                <MenuItem name="3-3">面试题</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="技术">
                                <MenuItem name="3-4">Spring家族</MenuItem>
                                <MenuItem name="3-4">Redis</MenuItem>
                                <MenuItem name="3-5">dubbo</MenuItem>
                                <MenuItem name="3-5">Zookeeper</MenuItem>
                                <MenuItem name="3-5">Netty</MenuItem>
                            </MenuGroup>
                        </Submenu>

                        <Submenu name="3" to="/">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                算法
                            </template>
<!--                            <MenuGroup title="编程语言">-->
                                <MenuItem name="3-1">数据结构</MenuItem>
<!--                                <MenuItem name="3-2">C++</MenuItem>-->
<!--                                <MenuItem name="3-3">python</MenuItem>-->
<!--                                <MenuItem name="3-3">go</MenuItem>-->
<!--                            </MenuGroup>-->
<!--                            <MenuGroup title="刷题">-->
                                <MenuItem name="3-4">leetcode</MenuItem>
<!--                                <MenuItem name="3-5">锁</MenuItem>-->
<!--                            </MenuGroup>-->
                        </Submenu>


                        <MenuItem name="4">
                            <div  @click="openDrawer  = true">
                                <Icon type="ios-paper"  ></Icon>
                                关于
                            </div>

                        </MenuItem>



                    </div>
                </Menu>
            </Header>
            <Layout :style="{margin: '80px auto', background: '#f5f7f9', minHeight: '500px',width:'80%'}">

               <router-view/>

            </Layout>

            <Footer class="layout-footer-center" :style="{background:'#fff'}">2019 &copy; Yuan Shijia
                <a style="display: block" href="http://www.beian.miit.gov.cn">湘ICP备19004532号-1</a>
            </Footer>
        </Layout>


        <Drawer title="关于我" :closable="false" v-model="openDrawer">
            <p>大三，正在准备秋招ing...</p>
<!--            <p>Some contents...</p>-->
<!--            <p>Some contents...</p>-->
        </Drawer>
    </div>

</template>

<script>
    export default {
        name: "main",
        components: {
            // 2.注册header
            // 'v-header': header
        },
        data () {
            return {
                movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: 'Schindler',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: [],
                switchValue: true,
                isCollapsed: false,
                // time: (new Date()).getTime() - 60 * 3 * 1000,
                tags: [],
                openDrawer: false // 打开关于

            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            // this.changeLimit();


        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 120px;
        height: 30px;
        background: #000;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        line-height: 30px;
        text-align: center;
    }
    .logo{
        /*line-height: 30px;*/
        border-radius: 3px;
        font-weight: 800;
        /*background: black;*/
        color: #fff;
        padding-bottom: 3px;
        padding-left: 5px;
        margin-right: 5px;
        padding-top: 1px;
    }

    .layout-nav{
        /*float: right;*/
        /*width: 50%;*/
        width: 450px;
        margin: 0 auto;
        /*margin-right: -190px;*/
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }

    .search{
        /*width: 500px;*/

        float: left;

        /*left: 50%;*/
        /*position: relative;*/
        /*top: 15px;*/
        /*left: 20px;*/


        /*height: 30px;*/
        /*background: #5b6270;*/
        /*border-radius: 3px;*/
    }
    #search{
        /*width: 500px;*/
    }
    .title{
        font-size: 22px;
    }
    .content{
        /*margin-top: 5px;*/
    }
    .content-tag{
        margin: 8px 0 0 0 ;
    }

    .time{
        margin: 5px 0;
    }




</style>
