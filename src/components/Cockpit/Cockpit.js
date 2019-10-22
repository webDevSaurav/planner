import React from 'react'
import { Card, CardContent } from '@material-ui/core'

import "./Cockpit.css"
import Date from '../Date/Date'
import AddSection from '../AddSection/AddSection'
import Section from '../Section/Section'

export default function Cockpit(props) {

    return (
        <Card className = "cockpit">
            <CardContent>
                <h1 >Planner</h1>   
                <Date></Date>   
                <AddSection></AddSection>
                {
                    props.data.map(section => {
                        return <Section section={section}></Section>
                    })
                }
            </CardContent>

        </Card>
    )
}
