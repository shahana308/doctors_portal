import { Flex } from "@chakra-ui/react";
import Card from "../../common-components/Card";
import { ReportData } from "../../../mockData/Reports";

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
