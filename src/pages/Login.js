
import React, { useState } from 'react';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image, Checkbox, Stack } from "native-base";
import { useNavigation } from '@react-navigation/native'
import CheckBox from '../Componetes/Checkbox';
import LogoInicial from '../Componetes/Logo';
import { BackgroundSemAVoiding } from '../BackGround/app';
import TextInput from '../Componetes/TextImput';
import BotaoSalvar from '../Componetes/BotaoSalvar';


export default function Login() {

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <BackgroundSemAVoiding >
        <Box
          alignItems={'center'}
          mt={'26px'}
          px={'20px'}
          >
          <LogoInicial />
          <Text
            color={'white'}
            mt={'51'}
            mb={'35px'}
            fontWeight={'700'}>
            LOGIN
          </Text>

          <TextInput
            placeholder="nome da sua loja"
            value={'login'}
          />

          <TextInput
            mt={'6px'}
            placeholder="email"
            value={'email'}
          />

        </Box>

        <Text
          ml={'31px'}
          mt={'6px'}
          color={'white'}
          fontWeight={'400'}
          italic>
          Recuperar Senha
        </Text>

        <Box mt={'162px'}
          alignItems={'center'}>
          <CheckBox
            TextCheckBox="Lembrar senha e email"
            fontChecbox={'italic'} />
        </Box>

        <Stack
          mt={'80px'}
          space={'19px'}
          w={'139px'}
          alignSelf={'center'}
          >
          <BotaoSalvar
            TextBotao={"SALVAR E CONTINUAR"}
            TipoBotao={"solid"} />

          <BotaoSalvar
            TextBotao={"CRIAR CONTA"}
            TipoBotao={"outline"}
            acaoOnPress={() => navigation.navigate('Cadastro')} />

        </Stack>

      </BackgroundSemAVoiding>
    </NativeBaseProvider >

  );
}


