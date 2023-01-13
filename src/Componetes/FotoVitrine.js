import React, { useState, useContext } from 'react';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Stack, NativeBaseProvider, Image, Checkbox } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import BotaoSalvar from './BotaoSalvar';
import { AuthContext } from '../Util/context';


export default function BotoesAdcFoto() {
    
    const {
        setImagemVitrine,
        setImagemLogo,
   } = useContext(AuthContext)

    const Fotovitrine = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 0,
            base64: true,
        });
       

        if (!result.canceled) {
            setImagemVitrine(result); 
        }

      
    };

    const FotoLogo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 0,
            base64: true,
        });
       
        if (!result.canceled) {
            setImagemLogo(result); 
        }
    };


    return (

        <Box alignItems={'center'}>
            <Box
                w={'139px'}
                mt={'153px'}>
                <BotaoSalvar
                    acaoOnPress={FotoLogo}
                    TextBotao={"MUDAR LOGOTIPO"}
                    TipoBotao={"outline"}
                />
            </Box>
            <Box
                w={'139px'}
                mt={'23px'}>
                <BotaoSalvar
                    acaoOnPress={Fotovitrine}
                    TextBotao={"MUDAR VITRINE"}
                    TipoBotao={"outline"}
                />
            </Box>

        </Box>
    );
}
