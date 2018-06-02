import React from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        items = [];
        for(let i=0; i<10; i++) {
            items.push("Item " + i);
        }

        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2})
        this.state = {
            dataSource: ds.cloneWithRows(items),
        }
    }

    _renderRow(items) {
        return(
            <View style={styles.item_container}>
                <Text>{items}</Text>
            </View>
        )
    }

    render() {
        return (
            <View>
                <ListView
                    renderRow = {this._renderRow.bind(this)}
                    dataSource = {this.state.dataSource}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({

    item_container: {
        height: 100,
        backgroundColor: '#f0f8ff',
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    }


});

