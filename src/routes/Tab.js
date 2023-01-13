import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilLoja from '../pages/PerfilLoja';
import Icone from '../Componetes/icons';
import Login from '../pages/Login';
import Listas from '../pages/Listas';
import EditarDados from '../pages/EditarDados';
import Historias from '../pages/Historias';

const Tab = createBottomTabNavigator();

var COR_TAB_BAR_BOTTOM = '#000';

export const BottomTabs = () => {

    const bar = {
        height: 10,
        backgroundColor: COR_TAB_BAR_BOTTOM,
        alignItems: 'center',
        paddingTop: 5,
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#d9d9d9',
                style: {
                    borderTopColor: '#66666666',
                    backgroundColor: 'transparent',
                    elevation: 0,
                },
            }}

            initialRouteName='PerfilLoja'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'PerfilLoja') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Listas') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    } else if (route.name === 'EditarDados') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Historias') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    }
           


                    // You can return any component that you like here!
                    return <Icone name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: 'white',

                tabBarStyle: {
                    backgroundColor: '#212325',
                }

            })}

        >
            <Tab.Screen
                name="PerfilLoja"
                component={PerfilLoja}
                options={{
                    headerTitle: 'PerfilLoja',
                    headerShown: false,
                }} />
            <Tab.Screen
                name="Listas"
                component={Listas}
                options={{
                    headerTitle: 'Inicio',
                    headerShown: false,
                }} />

            <Tab.Screen
                name="EditarDados"
                component={EditarDados}
                options={{
                    headerTitle: 'EditarDados',
                    headerShown: false,
                }} />

            <Tab.Screen
                name="Historias"
                component={Historias}
                options={{
                    headerTitle: 'Historias',
                    headerShown: false,
                }} />



        </Tab.Navigator>
    );
}