import {Text, View, StyleSheet} from 'react-native';
import ParamButton from './ParamButton';
import { usePathname } from 'expo-router';
import HomeButton from './HomeButton';

/*
* @description Header de l'application
* @return {JSX.Element}
*/
const Header = (): JSX.Element => {
    const actualPath = usePathname();

    return (<View style={Styles.header}>
        <Text 
            style={Styles.title}
        >
            Les Pierres Folles
        </Text>
        {actualPath !== '/settings' ? <ParamButton /> : <HomeButton />}
    </View>
    )
}

const Styles = StyleSheet.create({
    header: {
        marginTop: 30,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    title: {
        fontFamily: 'Mynerve',
        fontSize: 30,
        letterSpacing: -0.5,
        color: 'green',
        textShadowColor: 'black',
        textShadowRadius: 2,
        textShadowOffset: {width: 1, height: 1}
    }
})

export default Header;