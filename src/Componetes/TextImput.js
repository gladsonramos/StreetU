import React from 'react';
import { View } from 'react-native';
import { Checkbox, Input } from "native-base";
               

export default function TextInput ({ placeholder, valor, onChangeText, mt , ...rest}) {

  

   return (
    <Input
    placeholder={placeholder}
    value={valor}
    onChangeText={onChangeText}
    bgColor={'#DEDEDE21'}
    color={'white'}
    variant={"unstyled"}
    h={"47px"}
    mt={mt}
     />
  );
}

export function CaixaText ({ placeholder, valor, onChangeText, altura , mt }) {

   return (
    <Input
    placeholder={placeholder}
    value={valor}
    onChangeText={onChangeText}
    bgColor={'#DEDEDE21'}
    color={'white'}
    variant={"unstyled"}
    h={altura}
    mt={mt}
     />
  );
}

export function Titulos ({ placeholder, valor, onChangeText}) {

   return (
    <Input
    placeholder={placeholder}
    value={valor}
    onChangeText={onChangeText}
    color={'white'}
    variant={"unstyled"}
     />
  );
}