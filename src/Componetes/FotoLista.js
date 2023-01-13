import React, { useState, useContext } from 'react';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Stack, NativeBaseProvider, Image, Checkbox } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import BotaoSalvar from './BotaoSalvar';
import { AuthContext } from '../Util/context';
import { Visualizador } from './Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './Card';


export default function FotoLista() {

    const {
        setImagemLista,
        
    } = useContext(AuthContext)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 0,
            base64: true,
        });


        if (!result.canceled) {
            setImagemLista(result);
        }

    };

    return (

        <Box >
            <TouchableOpacity onPress={() => pickImage()}>
                <Card />
            </TouchableOpacity>
        </Box>
    );
}
