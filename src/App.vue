<template>
  <div>
    <template v-if="visible1">
    <div class="head">
      <div class="body">
        <!-- <div class="scoreBee_logo">
          <img
            class=""
              src="data:image/png;base64,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"
            alt="ScoreBee_logo"
          />
        </div> -->
          <div class="_scoreCard_logo">
        <div class="_scoreCard_logo_main">
          <img class="_scoreCard_logo_img" src="./assets/scorebee_logo.png"
          alt="" title="">
        </div>
      </div>
        <div class="score_card">
          <div class="score">
            <p class="bowling_team">
              <template v-if="data.bowling_team">
                    {{data.bowling_team.team_short_name.slice(0,5)}}
                </template> v <span class="batting_team">
                    <template v-if="data.batting_team">
                        {{data.batting_team.team_short_name.slice(0,5)}}
                    </template>
                </span>
            </p>
            <p class="scored">
                <template v-if="data.score">
                  <!-- 236 / 10 -->
                    {{data.score.total_runs}} / {{data.score.total_wicket}}
                </template></p>
          </div>
          <div class="over">
            <p class="over_played">OVER
                <template v-if="data.score">
                    {{data.score.total_over}}
                </template>
            </p>
            <p class="power_play">{{data.power_play_type?data.power_play_type:''}}</p>
          </div>
        </div>
        <div class="_scoreCard_player">
        <div class="_scoreCard_player_main">
          <div class="_scoreCard_player_card _batting" v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans && item.is_on_strike==1">
            <p class="_scoreCard_player_name">{{(item.batter.first_name +' '+item.batter.last_name).slice(0,10) }}</p>
            <!-- <p class="_scoreCard_player_run">529<span>(112)</span></p> -->
            <p class="_scoreCard_player_run">{{item.runs_achieved}}<span>({{item.balls_faced}})</span></p>
          </div>
          <div class="_scoreCard_player_card" v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans && item.is_on_strike==0">
            <p class="_scoreCard_player_name">{{(item.batter.first_name +' '+item.batter.last_name).slice(0,10)}} </p>
            <!-- <p class="_scoreCard_player_run">529<span>(112)</span></p> -->
            <p class="_scoreCard_player_run">{{item.runs_achieved}}<span>({{item.balls_faced}})</span></p>
          </div>
        </div>
      </div>

        <!-- current run rate  -->
          <div class="current_run_rate" v-if=" data.settings && data.settings.scorecard_with_crr==1">

             <div class="current_run_rate_text">
                  CURRENT RUN RATE
             </div>
             <div class="current_run_rate_dis">
                    {{currentRunRate}}
             </div>

        </div>
         <!-- tournament sixes -->
        <div class="tournament_sixes" v-else-if="data.settings && data.settings.scorecard_with_tournament_sixes==1">
          <div class="tournament_sixes_text">
            <span class="tournament_sixes_first">TOURNAMENT</span>
            <span class="tournament_sixes_second">SIXES</span>
          </div>
          <div class="total_tournament_sixes">{{data.tournament_details.total_sixes_in_tournament}}</div>
        </div>
        <!-- match sixes  -->
         <div class="tournament_sixes" v-else-if="data.settings && data.settings.scorecard_with_match_sixes==1">
          <div class="tournament_sixes_text">
            <span class="tournament_sixes_first">MATCH</span>
            <span class="tournament_sixes_second">SIXES</span>
          </div>
          <div class="total_tournament_sixes">{{match_sixes}}</div>
        </div>

        <!-- tournament fours  -->
         <div class="tournament_sixes" v-else-if="data.settings && data.settings.scorecard_with_tournament_fours==1">
          <div class="tournament_sixes_text">
            <span class="tournament_sixes_first">TOURNAMENT</span>
            <span class="tournament_sixes_second">FOURS</span>
          </div>
          <div class="total_tournament_sixes">{{data.tournament_details.total_fours_in_tournament}}</div>
        </div>
        <!-- match fours  -->
        <div class="tournament_sixes" v-else-if="data.settings && data.settings.scorecard_with_match_fours==1">
          <div class="tournament_sixes_text">
            <span class="tournament_sixes_first">MATCH</span>
            <span class="tournament_sixes_second match_four">FOURS</span>
          </div>
          <div class="total_tournament_sixes">{{match_fours}}</div>
        </div>

        <!-- score card with target  -->
        <div class="match_target" v-else-if="data.settings && data.settings.scorecard_with_target ==1 && data.battingPlayingEleven[0].match_type=='LIMITED OVERS'
         && data.is_first_innings == 0">
          <div class="target_text">
              TARGET
            </div>
          <div class="target_run">
                {{data.target}}
              </div>
        </div>

        <!-- toss  -->
        <div class="toss" v-else-if="data.settings && data.settings.scorecard_with_toss==1">
           <div class="won_the_toss">
            TOSS
          </div>
          <div class="decided_winning_toss">
             {{data.toss}}
          </div>

        </div>

        <!-- team name  -->
        <div  class="team_details" v-else-if="data.settings && data.settings.only_team_name==1">
          <!-- <div class="team_text">
              Batting Team
          </div> -->
         <div class="team_name">

            {{data.batting_team.team_name}}  <br>  &nbsp;
            vs &nbsp;<br>
            <!-- <span> vs </span> -->

            {{data.bowling_team.team_name}}

         </div>
        </div>

        <!-- need run of balls  -->
        <div class="score_require" v-else-if="data.settings && data.settings.scorecard_with_need_run_of_balls==1 && data.battingPlayingEleven[0].match_type=='LIMITED OVERS'
        && data.is_first_innings == 0">

            <div class="require_run">
              <p class="need_run">NEED</p>
              <div class="run_to_get">
                <!-- <p class="">349</p> -->
                <p class="">{{data.target - data.score.total_runs}}</p>
              </div>
              <p class="">RUNS</p>
            </div>
            <div class="require_ball">
              <p>FROM</p>
              <div class="ball_in_hand">
                <!-- <p class="">199</p> -->
                <p class="">{{leftBalls}}</p>
              </div>
              <p class="from_balls">BALLS</p>
            </div>

        </div>


        <div v-else class="current_run_rate">
          <div class="current_run_rate_text">
            CURRENT RUN RATE
          </div>
          <div class="current_run_rate_dis">
           {{currentRunRate?currentRunRate:0.00}}
          </div>
        </div>

        <div class="bowler_match_status">
          <div class="stream_text">
            <div class="blank"></div>
            <div class="stream_company">
              <p class="stream_small">
                LIVE SCORE AND STREAM BY <br /><span class="stream_big"
                  >SCOREBEE APP</span
                >
              </p>
            </div>
          </div>
          <div class="bowler_run_wicket">
            <p>
                <template v-if="data.bowler && data.bowler.bowler">
                    {{data.bowler.bowler.first_name.slice(0,8) }}
                </template></p>
            <p class="bowler_run_wicket_p_second"  v-if="data.bowler">
              {{data.bowler.wickets}}-{{data.bowler.runs_gave}}
              <!-- 10-112 -->
               <span class="bowler_run_wicket_sub_second">{{data.bowler.overs_bowled}}</span>
            </p>
          </div>

          <div class="over_every_ball">
            <!-- 6 6 2 3 1 6 6 -->
                <ul>
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
                 </li>
                </ul>
          </div>

        </div>
      </div>
    </div>
    </template>

    <template v-else-if="data.settings && data.settings.strike_batsman_match_stats==1">
       <ul>
              <li v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans">
                  <span v-if="item.is_on_strike==1">
                    <div class="player_match_status_head">
                      <div class="player_match_status">
                        <div class="player_match_status_first">
                          <p class="bowler_over_status">{{item.batter.first_name}} {{item.batter.last_name}} <span class="bowler_over_status_small"> &nbsp; {{item.batter.batting_style? item.batter.batting_style:null}} </span></p>
                          <p class="player_taken_run">{{item.runs_achieved}}  <span>( {{item.balls_faced}} )</span> </p>
                        </div>
                      </div>
                    </div>
                  </span>
              </li>
            </ul>
    </template>

    <template v-else-if="data.settings && data.settings.non_strike_batsman_match_stats==1">
       <ul>
              <li v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans">
                  <span v-if="item.is_on_strike==0">
                    <div class="player_match_status_head">
                      <div class="player_match_status">
                        <div class="player_match_status_first">
                          <p class="bowler_over_status">{{item.batter.first_name}} {{item.batter.last_name}} <span class="bowler_over_status_small">&nbsp; {{item.batter.batting_style? item.batter.batting_style:null}} </span></p>
                          <p class="player_taken_run">{{item.runs_achieved}}  <span>( {{item.balls_faced}} )</span> </p>
                        </div>
                      </div>
                    </div>
                  </span>
              </li>
        </ul>
    </template>
    <template v-else-if="data.settings && data.settings.bowler_match_stats==1">
      <div class="player_match_status_head">
                      <div class="player_match_status">
                        <div class="player_match_status_first" v-if="data.bowler && data.bowler.bowler">
                          <p class="bowler_over_status">{{data.bowler.bowler.first_name }} {{data.bowler.bowler.last_name}}</p>
                          <p class="player_taken_run">{{data.bowler.wickets}}-{{data.bowler.runs_gave}} <span class="bowler_run_wicket_sub_second">{{data.bowler.overs_bowled}}</span></p>
                        </div>
                      </div>
                    </div>
    </template>
          <!-- player_bowling_status -->


    <div v-else-if="data.settings && data.settings.bowler_overall_stats==1" class="_playerCard_con">
    <div  class="_playerCard">
        <div class="_playerCard_top">
        <div class="_playerCard_top_left">
          <p class="_playerCard_name">
              {{(data.bowler_overall_stats.first_name + ' '+ data.bowler_overall_stats.last_name).slice(0,16)}}
            <span v-for="(item,index) in data.bowlingPlayingEleven" :key="index" v-if="item.player_id === data.bowler_overall_stats.id">{{item.playing_role}}</span>
          </p>
        </div>

        <div class="_playerCard_right">
          <p class="_playerCard_sub">
            Limited <br/>Over
          </p>
        </div>
      </div>

      <div class="_playerCard_main">
        <div class="_playerCard_titles">
          <div class="_playerCard_one">
            <p class="_playerCard_title">Match</p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_title">Runs</p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_title">Wickets</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_title">Economy</p>
          </div>
          <div class="_playerCard_seven">
            <p class="_playerCard_title">5 WICKETS</p>
          </div>
        </div>

        <div class="_playerCard_values">
          <div class="_playerCard_one">
            <p class="_playerCard_val">{{data.bowler_overall_stats.total_matches}} </p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_val">{{data.bowler_overall_stats.total_runs}} </p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_val">{{data.bowler_overall_stats.total_wickets}}</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_val">{{bowler_economy.toFixed(2)}}</p>
          </div>
          <div class="_playerCard_seven">
            <p class="_playerCard_val"> {{data.bowler_overall_stats.total_five_wickets}} </p>
          </div>
        </div>
      </div>
    </div>
  </div>

        <!-- strike batsman player batting status  -->
    <div v-else-if="data.settings && data.settings.strike_batsman_overall_stats==1" class="_playerCard_con">
    <!-- Card one -->
    <div class="_playerCard">
      <div class="_playerCard_top">
        <div class="_playerCard_top_left">
          <p class="_playerCard_name" v-for="(item,index) in data.batsmans" :key="index"  v-if="item.is_on_strike==1">
            {{ (item.batter.first_name+' '+item.batter.last_name).slice(0,14) }}
            <span>{{item.batter.playing_role}}</span>
          </p>
        </div>

        <div class="_playerCard_right">
          <p class="_playerCard_sub">
            Limited <br/> Overs
          </p>
        </div>
      </div>

      <div class="_playerCard_main">
        <div class="_playerCard_titles">
          <div class="_playerCard_one">
            <p class="_playerCard_title">Matches</p>
          </div>
          <div class="_playerCard_two">
            <p class="_playerCard_title">Runs</p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_title">Avarage</p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_title">50S</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_title">100S</p>
          </div>
          <div class="_playerCard_six">
            <p class="_playerCard_title">Best</p>
          </div>
        </div>

        <div class="_playerCard_values">
          <div class="_playerCard_one">
            <p class="_playerCard_val">{{ data.strike_batsman.limited_match_innings }}</p>
          </div>
          <div class="_playerCard_two">
            <p class="_playerCard_val">{{data.strike_batsman.limited_match_run?data.strike_batsman.limited_match_run:'0'}} </p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_val">{{strike_batsman_limited_match_average.toFixed(2)}}</p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_val">{{data.strike_batsman.limited_match_fifty}}</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_val">{{data.strike_batsman.limited_match_hundred}}</p>
          </div>
          <div class="_playerCard_six">
            <p class="_playerCard_val">{{data.strike_batsman.highest_in_limited?data.strike_batsman.highest_in_limited:'0'}} </p>
          </div>
        </div>
      </div>
    </div>
    </div>

      <!-- non strike batsman player batting status  -->
    <div v-else-if="data.settings && data.settings.non_strike_batsman_overall_stats==1" class="_playerCard_con">
      <div class="_playerCard">
      <div class="_playerCard_top">
        <div class="_playerCard_top_left">
          <p class="_playerCard_name" v-for="(item,index) in data.batsmans" :key="index"  v-if="item.is_on_strike==0">
            {{ (item.batter.first_name+' '+item.batter.last_name).slice(0,14) }}
            <span>{{item.batter.playing_role}}</span>
          </p>
        </div>

        <div class="_playerCard_right">
          <p class="_playerCard_sub">
            Limited <br/> Overs
          </p>
        </div>
      </div>

      <div class="_playerCard_main">
        <div class="_playerCard_titles">
          <div class="_playerCard_one">
            <p class="_playerCard_title">Matches</p>
          </div>
          <div class="_playerCard_two">
            <p class="_playerCard_title">Runs</p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_title">Avarage</p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_title">50S</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_title">100S</p>
          </div>
          <div class="_playerCard_six">
            <p class="_playerCard_title">Best</p>
          </div>
        </div>

        <div class="_playerCard_values">
          <div class="_playerCard_one">
            <p class="_playerCard_val">{{ data.non_strike_batsman.limited_match_innings }}</p>
          </div>
          <div class="_playerCard_two">
            <p class="_playerCard_val">{{data.non_strike_batsman.limited_match_run? data.non_strike_batsman.limited_match_run: '0'}} </p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_val">{{non_strike_batsman_limited_match_average.toFixed(2)}}</p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_val">{{data.non_strike_batsman.limited_match_fifty}}</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_val">{{data.non_strike_batsman.limited_match_hundred}}</p>
          </div>
          <div class="_playerCard_six">
            <p class="_playerCard_val"> {{data.non_strike_batsman.highest_in_limited?data.non_strike_batsman.highest_in_limited:'0'}} </p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- new batsman ovarall stats  -->
    <div v-else-if="data.settings && data.settings.new_batsman_overall_stats==1" class="_playerCard_con">
     <div class="_playerCard">
      <div class="_playerCard_top">
        <div class="_playerCard_top_left">
          <p class="_playerCard_name">
            {{(new_batsman[new_batsman.length-1].batter.first_name + ' '+new_batsman[new_batsman.length-1].batter.last_name).slice(0,14)}}
            <span>{{new_batsman[new_batsman.length-1].batter.playing_role}}</span>
          </p>
        </div>

        <div class="_playerCard_right">
          <p class="_playerCard_sub">
            Limited <br/> Overs
          </p>
        </div>
      </div>

      <div class="_playerCard_main">
        <div class="_playerCard_titles">
          <div class="_playerCard_one">
            <p class="_playerCard_title">Matches</p>
          </div>
          <div class="_playerCard_two">
            <p class="_playerCard_title">Runs</p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_title">Avarage</p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_title">50S</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_title">100S</p>
          </div>
          <div class="_playerCard_six">
            <p class="_playerCard_title">Best</p>
          </div>
        </div>

        <div class="_playerCard_values">
          <div class="_playerCard_one">
            <p class="_playerCard_val">{{ data.new_batsman_details.limited_match_innings }}</p>
          </div>
          <div class="_playerCard_two">
            <p class="_playerCard_val">{{data.new_batsman_details.limited_match_run? data.new_batsman_details.limited_match_run: '0'}} </p>
          </div>
          <div class="_playerCard_three">
            <p class="_playerCard_val">{{new_batsman_details_limited_match_average.toFixed(2)}}</p>
          </div>
          <div class="_playerCard_four">
            <p class="_playerCard_val">{{data.new_batsman_details.limited_match_fifty}}</p>
          </div>
          <div class="_playerCard_five">
            <p class="_playerCard_val">{{data.new_batsman_details.limited_match_hundred}}</p>
          </div>
          <div class="_playerCard_six">
            <p class="_playerCard_val">{{data.new_batsman_details.highest_in_limited?data.new_batsman_details.highest_in_limited:'0'}} </p>
          </div>
        </div>
      </div>
    </div>
    </div>

     <!-- player match status  -->
     <div  v-else-if="data.settings && teamWicket.length>0 && data.settings.scorecard_with_last_wicket==1" class="_playerCard_con">
      <div class="_playerCard" >
      <div class="_playerCard_top">
        <div class="_playerCard_top_left">
          <p class="_playerCard_name">
            {{ teamWicket.length > 0 ? teamWicket[teamWicket.length-1].batter.first_name + ' ' + teamWicket[teamWicket.length-1].batter.last_name: ''}}
            <span></span>
          </p>
        </div>

        <div class="_playerCard_right">
          <p class="_playerCard_run">
            {{teamWicket.length > 0 ?teamWicket[teamWicket.length-1].runs_achieved: 0}} <span>({{teamWicket.length > 0 ?teamWicket[teamWicket.length-1].balls_faced:0}})</span>
          </p>
        </div>
      </div>

      <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='CAUGHT' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>C</span>
          {{teamWicket[teamWicket.length-1].caught_by.first_name ? teamWicket[teamWicket.length-1].caught_by.first_name: ''}}
        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name ? teamWicket[teamWicket.length-1].wicket_by.first_name: ''}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

        <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='RUN_OUT' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>r</span>
          {{teamWicket[teamWicket.length-1].run_out_by.first_name? teamWicket[teamWicket.length-1].run_out_by.first_name: 'NULL'}}
        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span></span>

        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

      <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='CAUGHT_BEHIND' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>c</span>
         {{teamWicket[teamWicket.length-1].caught_by.first_name ? teamWicket[teamWicket.length-1].caught_by.first_name: ''}}
        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>
       <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='STUMPED' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>std</span>
         {{teamWicket[teamWicket.length-1].stumped_by.first_name ? teamWicket[teamWicket.length-1].stumped_by.first_name: ''}}
        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

        <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='BOWLED' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span></span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

      <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='HIT' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>Hit</span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>


      <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='LBW' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>lbw</span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

      <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='HIT_BALL_TWICE' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>Hit</span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

       <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='ABSENT' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>Absent</span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span></span>

        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

       <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='TIME_OUT' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>Time Out</span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span></span>

        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

     <div class="_playerCard_wicket_main" v-if="data.bowling_summary && (teamWicket[teamWicket.length-1].wicket_type=='RETIRED_HURT' || teamWicket[teamWicket.length-1].wicket_type=='RETIRED')  && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>Retired</span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span></span>

        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

      <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='ACTION_OUT' && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>Action Out</span>

        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span></span>

        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

         <div class="_playerCard_wicket_main" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='CAUGHT_BOWLED'  && teamWicket.length>0">
        <p class="_playerCard_ass">
          <span style="display: none;"></span>
          <span>c</span>
          {{teamWicket[teamWicket.length-1].wicket_by.first_name ? teamWicket[teamWicket.length-1].wicket_by.first_name: ''}}
        </p>
        <p class="_playerCard_ass _playerCard_ball">
          <span>b</span>
           {{teamWicket[teamWicket.length-1].wicket_by.first_name ? teamWicket[teamWicket.length-1].wicket_by.first_name: ''}}
        </p>
        <p class="_playerCard_stike">
          Strike rate
          <span>{{ last_wicket_average.toFixed(2) }}</span>
        </p>
      </div>

    </div>
    </div>
     <!-- batting score card  -->
    <div class="_batsmanScore_con" v-else-if="this.data.settings && this.data.settings.batting_summary==1">
       <div class="_batsmanScore">
      <div class="_batsmanScore_top">
        <div class="_batsmanScore_top_left">
          <div class="_batsmanScore_top_team">
            <p class="_batsmanScore_top_team_one"> {{ this.data.batting_team.team_name.slice(0,30)}}</p>
            <p class="_batsmanScore_top_team_v">V</p>
            <p class="_batsmanScore_top_team_two"> {{this.data.bowling_team.team_name.slice(0,30)}}</p>
          </div>

          <p class="_batsmanScore_match">{{this.data.batting_summary[0].match_type}}</p>
        </div>

        <div class="_batsmanScore_top_logo">
          <p>Presented by</p>
          <img src="./assets/scorebee_logo.png" alt="" title="">
        </div>
      </div>

      <div class="_batsmanScore_list" v-for="(item,index) in data.single_team_score.inning_batter" :key="index" v-if="item.team_id==data.batting_team.id ">
        <!-- Item -->
        <div class="_batsmanScore_item"  v-if="item.wicket_type == 'CAUGHT'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>c</span>
              {{item.caught_by.first_name?item.caught_by.first_name.slice(0,12):'' }}
            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>b</span>
               {{item.wicket_by.first_name?item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <!-- Item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'LBW'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>lbw</span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>b</span>
               {{item.wicket_by.first_name?item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <!-- Item  -->
          <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'RUN_OUT'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>r</span>
              {{item.run_out_by.first_name? item.run_out_by.first_name.slice(0,12):''}}
            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span></span>

            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>

        <!-- Item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'STUMPED'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>std</span>
               {{item.stumped_by.first_name ?item.stumped_by.first_name.slice(0,12):''}}
            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>b</span>
               {{item.wicket_by.first_name ? item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <!-- Item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'CAUGHT_BEHIND'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>c</span>
             {{item.caught_by.first_name ?item.caught_by.first_name.slice(0,12):''}}
            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>b</span>
               {{item.wicket_by.first_name ? item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'CAUGHT_BOWLED'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span></span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>c&b</span>
               {{item.wicket_by.first_name ? item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>

         <!-- Item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'BOWLED'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span></span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>b</span>
               {{item.wicket_by.first_name ? item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <!-- item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'HIT'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>hit</span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>b</span>
               {{item.wicket_by.first_name ? item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>

         <!-- Item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'HIT_BALL_TWICE'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>hit</span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>b</span>
               {{item.wicket_by.first_name ? item.wicket_by.first_name.slice(0,12):''}}
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <!-- item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'ABSENT'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>Absent</span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span></span>

            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
           <!-- item  -->
        <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'TIME_OUT'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>Time Out</span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span></span>

            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <!-- Item  -->
         <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'RETIRED_HURT' || item.wicket_type == 'RETIRED'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>Retired</span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span></span>

            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>

        <!-- Item  -->
         <div class="_batsmanScore_item"  v-else-if="item.wicket_type == 'ACTION_OUT'">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{ item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span>Action Out</span>

            </p>
          </div>
          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              <span></span>

            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>
        <!-- Item -->
        <div class="_batsmanScore_item _active" v-else-if="item.wicket_type == null">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{item.batter.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              NOT OUT
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">
              {{item.runs_achieved}}
              <span>{{item.balls_faced}}</span>
            </p>
          </div>
        </div>

       </div>
        <div class="_batsmanScore_list" v-for="(item) in data.single_team_score.did_not_bat" :key="item.id" v-if="item.team_id==data.batting_team.id">
          <div class="_batsmanScore_item">
          <div class="_batsmanScore_player">
            <p class="_batsmanScore_player_name">{{item.player.first_name.slice(0,12)}}</p>
          </div>

          <div class="_batsmanScore_out">
            <p class="_batsmanScore_out_text">
              Yet to bat
            </p>
          </div>

          <div class="_batsmanScore_runs">
            <p class="_batsmanScore_runs_text">

              <span></span>
            </p>
          </div>
        </div>
        </div>
      <div class="_batsmanScore_total">
        <p class="_batsmanScore_extra _batsmanScore_total_text">Extra <span>{{extra_run}}</span></p>
        <p class="_batsmanScore_over _batsmanScore_total_text">Over <span>{{data.score.total_over}}</span></p>
        <p class="_batsmanScore_t _batsmanScore_total_text">Total <span>{{data.score.total_runs}}-{{data.score.total_wicket}}</span></p>
      </div>
    </div>
    </div>


     <!-- team bowling card  -->
     <div class="team_bowling_score_card_super" v-else-if="data.settings && data.settings.bowling_summary==1 && data.bowling_summary">
      <div class="_bolwerScore_con">
    <!-- Card -->
    <div class="_batsmanScore">
      <div class="_batsmanScore_top">
        <div class="_batsmanScore_top_left">
          <div class="_batsmanScore_top_team">
            <p class="_batsmanScore_top_team_one"> {{ this.data.batting_team.team_name.slice(0,30)}}</p>
            <p class="_batsmanScore_top_team_v">V</p>
            <p class="_batsmanScore_top_team_two"> {{this.data.bowling_team.team_name.slice(0,30)}} </p>
          </div>

          <p class="_batsmanScore_match">{{this.data.batting_summary[0].match_type}}</p>
        </div>

        <div class="_batsmanScore_top_logo">
          <p>Presented by</p>
          <img src="./assets/scorebee_logo.png" alt="" title="">
        </div>
      </div>

      <div class="_bowler_list">
        <!-- title -->
        <div class="_bowler_title">
          <div class="_bowler_one">
            <p class="_bowler_title_text"></p>
          </div>
          <div class="_bowler_two">
            <p class="_bowler_title_text">Over</p>
          </div>
          <div class="_bowler_three">
            <p class="_bowler_title_text">Maiden</p>
          </div>
          <div class="_bowler_four">
            <p class="_bowler_title_text">Runs</p>
          </div>
          <div class="_bowler_five">
            <p class="_bowler_title_text">Wickets</p>
          </div>
          <div class="_bowler_six">
            <p class="_bowler_title_text">Economy</p>
          </div>
        </div>
        <!-- title -->

        <!-- item -->
        <div class="_bowler_item"  v-for="(item,index) in data.bowling_summary" :key="index" v-if="item.team_id == data.bowling_team.id">
          <div class="_bowler_one">
            <p class="_bowler_name">{{item.bowler.first_name.length > 18 ? item.bowler.first_name.length.slice(0,18) : item.bowler.first_name }}</p>
          </div>
          <div class="_bowler_two">
            <p class="_bowler_val">{{item.overs_bowled}}</p>
          </div>
          <div class="_bowler_three">
            <p class="_bowler_val">{{item.maiden_overs}}</p>
          </div>
          <div class="_bowler_four">
            <p class="_bowler_val">{{item.runs_gave}}</p>
          </div>
          <div class="_bowler_five">
            <p class="_bowler_val">{{item.wickets}}</p>
          </div>
          <div class="_bowler_six">
            <p class="_bowler_val">{{(item.runs_gave /(item.balls_bowled / 6)).toFixed(2)}}</p>
          </div>
        </div>
        <!-- item -->


        <!-- item -->

        <!-- item -->
        <div class="_bowler_item">
        </div>
        <!-- item -->

        <!-- item -->
        <div class="_bowler_item">
        </div>
        <!-- item -->
      </div>

      <div class="_batsmanScore_total">
        <p class="_batsmanScore_extra _batsmanScore_total_text">Extra <span>{{extra_run}}</span></p>
        <p class="_batsmanScore_over _batsmanScore_total_text">Over <span> {{data.score.total_over}}</span></p>
        <p class="_batsmanScore_t _batsmanScore_total_text">Total <span>{{data.score.total_runs}}-{{data.score.total_wicket}}</span></p>
      </div>
    </div>
      </div>
    </div>

    <template v-else>
       <div class="head">
      <div class="body">
        <!-- <div class="scoreBee_logo">
          <img
            class=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAMAAAAshD+zAAAAw1BMVEX/xRUAAAAAAAEDAgD8whX/yBX/yxb/zRb/xhX/yRX/zxYFBAD/0Rb/1Bf8xRX/1Rf/2hf2xBXDlhDxuhR+YQpmTgjuuRSyhw7UqRL3wBSWcwzWphKshA7GmBDothPvvRTjrxOhfA26jw81KQRbRQeHaAt6Xgo9LwVRPgaNbQwdFwMmHQNjTAjOoBEvJQSjfQ1XQwdxVglJOAYpIAQXEwM7LQUSEAP/3xhDNAboshPRpRLmuRRSPAUbFQMJDQKafA0aFwPREbrrAAAgAElEQVR4nO1dC3eivNZWJAnBgIPXAqKI9ypVtO3R6cx85///qi87CXhFre3czpq93vUupyLkYSf7np1C4R/9o3/0j/7RP/pH/+h/mwwDCTKM3z2SzyWbk4BGKQV48O/fPabPIV1HpmXRph8H1SiqBn5YIxVGDF3/3SP7KHEErFKr9obJfLIav/T7L+PVsjEaLmK3wv5ufLpOLdtv1cda8Yi0yTDybUb+Xng6Im64GAOYcrm0Q1aS/9gsfBfT3z3Ie8mm3cUjgBH/7VFJ/eXHNLTRXyk8dYSDieSamIibRn3qedPR4ElMUsE9re91zb9uZnJZwZreowKhTaYtLiWbNdetdcK42q5vNDU7tUFsor8LnqEj5o80Of6n0SK2KxYjmCs5ik1WqdSCXtJXTN20XPy7x/su4qLkYSm5Vh60HItwwakEI3zgX1tONH+U8Mq9Gjb+IubZxF8JmaH1Ww5YJCcX2AWKgwGsvnJRmzbJ7xjlfaQzgY0Pux5yg+v8RQgXutGjYK82bJK/hnUkbEhs7aZJ96djYTc9+UfDpHFDopu6f43Cc4YgS4rfW0iZIPz/xPpSIYiyLxUuHRU+LnZCLnYAnWf/FcYY12/tZxjwrGXaimvUomEctT3PW7Sqvsu4gJFf6KRZFy/ix4JauPDn46PhmEsJPiexGipYYVGyVgamtvT8Lk2/s3FNsvkx6tSQiVHhT8anEzfRAFzPpXKcBuouZpqwukolYYdxOUMyAUo6dSlYN8PYcbjb9ye7ejgW2JZbaVfpiMYTTZmUGbqnNrFT3pFOAgqB/7U8rkcOw4b9h3KPL6IRDPUxxrb8t90eK1s5M5v55+89RzFWt0m4zCzQp/kwalp/6PLTrYAvIT7xsNRcyGn/kHzZJyEfXXmFwdHFA+kKievWDS8KaQWUyB8G0HA9wLJ6UCuHtB6L5VLxhPbQcRFi+sPlU3HnQhQb7Th0TUb/KP2gm7Gwu4bS1DeoPzlhW4au52TGi0GceDjWtJSvIFR7D10X4TwD5zeQXWnDrOxXMfigOibJsaO6R9qCpZLRwNRwu763ElJVvg5Nm3g+5srhjwmVmUOYWSM5HmQHrzmME7ybRSZNjRVujDFcC+PefG/5abNvw8Dhls0fsfxQcw6c6lVgLLrZvcQ4/s0mzLSaoW9xxWRM9yNvPtstP22ceNWmVRFe0++ExtdY8MIH9BxZMGbdDNcXsMFXo24qVLDbWwRbgzGzQsL2aCLVvgTYH7XjLRJG6W/EhwgI/uIkNuU/q1r+rCwKV65lyyADBzcsaqPWQ8elhBBWi0bjZ62YrcBywr/Ssfkb5ScyPRjQaAuBA5263mVwwOTYSo3rNy5nteK8HTo2otR2ukFdxJJUqEzTxFcG/U3xMh1xecIHMnVBfutkC2GUS9D4l/UOVeCIeDFaaT3o+YRhggvNMJ6KgK7SfuorWvgd9plOWR1YtRC6STe3jSvgQNu1WGpkdgZK35fHDS/WLWYys8bly7K4W37lF/6VXWG/fvlxcCMA1yZSWIbza+D414NQOeE2m+5AaJNhO6gRxpilx+365FEgk+p9UudfsV8tP7lnneyDu845YN1UBS5ts6qEq4y3a+Nh5DcNYnIGhotG/4cM5grsL/XooYOY+QvdP865fXDcQbgKjl/OlZ0UEahW33kP8sPrqNrp6hRTTJqtZKbtyc/XJBJf/Sr5omO55nqGhFqbXgfHWTdypLLTK61910iQpq0brSbm6KjdfauOpHqXTqE2a7Q6BKNfkMqEBcD+4wGaYU1IFENvXVUFwLrXkCpwsZZNyh33io+bZBESZhKzsPWjen83O+VXZuXnun/83tiy3OD/VgAuCUWAXDf9G8AJ1aGcv1pUX6k0iQKokL5O6ovY5uKFy8+gPVztLb8fk9HC5/Lz57h/Ohi9FtnGrSHkN/hoVrEQ7zp7m12dluL9PzBlpjA78Brj8h4s4J+UnwMv8mtcvJjMjr1k8yrxSfdoyr/iY/hs80UvcHOp0A2r9bXiA39YZCnDeXDJcFYEitE20rthhv3pt7KWsXWPgdrGi8OagTExse8t1UWCgdpmGoQ1ZJJPlJ8Gosh2OlFDU0MRo1lXhaMm7a+r4PgFmzjV5PyOyKBOuBikd9xdJ/Ct63HXsal4bHte3nusNhsFXTDdPkW8cCMImWan3Xj6sXuFxX69GrqKEcifXV90QO1K9r517luY2O347WSXpczAcQzP4yTqEsLtM7fzECXPu4u0V/iKc++j5hlfaNxI8BcjaTxIw0Ib11vxlsLkENdgZ3LLoisVk45xcO8CZZYdBotEeXbZ8pMfngbD1paBfWaEQXu03rvoaVlvb6X5cj8403Lj9nCyJ7bKXGwFrgUizZW6QBrDt4gUrWUdTiYQfeQL20ZeMj6QnyUlaB7nU6iH4OaZWatmF0n1Ppi2fNu6Oy1mFLaBDHioF/b6Mvd8DLqINv1gusBS0yH/RtYNzdOVAllKs+JWh8v1Ad9S+VmeL7h8IfyZXMgOB0/lHQO1eS9u3hla4vNtKJCpZaBNeqGDKaUFtxlPX7TiqiPvbLPhDXzj63ISnjejoK4KImP941IWiRRiSF0Xyq6w4083Whrahq/a5D7JopvOSg4KmNZohV1bPKBbHT2K+//o2cLq4MZw/wbWlYplD+fl/RG3H92u35to+9xLSdNehrF4sXCRFLLymjq7T65wcGvJtvWo9TXUCZjuzdZoNUst24GjSjCc6Q2qjl8xJzhvKFx28QnvQmRMzrzSsXxZDqsuM00uP8O4nZTlEBJG7wNHQojZacmiusV8UXOx2ZrOn7KVXy7OvioHuwLh9RsUef/h0hLhy4+yiu1H00Hq2WXyRfDvJfEikJ/MNMLIG8AdB937Fh0qVOHn685/GDdoXb/qDfZWs4j8JK5kHep6N7BOGJi5rEvxFXDF2rbqqkxn5x1JITlLFkGocwZa/xGJpo1/V2knNz16cP9B19Tdztfe8owxr/nKXrTCx+vo+PerW2qJuPzErJtFxopH8vNHo/3QcV3mg+fwFBn3sE4me7kj1iW1lojwH0w8ZV+ivRdxw7zUQnbTErHB8uoG9fVOdOw9V9MGfPmFkDV67tmX50IOONaBoM2r57J4ssMjp4hANuj5texNdCfXoAlwbffai5ZODTf6iIlqnXi6kk88ss8aoSXffd25pwBEZ2FfhPptBhmqI9/ksdGr+m5mIOiIVh+vWpglGNTFealzo8hiXF8YqjqCQWRscCQ/+VheYkuumvl94CohSMS+j9giVa6KZTNu9YWksl+sxgV5/aSa9Ay9fq1cGgumftQKaqaR1bVQ9gX57dHk+ZCBr4FViECirJx7KgL1yoMQR01qeXuj02aTeqtpMXzkE9voYX6LSIkuLDod19orTVsP/b2EnfD/WdhONo/7w4gqWIQA1neVO+pmAD9eOpgN01FzS6FedYgoPT+53oper/FtF3o5T64nub85lDv8aYiSLlSCZPKzVTE7mojN3DMtjUIbftwg2E7UapoN47duAePzw0P24po6KIn8SZ41yF9PSV3lHcsdA2GsdztB8kOB61H29sTHVY7vCfvRGsSGi3WMtwMABwn+DvcIUJ4PpZvNi5k6xfxWzqLjy+s/njD3+NA3/snsFU4z8+fwCH7FsMa63+B+bf39Bhg3vhL4rYdJPJFOfrmNqHvhRjr2X64rO886dwtdJ8z3sp8/xmeu0nWXuFCKBOCSkHXBi9euGT1nR2r6oCQf2xhXx/BMPr0j/aKS0imNvl+dmIl79r2QTmug3Cs+9P4p5wQhmTDjVwx85g6hJml0R6WjLKfk5g3G7bUEN7tixxk3OOV8xsX09C7UjpP0ClBn9eb56kVDyn9Om4C5PZBgjc77xaXOYrDdxgEm3qsE99S5asYhp355UsLkJie3QU77v9kV/FmvOYzjHI4VuHXE7DYoh0nnNovu4DZWAM9b+ZiIac5vOXauz268Ta4tuyE78li5ZQouPx/z41T4/svAznmN3GwqKe+5xewIIhPjG83Vg9tUqoBpGWIyUuC+mddnN1+qy4sikyuXI3ec26WJKDZ9Hca1WtBuR2Guw65bb8rK0xZWIX4C+zA8K6Euj/KLmN3zGiGJmlAD8wa5ZFOYzvnouMF0GElJq+SKy5ZbQbRS+fLFzIyvk1GBcpMOSc9C4QsIl/vAwSMTG5O5GlcjP0iw9zuKoueLdSmzlr2nmTjfhsJfmIfCVuXyPsWEyQkHObixupHHaGcDP3y4aK3mgGuBnTximCzVWJNbwIFCWFxAB2Xq+2vXIMJy1YbdowJThNyuWzgSmhzcNxVanzLsfJPgzimXW8DVK4R8U7O8fhM4Ltedywphz0vRkdkui7Syc6QgkB16o2HgHEqWLO3CTRTrw+CGFjFXyvoa4hsNHXwJXbn4smfIG6G4+7B7JKuQ2+7/0EqzpHnwTA6uUZTibWhRMvgoOOyMJbiydys4PoT8XHK5+N1PJ5tO7BHI/qR5qIh1nUXK860fuDR8hY4UuLqJPw6Odl8kuNf8kOoZdMM8dNyQb6dmnI1iiB72Q7wvGHWDmeFARPb42GN2CK6uFNOIfhjc1MJdxbnn3s3gxBvOcczBu6ip5L/ZmYPt27axQRFKoWHUSY0xyFnuG7T74DDlcvyD4Og94ECq1M/zrrSzmHQzhmsaDikYYh82yBQbOdVJ+mLKR67dITjc+Ai4EndQaLN/D7gCcXLXXVnqXR03wRJ9CSrdOGq3giaBggXTT3bxPP7gCJ+flomLPwZOcG67A/cetxCkSvFckL2U6l29EkPYZ9kbLcfr2fplOary1RZNisrCKUPIbR0erjl3uANHPg6uqQTK9/dxTkmVU+bxP1RFSFBnbfj3bJZ91ff81kzwq5+IQn1uzjj7enwP3Mj+DHCpKvi+oO8CZ+imMy2fostCJIgblYKzpbLYRgIbEZag0ovPjSoOk/HTy6B1aDjsg8MYf1Cg7KuC901LuAd1eqcyswSFqCAuSbBJ/7D7CuixzW0Yijt+eGy3HAiUT9BzmRIvTd8LDmQmdyhPl90EnFF7F+w9xL7xbYqgUB+h40BbVi7OlTj5BHCEbJT5dQc4HTvR+FSq/Dfg4tKuTM8sSIiOYLGTEmLqx07PHjh47cuPGs44M5xzbUt9j07QoerqZJ+PFn3hF+JzTnupOHKN3Dz3gW0pR/YBcCMzc3m4V3AOnNg0zZjFiTGx8W8focG/jI98c/65VXFziiC48I9IbhxqzyuYfsgrUM4qyZzV8/4c4n9tdkJBnWZNxyYRCLMLbLptHE89D+mI9nLcvtFxkGVvVCxLlXHzInVW7wEnwwyYpEG3s+l6Azlhqz7YrNfrp80g8Vp+17FthOguDGigQ0OTgxs1CxSfD5SVi5P8HN7OE4cwg393mEEGiCYyQFSUAaITcNztDuaP5WzomlZ+7M+HbSgLpRn7DNr19ioChNBAoILPg3sKclPBupUWQGoLyw4gnrK+B5wVQPR4FWM8VZplc8o5szN9PB2f9n08ry98mhV/cnWuLA+JrjiuCkF+3rD+4eWmgjnnyvI2zy3LjsC2uSu0J4OyL1VM5Nrgblf3SKDYqCMCjvs1I6rqgD99OWwHWyard3VCwGbMhOZzy8wHp9VzA6S7utx+xBwRlF3eE5TdC6c/SXDr8Cigge3h2RLgDGF/FPlNygCfbfrz3cLTPAY2fQ418lPBKFBPXAXM9UQ4vXlHON1U1QIYVzcS3GNc2BdjuoHiC+XNqvLntR68uQgbuk2bWWK5VBxWKB7l/fRbbioY6W2VCJn7rCurLe5JhOAtPJxrbiz1Ubn44zAVxv3oxg2lNZq28joE2TZkBJSXwPWnRbF3/rel/Dy3jmWhP8jbLesKN95z7yiQQjURUEwwrjVS++sgFSaS5lewKZdzXPeZqfNpXH0RC69cbHBt0Xo6+3MuuXLBmdtEgZvq5hvMKK2l39MkxxAbBuYmxnUJrpgcBuBodLp/+gw+mXGqB9jSbRbD4EqiOhGFy7M/L10Ax8KVyqy2Tfb2XaSN72nVwcUlgPvmUCs1cL919wUTuqlyO8M37sW2aXPd8SwyRrGByChHXOZPy4qfap6oYoYwvu+dexL+rizVGIeI9VQR+dPbPribNrqkBPD67Q4EuVowvqcIoYMSkH1a5klL/UucdraoWlKc9e+rQ7FCMAbWgc1a/5XjKz3cx7mMNoFDCwQ2pf3oUURkPvqIYPrngqtEYlbyFxVbrtjQPbmzPKoDiu554bJAVcxq0UHe2GjfsNHlYNTF11FIEO7wt8Kdw4I7PBNAOs6U7JOhewrcPLSaIlGZ+yIugyPNRFbtsbABgwBxWdtPPrH4nZyDiyctwyS1aMVdDNdqnb3odZFnfmHRGgjuM2xaQg//8G5I954Bh2Xl2KrL3KkEVxzsl6XpFnc53okO1MA0NLHpRxRxI+jMDaDcLKewQDfjF3lJsWVbvly7xl3t0gxp6nx/MyEEJ8Yw8/cSfTp1F++alwqe1ogxorAP23AWp7yHiqy8jLgVKQdF85kU5qvwvjJgboF8F/chVlWJSy3+chj+fXkn68RdirOAikwjl1nnJvYoryhbryzU5bOQEaFl5859fe5E6b2o/7RkmruU7uVMCaG4/17WCdLkjiyduCfaBNLKp7Uciuxhuj46DKq3ysX63dXpjiiQGjZZmChwo+2hPYCi/g1l6ae809Quc9w53pFQ4nZQXggF+UsZP9GmTeaDU6F55p3TktoQMOaWEnMXytB6Oaq5QwXoAPlueGUheOH90RPWcRc7hxcGac+UCV/VWRUax8xa+M4dIcgQOz202CKpb3Nacwd64v3wyjAhYFuo3TloFFOCQuE8DY7UthqoZaKyJ8vSv7tNDOoK0zYiLFS7iIresdvLpYo3U+N6F7risIZ1XdQY78fTtWquOYVEbgCI22dkCtux6ndj021L7OWf1lhH7nQvFRun9V/IFj72O3kn+hMh6GdU3/22JCGfH46B/DT2PXS4DQfTZfHl3h2QOjKFGp/EfNGVJLin6HSSY9StgrXw3rmp9VBa+qjSPNysyjXyuTfo/VDxjioiEUR4XqP3R75SMig4l8VyZKEwLaw/KUuDoD4jYSuR29FuBwgFfMzWbeTvgikjPzdNxjXTN3ENd8O6lIlq6KX/gZ6ZqCOc8B4jTrpvYn7OfNB1ZoWLpK92xNwIkLMgJkhHOJxOZpqmrZdeyNHmKAKddF7V/OVaXmSMVduSO8k2xbJNalgluPm8rJ6NmHLRUKFBXW0/u3GGQn8iPst1yrYtb+pFTfOCRqbSxQEt3yZI9jG8VMd/lfRKCwbbj4iyRS4FFW0D4b3y+JvAFWXVho0Qxvhie0Hugc1VCmQeErsHXHz031/TtjdeUwQvtalJsShR53e84PoiTKE8fviidodd5R9IftXUgOa2blXgrAch00AdmdgR5kmy/Vh/aF00nhvYlE1Tg7xq52eYuIAVjb3U+pMVCZfqE4svvhR415ouGG6qELXIop3+qe/8fmyW6A3Vj20VEyidFmod4ytgVqFh0J42Nlly4AILPeeWt6/a8wqj2Tf16Acf1fMdWYJDcP6TmJc27qaxque86uodPgGQdKq90WCzLl9ag6XiS2DeMhC5+mEIPddsik4Ky+4HweGmSAdMuthqq3m56yBxGSFfgiYjW45wvnq+gG94CzgwZFRP0NgyfWBcaXHHXpBDotIdDwqmP1GvbnKNddmIuJhAhu3Yflpse451qxhd1VaidZG4Wks6ZqEtrOfwo52TuQSGPSgi3dBTRmDudpwzP9e5o8IeGq+yjuYsOG14Ntd+CI5NVZJBqxpEhIZuK7m+PDrhLJeL5VAELYpCOCTXd0/sboDcvXKTcvmkySfX5N1rTeMNOysOeOkQiKRwJdd+X0HTWUIPTzLcRLZpUkdrWzcb47Bql/PGfLnqK+vlqIkp7BEqXH5ZOlUbN2QyBoJx5WLj7eMdpXRZp1MccLMv0pQaTZzbPQ1U85vNZieMo8W08e3p9XD7txjwyL0SWKVvm9SE8A0zEAFBr/Lxfi86oovvwpRg5C2t1Vq33jMlkGGIw4goJk7YGvVP7LP+20UJBc5OWc3KBGMmUgwv1TtbThySwY26MuzGw+7iVbGu8Z44r5g+AI9y+1F3375O18U95xaih5e3ILPOd/XcpyqloejWN3Q/pc+ZLV/VOjLR20o9ZFbN20p0OCzQ54AKIUNVTyHCSM1vNXab6ssigXjhLkj5A2I9UCw3WXzATT0gMxC1aXVMcer4cH/xFpuVVL4w221uw7BTM6wvFWgW77o6rpihaD4k9wLCdrkLi05aSTLB3mK0u5Ii4LPOVHE8EE/jmKJwol4hN59vmPLbKpci9VHSaCT16SKq+mHBYlB8oxOrKbo9yFe1vGQl2o5UsPB+O9SOSsJm/qwjR0RHEE4jTEUDx+vjkT8zt0fl99omaX/tuBj6dnH/oVMvq7XX9/MnmW4FffUStIhhWdjWv6NsKOf2oooc7B1RgadOE2pdzYuRRbGoGsXvusVrY893bCg6RAUim13ze8f5No+Nh2q2QKdXmZzRenfsws1DZ4qgrDZ0KWmnrFvF7OLEtOVSPQIH+F4HkWMK3wiHU3kGxUGC5fA2JNuxpsWEbOciyXVXIjwPXLMhduQ+UGE+y2cNr9it+DRvmkJcN9ous2Fq1tqQSSoGueAK3Xm6zJMaIZF8y/Qzz1KxxZ4b0HU7M+U5usQ6hIPzXZdk6dT3eoCBe5hEED2s5u2Mx1Ql3qEpEIJQLNSpdD6z16VOHGFXaoFpNhXrSsXBW7520qmTW9olM6xP7Q6G7hUMFl4eOBs/rNMVV3eoKWxwbZpfbXoPITtYA+vqNWwEz8rOK3t2rq9iIP9ifxSYnomPZMj5KW9a6mYtSRm3Cg3MGcf5PvA/+QgcJOtluTCmTrZD6in3KXKfW/lQkpzQSwSNT2wurvLWHK6maRLNw6o7dnHxsejCKRmww0G6cjRMTXTRfOk8OKiL3KNzMTD+h9ce91P5ugqaZ3Uyt03G6RpodKkhEyHzTzNOdg8iogRE65kGUV1L+FMXTg7vkD+qT6fTYT0ZrNR5NqVjPxUyrJ4oI8nJE6NuPb3ylU8ZLKaoFn3+qVMytgZTn0IGoSTXzSw4P0UMbkLahJnIboZxyxsNxs/pSjtceBJdHvt7qWQuTruIygzoPcWj19ERoQS0xKas+pwOrrHNybOIDkk2+ASUmAxzQ/nlVXWAP2Ce1sthvm7sdSDZhCbeijriV/9nHBfGTUXRAE4LDGT3slEO83Y4GNDLR4SEoRIf2nhV5+cimFr7fGsbHTvz7A1UuVxty2zz8b7kzyFbZcYnHYLDQbrQtTY5q3REQ0UKR5sIP87g/Cs0/d6BmypHDmmWM9iynZMwW1xqxY9Sf39ON9kzj5P12l4X4bTsi48tRifoDGpv4bDcIPZDl32xTApunMGYHvc2h0uPfz5XBaQjO21+DYkuvs4TcVRYzqv8BEKdleh+UTUpmmpKH2iDUysWV0fJcrLabOCkXO7IxXA0CDToRxaNoV3yHjw4ne80QCRUe2rntYiBe+KksPdEpt5HOvcJhBE/32KjO0/HVhyejM09NL208agdhwVx1rHOaDQ5qg/YnAT9oZg5u2YKztEYHtwPLnsiHyO1/2aIEYpX2QDbh5tZDRqvMuskNVC0QTvsGtgo2AXcHR6UnpwpMEfOMJu1jZBS7qKWxPr+SXNSEIHILzfQ2xSRdrbsXg/TtzaB7Y4nFok2q/sEkqdI7BjcTcuZf9S6SxeGltJwjwGjtlwEcjfoTyPdbIm5z63Y7OXyEYyDvdaufGjTY2DKDe+PuL6CBoGigiGFPziKE8L0L6cvTmvBLJEu7eUI4MfBka4olis2XLQLr3OB94AzdDq1zm5pFNbXyutYEEBhYT2TF4vDWa1TXJ1l2Ib8QeFKto+knxZbOEuGrHzmT1o4iO7M2mKjswsAU7F/+wyBG6clcQE6Z5tq2zAXT53D7K9N0gJa2FrdRKQrIjjaiDP4Jx84YaBAnMemVfn6UV65sBxq2XpA4UqF4k6Jw1u3aiA2qSObf2i9o6yKPONUMm7DlahwdMrFb+HHMuC3kE7tntjCtokJtb1MqIDIU/ANiMXlJsIh8dEBgxSJw0xBGB6Ao51RduWaLzjcehUmevQpuYFrhJxEzUQk3n465J56uFHw6+N1Wsxwzo3T5iLoKftOtA4lrVFL92rBLbkw8VfSN8ptrvi5ZIYreZ6vXSDK+xGFBq1Uw7phHFdb00ba7f0IHXi5XxnX52a4LCYHkXQ+L+rZZCgOuxjJuFtx9DMcnXOkM5h3EBpFHGga6isXh2nGDBFmVb7QbbCoL7+fmaAQ9fwKEQYSN/zDLjzuNLMoiyOOzVU9wT7f+84lJLVdOcJctPVT0TbN0oHQu8uF7eNwkNDTOTeuOAixoSOjVjho5VLbLWIuRSkSaQJuJcQ/xxc4R3KPHn+hP2LTNoK0mC7LdUIhF5xDBg4ddWTzlhPeye6GBwLw4EQOOKaIqJe4yA+z/QR0Juw65OhevrJCoSpjfSk4o+A6JsYCHBSjIDf0TippSwfKQ5LhTnf7PlfcJmMtsYNTm/5KbOJM2G9iKc19ZhRa8pAQTx4liJ3hapBMW75jyWMACavFJ21fwAw+nGo06zgFPl7AFVwg6/r52vulp13qNmyrAZHZgP2oCxFsV+BMUXiqrSeJV91aFcRXH2bN1lGJvsj87jU0LhDQAWWFbV1FiHxdic+fl2e8kQwuMquPYmdO0uGm4UJsjZXgIPSuUKyTduxa3FR2MTcm97va8A+b6t6+IG5AjoqZnITtR9j/Jv6wupC7+2kkHAS1QUA2yM/AzUU+Rx1y03twCSRTKV58L2ZKEQa9Cy3pHErqnApsfKnKnEfx6adEu66S2LMtQo8uF8lv320AAAVUSURBVBocnRQoMmmyY1Dx1euILhQGqb4U9wT9ng7gCmW5A/4Y2RxbIuOawX1byD5KOlZbzDSvRqECuf5FgdvJfunGzRYirkyJL8wN0CG97q4wljuAUT/FVi72I6SwcT82ul709pMIuyoxCuicaZspabl/3J4QIq9JzMARMMXeGC6FIndnUeoEL9JyBehPDXyD7eBl8PjvOmrhc0hIbz6I8tTFuKkOIcLOURNBwLeKEAYZC+g2sPcxc20LZjdTg5yn4yqXJVApAC9tcVO1y08iW9Sagsz0mmmjp2znxqFBoi1qBIF+HDV8tpMROqXhcE/ObGLK56QUnFrvlyrvU8KdkZKZHZIO116ctsOCTWVChCDH2a+wp7a/f8LbxIf11pCuRO+ergufSTbeyjC0llUBISM6bbogMqmws9DAeGdPcv3Qetpj7xzsSej9LgIZ7mcV0txPpKnQJaH0Jw0jHh+tOXl0VSLqdvdK7HXWHJV3ogQKhLjNNRFy8rVn/1qj6xzpfN3VxfIvjlSkB8k+sSkwuatwAocaHh7Rhrk7p+00nzbl65ZUN2JOPvI5+duxFfakyqwldRdy5AEH6qwUrtU2iReb1n4yh0NjtVbW7gxai3sORjgSbnDxx+J3r7eMlB/23KNi3kHcMgvtaa/9xiI0GT1oLYcIdTsHGmMcEWqk3WBeW6eZo99GoiIy7VeXHlsNyL4vPTi9EaGDgDm3OpxOb7OPbe4jash3BD7B79RvJ0R1aLOgWrqpSOMq6cVhBw7XPOAaFEXhYLhMK/aEBTncGogKrVKCjhn2JxeafIygX+BL2hbfwLHXiwK/o7OK6By1j8ywrLDXEFtEStlyW3QpJfFAxqQHX39agvFO4uyIX2Zv6o3rNvtSEWelHADTEau4gTcXQqOUaYBlhClxopVU3cnDZ9fQfALplaDuZ7Gs43aQcDanaephMOVuzyw7wAc0QOKbiHZ736XJldzRo+xXEHWaeZkKg8K+wbAN1Razg11LYBwjA0LowMQf3l29W34BoRwxAAciYdJpw4ZBDq2cqQluYw18aL4NhXsA7ilyfr/JlUfn+IYIHKjYS8bfAdrr6x40bveH2DBd70mJktj+wNboX0a7JqyoGUfeaCXPDn59LO1Dm0c64e659Cu46R3+aWLyLImSqAozTW6uhCq7fFC3Bx/7062JSE10T4S0nef8maLkmNxarRk+xEEHU1RbzM4dqahNAooRDdOunmB+/RXYUNgaJhtN0+Y+NWynMz0KN4P1uOhyIekEqQ2WhHni6I8jN228/eh1GSJunGhZWz6RGJ/6LkZmKDZVlAVU+rdgK6BOeyNXUrFRpQTTsLUUy05Ca0RNbpPY7YkmL2pUHfOTz67/iaQzJhJXMPK+5xNiEl8euykO+QxNYqIAyojggtkwvLNL0m8iXSd2D6qEYPTLqMOVuOnXQYmvpiHDpBC2+/JLbRJR+vewTZFB/IZaUtx8dBBFXKO9QJNSirrVpRKgEDW7ZT/Xn0YcQ/Sk5MhrPcRwXvabi7iVKVvngh83id3fFi//EOmGiR48tQVQ6w/5SuOyhZA4man5+tQLCcmp3v7jSUeWGzWUYNEGnk8tvTpdqT+U61Xb+luhAelGpTNNBYs2WVS9l6Ji5WTh/tXQgHTQ1cIA21PiRe1p2jT/Biv5GiHk+DL4Kor0hPc9DPGlnjx/D+kGMZqB3FwsAuva0O/SP9cpfSfpBWZ2oroMLzx5QY39RdbWdeIWS6XZqi/H82FkV/4+i+QKQVzPDIMmYydHtvxPkNzT8z8hR87SX2lq/aN/9I/+0T/6R//oH30m/T/74f5zYgjGsQAAAABJRU5ErkJggg=="
            alt="ScoreBee_logo"
          />
        </div> -->
          <div class="_scoreCard_logo">
        <div class="_scoreCard_logo_main">
          <img class="_scoreCard_logo_img" src="./assets/scorebee_logo.png"
          alt="" title="">
        </div>
      </div>
        <div class="score_card">
          <div class="score">
            <p class="bowling_team">
              <template v-if="data.bowling_team">
                    {{data.bowling_team.team_short_name.slice(0,5)}}
                </template> v <span class="batting_team">
                    <template v-if="data.batting_team">
                        {{data.batting_team.team_short_name.slice(0,5)}}
                    </template>
                </span>
            </p>
            <p class="scored">
                <template v-if="data.score">
                  <!-- 236 / 10 -->
                    {{data.score.total_runs}} / {{data.score.total_wicket}}
                </template></p>
          </div>
          <div class="over">
            <p class="over_played">OVER
                <template v-if="data.score">
                    {{data.score.total_over}}
                </template>
            </p>
            <p class="power_play">{{data.power_play_type?data.power_play_type:''}}</p>
          </div>
        </div>


        <div class="_scoreCard_player">
        <div class="_scoreCard_player_main">
          <div class="_scoreCard_player_card _batting" v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans && item.is_on_strike==1">
            <p class="_scoreCard_player_name">{{(item.batter.first_name +' '+item.batter.last_name).slice(0,10) }}</p>
            <!-- <p class="_scoreCard_player_run">529<span>(112)</span></p> -->
            <p class="_scoreCard_player_run">{{item.runs_achieved}}<span>({{item.balls_faced}})</span></p>
          </div>
          <div class="_scoreCard_player_card" v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans && item.is_on_strike==0">
            <p class="_scoreCard_player_name">{{(item.batter.first_name +' '+item.batter.last_name).slice(0,10)}} </p>
            <!-- <p class="_scoreCard_player_run">529<span>(112)</span></p> -->
            <p class="_scoreCard_player_run">{{item.runs_achieved}}<span>({{item.balls_faced}})</span></p>
          </div>
        </div>
      </div>

      <div  class="current_run_rate">
          <div class="current_run_rate_text">
               CURRENT RUN RATE
          </div>

             <div class="current_run_rate_dis">
                    {{currentRunRate}}
          </div>
        </div>

        <div class="bowler_match_status">
          <div class="stream_text">
            <div class="blank"></div>
            <div class="stream_company">
              <p class="stream_small">
                LIVE SCORE AND STREAM BY <br /><span class="stream_big"
                  >SCOREBEE APP</span
                >
              </p>
            </div>
          </div>
          <div class="bowler_run_wicket">
            <p>
                <template v-if="data.bowler && data.bowler.bowler">
                    {{data.bowler.bowler.first_name.slice(0,8) }}
                </template></p>
            <p class="bowler_run_wicket_p_second"  v-if="data.bowler">
              {{data.bowler.wickets}}-{{data.bowler.runs_gave}}
               <span class="bowler_run_wicket_sub_second">{{data.bowler.overs_bowled}}</span>
            </p>
          </div>

          <div class="over_every_ball">
            <!-- 6 6 2 3 1 6 6 -->
                <ul>
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
                 </li>
                </ul>
          </div>

        </div>
      </div>
        </div>
    </template>

  </div>
</template>


<script>

export default {
  data() {
    return {
     visible1:true,
     data:{},
     over:[],
     currentRunRate:0,
     requireRunRate:0,
     leftBalls:0,
     open_terget:false,
     bowler_economy:0,

     strike_batsman_limited_match_average :0,
     strike_batsman_out_status:0,

     strike_batsman_test_match_average:0,
     strike_batsman_out_status_test:0,

     non_strike_batsman_limited_match_average:0,
     non_strike_batsman_out_status:0,

     non_strike_batsman_test_match_average:0,
     non_strike_batsman_out_status_test:0,
     bowling_style:'',
     last_batsman_wicket:'',
     extra_run:0,
     bowler_match_economy:0,
     teamWicket:[],
     last_wicket_average:0,
    //  is_not_out:false
    match_sixes:0,
    match_fours:0,
    new_batsman:[],
    new_batsman_details_limited_match_average:0,
    new_batsman_details_test_match_average:0,
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


        // new batsman
           this.new_batsman=[];
        for(let i=0;i<this.data.batting_summary.length; i++){
            if(this.data.batting_summary[i]['team_id']==this.data.battingPlayingEleven[0]['team_id']){
                this.new_batsman.push(this.data.batting_summary[i])
            }
        }

        // new batsman limited match average
        let new_batsman_out_status = this.data.new_batsman_details.be_out_in_limited ==0?1: this.data.new_batsman_details.be_out_in_limited;
        this.new_batsman_details_limited_match_average=this.data.new_batsman_details.limited_match_run/new_batsman_out_status;

        // new batsman test match average
        let new_batsman_test_out_status = this.data.new_batsman_details.be_out_in_test==0?1:this.data.new_batsman_details.be_out_in_test;
        this.new_batsman_details_test_match_average = this.data.new_batsman_details.limited_match_run/new_batsman_test_out_status;
        // console.log(this.new_batsman)

        //  match_sixes
          this.match_sixes=0
        for(let i=0;i<this.data.batting_summary.length;i++){
          // if(this.data.batting_summary[i].team_id == this.data.battingPlayingEleven[0].team_id){
            this.match_sixes += this.data.batting_summary[i].sixes
          // }
        }

        // match fours
        this.match_fours =0
        for(let i=0;i<this.data.batting_summary.length;i++){
          // if(this.data.batting_summary[i].team_id == this.data.battingPlayingEleven[0].team_id){
            this.match_fours += this.data.batting_summary[i].fours
          // }
        }
            // console.log(match_sixes)

        // batting_summay total extra run
        this.extra_run = 0
        for(let i = 0; i < this.data.bowling_summary.length;i++){
          if(this.data.bowling_summary[i].team_id == this.data.bowling_team.id){
            this.extra_run+=this.data.bowling_summary[i].wide_balls+this.data.bowling_summary[i].no_balls
          }
        }

        // bowler_bowling_status
        // this.bowling_style = this.data.bowler_overall_stats.id
        // last wicket  batsman details
        this.teamWicket = []
        for(let i = 0 ; i < this.data.batting_summary.length; i++){
          if(this.data.batting_summary[i].team_id==this.data.batting_team.id && this.data.batting_summary[i].is_out ==1){
            this.teamWicket.push(this.data.batting_summary[i])
            //
          }
        }
        // last wicket batsman average
        let last_wicket_ball_faced = this.teamWicket.length>0 && this.teamWicket[this.teamWicket.length-1].balls_faced>0 ?
          this.teamWicket[this.teamWicket.length-1].balls_faced:1
        this.last_wicket_average =this.teamWicket.length>0 && (this.teamWicket[this.teamWicket.length -1].runs_achieved/last_wicket_ball_faced)*100;
        // console.log(this.teamWicket)
        // console.log(this.last_batsman_wicket)

        //non strike batsman test match average
        this.non_strike_batsman_out_status_test = this.data.non_strike_batsman.be_out_in_test==0? 1 : this.data.non_strike_batsman.be_out_in_test
        this.non_strike_batsman_test_match_average = this.data.non_strike_batsman.test_match_run/this.non_strike_batsman_out_status_test

        // non strike batsman limited over average
        this.non_strike_batsman_out_status= this.data.non_strike_batsman.be_out_in_limited==0?1: this.data.non_strike_batsman.be_out_in_limited
        this.non_strike_batsman_limited_match_average = this.data.non_strike_batsman.limited_match_run/this.non_strike_batsman_out_status

        // strike batsman test match average
        this.strike_batsman_out_status_test = this.data.strike_batsman.be_out_in_test==0? 1: this.data.strike_batsman.be_out_in_test
        this.strike_batsman_test_match_average= this.data.strike_batsman.test_match_run/this.strike_batsman_out_status_test

       // strike batsman limited over average
        this.strike_batsman_out_status = this.data.strike_batsman.be_out_in_limited == 0 ? 1: this.data.strike_batsman.be_out_in_limited
        this.strike_batsman_limited_match_average = this.data.strike_batsman.limited_match_run / this.strike_batsman_out_status
        this.bowler_economy = (this.data.bowler_overall_stats.total_runs)/( this.data.bowler_overall_stats.total_deliveries/6 )

        if( this.data.settings &&( this.data.settings.playing_list_of_team_1 ==1 || this.data.settings.playing_list_of_team_2 ==1 || this.data.settings.match_summary==1 || this.data.settings.batting_summary==1
         || this.data.settings.bowling_summary==1 || this.data.settings.standing_of_the_teams==1 || this.data.settings.bowler_slog_over_stats==1
         || this.data.settings.bowler_vs_RHB==1 || this.data.settings.bowler_vs_LHB==1 || this.data.settings.bowler_match_stats==1 || this.data.settings.bowler_overall_stats==1
         || this.data.settings.non_strike_batsman_match_stats==1 || this.data.settings.strike_batsman_match_stats==1 || this.data.settings.new_batsman_overall_stats==1
         || this.data.settings.non_strike_batsman_overall_stats==1 || this.data.settings.strike_batsman_overall_stats==1 || this.data.settings.innings_break_card==1
         || this.data.settings.tournament_end_card==1 || this.data.settings.scorecard_with_last_wicket==1)){
           this.visible1 =false
        }else if(this.data.settings &&( this.data.settings.match_end_card==1 ||
         this.data.settings.only_team_name==1 || this.data.settings.scorecard_with_need_run_of_balls==1 || this.data.settings.scorecard_with_match_sixes==1 ||
         this.data.settings.scorecard_with_match_fours==1 ||
         this.data.settings.scorecard_with_tournament_sixes==1|| this.data.settings.scorecard_with_tournament_fours==1 || this.data.settings.scorecard_with_target==1 || this.data.settings.scorecard_with_crr ==1 ||
         this.data.settings.scorecard_with_toss==1)){
          this.visible1 = true
        }else{
          this.visible1=false
        }
      }

      setTimeout(() =>{
          this.getData()
          // this.teamWicket = []
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
    /* font-family:Poppins; */
    /* background-color: rgb(237, 233, 233); */
    position: relative;
 }
 .scorecard_width{
   width: 22%;
 }
 .head{
      margin-top: 50px;
     margin-bottom: 50px;
     height: 180px;
     overflow-x: hidden;
 }
 li{
   list-style-type: none;
 }
 .body {
  /* height: 100vh;
        width: 100vw; */
  display: flex;
  height: 145px;
  width: 99vw;
  position: absolute;
  bottom: 8px;
  /* margin-bottom: 25px; */
  /* flex-basis: 0;
        flex-grow: 1; */
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  gap: 5px;
}
.scoreBee_logo {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 5px;
  width: 8%;
  height: 100px;
  margin-left: -8px;
  background-color: #FEC514;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.scoreBee_logo img {
  width: 81%;
  height: 90%;
  margin: 0 auto;
}
._scoreCard_logo{
  padding-left: 2.5px;
  /* padding-right: 2.5px; */
  flex: 0 0 95px;
  overflow: hidden;
}
._scoreCard_logo_main{background: #FEC514;
border-radius: 0px 10px 10px 0px;overflow: hidden;padding: 7.5px 2px;display: flex;align-items: center;justify-content: center;height: 85px;}
._scoreCard_logo_img{width: 100%;display: block;}
/* score card */
.score_card {
  display: flex;
  height: 100px;
  width: 26%;
  overflow: hidden;
  flex-direction: column;
  /* background-color: #171A23; */
  border-radius: 10px;
  /* background-color: #FEC514; */
  opacity: 1;
  color: #fff;
}
.score {
  display: flex;
  background-color: #171A23;
  opacity: 2;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  /* gap: 25px; */
  padding: 5px 5px 0 5px;
  height: 50%;
}
.bowling_team {
  font-size: 20px;
  width: 80%;
  text-transform: uppercase !important;
  margin: 2px;
}
.scored {
  width: 40%;
  font-weight: bold;
  text-align: end;
  font-size: 25px;
  margin: 0;
  padding: 0 3px;
}
.batting_team {
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase !important;
}
.over {
  display: flex;
  height: 56%;
  align-items: center;
}
.over_played {
  width: 80%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* border-top-left-radius: 10px; */
  background-color: #FEC514;
  padding: 0 auto;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
  margin: 0;
  color: #171A23;
  padding: 0 5%;

}
.power_play {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #171A23;
  justify-content: center;
  width: 20%;
  font-size: 25px;
  margin-bottom: 28px;
  font-weight: bold;
  padding: 0;
  text-transform: uppercase;
  /* border-bottom-left-radius: 10px; */
  border-bottom-right-radius: 10px;
  margin: 0;
}

/* player card */
._scoreCard_player{
  flex: 0 0 298px;
  overflow: hidden;
  padding-left: 2.5px;
  width: 25%;
  background-color: #171A23;
  border-radius: 10px;
  padding-right: 2.5px;
  }
._scoreCard_player_main{
  background: #171A23;
  overflow: hidden;
  height: 100px;
  display: flex;
  flex-direction: column;
}
._scoreCard_player_card._batting{
  position: relative;
}
._scoreCard_player_card._batting::before{
  position: absolute;
  content: '';
  padding: 0;
  margin: 0;
  border-left: 14px solid #fec514;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}
._scoreCard_player_card{
  flex: 1 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 8px 0 27px;
}
  ._scoreCard_player_name{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;

text-transform: uppercase;color: #fff;white-space: nowrap;flex: 1 1;overflow: hidden;padding: 0;margin: 0 16px 0 0;}
._scoreCard_player_run{font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 38px;color: #fff;flex:  0 0 auto;}
._scoreCard_player_run span{font-size: 14px;padding-left: 5px;}

.player_card {
  display: flex;
  flex-direction: column;
  background-color: #171A23;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 10px;
  height: 100px;
  width: 23%;
}
.player_card ul{
  margin: 0;
  padding: 0;
}
.on_strike {
  width: 13px;
  height: 9px;
  position: absolute;
  top: 19px;
  left: 7px;
  /* margin-left: -11px;
  margin-right: 1px; */
  background-color: #FEC514;
  overflow: hidden;
  transform: rotate(90deg);
  clip-path: polygon(50% 0%, 0 100%, 100% 100%);
  --webkit--clip-path: polygon(50% 0%, 0 100%, 100% 100%);
  --moz--clip-path: polygon(50% 0%, 0 100%, 100% 100%);
  --o--clip-path: polygon(50% 0%, 0 100%, 100% 100%);
}
.first_player {
   display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
   flex-direction: column;
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;

  width: 97%;
  margin: 0;
  padding: 0;
  height: 100px !important;
}

.player_card ul div li{
  list-style-type: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
}
.first_player .player_name {
  width: 50%;
  margin-right: 0px;
  font-size: 23px;
  margin: 0;
  padding: 0 0 0 22px;
}

.first_player .player_score {
  width: 35%;
  text-align: end;
  font-size: 22px;
  padding: 0 5px;
}
.player_score span{
    font-weight: bold;
    font-size: 15px !important;
}
.second_player {
  display: flex;
  align-items: center;
  padding: 0 5px;
  height: 50%;
}
.second_player .player_name {
  width: 65%;
  padding: 3px;
}
.second_player .player_score {
  width: 35%;
  text-align: center;
  padding: 0 5px;
}

/* score require  */
.score_require {
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 100px;
  width: 23%;
  font-weight: bold;
}

.score_need_from {
  display: flex;
  flex-direction: column;
}

.require_run {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171A23;
  padding: 0;
  margin: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 50%;
  font-size: 16px;
  margin-bottom: 1px;
  gap: 10px;
}
.require_run p {
  width: 33%;
  text-align: center;
  margin: 0;
  padding: 0;
}
.require_ball {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  height: 50%;
  background-color: #171A23;
  gap: 10px;
  font-size: 16px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0;
}
.require_ball p {
  width: 33%;
  text-align: center;
  margin: 0;
}
.run_to_get {
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FEC514;
  padding: 6.4px 7px;
  font-size: 30px;
  width: 57px;
  color: #171A23;
}
.run_to_get p{
  width: 100%;
  margin: 0 auto;
}
.ball_in_hand {
  height: 76%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 59px;
  font-size: 30px;
  color: #171A23;
  background-color: #FEC514;
}
.ball_in_hand p{
  width: 100%;
  margin: 0 auto;
}
.from_balls {
  text-align: end;
}

/* bowler match status */

.bowler_match_status {
  display: flex;
  flex-direction: column;
  width: 24.5%;
  height: 100%;
}
.bowler_run_wicket {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171A23;
  padding: 5px;
  height: 30%;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-top-left-radius: 10px;
}
.bowler_run_wicket p:first-child{
  width: 50%;
  text-align: center;
  font-size: 20px;
  margin: 0;
  padding: 0;
}
.bowler_run_wicket p:last-child{
  width: 50%;
  text-align: center;
  font-size: 20px;
  margin: 0;
  padding: 0;
}
.bowler_run_wicket_sub_second {
  font-weight: bold;
  font-size: 13px;
}
.over_every_ball {
  background-color: #FEC514;
  padding: 5px;
  height: 30%;
  color: #171A23;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  font-size: 13px;
  font-weight: bold;
}
.over_every_ball ul{
  display: flex;
}
.over_every_ball ul li{
  list-style-type: none;
  display: flex;
}
.stream_text {
  height: 31%;
  display: flex;
  justify-content: flex-end;
}
.blank {
  width: 22%;
}

.stream_company {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #171A23;
}

.stream_small {
  line-height: 21px;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 0  0;
}
.stream_big {
  font-size: 1.5rem;
  font-weight: bold;
  color: #FEC514;
  background-color: #171A23;
}

/* target part  */
.match_target {
  width: 22%;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.target_text {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 50%;
  font-size: 25px;
  font-weight: bold;
  background-color: #171A23;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.target_text1{
    display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  height: 70%;
  font-weight: bold;
  background-color: #171A23;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.target_run {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-size: 25px;
  font-weight: bold;
  color: #171A23;
  background-color: #FEC514;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.team_details{
  width: 22%;
  height: 135px;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
}
.team_name{
   display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  max-height: 135px;
  min-height: 100px;
  width: 100%;
  font-size: 16px;
  /* padding: 5; */
  font-weight: 500;
  color: #171A23;
  background-color: #FEC514;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow-y: auto;
}

/* current run rate part  */
.current_run_rate {
  width: 22%;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.current_run_rate_text {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 50%;
  font-weight: bold;
  font-size: 20px;
  background-color: #171A23;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0;
  padding: 0;
}
.current_run_rate_dis {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-size: 20px;
  font-weight: bold;
  color: #171A23;
  background-color: #FEC514;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* toss part  */
.toss {
  width: 22%;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.won_the_toss {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #171A23;
  height: 50%;
  /* width: 97%; */
  padding: 5px;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #FEC514;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.decided_winning_toss {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50%;
  font-size: 12px;
  width: 100%;
  font-weight: bold;
  color: #fff;
  background-color: #171A23;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* tournament sixes part  */
.tournament_sixes {
  width: 22%;
  height: 100px;
  display: flex;
  gap: 1px;
}
.tournament_sixes_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #171A23;
  height: 100%;
  width: 50%;
  font-weight: bold;
  background-color: #FEC514;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  /* border-top-right-radius: 10px; */
}
.tournament_sixes_first {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: -8px;
}
.match_sixes{
  font-size: 20px !important;
}
.match_fours{
  font-size: 20px !important;
}
.match_four{
  font-size: 18px !important;
}
.tournament_sixes_second {
  font-size: 35px !important;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
}
.total_tournament_sixes {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  background-color: #171A23;
  /* border-bottom-left-radius:10px; */
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

/* tournament fours parts  */
.tournament_fours {
  width: 22%;
  height: 100px;
  display: flex;
  gap: 1px;
}
.tournament_fours_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #171A23;
  height: 100%;
  width: 50%;
  font-weight: bold;
  background-color: #FEC514;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.tournament_fours_first {
  font-size: 12px;
  font-weight: bold;
  /* margin-bottom: -5px; */
}
.tournament_fours_second {
  font-size: 18px;
  font-weight: bold;
}

.total_tournament_fours {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background-color: #171A23;
  /* border-bottom-left-radius:10px; */
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}


/* team bowling card  */
.team_bowling_score_card_super{
  vertical-align: bottom !important;
  /* position: absolute; */
  padding: 0;
  margin: 0;
  /* top: auto;
  bottom: 0; */
  min-height: 98vh;
  display: flex;
  /* justify-content: flex-end; */
  align-items: flex-end;
  width: 98vw;
}
 ._bolwerScore_con {
      /* margin-top: 50px; */
      margin: 0 auto;
      /* margin-bottom: 50px; */
  }
  ._batsmanScore {
      width: 1006px;
      margin: 0 auto;
  }
  ._batsmanScore_top {
      display: flex;
      margin: 0 0 20px;
  }
  ._batsmanScore_top_left {
      padding: 0;
      background: #171A23;
      border-radius: 30px 0px 0px 30px;
      flex: 1 1;
      overflow: hidden;
      border: 2px solid #FEC514;
  }
  ._batsmanScore_top_team {
      display: flex;
      align-items: center;
      border-bottom: 2px solid #FEC514;
      height: 71px;
      padding: 0 60px 0;
  }
  ._batsmanScore_top_team_one {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 35px;
      line-height: 52px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      flex: 0 0 auto;
      margin: 0;
  }
  ._batsmanScore_top_team_v {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
      color: #FFFFFF;
      margin: 0 0 0px 8px;
  }
  ._batsmanScore_top_team_two {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      text-transform: uppercase;
      color: #FFFFFF;
      margin: 0 0 0px 4px;
  }
  ._batsmanScore_match {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
      color: #FFFFFF;
      height: 38px;
      line-height: 38px;
      padding: 0 60px;
      border-top: 2px solid #FEC514;
      margin: 0;
  }
  ._batsmanScore_top_logo{
      background: #FEC514;
      border-radius: 0px 30px 30px 0px;
      overflow: hidden;
      height: 113px;
      flex: 0 0 157px;
      max-width: 157px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  ._batsmanScore_top_logo p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
  /* identical to box height */
      text-transform: uppercase;

  /* Secondary */
      color: #171A23;
  }
  ._batsmanScore_top_logo img{
      width: 69px;
      height: auto;
      margin: 0 auto;
  }
  ._batsmanScore_list{}
  ._batsmanScore_item{
      padding: 0px 40px;
      height: 55px;

  /* Secondary */
      background: #171A23;
      border-radius: 30px;
      display: flex;
      align-items: center;
      margin-bottom: 3px;
  }
  ._batsmanScore_player{
      overflow: hidden;
      flex: 0 0 330px;
  }
  ._batsmanScore_player_name{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
  /* identical to box height */
      text-transform: uppercase;

  /* White */
      color: #FFFFFF;
  }
  ._batsmanScore_out{
      flex: 1 1;
      overflow: hidden;
  }
  ._batsmanScore_out_text{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
  /* identical to box height */


  /* White */
      color: #FFFFFF;
      margin: 0;
  }
  ._batsmanScore_out_text span{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
  /* identical to box height */


  /* White */
      color: #FFFFFF;
  }
  ._batsmanScore_runs{
      flex: 0 0 155px;
      text-align: right;
      overflow: hidden;
  }
  ._batsmanScore_runs_text{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
  /* identical to box height */
      text-align: right;
      text-transform: uppercase;

  /* White */
      color: #FFFFFF;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
  ._batsmanScore_runs_text span{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      text-align: right;
      margin: 0 0px 0 26px;
  }
  ._batsmanScore_total{
    padding: 0px 40px;
    width: 824px;
    height: 75px;

/* Secondary */
    background: #171A23;
/* Primary */
    border: 5px solid #FEC514;
    border-radius: 50px;
    margin: 20px auto 0;
    align-items: center;
    display: flex;
}
  ._batsmanScore_extra{
    flex: 1 1;
    overflow: hidden;
}
  ._batsmanScore_total_text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
/* identical to box height */
    text-transform: uppercase;

/* White */
    color: #FFFFFF;
    margin: 0;
}
  ._batsmanScore_total_text span{
    margin-left: 15px;
}
  ._batsmanScore_over{flex:  0 0 auto;}
  ._batsmanScore_t{
    overflow: hidden;
    flex: 1 1;
    text-align: right;
}
._batsmanScore_item._active{
  background: #FEC514;
}
._batsmanScore_item._active ._batsmanScore_player_name{
  color: #171A23;
}
._batsmanScore_item._active ._batsmanScore_out_text{
  color: #171A23;
}
._batsmanScore_item._active ._batsmanScore_runs_text{
  color: #171A23;
}
._batsmanScore_item._active{
  color: #171A23;
}
._bowler_list{
    width: 973px;


/* Primary */
    border: 2px solid #FEC514;
    border-radius: 30px;
    margin: 0 auto;
    overflow: hidden;
    background: #171a23;
}
._bowler_title{
    display: flex;
    align-items: center;
    height: 54px;
    padding: 0 40px;
}
._bowler_title_text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
/* identical to box height */
    text-align: center;
    text-transform: uppercase;

/* White */
    color: #FFFFFF;
    margin: 0;
}
._bowler_one{
    flex: 1 1;
}
._bowler_two{
    flex: 0 92px;
    overflow: hidden;
}
._bowler_three{
    flex: 0 143px;
    overflow: hidden;
}
._bowler_four{
    flex: 0 87px;
    overflow: hidden;
}
._bowler_five{
    flex: 0 115px;
    overflow: hidden;
}
._bowler_six{
    flex: 0 126px;
    overflow: hidden;
    padding-left: 22px;
}
._bowler_name{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
/* identical to box height */
    text-transform: uppercase;

/* White */
    color: #FFFFFF;
    margin: 0;
}
._bowler_val{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
/* identical to box height */
    text-align: center;
    text-transform: uppercase;

/* White */
    color: #FFFFFF;
    margin: 0;
}
._bowler_item{
    display: flex;
    align-items: center;
    height: 62px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 40px;
}

/* batting score card  */
._batsmanScore_con {
      /* overflow-x: scroll; */
      /* margin-bottom: 50px; */
      margin-top: 50px;
  }
  ._batsmanScore {
      width: 1006px;
      margin: 0 auto;
  }
  ._batsmanScore_top {
      display: flex;
      margin: 0 0 20px;
  }
  ._batsmanScore_top_left {
      padding: 0;
      background: #171A23;
      border-radius: 30px 0px 0px 30px;
      flex: 1 1;
      overflow: hidden;
      border: 2px solid #FEC514;
  }
  ._batsmanScore_top_team {
      display: flex;
      align-items: center;
      border-bottom: 2px solid #FEC514;
      height: 71px;
      padding: 0 60px 0;
  }
  ._batsmanScore_top_team_one {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 52px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      flex: 0 0 auto;
      margin: 0;
  }
  ._batsmanScore_top_team_v {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
      color: #FFFFFF;
      margin: 0 0 0px 8px;
  }
  ._batsmanScore_top_team_two {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      text-transform: uppercase;
      color: #FFFFFF;
      margin: 0 0 0px 4px;
  }
  ._batsmanScore_match {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
      color: #FFFFFF;
      height: 38px;
      line-height: 38px;
      padding: 0 60px;
      border-top: 2px solid #FEC514;
      margin: 0;
  }
  ._batsmanScore_top_logo{
      background: #FEC514;
      border-radius: 0px 30px 30px 0px;
      overflow: hidden;
      height: 117px;
      flex: 0 0 157px;
      max-width: 157px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  ._batsmanScore_top_logo p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 0;
  /* identical to box height */
      text-transform: uppercase;

  /* Secondary */
      color: #171A23;
  }
  ._batsmanScore_top_logo img{
      width: 69px;
      height: auto;
      margin: 0 auto;
  }
  ._batsmanScore_list{}
  ._batsmanScore_item{
      padding: 0px 40px;
      height: 55px;

  /* Secondary */
      background: #171A23;
      border-radius: 30px;
      display: flex;
      align-items: center;
      margin-bottom: 3px;
  }
  ._batsmanScore_player{
      overflow: hidden;
      flex: 0 0 330px;
  }
  ._batsmanScore_player_name{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
  /* identical to box height */
      text-transform: uppercase;

  /* White */
      color: #FFFFFF;
  }
  ._batsmanScore_out{
      flex: 1 1;
      overflow: hidden;
  }
  ._batsmanScore_out_text{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
  /* identical to box height */


  /* White */
      color: #FFFFFF;
      margin: 0;
  }
  ._batsmanScore_out_text span{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
  /* identical to box height */


  /* White */
      color: #FFFFFF;
  }
  ._batsmanScore_runs{
      flex: 0 0 155px;
      text-align: right;
      overflow: hidden;
  }
  ._batsmanScore_runs_text{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
  /* identical to box height */
      text-align: right;
      text-transform: uppercase;

  /* White */
      color: #FFFFFF;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
  ._batsmanScore_runs_text span{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      text-align: right;
      margin: 0 0px 0 26px;
  }
  ._batsmanScore_total{
    padding: 0px 40px;
    width: 824px;
    height: 75px;

/* Secondary */
    background: #171A23;
/* Primary */
    border: 5px solid #FEC514;
    border-radius: 50px;
    margin: 20px auto 0;
    align-items: center;
    display: flex;
}
  ._batsmanScore_extra{
    flex: 1 1;
    overflow: hidden;
}
  ._batsmanScore_total_text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
/* identical to box height */
    text-transform: uppercase;

/* White */
    color: #FFFFFF;
    margin: 0;
}
  ._batsmanScore_total_text span{
    margin-left: 15px;
}
  ._batsmanScore_over{flex:  0 0 auto;}
  ._batsmanScore_t{
    overflow: hidden;
    flex: 1 1;
    text-align: right;
}
._batsmanScore_item._active{
  background: #FEC514;
}
._batsmanScore_item._active ._batsmanScore_player_name{
  color: #171A23;
}
._batsmanScore_item._active ._batsmanScore_out_text{
  color: #171A23;
}
._batsmanScore_item._active ._batsmanScore_runs_text{
  color: #171A23;
}
._batsmanScore_item._active{
  color: #171A23;
}
/* player match status  */
.player_match_status_head{
  margin-top: 40px;
  margin-bottom: 80px;
}
.player_match_status {
  margin: 10px auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
}
.player_match_status_first {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-bottom: 2px;
  background-color: #171A23;
  border: 2px solid #FEC514;
  border-radius: 50px;
  padding: 10px;
  color: #fff;
}
.player_match_status_first_p_first {
  width: 80%;
  -ms-flex-item-align: center;
  align-self: center;
  justify-self: flex-start;
  font-weight: bold;
  font-size: 25px;
  margin: 0;
  padding: 0;
}
.bowler_over_status{
  width: 80%;
  align-self: center;
  justify-self: flex-start;
  font-weight: bold;
  font-size: 25px;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
}
.bowler_over_status_small{
  font-size: 16px;
  font-weight: 500 !important;
}
.player_match_status_first_p_second {
  font-size: 25px;
  font-weight: bold;
  margin: 0;
}

.player_match_status_first_p_second span, .player_match_status_second_first_p span{
  font-size: 18px;
  text-transform: lowercase;
  font-weight: 400;
  margin: 0;
}
.player_taken_run{
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
}
.player_taken_run span{
  font-size: 14px;
}
.player_match_status_first{
  width: 75%;
}
.player_match_status_second {
  width: 70%;
  display: flex;
  justify-content: center;
  background-color: #171A23;
  padding: 12px 13px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #fff;
}
.player_match_status_second_first_p {
  width: 70%;
  font-weight: bold;
  font-size: 20px;
  padding: 0 0 0 18px;
  margin: 0;
}
.player_match_status_second_second_p {
  width: 30%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  font-weight: 500;
  margin: 0;
}
.player_match_status_second_second_p span {
  color: #FEC514;
  font-weight: bold;
}
/* PLAYER BOWLING STATUS  */
.player_bowling_status {
  margin: 80px auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.strike_bowling_through{
  position: absolute;
    top: 118px;
    /* bottom: -4px; */
    left: 47px;
    width: 706px;
    height: 2px;
    z-index: 2;
    background-color: #FEC514;
}
.player_bowling_status_first {
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: #171A23;
  border: 2px solid #FEC514;
  border-radius: 50px;
  /* padding: 5px; */
  color: #fff;
}
.player_bowling__status_first_p_first {
  width: 70%;
  display: flex;
  align-items: center;
  /* align-self: center;
  justify-self: flex-start; */
  font-weight: bold;
  /* font-size: 16px; */
  text-transform: uppercase;
  margin: 0;
  gap: 10px;
  font-size: 25px;
}
.player_bowling_status_second_thead{
  border-bottom: 2px solid #FEC514;
  width: 100%;
}
.player_bowling__status_first_p_first span {
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
}
.player_bowling__status_first_p_second {
  font-size: 16px;
}
.player_bowling_status_second {
  width: 800px;
  display: flex;
  justify-content: center;
  color: #fff;


}
.player_bowling_status_second_table tbody{
  border-top: 2px solid #FEC514;
}

.player_bowling_status_second_table,
.player_bowling_status_second_tr th,
.player_bowling_status_second_tr td {
  background-color: #171A23;
  padding: 5px 19.8px;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
}
/* player batting status */

._playerCard_con {
    /* margin-top: 150px; */
    width: 98vw;
    /* margin: 0 auto; */
    position: absolute;
    bottom: 10px;
}
._playerCard {
    width: 1200px;
    margin: 0 auto;
}
._playerCard_top {
    width: 1000px;
    margin: 0 auto 6px;
    height: 79px;
    background: #171A23;
    border: 3px solid #FEC514;
    border-radius: 43px;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 60px;
}
._playerCard_top_left {
    flex: 1 1;
    overflow: hidden;
}
._playerCard_name {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 52px;
    text-transform: uppercase;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    margin: 0;
}
._playerCard_name span {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 0 8px;
}
._playerCard_right {
    flex: 0 0 auto;
    overflow: hidden;
}
._playerCard_sub {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
}
._playerCard_main {
    width: 940px;
    margin: 0 auto;
}
._playerCard_titles {
    height: 65px;
    background: #171A23;
    border-radius: 20px 20px 0px 0px;
    border-bottom: 3px solid #FEC514;
    display: flex;
    align-items: center;
    padding: 0 40px;
}
._playerCard_one {
    overflow: hidden;
    flex: 0 0 140px;
    padding-right: 15px;
}
._playerCard_two {
    flex: 1 1;
    overflow: hidden;
}
._playerCard_three {
    flex: 1 1;
    overflow: hidden;
}
._playerCard_four {
    flex: 1 1;
    overflow: hidden;
}
._playerCard_five {
    flex: 1 1;
    overflow: hidden;
}
._playerCard_six {
    flex: 0 0 75px;
    overflow: hidden;
    padding-left: 12px;
}
._playerCard_seven{
    flex: 0 0 152px;
    overflow: hidden;
    padding-left: 12px;
}
._playerCard_title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
    text-align: center;
}
._playerCard_values {
    height: 63px;
    background: #171A23;
    border: 1px solid #171A23;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    align-items: center;
    padding: 0 40px;
}
._playerCard_val{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}
._playerCard_run {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
}
._playerCard_run span {
    font-weight: 500;
    font-size: 23px;
}
._playerCard_wicket_main {
    width: 940px;
    height: 63px;
    background: #171A23;
    border: 1px solid #171A23;
    border-radius: 0px 0px 20px 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 60px;
}
._playerCard_ass {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
}
._playerCard_ass span {
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-right: 10px;
    flex: 0 0 auto;
}
._playerCard_ass._playerCard_ball {
    flex: 1 1;
    overflow: hidden;
    padding-left: 48px;
}
._playerCard_stike {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
}
._playerCard_stike span {
    color: #FEC514;
    font-weight: 700;
    margin: 0 0 0 7px;
}

.batting_score_card_third_first_p_first_span{
  text-transform: lowercase !important;
  font-size: 18px !important;
  font-weight: 400;
}

 ._tv_scr_all{
 /* background: #b57070;
 height: 100vh;
 font-family:Poppins; */
 margin-top: 150px;
 }

 /* ==== TV SCORE CARD ==== */
 ._tv_score {
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     height: 100px;
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
    height: 100px;
    background: #FEC514;
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
     background: #FEC514;
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
    background: #FEC514;
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
    background: #FEC514;
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
    font-size: 14px;
    color: #000;
    font-weight: bold;
    /* background: #1a235a; */
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
/* ._scre_crcle ._active4{
    background: #1B998B;
}
._scre_crcle ._active6{
    background: #3CB733;
}
._scre_crcle ._active_w{
    background: #E84855;
} */

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
    font-size: 14px;
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
@media (min-width: 1350px) and (max-width:1400px){
  .run_to_get{
    padding: 6.4px 8px 6.4px 7px;
  }
}
@media screen and (max-width: 1400px) {
  /* .head {
    overflow-x: scroll;
  } */
  .body {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 99vw;
  }
  .scoreBee_logo {
    width: 8%;
  }
  .score_card {
    width: 30%;
  }
  .player_card {
    width: 28%;
  }
  .score_require {
    width: 23%;
  }
  .match_target {
    width: 20%;
  }
  .current_run_rate {
    width: 22%;
  }
  .toss {
    width: 22%;
    text-align: center;
  }
  .tournament_sixes {
    width: 24%;
  }
  .tournament_fours {
    width: 20%;
  }
  .bowler_match_status {
    width: 27%;
  }
  .team_details{
    padding: 5px;
    background-color: #FEC514;
    border-radius: 10px;
    max-height: 110px;
  }
  .team_name{
    font-size: 16px;
    min-height: 90px;
    /* max-height: 135px; */
    width: 100%;
    margin: 5px;
  }
}
@media screen and (max-width: 1400px) {
  .ball_in_hand{
    padding: 6px 7px 6px 6px;
    width: 60px;
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
    font-size: 14px;
}
._scre_crcle_inner{
    position: relative;
}
._tv_score_crcl_spn {
    font-size: 14px;
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
    font-size: 14px;
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
@media screen and (max-width: 1280px) {
 .bowling_team{
  width: 70%;
 }
 .score_card{
  width: 33%;
 }
 .stream_company{
  width: 80%;
 }
}
@media screen and (max-width: 1240px) {
  .tournament_sixes_first{
    font-size: 14px;
  }
  .bowling_team{
    width: 72%;
  }
.first_player .player_score {
  width: 40%;
  text-align: end;
  font-size: 20px;
  padding: 0 5px;
}
.first_player .player_name {
  width: 60%;
  margin-right: 0px;
  font-size: 20px;
  margin: 0;
  padding: 0 0 0 20px;
}
  .tournament_sixes_second{
    font-size: 16px;
  }
  .player_card {
    width: 28%;
  }
  .score_require{
    width: 23%;
  }
}
@media screen and (max-width: 1230px) {
  ._playerCard_con{
    overflow-x: scroll;
    margin: 20px auto;
  }
  ._playerCard{
    overflow-x: scroll;
    margin: 20px auto;
  }
  .bowling_team{
      width: 70%;
  }
  .bottom_arrow{
    width: 950px;
  }
  .player_batting_status{
    width: 1000px;
  }
.first_player .player_name {
  width: 60%;
  margin-right: 0px;
  font-size: 20px;
  margin: 0;
  padding: 0 0 0 20px;
}
.on_strike{
  left: 5px;
}
.first_player .player_score {
  width: 40%;
  text-align: end;
  font-size: 20px;
  padding: 0 5px;
}
.ball_in_hand{
  width: 60px;
  padding: 6px 6px 6px 7px;
}

  .head {
    overflow-x: scroll;
  }
  .body {
    width: 1250px;
  }
  .scoreBee_logo{
    width: 10%;
  }
  .score_card {
    width: 40%;
  }

  .player_score{
    width: 35%;
  }
  .player_card {
    width: 30%;
  }
  .player_name{
    width: 64%;
  }
  .score_require {
    width: 30%;
  }
  .match_target {
    width: 22%;
  }
  .current_run_rate {
    width: 24%;
  }
  .toss {
    width: 25%;
    text-align: center;
  }
  .tournament_sixes {
    width: 25%;
  }
  .tournament_fours {
    width: 24%;
  }
  .bowler_match_status {
    width: 30%;
  }
  .team_bowling_score_card_head {
    width: 950px;
  }
  .batting_score_card_head {
    margin: 0 auto;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .batting_score_card_another_first {
    width: 100%;
  }
  .player_match_status_head {
    overflow-x: scroll;
  }

  .player_bowling_status_second_tr :last-child {
    padding: 10 25px;
  }
   /* player batting status */
  .player_batting_head{
    overflow-x: scroll;
  }

}

@media screen and (max-width: 1100px) {
.batting_score_card_super{
    overflow-x: scroll;
  }
}
@media screen and (max-width: 1100px){
  .player_bowling_head{
    overflow-x: scroll;
  }
}
@media screen and (max-width: 960px) {
   .team_bowling_score_card_super{
    overflow-x: scroll;
  }

}
@media screen and (max-width: 900px) {
  /* .player_bowling_status_first{
    width: 80%;
  } */
  /* .team_bowling_score_card_head{
    width: 920px;
  } */
   /* player match status  */
  /* .player_match_status {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .player_match_status_second_second_p {
    text-align: center;
  }
  .player_match_status_first {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .player_match_status_second {
    width: 94%;
  } */
    /* player batting status  */
  /* .player_batting_status {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
  /* .strike_through{
    position: absolute;
    top: 137px;
    bottom: -4px;
    width: 96.2%;
    height: 3px;
    z-index: 2;
    background-color: #FEC514;
  } */
  /* .player_batting_status_first {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .player_batting_status_first{
    gap: 5px;
  }
  .player_batting_status_first_p_first{
    text-align: center;
    width: 70%;
  }
  .player_batting_status_first_p_second{
    text-align: center;
    width: 30%;
  }
  .player_batting_status_second {
    width: 80%;
  }
  .player_batting_status_second_table,
  .player_batting_status_second_tr th,
  .player_batting_status_second_tr td {
    background-color: #171A23;
    padding: 10px 12px;
    border-radius: 10px;
  } */
}
@media screen and (max-width:800px){
  .player_match_status_head {
    overflow-x: scroll;
  }

  .player_batting_head{
    overflow-x: scroll;
  }
}
</style>