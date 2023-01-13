
import React from 'react';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import Icone from './icons';

var BOTAO_REDONDO_VOLTAR = "arrow-back-circle-outline";
var TAMANHO_ICONE = 40;

const css = StyleSheet.create({
    IconeStyle: {
        paddingLeft: 13,
        position: 'absolute',
        zIndex: 1
    },
});

const IconeStyle = css.IconeStyle;

export const BotaoVoltar = ({ acaoOnPress, ...rest }) => {
    return (
        <Icone
            nameIcone={BOTAO_REDONDO_VOLTAR}
            tamanhoIcon={TAMANHO_ICONE}
            corIcone={'white'}
            style={[IconeStyle, { ...rest }]}
            onPress={() => acaoOnPress()}
        />
    );
}