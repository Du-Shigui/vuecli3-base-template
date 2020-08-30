<template>
    <div class="news">
        <b-container>
            <b-row sm="3">
                <b-col sm="3"
                    class="d-sm-none d-md-block">
                    <div class="left-nav">
                        <p v-for="(item,indexNav) in navArr"
                            :key="indexNav"
                            :class="item.select?'active':''">{{item.nav}}</p>
                        <p></p>
                    </div>
                </b-col>
                <b-col sm="12"
                    md="9"
                    class="">
                    <div class="right-list">
                        <div class="right-list-item"
                            v-for="(item,index) in newsArr"
                            :key="index">
                            <b-row>
                                <b-col class="col-4 item-img"
                                    :style="{ 'background': `center / cover no-repeat url('${item.src}')` }">
                                </b-col>
                                <b-col class="col-8">
                                    <div class="item-title">{{item.title}}</div>
                                    <div class="item-sec">请注意,从技术上讲,<img> 标签并不会在网页中插入图像,而是从网页上链接图像。<img> 标签创建的是被引用图像的占位空间。 <img> 标签有两个必需的属性:src ...Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam, officia nam harum eum iusto inventore illum iure odio maiores, dolor odit quae ullam aspernatur architecto, natus assumenda. Nulla numquam esse dignissimos hic, tenetur tempore illum. Saepe doloribus molestias illo iste dolorem, sequi porro tenetur earum eum placeat praesentium fuga dolor aliquid ipsa quam necessitatibus facere aspernatur impedit et. Et maiores eius cum perferendis! Quo facilis architecto sint totam voluptatem modi voluptatum reiciendis earum quos esse aliquid illum dicta omnis nobis voluptates deserunt itaque quaerat, voluptate, autem neque. Exercitationem modi a eaque reiciendis. Accusantium a voluptatibus commodi excepturi repellendus sapiente?</div>
                                    <div class="item-time">{{item.time}} </div>
                                </b-col>
                            </b-row>
                        </div>
                        <!-- 分页 -->
                        <b-row class="news-pagination justify-content-center">
                            <b-pagination v-model="page.currentPage"
                                :total-rows="page.rows"
                                :per-page="page.perPage"
                                size="Default"
                                first-number
                                last-number></b-pagination>
                        </b-row>
                    </div>
                </b-col>

            </b-row>

        </b-container>
    </div>
</template>

<script>
export default {
    name: 'News',
    data () {
        return {
            navArr: [
                {
                    nav: '客户案例',
                    select: false
                },
                {
                    nav: '行业资讯',
                    select: true
                }
            ],
            newsArr: [{
                src: 'https://pic.cwyyt.cn/upload/yyticons/170123123_zzy-eg-banner.png',
                title: '武汉双湖园',
                time: '2020-11-20'
            }, {
                src: 'https://pic.cwyyt.cn/upload/yyticons/140730730_zzy-bg-优惠券.png',
                title: '武汉双湖园',
                time: '2020-11-20'
            }, {
                src: 'https://pic.cwyyt.cn/upload/yyticons/1730293029_huiyunak@2x.png',
                title: '武汉双湖园',
                time: '2020-11-20'
            }],
            page: {//分页数据相关
                currentPage: 1,//选中第几页
                rows: 100,//总页数
                perPage: 1
            }
        }
    }
}
</script>

<style scoped lang="scss">
.news {
    background: #f9f9f9;
    padding-top: 30px;
    .left-nav {
        background: #fff;
        padding: 30px 15px;
        min-height: 300px;
        p {
            line-height: 39px;
            color: #333;
            font-size: 20px;
            text-align: center;
            background: #f1f3f5;
        }
        p.active {
            background: #0183ff;
            color: #fff;
        }
    }
    .right-list {
        background: #fff;
        padding: 30px 36px 30px 30px;

        .right-list-item {
            margin-bottom: 30px;
            .item-img {
                width: 280px;
                height: 140px;
            }
            .item-title {
                font-size: 18px;
                line-height: 28px;
                font-weight: bold;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .item-sec,
            .item-time {
                font-size: 16px;
                color: #656565;
                line-height: 1.7;
            }
            .item-sec {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3; //行数
                overflow: hidden;
            }
            .item-time {
                margin-top: 8px;
            }
        }

        .news-pagination {
            margin: 60px 0 40px;
        }
    }
}
</style>