import {Pressable, StyleSheet, Image} from 'react-native';
import { router } from 'expo-router';

/*
 * @description composant qui permet de naviguer vers la page des paramètres
 * @return {JSX.Element} le composant ParamButton
*/
const ParamButton = (): JSX.Element => {
    const handleNavigate = () => {
        router.push("/settings");
    }
    return (
        <Pressable 
            style={styles.button} 
            onPress={() => handleNavigate()}
            accessibilityLabel="Paramètres"
        >
            <Image style={styles.image} source={require('@/assets/images/settings.png')} />
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

export default ParamButton;