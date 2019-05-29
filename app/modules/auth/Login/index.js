import React from 'react'
import { Content, Form, Item, Input, Label, Container, Button, Text } from 'native-base'
import styles from './styles'

const Login = ({ save, email, password, handleChange }) => {
	const { btn, marginBottom, wrapper } = styles
	const _onLoginPressed = () =>{
		console.log('Username : '+this.state.username+' & password : '+this.state.password);
	}

	return (
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
		
	)
	
}





export default Login
