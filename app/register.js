import React, { Component } from 'react'
//Import Layout page
import { Layout } from './modules/common'
import Login from './modules/auth/Login'
//Import items from native-base
import { Content, Form, Item, Input, Label, Container, Button, Text, Spinner } from 'native-base'
import { Alert } from 'react-native'
//Import page styles
import styles from './modules/auth/Login/styles'


//Connection between Reducers and Actions
import { connect } from 'react-redux'

//Import Action
import { registerUser } from './modules/auth/actions'




const { btn, marginItem, marginButton, wrapper } = styles
class Register extends Component {
	static navigationOptions = {
		header: null
	}

	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		if(nextProps.success == true) {

			Alert.alert(
				'Success',
				'Your Account Has Been Created!',
				[
				  {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
				],
				{cancelable: false},
			  );
		}
	}
	_onLoginPressed() {
		const { name, email, password } = this.state;
		this.props.registerUser({ name, email, password })
	}

	_renderButton() {
		
		/*
		if(this.props.loading){
			return (
				<Spinner />
			)

		}
		*/
		return (
			<Button primary rounded style={btn} onPress={this._onLoginPressed.bind(this)}>
				<Text >Register</Text>
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
								<Input placeholder="name" autoCorrect={false} onChangeText={(name) => this.setState({name})} />
							</Item>
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
						<Button style={{alignSelf: 'flex-end'}} onPress={() => this.props.navigation.navigate('Login') } transparent>
							<Text >Log in ?</Text>
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
export default connect(mapStateToProps, { registerUser })(Register)