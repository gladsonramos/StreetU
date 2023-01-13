
import React, { useContext, useState } from 'react';
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


export default function Historias() {

    const navigation = useNavigation();
    const {
        imagem
    } = useContext(AuthContext)

    const handlerVoltarParaLogin = () => {
        navigation.navigate('InfoAdc')
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

    const Views = () => {
        return (
            <Box
                ml={'12px'}
                mt={'21px'}
                mb={'52px'}
                w={'390px'}
                borderRadius={'5px'}
                height={'585px'}
                bgColor={'black'}
            >
                <Image
                    source={{ uri: 'data:image/jpeg;base64,' + imagem }}
                    style={{ width: 373, height: 306 }}
                />
                <Box
                    mt={'23px'}
                    alignSelf={'center'}
                    position={'absolute'}>

                    <Image
                        source={{ uri: 'data:image/jpeg;base64,' + imagem }}
                        style={{ width: 82, height: 81 }}
                    />
                </Box>



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





    return (
        <NativeBaseProvider>
            <BackgroundSemAVoiding >





                <ScrollView>

                    <Cabecalho />

                    <ScrollView h={'full'}>

                        <Separadores
                            TEXTO={"HISTÓRIAS"} />
                        <CircleStory />

                        <Views />

                    </ScrollView>

                </ScrollView>

            </BackgroundSemAVoiding>
        </NativeBaseProvider>

    );
}

