import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image,Linking, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const handleLinkPress = (url) => {
  Linking.openURL(url);
  };
export default function Subject1(props) {

  return (

    <View >

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext  }>   Question Papers</Text>
      </LinearGradient>
      <ScrollView style={{ marginBottom: 120 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>Chemistry</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>Math I</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>Physics</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>Math II</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>Basic Electrical Engineering</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>Professional English</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>PPS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1LZmna9OY0pL8se-WrVrigp0oI2_3U9VX?usp=share_link')}>
            <Text style={styles.btntext}>Artificial Intelligence</Text>
          </TouchableOpacity>
          </LinearGradient>
        


      </ScrollView>
       
    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: responsiveHeight(6),
    color: 'white',
    height:responsiveHeight(7),
   
    

  },
  headertext: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(14),
    color: 'white',
    fontWeight: 'bold',
  },
 
  btntext: {
  
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex:1,
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3),
    borderBottomWidth:2,
    borderEndColor:'black',
  }


})

