import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
// import Home from '../app/index';
import { BackBtn } from "../components/backbtn";
import { Card } from '../components/card';
import mock from '../Constants/mock';

export default function List(){
    return(
        <SafeAreaView style={s.wrap}>
            <BackBtn/>
            <br/>
            <Text>Lista</Text>
            <br/>
            <ScrollView>
                <Text>Lista de Cards</Text>
                <FlatList 
                    data={mock}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Card img={item.imagem} text1={item.nome} text2={item.idade} text3={item.data}/>}
                />   
            </ScrollView>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    wrap:{
        flex: 1
    }
})