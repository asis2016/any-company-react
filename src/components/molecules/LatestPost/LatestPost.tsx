import React, {useEffect, useState} from 'react'
import {axiosInstance} from '../../../helpers'
import {LatestPostBase} from './LatestPost.style'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

interface LatestPostProps {
    title?: string
    api?: string
}

interface LatestDataProps {
    id?: string
    title?: string
}

const LatestPost = ({
                        title,
                        api
                    }: LatestPostProps): JSX.Element => {

    const [data, setData] = useState<LatestDataProps[]>([])

    useEffect(() => {
        axiosInstance.get(`${api}`)
            .then(response => setData(response.data))
    }, [])

    return <LatestPostBase>
        <Card className="shadow mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h6 className="text-primary fw-bold m-0">Latest {title}</h6>
                <div className="dropdown no-arrow">
                    <button className="btn btn-link btn-sm dropdown-toggle"
                            aria-expanded="false"
                            data-bs-toggle="dropdown"
                            type="button">
                        {/* todo: <FontAwesomeIcon icon={faCoffee} />*/}
                    </button>
                    <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                        <p className="dropdown-header">Options:</p>
                        <Link className="dropdown-item"
                              to="#">
                            &nbsp;See all
                        </Link>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">&nbsp;Quick report download</a>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <table className="table">
                    <tbody>
                    {data.slice(0, 5).map(item => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    {item.title}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Card.Body>
        </Card>
    </LatestPostBase>
}

export default LatestPost