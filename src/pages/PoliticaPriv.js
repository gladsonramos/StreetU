import React, { useState } from 'react';
import Background from '../BackGround/app';
import { Box, Text, Center, NativeBaseProvider } from "native-base";
import { BotaoVoltar } from '../Componetes/BotaoVoltar';
import CheckBox from '../Componetes/Checkbox';
import BotaoSalvar from '../Componetes/BotaoSalvar';
import { BackgroundSemAVoiding } from '../BackGround/app';

export default function PoliticaPriv({ navigation }) {

    const handlerVoltarParaLogin = () => {
        navigation.navigate('Fatura');
    };

    const handlerAvançar = () => {
        navigation.navigate(!checkbox ? 'PoliticaPriv' : 'Categoria');
    };

    const [checkbox, setCheckbox] = useState("")

    return (

        <NativeBaseProvider>
            <BackgroundSemAVoiding >
                <BotaoVoltar acaoOnPress={handlerVoltarParaLogin} />
                <Box
                    mt={'136px'}
                    mx={'21px'} >
                    <Text
                        color={'white'}
                        fontWeight='700'
                        fontSize={'16'}>
                        CONDIÇÕES DE PARTILHA DE DADOS
                    </Text>




                    <Box
                        h={'434px'}
                        bgColor={'grey'}
                        mt={'8px'} >

                        <Text
                            mt={'28px'}
                            px={'45px'}
                            fontWeight={700}
                            fontSize={'20px'}>
                            TEXTO "TERMO DE PRIVACIDADE"
                        </Text>
                    </Box>

                    <Box mt={'24px'}
                        w={'361px'}>
                        <CheckBox
                            setValor={setCheckbox}
                            valor={checkbox}
                            TextCheckBox="concordo com a divulgação destes dados nesta aplicação, nas condições que aqui se apresentam" />
                    </Box>
                    <Box
                        alignSelf={'center'}
                        w={'139px'}
                        mt={'40px'}>
                        <BotaoSalvar
                            TextBotao={"SALVAR E CONTINUAR"}
                            TipoBotao={checkbox ? "solid" : "outline"}
                            acaoOnPress={checkbox ? handlerAvançar : handlerAvançar} />
                    </Box>
                </Box>
            </BackgroundSemAVoiding>
        </NativeBaseProvider>
    );
}