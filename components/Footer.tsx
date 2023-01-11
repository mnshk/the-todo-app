import React from 'react'
import { FiLink } from 'react-icons/fi'

export default function Footer() {
    return (
        <div className='p-5 pt-40 dark:bg-slate-900 bg-slate-300 text-slate-500 flex flex-col justify-center dark:text-slate-600 font-inter text-sm text-center'>
            <div className='text-xs'>
                Designed by Munish K
            </div>
            <div className='text-xs flex justify-center items-center'>
                <a href="https://munish.dev" className='text-teal-700'>
                    <div className="flex items-center">
                        <FiLink />
                        <div>
                            &nbsp;munish.dev
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
