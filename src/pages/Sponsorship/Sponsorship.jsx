import React, { lazy, Suspense } from 'react'
import HTMLFlipBook from 'react-pageflip';
import Loading from "../../components/Loading/loading"
const SponsorSection = lazy(() => import("../../components/sponsorSection/SponsorSection"));

function Sponsorship() {
    return (
        <>
            <h1 className="text-center mt-4">SPONSORSHIP</h1>
            <div className="col-11 mx-auto m-3  d-flex justify-content-center">
                <img src="/Sponsorship/SponsorshipPic.webp" loading="lazy" className="col-12" alt="team" />
            </div>
            <div classname="p-2 col-10">
                <p className="fs-5 m-4 p-4 text-center text-dark bg-light ">
                    Mars Rover Manipal is a leading student project team of Manipal Academy of Higher Education. With each subsequent year, the team has built a better, more capable design with a better performance than the previous one. The team has been a consistent performer in University Rover Challenge, organized by Mars Society. Mars Society is the body concerned with the establishment of humans on Mars in future. The event is judged and attended by leading scientists of the world. Tech heads from all over the world, who will one day be leading technocrats, take part in the event. Our partner sponsors are featured in our merchandise which we wear in all our events. Our T-Shirt also has stickers of our sponsor companies. We promote our sponsors from time to time on our social platforms like Facebook, Instagram and Youtube. Besides the competition, we put our work on display at TechTatva, MIT's national level technical festival. A fest with a reach like such can be a great platform for your company for advertisement. We regularly take part in tech competitions, where our rover has constantly performed well.
                </p>
            </div>
            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto m-5 p-4">
                <img
                    loading="lazy"
                    className="col-6 col-lg-3 img-fluid"
                    src="/photos20/PCB Power.webp"
                    alt="team"
                />
                <div className="col-6  my-auto" >
                    <p className="fs-5">
                        Sponsoring a team like us goes a long way in ensuring the Corporate Social Responsibility for your company. When you invest in us, you invest in the future of education. An autonomous rover can open doors to a large number of possibilities, ranging from disaster management to environment cleanliness. Your investment will allow us to further our research in to various fields, where humans can put these robots to use. Your help to us will further enhance the image of your company as one that works towards a better future for all of us.
                    </p>

                </div>
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
                <img
                    loading="lazy"
                    className="col-10 mx-auto img-fluid"
                    src="/photos20/PCB Power.webp"
                    alt="team"
                />
                <div className="col-10 mx-auto text-center">
                    <p className="fs-6 ">
                        Sponsoring a team like us goes a long way in ensuring the Corporate Social Responsibility for your company. When you invest in us, you invest in the future of education. An autonomous rover can open doors to a large number of possibilities, ranging from disaster management to environment cleanliness. Your investment will allow us to further our research in to various fields, where humans can put these robots to use. Your help to us will further enhance the image of your company as one that works towards a better future for all of us.
                    </p>
                </div>
            </div>
            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto bg-light text-dark m-5 p-4">
                <div className="col-6  my-auto ">
                    <p className="fs-5 ">
                        Home to about 20,000 students from all parts of the world, very few colleges provide diversity, as Manipal Academy of Higher Education does. Joining our family of sponsors provides your company exposure to all of these students. Your company will come in direct contact with innovative and dedicated students, who are experienced and more than able to handle situations. As one of our sponsors, your company is invited to all our events and can visit our workshop any time. Our workshop is a place where you can have access to bright engineering students, who can be an asset to any company they join.
                    </p>
                </div>
                <img
                    loading="lazy"
                    className="col-6 col-lg-3 img-fluid"
                    src="/Sponsorship/tushaar_wsu.webp"
                    alt="team"
                />
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto m-3">
                <div className="col-10 mx-auto text-center">
                    <p className="fs-6 ">
                        Home to about 20,000 students from all parts of the world, very few colleges provide diversity, as Manipal Academy of Higher Education does. Joining our family of sponsors provides your company exposure to all of these students. Your company will come in direct contact with innovative and dedicated students, who are experienced and more than able to handle situations. As one of our sponsors, your company is invited to all our events and can visit our workshop any time. Our workshop is a place where you can have access to bright engineering students, who can be an asset to any company they join.
                    </p>
                </div>
                <img
                    loading="lazy"
                    className="col-10 mx-auto img-fluid"
                    src="/Sponsorship/tushaar_wsu.webp"
                    alt="team"
                />
            </div>

            <Suspense fallback={<Loading />}>
                <SponsorSection />
            </Suspense>

            <div className="bg-dark my-3">
                <p className="fs-1 text-center my-0">Brochure </p>

                <div className=" d-none d-sm-flex justify-content-center ">
                    <HTMLFlipBook width={670} height={480}>
                        <div className="demoPage  ">
                            <img src="/brochure/1.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage ">
                            <img src="/brochure/2.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/3.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/4.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/5.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/6.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/7.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/8.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/9.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/10.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                    </HTMLFlipBook>
                </div>


                <div className=" d-flex d-sm-none justify-content-center ">
                    <HTMLFlipBook width={340} height={240}>
                        <div className="demoPage  ">
                            <img src="/brochure/1.webp" loading="lazy" className="col-12 " alt="brochure" />
                        </div>
                        <div className="demoPage ">
                            <img src="/brochure/2.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/3.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/4.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/5.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/6.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/7.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/8.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/9.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                        <div className="demoPage">
                            <img src="/brochure/10.webp" loading="lazy" className="col-12" alt="brochure" />
                        </div>
                    </HTMLFlipBook>
                </div>
            </div>

        </>
    )
}

export default Sponsorship
