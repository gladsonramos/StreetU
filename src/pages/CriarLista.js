import React, { useState, useContext } from 'react';
import Background from '../BackGround/app';
import { Text, Box, VStack, Link, Image, Stack, NativeBaseProvider, ScrollView, Center } from "native-base";
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import { BackgroundSemAVoiding } from '../BackGround/app';
import Separador from '../Componetes/Separador';
import Card from '../Componetes/Card';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import FotoLista from '../Componetes/FotoLista';
import { CaixaText } from '../Componetes/TextImput';
import { AuthContext } from '../Util/context';
import { Titulos } from '../Componetes/TextImput';


export default function CriarLista({ navigation }) {

    const handlerVoltarParaLogin = () => {

    };

    const {
        imagenLista
    } = useContext(AuthContext)
    

    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding >
                <ScrollView h={'full'}>
                    <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />

                     { !imagenLista ?  <Listas /> : <InserirLista/> }

                </ScrollView>
            </BackgroundSemAVoiding>
        </NativeBaseProvider>
    );
}

export const Listas = () => {

    const {
        nomeLista,
        imagenLista
    } = useContext(AuthContext)

    return (
        <Box>
            <Box
                pl={'83.5px'}
                mt={'66px'}
                pr={'10px'}>
                <Text alignSelf={'flex-end'}
                    color={'white'}
                >
                    {nomeLista}
                </Text>
                <Separador />
            </Box>

            <Stack
                pt='62px'
                pl={'16px'}
                flexDirection={'row'}
                space={15}>

                {nomeLista ? <Card /> : null}
                {!imagenLista ? <FotoLista /> : null}
                {imagenLista && <Image
                    alt={'IMAGEM VITRINE'}
                    source={{ uri: imagenLista.assets[0].uri }}
                    style={{ height: 300, width: 200, borderRadius: 10 }} />}

            </Stack>
            <Text
                color={'white'}
                pl={'46px'}
                mt={'66px'}>
                CATEGORIAS
            </Text>
            <Text
                color={'white'}
                pl={'46px'}
                mt={'66px'}>
                DATAS DE EXPOSIÇÃO de MM/HH até DD/MM
            </Text>
            <Text
                color={'white'}
                pl={'46px'}
                mt={'66px'}>
                ATIVAR
            </Text>
            <Box mx={'92px'}
                mt={'30px'}>
                <Text
                    color={'white'}
                >
                    TORNAR PRIVADO
                </Text>
                <Text
                    color={'white'}
                    mt={'30px'}>
                    PARTILHAR
                </Text>
                <Text
                    color={'white'}
                    mt={'30px'}>
                    GUARDAR NO SISTEMA
                </Text>
                <Text
                    color={'white'}
                    mt={'30px'}>
                    EXCLUIR LISTA
                </Text>
            </Box>

            <Box w={'178px'}
                alignSelf={'center'}
                mt={'42px'}>
                <BotaoSalvar
                
                    TextBotao={"IR PARA MINHA LISTA"}
                    TipoBotao={'outline'} />

            </Box>
        </Box>
    );



};

export const InserirLista = () => {

    const {
        imagenLista,
        setNomeLista,
        nomeLista

    } = useContext(AuthContext)

    return (
        <Box>
            <Box
                pl={'83.5px'}
                mt={'66px'}
                pr={'10px'}>
                <Titulos onChangeText={setNomeLista}
                    value={nomeLista}
                    placeholder={'NOME DA SUA LISTA'} />
                <Separador />

            </Box>
            <Box

                pt='15px'
                pl={'103px'}
                space={15}>

                {!imagenLista ? <FotoLista /> : null}
                {imagenLista && <Image
                    alt={'IMAGEM VITRINE'}
                    source={{ uri: imagenLista.assets[0].uri }}
                    style={{ height: 300, width: 200, borderRadius: 10 }} />}

            </Box>
            <Box mt={'15'}
            >

                <Box mx={'41'}>

                    <CaixaText

                        placeholder={'Comentários da imagem ...(estas notas serão divulgadas)'}
                        altura={'67px'} />

                </Box>

                <Box
                    pr={'42px'}
                    pl={'121px'}>

                    <CaixaText
                        mt={'24px'}
                        placeholder={'No clique na imagem será direcionado para este lugar'}
                        altura={'52px'} />
                    <CaixaText
                        mt={'22px'}
                        placeholder={'Comentários da imagem ...(estas notas serão divulgadas)'}
                        altura={'123px'} />
                </Box>

                <Text alignSelf={'center'}
                    mt={'18px'}
                    color={'white'}
                >
                    APAGAR IMAGEM QUANDO A LISTA FOR DESATIVAR
                </Text>

                <Box w={'108px'}
                    alignSelf={'center'}
                    mt={'73px'}>
                    <BotaoSalvar
                        TextBotao={"VOLTAR A LISTA"}
                        TipoBotao={'outline'} />

                </Box>


            </Box>


        </Box>
    );



};

