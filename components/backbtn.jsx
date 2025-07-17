import { router } from "expo-router"
import { Image, TouchableOpacity } from "react-native"


export const BackBtn = () =>{
    return(
        <TouchableOpacity onPress={() => router.push('/')}>
            <Image source={require('../assets/images/icons8-voltar.gif')}/>
        </TouchableOpacity>
    )
}