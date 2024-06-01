import React, { useState } from 'react';
import '../login/style.css';
import { Button } from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Mail adresi zorunlu alandır').email('Lütfen geçerli bir email adresi giriniz.'),
    password: Yup.string().required('Şifre zorunlu alandır').min(6, 'Şifre en az 6 karakterden oluşmalıdır.'
    ).matches(
        /[a-z]/,
        'Şifre en az bir küçük harf içermelidir.'
    ).matches(
        /[A-Z]/,
        'Şifre en az bir büyük harf içermelidir.'
    ).matches(
        /\d/,
        'Şifre en az bir rakam içermelidir.'
    )
})

const LoginSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        try {

            let loginResponse = await axios.post('/auth/login', values)
            const token = loginResponse.data.token
            if (token) {
                const a = localStorage.setItem('token', token);
                console.log(a)
                navigate('/')
                toast.success('Hoşgeldiniz')
            }
            console.log(loginResponse.data)
        } catch (error) {
            if (error.response) {
                return toast.error(error.response.data.message)
            }
            console.log('Login Error', error.response.data)
        }
        console.log("Email:", values.email);
        console.log("Password:", values.password);
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => handleLogin(values)}
                validationSchema={LoginSchema}
            >
                {({ handleChange, handleSubmit, values, touched, errors, handleBlur }) => (
                    <>
                        <section className="w3l-login-6">
                            <div className="login-hny">
                                <div className="form-content">
                                    <div className="form-left">
                                        <div className="middle">
                                            <h4>GİRİŞ YAP</h4>
                                            <p>Hesabına Giriş Yap</p>
                                        </div>
                                        <form action="#" method="post" className="signin-form">
                                            <div className="form-input">
                                                <label>
                                                    Email
                                                    <input
                                                        onChange={handleChange('email')}
                                                        onBlur={handleBlur('email')}
                                                        type="text"
                                                        name='email'
                                                        value={values.email}
                                                    />
                                                    {errors.email && touched.email ?
                                                        <span className=' text-red-600'>{errors.email}</span> : null
                                                    }
                                                </label>
                                            </div>
                                            <div className="form-input">
                                                <label>Şifre</label>
                                                <input
                                                    onChange={handleChange('password')}
                                                    value={values.password}
                                                    onBlur={handleBlur('password')}
                                                    type={showPassword ? 'text' : 'password'}
                                                    name="password"
                                                    placeholder="Şifre"
                                                    required />
                                                {errors.password && touched.password ?
                                                    <span className=' text-red-600 '>{errors.password}</span> : null
                                                }
                                                <Button onClick={handleTogglePasswordVisibility}>
                                                    {showPassword ? "Şifreyi Gizle" : "Şifreyi Göster"}
                                                </Button>
                                            </div>
                                            <Button className="btn" onClick={handleSubmit}>Giriş Yap</Button>
                                        </form>
                                        <div className="copy-right text-center">
                                            <p>© 2024 BookStore | Tüm Hakları Saklıdır | <br /> Design by Furkan Gümüş & Kübra Tutal</p>
                                        </div>
                                    </div>
                                    <div className="form-right">
                                        <div className="overlay">
                                            <div className="grid-info-form">
                                                <h3>Giriş Yap ve Fırsatları Kaçırma</h3>
                                                <p>"Kimi insan gölgeleri kucaklar durur; <br /> sonunda senin gibi mutluluğun gölgesini bulur." <br /> WILLIAM SHAKESPEARE </p>
                                                <a href="/Signup" className="read-more-1 btn">Hesabın Yok Mu?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </Formik>
        </>
    );
};

export default LoginSignUp;
