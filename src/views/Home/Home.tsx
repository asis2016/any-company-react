import React from 'react'
import {HomeBase} from "./Home.style";
import {HeaderLandingPage, LatestProject, PopularProject, Service} from "./components";
import {Brand, Contact, Highlight, PhotoGallery, Testimonial} from '../../components/organisms';
import {landing_page} from '../../api/settings.json'
import {Header} from '../../layouts/Main/components';

/**
 * Home component is used for the landing page.
 * */
const Home = (): JSX.Element => {

    const settings = {
        brand: landing_page['brands'],
        gallery: landing_page['gallery'],
    }

    return <HomeBase>
        <Header>
            <HeaderLandingPage/>
        </Header>
        <LatestProject/>
        <Service/>
        <PopularProject/>
        <Highlight/>

        <PhotoGallery title={settings.gallery.intro_title}
                      fetchURL={settings.gallery.fetch_url}
                      description={settings.gallery.intro_tagline}/>

        <Testimonial fetchURL="testimonials"/>
        <Brand/>
        <Contact/>
    </HomeBase>
}

export default Home