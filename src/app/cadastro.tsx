import {  View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "../css/style";
import { Link } from 'expo-router';

export default function cadastro() {
  return (

    <View style={styles.imagemBody}>

      {/* imagem logo senai*/}
    
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')}/>
    
      <View style={styles.form}>

        {/* texto nome */}
        <Text style={styles.text}>NOME:</Text>

        {/* input do nome*/}
        <TextInput placeholder="Insira o seu nome" style={styles.input}/>

        {/* texto login */}
        <Text style={styles.text}>CPF:</Text>

        {/* input do login */}
        <TextInput placeholder="Insira seu CPF para realizar seu cadastro " style={styles.input}/>

        {/* texto da senha */}
        <Text style={styles.text}>SENHA:</Text>

        {/* input da senha */}
        <TextInput placeholder="Insira uma senha" style={styles.input}/>


      </View>  

      {/* div para alinhar os botões */}

      <View style={styles.formbtn}>
        <Link href={'login'} style={styles.btn}>cadastrar</Link>
      </View>
    </View>
  );
}