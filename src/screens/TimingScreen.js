import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { PRIMARY, RED } from '../consts/colors';
import Header from '../components/header';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TimingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animatedOpacityValue: new Animated.Value(1),
            animatedScaleValue: new Animated.Value(1),
            animateTranslationValue: new Animated.Value(0),
        }
    }

    goAnimation = () => {
        Animated.parallel([
            Animated.timing(this.state.animateTranslationValue, {
                toValue: 2,
                duration: 1000
            }).start(() => {
                this.state.animateTranslationValue.setValue(0)
            }),
            Animated.timing(this.state.animatedOpacityValue, {
                toValue: 0,
                duration: 1000
            }).start(() => {
                Animated.timing(this.state.animatedOpacityValue, {
                    toValue: 1,
                    duration: 1000
                }).start()
            }),
            Animated.timing(this.state.animatedScaleValue, {
                toValue: 2,
                duration: 1000
            }).start()
        ])
    }

    render() {
        const animatedStyles = {
            opacity: this.state.animatedOpacityValue,
            transform: [
                {
                    translateY: this.state.animateTranslationValue,
                }
            ],
            transform: [
                {
                    scaleX: this.state.animatedScaleValue
                }
            ]
        }
       
        return (
            <>
                <Header text={"Timing Screen"} />
                <View style={styles.container}>
                    <Animated.View style={animatedStyles}>
                        <TouchableOpacity
                            style={[styles.box]}
                            onPress={this.goAnimation}>
                        </TouchableOpacity>
                    </Animated.View>

                </View>
            </>
        );
    }
}

export default TimingScreen;

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
        backgroundColor: RED
    }
});