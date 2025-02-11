import { PropsWithChildren } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

/*
 * @description Wrapper de page pour les composants de l'application
 * @param {PropsWithChildren} props
 * @returns {JSX.Element}
 */
const AppPage = (props: PropsWithChildren): JSX.Element => {
    return (<ImageBackground
        source={require('@/assets/images/background.jpg')}
        style={styles.container}
        resizeMode="cover"
    >
        {props.children}
    </ImageBackground>);
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        padding: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',        
    }
});

export default AppPage; 
