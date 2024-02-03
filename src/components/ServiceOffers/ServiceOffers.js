import "./ServiceOffers.css"
import React from 'react'

const ServiceOffers = () => {
    return (
        <div style={{ background: `url("/assets/img/pattern-39.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-full min-h-[50vh] py-20">
            <h2 className="text-6xl text-[#555FAB] font-semibold font-Poppins text-center">Remesleep - India’s First At-Home,</h2>
            <h2 className="text-6xl text-[#555FAB] font-semibold font-Poppins text-center my-4">Expert-Guided Sleep Care</h2>

            <div className="service-offers-cards-container-one flex items-center justify-center lg:justify-between xl:justify-between flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap gap-y-4 gap-x-8">
                <div className="flex flex-col items-center justify-items-end justify-end gap-y-0 w-[400px] h-[250px] rounded-3xl pb-4" style={{
                    background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.005), #555FAB),
url("/assets/img/convenience.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                }}>
                    <h2 className="text-white text-2xl text-center font-semibold font-Poppins">Convenience</h2>

                    <p className="text-white text-center text-md px-6">
                        Sleep Apnea test at home with
                        India’s first & only contactless device
                    </p>
                </div>

                <div className="flex flex-col items-center justify-items-end justify-end gap-y-0 w-[400px] h-[250px] rounded-3xl pb-4" style={{
                    background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.005), #555FAB),
url("/assets/img/patient-432.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                }}>
                    <h2 className="text-white text-2xl text-center font-semibold font-Poppins">Personal Coach</h2>

                    <p className="text-white text-center text-md px-6">
                        Personalised, guided programs
                        with a dedicated sleep coach
                    </p>
                </div>

                <div className="flex flex-col items-center justify-items-end justify-end gap-y-0 w-[400px] h-[250px] rounded-3xl pb-4" style={{
                    background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.005), #555FAB),
url("/assets/img/successful-team.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                }}>
                    <h2 className="text-white text-2xl text-center font-semibold font-Poppins">Industry Experts</h2>

                    <p className="text-white text-center text-md px-6">
                        Skilled team of somnologists &
                        therapists with 40+ years of experience
                    </p>
                </div>
            </div>

            <div className="service-offers-cards-container-two mx-auto flex items-center flex-wrap gap-y-4 gap-x-8">
                <div className="flex flex-col items-center justify-items-end justify-end gap-y-0 w-[400px] h-[250px] rounded-3xl pb-4" style={{
                    background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.005), #555FAB),
url("/assets/img/advanced-solutions.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                }}>
                    <h2 className="text-white text-2xl text-center font-semibold font-Poppins">Advanced Solutions</h2>

                    <p className="text-white text-center text-md px-6">
                        Multidimensional approach including
                        CPAP therapy, sleep apnea solutions,
                        lifestyle changes, and sleep therapy.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-items-end justify-end gap-y-0 w-[400px] h-[250px] rounded-3xl pb-4" style={{
                    background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.005), #555FAB),
url("/assets/img/patient-433.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"
                }}>
                    <h2 className="text-white text-2xl text-center font-semibold font-Poppins">Follow-ups</h2>

                    <p className="text-white text-center text-md px-6">
                        Regular monitoring to ensure
                        therapy effectiveness
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceOffers
