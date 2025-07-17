import { Image } from "expo-image";
import { router } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function Home() {

    // function goToList(){
    //     router.push('/list')
    // }

    // const goToList = () =>{
    //     router.push('/list')
    // }

    // const goToList = () => router.push('/list')

    return (
        <SafeAreaView style={s.wrap}>
            <Text style={s.text2}>Meu header fixo</Text>
            <ScrollView>
                <Text style={s.text}>Minha primeira Página</Text>
                <View style={s.wrapView}>
                    {/* IAMGEM DO REACT NATIVE */}
                    {/* <Image style={s.img} source={require('../assets/images/react-logo.png')}/> */}


                {/* IAMGEM DO EXPO-IMAGE */}
                    <Image style={s.img} source={require('../assets/images/react-logo.png')}/>

                    <Text style={s.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    {/* EMOGI WINDOWS = . */}
                    <Text style={s.text}>👀</Text>
                    {/* BOTÃO */}
                    <TouchableOpacity style={s.btn} onPress={() => router.push('/list')}>
                        <Text style={s.btnText}>Ir para lista</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.btn} onPress={() => router.push('/consume')}>
                        <Text style={s.btnText}>Ir para API</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    text: {
        color: '#888888',
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor: "#000",
    },
    text2:{
        color: '#ffffff',
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16.00,
        elevation: 24, 
        textAlign: 'center',
        fontSize: 25
    },
    wrap:{
        flex: 1
    },
    wrapView:{
        borderWidth: 2,
        borderColor: 'blue',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'center',
        //height: '100%',
        gap:20,
        paddingBottom:40
    },
    img:{
        width: 100,
        height: 100
        
    },
    btn:{
        paddingVertical: 15,
        paddingHorizontal: 35,
        backgroundColor: '#1a5381',
        borderRadius: 999,
                shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16.00,
    },
    btnText:{
        color: '#e0e0e0',
    }
})

// const Home = () => {
//     return(
//         <Text>Hello World</Text>
//     )
// }

// export default Home