const mockDatabase = {
  pecas: [
    {
      id_part: 100,
      part_code: "P-101",
      name: "Engrenagem Primária",
      manufacturer: "Usitec Componentes",
      image: "https://varejopecas.cdn.magazord.com.br/img/2025/04/produto/22078/laq1104789-kit-embreagem-completa-primaria-biz125-2006-2007-2008-2009-2010-2.jpg?ims=600x600",
      tools: [
        { 
          id_tool: 1, 
          tool_name: "Broca Ø10mm", 
          tool_type: "Furação", 
          insert_type: "Metal Duro", 
          supplier: "Sandvik", 
          image: "https://images.cws.digital/produtos/gg/78/98/broca-de-videa-para-concreto-12-x-150mm-7529878-1724073800921.jpg" 
        },
        { 
          id_tool: 2, 
          tool_name: "Mandril BT40", 
          tool_type: "Fixação", 
          insert_type: "Padrão ISO", 
          supplier: "Seco Tools", 
          image: "https://www.btfixo.com.br/_uploads/ProdutoDestaque/ProdutoDestaque_3462_5757__orig.png" 
        },
        { 
          id_tool: 3, 
          tool_name: "Fresa de Facear", 
          tool_type: "Fresamento", 
          insert_type: "SEKT 1204", 
          supplier: "Iscar", 
          image: "https://anhangueraferramentas.fbitsstatic.net/img/p/fresa-de-facear-copias-f2234b063z0606-lazzari-111122/300190-6.jpg?w=650&h=650&v=no-value" 
        },
        { 
          id_tool: 4, 
          tool_name: "Inserto de Roscar M12", 
          tool_type: "Rosca", 
          insert_type: "16ER", 
          supplier: "Vargus", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLGY8_vXsFAhWn3mZGi-eKZL57BM6Clg65T930JjW6Q&s=10" 
        },
        { 
          id_tool: 5, 
          tool_name: "Macho M8", 
          tool_type: "Rosca", 
          insert_type: "HSS-E", 
          supplier: "Dormer", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1nruHWBvf2XG_7u2_H7pVsLHpkzrIwU8Inaa0A2Ciw&s=10" 
        }
      ]
    },
    {
      id_part: 101,
      part_code: "P-102",
      name: "Eixo de Transmissão",
      manufacturer: "Metalúrgica Demo",
      image: "https://mottustore.vtexassets.com/arquivos/ids/162215-768-auto/eixo-secundario-de-transmissao-com-engrenagem-e-rolamento_1.webp?v=639191954634130000&quality=10",
      tools: [
        { 
          id_tool: 1, 
          tool_name: "Broca Ø10mm", 
          tool_type: "Furação", 
          insert_type: "Metal Duro", 
          supplier: "Sandvik", 
          image: "https://images.cws.digital/produtos/gg/78/98/broca-de-videa-para-concreto-12-x-150mm-7529878-1724073800921.jpg" 
        },
        { 
          id_tool: 2, 
          tool_name: "Mandril BT40", 
          tool_type: "Fixação", 
          insert_type: "Padrão ISO", 
          supplier: "Seco Tools", 
          image: "https://www.btfixo.com.br/_uploads/ProdutoDestaque/ProdutoDestaque_3462_5757__orig.png" 
        },
        { 
          id_tool: 3, 
          tool_name: "Fresa de Facear", 
          tool_type: "Fresamento", 
          insert_type: "SEKT 1204", 
          supplier: "Iscar", 
          image: "https://anhangueraferramentas.fbitsstatic.net/img/p/fresa-de-facear-copias-f2234b063z0606-lazzari-111122/300190-6.jpg?w=650&h=650&v=no-value" 
        },
        { 
          id_tool: 6, 
          tool_name: "Inserto de Acabamento VBMT", 
          tool_type: "Torneamento", 
          insert_type: "VBMT 160404", 
          supplier: "Sandvik", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdh_XBf3C-FoexoZU6yGF4rp49tvVRHqKmJ7vjbRHjdq_puqJytu2Xi4&s=10" 
        },
        { 
          id_tool: 7, 
          tool_name: "Fresa de Canto", 
          tool_type: "Fresamento", 
          insert_type: "APKT 1003", 
          supplier: "TaeguTec", 
          image: "https://images.tcdn.com.br/img/img_prod/646294/fresa_de_arredondar_cantos_com_rolamento_1_20260125132147_f9c843960316.jpg" 
        }
      ]
    }
  ],
  maquinas: [
    { 
      id_machine: 1, 
      machine_name: "Torno CNC ROMI 0101-TRN", 
      max_tools: 12, 
      machine_type: "TORNO CNC", 
      maintenance_interval_days: 30,
      status: "Produzindo",
      current_part: "P-101",
      image: "../assets/images/fundo-cnc.png"
    }
  ]
};