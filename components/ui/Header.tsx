import {Text, Image, View, StyleSheet} from 'react-native';
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
        <View style={Styles.headerTitle}>
            <Text 
                style={Styles.title}
            >
                Les Pierres Folles
            </Text>
            <Image
                source={require('@/assets/images/monument.png')}
                style={{width: 15, height: 30}}
            />
        </View>
        {actualPath !== '/settings' ? <ParamButton /> : <HomeButton />}
    </View>)
}

const Styles = StyleSheet.create({
    header: {
        marginTop: 30,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',

    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10
    },
    title: {
        fontFamily: 'Mynerve',
        fontSize: 30,
        letterSpacing: -0.5,
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 2,
        textShadowOffset: {width: 1, height: 1}
    }
})

export default Header;