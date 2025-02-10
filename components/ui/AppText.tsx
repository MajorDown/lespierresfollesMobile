import { Text, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";
import { appColors } from "@/constants/Colors";

type Props = PropsWithChildren<{
    type?: 'title' | 'subtitle' | 'text' | 'link';
}>;

/*
 * @description Composant de texte pour l'application
 * @param {string} props.type
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
const AppText = ({type = 'text', ...props}: Props) => {
    return (<Text
        style={styles[type]}
    >
        {props.children}
    </Text>);
}

const styles = StyleSheet.create({
    text: {
        color: appColors.text,
    },
    title: {
        color: appColors.text,
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        color: appColors.text,
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        color: appColors.button,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default AppText;