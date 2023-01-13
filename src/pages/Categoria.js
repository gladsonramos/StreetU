import React, { useState } from 'react';
import Background from '../BackGround/app';
import { Box, Text, ScrollView, VStack, Input, Link, Button, Stack, NativeBaseProvider, Image } from "native-base";
import LogoStreet from '../../assets/LogoStreet.png'
import Group550 from '../../assets/Group550.png'
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { Logo } from '../Componetes/Logo';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function Categoria({ navigation }) {

    const handlerVoltarParaLogin = () => {
        navigation.navigate('PoliticaPriv');
    };
    const handlerAvançar = () => {
        navigation.navigate('Vitrine');
    };

    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding >
                <ScrollView
                    h={'full'} >


                    <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />
                    <Box
                        alignItems={'center'}
                        mt={'35px'}  >
                        <Text
                            color={'white'}
                            fontWeight='700'
                            fontSize={'16'}>
                            CATEGORIAS
                        </Text>

                        <Text fontWeight={'700'}
                            w={'361px'}
                            mt={'6px'}
                            color={"#C4C4C4"}
                            lineHeight={'19px'}>
                            Selecione as categorias na qual a sua loja se enquadra (vai poder conjugar entre si em cada lista / produto).
                        </Text>
                        <Input
                            placeholder={"PROCURAR"}
                            bgColor={'#ffff'}
                            variant={"unstyled"}
                            w={"373px"}
                            h={"36px"}
                            mt={"23px"}
                            borderRadius={'10px'} />

                        <Box
                            mx={'20px'}
                            h={'516px'}
                            bgColor={'#DEDEDE21'}
                            mt={'26px'}
                          >

                            <Text
                                color={'#C4C4C4'}
                                fontSize={'14px'}
                                textAlign={'center'}
                                lineHeight='34px'>
                                ACESSÓRIOS     ALIMENTAÇÃO     ALOJAMENTO APARTAMENTOS     APLICAÇÃO     ASIÁTICO AUTOMÓVEIS     BANCO      BAR      BARBEARIA BEBIDAS      BICICLETAS      BOLSAS      BRASILEIRO BRINQUEDOS      BRUCH     CABELEIREIRO      CAFÉ CANALIZAÇÃO      CARROS      CASA      CINEMA      CLINICA      COMPUTADORES      CONCERTOS      CONFEITARIA      CONSULTÓTIO      CRIANÇA      CULTURA      DECORAÇÃO      DISCOTECA      ELECTRODOMÉSTICOS      ENTREGA      ESPLANADA      EXPOSIÇÃO      FRANCÊS      FRUTARIA      GARAGEM      GARRAFEIRA      HAMBURGER      HOMEM      HOTEL ILUMINAÇÃO      IMPRESSÃO      INFANTIL      ITALIANO LANCHE      LAVANDARIA      LENTES      LIVRARIA LIVROS      LOJA      LUXO      MANICURE MEDITERRANICO      MERCADO      MODA      MOTAS MULHER      OBRAS      ÓCULOS DE SOL      ÓTICA PADARIA      PANQUECA       SERVIÇOS      PIZZA PNEUS      POSTO GASOLINA      PUZZLE REAPARAÇÃO      RESTAURANTE       ROUPA      SAPATOS      SAUDÁVEL      SEGUROS      SENHORA SERVIÇO       SERVIÇOS FINANCEIROS SUPERMERCADO      TAKE AWAY      TAPETES      TEATRO      TECNOLOGIA      TELEMÓVEL TRADICIONAL      TRANSPORTES      TROTINETES

                            </Text>

                        </Box>

                        <Box
                            w={'139px'}
                            mt={'15px'}
                            pb={'29px'}
                        >
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