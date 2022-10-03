import React from 'react';
import "./staffdetails.css"
import StaffTable from '../../components/staffTable/StaffTable';

function StaffDetails() {
    return (
        <>
            <div className="staff">
                <StaffTable />
            </div>
        </>
    );
}

export default StaffDetails;