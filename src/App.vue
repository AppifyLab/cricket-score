<template>
  <div>
      <!-- logo_scoor.svg -->
    <div class="_tv_scr_all">
        <div class="_tv_score">
			<!-- left -->
			<div class="_tv_score_lft">
				<h2 class="_tv_tem_nam">
					<template v-if="data.batting_team">
            {{data.batting_team.team_name}}
          </template>
				</h2>
			</div>
		    <!-- left -->

			<!-- mdl -->
			<div class="_tv_score_mdl">
				<div class="_tv_score_mdl1">
					<div class="_tv_score_mdl1_inr">
						<ul class="_tv_score_mdl1_ul">
							<li v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans">
								<span class="_tv_score_arrow" v-if="item.is_on_strike==1"></span>
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
							<p class="_tv_score_pwrply">
								{{data.power_play_type}}
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
                                   TAR-{{data.target}} REQ - {{requireRunRate}} CRR - {{currentRunRate}}
                                </template>
							</p>
						</div>
					</div>
				</div>
				<div class="_tv_score_mdl3">
					<div class="_tv_score_mdl3_inr">
						<ul class="_tv_score_mdl1_ul">
							<li>
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
    };
  },

  methods: {
     async getData(){
        //  getStreamMatchLiveScore_kamran
       const res = await this.callApi(
        "get",
        `match/getStreamMatchLiveScore_kamran/${this.$route.query.matchId}`
      )
      if (res.status == 200) {
        // console.log('hjgjhgj')
        this.data=res.data
        if(this.data.bowler && this.data.bowler.over_details){
          this.over=this.data.bowler.over_details
        }
        if(this.data.score){
           let integr = Math.floor(this.data.score.total_over)
           let decimal = this.data.score.total_over - Math.floor(this.data.score.total_over)
           decimal= (decimal*10)/6

            let totalBall=integr + decimal 

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
     height: 92px;
     position: fixed;
     /* bottom: 30px; */
     left: 0;
     width: 100%;
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
     letter-spacing: 1px;
 }
 ._tv_score_r8{
     width: 18%;
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
     max-width: 18%;
     background: #FEDA14;
 }
 ._tv_score_mdl{
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
         -ms-flex-align: center;
             align-items: center;
     width: 82%;
     background: #fff;
     border-radius: 40px;
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
     color: #1a235a;
     line-height: 25px;
     padding: 9px 0px 1px 0px;
     font-weight: 600;
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
    color: #1a235a;
    line-height: 28px;
    font-weight: 600;
    padding: 5px 0px;
}
 ._tv_score_cntry_scre{
     margin: 0;
     font-size: 24px;
     text-transform: uppercase;
     color: #1a235a;
     line-height: 26px;
     padding: 5px 12px 5px 9px;
     border-top-right-radius: 20px;
     border-bottom-right-radius: 20px;
     z-index: 2;
     font-weight: 600;
     /* background: -o-linear-gradient(right, rgba(164,44,92,1) 0%, rgba(37,45,128,1) 100%);
     background: -o-linear-gradient(4deg, rgb(255 255 0) 0%, rgb(241 97 206) 100%);
     background: linear-gradient(86deg, rgb(255 255 0) 0%, rgb(241 97 206) 100%); */
     background: #FEDA14;
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
    background: -o-linear-gradient(4deg, rgb(59 79 153) 0%, rgb(26 35 90) 100%);
    background: linear-gradient(86deg, rgb(59 79 153) 0%, rgb(26 35 90) 100%);
}
 ._tv_score_ovr{
    margin: 0;
    padding: 6px 5px 0px 10px;
    color: #1a235a;
    font-size: 17px;
    line-height: 27px;
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
    border-bottom: 10px solid #000;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    -webkit-transform: rotate(
210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(
210deg);
    position: absolute;
    left: -16px;
    top: 10px;
    -webkit-transition: 0.3s ease all;
    -o-transition: 0.3s ease all;
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
    border-radius: 40px;
    overflow: hidden;
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
    padding: 5px 0px;
    text-transform: uppercase;
}
 ._tv_score_rate{
     margin: 0;
     color: #fff;
     font-size: 11px;
     line-height: 17px;
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
._tv_score_crcl_spn {
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;
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
    padding-left: 20px;
}
._tv_score_cntry2{
    font-size: 22px;
    max-width: 60px;
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
}

@media (min-width: 1200px) and (max-width:1399px) { 
._tv_score_mdl1_inr {
    padding-right: 20px;
    padding-left: 20px;
}
._tv_score_mdl3_inr{
    padding-left: 15px;
    padding-right: 15px;
}
._tv_score_mdl2{
    width: 38%;;
}
._tv_score_mdl1, ._tv_score_mdl3{
    width: 31%;
    max-width: 31%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31%;
    flex: 0 0 31%;
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
    font-size: 16px;
    line-height: 26px;
    width: 150px;
}
._tv_score_r8{
    width: 16%;
}
._tv_score_num{
    font-size: 16px;
}
._tv_score_cntry2{
    font-size: 18px;
    line-height: 27px;
}
._tv_score_cntry_scre{
    font-size: 18px;
    line-height: 27px;
}
._tv_score_pwrply {
    font-size: 14px;
    padding: 5px 11px 0px 8px;
}
._tv_score_cntry1 span {
    padding: 0px 5px 0px 2px;
}
._tv_score_cntry1{
    font-size: 14px;
}
._tv_score_crcl {
    width: 25px;
    height: 25px;
    font-size: 11px;
}
._scre_crcle_inner{
    position: relative;
}
._tv_score_crcl_spn{
    font-size: 11px;
    line-height: 16px;
}
}
</style>