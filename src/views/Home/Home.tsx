import React from 'react'
import {HomeBase} from "./Home.style";
import {LatestProject, PopularProject, Service} from "./components";
import {Brand, Contact, Highlight, PhotoGallery, Testimonial} from '../../components/organisms';

const Home = (): JSX.Element => {
    return <HomeBase>

        <LatestProject/>
        <Service/>
        <PopularProject/>
        <Highlight/>

        <PhotoGallery title="Modern Architecture"
                      fetchURL='galleries'
                      description="Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. "/>

        <Testimonial/>
        <Brand/>
        <Contact/>
    </HomeBase>
}

export default Home