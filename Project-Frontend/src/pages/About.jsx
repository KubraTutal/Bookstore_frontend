import React from 'react';

const About = () => {
  return (
    <>
      <div className="container mt-5 text-center" style={{ maxWidth: '900px' }}>
        <img
        
        src="./src/images/logo.jpg"
        alt='about logo'
        style={{ width: '200px', height: '200px'}}
        className="mx-auto mb-4"
        />
      <h4 className="mb-4" style={{ color: 'red',fontSize:20 }}>HAKKIMIZDA</h4>
      <p>
        Paper Cities, 2024' de okuma tutkusunu paylaşan bir grup kitapsever tarafından kuruldu.
        Amacımız, her yaştan okuyucuya hitap eden geniş kitap koleksiyonumuzla
        okuma deneyiminizi keyifli ve unutulmaz kılmaktır.
      </p>
      <p>
      Paper Cities olarak, okuma alışkanlığını teşvik etmeyi ve kültür farklılıklarının paylaşılmasını desteklemeyi hedefliyoruz. Sizlerle birlikte büyüyen ve gelişen bir topluluk olmak en heyecan verici hedeflerimizden bir tanesi.
      </p>
      <p>
        Sitemizde, farklı türlerde kitapları bulabilir, yeni yazarları keşfedebilir ve
        en sevdiğiniz kitapları satın alabilirsiniz. Ayrıca, düzenlediğimiz etkinliklere ve
        okuma gruplarımıza katılarak diğer kitapseverlerle tanışma fırsatını elde edebilirsiniz.
      </p>
      <p>
        Okurlarımızın memnuniyeti bizim için ön plandadır. Sorularınız veya önerileriniz
        için her zaman bizlere ulaşabilirsiniz. Sizlere daha iyi hizmet sağlayabilmek için
        var gücümüzle çalışıyoruz.
      </p>
      <p>
        Bizi tercih ettiğiniz için teşekkür eder, kitap okuma yolculuğunuzda
        sizlere eşlik etmekten mutluluk duyarız.
      </p>
    </div>
  
     
    </>
  )
}

export default About
