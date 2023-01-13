import React, { useContext, useState, useEffect } from 'react';
import Background from '../BackGround/app';
import { Box, Text, View, Center, Input, NativeBaseProvider, Stack, ScrollView } from "native-base";
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import CheckBox from '../Componetes/Checkbox';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { Logo } from '../Componetes/Logo';
import TextInput from '../Componetes/TextImput';
import { AuthContext } from '../Util/context';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function Cadastro({ navigation }) {

    const handlerVoltarParaLogin = () => {
        navigation.navigate('Login')
    };
    const handlerAvançar = () => {
        navigation.navigate(!ckeckbox ? 'Cadastro' : 'Dados')
    };
    const [ckeckbox, setCheckbox] = useState("")

    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding>
                <ScrollView h={'full'}>
                    <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />
                    <Box
                        mt={'136px'}>
                        <Cadastrar />
                    </Box>
                    <Center>
                        <Box mt={'24px'} >
                            <CheckBox
                                setValor={setCheckbox}
                                valor={ckeckbox}
                                TextCheckBox="Concordo com os termos de uso"
                                fontChecbox={'italic'} />
                        </Box>
                        <Box
                            w={'139px'}
                            py={'80px'}
                        >
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

export const Cadastrar = () => {

    const {
        responsavel,
        loja,
        cargo,
        email,
        senha,
        confirmSenha,
        setLoja,
        setResponsavel,
        setCargo,
        setEmail,
        setSenha,
        setConfirmsenha,
    } = useContext(AuthContext)

    return (

        <View  >

            <Box alignItems={'start'}
                ml={'21px'} >
                <Text
                    color={'white'}
                    fontWeight={'700'}
                    fontSize={'16'}>
                    CADASTRO
                </Text>
            </Box>
            <Stack
                pl={'20px'}
                pr={'20px'}
                mt={"54px"}
            >
                <TextInput
                    placeholder="nome da sua loja"
                    value={loja}
                    onChangeText={text => setLoja(text)} />

                <TextInput
                    mt={'6px'}
                    placeholder="responsável"
                    value={responsavel}
                    onChangeText={text => setResponsavel(text)} />

                <TextInput
                    mt={'6px'}
                    placeholder="cargo"
                    value={cargo}
                    onChangeText={text => setCargo(text)} />

                <TextInput
                    mt={'23px'}
                    placeholder="email"
                    value={email}
                    onChangeText={text => setEmail(text)} />
                <Stack
                    direction={"row"}
                    mt={"1.5"}
                    space={1.5} >
                    <Input
                        placeholder="senha"
                        value={senha}
                        onChangeText={text => setSenha(text)}
                        bgColor={'#DEDEDE21'}
                        variant={"unstyled"}
                        w={"171px"}
                        h={"47px"} />

                    <Input
                        placeholder="confirmar senha"
                        value={confirmSenha}
                        onChangeText={text => setConfirmsenha(text)}
                        bgColor={'#DEDEDE21'}
                        variant={"unstyled"}
                        w={"196px"}
                        h={"47px"} />
                </Stack>

            </Stack>
        </View>
    );
};
