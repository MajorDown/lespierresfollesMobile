import {Text, Image, View, StyleSheet} from 'react-native';
import ParamButton from './ParamButton';
import { usePathname } from 'expo-router';
import HomeButton from './HomeButton';
import AppText from './AppText';
import { appColors } from '@/constants/Colors';

/*
* @description Header de l'application
* @return {JSX.Element}
*/
const Header = (): JSX.Element => {
    const actualPath = usePathname();

    return (<View style={Styles.header}>
        <View style={Styles.headerTitle}>
            <AppText type='title'>Les Pierres Folles</AppText>
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
        backgroundColor: appColors.background

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