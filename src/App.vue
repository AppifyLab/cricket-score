<template>
  <div>
    <div class="_tv_scr_all">
    <div class="_tv_score">
        <!-- left -->
        <div class="_tv_score_lft">
          <h2 class="_tv_tem_nam">
            Australia
          </h2>
        </div>
          <!-- left -->

        <!-- mdl -->
        <div class="_tv_score_mdl">
          <div class="_tv_score_mdl1">
            <div class="_tv_score_mdl1_inr">
              <ul class="_tv_score_mdl1_ul">
                <li v-if="data.batsman" v-for="(item,index) in data.batsman" :key="index">
                  <h2 class="_tv_score_plyr_nm _tv_score_plyr_actv">
                   {{item.batter_name}}
                  </h2>
                  <p class="_tv_score_num">
                    {{item.runs_achieved}}
                    <span class="_tv_score_ball">
                      {{item.balls_faced}}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="_tv_score_mdl2">
            <div class="_tv_score_mdl2_inr">
              <div class="_tv_score_mdl2_top">
                <p class="_tv_score_cntry1">
                  pak
                  <span>v</span>
                </p>
                <p class="_tv_score_cntry2">
                  aus
                </p>
                <p class="_tv_score_cntry_scre">
                  247 - 4
                </p>
                <p class="_tv_score_pwrply">
                  P2
                </p>
                <p class="_tv_score_ovr">
                  39.2
                </p>
              </div>

              <div class="_tv_score_mdl2_btm">
                <p class="_tv_score_rate">
                  90.65
                </p>
              </div>
            </div>
          </div>
          <div class="_tv_score_mdl3">
            <div class="_tv_score_mdl3_inr">
              <ul class="_tv_score_mdl1_ul">
                <li>
                  <h2 class="_tv_score_plyr_nm">
                    <template v-if="data.bowler">{{data.bowler.bowler_name}}</template>
                  </h2>
                  <p class="_tv_score_num">
                    2-61
                    <span class="_tv_score_ball">
                      9.1
                    </span>
                  </p>
                </li>
                <li class="_scre_crcle">
                  <p class="_tv_score_crcl _active">
                    <span></span>
                  </p>
                  <p class="_tv_score_crcl">
                    <span></span>
                  </p>
                  <p class="_tv_score_crcl">
                    <span></span>
                  </p>
                  <p class="_tv_score_crcl">
                    <span></span>
                  </p>
                  <p class="_tv_score_crcl">
                    <span></span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <!-- mdl -->


        <!-- right -->
        <div class="_tv_score_r8">
          <h2 class="_tv_tem_nam">
            Pakistan
          </h2>
        </div>
          <!-- right -->
      </div>
      </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
     data:{}
    };
  },

  methods: {
    
  },
  async created() {
    if(this.$route.params.id){
      console.log(this.$route.params.id)
    }
      const res = await this.callApi(
        "get",
        `match/getInningsLiveScore/15`
      );
      if (res.status === 200) {
        console.log('hjgjhgj')
        this.data=res.data
      }
  },
};
</script>



<style scoped>

body{
    font-family:Poppins;
   
 }
 ._tv_scr_all{
 background: #b57070;
 height: 100vh;
 }

 /* ==== TV SCORE CARD ==== */
 ._tv_score {
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     height: 79px;
     position: fixed;
     bottom: 30px;
     left: 0;
     width: 100%;
 }
 ._tv_score_lft{
     width: 20%;
     background: #fff;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     -webkit-box-pack: end;
     -ms-flex-pack: end;
     justify-content: flex-end;
     border-top-right-radius: 40px;
     border-bottom-right-radius: 40px;
     padding-right: 30px;
     max-width: 20%;
 }
 ._tv_tem_nam{
     margin: 0;
     font-size: 29px;
     line-height: 30px;
     font-weight: 700;
     color: #000;
 }
 ._tv_score_r8{
     width: 20%;
     background: #fff;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     -webkit-box-pack: start;
     -ms-flex-pack: start;
     justify-content: flex-start;
     border-top-left-radius: 40px;
     border-bottom-left-radius: 40px;
     padding-left: 30px;
     max-width: 20%;
 }
 ._tv_score_mdl{
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
         -ms-flex-align: center;
             align-items: center;
     width: 80%;
     background: #fff;
     border-radius: 40px;
 }
 ._tv_score_mdl1{
     width: 34%;
     max-width: 34%;
     -webkit-box-flex: 0;
         -ms-flex: 0 0 34%;
             flex: 0 0 34%;
 }
 ._tv_score_mdl1_ul{
     padding: 0;
     margin: 0;
     width: 100%;
 }
 ._tv_score_plyr_nm{
     margin: 0;
     text-transform: uppercase;
     font-size: 22px;
     line-height: 28px;
     color: #000;
     margin: 0px 0px;
     position: relative;
 }
 ._tv_score_num{
     margin: 0;
     font-size: 20px;
     line-height: 23px;
     font-weight: 800;
 }
 ._tv_score_ball{
    font-weight: normal;
    font-size: 13px;
    padding-left: 3px;
    color: #424141;
}
 ._tv_score_mdl2{
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     /* padding: 0px 21px; */
     width: 32%;
     border-radius: 40px;
     -webkit-box-align: center;
         -ms-flex-align: center;
             align-items: center;
     -webkit-box-pack: center;
         -ms-flex-pack: center;
             justify-content: center;
     height: 100%;
 }
 ._tv_score_cntry1{
     margin: 0;
     font-size: 16px;
     text-transform: uppercase;
     color: #ffffffd1;
     line-height: 25px;
     padding: 9px 0px 1px 0px;
 }
 ._tv_score_cntry1 span{
    padding: 0px 7px 0px 4px;
    font-size: 12px;
    text-transform: inherit;
}
 ._tv_score_cntry2{
    margin: 0;
    font-size: 24px;
    text-transform: uppercase;
    color: #fff;
    line-height: 28px;
    font-weight: 500;
    padding: 5px 0px;
}
 ._tv_score_cntry_scre{
     margin: 0;
     font-size: 24px;
     text-transform: uppercase;
     color: #fff;
     line-height: 26px;
     padding: 5px 12px 5px 9px;
     border-top-right-radius: 20px;
     border-bottom-right-radius: 20px;
     z-index: 2;
     font-weight: 500;
     background: -webkit-gradient(linear, right top, left top, from(rgba(164,44,92,1)), to(rgba(37,45,128,1)));
     background: -o-linear-gradient(right, rgba(164,44,92,1) 0%, rgba(37,45,128,1) 100%);
     background: linear-gradient(270deg, rgba(164,44,92,1) 0%, rgba(37,45,128,1) 100%);
 }
 ._tv_score_pwrply{
    margin: 0;
    padding: 5px 14px 0px 11px;
    color: #fff;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: relative;
    z-index: 1;
    font-weight: 600;
}
._tv_score_pwrply:after{
    position: absolute;
    content: '';
    width: calc(100% + 20px);
    height: 100%;
    right: 0;
    top: 0;
    z-index: -1;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: -o-linear-gradient(4deg, rgb(55 63 92) 0%, rgba(92,134,192,1) 100%);
    background: linear-gradient(86deg, rgb(55 63 92) 0%, rgba(92,134,192,1) 100%);
}
 ._tv_score_ovr{
    margin: 0;
    padding: 6px 5px 0px 10px;
    color: #fff;
    font-size: 16px;
    line-height: 27px;
}
 ._tv_score_mdl3{
     width: 34%;
     -webkit-box-flex: 0;
         -ms-flex: 0 0 34%;
             flex: 0 0 34%;
 }
 ._tv_score_mdl1_ul li{
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     width: 100%;
     display: flex;
     -webkit-box-pack: justify;
         -ms-flex-pack: justify;
             justify-content: space-between;
     margin: 3px 0px;
     -webkit-box-flex: 0;
         -ms-flex: 0 0 100%;
             flex: 0 0 100%;
 }
 ._tv_score_plyr_actv:after{
     position: absolute;
     content: '';
     left: -17px;
     top: 8px;
     border-bottom: 10px solid #000;
     border-right: 6px solid transparent;
     border-left: 6px solid transparent;
     -webkit-transform: rotate(210deg);
         -ms-transform: rotate(210deg);
             transform: rotate(210deg);
}
 ._tv_score_mdl1_inr{
    padding-right: 40px;
    padding-left: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: end;
}
 ._tv_score_mdl2_inr{
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    border-radius: 40px;
    overflow: hidden;
}
 ._tv_score_mdl3_inr{
    padding-left: 40px;
    padding-right: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
 ._tv_score_mdl2_top{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #252D80;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    padding: 0px 24px;
}
._tv_score_mdl2_btm {
    background: #1A235A;
    text-align: center;
    padding: 5px 0px;
    text-transform: uppercase;
}
 ._tv_score_rate{
     margin: 0;
     color: #fff;
     font-size: 14px;
     line-height: 17px;
 }
 ._scre_crcle {
    -webkit-box-pack: initial !important;
        -ms-flex-pack: initial !important;
            justify-content: initial !important;
}
 ._tv_score_crcl{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #1a235a;
    margin: 3px 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 2px;
}
._scre_crcle ._active span{
     width: 100%;
     height: 100%;
     background: #1a235a;
     display: block;
     border-radius: 50%;
     /* padding: 2px; */
    }
 /* ==== TV SCORE CARD ==== */
    
</style>