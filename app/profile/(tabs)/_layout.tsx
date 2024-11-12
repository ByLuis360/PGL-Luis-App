import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet ,Text, View } from 'react-native'
import Header from '../../../components/Header'

export const tabsLayout = () => {
    return (
      <Tabs screenOptions={{
        tabBarActiveTintColor: "red",
        header: () => <Header/>
      }}>
        <Tabs.Screen name='hobbies'/>
        <Tabs.Screen name='git'/>
      </Tabs>
    )
}

export default tabsLayout

const styles = StyleSheet.create({})