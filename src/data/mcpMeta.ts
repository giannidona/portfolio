/** Non-translated MCP metadata: tech badges and repo URL */
export type MCPMeta = {
  slug: string;
  tech: string[];
  repoUrl?: string;
};

export const mcpMetaList: MCPMeta[] = [
  {
    slug: "dolar-argentina-mcp",
    tech: ["MCP", "Node.js", "JavaScript", "dolarapi.com"],
    repoUrl: "https://github.com/giannidona/dolar-argentina-mcp",
  },
];

export function getMCPMeta(slug: string): MCPMeta | undefined {
  return mcpMetaList.find((mcp) => mcp.slug === slug);
}

export function getAllMCPSlugs(): string[] {
  return mcpMetaList.map((mcp) => mcp.slug);
}
