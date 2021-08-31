import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    Touchable,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from "react-native";
import * as Animatable from 'react-native-animatable';


function Startscreen({ navigation }) {
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Animatable.Image
                    style={styles.facebookLogo}
                    source={require('../asset/quiz3.png')}
                    resizeMode={'stretch'}
                />
            </View>


            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig">
                <Text style={styles.title}>QUIZ APP</Text>
                <Text style={styles.text}>Start Quiz Now</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Get Started </Text>

                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    );
}

const { height } = Dimensions.get("screen")
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookLogo: {
        width: height_logo,
        height: height_logo
    },
    footer: {
        flex: 1,
        backgroundColor: '#6c8eed',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40
    },
    text: {
        color: 'white',
        paddingTop: 10
    },
    button: {
        height: 40,
        width: 130,
        backgroundColor: "white",
        borderRadius: 50,
        marginLeft: 170,
        marginTop: 70
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    }
});

export default Startscreen;