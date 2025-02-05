import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

const AppPage = (props: PropsWithChildren) => {
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
