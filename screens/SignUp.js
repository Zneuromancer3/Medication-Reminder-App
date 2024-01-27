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

const SignUp = () => {
const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <InnerContainer>
                <PageTitle>Medical Reminder</PageTitle>
                <SubTitle>Account Signup</SubTitle>
                <Formik 
                initialValues={{fullname:'',email: '', password: '',confirmPassword:''}}
                onSubmit={(values) => {
                    console.log(values)
                }}
                >
                    {({handleChange,handleBlur,handleSubmit,values})=> (<StyledFormArea>
                        <MyTextInput 
                        label="Full Name"
                        icon="person"
                        placeholder="John Doe"
                        placeholderText = {Colors.text}
                        onChangeText= {handleChange('fullname')}
                        onBlur={handleBlur('fullname')}
                        value={values.fullname}
                        />
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
                        <MyTextInput 
                        label="Confirm Password"
                        icon="lock"
                        placeholder="••••••••••"
                        placeholderText = {Colors.text}
                        onChangeText= {handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Sign Up
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Have an account already?</ExtraText>
                            <TextLink>
                                <TextLinkContent>Log in.</TextLinkContent>
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

export default SignUp;