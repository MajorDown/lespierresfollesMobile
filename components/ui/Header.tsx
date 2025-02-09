import {Text, View, StyleSheet} from 'react-native';
import ParamButton from './ParamButton';
import { usePathname } from 'expo-router';

const Header = () => {
    const actualPath = usePathname();
    // si la page actuelle est settings, alors le parambutton ne doit pas s'afficher

    return (<View style={Styles.header}>
        <Text style={Styles.title}>Les Pierres Folles</Text>
        {actualPath !== '/settings' && <ParamButton />}
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
    }
})

export default Header;