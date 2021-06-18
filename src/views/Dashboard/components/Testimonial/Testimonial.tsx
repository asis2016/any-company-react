import React, {useState, useEffect} from 'react'
import {TestimonialBase} from './Testimonial.style'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'
import {Card, Table} from 'react-bootstrap'
import {axiosInstance} from '../../../../helpers'
import {ListAction} from '../../../../components/molecules'
import {FaEdit, FaExternalLinkAlt, FaEye, FaTrashAlt} from "react-icons/fa";
import {Link} from 'react-router-dom'


const Testimonial = (): JSX.Element => {

    const [testimonial, setTestimonial] = useState<TestimonialProps[]>([])

    useEffect(()=>{
        axiosInstance.get('testimonials')
            .then(response=>setTestimonial(response.data))
    },[])

    return <TestimonialBase>
        <DashboardLayout title='Testimonials'>
            <Card>
                <Card.Header>
                    Testimonials
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                        <tr>
                            <th>Client name</th>
                            <th>Client position</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {testimonial.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <img alt='title'
                                             className="rounded-circle me-2"
                                             width="30"
                                             height="30"
                                             src={item.image_url}/>
                                        {item.client_name}
                                    </td>
                                    <td>{item.client_position}</td>
                                    <td>{item.created}</td>
                                    <td>
                                        {/*<ListAction id={item.id} viewExternalChoice={false}/>*/}
                                        <Link to={`/dashboard/testimonials/${item.id}/delete/`} title='View on site.'>
                                            <FaTrashAlt/>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </DashboardLayout>
    </TestimonialBase>
}

export default Testimonial