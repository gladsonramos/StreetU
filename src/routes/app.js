import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro'
import Dados from '../pages/DadosPublicos';
import Fatura from '../pages/DadosFatura';
import PoliticaPriv from '../pages/PoliticaPriv';
import Categoria from '../pages/Categoria';
import Vitrine from '../pages/Vitrine';
import InfoAdc from '../pages/AdicionarInf';
import { AuthProvider } from '../Util/context';
import PerfilLoja from '../pages/PerfilLoja';
import { BottomTabs } from './Tab';
import CriarLista from '../pages/CriarLista';

const Stack = createStackNavigator();


export default function Routes() {
    return (
        <AuthProvider>
            <Stack.Navigator
                initialRouteName='CriarLista'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dados"
                    component={Dados}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Fatura"
                    component={Fatura}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PoliticaPriv"
                    component={PoliticaPriv}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Categoria"
                    component={Categoria}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Vitrine"
                    component={Vitrine}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="InfoAdc"
                    component={InfoAdc}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="PerfilLoja"
                    component={PerfilLoja}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={{ headerShown: false }}

                />

                <Stack.Screen
                    name="CriarLista"
                    component={CriarLista}
                    options={{ headerShown: false }}

                />
            </Stack.Navigator>
        </AuthProvider>
    )
}

