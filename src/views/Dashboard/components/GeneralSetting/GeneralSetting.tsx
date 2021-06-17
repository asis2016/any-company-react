import React from 'react'
import {GeneralSettingBase} from './GeneralSetting.style'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'

const GeneralSetting = (): JSX.Element => {

    return <GeneralSettingBase>
        <DashboardLayout title='Comment'>
            <h1>Comment</h1>
        </DashboardLayout>
    </GeneralSettingBase>
}

export default GeneralSetting