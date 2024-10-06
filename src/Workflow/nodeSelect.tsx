import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";

const NODE_TYPE = [
    { label: "nodeInput", type: "nodeInput" },
    { label: "nodeLLM", type: "nodeLLM" },
    { label: "nodeOutput", type: "nodeOutput" },
];

export default function PaymentProviderSelect() {
    const { setNodes } = useReactFlow();

    const onProviderClick = ({ label, type }: { label: string; type: string }) => {
        const location = Math.random() * 250;

        setNodes((prevNodes) => [
            ...prevNodes,
            {
                id: `${prevNodes.length + 1}`,
                data: { label },
                type: type,
                position: { x: location, y: location },
            },
        ]);
    };

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronBarDown />}>
                Add Node
            </MenuButton>
            <MenuList>
                {NODE_TYPE.map((node) => (
                    <MenuItem onClick={() => onProviderClick(node)}>{node.label}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
