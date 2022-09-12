export const EmployeeHeaders = [
    { label: "ID", key: "Id" },
    { label: "Employee ID", key: "EmpId" },
    { label: "Department", key: "Department" },
    { label: "Branch", key: "Branch" },
    { label: "Group", key: "Group" },
    { label: "Employee Name", key: "EmpName" },
    { label: "Gender", key: "Gender" },
    { label: "Mobile", key: "Mobile" },
    { label: "Email", key: "Email" },
    { label: "DOB", key: "DOB" },
    { label: "DOJ", key: "DOJ" },
    { label: "Card", key: "CardID" },
    { label: "AccessGroup Id", key: "AccessGroup" },
    { label: "Title", key: "title" },
    { label: "Status", key: "StatusName" },
];

export const TrackRequestHeaders = [
    { label: "Request No", key: "RequestCode" },
    { label: "Requested Date", key: "RequestSubmissionDate" },
    { label: "Request Type", key: "CustomWorkflowReqName" },
    { label: "Assigned To", key: "SignerName" },
    { label: "Requester Name", key: "RequesterName" },
    { label: "From Date", key: "RequestFromDate" },
    { label: "To Date", key: "RequestToDate" },
    { label: "Status", key: "CustomRequestStatusName" },
];

/*export const YearlyReportHeader = [
    { label: "Employee Name", key: "EmployeeName" }, 
    { label: "Year", key: "Year" }, 
    { label: "Sick Leave", key: "SickLeave" }, 
    { label: "Casual Leave", key: "CasualLeave" }, 
    { label: "Privilege Leave", key: "PrivilegeLeave" }, 
]*/

export const YearlyReportHeader = [
    { label: "Employee Name", key: "Name" },
    { label: "Leave Type", key: "LeaveType" },
    { label: "Year", key: "Year" },
    { label: "Carry Forward", key: "CarryForward" },
    { label: "Yearly Balance", key: "YearlyBalance" },
    { label: "Total Balance", key: "TotalBalance" },
    { label: "Availed", key: "Availed" },
    { label: "Remaining Balance", key: "RemainingBalance" },
    { label: "Available For Encashment", key: "AvailableForEncashment" },
    { label: "Lapsed", key: "Lapsed" }
];

export const oohsLeaveRequestReportHeader = [
    { label: "Employee Name", key: "EmployeeName" },
    { label: "Employee ID", key: "EmpId" },
    { label: "Group", key: "Group" },
    //{ label: "Request Name", key: "RequestName" },
    //{ label: "Request Type", key: "Type" },
    //{ label: 'Credit', key: "Credit" },
    // { label: "Request From", key: "FromDate" },
    // { label: "Request To", key: "ToDate" },
]

export const individualReportHeader = [
    { label: "Employee Name", key: "EmployeeName" },
    { label: "Employee Id", key: "EmpId" },
    { label: "Department", key: "Department" },
    { label: "Group", key: "Group" },
    { label: "Date Of Duty", key: "DateOfDuty" },
    { label: "Shift Name", key: "ShiftName" },
    { label: "First Login", key: "FirstLogin" },
    { label: "Last Logout", key: "LastLogout" },
    { label: "Day Status", key: "DayStatus" },
    { label: "Total Effective Hour", key: "TotalEffectiveHour" },
    { label: "Total Working Hour", key: "TotalWorkingHour" },
]

export const individualDetailedReportHeader = [
    { label: "Employee Name", key: "Employee" },
    { label: "Employee ID", key: "EmpId" },
    { label: "Time of Event", key: "Time of Event" },
    { label: "Date Of Duty", key: "DateOfDuty" },
    { label: "Event Type", key: "EventType" },
    { label: "Card ID", key: "CardID" },
    { label: "Door Name", key: "GateName" },
    { label: "Remarks", key: "ErrDesc" },
]

export const individualSummaryReportHeader = [
    { label: "Employee Name", key: "Employee" },
    { label: "Employee ID", key: "EmpId" },
    { label: "Department", key: "Department" },
    { label: "Group", key: "Group" },
    { label: "Present", key: "DaysPresent" },
    { label: "Full Day", key: "FullDay" },
    { label: "Half Day", key: "HalfDay" },
    { label: "OOHS Days", key: "OOHSDays" },
    { label: "Leave Days", key: "Leaves" },
    { label: "Days Count", key: "DaysCount" },
    { label: "No Days Count", key: "NoCountDays" },
    { label: "Night Shift", key: "NightShift" },
    { label: "Second Shift", key: "SecondShift" },
    { label: "General Shift", key: "Regular" }
]