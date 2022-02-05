import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Question from './../Component/Question';
import AudioQuestion from './../Component/AudioQuestion';

import { Audios } from '../cluster/Audios';

const Training = ({ navigation, route }) => {
    const { reading, listening } = route.params;
    const questions = Audios;

    const [number, setNumber] = useState(0);
    const [choiced, setChoiced] = useState([-1, -1, -1]);
    const setChoice = (index, selectionOfAQuestion) => {
        let newState = choiced;
        newState[index] = selectionOfAQuestion;
        setChoiced(newState);
    };

    const nextQuestion = () => {
        let next = number + 1 >= questions.length ? 0 : number + 1;
        setNumber(next);
    };
    const preQuestion = () => {
        let pre = number - 1 < 0 ? questions.length - 1 : number - 1;
        setNumber(pre);
    };

    return (
        <View style={styles.body}>
            {questions.map((item, pos) =>
                number === pos
                    ? item.type === 'listening' && (
                        <AudioQuestion
                            key={pos}
                            index={number}
                            data={{ question: item.title, selections: item.data }}
                            setChoice={setChoice}
                            status={choiced[number]}
                            audio={item.audio}
                        />
                    )
                    : null
            )}
            <View style={styles.footer}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={preQuestion}
                    underlayColor={'#00000099'}
                >
                    <Text>Previous Question</Text>
                </TouchableHighlight>

                <View>
                    <Text>
                        {number + 1}/{questions.length}
                    </Text>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={nextQuestion}
                    underlayColor={'#00000099'}
                >
                    <Text>Next Question</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    question: {
        fontSize: 28,
        paddingLeft: 10,
        backgroundColor: '#03fce8',
    },
    button: {
        width: 150,
        height: 50,
        padding: 10,
        fontSize: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Training;
