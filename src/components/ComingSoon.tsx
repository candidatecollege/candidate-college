import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ComingSoon = () => {
  return (
    <section className="flex flex-col w-full h-full lg:pt-[140px] mx-auto md:pt-[165px] pt-[185px] px-5 py-8 md:max-w-6xl md:mx-auto justify-center md:items-center relative md:h-3/6 lg:h-screen">
        <Image src={'/decoration/coming.png'} width={0} height={0}
          className='lg: w-[600px] mx-auto' 
          alt='Coming Soon Decoration'
          title='Coming Soon Decoration'
        />

        <h1 className="font-semibold text-primary text-center lg:text-[40px] p-1 md:text-[30px] xl:w-[70%] md:w-[90%] md:text-center leading-[50%]">
          Coming Soon
        </h1>

        <p className="text-gray text-sm text-center leading-2 md:pt-4 pt-2 md:text-center lg:text-base md:w-[70%]">
          This still developing Candidaters! <br />
           Stay tuned
        </p>

        <Link
          href="/home"
          title="Back to Home"
          about="Back to Home"
          className="bg-secondary text-primary font-medium self-center text-center text-base rounded-full px-20 py-2 text-center justify-center md:self-center self-start cursor-pointer mt-2 md:mt-[11px]"
        >
          Back to Home
        </Link>
    </section>
  )
}

export default ComingSoon
