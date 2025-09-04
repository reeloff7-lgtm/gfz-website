import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function Privacyy() {
  const [supportMail] = useState(`support@gfz.com`);
  return (
    <>
      <Navbar/>

      <div className='privacy p-5 max-w-[800px] m-auto'>

        <h1 className='text-center text-2xl text-amber-500 p-5'>Privacy Policy</h1>

        <p>Effective date: August 31, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to GFZ. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal information you provide directly (e.g., email, username).</li>
          <li>Payment information to process purchases.</li>
          <li>Technical information such as browser type, IP address, and usage data.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information to provide and improve our services, process payments, communicate with you, and ensure security.
        </p>

        <h2>4. Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with trusted third-party services that help us operate, such as payment processors.
        </p>

        <h2>5. Security</h2>
        <p>
          We implement reasonable measures to protect your information from unauthorized access, alteration, or disclosure.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You can access, update, or delete your personal information by contacting us at {supportMail}.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>
{/*
        <p style={{ marginTop: "30px", textAlign: "center" }}>
          &copy; 2025 GFZ. All rights reserved.
        </p> */}
      </div>

      <Footer/>
    </>
  )
}

export default Privacyy
