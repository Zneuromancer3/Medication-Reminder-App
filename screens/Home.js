import React, { useState } from "react";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  LeftIcon,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  Avatar,
  WelcomeImage,
  SubTitle,
  StyledAddButton,
} from "../components/styles";

import CircularProgress from "react-native-circular-progress-indicator";

import { Colors } from "../components/styles";

import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import { View } from "react-native";

const Home = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Home</PageTitle>
        <CircularProgress
          value={(3 / 4) * 100}
          radius={115}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={20}
          inActiveStrokeWidth={20}
          progressValueColor={"#fff"}
          strokeColorConfig={[
            { color: "red", value: 0 },
            { color: "skyblue", value: 50 },
            { color: "yellowgreen", value: 100 },
          ]}
        />
        <StyledFormArea>
          <StyledButton onPress={() => {}}>
            <ButtonText>Drugs</ButtonText>
          </StyledButton>
          <Line />
          <StyledButton onPress={() => {}}>
            <ButtonText>Prescription</ButtonText>
          </StyledButton>
          <Line />
          <StyledButton>
            <ButtonText>Interactions</ButtonText>
          </StyledButton>
          <Line />
          <StyledAddButton>
            <Fontisto name="plus-a" size={24} color={Colors.primary} />
          </StyledAddButton>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
