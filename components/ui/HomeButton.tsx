import {Pressable, StyleSheet, Image, Text} from 'react-native';
import { appColors } from '@/constants/Colors';
import { router } from 'expo-router';

/*
 * @description Bouton de retour à l'accueil
 * @returns {JSX.Element}
 */
const HomeButton = (): JSX.Element => {
    const handleNavigate = () => {
        router.push("/main");
    }
    return (
        <Pressable 
            style={styles.button} 
            onPress={() => handleNavigate()}
            accessibilityLabel="Home"
        >
            <Image style={styles.image} source={require('@/assets/images/home.png')} />
            <Text style={styles.text}>Home</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        color: appColors.text,
        fontSize: 10,
    }
})

export default HomeButton;