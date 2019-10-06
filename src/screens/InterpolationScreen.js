import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import Header from '../components/header';
import { PRIMARY, RED, GRAY_DARK, SECONDARY, GRAY_MEDIUM } from '../consts/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

class InterpolationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animationColorValue: new Animated.Value(0),
            animationRotateValue: new Animated.Value(0)
        }
    }

    goAnimation = () => {
        Animated.parallel([
            Animated.timing(this.state.animationColorValue, {
                toValue: 3,
                duration: 3000,
            }).start(() => {
                Animated.timing(this.state.animationColorValue, {
                    toValue: 0,
                    duration: 3000,
                }).start()
            }),
            Animated.timing(this.state.animationRotateValue, {
                toValue: 360,
                duration: 6000
            }).start(() => this.state.animationRotateValue.setValue(0))
        ])
        
    }
    render() {
        const boxInterpolation = this.state.animationColorValue.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [RED, SECONDARY, 'blue', 'green']
        })
        const rotateInterpolation = this.state.animationRotateValue.interpolate({
            inputRange: [0, 360],
            outputRange: ["0deg", "360deg"]
        })
        return (
            <>
                <Header text={"Interpolation Screen"} />
                <View style={styles.container}>
                    <Animated.View style={{ transform: [{ rotate: rotateInterpolation }] }}>
                        <TouchableOpacity onPress={this.goAnimation}>
                            <Animated.View style={[styles.box, { backgroundColor: boxInterpolation }]}>
                                <Animated.Text>Change Color</Animated.Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </>
        );
    }
}

export default InterpolationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        height: 90,
        width: 90,
        // backgroundColor: RED
    }
});
