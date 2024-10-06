import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { X } from "react-bootstrap-icons";
import { Handle, NodeProps, Position, useReactFlow } from "reactflow";
import CustomHandle from "./CustomHandle";

export default function nodeOutput({ data, id }: NodeProps) {
    const { setNodes } = useReactFlow();
    return (
        <Flex
            borderRadius={"24px"}
            border="2px solid #5e5eff"
            alignItems={"center"}
            bg="white"
            p={1}
            pb={1}
            pl={"12px"}
            gap={2}
            width="140px"
        >
            <Flex grow="1">
                <Text fontSize="small" mt={"-2px"}>
                    {data.label}
                </Text>
            </Flex>
            <IconButton
                aria-label="Delete node"
                pointerEvents="all"
                icon={<X />}
                color="red"
                bg="transparent"
                size="small"
                onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))}
            />
            <CustomHandle type="target" position={Position.Left} />
        </Flex>
    );
}
