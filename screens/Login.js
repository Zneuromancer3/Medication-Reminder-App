import React, {useState} from "react";

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    LeftIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    SubTitle
} from'../components/styles';
import { Colors } from "../components/styles";

import { Formik } from "formik";

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import { View } from "react-native";

const Login = () => {
const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/icon.png')}/>
                <PageTitle>Medical Reminder</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    console.log(values)
                }}
                >
                    {({handleChange,handleBlur,handleSubmit,values})=> (<StyledFormArea>
                        <MyTextInput 
                        label="Email address"
                        icon="mail"
                        placeholder="yourname@email.com"
                        placeholderText = {Colors.text}
                        onChangeText= {handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                        />
                        <MyTextInput 
                        label="Password"
                        icon="lock"
                        placeholder="••••••••••"
                        placeholderText = {Colors.text}
                        onChangeText= {handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto name="google" size={25} color={Colors.primary} />
                            <ButtonText google={true}>
                                Sign in with Google
                            </ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an account already? </ExtraText>
                            <TextLink>
                                <TextLinkContent>Sign up.</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.text}/>
            </LeftIcon>
                <StyledInputLabel>{label}</StyledInputLabel>
                <StyledTextInput {...props}/>
            {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons name={hidePassword ? 'eye-off':'eye'} size={30} color={Colors.text}/>
            </RightIcon>
            )}
        </View>
    );
}

export default Login;