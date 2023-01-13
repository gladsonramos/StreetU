
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Background from '../BackGround/app';
import { Box, Stack, Text, ScrollView, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image, Checkbox } from "native-base";
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../Util/context';
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import Separador from '../Componetes/Separador';
import Icone from '../Componetes/icons';
import Circle from '../Componetes/circle';
import Card from '../Componetes/Card';
import { Cabecalho } from '../Componetes/Logo';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function PerfilLoja() {

    useEffect(() => {
        imagensApp,
        dadosUsuario
    }, []);

    const {
        imagensApp,
        dadosUsuario
    } = useContext(AuthContext)

    const navigation = useNavigation();


    const handlerVoltarParaLogin = () => {
        navigation.navigate('InfoAdc')
    };

    const NomeLoja = () => {
        return (
            <Box
                pr={'25px'}
                pl={'25px'}>
                <Text
                    textAlign={'start'}
                    color={'white'}
                    fontSize={'24px'}
                    fontWeight={'400'}>
                    {dadosUsuario.loja}
                </Text>
            </Box>
        );
    };

    const CircleStory = () => {
        return (
            <Box
                mt={'13px'}
                pl={'13px'}
                pr={'13px'} >
                <Circle />
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
                    <Box
                        position={'absolute'}
                        ml={'360px'}
                        mt={'-10px'}  >
                        <Icone nameIcone={'add-circle-outline'}
                            corIcone={'white'}
                            tamanhoIcon={'20px'} />
                    </Box>
                </Stack>
                <Separador />

            </Box>
        );
    };

    const FotosLoja = () => {






        return (

            <Box
                ml={'20px'}
                mt={'10px'}
                mb={'52px'}
                w={'373px'}
                height={'306'}
                bgColor={'black'}
            >
                <Image
                    alt={'Inicial'}
                    source={{ uri: 'data:image/jpeg;base64,' + imagensApp.imagemVitrine }}
                    style={{ width: 373, height: 306 }}
                />
                <Box
                    mt={'23px'}
                    alignSelf={'center'}
                    position={'absolute'}>

                    <Image
                        alt={'Inicial'}
                        source={{ uri: 'data:image/jpeg;base64,' + imagensApp.imagemLogo }}
                        style={{ width: 82, height: 81, borderRadius: 5 }}
                    />
                </Box>

                <Stack
                    mt={'162px'}
                    alignSelf={'center'}
                    position={'absolute'}
                    space={'11.56px'}
                    w={'178.8px'}>
                    <BotaoSalvar
                        TextBotao={"ESTATISTICAS"}
                        TipoBotao={"outline"}
                    />
                    <BotaoSalvar
                        TextBotao={"CRIAR HISTÓRIAS"}
                        TipoBotao={"outline"}
                    />
                    <BotaoSalvar
                        TextBotao={"CRIAR LISTAS"}
                        TipoBotao={"outline"}
                    />
                    <BotaoSalvar
                        TextBotao={"DADOS"}
                        TipoBotao={"outline"}
                    />
                </Stack>
            </Box>

        );
    };

    return (
        <NativeBaseProvider>
            <BackgroundSemAVoiding>

                <Cabecalho />
                <Box mt={'12px'}
                    pl={'25px'}>
                    <Icone nameIcone={'arrow-back-circle-outline'} tamanhoIcon={30} corIcone={'white'} />
                </Box>
                <ScrollView
                    h={'full'}>
                    <NomeLoja />
                    <FotosLoja />
                    <Separadores
                        TEXTO={"HISTÓRIAS"} />
                    <CircleStory />
                    <Separadores
                        TEXTO={"LISTAS"} />
                    <Cards />
                </ScrollView>
            </BackgroundSemAVoiding>
        </NativeBaseProvider>

    );
}

