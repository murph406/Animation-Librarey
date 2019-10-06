import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { SECONDARY } from '../consts/colors'

class Header extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>{this.props.text}</Text>
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 110,
        justifyContent: 'center',
        backgroundColor: SECONDARY,
        padding: 16,
        paddingTop: 48
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});