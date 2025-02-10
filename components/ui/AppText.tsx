import { Text, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";

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
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default AppText;