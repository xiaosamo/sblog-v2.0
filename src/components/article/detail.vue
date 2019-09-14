<template>
    <Row>
        <Col
                :xs="24" :sm="24" :md="18" :lg="18"
                span="18" :style="{ background: 'yellow'}" >

            col-18 | push-6
            <Content :style="{margin: '0 15px 0', background: 'blue', minHeight: '500px'}">
                                        <Breadcrumb :style="{margin: '10px 0'}">
                                            <BreadcrumbItem>Home</BreadcrumbItem>
                                            <BreadcrumbItem>Components</BreadcrumbItem>
                                            <BreadcrumbItem>Layout</BreadcrumbItem>
                                        </Breadcrumb>

                <Card>
                    <div style="min-height: 200px;">

                        <Card :bordered="true" :style="{marginBottom:'10px'}">
<!--                            <h2 v-model="article.title">花了一个星期，我终于把RPC框架整明白了！</h2>-->
                            <h2>{{article.title}}</h2>
                            <div class="time">
                                <Time :time="time" />
                            </div>
                            <!--

                                                          <p slot="title" class="title">文章1</p>-->
                            <div v-html="article.content">
                            </div>


                            <div class="content-tag">
                                <Tag color="warning">dubbo</Tag>
                                <Tag color="success">docker</Tag>
                            </div>

                        </Card>


                        <Form :model="formItem" :label-width="60">
                            <FormItem label="评论">
                                <Input v-model="comment" type="textarea" :autosize="{minRows: 3,maxRows: 10}" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" style="float: right">提交</Button>
                            </FormItem>
                        </Form>


                        


                    </div>

                </Card>


            </Content>


        </Col>
        <Col
                :xs="0" :sm="0" :md="6" :lg="6"
                span="6" :style="{ background: 'green'}">

            col-6 | pull-18
            <Sider  breakpoint="md" collapsible :collapsed-width="400" v-model="isCollapsed"
                    hide-trigger :style="{background: 'red',margin: '0 auto', height: '100%',minWidth:'300px'}">

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

    // // require styles
    // import 'quill/dist/quill.core.css'
    // import 'quill/dist/quill.snow.css'
    // import 'quill/dist/quill.bubble.css'
    //
    // import { quillEditor } from 'vue-quill-editor'


    import { getArticleById } from '@/api/article'

    export default {
        name: "detail",
        components: {
            // quillEditor
        },
        data () {
            return {
                time: (new Date()).getTime() - 60 * 3 * 1000,
                comment: '',
                isCollapsed: false,
                articleId: 'e43f591c702e0',
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
                article : {}
            }
        },
        method: {
        },
        created: function () {
            getArticleById(this.articleId).then(res => {
                const { data } = res
                console.log(data)
                this.article = res.data.data
                console.log(this.article)

                // if (res.success){
                //     this.article = res.data
                // }
            })
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
</style>
