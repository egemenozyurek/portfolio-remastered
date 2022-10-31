import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {}

function ContactMe({ }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ozyurekegemen95@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}.${formData.message} (${formData.email})`
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-25'>
                <h4 className='text-4xl font-comfortaa font-semibold text-center py-10'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#21F8F6]/50 underline'>Let's talk.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-8 justify-center'>
                        <PhoneIcon className='text-[#21F8F6] h-7 w-7 animate-pulse' />
                        <p className='text-2xl font-comfortaa'>+353 083 203 31 40</p>
                    </div>
                    <div className='flex items-center space-x-8 justify-center'>
                        <EnvelopeIcon className='text-[#21F8F6] h-7 w-7 animate-pulse' />
                        <p className='text-2xl font-comfortaa'>ozyurekegemen95@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-8 justify-center'>
                        <MapPinIcon className='text-[#21F8F6] h-7 w-7 animate-pulse' />
                        <p className='text-2xl font-comfortaa'>Dublin, Ireland</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#27F8F6] py-5 px-10 rounded-md text-black font-bold font-comfortaa text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe