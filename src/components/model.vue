<template>
<!--    <div id="app">-->
<!--        &lt;!&ndash;导航条&ndash;&gt;-->
<!--        <v-header></v-header>-->

<!--        -->
<!--    </div>-->
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',zIndex:'999'}"
                    breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
            
<!--            <Header :style="{width: '100%'}">-->
                <Menu mode="horizontal" theme="dark" active-name="1">


                    <div class="layout-logo">logo</div>

<!--                    <div class="search">-->
<!--                        <Input id="search" search placeholder="Enter something..." :style="{width: '100px'}"/>-->

<!--                    </div>-->

<!--                    <div class="">&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;-->
<!--                        <span class="" style="display: none;"></span>-->
<!--                        <input type="text" placeholder="搜索组件..." autocomplete="off" spellcheck="false" class="ivu-select-input"> &lt;!&ndash;&ndash;&gt;-->
<!--                        <i class="ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow"></i>-->
<!--                    </div>-->



                    <!--                    <div >-->
<!--                    </div>-->



                    <div class="layout-nav">


                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>

                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-stats" />
                                Java
                            </template>
                            <MenuGroup title="基础">
                                <MenuItem name="3-1">语法</MenuItem>
                                <MenuItem name="3-2">循环</MenuItem>
                                <MenuItem name="3-3">对象</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="进阶">
                                <MenuItem name="3-4">并发</MenuItem>
                                <MenuItem name="3-5">锁</MenuItem>
                            </MenuGroup>
                        </Submenu>

<!--                        <MenuItem name="2">-->
<!--                            <Icon type="ios-keypad"></Icon>-->
<!--                            Java-->
<!--                        </MenuItem>-->
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            框架
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Go
                        </MenuItem>

<!--                        <MenuItem name="5">-->
<!--                            <Icon type="ios-paper"></Icon>-->
<!--                            关于-->
<!--                        </MenuItem>-->


                    </div>
                </Menu>
            </Header>
            <Layout :style="{margin: '80px auto', background: 'blue', minHeight: '500px',maxWidth:'80%'}">


                <Row>
                    <Col
                            :xs="24" :sm="18" :md="18" :lg="18"
                            span="18" :style="{ background: 'yellow'}" >

                        col-18 | push-6
                        <Content :style="{margin: '0 15px 0', background: 'blue', minHeight: '500px'}">
                            <!--                        <Breadcrumb :style="{margin: '20px 0'}">-->
                            <!--                            <BreadcrumbItem>Home</BreadcrumbItem>-->
                            <!--                            <BreadcrumbItem>Components</BreadcrumbItem>-->
                            <!--                            <BreadcrumbItem>Layout</BreadcrumbItem>-->
                            <!--                        </Breadcrumb>-->

                            <Card>
                                <div style="min-height: 200px;">

                                    <Card :bordered="true" :style="{marginBottom:'10px'}">
                                        <h2>花了一个星期，我终于把RPC框架整明白了！</h2>
                                        <div class="time">
                                            <Time :time="time" />
                                        </div>
<!--                                        <p slot="title" class="title">文章1</p>-->
                                        <p class="content">Content of no border type. Content of no border type. Content of no border type. Content of no border type.
                                            Content of no border type. Content of no border type. Content of no border type. Content of no border type.
                                            Content of no border type. Content of no border type. Content of no border type. Content of no border type.
                                            Content of no border type. Content of no border type. Content of no border type. Content of no border type.
                                        </p>

                                        <div class="content-tag">
                                            <Tag color="warning">dubbo</Tag>
                                            <Tag color="success">docker</Tag>
                                        </div>


                                    </Card>

                                    <Card :bordered="true" :style="{marginBottom:'10px'}">

                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>

                                    <Card :bordered="true" :style="{marginBottom:'10px'}">


                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>

                                    <Card :bordered="true" :style="{marginBottom:'10px'}">


                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>


                                    <Card :bordered="true" :style="{marginBottom:'10px'}">


                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>
                                    <Card :bordered="true" :style="{marginBottom:'10px'}">


                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>
                                    <Card :bordered="true" :style="{marginBottom:'10px'}">


                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>
                                    <Card :bordered="true" :style="{marginBottom:'10px'}">


                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>
                                    <Card :bordered="true" :style="{marginBottom:'10px'}">


                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>

                                </div>


                                <div>
                                    <Page :total="100"  show-elevator />
                                </div>
                            </Card>




                        </Content>

                    </Col>
                    <Col
                            :xs="0" :sm="6" :md="6" :lg="6"
                            span="6" :style="{ background: 'green'}">
                        
                        col-6 | pull-18
                        <Sider  breakpoint="md" collapsible :collapsed-width="400" v-model="isCollapsed"
                                hide-trigger :style="{background: 'red',margin: '0 auto', height: '100%',minWidth:'300px'}">

                            <Card>
                                <div style="text-align:center">
                                    <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
                                    <h3>Yuan ShiJia</h3>
                                    <h4>热爱coding的小后台一枚😄</h4>
                                    <p></p>
                                </div>
                            </Card>



                            <Card style="margin-top: 20px">
                                <p slot="title">
                                    <!--                            <Icon type="ios-film-outline"></Icon>-->
                                    访问最多的文章
                                </p>

                                <CellGroup>
                                    <Cell title="Only show titles" />
                                    <Cell title="Display label content" label="label content" />
                                    <Cell title="Display right content" extra="details" />
                                    <Cell title="Link" extra="details" to="/components/button" />
                                    <Cell title="Open link in new window" to="/components/button" target="_blank" />
                                    <Cell title="Disabled" disabled />
                                    <Cell title="Selected" selected />
                                    <Cell title="With Badge" to="/components/badge">
                                        <Badge :count="10" slot="extra" />
                                    </Cell>
                                    <Cell title="With Switch">
                                        <Switch v-model="switchValue" slot="extra" />
                                    </Cell>
                                </CellGroup>
                            </Card>

                            <Card style="margin-top: 20px">
                                <p slot="title">
                                    <!--                            <Icon type="ios-film-outline"></Icon>-->
                                    标签
                                </p>
                                <div>

                                    <Tag color="default">default</Tag>
                                    <Tag color="primary">primary</Tag>
                                    <Tag color="success">success</Tag>
                                    <Tag color="error">error</Tag>
                                    <Tag color="warning">warning</Tag>
                                    <Tag color="magenta">magenta</Tag>
                                    <Tag color="red">red</Tag>
                                    <Tag color="volcano">volcano</Tag>
                                    <Tag color="orange">orange</Tag>
                                    <Tag color="gold">gold</Tag>
                                    <Tag color="yellow">yellow</Tag>
                                    <Tag color="lime">lime</Tag>
                                    <Tag color="green">green</Tag>
                                    <Tag color="cyan">cyan</Tag>
                                    <Tag color="blue">blue</Tag>
                                    <Tag color="geekblue">geekblue</Tag>
                                    <Tag color="purple">purple</Tag>
                                    <Tag color="#FFA2D3">Custom Color</Tag>
                                    <br><br>
                                    <Tag type="border" closable color="primary">标签一</Tag>
                                    <Tag type="border" closable color="success">标签二</Tag>
                                    <Tag type="border" closable color="error">标签三</Tag>
                                    <Tag type="border" closable color="warning">标签四</Tag>
                                    <br><br>
                                    <Tag type="dot" closable color="primary">标签一</Tag>
                                    <Tag type="dot" closable color="success">标签二</Tag>
                                    <Tag type="dot" closable color="error">标签三</Tag>
                                    <Tag type="dot" closable color="warning">标签四</Tag>

                                </div>
                            </Card>


                            <!--&lt;!&ndash;                <Sider :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">&ndash;&gt;-->

                            <!--                    <Card style="width:350px">-->
                            <!--                        <p slot="title">-->
                            <!--                            <Icon type="ios-film-outline"></Icon>-->
                            <!--                            Classic film-->
                            <!--                        </p>-->
                            <!--                        <a href="#" slot="extra" @click.prevent="changeLimit">-->
                            <!--                            <Icon type="ios-loop-strong"></Icon>-->
                            <!--                            Change-->
                            <!--                        </a>-->
                            <!--                        <ul>-->
                            <!--                            <li v-for="item in randomMovieList">-->
                            <!--                                <a :href="item.url" target="_blank">{{ item.name }}</a>-->
                            <!--                                <span>-->
                            <!--                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>-->
                            <!--                    {{ item.rate }}-->
                            <!--                </span>-->
                            <!--                            </li>-->
                            <!--                        </ul>-->
                            <!--                    </Card>-->
                            <!--&lt;!&ndash;                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">&ndash;&gt;-->
                            <!--&lt;!&ndash;                        &ndash;&gt;-->
                            <!--&lt;!&ndash;                    </Menu>&ndash;&gt;-->
                        </Sider>
                    </Col>
                </Row>
                






            </Layout>

            <Footer class="layout-footer-center" :style="{background:'green'}">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
    // import header from '@/components/header/header'

    export default {
        name: "index",
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
                time: (new Date()).getTime() - 60 * 3 * 1000

            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index3]);
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
            this.changeLimit();
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
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        /*text-align: center;*/
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
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