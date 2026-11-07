// assets/js/mockData.js

const mockDatabase = {
  pecas: [
    {
      id_part: 100,
      part_code: "P-101",
      name: "Engrenagem Primária",
      tools: [
        { id_tool: 1, tool_name: "Broca Ø10mm", tool_type: "Furação" },
        { id_tool: 2, tool_name: "Mandril BT40", tool_type: "Fixação" },
        { id_tool: 3, tool_name: "Fresa de Facear", tool_type: "Fresamento" },
        { id_tool: 4, tool_name: "Inserto de Roscar M12", tool_type: "Rosca" },
        { id_tool: 5, tool_name: "Macho M8", tool_type: "Rosca" }
      ]
    },
    {
      id_part: 101,
      part_code: "P-102",
      name: "Eixo de Transmissão",
      tools: [
        { id_tool: 1, tool_name: "Broca Ø10mm", tool_type: "Furação" },
        { id_tool: 2, tool_name: "Mandril BT40", tool_type: "Fixação" },
        { id_tool: 3, tool_name: "Fresa de Facear", tool_type: "Fresamento" },
        { id_tool: 6, tool_name: "Inserto de Acabamento VBMT", tool_type: "Torneamento" },
        { id_tool: 7, tool_name: "Fresa de Canto", tool_type: "Fresamento" }
      ]
    }
  ],
  maquinas: [
    { id_machine: 1, machine_name: "Torno CNC ROMI 0101-TRN", max_tools: 12, machine_type: "TORNO CNC", maintenance_interval_days: 30 }
  ]
};