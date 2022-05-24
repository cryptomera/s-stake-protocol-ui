import { Graph } from "react-d3-graph";

const data = {
  links: [
    {
      id: "ParentId",
      source: "Account",
      target: "Account",
      label: "ParentId"
    },
    {
      id: "BillingContact",
      source: "Account",
      target: "Contact",
      label: "BillingContact"
    }
  ],
  nodes: [{ id: "Account" }, { id: "Contact" }]
};
const myConfig = {
  nodeHighlightBehavior: true,
  linkHighlightBehavior: true,
  directed: true,
  height: 500,
  collapsible: false,
  d3: {
    alphaTarget: 0.05,
    gravity: -500,
    linkLength: 150,
    linkStrength: 1,
    disableLinkForce: false,
  },
  node: {
    labelPosition: "bottom",
    color: "lightgreen",
    size: 1000,
    fontSize: 14,
    highlightStrokeColor: "blue",
    highlightFontSize: 18,
  },
  link: {
    highlightColor: "BLUE",
    renderLabel: true,
    fontSize: 10,
    strokeWidth: 3,
    type: "CURVE_SMOOTH",
  }
};
const TreeGraph = () => {
  return (
    <Graph
			id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
			data={data}
			config={myConfig}
		/>
  )
}

export default TreeGraph;