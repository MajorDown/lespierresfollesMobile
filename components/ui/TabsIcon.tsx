import { View, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";
import {usePathname} from 'expo-router';
import { appColors } from "@/constants/Colors";

type Props = {
    title: string;
    icon: ImageSourcePropType;
}

/**
 * @description Composant gérant la couleur des icones d'onglet
 * @param {string} props.title
 * @returns JSX.Element
 */
const TabsIcon = (props: Props):JSX.Element => {
    const actualPath = usePathname();

    return (<View style={Styles.container}>
        {actualPath === `/${props.title}` && <View style={Styles.blower} />}
        <Image source={props.icon} style={Styles.image} />
    </View>)
}

const Styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20
    },
    text: {
        fontSize: 12,
        color: appColors.text
    },
    blower: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: appColors.background,
        zIndex: 99,
    }
})

export default TabsIcon;