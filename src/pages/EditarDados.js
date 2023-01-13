import React, { useState } from 'react';
import Background from '../BackGround/app';
import { Center, Box, VStack, Input, Link, Button, Stack, NativeBaseProvider, ScrollView } from "native-base";
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { Logo } from '../Componetes/Logo';
import { Cadastrar } from './Cadastro';
import { DadosPublicos } from './DadosPublicos';
import { DadosFatura } from './DadosFatura';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function EditarDados({ navigation }) {

    const handlerVoltarParaLogin = () => {
        navigation.navigate('PoliticaPriv');
    };


    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding >
                <ScrollView h={'full'}>
                    <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />
                    <Stack space={'30px'}
                        mt={'68px'}>
                        <Cadastrar />
                        <Stack mx={'21px'}
                            space={'30px'}>
                            <DadosPublicos />
                            <DadosFatura />
                        </Stack>
                        <Center>
                            <Logo />
                        </Center>
                    </Stack>
                </ScrollView>

            </BackgroundSemAVoiding>
        </NativeBaseProvider>
    );
}