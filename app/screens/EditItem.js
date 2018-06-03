import React from 'react';
import ItemInfo from "../components/ItemInfo";


export default class EditItem extends React.Component {
    render() {
        const {params} = this.props.navigation.state;
        return (

           <ItemInfo item={params.item}/>

        );
    }
}
