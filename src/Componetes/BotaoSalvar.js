import React from 'react';
import { View } from 'react-native';
import { Button } from "native-base";


export default function BotaoSalvar({TextBotao, TipoBotao, acaoOnPress }) {

    var TEXTO_BOTAO = TextBotao
    var TipoBotao = TipoBotao

    return (
        <Button size={"sm"}
            variant={TipoBotao}
            colorScheme={"red"}
            _text={{
                color: "white",
            }}
            borderRadius={'20px'}
            padding={'4px 8px'}
            onPress={() => acaoOnPress()}
        >
            {TEXTO_BOTAO}
        </Button>
    );
}