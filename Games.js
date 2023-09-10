
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { Tile } from '@rneui/themed';
import React, { useState, useEffect, useRef } from 'react';
import { DeviceMotion } from 'expo-sensors';
import * as Device from 'expo-device';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: 'center',
      justifyContent: 'top',
    },
    img: {
      height: 200,
      width: 360,
      borderRadius: 40
    } , 
    buttonContainer: {
      marginTop: 30,
    },
    playButton: {
      backgroundColor: '#f8755a',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 10,
    },
    playButtonText: {
      fontFamily: 'ProximaNova-Regular',
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });



export function Throw({navigation}) {


  const [recording, setRecording] = useState(false)
  let max = useRef(0)

  const [practicalSpeed, setPractical] = useState(0)

  const [over, setOver] = useState(false)


  const [subscription, setSubscription] = useState(null);

  const _fast = () => DeviceMotion.setUpdateInterval(200);

  const recordData = (acc) => {
    const curr = {x:0,y:0,z:0}
    const alpha = 0.8;

    try {
      const x = acc.acceleration.x 
      const y =  acc.acceleration.y 
      const z = acc.acceleration.z 

      const speed = Math.round(Math.sqrt(x*x + y*y + z*z) * 0.2)

      if (speed > max.current) {
        
        max.current = speed
        
      }
      
    } catch {}




    
  }

  const _subscribe = () => {
    setSubscription(DeviceMotion.addListener(recordData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
    DeviceMotion.removeAllListeners()
  };

  const startRecord = () => {

    if (over) return;

    if (!recording) {

      _subscribe();
      _fast();
      setRecording(true)
    } else {
      _unsubscribe()
      setRecording(false)
      setOver(true)
      console.log(max)

      try {
        
        const url = "https://achingmustybots.sushrutpola.repl.co/param?username=" + '"' + Device.deviceName+ '"' + "&game_name=w&highest_score=" + max.current
        console.log(url)
        fetch(url).then(() => {return null})
      } catch {
        console.log("Failed to send to api")
      }
    }

  }

  console.log()

  

    return (
    <View style={styles.container}>
    
    <View style={{paddingTop: 80}}></View>
    <Text style={{fontSize: 300, color: over ? "#FFA500": "#FFFFFF"}}>{max.current}</Text>
    {!over && <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => startRecord()}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>{recording?"Get your Score!":"Click Me, then Throw"}</Text>
        </TouchableOpacity>
    </View>}

    <View style={{paddingTop: 10}}></View>
    {(recording || over) && <Text style={{fontSize: 30}}>{(!over)?"THROW YOUR PHONE!!!!!": "Quite the Angry Chap"}</Text>}
  
    </View>)
}


