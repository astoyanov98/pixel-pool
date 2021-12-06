import '../../styles/ticket.css'
import { style } from "typestyle";
import { useEffect } from 'react'
import React from 'react';

interface Props {
    description: string;
}

export const Ticket: React.FunctionComponent<Props> = ({ description }) => {
    return (
        <div>
            <div className="container_ticket">
                {description}
            </div>
        </div>
    )
}