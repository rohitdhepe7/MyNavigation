import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Follow extends React.Component {

    render() {
        const followReq = this.props.navigation.getParam("followRequest", "0");
        const doFollow = this.props.navigation.getParam("doFollow", "");

        return (
            <View style={styles.container}>
                <Text>Welcome to the Next Screen</Text>
                <Text>{followReq.length} Friend Suggestions</Text>

                {
                    followReq.map((friend, index) => (
                        <View style={styles.button}>
                            <Button
                                key={friend}

                                title={`Follow ${friend}`}
                                onPress={() => { }}
                            />

                        </View>

                    ))
                }

                <View style={styles.button}>
                    <Button
                        title="Go Back"
                        onPress={() => {
                            this.props.navigation.navigate("Home")
                        }}
                    />

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        marginTop: 10
    }
});
