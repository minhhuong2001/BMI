import React, { useState } from 'react';
import { Text,Button, TextInput, View, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

    const [heigh, setheigh] = useState(0);
    const [weigh, setweigh] = useState(0);
    const [bmi, setbmi] = useState(" ");
    const [bmistate, setbmistate] = useState(" ");
    const [message, setMessage] = useState('');

    function cal_bmi(wei, hei) {
        let h2 = (hei) * (hei);
        let bmi = (wei) / h2 ;
        let f_bmi = Math.floor(bmi);
        let diff = bmi - f_bmi;
        diff = diff * 10;
        diff = Math.round(diff);
        if (diff == 10) {
            f_bmi += 1;
            diff = 0;
        }
      if (bmi < 18.5) {
        setbmistate("Underweight");
      } else if (bmi < 25) {
        setbmistate("Healthy weight");
      } else if(bmi < 30) {
        setbmistate("Overweight");
      } else {
        setbmistate("Obesity");
      }
        bmi = f_bmi + "," + diff;
        return bmi;
    }

    function cal(wei, hei) {
        var weCh = wei;
        var heCh = hei;
        if (isNaN(weCh) || weCh <= 0) {

            alert("Enter Valid Value For Weight");
            return "Not Valid Input"
        }
        else if (isNaN(heCh) || heCh <= 0) {

            alert("Enter Valid Value For Height");
            return "Not Valid Input"
        }
        else {
            weCh = wei ;
            heCh = hei /100;
            return cal_bmi(weCh, heCh);
        }
    }
    


    return (
        <View style={styles.container}>
            <Text style={styles.title}>BMI</Text>

            <View style={{width: "100%"}}>

                <View style={[styles.inpV, { flexDirection: "row" }]}>
                    <Text style={styles.text}>Age</Text>
                    <TextInput 
                    placeholderTextColor ={'#808080'}
                    ref={input => { this.ageInput = input }}
                        style={[styles.inpo, { flex: 1 }]}
                        placeholder= 'year'
                        keyboardType="numeric"
                        >
                    </TextInput>

                </View>
                <View style={[styles.inpV, { flexDirection: "row" }]}>
                <Text style={styles.text}>Weight</Text>
                    <TextInput 
                    placeholderTextColor ={'#808080'}
                      ref={input => { this.weightInput = input }}
                        keyboardType="numeric"
                        style={[styles.inpo, { flex: 1 }]}
                        placeholder='kg'
                        onChangeText={(text) => {
                            setweigh(parseFloat(text));
                        }}
                    ></TextInput>
                </View>
                <View style={[styles.inpV, { flexDirection: "row" }]}>
                <Text style={styles.text}>Height</Text>
                    <TextInput
                    placeholderTextColor ={'#808080'}
                    ref={input => { this.heightInput = input}}
                        style={[styles.inpo, { flex: 1 }]}
                        placeholder='cm'
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            setheigh(parseFloat(text));
                        }}>
                    </TextInput>

                </View>

            </View>
            <View style={styles.btn}>
              
                <TouchableOpacity
                    style={styles.submi}
                    onPress={() => {
                        setbmi("BMI = " + cal(weigh, heigh));
                    }}
                    title="Calculate"
                ><Text style={styles.text3}>Calculate</Text></TouchableOpacity>
                
                <TouchableOpacity
                onPress={() => {
                       this.ageInput.clear();
                       this.weightInput.clear();
                       this.heightInput.clear();
                       setbmi("");
                       setbmistate("");
                    }}
                    style={styles.clear}
                    title="Clear"
                ><Text style={styles.text3}>Clear</Text></TouchableOpacity>
                </View>

            <Text style={styles.text2}>{bmi}</Text>
            <Text style={styles.text2}>{bmistate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FAEBD7',
        padding: 8,
    },
    
    submi: {
        backgroundColor: "#008080",
        borderRadius: 10,
        padding: 2,
        borderWidth: 1,
        borderColor: "white",
        width: "100%",
        textAlignment: "center",
        textAlign: "center",
        gravity: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    inpV: {
        justifyContent: 'space-between', 
        marginHorizontal: 5,
        marginBottom: 15
    },
    inpo: {
      borderBottomWidth: 1,
      borderColor: "#808080",
      height: 25,
      fontSize: 18,
    },
    title: {
        fontWeight: "bold",
        color: "#808000",
        fontSize: 65,
        top: 0,
        marginVertical: 20,
        paddingBottom: 70,
        textAlign: "center",
    },
    text: {
        flex: 1,
        fontSize:20,
        lineHeight: 35,
        color:"#806969",
        
    },
    text2: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 15,
        lineHeight: 35,
    },
    text3: {
        marginLeft: 10,
        fontSize: 18,
        lineHeight: 35,
        color: "white",
    },
    btn:{
      flexDirection: 'collumn',
    },
    clear:{
      borderRadius: 10,
        backgroundColor: "#A9A9A9",
        padding: 2,
        borderWidth: 1,
        borderColor: "white",
        width: "100%",
        textAlignment: "center",
        textAlign: "center",
        gravity: "center",
        alignContent: "center",
        justifyContent: "center"
    }
});