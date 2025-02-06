import {Pressable, StyleSheet, Image} from 'react-native';
import { router } from 'expo-router';

const ParamButton = () => {
    const handleNavigate = () => {
        router.push("/(tabs)")
    }
    return (
        <Pressable onPress={() => handleNavigate()}>
            <Image source={require('../assets/images/param.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({})

export default ParamButton;