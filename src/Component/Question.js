import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Question = ({ index, data, status, setChoice }) => {

    const { question, selections } = data;
    const [selected, setSelected] = useState(status);

    useEffect(() => {
        return () => {
            setChoice(index, selected);
        }
    })

    return (
        <View>
            <Text style={styles.question}>{question}</Text>
            {
                selections.map((item, pos) => (
                    <Text
                        key={pos}
                        style={selected === pos ? styles.selections : styles.choicing}
                        onPress={() => {
                            if (pos === selected) setSelected(-1);
                            else setSelected(pos);
                        }}
                    >
                        {item}</Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',

    },
    question: {
        fontSize: 28,
        fontWeight: '500'
    },
    selections: {
        fontSize: 24,
        backgroundColor: '#03fce8',
        textAlign: 'center',
        marginBottom: 10,

    },
    choicing: {
        fontSize: 24,
        backgroundColor: '#00ff00',
        textAlign: 'center',
        marginBottom: 10,
    }

})

export default Question
