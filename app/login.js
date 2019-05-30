import React, { Component } from 'react'
//Import Layout page
import { Layout } from './modules/common'
import Login from './modules/auth/Login'
//Import items from native-base
import { Content, Form, Item, Input, Label, Container, Button, Text, Spinner } from 'native-base'
//Import page styles
import styles from './modules/auth/Login/styles'


//Connection between Reducers and Actions
import { connect } from 'react-redux'

//Import Action
import { loginUser } from './modules/auth/actions'


const { btn, marginBottom, wrapper } = styles
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

	_renderButton() {
		if(this.props.loading){
			return (
				<Spinner />
			)

		}
		return (
			<Button primary style={btn} onPress={this._onLoginPressed.bind(this)}>
				<Text >Login</Text>
			</Button>
		)

	}
	render() {
		const { navigation } = this.props
		
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
								{this._renderButton()}
							
						</Form>
					</Content>
				</Container>
			</Layout>
		)
	}
}
const mapStateToProps = state => {
	return {
		error: state.auth.error,
		loading: state.auth.loading,
		user: state.auth.user
	}
}
export default connect(mapStateToProps, { loginUser })(LoginScreen)