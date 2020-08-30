<template>
    <div class="marketing">
        <div class="position-relative">
            <b-img :src="$appConfig.picdomain + '/upload//20200826/1342144214_组 16@2x.png'"
                fluid-grow></b-img>
            <div class="title position-absolute">营销管理</div>
        </div>
        <!-- 会员管理 -->
        <!-- <mid-container :cardData="mid1Card"></mid-container> -->
        <b-container style="padding-bottom:80px;">
            <card-list :titleObj="titleObj1"
                :cardList="cardList1"></card-list>
        </b-container>
        <div class="position-relative conps">
            <!-- <b-img :src="$appConfig.picdomain + '/upload//20200827/13070474_组 16@2x(1).png'"
                fluid-grow></b-img> -->
            <sup-title class=""
                :title="conpsTitleObj.title"
                :subTitle="conpsTitleObj.subTitle"
                :light="conpsTitleObj.light"></sup-title>
        </div>
        <b-container>
            <card-list :titleObj="titleObj2"
                :cardList="cardList2"></card-list>
        </b-container>
        <b-container style="padding-bottom:100px">
            <card-list :titleObj="titleObj3"
                :cardList="cardList3"></card-list>
        </b-container>
    </div>
</template>

<script>
import supTitle from 'components/common/supTitle';
import CardList from 'components/common/CardList';



export default {
    name: 'Marketing',
    data () {
        return {
            titleObj1: {
                title: '会员管理',
                desc: '新老会员精准营销，精细化管理，实现门店高效转化',
            },
            cardList1: [
                {
                    icon: 'icon-chanpin04-huiyuandengji',
                    title: '会员等级',
                    desc: '会员分级分层，精细化管理'
                }, {
                    icon: 'icon-chanpin04-huiyuanjifen',
                    title: '会员积分',
                    desc: '积分抵扣消费，节约打折成本'
                }, {
                    icon: 'icon-chanpin04-huiyuanchuzhi',
                    title: '会员储值',
                    desc: '提高会员粘性，消费频次，回头率'
                }
            ],
            conpsTitleObj: {
                title: '优惠券',
                subTitle: '多种优惠券，拉新引流，提高复购',
                light: true
            },
            titleObj2: {
                title: '分销',
                desc: '分销体系设置，建立门店自动化销售渠道',
            },
            cardList2: [
                {
                    icon: 'icon-chanpin04-duozhongfenxiaoleibie',
                    title: '',
                    desc: '多种分销类别,会员卡，优惠券、 线上商城团长分销、 宴会分销'
                }, {
                    icon: 'icon-chanpin04-wanshandefenxiaojizhi',
                    title: '',
                    desc: '完善的分销机制，实现分 享购买返现有效管理'
                }, {
                    icon: 'icon-chanpin04-fenxiaolujingshuju',
                    title: '',
                    desc: 'icon-chanpin04-wanshandefenxiaojizhi'
                }
            ],
            titleObj3: {
                title: '秒杀活动',
                desc: '提高营销氛围，吸引新老客户购买，提高转化率',
            },
            cardList3: [
                {
                    icon: 'icon-chanpin04-zhichiduozhongmiaosha',
                    title: '',
                    desc: '支持多种秒杀商品，会员优惠券'
                }, {
                    icon: 'icon-chanpin04-zidingyimiaoshaguize',
                    title: '会员积分',
                    desc: '自定义秒杀规则，应对多场景'
                }, {
                    icon: 'icon-chanpin04-miaoshashijian',
                    title: '会员储值',
                    desc: '秒杀时间库存灵活管理，有效 控制超购'
                }
            ],
        }
    },
    components: {
        CardList, supTitle
    }
}
</script>

<style lang="scss" scpoed>
.marketing {
    background: #f7f7f7;
}
.title {
    font-size: 65px;
    font-family: "SourceHanSansSC-Regular";
    text-shadow: rgba(0, 0, 0, 0.1) 7px 7px 7px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.conps {
    background: center / cover no-repeat
        url("https://pic.cwyyt.cn/upload//20200827/13070474_组 16@2x(1).png");
    padding: 2% 0 20%;
}
</style>