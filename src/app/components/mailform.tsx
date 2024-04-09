'use client';
import { useState, useMemo, useRef } from 'react';
import { Input, Textarea } from '@nextui-org/react';
import emailjs from '@emailjs/browser';

export default function MailForm() {
    const form = useRef(null);

    const validateEmail = (mailValue: string) => mailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if (form.current) {
            emailjs
            .sendForm('service_uqp42mn', 'template_cam0i4u', form.current, {
                publicKey: '2gh4dkYQw-bT5Z6s9',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        }
        
    };

    return (
        <>
            <div className='p-8 mx-auto w-2/4 bg-gradient-to-l from-indigo-500 rounded-xl'>
                <form ref={form} onSubmit={sendEmail} className="max-w-sm flex flex-col flex-wrap gap-4 text-[#5E6697]">
                    <Input type="name"
                        label="Your Name"
                        placeholder='Input Your Name'
                        labelPlacement='outside'
                        isClearable
                        startContent={
                            <i className="icon-form bi bi-person-circle" />
                        }
                        name='name'
                        autoComplete='given-name'
                    />
                    <Input type="email"
                        label="Email"
                        placeholder='Input Your Email'
                        labelPlacement='outside'
                        isClearable
                        startContent={
                            <i className="icon-form bi bi-envelope" />
                        }
                        name='email'
                        autoComplete='email'
                    />
                    <Textarea
                        // isRequired
                        name='message'
                        label="Your Message"
                        labelPlacement="outside"
                        placeholder="Enter your message"
                    />
                    <button
                        className="text-white bg-blue-700
                 hover:bg-blue-800 
                 focus:ring-4 focus:outline-none focus:ring-blue-300 
                 font-medium rounded-lg text-sm 
                 w-full sm:w-auto px-5 py-2.5 
                 text-center 
                 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </>

    );
}