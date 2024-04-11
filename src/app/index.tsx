import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from "../css/style";
import { Link, router } from 'expo-router';
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <LottieView 

        source={require("../../assets/nave.json")}

            style={{width: "100%", height: "100%"}}
            autoPlay
            loop = {false}
            autoSize
            onAnimationFinish={()=> router.navigate('login')}


        />
      <StatusBar style="auto" />
    </View>
  );
}


