import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import "./relocation";
import "./monthly"

export default function accountPage() {
    return (
		<div className="account">
            <h1>Dashboard</h1>
                <p>Welcome to your personal Dashboard. <br></br>
                    Financial insecurity is the No. 1 reason survivors of domestic violence 
                    remain in or return to abuse. In order to break the cycle of violence, 
                    we must remove obstacles to financial security for survivors.
                    This calculator will serve survivors to enable them to better understand 
                    the costs of leaving and staying safe and will allow users to understand 
                    and identify the relevant costs.<br></br>
                    Your monthly budget can be found here:
                    <Link to="/monthly"> Monthly Budget</Link> <br></br>
                    Your relocation costs can be found here: 
                    <Link to="/relocation"> Relocation Budget</Link>
                </p>
        </div>
    )
};
