import React from 'react'
import {CommentBase} from './Comment.style'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'

const Comment = (): JSX.Element => {

    return <CommentBase>
        <DashboardLayout title='Comment'>
            <h1>Comment</h1>
        </DashboardLayout>
    </CommentBase>
}

export default Comment