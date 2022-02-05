import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player'


TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
    ],
});

const AudioQuestion = ({ index, data, status, setChoice, audio }) => {
    const start = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add({
                id: '1',
                url: audio,
                title: 'Track Title'
            });
        } catch (e) {
            console.log(e);
        }

    };


    const { question, selections } = data;
    const [selected, setSelected] = useState(status);

    useEffect(() => {
        start();
        return () => {
            TrackPlayer.pause();
            setChoice(index, selected);
            TrackPlayer.destroy();
        }
    })
    TrackPlayer.setupPlayer();
    return (
        <View>
            <Text style={styles.question}>{question}</Text>
            <TouchableHighlight
                onPress={() => {
                    TrackPlayer.play();
                }}
            >
                <Text>Play</Text>
            </TouchableHighlight>
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

export default AudioQuestion

const styles = StyleSheet.create({
    selections: {
        backgroundColor: '#e3f4'
    },
    choicing: {
        backgroundColor: '#d4f034'
    }
})
