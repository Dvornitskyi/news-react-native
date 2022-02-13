import React from 'react';
import Main from './components/main';
import FullInfo from './components/fullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={
                        {
                            title: 'Main',
                            headerStyle: { backgroundColor: '#eb5d3d', height: 100 },
                            headerTitleAlign: "center",
                            headerTintColor: "#FFF"     
                        }
                    }
                />
                <Stack.Screen
                    name="FullInfo"
                    component={FullInfo}
                    options={{title: 'FullInfo'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}