import React from 'react';
import { View } from 'react-native';
import { Checkbox } from "native-base";
               

export default function CheckBox ({valor, setValor, TextCheckBox, fontChecbox}) {

    var TEXTO_CHECKBOX = TextCheckBox
    var fontChecbox = fontChecbox

 return (
    <Checkbox value={valor}
    colorScheme={"red"}
    _text={{
        color: "white",
        fontStyle: fontChecbox,
        fontWeight: '400'
    }}
    
    onChange={setValor}
    defaultChecked >
    {TEXTO_CHECKBOX} </Checkbox>
  );
}