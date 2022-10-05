import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Movies from '../components/Movies';
import { movies } from '../data/movies';

const HomeScreen = ({navigation}) => {
    console.log(movies);
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Movie Showings </Text>
            <Movies movies={movies} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373737',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        color: '#ffb221',
        shadowColor: '#fff',
        shadowOffset: {
            width: 2,
            height: 2
          },
          shadowOpacity: 2,
          shadowRadius: 4,
        marginBottom: 20
    }
});
