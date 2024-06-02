import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'

const Pricing = () => {
    return (
        <div id='pricing' className='mt-20'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider my-8'>
                Pricing
            </h2>

            <div className='flex flex-wrap'>
                {pricingOptions.map((option, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className='border border-neutral-700 p-10 rounded-xl'>
                            <p className='text-4xl mb-8'>
                                {option.title}
                                {option.title === "Pro" &&
                                    <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2'>
                                        (Most Popular)
                                    </span>}
                            </p>
                            <p>
                                <span className='text-5xl mr-2'>{option.price}</span>
                                <span className='text-neutral-400 tracking-tight'>/month</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className='flex mt-8 items-center'>
                                        <CheckCircle2 />
                                        <span className='ml-2'>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#"
                                className='w-full h-12 mt-20 p-5 justify-center text-center items-center tracking-tight text-xl inline-flex border border-orange-900 rounded-lg hover:bg-orange-900 transition duration-200'>
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
