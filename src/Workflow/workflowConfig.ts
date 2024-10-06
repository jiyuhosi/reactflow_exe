import { Edge, Node } from "reactflow";

export const initialEdges: Edge[] = [];

export const initialNodes: Node[] = [
    {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "nodeInput" },
        type: "nodeInput",
    },
    {
        id: "2",
        data: { label: "nodeLLM" },
        position: { x: 300, y: 100 },
        type: "nodeLLM",
    },
    {
        id: "3",
        data: { label: "nodeLLM" },
        position: { x: 300, y: 200 },
        type: "nodeLLM",
    },
    {
        id: "4",
        data: { label: "nodeOutput" },
        position: { x: 550, y: 100 },
        type: "nodeOutput",
    },

    {
        id: "5",
        data: { label: "nodeSelect" },
        position: { x: 300, y: -100 },
        type: "nodeSelect",
    },
];
