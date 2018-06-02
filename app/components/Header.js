import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.logo}>
                    My Shopping List
                </Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
       height: 80,
        marginTop: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc'
    },
    logo: {
        fontSize: 20,
        marginLeft: 10,
        color: '#ccc'
    }

});
