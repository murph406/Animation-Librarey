import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import Header from '../components/header';
import { PRIMARY } from '../consts/colors';


const screens = {
    items: [
        { name: "Interpolation", navigation: "interpolate" },
        { name: "Timing", navigation: "time" },
        { name: "Scroll Event Background", navigation: "scrollEvent" },
        { name: "Decay PanResponder ", navigation: "decay" },

    ]
};

class HomeScreen extends Component {

    goScreen = (screen) => {
        this.props.navigation.navigate(screen)
    }

    render() {
        return (
            <>
                <Header text={"Home Screen"} />
                <ScrollView style={styles.buttonContainer}>
                    {screens.items.map((item, key) => (
                        <TouchableOpacity
                            onPress={() => this.goScreen(item.navigation)}
                            style={[styles.listContainer, { borderRadius: 8 }]}>
                            <Text style={styles.name}>Go {item.name} Screen</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: PRIMARY
    },
    listContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 8,
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
