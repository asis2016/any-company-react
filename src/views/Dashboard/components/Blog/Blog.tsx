import React from 'react'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'
import {BlogBase} from './Blog.style'

const Blog = (): JSX.Element => {

    return <BlogBase>
        <DashboardLayout title='Blog'>
            <h1>Blog</h1>
        </DashboardLayout>
    </BlogBase>
}

export default Blog