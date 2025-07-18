import React from 'react'
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import logo from '../assets/images/logo.svg';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await customFetch.post('/auth/login', data);
        const token = response.data.token;

        // Store token in localStorage
        localStorage.setItem('token', token);

        toast.success('Login successful');
        return redirect('/dashboard');
    } catch (error) {
        console.error("Login error:", error?.response?.data);
        toast.error(error?.response?.data?.msg || "Something went wrong");
        return null;
    }
};



const Login = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (

        <Wrapper>
            <Form method='post' className="form">
                <div className="logo-container">
                    <img src={logo} alt="Job Portal" className="logo" />
                </div>
                <h4>login</h4>
                <FormRow type="email" name="email" defaultValue="nikita123" />
                <FormRow type="password" name="password" defaultValue="secret123" />
                <button type="submit" className="btn btn-block">Login</button>
                <button type="button" className="btn btn-block">Explore</button>
                <p>
                    Not a member yet?
                    <Link to="/register" className="member-btn">Register</Link>
                </p>


            </Form>
        </Wrapper>
    );

};

export default Login