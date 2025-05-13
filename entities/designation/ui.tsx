"use client"

import { Tickets } from "@/database/tickets"



export const Designation = () => {
    return(
        <section>
            {Tickets.map(el=>(
                <div className="flex p-4">
                    <span key={el.key} className="p-3 mr-1 rounded-2xl" style={{backgroundColor: el.color}}></span>
                    <p>{el.title}</p>
                </div>
            ))}
        </section>
    )
}