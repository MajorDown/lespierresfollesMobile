import {Text, Image, View, StyleSheet} from 'react-native';
import ParamButton from './ParamButton';
import { usePathname } from 'expo-router';
import HomeButton from './HomeButton';
import AppText from './AppText';

/*
* @description Header de l'application
* @return {JSX.Element}
*/
const Header = (): JSX.Element => {
    const actualPath = usePathname();
    console.log(actualPath);

    return (<View style={Styles.header}>
        <View style={Styles.headerTitle}>
            <Image
                source={require('@/assets/images/logo.png')}
                style={{width: 35, height: 35}}
            />
            <AppText type='title'>Les Pierres Folles</AppText>
        </View>
        {actualPath === '/settings' ? <HomeButton /> : <ParamButton />}
    </View>)
}

const Styles = StyleSheet.create({
    header: {
        width: '100%',
        marginTop: 30,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})

export default Header;