<template>
    <Row v-cloak>
        <Col
                :xs="24" :sm="24" :md="18" :lg="18"
                span="18" :style="{ background: '#f5f7f9'}" >

            <Card :style="{marginRight: '15px',background: '#fff',padding: '0 0'}" class="content-card">
                <Content :style="{ background: '#fff', minHeight: '500px',margin: '0 0'}">
                    <Breadcrumb :style="{margin: '0' }">
                        <BreadcrumbItem to="/">首页</BreadcrumbItem>
                        <BreadcrumbItem>文章</BreadcrumbItem>
                        <BreadcrumbItem>{{article.title}}</BreadcrumbItem>
                    </Breadcrumb>

                    <div style="min-height: 200px;">

                        <Card :bordered="false" :dis-hover="true" :style="{marginBottom:'10px'}">
<!--                            <h2><a>{{article.title}}</a></h2>-->
                            <h2 slot="title"><a>{{article.title}}</a></h2>
                            <div class="time">
                                <Time :time="time" type="datetime"/>
                            </div>
                            <!--
                                                          <p slot="title" class="title">文章1</p>-->
                            <!--                            <div class="hljs" v-html="content">-->
                            <!--                            </div>-->

                            <div class="ql-container ql-snow">


                                <div class="ql-editor" style="padding: 5px 0;" >


                                    
                                    <!--                                    <div v-html="article.content"></div>-->
<!--                                    <div v-html="article.content">-->

<!--                                    </div>-->


                                    <!-- 图片查看库 -->
                                    <!-- 只需要将v-viewer指令添加到任意元素即可，该元素下的所有img元素都会被viewer自动处理。 -->
                                        <div v-html="article.content"
                                             v-viewer="{movable:true}"
                                             v-viewer.static="{inline: false}"
                                        >
                                        </div>

<!--                                    <button type="button" @click="showImg">Show</button>-->

                                </div>
                            </div>

                            <div class="content-tag">
                                <Tag
                                        class="tag"
                                        v-for="tag in handlerArticleTag(article.tags)"
                                        :style="getRandomColor()">

                                    <span style="color: #fff" @click="toTagLink(tag)">{{tag}}</span>
                                </Tag>
                            </div>

<!--                            <div>-->
<!--                                <Rate v-model="value" />-->
<!--                            </div>-->
                        </Card>


                        <Form :model="formItem" :label-width="60">
                            <FormItem label="评论">
                                <Input v-model="commentRequest.content" type="textarea" :autosize="{minRows: 3,maxRows: 10}" placeholder="Enter something..." ></Input>
                            </FormItem>
                              <FormItem style="float: left">
                                  <Input  placeholder="您的昵称" v-model="commentRequest.name" style="width: auto" size="large"/>
                                  <Input  placeholder="邮箱" v-model="commentRequest.email" style="width: auto;margin-left:40px" size="large"/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" style="float: right" @click=handleAddComment>提交</Button>
                            </FormItem>
                        </Form> 

                        <Card :bordered="true" dis-hover v-if="comments != null && comments.length>0">

                            <p solt="title">{{comments.length}}条评论</p>

                            <ul>
                                <li>
                                     <Card :bordered="false" dis-hover v-for="comment in comments" :key="comment.id" style="padding-top:0">
                                          <Avatar  :src="comment.avatar"  icon="ios-person" size="large"/>
                                          <span style="margin:10px">{{comment.name}}</span>
                                            <Time :time="comment.createTime" style="margin:0 10px;float:right"/>
                                               <!-- <span >{{comment.createTime}}</span> -->
                                          <p style="margin:0 0 0 50px">{{comment.content}}</p>

                                    </Card>
                                </li>

                            </ul>


                        </Card>  
                        <Card dis-hover v-else>
                            <p solt="title">
                                还没有评论哦，快来占前排吧~
                            </p>
                        </Card>

                    </div>

                </Content>
            </Card>

        </Col>
        <Col
                :xs="0" :sm="0" :md="6" :lg="6"
                span="6" :style="{ background: '#fff'}">

            <Sider  breakpoint="md" collapsible :collapsed-width="400" v-model="isCollapsed"
                    hide-trigger :style="{background: '#fff',margin: '0 auto', height: '100%',minWidth:'300px'}">

                <Card>
                    <h3>相关文章</h3>
                    <p><a href="">心无杂念士大夫但是</a></p>
                    <p><a href="">心无杂念士大夫但是</a></p>
                    <p><a href="">心无杂念士大夫但是</a></p>
                    <p><a href="">心无杂念士sdf</a></p>

                </Card>

            </Sider>
        </Col>


    </Row>

</template>

<script>

    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'

    import hljs from 'highlight.js'
    import 'highlight.js/styles/monokai-sublime.css'

    import 'viewerjs/dist/viewer.css'


    import { getArticleById } from '@/api/article'
    import { addComment,getArticleComment } from '@/api/comment'
    export default {
        name: "detail2",
        components: {
            quillEditor
        },
        data () {
            return {
                time: (new Date()).getTime() - 60 * 3 * 1000,
                commentRequest: {},
                comments: [], // 评论
                isCollapsed: false,
                articleId: '',
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                article : {},
                content: '',
                value: 0,
                images: [] // 图片列表

            }
        },
        methods: {
            onEditorBlur(editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            handleSpinShow () {
                this.$Spin.show();
                // setTimeout(() => {

                // }, 10000);
            },
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handlerArticleTag(tags){

                if (tags != null && tags.length > 0) {
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
            handleGetComment(){
                 getArticleComment(this.articleId).then(res => {
                    this.comments=res.data.data
            })
            },
            handleAddComment(){
                this.commentRequest.articleId = this.articleId
                addComment(this.commentRequest).then(res => {
                    const { data } = res
                    console.log(data)
                    if (res.data.success){
                        this.$Message.success('评论成功');
                        // 重现获取评论
                        this.handleGetComment()
                        this.commentRequest = {}
                    }
                    // this.article = res.data.data
                    // console.log(this.article)
                    // this.time = this.article.createTime
            })
            },
             toTagLink(name){
                window.location.href='/tags/' + name
            },
            // 显示图片
            showImg () {
                const viewer = this.$el.querySelector('.images').$viewer
                viewer.show()
        }
        },
        mounted() {

            // this.$Spin.show();
            // this.handleSpinShow()
            this.articleId = this.$route.params.id
            getArticleById(this.articleId).then(res => {
                const { data } = res
                console.log(data)
                this.article = res.data.data
                console.log(this.article)
                this.time = this.article.createTime
                this.comments = this.article.comments
                // this.$Spin.hide();
            })


        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quill
            },
            contentCode() {
                return hljs.highlightAuto(this.content).value
            }
        },
        created() {
            // getArticleById(this.articleId).then(res => {
            //     const { data } = res
            //     console.log(data)
            //     this.article = res.data.data
            //     console.log(this.article)
            //
            // })
        }

     
    }
</script>


<style scoped>
    .content-tag{
        margin: 20px 0 0 0 ;
    }
    .time{
        margin: 10px 0;
    }
    .ql-container{
        border: none;
        padding: 0 0 ;
    }

    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }


    [v-cloak] {
        display: none !important;
    }
    .content-card{
      /*font-size: 26px !important;*/
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
    ul li{
        list-style:none;
    }
    .ql-editor p{
        /*line-height: 1.55;*/
    }




</style>
