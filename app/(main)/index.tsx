import { ScrollView, Image, View, Text } from 'react-native';
import AppPage from '@/components/ui/AppPage';
import AppText from '@/components/ui/AppText';
import { appColors } from '@/constants/Colors';


const HomeScreen = () => {
  return (<AppPage title={'home'}>
    <Text>contenu</Text>
    <Image source={require('@/assets/regions/regions.png')} style={{width: 300, height: 341}}/>
  </AppPage>);
}

export default HomeScreen;
