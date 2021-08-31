import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    Dimensions
} from "react-native";
const image = { uri: "https://images.unsplash.com/photo-1566031994720-cd39b144bc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTc2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" };

function Home({navigation}) {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>


                <View style={styles.header}>
                    <Image
                        style={styles.quizlogo}
                        source={require('../asset/quiz3.png')}
                        resizeMode={'stretch'}
                    />
                </View
                >
                <View style={styles.footer}>

                    <View style={styles.q1}>
                        <View style={{}}>
                            <Text style={styles.q1text}>HTML</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('Quiz')}>
                                <Text style={{ color: 'red',width:80, borderRadius:100, fontWeight:'bold' }}>Get Started</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.q1}>
                        <Text style={styles.q1text}>CSS</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: 'red' ,width:80, borderRadius:100, fontWeight:'bold' }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.q1}>
                        <Text style={styles.q1text}>JAVASCRIPT</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: 'red' ,width:80, borderRadius:100, fontWeight:'bold' }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const { height } = Dimensions.get("screen")
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    image: {
        flex: 1,
    },
    header: {
        flex: 2.0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 2,
        width: '100%'
    },
    q1: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginBottom: 40,
        borderRadius: 50,
        height: 60,
        display: 'flex',
        justifyContent: 'space-around',

    },
    q1text: {
        paddingLeft: 30,
        paddingTop: 25,
        fontSize: 20,
        fontWeight:'bold',
       
        marginRight:100
    },
    button: {
        justifyContent: 'flex-end',
        marginLeft: 200,
        paddingBottom: 30,
    },
    quizlogo: {
        width: height_logo,
        height: height_logo
    },
});

export default Home;

