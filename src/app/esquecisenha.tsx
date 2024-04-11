import {  View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "../css/style";
import { Link } from 'expo-router';

export default function cadastro() {
  return (

    <View style={styles.imagemBody}>

      {/* imagem logo senai*/}
    
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')}/>
    
      <View style={styles.form}>

        {/* texto login */}
        <Text style={styles.text}>NOVA SENHA</Text>

        {/* input do login */}
        <TextInput placeholder="Insira a nova senha " style={styles.input}/>

        {/* texto da senha */}
        <Text style={styles.text}>CONFIRMAR SENHA:</Text>

        {/* input da senha */}
        <TextInput placeholder="confirme a senha " style={styles.input}/>

        
      </View>  

      {/* div para alinhar os botões */}

      <View style={styles.formbtn}>
        <Link href={'login'} style={styles.btn}>confirmar nova senha</Link>
      </View>
    </View>
  );
}