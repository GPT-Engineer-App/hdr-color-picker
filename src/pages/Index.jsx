import { useState } from "react";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("black", "white");

  // State for color values
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);

  // Function to convert RGB to Hex
  const rgbToHex = (r, g, b) => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg={bg} color={color}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Text fontSize="2xl" mb={4}>
          HDR Color Picker
        </Text>
        <Box>
          <Text>Red</Text>
          <Slider aria-label="slider-red" defaultValue={128} min={0} max={255} onChange={(val) => setRed(val)}>
            <SliderTrack>
              <SliderFilledTrack bg="red.500" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="red.500" as={FaSun} />
            </SliderThumb>
          </Slider>
        </Box>
        <Box mt={4}>
          <Text>Green</Text>
          <Slider aria-label="slider-green" defaultValue={128} min={0} max={255} onChange={(val) => setGreen(val)}>
            <SliderTrack>
              <SliderFilledTrack bg="green.500" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="green.500" as={FaSun} />
            </SliderThumb>
          </Slider>
        </Box>
        <Box mt={4}>
          <Text>Blue</Text>
          <Slider aria-label="slider-blue" defaultValue={128} min={0} max={255} onChange={(val) => setBlue(val)}>
            <SliderTrack>
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="blue.500" as={FaSun} />
            </SliderThumb>
          </Slider>
        </Box>
        <Box mt={6} p={3} bg={rgbToHex(red, green, blue)} borderRadius="md">
          <Text textAlign="center" fontWeight="bold" fontSize="lg">
            Hex: {rgbToHex(red, green, blue)}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
