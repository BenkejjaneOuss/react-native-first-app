import React, { Component } from 'react'
//Import Layout page
import { Layout } from './modules/common'
//import Login from './modules/auth/Login'
//Import items from native-base
import { Content, Form, Item, Input, Label, Container, Button, Text, Spinner, Toast, Left } from 'native-base'
//Import page styles
import styles from './modules/auth/Login/styles'


//Connection between Reducers and Actions
import { connect } from 'react-redux'

//Import Action
import { loginUser } from './modules/auth/actions'

import AsyncStorage from '@react-native-community/async-storage';

const { btn, marginItem, marginButton, wrapper } = styles
class Login extends Component {
	static navigationOptions = {
		header: null
	}

	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		}
	}

	componentWillMount() {
		AsyncStorage.getItem('auth_token')
			.then(token => {
				if(token){
					this.props.navigation.navigate('Home')
				}
			})
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.user) {
			this.props.navigation.navigate('Home')
		}
	}

	_onLoginPressed() {
		const { email, password } = this.state;
		this.props.loginUser({ email, password })
	}

	_renderButton() {
		
		
		if(this.props.loading){
			return (
				<Spinner />
			)

		}
		
		return (
			<Button primary rounded style={btn} onPress={this._onLoginPressed.bind(this)}>
				<Text >Login</Text>
			</Button>
		)

	}
	render() {
		const { navigation } = this.props
		
		return (
			<Layout >
				<Container>
					<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
						<Form style={wrapper}>
							<Item rounded last style={marginItem}>
								<Input placeholder="email" autoCorrect={false} onChangeText={(email) => this.setState({email})} />
							</Item>
							<Item rounded last style={marginButton}>
								<Input placeholder="password" autoCorrect={false} onChangeText={(password) => this.setState({password}) } secureTextEntry />
							</Item>
								{this._renderButton()}
								<Text>
								{this.props.error}
								</Text>
						</Form>
						<Button style={{alignSelf: 'flex-end'}} onPress={() => this.props.navigation.navigate('Register') } transparent>
							<Text >Sign up ?</Text>
          				</Button>
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
export default connect(mapStateToProps, { loginUser })(Login)