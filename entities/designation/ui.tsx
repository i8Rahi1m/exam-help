"use client"

import { Tickets } from "@/database/tickets"
import { useEffect } from "react"

export const Designation = () => {
    return(
        <section>
            {Tickets.map(el=>(
                <div className="flex px-4 pt-[40px]">
                    <span key={el.key} className="p-3 mr-1 rounded-2xl" style={{backgroundColor: el.color}}></span>
                    <p>{el.title}</p>
                </div>
            ))}
        </section>
    )
}