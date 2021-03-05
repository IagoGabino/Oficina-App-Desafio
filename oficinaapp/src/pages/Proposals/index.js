import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

import api from "../../services/api";

export default function Proposals() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [proposals, setProposals] = useState([]);
  const [description, setDescription] = useState("");

  async function loadProposals() {
    const response = await api.get("/proposals");

    setProposals(response.data);
  }

  useEffect(() => {
    loadProposals();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={16}
          color="#7159c1"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>
          Total de{" "}
          <Text style={styles.headerTextBold}>
            {proposals.length} orçamentos
          </Text>
        </Text>
        <Image source={logoImg}></Image>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.subtitle}>
        Selecione um orçamento para ver sua descrição.
      </Text>

      <FlatList
        style={styles.proposals}
        data={proposals}
        keyExtractor={(proposal) => String(proposal.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: proposal }) => (
          <View style={styles.proposal}>
            <View style={styles.proposalLine}>
              <Text style={styles.proposalProperty}>VENDEDOR</Text>

              <Text style={styles.proposalProperty}>VALOR</Text>
            </View>
            <View style={styles.proposalLine}>
              <Text style={styles.proposalValue}>{proposal.seller}</Text>

              <Text style={styles.proposalValue}>{proposal.value}</Text>
            </View>

            <Text style={styles.proposalProperty}>CLIENTE</Text>
            <Text style={styles.proposalValue}>{proposal.customer}</Text>

            <TouchableOpacity
              style={styles.descriptionButton}
              onPress={() => {
                setVisible(true);
                setDescription(proposal.description);
              }}
            >
              <Text style={styles.destriptionButtonText}>Ver descrição</Text>
              <Feather name="plus" size={16} color="#7159c1" />
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal
        transparent={true}
        visible={visible}
        onBackdropPress={() => setVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTextBold}>DESCRIÇÃO</Text>
          <Text style={styles.modalText}>{description}</Text>
          <Pressable
            style={[styles.button, styles.modalButtonClose]}
            onPress={() => setVisible(!visible)}
          >
            <Text style={styles.buttonTextStyle}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
