<template>
  <div class="news">
    <b-container>
      <b-row sm="3">
        <b-col sm="12" md="3" class="">
          <div class="left-nav">
            <p
              v-for="(item, indexNav) in navArr"
              :key="indexNav"
              :class="navSelect == item.id ? 'active' : ''"
              @click="navSelect = item.id"
            >
              {{ item.nav }}
            </p>
          </div>
        </b-col>
        <b-col sm="12" md="9" class="">
          <div class="right-list">
            <div
              id="news-list"
              class="right-list-item"
              v-for="(item, index) in newsArr"
              :key="index"
            >
              <b-link href="#" to="./NewsInfo">
                <b-row>
                  <b-col
                    class="col-4 item-img"
                    :style="{
                      background: `center / cover no-repeat url('${item.src}')`,
                    }"
                  >
                  </b-col>
                  <b-col class="col-8">
                    <div class="item-title">{{ item.title }}</div>
                    <div class="item-sec">
                      传统的餐饮消费，商家与顾客间没有建立紧密联系和有效触达，商家想要拉新，更多只能通过第三方平台开展拼团、促销等活动。餐饮企业数字化、智能化的升级，需要建立数字化会员管理体系，通过数字工具连接消费者，将门店的客流转化成为商家的会员。
                    </div>
                    <div class="item-time">{{ item.time }}</div>
                  </b-col>
                </b-row>
              </b-link>
            </div>
            <!-- 分页 -->
            <b-row class="news-pagination justify-content-center">
              <b-pagination
                v-model="page.currentPage"
                :total-rows="page.rows"
                :per-page="page.perPage"
                aria-controls="news-list"
              ></b-pagination>
              <!-- <b-pagination v-model="page.currentPage"
                                :total-rows="page.rows"
                                :per-page="page.perPage"
                                size="Default"
                                first-number
                                last-number></b-pagination> -->
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
  data() {
    return {
      navSelect: '002', //左侧选中的目录
      navArr: [
        // {
        //   nav: '客户案例',
        //   select: false,
        //   id: '001',
        // },
        {
          nav: '行业资讯',
          select: true,
          id: '002',
        },
      ],
      newsArr: [
        {
          src: 'https://pic.cwyyt.cn/upload/20200901/150932932_640.jpg',
          title: '客户管理 |玩转餐饮会员营销，让老客户重复消费的秘诀',
          time: '2020-06-30',
        },
      ],
      page: {
        //分页数据相关
        currentPage: 1, //选中第几页
        rows: 1, //总页数
        perPage: 0,
      },
    }
  },
  methods: {},
  watch: {
    navSelect: {
      handler(val, old) {
        console.log(val)
      },
    },
    'page.currentPage': {
      handler(val, old) {
        console.log('页码', val)
      },
    },
  },
}
</script>

<style scoped lang="scss">
.news {
  background: #f9f9f9;
  padding-top: 30px;
  .left-nav {
    background: #fff;
    padding: 30px 15px;
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
