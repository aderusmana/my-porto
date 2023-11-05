'use client';
import React, { useState } from 'react';

import Circles from '@/components/Circles';

import { motion } from 'framer-motion';
import Bulb from 'components/Bulb';
import { fadeIn } from '/variants';
import { HiArrowRight } from 'react-icons/hi';
import Swal from 'sweetalert2';

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endPoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endPoint, options);
      if (response.status === 200) {
        console.log('Message sent.');
        setEmailSubmitted(true);
        showSuccessAlert();
        // Tampilkan pesan sukses kepada pengguna (contoh: modal, pemberitahuan, dll.)
      } else {
        console.log('Error sending message.');
        // Tampilkan pesan kesalahan kepada pengguna (contoh: modal, pemberitahuan, dll.)
      }
    } catch (error) {
      console.error('Error:', error);
      // Tampilkan pesan kesalahan kepada pengguna (contoh: modal, pemberitahuan, dll.)
    }
  };
  const showSuccessAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Email Sent!',
      text: 'Your email has been successfully sent.',
    }).then((result) => {
      if (result.isConfirmed) {
        clearForm();
      }
    });
  };

  const clearForm = () => {
    // Hapus nilai-nilai dalam elemen formulir
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    // Reset emailSubmitted ke false
    setEmailSubmitted(false);
  };

  return (
    <div className={'h-full bg-primary/30 py-36 flex items-center'}>
      <Circles />
      <div className={'container mx-auto'}>
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Left Column (Will be a column on mobile) */}
          <div
            className={
              'text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 ' +
              'xl:mb-0'
            }
          >
            <motion.h2
              variants={fadeIn('down', 0.4)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className={'h2 xl:mt-2'}
            >
              Lets
              <span className={'text-accent'}> Connect .</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className={'mb-4 max-w-[400px] mx-auto lg:mx-0'}
            >
              Im currently looking for a new opportunities, my inbox is always
              open . Whether you have a question or just want to say hi, ill try
              best to get back to you !
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className="flex gap-x-4"
            >
              {/* Alamat, Nomor Telepon, dan Peta (Tampilkan hanya pada mode md) */}
              <div className="hidden xl:block">
                <p>Address : Sunter Jaya no 29</p>
                <p>No Telp: 0897-9669-187</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.339402098005!2d106.87218850761792!3d-6.152867582683072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f572500187d9%3A0x818385cc09e808f4!2sSunter%20Jaya%2C%20Tanjung%20Priok%2C%20North%20Jakarta%20City%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1699083311955!5m2!1sen!2sus"
                  width="500"
                  height="300"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Will be a column on mobile) */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'w-full xl:max-w-[50%] mt-10'}
          >
            <form className="flex flex-col gap-y-2 " onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="bang John"
                    className="w-full border border-gray-300  rounded-md py-2 px-3 bg-primary"
                  />
                </div>
                <div className="w-[48%]">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="bangjohn@gmail.com"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 bg-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Just saying hi"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 bg-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={"Let's talk about ..."}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 bg-primary"
                ></textarea>
              </div>
              <button className="text-accent  hover:text-white bg-transparent hover:bg-accent border border-accent hover:border-gray-300 rounded-md py-2 px-4 transition-colors relative">
                <span className="flex items-center justify-center">
                  Lets Talk
                  <HiArrowRight className="ml-2 text-2xl transition-transform duration-300 transform hover:translate-x-2 " />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;
