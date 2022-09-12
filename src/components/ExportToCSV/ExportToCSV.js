import React from 'react';
import { CSVLink } from "react-csv";
import Download from '../../assets/images/icons/download-icon.png';
import {
    EmployeeHeaders, TrackRequestHeaders,
    YearlyReportHeader, individualReportHeader,
    oohsLeaveRequestReportHeader, individualDetailedReportHeader,
    individualSummaryReportHeader
} from "./ExportHeader";

const ExportToCSV = (props) => {

    const { data, type, OOHSType } = props;

    let OOHSHeader = [];

    if (OOHSType === "Detailed") {
        OOHSHeader = [
            ...oohsLeaveRequestReportHeader,
            { label: "Request Name", key: "RequestName" },
            { label: "Request From", key: "FromDate" },
            { label: "Request To", key: "ToDate" },
            { label: "Credit", key: "Credit" },
            { label: "Type", key: "Type" } 
        ]
    }
    else {
        OOHSHeader = [
            ...oohsLeaveRequestReportHeader,
            { label: "Sick Leave", key: "SickLeave" },
            { label: "Casual Leave", key: "CasualLeave" },
            { label: "Privilege Leave", key: "PrivilegeLeave" },
            { label: "Schedule(OOHS)", key: "Schedule" },
            { label: "UnSchedule(OOHS)", key: "UnSchedule" },
            { label: "Work From Home(OOHS)", key: "WorkFromHome" } 
        ]
    }

    const header = (type == "TrackRequest") ? TrackRequestHeaders :
        (type == "Employee") ? EmployeeHeaders :
            (type == "Individual Report") ? individualReportHeader :
                (type == "Individual Detailed Report") ? individualDetailedReportHeader :
                    (type == "Individual Summary") ? individualSummaryReportHeader :
                        (type == "OOHS and Leave Report") ? OOHSHeader :
                            YearlyReportHeader

    let getKeysFromData = [];
    let headerForCSV = []

    if (data)
        if (data.length !== 0)
            getKeysFromData = _.keys(data[0]);

    getKeysFromData.map(item => {
        let a = _.filter(header, head => head.key === item);
        if (a.length > 0)
            headerForCSV.push(a[0])
    })

    return (
        <div>
            <CSVLink
                data={data}
                filename={type ? `${type}.csv` : "MY File.csv"}
                className={`content-button content-button`}
                headers={headerForCSV}
                target="_blank"
            >
                {"Download "}
                <img className="ExportcsvDownload" src={Download} />
            </CSVLink>
        </div >
    );
}

export default ExportToCSV;