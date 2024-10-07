import React from "react";
import { Text, View } from "react-native";
import { COLORS,FONTS } from "../constants/theme";


export default class StopWatch2 extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 31000 };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs:any){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {

      this.startTimer();

      let timeLeftVar = this.secondsToTime(this.state.seconds);
      
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      return(
        <View>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:5
          }}>
              <Text style={{...FONTS.fontSemiBold,fontSize:15,color:COLORS.primary,}}>{this.state.time.h}</Text>
              <Text style={{...FONTS.fontSemiBold,fontSize:15,color:COLORS.primary,}}>:</Text>
              <Text  style={{...FONTS.fontSemiBold,fontSize:15,color:COLORS.primary,}}>{this.state.time.m}</Text>
              <Text style={{...FONTS.fontSemiBold,fontSize:15,color:COLORS.primary,}}>:</Text>
              <Text  style={{...FONTS.fontSemiBold,fontSize:15,color:COLORS.primary,}}>{this.state.time.s}</Text>
          </View>
        </View>
      );
    }
}