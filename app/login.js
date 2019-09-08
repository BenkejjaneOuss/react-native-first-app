import React, { Component } from 'react'
//Import Layout page
import { Layout } from './modules/common'
//import Login from './modules/auth/Login'
//Import items from native-base
import { Content, Form, Item, Input, Label, Container, Button, Text, Spinner, Toast, Left, IconNB, Thumbnail} from 'native-base'
//Import page styles
import styles from './modules/auth/Login/styles'


//Connection between Reducers and Actions
import { connect } from 'react-redux'

//Import Action
//import { loginUser } from './modules/auth/actions'
import { signInAction } from "./modules/actions";

//import AsyncStorage from '@react-native-community/async-storage';

import { Formik } from 'formik'

import * as Yup from 'yup';

const { btn, marginItem, marginButton, wrapper, bordered } = styles
const cover = require("../assets/images/robot-dev.png");

class Login extends Component {
	static navigationOptions = {
		header: null
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.isAuth) {
			console.log("test")
		  this.props.navigation.navigate('Home')
		}
	  }
	  componentDidUpdate() {
		if(this.props.isAuth){
			this.props.navigation.navigate('Home')
		}
	  }

	  _handleFormSubmit(values) {
		console.log(values)
		console.log("ok")
		this.props.signInAction(values)
	  }


	  _renderButton() {
		
		
		if(this.props.loading){
			return("Loading...")

		}
		
		return("Log In")

	}
	/*
	_errorOrSuccessMsg() {
		if(this.props.error){
		  return (<Alert color="danger">{this.props.error}</Alert>)
		}else if (this.props.isRegistred){
	
		  return (<Alert color="success">You have been successfully registered!</Alert>)
		}
	  }
	  */
	
	/*
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
	*/

	

	
	render() {
		//const { navigation } = this.props
		
		return (
			<Layout >
				<Container>
				<Formik 
            initialValues = {{ email: '', password: ''}}
            onSubmit = { this._handleFormSubmit.bind(this)}
			
			validationSchema = {
              Yup.object().shape({
                email: Yup.string().required().email(),
                password: Yup.string().required().min(6)
              })
			}
			
            render = {({
              handleChange,
              handleSubmit,
              handleBlur,
              isValid,
              isSubmitting,
              errors,
			  touched,
			  values
            }) => (
					<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
						<Thumbnail large source={cover} style={bordered}/>
						<Form style={wrapper}>
							<Item rounded last style={marginItem} error={errors.email && touched.email}>
								<Input  placeholder="email" value={values.email} autoCorrect={false} onChangeText={handleChange('email')} />
								{errors.email && touched.email ? <IconNB name="ios-close-circle" /> : null}
							</Item>

							<Item rounded last style={marginButton} error={errors.password && touched.password}>
								<Input  placeholder="password" value={values.password} autoCorrect={false} onChangeText={handleChange('password')} secureTextEntry />
								{errors.password && touched.password ?  <IconNB name="ios-close-circle" />: null}
							</Item>

							<Button primary rounded style={btn} onPress={handleSubmit}>
								<Text >{this._renderButton()}</Text>
							</Button>
								<Text>
								{this.props.error}
								</Text>
						</Form>
						<Button style={{alignSelf: 'flex-end'}} onPress={() => this.props.navigation.navigate('Register') } transparent>
							<Text >Sign up ?</Text>
          				</Button>
					</Content>
			)}
			/>
				</Container>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
	  loading : state.auth.loading,
	  error: state.auth.error,
	  isAuth: state.auth.isAuth,
	  isRegistred: state.auth.isRegistred
	}
  }
  
export default connect(mapStateToProps, { signInAction })(Login)
