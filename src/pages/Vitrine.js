import React, { useState, useContext } from 'react';

import { Box, NativeBaseProvider, Image, Text, ScrollView } from "native-base";
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { Logo } from '../Componetes/Logo';
import BotoesAdcFoto from '../Componetes/FotoVitrine';
import { BackgroundSemAVoiding } from '../BackGround/app';
import { AuthContext } from '../Util/context';


export default function Vitrine({ navigation }) {

    const {
        cadastrar,
        imagemLogo,
        imagemVitrine } = useContext(AuthContext)

    const handlerVoltarParaLogin = () => {
        navigation.navigate('Categoria');

    };

    const handlerAvançar = () => {
        navigation.navigate('InfoAdc');
        cadastrar()
    };

    const Vitrine = () => {
        return (

            <Box alignItems={'center'} >
                <Box
                    mt={'100px'}
                    w={'373px'}
                    h={'306px'}
                    bgColor={'#DEDEDE21'} >
                    {!imagemVitrine ? <Text
                        textAlign={'center'}
                        fontSize={'20'}
                        color={'white'}
                        mt={'135px'}
                        fontWeight={'600'}>
                        A SUA {'\n'} VITRINE
                    </Text> : null}

                    <Box w={'373px'} >
                        {imagemVitrine && <Image
                            alt={'IMAGEM VITRINE'}
                            source={{ uri: imagemVitrine.assets[0].uri }}
                            style={{ height: 310, borderRadius: 10 }} />}
                    </Box>
                    <Box
                        position={'absolute'}
                        bgColor={'#DEDEDE21'}
                        w={'104px'}
                        h={'103px'}
                        mt={'289px'}
                        alignSelf={'center'}
                        borderRadius={'10px'}>

                        {!imagemLogo ? <Text
                            textAlign={'center'}
                            fontSize={'15'}
                            color={'white'}
                            mt={'9'}
                            fontWeight={'600'}>
                            O SEU {'\n'} LOGOTIPO
                        </Text> : null}

                        {imagemLogo && <Image
                            alt={'IMAGEM LOGO'}
                            source={{ uri: imagemLogo.assets[0].uri }}
                            style={{ height: 105, borderRadius: 10 }} />}

                    </Box>
                </Box>
            </Box>

        );
    };

    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding>
                <ScrollView
                    h={'full'}>
                    <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />
                    <Box
                        alignItems={'center'}>

                        <Vitrine />
                        <BotoesAdcFoto />
                        <Box
                            alignSelf={'center'}
                            w={'139px'}
                            pb={'49px'}
                            mt={'52px'}>
                            <BotaoSalvar
                                TextBotao={"SALVAR E CONTINUAR"}
                                TipoBotao={"solid"}
                                acaoOnPress={handlerAvançar} />
                        </Box>
                        <Logo />

                    </Box>


                </ScrollView>
            </BackgroundSemAVoiding>
        </NativeBaseProvider>
    );

}




