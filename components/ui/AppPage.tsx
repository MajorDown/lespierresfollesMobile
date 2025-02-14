import { PropsWithChildren } from "react";
import { StyleSheet, ImageBackground, ScrollView, View, Text } from "react-native";
import Header from "./Header";
import { appColors } from "@/constants/Colors";

type AppPageProps = PropsWithChildren<{
    title?: string;
    scrollable?: boolean;
}>
/*
 * @description Wrapper de page pour les composants de l'application
 * @param {PropsWithChildren} props
 * @returns {JSX.Element}
 */
const AppPage = (props: AppPageProps): JSX.Element => {

    return (
        <ImageBackground
            source={require('@/assets/images/background.jpg')}
            style={styles.container}
            resizeMode="cover"
        >
            <Header />
            {props.title && (
                <Text style={styles.title}>{props.title}</Text>
            )}
            {props.scrollable ? (
                <ScrollView style={styles.content}>
                    {props.children}
                </ScrollView>
            ) : (
                <View style={{ width: '100%', flex: 1 }}>
                    {props.children}
                </View>
            )}
        </ImageBackground>
    );
};

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
    title: {
        fontSize: 24,
        color: appColors.text,
        textAlign: 'center'
    },
    content: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default AppPage;
