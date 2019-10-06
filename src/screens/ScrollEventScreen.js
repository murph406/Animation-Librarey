import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { PRIMARY, RED } from '../consts/colors';
import Header from '../components/header';

const tabs = {
    items: [
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta do em like that " },
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta lie" },
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta do em like that " },
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta do em like that " },
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta do em like that " },
        { name: "Why you gotta lie" },
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta do em like that " },
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta do em like that " },
        { name: "Sup Bruhh", },
        { name: "Time to get it ", },
        { name: "Why you gotta do em like that " },
    ]
};

class TimingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animationValue: new Animated.Value(0),
        }
    }

    goAnimation = () => {

    }

    render() {
        const backgroundInterpolate = this.state.animationValue.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: [RED,PRIMARY, PRIMARY]
        })
    
        return (
            <>
                <Header text={"Scroll Event Screen"} />
                <Animated.ScrollView
                    // Says that the on screen function is called every 16 milliseconds, Gets animation to 60 FPS
                    scrollEventThrottle={16}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: this.state.animationValue
                                }
                            }
                        }
                    ])}
                    style={[styles.container,{ backgroundColor: backgroundInterpolate}]}>
                    {tabs.items.map((item, key) => (
                        <View
                            style={[styles.listContainer, { borderRadius: 8 }]}>
                            <Text style={styles.name}> {item.name}</Text>
                        </View>
                    ))}
                </Animated.ScrollView>
            </>
        );
    }
}

export default TimingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        paddingHorizontal: 16
    },
    box: {
        height: 90,
        width: 90,
        backgroundColor: RED
    },
    listContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 16,
        borderBottomWidth: 1,
        borderColor: "#f4f4f6",
        height: 54
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold'
    },
});