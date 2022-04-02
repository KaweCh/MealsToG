import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
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
      <RestaurantCard elevation={5}>
        <RestaurantCardCover
          key={name}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
}

export default RestaurantInfo;
