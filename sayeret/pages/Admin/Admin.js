import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const Admin = () => {
  return (
    <View>
        <View>
        <Text>ניהול משתמשים</Text>
        <FlatList data={newUsers}
              keyExtractor = {item=> item.id}>
                
              </FlatList>

        

        </View>
        <View>
            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
     

    </View>

  )
}

export default Admin

const styles = StyleSheet.create({})