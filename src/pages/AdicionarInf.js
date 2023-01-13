import React from 'react';
import Background from '../BackGround/app';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Stack, NativeBaseProvider, Image, ScrollView } from "native-base";
import LogoStreet from '../../assets/LogoStreet.png'
import Group550 from '../../assets/Group550.png'
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Logo } from '../Componetes/Logo';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { BottomTabs } from '../routes/Tab';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function InfoAdc({ navigation, behavior }) {

    const handlerVoltarParaLogin = () => {
        navigation.navigate('Vitrine');
    };

    const handlerAvançar = () => {

        navigation.navigate('BottomTabs');


    };

    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding h={'full'} >
                <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />
                <ScrollView showsVerticalScrollIndicator={true}>

                    <Box
                        alignItems={'center'}
                        justifyContent={'center'}>

                        <Text
                            color={'white'}
                            paddingLeft={'64px'}
                            paddingRight={'64px'}
                            fontSize={'16px'}
                            textAlign={'center'}
                            paddingTop={'435px'}>
                            Gostaria de acrescentar uma pequena
                            apresentação da sua empresa?
                        </Text>
                        <Box
                            w={'361px'}
                            h={'142px'}
                            bgColor={'#DEDEDE21'}
                            mt='21px'
                            borderRadius={'10px'}>

                            <Text
                                color={'#CCCCCC'}
                                padding={['10px', '10px', '10px', '10px']}
                                fontSize={'16px'}
                                mt='10px'
                                textAlign={'center'}
                                fontWeight='300'>
                                Desde 1960 que gravamos o nosso caminho, acompanhando as melhores tendências e um público que reconhece na Marques Soares a marca em que podem contar.
                            </Text>
                        </Box>

                        <Box
                            w={'139px'}
                            mt={'40px'}
                            pb={'49px'}>
                            <BotaoSalvar
                                acaoOnPress={handlerAvançar}
                                TextBotao={"SALVAR E CONTINUAR"}
                                TipoBotao={"solid"}
                            />

                        </Box>

                        <Logo />
                    </Box>
                </ScrollView>

            </BackgroundSemAVoiding>
        </NativeBaseProvider>
    );
}