import { Flex } from "@chakra-ui/react";
import Card from "../Card";

const ReportData: IReportData[] = [
  {
    color: "teal.500",
    bg: "teal.100",
    totalcount: "2649",
    element: "Doctors",
    note: "3 Doctor joined this week",
  },
  {
    color: "orange.500",
    bg: "orange.100",
    totalcount: "5453",
    element: "Staffs",
    note: "8 Staffs  on vacation",
  },
  {
    color: "red.500",
    bg: "red.100",
    totalcount: "170000",
    element: "Patients",
    note: "175 New patients admitted",
  },
  {
    color: "blue.500",
    bg: "blue.100",
    totalcount: "21",
    element: "Pharmacies",
    note: "85000 MEdicine on reserve",
  },
  {
    color: "teal.500",
    bg: "teal.100",
    totalcount: "15",
    element: "Surgeons",
    note: "3 Surgeons joined this week",
  },
];

const Reports = () => {
  return (
    <Flex my={6} justifyContent="space-between">
      {ReportData.map((report: IReportData) => (
        <Card
          color={report.color}
          bg={report.bg}
          totalcount={report.totalcount}
          element={report.element}
          note={report.note}
        />
      ))}
    </Flex>
  );
};

export default Reports;
