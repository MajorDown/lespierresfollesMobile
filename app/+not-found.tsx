import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const NotFoundScreen = () =>{
  return (
    <View>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text>Sorry, page not found!</Text>
      <Link href="/">Go to home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default NotFoundScreen;
