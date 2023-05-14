import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import { kFormatter } from "../common-function/kformatter";

const Card: React.FC<IReportData> = ({
  bg,
  color,
  element,
  totalcount,
  note,
}) => {
  return (
    <Box
      height="auto"
      width="13rem"
      border="grey.solid.200"
      borderRadius="xl"
      p={4}>
      <Flex>
        <Box>
          <Box borderRadius="full" height="2.5rem" width="2.5rem" bg={bg}></Box>
        </Box>

        <Box mx={2}>
          <Text fontSize="lg" fontWeight={900} lineHeight="1.3rem">
            {kFormatter(Number(totalcount))}
          </Text>
          <Text fontSize="xs" fontWeight={400} color="grey.500">
            {element}
          </Text>
        </Box>
      </Flex>
      <Text fontWeight={700} fontSize="sm" mt={4}>
        <chakra.span color={color} fontWeight={900}>
          {Number(note.replace(/ .*/, ""))}
        </chakra.span>{" "}
        {note.substring(note.indexOf(" ") + 1)}
      </Text>
    </Box>
  );
};

export default Card;
