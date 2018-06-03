import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {firebaseRef} from "../firebaseServer/FirebaseServer";


export default class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowItem: null,
            activeItem: null,
            itemList: null
        });
    }

    componentDidMount() {
        firebaseRef.database().ref("items").on("value", snap => {
            let itemList = [];
            snap.forEach(item => {
                itemList.push({
                    name:item.val().name,
                    description:item.val().description,
                    quantity:item.val().quantity,
                    imageUrl:item.val().imageUrl,
                    key:item.key
                })
            });
            this.setState({
                itemList:itemList
            })
        })
    }
    onPressTrash(item) {
        firebaseRef.database().ref("items/" + item.key).remove()
    }
    navigateToEditItemPage(item) {
        this.props.navigation.navigate('EditItem', {item:item} )
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.logo}>
                        My Shopping List
                    </Text>
                    <Icon
                        name='ios-add-circle-outline'
                        type='ionicon'
                        style={styles.logo}
                        onPress={
                            () => this.props.navigation.navigate('AddItem')
                        }
                    />
                </View>
                <FlatList
                    data={this.state.itemList}
                    renderItem={({item, index}) => {
                        return (
                            <View style={styles.item_container}>
                                <Image
                                    source={{uri: item.imageUrl}}
                                    style={styles.image_style}
                                >
                                </Image>
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.description}</Text>
                                    <Text>{item.quantity}</Text>
                                </View>
                                <View style={{marginLeft: 90}}>
                                    <Icon
                                        name='edit'
                                        type='entypo'
                                        color='#5f9ea0'
                                        onPress={()=>this.navigateToEditItemPage(item)}
                                    />
                                    <Icon
                                        name='md-trash'
                                        type='ionicon'
                                        color='#5f9ea0'
                                        onPress={()=>this.onPressTrash(item)}
                                    />
                                </View>
                            </View>
                        )
                    }}>
                </FlatList>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item_container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        borderRadius: 15,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    image_style: {
        width: 80,
        height: 80,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 8,
        marginRight: 10
    },
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
    logo: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        color: '#5f9ea0'
    }

});

