import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Styles from '../../components/styles'

const Event = () => (
    <div>
        <Head title = 'Even Page'/>
        <Styles />
        <div className="hero">
            <h1 className="title">Event Page!</h1>
            <Link href = "/">
                    <h3> &#8701; Back</h3>

            </Link>
            <div className="row">
                <Link href = "event/detail">
                        <h3>View Detail</h3>
                </Link>
            </div>
        </div>
    </div>

)
export default Event