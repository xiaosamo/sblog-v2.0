<template>

    <Row >
        <Col
                :xs="24" :sm="24" :md="18" :lg="18"
                span="18" :style="{ background: '#f5f7f9'}">
            <Card :style="{marginRight:'15px'}">
               <Content :style="{background: '#fff', minHeight: '500px'}">

                   <Breadcrumb :style="{margin: '0 0 15px 0' }">
                       <BreadcrumbItem to="/">首页</BreadcrumbItem>
                       <BreadcrumbItem>搜索</BreadcrumbItem>
                       <BreadcrumbItem>{{query}}</BreadcrumbItem>
                   </Breadcrumb>

                    <div style="min-height: 500px;">

                        <Card :bordered="true" :style="{marginBottom:'20px'}" v-for="article in articleList" :key="article.id"  >
                            <h2><a :href="'/article/' + article.id">{{article.title}}</a></h2>
                            <div class="time">
                                <Time :time="article.createTime" />
                            </div>
                            <!--                                        <p slot="title" class="title">文章1</p>-->
                            <p class="content" v-html="article.summary +'...'">
                            </p>

                            <div class="content-tag" >
                                <Tag
                                        class="tag"
                                        v-for="tag in handlerArticleTag(article.tags)"
                                        :style="getRandomColor()">

                                    <span style="color: #fff" @click="toTagLink(tag)">{{tag}}</span>
                                </Tag>
                            </div>



                        </Card>



                    </div>


                    <div v-if="total > 0">
                        <!--                    <div>-->
                        <Page :total="total" :page-size="5" @on-change="handleChangePage"/>
                    </div>

               </Content>

            </Card>

        </Col>

        <Col
                :xs="0" :sm="0" :md="6" :lg="6"
                span="6" :style="{ background: '#f5f7f9'}">
            <Sider  breakpoint="md" collapsible :collapsed-width="400" v-model="isCollapsed"
                    hide-trigger :style="{background: '#f5f7f9',margin: '0 auto', height: '100%',minWidth:'300px'}">

                <Card>
                    <div style="text-align:center">
                        <!--                        <img src="https://yuan-sblog.oss-cn-shenzhen.aliyuncs.com/img12.jpg">-->
                        <Avatar src="https://yuan-sblog.oss-cn-shenzhen.aliyuncs.com/img12.jpg" size="large" style="width: 150px;height: 150px" shape="circle"/>
                        <!--                        <Avatar src="<%= BASE_URL %> img.jpg" size="large"  shape="circle"/>-->

                        <h3 style="margin-top: 15px">小萨摩's Blog</h3>
                        <h4 style="margin-top: 5px">热爱coding的小后台一枚😄</h4>
                        <p></p>
                    </div>
                </Card>

                <Card style="margin-top: 20px">
                    <!--                    <MenuItem name="index" to="/" style="float: left">-->
                    <Input search v-model="query" placeholder="搜索..." width="auto" @on-search="handleSearch"/>

                </Card>




                <Card style="margin-top: 20px">
                    <p slot="title">
                        <!--                            <Icon type="ios-film-outline"></Icon>-->
                        文章分类
                    </p>

                    <CellGroup>
                        <Cell :title="category.name" v-for="(category,index) in categories" :key="category.id"
                              :extra="number[index]"
                        >
                            <a :href="'/categories/' + category.name">{{category.name}}</a>
                        </Cell>

                        <!--                        <Cell title="Display label content" label="label content" />-->

                    </CellGroup>
                </Card>


                <Card style="margin-top: 20px">
                    <p slot="title">
                        <!--                            <Icon type="ios-film-outline"></Icon>-->
                        访问最多的文章
                    </p>

                    <CellGroup>
                        <Cell :title="article.title" v-for="(article,index) in hotArticles" :key="article.id"
                              :extra="number[index]">
                            <a :href="'/article/' + article.id">{{article.title}}</a>
                        </Cell>
                        <!--                        <Cell title="Display label content" label="label content" />-->
                        <!--                        <Cell title="Display right content" extra="details" />-->
                        <!--                        <Cell title="Link" extra="details" to="/components/button" />-->
                        <!--                        <Cell title="Open link in new window" to="/components/button" target="_blank" />-->
                        <!--                        <Cell title="Disabled" disabled />-->
                        <!--                        <Cell title="Selected" selected />-->
                        <!--                        <Cell title="With Badge" to="/components/badge">-->
                        <!--                            <Badge :count="10" slot="extra" />-->
                        <!--                        </Cell>-->

                    </CellGroup>
                </Card>

                <Card style="margin-top: 20px">
                    <p slot="title">
                        <!--                            <Icon type="ios-film-outline"></Icon>-->
                        标签
                    </p>
                    <div>
                        <Tag class="tag" v-for="tag in tags"
                             :key="tag.id" :style="getRandomColor()">
                            <!--                            <a :href="'tags/' + tag.name">-->
                            <!--                            <router-link :to="'/tags/' + tag.name" style="color: #fff">{{tag.name}}</router-link>-->
                            <span style="color: #fff" @click="toTagLink(tag.name)">{{tag.name}}</span>
                            <!--                            </a>-->
                        </Tag>
                    </div>
                </Card>
            </Sider>
        </Col>

    </Row>

</template>

<script>
    import { getTags } from '@/api/tag'

    import { searchArticle,getArticleList,getHotArticle } from '@/api/article'
    import { getCategories } from '@/api/category'


    export default {
        name: "searchArticle",
        data () {
            return {
                articleList: [
                ],
                total:0,
                isCollapsed: false,
                pageNum :1,
                pageSize : 8,
                tags: [],
                tagName:'',

                hotArticles: [],
                categories: [],
                number: [18,4,1,2,3,1,1,1,11,1],
                query:''
            }
        },

        methods: {
            handleChangePage(page) {
                this.pageNum = page
                this.handlerSearchArticle()
                // this.scrollBehavior(0,0,0)
                window.scroll(0, 0);
            },
            handlerSearchArticle(){
                searchArticle(this.query,this.pageNum,this.pageSize).then(res => {
                    const { data } = res
                    console.log(data)
                    this.total = data.total
                    this.articleList = res.data.data
                    console.log(this.articleList)
                })
            },
            scrollBehavior (to, from, savedPosition) {
                return { x: 0, y: 0 }
            },
            handlerArticleTag(tags){
                if (tags.length > 0) {
                    var tagArray = tags.split(',');
                    return tagArray
                }
            },
            getRandomColor(){
                var randomColor = require('randomcolor'); // import the script
                var color = randomColor({
                    luminosity:'dark',    // 控制生成颜色的亮度。你可以指定一个包含字符串bright，light或dark。
                    // alpha:1
                }); // a hex code for an attractive color
                return {
                    background: color,
                    color: '#fff'
                };
            },
            toTagLink(name){
                window.location.href='/tags/' + name
            },
            handleSearch(){
                window.location.href='/search?query=' + this.query
            }
        },
        mounted() {
            this.query = this.$route.query.query

            this.handlerSearchArticle()

            getTags().then(res => {
                const { data } = res.data
                console.log(data)
                this.tags = data
                console.log(this.tags)

            })


            getHotArticle().then(res => {
                const { data } = res.data
                this.hotArticles = data
            })

            getCategories().then(res => {
                const { data } = res.data
                this.categories = data
            })
            
        },
        computed: {
        },
        created(){
        },
    }
</script>

<style scoped>

    .content{
        /*margin-top: 5px;*/
    }
    .content-tag{
        margin: 8px 0 0 0 ;
    }

    .time{
        margin: 5px 0;
    }

    [v-cloak] {
        display: none;
    }

    .tag{

        /*background: blue;*/
        width: auto;
        /*font-size: 14px;*/
        color:#fff;



        display: inline-block;
        height: 25px;
        line-height: 25px;
        margin: 2px 4px 2px 0;

        /*padding: 0 ;*/
        border: 1px solid #e8eaec;
        border-radius: 3px;
        font-size: 12px;
        vertical-align: middle;
        opacity: 1;
        overflow: hidden;
        /*cursor: pointer;*/

    }

    .tag a{
        color:#fff;
        height: 100%;
        width: 100%;
        /*background: red;*/
        /*text-align: center;*/
    }

    .ivu-tag-text{
    }

</style>
