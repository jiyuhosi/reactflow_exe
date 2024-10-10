import ReactFlow, { addEdge, Background, Connection, Controls, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";

import { useCallback } from "react";
import { initialEdges, initialNodes } from "./workflowConfig";
// import nodeSelect from "./nodeSelect";
import nodeInput from "./nodeInput";
import nodeLLM from "./nodeLLM";
import CustomEdge from "./CustomEdge";
import nodeOutput from "./nodeOutput";

const nodeTypes = {
    nodeInput: nodeInput,
    nodeLLM: nodeLLM,
    nodeOutput: nodeOutput,
    // nodeSelect: nodeSelect,
};

const edgeTypes = {
    customEdge: CustomEdge,
};

export const Workflow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (connection: Connection) => {
            const edge = {
                ...connection,

                id: `${edges.length} + 1`,
                type: "customEdge",
            };
            setEdges((prevEdges) => addEdge(edge, prevEdges));
        },
        [edges]
    );

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ height: "500px", width: "500px", border: "1px solid black" }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
};
