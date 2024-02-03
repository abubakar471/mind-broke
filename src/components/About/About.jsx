import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { Link } from 'react-router-dom'

const About = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className='!bg-white h-[1800px]'>
            <div className='!relative w-full h-full' style={{
                background: `url("/assets/img/pattern-55.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
                <div className='h-[80vh] flex items-center w-[80%] mx-auto my-10'>
                    <div className="w-full md:w-full lg:w-full xl:w-1/2">
                        <h2 className="text-[#A3DAD5] 1300px:text-[40px] 1600px:text-[50px] leading-tight font-semibold about-main-heading">
                            Sufferers of severe <br />
                            sleep apnea run <span className="text-[#5660AA]">three* <br />
                                times the risk of dying.</span>
                        </h2>

                        <p className="py-6 font-semibold about-sub-heading">
                            Treating sleep apnea early and accurately is important. <br />
                            Untreated or poorly treated sleep apnea can lead to.
                        </p>

                        <div className="py-8">
                            <Link to="/" className="bg-[#e4cbec] text-[#555FAB] px-8 rounded-full py-4">
                                BOOK A SLEEP APNEA TEST NOW
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-full lg:w-full xl:w-1/2 flex flex-col items-center lg:items-center xl:items-end justify-items-end gap-y-6">
                        <div className="flex items-center justify-center gap-x-8 gap-y-6">
                            <div className="bg-gradient-to-b from-[#fffefe] via-teal-50 to-teal-200 1300px:w-[220px] 1300px:h-[220px] rounded-3xl flex flex-col items-center justify-center gap-y-4 shadow-sm shadow-[rgba(0,0,0,0.07)]">
                                <img src="/assets/img/pattern-51.png" alt="pattern" className='1300px:w-[120px] object-contain' />

                                <p className="font-semibold font-Poppins text-[#5660AA] text-center 1300px:text-[20px]">Cardiac
                                    <br /> Arrests</p>
                            </div>

                            <div className="bg-gradient-to-b from-[#fffefe] via-teal-50 to-teal-200 1300px:w-[220px] 1300px:h-[220px] rounded-3xl flex flex-col items-center justify-center gap-y-4 shadow-sm shadow-[rgba(0,0,0,0.07)]">
                                <img src="/assets/img/pattern-52.png" alt="pattern" className='1300px:w-[120px] object-contain' />

                                <p className="font-semibold font-Poppins text-[#5660AA] text-center 1300px:text-[20px]">High Blood
                                    <br />  Pressure</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-x-8 gap-y-6">
                            <div className="bg-gradient-to-b from-[#fffefe] via-teal-50 to-teal-200 1300px:w-[220px] 1300px:h-[220px] rounded-3xl flex flex-col items-center justify-center gap-y-4 shadow-sm shadow-[rgba(0,0,0,0.07)]">
                                <img src="/assets/img/pattern-53.png" alt="pattern" className='1300px:w-[120px] object-contain' />

                                <p className="font-semibold font-Poppins text-[#5660AA] text-center 1300px:text-[20px]">Type 2
                                    <br /> Diabetes</p>
                            </div>

                            <div className="bg-gradient-to-b from-[#fffefe] via-teal-50 to-teal-200 1300px:w-[220px] 1300px:h-[220px] rounded-3xl flex flex-col items-center justify-center gap-y-4 shadow-sm shadow-[rgba(0,0,0,0.07)]">
                                <img src="/assets/img/pattern-54.png" alt="pattern" className='1300px:w-[120px] object-contain' />

                                <p className="font-semibold font-Poppins text-[#5660AA] text-center 1300px:text-[20px]">Mental
                                    <br /> Health Issues</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* countup */}
                <div className='w-full absolute top-[45.5%] -translate-y-1/2'>
                    <div className='w-[80%] mx-auto bg-[#555FAB] p-8 rounded-3xl'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className='flex items-center justify-evenly'>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <h3 className="text-white text-3xl 1300px:text-5xl xl:text-6xl 1600px:text-6xl font-semibold font-Poppins">{counterOn && (
                                        <CountUp
                                            start={0}
                                            end={2000}
                                            duration={2}
                                        />
                                    )} +</h3>
                                    <p className="text-[#A2DAD4] text-[20px] 1300px:text-[20px] lg:[25px] xl:text-[25px] 1600px:text-[25px] font-semibold text-center">Tests Done</p>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4">
                                    <h3 className="text-white text-3xl 1300px:text-5xl xl:text-6xl 1600px:text-6xl font-semibold font-Poppins">{counterOn && (
                                        <CountUp
                                            start={0}
                                            end={1.5}
                                            duration={1}
                                        />
                                    )} Lakh+</h3>
                                    <p className="text-[#A2DAD4] text-[20px] 1300px:text-[20px] lg:[25px] xl:text-[25px] 1600px:text-[25px] font-semibold text-center">Appointments over <br />
                                        15 years</p>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4">
                                    <h3 className="text-white text-3xl 1300px:text-5xl xl:text-6xl 1600px:text-6xl font-semibold font-Poppins">{counterOn && (
                                        <CountUp
                                            start={0}
                                            end={40}
                                            duration={3}
                                        />
                                    )}Years</h3>
                                    <p className="text-[#A2DAD4] text-[20px] 1300px:text-[20px] lg:[25px] xl:text-[25px] 1600px:text-[25px] font-semibold text-center">Combined years <br />
                                        of experience</p>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4">
                                    <h3 className="text-white text-3xl 1300px:text-5xl xl:text-6xl 1600px:text-6xl font-semibold font-Poppins">{counterOn && (
                                        <CountUp
                                            start={0}
                                            end={5000}
                                            duration={2}
                                        />
                                    )}+</h3>
                                    <p className="text-[#A2DAD4] text-[20px] 1300px:text-[20px] lg:[25px] xl:text-[25px] 1600px:text-[25px] font-semibold text-center">Patients diagnosed</p>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>

                <div className='w-full absolute bottom-0 1300px:h-[110vh] 1600px:h-[80vh]'>
                    <div className='w-[80%] mx-auto'>
                        <h2 className='text-center text-[#555FAB] 1300px:text-5xl font-semibold font-Poppins'>From sleepless nights to sleeping tight.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
