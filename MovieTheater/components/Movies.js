import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from './Card';

const renderCard = ({item}) => {
    return (
        <Card item={item} />
    )
}

const Movies = ({movies}) => {

    if (movies != null)
    {
        return (
            <FlatList
                style={styles.container}
                data={movies}
                renderItem={renderCard}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ () => {
                    return (
                        <View style={styles.separator} />
                    )
                }} 
            />
        )
    } else {
        return (
            <View style={styles.container}>
                <Text>Loading Movies...</Text>
            </View>
        )
    }
}

export default Movies;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#4a4a4a",
      padding: 10,
      paddingTop: 20,
    },
    list: {
      paddingHorizontal: 17,
      backgroundColor: "#000000",
      paddingBottom: 12
    },
    header: {
      marginTop: 20
    },
    title: {
      fontSize: 38,
      color: '#ffb221',
      marginBottom: 20
    },
    separator: {
      marginTop: 10,
    },

});