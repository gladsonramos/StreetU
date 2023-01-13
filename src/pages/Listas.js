
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Background from '../BackGround/app';
import { Box, Stack, Text, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image, Checkbox, ScrollView } from "native-base";
import { useNavigation } from '@react-navigation/native'
import { LogoPerfil } from '../Componetes/Logo';
import configIcon from '../../assets/configIcon.png'
import { AuthContext } from '../Util/context';
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import Separador from '../Componetes/Separador';
import Icone from '../Componetes/icons';
import Circle from '../Componetes/circle';
import Card from '../Componetes/Card';
import { Cabecalho } from '../Componetes/Logo';
import { BackgroundSemAVoiding } from '../BackGround/app';


export default function Listas() {

    const navigation = useNavigation();
    const {
        imagem
    } = useContext(AuthContext)

    const handlerVoltarParaLogin = () => {
        navigation.navigate('InfoAdc')
    };

    const Header = () => {
        return (

            <Box>

                <Box mt={'12px'}
                    pl={'25px'}>
                    <Icone nameIcone={'arrow-back-circle-outline'} tamanhoIcon={30} corIcone={'white'} />

                </Box>

                <Stack
                    mt={'10px'}
                    alignSelf={'center'}
                    w={'258px'}
                    space={'17px'}>

                    <BotaoSalvar TextBotao={'COPIAR ORGANIZAÇÃO PARA PAGINA INICIAL'}
                        TipoBotao={'outline'} />
                    <BotaoSalvar TextBotao={'ORDENAR'}
                        TipoBotao={'outline'} />

                </Stack>

                <Box
                    alignItems={'flex-end'}
                    pr={'44px'}
                    mt={'35px'}
                >
                    <Icone nameIcone={'add-circle-outline'} tamanhoIcon={40} corIcone={'white'} />
                </Box >
            </Box>

        );
    };

    const Cards = () => {
        return (
            <Box
                mt={'13px'}
                pl={'13px'}
                pr={'13px'} >
                <Card />
            </Box>
        );
    };

    const Separadores = ({ TEXTO }) => {
        var TEXTO = TEXTO
        return (
            <Box
                mt={'20px'}
                pl={'13px'}
                pr={'13px'}>
                <Stack
                    direction={'row'}
                >
                    <Text
                        color={'white'}>
                        {TEXTO}
                    </Text>

                </Stack>

                <Separador />

            </Box>
        );
    };



    return (
        <NativeBaseProvider>
            <BackgroundSemAVoiding >
                <ScrollView h={'full'}>




                    <Cabecalho />

                    <Header />

                    <Separadores
                        TEXTO={" BOLD 14 FIXADO À DTA"} />
                    <Cards />
                    <Separadores
                        TEXTO={" BOLD 14 FIXADO À DTA"} />
                    <Cards />
                    <Separadores

                        TEXTO={"BOLD 14 FIXADO À DTA"} />
                    <Cards />
                </ScrollView>
            </BackgroundSemAVoiding>
        </NativeBaseProvider>

    );
}

