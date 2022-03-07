<template>
  <div>
      <!-- logo_scoor.svg -->
    <div class="_tv_scr_all">
        <div class="_tv_score">
			<!-- left -->
			<div class="_tv_score_lft">
				<!-- <h2 class="_tv_tem_nam">
					<template v-if="data.batting_team">
            {{data.batting_team.team_name}}
          </template>
				</h2> -->
                <div data-v-7ba5bd90="" class="_tv_score_logo">
                    <img data-v-7ba5bd90="" src="http://live.scorebee.com/cricket-score/dist/img/scoorbee.png" alt="logo" class="_logo_image">
                </div>
			</div>
		    <!-- left -->

			<!-- mdl -->
			<div class="_tv_score_mdl">
                <div class="_tv_score_mdl_main1" v-if="!open_terget">
                    <div class="_tv_score_mdl1">
                        <div class="_tv_score_mdl1_inr">
                            <ul class="_tv_score_mdl1_ul">
                                <li v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans">
                                    <span class="_tv_score_arrow" v-if="item.is_on_strike==1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#FEDA14"/>
                                            <path d="M6.532 6.37141C6.52424 6.37493 6.51649 6.37845 6.50732 6.38573L6.50474 6.38691L6.50215 6.38808C6.4904 6.39653 6.47864 6.40499 6.46924 6.41861L6.46665 6.41978L6.46407 6.42096L6.46148 6.42213L6.46007 6.42589C6.45067 6.43951 6.44384 6.45197 6.4382 6.467L6.24198 6.98949C6.22645 7.03084 6.22854 7.07666 6.24614 7.11544L8.84219 12.8342C8.88326 12.9246 8.95701 12.9909 9.04347 13.0234C9.04723 13.0248 9.05475 13.0277 9.05851 13.0291C9.14261 13.0564 9.23426 13.0522 9.31957 13.0134L10.059 12.6778L10.7984 12.3421C10.8888 12.3011 10.9551 12.2273 10.9876 12.1408C10.989 12.1371 10.9918 12.1296 10.9933 12.1258C11.0206 12.0417 11.0164 11.9501 10.9776 11.8647L8.38277 6.14861C8.36399 6.10725 8.32829 6.07668 8.2907 6.06256L7.76445 5.86493L7.76069 5.86352L7.75693 5.86211C7.75318 5.86069 7.74683 5.86046 7.74307 5.85904C7.73297 5.85739 7.72545 5.85457 7.71652 5.85551L7.71276 5.85409L7.709 5.85268L7.70642 5.85386L7.70383 5.85503L7.70125 5.8562L7.69866 5.85738L7.69608 5.85855L7.69349 5.85973L7.69091 5.8609C7.68456 5.86066 7.67939 5.86301 7.67164 5.86653L7.66905 5.8677L7.66647 5.86888L7.66388 5.87005L7.66129 5.87122L7.65871 5.8724L7.65612 5.87357L6.53669 6.38175L6.532 6.37141Z" fill="#141414"/>
                                            <path d="M5.85854 3.09554L5.6181 3.20468C5.52762 3.24576 5.46132 3.31951 5.42885 3.40596C5.42744 3.40972 5.42462 3.41724 5.42321 3.421C5.39591 3.50511 5.40009 3.59675 5.43882 3.68206L6.70516 6.47159C6.74271 6.55432 6.84044 6.59103 6.92317 6.55347L7.52296 6.28119C7.60569 6.24364 7.64239 6.1459 7.60484 6.06317L6.33968 3.27623C6.2986 3.18574 6.22485 3.11945 6.13839 3.08698C6.13464 3.08557 6.12712 3.08274 6.12336 3.08133C6.03667 3.05521 5.94385 3.05681 5.85854 3.09554Z" fill="#141414"/>
                                        </svg>
                                    </span>
                                    <h2 class="_tv_score_plyr_nm _tv_score_plyr_actv">
                                        {{item.batter.first_name }}
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
                                    <template v-if="data.bowling_team">
                                    {{data.bowling_team.team_short_name}}
                                    </template>
                                    
                                    <span>v</span>
                                </p>
                                <p class="_tv_score_cntry2">
                                    <template v-if="data.batting_team">
                                        {{data.batting_team.team_short_name}}
                                    </template>
                                    
                                </p>
                                <p class="_tv_score_cntry_scre">
                                    <template v-if="data.score">
                                        {{data.score.total_runs}} - {{data.score.total_wicket}}
                                    </template>
                                </p>
                                <p class="_tv_score_pwrply" >
                                    {{data.power_play_type?data.power_play_type:''}}
                                </p>
                                <p class="_tv_score_ovr">
                                    <template v-if="data.score">
                                        {{data.score.total_over}}
                                    </template>
                                </p>
                            </div>

                            <div class="_tv_score_mdl2_btm">
                                <p class="_tv_score_rate" v-if="data">
                                    <template v-if="data.is_first_innings==1">
                                        <span v-if="data.score && data.score.total_over<5">
                                            {{data.toss}}
                                        </span>
                                        <span v-else>
                                            RR - {{currentRunRate}}
                                        </span>
                                    </template>
                                    <template v-else>
                                    TAR-{{data.target}}  CRR - {{currentRunRate}}
                                    <!-- TAR-{{data.target}} REQ - {{requireRunRate}} CRR - {{currentRunRate}} -->
                                    </template>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="_tv_score_mdl3">
                        <div class="_tv_score_mdl3_inr">
                            <ul class="_tv_score_mdl1_ul">
                                <li class="_tv_score_mdl1_plyr">
                                    <h2 class="_tv_score_plyr_nm">
                                        <template v-if="data.bowler && data.bowler.bowler">
                                            {{data.bowler.bowler.first_name }}
                                        </template>
                                    </h2>
                                    <p class="_tv_score_num" v-if="data.bowler">
                                        {{data.bowler.wickets}}-{{data.bowler.runs_gave}}
                                        <span class="_tv_score_ball">
                                            {{data.bowler.overs_bowled}}
                                        </span>
                                    </p>
                                </li>
                                <li class="_scre_crcle" v-if="data.bowler && data.bowler.over_details">
                                    <div v-for="(item,index) in data.bowler.over_details" :key="index" class="_scre_crcle_inner">
                                        
                                        <p class="_tv_score_crcl _active_w" v-if="item.is_wicket">
                                            {{item.circle_value}}
                                        </p>

                                        <p class="_tv_score_crcl _active6" 
                                        v-else-if="item.boundary_type && item.boundary_type=='SIX'">
                                            {{item.circle_value}}
                                        </p>
                                        <p class="_tv_score_crcl _active4"  v-else-if="item.boundary_type && item.boundary_type=='FOUR'">
                                            {{item.circle_value}}
                                        </p>
                                        <p class="_tv_score_crcl"  v-else>
                                            {{item.circle_value}}
                                        </p>
                                        
                                        
                                        <span class="_tv_score_crcl_spn" v-if="item.down_circle_value">{{item.down_circle_value}}</span>
                                    </div>

                                    <!-- <p class="_tv_score_crcl" :class="item.circle_value==0 ? '': item.circle_value==4 ? '_active4'
                                            : item.circle_value==6? '_active6'
                                            : item.is_wicket==1?'_active_w'
                                            : item.circle_value=='n6'? '_active6'
                                            :''
                                            " >
                                        
                                            {{item.circle_value}}
                                        </p> -->
                                    <!-- <p class="_tv_score_crcl _active4">
                                        4
                                    </p>
                                    <p class="_tv_score_crcl _active6">
                                        6
                                    </p>
                                    <p class="_tv_score_crcl _active_w">
                                        w
                                    </p>
                                    <p class="_tv_score_crcl _active6">
                                        n6
                                    </p> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="_tv_score_mdl_main2" v-else>
                    <div class="_tv_score_mdl_main2_lft">
                         <div class="_tv_score_mdl2_inr">
                            <div class="_tv_score_mdl2_top">
                                <p class="_tv_score_cntry1">
                                    <template v-if="data.bowling_team">
                                    {{data.bowling_team.team_short_name}}
                                    </template>
                                    
                                    <span>v</span>
                                </p>
                                <p class="_tv_score_cntry2">
                                    <template v-if="data.batting_team">
                                        {{data.batting_team.team_short_name}}
                                    </template>
                                    
                                </p>
                                <p class="_tv_score_cntry_scre">
                                    <template v-if="data.score">
                                        {{data.score.total_runs}} - {{data.score.total_wicket}}
                                    </template>
                                </p>
                                <p class="_tv_score_pwrply" >
                                    {{data.power_play_type?data.power_play_type:''}}
                                </p>
                                <p class="_tv_score_ovr">
                                    <template v-if="data.score">
                                        {{data.score.total_over}}
                                    </template>
                                </p>
                            </div>

                            <div class="_tv_score_mdl2_btm">
                                <p class="_tv_score_rate" v-if="data">
                                    <template v-if="data.is_first_innings==1">
                                        <span v-if="data.score && data.score.total_over<5">
                                            {{data.toss}}
                                        </span>
                                        <span v-else>
                                            RR - {{currentRunRate}}
                                        </span>
                                    </template>
                                    <template v-else>
                                    TAR-{{data.target}}  CRR - {{currentRunRate}}
                                    <!-- TAR-{{data.target}} REQ - {{requireRunRate}} CRR - {{currentRunRate}} -->
                                    </template>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="_tv_score_mdl_main2_r8">
                        <div class="_tv_score_mdl_main2_nd">
                            <p class="_tv_score_mdl_main2_nd_txt">
                                {{data.batting_team.team_name}} <br> need
                            </p>
                        </div>
                        <div class="_tv_score_mdl_main2_run">
                            <ul class="_tv_score_mdl_main2_run_ul d-flex">
                                <li>
                                    <span class="_tv_score_mdl_main2_run_txt">
                                        {{(data.target-data.score.total_runs)>=0?(data.target-data.score.total_runs):'Win'}}
                                    </span>
                                </li>
                                 <li>
                                    <span class="_tv_score_mdl_main2_run_txt2">
                                        more <br> from
                                    </span>
                                </li>
                                 <li>
                                    <span class="_tv_score_mdl_main2_run_txt">
                                        {{leftBalls}}
                                    </span>
                                </li>
                                 <li>
                                    <span class="_tv_score_mdl_main2_run_txt2">
                                        balls
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
			</div>
		    <!-- mdl -->


			<!-- right -->
			<div class="_tv_score_r8">
				<!-- <h2 class="_tv_tem_nam">
					<template v-if="data.bowling_team">
            {{data.bowling_team.team_name}}
          </template>
				</h2> -->
                <div class="_tv_score_logo">
                    <img src="http://live.scorebee.com/cricket-score/dist/img/scoorbee.png" alt="logo" class="_logo_image">
                </div>
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
     data:{},
     over:[],
     currentRunRate:0,
     requireRunRate:0,
     leftBalls:0,
     open_terget:false
    };
  },

  methods: {
     async getData(){
        //  getStreamMatchLiveScore_kamran getInningsLiveScore
       const res = await this.callApi(
        "get",
        `match/getStreamMatchLiveScore_kamran/${this.$route.query.matchId}`
        // `match/getInningsLiveScore/${this.$route.query.matchId}`
      )
      if (res.status == 200) {
        // console.log('hjgjhgj')
        this.data=res.data
        if(this.data.bowler && this.data.bowler.over_details){
          this.over=this.data.bowler.over_details
        }
        if(this.data.score){
            let a = parseFloat(this.data.score.total_over)
           let integr = Math.floor(this.data.score.total_over)
           let decimal2 = a - Math.floor(a)
           let decimal = this.data.score.total_over - Math.floor(this.data.score.total_over)
           decimal= (decimal*10)/6

            let totalBall=integr + decimal 
            this.leftBalls = Math.ceil((parseInt(this.data.match_overs)*6) - ((Math.floor(a)*6)+(decimal2*10)))
            // ((Math.floor(a)*6)+(decimal2*10))
            // (parseInt(this.data.match_overs)*6) -
            //  (Math.floor(a)*6)
            // (parseInt(this.data.match_overs)*6)-((Math.floor(a)*6)+(decimal2*10))
            if(totalBall==0){
                this.currentRunRate=0.00
                this.requireRunRate=0.00
            }else{
                this.currentRunRate=this.data.score.total_runs/totalBall
                this.currentRunRate=this.currentRunRate.toFixed(2);


                let leftBall= this.data.match_overs-totalBall
                let reqrunRate=this.data.target/leftBall
                this.requireRunRate = reqrunRate.toFixed(2);
            }
            
        }
      }

      setTimeout(() =>{
          this.getData()
      },6500)



     }
  },
  filters:{
    playerName(name){
      name=name.substr(0,5);
      let d= name.charAt(6);
      let reWhiteSpace = new RegExp("\\s+");
        if (reWhiteSpace.test(d)) {
            name='...'
        }
      return name
    }
  },
  async created() {
    // 379
    if(this.$route.query && this.$route.query.matchId){
        this.getData()
        
    }
    if(this.$route.query && this.$route.query.open_terget){
        if(this.data  && !this.data.is_first_innings){
            this.open_terget = true
        }
        
        
    }
  },
};
</script>



<style scoped>

body{
    font-family:Poppins;
   
 }
 ._tv_scr_all{
 /* background: #b57070;
 height: 100vh;
 font-family:Poppins; */
 }

 /* ==== TV SCORE CARD ==== */
 ._tv_score {
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     height: 90px;
     position: fixed;
     /* bottom: 30px; */
     left: 0;
     width: 100%;
     align-items: center;
 }
 ._scre_crcle_inner{
     position: relative;
 }
 ._tv_score_crcl_spn{
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    position: absolute;
    bottom: -12px;
}
._tv_score_mdl_main2_lft{
    width: 33.33%;
     flex: 0 0 auto;
}
._tv_score_mdl_main2_lft ._tv_score_mdl2_inr{
    width: 100%;
}
._tv_score_lft{
    width: 10%;
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
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    padding-right: 30px;
    max-width: 10%;
    padding-left: 5px;
    height: 90px;
    background: #FEDA14;
}
._tv_score_mdl1_plyr{
    width: 95% !important;
}
/* ._tv_score_mdl1_plyr{
    padding-right: 20px;
} */
 ._tv_tem_nam{
     margin: 0;
     font-size: 30px;
     line-height: 34px;
     font-weight: 600;
     color: #000;
 }
 ._tv_score_mdl_main1{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
 }
 ._tv_score_mdl_main2_r8{
     display: flex;
     align-items: center;
    height: 100%;
     flex:1 1;
     justify-content: space-between;
 }
._tv_score_mdl_main2_run_ul {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: space-around;
}
._tv_score_mdl_main2_run_ul li{
    padding: 0px 12px;
    position: relative;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:100%;
}
._tv_score_mdl_main2_run_ul li:after {
    position: absolute;
    content: '';
    background: #c7c7c7;
    width: 3px;
    height: 100%;
    left: -3px;
    top: 0;
}

._tv_score_mdl_main2_run_txt {
    font-size: 50px;
    line-height: 55px;
    font-weight: bold;
    color: #1a235a;
}
._tv_score_mdl_main2_run_txt2 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 25px;
    color: #323131;
    line-height: 34px;
}
 ._tv_score_mdl_main2{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    max-height: 90px;
    overflow: hidden;
      -webkit-animation: mymove 0.5s;
    animation: mymove 0.5s;
    -webkit-transition: 0.5s ease all;
    -moz-transition: 0.5s ease all;
    -ms-transition: 0.5s ease all;
    -o-transition: 0.5s ease all;
    z-index: 0;
 }
@-webkit-keyframes mymove{
	from{
		-webkit-transform: translateX(200%);
		        transform: translateX(200%);
	}
	to{
		transform: translateX(0%);
		-webkit-transform: translateX(0%);
		-moz-transform: translateX(0%);
		-ms-transform: translateX(0%);
		-o-transform: translateX(0%);
}
}
@keyframes mymove{
	from{
		-webkit-transform: translateX(200%);
		        transform: translateX(200%);
	}
	to{
		transform: translateX(0%);
		-webkit-transform: translateX(0%);
		-moz-transform: translateX(0%);
		-ms-transform: translateX(0%);
		-o-transform: translateX(0%);
}
}
._tv_score_mdl_main2_run {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    padding-right: 0px;
    padding-left: 20px;
}
._tv_score_mdl_main2_nd {
    width: max-content;
    overflow: hidden;
    max-height: 90px;
    height: 100%;
    flex:1 1;
    border-radius: 60px;
    text-align: center;
    min-width: 220px;
    font-weight: 500;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
     padding: 12px 16px;
    background: #1a235a;
    height: 90px;
    margin: 0px 10px;
}
._tv_score_mdl_main2_nd_txt {
    color: #fff;
    font-size: 22px;
    line-height: 33px;
    text-transform: uppercase;
    margin: 0px 10px;
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
 ._tv_score_r8{
     width: 10%;
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
     border-top-left-radius:100px;
     border-bottom-left-radius:100px;
     padding-left: 30px;
     max-width: 10%;
     background: #FEDA14;
     height:90px;
      z-index: 2;
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
     border-radius: 100px;
     height: 90px;
     padding-right: 10px;
 }
 ._logo_image{
     max-width: 120px;
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
._tv_score_plyr_nm {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 28px;
    color: #000;
    margin: 0 0;
    letter-spacing: 1px;
    -webkit-line-clamp: 1;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    width: 170px;
    overflow: hidden;
    margin-right: 10px;
}
 ._tv_score_num{
     margin: 0;
     font-size: 20px;
     line-height: 23px;
     font-weight: 800;
     display: flex;
 }
 ._tv_score_ball{
    font-weight: normal;
    font-size: 13px;
    padding-left: 7px;
    color: #424141;
}
 ._tv_score_mdl2{
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     /* padding: 0px 21px; */
     width: 32%;
     -webkit-box-align: center;
         -ms-flex-align: center;
             align-items: center;
     -webkit-box-pack: center;
         -ms-flex-pack: center;
             justify-content: center;
     height: 100%;
     overflow: hidden;
 }
._tv_score_cntry1 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
    color: #000000;
    line-height: 20px;
    padding: 17px 0px 1px 0px;
    font-weight: 600;
}
._tv_score_cntry1 span {
    padding: 0px 9px 0px 7px;
    font-size: 12px;
    text-transform: inherit;
}
._tv_score_cntry2 {
    margin: 0;
    font-size: 24px;
    text-transform: uppercase;
    color: #1a235a;
    line-height: 28px;
    font-weight: 600;
    padding: 11px 0px;
}
._tv_score_cntry_scre {
    margin: 0;
    font-size: 24px;
    text-transform: uppercase;
    color: #1a235a;
    line-height: 26px;
    padding: 12px 14px 12px 9px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 2;
    font-weight: 600;
    background: #FEDA14;
}
 ._tv_score_pwrply{
    margin: 0;
    padding: 5px 14px 0px 11px;
    color: #fff;
    font-size: 18px;
    line-height: 37px;
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
    background: -o-linear-gradient(4deg, rgb(59 79 153) 0%, rgb(26 35 90) 100%);
    background: linear-gradient(86deg, rgb(59 79 153) 0%, rgb(26 35 90) 100%);
}
 ._tv_score_ovr{
    margin: 0;
    padding: 6px 5px 0px 10px;
    color: #1a235a;
    font-size: 17px;
    line-height: 36px;
    font-weight: 700;
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
    position: relative;
    align-items: center;
 }
 
._tv_score_arrow {
    position: absolute;
    left: -24px;
    top: 3px;
    -webkit-transition: 0.3s ease all;
    transition: 0.3s ease all;
}
 /* ._tv_score_plyr_actv:after{
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
} */
 ._tv_score_mdl1_inr{
    padding-right: 40px;
    padding-left: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /* -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: end;
        -ms-flex-align: end; */
            align-items: flex-end;
}
 ._tv_score_mdl2_inr{
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    border-radius: 60px;
    overflow: hidden;
    max-height: 90px;
}
 ._tv_score_mdl3_inr{
    padding-left: 20px;
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
    background: #FEDA14;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 24px;
}
._tv_score_mdl2_btm {
    background: #1A235A;
    text-align: center;
    padding: 10px 16px;
    text-transform: uppercase;
}
._tv_score_rate {
    margin: 0;
    color: #fff;
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
}
 ._scre_crcle {
    -webkit-box-pack: initial !important;
        -ms-flex-pack: initial !important;
            justify-content: initial !important;
}
._tv_score_crcl {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    /* border: 1px solid #1a235a; */
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
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    background: #1a235a;
    text-transform: uppercase;
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
}
/* ._scre_crcle ._active span{
     width: 100%;
     height: 100%;
     background: #1a235a;
     display: block;
     border-radius: 50%;
    } */
._scre_crcle ._active4{
    background: #1B998B;
}
._scre_crcle ._active6{
    background: #3CB733;
}
._scre_crcle ._active_w{
    background: #E84855;
}

._scre_crcle_inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: coloum;
    flex-direction: column;
    align-items: center;
}

/* RESPONSIVE */
@media (min-width: 1400px) and (max-width:1700px){

}
@media (min-width: 1400px) and (max-width:1700px) { 
 ._tv_score_mdl1_inr {
    padding-right: 20px;
    padding-left: 50px;
}
._tv_score_cntry2{
    font-size: 22px;
}
._tv_score_crcl{
    width: 21px;
    height: 21px;
    font-size: 11px;
}
._tv_score_cntry_scre{
    font-size: 22px;
}
._tv_score_pwrply {
    padding: 5px 11px 0px 9px;
    font-size: 16px;
}
._tv_score_mdl3_inr{
    padding-left: 20px;
    padding-right: 15px;
}
._tv_score_mdl2{
    width: 40%;;
}
._tv_score_mdl1, ._tv_score_mdl3{
    width: 30%;
    max-width: 30%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
}
._tv_tem_nam {
    font-size: 20px;
    line-height: 26px;
}
._logo_image{
    max-width: 120px;
    height: auto;
}
._tv_score_plyr_nm {
    font-size: 18px;
    width: 160px;
}
._tv_score_crcl_spn{
    font-size: 11px;
    line-height: 16px;
}
._tv_score_mdl_main2_nd_txt {
    font-size: 19px;
    line-height: 27px;
    max-width: 350px;
}
._tv_score_mdl_main2_run_txt {
    font-size: 38px;
    line-height: 55px;
}
._tv_score_mdl_main2_run_txt2 {
    font-size: 22px;
    line-height: 30px;
}
._tv_score_mdl_main2_run_ul lI {
    padding: 0px 5px;
    height: 70px;
}
}

@media (min-width: 1200px) and (max-width:1299px) { 
._tv_score_mdl1_inr {
    padding-right: 20px;
    padding-left: 50px;
}
._tv_score_mdl3_inr{
    padding-left: 15px;
    padding-right: 15px;
}
._tv_score_mdl2_btm {
    padding: 10px 0px;
}
._tv_score_rate {
    font-size: 11px;
    line-height: 16px;
}
._tv_score_mdl2{
    width: 38%;;
}
._tv_score_mdl{
    height: 79px;
}
._tv_score_mdl2_inr{
    max-height: 79px;
}
._tv_score_mdl1, ._tv_score_mdl3{
    width: 31%;
    max-width: 31%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31%;
    flex: 0 0 31%;
}
._tv_tem_nam {
    font-size: 18px;
    line-height: 22px;
}
._logo_image{
    max-width: 120px;
    height: auto;
}
._tv_score_plyr_nm {
    font-size: 16px;
    line-height: 26px;
    width: 150px;
}
._tv_score_r8{
    width: 16%;
     height: 79px;
}
._tv_score_num{
    font-size: 16px;
}
._tv_score_cntry2{
    font-size: 17px;
    line-height: 20px;
    padding:12px 0px 12px;
}
._tv_score_cntry_scre {
    font-size: 17px;
    line-height: 20px;
    padding: 10px 14px 6px 9px;
}
._tv_score_pwrply{
    font-size: 13px;
    padding: 12px 7px 0px 7px;
    line-height: 18px;
}
._tv_score_mdl2_top {
    padding: 0px 17px;
}
._tv_score_lft {
    padding-right: 20px;
    height: 79px;
}
._tv_score_cntry1 span {
    padding: 0px 5px 0px 2px;
}
._tv_score_cntry1 {
    font-size: 12px;
    line-height: 16px;
    padding: 14px 0px 0px 0px;
}
._tv_score_crcl {
    width: 18px;
    height: 18px;
    font-size: 10px;
}
._scre_crcle_inner{
    position: relative;
}
._tv_score_crcl_spn {
    font-size: 9px;
    line-height: 16px;
}
._tv_score_ovr {
    padding: 12px 0px 0px 8px;
    font-size: 15px;
    line-height: 19px;
}
._tv_score_mdl_main2_nd_txt{
  font-size: 16px;
    line-height: 29px;
    max-width: 250px;
}
._tv_score_mdl_main2_run_ul li {
    padding: 0px 7px;
    height: 65px;
}
._tv_score_mdl_main2_run_txt {
    font-size: 30px;
    line-height: 55px;
}
._tv_score_mdl_main2_run_txt2 {
    font-size: 18px;
    line-height: 25px;
}
._tv_score_mdl_main2 {
    max-height:79px;
}
._tv_score_mdl_main2_nd{
     max-height:79px;
}
}

@media (min-width: 1300px) and (max-width:1399px) { 
._tv_score_mdl1_inr {
    padding-right: 20px;
    padding-left: 50px;
}
._tv_score_lft {
    height: 79px;
}
._tv_score_mdl3_inr{
    padding-left: 15px;
    padding-right: 15px;
}
._tv_score_mdl2{
    width: 36%;
}
._tv_score_mdl{
    height: 79px;
}
._tv_score_mdl1, ._tv_score_mdl3{
    width: 31%;
    max-width: 31%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31%;
    flex: 0 0 31%;
}
._tv_tem_nam{
    font-size: 19px;
    line-height: 23px;
}
._tv_score_mdl2_btm {
    padding: 7px 15px;
}
._logo_image{
    max-width: 120px;
    height: auto;
}
._tv_score_plyr_nm {
    font-size: 16px;
    line-height: 26px;
    width: 150px;
}
._tv_score_r8{
    width: 16%;
    height: 79px;
}
._tv_score_num{
    font-size: 16px;
}
._tv_score_cntry2 {
    font-size: 18px;
    line-height: 23px;
    padding: 10px 0px 7px;
}
._tv_score_cntry_scre{
    font-size: 18px;
    line-height: 27px;
    padding: 9px 14px 9px 9px;
}
._tv_score_pwrply {
    font-size: 14px;
    padding: 5px 9px 0px 6px;
}
._tv_score_mdl2_inr {
    max-height: 79px;
    overflow: hidden;
}
._tv_score_mdl2_top {
    padding: 0px 20px;
}
._tv_score_cntry1 span {
    padding: 0px 5px 0px 2px;
}
._tv_score_cntry1{
    font-size: 14px;
    line-height: 18px;
    padding: 14px 0px 1px 0px;
}
._tv_score_crcl {
    width: 20px;
    height: 20px;
    font-size: 10px;
}
._scre_crcle_inner{
    position: relative;
}
._tv_score_crcl_spn {
    font-size: 10px;
    line-height: 16px;
}
._tv_score_mdl_main2_nd_txt{
   font-size: 18px;
    line-height: 29px;
    max-width: 273px;
}
._tv_score_mdl_main2_run_ul li {
    padding: 0px 7px;
    height: 70px;
}
._tv_score_mdl_main2_run_txt {
    font-size: 35px;
    line-height: 55px;
}
._tv_score_mdl_main2_run_txt2 {
    font-size: 20px;
    line-height: 29px;
}
._tv_score_mdl_main2 {
    max-height:79px;
}
._tv_score_mdl_main2_nd{
     max-height:79px;
}
}

</style>