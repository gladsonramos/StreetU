import React, { useState, useContext } from 'react';
import Background from '../BackGround/app';
import { Box, Text, Center, ScrollView, FormControl, Input, Link, Button, HStack, Stack, NativeBaseProvider, Image, Checkbox } from "native-base";
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import CheckBox from '../Componetes/Checkbox';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { Logo } from '../Componetes/Logo';
import { AuthContext } from '../Util/context';
import TextInput from '../Componetes/TextImput';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function Fatura({ navigation }) {

    const {
        
    } = useContext(AuthContext)

    const handlerVoltarParaLogin = () => {
        navigation.navigate('Dados');
    };

    const handlerAvançar = () => {
        
        navigation.navigate(!ckeckbox ? 'Fatura' : 'PoliticaPriv');
       
    };
    const [ckeckbox, setCheckbox] = useState("")

    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding>
                <ScrollView
                    h={'full'}>
                    <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />
                    <Box
                        mt={'114px'}
                        mx={'21px'} >

                        <DadosFatura />
                    </Box>

                    <Center>
                        <Box mt={'35px'}
                            w={'361px'}>
                            <CheckBox
                                setValor={setCheckbox}
                                valor={ckeckbox}
                                TextCheckBox="concordo com a divulgação destes dados nesta aplicação, nas condições que aqui se apresentam" />
                        </Box>
                        <Box
                            w={'139px'}
                            mt={'30px'}
                            pb={'31px'}>
                            <BotaoSalvar
                                TextBotao={"SALVAR E CONTINUAR"}
                                TipoBotao={ckeckbox ? "solid" : "outline"}
                                acaoOnPress={ckeckbox ? handlerAvançar : handlerAvançar} />
                        </Box>

                        <Logo />

                    </Center>
                </ScrollView>
            </BackgroundSemAVoiding>
        </NativeBaseProvider>
    );
}

export const DadosFatura = () => {

    const {
        cadastrar,
        nomeComercial,
        setNomeComercial,
        enderecoFiscal,
        setEndereçoFiscal,
        complementoFatura,
        setComplementoFatura,
        codigoPFatura,
        setCondigoPFatura,
        cidadeFatura,
        SetCidadeFatura,
        paisFatura,
        setPaisFatura,
        telefoneFatura,
        setTelefoneFatura,
        emailFatura,
        setEmailFatura,
        nif,
        setNif,
        numeroFiscal,
        setNumeroFiscal, } = useContext(AuthContext)

    return (
        <Box>

            <Text
                color={'white'}
                fontWeight='700'
                fontSize={'16'}
                mb={"54px"}>
                DADOS FATURA
            </Text>

            <TextInput
                placeholder="nome comercial"
                value={nomeComercial}
                onChangeText={text => setNomeComercial(text)} />

            <TextInput
                mt={"6px"}
                placeholder="endereço fiscal"
                value={enderecoFiscal}
                onChangeText={text => setEndereçoFiscal(text)} />

            <Stack
                direction="row"
                mt="1.5"
                space={1.5} >
                <Input
                    placeholder={"complemento"}
                    bgColor={'#DEDEDE21'}
                    variant={"unstyled"}
                    value={complementoFatura}
                    onChangeText={text => setComplementoFatura(text)}
                    w={"203px"}
                    h={"47px"} />
                <Input
                    placeholder={"código postal"}
                    bgColor={'#DEDEDE21'}
                    variant={"unstyled"}
                    value={codigoPFatura}
                    onChangeText={text => setCondigoPFatura(text)}
                    w={"163px"}
                    h={"47px"} />
            </Stack>
            <Stack direction="row" mt="1.5" space={1.5} >
                <Input
                    placeholder={"cidade"}
                    bgColor={'#DEDEDE21'}
                    variant={"unstyled"}
                    value={cidadeFatura}
                    onChangeText={text => SetCidadeFatura(text)}
                    w={"163px"}
                    h={"47px"} />
                <Input
                    placeholder={"pais"}
                    bgColor={'#DEDEDE21'}
                    variant={"unstyled"}
                    value={paisFatura}
                    onChangeText={text => setPaisFatura(text)}
                    w={"203px"}
                    h={"47px"} />

            </Stack>
            <TextInput
                mt={"6px"}
                placeholder="numero fiscal empresa"
                value={numeroFiscal}
                onChangeText={text => setNumeroFiscal(text)} />
            <TextInput
                mt={"6px"}
                placeholder="telefone"
                value={telefoneFatura}
                onChangeText={text => setTelefoneFatura(text)} />
            <TextInput
                mt={"6px"}
                placeholder="email"
                value={emailFatura}
                onChangeText={text => setEmailFatura(text)} />
            <TextInput
                mt={"6px"}
                placeholder="NIF empresa"
                value={nif}
                onChangeText={text => setNif(text)} />
        </Box>
    );
};