import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import "./relocation";
import "./monthly"

export default function accountPage() {
    return (
		<div className="account">
            <h1>Dashboard</h1>
                <p>Welcome to your personal Dashboard. <br></br>
                    Your monthly budget can be found here:
                    <Link to="/monthly"> Monthly Budget</Link> <br></br>
                    Your relocation costs can be found here: 
                    <Link to="/relocation"> Relocation Budget</Link>
                </p>
        </div>
    )
};
