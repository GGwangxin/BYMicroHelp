<style>
  .searchInput{
    width: 100%;
    height: 1.2rem;
    padding:0.14rem 0.3rem ;
    position: relative;
    line-height: 1rem;
    z-index: 3;
  }
  .searchInput input{
    width: 8.36rem;
    height: 0.92rem;
    outline: none;
    border: none;
    background: #fff;
    float: left;
    position: relative;
    z-index: 2;
  }
  .searchInput>span{
    float: left;
    width: 0.92rem;
    height: 0.92rem;
    border-radius: 0.92rem;
    position: relative;
    background: #fff;
    z-index: 1;

  }
  .searchInput .searchInput_left{
    right: -0.46rem;
  }
  .searchInput .searchInput_right{
    left: -0.46rem;
  }
  .searchInput .tishi{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 9.48rem;
    text-align: center;
    color: #999999;
    font-size: 0.38rem;
    z-index: 3;
  }
  .searchInput_clear{
    position: absolute;
    height: 0.92rem;
    /*width: 0.72rem;*/
    right: 1.1rem;
    top: 0.14rem;
    line-height: 0.92rem;
    font-size: 0.38rem;
    color: #999999;
    z-index: 3;
  }
  .searchInput_clear span{
    height: 0.92rem;
    line-height: 0.92rem;
    display: inline-block;
  }
</style>

<template>
    <div class="searchInput">
        <span class="searchInput_left"></span>
        <input type="text"
               ref="inputModel"
               v-model="currentValue"
               v-bind:placeholder="placeholder"
               @keypress="keyPress"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
        />
        <span class="searchInput_right"></span>
        <b class="iconfont tishi icon-sousuo" @click="getFocus" v-show="!tishi" style="font-weight: normal">
            <span style="font-family: 'Microsoft YaHei'" v-if="!searchBtn">搜索</span>
        </b>

        <div class="searchInput_clear " >
          <span class="iconfont icon-guanbi" v-show="tishi" @click="clear"></span>
          <span style="color:@base" v-if="searchBtn" @click="doSearch">搜索</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        props: {
            value:String|Number,
            searchBtn:{
              type: Boolean,
              default: false
            },
            onSearch:{
                type:Function|Boolean,
                default: false
            },
            placeholder:{
              type:String,
              default: '搜索'
            },
        },
        data(){
            return {
              currentValue:this.value,

            }
        },
        computed: {
          tishi(){
              return this.currentValue? true : false;
          }
        },
        methods: {
          handleBlur(event) {


          },
          handleFocus(event) {

          },
          handleInput(event) {

          },
          getFocus(){
              this.$refs.inputModel.focus();
          },
          clear(){
              this.currentValue='';
          },
          doSearch(){
              if(typeof this.onSearch=='function'){
                this.onSearch();
              }
          },
          keyPress(e){
            var key = e.keyCode;
            if (key == 13){
                this.doSearch();
            }
          }

        },
        components: {},
        watch: {
          currentValue(){
            this.$emit('input', this.currentValue);
          }
        },
        beforeCreated(){

        },
        mounted(){
        },
        created(){
        },
    }
</script>
