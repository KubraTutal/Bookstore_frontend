import React, { useState } from 'react';
import styles from '../signup/SignUp.module.css';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const RegisterSchema = Yup.object().shape({
  email: Yup.string().required('Mail adresi zorunlu alandır').email('Lütfen geçerli bir email adresi giriniz.'),
  password: Yup.string().required('Şifre zorunlu alandır').min(6, 'Şifre en az 6 karakterden oluşmalıdır.'),
  name: Yup.string().required('Kullanıcı adı zorunlu alandır'),
  // passwordConfirm: Yup.string()
  //   .oneOf([Yup.ref('password'), null], 'Şifreler uyuşmuyor.')
  //   .required('Şifre tekrarı zorunlu alandır.'),
  // terms: Yup.bool().oneOf([true], 'Şartları kabul etmelisiniz.')
})


const SignUp = () => {
  const navigate = useNavigate();
  
  const handleRegister = async (values) => {
    console.log('handleSubmit çağrıldı')
    try {
      let registerResponse = await axios.post('/auth/register', values)
      if (registerResponse.data?._id) {
        navigate('/Login')
        toast.success('Kaydınız oluşturuldu')
      }
      console.log(registerResponse.data)
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message)
      }
      console.log('Register Error', error.response.data)
    }
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    console.log("Username", values.name);
  }
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={values => handleRegister(values)}
        validationSchema={RegisterSchema}
      >
        {({ handleChange, handleSubmit, values, touched, errors, handleBlur }) => (
          <>
            <section className={styles['w3l-login-6']}>
              <div className={styles['login-hny']}>
                <div className={styles['form-content']}>
                  <div className={styles['form-right']}>
                    <div className={styles['overlay']}>
                      <div className={styles['grid-info-form']}>
                        <h5>Hoşgeldin</h5>
                        <h3>Bize Katıl</h3>
                        <p>BookStore uygulamasında yeni ürünlerin bildirimlerini almak ve size özel kampanyalardan yararlanmak için hemen bize katıl</p>
                        <a href="/login" className={`${styles['read-more-1']} btn`}>Hesabın Var Mı?</a>
                      </div>
                    </div>
                  </div>
                  <div className={styles['form-left']}>
                    <div className={styles['middle']}>
                      <h4>BİZE KATIL</h4>
                      <p>Hemen Ücretsiz Hesabını Oluştur</p>
                    </div>
                    <form action="#" method="post" className={styles['signup-form']}>
                      <div className={`${styles['form-input']}`}>
                        <label>
                          Kullanıcı Adınız
                          <input
                            onChange={handleChange('name')}
                            onBlur={handleBlur('name')}
                            type="text"
                            name="username"
                            value={values.name}
                          />
                          {errors.name && touched.name ?
                            <span className=' text-red-600'>{errors.name}</span> : null
                          }
                        </label>
                      </div>
                      <div className={`${styles['form-input']}`}>
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
                      <div className={`${styles['form-input']}`}>
                        <label>
                          Şifre
                          <input
                            onChange={handleChange('password')}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            type='password'
                            name="password"
                            placeholder="Şifre"
                            required />
                          {errors.password && touched.password ?
                            <span className=' text-red-600 '>{errors.password}</span> : null
                          }
                        </label>
                      </div>
                      <div className={`${styles['form-input']}`}>
                        <label>
                          Şifre Tekrar
                          <input
                            type='password'
                            name='passwordConfirm'
                          />
                          {errors.passwordConfirm && touched.passwordConfirm ?
                            <span className=' text-red-600 '>{errors.passwordConfirm}</span> : null
                          }
                        </label>
                      </div>
                      <label className={styles['container']}>Tüm <a href="#" className={`${styles['text']} ${styles['text-blue-800']}`}>Şartları</a> Kabul Ediyorum.<a href="#" className={styles['text']}>Privacy</a>
                        <input type="checkbox" />
                        <span className={styles['checkmark']} />
                      </label>
                      <Button className="btn" onClick={handleSubmit}>Giriş Yap</Button>
                    </form>
                    <div className={styles['copy-right']}>
                      <p>© 2024 BookStore | Tüm Hakları Saklıdır | Design by <br /> Furkan Gümüş & Kübra Tutal</p>
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
}

export default SignUp;