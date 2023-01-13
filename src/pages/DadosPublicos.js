import React, { useState, useContext } from 'react';
import Background from '../BackGround/app';
import { Box, Text, ScrollView, VStack, FormControl, Input, Link, Button, HStack, Stack, NativeBaseProvider, Image, Center } from "native-base";
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import CheckBox from '../Componetes/Checkbox';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { Logo } from '../Componetes/Logo';
import { AuthContext } from '../Util/context';
import TextInput from '../Componetes/TextImput';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function Dados({ navigation }) {

    const handlerVoltarParaLogin = () => {
        navigation.navigate('Cadastro');
    };
    const handlerAvançar = () => {

        navigation.navigate(!ckeckbox ? 'Dados' : 'Fatura');
    };

    const [ckeckbox, setCheckbox] = useState("")


    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding >
                <ScrollView
                    h={'full'} >
                    <BotaoVoltar
                        acaoOnPress={handlerVoltarParaLogin} />
                    <Box
                        mx={'21px'}
                        mt={'136px'}>
                        <DadosPublicos />
                    </Box>

                    <Center>
                        <Box
                            mt={'35px'}
                            w={'361px'}>
                            <CheckBox
                                setValor={setCheckbox}
                                valor={ckeckbox}
                                TextCheckBox="concordo com a divulgação destes dados nesta aplicação, nas condições que aqui se apresentam" />
                        </Box>
                        <Box
                            w={'139px'}
                            mt={'40px'}
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

export const DadosPublicos = () => {


    const {
        nome,
        setNome,
        endereco,
        setEndereco,
        complemento,
        setComplemento,
        codigoP,
        setCodigoP,
        cidade,
        setCidade,
        pais,
        setPais,
        numero,
        setNumero,
        telefone,
        setTelefone,
        emailDados,
        setemailDados,

    } = useContext(AuthContext)


    return (

        <Box >
            <Text
                color={'white'}
                fontWeight={'700'}
                fontSize={'16'}
                >
                DADOS PUBLICOS NA APLICAÇÃO {nome}
            </Text>
            <Box
                alignItems={'center'}
                mt={'54px'}>
                <TextInput
                    placeholder="nome da sua loja"
                    value={nome}
                    onChangeText={text => setNome(text)} />

                <TextInput
                    mt={'6px'}
                    placeholder={"endereço (deixe em branco se for exclusivamente online)"}
                    value={endereco}
                    onChangeText={text => setEndereco(text)} />
                <Stack
                    direction="row"
                    mt="1.5"
                    space={1.5} >
                    <Input
                        placeholder={"complemento"}
                        bgColor={'#DEDEDE21'}
                        variant={"unstyled"}
                        value={complemento}
                        onChangeText={text => setComplemento(text)}
                        w={"203px"}
                        h={"47px"} />
                    <Input
                        placeholder={"código postal"}
                        bgColor={'#DEDEDE21'}
                        variant={"unstyled"}
                        value={codigoP}
                        onChangeText={text => setCodigoP(text)}
                        w={"163px"}
                        h={"47px"} />
                </Stack>
                <Stack
                    direction="row"
                    mt="1.5"
                    space={1.5} >
                    <Input
                        placeholder={"cidade"}
                        bgColor={'#DEDEDE21'}
                        variant={"unstyled"}
                        value={cidade}
                        onChangeText={text => setCidade(text)}
                        w={"163px"}
                        h={"47px"} />
                    <Input
                        placeholder={"pais"}
                        bgColor={'#DEDEDE21'}
                        variant={"unstyled"}
                        value={pais}
                        onChangeText={text => setPais(text)}
                        w={"203px"}
                        h={"47px"} />
                </Stack>
                <TextInput
                    mt={'6px'}
                    placeholder={"numero whatsapp (este sera o contato preferencial para seus clientes)"}
                    value={numero}
                    onChangeText={text => setNumero(text)} />
                <TextInput
                    mt={'6px'}
                    placeholder={"telefone)"}
                    value={telefone}
                    onChangeText={text => setTelefone(text)} />
                <TextInput
                    mt={'6px'}
                    placeholder={"e-mail)"}
                    value={emailDados}
                    onChangeText={text => setemailDados(text)} />
            </Box>
        </Box>
    );
};