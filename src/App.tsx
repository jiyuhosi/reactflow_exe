import { ChakraProvider } from "@chakra-ui/react";

import "@xyflow/react/dist/style.css";
import { Workflow } from "./Workflow/Workflow";

export default function App() {
    return (
        <ChakraProvider>
            <Workflow />
        </ChakraProvider>
    );
}
