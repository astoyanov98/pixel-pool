import { Ticket } from "./Ticket";
import { style } from "typestyle";
import { MenuItem, Box, Typography, Grid, TextField, Button, Card, CardContent, CardHeader } from "@mui/material";
import { useState, useEffect } from 'react'
import { messageService } from '../services/MessageService'

export const Tickets = () => {

    useEffect(() => {
        console.log(messageService.getAll().get());
    }, [])

    const classNames = {
        mainDiv: style({
            height: '100vh',
            width: '30vw',
            margin: 'auto'
        }),

        header: style({
            background: '#101010'
        }),

        title: style({
            color: '#fff'
        }),
    }


    return (
        <div className={classNames.mainDiv} >
        </div>
    )
}