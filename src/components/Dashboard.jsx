// src/components/Dashboard.js
import React from 'react';
import mockData from '../mockData';

const Dashboard = () => {
  const {
    activeMagazine,
    status,
    presenceSensor,
    deptSensor,
    totalSlaPresence,
    totalSlaAbsence,
    temperature,
    pressure,
    avgDept,
    maxDept
  } = mockData;

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>Active Magazine: {activeMagazine}</li>
        <li>Status: {status ? 'Active' : 'Inactive'}</li>
        <li>Presence Sensor: {presenceSensor ? 'Detected' : 'Not Detected'}</li>
        <li>Dept Sensor: {deptSensor ? 'Detected' : 'Not Detected'}</li>
        <li>Total SLA Presence: {totalSlaPresence}</li>
        <li>Total SLA Absence: {totalSlaAbsence}</li>
        <li>Temperature: {temperature} °C</li>
        <li>Pressure: {pressure} hPa</li>
        <li>Avg Dept: {avgDept}</li>
        <li>Max Dept: {maxDept}</li>
      </ul>
    </div>
  );
};

export default Dashboard;

