import React from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
  const reportsData = [
    { id: 1, doctorName: 'Dr. Smith', doctorSpecialty: 'Cardiology' },
    { id: 2, doctorName: 'Dr. Johnson', doctorSpecialty: 'Pediatrics' },
    { id: 3, doctorName: 'Dr. Brown', doctorSpecialty: 'Dermatology' },
    // Add more data as needed
  ];

  const handleViewReport = (reportId) => {
    // Implement logic to view the report with id reportId
    console.log(`View report with id ${reportId}`);
  };

  const handleDownloadReport = (reportId) => {
    // Implement logic to download the report with id reportId
    console.log(`Download report with id ${reportId}`);
  };

  return (
    <div className="reports-layout">
      <h2>Reports Layout</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpecialty}</td>
              <td>
                <button className="btn-view" onClick={() => handleViewReport(report.id)}>
                  View Report
                </button>
              </td>
              <td>
                <button className="btn-download" onClick={() => handleDownloadReport(report.id)}>
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
