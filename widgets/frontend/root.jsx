import React from 'react'
import Clock from './clock'
import Tabs from './tabs'

export default function Root(props){
    const tabData = [
        {
          title: "One",
          content: "I am one",
        },
        {
          title: "Two",
          content: "I am two",
        },
        {
          title: "Three",
          content: "I am three",
        },
      ];

    return(
        <div>
            <Clock />
            <Tabs tabSections={tabData} />
        </div>
    )
}