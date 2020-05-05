import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: 'Lack of executive and stakeholder commitment usually tops the list. This is often followed by bad requirements, constant change, bad project managers and bad resources. In other words, risk identification tends to bring out plenty of negative emotions and finger pointing'

            },  
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Lack of e xecutive and stakeholder commitment usually tops the list. This is often followed by bad requirements, constant change, bad project managers and bad resources. In other words, risk identification tends to bring out plenty of negative emotions and finger pointing'
                
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: 'Lack of executive and stakeholder commitment usually tops the list. This is often followed by bad requirements, constant change, bad project managers and bad resources. In other words, risk identification tends to bring out plenty of negative emotions and finger pointing'
                
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'Lack of executive and stakeholder commitment usually tops the list. This is often followed by bad requirements, constant change, bad project managers and bad resources. In other words, risk identification tends to bring out plenty of negative emotions and finger pointing'
                
            }
        ]
    }
    render() {
        return (
           <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item, index)=>{
                       return(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                       );
                   })}
               </div>
            </section>
            
           
        )
    }
}
