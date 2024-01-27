import React, {useState} from "react";

import{
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
    SubTitle
} from'../components/styles';
import { Colors } from "../components/styles";

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import { View } from "react-native";

const Welcome = () => {

    return(
        <StyledContainer>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('../assets/splash.png')} />
            <WelcomeContainer>
                <PageTitle welcome={true}>Welcome!</PageTitle>
                <SubTitle welcome={true}>Remember to</SubTitle>
                <SubTitle welcome={true}>take your medicines!</SubTitle>
                <StyledFormArea>
                <Avatar resizeMode="cover" source={require('../assets/icon.png')}/>
                <StyledButton onPress={() => {}}>
                            <ButtonText>
                                Begin 
                            </ButtonText>
                        </StyledButton>
                    <Line />
                        <StyledButton onPress={() => {}}>
                            <ButtonText>
                                Logout
                            </ButtonText>
                        </StyledButton>   
                    </StyledFormArea>
            </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Welcome;