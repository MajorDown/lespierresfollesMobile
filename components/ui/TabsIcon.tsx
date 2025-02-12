import { View, Image, Text, StyleSheet } from "react-native";
import {usePathname} from 'expo-router';
import { useState, useEffect } from "react";
import { appColors } from "@/constants/Colors";

type Props = {
    title: string;
}

/**
 * @description Composant gérant la couleur des icones d'onglet
 * @param {string} props.title
 * @returns JSX.Element
 */
const TabsIcon = (props: Props):JSX.Element => {
    const actualPath = usePathname();
    const [isActualPath, setIsActualPath] = useState(false);
    const [imagePath, setImagePath] = useState<string>(
        `@/assets/images/${props.title}${isActualPath ? '-selected' : ''}.png`
    );

    useEffect(() => {
        if (actualPath === `/${props.title}`) setIsActualPath(true);
        else setIsActualPath(false);
        setImagePath(`@/assets/images/${props.title}${isActualPath ? '-selected' : ''}.png`);
    }, [actualPath])

    return (<View style={Styles.container}>
        <Image source={require(imagePath)} style={Styles.image} />
        <Text style={isActualPath ? Styles.selectedText : Styles.text}>{props.title}</Text>
    </View>)
}

const Styles = StyleSheet.create({
    container: {
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
    selectedText: {
        fontSize: 12,
        color: appColors.button
    }
})

export default TabsIcon;