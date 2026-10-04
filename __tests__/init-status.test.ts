import { describe, expect, it } from "vitest";
import { updateStatusBar } from "../init.ts";

describe("updateStatusBar", () => {
  it("does not report MCP status to the footer", () => {
    const footerUpdates: unknown[][] = [];

    updateStatusBar(createState({
      setStatus(...args: unknown[]) {
        footerUpdates.push(args);
      },
    }));

    expect(footerUpdates).toEqual([]);
  });
});

function createState(ui: unknown) {
  return {
    ui,
    config: { mcpServers: { demo: { command: "demo" } } },
    manager: { getAllConnections() { return new Map(); } },
  } as any;
}
