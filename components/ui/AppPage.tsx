import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

/*
 * @description Wrapper de page pour les composants de l'application
 * @param {PropsWithChildren} props
 * @returns {JSX.Element}
 */
const AppPage = (props: PropsWithChildren): JSX.Element => {
    return (<SafeAreaView
        style={styles.container}
    >
        {props.children}
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default AppPage; 
