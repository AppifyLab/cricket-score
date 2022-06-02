<template>
  <div>
    <template v-if="visible1">
    <div class="head">
      <div class="body">
        <div class="scoreBee_logo">
          <img
            class=""
            src="http://live.scorebee.com/cricket-score/dist/img/scoorbee.png"
            alt="ScoreBee_logo"
          />
        </div>
  
        <div class="score_card">
          <div class="score">
            <p class="bowling_team">
              <template v-if="data.bowling_team">
                    {{data.bowling_team.team_short_name}}
                </template> v <span class="batting_team">
                    <template v-if="data.batting_team">
                        {{data.batting_team.team_short_name}}
                    </template>
                </span>
            </p>
            <p class="scored">
                <template v-if="data.score">
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

        <div class="player_card">
          <ul>
            <div class="first_player">
              <li v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans">
                  <span v-if="item.is_on_strike==1">
                      <div class="on_strike"></div>
                  </span>
                  <p class="player_name">{{item.batter.first_name}} </p>
                  <div class="player_score"> {{item.runs_achieved}}  <span>( {{item.balls_faced}} )</span> </div>
                  
              </li>
              </div>
            </ul>
          <!-- <div class="second_player">
            <p class="player_name">Hasan ALI</p>
            <div class="player_score">13(6)</div>
          </div> -->
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
        <!-- score card with target  -->
        <div class="match_target" v-else-if="data.settings && data.settings.scorecard_with_target ==1">
          <div class="target_text">
            <template v-if="data.is_first_innings==1">
                <span v-if="data.score && data.score.total_over<5">
                  TOSS
                </span>
                <span v-else>
                  CURRENT RUN RATE
                </span>
            </template>
            <template v-else>
              TARGET
            </template>
             
          </div>
          <div class="target_run">
              <template v-if="data.is_first_innings==1">
                  <span v-if="data.score && data.score.total_over<5">
                      {{data.toss}}
                  </span>
                  <span v-else>
                      {{currentRunRate}}
                  </span>
              </template>
              <template v-else>
                {{data.target}}
              </template>
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
        <div class="score_require" v-else-if="data.settings && data.settings.scorecard_with_need_run_of_balls==1">
        
           <template v-if="data.is_first_innings==0 && data.score.total_wicket !='10' && data.match_overs - data.score.total_over>0">
            <div class="require_run">
              <p class="need_run">NEED</p>
              <div class="run_to_get">
                <p class="">{{data.target - data.score.total_runs}}</p>
              </div>
              <p class="">RUNS</p>
            </div>
            <div class="require_ball">
              <p>FROM</p>
              <div class="ball_in_hand">
                <p class="">{{leftBalls}}</p>
              </div>
              <p class="from_balls">BALLS</p>
            </div>
           </template>

           <template v-else-if="data.is_first_innings==0 && data.score.total_wicket == '10' && data.match_overs - data.score.total_over>0">
             <div class="target_text">
               {{data.batting_team.team_name}} 
             </div>
             <div class="target_run" v-if="data.target - data.score.total_runs > 1">
                Lost By {{data.target - data.score.total_runs -1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs <1">
                Win By {{data.score.total_runs - data.target + 1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs ==1">
                Match Drawn
             </div>
             
           </template>

           <template v-else-if="data.is_first_innings==0 && data.score.total_wicket != '10' && data.match_overs - data.score.total_over==0">
             <div class="target_text">
               {{data.batting_team.team_name}} 
             </div>
             <div class="target_run" v-if="data.target - data.score.total_runs > 1">
                Lost By {{data.target - data.score.total_runs -1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs <1">
                Win By {{data.score.total_runs - data.target + 1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs ==1">
                Match Drawn
             </div>
           </template>

            <template v-else-if="data.is_first_innings==0 && data.score.total_wicket == '10' && data.match_overs - data.score.total_over==0">
             <div class="target_text">
               {{data.batting_team.team_name}} 
             </div>
             <div class="target_run" v-if="data.target - data.score.total_runs > 1">
                Lost By {{data.target - data.score.total_runs -1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs <1">
                Win By {{data.score.total_runs - data.target + 1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs ==1">
                Match Drawn
             </div>
           </template>
           
           <template v-else>
            <div class="current_run_rate_text">
                  <span v-if="data.score && data.score.total_over<5">
                         TOSS
                      </span>
                      <span v-else>
                           CURRENT RUN RATE
                      </span>
             </div>
             <div class="current_run_rate_dis">
               <span v-if="data.score && data.score.total_over<5">
                      {{data.toss}}
                  </span>
                  <span v-else>
                      {{currentRunRate}}
                  </span>
             </div>
           </template>
        </div>

        <!-- match_end_card -->
        <div class="score_require" v-else-if="data.settings && data.settings.match_end_card==1">
          <template v-if="data.is_first_innings==0 && data.score.total_wicket == '10' && data.match_overs - data.score.total_over>0">
             <div class="target_text">
               {{data.batting_team.team_name}} 
             </div>
             <div class="target_run" v-if="data.target - data.score.total_runs > 1">
                Lost By {{data.target - data.score.total_runs -1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs <1">
                Win By {{data.score.total_runs - data.target + 1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs ==1">
                Match Drawn
             </div>
             
           </template>

           <template v-else-if="data.is_first_innings==0 && data.score.total_wicket != '10' && data.match_overs - data.score.total_over==0">
             <div class="target_text">
               {{data.batting_team.team_name}} 
             </div>
             <div class="target_run" v-if="data.target - data.score.total_runs > 1">
                Lost By {{data.target - data.score.total_runs -1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs <1">
                Win By {{data.score.total_runs - data.target + 1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs ==1">
                Match Drawn
             </div>
           </template>

            <template v-else-if="data.is_first_innings==0 && data.score.total_wicket == '10' && data.match_overs - data.score.total_over==0">
             <div class="target_text">
               {{data.batting_team.team_name}} 
             </div>
             <div class="target_run" v-if="data.target - data.score.total_runs > 1">
                Lost By {{data.target - data.score.total_runs -1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs <1">
                Win By {{data.score.total_runs - data.target + 1}} 
             </div>
             <div class="target_run" v-else-if="data.target - data.score.total_runs ==1">
                Match Drawn
             </div>
           </template>
             <template v-else-if="data.is_first_innings==0 && data.score.total_wicket != '10' && data.match_overs - data.score.total_over>0">
             <div class="target_text">
               Target 
             </div>
             <div class="target_run" v-if="data.target - data.score.total_runs > 1">
               {{data.target}}
             </div>
             
           </template>
           <template v-else>
             <div class="current_run_rate_text">
                      <span >
                           CURRENT RUN RATE
                      </span>
             </div>
             <div class="current_run_rate_dis">
                      <span >
                           {{currentRunRate}}
                      </span>
             </div>
           </template>

        </div>

        <!-- tournament sixes -->
        <div class="tournament_sixes" v-else-if="data.settings && data.settings.scorecard_with_tournament_sixes==1">
          <div class="tournament_sixes_text">
            <span class="tournament_sixes_first">TOURNAMENT</span>
            <span class="tournament_sixes_second">SIXES</span>
          </div>
          <div class="total_tournament_sixes">{{data.tournament_details.total_sixes_in_tournament}}</div>
        </div>

        <!-- tournament fours  -->
         <div class="tournament_sixes" v-else-if="data.settings && data.settings.scorecard_with_tournament_fours==1">
          <div class="tournament_sixes_text">
            <span class="tournament_sixes_first">TOURNAMENT</span>
            <span class="tournament_sixes_second">Fours</span>
          </div>
          <div class="total_tournament_sixes">{{data.tournament_details.total_fours_in_tournament}}</div>
        </div>
        
       <!-- v-else-part  -->
        <!-- -->

        <!-- toss  -->
        <!-- <div class="toss">
          <div class="won_the_toss">
            toss
          </div>
          <div class="decided_winning_toss">
            {{data.toss}}
          </div>
        </div> -->

          <!-- <div class="current_run_rate" >
          <div class="current_run_rate_text">CURRENT RUN RATE</div>
          <div class="current_run_rate_dis">
             <span v-if="data">
               <template v-if="data.is_first_innings==1">
                      <span v-if="data.score && data.score.total_over<5">
                          {{data.toss}}
                      </span>
                      <span v-else>
                           {{currentRunRate}}
                      </span>
                  </template>
                  <template v-else>
                  TAR-{{data.target}} &nbsp; CRR - {{currentRunRate}}
                  TAR-{{data.target}} REQ - {{requireRunRate}} CRR - {{currentRunRate}}
                  </template>
            
            </span></div>
        </div>  -->

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
                    {{data.bowler.bowler.first_name }}
                </template></p>
            <p class="bowler_run_wicket_p_second"  v-if="data.bowler">
              {{data.bowler.wickets}}-{{data.bowler.runs_gave}}
               <span class="bowler_run_wicket_sub_second">{{data.bowler.overs_bowled}}</span>
            </p>
          </div>

          <div class="over_every_ball">
            <!-- 6 6 2 3 1 6 6 -->
                <!-- <ul>
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
                </ul> -->
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
                          <p class="bowler_over_status">{{item.batter.first_name}} {{item.batter.last_name}}</p>
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
                          <p class="bowler_over_status">{{item.batter.first_name}} {{item.batter.last_name}}</p>
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
    <div v-else-if="data.settings && data.settings.bowler_overall_stats==1" class="player_bowling_head">
      <div class="player_bowling_status">
        <div class="player_bowling_status_first">
          <p class="player_bowling__status_first_p_first">
            {{data.bowler_overall_stats.first_name + ' '+ data.bowler_overall_stats.last_name}} 
            <span v-for="(item,index) in data.bowlingPlayingEleven" :key="index" v-if="item.player_id === data.bowler_overall_stats.id">
               &nbsp; {{item.playing_role}}</span>
          </p>
          <p class="player_bowling__status_first_p_second">
            LIMITED OVERS 
          </p>
        </div>
        <div class="player_bowling_status_second">
          <table class="player_bowling_status_second_table">
            <thead class="player_bowling_status_second_thead">
              
              <tr class="player_bowling_status_second_tr">
                <th>MATCHES</th>
                <th>RUNS</th>
                <th>WICKETS</th>
                <th>ECONOMY</th>
                <th>5 WICKETS</th>
              </tr>

            </thead>
            <tbody>
              <tr class="player_bowling_status_second_tr">
                <td> {{data.bowler_overall_stats.total_matches}} </td>
                <td> {{data.bowler_overall_stats.total_runs}} </td>
                <td>{{data.bowler_overall_stats.total_wickets}}</td>
                <td> {{bowler_economy.toFixed(2)}} </td>
                <td> {{data.bowler_overall_stats.total_five_wickets}} </td>
              </tr>
            </tbody>
          </table>
          <div class="strike_bowling_through"></div>
        </div>
      </div>
    </div>

        <!-- strike batsman player batting status  -->
    <div v-else-if="data.settings && data.settings.strike_batsman_overall_stats==1" class="player_batting_head">
      <div class="player_batting_status">
        <div class="player_batting_status_first">

          <p v-for="(item,index) in data.batsmans" :key="index"  v-if="item.is_on_strike==1" class="player_batting_status_first_p_first">
            {{item.batter.first_name +' ' + item.batter.last_name}} 
            <span> 
             &nbsp;{{item.batter.playing_role}}</span>
          </p>
          <p v-if='data.battingPlayingEleven[0].match_type=="LIMITED OVERS"' class="player_batting_status_first_p_second">
            LIMITED 
            OVERS
          </p>
        </div>
        <div class="player_batting_status_second">
          <table class="player_batting_status_second_table">
            <thead class="player_batting_status_second_thead">
              <tr class="player_batting_status_second_tr">
                <th>MATCHES</th>
                <th>RUNS</th>
                <th>AVERAGE</th>
                <th>50S</th>
                <th>100S</th>
                <th>BEST</th>
              </tr>
            </thead>
            <tbody v-if='data.battingPlayingEleven[0].match_type=="LIMITED OVERS"'>
              <tr class="player_batting_status_second_tr">
                <td>{{ data.strike_batsman.limited_match_innings }}</td>
                <td> {{data.strike_batsman.limited_match_run}} </td>
                <td>{{strike_batsman_limited_match_average.toFixed(2)}}</td>
                <td>{{data.strike_batsman.limited_match_fifty}}</td>
                <td>{{data.strike_batsman.limited_match_hundred}}</td>
                <td> {{data.strike_batsman.highest_in_limited}} </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr class="player_batting_status_second_tr">
                <td>{{ data.strike_batsman.test_match_innings }}</td>
                <td> {{data.strike_batsman.test_match_run}} </td>
                <td>{{strike_batsman_test_match_average.toFixed(2)}}</td>
                <td>{{data.strike_batsman.test_match_fifty}}</td>
                <td>{{data.strike_batsman.test_match_hundred}}</td>
                <td> {{data.strike_batsman.highest_in_test}} </td>
              </tr>
            </tbody>
            
          </table>
          <div class="strike_through"></div>
        </div>
      </div>
    </div>

      <!-- non strike batsman player batting status  -->
    <div v-else-if="data.settings && data.settings.non_strike_batsman_overall_stats==1" class="player_batting_head">
      <div class="player_batting_status">
        <div class="player_batting_status_first">

          <p v-for="(item,index) in data.batsmans" :key="index"  v-if="item.is_on_strike==0" class="player_batting_status_first_p_first">
            {{item.batter.first_name +' ' + item.batter.last_name}} <span>&nbsp; {{item.batter.playing_role}}</span>
          </p>
          <p v-if='data.battingPlayingEleven[0].match_type=="LIMITED OVERS"' class="player_batting_status_first_p_second">
            LIMITED 
            OVERS
          </p>
        </div>
        <div class="player_batting_status_second">
          <table class="player_batting_status_second_table">
            <thead class="player_batting_status_second_thead">
              <tr class="player_batting_status_second_tr">
                <th>MATCHES</th>
                <th>RUNS</th>
                <th>AVERAGE</th>
                <th>50S</th>
                <th>100S</th>
                <th>BEST</th>
              </tr>
            </thead>
            <tbody v-if='data.battingPlayingEleven[0].match_type=="LIMITED OVERS"'>
              <tr class="player_batting_status_second_tr">
                <td>{{ data.non_strike_batsman.limited_match_innings }}</td>
                <td> {{data.non_strike_batsman.limited_match_run}} </td>
                <td>{{non_strike_batsman_limited_match_average.toFixed(2)}}</td>
                <td>{{data.non_strike_batsman.limited_match_fifty}}</td>
                <td>{{data.non_strike_batsman.limited_match_hundred}}</td>
                <td> {{data.non_strike_batsman.highest_in_limited}} </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr class="player_batting_status_second_tr">
                <td>{{ data.non_strike_batsman.test_match_innings }}</td>
                <td> {{data.non_strike_batsman.test_match_run}} </td>
                <td>{{non_strike_batsman_test_match_average.toFixed(2)}}</td>
                <td>{{data.non_strike_batsman.test_match_fifty}}</td>
                <td>{{data.non_strike_batsman.test_match_hundred}}</td>
                <td> {{data.non_strike_batsman.highest_in_test}} </td>
              </tr>
            </tbody>
            
          </table>
          <div class="strike_through"></div>
        </div>
      </div>
    </div>

     <!-- player match status  -->
    <div class="player_match_status_head" v-else-if="data.settings && data.settings.scorecard_with_last_wicket==1">
      <div class="player_match_status">
        <div class="player_match_status_first" >
          <p class="player_match_status_first_p_first">{{ teamWicket.length > 0 ? teamWicket[teamWicket.length-1].batter.first_name + ' ' + teamWicket[teamWicket.length-1].batter.last_name: ''}}</p>
          <p class="player_match_status_first_p_second">{{teamWicket.length > 0 ?teamWicket[teamWicket.length-1].runs_achieved: 0}} 
            <span>({{teamWicket.length > 0 ?teamWicket[teamWicket.length-1].balls_faced:0}})</span></p>
        </div>
        <!-- <div v-if=""></div> -->
        <div class="player_match_status_second" v-if="data.bowling_summary && teamWicket[teamWicket.length-1].wicket_type=='CAUGHT' && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            <span>c</span> {{teamWicket.length>0 ? teamWicket[teamWicket.length-1].caught_by.first_name: 'NULL'}} &nbsp; &nbsp; 
            <span>b</span> {{teamWicket.length> 0 ? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='RUN_OUT'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            <span>run out</span> &nbsp; &nbsp; <span>by</span> {{teamWicket.length> 0 ? teamWicket[teamWicket.length-1].run_out_by.first_name: 'NULL'}}
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
         <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='STUMPED'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            <span>std</span> &nbsp; {{teamWicket.length > 0 ? teamWicket[teamWicket.length - 1].stumped_by.first_name: ''}} &nbsp; &nbsp; 
            <span>b</span> {{teamWicket.length> 0 ? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='CAUGHT_BEHIND'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            <span>c</span> {{teamWicket.length>0 ? teamWicket[teamWicket.length-1].caught_by.first_name: 'NULL'}} &nbsp; &nbsp; 
            <span>b</span> {{teamWicket.length> 0 ? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div> 
        <div class="player_match_status_second" v-else-if="teamWicket && teamWicket[teamWicket.length-1].wicket_type=='BOWLED'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            <span></span>  &nbsp; &nbsp; <span>b</span> {{teamWicket.length> 0 ? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='HIT'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            <span>hit out</span>  &nbsp; &nbsp; <span>b</span> {{teamWicket.length> 0 ? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='HIT_BALL_TWICE'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
             &nbsp; &nbsp; HIT BALL TWICE
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='ABSENT'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
              ABSENT
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;0.00</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='TIME_OUT'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            &nbsp; &nbsp; TIME OUT
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;0.00</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='RETIRED_HURT'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
            &nbsp; &nbsp; RETIRED HURT
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='RETIRED'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
             &nbsp; &nbsp; RETIRED
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
         <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='RETIRED_OUT'  && teamWicket.length>0">
          <p class="player_match_status_second_first_p">
             &nbsp; &nbsp; RETIRED HURT
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp;{{ last_wicket_average.toFixed(2) }}</span>
          </p>
        </div>
        <div class="player_match_status_second" v-else-if="teamWicket[teamWicket.length-1].wicket_type=='CAUGHT_BOWLED'">
          <p class="player_match_status_second_first_p">
            <span>c&b</span>&nbsp; &nbsp;  {{teamWicket.length> 0 ? teamWicket[teamWicket.length-1].wicket_by.first_name: 'NULL'}}
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>&nbsp; {{last_wicket_average.toFixed(2)}} </span>
          </p>
        </div>
      </div>
    </div>

     <!-- batting score card  -->
    <div class="batting_score_card_super" v-else-if="this.data.settings && this.data.settings.batting_summary==1">
      <div class="batting_score_card_head">
        <div class="batting_score_card">
          <div class="batting_score_card_first">
            <div class="batting_score_card_first_div_first">
              <p class="batting_score_card_first_p_first">
               {{this.data.batting_team.team_name}}  <span>v {{this.data.bowling_team.team_name}} </span>
              </p>
            </div>
            <div class="batting_score_card_first_div_second">
              <p>{{this.data.batting_summary[0].match_type}}</p>
            </div>
          </div>
          <div class="batting_score_card_second">
            <p class="batting_score_card_second_first_p">PRESENTED BY</p>
            <img
              src="http://live.scorebee.com/cricket-score/dist/img/scoorbee.png"
              alt=""
            />
          </div>
        </div>

        <div class="batting_score_card_another">
          <div class="batting_score_card_another_first" v-for="(item,index) in data.batting_summary" :key="index" v-if="item.team_id==data.batting_team.id">
            <p class="batting_score_card_another_first_p_first">{{item.batter.first_name}}</p>
            <p v-if="item.is_out==1">
              <span class="batting_score_card_another_first_p_first_span" v-if="item.wicket_type=='CAUGHT'"><span>c</span>  {{item.caught_by.first_name}} </span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='RUN_OUT'">RUN OUT </span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='STUMPED'"><span>std</span>  {{item.stumped_by.first_name}} </span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='CAUGHT_BEHIND'"><span>c</span>  {{item.caught_by.first_name}} </span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='BOWLED'">BOWLED</span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='HIT'">HIT</span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='HIT_BALL_TWICE'">HIT_BALL_TWICE</span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='ABSENT'">ABSENT</span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='TIME_OUT'">TIME OUT</span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='RETIRED_HURT'">RETIRED HURT</span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='RETIRED'">RETIRED</span>
              <span class="batting_score_card_another_first_p_first_span" v-else-if="item.wicket_type=='RETIRED_OUT'">RETIRED_OUT</span>
              
            </p>
           
            
            <p v-else>NOT OUT</p>
            <p class="batting_score_card_third_first_p_first" v-if="item.is_out==1 && item.wicket_type != 'RUN_OUT'">
              <span class="batting_score_card_third_first_p_first_span">b</span> {{item.wicket_by.first_name}}
            </p>
            <p class="batting_score_card_third_first_p_first" v-else-if="item.is_out==1 && item.wicket_type == 'RUN_OUT'">
              <span class="batting_score_card_third_first_p_first_span">by</span> {{item.run_out_by.first_name}}
            </p>
            <p class="batting_score_card_third_first_p_first" v-else>
               
            </p>
            <p>{{item.runs_achieved}} <span>&nbsp;{{item.balls_faced}} </span></p>
          </div>
          <!-- <div class="batting_score_card_another_first">
            <p class="batting_score_card_another_first_p_first">DE KOCK</p>
            <p><sub>c</sub> MAHMUDULLAH</p>
            <p class="batting_score_card_another_first_p_first">
              <sub>b</sub> TASKIN
            </p>
            <p>59 <span>44</span></p>
          </div>
          <div class="batting_score_card_another_first">
            <p class="batting_score_card_another_first_p_first">DE KOCK</p>
            <p><sub>r</sub> SAKIB</p>
            <p class="batting_score_card_another_first_p_first"><sub></sub></p>
            <p>59 <span>44</span></p>
          </div> -->
          <!-- <div class="batting_score_card_another_first">
            <p class="batting_score_card_another_first_p_first">DE KOCK</p>
            <p><sub></sub> NOT OUT</p>
            <p class="batting_score_card_another_first_p_first"><sub></sub></p>
            <p>59 <span>44</span></p>
          </div>
          <div class="batting_score_card_another_first">
            <p class="batting_score_card_another_first_p_first">DE KOCK</p>
            <p><sub></sub> NOT OUT</p>
            <p class="batting_score_card_another_first_p_first"><sub></sub></p>
            <p>59 <span>44</span></p>
          </div>
          <div class="batting_score_card_another_first">
            <p class="batting_score_card_another_first_p_first">DE KOCK</p>
            <p><sub></sub></p>
            <p class="batting_score_card_another_first_p_first"><sub></sub></p>
            <p><span></span></p>
          </div>
          <div class="batting_score_card_another_first">
            <p class="batting_score_card_another_first_p_first">DE KOCK</p>
            <p><sub></sub></p>
            <p class="batting_score_card_another_first_p_first"><sub></sub></p>
            <p><span></span></p>
          </div>
          <div class="batting_score_card_another_first">
            <p class="batting_score_card_another_first_p_first">DE KOCK</p>
            <p><sub></sub></p>
            <p class="batting_score_card_another_first_p_first"><sub></sub></p>
            <p><span></span></p>
          </div> -->
        </div>
        <div class="batting_score_card_footer">
          <p>EXTRA &nbsp; {{extra_run}}</p>
          <p>OVERS &nbsp; {{data.score.total_over}}</p>
          <p>TOTAL &nbsp; {{data.score.total_runs}}-{{data.score.total_wicket}}</p>
        </div>
      </div>
    </div>

     <!-- team bowling card  -->
     <div class="team_bowling_score_card_super" v-else-if="data.settings && data.settings.bowling_summary==1 && data.bowling_summary">
      <div class="team_bowling_score_card_head">
        <div class="team_bowling_score_card">
          <div class="team_bowling_score_card_first">
            <div class="team_bowling_score_card_first_div_first">
              <p class="team_bowling_score_card_first_p_first">
                {{this.data.bowling_team.team_name}} <span>v {{this.data.batting_team.team_name}} </span>
              </p>
            </div>
            <div class="team_bowling_score_card_first_div_second">
              <p>{{this.data.batting_summary[0].match_type}}</p>
            </div>
          </div>
          <div class="team_bowling_score_card_second">
            <img
              src="http://live.scorebee.com/cricket-score/dist/img/scoorbee.png"
              alt=""
            />
          </div>
        </div>

        <div class="team_bowling_score_card_another">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>OVERS</th>
                <th>Maiden Overs</th>
                <th>RUNS</th>
                <th>WICKETS</th>
                <th>ECONOMY</th>
              </tr>
            </thead>
            <tbody class="team_bowling_score_card_another_tbody" v-for="(item,index) in data.bowling_summary" :key="index" v-if="item.team_id == data.bowling_team.id">
              <tr>
                <td class="team_bowling_bowler_name">{{item.bowler.first_name + ' ' + item.bowler.last_name}}</td>
                <td>{{item.overs_bowled}}</td>
                <td>{{item.maiden_overs}}</td>
                <td>{{item.runs_gave}}</td>
                <td>{{item.wickets}}</td>
                <td>{{(item.runs_gave / item.overs_bowled).toFixed(2)}}</td>
                
              </tr>
              <div class="bottom_arrow"></div>
              <!-- <tr>
                <td>SAIFUDDIN</td>
                <td>3</td>
                <td>4</td>
                <td>30</td>
                <td>1</td>
                <td>13.33</td>
              </tr>
              <tr>
                <td>SHORIFUL ISLAM</td>
                <td>4</td>
                <td>10</td>
                <td>20</td>
                <td>3</td>
                <td>5.00</td>
              </tr>
              <tr>
                <td>MUSTAFIZUR RAHMAN</td>
                <td>2</td>
                <td>6</td>
                <td>8</td>
                <td>2</td>
                <td>4.00</td>
              </tr> -->
            </tbody>
          </table>
        </div>

        <div class="team_bowling_score_card_footer">
          <p>EXTRA &nbsp; {{extra_run}}</p>
          <p>OVERS &nbsp; {{data.score.total_over}}</p>
          <p>TOTAL &nbsp; {{data.score.total_runs}}-{{data.score.total_wicket}}</p>
        </div>
        <div class="footer_scorebee">
          <p>Presented By <span>SCOREBEE</span></p>
        </div>
      </div>
    </div>

  

    <template v-else>
       <div class="head">
      <div class="body">
        <div class="scoreBee_logo">
          <img
            class=""
            src="http://live.scorebee.com/cricket-score/dist/img/scoorbee.png"
            alt="ScoreBee_logo"
          />
        </div>
  
        <div class="score_card">
          <div class="score">
            <p class="bowling_team">
              <template v-if="data.bowling_team">
                    {{data.bowling_team.team_short_name}}
                </template> v <span class="batting_team">
                    <template v-if="data.batting_team">
                        {{data.batting_team.team_short_name}}
                    </template>
                </span>
            </p>
            <p class="scored">
                <template v-if="data.score">
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

        <div class="player_card">
          <ul>
            <div class="first_player">
              <li v-for="(item,index) in data.batsmans" :key="index" v-if="data.batsmans">
                  <span v-if="item.is_on_strike==1">
                      <div class="on_strike"></div>
                  </span>
                  <p class="player_name">{{item.batter.first_name}} </p>
                  <div class="player_score"> {{item.runs_achieved}}  <span>( {{item.balls_faced}} )</span> </div>
                  
              </li>
              </div>
            </ul>
         
        </div>
      <div  class="match_target">
          
          <div class="target_text">
            <span v-if="data">
              <template v-if="data.is_first_innings==1">
                      <span v-if="data.score && data.score.total_over<5">
                          TOSS
                      </span>
                      <span v-else>
                          CURRENT RUN RATE
                      </span>
                  </template>
                  <template v-else>
                    TARGET
                  </template>
            </span>
          </div>
          <div class="target_run">
              <span v-if="data">
               <template v-if="data.is_first_innings==1">
                      <span v-if="data.score && data.score.total_over<5">
                          {{data.toss}}
                      </span>
                      <span v-else>
                           {{currentRunRate}}
                      </span>
                  </template>
                  <template v-else>
                    {{data.target}}
                  </template>
            
            </span>
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
                    {{data.bowler.bowler.first_name }}
                </template></p>
            <p class="bowler_run_wicket_p_second"  v-if="data.bowler">
              {{data.bowler.wickets}}-{{data.bowler.runs_gave}}
               <span class="bowler_run_wicket_sub_second">{{data.bowler.overs_bowled}}</span>
            </p>
          </div>

          <div class="over_every_ball">
            
          </div>
        </div>
      </div>
        </div>
    </template>


     <!-- player match status  -->
    <!-- <div class="player_match_status_head">
      <div class="player_match_status">
        <div class="player_match_status_first">
          <p class="player_match_status_first_p_first">SAKIB AL HASAN</p>
          <p class="player_match_status_first_p_second">30 <span>(35)</span></p>
        </div>
        <div class="player_match_status_second">
          <p class="player_match_status_second_first_p">
            <span>c</span> AFRIDI &nbsp; &nbsp; <span>b</span> UMOR GUL
          </p>
          <p class="player_match_status_second_second_p">
            STRIKE RATE <span>50.00</span>
          </p>
        </div>
      </div>
    </div> -->





    

    <!-- team bowling card  -->
     <!-- <div class="team_bowling_score_card_super">
      <div class="team_bowling_score_card_head">
        <div class="team_bowling_score_card">
          <div class="team_bowling_score_card_first">
            <div class="team_bowling_score_card_first_div_first">
              <p class="team_bowling_score_card_first_p_first">
                BANGLADESH <span>v SOUTH AFRICA </span>
              </p>
            </div>
            <div class="team_bowling_score_card_first_div_second">
              <p>T20 INTERNATIONAL</p>
            </div>
          </div>
          <div class="team_bowling_score_card_second">
            <img
              src="http://live.scorebee.com/cricket-score/dist/img/scoorbee.png"
              alt=""
            />
          </div>
        </div>

        <div class="team_bowling_score_card_another">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>OVERS</th>
                <th>DOT BALLS</th>
                <th>RUNS</th>
                <th>WICKETS</th>
                <th>ECONOMY</th>
              </tr>
            </thead>
            <tbody class="team_bowling_score_card_another_tbody">
              <tr>
                <td>SAKIB AL HASAN</td>
                <td>3</td>
                <td>7</td>
                <td>18</td>
                <td>2</td>
                <td>9.00</td>
              </tr>
              <tr>
                <td>SAIFUDDIN</td>
                <td>3</td>
                <td>4</td>
                <td>30</td>
                <td>1</td>
                <td>13.33</td>
              </tr>
              <tr>
                <td>SHORIFUL ISLAM</td>
                <td>4</td>
                <td>10</td>
                <td>20</td>
                <td>3</td>
                <td>5.00</td>
              </tr>
              <tr>
                <td>MUSTAFIZUR RAHMAN</td>
                <td>2</td>
                <td>6</td>
                <td>8</td>
                <td>2</td>
                <td>4.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="team_bowling_score_card_footer">
          <p>EXTRA &nbsp; 10</p>
          <p>OVERS &nbsp; 12</p>
          <p>TOTAL &nbsp; 84-8</p>
        </div>
        <div class="footer_scorebee">
          <p>Presented By <span>SCOREBEE</span></p>
        </div>
      </div>
    </div> -->


    <!-- old scorecard design  -->
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
                                         {{item.runs_achieved}}
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
                                    TAR-{{data.target}} REQ - {{requireRunRate}} CRR - {{currentRunRate}}
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

        
        // batting_summay total extra run 
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
        let last_wicket_ball_faced = this.teamWicket[this.teamWicket.length-1].balls_faced>0 ?
          this.teamWicket[this.teamWicket.length-1].balls_faced:1
        this.last_wicket_average = (this.teamWicket[this.teamWicket.length -1].runs_achieved/last_wicket_ball_faced)*100;
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

        if( this.settings &&( this.data.settings.playing_list_of_team_1 ==1 || this.data.settings.playing_list_of_team_2 ==1 || this.data.settings.match_summary==1 || this.data.settings.batting_summary==1
         || this.data.settings.bowling_summary==1 || this.data.settings.standing_of_the_teams==1 || this.data.settings.bowler_slog_over_stats==1
         || this.data.settings.bowler_vs_RHB==1 || this.data.settings.bowler_vs_LHB==1 || this.data.settings.bowler_match_stats==1 || this.data.settings.bowler_overall_stats==1 
         || this.data.settings.non_strike_batsman_match_stats==1 || this.data.settings.strike_batsman_match_stats==1 || this.data.settings.new_batsman_overall_stats==1
         || this.data.settings.non_strike_batsman_overall_stats==1 || this.data.settings.strike_batsman_overall_stats==1 || this.data.settings.innings_break_card==1
         || this.data.settings.tournament_end_card==1 || this.data.settings.scorecard_with_last_wicket==1)){
           this.visible1 =false
        }else if(this.settings &&( this.data.settings.match_end_card==1 || 
         this.data.settings.only_team_name==1 || this.data.settings.scorecard_with_need_run_of_balls==1 || this.data.settings.scorecard_with_match_sixes==1||
         this.data.settings.scorecard_with_tournament_sixes==1|| this.data.settings.scorecard_with_tournament_fours==1 || this.data.settings.scorecard_with_target==1 || this.data.settings.scorecard_with_crr ==1 ||
         this.data.settings.scorecard_with_toss==1)){
          this.visible1 = true
        }else{
          this.visible1=false
        }
      }

      setTimeout(() =>{
          this.getData()
          this.extra_run = 0
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
    font-family:Poppins;
   
 }
 .scorecard_width{
   width: 22%;
 }
 .head{
     margin-bottom: 50px;
 }
 li{
   list-style-type: none;
 }
 .body {
  /* height: 100vh;
        width: 100vw; */
  display: flex;
  height: 135px;
  width: 99.5vw;
  /* margin-bottom: 25px; */
  /* flex-basis: 0;
        flex-grow: 1; */
  justify-content: flex-start;
  align-items: flex-end;
  gap: 5px;
}
.scoreBee_logo {
  display: flex;
  align-items: center;
  padding: 0 5px;
  width: 10%;
  height: 90px;
  margin-left: -8px;
  background-color: #feda14;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.scoreBee_logo img {
  width: 90%;
}
/* score card */
.score_card {
  display: flex;
  height: 90px;
  width: 22%;
  overflow: hidden;
  flex-direction: column;
  /* background-color: #171c38; */
  border-radius: 10px;
  background-color: #feda14;
  opacity: 1;
  color: #fff;
}
.score {
  display: flex;
  background-color: #171c38;
  opacity: 2;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  gap: 25px;
  padding: 5px;
  height: 50%;
}
.bowling_team {
  font-size: 14px;
  width: 75%;
  margin: 2px;
}
.scored {
  width: 40%;
  font-weight: bold;
}
.batting_team {
  font-size: 16px;
  font-weight: bold;
}
.over {
  display: flex;
  height: 50%;
  align-items: center;
}
.over_played {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-top-left-radius: 10px; */
  /* background-color: #feda14; */
  padding: 0 auto;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  color: black;
  padding: 5%;
}
.power_play {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #171c38;
  text-align: center;
  width: 20%;
  font-size: 16px;
  font-weight: bold;
  padding: 5%;
  text-transform: uppercase;
  /* border-bottom-left-radius:10px; */
  border-bottom-right-radius: 10px;
}

/* player card */
.player_card {
  display: flex;
  flex-direction: column;
  background-color: #171c38;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;
  height: 90px;
  width: 22%;
}
.on_strike {
  width: 6px;
  height: 9px;
  margin-left: -3px;
  margin-right: 2px;
  background-color: #feda14;
  overflow: hidden;
  position: relative;
}
.on_strike::before {
  content: "";
  width: 200%;
  height: 0;
  padding-top: 200%;
  border-radius: 100%;
  background: #171c38;
  position: absolute;
  bottom: 60%;
  left: 13%;
}
.on_strike::after {
  content: "";
  width: 200%;
  height: 0;
  padding-top: 200%;
  border-radius: 100%;
  background: #171c38;
  position: absolute;
  top: 60%;
  left: 13%;

  /* border-top-right-radius: 40px;
    border-bottom-right-radius: 40px; */
  /* transform: translateY(-50%); */
}
.first_player {
  display: flex;
    margin-left: -20px;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: flex-start; */
  /* gap: 25px; */
  padding: 0 2px;
  width: 100%;
  height: 50%;
}
.player_card ul div li{
    list-style-type: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-top: -20px;
    font-size: 15px;
    width: 100%;
}
.first_player .player_name {
  width: 60%;
  align-self: flex-start;
  padding: 3px;
  margin-right: 0px;
}

.first_player .player_score {
  width: 40%;
  text-align: center;
  padding: 0 5px;
}
.player_score span{
    font-weight: normal;
}
.second_player {
  display: flex;
  align-items: center;
  padding: 0 5px;
  /* gap: 25px; */
  height: 50%;
}
.second_player .player_name {
  width: 70%;
  padding: 3px;
}
.second_player .player_score {
  width: 30%;
  text-align: center;
  padding: 0 5px;
}

/* score require  */
.score_require {
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 90px;
  width: 22%;
  font-weight: bold;
  font-size: 13px;
}

.score_need_from {
  display: flex;
  flex-direction: column;
}

.require_run {
  display: flex;
  align-items: center;
  background-color: #171c38;
  padding: 0 5px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 50%;
  margin-bottom: 1px;
  gap: 10px;
}
.require_run p {
  width: 33%;
  text-align: center;
}
.require_ball {
  display: flex;
  align-items: center;
  padding: 0px 5px;
  height: 50%;
  background-color: #171c38;
  gap: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.require_ball p {
  width: 33%;
  text-align: center;
}
.run_to_get {
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #feda14;
  padding: 7px;
  width: 30px;
  color: black;
}
.run_to_get p{
  margin-left: -4px;
}
.ball_in_hand {
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 32px;
  color: black;
  background-color: #feda14;
}
.from_balls {
  text-align: end;
}

/* bowler match status */

.bowler_match_status {
  display: flex;
  flex-direction: column;
  /* padding: 0 5px; */
  width: 25%;
  height: 100%;
}
.bowler_run_wicket {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171c38;
  padding: 5px;
  height: 30%;
  gap: 50px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-top-left-radius: 10px;
}
.bowler_run_wicket_sub_second {
  font-weight: bold;
  font-size: 12px;
}
.over_every_ball {
  background-color: #feda14;
  padding: 5px;
  height: 40%;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  font-size: 13px;
  font-weight: bold;
}
.over_every_ball ul li{
  list-style-type: none;
}
.stream_text {
  height: 33%;
  display: flex;
}
.blank {
  width: 22%;
}

.stream_company {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  /* height: 33%; */
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #171c38;
}

.stream_small {

  font-size: 10px;
  font-weight: bold;
  color: #fff;
  /* background-color: #171c38; */
}
.stream_big {
  font-size: 1rem;
  font-weight: bold;
  color: #feda14;
  background-color: #171c38;
}

/* target part  */
.match_target {
  width: 22%;
  height: 90px;
  display: flex;
  flex-direction: column;
}
.target_text {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 50%;
  font-weight: bold;
  background-color: #171c38;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.target_run {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-weight: bold;
  color: black;
  background-color: #feda14;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* team name  */
/* .team_text{
 display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 40%;
  font-weight: bold;
  background-color: #171c38;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
} */
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
  min-height: 90px;
  width: 100%;
  font-size: 14px;
  /* padding: 5; */
  font-weight: 500;
  color: black;
  background-color: #feda14;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow-y: auto;
}

/* current run rate part  */
.current_run_rate {
  width: 22%;
  height: 90px;
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
  background-color: #171c38;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.current_run_rate_dis {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-weight: bold;
  color: black;
  background-color: #feda14;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* toss part  */
.toss {
  width: 22%;
  height: 90px;
  display: flex;
  flex-direction: column;
}
.won_the_toss {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
  height: 50%;
  width: 97%;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #feda14;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.decided_winning_toss {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-size: 12px;
  width: 100%;
  font-weight: bold;
  color: #fff;
  background-color: #171c38;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* tournament sixes part  */
.tournament_sixes {
  width: 22%;
  height: 90px;
  display: flex;
  gap: 1px;
}
.tournament_sixes_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 100%;
  width: 50%;
  font-weight: bold;
  background-color: #feda14;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  /* border-top-right-radius: 10px; */
}
.tournament_sixes_first {
  font-size: 16px;
  font-weight: bold;
  /* margin-bottom: -20px; */
}
.tournament_sixes_second {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.total_tournament_sixes {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background-color: #171c38;
  /* border-bottom-left-radius:10px; */
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

/* tournament fours parts  */
.tournament_fours {
  width: 22%;
  height: 90px;
  display: flex;
  gap: 1px;
}
.tournament_fours_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 100%;
  width: 50%;
  font-weight: bold;
  background-color: #feda14;
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
  background-color: #171c38;
  /* border-bottom-left-radius:10px; */
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}


/* team bowling card  */
.team_bowling_score_card_head {
  margin: 0 auto;
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.team_bowling_score_card {
  margin: 10px auto;
  display: flex;
  /* align-items: center; */
  width: 100%;
  height: 80px;
}
.team_bowling_score_card_first {
  display: flex;
  flex-direction: column;
  background-color: #171c38;
  border: 2px solid #feda14;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #fff;
  /* justify-content: center; */
  width: 80%;
  height: 100%;
}
.team_bowling_score_card_first_div_first {
  height: 70%;
  border-bottom: 3px solid #feda14;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
}
.team_bowling_score_card_first_p_first {
  font-weight: bold;
  font-size: 20px;
}
.team_bowling_score_card_first_p_first span {
  font-weight: normal;
  font-size: 14px;
}
.team_bowling_score_card_first_div_second {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  
}
.team_bowling_score_card_second {
  width: 20%;
  height: 85%;
  background-color: #feda14;
  padding: 8px;
  text-align: center;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
}
.team_bowling_score_card_second img {
  width: 70%;
  /* margin: auto auto; */
}
.team_bowling_score_card_another {
  /* display: flex; */
  width: 100%;

  border: 2px solid #feda14;
  border-radius: 20px;
  background-color: #171c38;
  overflow: hidden;
}
.team_bowling_score_card_another_tbody{
  position: relative;
}
.bottom_arrow{
  position: absolute;
  width:100%;
  height: 1px;
  background-color: rgb(230, 223, 223);
  top: 0;
}
.team_bowling_score_card_another table {
  width: 100%;
  text-align: center;
  color: #fff;
  border-radius: 20px;
}
.team_bowling_score_card_another table tr {
  border-radius: 20px;
  /* border-bottom: 2px solid rgb(230, 223, 223); */
}

.team_bowling_score_card_another table tr th,
.team_bowling_score_card_another td {
  padding: 8px 0;
  font-weight: bold;
}
.team_bowling_score_card_footer {
  width: 80%;
  margin: 10px auto;
  display: flex;
  background-color: #181e48;
  padding: 8px 5px;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid #feda14;
}
.team_bowling_score_card_footer p {
  width: 33%;
  text-align: center;
  color: #fff;
}
.footer_scorebee {
  width: 30%;
  margin: 4px auto;
  background-color: #feda14;
  padding: 10px;
  text-align: center;
  color: #000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.footer_scorebee p {
  font-size: 14px;
}
.footer_scorebee p span {
  font-weight: bold;
}
.batting_score_card_super {
  margin-bottom: 20px;
}
/* .team_bowling_score_card_another_tbody tr td{
  border-bottom: 1px solid rgb(230, 223, 223);
} */

/* batting score card  */
.batting_score_card_head {
  margin: 0 auto;
  width: 900px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.batting_score_card {
  margin: 5px auto;
  display: flex;
  /* align-items: center; */
  width: 100%;
  height: 80px;
}
.batting_score_card_first {
  display: flex;
  flex-direction: column;
  background-color: #171c38;
  border: 2px solid #feda14;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #fff;
  /* justify-content: center; */
  width: 80%;
  height: 100%;
}
.batting_score_card_first_div_first {
  height: 65%;
  border-bottom: 3px solid #feda14;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
}
.batting_score_card_first_p_first {
  font-weight: bold;
  font-size: 20px;
}
.batting_score_card_first_p_first span {
  font-weight: normal;
  font-size: 14px;
}
.batting_score_card_first_div_second {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
}
.batting_score_card_second {
  width: 20%;
  background-color: #feda14;
  height: 85%;
  padding: 8px;
  text-align: center;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.batting_score_card_second img {
  width: 70%;
  margin-top: -10px;
  /* margin: 0 auto; */
}
.batting_score_card_second_first_p {
  font-size: 10px;
}
.batting_score_card_another {
  margin: 2px auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* align-items: center; */
  width: 100%;
  /* height: 80px; */
}
.batting_score_card_another_first {
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  width: 100%;
  padding: 3px 5px;
  color: #fff;
  background-color: #171c38;
  border-radius: 15px;
}
.batting_score_card_another_first p {
  font-weight: bold;
  width: 25%;
  text-align: center;
}
.batting_score_card_another_first_p_first {
  font-weight: bold;
  text-transform: capitalize;
}
.team_bowling_bowler_name{
  text-transform: capitalize;
}

.batting_score_card_another_first p span,
.batting_score_card_another_first p sub {
  font-weight: normal;
  font-size: 14px;
  text-transform: capitalize;
}
.batting_score_card_third_first_p_first{
  text-transform: capitalize;
}
.batting_score_card_third_first_p_first span{
  text-transform: lowercase;
}
/* .batting_score_card_another_first_p_first_span  {
  font-weight: normal;
  text-transform: capitalize;
  font-size: 20px;
} */
/* .batting_score_card_another_first p span span{
  font-weight: normal;
  font-size: 12px;
} */
.batting_score_card_footer {
  width: 80%;
  margin: 10px auto;
  display: flex;
  background-color: #181e48;
  padding: 3px 5px;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid #feda14;
}
.batting_score_card_footer p {
  width: 33%;
  text-align: center;
  color: #fff;
}

/* player match status  */
.player_match_status {
  margin: 80px auto;
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
  background-color: #171c38;
  border: 2px solid #feda14;
  border-radius: 20px;
  padding: 4px;
  color: #fff;
}
.player_match_status_first_p_first {
  width: 80%;
  align-self: center;
  justify-self: flex-start;
  font-weight: bold;
  font-size: 16px;
}
.bowler_over_status{
  width: 80%;
  align-self: center;
  justify-self: flex-start;
  font-weight: bold;
  font-size: 16px;
  text-transform: capitalize;
}
.player_match_status_first_p_second {
  font-size: 16px;
  font-weight: bold;
}
.player_match_status_second_first_p{
  text-transform: capitalize;
}
.player_match_status_first_p_second span, .player_match_status_second_first_p span{
  font-size: 12px;
  text-transform: lowercase;
}
.player_taken_run{
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
}
.player_taken_run span{
  font-size: 16px;
}
.player_match_status_first{
  width: 75%;
}
.player_match_status_second {
  width: 70%;
  display: flex;
  justify-content: center;
  background-color: #171c38;
  padding: 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #fff;
}
.player_match_status_second_first_p {
  width: 70%;
  font-weight: bold;
}
.player_match_status_second_second_p {
  font-size: 16px;
  font-weight: bold;
}
.player_match_status_second_second_p span {
  color: #feda14;
}
/* PLAYER BOWLING STATUS  */
.player_bowling_status {
  margin: 80px auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.strike_bowling_through{
  position: absolute;
    top: 136px;
    bottom: -4px;
    width: 73.4%;
    height: 3px;
    z-index: 2;
    background-color: #feda14;
}
.player_bowling_status_first {
  width: 74%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #171c38;
  border: 2px solid #feda14;
  border-radius: 20px;
  padding: 5px;
  color: #fff;
}
.player_bowling__status_first_p_first {
  width: 60%;
  align-self: center;
  justify-self: flex-start;
  font-weight: bold;
  text-transform: capitalize;
}
.player_bowling_status_second_thead{
  border-bottom: 2px solid #feda14;
  width: 100%;
}
.player_bowling__status_first_p_first span {
  font-size: 12px;
  font-weight: normal;
}
.player_bowling__status_first_p_second {
  font-size: 14px;
}
.player_bowling_status_second {
  width: 80%;
  display: flex;
  justify-content: center;
  color: #fff;
  
  
}
.player_bowling_status_second_table tbody{
  border-top: 2px solid #feda14;
}

.player_bowling_status_second_table,
.player_bowling_status_second_tr th,
.player_bowling_status_second_tr td {
  background-color: #171c38;
  padding: 10px 30px;
  border-radius: 10px;
  text-align: center;
}
/* player batting status */
.player_batting_status {
  margin: 80px auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.strike_through {
    position: absolute;
    top: 137px;
    bottom: -4px;
    width: 73.4%;
    height: 3px;
    z-index: 2;
    background-color: #feda14;
}
.player_batting_status_first {
  width: 74%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #171c38;
  border: 2px solid #feda14;
  border-radius: 20px;
  padding: 5px;
  color: #fff;
}
.player_batting_status_first_p_first {
  width: 60%;
  align-self: center;
  justify-self: flex-start;
  font-weight: bold;
  text-transform: capitalize;
}
.player_batting_status_first_p_first span {
  font-size: 12px;
  font-weight: normal;
}
.player_batting_status_first_p_second {
  font-size: 16px;
}
.player_batting_status_second {
  width: 80%;
  display: flex;
  justify-content: center;
  color: #fff;
}
.player_batting_status_second_thead {
  border-bottom: 2px solid #feda14;
}
.player_batting_status_second_table,
.player_batting_status_second_tr th,
.player_batting_status_second_tr td {
  background-color: #171c38;
  padding: 10px 30px;
  border-radius: 10px;
  text-align: center;
}

.batting_score_card_third_first_p_first_span{
  text-transform: lowercase !important;
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
@media screen and (max-width: 1400px) {
  /* .head {
    overflow-x: scroll;
  } */
  .body {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 99vw;
  }
  .scoreBee_logo {
    width: 10%;
  }
  .score_card {
    width: 20%;
  }
  .player_card {
    width: 25%;
  }
  .score_require {
    width: 20%;
  }
  .match_target {
    width: 20%;
  }
  .current_run_rate {
    width: 20%;
  }
  .toss {
    width: 22%;
    text-align: center;
  }
  .tournament_sixes {
    width: 20%;
  }
  .tournament_fours {
    width: 20%;
  }
  .bowler_match_status {
    width: 25%;
  }
  .team_details{
    padding: 5px;
    background-color: #FEDA14;
    border-radius: 10px;
    max-height: 110px;
  }
  .team_name{
    font-size: 12px;
    min-height: 90px;
    /* max-height: 135px; */
    width: 100%;
    margin: 5px;
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
@media screen and (max-width: 1230px) {
  .tournament_sixes_first{
    font-size: 14px;
  }
  .tournament_sixes_second{
    font-size: 16px;
  }
}
@media screen and (max-width: 1200px) {
  .head {
    overflow-x: scroll;
  }
  .body {
    width: 1190px;
  }
  .scoreBee_logo{
    width: 12%;
  }
  .score_card {
    width: 24%;
  }
  .player_card {
    width: 30%;
  }
  .score_require {
    width: 24%;
  }
  .match_target {
    width: 20%;
  }
  .current_run_rate {
    width: 20%;
  }
  .toss {
    width: 25%;
    text-align: center;
  }
  .tournament_sixes {
    width: 22%;
  }
  .tournament_fours {
    width: 20%;
  }
  .bowler_match_status {
    width: 30%;
  }
  .team_bowling_score_card_head {
    width: 950px;
  }
  .batting_score_card_head {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .batting_score_card_another_first {
    width: 100%;
  }
  .batting_score_card_another_first p {
    font-weight: bold;
    width: 25%;
    text-align: center;
  }
  .batting_score_card_second {
    width: 20%;
    height: 93%;
    background-color: #feda14;
    padding: 5px;
    text-align: center;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
  /* player match status  */
  .player_match_status {
    width: 800px;
  }
   /* player bowling status */
  .player_bowling_status {
    /* margin:80px 0; */
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .strike_bowling_through{
    position: absolute;
    top: 136px;
    bottom: -4px;
    width: 88.8%;
    height: 3px;
    z-index: 2;
    background-color: #feda14;
  }
  .player_bowling_status_first {
    width: 90%;
    display: flex;
    justify-content: center;
  }
  .player_bowling_status_first_p_first {
    align-self: center;
    justify-self: center;
  }
  .player_bowling_status_second {
    width: 90%;
  }
  .player_bowling_status_second_table,
  .player_batting_status_second_tr th,
  .player_batting_status_second_tr td {
    background-color: #171c38;
    padding: 10px 18px;
    border-radius: 10px;
    text-align: center;
  }
  .player_bowling_status_second_tr :last-child {
    padding: 10 25px;
  }
   /* player batting status */
  .player_batting_status {
    /* margin:80px 0; */
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .player_batting_status_first {
    width: 75%;
    display: flex;
    justify-content: center;
  }
  .strike_through{
    position: absolute;
    top: 137px;
    bottom: -4px;
    width: 71%;
    height: 3px;
    z-index: 2;
    background-color: #feda14;
  }
  .player_batting_status_first_p_first {
    align-self: center;
    justify-self: center;
  }
  .player_batting_status_second {
    width: 60%;
  }
  .player_batting_status_second_table,
  .player_batting_status_second_tr th,
  .player_batting_status_second_tr td {
    background-color: #171c38;
    padding: 10px 18px;
    border-radius: 10px;
    text-align: center;
  }

}
@media screen and (max-width: 960px) {
   .team_bowling_score_card_super{
    overflow-x: scroll;
  }
}
@media screen and (max-width: 900px) {
  .player_bowling_status_first{
    width: 100%;
  }
  .team_bowling_score_card_head{
    width: 920px;
  }
   /* player match status  */
  .player_match_status {
    width: 500px;
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
    width: 97%;
  }
  .batting_score_card_head {
    width: 600px;
  }
  .strike_bowling_through{
    position: absolute;
    top: 126px;
    bottom: -4px;
    width: 77.5%;
    height: 2px;
    z-index: 2;
    background-color: #feda14;
  }
  .player_bowling__status_first_p_first {
    font-size: 12px;
    /* text-transform: lowercase; */
  }
  .player_bowling__status_first_p_first span {
    font-size: 10px;
  }
  .player_bowling_status_second_tr {
    font-size: 12px;
  }

  /* .team_bowling_score_card_head {
    width: 700px;
  } */
  .batting_score_card_head {
    width: 750px;
    overflow: scroll;
  }
  .batting_score_card_super{
    overflow: scroll;
  }
 
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
    background-color: #feda14;
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
    background-color: #171c38;
    padding: 10px 12px;
    border-radius: 10px;
  } */
}
@media screen and (max-width:800px){
  .player_match_status_head {
    overflow-x: scroll;
  }
  .player_bowling_head{
    overflow-x: scroll;
  }
  .player_batting_head{
    overflow-x: scroll;
  }
}
</style>