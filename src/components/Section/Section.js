import React from 'react'
import Task from '../Task/Task'

export default function Section(props) {
    return (
        <div>
            {
                props.section.title
            }
            {
                props.section.tasks.map(task => <Task></Task>)
            }
        </div>
    )
}
