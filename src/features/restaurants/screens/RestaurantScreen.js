import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfoCard";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

function RestaurantScreen() {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar></Searchbar>
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfo></RestaurantInfo>
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
}

export default RestaurantScreen;
