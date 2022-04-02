import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "title",
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <Card style={styles.Card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Title style={styles.title}>{name}</Title>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "while",
  },
  cover: {
    padding: 20,
    backgroundColor: "while",
  },
  title: {
    padding: 16,
  },
});

export default RestaurantInfo;
