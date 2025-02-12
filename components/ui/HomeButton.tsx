import {Pressable, StyleSheet, Image} from 'react-native';
import { router } from 'expo-router';

/*
 * @description Bouton de retour à l'accueil
 * @returns {JSX.Element}
 */
const HomeButton = (): JSX.Element => {
    const handleNavigate = () => {
        router.push("/(tabs)");
    }
    return (
        <Pressable 
            style={styles.button} 
            onPress={() => handleNavigate()}
            accessibilityLabel="Home"
        >
            <Image style={styles.image} source={require('@/assets/images/home.png')} />
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
    }
})

export default HomeButton;