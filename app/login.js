import React, { Component } from 'react'
//Import Layout page
import { Layout } from './modules/common'
import Login from './modules/auth/Login'
//Import items from native-base
import { Content, Form, Item, Input, Label, Container, Button, Text } from 'native-base'
//Import page styles
import styles from './modules/auth/Login/styles'


//Connection between Reducers and Actions
import { connect } from 'react-redux'

//Import Action
import { loginUser } from './modules/auth/actions'


class LoginScreen extends Component {
	static navigationOptions = {
		header: null
	}

	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	
	_onLoginPressed() {
		const { username, password } = this.state;
		this.props.loginUser({ username, password })
	}

	render() {
		const { navigation } = this.props
		const { btn, marginBottom, wrapper } = styles
		return (
			<Layout title="Login" screen="Login" back navigation={navigation}>
				<Container>
					<Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
						<Form style={wrapper}>
							<Item floatingLabel>
								<Label>Username</Label>
								<Input autoCorrect={false} onChangeText={(username) => this.setState({username})} />
							</Item>
							<Item floatingLabel last style={marginBottom}>
								<Label>Password</Label>
								<Input autoCorrect={false} onChangeText={(password) => this.setState({password}) } secureTextEntry />
							</Item>
							<Button primary style={btn} onPress={this._onLoginPressed.bind(this)}>
								<Text>Login</Text>
							</Button>
						</Form>
					</Content>
				</Container>
			</Layout>
		)
	}
}

export default connect(null, { loginUser })(LoginScreen)