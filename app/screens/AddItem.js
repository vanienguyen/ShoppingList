import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {firebaseRef} from "../firebaseServer/FirebaseServer";

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            quantity: '',
            imageUrl: ''
        };
    }
     saveItem(){
            const item={
                "name":this.state.name,
                "description":this.state.description,
                "quantity":this.state.quantity,
                "imageUrl":this.state.imageUrl
            };
            firebaseRef.database().ref('items').push(item).then(()=>{
                this.props.navigation.navigate('ItemList')
            })
     }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Add New Item
                    </Text>
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>Item Name</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item name here!"
                        onChangeText={(name) => this.setState({name: name})}
                    />
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>Item Description</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item description here!"
                        onChangeText={(description) => this.setState({description:description})}
                    />
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>Item Quanitty</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item quantity here!"
                        onChangeText={(quantity) => this.setState({quantity:quantity})}
                    />
                </View>
                <View style={styles.textLabelContainer}>
                    <Text style={styles.textLabel}>Item Image URL</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type item image url here!"
                        onChangeText={(imageUrl) => this.setState({imageUrl:imageUrl})}
                    />
                </View>
                <View style={styles.saveButtonContainer}>
                    <Button
                        onPress={()=>this.saveItem()}
                        title = 'Save'
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

    textLabel: {

    },
    saveButtonContainer: {

    }

});
