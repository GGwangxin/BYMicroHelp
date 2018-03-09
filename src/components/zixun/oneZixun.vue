
<style scoped lang="less">
  .chart-list {
    position: relative;
    padding: 15px 0;
    margin: 0 15px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    display: block;
  }
   .chart-list .chart-list-title {
    font-size: 15px;
    line-height: 0;
    display: block;
  }
  .chart-list .chart-list-title b {
    color: @base;
    font-weight: 400;
    width: 72px;
  }
  .chart-list .chart-list-title p {
    display: inline-block;
    line-height: 18px;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    width: 70%;
  }
   .chart-list .chart-list-data {
    margin-top: .3rem;
    display: block;
    font-size: 11px;
     overflow: hidden;
  }
   .chart-list .chart-list-data .list-data-time {
    float: right;
    color: #999;
     font-size:11px ;
  }
  .chart-list em{
    float: left;
    color: @base;
    height: 11px;
    line-height: 11px;
  }
</style>

<template>
    <div class="chart-list">
        <span class="chart-list-title">
              <b>[楼市焦点]</b>
              <p>一文告诉你，信阳哪个楼盘的土豪最多</p>
        </span>
        <span class="chart-list-data">
            <em class="iconfont icon-yanjing"></em>
            <em style="margin-left: 0.1rem">11</em>
            <p class="list-data-time">2018-01-19</p>
        </span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
        return {

        }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>
