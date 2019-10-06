import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';

import { PRIMARY, RED } from '../consts/colors';
import Header from '../components/header';

class DecayPanResponderScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animationValue: new Animated.ValueXY(0),
        }
    }

    componentWillMount() {
        this._x = 0;
        this._y = 0;

        this.state.animationValue.addListener((value) => {
            this._x = value.x;
            this._y = value.y;
        })

        this._panResponder = PanResponder.create({
            //If view is touched than start panResponder 
            onStartShouldSetPanResponder: () => true,
            //if view is continued to move than continue pan Responder 
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                this.state.animationValue.setOffset({
                    x: this._x,
                    y: this._y
                })
                this.state.animationValue.setValue({
                    x: 0,
                    y: 0,
                })
            },
            //Catches values from panResponder 
            onPanResponderMove: Animated.event([
                //First parameter is the event and the second is the gesture its self
                null,
                {
                    dx: this.state.animationValue.x,
                    dy: this.state.animationValue.y
                }
            ]),
            onPanResponderRelease: (e, {vx, vy}) => {
                Animated.decay(this.state.animationValue, {
                velocity: {x: vx, y: vy},
                deceleration: 0.9 
                }).start()
            }
        })
    }
    goAnimation = () => {

    }

    render() {
        const animatedStyle = {
            transform: this.state.animationValue.getTranslateTransform()
        }
        return (
            <>
                <Header text={"Decay PanResponder Screen"} />
                <Animated.View
                    style={[styles.container]}>
                    <Animated.View style={[styles.box, animatedStyle]} {...this._panResponder.panHandlers}/>
                </Animated.View>
            </>
        );
    }
}

export default DecayPanResponderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        height: 90,
        width: 90,
        backgroundColor: RED
    },
});