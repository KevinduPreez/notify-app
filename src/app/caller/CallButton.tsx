'use client'
import React from "react";
import { TwilioCaller } from "./TwilioCaller";

export default function CallButton() {
    return <button onClick={()=>{TwilioCaller()}}>Click</button>
}