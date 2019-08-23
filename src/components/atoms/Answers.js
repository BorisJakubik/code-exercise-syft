import React from 'react';

export const Answers = ({ date, price, system, subSystem, hardware }) => (
    <div>
        <h2>Your answers are:</h2>
        <div>System: {system} {subSystem}</div>
        <div>Hardware: {hardware}</div>
        <div>Date: {date}</div>
        <div>Price: {price}</div>
        <div></div>
    </div>
)