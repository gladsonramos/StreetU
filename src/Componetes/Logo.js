import React from 'react';
import { View } from 'react-native';
import { Image, Box, Stack, NativeBaseProvider } from "native-base";
import LogoStreet from '../../assets/LogoStreet.png'
import Group550 from '../../assets/Group550.png'
import StreetULogo from '../../assets/StreetULogo.png'
import configIcon from '../../assets/configIcon.png'
import Icone from './icons';


export default function LogoInicial() {


    return (
        <Box alignItems={'center'}
        >
            <Image
                source={Group550}
                alt={"Logo"}
                h={'75.11px'}
                w={'75.11px'}>
            </Image>
            <Image
                source={LogoStreet}
                alt={"StreetU"}
                h={'75.45px'}
                w={'171.68px'} >
            </Image>

        </Box>

    );
}

export function Logo() {


    return (
        <Stack direction="row"   >
            <Image
                source={Group550}
                alt={"Logo"}
                h={'56px'}
                w={'56px'}>
            </Image>
            <Image
                source={LogoStreet}
                alt={"StreetU"}
                h={'56.25.45px'}
                w={'128.68px'} >
            </Image>
        </Stack>

    );
}

export function LogoPerfil() {

    return (
        <Image
            source={StreetULogo}
            alt={"StreetU"}
        >
        </Image>

    );
}

export function Cabecalho() {

    return (

        <Box>

            <Box bgColor={'#1111114D'}
                mt={'-40px'}
                w={'full'}
                h={'58px'}>
            </Box>

            <Stack
                space={'231px'}
                direction={'row'}
                bgColor={'#1111114D'}
                pb={'12px'}
                pl={'17px'}>

                <LogoPerfil />
                <Image
                    w={'25px'}
                    h={'25px'}
                    alt='icon'
                    source={configIcon}>
                </Image>
            </Stack>
          

        </Box>
    );
}

