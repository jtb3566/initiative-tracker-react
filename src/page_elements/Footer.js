import { Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
        <Toolbar>
            <Typography component="p">
                Created by: James Ballard
            </Typography>
            <hr></hr>
            <Typography component="p">
                GitHub: jtb3566
            </Typography>
            <hr></hr>
            <Typography component="p">
                D&amp;D 5th Edition API:
            </Typography>
                <a href="https://www.dnd5eapi.co/">
                    dnd5eapi.co
                </a>
        </Toolbar>
    )
}