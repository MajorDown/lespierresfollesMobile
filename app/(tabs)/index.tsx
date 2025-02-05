import { Text, StyleSheet } from 'react-native';
import AppPage from '@/components/ui/AppPage';


export default function HomeScreen() {
  return (<AppPage>
    <Text style={styles.text}>page home</Text>
  </AppPage>);
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
});
