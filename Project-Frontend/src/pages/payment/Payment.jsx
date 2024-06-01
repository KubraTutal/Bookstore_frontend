
import React from 'react';
import '../login/style.css';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
  adsoyad: Yup.string().required(' Ad-soyad zorunlu alandır').min(4, 'Lütfen doğru girdiğinizden emin olunuz'),
  adsoyad2: Yup.string().required(' Ad-soyad zorunlu alandır').min(4, 'Lütfen doğru girdiğinizden emin olunuz'),
  adress: Yup.string().required('Adres zorunlu alandır').min(10, 'Lütfen tam adresi girdiğinizden emin olunuz'),
  tel: Yup.string().required('Telefon zorunlu alandır').matches(/^[0-9]{10}$/, 'Lütfen kontrol ediniz'),
  tarih: Yup.string().required('Son Kullanma Tarihi zorunlu alandır').matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Lütfen kontrol ediniz'),
  kartno: Yup.string().required('Kart numarası zorunlu alandır').matches(/^[0-9]{16}$/, 'Lütfen kontrol ediniz'),
  cvc: Yup.string().matches(/^[0-9]{3}$/, 'Geçersiz CVV/CVC kodu').required('CVV/CVC kodu zorunludur'),
})

const Payment = () => {

  return (
    <>
      <Formik
        initialValues={{ adsoyad: ' ', adsoyad2: ' ' ,adress:' ',tel:' ',tarih:' ',kartno:' ',cvc:' ',}}
        validationSchema={LoginSchema}
      >
        {({ handleChange, handleSubmit, values, touched, errors, handleBlur }) => (
          <>
            <section className="w3l-login-6">
              <div className="login-hny">
                <div className="form-content">

                  <div className="form">
                    <img

                      src="./src/images/logo.jpg"
                      alt='about logo'
                      style={{ width: '350px', height: '350px' }}
                      className="mx-auto mb-4"
                    />
                  </div>

                  <div className="form-left">
                    <div className="middle">
                      <h4>ADRES BİLGİSİ</h4>
                    </div>
                    <form action="#" method="post" className="signin-form">
                      <div className="form-input">
                        <label>
                          Adınızı-Soyadınızı Giriniz
                          <input
                            onChange={handleChange('adsoyad')}
                            onBlur={handleBlur('adsoyad')}
                            type="text"
                            name='adsoyad'
                            value={values.adsoyad}
                            placeholder="ad-Soyad"
                          />
                          {errors.adsoyad && touched.adsoyad ?
                            <span className=' text-red-600'>{errors.adsoyad}</span> : null
                          }
                        </label>
                      </div>
                      <div className="form-input">
                        <label>
                          Teslimat adresini Giriniz
                          <input
                            onChange={handleChange('adress')}
                            onBlur={handleBlur('adress')}
                            type="text"
                            name='adress'
                            value={values.adress}
                            placeholder="adres"
                          />
                          {errors.adress && touched.adress ?
                            <span className=' text-red-600'>{errors.adress}</span> : null
                          }
                        </label>
                        
                      </div>

                      <div className="form-input">
                        <label>
                          Telefon Numaranızı Giriniz
                          <input
                            onChange={handleChange('tel')}
                            onBlur={handleBlur('tel')}
                            type="string"
                            name='tel'
                            value={values.tel}
                            placeholder="telefon"
                          />
                          {errors.tel && touched.tel ?
                            <span className=' text-red-600'>{errors.tel}</span> : null
                          }
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="form-left">
                    <div className="middle">
                      <h4>KART BİLGİSİ</h4>
                    </div>
                    <form action="#" method="post" className="signin-form">
                      <div className="form-input">
                        <label>
                          Kart Sahibinin Adını Giriniz
                          <input
                            onChange={handleChange('adsoyad2')}
                            onBlur={handleBlur('adsoyad2')}
                            type="text"
                            name='adsoyad2'
                            value={values.adsoyad2}
                            placeholder="ad-Soyad"
                          />
                          {errors.adsoyad2 && touched.adsoyad2 ?
                            <span className=' text-red-600'>{errors.adsoyad2}</span> : null
                          }
                        </label>
                      </div>
                      <div className="form-input">
                        <label>
                          Kart Numarasını Giriniz
                          <input
                            onChange={handleChange('kartno')}
                            onBlur={handleBlur('kartno')}
                            type="text"
                            name='kartno'
                            value={values.kartno}
                            placeholder="kart no"
                          />
                          {errors.kartno && touched.kartno ?
                            <span className=' text-red-600'>{errors.kartno}</span> : null
                          }
                        </label>
                        
                      </div>

                      <div className="form-input">
                        <label>
                          CVC/CVV Kodu
                          <input
                            onChange={handleChange('cvc')}
                            onBlur={handleBlur('cvc')}
                            type="string"
                            name='cvc'
                            value={values.cvc}
                            placeholder="cvc/cvv"
                          />
                          {errors.cvc && touched.cvc ?
                            <span className=' text-red-600'>{errors.cvc}</span> : null
                          }
                        </label>
                      </div>

                      <div className="form-input">
                        <label>
                          Son Kullanma Tarihi
                          <input
                            onChange={handleChange('tarih')}
                            onBlur={handleBlur('tarih')}
                            type="string"
                            name='tarih'
                            value={values.tarih}
                            placeholder="ay/yıl"
                          />
                          {errors.tarih && touched.tarih ?
                            <span className=' text-red-600'>{errors.tarih}</span> : null
                          }
                        </label>
                      </div>

                      <Button className="btn" onClick={handleSubmit}>Ödemeyi Tamamla</Button>
                    </form>
                    <div className="copy-right text-center">
                      <p>© 2024 BookStore | Tüm Hakları Saklıdır | <br /> Design by Furkan Gümüş & Kübra Tutal</p>
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


export default Payment