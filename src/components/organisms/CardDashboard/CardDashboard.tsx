import React, {useEffect, useState} from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {axiosInstance} from '../../../helpers'
import {CardDashboardBase} from './CardDashboard.style'

interface CardDashboardProps {
    title?: string
    children?: JSX.Element
}

const CardDashboard = ({
                           title,
                           children
                       }: CardDashboardProps): JSX.Element => {

    const [gallery, setGallery] = useState<GalleryProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance.get(`galleries/`)
            .then(response => {
                setGallery(response.data)
                setLoading(false)
            })
    }, [])

    return <CardDashboardBase>
        <Card className="shadow">
            <Card.Header className="py-3">
                <p className="text-primary m-0 fw-bold">
                    {title}
                </p>
            </Card.Header>
            <Card.Body>
                <div className="table-responsive table mt-2" id="dataTable" role="grid"
                     aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Caption</th>
                            <th>Image URL</th>
                            <th>Created date</th>
                            <th>Modified date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {gallery.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <img alt='title'
                                             className="rounded-circle me-2"
                                             width="30"
                                             height="30"
                                             src={item.image_url}/>
                                        {item.title}
                                    </td>
                                    <td>{item.caption}</td>
                                    <td>
                                        <Link to={{pathname: item.image_url}} target={'_blank'}>
                                            {item.image_url.slice(8, 70)}{' ...'}
                                        </Link>
                                    </td>
                                    <td>{item.created}</td>
                                    <td>{item.modified}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Title</th>
                            <th>Caption</th>
                            <th>Image URL</th>
                            <th>Created date</th>
                            <th>Modified date</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </Card.Body>
        </Card>
    </CardDashboardBase>
}

export default CardDashboard