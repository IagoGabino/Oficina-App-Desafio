import React from "react";
import { View, Text, Image, Icon } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={logoImg} />
        <Text style={styles.title}>Visualizador de Orçamentos</Text>
        <Text style={styles.description}>
          Monitore o volume de vendas de maneira eficiente.
        </Text>
      </View>

      <View style={styles.footer}>
        <RectButton
          style={styles.button}
          onPress={() => {
            navigation.navigate("Proposals");
          }}
        >
          <View style={styles.buttonIcon}>
            <Text>
              <Feather name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Home;
