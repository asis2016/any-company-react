import React from 'react'
import {HomeBase} from "./Home.style";
import {HeaderLandingPage, LatestProject, PopularProject, Service} from "./components";
import {Brand, Contact, Highlight, PhotoGallery, Testimonial} from '../../components/organisms';
import {landing_page} from '../../api/settings.json'
import {Header} from '../../layouts/Main/components';

/**
 * The Home component is used for the landing page.
 *
 * @constructor
 */
const Home = (): JSX.Element => {

    const settings = {
        brand: landing_page.brand,
        header: landing_page.header,
        photoGallery: landing_page.photo_gallery,
        latestProject: landing_page.latest_project,
        popularProject: landing_page.popular_project,
        testimonial: landing_page.testimonial,
        service: landing_page.service
    }

    return (
        <HomeBase>
            <Header bg={settings.header.bg}>
                <HeaderLandingPage/>
            </Header>
            <LatestProject api={settings.latestProject.api}
                           limit={settings.latestProject.limit}
                           title={settings.latestProject.title}
                           tagline={settings.latestProject.tagline}/>

            <Service api={settings.service.api}
                     limit={settings.service.limit}
                     title={settings.service.title}
                     tagline={settings.service.tagline}/>

            <PopularProject api={settings.popularProject.api}
                            limit={settings.popularProject.limit}
                            title={settings.popularProject.title}
                            tagline={settings.popularProject.tagline}/>
            <Highlight/>

            <PhotoGallery api={settings.photoGallery.api}
                          limit={settings.photoGallery.limit}
                          title={settings.photoGallery.title}
                          tagline={settings.photoGallery.tagline}/>

            <Testimonial api={settings.testimonial.api}
                         limit={settings.testimonial.limit}
                         title={settings.testimonial.title}
                         tagline={settings.testimonial.tagline}/>

            <Brand api={settings.brand.api}
                   limit={settings.brand.limit}
                   title={settings.brand.title}
                   tagline={settings.brand.tagline}/>

            <Contact/>
        </HomeBase>
    );
}

export default Home