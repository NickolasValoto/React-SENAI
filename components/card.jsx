import { Image, Text, View } from "react-native"


export const Card = (props) =>{
    return(
        <View>
            <Image source={props.img}/>
            <Text>{props.text1}</Text>
            <Text>{props.text2}</Text>
            <Text>{props.text3}</Text>
        </View>
    )
}

// CRIE CSS