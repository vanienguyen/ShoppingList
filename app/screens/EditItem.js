import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {firebaseRef} from "../firebaseServer/FirebaseServer";


export default class EditItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            quantity: '',
            imageUrl: ''
        };
    }

    editSave(itemKey,itemInfo) {

        const item={
            "name":this.state.name?this.state.name:itemInfo.name,
            "description":this.state.description?this.state.description:itemInfo.description,
            "quantity":this.state.quantity?this.state.quantity:itemInfo.quantity,
            "imageUrl":this.state.imageUrl?this.state.imageUrl:itemInfo.imageUrl
        };
        firebaseRef.database().ref('items/' + itemKey).set(item).then(()=>{
            this.props.navigation.navigate('ItemList')
        })

    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Edit Item
                    </Text>
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>New Item Name</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item name here!"
                        value={params.item.name}
                        onChangeText={(name) => this.setState({name: name})}
                    />
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>New Item Description</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item description here!"
                        value={params.item.description}
                        onChangeText={(description) => this.setState({description: description})}
                    />
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>New Item Quanitty</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item quantity here!"
                        value={params.item.quantity}
                        onChangeText={(quantity) => this.setState({quantity: quantity})}
                    />
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>New Item Image URL</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item image url here!"
                        value={params.item.imageUrl}
                        onChangeText={(imageUrl) => this.setState({imageUrl: imageUrl})}
                    />
                </View>
                <View style={styles.saveButtonContainer}>
                    <Button
                        onPress={() => this.editSave(params.item.key,params.item)}
                        title='Save'
                    />

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        marginTop: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc'
    },
    headerText: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        color: '#5f9ea0'
    },
    textInputContainer: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        height: 40,
        borderRadius: 15,
        backgroundColor: '#ccc'
    },

    textLabelContainer: {
        marginTop: 10,
        alignItems: 'center',
    },

    textLabel: {},
    saveButtonContainer: {}

});
