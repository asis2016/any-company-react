import React, {useEffect} from 'react'
import {HomeBase} from "./Home.style";
import {Brand, HeaderLandingPage, LatestProject, PopularProject, Service} from "./components";
import {Contact, Highlight, PhotoGallery, Testimonial} from '../../components/organisms';
import {landing_page} from '../../api/settings.json'
import {Header} from '../../layouts/Main/components';
import axios from 'axios';

/**
 * The Home component is used for the landing page.
 *
 * @returns A JSX.Element
 */
const Home = (): JSX.Element => {

    const settings = {
        brand: landing_page['brands'],
        gallery: landing_page['gallery'],
    }

    return (
        <HomeBase>
            <Header>
                <HeaderLandingPage/>
            </Header>
            <LatestProject/>
            <Service/>
            <PopularProject/>
            <Highlight/>
            <PhotoGallery
                title={settings.gallery.intro_title}
                fetchURL={settings.gallery.fetch_url}
                description={settings.gallery.intro_tagline}
            />
            <Testimonial fetchURL="testimonials"/>
            <Brand/>
            <Contact/>
        </HomeBase>
    );
}

export default Home