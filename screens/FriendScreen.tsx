import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FriendScreen = () => {
    return (
        <View style={styles.container}>
            <Text>FriendScreen</Text>
        </View>
    )
}

export default FriendScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})