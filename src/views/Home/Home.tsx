import React from 'react'
import {HomeBase} from "./Home.style";
import {Service, HeaderBlue, LatestProject, PopularProject} from "./components";
import {Brand, Contact, Highlight, PhotoGallery, Testimonial} from '../../components/organisms';

const Home = (): JSX.Element => {
    return <HomeBase>

        <LatestProject/>
        <Service/>
        <PopularProject/>
        <Highlight/>
        <PhotoGallery/>
        <Testimonial/>
        <Brand/>
        <Contact/>
    </HomeBase>
}

export default Home