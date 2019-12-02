import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            followRequest: ["John", "Josh", "Rohit", "Arpit"],
            following: ["Preeti"]
        }
    }

    doFollow = index => {
        //if the varialble names are equal to the state
        //variables then no need to repeat them
        //just call this.state and both will be updated
        const { followRequest, following } = this.state;

        const newRequest = followRequest.splice(index, 1);
        following.push(newRequest);

        this.setState({
            followRequest,
            following
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >Navigation</Text>
                <View style={styles.button} >
                    <Button
                        style={styles.button}
                        title="Navigate"
                        onPress={() => {
                            this.props.navigation.navigate("Follow", {
                                followRequest: this.state.followRequest,
                                following: this.state.following,
                                doFollow: this.doFollow
                            })
                        }}
                    />
                </View>
                <View>
                    <Button

                        title="Go To Third Screen"
                        onPress={() => {
                            this.props.navigation.navigate("ThirdScreen", {
                                followRequest: this.state.followRequest,
                                following: this.state.following,
                                doFollow: this.doFollow
                            })
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
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#fff",
        fontSize: 20
    },

    button: {
        margin: 10,

    }
});
