import React, { createContext, useState, useEffect } from "react";
import usuarioService from "./Monbodb";

export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {

    const [loja, setLoja] = useState("")
    const [responsavel, setResponsavel] = useState("")
    const [cargo, setCargo] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmSenha, setConfirmsenha] = useState("")
    const [nome, setNome] = useState("")
    const [endereco, setEndereco] = useState("")
    const [complemento, setComplemento] = useState("")
    const [codigoP, setCodigoP] = useState("")
    const [cidade, setCidade] = useState("")
    const [pais, setPais] = useState("")
    const [numero, setNumero] = useState("")
    const [telefone, setTelefone] = useState("")
    const [emailDados, setemailDados] = useState("")
    const [nomeComercial, setNomeComercial] = useState("")
    const [enderecoFiscal, setEndereçoFiscal] = useState("")
    const [complementoFatura, setComplementoFatura] = useState("")
    const [codigoPFatura, setCondigoPFatura] = useState("")
    const [cidadeFatura, SetCidadeFatura] = useState("")
    const [paisFatura, setPaisFatura] = useState("")
    const [numeroFiscal, setNumeroFiscal] = useState("")
    const [telefoneFatura, setTelefoneFatura] = useState("")
    const [emailFatura, setEmailFatura] = useState("")
    const [nif, setNif] = useState("")
    const [imagemVitrine, setImagemVitrine] = useState("")
    const [imagemLogo, setImagemLogo] = useState("")
    const [nomeLista, setNomeLista] = useState("")

    const [imagenLista, setImagemLista] = useState("")
    const [dadosUsuario, setDadosUsuario] = useState("")
    const [imagensApp, setImagensApp] = useState("")

    useEffect(() => {
        console.log('Entrei UseFect');
        (async () => {
            (usuarioService.Usuario()
                .then((response) => {
                    setDadosUsuario(response.data[0].DADOS_CADASTRAIS.CADASTRO)
                    setImagensApp(response.data[0].DADOS_CADASTRAIS.IMAGENS)
                    return Promise.resolve(response)
                }).catch((error) => {
                    return Promise.reject(error)
                })
            )
        })();
    }, []);



    const cadastrar = () => {

        let data = {
            loja: loja,
            responsavel: responsavel,
            cargo: cargo,
            email: email,
            senha: senha,
            confirmSenha: confirmSenha,
            nome: nome,
            endereco: endereco,
            complemento: complemento,
            codigoP: codigoP,
            cidade: cidade,
            pais: pais,
            numero: numero,
            telefone: telefone,
            emailDados: emailDados,
            nomeComercial: nomeComercial,
            enderecoFiscal: enderecoFiscal,
            complementoFatura: complementoFatura,
            codigoPFatura: codigoPFatura,
            cidadeFatura: cidadeFatura,
            paisFatura: paisFatura,
            numeroFiscal: numeroFiscal,
            telefoneFatura: telefoneFatura,
            emailFatura: emailFatura,
            nif: nif,
            imagemVitrine: imagemVitrine.base64,
            imagemLogo: imagemLogo.base64,
        }

        usuarioService.cadastro(data)
            .then((response) => {
                alert('USUARIO CADASTRADO COM SUCESSO')
            })
    }

    return (

        <AuthContext.Provider value={{
            cadastrar,
            loja,
            responsavel,
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
            nomeComercial,
            setNomeComercial,
            enderecoFiscal,
            setEndereçoFiscal,
            complementoFatura,
            setComplementoFatura,
            codigoPFatura,
            setCondigoPFatura,
            cidadeFatura,
            SetCidadeFatura,
            paisFatura,
            setPaisFatura,
            telefoneFatura,
            setTelefoneFatura,
            emailFatura,
            setEmailFatura,
            nif,
            setNif,
            numeroFiscal,
            setNumeroFiscal,
            imagemVitrine,
            setImagemVitrine,
            imagemLogo,
            setImagemLogo,
            dadosUsuario,
            imagensApp,
            imagenLista,
            setImagemLista,
            nomeLista,
            setNomeLista

        }}>
            {children}
        </AuthContext.Provider>
    )
}