import React from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';

const MovieScreen = ({ route }) => {

    const { movie } = route.params;

    return (
        <ScrollView style={styles.container}>

            <Image style={styles.movieImage} source={{uri: movie.image}}/>
            <Text style={styles.title}> {movie.title} </Text>
            <Text style={styles.body}> {movie.body} </Text>
            <Text style={styles.tags}> {movie.tags.join(' | ')} </Text>

        </ScrollView>
    )
}

export default MovieScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#373737',
        padding: 10,
        paddingTop: 20
    },
    tags: {
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'flex-start',
        color: '#667'
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    body: {
        fontSize: 32,
        letterSpacing: 4,
        color: '#b8ff4c'
    },
    articleImage: {
        height: 250,
        borderRadius: 5,
        marginBottom: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    }

});