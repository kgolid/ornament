(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  var misc = [
    {
      name: 'frozen-rose',
      colors: ['#29368f', '#e9697b', '#1b164d', '#f7d996'],
      background: '#f2e8e4',
    },
    {
      name: 'winter-night',
      colors: ['#122438', '#dd672e', '#87c7ca', '#ebebeb'],
      background: '#ebebeb',
    },
    {
      name: 'saami',
      colors: ['#eab700', '#e64818', '#2c6393', '#eecfca'],
      background: '#e7e6e4',
    },
    {
      name: 'knotberry1',
      colors: ['#20342a', '#f74713', '#686d2c', '#e9b4a6'],
      background: '#e5ded8',
    },
    {
      name: 'knotberry2',
      colors: ['#1d3b1a', '#eb4b11', '#e5bc00', '#f29881'],
      background: '#eae2d0',
    },
    {
      name: 'tricolor',
      colors: ['#ec643b', '#56b7ab', '#f8cb57', '#1f1e43'],
      background: '#f7f2df',
    },
    {
      name: 'foxshelter',
      colors: ['#ff3931', '#007861', '#311f27', '#bab9a4'],
      background: '#dddddd',
    },
    {
      name: 'hermes',
      colors: ['#253852', '#51222f', '#b53435', '#ecbb51'],
      background: '#eeccc2',
    },
    {
      name: 'olympia',
      colors: ['#ff3250', '#ffb33a', '#008c36', '#0085c6', '#4c4c4c'],
      stroke: '#0b0b0b',
      background: '#faf2e5',
    },
    {
      name: 'byrnes',
      colors: ['#c54514', '#dca215', '#23507f'],
      stroke: '#0b0b0b',
      background: '#e8e7d4',
    },
    {
      name: 'butterfly',
      colors: ['#f40104', '#f6c0b3', '#99673a', '#f0f1f4'],
      stroke: '#191e36',
      background: '#191e36',
    },
    {
      name: 'floratopia',
      colors: ['#bf4a2b', '#cd902a', '#4e4973', '#f5d4bc'],
      stroke: '#1e1a43',
      background: '#1e1a43',
    },
    {
      name: 'verena',
      colors: ['#f1594a', '#f5b50e', '#14a160', '#2969de', '#885fa4'],
      stroke: '#1a1a1a',
      background: '#e2e6e8',
    },
    {
      name: 'florida_citrus',
      colors: ['#ea7251', '#ebf7f0', '#02aca5'],
      stroke: '#050100',
      background: '#9ae2d3',
    },
    {
      name: 'lemon_citrus',
      colors: ['#e2d574', '#f1f4f7', '#69c5ab'],
      stroke: '#463231',
      background: '#f79eac',
    },
    {
      name: 'yuma_punk',
      colors: ['#f05e3b', '#ebdec4', '#ffdb00'],
      stroke: '#ebdec4',
      background: '#161616',
    },
    {
      name: 'yuma_punk2',
      colors: ['#f2d002', '#f7f5e1', '#ec643b'],
      stroke: '#19080e',
      background: '#f7f5e1',
    },
    {
      name: 'moir',
      colors: ['#a49f4f', '#d4501e', '#f7c558', '#ebbaa6'],
      stroke: '#161716',
      background: '#f7f4ef',
    },
    {
      name: 'sprague',
      colors: ['#ec2f28', '#f8cd28', '#1e95bb', '#fbaab3', '#fcefdf'],
      stroke: '#221e1f',
      background: '#fcefdf',
    },
    {
      name: 'bloomberg',
      colors: ['#ff5500', '#f4c145', '#144714', '#2f04fc', '#e276af'],
      stroke: '#000',
      background: '#fff3dd',
    },
    {
      name: 'revolucion',
      colors: ['#ed555d', '#fffcc9', '#41b797', '#eda126', '#7b5770'],
      stroke: '#fffcc9',
      background: '#2d1922',
    },
    {
      name: 'sneaker',
      colors: ['#e8165b', '#401e38', '#66c3b4', '#ee7724', '#584098'],
      stroke: '#401e38',
      background: '#ffffff',
    },
    {
      name: 'miradors',
      colors: ['#ff6936', '#fddc3f', '#0075ca', '#00bb70'],
      stroke: '#ffffff',
      background: '#020202',
    },
    {
      name: 'kaffeprat',
      colors: ['#BCAA8C', '#D8CDBE', '#484A42', '#746B58', '#9A8C73'],
      stroke: '#000',
      background: '#fff',
    },
    {
      name: 'jrmy',
      colors: ['#df456c', '#ea6a82', '#270b32', '#471e43'],
      stroke: '#270b32',
      background: '#ef9198',
    },
    {
      name: 'animo',
      colors: ['#f6c103', '#f6f6f6', '#d1cdc7', '#e7e6e5'],
      stroke: '#010001',
      background: '#f5f5f5',
    },
    {
      name: 'book',
      colors: ['#be1c24', '#d1a082', '#037b68', '#d8b1a5', '#1c2738', '#c95a3f'],
      stroke: '#0e0f27',
      background: '#f5b28a',
    },
    {
      name: 'juxtapoz',
      colors: ['#20357e', '#f44242', '#ffffff'],
      stroke: '#000000',
      background: '#cfc398',
    },
    {
      name: 'hurdles',
      colors: ['#e16503', '#dc9a0f', '#dfe2b4', '#66a7a6'],
      stroke: '#3c1c03',
      background: '#3c1c03',
    },
    {
      name: 'ludo',
      colors: ['#df302f', '#e5a320', '#0466b3', '#0f7963'],
      stroke: '#272621',
      background: '#dedccd',
    },
    {
      name: 'riff',
      colors: ['#e24724', '#c7c7c7', '#1f3e7c', '#d29294', '#010203'],
      stroke: '#010203',
      background: '#f2f2f2',
    },
    {
      name: 'san ramon',
      colors: ['#4f423a', '#f6a74b', '#589286', '#f8e9e2', '#2c2825'],
      stroke: '#2c2825',
      background: '#fff',
    },
  ];

  var colourscafe = [
    {
      name: 'cc239',
      colors: ['#e3dd34', '#78496b', '#f0527f', '#a7e0e2'],
      background: '#e0eff0'
    },
    {
      name: 'cc234',
      colors: ['#ffce49', '#ede8dc', '#ff5736', '#ff99b4'],
      background: '#f7f4ed'
    },
    {
      name: 'cc232',
      colors: ['#5c5f46', '#ff7044', '#ffce39', '#66aeaa'],
      background: '#e9ecde'
    },
    {
      name: 'cc238',
      colors: ['#553c60', '#ffb0a0', '#ff6749', '#fbe090'],
      background: '#f5e9de'
    },
    {
      name: 'cc242',
      colors: ['#bbd444', '#fcd744', '#fa7b53', '#423c6f'],
      background: '#faf4e4'
    },
    {
      name: 'cc245',
      colors: ['#0d4a4e', '#ff947b', '#ead3a2', '#5284ab'],
      background: '#f6f4ed'
    },
    {
      name: 'cc273',
      colors: ['#363d4a', '#7b8a56', '#ff9369', '#f4c172'],
      background: '#f0efe2'
    }
  ];

  var ranganath = [
    {
      name: 'rag-mysore',
      colors: ['#ec6c26', '#613a53', '#e8ac52', '#639aa0'],
      background: '#d5cda1'
    },
    {
      name: 'rag-gol',
      colors: ['#d3693e', '#803528', '#f1b156', '#90a798'],
      background: '#f0e0a4'
    },
    {
      name: 'rag-belur',
      colors: ['#f46e26', '#68485f', '#3d273a', '#535d55'],
      background: '#dcd4a6'
    },
    {
      name: 'rag-bangalore',
      colors: ['#ea720e', '#ca5130', '#e9c25a', '#52534f'],
      background: '#f9ecd3'
    },
    {
      name: 'rag-taj',
      colors: ['#ce565e', '#8e1752', '#f8a100', '#3ac1a6'],
      background: '#efdea2'
    },
    {
      name: 'rag-virupaksha',
      colors: ['#f5736a', '#925951', '#feba4c', '#9d9b9d'],
      background: '#eedfa2'
    }
  ];

  var roygbivs = [
    {
      name: 'retro',
      colors: [
        '#69766f',
        '#9ed6cb',
        '#f7e5cc',
        '#9d8f7f',
        '#936454',
        '#bf5c32',
        '#efad57'
      ]
    },
    {
      name: 'retro-washedout',
      colors: [
        '#878a87',
        '#cbdbc8',
        '#e8e0d4',
        '#b29e91',
        '#9f736c',
        '#b76254',
        '#dfa372'
      ]
    },
    {
      name: 'roygbiv-warm',
      colors: [
        '#705f84',
        '#687d99',
        '#6c843e',
        '#fc9a1a',
        '#dc383a',
        '#aa3a33',
        '#9c4257'
      ]
    },
    {
      name: 'roygbiv-toned',
      colors: [
        '#817c77',
        '#396c68',
        '#89e3b7',
        '#f59647',
        '#d63644',
        '#893f49',
        '#4d3240'
      ]
    },
    {
      name: 'present-correct',
      colors: [
        '#fd3741',
        '#fe4f11',
        '#ff6800',
        '#ffa61a',
        '#ffc219',
        '#ffd114',
        '#fcd82e',
        '#f4d730',
        '#ced562',
        '#8ac38f',
        '#79b7a0',
        '#72b5b1',
        '#5b9bae',
        '#6ba1b7',
        '#49619d',
        '#604791',
        '#721e7f',
        '#9b2b77',
        '#ab2562',
        '#ca2847'
      ]
    }
  ];

  var tundra = [
    {
      name: 'tundra1',
      colors: ['#40708c', '#8e998c', '#5d3f37', '#ed6954', '#f2e9e2']
    },
    {
      name: 'tundra2',
      colors: ['#5f9e93', '#3d3638', '#733632', '#b66239', '#b0a1a4', '#e3dad2']
    },
    {
      name: 'tundra3',
      colors: [
        '#87c3ca',
        '#7b7377',
        '#b2475d',
        '#7d3e3e',
        '#eb7f64',
        '#d9c67a',
        '#f3f2f2'
      ]
    },
    {
      name: 'tundra4',
      colors: [
        '#d53939',
        '#b6754d',
        '#a88d5f',
        '#524643',
        '#3c5a53',
        '#7d8c7c',
        '#dad6cd'
      ]
    }
  ];

  var rohlfs = [
    {
      name: 'rohlfs_1R',
      colors: ['#004996', '#567bae', '#ff4c48', '#ffbcb3'],
      stroke: '#004996',
      background: '#fff8e7'
    },
    {
      name: 'rohlfs_1Y',
      colors: ['#004996', '#567bae', '#ffc000', '#ffdca4'],
      stroke: '#004996',
      background: '#fff8e7'
    },
    {
      name: 'rohlfs_1G',
      colors: ['#004996', '#567bae', '#60bf3c', '#d2deb1'],
      stroke: '#004996',
      background: '#fff8e7'
    },
    {
      name: 'rohlfs_2',
      colors: ['#4d3d9a', '#f76975', '#ffffff', '#eff0dd'],
      stroke: '#211029',
      background: '#58bdbc'
    },
    {
      name: 'rohlfs_3',
      colors: ['#abdfdf', '#fde500', '#58bdbc', '#eff0dd'],
      stroke: '#211029',
      background: '#f76975'
    },
    {
      name: 'rohlfs_4',
      colors: ['#fde500', '#2f2043', '#f76975', '#eff0dd'],
      stroke: '#211029',
      background: '#fbbeca'
    }
  ];

  var ducci = [
    {
      name: 'ducci_jb',
      colors: ['#395e54', '#e77b4d', '#050006', '#e55486'],
      stroke: '#050006',
      background: '#efe0bc'
    },
    {
      name: 'ducci_a',
      colors: ['#809498', '#d3990e', '#000000', '#ecddc5'],
      stroke: '#ecddc5',
      background: '#863f52'
    },
    {
      name: 'ducci_b',
      colors: ['#ecddc5', '#79b27b', '#000000', '#ac6548'],
      stroke: '#ac6548',
      background: '#d5c08e'
    },
    {
      name: 'ducci_d',
      colors: ['#f3cb4d', '#f2f5e3', '#20191b', '#67875c'],
      stroke: '#67875c',
      background: '#433d5f'
    },
    {
      name: 'ducci_e',
      colors: ['#c37c2b', '#f6ecce', '#000000', '#386a7a'],
      stroke: '#386a7a',
      background: '#e3cd98'
    },
    {
      name: 'ducci_f',
      colors: ['#596f7e', '#eae6c7', '#463c21', '#f4cb4c'],
      stroke: '#f4cb4c',
      background: '#e67300'
    },
    {
      name: 'ducci_g',
      colors: ['#c75669', '#000000', '#11706a'],
      stroke: '#11706a',
      background: '#ecddc5'
    },
    {
      name: 'ducci_h',
      colors: ['#6b5c6e', '#4a2839', '#d9574a'],
      stroke: '#d9574a',
      background: '#ffc34b'
    },
    {
      name: 'ducci_i',
      colors: ['#e9dcad', '#143331', '#ffc000'],
      stroke: '#ffc000',
      background: '#a74c02'
    },
    {
      name: 'ducci_j',
      colors: ['#c47c2b', '#5f5726', '#000000', '#7e8a84'],
      stroke: '#7e8a84',
      background: '#ecddc5'
    },
    {
      name: 'ducci_o',
      colors: ['#c15e1f', '#e4a13a', '#000000', '#4d545a'],
      stroke: '#4d545a',
      background: '#dfc79b'
    },
    {
      name: 'ducci_q',
      colors: ['#4bae8c', '#d0c1a0', '#2d3538'],
      stroke: '#2d3538',
      background: '#d06440'
    },
    {
      name: 'ducci_u',
      colors: ['#f6d700', '#f2d692', '#000000', '#5d3552'],
      stroke: '#5d3552',
      background: '#ff7426'
    },
    {
      name: 'ducci_v',
      colors: ['#c65f75', '#d3990e', '#000000', '#597e7a'],
      stroke: '#597e7a',
      background: '#f6eccb'
    },
    {
      name: 'ducci_x',
      colors: ['#dd614a', '#f5cedb', '#1a1e4f'],
      stroke: '#1a1e4f',
      background: '#fbb900'
    }
  ];

  var judson = [
    {
      name: 'jud_playground',
      colors: ['#f04924', '#fcce09', '#408ac9'],
      stroke: '#2e2925',
      background: '#ffffff'
    },
    {
      name: 'jud_horizon',
      colors: ['#f8c3df', '#f2e420', '#28b3d0', '#648731', '#ef6a7d'],
      stroke: '#030305',
      background: '#f2f0e1'
    },
    {
      name: 'jud_mural',
      colors: ['#ca3122', '#e5af16', '#4a93a2', '#0e7e39', '#e2b9bd'],
      stroke: '#1c1616',
      background: '#e3ded8'
    },
    {
      name: 'jud_cabinet',
      colors: ['#f0afb7', '#f6bc12', '#1477bb', '#41bb9b'],
      stroke: '#020508',
      background: '#e3ded8'
    }
  ];

  var iivonen = [
    {
      name: 'iiso_zeitung',
      colors: ['#ee8067', '#f3df76', '#00a9c0', '#f7ab76'],
      stroke: '#111a17',
      background: '#f5efcb'
    },
    {
      name: 'iiso_curcuit',
      colors: ['#f0865c', '#f2b07b', '#6bc4d2', '#1a3643'],
      stroke: '#0f1417',
      background: '#f0f0e8'
    },
    {
      name: 'iiso_airlines',
      colors: ['#fe765a', '#ffb468', '#4b588f', '#faf1e0'],
      stroke: '#1c1616',
      background: '#fae5c8'
    },
    {
      name: 'iiso_daily',
      colors: ['#e76c4a', '#f0d967', '#7f8cb6', '#1daeb1', '#ef9640'],
      stroke: '#000100',
      background: '#e2ded2'
    }
  ];

  var kovecses = [
    {
      name: 'kov_01',
      colors: ['#d24c23', '#7ba6bc', '#f0c667', '#ede2b3', '#672b35', '#142a36'],
      stroke: '#132a37',
      background: '#108266'
    },
    {
      name: 'kov_02',
      colors: ['#e8dccc', '#e94641', '#eeaeae'],
      stroke: '#e8dccc',
      background: '#6c96be'
    },
    {
      name: 'kov_03',
      colors: ['#e3937b', '#d93f1d', '#090d15', '#e6cca7'],
      stroke: '#090d15',
      background: '#558947'
    },
    {
      name: 'kov_04',
      colors: ['#d03718', '#292b36', '#33762f', '#ead7c9', '#ce7028', '#689d8d'],
      stroke: '#292b36',
      background: '#deb330'
    },
    {
      name: 'kov_05',
      colors: ['#de3f1a', '#de9232', '#007158', '#e6cdaf', '#869679'],
      stroke: '#010006',
      background: '#7aa5a6'
    },
    {
      name: 'kov_06',
      colors: [
        '#a87c2a',
        '#bdc9b1',
        '#f14616',
        '#ecbfaf',
        '#017724',
        '#0e2733',
        '#2b9ae9'
      ],
      stroke: '#292319',
      background: '#dfd4c1'
    },
    {
      name: 'kov_06b',
      colors: [
        '#d57846',
        '#dfe0cc',
        '#de442f',
        '#e7d3c5',
        '#5ec227',
        '#302f35',
        '#63bdb3'
      ],
      stroke: '#292319',
      background: '#dfd4c1'
    },
    {
      name: 'kov_07',
      colors: ['#c91619', '#fdecd2', '#f4a000', '#4c2653'],
      stroke: '#111',
      background: '#89c2cd'
    }
  ];

  var tsuchimochi = [
    {
      name: 'tsu_arcade',
      colors: ['#4aad8b', '#e15147', '#f3b551', '#cec8b8', '#d1af84', '#544e47'],
      stroke: '#251c12',
      background: '#cfc7b9'
    },
    {
      name: 'tsu_harutan',
      colors: ['#75974a', '#c83e3c', '#f39140', '#e4ded2', '#f8c5a4', '#434f55'],
      stroke: '#251c12',
      background: '#cfc7b9'
    },
    {
      name: 'tsu_akasaka',
      colors: ['#687f72', '#cc7d6c', '#dec36f', '#dec7af', '#ad8470', '#424637'],
      stroke: '#251c12',
      background: '#cfc7b9'
    }
  ];

  var duotone = [
    {
      name: 'dt01',
      colors: ['#172a89', '#f7f7f3'],
      stroke: '#172a89',
      background: '#f3abb0',
    },
    {
      name: 'dt02',
      colors: ['#302956', '#f3c507'],
      stroke: '#302956',
      background: '#eee3d3',
    },
    {
      name: 'dt03',
      colors: ['#000000', '#a7a7a7'],
      stroke: '#000000',
      background: '#0a5e78',
    },
    {
      name: 'dt04',
      colors: ['#50978e', '#f7f0df'],
      stroke: '#000000',
      background: '#f7f0df',
    },
    {
      name: 'dt05',
      colors: ['#ee5d65', '#f0e5cb'],
      stroke: '#080708',
      background: '#f0e5cb',
    },
    {
      name: 'dt06',
      colors: ['#271f47', '#e7ceb5'],
      stroke: '#271f47',
      background: '#cc2b1c',
    },
    {
      name: 'dt07',
      colors: ['#6a98a5', '#d24c18'],
      stroke: '#efebda',
      background: '#efebda',
    },
    {
      name: 'dt08',
      colors: ['#5d9d88', '#ebb43b'],
      stroke: '#efebda',
      background: '#efebda',
    },
    {
      name: 'dt09',
      colors: ['#052e57', '#de8d80'],
      stroke: '#efebda',
      background: '#efebda',
    },
    {
      name: 'dt10',
      colors: ['#e5dfcf', '#151513'],
      stroke: '#151513',
      background: '#e9b500',
    },
  ];

  var hilda = [
    {
      name: 'hilda01',
      colors: ['#ec5526', '#f4ac12', '#9ebbc1', '#f7f4e2'],
      stroke: '#1e1b1e',
      background: '#e7e8d4'
    },
    {
      name: 'hilda02',
      colors: ['#eb5627', '#eebb20', '#4e9eb8', '#f7f5d0'],
      stroke: '#201d13',
      background: '#77c1c0'
    },
    {
      name: 'hilda03',
      colors: ['#e95145', '#f8b917', '#b8bdc1', '#ffb2a2'],
      stroke: '#010101',
      background: '#6b7752'
    },
    {
      name: 'hilda04',
      colors: ['#e95145', '#f6bf7a', '#589da1', '#f5d9bc'],
      stroke: '#000001',
      background: '#f5ede1'
    },
    {
      name: 'hilda05',
      colors: ['#ff6555', '#ffb58f', '#d8eecf', '#8c4b47', '#bf7f93'],
      stroke: '#2b0404',
      background: '#ffda82'
    },
    {
      name: 'hilda06',
      colors: ['#f75952', '#ffce84', '#74b7b2', '#f6f6f6', '#b17d71'],
      stroke: '#0e0603',
      background: '#f6ecd4'
    }
  ];

  var spatial = [
    {
      name: 'spatial01',
      colors: ['#ff5937', '#f6f6f4', '#4169ff'],
      stroke: '#ff5937',
      background: '#f6f6f4'
    },
    {
      name: 'spatial02',
      colors: ['#ff5937', '#f6f6f4', '#f6f6f4'],
      stroke: '#ff5937',
      background: '#f6f6f4'
    },
    {
      name: 'spatial02i',
      colors: ['#f6f6f4', '#ff5937', '#ff5937'],
      stroke: '#f6f6f4',
      background: '#ff5937'
    },

    {
      name: 'spatial03',
      colors: ['#4169ff', '#f6f6f4', '#f6f6f4'],
      stroke: '#4169ff',
      background: '#f6f6f4'
    },
    {
      name: 'spatial03i',
      colors: ['#f6f6f4', '#4169ff', '#4169ff'],
      stroke: '#f6f6f4',
      background: '#4169ff'
    }
  ];

  var jung = [
    {
      name: 'jung_bird',
      colors: ['#fc3032', '#fed530', '#33c3fb', '#ff7bac', '#fda929'],
      stroke: '#000000',
      background: '#ffffff'
    },
    {
      name: 'jung_horse',
      colors: ['#e72e81', '#f0bf36', '#3056a2'],
      stroke: '#000000',
      background: '#ffffff'
    },
    {
      name: 'jung_croc',
      colors: ['#f13274', '#eed03e', '#405e7f', '#19a198'],
      stroke: '#000000',
      background: '#ffffff'
    },
    {
      name: 'jung_hippo',
      colors: ['#ff7bac', '#ff921e', '#3ea8f5', '#7ac943'],
      stroke: '#000000',
      background: '#ffffff'
    },
    {
      name: 'jung_wolf',
      colors: ['#e51c39', '#f1b844', '#36c4b7', '#666666'],
      stroke: '#000000',
      background: '#ffffff'
    }
  ];

  var system = [
    {
      name: 'system.#01',
      colors: ['#ff4242', '#fec101', '#1841fe', '#fcbdcc', '#82e9b5'],
      stroke: '#000',
      background: '#fff'
    },
    {
      name: 'system.#02',
      colors: ['#ff4242', '#ffd480', '#1e365d', '#edb14c', '#418dcd'],
      stroke: '#000',
      background: '#fff'
    },
    {
      name: 'system.#03',
      colors: ['#f73f4a', '#d3e5eb', '#002c3e', '#1aa1b1', '#ec6675'],
      stroke: '#110b09',
      background: '#fff'
    },
    {
      name: 'system.#04',
      colors: ['#e31f4f', '#f0ac3f', '#18acab', '#26265a', '#ea7d81', '#dcd9d0'],
      stroke: '#26265a',
      backgrund: '#dcd9d0'
    },
    {
      name: 'system.#05',
      colors: ['#db4549', '#d1e1e1', '#3e6a90', '#2e3853', '#a3c9d3'],
      stroke: '#000',
      background: '#fff'
    },
    {
      name: 'system.#06',
      colors: ['#e5475c', '#95b394', '#28343b', '#f7c6a3', '#eb8078'],
      stroke: '#000',
      background: '#fff'
    },
    {
      name: 'system.#07',
      colors: ['#d75c49', '#f0efea', '#509da4'],
      stroke: '#000',
      background: '#fff'
    },
    {
      name: 'system.#08',
      colors: ['#f6625a', '#92b29f', '#272c3f'],
      stroke: '#000',
      background: '#fff'
    }
  ];

  var flourish = [
    {
      name: 'empusa',
      colors: ['#c92a28', '#e69301', '#1f8793', '#13652b', '#e7d8b0', '#48233b', '#e3b3ac'],
      stroke: '#1a1a1a',
      background: '#f0f0f2',
    },
    {
      name: 'delphi',
      colors: ['#475b62', '#7a999c', '#2a1f1d', '#fbaf3c', '#df4a33', '#f0e0c6', '#af592c'],
      stroke: '#2a1f1d',
      background: '#f0e0c6',
    },
    {
      name: 'mably',
      colors: [
        '#13477b',
        '#2f1b10',
        '#d18529',
        '#d72a25',
        '#e42184',
        '#138898',
        '#9d2787',
        '#7f311b',
      ],
      stroke: '#2a1f1d',
      background: '#dfc792',
    },
    {
      name: 'nowak',
      colors: ['#e85b30', '#ef9e28', '#c6ac71', '#e0c191', '#3f6279', '#ee854e', '#180305'],
      stroke: '#180305',
      background: '#ede4cb',
    },
    {
      name: 'jupiter',
      colors: ['#c03a53', '#edd09e', '#aab5af', '#023629', '#eba735', '#8e9380', '#6c4127'],
      stroke: '#12110f',
      background: '#e6e2d6',
    },
    {
      name: 'hersche',
      colors: [
        '#df9f00',
        '#1f6f50',
        '#8e6d7f',
        '#da0607',
        '#a4a5a7',
        '#d3d1c3',
        '#42064f',
        '#25393a',
      ],
      stroke: '#0a0a0a',
      background: '#f0f5f6',
    },
    {
      name: 'cherfi',
      colors: ['#99cb9f', '#cfb610', '#d00701', '#dba78d', '#2e2c1d', '#bfbea2', '#d2cfaf'],
      stroke: '#332e22',
      background: '#e3e2c5',
    },
    {
      name: 'harvest',
      colors: [
        '#313a42',
        '#9aad2e',
        '#f0ae3c',
        '#df4822',
        '#8eac9b',
        '#cc3d3f',
        '#ec8b1c',
        '#1b9268',
      ],
      stroke: '#463930',
      background: '#e5e2cf',
    },
    {
      name: 'honey',
      colors: ['#f14d42', '#f4fdec', '#4fbe5d', '#265487', '#f6e916', '#f9a087', '#2e99d6'],
      stroke: '#141414',
      background: '#f4fdec',
    },
    {
      name: 'jungle',
      colors: [
        '#adb100',
        '#e5f4e9',
        '#f4650f',
        '#4d6838',
        '#cb9e00',
        '#689c7d',
        '#e2a1a8',
        '#151c2e',
      ],
      stroke: '#0e0f27',
      background: '#cecaa9',
    },
    {
      name: 'skyspider',
      colors: ['#f4b232', '#f2dbbd', '#01799c', '#e93e48', '#0b1952', '#006748', '#ed817d'],
      stroke: '#050505',
      background: '#f0dbbc',
    },
    {
      name: 'atlas',
      colors: ['#5399b1', '#f4e9d5', '#de4037', '#ed942f', '#4e9e48', '#7a6e62'],
      stroke: '#3d352b',
      background: '#f0c328',
    },
  ];

  var dale = [
    {
      name: 'dale_paddle',
      colors: [
        '#ff7a5a',
        '#765aa6',
        '#fee7bc',
        '#515e8c',
        '#ffc64a',
        '#b460a6',
        '#ffffff',
        '#4781c1',
      ],
      stroke: '#000000',
      background: '#abe9e8',
    },
    {
      name: 'dale_night',
      colors: ['#ae5d9d', '#f1e8bc', '#ef8fa3', '#f7c047', '#58c9ed', '#f77150'],
      stroke: '#000000',
      background: '#00ae83',
    },
    {
      name: 'dale_cat',
      colors: ['#f77656', '#f7f7f7', '#efc545', '#dfe0e2', '#3c70bd', '#66bee4'],
      stroke: '#000000',
      background: '#f6e0b8',
    },
  ];

  var cako = [
    {
      name: 'cako1',
      colors: ['#000000', '#d55a3a', '#2a5c8a', '#7e7d14', '#dbdac9'],
      stroke: '#000000',
      background: '#f4e9d5',
    },
    {
      name: 'cako2',
      colors: ['#dbdac9', '#d55a3a', '#2a5c8a', '#b47b8c', '#7e7d14'],
      stroke: '#000000',
      background: '#000000',
    },
    {
      name: 'cako2_sub1',
      colors: ['#dbdac9', '#d55a3a', '#2a5c8a'],
      stroke: '#000000',
      background: '#000000',
    },
    {
      name: 'cako2_sub2',
      colors: ['#dbdac9', '#d55a3a', '#7e7d14'],
      stroke: '#000000',
      background: '#000000',
    },
  ];

  var mayo = [
    {
      name: 'mayo1',
      colors: ['#ea510e', '#ffd203', '#0255a3', '#039177', '#111111'],
      stroke: '#111111',
      background: '#fff',
    },
    {
      name: 'mayo2',
      colors: ['#ea663f', '#f9cc27', '#84afd7', '#7ca994', '#f1bbc9', '#242424'],
      stroke: '#2a2a2a',
      background: '#f5f6f1',
    },
    {
      name: 'mayo3',
      colors: ['#ea5b19', '#f8c9b9', '#137661', '#2a2a2a'],
      stroke: '#2a2a2a',
      background: '#f5f4f0',
    },
  ];

  var exposito = [
    {
      name: 'exposito',
      colors: [
        '#8bc9c3',
        '#ffae43',
        '#ea432c',
        '#228345',
        '#d1d7d3',
        '#524e9c',
        '#9dc35e',
        '#f0a1a1',
      ],
      stroke: '#fff',
      background: '#000000',
    },
    {
      name: 'exposito_sub1',
      colors: ['#8bc9c3', '#ffae43', '#ea432c', '#524e9c'],
      stroke: '#fff',
      background: '#000000',
    },
    {
      name: 'exposito_sub2',
      colors: ['#8bc9c3', '#ffae43', '#ea432c', '#524e9c', '#f0a1a1', '#228345'],
      stroke: '#fff',
      background: '#000000',
    },
    {
      name: 'exposito_sub3',
      colors: ['#ffae43', '#ea432c', '#524e9c', '#f0a1a1'],
      stroke: '#fff',
      background: '#000000',
    },
  ];

  const pals = misc.concat(
    ranganath,
    roygbivs,
    tundra,
    colourscafe,
    rohlfs,
    ducci,
    judson,
    iivonen,
    kovecses,
    tsuchimochi,
    duotone,
    hilda,
    spatial,
    jung,
    system,
    flourish,
    dale,
    cako,
    mayo,
    exposito
  );

  var palettes = pals.map((p) => {
    p.size = p.colors.length;
    return p;
  });

  function getRandom() {
    return palettes[Math.floor(Math.random() * palettes.length)];
  }

  function get(name) {
    if (name === undefined) return getRandom();
    return palettes.find(pal => pal.name == name);
  }

  function getNames() {
    return palettes.map(p => p.name);
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var seedRandom = createCommonjsModule(function (module) {

  var width = 256;// each RC4 output is 0 <= x < 256
  var chunks = 6;// at least six RC4 outputs for each double
  var digits = 52;// there are 52 significant digits in a double
  var pool = [];// pool: entropy pool starts empty
  var GLOBAL = typeof commonjsGlobal === 'undefined' ? window : commonjsGlobal;

  //
  // The following constants are related to IEEE 754 limits.
  //
  var startdenom = Math.pow(width, chunks),
      significance = Math.pow(2, digits),
      overflow = significance * 2,
      mask = width - 1;


  var oldRandom = Math.random;

  //
  // seedrandom()
  // This is the seedrandom function described above.
  //
  module.exports = function(seed, options) {
    if (options && options.global === true) {
      options.global = false;
      Math.random = module.exports(seed, options);
      options.global = true;
      return Math.random;
    }
    var use_entropy = (options && options.entropy) || false;
    var key = [];

    // Flatten the seed string or build one from local entropy if needed.
    var shortseed = mixkey(flatten(
      use_entropy ? [seed, tostring(pool)] :
      0 in arguments ? seed : autoseed(), 3), key);

    // Use the seed to initialize an ARC4 generator.
    var arc4 = new ARC4(key);

    // Mix the randomness into accumulated entropy.
    mixkey(tostring(arc4.S), pool);

    // Override Math.random

    // This function returns a random double in [0, 1) that contains
    // randomness in every bit of the mantissa of the IEEE 754 value.

    return function() {         // Closure to return a random double:
      var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
          d = startdenom,                 //   and denominator d = 2 ^ 48.
          x = 0;                          //   and no 'extra last byte'.
      while (n < significance) {          // Fill up all significant digits by
        n = (n + x) * width;              //   shifting numerator and
        d *= width;                       //   denominator and generating a
        x = arc4.g(1);                    //   new least-significant-byte.
      }
      while (n >= overflow) {             // To avoid rounding up, before adding
        n /= 2;                           //   last byte, shift everything
        d /= 2;                           //   right using integer Math until
        x >>>= 1;                         //   we have exactly the desired bits.
      }
      return (n + x) / d;                 // Form the number within [0, 1).
    };
  };

  module.exports.resetGlobal = function () {
    Math.random = oldRandom;
  };

  //
  // ARC4
  //
  // An ARC4 implementation.  The constructor takes a key in the form of
  // an array of at most (width) integers that should be 0 <= x < (width).
  //
  // The g(count) method returns a pseudorandom integer that concatenates
  // the next (count) outputs from ARC4.  Its return value is a number x
  // that is in the range 0 <= x < (width ^ count).
  //
  /** @constructor */
  function ARC4(key) {
    var t, keylen = key.length,
        me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

    // The empty key [] is treated as [0].
    if (!keylen) { key = [keylen++]; }

    // Set up S using the standard key scheduling algorithm.
    while (i < width) {
      s[i] = i++;
    }
    for (i = 0; i < width; i++) {
      s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
      s[j] = t;
    }

    // The "g" method returns the next (count) outputs as one number.
    (me.g = function(count) {
      // Using instance members instead of closure state nearly doubles speed.
      var t, r = 0,
          i = me.i, j = me.j, s = me.S;
      while (count--) {
        t = s[i = mask & (i + 1)];
        r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
      }
      me.i = i; me.j = j;
      return r;
      // For robust unpredictability discard an initial batch of values.
      // See http://www.rsa.com/rsalabs/node.asp?id=2009
    })(width);
  }

  //
  // flatten()
  // Converts an object tree to nested arrays of strings.
  //
  function flatten(obj, depth) {
    var result = [], typ = (typeof obj)[0], prop;
    if (depth && typ == 'o') {
      for (prop in obj) {
        try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
      }
    }
    return (result.length ? result : typ == 's' ? obj : obj + '\0');
  }

  //
  // mixkey()
  // Mixes a string seed into a key that is an array of integers, and
  // returns a shortened string seed that is equivalent to the result key.
  //
  function mixkey(seed, key) {
    var stringseed = seed + '', smear, j = 0;
    while (j < stringseed.length) {
      key[mask & j] =
        mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
    }
    return tostring(key);
  }

  //
  // autoseed()
  // Returns an object for autoseeding, using window.crypto if available.
  //
  /** @param {Uint8Array=} seed */
  function autoseed(seed) {
    try {
      GLOBAL.crypto.getRandomValues(seed = new Uint8Array(width));
      return tostring(seed);
    } catch (e) {
      return [+new Date, GLOBAL, GLOBAL.navigator && GLOBAL.navigator.plugins,
              GLOBAL.screen, tostring(pool)];
    }
  }

  //
  // tostring()
  // Converts an array of charcodes to a string
  //
  function tostring(a) {
    return String.fromCharCode.apply(0, a);
  }

  //
  // When seedrandom.js is loaded, we immediately mix a few bits
  // from the built-in RNG into the entropy pool.  Because we do
  // not want to intefere with determinstic PRNG state later,
  // seedrandom will not call Math.random on its own again after
  // initialization.
  //
  mixkey(Math.random(), pool);
  });
  var seedRandom_1 = seedRandom.resetGlobal;

  var chroma = createCommonjsModule(function (module, exports) {
  /**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   */

  (function (global, factory) {
      module.exports = factory();
  }(commonjsGlobal, (function () {
      var limit = function (x, min, max) {
          if ( min === void 0 ) min=0;
          if ( max === void 0 ) max=1;

          return x < min ? min : x > max ? max : x;
      };

      var clip_rgb = function (rgb) {
          rgb._clipped = false;
          rgb._unclipped = rgb.slice(0);
          for (var i=0; i<=3; i++) {
              if (i < 3) {
                  if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                  rgb[i] = limit(rgb[i], 0, 255);
              } else if (i === 3) {
                  rgb[i] = limit(rgb[i], 0, 1);
              }
          }
          return rgb;
      };

      // ported from jQuery's $.type
      var classToType = {};
      for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
          var name = list[i];

          classToType[("[object " + name + "]")] = name.toLowerCase();
      }
      var type = function(obj) {
          return classToType[Object.prototype.toString.call(obj)] || "object";
      };

      var unpack = function (args, keyOrder) {
          if ( keyOrder === void 0 ) keyOrder=null;

      	// if called with more than 3 arguments, we return the arguments
          if (args.length >= 3) { return Array.prototype.slice.call(args); }
          // with less than 3 args we check if first arg is object
          // and use the keyOrder string to extract and sort properties
      	if (type(args[0]) == 'object' && keyOrder) {
      		return keyOrder.split('')
      			.filter(function (k) { return args[0][k] !== undefined; })
      			.map(function (k) { return args[0][k]; });
      	}
      	// otherwise we just return the first argument
      	// (which we suppose is an array of args)
          return args[0];
      };

      var last = function (args) {
          if (args.length < 2) { return null; }
          var l = args.length-1;
          if (type(args[l]) == 'string') { return args[l].toLowerCase(); }
          return null;
      };

      var PI = Math.PI;

      var utils = {
      	clip_rgb: clip_rgb,
      	limit: limit,
      	type: type,
      	unpack: unpack,
      	last: last,
      	PI: PI,
      	TWOPI: PI*2,
      	PITHIRD: PI/3,
      	DEG2RAD: PI / 180,
      	RAD2DEG: 180 / PI
      };

      var input = {
      	format: {},
      	autodetect: []
      };

      var last$1 = utils.last;
      var clip_rgb$1 = utils.clip_rgb;
      var type$1 = utils.type;


      var Color = function Color() {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var me = this;
          if (type$1(args[0]) === 'object' &&
              args[0].constructor &&
              args[0].constructor === this.constructor) {
              // the argument is already a Color instance
              return args[0];
          }

          // last argument could be the mode
          var mode = last$1(args);
          var autodetect = false;

          if (!mode) {
              autodetect = true;
              if (!input.sorted) {
                  input.autodetect = input.autodetect.sort(function (a,b) { return b.p - a.p; });
                  input.sorted = true;
              }
              // auto-detect format
              for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
                  var chk = list[i];

                  mode = chk.test.apply(chk, args);
                  if (mode) { break; }
              }
          }

          if (input.format[mode]) {
              var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
              me._rgb = clip_rgb$1(rgb);
          } else {
              throw new Error('unknown format: '+args);
          }

          // add alpha channel
          if (me._rgb.length === 3) { me._rgb.push(1); }
      };

      Color.prototype.toString = function toString () {
          if (type$1(this.hex) == 'function') { return this.hex(); }
          return ("[" + (this._rgb.join(',')) + "]");
      };

      var Color_1 = Color;

      var chroma = function () {
      	var args = [], len = arguments.length;
      	while ( len-- ) args[ len ] = arguments[ len ];

      	return new (Function.prototype.bind.apply( chroma.Color, [ null ].concat( args) ));
      };

      chroma.Color = Color_1;
      chroma.version = '2.1.0';

      var chroma_1 = chroma;

      var unpack$1 = utils.unpack;
      var max = Math.max;

      var rgb2cmyk = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$1(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          r = r / 255;
          g = g / 255;
          b = b / 255;
          var k = 1 - max(r,max(g,b));
          var f = k < 1 ? 1 / (1-k) : 0;
          var c = (1-r-k) * f;
          var m = (1-g-k) * f;
          var y = (1-b-k) * f;
          return [c,m,y,k];
      };

      var rgb2cmyk_1 = rgb2cmyk;

      var unpack$2 = utils.unpack;

      var cmyk2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$2(args, 'cmyk');
          var c = args[0];
          var m = args[1];
          var y = args[2];
          var k = args[3];
          var alpha = args.length > 4 ? args[4] : 1;
          if (k === 1) { return [0,0,0,alpha]; }
          return [
              c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
              m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
              y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
              alpha
          ];
      };

      var cmyk2rgb_1 = cmyk2rgb;

      var unpack$3 = utils.unpack;
      var type$2 = utils.type;



      Color_1.prototype.cmyk = function() {
          return rgb2cmyk_1(this._rgb);
      };

      chroma_1.cmyk = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['cmyk']) ));
      };

      input.format.cmyk = cmyk2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$3(args, 'cmyk');
              if (type$2(args) === 'array' && args.length === 4) {
                  return 'cmyk';
              }
          }
      });

      var unpack$4 = utils.unpack;
      var last$2 = utils.last;
      var rnd = function (a) { return Math.round(a*100)/100; };

      /*
       * supported arguments:
       * - hsl2css(h,s,l)
       * - hsl2css(h,s,l,a)
       * - hsl2css([h,s,l], mode)
       * - hsl2css([h,s,l,a], mode)
       * - hsl2css({h,s,l,a}, mode)
       */
      var hsl2css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var hsla = unpack$4(args, 'hsla');
          var mode = last$2(args) || 'lsa';
          hsla[0] = rnd(hsla[0] || 0);
          hsla[1] = rnd(hsla[1]*100) + '%';
          hsla[2] = rnd(hsla[2]*100) + '%';
          if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
              hsla[3] = hsla.length > 3 ? hsla[3] : 1;
              mode = 'hsla';
          } else {
              hsla.length = 3;
          }
          return (mode + "(" + (hsla.join(',')) + ")");
      };

      var hsl2css_1 = hsl2css;

      var unpack$5 = utils.unpack;

      /*
       * supported arguments:
       * - rgb2hsl(r,g,b)
       * - rgb2hsl(r,g,b,a)
       * - rgb2hsl([r,g,b])
       * - rgb2hsl([r,g,b,a])
       * - rgb2hsl({r,g,b,a})
       */
      var rgb2hsl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$5(args, 'rgba');
          var r = args[0];
          var g = args[1];
          var b = args[2];

          r /= 255;
          g /= 255;
          b /= 255;

          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);

          var l = (max + min) / 2;
          var s, h;

          if (max === min){
              s = 0;
              h = Number.NaN;
          } else {
              s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
          }

          if (r == max) { h = (g - b) / (max - min); }
          else if (g == max) { h = 2 + (b - r) / (max - min); }
          else if (b == max) { h = 4 + (r - g) / (max - min); }

          h *= 60;
          if (h < 0) { h += 360; }
          if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
          return [h,s,l];
      };

      var rgb2hsl_1 = rgb2hsl;

      var unpack$6 = utils.unpack;
      var last$3 = utils.last;


      var round = Math.round;

      /*
       * supported arguments:
       * - rgb2css(r,g,b)
       * - rgb2css(r,g,b,a)
       * - rgb2css([r,g,b], mode)
       * - rgb2css([r,g,b,a], mode)
       * - rgb2css({r,g,b,a}, mode)
       */
      var rgb2css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgba = unpack$6(args, 'rgba');
          var mode = last$3(args) || 'rgb';
          if (mode.substr(0,3) == 'hsl') {
              return hsl2css_1(rgb2hsl_1(rgba), mode);
          }
          rgba[0] = round(rgba[0]);
          rgba[1] = round(rgba[1]);
          rgba[2] = round(rgba[2]);
          if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
              rgba[3] = rgba.length > 3 ? rgba[3] : 1;
              mode = 'rgba';
          }
          return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
      };

      var rgb2css_1 = rgb2css;

      var unpack$7 = utils.unpack;
      var round$1 = Math.round;

      var hsl2rgb = function () {
          var assign;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$7(args, 'hsl');
          var h = args[0];
          var s = args[1];
          var l = args[2];
          var r,g,b;
          if (s === 0) {
              r = g = b = l*255;
          } else {
              var t3 = [0,0,0];
              var c = [0,0,0];
              var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
              var t1 = 2 * l - t2;
              var h_ = h / 360;
              t3[0] = h_ + 1/3;
              t3[1] = h_;
              t3[2] = h_ - 1/3;
              for (var i=0; i<3; i++) {
                  if (t3[i] < 0) { t3[i] += 1; }
                  if (t3[i] > 1) { t3[i] -= 1; }
                  if (6 * t3[i] < 1)
                      { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                  else if (2 * t3[i] < 1)
                      { c[i] = t2; }
                  else if (3 * t3[i] < 2)
                      { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                  else
                      { c[i] = t1; }
              }
              (assign = [round$1(c[0]*255),round$1(c[1]*255),round$1(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
          }
          if (args.length > 3) {
              // keep alpha channel
              return [r,g,b,args[3]];
          }
          return [r,g,b,1];
      };

      var hsl2rgb_1 = hsl2rgb;

      var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
      var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

      var round$2 = Math.round;

      var css2rgb = function (css) {
          css = css.toLowerCase().trim();
          var m;

          if (input.format.named) {
              try {
                  return input.format.named(css);
              } catch (e) {
                  // eslint-disable-next-line
              }
          }

          // rgb(250,20,0)
          if ((m = css.match(RE_RGB))) {
              var rgb = m.slice(1,4);
              for (var i=0; i<3; i++) {
                  rgb[i] = +rgb[i];
              }
              rgb[3] = 1;  // default alpha
              return rgb;
          }

          // rgba(250,20,0,0.4)
          if ((m = css.match(RE_RGBA))) {
              var rgb$1 = m.slice(1,5);
              for (var i$1=0; i$1<4; i$1++) {
                  rgb$1[i$1] = +rgb$1[i$1];
              }
              return rgb$1;
          }

          // rgb(100%,0%,0%)
          if ((m = css.match(RE_RGB_PCT))) {
              var rgb$2 = m.slice(1,4);
              for (var i$2=0; i$2<3; i$2++) {
                  rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
              }
              rgb$2[3] = 1;  // default alpha
              return rgb$2;
          }

          // rgba(100%,0%,0%,0.4)
          if ((m = css.match(RE_RGBA_PCT))) {
              var rgb$3 = m.slice(1,5);
              for (var i$3=0; i$3<3; i$3++) {
                  rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
              }
              rgb$3[3] = +rgb$3[3];
              return rgb$3;
          }

          // hsl(0,100%,50%)
          if ((m = css.match(RE_HSL))) {
              var hsl = m.slice(1,4);
              hsl[1] *= 0.01;
              hsl[2] *= 0.01;
              var rgb$4 = hsl2rgb_1(hsl);
              rgb$4[3] = 1;
              return rgb$4;
          }

          // hsla(0,100%,50%,0.5)
          if ((m = css.match(RE_HSLA))) {
              var hsl$1 = m.slice(1,4);
              hsl$1[1] *= 0.01;
              hsl$1[2] *= 0.01;
              var rgb$5 = hsl2rgb_1(hsl$1);
              rgb$5[3] = +m[4];  // default alpha = 1
              return rgb$5;
          }
      };

      css2rgb.test = function (s) {
          return RE_RGB.test(s) ||
              RE_RGBA.test(s) ||
              RE_RGB_PCT.test(s) ||
              RE_RGBA_PCT.test(s) ||
              RE_HSL.test(s) ||
              RE_HSLA.test(s);
      };

      var css2rgb_1 = css2rgb;

      var type$3 = utils.type;




      Color_1.prototype.css = function(mode) {
          return rgb2css_1(this._rgb, mode);
      };

      chroma_1.css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['css']) ));
      };

      input.format.css = css2rgb_1;

      input.autodetect.push({
          p: 5,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                  return 'css';
              }
          }
      });

      var unpack$8 = utils.unpack;

      input.format.gl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgb = unpack$8(args, 'rgba');
          rgb[0] *= 255;
          rgb[1] *= 255;
          rgb[2] *= 255;
          return rgb;
      };

      chroma_1.gl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['gl']) ));
      };

      Color_1.prototype.gl = function() {
          var rgb = this._rgb;
          return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
      };

      var unpack$9 = utils.unpack;

      var rgb2hcg = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$9(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);
          var delta = max - min;
          var c = delta * 100 / 255;
          var _g = min / (255 - delta) * 100;
          var h;
          if (delta === 0) {
              h = Number.NaN;
          } else {
              if (r === max) { h = (g - b) / delta; }
              if (g === max) { h = 2+(b - r) / delta; }
              if (b === max) { h = 4+(r - g) / delta; }
              h *= 60;
              if (h < 0) { h += 360; }
          }
          return [h, c, _g];
      };

      var rgb2hcg_1 = rgb2hcg;

      var unpack$a = utils.unpack;
      var floor = Math.floor;

      /*
       * this is basically just HSV with some minor tweaks
       *
       * hue.. [0..360]
       * chroma .. [0..1]
       * grayness .. [0..1]
       */

      var hcg2rgb = function () {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$a(args, 'hcg');
          var h = args[0];
          var c = args[1];
          var _g = args[2];
          var r,g,b;
          _g = _g * 255;
          var _c = c * 255;
          if (c === 0) {
              r = g = b = _g;
          } else {
              if (h === 360) { h = 0; }
              if (h > 360) { h -= 360; }
              if (h < 0) { h += 360; }
              h /= 60;
              var i = floor(h);
              var f = h - i;
              var p = _g * (1 - c);
              var q = p + _c * (1 - f);
              var t = p + _c * f;
              var v = p + _c;
              switch (i) {
                  case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                  case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                  case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                  case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                  case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                  case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
              }
          }
          return [r, g, b, args.length > 3 ? args[3] : 1];
      };

      var hcg2rgb_1 = hcg2rgb;

      var unpack$b = utils.unpack;
      var type$4 = utils.type;






      Color_1.prototype.hcg = function() {
          return rgb2hcg_1(this._rgb);
      };

      chroma_1.hcg = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcg']) ));
      };

      input.format.hcg = hcg2rgb_1;

      input.autodetect.push({
          p: 1,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$b(args, 'hcg');
              if (type$4(args) === 'array' && args.length === 3) {
                  return 'hcg';
              }
          }
      });

      var unpack$c = utils.unpack;
      var last$4 = utils.last;
      var round$3 = Math.round;

      var rgb2hex = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$c(args, 'rgba');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var a = ref[3];
          var mode = last$4(args) || 'auto';
          if (a === undefined) { a = 1; }
          if (mode === 'auto') {
              mode = a < 1 ? 'rgba' : 'rgb';
          }
          r = round$3(r);
          g = round$3(g);
          b = round$3(b);
          var u = r << 16 | g << 8 | b;
          var str = "000000" + u.toString(16); //#.toUpperCase();
          str = str.substr(str.length - 6);
          var hxa = '0' + round$3(a * 255).toString(16);
          hxa = hxa.substr(hxa.length - 2);
          switch (mode.toLowerCase()) {
              case 'rgba': return ("#" + str + hxa);
              case 'argb': return ("#" + hxa + str);
              default: return ("#" + str);
          }
      };

      var rgb2hex_1 = rgb2hex;

      var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

      var hex2rgb = function (hex) {
          if (hex.match(RE_HEX)) {
              // remove optional leading #
              if (hex.length === 4 || hex.length === 7) {
                  hex = hex.substr(1);
              }
              // expand short-notation to full six-digit
              if (hex.length === 3) {
                  hex = hex.split('');
                  hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
              }
              var u = parseInt(hex, 16);
              var r = u >> 16;
              var g = u >> 8 & 0xFF;
              var b = u & 0xFF;
              return [r,g,b,1];
          }

          // match rgba hex format, eg #FF000077
          if (hex.match(RE_HEXA)) {
              if (hex.length === 5 || hex.length === 9) {
                  // remove optional leading #
                  hex = hex.substr(1);
              }
              // expand short-notation to full eight-digit
              if (hex.length === 4) {
                  hex = hex.split('');
                  hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
              }
              var u$1 = parseInt(hex, 16);
              var r$1 = u$1 >> 24 & 0xFF;
              var g$1 = u$1 >> 16 & 0xFF;
              var b$1 = u$1 >> 8 & 0xFF;
              var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
              return [r$1,g$1,b$1,a];
          }

          // we used to check for css colors here
          // if _input.css? and rgb = _input.css hex
          //     return rgb

          throw new Error(("unknown hex color: " + hex));
      };

      var hex2rgb_1 = hex2rgb;

      var type$5 = utils.type;




      Color_1.prototype.hex = function(mode) {
          return rgb2hex_1(this._rgb, mode);
      };

      chroma_1.hex = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hex']) ));
      };

      input.format.hex = hex2rgb_1;
      input.autodetect.push({
          p: 4,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$5(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                  return 'hex';
              }
          }
      });

      var unpack$d = utils.unpack;
      var TWOPI = utils.TWOPI;
      var min = Math.min;
      var sqrt = Math.sqrt;
      var acos = Math.acos;

      var rgb2hsi = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          borrowed from here:
          http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
          */
          var ref = unpack$d(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          r /= 255;
          g /= 255;
          b /= 255;
          var h;
          var min_ = min(r,g,b);
          var i = (r+g+b) / 3;
          var s = i > 0 ? 1 - min_/i : 0;
          if (s === 0) {
              h = NaN;
          } else {
              h = ((r-g)+(r-b)) / 2;
              h /= sqrt((r-g)*(r-g) + (r-b)*(g-b));
              h = acos(h);
              if (b > g) {
                  h = TWOPI - h;
              }
              h /= TWOPI;
          }
          return [h*360,s,i];
      };

      var rgb2hsi_1 = rgb2hsi;

      var unpack$e = utils.unpack;
      var limit$1 = utils.limit;
      var TWOPI$1 = utils.TWOPI;
      var PITHIRD = utils.PITHIRD;
      var cos = Math.cos;

      /*
       * hue [0..360]
       * saturation [0..1]
       * intensity [0..1]
       */
      var hsi2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          borrowed from here:
          http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
          */
          args = unpack$e(args, 'hsi');
          var h = args[0];
          var s = args[1];
          var i = args[2];
          var r,g,b;

          if (isNaN(h)) { h = 0; }
          if (isNaN(s)) { s = 0; }
          // normalize hue
          if (h > 360) { h -= 360; }
          if (h < 0) { h += 360; }
          h /= 360;
          if (h < 1/3) {
              b = (1-s)/3;
              r = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              g = 1 - (b+r);
          } else if (h < 2/3) {
              h -= 1/3;
              r = (1-s)/3;
              g = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              b = 1 - (r+g);
          } else {
              h -= 2/3;
              g = (1-s)/3;
              b = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              r = 1 - (g+b);
          }
          r = limit$1(i*r*3);
          g = limit$1(i*g*3);
          b = limit$1(i*b*3);
          return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
      };

      var hsi2rgb_1 = hsi2rgb;

      var unpack$f = utils.unpack;
      var type$6 = utils.type;






      Color_1.prototype.hsi = function() {
          return rgb2hsi_1(this._rgb);
      };

      chroma_1.hsi = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsi']) ));
      };

      input.format.hsi = hsi2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$f(args, 'hsi');
              if (type$6(args) === 'array' && args.length === 3) {
                  return 'hsi';
              }
          }
      });

      var unpack$g = utils.unpack;
      var type$7 = utils.type;






      Color_1.prototype.hsl = function() {
          return rgb2hsl_1(this._rgb);
      };

      chroma_1.hsl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsl']) ));
      };

      input.format.hsl = hsl2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$g(args, 'hsl');
              if (type$7(args) === 'array' && args.length === 3) {
                  return 'hsl';
              }
          }
      });

      var unpack$h = utils.unpack;
      var min$1 = Math.min;
      var max$1 = Math.max;

      /*
       * supported arguments:
       * - rgb2hsv(r,g,b)
       * - rgb2hsv([r,g,b])
       * - rgb2hsv({r,g,b})
       */
      var rgb2hsl$1 = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$h(args, 'rgb');
          var r = args[0];
          var g = args[1];
          var b = args[2];
          var min_ = min$1(r, g, b);
          var max_ = max$1(r, g, b);
          var delta = max_ - min_;
          var h,s,v;
          v = max_ / 255.0;
          if (max_ === 0) {
              h = Number.NaN;
              s = 0;
          } else {
              s = delta / max_;
              if (r === max_) { h = (g - b) / delta; }
              if (g === max_) { h = 2+(b - r) / delta; }
              if (b === max_) { h = 4+(r - g) / delta; }
              h *= 60;
              if (h < 0) { h += 360; }
          }
          return [h, s, v]
      };

      var rgb2hsv = rgb2hsl$1;

      var unpack$i = utils.unpack;
      var floor$1 = Math.floor;

      var hsv2rgb = function () {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$i(args, 'hsv');
          var h = args[0];
          var s = args[1];
          var v = args[2];
          var r,g,b;
          v *= 255;
          if (s === 0) {
              r = g = b = v;
          } else {
              if (h === 360) { h = 0; }
              if (h > 360) { h -= 360; }
              if (h < 0) { h += 360; }
              h /= 60;

              var i = floor$1(h);
              var f = h - i;
              var p = v * (1 - s);
              var q = v * (1 - s * f);
              var t = v * (1 - s * (1 - f));

              switch (i) {
                  case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                  case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                  case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                  case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                  case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                  case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
              }
          }
          return [r,g,b,args.length > 3?args[3]:1];
      };

      var hsv2rgb_1 = hsv2rgb;

      var unpack$j = utils.unpack;
      var type$8 = utils.type;






      Color_1.prototype.hsv = function() {
          return rgb2hsv(this._rgb);
      };

      chroma_1.hsv = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsv']) ));
      };

      input.format.hsv = hsv2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$j(args, 'hsv');
              if (type$8(args) === 'array' && args.length === 3) {
                  return 'hsv';
              }
          }
      });

      var labConstants = {
          // Corresponds roughly to RGB brighter/darker
          Kn: 18,

          // D65 standard referent
          Xn: 0.950470,
          Yn: 1,
          Zn: 1.088830,

          t0: 0.137931034,  // 4 / 29
          t1: 0.206896552,  // 6 / 29
          t2: 0.12841855,   // 3 * t1 * t1
          t3: 0.008856452,  // t1 * t1 * t1
      };

      var unpack$k = utils.unpack;
      var pow = Math.pow;

      var rgb2lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$k(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var ref$1 = rgb2xyz(r,g,b);
          var x = ref$1[0];
          var y = ref$1[1];
          var z = ref$1[2];
          var l = 116 * y - 16;
          return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
      };

      var rgb_xyz = function (r) {
          if ((r /= 255) <= 0.04045) { return r / 12.92; }
          return pow((r + 0.055) / 1.055, 2.4);
      };

      var xyz_lab = function (t) {
          if (t > labConstants.t3) { return pow(t, 1 / 3); }
          return t / labConstants.t2 + labConstants.t0;
      };

      var rgb2xyz = function (r,g,b) {
          r = rgb_xyz(r);
          g = rgb_xyz(g);
          b = rgb_xyz(b);
          var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
          var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
          var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
          return [x,y,z];
      };

      var rgb2lab_1 = rgb2lab;

      var unpack$l = utils.unpack;
      var pow$1 = Math.pow;

      /*
       * L* [0..100]
       * a [-100..100]
       * b [-100..100]
       */
      var lab2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$l(args, 'lab');
          var l = args[0];
          var a = args[1];
          var b = args[2];
          var x,y,z, r,g,b_;

          y = (l + 16) / 116;
          x = isNaN(a) ? y : y + a / 500;
          z = isNaN(b) ? y : y - b / 200;

          y = labConstants.Yn * lab_xyz(y);
          x = labConstants.Xn * lab_xyz(x);
          z = labConstants.Zn * lab_xyz(z);

          r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
          g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
          b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

          return [r,g,b_,args.length > 3 ? args[3] : 1];
      };

      var xyz_rgb = function (r) {
          return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055)
      };

      var lab_xyz = function (t) {
          return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0)
      };

      var lab2rgb_1 = lab2rgb;

      var unpack$m = utils.unpack;
      var type$9 = utils.type;






      Color_1.prototype.lab = function() {
          return rgb2lab_1(this._rgb);
      };

      chroma_1.lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lab']) ));
      };

      input.format.lab = lab2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$m(args, 'lab');
              if (type$9(args) === 'array' && args.length === 3) {
                  return 'lab';
              }
          }
      });

      var unpack$n = utils.unpack;
      var RAD2DEG = utils.RAD2DEG;
      var sqrt$1 = Math.sqrt;
      var atan2 = Math.atan2;
      var round$4 = Math.round;

      var lab2lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$n(args, 'lab');
          var l = ref[0];
          var a = ref[1];
          var b = ref[2];
          var c = sqrt$1(a * a + b * b);
          var h = (atan2(b, a) * RAD2DEG + 360) % 360;
          if (round$4(c*10000) === 0) { h = Number.NaN; }
          return [l, c, h];
      };

      var lab2lch_1 = lab2lch;

      var unpack$o = utils.unpack;



      var rgb2lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$o(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var ref$1 = rgb2lab_1(r,g,b);
          var l = ref$1[0];
          var a = ref$1[1];
          var b_ = ref$1[2];
          return lab2lch_1(l,a,b_);
      };

      var rgb2lch_1 = rgb2lch;

      var unpack$p = utils.unpack;
      var DEG2RAD = utils.DEG2RAD;
      var sin = Math.sin;
      var cos$1 = Math.cos;

      var lch2lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
          These formulas were invented by David Dalrymple to obtain maximum contrast without going
          out of gamut if the parameters are in the range 0-1.

          A saturation multiplier was added by Gregor Aisch
          */
          var ref = unpack$p(args, 'lch');
          var l = ref[0];
          var c = ref[1];
          var h = ref[2];
          if (isNaN(h)) { h = 0; }
          h = h * DEG2RAD;
          return [l, cos$1(h) * c, sin(h) * c]
      };

      var lch2lab_1 = lch2lab;

      var unpack$q = utils.unpack;



      var lch2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$q(args, 'lch');
          var l = args[0];
          var c = args[1];
          var h = args[2];
          var ref = lch2lab_1 (l,c,h);
          var L = ref[0];
          var a = ref[1];
          var b_ = ref[2];
          var ref$1 = lab2rgb_1 (L,a,b_);
          var r = ref$1[0];
          var g = ref$1[1];
          var b = ref$1[2];
          return [r, g, b, args.length > 3 ? args[3] : 1];
      };

      var lch2rgb_1 = lch2rgb;

      var unpack$r = utils.unpack;


      var hcl2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var hcl = unpack$r(args, 'hcl').reverse();
          return lch2rgb_1.apply(void 0, hcl);
      };

      var hcl2rgb_1 = hcl2rgb;

      var unpack$s = utils.unpack;
      var type$a = utils.type;






      Color_1.prototype.lch = function() { return rgb2lch_1(this._rgb); };
      Color_1.prototype.hcl = function() { return rgb2lch_1(this._rgb).reverse(); };

      chroma_1.lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lch']) ));
      };
      chroma_1.hcl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcl']) ));
      };

      input.format.lch = lch2rgb_1;
      input.format.hcl = hcl2rgb_1;

      ['lch','hcl'].forEach(function (m) { return input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$s(args, m);
              if (type$a(args) === 'array' && args.length === 3) {
                  return m;
              }
          }
      }); });

      /**
      	X11 color names

      	http://www.w3.org/TR/css3-color/#svg-color
      */

      var w3cx11 = {
          aliceblue: '#f0f8ff',
          antiquewhite: '#faebd7',
          aqua: '#00ffff',
          aquamarine: '#7fffd4',
          azure: '#f0ffff',
          beige: '#f5f5dc',
          bisque: '#ffe4c4',
          black: '#000000',
          blanchedalmond: '#ffebcd',
          blue: '#0000ff',
          blueviolet: '#8a2be2',
          brown: '#a52a2a',
          burlywood: '#deb887',
          cadetblue: '#5f9ea0',
          chartreuse: '#7fff00',
          chocolate: '#d2691e',
          coral: '#ff7f50',
          cornflower: '#6495ed',
          cornflowerblue: '#6495ed',
          cornsilk: '#fff8dc',
          crimson: '#dc143c',
          cyan: '#00ffff',
          darkblue: '#00008b',
          darkcyan: '#008b8b',
          darkgoldenrod: '#b8860b',
          darkgray: '#a9a9a9',
          darkgreen: '#006400',
          darkgrey: '#a9a9a9',
          darkkhaki: '#bdb76b',
          darkmagenta: '#8b008b',
          darkolivegreen: '#556b2f',
          darkorange: '#ff8c00',
          darkorchid: '#9932cc',
          darkred: '#8b0000',
          darksalmon: '#e9967a',
          darkseagreen: '#8fbc8f',
          darkslateblue: '#483d8b',
          darkslategray: '#2f4f4f',
          darkslategrey: '#2f4f4f',
          darkturquoise: '#00ced1',
          darkviolet: '#9400d3',
          deeppink: '#ff1493',
          deepskyblue: '#00bfff',
          dimgray: '#696969',
          dimgrey: '#696969',
          dodgerblue: '#1e90ff',
          firebrick: '#b22222',
          floralwhite: '#fffaf0',
          forestgreen: '#228b22',
          fuchsia: '#ff00ff',
          gainsboro: '#dcdcdc',
          ghostwhite: '#f8f8ff',
          gold: '#ffd700',
          goldenrod: '#daa520',
          gray: '#808080',
          green: '#008000',
          greenyellow: '#adff2f',
          grey: '#808080',
          honeydew: '#f0fff0',
          hotpink: '#ff69b4',
          indianred: '#cd5c5c',
          indigo: '#4b0082',
          ivory: '#fffff0',
          khaki: '#f0e68c',
          laserlemon: '#ffff54',
          lavender: '#e6e6fa',
          lavenderblush: '#fff0f5',
          lawngreen: '#7cfc00',
          lemonchiffon: '#fffacd',
          lightblue: '#add8e6',
          lightcoral: '#f08080',
          lightcyan: '#e0ffff',
          lightgoldenrod: '#fafad2',
          lightgoldenrodyellow: '#fafad2',
          lightgray: '#d3d3d3',
          lightgreen: '#90ee90',
          lightgrey: '#d3d3d3',
          lightpink: '#ffb6c1',
          lightsalmon: '#ffa07a',
          lightseagreen: '#20b2aa',
          lightskyblue: '#87cefa',
          lightslategray: '#778899',
          lightslategrey: '#778899',
          lightsteelblue: '#b0c4de',
          lightyellow: '#ffffe0',
          lime: '#00ff00',
          limegreen: '#32cd32',
          linen: '#faf0e6',
          magenta: '#ff00ff',
          maroon: '#800000',
          maroon2: '#7f0000',
          maroon3: '#b03060',
          mediumaquamarine: '#66cdaa',
          mediumblue: '#0000cd',
          mediumorchid: '#ba55d3',
          mediumpurple: '#9370db',
          mediumseagreen: '#3cb371',
          mediumslateblue: '#7b68ee',
          mediumspringgreen: '#00fa9a',
          mediumturquoise: '#48d1cc',
          mediumvioletred: '#c71585',
          midnightblue: '#191970',
          mintcream: '#f5fffa',
          mistyrose: '#ffe4e1',
          moccasin: '#ffe4b5',
          navajowhite: '#ffdead',
          navy: '#000080',
          oldlace: '#fdf5e6',
          olive: '#808000',
          olivedrab: '#6b8e23',
          orange: '#ffa500',
          orangered: '#ff4500',
          orchid: '#da70d6',
          palegoldenrod: '#eee8aa',
          palegreen: '#98fb98',
          paleturquoise: '#afeeee',
          palevioletred: '#db7093',
          papayawhip: '#ffefd5',
          peachpuff: '#ffdab9',
          peru: '#cd853f',
          pink: '#ffc0cb',
          plum: '#dda0dd',
          powderblue: '#b0e0e6',
          purple: '#800080',
          purple2: '#7f007f',
          purple3: '#a020f0',
          rebeccapurple: '#663399',
          red: '#ff0000',
          rosybrown: '#bc8f8f',
          royalblue: '#4169e1',
          saddlebrown: '#8b4513',
          salmon: '#fa8072',
          sandybrown: '#f4a460',
          seagreen: '#2e8b57',
          seashell: '#fff5ee',
          sienna: '#a0522d',
          silver: '#c0c0c0',
          skyblue: '#87ceeb',
          slateblue: '#6a5acd',
          slategray: '#708090',
          slategrey: '#708090',
          snow: '#fffafa',
          springgreen: '#00ff7f',
          steelblue: '#4682b4',
          tan: '#d2b48c',
          teal: '#008080',
          thistle: '#d8bfd8',
          tomato: '#ff6347',
          turquoise: '#40e0d0',
          violet: '#ee82ee',
          wheat: '#f5deb3',
          white: '#ffffff',
          whitesmoke: '#f5f5f5',
          yellow: '#ffff00',
          yellowgreen: '#9acd32'
      };

      var w3cx11_1 = w3cx11;

      var type$b = utils.type;





      Color_1.prototype.name = function() {
          var hex = rgb2hex_1(this._rgb, 'rgb');
          for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
              var n = list[i];

              if (w3cx11_1[n] === hex) { return n.toLowerCase(); }
          }
          return hex;
      };

      input.format.named = function (name) {
          name = name.toLowerCase();
          if (w3cx11_1[name]) { return hex2rgb_1(w3cx11_1[name]); }
          throw new Error('unknown color name: '+name);
      };

      input.autodetect.push({
          p: 5,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                  return 'named';
              }
          }
      });

      var unpack$t = utils.unpack;

      var rgb2num = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$t(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          return (r << 16) + (g << 8) + b;
      };

      var rgb2num_1 = rgb2num;

      var type$c = utils.type;

      var num2rgb = function (num) {
          if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
              var r = num >> 16;
              var g = (num >> 8) & 0xFF;
              var b = num & 0xFF;
              return [r,g,b,1];
          }
          throw new Error("unknown num color: "+num);
      };

      var num2rgb_1 = num2rgb;

      var type$d = utils.type;



      Color_1.prototype.num = function() {
          return rgb2num_1(this._rgb);
      };

      chroma_1.num = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['num']) ));
      };

      input.format.num = num2rgb_1;

      input.autodetect.push({
          p: 5,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                  return 'num';
              }
          }
      });

      var unpack$u = utils.unpack;
      var type$e = utils.type;
      var round$5 = Math.round;

      Color_1.prototype.rgb = function(rnd) {
          if ( rnd === void 0 ) rnd=true;

          if (rnd === false) { return this._rgb.slice(0,3); }
          return this._rgb.slice(0,3).map(round$5);
      };

      Color_1.prototype.rgba = function(rnd) {
          if ( rnd === void 0 ) rnd=true;

          return this._rgb.slice(0,4).map(function (v,i) {
              return i<3 ? (rnd === false ? v : round$5(v)) : v;
          });
      };

      chroma_1.rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['rgb']) ));
      };

      input.format.rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgba = unpack$u(args, 'rgba');
          if (rgba[3] === undefined) { rgba[3] = 1; }
          return rgba;
      };

      input.autodetect.push({
          p: 3,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$u(args, 'rgba');
              if (type$e(args) === 'array' && (args.length === 3 ||
                  args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                  return 'rgb';
              }
          }
      });

      /*
       * Based on implementation by Neil Bartlett
       * https://github.com/neilbartlett/color-temperature
       */

      var log = Math.log;

      var temperature2rgb = function (kelvin) {
          var temp = kelvin / 100;
          var r,g,b;
          if (temp < 66) {
              r = 255;
              g = -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log(g);
              b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log(b);
          } else {
              r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log(r);
              g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log(g);
              b = 255;
          }
          return [r,g,b,1];
      };

      var temperature2rgb_1 = temperature2rgb;

      /*
       * Based on implementation by Neil Bartlett
       * https://github.com/neilbartlett/color-temperature
       **/


      var unpack$v = utils.unpack;
      var round$6 = Math.round;

      var rgb2temperature = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgb = unpack$v(args, 'rgb');
          var r = rgb[0], b = rgb[2];
          var minTemp = 1000;
          var maxTemp = 40000;
          var eps = 0.4;
          var temp;
          while (maxTemp - minTemp > eps) {
              temp = (maxTemp + minTemp) * 0.5;
              var rgb$1 = temperature2rgb_1(temp);
              if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                  maxTemp = temp;
              } else {
                  minTemp = temp;
              }
          }
          return round$6(temp);
      };

      var rgb2temperature_1 = rgb2temperature;

      Color_1.prototype.temp =
      Color_1.prototype.kelvin =
      Color_1.prototype.temperature = function() {
          return rgb2temperature_1(this._rgb);
      };

      chroma_1.temp =
      chroma_1.kelvin =
      chroma_1.temperature = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['temp']) ));
      };

      input.format.temp =
      input.format.kelvin =
      input.format.temperature = temperature2rgb_1;

      var type$f = utils.type;

      Color_1.prototype.alpha = function(a, mutate) {
          if ( mutate === void 0 ) mutate=false;

          if (a !== undefined && type$f(a) === 'number') {
              if (mutate) {
                  this._rgb[3] = a;
                  return this;
              }
              return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
          }
          return this._rgb[3];
      };

      Color_1.prototype.clipped = function() {
          return this._rgb._clipped || false;
      };

      Color_1.prototype.darken = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	var me = this;
      	var lab = me.lab();
      	lab[0] -= labConstants.Kn * amount;
      	return new Color_1(lab, 'lab').alpha(me.alpha(), true);
      };

      Color_1.prototype.brighten = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	return this.darken(-amount);
      };

      Color_1.prototype.darker = Color_1.prototype.darken;
      Color_1.prototype.brighter = Color_1.prototype.brighten;

      Color_1.prototype.get = function(mc) {
          var ref = mc.split('.');
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
              var i = mode.indexOf(channel);
              if (i > -1) { return src[i]; }
              throw new Error(("unknown channel " + channel + " in mode " + mode));
          } else {
              return src;
          }
      };

      var type$g = utils.type;
      var pow$2 = Math.pow;

      var EPS = 1e-7;
      var MAX_ITER = 20;

      Color_1.prototype.luminance = function(lum) {
          if (lum !== undefined && type$g(lum) === 'number') {
              if (lum === 0) {
                  // return pure black
                  return new Color_1([0,0,0,this._rgb[3]], 'rgb');
              }
              if (lum === 1) {
                  // return pure white
                  return new Color_1([255,255,255,this._rgb[3]], 'rgb');
              }
              // compute new color using...
              var cur_lum = this.luminance();
              var mode = 'rgb';
              var max_iter = MAX_ITER;

              var test = function (low, high) {
                  var mid = low.interpolate(high, 0.5, mode);
                  var lm = mid.luminance();
                  if (Math.abs(lum - lm) < EPS || !max_iter--) {
                      // close enough
                      return mid;
                  }
                  return lm > lum ? test(low, mid) : test(mid, high);
              };

              var rgb = (cur_lum > lum ? test(new Color_1([0,0,0]), this) : test(this, new Color_1([255,255,255]))).rgb();
              return new Color_1(rgb.concat( [this._rgb[3]]));
          }
          return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
      };


      var rgb2luminance = function (r,g,b) {
          // relative luminance
          // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
          r = luminance_x(r);
          g = luminance_x(g);
          b = luminance_x(b);
          return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };

      var luminance_x = function (x) {
          x /= 255;
          return x <= 0.03928 ? x/12.92 : pow$2((x+0.055)/1.055, 2.4);
      };

      var interpolator = {};

      var type$h = utils.type;


      var mix = function (col1, col2, f) {
          if ( f === void 0 ) f=0.5;
          var rest = [], len = arguments.length - 3;
          while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

          var mode = rest[0] || 'lrgb';
          if (!interpolator[mode] && !rest.length) {
              // fall back to the first supported mode
              mode = Object.keys(interpolator)[0];
          }
          if (!interpolator[mode]) {
              throw new Error(("interpolation mode " + mode + " is not defined"));
          }
          if (type$h(col1) !== 'object') { col1 = new Color_1(col1); }
          if (type$h(col2) !== 'object') { col2 = new Color_1(col2); }
          return interpolator[mode](col1, col2, f)
              .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
      };

      Color_1.prototype.mix =
      Color_1.prototype.interpolate = function(col2, f) {
      	if ( f === void 0 ) f=0.5;
      	var rest = [], len = arguments.length - 2;
      	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

      	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
      };

      Color_1.prototype.premultiply = function(mutate) {
      	if ( mutate === void 0 ) mutate=false;

      	var rgb = this._rgb;
      	var a = rgb[3];
      	if (mutate) {
      		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
      		return this;
      	} else {
      		return new Color_1([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
      	}
      };

      Color_1.prototype.saturate = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	var me = this;
      	var lch = me.lch();
      	lch[1] += labConstants.Kn * amount;
      	if (lch[1] < 0) { lch[1] = 0; }
      	return new Color_1(lch, 'lch').alpha(me.alpha(), true);
      };

      Color_1.prototype.desaturate = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	return this.saturate(-amount);
      };

      var type$i = utils.type;

      Color_1.prototype.set = function(mc, value, mutate) {
          if ( mutate === void 0 ) mutate=false;

          var ref = mc.split('.');
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
              var i = mode.indexOf(channel);
              if (i > -1) {
                  if (type$i(value) == 'string') {
                      switch(value.charAt(0)) {
                          case '+': src[i] += +value; break;
                          case '-': src[i] += +value; break;
                          case '*': src[i] *= +(value.substr(1)); break;
                          case '/': src[i] /= +(value.substr(1)); break;
                          default: src[i] = +value;
                      }
                  } else if (type$i(value) === 'number') {
                      src[i] = value;
                  } else {
                      throw new Error("unsupported value for Color.set");
                  }
                  var out = new Color_1(src, mode);
                  if (mutate) {
                      this._rgb = out._rgb;
                      return this;
                  }
                  return out;
              }
              throw new Error(("unknown channel " + channel + " in mode " + mode));
          } else {
              return src;
          }
      };

      var rgb$1 = function (col1, col2, f) {
          var xyz0 = col1._rgb;
          var xyz1 = col2._rgb;
          return new Color_1(
              xyz0[0] + f * (xyz1[0]-xyz0[0]),
              xyz0[1] + f * (xyz1[1]-xyz0[1]),
              xyz0[2] + f * (xyz1[2]-xyz0[2]),
              'rgb'
          )
      };

      // register interpolator
      interpolator.rgb = rgb$1;

      var sqrt$2 = Math.sqrt;
      var pow$3 = Math.pow;

      var lrgb = function (col1, col2, f) {
          var ref = col1._rgb;
          var x1 = ref[0];
          var y1 = ref[1];
          var z1 = ref[2];
          var ref$1 = col2._rgb;
          var x2 = ref$1[0];
          var y2 = ref$1[1];
          var z2 = ref$1[2];
          return new Color_1(
              sqrt$2(pow$3(x1,2) * (1-f) + pow$3(x2,2) * f),
              sqrt$2(pow$3(y1,2) * (1-f) + pow$3(y2,2) * f),
              sqrt$2(pow$3(z1,2) * (1-f) + pow$3(z2,2) * f),
              'rgb'
          )
      };

      // register interpolator
      interpolator.lrgb = lrgb;

      var lab$1 = function (col1, col2, f) {
          var xyz0 = col1.lab();
          var xyz1 = col2.lab();
          return new Color_1(
              xyz0[0] + f * (xyz1[0]-xyz0[0]),
              xyz0[1] + f * (xyz1[1]-xyz0[1]),
              xyz0[2] + f * (xyz1[2]-xyz0[2]),
              'lab'
          )
      };

      // register interpolator
      interpolator.lab = lab$1;

      var _hsx = function (col1, col2, f, m) {
          var assign, assign$1;

          var xyz0, xyz1;
          if (m === 'hsl') {
              xyz0 = col1.hsl();
              xyz1 = col2.hsl();
          } else if (m === 'hsv') {
              xyz0 = col1.hsv();
              xyz1 = col2.hsv();
          } else if (m === 'hcg') {
              xyz0 = col1.hcg();
              xyz1 = col2.hcg();
          } else if (m === 'hsi') {
              xyz0 = col1.hsi();
              xyz1 = col2.hsi();
          } else if (m === 'lch' || m === 'hcl') {
              m = 'hcl';
              xyz0 = col1.hcl();
              xyz1 = col2.hcl();
          }

          var hue0, hue1, sat0, sat1, lbv0, lbv1;
          if (m.substr(0, 1) === 'h') {
              (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
              (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
          }

          var sat, hue, lbv, dh;

          if (!isNaN(hue0) && !isNaN(hue1)) {
              // both colors have hue
              if (hue1 > hue0 && hue1 - hue0 > 180) {
                  dh = hue1-(hue0+360);
              } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                  dh = hue1+360-hue0;
              } else{
                  dh = hue1 - hue0;
              }
              hue = hue0 + f * dh;
          } else if (!isNaN(hue0)) {
              hue = hue0;
              if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
          } else if (!isNaN(hue1)) {
              hue = hue1;
              if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
          } else {
              hue = Number.NaN;
          }

          if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
          lbv = lbv0 + f * (lbv1-lbv0);
          return new Color_1([hue, sat, lbv], m);
      };

      var lch$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'lch');
      };

      // register interpolator
      interpolator.lch = lch$1;
      interpolator.hcl = lch$1;

      var num$1 = function (col1, col2, f) {
          var c1 = col1.num();
          var c2 = col2.num();
          return new Color_1(c1 + f * (c2-c1), 'num')
      };

      // register interpolator
      interpolator.num = num$1;

      var hcg$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hcg');
      };

      // register interpolator
      interpolator.hcg = hcg$1;

      var hsi$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsi');
      };

      // register interpolator
      interpolator.hsi = hsi$1;

      var hsl$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsl');
      };

      // register interpolator
      interpolator.hsl = hsl$1;

      var hsv$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsv');
      };

      // register interpolator
      interpolator.hsv = hsv$1;

      var clip_rgb$2 = utils.clip_rgb;
      var pow$4 = Math.pow;
      var sqrt$3 = Math.sqrt;
      var PI$1 = Math.PI;
      var cos$2 = Math.cos;
      var sin$1 = Math.sin;
      var atan2$1 = Math.atan2;

      var average = function (colors, mode, weights) {
          if ( mode === void 0 ) mode='lrgb';
          if ( weights === void 0 ) weights=null;

          var l = colors.length;
          if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
          // normalize weights
          var k = l / weights.reduce(function(a, b) { return a + b; });
          weights.forEach(function (w,i) { weights[i] *= k; });
          // convert colors to Color objects
          colors = colors.map(function (c) { return new Color_1(c); });
          if (mode === 'lrgb') {
              return _average_lrgb(colors, weights)
          }
          var first = colors.shift();
          var xyz = first.get(mode);
          var cnt = [];
          var dx = 0;
          var dy = 0;
          // initial color
          for (var i=0; i<xyz.length; i++) {
              xyz[i] = (xyz[i] || 0) * weights[0];
              cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
              if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                  var A = xyz[i] / 180 * PI$1;
                  dx += cos$2(A) * weights[0];
                  dy += sin$1(A) * weights[0];
              }
          }

          var alpha = first.alpha() * weights[0];
          colors.forEach(function (c,ci) {
              var xyz2 = c.get(mode);
              alpha += c.alpha() * weights[ci+1];
              for (var i=0; i<xyz.length; i++) {
                  if (!isNaN(xyz2[i])) {
                      cnt[i] += weights[ci+1];
                      if (mode.charAt(i) === 'h') {
                          var A = xyz2[i] / 180 * PI$1;
                          dx += cos$2(A) * weights[ci+1];
                          dy += sin$1(A) * weights[ci+1];
                      } else {
                          xyz[i] += xyz2[i] * weights[ci+1];
                      }
                  }
              }
          });

          for (var i$1=0; i$1<xyz.length; i$1++) {
              if (mode.charAt(i$1) === 'h') {
                  var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                  while (A$1 < 0) { A$1 += 360; }
                  while (A$1 >= 360) { A$1 -= 360; }
                  xyz[i$1] = A$1;
              } else {
                  xyz[i$1] = xyz[i$1]/cnt[i$1];
              }
          }
          alpha /= l;
          return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
      };


      var _average_lrgb = function (colors, weights) {
          var l = colors.length;
          var xyz = [0,0,0,0];
          for (var i=0; i < colors.length; i++) {
              var col = colors[i];
              var f = weights[i] / l;
              var rgb = col._rgb;
              xyz[0] += pow$4(rgb[0],2) * f;
              xyz[1] += pow$4(rgb[1],2) * f;
              xyz[2] += pow$4(rgb[2],2) * f;
              xyz[3] += rgb[3] * f;
          }
          xyz[0] = sqrt$3(xyz[0]);
          xyz[1] = sqrt$3(xyz[1]);
          xyz[2] = sqrt$3(xyz[2]);
          if (xyz[3] > 0.9999999) { xyz[3] = 1; }
          return new Color_1(clip_rgb$2(xyz));
      };

      // minimal multi-purpose interface

      // @requires utils color analyze


      var type$j = utils.type;

      var pow$5 = Math.pow;

      var scale = function(colors) {

          // constructor
          var _mode = 'rgb';
          var _nacol = chroma_1('#ccc');
          var _spread = 0;
          // const _fixed = false;
          var _domain = [0, 1];
          var _pos = [];
          var _padding = [0,0];
          var _classes = false;
          var _colors = [];
          var _out = false;
          var _min = 0;
          var _max = 1;
          var _correctLightness = false;
          var _colorCache = {};
          var _useCache = true;
          var _gamma = 1;

          // private methods

          var setColors = function(colors) {
              colors = colors || ['#fff', '#000'];
              if (colors && type$j(colors) === 'string' && chroma_1.brewer &&
                  chroma_1.brewer[colors.toLowerCase()]) {
                  colors = chroma_1.brewer[colors.toLowerCase()];
              }
              if (type$j(colors) === 'array') {
                  // handle single color
                  if (colors.length === 1) {
                      colors = [colors[0], colors[0]];
                  }
                  // make a copy of the colors
                  colors = colors.slice(0);
                  // convert to chroma classes
                  for (var c=0; c<colors.length; c++) {
                      colors[c] = chroma_1(colors[c]);
                  }
                  // auto-fill color position
                  _pos.length = 0;
                  for (var c$1=0; c$1<colors.length; c$1++) {
                      _pos.push(c$1/(colors.length-1));
                  }
              }
              resetCache();
              return _colors = colors;
          };

          var getClass = function(value) {
              if (_classes != null) {
                  var n = _classes.length-1;
                  var i = 0;
                  while (i < n && value >= _classes[i]) {
                      i++;
                  }
                  return i-1;
              }
              return 0;
          };

          var tMapLightness = function (t) { return t; };
          var tMapDomain = function (t) { return t; };

          // const classifyValue = function(value) {
          //     let val = value;
          //     if (_classes.length > 2) {
          //         const n = _classes.length-1;
          //         const i = getClass(value);
          //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
          //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
          //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
          //     }
          //     return val;
          // };

          var getColor = function(val, bypassMap) {
              var col, t;
              if (bypassMap == null) { bypassMap = false; }
              if (isNaN(val) || (val === null)) { return _nacol; }
              if (!bypassMap) {
                  if (_classes && (_classes.length > 2)) {
                      // find the class
                      var c = getClass(val);
                      t = c / (_classes.length-2);
                  } else if (_max !== _min) {
                      // just interpolate between min/max
                      t = (val - _min) / (_max - _min);
                  } else {
                      t = 1;
                  }
              } else {
                  t = val;
              }

              // domain map
              t = tMapDomain(t);

              if (!bypassMap) {
                  t = tMapLightness(t);  // lightness correction
              }

              if (_gamma !== 1) { t = pow$5(t, _gamma); }

              t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

              t = Math.min(1, Math.max(0, t));

              var k = Math.floor(t * 10000);

              if (_useCache && _colorCache[k]) {
                  col = _colorCache[k];
              } else {
                  if (type$j(_colors) === 'array') {
                      //for i in [0.._pos.length-1]
                      for (var i=0; i<_pos.length; i++) {
                          var p = _pos[i];
                          if (t <= p) {
                              col = _colors[i];
                              break;
                          }
                          if ((t >= p) && (i === (_pos.length-1))) {
                              col = _colors[i];
                              break;
                          }
                          if (t > p && t < _pos[i+1]) {
                              t = (t-p)/(_pos[i+1]-p);
                              col = chroma_1.interpolate(_colors[i], _colors[i+1], t, _mode);
                              break;
                          }
                      }
                  } else if (type$j(_colors) === 'function') {
                      col = _colors(t);
                  }
                  if (_useCache) { _colorCache[k] = col; }
              }
              return col;
          };

          var resetCache = function () { return _colorCache = {}; };

          setColors(colors);

          // public interface

          var f = function(v) {
              var c = chroma_1(getColor(v));
              if (_out && c[_out]) { return c[_out](); } else { return c; }
          };

          f.classes = function(classes) {
              if (classes != null) {
                  if (type$j(classes) === 'array') {
                      _classes = classes;
                      _domain = [classes[0], classes[classes.length-1]];
                  } else {
                      var d = chroma_1.analyze(_domain);
                      if (classes === 0) {
                          _classes = [d.min, d.max];
                      } else {
                          _classes = chroma_1.limits(d, 'e', classes);
                      }
                  }
                  return f;
              }
              return _classes;
          };


          f.domain = function(domain) {
              if (!arguments.length) {
                  return _domain;
              }
              _min = domain[0];
              _max = domain[domain.length-1];
              _pos = [];
              var k = _colors.length;
              if ((domain.length === k) && (_min !== _max)) {
                  // update positions
                  for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                      var d = list[i];

                    _pos.push((d-_min) / (_max-_min));
                  }
              } else {
                  for (var c=0; c<k; c++) {
                      _pos.push(c/(k-1));
                  }
                  if (domain.length > 2) {
                      // set domain map
                      var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                      var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                      if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                          tMapDomain = function (t) {
                              if (t <= 0 || t >= 1) { return t; }
                              var i = 0;
                              while (t >= tBreaks[i+1]) { i++; }
                              var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                              var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                              return out;
                          };
                      }

                  }
              }
              _domain = [_min, _max];
              return f;
          };

          f.mode = function(_m) {
              if (!arguments.length) {
                  return _mode;
              }
              _mode = _m;
              resetCache();
              return f;
          };

          f.range = function(colors, _pos) {
              setColors(colors, _pos);
              return f;
          };

          f.out = function(_o) {
              _out = _o;
              return f;
          };

          f.spread = function(val) {
              if (!arguments.length) {
                  return _spread;
              }
              _spread = val;
              return f;
          };

          f.correctLightness = function(v) {
              if (v == null) { v = true; }
              _correctLightness = v;
              resetCache();
              if (_correctLightness) {
                  tMapLightness = function(t) {
                      var L0 = getColor(0, true).lab()[0];
                      var L1 = getColor(1, true).lab()[0];
                      var pol = L0 > L1;
                      var L_actual = getColor(t, true).lab()[0];
                      var L_ideal = L0 + ((L1 - L0) * t);
                      var L_diff = L_actual - L_ideal;
                      var t0 = 0;
                      var t1 = 1;
                      var max_iter = 20;
                      while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                          (function() {
                              if (pol) { L_diff *= -1; }
                              if (L_diff < 0) {
                                  t0 = t;
                                  t += (t1 - t) * 0.5;
                              } else {
                                  t1 = t;
                                  t += (t0 - t) * 0.5;
                              }
                              L_actual = getColor(t, true).lab()[0];
                              return L_diff = L_actual - L_ideal;
                          })();
                      }
                      return t;
                  };
              } else {
                  tMapLightness = function (t) { return t; };
              }
              return f;
          };

          f.padding = function(p) {
              if (p != null) {
                  if (type$j(p) === 'number') {
                      p = [p,p];
                  }
                  _padding = p;
                  return f;
              } else {
                  return _padding;
              }
          };

          f.colors = function(numColors, out) {
              // If no arguments are given, return the original colors that were provided
              if (arguments.length < 2) { out = 'hex'; }
              var result = [];

              if (arguments.length === 0) {
                  result = _colors.slice(0);

              } else if (numColors === 1) {
                  result = [f(0.5)];

              } else if (numColors > 1) {
                  var dm = _domain[0];
                  var dd = _domain[1] - dm;
                  result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

              } else { // returns all colors based on the defined classes
                  colors = [];
                  var samples = [];
                  if (_classes && (_classes.length > 2)) {
                      for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                          samples.push((_classes[i-1]+_classes[i])*0.5);
                      }
                  } else {
                      samples = _domain;
                  }
                  result = samples.map(function (v) { return f(v); });
              }

              if (chroma_1[out]) {
                  result = result.map(function (c) { return c[out](); });
              }
              return result;
          };

          f.cache = function(c) {
              if (c != null) {
                  _useCache = c;
                  return f;
              } else {
                  return _useCache;
              }
          };

          f.gamma = function(g) {
              if (g != null) {
                  _gamma = g;
                  return f;
              } else {
                  return _gamma;
              }
          };

          f.nodata = function(d) {
              if (d != null) {
                  _nacol = chroma_1(d);
                  return f;
              } else {
                  return _nacol;
              }
          };

          return f;
      };

      function __range__(left, right, inclusive) {
        var range = [];
        var ascending = left < right;
        var end = !inclusive ? right : ascending ? right + 1 : right - 1;
        for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
          range.push(i);
        }
        return range;
      }

      //
      // interpolates between a set of colors uzing a bezier spline
      //

      // @requires utils lab




      var bezier = function(colors) {
          var assign, assign$1, assign$2;

          var I, lab0, lab1, lab2;
          colors = colors.map(function (c) { return new Color_1(c); });
          if (colors.length === 2) {
              // linear interpolation
              (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 3) {
              // quadratic bezier interpolation
              (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 4) {
              // cubic bezier interpolation
              var lab3;
              (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 5) {
              var I0 = bezier(colors.slice(0, 3));
              var I1 = bezier(colors.slice(2, 5));
              I = function(t) {
                  if (t < 0.5) {
                      return I0(t*2);
                  } else {
                      return I1((t-0.5)*2);
                  }
              };
          }
          return I;
      };

      var bezier_1 = function (colors) {
          var f = bezier(colors);
          f.scale = function () { return scale(f); };
          return f;
      };

      /*
       * interpolates between a set of colors uzing a bezier spline
       * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
       */




      var blend = function (bottom, top, mode) {
          if (!blend[mode]) {
              throw new Error('unknown blend mode ' + mode);
          }
          return blend[mode](bottom, top);
      };

      var blend_f = function (f) { return function (bottom,top) {
              var c0 = chroma_1(top).rgb();
              var c1 = chroma_1(bottom).rgb();
              return chroma_1.rgb(f(c0, c1));
          }; };

      var each = function (f) { return function (c0, c1) {
              var out = [];
              out[0] = f(c0[0], c1[0]);
              out[1] = f(c0[1], c1[1]);
              out[2] = f(c0[2], c1[2]);
              return out;
          }; };

      var normal = function (a) { return a; };
      var multiply = function (a,b) { return a * b / 255; };
      var darken$1 = function (a,b) { return a > b ? b : a; };
      var lighten = function (a,b) { return a > b ? a : b; };
      var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
      var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
      var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
      var dodge = function (a,b) {
          if (a === 255) { return 255; }
          a = 255 * (b / 255) / (1 - a / 255);
          return a > 255 ? 255 : a
      };

      // # add = (a,b) ->
      // #     if (a + b > 255) then 255 else a + b

      blend.normal = blend_f(each(normal));
      blend.multiply = blend_f(each(multiply));
      blend.screen = blend_f(each(screen));
      blend.overlay = blend_f(each(overlay));
      blend.darken = blend_f(each(darken$1));
      blend.lighten = blend_f(each(lighten));
      blend.dodge = blend_f(each(dodge));
      blend.burn = blend_f(each(burn));
      // blend.add = blend_f(each(add));

      var blend_1 = blend;

      // cubehelix interpolation
      // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
      // http://astron-soc.in/bulletin/11June/289392011.pdf

      var type$k = utils.type;
      var clip_rgb$3 = utils.clip_rgb;
      var TWOPI$2 = utils.TWOPI;
      var pow$6 = Math.pow;
      var sin$2 = Math.sin;
      var cos$3 = Math.cos;


      var cubehelix = function(start, rotations, hue, gamma, lightness) {
          if ( start === void 0 ) start=300;
          if ( rotations === void 0 ) rotations=-1.5;
          if ( hue === void 0 ) hue=1;
          if ( gamma === void 0 ) gamma=1;
          if ( lightness === void 0 ) lightness=[0,1];

          var dh = 0, dl;
          if (type$k(lightness) === 'array') {
              dl = lightness[1] - lightness[0];
          } else {
              dl = 0;
              lightness = [lightness, lightness];
          }

          var f = function(fract) {
              var a = TWOPI$2 * (((start+120)/360) + (rotations * fract));
              var l = pow$6(lightness[0] + (dl * fract), gamma);
              var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
              var amp = (h * l * (1-l)) / 2;
              var cos_a = cos$3(a);
              var sin_a = sin$2(a);
              var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
              var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
              var b = l + (amp * (+1.97294 * cos_a));
              return chroma_1(clip_rgb$3([r*255,g*255,b*255,1]));
          };

          f.start = function(s) {
              if ((s == null)) { return start; }
              start = s;
              return f;
          };

          f.rotations = function(r) {
              if ((r == null)) { return rotations; }
              rotations = r;
              return f;
          };

          f.gamma = function(g) {
              if ((g == null)) { return gamma; }
              gamma = g;
              return f;
          };

          f.hue = function(h) {
              if ((h == null)) { return hue; }
              hue = h;
              if (type$k(hue) === 'array') {
                  dh = hue[1] - hue[0];
                  if (dh === 0) { hue = hue[1]; }
              } else {
                  dh = 0;
              }
              return f;
          };

          f.lightness = function(h) {
              if ((h == null)) { return lightness; }
              if (type$k(h) === 'array') {
                  lightness = h;
                  dl = h[1] - h[0];
              } else {
                  lightness = [h,h];
                  dl = 0;
              }
              return f;
          };

          f.scale = function () { return chroma_1.scale(f); };

          f.hue(hue);

          return f;
      };

      var digits = '0123456789abcdef';

      var floor$2 = Math.floor;
      var random = Math.random;

      var random_1 = function () {
          var code = '#';
          for (var i=0; i<6; i++) {
              code += digits.charAt(floor$2(random() * 16));
          }
          return new Color_1(code, 'hex');
      };

      var log$1 = Math.log;
      var pow$7 = Math.pow;
      var floor$3 = Math.floor;
      var abs = Math.abs;


      var analyze = function (data, key) {
          if ( key === void 0 ) key=null;

          var r = {
              min: Number.MAX_VALUE,
              max: Number.MAX_VALUE*-1,
              sum: 0,
              values: [],
              count: 0
          };
          if (type(data) === 'object') {
              data = Object.values(data);
          }
          data.forEach(function (val) {
              if (key && type(val) === 'object') { val = val[key]; }
              if (val !== undefined && val !== null && !isNaN(val)) {
                  r.values.push(val);
                  r.sum += val;
                  if (val < r.min) { r.min = val; }
                  if (val > r.max) { r.max = val; }
                  r.count += 1;
              }
          });

          r.domain = [r.min, r.max];

          r.limits = function (mode, num) { return limits(r, mode, num); };

          return r;
      };


      var limits = function (data, mode, num) {
          if ( mode === void 0 ) mode='equal';
          if ( num === void 0 ) num=7;

          if (type(data) == 'array') {
              data = analyze(data);
          }
          var min = data.min;
          var max = data.max;
          var values = data.values.sort(function (a,b) { return a-b; });

          if (num === 1) { return [min,max]; }

          var limits = [];

          if (mode.substr(0,1) === 'c') { // continuous
              limits.push(min);
              limits.push(max);
          }

          if (mode.substr(0,1) === 'e') { // equal interval
              limits.push(min);
              for (var i=1; i<num; i++) {
                  limits.push(min+((i/num)*(max-min)));
              }
              limits.push(max);
          }

          else if (mode.substr(0,1) === 'l') { // log scale
              if (min <= 0) {
                  throw new Error('Logarithmic scales are only possible for values > 0');
              }
              var min_log = Math.LOG10E * log$1(min);
              var max_log = Math.LOG10E * log$1(max);
              limits.push(min);
              for (var i$1=1; i$1<num; i$1++) {
                  limits.push(pow$7(10, min_log + ((i$1/num) * (max_log - min_log))));
              }
              limits.push(max);
          }

          else if (mode.substr(0,1) === 'q') { // quantile scale
              limits.push(min);
              for (var i$2=1; i$2<num; i$2++) {
                  var p = ((values.length-1) * i$2)/num;
                  var pb = floor$3(p);
                  if (pb === p) {
                      limits.push(values[pb]);
                  } else { // p > pb
                      var pr = p - pb;
                      limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                  }
              }
              limits.push(max);

          }

          else if (mode.substr(0,1) === 'k') { // k-means clustering
              /*
              implementation based on
              http://code.google.com/p/figue/source/browse/trunk/figue.js#336
              simplified for 1-d input values
              */
              var cluster;
              var n = values.length;
              var assignments = new Array(n);
              var clusterSizes = new Array(num);
              var repeat = true;
              var nb_iters = 0;
              var centroids = null;

              // get seed values
              centroids = [];
              centroids.push(min);
              for (var i$3=1; i$3<num; i$3++) {
                  centroids.push(min + ((i$3/num) * (max-min)));
              }
              centroids.push(max);

              while (repeat) {
                  // assignment step
                  for (var j=0; j<num; j++) {
                      clusterSizes[j] = 0;
                  }
                  for (var i$4=0; i$4<n; i$4++) {
                      var value = values[i$4];
                      var mindist = Number.MAX_VALUE;
                      var best = (void 0);
                      for (var j$1=0; j$1<num; j$1++) {
                          var dist = abs(centroids[j$1]-value);
                          if (dist < mindist) {
                              mindist = dist;
                              best = j$1;
                          }
                          clusterSizes[best]++;
                          assignments[i$4] = best;
                      }
                  }

                  // update centroids step
                  var newCentroids = new Array(num);
                  for (var j$2=0; j$2<num; j$2++) {
                      newCentroids[j$2] = null;
                  }
                  for (var i$5=0; i$5<n; i$5++) {
                      cluster = assignments[i$5];
                      if (newCentroids[cluster] === null) {
                          newCentroids[cluster] = values[i$5];
                      } else {
                          newCentroids[cluster] += values[i$5];
                      }
                  }
                  for (var j$3=0; j$3<num; j$3++) {
                      newCentroids[j$3] *= 1/clusterSizes[j$3];
                  }

                  // check convergence
                  repeat = false;
                  for (var j$4=0; j$4<num; j$4++) {
                      if (newCentroids[j$4] !== centroids[j$4]) {
                          repeat = true;
                          break;
                      }
                  }

                  centroids = newCentroids;
                  nb_iters++;

                  if (nb_iters > 200) {
                      repeat = false;
                  }
              }

              // finished k-means clustering
              // the next part is borrowed from gabrielflor.it
              var kClusters = {};
              for (var j$5=0; j$5<num; j$5++) {
                  kClusters[j$5] = [];
              }
              for (var i$6=0; i$6<n; i$6++) {
                  cluster = assignments[i$6];
                  kClusters[cluster].push(values[i$6]);
              }
              var tmpKMeansBreaks = [];
              for (var j$6=0; j$6<num; j$6++) {
                  tmpKMeansBreaks.push(kClusters[j$6][0]);
                  tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
              }
              tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
              limits.push(tmpKMeansBreaks[0]);
              for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                  var v = tmpKMeansBreaks[i$7];
                  if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                      limits.push(v);
                  }
              }
          }
          return limits;
      };

      var analyze_1 = {analyze: analyze, limits: limits};

      var contrast = function (a, b) {
          // WCAG contrast ratio
          // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
          a = new Color_1(a);
          b = new Color_1(b);
          var l1 = a.luminance();
          var l2 = b.luminance();
          return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
      };

      var sqrt$4 = Math.sqrt;
      var atan2$2 = Math.atan2;
      var abs$1 = Math.abs;
      var cos$4 = Math.cos;
      var PI$2 = Math.PI;

      var deltaE = function(a, b, L, C) {
          if ( L === void 0 ) L=1;
          if ( C === void 0 ) C=1;

          // Delta E (CMC)
          // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
          a = new Color_1(a);
          b = new Color_1(b);
          var ref = Array.from(a.lab());
          var L1 = ref[0];
          var a1 = ref[1];
          var b1 = ref[2];
          var ref$1 = Array.from(b.lab());
          var L2 = ref$1[0];
          var a2 = ref$1[1];
          var b2 = ref$1[2];
          var c1 = sqrt$4((a1 * a1) + (b1 * b1));
          var c2 = sqrt$4((a2 * a2) + (b2 * b2));
          var sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + (0.01765 * L1));
          var sc = ((0.0638 * c1) / (1.0 + (0.0131 * c1))) + 0.638;
          var h1 = c1 < 0.000001 ? 0.0 : (atan2$2(b1, a1) * 180.0) / PI$2;
          while (h1 < 0) { h1 += 360; }
          while (h1 >= 360) { h1 -= 360; }
          var t = (h1 >= 164.0) && (h1 <= 345.0) ? (0.56 + abs$1(0.2 * cos$4((PI$2 * (h1 + 168.0)) / 180.0))) : (0.36 + abs$1(0.4 * cos$4((PI$2 * (h1 + 35.0)) / 180.0)));
          var c4 = c1 * c1 * c1 * c1;
          var f = sqrt$4(c4 / (c4 + 1900.0));
          var sh = sc * (((f * t) + 1.0) - f);
          var delL = L1 - L2;
          var delC = c1 - c2;
          var delA = a1 - a2;
          var delB = b1 - b2;
          var dH2 = ((delA * delA) + (delB * delB)) - (delC * delC);
          var v1 = delL / (L * sl);
          var v2 = delC / (C * sc);
          var v3 = sh;
          return sqrt$4((v1 * v1) + (v2 * v2) + (dH2 / (v3 * v3)));
      };

      // simple Euclidean distance
      var distance = function(a, b, mode) {
          if ( mode === void 0 ) mode='lab';

          // Delta E (CIE 1976)
          // see http://www.brucelindbloom.com/index.html?Equations.html
          a = new Color_1(a);
          b = new Color_1(b);
          var l1 = a.get(mode);
          var l2 = b.get(mode);
          var sum_sq = 0;
          for (var i in l1) {
              var d = (l1[i] || 0) - (l2[i] || 0);
              sum_sq += d*d;
          }
          return Math.sqrt(sum_sq);
      };

      var valid = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          try {
              new (Function.prototype.bind.apply( Color_1, [ null ].concat( args) ));
              return true;
          } catch (e) {
              return false;
          }
      };

      // some pre-defined color scales:




      var scales = {
      	cool: function cool() { return scale([chroma_1.hsl(180,1,.9), chroma_1.hsl(250,.7,.4)]) },
      	hot: function hot() { return scale(['#000','#f00','#ff0','#fff'], [0,.25,.75,1]).mode('rgb') }
      };

      /**
          ColorBrewer colors for chroma.js

          Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
          Pennsylvania State University.

          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0

          Unless required by applicable law or agreed to in writing, software distributed
          under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
          CONDITIONS OF ANY KIND, either express or implied. See the License for the
          specific language governing permissions and limitations under the License.
      */

      var colorbrewer = {
          // sequential
          OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
          PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
          BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
          Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
          BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
          YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
          YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
          Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
          RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
          Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
          YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
          Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
          GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
          Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
          YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
          PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
          Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
          PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
          Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

          // diverging

          Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
          RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
          RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
          PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
          PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
          RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
          BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
          RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
          PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

          // qualitative

          Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
          Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
          Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
          Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
          Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
          Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
          Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
          Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
      };

      // add lowercase aliases for case-insensitive matches
      for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
          var key = list$1[i$1];

          colorbrewer[key.toLowerCase()] = colorbrewer[key];
      }

      var colorbrewer_1 = colorbrewer;

      // feel free to comment out anything to rollup
      // a smaller chroma.js built

      // io --> convert colors















      // operators --> modify existing Colors










      // interpolators










      // generators -- > create new colors
      chroma_1.average = average;
      chroma_1.bezier = bezier_1;
      chroma_1.blend = blend_1;
      chroma_1.cubehelix = cubehelix;
      chroma_1.mix = chroma_1.interpolate = mix;
      chroma_1.random = random_1;
      chroma_1.scale = scale;

      // other utility methods
      chroma_1.analyze = analyze_1.analyze;
      chroma_1.contrast = contrast;
      chroma_1.deltaE = deltaE;
      chroma_1.distance = distance;
      chroma_1.limits = analyze_1.limits;
      chroma_1.valid = valid;

      // scale
      chroma_1.scales = scales;

      // colors
      chroma_1.colors = w3cx11_1;
      chroma_1.brewer = colorbrewer_1;

      var chroma_js = chroma_1;

      return chroma_js;

  })));
  });

  var tweakpane = createCommonjsModule(function (module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
  	module.exports = factory();
  })(typeof self !== 'undefined' ? self : commonjsGlobal, function() {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
  /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 		}
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function(value, mode) {
  /******/ 		if(mode & 1) value = __webpack_require__(value);
  /******/ 		if(mode & 8) return value;
  /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
  /******/ 		var ns = Object.create(null);
  /******/ 		__webpack_require__.r(ns);
  /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
  /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
  /******/ 		return ns;
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/js/index.ts");
  /******/ })
  /************************************************************************/
  /******/ ({

  /***/ "./node_modules/css-loader/lib/css-base.js":
  /*!*************************************************!*\
    !*** ./node_modules/css-loader/lib/css-base.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function(useSourceMap) {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		return this.map(function (item) {
  			var content = cssWithMappingToString(item, useSourceMap);
  			if(item[2]) {
  				return "@media " + item[2] + "{" + content + "}";
  			} else {
  				return content;
  			}
  		}).join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };

  function cssWithMappingToString(item, useSourceMap) {
  	var content = item[1] || '';
  	var cssMapping = item[3];
  	if (!cssMapping) {
  		return content;
  	}

  	if (useSourceMap && typeof btoa === 'function') {
  		var sourceMapping = toComment(cssMapping);
  		var sourceURLs = cssMapping.sources.map(function (source) {
  			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
  		});

  		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  	}

  	return [content].join('\n');
  }

  // Adapted from convert-source-map (MIT)
  function toComment(sourceMap) {
  	// eslint-disable-next-line no-undef
  	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  	return '/*# ' + data + ' */';
  }


  /***/ }),

  /***/ "./node_modules/process/browser.js":
  /*!*****************************************!*\
    !*** ./node_modules/process/browser.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  // shim for using process in browser
  var process = module.exports = {};

  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.

  var cachedSetTimeout;
  var cachedClearTimeout;

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ());
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }

  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };

  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;

  process.listeners = function (name) { return [] };

  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };

  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };


  /***/ }),

  /***/ "./src/main/js/api/button.ts":
  /*!***********************************!*\
    !*** ./src/main/js/api/button.ts ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ButtonApi = void 0;
  var ButtonApi = /** @class */ (function () {
      /**
       * @hidden
       */
      function ButtonApi(buttonController) {
          this.controller = buttonController;
      }
      Object.defineProperty(ButtonApi.prototype, "hidden", {
          get: function () {
              return this.controller.viewModel.hidden;
          },
          set: function (hidden) {
              this.controller.viewModel.hidden = hidden;
          },
          enumerable: false,
          configurable: true
      });
      ButtonApi.prototype.dispose = function () {
          this.controller.viewModel.dispose();
      };
      ButtonApi.prototype.on = function (eventName, handler) {
          var emitter = this.controller.button.emitter;
          emitter.on(eventName, handler.bind(this));
          return this;
      };
      return ButtonApi;
  }());
  exports.ButtonApi = ButtonApi;


  /***/ }),

  /***/ "./src/main/js/api/event-handler-adapters.ts":
  /*!***************************************************!*\
    !*** ./src/main/js/api/event-handler-adapters.ts ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.folder = exports.monitor = exports.input = void 0;
  /**
   * @hidden
   */
  function input(_a) {
      var binding = _a.binding, eventName = _a.eventName, handler = _a.handler;
      if (eventName === 'change') {
          var emitter = binding.emitter;
          emitter.on('change', function (ev) {
              handler(ev.sender.getValueToWrite(ev.rawValue));
          });
      }
  }
  exports.input = input;
  /**
   * @hidden
   */
  function monitor(_a) {
      var binding = _a.binding, eventName = _a.eventName, handler = _a.handler;
      if (eventName === 'update') {
          var emitter = binding.emitter;
          emitter.on('update', function (ev) {
              handler(ev.sender.target.read());
          });
      }
  }
  exports.monitor = monitor;
  /**
   * @hidden
   */
  function folder(_a) {
      var eventName = _a.eventName, folder = _a.folder, handler = _a.handler, uiContainer = _a.uiContainer;
      if (eventName === 'change') {
          var emitter = uiContainer.emitter;
          emitter.on('inputchange', function (ev) {
              // TODO: Find more type-safe way
              handler(ev.inputBinding.getValueToWrite(ev.value));
          });
      }
      if (eventName === 'update') {
          var emitter = uiContainer.emitter;
          emitter.on('monitorupdate', function (ev) {
              handler(ev.monitorBinding.target.read());
          });
      }
      if (eventName === 'fold') {
          uiContainer.emitter.on('itemfold', function (ev) {
              handler(ev.expanded);
          });
          folder === null || folder === void 0 ? void 0 : folder.emitter.on('change', function (ev) {
              if (ev.propertyName !== 'expanded') {
                  return;
              }
              handler(ev.sender.expanded);
          });
      }
  }
  exports.folder = folder;


  /***/ }),

  /***/ "./src/main/js/api/folder.ts":
  /*!***********************************!*\
    !*** ./src/main/js/api/folder.ts ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __assign = (this && this.__assign) || function () {
      __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FolderApi = void 0;
  var InputBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/input */ "./src/main/js/controller/binding-creators/input.ts");
  var MonitorBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/monitor */ "./src/main/js/controller/binding-creators/monitor.ts");
  var button_1 = __webpack_require__(/*! ../controller/button */ "./src/main/js/controller/button.ts");
  var folder_1 = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.ts");
  var separator_1 = __webpack_require__(/*! ../controller/separator */ "./src/main/js/controller/separator.ts");
  var target_1 = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.ts");
  var view_model_1 = __webpack_require__(/*! ../model/view-model */ "./src/main/js/model/view-model.ts");
  var button_2 = __webpack_require__(/*! ./button */ "./src/main/js/api/button.ts");
  var EventHandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
  var input_binding_1 = __webpack_require__(/*! ./input-binding */ "./src/main/js/api/input-binding.ts");
  var monitor_binding_1 = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/api/monitor-binding.ts");
  var separator_2 = __webpack_require__(/*! ./separator */ "./src/main/js/api/separator.ts");
  var FolderApi = /** @class */ (function () {
      /**
       * @hidden
       */
      function FolderApi(folderController) {
          this.controller = folderController;
      }
      Object.defineProperty(FolderApi.prototype, "expanded", {
          get: function () {
              return this.controller.folder.expanded;
          },
          set: function (expanded) {
              this.controller.folder.expanded = expanded;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(FolderApi.prototype, "hidden", {
          get: function () {
              return this.controller.viewModel.hidden;
          },
          set: function (hidden) {
              this.controller.viewModel.hidden = hidden;
          },
          enumerable: false,
          configurable: true
      });
      FolderApi.prototype.dispose = function () {
          this.controller.viewModel.dispose();
      };
      FolderApi.prototype.addInput = function (object, key, opt_params) {
          var params = opt_params || {};
          var uc = InputBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key, params.presetKey), params);
          this.controller.uiContainer.add(uc, params.index);
          return new input_binding_1.InputBindingApi(uc);
      };
      FolderApi.prototype.addMonitor = function (object, key, opt_params) {
          var params = opt_params || {};
          var uc = MonitorBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key), params);
          this.controller.uiContainer.add(uc, params.index);
          return new monitor_binding_1.MonitorBindingApi(uc);
      };
      FolderApi.prototype.addFolder = function (params) {
          var uc = new folder_1.FolderController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
          this.controller.uiContainer.add(uc, params.index);
          return new FolderApi(uc);
      };
      FolderApi.prototype.addButton = function (params) {
          var uc = new button_1.ButtonController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
          this.controller.uiContainer.add(uc, params.index);
          return new button_2.ButtonApi(uc);
      };
      FolderApi.prototype.addSeparator = function (opt_params) {
          var params = opt_params || {};
          var uc = new separator_1.SeparatorController(this.controller.document, {
              viewModel: new view_model_1.ViewModel(),
          });
          this.controller.uiContainer.add(uc, params.index);
          return new separator_2.SeparatorApi(uc);
      };
      FolderApi.prototype.on = function (eventName, handler) {
          EventHandlerAdapters.folder({
              eventName: eventName,
              folder: this.controller.folder,
              handler: handler.bind(this),
              uiContainer: this.controller.uiContainer,
          });
          return this;
      };
      return FolderApi;
  }());
  exports.FolderApi = FolderApi;


  /***/ }),

  /***/ "./src/main/js/api/input-binding.ts":
  /*!******************************************!*\
    !*** ./src/main/js/api/input-binding.ts ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InputBindingApi = void 0;
  var HandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
  /**
   * The API for the input binding between the parameter and the pane.
   * @param In The type inner Tweakpane.
   * @param Out The type outer Tweakpane (= parameter object).
   */
  var InputBindingApi = /** @class */ (function () {
      /**
       * @hidden
       */
      function InputBindingApi(bindingController) {
          this.controller = bindingController;
      }
      Object.defineProperty(InputBindingApi.prototype, "hidden", {
          get: function () {
              return this.controller.viewModel.hidden;
          },
          set: function (hidden) {
              this.controller.viewModel.hidden = hidden;
          },
          enumerable: false,
          configurable: true
      });
      InputBindingApi.prototype.dispose = function () {
          this.controller.viewModel.dispose();
      };
      InputBindingApi.prototype.on = function (eventName, handler) {
          HandlerAdapters.input({
              binding: this.controller.binding,
              eventName: eventName,
              handler: handler.bind(this),
          });
          return this;
      };
      InputBindingApi.prototype.refresh = function () {
          this.controller.binding.read();
      };
      return InputBindingApi;
  }());
  exports.InputBindingApi = InputBindingApi;


  /***/ }),

  /***/ "./src/main/js/api/monitor-binding.ts":
  /*!********************************************!*\
    !*** ./src/main/js/api/monitor-binding.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MonitorBindingApi = void 0;
  var EventHandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
  /**
   * The API for the monitor binding between the parameter and the pane.
   */
  var MonitorBindingApi = /** @class */ (function () {
      /**
       * @hidden
       */
      function MonitorBindingApi(bindingController) {
          this.controller = bindingController;
      }
      Object.defineProperty(MonitorBindingApi.prototype, "hidden", {
          get: function () {
              return this.controller.viewModel.hidden;
          },
          set: function (hidden) {
              this.controller.viewModel.hidden = hidden;
          },
          enumerable: false,
          configurable: true
      });
      MonitorBindingApi.prototype.dispose = function () {
          this.controller.viewModel.dispose();
      };
      MonitorBindingApi.prototype.on = function (eventName, handler) {
          EventHandlerAdapters.monitor({
              binding: this.controller.binding,
              eventName: eventName,
              handler: handler.bind(this),
          });
          return this;
      };
      MonitorBindingApi.prototype.refresh = function () {
          this.controller.binding.read();
      };
      return MonitorBindingApi;
  }());
  exports.MonitorBindingApi = MonitorBindingApi;


  /***/ }),

  /***/ "./src/main/js/api/preset.ts":
  /*!***********************************!*\
    !*** ./src/main/js/api/preset.ts ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.importJson = exports.exportJson = void 0;
  /**
   * @hidden
   */
  function exportJson(targets) {
      return targets.reduce(function (result, target) {
          var _a;
          return Object.assign(result, (_a = {},
              _a[target.presetKey] = target.read(),
              _a));
      }, {});
  }
  exports.exportJson = exportJson;
  /**
   * @hidden
   */
  function importJson(targets, preset) {
      targets.forEach(function (target) {
          var value = preset[target.presetKey];
          if (value !== undefined) {
              target.write(value);
          }
      });
  }
  exports.importJson = importJson;


  /***/ }),

  /***/ "./src/main/js/api/root.ts":
  /*!*********************************!*\
    !*** ./src/main/js/api/root.ts ***!
    \*********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __assign = (this && this.__assign) || function () {
      __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RootApi = void 0;
  var InputBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/input */ "./src/main/js/controller/binding-creators/input.ts");
  var MonitorBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/monitor */ "./src/main/js/controller/binding-creators/monitor.ts");
  var button_1 = __webpack_require__(/*! ../controller/button */ "./src/main/js/controller/button.ts");
  var folder_1 = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.ts");
  var input_binding_1 = __webpack_require__(/*! ../controller/input-binding */ "./src/main/js/controller/input-binding.ts");
  var monitor_binding_1 = __webpack_require__(/*! ../controller/monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
  var separator_1 = __webpack_require__(/*! ../controller/separator */ "./src/main/js/controller/separator.ts");
  var UiUtil = __webpack_require__(/*! ../controller/ui-util */ "./src/main/js/controller/ui-util.ts");
  var target_1 = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.ts");
  var view_model_1 = __webpack_require__(/*! ../model/view-model */ "./src/main/js/model/view-model.ts");
  var button_2 = __webpack_require__(/*! ./button */ "./src/main/js/api/button.ts");
  var EventHandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
  var folder_2 = __webpack_require__(/*! ./folder */ "./src/main/js/api/folder.ts");
  var input_binding_2 = __webpack_require__(/*! ./input-binding */ "./src/main/js/api/input-binding.ts");
  var monitor_binding_2 = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/api/monitor-binding.ts");
  var Preset = __webpack_require__(/*! ./preset */ "./src/main/js/api/preset.ts");
  var separator_2 = __webpack_require__(/*! ./separator */ "./src/main/js/api/separator.ts");
  /**
   * The Tweakpane interface.
   *
   * ```
   * new Tweakpane(options: TweakpaneConfig): RootApi
   * ```
   *
   * See [[TweakpaneConfig]] interface for available options.
   */
  var RootApi = /** @class */ (function () {
      /**
       * @hidden
       */
      function RootApi(rootController) {
          this.controller = rootController;
      }
      Object.defineProperty(RootApi.prototype, "element", {
          get: function () {
              return this.controller.view.element;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(RootApi.prototype, "expanded", {
          get: function () {
              var folder = this.controller.folder;
              return folder ? folder.expanded : true;
          },
          set: function (expanded) {
              var folder = this.controller.folder;
              if (folder) {
                  folder.expanded = expanded;
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(RootApi.prototype, "hidden", {
          get: function () {
              return this.controller.viewModel.hidden;
          },
          set: function (hidden) {
              this.controller.viewModel.hidden = hidden;
          },
          enumerable: false,
          configurable: true
      });
      RootApi.prototype.dispose = function () {
          this.controller.viewModel.dispose();
      };
      RootApi.prototype.addInput = function (object, key, opt_params) {
          var params = opt_params || {};
          var uc = InputBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key, params.presetKey), params);
          this.controller.uiContainer.add(uc, params.index);
          return new input_binding_2.InputBindingApi(uc);
      };
      RootApi.prototype.addMonitor = function (object, key, opt_params) {
          var params = opt_params || {};
          var uc = MonitorBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key), params);
          this.controller.uiContainer.add(uc, params.index);
          return new monitor_binding_2.MonitorBindingApi(uc);
      };
      RootApi.prototype.addButton = function (params) {
          var uc = new button_1.ButtonController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
          this.controller.uiContainer.add(uc, params.index);
          return new button_2.ButtonApi(uc);
      };
      RootApi.prototype.addFolder = function (params) {
          var uc = new folder_1.FolderController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
          this.controller.uiContainer.add(uc, params.index);
          return new folder_2.FolderApi(uc);
      };
      RootApi.prototype.addSeparator = function (opt_params) {
          var params = opt_params || {};
          var uc = new separator_1.SeparatorController(this.controller.document, {
              viewModel: new view_model_1.ViewModel(),
          });
          this.controller.uiContainer.add(uc, params.index);
          return new separator_2.SeparatorApi(uc);
      };
      /**
       * Import a preset of all inputs.
       * @param preset The preset object to import.
       */
      RootApi.prototype.importPreset = function (preset) {
          var targets = UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).map(function (ibc) {
              return ibc.binding.target;
          });
          Preset.importJson(targets, preset);
          this.refresh();
      };
      /**
       * Export a preset of all inputs.
       * @return The exported preset object.
       */
      RootApi.prototype.exportPreset = function () {
          var targets = UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).map(function (ibc) {
              return ibc.binding.target;
          });
          return Preset.exportJson(targets);
      };
      /**
       * Adds a global event listener. It handles all events of child inputs/monitors.
       * @param eventName The event name to listen.
       * @return The API object itself.
       */
      RootApi.prototype.on = function (eventName, handler) {
          EventHandlerAdapters.folder({
              eventName: eventName,
              folder: this.controller.folder,
              handler: handler.bind(this),
              uiContainer: this.controller.uiContainer,
          });
          return this;
      };
      /**
       * Refreshes all bindings of the pane.
       */
      RootApi.prototype.refresh = function () {
          // Force-read all input bindings
          UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).forEach(function (ibc) {
              ibc.binding.read();
          });
          // Force-read all monitor bindings
          UiUtil.findControllers(this.controller.uiContainer.items, monitor_binding_1.MonitorBindingController).forEach(function (mbc) {
              mbc.binding.read();
          });
      };
      return RootApi;
  }());
  exports.RootApi = RootApi;


  /***/ }),

  /***/ "./src/main/js/api/separator.ts":
  /*!**************************************!*\
    !*** ./src/main/js/api/separator.ts ***!
    \**************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SeparatorApi = void 0;
  var SeparatorApi = /** @class */ (function () {
      /**
       * @hidden
       */
      function SeparatorApi(controller) {
          this.controller = controller;
      }
      Object.defineProperty(SeparatorApi.prototype, "hidden", {
          get: function () {
              return this.controller.viewModel.hidden;
          },
          set: function (hidden) {
              this.controller.viewModel.hidden = hidden;
          },
          enumerable: false,
          configurable: true
      });
      SeparatorApi.prototype.dispose = function () {
          this.controller.viewModel.dispose();
      };
      return SeparatorApi;
  }());
  exports.SeparatorApi = SeparatorApi;


  /***/ }),

  /***/ "./src/main/js/binding/input.ts":
  /*!**************************************!*\
    !*** ./src/main/js/binding/input.ts ***!
    \**************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InputBinding = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var InputBinding = /** @class */ (function () {
      function InputBinding(config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.reader_ = config.reader;
          this.writer_ = config.writer;
          this.emitter = new emitter_1.Emitter();
          this.value = config.value;
          this.value.emitter.on('change', this.onValueChange_);
          this.target = config.target;
          this.read();
      }
      InputBinding.prototype.read = function () {
          var targetValue = this.target.read();
          if (targetValue !== undefined) {
              this.value.rawValue = this.reader_(targetValue);
          }
      };
      InputBinding.prototype.getValueToWrite = function (rawValue) {
          return this.writer_(rawValue);
      };
      InputBinding.prototype.write_ = function (rawValue) {
          this.target.write(this.getValueToWrite(rawValue));
      };
      InputBinding.prototype.onValueChange_ = function (ev) {
          this.write_(ev.rawValue);
          this.emitter.emit('change', {
              rawValue: ev.rawValue,
              sender: this,
          });
      };
      return InputBinding;
  }());
  exports.InputBinding = InputBinding;


  /***/ }),

  /***/ "./src/main/js/binding/monitor.ts":
  /*!****************************************!*\
    !*** ./src/main/js/binding/monitor.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MonitorBinding = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var MonitorBinding = /** @class */ (function () {
      function MonitorBinding(config) {
          this.onTick_ = this.onTick_.bind(this);
          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.reader_ = config.reader;
          this.target = config.target;
          this.emitter = new emitter_1.Emitter();
          this.value = config.value;
          this.value.emitter.on('update', this.onValueUpdate_);
          this.ticker = config.ticker;
          this.ticker.emitter.on('tick', this.onTick_);
          this.read();
      }
      MonitorBinding.prototype.dispose = function () {
          this.ticker.disposable.dispose();
      };
      MonitorBinding.prototype.read = function () {
          var targetValue = this.target.read();
          if (targetValue !== undefined) {
              this.value.append(this.reader_(targetValue));
          }
      };
      MonitorBinding.prototype.onTick_ = function (_) {
          this.read();
      };
      MonitorBinding.prototype.onValueUpdate_ = function (ev) {
          this.emitter.emit('update', {
              rawValue: ev.rawValue,
              sender: this,
          });
      };
      return MonitorBinding;
  }());
  exports.MonitorBinding = MonitorBinding;


  /***/ }),

  /***/ "./src/main/js/constraint/composite.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/constraint/composite.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CompositeConstraint = void 0;
  /**
   * @hidden
   */
  var CompositeConstraint = /** @class */ (function () {
      function CompositeConstraint(config) {
          this.constraints_ = config.constraints;
      }
      Object.defineProperty(CompositeConstraint.prototype, "constraints", {
          get: function () {
              return this.constraints_;
          },
          enumerable: false,
          configurable: true
      });
      CompositeConstraint.prototype.constrain = function (value) {
          return this.constraints_.reduce(function (result, c) {
              return c.constrain(result);
          }, value);
      };
      return CompositeConstraint;
  }());
  exports.CompositeConstraint = CompositeConstraint;


  /***/ }),

  /***/ "./src/main/js/constraint/list.ts":
  /*!****************************************!*\
    !*** ./src/main/js/constraint/list.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ListConstraint = void 0;
  /**
   * @hidden
   */
  var ListConstraint = /** @class */ (function () {
      function ListConstraint(config) {
          this.opts_ = config.options;
      }
      Object.defineProperty(ListConstraint.prototype, "options", {
          get: function () {
              return this.opts_;
          },
          enumerable: false,
          configurable: true
      });
      ListConstraint.prototype.constrain = function (value) {
          var opts = this.opts_;
          if (opts.length === 0) {
              return value;
          }
          var matched = opts.filter(function (item) {
              return item.value === value;
          }).length > 0;
          return matched ? value : opts[0].value;
      };
      return ListConstraint;
  }());
  exports.ListConstraint = ListConstraint;


  /***/ }),

  /***/ "./src/main/js/constraint/point-2d.ts":
  /*!********************************************!*\
    !*** ./src/main/js/constraint/point-2d.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2dConstraint = void 0;
  var point_2d_1 = __webpack_require__(/*! ../model/point-2d */ "./src/main/js/model/point-2d.ts");
  /**
   * @hidden
   */
  var Point2dConstraint = /** @class */ (function () {
      function Point2dConstraint(config) {
          this.xConstraint = config.x;
          this.yConstraint = config.y;
      }
      Point2dConstraint.prototype.constrain = function (value) {
          return new point_2d_1.Point2d(this.xConstraint ? this.xConstraint.constrain(value.x) : value.x, this.yConstraint ? this.yConstraint.constrain(value.y) : value.y);
      };
      return Point2dConstraint;
  }());
  exports.Point2dConstraint = Point2dConstraint;


  /***/ }),

  /***/ "./src/main/js/constraint/range.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/constraint/range.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RangeConstraint = void 0;
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  /**
   * @hidden
   */
  var RangeConstraint = /** @class */ (function () {
      function RangeConstraint(config) {
          this.maxValue = config.max;
          this.minValue = config.min;
      }
      RangeConstraint.prototype.constrain = function (value) {
          var result = value;
          if (!type_util_1.TypeUtil.isEmpty(this.minValue)) {
              result = Math.max(result, this.minValue);
          }
          if (!type_util_1.TypeUtil.isEmpty(this.maxValue)) {
              result = Math.min(result, this.maxValue);
          }
          return result;
      };
      return RangeConstraint;
  }());
  exports.RangeConstraint = RangeConstraint;


  /***/ }),

  /***/ "./src/main/js/constraint/step.ts":
  /*!****************************************!*\
    !*** ./src/main/js/constraint/step.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StepConstraint = void 0;
  /**
   * @hidden
   */
  var StepConstraint = /** @class */ (function () {
      function StepConstraint(config) {
          this.step = config.step;
      }
      StepConstraint.prototype.constrain = function (value) {
          var r = value < 0
              ? -Math.round(-value / this.step)
              : Math.round(value / this.step);
          return r * this.step;
      };
      return StepConstraint;
  }());
  exports.StepConstraint = StepConstraint;


  /***/ }),

  /***/ "./src/main/js/constraint/util.ts":
  /*!****************************************!*\
    !*** ./src/main/js/constraint/util.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ConstraintUtil = void 0;
  var composite_1 = __webpack_require__(/*! ./composite */ "./src/main/js/constraint/composite.ts");
  /**
   * @hidden
   */
  exports.ConstraintUtil = {
      findConstraint: function (c, constraintClass) {
          if (c instanceof constraintClass) {
              return c;
          }
          if (c instanceof composite_1.CompositeConstraint) {
              var result = c.constraints.reduce(function (tmpResult, sc) {
                  if (tmpResult) {
                      return tmpResult;
                  }
                  return sc instanceof constraintClass ? sc : null;
              }, null);
              if (result) {
                  return result;
              }
          }
          return null;
      },
  };


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/boolean-input.ts":
  /*!******************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/boolean-input.ts ***!
    \******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
  var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
  var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
  var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
  var BooleanConverter = __webpack_require__(/*! ../../converter/boolean */ "./src/main/js/converter/boolean.ts");
  var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
  var checkbox_1 = __webpack_require__(/*! ../input/checkbox */ "./src/main/js/controller/input/checkbox.ts");
  var list_2 = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  function createConstraint(params) {
      var constraints = [];
      if ('options' in params && params.options !== undefined) {
          constraints.push(new list_1.ListConstraint({
              options: UiUtil.normalizeInputParamsOptions(params.options, BooleanConverter.fromMixed),
          }));
      }
      return new composite_1.CompositeConstraint({
          constraints: constraints,
      });
  }
  function createController(document, value) {
      var c = value.constraint;
      if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
          return new list_2.ListInputController(document, {
              viewModel: new view_model_1.ViewModel(),
              stringifyValue: BooleanConverter.toString,
              value: value,
          });
      }
      return new checkbox_1.CheckboxInputController(document, {
          viewModel: new view_model_1.ViewModel(),
          value: value,
      });
  }
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'boolean') {
          return null;
      }
      var value = new input_value_1.InputValue(false, createConstraint(params));
      var binding = new input_1.InputBinding({
          reader: BooleanConverter.fromMixed,
          target: target,
          value: value,
          writer: function (v) { return v; },
      });
      return new input_binding_1.InputBindingController(document, {
          binding: binding,
          controller: createController(document, value),
          label: params.label || target.key,
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/boolean-monitor.ts":
  /*!********************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/boolean-monitor.ts ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var monitor_1 = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.ts");
  var BooleanConverter = __webpack_require__(/*! ../../converter/boolean */ "./src/main/js/converter/boolean.ts");
  var boolean_1 = __webpack_require__(/*! ../../formatter/boolean */ "./src/main/js/formatter/boolean.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var monitor_value_1 = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var monitor_binding_1 = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
  var multi_log_1 = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.ts");
  var single_log_1 = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.ts");
  var util_1 = __webpack_require__(/*! ./util */ "./src/main/js/controller/binding-creators/util.ts");
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'boolean') {
          return null;
      }
      var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
      var controller = value.totalCount === 1
          ? new single_log_1.SingleLogMonitorController(document, {
              viewModel: new view_model_1.ViewModel(),
              formatter: new boolean_1.BooleanFormatter(),
              value: value,
          })
          : new multi_log_1.MultiLogMonitorController(document, {
              viewModel: new view_model_1.ViewModel(),
              formatter: new boolean_1.BooleanFormatter(),
              value: value,
          });
      return new monitor_binding_1.MonitorBindingController(document, {
          binding: new monitor_1.MonitorBinding({
              reader: BooleanConverter.fromMixed,
              target: target,
              ticker: util_1.createTicker(document, params.interval),
              value: value,
          }),
          controller: controller,
          label: params.label || target.key,
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/color-input.ts":
  /*!****************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/color-input.ts ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createWithObject = exports.createWithNumber = exports.createWithString = void 0;
  var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
  var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
  var color_1 = __webpack_require__(/*! ../../formatter/color */ "./src/main/js/formatter/color.ts");
  var color_2 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var NumberColorParser = __webpack_require__(/*! ../../parser/number-color */ "./src/main/js/parser/number-color.ts");
  var StringColorParser = __webpack_require__(/*! ../../parser/string-color */ "./src/main/js/parser/string-color.ts");
  var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
  var color_swatch_text_1 = __webpack_require__(/*! ../input/color-swatch-text */ "./src/main/js/controller/input/color-swatch-text.ts");
  /**
   * @hidden
   */
  function createWithString(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'string') {
          return null;
      }
      var notation = StringColorParser.getNotation(initialValue);
      if (!notation) {
          return null;
      }
      var converter = ColorConverter.fromString;
      var color = converter(initialValue);
      var value = new input_value_1.InputValue(color);
      var writer = ColorConverter.getStringifier(notation);
      return new input_binding_1.InputBindingController(document, {
          binding: new input_1.InputBinding({
              reader: converter,
              target: target,
              value: value,
              writer: writer,
          }),
          controller: new color_swatch_text_1.ColorSwatchTextInputController(document, {
              formatter: new color_1.ColorFormatter(writer),
              parser: StringColorParser.CompositeParser,
              supportsAlpha: StringColorParser.hasAlphaComponent(notation),
              value: value,
              viewModel: new view_model_1.ViewModel(),
          }),
          label: params.label || target.key,
      });
  }
  exports.createWithString = createWithString;
  /**
   * @hidden
   */
  function createWithNumber(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'number') {
          return null;
      }
      if (!('input' in params)) {
          return null;
      }
      if (params.input !== 'color' &&
          params.input !== 'color.rgb' &&
          params.input !== 'color.rgba') {
          return null;
      }
      var supportsAlpha = params.input === 'color.rgba';
      var parser = supportsAlpha
          ? NumberColorParser.RgbaParser
          : NumberColorParser.RgbParser;
      var color = parser(initialValue);
      if (!color) {
          return null;
      }
      var formatter = supportsAlpha
          ? new color_1.ColorFormatter(ColorConverter.toHexRgbaString)
          : new color_1.ColorFormatter(ColorConverter.toHexRgbString);
      var reader = supportsAlpha
          ? ColorConverter.fromNumberToRgba
          : ColorConverter.fromNumberToRgb;
      var writer = supportsAlpha
          ? ColorConverter.toRgbaNumber
          : ColorConverter.toRgbNumber;
      var value = new input_value_1.InputValue(color);
      return new input_binding_1.InputBindingController(document, {
          binding: new input_1.InputBinding({
              reader: reader,
              target: target,
              value: value,
              writer: writer,
          }),
          controller: new color_swatch_text_1.ColorSwatchTextInputController(document, {
              formatter: formatter,
              parser: StringColorParser.CompositeParser,
              supportsAlpha: supportsAlpha,
              value: value,
              viewModel: new view_model_1.ViewModel(),
          }),
          label: params.label || target.key,
      });
  }
  exports.createWithNumber = createWithNumber;
  /**
   * @hidden
   */
  function createWithObject(document, target, params) {
      var initialValue = target.read();
      if (!color_2.Color.isColorObject(initialValue)) {
          return null;
      }
      var color = color_2.Color.fromObject(initialValue);
      var supportsAlpha = color_2.Color.isRgbaColorObject(initialValue);
      var formatter = supportsAlpha
          ? new color_1.ColorFormatter(ColorConverter.toHexRgbaString)
          : new color_1.ColorFormatter(ColorConverter.toHexRgbString);
      var value = new input_value_1.InputValue(color);
      return new input_binding_1.InputBindingController(document, {
          binding: new input_1.InputBinding({
              reader: ColorConverter.fromObject,
              target: target,
              value: value,
              writer: color_2.Color.toRgbaObject,
          }),
          controller: new color_swatch_text_1.ColorSwatchTextInputController(document, {
              viewModel: new view_model_1.ViewModel(),
              formatter: formatter,
              parser: StringColorParser.CompositeParser,
              supportsAlpha: supportsAlpha,
              value: value,
          }),
          label: params.label || target.key,
      });
  }
  exports.createWithObject = createWithObject;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/input.ts":
  /*!**********************************************************!*\
    !*** ./src/main/js/controller/binding-creators/input.ts ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var BooleanInputBindingControllerCreators = __webpack_require__(/*! ./boolean-input */ "./src/main/js/controller/binding-creators/boolean-input.ts");
  var ColorInputBindingControllerCreators = __webpack_require__(/*! ./color-input */ "./src/main/js/controller/binding-creators/color-input.ts");
  var NumberInputBindingControllerCreators = __webpack_require__(/*! ./number-input */ "./src/main/js/controller/binding-creators/number-input.ts");
  var Point2dInputBindingControllerCreators = __webpack_require__(/*! ./point-2d-input */ "./src/main/js/controller/binding-creators/point-2d-input.ts");
  var StringInputBindingControllerCreators = __webpack_require__(/*! ./string-input */ "./src/main/js/controller/binding-creators/string-input.ts");
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      if (type_util_1.TypeUtil.isEmpty(initialValue)) {
          throw new pane_error_1.PaneError({
              context: {
                  key: target.key,
              },
              type: 'emptyvalue',
          });
      }
      var bc = [
          BooleanInputBindingControllerCreators.create,
          ColorInputBindingControllerCreators.createWithNumber,
          ColorInputBindingControllerCreators.createWithObject,
          ColorInputBindingControllerCreators.createWithString,
          NumberInputBindingControllerCreators.create,
          StringInputBindingControllerCreators.create,
          Point2dInputBindingControllerCreators.create,
      ].reduce(function (result, createBindingController) {
          return result || createBindingController(document, target, params);
      }, null);
      if (bc) {
          return bc;
      }
      throw new pane_error_1.PaneError({
          context: {
              key: target.key,
          },
          type: 'nomatchingcontroller',
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/monitor.ts":
  /*!************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/monitor.ts ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var BooleanMonitorBindingControllerCreators = __webpack_require__(/*! ./boolean-monitor */ "./src/main/js/controller/binding-creators/boolean-monitor.ts");
  var NumberMonitorBindingControllerCreators = __webpack_require__(/*! ./number-monitor */ "./src/main/js/controller/binding-creators/number-monitor.ts");
  var StringMonitorBindingControllerCreators = __webpack_require__(/*! ./string-monitor */ "./src/main/js/controller/binding-creators/string-monitor.ts");
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      if (type_util_1.TypeUtil.isEmpty(initialValue)) {
          throw new pane_error_1.PaneError({
              context: {
                  key: target.key,
              },
              type: 'emptyvalue',
          });
      }
      var bc = [
          NumberMonitorBindingControllerCreators.create,
          StringMonitorBindingControllerCreators.create,
          BooleanMonitorBindingControllerCreators.create,
      ].reduce(function (result, createBindingController) {
          return result || createBindingController(document, target, params);
      }, null);
      if (bc) {
          return bc;
      }
      throw new pane_error_1.PaneError({
          context: {
              key: target.key,
          },
          type: 'nomatchingcontroller',
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/number-input.ts":
  /*!*****************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/number-input.ts ***!
    \*****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
  var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
  var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
  var range_1 = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.ts");
  var step_1 = __webpack_require__(/*! ../../constraint/step */ "./src/main/js/constraint/step.ts");
  var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
  var NumberConverter = __webpack_require__(/*! ../../converter/number */ "./src/main/js/converter/number.ts");
  var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var string_number_1 = __webpack_require__(/*! ../../parser/string-number */ "./src/main/js/parser/string-number.ts");
  var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
  var list_2 = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.ts");
  var number_text_1 = __webpack_require__(/*! ../input/number-text */ "./src/main/js/controller/input/number-text.ts");
  var slider_text_1 = __webpack_require__(/*! ../input/slider-text */ "./src/main/js/controller/input/slider-text.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  function createConstraint(params) {
      var constraints = [];
      if ('step' in params && !type_util_1.TypeUtil.isEmpty(params.step)) {
          constraints.push(new step_1.StepConstraint({
              step: params.step,
          }));
      }
      if (('max' in params && !type_util_1.TypeUtil.isEmpty(params.max)) ||
          ('min' in params && !type_util_1.TypeUtil.isEmpty(params.min))) {
          constraints.push(new range_1.RangeConstraint({
              max: params.max,
              min: params.min,
          }));
      }
      if ('options' in params && params.options !== undefined) {
          constraints.push(new list_1.ListConstraint({
              options: UiUtil.normalizeInputParamsOptions(params.options, NumberConverter.fromMixed),
          }));
      }
      return new composite_1.CompositeConstraint({
          constraints: constraints,
      });
  }
  function createController(document, value) {
      var c = value.constraint;
      if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
          return new list_2.ListInputController(document, {
              stringifyValue: NumberConverter.toString,
              value: value,
              viewModel: new view_model_1.ViewModel(),
          });
      }
      if (c && util_1.ConstraintUtil.findConstraint(c, range_1.RangeConstraint)) {
          return new slider_text_1.SliderTextInputController(document, {
              formatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(value.constraint, value.rawValue)),
              parser: string_number_1.StringNumberParser,
              value: value,
              viewModel: new view_model_1.ViewModel(),
          });
      }
      return new number_text_1.NumberTextInputController(document, {
          formatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(value.constraint, value.rawValue)),
          parser: string_number_1.StringNumberParser,
          value: value,
          viewModel: new view_model_1.ViewModel(),
      });
  }
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'number') {
          return null;
      }
      var value = new input_value_1.InputValue(0, createConstraint(params));
      var binding = new input_1.InputBinding({
          reader: NumberConverter.fromMixed,
          target: target,
          value: value,
          writer: function (v) { return v; },
      });
      var controller = createController(document, value);
      return new input_binding_1.InputBindingController(document, {
          binding: binding,
          controller: controller,
          label: params.label || target.key,
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/number-monitor.ts":
  /*!*******************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/number-monitor.ts ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var monitor_1 = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.ts");
  var NumberConverter = __webpack_require__(/*! ../../converter/number */ "./src/main/js/converter/number.ts");
  var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var monitor_value_1 = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var monitor_binding_1 = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
  var graph_1 = __webpack_require__(/*! ../monitor/graph */ "./src/main/js/controller/monitor/graph.ts");
  var multi_log_1 = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.ts");
  var single_log_1 = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.ts");
  var util_1 = __webpack_require__(/*! ./util */ "./src/main/js/controller/binding-creators/util.ts");
  function createFormatter() {
      // TODO: formatter precision
      return new number_1.NumberFormatter(2);
  }
  function createTextMonitor(document, target, params) {
      var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
      var controller = value.totalCount === 1
          ? new single_log_1.SingleLogMonitorController(document, {
              formatter: createFormatter(),
              value: value,
              viewModel: new view_model_1.ViewModel(),
          })
          : new multi_log_1.MultiLogMonitorController(document, {
              formatter: createFormatter(),
              value: value,
              viewModel: new view_model_1.ViewModel(),
          });
      return new monitor_binding_1.MonitorBindingController(document, {
          binding: new monitor_1.MonitorBinding({
              reader: NumberConverter.fromMixed,
              target: target,
              ticker: util_1.createTicker(document, params.interval),
              value: value,
          }),
          controller: controller,
          label: params.label || target.key,
      });
  }
  function createGraphMonitor(document, target, params) {
      var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 64));
      var controller = new graph_1.GraphMonitorController(document, {
          formatter: createFormatter(),
          maxValue: type_util_1.TypeUtil.getOrDefault('max' in params ? params.max : null, 100),
          minValue: type_util_1.TypeUtil.getOrDefault('min' in params ? params.min : null, 0),
          value: value,
          viewModel: new view_model_1.ViewModel(),
      });
      return new monitor_binding_1.MonitorBindingController(document, {
          binding: new monitor_1.MonitorBinding({
              reader: NumberConverter.fromMixed,
              target: target,
              ticker: util_1.createTicker(document, params.interval),
              value: value,
          }),
          controller: controller,
          label: params.label || target.key,
      });
  }
  function create(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'number') {
          return null;
      }
      if ('view' in params && params.view === 'graph') {
          return createGraphMonitor(document, target, params);
      }
      return createTextMonitor(document, target, params);
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/point-2d-input.ts":
  /*!*******************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/point-2d-input.ts ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
  var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
  var point_2d_1 = __webpack_require__(/*! ../../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
  var range_1 = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.ts");
  var step_1 = __webpack_require__(/*! ../../constraint/step */ "./src/main/js/constraint/step.ts");
  var Point2dConverter = __webpack_require__(/*! ../../converter/point-2d */ "./src/main/js/converter/point-2d.ts");
  var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var any_point_2d_1 = __webpack_require__(/*! ../../parser/any-point-2d */ "./src/main/js/parser/any-point-2d.ts");
  var string_number_1 = __webpack_require__(/*! ../../parser/string-number */ "./src/main/js/parser/string-number.ts");
  var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
  var point_2d_pad_text_1 = __webpack_require__(/*! ../input/point-2d-pad-text */ "./src/main/js/controller/input/point-2d-pad-text.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  function createDimensionConstraint(params) {
      if (!params) {
          return undefined;
      }
      var constraints = [];
      if (!type_util_1.TypeUtil.isEmpty(params.step)) {
          constraints.push(new step_1.StepConstraint({
              step: params.step,
          }));
      }
      if (!type_util_1.TypeUtil.isEmpty(params.max) || !type_util_1.TypeUtil.isEmpty(params.min)) {
          constraints.push(new range_1.RangeConstraint({
              max: params.max,
              min: params.min,
          }));
      }
      return new composite_1.CompositeConstraint({
          constraints: constraints,
      });
  }
  function createConstraint(params) {
      return new point_2d_1.Point2dConstraint({
          x: createDimensionConstraint('x' in params ? params.x : undefined),
          y: createDimensionConstraint('y' in params ? params.y : undefined),
      });
  }
  function createController(document, value, invertsY) {
      var c = value.constraint;
      if (!(c instanceof point_2d_1.Point2dConstraint)) {
          throw pane_error_1.PaneError.shouldNeverHappen();
      }
      return new point_2d_pad_text_1.Point2dPadTextInputController(document, {
          invertsY: invertsY,
          parser: string_number_1.StringNumberParser,
          value: value,
          viewModel: new view_model_1.ViewModel(),
          xFormatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(c.xConstraint, value.rawValue.x)),
          yFormatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(c.yConstraint, value.rawValue.y)),
      });
  }
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      var p = any_point_2d_1.AnyPoint2dParser(initialValue);
      if (!p) {
          return null;
      }
      var value = new input_value_1.InputValue(p, createConstraint(params));
      var binding = new input_1.InputBinding({
          reader: Point2dConverter.fromMixed,
          target: target,
          value: value,
          writer: function (v) { return v.toObject(); },
      });
      var yParams = 'y' in params ? params.y : undefined;
      var invertsY = yParams ? !!yParams.inverted : false;
      var controller = createController(document, value, invertsY);
      return new input_binding_1.InputBindingController(document, {
          binding: binding,
          controller: controller,
          label: params.label || target.key,
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/string-input.ts":
  /*!*****************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/string-input.ts ***!
    \*****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
  var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
  var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
  var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
  var StringConverter = __webpack_require__(/*! ../../converter/string */ "./src/main/js/converter/string.ts");
  var string_1 = __webpack_require__(/*! ../../formatter/string */ "./src/main/js/formatter/string.ts");
  var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
  var list_2 = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.ts");
  var text_1 = __webpack_require__(/*! ../input/text */ "./src/main/js/controller/input/text.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  function createConstraint(params) {
      var constraints = [];
      if ('options' in params && params.options !== undefined) {
          constraints.push(new list_1.ListConstraint({
              options: UiUtil.normalizeInputParamsOptions(params.options, StringConverter.fromMixed),
          }));
      }
      return new composite_1.CompositeConstraint({
          constraints: constraints,
      });
  }
  function createController(document, value) {
      var c = value.constraint;
      if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
          return new list_2.ListInputController(document, {
              stringifyValue: StringConverter.toString,
              value: value,
              viewModel: new view_model_1.ViewModel(),
          });
      }
      return new text_1.TextInputController(document, {
          formatter: new string_1.StringFormatter(),
          parser: StringConverter.toString,
          value: value,
          viewModel: new view_model_1.ViewModel(),
      });
  }
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'string') {
          return null;
      }
      var value = new input_value_1.InputValue('', createConstraint(params));
      var binding = new input_1.InputBinding({
          reader: StringConverter.fromMixed,
          target: target,
          value: value,
          writer: function (v) { return v; },
      });
      var controller = createController(document, value);
      return new input_binding_1.InputBindingController(document, {
          binding: binding,
          controller: controller,
          label: params.label || target.key,
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/string-monitor.ts":
  /*!*******************************************************************!*\
    !*** ./src/main/js/controller/binding-creators/string-monitor.ts ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = void 0;
  var monitor_1 = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.ts");
  var StringConverter = __webpack_require__(/*! ../../converter/string */ "./src/main/js/converter/string.ts");
  var string_1 = __webpack_require__(/*! ../../formatter/string */ "./src/main/js/formatter/string.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var monitor_value_1 = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.ts");
  var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
  var monitor_binding_1 = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
  var multi_log_1 = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.ts");
  var single_log_1 = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.ts");
  var util_1 = __webpack_require__(/*! ./util */ "./src/main/js/controller/binding-creators/util.ts");
  /**
   * @hidden
   */
  function create(document, target, params) {
      var initialValue = target.read();
      if (typeof initialValue !== 'string') {
          return null;
      }
      var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
      var multiline = value.totalCount > 1 || ('multiline' in params && params.multiline);
      var controller = multiline
          ? new multi_log_1.MultiLogMonitorController(document, {
              formatter: new string_1.StringFormatter(),
              value: value,
              viewModel: new view_model_1.ViewModel(),
          })
          : new single_log_1.SingleLogMonitorController(document, {
              formatter: new string_1.StringFormatter(),
              value: value,
              viewModel: new view_model_1.ViewModel(),
          });
      return new monitor_binding_1.MonitorBindingController(document, {
          binding: new monitor_1.MonitorBinding({
              reader: StringConverter.fromMixed,
              target: target,
              ticker: util_1.createTicker(document, params.interval),
              value: value,
          }),
          controller: controller,
          label: params.label || target.key,
      });
  }
  exports.create = create;


  /***/ }),

  /***/ "./src/main/js/controller/binding-creators/util.ts":
  /*!*********************************************************!*\
    !*** ./src/main/js/controller/binding-creators/util.ts ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createTicker = void 0;
  var constants_1 = __webpack_require__(/*! ../../misc/constants */ "./src/main/js/misc/constants.ts");
  var interval_1 = __webpack_require__(/*! ../../misc/ticker/interval */ "./src/main/js/misc/ticker/interval.ts");
  var manual_1 = __webpack_require__(/*! ../../misc/ticker/manual */ "./src/main/js/misc/ticker/manual.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  function createTicker(document, interval) {
      return interval === 0
          ? new manual_1.ManualTicker()
          : new interval_1.IntervalTicker(document, type_util_1.TypeUtil.getOrDefault(interval, constants_1.Constants.monitorDefaultInterval));
  }
  exports.createTicker = createTicker;


  /***/ }),

  /***/ "./src/main/js/controller/button.ts":
  /*!******************************************!*\
    !*** ./src/main/js/controller/button.ts ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ButtonController = void 0;
  var button_1 = __webpack_require__(/*! ../model/button */ "./src/main/js/model/button.ts");
  var button_2 = __webpack_require__(/*! ../view/button */ "./src/main/js/view/button.ts");
  /**
   * @hidden
   */
  var ButtonController = /** @class */ (function () {
      function ButtonController(document, config) {
          this.onButtonClick_ = this.onButtonClick_.bind(this);
          this.button = new button_1.Button(config.title);
          this.viewModel = config.viewModel;
          this.view = new button_2.ButtonView(document, {
              button: this.button,
              model: this.viewModel,
          });
          this.view.buttonElement.addEventListener('click', this.onButtonClick_);
      }
      ButtonController.prototype.onButtonClick_ = function () {
          this.button.click();
      };
      return ButtonController;
  }());
  exports.ButtonController = ButtonController;


  /***/ }),

  /***/ "./src/main/js/controller/container-util.ts":
  /*!**************************************************!*\
    !*** ./src/main/js/controller/container-util.ts ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.computeExpandedFolderHeight = exports.updateAllItemsPositions = void 0;
  var DomUtil = __webpack_require__(/*! ../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  function updateAllItemsPositions(uiContainer) {
      var visibleItems = uiContainer.items.filter(function (uc) { return !uc.viewModel.hidden; });
      var firstVisibleItem = visibleItems[0];
      var lastVisibleItem = visibleItems[visibleItems.length - 1];
      uiContainer.items.forEach(function (uc) {
          var ps = [];
          if (uc === firstVisibleItem) {
              ps.push('first');
          }
          if (uc === lastVisibleItem) {
              ps.push('last');
          }
          uc.viewModel.positions = ps;
      });
  }
  exports.updateAllItemsPositions = updateAllItemsPositions;
  /**
   * @hidden
   */
  function computeExpandedFolderHeight(folder, containerElement) {
      var height = 0;
      DomUtil.disableTransitionTemporarily(containerElement, function () {
          // Expand folder temporarily
          folder.expandedHeight = null;
          folder.temporaryExpanded = true;
          DomUtil.forceReflow(containerElement);
          // Compute height
          height = containerElement.clientHeight;
          // Restore expanded
          folder.temporaryExpanded = null;
          DomUtil.forceReflow(containerElement);
      });
      return height;
  }
  exports.computeExpandedFolderHeight = computeExpandedFolderHeight;


  /***/ }),

  /***/ "./src/main/js/controller/folder.ts":
  /*!******************************************!*\
    !*** ./src/main/js/controller/folder.ts ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FolderController = void 0;
  var DomUtil = __webpack_require__(/*! ../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var folder_1 = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.ts");
  var ui_container_1 = __webpack_require__(/*! ../model/ui-container */ "./src/main/js/model/ui-container.ts");
  var folder_2 = __webpack_require__(/*! ../view/folder */ "./src/main/js/view/folder.ts");
  var ContainerUtil = __webpack_require__(/*! ./container-util */ "./src/main/js/controller/container-util.ts");
  /**
   * @hidden
   */
  var FolderController = /** @class */ (function () {
      function FolderController(document, config) {
          this.onContainerTransitionEnd_ = this.onContainerTransitionEnd_.bind(this);
          this.onFolderBeforeChange_ = this.onFolderBeforeChange_.bind(this);
          this.onTitleClick_ = this.onTitleClick_.bind(this);
          this.onUiContainerAdd_ = this.onUiContainerAdd_.bind(this);
          this.onUiContainerItemLayout_ = this.onUiContainerItemLayout_.bind(this);
          this.onUiContainerRemove_ = this.onUiContainerRemove_.bind(this);
          this.viewModel = config.viewModel;
          this.folder = new folder_1.Folder(config.title, type_util_1.TypeUtil.getOrDefault(config.expanded, true));
          this.folder.emitter.on('beforechange', this.onFolderBeforeChange_);
          this.ucList_ = new ui_container_1.UiContainer();
          this.ucList_.emitter.on('add', this.onUiContainerAdd_);
          this.ucList_.emitter.on('itemlayout', this.onUiContainerItemLayout_);
          this.ucList_.emitter.on('remove', this.onUiContainerRemove_);
          this.doc_ = document;
          this.view = new folder_2.FolderView(this.doc_, {
              folder: this.folder,
              model: this.viewModel,
          });
          this.view.titleElement.addEventListener('click', this.onTitleClick_);
          this.view.containerElement.addEventListener('transitionend', this.onContainerTransitionEnd_);
      }
      Object.defineProperty(FolderController.prototype, "document", {
          get: function () {
              return this.doc_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(FolderController.prototype, "uiContainer", {
          get: function () {
              return this.ucList_;
          },
          enumerable: false,
          configurable: true
      });
      FolderController.prototype.onFolderBeforeChange_ = function (ev) {
          if (ev.propertyName !== 'expanded') {
              return;
          }
          if (type_util_1.TypeUtil.isEmpty(this.folder.expandedHeight)) {
              this.folder.expandedHeight = ContainerUtil.computeExpandedFolderHeight(this.folder, this.view.containerElement);
          }
          this.folder.shouldFixHeight = true;
          DomUtil.forceReflow(this.view.containerElement);
      };
      FolderController.prototype.onTitleClick_ = function () {
          this.folder.expanded = !this.folder.expanded;
      };
      FolderController.prototype.applyUiContainerChange_ = function () {
          ContainerUtil.updateAllItemsPositions(this.uiContainer);
      };
      FolderController.prototype.onUiContainerAdd_ = function (ev) {
          DomUtil.insertElementAt(this.view.containerElement, ev.uiController.view.element, ev.index);
          this.applyUiContainerChange_();
      };
      FolderController.prototype.onUiContainerRemove_ = function (_) {
          this.applyUiContainerChange_();
      };
      FolderController.prototype.onUiContainerItemLayout_ = function (_) {
          this.applyUiContainerChange_();
      };
      FolderController.prototype.onContainerTransitionEnd_ = function (ev) {
          if (ev.propertyName !== 'height') {
              return;
          }
          this.folder.shouldFixHeight = false;
          this.folder.expandedHeight = null;
      };
      return FolderController;
  }());
  exports.FolderController = FolderController;


  /***/ }),

  /***/ "./src/main/js/controller/input-binding.ts":
  /*!*************************************************!*\
    !*** ./src/main/js/controller/input-binding.ts ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InputBindingController = void 0;
  var labeled_1 = __webpack_require__(/*! ../view/labeled */ "./src/main/js/view/labeled.ts");
  /**
   * @hidden
   */
  var InputBindingController = /** @class */ (function () {
      function InputBindingController(document, config) {
          this.binding = config.binding;
          this.controller = config.controller;
          this.view = new labeled_1.LabeledView(document, {
              model: this.controller.viewModel,
              label: config.label,
              view: this.controller.view,
          });
      }
      Object.defineProperty(InputBindingController.prototype, "viewModel", {
          get: function () {
              return this.controller.viewModel;
          },
          enumerable: false,
          configurable: true
      });
      return InputBindingController;
  }());
  exports.InputBindingController = InputBindingController;


  /***/ }),

  /***/ "./src/main/js/controller/input/a-palette.ts":
  /*!***************************************************!*\
    !*** ./src/main/js/controller/input/a-palette.ts ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.APaletteInputController = void 0;
  var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
  var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var a_palette_1 = __webpack_require__(/*! ../../view/input/a-palette */ "./src/main/js/view/input/a-palette.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  /**
   * @hidden
   */
  var APaletteInputController = /** @class */ (function () {
      function APaletteInputController(document, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.view = new a_palette_1.APaletteInputView(document, {
              model: this.viewModel,
              value: this.value,
          });
          this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.element);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.element.addEventListener('keydown', this.onKeyDown_);
      }
      APaletteInputController.prototype.handlePointerEvent_ = function (d) {
          var alpha = d.px;
          var c = this.value.rawValue;
          var _a = c.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2];
          this.value.rawValue = new color_1.Color([h, s, v, alpha], 'hsv');
          this.view.update();
      };
      APaletteInputController.prototype.onPointerDown_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      APaletteInputController.prototype.onPointerMove_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      APaletteInputController.prototype.onPointerUp_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      APaletteInputController.prototype.onKeyDown_ = function (ev) {
          var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(true), UiUtil.getHorizontalStepKeys(ev));
          var c = this.value.rawValue;
          var _a = c.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
          this.value.rawValue = new color_1.Color([h, s, v, a + step], 'hsv');
      };
      return APaletteInputController;
  }());
  exports.APaletteInputController = APaletteInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/checkbox.ts":
  /*!**************************************************!*\
    !*** ./src/main/js/controller/input/checkbox.ts ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CheckboxInputController = void 0;
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var checkbox_1 = __webpack_require__(/*! ../../view/input/checkbox */ "./src/main/js/view/input/checkbox.ts");
  /**
   * @hidden
   */
  var CheckboxInputController = /** @class */ (function () {
      function CheckboxInputController(document, config) {
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.view = new checkbox_1.CheckboxInputView(document, {
              model: this.viewModel,
              value: this.value,
          });
          this.view.inputElement.addEventListener('change', this.onInputChange_);
      }
      CheckboxInputController.prototype.onInputChange_ = function (e) {
          var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
          this.value.rawValue = inputElem.checked;
          this.view.update();
      };
      return CheckboxInputController;
  }());
  exports.CheckboxInputController = CheckboxInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/color-component-texts.ts":
  /*!***************************************************************!*\
    !*** ./src/main/js/controller/input/color-component-texts.ts ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorComponentTextsInputController = void 0;
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var color_component_texts_1 = __webpack_require__(/*! ../../view/input/color-component-texts */ "./src/main/js/view/input/color-component-texts.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  /**
   * @hidden
   */
  var ColorComponentTextsInputController = /** @class */ (function () {
      function ColorComponentTextsInputController(document, config) {
          var _this = this;
          this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
          this.parser_ = config.parser;
          this.pickedColor = config.pickedColor;
          this.viewModel = config.viewModel;
          this.view = new color_component_texts_1.ColorComponentTextsInputView(document, {
              model: this.viewModel,
              pickedColor: this.pickedColor,
          });
          this.view.inputElements.forEach(function (inputElem) {
              inputElem.addEventListener('change', _this.onInputChange_);
              inputElem.addEventListener('keydown', _this.onInputKeyDown_);
          });
          this.view.modeSelectElement.addEventListener('change', this.onModeSelectChange_);
      }
      Object.defineProperty(ColorComponentTextsInputController.prototype, "value", {
          get: function () {
              return this.pickedColor.value;
          },
          enumerable: false,
          configurable: true
      });
      ColorComponentTextsInputController.prototype.findIndexOfInputElem_ = function (inputElem) {
          var inputElems = this.view.inputElements;
          for (var i = 0; i < inputElems.length; i++) {
              if (inputElems[i] === inputElem) {
                  return i;
              }
          }
          return null;
      };
      ColorComponentTextsInputController.prototype.updateComponent_ = function (index, newValue) {
          var mode = this.pickedColor.mode;
          var comps = this.value.rawValue.getComponents(mode);
          var newComps = comps.map(function (comp, i) {
              return i === index ? newValue : comp;
          });
          this.value.rawValue = new color_1.Color(newComps, mode);
          this.view.update();
      };
      ColorComponentTextsInputController.prototype.onInputChange_ = function (e) {
          var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
          var parsedValue = this.parser_(inputElem.value);
          if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
          }
          var compIndex = this.findIndexOfInputElem_(inputElem);
          if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
          }
          this.updateComponent_(compIndex, parsedValue);
      };
      ColorComponentTextsInputController.prototype.onInputKeyDown_ = function (e) {
          var compIndex = this.findIndexOfInputElem_(e.currentTarget);
          var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(compIndex === 3), UiUtil.getVerticalStepKeys(e));
          if (step === 0) {
              return;
          }
          var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
          var parsedValue = this.parser_(inputElem.value);
          if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
          }
          if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
          }
          this.updateComponent_(compIndex, parsedValue + step);
      };
      ColorComponentTextsInputController.prototype.onModeSelectChange_ = function (ev) {
          var selectElem = ev.currentTarget;
          this.pickedColor.mode = selectElem.value;
      };
      return ColorComponentTextsInputController;
  }());
  exports.ColorComponentTextsInputController = ColorComponentTextsInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/color-picker.ts":
  /*!******************************************************!*\
    !*** ./src/main/js/controller/input/color-picker.ts ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorPickerInputController = void 0;
  var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
  var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var foldable_1 = __webpack_require__(/*! ../../model/foldable */ "./src/main/js/model/foldable.ts");
  var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
  var ModelSync = __webpack_require__(/*! ../../model/model-sync */ "./src/main/js/model/model-sync.ts");
  var string_number_1 = __webpack_require__(/*! ../../parser/string-number */ "./src/main/js/parser/string-number.ts");
  var color_picker_1 = __webpack_require__(/*! ../../view/input/color-picker */ "./src/main/js/view/input/color-picker.ts");
  var a_palette_1 = __webpack_require__(/*! ./a-palette */ "./src/main/js/controller/input/a-palette.ts");
  var color_component_texts_1 = __webpack_require__(/*! ./color-component-texts */ "./src/main/js/controller/input/color-component-texts.ts");
  var h_palette_1 = __webpack_require__(/*! ./h-palette */ "./src/main/js/controller/input/h-palette.ts");
  var number_text_1 = __webpack_require__(/*! ./number-text */ "./src/main/js/controller/input/number-text.ts");
  var sv_palette_1 = __webpack_require__(/*! ./sv-palette */ "./src/main/js/controller/input/sv-palette.ts");
  /**
   * @hidden
   */
  var ColorPickerInputController = /** @class */ (function () {
      function ColorPickerInputController(document, config) {
          var _this = this;
          this.triggerElement = null;
          this.onFocusableElementBlur_ = this.onFocusableElementBlur_.bind(this);
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.pickedColor = config.pickedColor;
          this.foldable = new foldable_1.Foldable();
          this.viewModel = config.viewModel;
          this.hPaletteIc_ = new h_palette_1.HPaletteInputController(document, {
              value: this.pickedColor.value,
              viewModel: this.viewModel,
          });
          this.svPaletteIc_ = new sv_palette_1.SvPaletteInputController(document, {
              value: this.pickedColor.value,
              viewModel: this.viewModel,
          });
          this.alphaIcs_ = config.supportsAlpha
              ? {
                  palette: new a_palette_1.APaletteInputController(document, {
                      value: this.pickedColor.value,
                      viewModel: this.viewModel,
                  }),
                  text: new number_text_1.NumberTextInputController(document, {
                      formatter: new number_1.NumberFormatter(2),
                      parser: string_number_1.StringNumberParser,
                      step: 0.1,
                      value: new input_value_1.InputValue(0),
                      viewModel: this.viewModel,
                  }),
              }
              : null;
          if (this.alphaIcs_) {
              ModelSync.connect({
                  primary: {
                      apply: function (from, to) {
                          to.rawValue = from.value.rawValue.getComponents()[3];
                      },
                      emitter: function (m) { return m.value.emitter; },
                      value: this.pickedColor,
                  },
                  secondary: {
                      apply: function (from, to) {
                          var comps = to.value.rawValue.getComponents();
                          comps[3] = from.rawValue;
                          to.value.rawValue = new color_1.Color(comps, to.value.rawValue.mode);
                      },
                      emitter: function (m) { return m.emitter; },
                      value: this.alphaIcs_.text.value,
                  },
              });
          }
          this.compTextsIc_ = new color_component_texts_1.ColorComponentTextsInputController(document, {
              parser: string_number_1.StringNumberParser,
              pickedColor: this.pickedColor,
              viewModel: this.viewModel,
          });
          this.view = new color_picker_1.ColorPickerInputView(document, {
              alphaInputViews: this.alphaIcs_
                  ? {
                      palette: this.alphaIcs_.palette.view,
                      text: this.alphaIcs_.text.view,
                  }
                  : null,
              componentTextsView: this.compTextsIc_.view,
              foldable: this.foldable,
              hPaletteInputView: this.hPaletteIc_.view,
              model: this.viewModel,
              pickedColor: this.pickedColor,
              supportsAlpha: config.supportsAlpha,
              svPaletteInputView: this.svPaletteIc_.view,
          });
          this.view.element.addEventListener('keydown', this.onKeyDown_);
          this.view.allFocusableElements.forEach(function (elem) {
              elem.addEventListener('blur', _this.onFocusableElementBlur_);
          });
      }
      Object.defineProperty(ColorPickerInputController.prototype, "value", {
          get: function () {
              return this.pickedColor.value;
          },
          enumerable: false,
          configurable: true
      });
      ColorPickerInputController.prototype.onFocusableElementBlur_ = function (ev) {
          var elem = this.view.element;
          var nextTarget = DomUtil.findNextTarget(ev);
          if (nextTarget && elem.contains(nextTarget)) {
              // Next target is in the picker
              return;
          }
          if (nextTarget &&
              nextTarget === this.triggerElement &&
              !DomUtil.supportsTouch(elem.ownerDocument)) {
              // Next target is the trigger button
              return;
          }
          this.foldable.expanded = false;
      };
      ColorPickerInputController.prototype.onKeyDown_ = function (ev) {
          if (ev.keyCode === 27) {
              this.foldable.expanded = false;
          }
      };
      return ColorPickerInputController;
  }());
  exports.ColorPickerInputController = ColorPickerInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/color-swatch-text.ts":
  /*!***********************************************************!*\
    !*** ./src/main/js/controller/input/color-swatch-text.ts ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorSwatchTextInputController = void 0;
  var color_swatch_text_1 = __webpack_require__(/*! ../../view/input/color-swatch-text */ "./src/main/js/view/input/color-swatch-text.ts");
  var color_swatch_1 = __webpack_require__(/*! ../input/color-swatch */ "./src/main/js/controller/input/color-swatch.ts");
  var text_1 = __webpack_require__(/*! ./text */ "./src/main/js/controller/input/text.ts");
  /**
   * @hidden
   */
  var ColorSwatchTextInputController = /** @class */ (function () {
      function ColorSwatchTextInputController(document, config) {
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.swatchIc_ = new color_swatch_1.ColorSwatchInputController(document, {
              supportsAlpha: config.supportsAlpha,
              value: this.value,
              viewModel: this.viewModel,
          });
          this.textIc_ = new text_1.TextInputController(document, {
              formatter: config.formatter,
              parser: config.parser,
              value: this.value,
              viewModel: this.viewModel,
          });
          this.view = new color_swatch_text_1.ColorSwatchTextInputView(document, {
              swatchInputView: this.swatchIc_.view,
              textInputView: this.textIc_.view,
              model: this.viewModel,
          });
      }
      return ColorSwatchTextInputController;
  }());
  exports.ColorSwatchTextInputController = ColorSwatchTextInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/color-swatch.ts":
  /*!******************************************************!*\
    !*** ./src/main/js/controller/input/color-swatch.ts ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorSwatchInputController = void 0;
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var picked_color_1 = __webpack_require__(/*! ../../model/picked-color */ "./src/main/js/model/picked-color.ts");
  var color_swatch_1 = __webpack_require__(/*! ../../view/input/color-swatch */ "./src/main/js/view/input/color-swatch.ts");
  var color_picker_1 = __webpack_require__(/*! ./color-picker */ "./src/main/js/controller/input/color-picker.ts");
  /**
   * @hidden
   */
  var ColorSwatchInputController = /** @class */ (function () {
      function ColorSwatchInputController(document, config) {
          this.onButtonBlur_ = this.onButtonBlur_.bind(this);
          this.onButtonClick_ = this.onButtonClick_.bind(this);
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.pickerIc_ = new color_picker_1.ColorPickerInputController(document, {
              pickedColor: new picked_color_1.PickedColor(this.value),
              supportsAlpha: config.supportsAlpha,
              viewModel: this.viewModel,
          });
          this.view = new color_swatch_1.ColorSwatchInputView(document, {
              model: this.viewModel,
              pickerInputView: this.pickerIc_.view,
              value: this.value,
          });
          this.view.buttonElement.addEventListener('blur', this.onButtonBlur_);
          this.view.buttonElement.addEventListener('click', this.onButtonClick_);
          this.pickerIc_.triggerElement = this.view.buttonElement;
      }
      ColorSwatchInputController.prototype.onButtonBlur_ = function (e) {
          var elem = this.view.element;
          var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
          if (!nextTarget || !elem.contains(nextTarget)) {
              this.pickerIc_.foldable.expanded = false;
          }
      };
      ColorSwatchInputController.prototype.onButtonClick_ = function () {
          this.pickerIc_.foldable.expanded = !this.pickerIc_.foldable.expanded;
          if (this.pickerIc_.foldable.expanded) {
              this.pickerIc_.view.allFocusableElements[0].focus();
          }
      };
      return ColorSwatchInputController;
  }());
  exports.ColorSwatchInputController = ColorSwatchInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/h-palette.ts":
  /*!***************************************************!*\
    !*** ./src/main/js/controller/input/h-palette.ts ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HPaletteInputController = void 0;
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
  var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var h_palette_1 = __webpack_require__(/*! ../../view/input/h-palette */ "./src/main/js/view/input/h-palette.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  /**
   * @hidden
   */
  var HPaletteInputController = /** @class */ (function () {
      function HPaletteInputController(document, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.view = new h_palette_1.HPaletteInputView(document, {
              model: this.viewModel,
              value: this.value,
          });
          this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.element);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.element.addEventListener('keydown', this.onKeyDown_);
      }
      HPaletteInputController.prototype.handlePointerEvent_ = function (d) {
          var hue = number_util_1.NumberUtil.map(d.px, 0, 1, 0, 360);
          var c = this.value.rawValue;
          var _a = c.getComponents('hsv'), s = _a[1], v = _a[2], a = _a[3];
          this.value.rawValue = new color_1.Color([hue, s, v, a], 'hsv');
          this.view.update();
      };
      HPaletteInputController.prototype.onPointerDown_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      HPaletteInputController.prototype.onPointerMove_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      HPaletteInputController.prototype.onPointerUp_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      HPaletteInputController.prototype.onKeyDown_ = function (ev) {
          var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(false), UiUtil.getHorizontalStepKeys(ev));
          var c = this.value.rawValue;
          var _a = c.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
          this.value.rawValue = new color_1.Color([h + step, s, v, a], 'hsv');
      };
      return HPaletteInputController;
  }());
  exports.HPaletteInputController = HPaletteInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/list.ts":
  /*!**********************************************!*\
    !*** ./src/main/js/controller/input/list.ts ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ListInputController = void 0;
  var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
  var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var list_2 = __webpack_require__(/*! ../../view/input/list */ "./src/main/js/view/input/list.ts");
  function findListItems(value) {
      var c = value.constraint
          ? util_1.ConstraintUtil.findConstraint(value.constraint, list_1.ListConstraint)
          : null;
      if (!c) {
          return null;
      }
      return c.options;
  }
  /**
   * @hidden
   */
  var ListInputController = /** @class */ (function () {
      function ListInputController(document, config) {
          this.onSelectChange_ = this.onSelectChange_.bind(this);
          this.value_ = config.value;
          this.listItems_ = findListItems(this.value_) || [];
          this.viewModel = config.viewModel;
          this.view_ = new list_2.ListInputView(document, {
              model: this.viewModel,
              options: this.listItems_,
              stringifyValue: config.stringifyValue,
              value: this.value_,
          });
          this.view_.selectElement.addEventListener('change', this.onSelectChange_);
      }
      Object.defineProperty(ListInputController.prototype, "value", {
          get: function () {
              return this.value_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ListInputController.prototype, "view", {
          get: function () {
              return this.view_;
          },
          enumerable: false,
          configurable: true
      });
      ListInputController.prototype.onSelectChange_ = function (e) {
          var selectElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
          var optElem = selectElem.selectedOptions.item(0);
          if (!optElem) {
              return;
          }
          var itemIndex = Number(optElem.dataset.index);
          this.value_.rawValue = this.listItems_[itemIndex].value;
          this.view_.update();
      };
      return ListInputController;
  }());
  exports.ListInputController = ListInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/number-text.ts":
  /*!*****************************************************!*\
    !*** ./src/main/js/controller/input/number-text.ts ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NumberTextInputController = void 0;
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  var text_1 = __webpack_require__(/*! ./text */ "./src/main/js/controller/input/text.ts");
  /**
   * @hidden
   */
  var NumberTextInputController = /** @class */ (function (_super) {
      __extends(NumberTextInputController, _super);
      function NumberTextInputController(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onInputKeyDown_ = _this.onInputKeyDown_.bind(_this);
          _this.step_ = type_util_1.TypeUtil.getOrDefault(config.step, UiUtil.getStepForTextInput(_this.value.constraint));
          _this.view.inputElement.addEventListener('keydown', _this.onInputKeyDown_);
          return _this;
      }
      NumberTextInputController.prototype.onInputKeyDown_ = function (e) {
          var step = UiUtil.getStepForKey(this.step_, UiUtil.getVerticalStepKeys(e));
          if (step !== 0) {
              this.value.rawValue += step;
              this.view.update();
          }
      };
      return NumberTextInputController;
  }(text_1.TextInputController));
  exports.NumberTextInputController = NumberTextInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/point-2d-pad-text.ts":
  /*!***********************************************************!*\
    !*** ./src/main/js/controller/input/point-2d-pad-text.ts ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2dPadTextInputController = void 0;
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var point_2d_pad_text_1 = __webpack_require__(/*! ../../view/input/point-2d-pad-text */ "./src/main/js/view/input/point-2d-pad-text.ts");
  var point_2d_pad_1 = __webpack_require__(/*! ./point-2d-pad */ "./src/main/js/controller/input/point-2d-pad.ts");
  var point_2d_text_1 = __webpack_require__(/*! ./point-2d-text */ "./src/main/js/controller/input/point-2d-text.ts");
  /**
   * @hidden
   */
  var Point2dPadTextInputController = /** @class */ (function () {
      function Point2dPadTextInputController(document, config) {
          this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
          this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.padIc_ = new point_2d_pad_1.Point2dPadInputController(document, {
              invertsY: config.invertsY,
              value: this.value,
              viewModel: this.viewModel,
          });
          this.textIc_ = new point_2d_text_1.Point2dTextInputController(document, {
              parser: config.parser,
              value: this.value,
              viewModel: this.viewModel,
              xFormatter: config.xFormatter,
              yFormatter: config.yFormatter,
          });
          this.view = new point_2d_pad_text_1.Point2dPadTextInputView(document, {
              model: this.viewModel,
              padInputView: this.padIc_.view,
              textInputView: this.textIc_.view,
          });
          this.view.padButtonElement.addEventListener('blur', this.onPadButtonBlur_);
          this.view.padButtonElement.addEventListener('click', this.onPadButtonClick_);
          this.padIc_.triggerElement = this.view.padButtonElement;
      }
      Point2dPadTextInputController.prototype.onPadButtonBlur_ = function (e) {
          var elem = this.view.element;
          var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
          if (!nextTarget || !elem.contains(nextTarget)) {
              this.padIc_.foldable.expanded = false;
          }
      };
      Point2dPadTextInputController.prototype.onPadButtonClick_ = function () {
          this.padIc_.foldable.expanded = !this.padIc_.foldable.expanded;
          if (this.padIc_.foldable.expanded) {
              this.padIc_.view.allFocusableElements[0].focus();
          }
      };
      return Point2dPadTextInputController;
  }());
  exports.Point2dPadTextInputController = Point2dPadTextInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/point-2d-pad.ts":
  /*!******************************************************!*\
    !*** ./src/main/js/controller/input/point-2d-pad.ts ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2dPadInputController = void 0;
  var point_2d_1 = __webpack_require__(/*! ../../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
  var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
  var foldable_1 = __webpack_require__(/*! ../../model/foldable */ "./src/main/js/model/foldable.ts");
  var point_2d_2 = __webpack_require__(/*! ../../model/point-2d */ "./src/main/js/model/point-2d.ts");
  var point_2d_pad_1 = __webpack_require__(/*! ../../view/input/point-2d-pad */ "./src/main/js/view/input/point-2d-pad.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  /**
   * @hidden
   */
  var Point2dPadInputController = /** @class */ (function () {
      function Point2dPadInputController(document, config) {
          var _this = this;
          this.triggerElement = null;
          this.onFocusableElementBlur_ = this.onFocusableElementBlur_.bind(this);
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.foldable = new foldable_1.Foldable();
          this.maxValue_ = UiUtil.getSuitableMaxValueForPoint2dPad(this.value.constraint, this.value.rawValue);
          this.invertsY_ = config.invertsY;
          var c = this.value.constraint;
          this.xStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.xConstraint : undefined);
          this.yStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.yConstraint : undefined);
          this.viewModel = config.viewModel;
          this.view = new point_2d_pad_1.Point2dPadInputView(document, {
              foldable: this.foldable,
              invertsY: this.invertsY_,
              maxValue: this.maxValue_,
              model: this.viewModel,
              value: this.value,
          });
          this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.padElement);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.padElement.addEventListener('keydown', this.onPadKeyDown_);
          this.view.element.addEventListener('keydown', this.onKeyDown_);
          this.view.allFocusableElements.forEach(function (elem) {
              elem.addEventListener('blur', _this.onFocusableElementBlur_);
          });
      }
      Point2dPadInputController.prototype.handlePointerEvent_ = function (d) {
          var max = this.maxValue_;
          var px = number_util_1.NumberUtil.map(d.px, 0, 1, -max, +max);
          var py = number_util_1.NumberUtil.map(this.invertsY_ ? 1 - d.py : d.py, 0, 1, -max, +max);
          this.value.rawValue = new point_2d_2.Point2d(px, py);
          this.view.update();
      };
      Point2dPadInputController.prototype.onPointerDown_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      Point2dPadInputController.prototype.onPointerMove_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      Point2dPadInputController.prototype.onPointerUp_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      Point2dPadInputController.prototype.onPadKeyDown_ = function (ev) {
          if (UiUtil.isArrowKey(ev.keyCode)) {
              ev.preventDefault();
          }
          this.value.rawValue = new point_2d_2.Point2d(this.value.rawValue.x +
              UiUtil.getStepForKey(this.xStep_, UiUtil.getHorizontalStepKeys(ev)), this.value.rawValue.y +
              UiUtil.getStepForKey(this.yStep_, UiUtil.getVerticalStepKeys(ev)) *
                  (this.invertsY_ ? 1 : -1));
      };
      Point2dPadInputController.prototype.onFocusableElementBlur_ = function (ev) {
          var elem = this.view.element;
          var nextTarget = DomUtil.findNextTarget(ev);
          if (nextTarget && elem.contains(nextTarget)) {
              // Next target is in the picker
              return;
          }
          if (nextTarget &&
              nextTarget === this.triggerElement &&
              !DomUtil.supportsTouch(elem.ownerDocument)) {
              // Next target is the trigger button
              return;
          }
          this.foldable.expanded = false;
      };
      Point2dPadInputController.prototype.onKeyDown_ = function (ev) {
          if (ev.keyCode === 27) {
              this.foldable.expanded = false;
          }
      };
      return Point2dPadInputController;
  }());
  exports.Point2dPadInputController = Point2dPadInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/point-2d-text.ts":
  /*!*******************************************************!*\
    !*** ./src/main/js/controller/input/point-2d-text.ts ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2dTextInputController = void 0;
  var point_2d_1 = __webpack_require__(/*! ../../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var point_2d_2 = __webpack_require__(/*! ../../model/point-2d */ "./src/main/js/model/point-2d.ts");
  var point_2d_text_1 = __webpack_require__(/*! ../../view/input/point-2d-text */ "./src/main/js/view/input/point-2d-text.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  /**
   * @hidden
   */
  var Point2dTextInputController = /** @class */ (function () {
      function Point2dTextInputController(document, config) {
          var _this = this;
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
          this.parser_ = config.parser;
          this.value = config.value;
          var c = this.value.constraint;
          this.xStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.xConstraint : undefined);
          this.yStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.yConstraint : undefined);
          this.viewModel = config.viewModel;
          this.view = new point_2d_text_1.Point2dTextInputView(document, {
              model: this.viewModel,
              value: this.value,
              xFormatter: config.xFormatter,
              yFormatter: config.yFormatter,
          });
          this.view.inputElements.forEach(function (inputElem) {
              inputElem.addEventListener('change', _this.onInputChange_);
              inputElem.addEventListener('keydown', _this.onInputKeyDown_);
          });
      }
      Point2dTextInputController.prototype.findIndexOfInputElem_ = function (inputElem) {
          var inputElems = this.view.inputElements;
          for (var i = 0; i < inputElems.length; i++) {
              if (inputElems[i] === inputElem) {
                  return i;
              }
          }
          return null;
      };
      Point2dTextInputController.prototype.updateComponent_ = function (index, newValue) {
          var comps = this.value.rawValue.getComponents();
          var newComps = comps.map(function (comp, i) {
              return i === index ? newValue : comp;
          });
          this.value.rawValue = new point_2d_2.Point2d(newComps[0], newComps[1]);
          this.view.update();
      };
      Point2dTextInputController.prototype.onInputChange_ = function (e) {
          var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
          var parsedValue = this.parser_(inputElem.value);
          if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
          }
          var compIndex = this.findIndexOfInputElem_(inputElem);
          if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
          }
          this.updateComponent_(compIndex, parsedValue);
      };
      Point2dTextInputController.prototype.onInputKeyDown_ = function (e) {
          var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
          var parsedValue = this.parser_(inputElem.value);
          if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
              return;
          }
          var compIndex = this.findIndexOfInputElem_(inputElem);
          if (type_util_1.TypeUtil.isEmpty(compIndex)) {
              return;
          }
          var step = UiUtil.getStepForKey(compIndex === 0 ? this.xStep_ : this.yStep_, UiUtil.getVerticalStepKeys(e));
          if (step === 0) {
              return;
          }
          this.updateComponent_(compIndex, parsedValue + step);
      };
      return Point2dTextInputController;
  }());
  exports.Point2dTextInputController = Point2dTextInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/slider-text.ts":
  /*!*****************************************************!*\
    !*** ./src/main/js/controller/input/slider-text.ts ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SliderTextInputController = void 0;
  var slider_text_1 = __webpack_require__(/*! ../../view/input/slider-text */ "./src/main/js/view/input/slider-text.ts");
  var number_text_1 = __webpack_require__(/*! ./number-text */ "./src/main/js/controller/input/number-text.ts");
  var slider_1 = __webpack_require__(/*! ./slider */ "./src/main/js/controller/input/slider.ts");
  /**
   * @hidden
   */
  var SliderTextInputController = /** @class */ (function () {
      function SliderTextInputController(document, config) {
          this.value_ = config.value;
          this.viewModel = config.viewModel;
          this.sliderIc_ = new slider_1.SliderInputController(document, {
              value: config.value,
              viewModel: this.viewModel,
          });
          this.textIc_ = new number_text_1.NumberTextInputController(document, {
              formatter: config.formatter,
              parser: config.parser,
              value: config.value,
              viewModel: this.viewModel,
          });
          this.view_ = new slider_text_1.SliderTextInputView(document, {
              model: this.viewModel,
              sliderInputView: this.sliderIc_.view,
              textInputView: this.textIc_.view,
          });
      }
      Object.defineProperty(SliderTextInputController.prototype, "value", {
          get: function () {
              return this.value_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(SliderTextInputController.prototype, "view", {
          get: function () {
              return this.view_;
          },
          enumerable: false,
          configurable: true
      });
      return SliderTextInputController;
  }());
  exports.SliderTextInputController = SliderTextInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/slider.ts":
  /*!************************************************!*\
    !*** ./src/main/js/controller/input/slider.ts ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SliderInputController = void 0;
  var range_1 = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.ts");
  var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var slider_1 = __webpack_require__(/*! ../../view/input/slider */ "./src/main/js/view/input/slider.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  function findRange(value) {
      var c = value.constraint
          ? util_1.ConstraintUtil.findConstraint(value.constraint, range_1.RangeConstraint)
          : null;
      if (!c) {
          return [undefined, undefined];
      }
      return [c.minValue, c.maxValue];
  }
  function estimateSuitableRange(value) {
      var _a = findRange(value), min = _a[0], max = _a[1];
      return [
          type_util_1.TypeUtil.getOrDefault(min, 0),
          type_util_1.TypeUtil.getOrDefault(max, 100),
      ];
  }
  /**
   * @hidden
   */
  var SliderInputController = /** @class */ (function () {
      function SliderInputController(document, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.step_ = UiUtil.getStepForTextInput(this.value.constraint);
          var _a = estimateSuitableRange(this.value), min = _a[0], max = _a[1];
          this.minValue_ = min;
          this.maxValue_ = max;
          this.viewModel = config.viewModel;
          this.view = new slider_1.SliderInputView(document, {
              maxValue: this.maxValue_,
              minValue: this.minValue_,
              model: this.viewModel,
              value: this.value,
          });
          this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.outerElement);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.outerElement.addEventListener('keydown', this.onKeyDown_);
      }
      SliderInputController.prototype.handlePointerEvent_ = function (d) {
          this.value.rawValue = number_util_1.NumberUtil.map(d.px, 0, 1, this.minValue_, this.maxValue_);
      };
      SliderInputController.prototype.onPointerDown_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      SliderInputController.prototype.onPointerMove_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      SliderInputController.prototype.onPointerUp_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      SliderInputController.prototype.onKeyDown_ = function (ev) {
          this.value.rawValue += UiUtil.getStepForKey(this.step_, UiUtil.getHorizontalStepKeys(ev));
      };
      return SliderInputController;
  }());
  exports.SliderInputController = SliderInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/sv-palette.ts":
  /*!****************************************************!*\
    !*** ./src/main/js/controller/input/sv-palette.ts ***!
    \****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SvPaletteInputController = void 0;
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
  var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var sv_palette_1 = __webpack_require__(/*! ../../view/input/sv-palette */ "./src/main/js/view/input/sv-palette.ts");
  var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
  /**
   * @hidden
   */
  var SvPaletteInputController = /** @class */ (function () {
      function SvPaletteInputController(document, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.view = new sv_palette_1.SvPaletteInputView(document, {
              model: this.viewModel,
              value: this.value,
          });
          this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.element);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.element.addEventListener('keydown', this.onKeyDown_);
      }
      SvPaletteInputController.prototype.handlePointerEvent_ = function (d) {
          var saturation = number_util_1.NumberUtil.map(d.px, 0, 1, 0, 100);
          var value = number_util_1.NumberUtil.map(d.py, 0, 1, 100, 0);
          var _a = this.value.rawValue.getComponents('hsv'), h = _a[0], a = _a[3];
          this.value.rawValue = new color_1.Color([h, saturation, value, a], 'hsv');
          this.view.update();
      };
      SvPaletteInputController.prototype.onPointerDown_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      SvPaletteInputController.prototype.onPointerMove_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      SvPaletteInputController.prototype.onPointerUp_ = function (ev) {
          this.handlePointerEvent_(ev.data);
      };
      SvPaletteInputController.prototype.onKeyDown_ = function (ev) {
          if (UiUtil.isArrowKey(ev.keyCode)) {
              ev.preventDefault();
          }
          var _a = this.value.rawValue.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
          var baseStep = UiUtil.getBaseStepForColor(false);
          this.value.rawValue = new color_1.Color([
              h,
              s + UiUtil.getStepForKey(baseStep, UiUtil.getHorizontalStepKeys(ev)),
              v + UiUtil.getStepForKey(baseStep, UiUtil.getVerticalStepKeys(ev)),
              a,
          ], 'hsv');
      };
      return SvPaletteInputController;
  }());
  exports.SvPaletteInputController = SvPaletteInputController;


  /***/ }),

  /***/ "./src/main/js/controller/input/text.ts":
  /*!**********************************************!*\
    !*** ./src/main/js/controller/input/text.ts ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TextInputController = void 0;
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var text_1 = __webpack_require__(/*! ../../view/input/text */ "./src/main/js/view/input/text.ts");
  /**
   * @hidden
   */
  var TextInputController = /** @class */ (function () {
      function TextInputController(document, config) {
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.parser_ = config.parser;
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.view = new text_1.TextInputView(document, {
              formatter: config.formatter,
              model: this.viewModel,
              value: this.value,
          });
          this.view.inputElement.addEventListener('change', this.onInputChange_);
      }
      TextInputController.prototype.onInputChange_ = function (e) {
          var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
          var value = inputElem.value;
          var parsedValue = this.parser_(value);
          if (!type_util_1.TypeUtil.isEmpty(parsedValue)) {
              this.value.rawValue = parsedValue;
          }
          this.view.update();
      };
      return TextInputController;
  }());
  exports.TextInputController = TextInputController;


  /***/ }),

  /***/ "./src/main/js/controller/monitor-binding.ts":
  /*!***************************************************!*\
    !*** ./src/main/js/controller/monitor-binding.ts ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MonitorBindingController = void 0;
  var labeled_1 = __webpack_require__(/*! ../view/labeled */ "./src/main/js/view/labeled.ts");
  /**
   * @hidden
   */
  var MonitorBindingController = /** @class */ (function () {
      function MonitorBindingController(document, config) {
          var _this = this;
          this.binding = config.binding;
          this.controller = config.controller;
          this.view = new labeled_1.LabeledView(document, {
              label: config.label,
              model: this.viewModel,
              view: this.controller.view,
          });
          this.viewModel.emitter.on('dispose', function () {
              _this.binding.dispose();
          });
      }
      Object.defineProperty(MonitorBindingController.prototype, "viewModel", {
          get: function () {
              return this.controller.viewModel;
          },
          enumerable: false,
          configurable: true
      });
      return MonitorBindingController;
  }());
  exports.MonitorBindingController = MonitorBindingController;


  /***/ }),

  /***/ "./src/main/js/controller/monitor/graph.ts":
  /*!*************************************************!*\
    !*** ./src/main/js/controller/monitor/graph.ts ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GraphMonitorController = void 0;
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var graph_cursor_1 = __webpack_require__(/*! ../../model/graph-cursor */ "./src/main/js/model/graph-cursor.ts");
  var graph_1 = __webpack_require__(/*! ../../view/monitor/graph */ "./src/main/js/view/monitor/graph.ts");
  /**
   * @hidden
   */
  var GraphMonitorController = /** @class */ (function () {
      function GraphMonitorController(document, config) {
          this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
          this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
          this.value = config.value;
          this.cursor_ = new graph_cursor_1.GraphCursor();
          this.viewModel = config.viewModel;
          this.view = new graph_1.GraphMonitorView(document, {
              cursor: this.cursor_,
              formatter: config.formatter,
              maxValue: config.maxValue,
              minValue: config.minValue,
              model: this.viewModel,
              value: this.value,
          });
          this.view.graphElement.addEventListener('mouseleave', this.onGraphMouseLeave_);
          this.view.graphElement.addEventListener('mousemove', this.onGraphMouseMove_);
      }
      GraphMonitorController.prototype.onGraphMouseLeave_ = function () {
          this.cursor_.index = -1;
      };
      GraphMonitorController.prototype.onGraphMouseMove_ = function (e) {
          var bounds = this.view.graphElement.getBoundingClientRect();
          var x = e.offsetX;
          this.cursor_.index = Math.floor(number_util_1.NumberUtil.map(x, 0, bounds.width, 0, this.value.totalCount));
      };
      return GraphMonitorController;
  }());
  exports.GraphMonitorController = GraphMonitorController;


  /***/ }),

  /***/ "./src/main/js/controller/monitor/multi-log.ts":
  /*!*****************************************************!*\
    !*** ./src/main/js/controller/monitor/multi-log.ts ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MultiLogMonitorController = void 0;
  var multi_log_1 = __webpack_require__(/*! ../../view/monitor/multi-log */ "./src/main/js/view/monitor/multi-log.ts");
  /**
   * @hidden
   */
  var MultiLogMonitorController = /** @class */ (function () {
      function MultiLogMonitorController(document, config) {
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.view = new multi_log_1.MultiLogMonitorView(document, {
              formatter: config.formatter,
              model: this.viewModel,
              value: this.value,
          });
      }
      return MultiLogMonitorController;
  }());
  exports.MultiLogMonitorController = MultiLogMonitorController;


  /***/ }),

  /***/ "./src/main/js/controller/monitor/single-log.ts":
  /*!******************************************************!*\
    !*** ./src/main/js/controller/monitor/single-log.ts ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SingleLogMonitorController = void 0;
  var single_log_1 = __webpack_require__(/*! ../../view/monitor/single-log */ "./src/main/js/view/monitor/single-log.ts");
  /**
   * @hidden
   */
  var SingleLogMonitorController = /** @class */ (function () {
      function SingleLogMonitorController(document, config) {
          this.value = config.value;
          this.viewModel = config.viewModel;
          this.view = new single_log_1.SingleLogMonitorView(document, {
              formatter: config.formatter,
              model: this.viewModel,
              value: this.value,
          });
      }
      return SingleLogMonitorController;
  }());
  exports.SingleLogMonitorController = SingleLogMonitorController;


  /***/ }),

  /***/ "./src/main/js/controller/root.ts":
  /*!****************************************!*\
    !*** ./src/main/js/controller/root.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RootController = void 0;
  var DomUtil = __webpack_require__(/*! ../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var folder_1 = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.ts");
  var ui_container_1 = __webpack_require__(/*! ../model/ui-container */ "./src/main/js/model/ui-container.ts");
  var root_1 = __webpack_require__(/*! ../view/root */ "./src/main/js/view/root.ts");
  var ContainerUtil = __webpack_require__(/*! ./container-util */ "./src/main/js/controller/container-util.ts");
  function createFolder(config) {
      if (!config.title) {
          return null;
      }
      return new folder_1.Folder(config.title, type_util_1.TypeUtil.getOrDefault(config.expanded, true));
  }
  /**
   * @hidden
   */
  var RootController = /** @class */ (function () {
      function RootController(document, config) {
          this.onContainerTransitionEnd_ = this.onContainerTransitionEnd_.bind(this);
          this.onFolderBeforeChange_ = this.onFolderBeforeChange_.bind(this);
          this.onTitleClick_ = this.onTitleClick_.bind(this);
          this.onUiContainerAdd_ = this.onUiContainerAdd_.bind(this);
          this.onUiContainerItemLayout_ = this.onUiContainerItemLayout_.bind(this);
          this.onUiContainerRemove_ = this.onUiContainerRemove_.bind(this);
          this.folder = createFolder(config);
          if (this.folder) {
              this.folder.emitter.on('beforechange', this.onFolderBeforeChange_);
          }
          this.ucList_ = new ui_container_1.UiContainer();
          this.ucList_.emitter.on('add', this.onUiContainerAdd_);
          this.ucList_.emitter.on('itemlayout', this.onUiContainerItemLayout_);
          this.ucList_.emitter.on('remove', this.onUiContainerRemove_);
          this.doc_ = document;
          this.viewModel = config.viewModel;
          this.view = new root_1.RootView(this.doc_, {
              folder: this.folder,
              model: this.viewModel,
          });
          if (this.view.titleElement) {
              this.view.titleElement.addEventListener('click', this.onTitleClick_);
          }
          this.view.containerElement.addEventListener('transitionend', this.onContainerTransitionEnd_);
      }
      Object.defineProperty(RootController.prototype, "document", {
          get: function () {
              return this.doc_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(RootController.prototype, "uiContainer", {
          get: function () {
              return this.ucList_;
          },
          enumerable: false,
          configurable: true
      });
      RootController.prototype.onFolderBeforeChange_ = function (ev) {
          if (ev.propertyName !== 'expanded') {
              return;
          }
          var folder = this.folder;
          if (!folder) {
              return;
          }
          if (type_util_1.TypeUtil.isEmpty(folder.expandedHeight)) {
              folder.expandedHeight = ContainerUtil.computeExpandedFolderHeight(folder, this.view.containerElement);
          }
          folder.shouldFixHeight = true;
          DomUtil.forceReflow(this.view.containerElement);
      };
      RootController.prototype.applyUiContainerChange_ = function () {
          ContainerUtil.updateAllItemsPositions(this.uiContainer);
      };
      RootController.prototype.onUiContainerAdd_ = function (ev) {
          DomUtil.insertElementAt(this.view.containerElement, ev.uiController.view.element, ev.index);
          this.applyUiContainerChange_();
      };
      RootController.prototype.onUiContainerRemove_ = function (_) {
          this.applyUiContainerChange_();
      };
      RootController.prototype.onUiContainerItemLayout_ = function (_) {
          this.applyUiContainerChange_();
      };
      RootController.prototype.onTitleClick_ = function () {
          if (this.folder) {
              this.folder.expanded = !this.folder.expanded;
          }
      };
      RootController.prototype.onContainerTransitionEnd_ = function (ev) {
          if (ev.propertyName !== 'height') {
              return;
          }
          if (this.folder) {
              this.folder.shouldFixHeight = false;
              this.folder.expandedHeight = null;
          }
      };
      return RootController;
  }());
  exports.RootController = RootController;


  /***/ }),

  /***/ "./src/main/js/controller/separator.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/controller/separator.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SeparatorController = void 0;
  var separator_1 = __webpack_require__(/*! ../view/separator */ "./src/main/js/view/separator.ts");
  /**
   * @hidden
   */
  var SeparatorController = /** @class */ (function () {
      function SeparatorController(document, config) {
          this.viewModel = config.viewModel;
          this.view = new separator_1.SeparatorView(document, {
              model: this.viewModel,
          });
      }
      return SeparatorController;
  }());
  exports.SeparatorController = SeparatorController;


  /***/ }),

  /***/ "./src/main/js/controller/ui-util.ts":
  /*!*******************************************!*\
    !*** ./src/main/js/controller/ui-util.ts ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getBaseStepForColor = exports.getSuitableMaxValueForPoint2dPad = exports.getSuitableDecimalDigits = exports.isArrowKey = exports.isVerticalArrowKey = exports.getHorizontalStepKeys = exports.getVerticalStepKeys = exports.getStepForKey = exports.getStepForTextInput = exports.findControllers = exports.normalizeInputParamsOptions = void 0;
  var point_2d_1 = __webpack_require__(/*! ../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
  var range_1 = __webpack_require__(/*! ../constraint/range */ "./src/main/js/constraint/range.ts");
  var step_1 = __webpack_require__(/*! ../constraint/step */ "./src/main/js/constraint/step.ts");
  var util_1 = __webpack_require__(/*! ../constraint/util */ "./src/main/js/constraint/util.ts");
  var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var folder_1 = __webpack_require__(/*! ./folder */ "./src/main/js/controller/folder.ts");
  /**
   * @hidden
   */
  function normalizeInputParamsOptions(options, convert) {
      if (Array.isArray(options)) {
          return options.map(function (item) {
              return {
                  text: item.text,
                  value: convert(item.value),
              };
          });
      }
      var textToValueMap = options;
      var texts = Object.keys(textToValueMap);
      return texts.reduce(function (result, text) {
          return result.concat({
              text: text,
              value: convert(textToValueMap[text]),
          });
      }, []);
  }
  exports.normalizeInputParamsOptions = normalizeInputParamsOptions;
  /**
   * @hidden
   */
  function findControllers(uiControllers, controllerClass) {
      return uiControllers.reduce(function (results, uc) {
          if (uc instanceof folder_1.FolderController) {
              // eslint-disable-next-line no-use-before-define
              results.push.apply(results, findControllers(uc.uiContainer.items, controllerClass));
          }
          if (uc instanceof controllerClass) {
              results.push(uc);
          }
          return results;
      }, []);
  }
  exports.findControllers = findControllers;
  function findStep(constraint) {
      var c = constraint
          ? util_1.ConstraintUtil.findConstraint(constraint, step_1.StepConstraint)
          : null;
      if (!c) {
          return null;
      }
      return c.step;
  }
  /**
   * @hidden
   */
  function getStepForTextInput(constraint) {
      var step = findStep(constraint);
      return type_util_1.TypeUtil.getOrDefault(step, 1);
  }
  exports.getStepForTextInput = getStepForTextInput;
  /**
   * @hidden
   */
  function getStepForKey(baseStep, keys) {
      var step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
      if (keys.upKey) {
          return +step;
      }
      else if (keys.downKey) {
          return -step;
      }
      return 0;
  }
  exports.getStepForKey = getStepForKey;
  /**
   * @hidden
   */
  function getVerticalStepKeys(ev) {
      return {
          altKey: ev.altKey,
          downKey: ev.keyCode === 40,
          shiftKey: ev.shiftKey,
          upKey: ev.keyCode === 38,
      };
  }
  exports.getVerticalStepKeys = getVerticalStepKeys;
  /**
   * @hidden
   */
  function getHorizontalStepKeys(ev) {
      return {
          altKey: ev.altKey,
          downKey: ev.keyCode === 37,
          shiftKey: ev.shiftKey,
          upKey: ev.keyCode === 39,
      };
  }
  exports.getHorizontalStepKeys = getHorizontalStepKeys;
  /**
   * @hidden
   */
  function isVerticalArrowKey(keyCode) {
      return keyCode === 38 || keyCode === 40;
  }
  exports.isVerticalArrowKey = isVerticalArrowKey;
  /**
   * @hidden
   */
  function isArrowKey(keyCode) {
      return isVerticalArrowKey(keyCode) || keyCode === 37 || keyCode === 39;
  }
  exports.isArrowKey = isArrowKey;
  /**
   * @hidden
   */
  function getSuitableDecimalDigits(constraint, rawValue) {
      var sc = constraint && util_1.ConstraintUtil.findConstraint(constraint, step_1.StepConstraint);
      if (sc) {
          return number_util_1.NumberUtil.getDecimalDigits(sc.step);
      }
      return Math.max(number_util_1.NumberUtil.getDecimalDigits(rawValue), 2);
  }
  exports.getSuitableDecimalDigits = getSuitableDecimalDigits;
  /**
   * @hidden
   */
  function getSuitableMaxDimensionValue(constraint, rawValue) {
      var rc = constraint && util_1.ConstraintUtil.findConstraint(constraint, range_1.RangeConstraint);
      if (rc) {
          return Math.max(Math.abs(rc.minValue || 0), Math.abs(rc.maxValue || 0));
      }
      var step = getStepForTextInput(constraint);
      return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
  }
  /**
   * @hidden
   */
  function getSuitableMaxValueForPoint2dPad(constraint, rawValue) {
      var xc = constraint instanceof point_2d_1.Point2dConstraint
          ? constraint.xConstraint
          : undefined;
      var yc = constraint instanceof point_2d_1.Point2dConstraint
          ? constraint.yConstraint
          : undefined;
      var xr = getSuitableMaxDimensionValue(xc, rawValue.x);
      var yr = getSuitableMaxDimensionValue(yc, rawValue.y);
      return Math.max(xr, yr);
  }
  exports.getSuitableMaxValueForPoint2dPad = getSuitableMaxValueForPoint2dPad;
  /**
   * @hidden
   */
  function getBaseStepForColor(forAlpha) {
      return forAlpha ? 0.1 : 1;
  }
  exports.getBaseStepForColor = getBaseStepForColor;


  /***/ }),

  /***/ "./src/main/js/converter/boolean.ts":
  /*!******************************************!*\
    !*** ./src/main/js/converter/boolean.ts ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toString = exports.fromMixed = void 0;
  /**
   * @hidden
   */
  function fromMixed(value) {
      if (value === 'false') {
          return false;
      }
      return !!value;
  }
  exports.fromMixed = fromMixed;
  /**
   * @hidden
   */
  function toString(value) {
      return String(value);
  }
  exports.toString = toString;


  /***/ }),

  /***/ "./src/main/js/converter/color.ts":
  /*!****************************************!*\
    !*** ./src/main/js/converter/color.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toRgbaNumber = exports.toRgbNumber = exports.getStringifier = exports.toFunctionalHslaString = exports.toFunctionalHslString = exports.toFunctionalRgbaString = exports.toFunctionalRgbString = exports.toHexRgbaString = exports.toHexRgbString = exports.fromNumberToRgba = exports.fromNumberToRgb = exports.fromObject = exports.fromString = void 0;
  var number_1 = __webpack_require__(/*! ../formatter/number */ "./src/main/js/formatter/number.ts");
  var ColorModel = __webpack_require__(/*! ../misc/color-model */ "./src/main/js/misc/color-model.ts");
  var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var color_1 = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.ts");
  var NumberColorParser = __webpack_require__(/*! ../parser/number-color */ "./src/main/js/parser/number-color.ts");
  var StringColorParser = __webpack_require__(/*! ../parser/string-color */ "./src/main/js/parser/string-color.ts");
  function createEmptyColor() {
      return new color_1.Color([0, 0, 0], 'rgb');
  }
  /**
   * @hidden
   */
  function fromString(value) {
      if (typeof value === 'string') {
          var cv = StringColorParser.CompositeParser(value);
          if (cv) {
              return cv;
          }
      }
      return createEmptyColor();
  }
  exports.fromString = fromString;
  /**
   * @hidden
   */
  function fromObject(value) {
      if (color_1.Color.isColorObject(value)) {
          return color_1.Color.fromObject(value);
      }
      return createEmptyColor();
  }
  exports.fromObject = fromObject;
  /**
   * @hidden
   */
  function fromNumberToRgb(value) {
      if (typeof value === 'number') {
          var cv = NumberColorParser.RgbParser(value);
          if (cv) {
              return cv;
          }
      }
      return createEmptyColor();
  }
  exports.fromNumberToRgb = fromNumberToRgb;
  /**
   * @hidden
   */
  function fromNumberToRgba(value) {
      if (typeof value === 'number') {
          var cv = NumberColorParser.RgbaParser(value);
          if (cv) {
              return cv;
          }
      }
      return createEmptyColor();
  }
  exports.fromNumberToRgba = fromNumberToRgba;
  function zerofill(comp) {
      var hex = number_util_1.NumberUtil.constrain(Math.floor(comp), 0, 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
  }
  /**
   * @hidden
   */
  function toHexRgbString(value) {
      var hexes = ColorModel.withoutAlpha(value.getComponents('rgb'))
          .map(zerofill)
          .join('');
      return "#" + hexes;
  }
  exports.toHexRgbString = toHexRgbString;
  /**
   * @hidden
   */
  function toHexRgbaString(value) {
      var rgbaComps = value.getComponents('rgb');
      var hexes = [rgbaComps[0], rgbaComps[1], rgbaComps[2], rgbaComps[3] * 255]
          .map(zerofill)
          .join('');
      return "#" + hexes;
  }
  exports.toHexRgbaString = toHexRgbaString;
  /**
   * @hidden
   */
  function toFunctionalRgbString(value) {
      var formatter = new number_1.NumberFormatter(0);
      var comps = ColorModel.withoutAlpha(value.getComponents('rgb')).map(function (comp) { return formatter.format(comp); });
      return "rgb(" + comps.join(', ') + ")";
  }
  exports.toFunctionalRgbString = toFunctionalRgbString;
  /**
   * @hidden
   */
  function toFunctionalRgbaString(value) {
      var aFormatter = new number_1.NumberFormatter(2);
      var rgbFormatter = new number_1.NumberFormatter(0);
      var comps = value.getComponents('rgb').map(function (comp, index) {
          var formatter = index === 3 ? aFormatter : rgbFormatter;
          return formatter.format(comp);
      });
      return "rgba(" + comps.join(', ') + ")";
  }
  exports.toFunctionalRgbaString = toFunctionalRgbaString;
  /**
   * @hidden
   */
  function toFunctionalHslString(value) {
      var formatter = new number_1.NumberFormatter(0);
      var comps = ColorModel.withoutAlpha(value.getComponents('hsl')).map(function (comp) { return formatter.format(comp); });
      return "hsl(" + comps.join(', ') + ")";
  }
  exports.toFunctionalHslString = toFunctionalHslString;
  /**
   * @hidden
   */
  function toFunctionalHslaString(value) {
      var aFormatter = new number_1.NumberFormatter(2);
      var hslFormatter = new number_1.NumberFormatter(0);
      var comps = value.getComponents('hsl').map(function (comp, index) {
          var formatter = index === 3 ? aFormatter : hslFormatter;
          return formatter.format(comp);
      });
      return "hsla(" + comps.join(', ') + ")";
  }
  exports.toFunctionalHslaString = toFunctionalHslaString;
  var NOTATION_TO_STRINGIFIER_MAP = {
      'func.hsl': toFunctionalHslString,
      'func.hsla': toFunctionalHslaString,
      'func.rgb': toFunctionalRgbString,
      'func.rgba': toFunctionalRgbaString,
      'hex.rgb': toHexRgbString,
      'hex.rgba': toHexRgbaString,
  };
  function getStringifier(notation) {
      return NOTATION_TO_STRINGIFIER_MAP[notation];
  }
  exports.getStringifier = getStringifier;
  /**
   * @hidden
   */
  function toRgbNumber(value) {
      return ColorModel.withoutAlpha(value.getComponents('rgb')).reduce(function (result, comp) {
          return (result << 8) | (Math.floor(comp) & 0xff);
      }, 0);
  }
  exports.toRgbNumber = toRgbNumber;
  /**
   * @hidden
   */
  function toRgbaNumber(value) {
      return value.getComponents('rgb').reduce(function (result, comp, index) {
          var hex = Math.floor(index === 3 ? comp * 255 : comp) & 0xff;
          return (result << 8) | hex;
      }, 0);
  }
  exports.toRgbaNumber = toRgbaNumber;


  /***/ }),

  /***/ "./src/main/js/converter/number.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/converter/number.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toString = exports.fromMixed = void 0;
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var string_number_1 = __webpack_require__(/*! ../parser/string-number */ "./src/main/js/parser/string-number.ts");
  /**
   * @hidden
   */
  function fromMixed(value) {
      if (typeof value === 'number') {
          return value;
      }
      if (typeof value === 'string') {
          var pv = string_number_1.StringNumberParser(value);
          if (!type_util_1.TypeUtil.isEmpty(pv)) {
              return pv;
          }
      }
      return 0;
  }
  exports.fromMixed = fromMixed;
  /**
   * @hidden
   */
  function toString(value) {
      return String(value);
  }
  exports.toString = toString;


  /***/ }),

  /***/ "./src/main/js/converter/point-2d.ts":
  /*!*******************************************!*\
    !*** ./src/main/js/converter/point-2d.ts ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromMixed = void 0;
  var point_2d_1 = __webpack_require__(/*! ../model/point-2d */ "./src/main/js/model/point-2d.ts");
  var any_point_2d_1 = __webpack_require__(/*! ../parser/any-point-2d */ "./src/main/js/parser/any-point-2d.ts");
  /**
   * @hidden
   */
  function fromMixed(value) {
      return any_point_2d_1.AnyPoint2dParser(value) || new point_2d_1.Point2d();
  }
  exports.fromMixed = fromMixed;


  /***/ }),

  /***/ "./src/main/js/converter/string.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/converter/string.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toString = exports.fromMixed = void 0;
  /**
   * @hidden
   */
  function fromMixed(value) {
      return String(value);
  }
  exports.fromMixed = fromMixed;
  /**
   * @hidden
   */
  function toString(value) {
      return value;
  }
  exports.toString = toString;


  /***/ }),

  /***/ "./src/main/js/formatter/boolean.ts":
  /*!******************************************!*\
    !*** ./src/main/js/formatter/boolean.ts ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BooleanFormatter = void 0;
  var BooleanConverter = __webpack_require__(/*! ../converter/boolean */ "./src/main/js/converter/boolean.ts");
  /**
   * @hidden
   */
  var BooleanFormatter = /** @class */ (function () {
      function BooleanFormatter() {
      }
      BooleanFormatter.prototype.format = function (value) {
          return BooleanConverter.toString(value);
      };
      return BooleanFormatter;
  }());
  exports.BooleanFormatter = BooleanFormatter;


  /***/ }),

  /***/ "./src/main/js/formatter/color.ts":
  /*!****************************************!*\
    !*** ./src/main/js/formatter/color.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorFormatter = void 0;
  /**
   * @hidden
   */
  var ColorFormatter = /** @class */ (function () {
      function ColorFormatter(stringifier) {
          this.stringifier_ = stringifier;
      }
      ColorFormatter.prototype.format = function (value) {
          return this.stringifier_(value);
      };
      return ColorFormatter;
  }());
  exports.ColorFormatter = ColorFormatter;


  /***/ }),

  /***/ "./src/main/js/formatter/number.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/formatter/number.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NumberFormatter = void 0;
  /**
   * @hidden
   */
  var NumberFormatter = /** @class */ (function () {
      function NumberFormatter(digits) {
          this.digits_ = digits;
      }
      Object.defineProperty(NumberFormatter.prototype, "digits", {
          get: function () {
              return this.digits_;
          },
          enumerable: false,
          configurable: true
      });
      NumberFormatter.prototype.format = function (value) {
          return value.toFixed(Math.max(Math.min(this.digits_, 20), 0));
      };
      return NumberFormatter;
  }());
  exports.NumberFormatter = NumberFormatter;


  /***/ }),

  /***/ "./src/main/js/formatter/string.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/formatter/string.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StringFormatter = void 0;
  /**
   * @hidden
   */
  var StringFormatter = /** @class */ (function () {
      function StringFormatter() {
      }
      StringFormatter.prototype.format = function (value) {
          return value;
      };
      return StringFormatter;
  }());
  exports.StringFormatter = StringFormatter;


  /***/ }),

  /***/ "./src/main/js/index.ts":
  /*!******************************!*\
    !*** ./src/main/js/index.ts ***!
    \******************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  var Style = __webpack_require__(/*! ../sass/bundle.scss */ "./src/main/sass/bundle.scss");
  var tweakpane_without_style_1 = __webpack_require__(/*! ./tweakpane-without-style */ "./src/main/js/tweakpane-without-style.ts");
  function embedDefaultStyleIfNeeded(document) {
      var MARKER = 'tweakpane';
      if (document.querySelector("style[data-for=" + MARKER + "]")) {
          return;
      }
      var styleElem = document.createElement('style');
      styleElem.dataset.for = MARKER;
      styleElem.textContent = Style.toString();
      if (document.head) {
          document.head.appendChild(styleElem);
      }
  }
  // tslint:disable-next-line: no-default-export
  var Tweakpane = /** @class */ (function (_super) {
      __extends(Tweakpane, _super);
      function Tweakpane(opt_config) {
          var _this = _super.call(this, opt_config) || this;
          embedDefaultStyleIfNeeded(_this.document);
          return _this;
      }
      return Tweakpane;
  }(tweakpane_without_style_1.TweakpaneWithoutStyle));
  exports.default = Tweakpane;


  /***/ }),

  /***/ "./src/main/js/misc/class-name.ts":
  /*!****************************************!*\
    !*** ./src/main/js/misc/class-name.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ClassName = void 0;
  var PREFIX = 'tp';
  var TYPE_TO_POSTFIX_MAP = {
      '': 'v',
      input: 'iv',
      monitor: 'mv',
  };
  function ClassName(viewName, opt_viewType) {
      var viewType = opt_viewType || '';
      var postfix = TYPE_TO_POSTFIX_MAP[viewType];
      return function (opt_elementName, opt_modifier) {
          return [
              PREFIX,
              '-',
              viewName,
              postfix,
              opt_elementName ? "_" + opt_elementName : '',
              opt_modifier ? "-" + opt_modifier : '',
          ].join('');
      };
  }
  exports.ClassName = ClassName;


  /***/ }),

  /***/ "./src/main/js/misc/color-model.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/misc/color-model.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertMode = exports.withAlpha = exports.withoutAlpha = exports.opaque = exports.hsvToRgb = void 0;
  var number_util_1 = __webpack_require__(/*! ./number-util */ "./src/main/js/misc/number-util.ts");
  function rgbToHsl(r, g, b) {
      var rp = number_util_1.NumberUtil.constrain(r / 255, 0, 1);
      var gp = number_util_1.NumberUtil.constrain(g / 255, 0, 1);
      var bp = number_util_1.NumberUtil.constrain(b / 255, 0, 1);
      var cmax = Math.max(rp, gp, bp);
      var cmin = Math.min(rp, gp, bp);
      var c = cmax - cmin;
      var h = 0;
      var s = 0;
      var l = (cmin + cmax) / 2;
      if (c !== 0) {
          s = l > 0.5 ? c / (2 - cmin - cmax) : c / (cmax + cmin);
          if (rp === cmax) {
              h = (gp - bp) / c;
          }
          else if (gp === cmax) {
              h = 2 + (bp - rp) / c;
          }
          else {
              h = 4 + (rp - gp) / c;
          }
          h = h / 6 + (h < 0 ? 1 : 0);
      }
      return [h * 360, s * 100, l * 100];
  }
  function hslToRgb(h, s, l) {
      var _a, _b, _c, _d, _e, _f;
      var hp = ((h % 360) + 360) % 360;
      var sp = number_util_1.NumberUtil.constrain(s / 100, 0, 1);
      var lp = number_util_1.NumberUtil.constrain(l / 100, 0, 1);
      var c = (1 - Math.abs(2 * lp - 1)) * sp;
      var x = c * (1 - Math.abs(((hp / 60) % 2) - 1));
      var m = lp - c / 2;
      var rp, gp, bp;
      if (hp >= 0 && hp < 60) {
          _a = [c, x, 0], rp = _a[0], gp = _a[1], bp = _a[2];
      }
      else if (hp >= 60 && hp < 120) {
          _b = [x, c, 0], rp = _b[0], gp = _b[1], bp = _b[2];
      }
      else if (hp >= 120 && hp < 180) {
          _c = [0, c, x], rp = _c[0], gp = _c[1], bp = _c[2];
      }
      else if (hp >= 180 && hp < 240) {
          _d = [0, x, c], rp = _d[0], gp = _d[1], bp = _d[2];
      }
      else if (hp >= 240 && hp < 300) {
          _e = [x, 0, c], rp = _e[0], gp = _e[1], bp = _e[2];
      }
      else {
          _f = [c, 0, x], rp = _f[0], gp = _f[1], bp = _f[2];
      }
      return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
  }
  function rgbToHsv(r, g, b) {
      var rp = number_util_1.NumberUtil.constrain(r / 255, 0, 1);
      var gp = number_util_1.NumberUtil.constrain(g / 255, 0, 1);
      var bp = number_util_1.NumberUtil.constrain(b / 255, 0, 1);
      var cmax = Math.max(rp, gp, bp);
      var cmin = Math.min(rp, gp, bp);
      var d = cmax - cmin;
      var h;
      if (d === 0) {
          h = 0;
      }
      else if (cmax === rp) {
          h = 60 * (((((gp - bp) / d) % 6) + 6) % 6);
      }
      else if (cmax === gp) {
          h = 60 * ((bp - rp) / d + 2);
      }
      else {
          h = 60 * ((rp - gp) / d + 4);
      }
      var s = cmax === 0 ? 0 : d / cmax;
      var v = cmax;
      return [h, s * 100, v * 100];
  }
  /**
   * @hidden
   */
  function hsvToRgb(h, s, v) {
      var _a, _b, _c, _d, _e, _f;
      var hp = number_util_1.NumberUtil.loop(h, 360);
      var sp = number_util_1.NumberUtil.constrain(s / 100, 0, 1);
      var vp = number_util_1.NumberUtil.constrain(v / 100, 0, 1);
      var c = vp * sp;
      var x = c * (1 - Math.abs(((hp / 60) % 2) - 1));
      var m = vp - c;
      var rp, gp, bp;
      if (hp >= 0 && hp < 60) {
          _a = [c, x, 0], rp = _a[0], gp = _a[1], bp = _a[2];
      }
      else if (hp >= 60 && hp < 120) {
          _b = [x, c, 0], rp = _b[0], gp = _b[1], bp = _b[2];
      }
      else if (hp >= 120 && hp < 180) {
          _c = [0, c, x], rp = _c[0], gp = _c[1], bp = _c[2];
      }
      else if (hp >= 180 && hp < 240) {
          _d = [0, x, c], rp = _d[0], gp = _d[1], bp = _d[2];
      }
      else if (hp >= 240 && hp < 300) {
          _e = [x, 0, c], rp = _e[0], gp = _e[1], bp = _e[2];
      }
      else {
          _f = [c, 0, x], rp = _f[0], gp = _f[1], bp = _f[2];
      }
      return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
  }
  exports.hsvToRgb = hsvToRgb;
  /**
   * @hidden
   */
  function opaque(comps) {
      return [comps[0], comps[1], comps[2], 1];
  }
  exports.opaque = opaque;
  /**
   * @hidden
   */
  function withoutAlpha(comps) {
      return [comps[0], comps[1], comps[2]];
  }
  exports.withoutAlpha = withoutAlpha;
  /**
   * @hidden
   */
  function withAlpha(comps, alpha) {
      return [comps[0], comps[1], comps[2], alpha];
  }
  exports.withAlpha = withAlpha;
  var MODE_CONVERTER_MAP = {
      hsl: {
          hsl: function (h, s, l) { return [h, s, l]; },
          hsv: function (h, s, l) {
              var _a = hslToRgb(h, s, l), r = _a[0], g = _a[1], b = _a[2];
              return rgbToHsv(r, g, b);
          },
          rgb: hslToRgb,
      },
      hsv: {
          hsl: function (h, s, v) {
              var _a = hsvToRgb(h, s, v), r = _a[0], g = _a[1], b = _a[2];
              return rgbToHsl(r, g, b);
          },
          hsv: function (h, s, v) { return [h, s, v]; },
          rgb: hsvToRgb,
      },
      rgb: {
          hsl: rgbToHsl,
          hsv: rgbToHsv,
          rgb: function (r, g, b) { return [r, g, b]; },
      },
  };
  /**
   * @hidden
   */
  function convertMode(components, fromMode, toMode) {
      var _a;
      return (_a = MODE_CONVERTER_MAP[fromMode])[toMode].apply(_a, components);
  }
  exports.convertMode = convertMode;


  /***/ }),

  /***/ "./src/main/js/misc/constants.ts":
  /*!***************************************!*\
    !*** ./src/main/js/misc/constants.ts ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Constants = void 0;
  exports.Constants = {
      monitorDefaultInterval: 200,
  };


  /***/ }),

  /***/ "./src/main/js/misc/disposing-util.ts":
  /*!********************************************!*\
    !*** ./src/main/js/misc/disposing-util.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.disposeElement = void 0;
  function disposeElement(elem) {
      if (elem && elem.parentElement) {
          elem.parentElement.removeChild(elem);
      }
      return null;
  }
  exports.disposeElement = disposeElement;


  /***/ }),

  /***/ "./src/main/js/misc/dom-util.ts":
  /*!**************************************!*\
    !*** ./src/main/js/misc/dom-util.ts ***!
    \**************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  /* WEBPACK VAR INJECTION */(function(process) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.findNextTarget = exports.indexOfChildElement = exports.removeElement = exports.insertElementAt = exports.createSvgIconElement = exports.getCanvasContext = exports.getWindowDocument = exports.supportsTouch = exports.disableTransitionTemporarily = exports.forceReflow = exports.SVG_NS = void 0;
  var type_util_1 = __webpack_require__(/*! ./type-util */ "./src/main/js/misc/type-util.ts");
  exports.SVG_NS = 'http://www.w3.org/2000/svg';
  function forceReflow(element) {
      // tslint:disable-next-line:no-unused-expression
      element.offsetHeight;
  }
  exports.forceReflow = forceReflow;
  function disableTransitionTemporarily(element, callback) {
      var t = element.style.transition;
      element.style.transition = 'none';
      callback();
      element.style.transition = t;
  }
  exports.disableTransitionTemporarily = disableTransitionTemporarily;
  function supportsTouch(document) {
      return document.ontouchstart !== undefined;
  }
  exports.supportsTouch = supportsTouch;
  function getWindowDocument() {
      // tslint:disable-next-line:function-constructor
      var globalObj = type_util_1.TypeUtil.forceCast(new Function('return this')());
      return globalObj.document;
  }
  exports.getWindowDocument = getWindowDocument;
  function isBrowser() {
      // Webpack defines process.browser = true;
      // https://github.com/webpack/node-libs-browser
      // https://github.com/defunctzombie/node-process
      return !!process.browser;
  }
  function getCanvasContext(canvasElement) {
      // HTMLCanvasElement.prototype.getContext is not defined on testing environment
      return isBrowser() ? canvasElement.getContext('2d') : null;
  }
  exports.getCanvasContext = getCanvasContext;
  // tslint:disable: max-line-length
  var ICON_ID_TO_INNER_HTML_MAP = {
      p2dpad: '<path d="M8 2V14" stroke="currentColor" stroke-width="1.5"/><path d="M2 8H14" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2" fill="currentColor"/>',
  };
  function createSvgIconElement(document, iconId) {
      var elem = document.createElementNS(exports.SVG_NS, 'svg');
      elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
      return elem;
  }
  exports.createSvgIconElement = createSvgIconElement;
  function insertElementAt(parentElement, element, index) {
      parentElement.insertBefore(element, parentElement.children[index]);
  }
  exports.insertElementAt = insertElementAt;
  function removeElement(element) {
      if (element.parentElement) {
          element.parentElement.removeChild(element);
      }
  }
  exports.removeElement = removeElement;
  function indexOfChildElement(element) {
      var parentElem = element.parentElement;
      if (!parentElem) {
          return -1;
      }
      var children = Array.prototype.slice.call(parentElem.children);
      return children.indexOf(element);
  }
  exports.indexOfChildElement = indexOfChildElement;
  function findNextTarget(ev) {
      if (ev.relatedTarget) {
          return type_util_1.TypeUtil.forceCast(ev.relatedTarget);
      }
      // Workaround for Firefox
      if ('explicitOriginalTarget' in ev) {
          return ev.explicitOriginalTarget;
      }
      // TODO: Workaround for Safari
      // Safari doesn't set next target for some elements
      // (e.g. button, input[type=checkbox], etc.)
      return null;
  }
  exports.findNextTarget = findNextTarget;

  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")));

  /***/ }),

  /***/ "./src/main/js/misc/emitter.ts":
  /*!*************************************!*\
    !*** ./src/main/js/misc/emitter.ts ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Emitter = void 0;
  /**
   * @hidden
   */
  var Emitter = /** @class */ (function () {
      function Emitter() {
          this.observers_ = {};
      }
      Emitter.prototype.on = function (eventName, handler) {
          var observers = this.observers_[eventName];
          if (!observers) {
              observers = this.observers_[eventName] = [];
          }
          observers.push({
              handler: handler,
          });
          return this;
      };
      Emitter.prototype.off = function (eventName, handler) {
          var observers = this.observers_[eventName];
          if (observers) {
              this.observers_[eventName] = observers.filter(function (observer) {
                  return observer.handler !== handler;
              });
          }
          return this;
      };
      Emitter.prototype.emit = function (eventName, event) {
          var observers = this.observers_[eventName];
          if (!observers) {
              return;
          }
          observers.forEach(function (observer) {
              observer.handler(event);
          });
      };
      return Emitter;
  }());
  exports.Emitter = Emitter;


  /***/ }),

  /***/ "./src/main/js/misc/number-util.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/misc/number-util.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NumberUtil = void 0;
  exports.NumberUtil = {
      map: function (value, start1, end1, start2, end2) {
          var p = (value - start1) / (end1 - start1);
          return start2 + p * (end2 - start2);
      },
      getDecimalDigits: function (value) {
          var text = String(value.toFixed(10));
          var frac = text.split('.')[1];
          return frac.replace(/0+$/, '').length;
      },
      constrain: function (value, min, max) {
          return Math.min(Math.max(value, min), max);
      },
      loop: function (value, max) {
          return ((value % max) + max) % max;
      },
  };


  /***/ }),

  /***/ "./src/main/js/misc/pane-error.ts":
  /*!****************************************!*\
    !*** ./src/main/js/misc/pane-error.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PaneError = void 0;
  function createMessage(config) {
      if (config.type === 'alreadydisposed') {
          return 'View has been already disposed';
      }
      if (config.type === 'emptyvalue') {
          return "Value is empty for " + config.context.key;
      }
      if (config.type === 'invalidparams') {
          return "Invalid parameters for " + config.context.name;
      }
      if (config.type === 'nomatchingcontroller') {
          return "No matching controller for " + config.context.key;
      }
      if (config.type === 'shouldneverhappen') {
          return 'This error should never happen';
      }
      return 'Unexpected error';
  }
  var PaneError = /** @class */ (function () {
      function PaneError(config) {
          this.message = createMessage(config);
          this.name = this.constructor.name;
          this.stack = new Error(this.message).stack;
          this.type = config.type;
      }
      PaneError.alreadyDisposed = function () {
          return new PaneError({ type: 'alreadydisposed' });
      };
      PaneError.shouldNeverHappen = function () {
          return new PaneError({ type: 'shouldneverhappen' });
      };
      return PaneError;
  }());
  exports.PaneError = PaneError;
  PaneError.prototype = Object.create(Error.prototype);
  PaneError.prototype.constructor = PaneError;


  /***/ }),

  /***/ "./src/main/js/misc/pointer-handler.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/misc/pointer-handler.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PointerHandler = void 0;
  var DomUtil = __webpack_require__(/*! ./dom-util */ "./src/main/js/misc/dom-util.ts");
  var emitter_1 = __webpack_require__(/*! ./emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * A utility class to handle both mouse and touch events.
   * @hidden
   */
  var PointerHandler = /** @class */ (function () {
      function PointerHandler(document, element) {
          this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
          this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
          this.onMouseDown_ = this.onMouseDown_.bind(this);
          this.onTouchMove_ = this.onTouchMove_.bind(this);
          this.onTouchStart_ = this.onTouchStart_.bind(this);
          this.document = document;
          this.element = element;
          this.emitter = new emitter_1.Emitter();
          this.pressed_ = false;
          if (DomUtil.supportsTouch(this.document)) {
              element.addEventListener('touchstart', this.onTouchStart_);
              element.addEventListener('touchmove', this.onTouchMove_);
          }
          else {
              element.addEventListener('mousedown', this.onMouseDown_);
              this.document.addEventListener('mousemove', this.onDocumentMouseMove_);
              this.document.addEventListener('mouseup', this.onDocumentMouseUp_);
          }
      }
      PointerHandler.prototype.computePosition_ = function (offsetX, offsetY) {
          var rect = this.element.getBoundingClientRect();
          return {
              px: offsetX / rect.width,
              py: offsetY / rect.height,
          };
      };
      PointerHandler.prototype.onMouseDown_ = function (e) {
          var _a;
          // Prevent native text selection
          e.preventDefault();
          (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.focus();
          this.pressed_ = true;
          this.emitter.emit('down', {
              data: this.computePosition_(e.offsetX, e.offsetY),
              sender: this,
          });
      };
      PointerHandler.prototype.onDocumentMouseMove_ = function (e) {
          if (!this.pressed_) {
              return;
          }
          var win = this.document.defaultView;
          var rect = this.element.getBoundingClientRect();
          this.emitter.emit('move', {
              data: this.computePosition_(e.pageX - (((win && win.scrollX) || 0) + rect.left), e.pageY - (((win && win.scrollY) || 0) + rect.top)),
              sender: this,
          });
      };
      PointerHandler.prototype.onDocumentMouseUp_ = function (e) {
          if (!this.pressed_) {
              return;
          }
          this.pressed_ = false;
          var win = this.document.defaultView;
          var rect = this.element.getBoundingClientRect();
          this.emitter.emit('up', {
              data: this.computePosition_(e.pageX - (((win && win.scrollX) || 0) + rect.left), e.pageY - (((win && win.scrollY) || 0) + rect.top)),
              sender: this,
          });
      };
      PointerHandler.prototype.onTouchStart_ = function (e) {
          // Prevent native page scroll
          e.preventDefault();
          var touch = e.targetTouches[0];
          var rect = this.element.getBoundingClientRect();
          this.emitter.emit('down', {
              data: this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top),
              sender: this,
          });
      };
      PointerHandler.prototype.onTouchMove_ = function (e) {
          var touch = e.targetTouches[0];
          var rect = this.element.getBoundingClientRect();
          this.emitter.emit('move', {
              data: this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top),
              sender: this,
          });
      };
      return PointerHandler;
  }());
  exports.PointerHandler = PointerHandler;


  /***/ }),

  /***/ "./src/main/js/misc/ticker/interval.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/misc/ticker/interval.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.IntervalTicker = void 0;
  var disposable_1 = __webpack_require__(/*! ../../model/disposable */ "./src/main/js/model/disposable.ts");
  var emitter_1 = __webpack_require__(/*! ../emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var IntervalTicker = /** @class */ (function () {
      function IntervalTicker(document, interval) {
          var _this = this;
          this.onTick_ = this.onTick_.bind(this);
          // this.onWindowBlur_ = this.onWindowBlur_.bind(this);
          // this.onWindowFocus_ = this.onWindowFocus_.bind(this);
          this.doc_ = document;
          this.emitter = new emitter_1.Emitter();
          if (interval <= 0) {
              this.id_ = null;
          }
          else {
              var win = this.doc_.defaultView;
              if (win) {
                  this.id_ = win.setInterval(this.onTick_, interval);
              }
          }
          // TODO: Stop on blur?
          // const win = document.defaultView;
          // if (win) {
          //   win.addEventListener('blur', this.onWindowBlur_);
          //   win.addEventListener('focus', this.onWindowFocus_);
          // }
          this.disposable = new disposable_1.Disposable();
          this.disposable.emitter.on('dispose', function () {
              if (_this.id_ !== null) {
                  var win = _this.doc_.defaultView;
                  if (win) {
                      win.clearInterval(_this.id_);
                  }
              }
              _this.id_ = null;
          });
      }
      IntervalTicker.prototype.onTick_ = function () {
          // if (!this.active_) {
          // 	return;
          // }
          this.emitter.emit('tick', {
              sender: this,
          });
      };
      return IntervalTicker;
  }());
  exports.IntervalTicker = IntervalTicker;


  /***/ }),

  /***/ "./src/main/js/misc/ticker/manual.ts":
  /*!*******************************************!*\
    !*** ./src/main/js/misc/ticker/manual.ts ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ManualTicker = void 0;
  var disposable_1 = __webpack_require__(/*! ../../model/disposable */ "./src/main/js/model/disposable.ts");
  var emitter_1 = __webpack_require__(/*! ../emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var ManualTicker = /** @class */ (function () {
      function ManualTicker() {
          this.disposable = new disposable_1.Disposable();
          this.emitter = new emitter_1.Emitter();
      }
      ManualTicker.prototype.tick = function () {
          this.emitter.emit('tick', {
              sender: this,
          });
      };
      return ManualTicker;
  }());
  exports.ManualTicker = ManualTicker;


  /***/ }),

  /***/ "./src/main/js/misc/type-util.ts":
  /*!***************************************!*\
    !*** ./src/main/js/misc/type-util.ts ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TypeUtil = void 0;
  exports.TypeUtil = {
      forceCast: function (v) {
          return v;
      },
      isEmpty: function (value) {
          return value === null || value === undefined;
      },
      getOrDefault: function (value, defaultValue) {
          return !exports.TypeUtil.isEmpty(value) ? value : defaultValue;
      },
      deepEqualsArray: function (a1, a2) {
          if (a1.length !== a2.length) {
              return false;
          }
          for (var i = 0; i < a1.length; i++) {
              if (a1[i] !== a2[i]) {
                  return false;
              }
          }
          return true;
      },
  };


  /***/ }),

  /***/ "./src/main/js/model/button.ts":
  /*!*************************************!*\
    !*** ./src/main/js/model/button.ts ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Button = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var Button = /** @class */ (function () {
      function Button(title) {
          this.emitter = new emitter_1.Emitter();
          this.title = title;
      }
      Button.prototype.click = function () {
          this.emitter.emit('click', {
              sender: this,
          });
      };
      return Button;
  }());
  exports.Button = Button;


  /***/ }),

  /***/ "./src/main/js/model/color.ts":
  /*!************************************!*\
    !*** ./src/main/js/model/color.ts ***!
    \************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Color = void 0;
  var ColorModel = __webpack_require__(/*! ../misc/color-model */ "./src/main/js/misc/color-model.ts");
  var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var CONSTRAINT_MAP = {
      hsl: function (comps) {
          return [
              number_util_1.NumberUtil.loop(comps[0], 360),
              number_util_1.NumberUtil.constrain(comps[1], 0, 100),
              number_util_1.NumberUtil.constrain(comps[2], 0, 100),
              number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1),
          ];
      },
      hsv: function (comps) {
          return [
              number_util_1.NumberUtil.loop(comps[0], 360),
              number_util_1.NumberUtil.constrain(comps[1], 0, 100),
              number_util_1.NumberUtil.constrain(comps[2], 0, 100),
              number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1),
          ];
      },
      rgb: function (comps) {
          return [
              number_util_1.NumberUtil.constrain(comps[0], 0, 255),
              number_util_1.NumberUtil.constrain(comps[1], 0, 255),
              number_util_1.NumberUtil.constrain(comps[2], 0, 255),
              number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1),
          ];
      },
  };
  function isRgbColorComponent(obj, key) {
      if (typeof obj !== 'object' || type_util_1.TypeUtil.isEmpty(obj)) {
          return false;
      }
      return key in obj && typeof obj[key] === 'number';
  }
  /**
   * @hidden
   */
  var Color = /** @class */ (function () {
      function Color(comps, mode) {
          this.mode_ = mode;
          this.comps_ = CONSTRAINT_MAP[mode](comps);
      }
      Color.fromObject = function (obj) {
          var comps = 'a' in obj ? [obj.r, obj.g, obj.b, obj.a] : [obj.r, obj.g, obj.b];
          return new Color(comps, 'rgb');
      };
      Color.toRgbaObject = function (color) {
          return color.toRgbaObject();
      };
      Color.isRgbColorObject = function (obj) {
          return (isRgbColorComponent(obj, 'r') &&
              isRgbColorComponent(obj, 'g') &&
              isRgbColorComponent(obj, 'b'));
      };
      Color.isRgbaColorObject = function (obj) {
          return this.isRgbColorObject(obj) && isRgbColorComponent(obj, 'a');
      };
      Color.isColorObject = function (obj) {
          return this.isRgbColorObject(obj);
      };
      Object.defineProperty(Color.prototype, "mode", {
          get: function () {
              return this.mode_;
          },
          enumerable: false,
          configurable: true
      });
      Color.prototype.getComponents = function (opt_mode) {
          return ColorModel.withAlpha(ColorModel.convertMode(ColorModel.withoutAlpha(this.comps_), this.mode_, opt_mode || this.mode_), this.comps_[3]);
      };
      Color.prototype.toRgbaObject = function () {
          var rgbComps = this.getComponents('rgb');
          // tslint:disable:object-literal-sort-keys
          return {
              r: rgbComps[0],
              g: rgbComps[1],
              b: rgbComps[2],
              a: rgbComps[3],
          };
          // tslint:enable:object-literal-sort-keys
      };
      return Color;
  }());
  exports.Color = Color;


  /***/ }),

  /***/ "./src/main/js/model/disposable.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/model/disposable.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Disposable = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var Disposable = /** @class */ (function () {
      function Disposable() {
          this.emitter = new emitter_1.Emitter();
          this.disposed_ = false;
      }
      Object.defineProperty(Disposable.prototype, "disposed", {
          get: function () {
              return this.disposed_;
          },
          enumerable: false,
          configurable: true
      });
      Disposable.prototype.dispose = function () {
          if (this.disposed_) {
              return false;
          }
          this.disposed_ = true;
          this.emitter.emit('dispose', {
              sender: this,
          });
          return true;
      };
      return Disposable;
  }());
  exports.Disposable = Disposable;


  /***/ }),

  /***/ "./src/main/js/model/foldable.ts":
  /*!***************************************!*\
    !*** ./src/main/js/model/foldable.ts ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Foldable = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var Foldable = /** @class */ (function () {
      function Foldable() {
          this.emitter = new emitter_1.Emitter();
          this.expanded_ = false;
      }
      Object.defineProperty(Foldable.prototype, "expanded", {
          get: function () {
              return this.expanded_;
          },
          set: function (expanded) {
              var changed = this.expanded_ !== expanded;
              if (changed) {
                  this.expanded_ = expanded;
                  this.emitter.emit('change', {
                      sender: this,
                  });
              }
          },
          enumerable: false,
          configurable: true
      });
      return Foldable;
  }());
  exports.Foldable = Foldable;


  /***/ }),

  /***/ "./src/main/js/model/folder.ts":
  /*!*************************************!*\
    !*** ./src/main/js/model/folder.ts ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Folder = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  /**
   * @hidden
   */
  var Folder = /** @class */ (function () {
      function Folder(title, expanded) {
          this.emitter = new emitter_1.Emitter();
          this.expanded_ = expanded;
          this.expandedHeight_ = null;
          this.temporaryExpanded_ = null;
          this.shouldFixHeight_ = false;
          this.title = title;
      }
      Object.defineProperty(Folder.prototype, "expanded", {
          get: function () {
              return this.expanded_;
          },
          set: function (expanded) {
              var changed = this.expanded_ !== expanded;
              if (!changed) {
                  return;
              }
              this.emitter.emit('beforechange', {
                  propertyName: 'expanded',
                  sender: this,
              });
              this.expanded_ = expanded;
              this.emitter.emit('change', {
                  propertyName: 'expanded',
                  sender: this,
              });
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Folder.prototype, "temporaryExpanded", {
          get: function () {
              return this.temporaryExpanded_;
          },
          set: function (expanded) {
              var changed = this.temporaryExpanded_ !== expanded;
              if (!changed) {
                  return;
              }
              this.emitter.emit('beforechange', {
                  propertyName: 'temporaryExpanded',
                  sender: this,
              });
              this.temporaryExpanded_ = expanded;
              this.emitter.emit('change', {
                  propertyName: 'temporaryExpanded',
                  sender: this,
              });
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Folder.prototype, "expandedHeight", {
          get: function () {
              return this.expandedHeight_;
          },
          set: function (expandedHeight) {
              var changed = this.expandedHeight_ !== expandedHeight;
              if (!changed) {
                  return;
              }
              this.emitter.emit('beforechange', {
                  propertyName: 'expandedHeight',
                  sender: this,
              });
              this.expandedHeight_ = expandedHeight;
              this.emitter.emit('change', {
                  propertyName: 'expandedHeight',
                  sender: this,
              });
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Folder.prototype, "shouldFixHeight", {
          get: function () {
              return this.shouldFixHeight_;
          },
          set: function (shouldFixHeight) {
              var changed = this.shouldFixHeight_ !== shouldFixHeight;
              if (!changed) {
                  return;
              }
              this.emitter.emit('beforechange', {
                  propertyName: 'shouldFixHeight',
                  sender: this,
              });
              this.shouldFixHeight_ = shouldFixHeight;
              this.emitter.emit('change', {
                  propertyName: 'shouldFixHeight',
                  sender: this,
              });
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Folder.prototype, "styleExpanded", {
          get: function () {
              return type_util_1.TypeUtil.getOrDefault(this.temporaryExpanded, this.expanded);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Folder.prototype, "styleHeight", {
          get: function () {
              if (!this.styleExpanded) {
                  return '0';
              }
              if (this.shouldFixHeight && !type_util_1.TypeUtil.isEmpty(this.expandedHeight)) {
                  return this.expandedHeight + "px";
              }
              return 'auto';
          },
          enumerable: false,
          configurable: true
      });
      return Folder;
  }());
  exports.Folder = Folder;


  /***/ }),

  /***/ "./src/main/js/model/graph-cursor.ts":
  /*!*******************************************!*\
    !*** ./src/main/js/model/graph-cursor.ts ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GraphCursor = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var GraphCursor = /** @class */ (function () {
      function GraphCursor() {
          this.emitter = new emitter_1.Emitter();
          this.index_ = -1;
      }
      Object.defineProperty(GraphCursor.prototype, "index", {
          get: function () {
              return this.index_;
          },
          set: function (index) {
              var changed = this.index_ !== index;
              if (changed) {
                  this.index_ = index;
                  this.emitter.emit('change', {
                      index: index,
                      sender: this,
                  });
              }
          },
          enumerable: false,
          configurable: true
      });
      return GraphCursor;
  }());
  exports.GraphCursor = GraphCursor;


  /***/ }),

  /***/ "./src/main/js/model/input-value.ts":
  /*!******************************************!*\
    !*** ./src/main/js/model/input-value.ts ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InputValue = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var InputValue = /** @class */ (function () {
      function InputValue(initialValue, constraint) {
          this.constraint_ = constraint;
          this.emitter = new emitter_1.Emitter();
          this.rawValue_ = initialValue;
      }
      InputValue.equalsValue = function (v1, v2) {
          return v1 === v2;
      };
      Object.defineProperty(InputValue.prototype, "constraint", {
          get: function () {
              return this.constraint_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(InputValue.prototype, "rawValue", {
          get: function () {
              return this.rawValue_;
          },
          set: function (rawValue) {
              var constrainedValue = this.constraint_
                  ? this.constraint_.constrain(rawValue)
                  : rawValue;
              var changed = !InputValue.equalsValue(this.rawValue_, constrainedValue);
              if (changed) {
                  this.rawValue_ = constrainedValue;
                  this.emitter.emit('change', {
                      rawValue: constrainedValue,
                      sender: this,
                  });
              }
          },
          enumerable: false,
          configurable: true
      });
      return InputValue;
  }());
  exports.InputValue = InputValue;


  /***/ }),

  /***/ "./src/main/js/model/list.ts":
  /*!***********************************!*\
    !*** ./src/main/js/model/list.ts ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.List = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var List = /** @class */ (function () {
      function List() {
          this.emitter = new emitter_1.Emitter();
          this.items_ = [];
      }
      Object.defineProperty(List.prototype, "items", {
          get: function () {
              return this.items_;
          },
          enumerable: false,
          configurable: true
      });
      List.prototype.add = function (item, opt_index) {
          var index = opt_index !== undefined ? opt_index : this.items_.length;
          this.items_.splice(index, 0, item);
          this.emitter.emit('add', {
              index: index,
              item: item,
              sender: this,
          });
      };
      List.prototype.remove = function (item) {
          var index = this.items_.indexOf(item);
          if (index < 0) {
              return;
          }
          this.items_.splice(index, 1);
          this.emitter.emit('remove', {
              sender: this,
          });
      };
      return List;
  }());
  exports.List = List;


  /***/ }),

  /***/ "./src/main/js/model/model-sync.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/model/model-sync.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.connect = void 0;
  /**
   * @hidden
   */
  function connect(_a) {
      var primary = _a.primary, secondary = _a.secondary;
      primary.emitter(primary.value).on('change', function () {
          primary.apply(primary.value, secondary.value);
      });
      secondary.emitter(secondary.value).on('change', function () {
          secondary.apply(secondary.value, primary.value);
      });
      primary.apply(primary.value, secondary.value);
  }
  exports.connect = connect;


  /***/ }),

  /***/ "./src/main/js/model/monitor-value.ts":
  /*!********************************************!*\
    !*** ./src/main/js/model/monitor-value.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MonitorValue = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  /**
   * @hidden
   */
  var MonitorValue = /** @class */ (function () {
      function MonitorValue(totalCount) {
          this.emitter = new emitter_1.Emitter();
          this.rawValues_ = [];
          this.totalCount_ = totalCount;
      }
      Object.defineProperty(MonitorValue.prototype, "rawValues", {
          get: function () {
              return this.rawValues_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MonitorValue.prototype, "totalCount", {
          get: function () {
              return this.totalCount_;
          },
          enumerable: false,
          configurable: true
      });
      MonitorValue.prototype.append = function (rawValue) {
          this.rawValues_.push(rawValue);
          if (this.rawValues_.length > this.totalCount_) {
              this.rawValues_.splice(0, this.rawValues_.length - this.totalCount_);
          }
          this.emitter.emit('update', {
              rawValue: rawValue,
              sender: this,
          });
      };
      return MonitorValue;
  }());
  exports.MonitorValue = MonitorValue;


  /***/ }),

  /***/ "./src/main/js/model/picked-color.ts":
  /*!*******************************************!*\
    !*** ./src/main/js/model/picked-color.ts ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PickedColor = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  var PickedColor = /** @class */ (function () {
      function PickedColor(value) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.mode_ = 'rgb';
          this.value = value;
          this.value.emitter.on('change', this.onValueChange_);
          this.emitter = new emitter_1.Emitter();
      }
      Object.defineProperty(PickedColor.prototype, "mode", {
          get: function () {
              return this.mode_;
          },
          set: function (mode) {
              if (this.mode_ === mode) {
                  return;
              }
              this.mode_ = mode;
              this.emitter.emit('change', {
                  propertyName: 'mode',
                  sender: this,
              });
          },
          enumerable: false,
          configurable: true
      });
      PickedColor.prototype.onValueChange_ = function () {
          this.emitter.emit('change', {
              propertyName: 'value',
              sender: this,
          });
      };
      return PickedColor;
  }());
  exports.PickedColor = PickedColor;


  /***/ }),

  /***/ "./src/main/js/model/point-2d.ts":
  /*!***************************************!*\
    !*** ./src/main/js/model/point-2d.ts ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2d = void 0;
  var Point2d = /** @class */ (function () {
      function Point2d(x, y) {
          if (x === void 0) { x = 0; }
          if (y === void 0) { y = 0; }
          this.x = x;
          this.y = y;
      }
      Point2d.prototype.getComponents = function () {
          return [this.x, this.y];
      };
      Point2d.prototype.toObject = function () {
          return {
              x: this.x,
              y: this.y,
          };
      };
      return Point2d;
  }());
  exports.Point2d = Point2d;


  /***/ }),

  /***/ "./src/main/js/model/target.ts":
  /*!*************************************!*\
    !*** ./src/main/js/model/target.ts ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Target = void 0;
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  /**
   * @hidden
   */
  var Target = /** @class */ (function () {
      function Target(object, key, opt_id) {
          this.obj_ = object;
          this.key_ = key;
          this.presetKey_ = type_util_1.TypeUtil.getOrDefault(opt_id, key);
      }
      Object.defineProperty(Target.prototype, "key", {
          get: function () {
              return this.key_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Target.prototype, "presetKey", {
          get: function () {
              return this.presetKey_;
          },
          enumerable: false,
          configurable: true
      });
      Target.prototype.read = function () {
          return this.obj_[this.key_];
      };
      Target.prototype.write = function (value) {
          this.obj_[this.key_] = value;
      };
      return Target;
  }());
  exports.Target = Target;


  /***/ }),

  /***/ "./src/main/js/model/ui-container.ts":
  /*!*******************************************!*\
    !*** ./src/main/js/model/ui-container.ts ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.UiContainer = void 0;
  var folder_1 = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.ts");
  var input_binding_1 = __webpack_require__(/*! ../controller/input-binding */ "./src/main/js/controller/input-binding.ts");
  var monitor_binding_1 = __webpack_require__(/*! ../controller/monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  var list_1 = __webpack_require__(/*! ./list */ "./src/main/js/model/list.ts");
  /**
   * @hidden
   */
  var UiContainer = /** @class */ (function () {
      function UiContainer() {
          this.onItemFolderFold_ = this.onItemFolderFold_.bind(this);
          this.onListItemLayout_ = this.onListItemLayout_.bind(this);
          this.onSubitemLayout_ = this.onSubitemLayout_.bind(this);
          this.onSubitemFolderFold_ = this.onSubitemFolderFold_.bind(this);
          this.onSubitemInputChange_ = this.onSubitemInputChange_.bind(this);
          this.onSubitemMonitorUpdate_ = this.onSubitemMonitorUpdate_.bind(this);
          this.onItemInputChange_ = this.onItemInputChange_.bind(this);
          this.onListAdd_ = this.onListAdd_.bind(this);
          this.onListItemDispose_ = this.onListItemDispose_.bind(this);
          this.onListRemove_ = this.onListRemove_.bind(this);
          this.onItemMonitorUpdate_ = this.onItemMonitorUpdate_.bind(this);
          this.ucList_ = new list_1.List();
          this.emitter = new emitter_1.Emitter();
          this.ucList_.emitter.on('add', this.onListAdd_);
          this.ucList_.emitter.on('remove', this.onListRemove_);
      }
      Object.defineProperty(UiContainer.prototype, "items", {
          get: function () {
              return this.ucList_.items;
          },
          enumerable: false,
          configurable: true
      });
      UiContainer.prototype.add = function (uc, opt_index) {
          this.ucList_.add(uc, opt_index);
      };
      UiContainer.prototype.onListAdd_ = function (ev) {
          var uc = ev.item;
          this.emitter.emit('add', {
              index: ev.index,
              sender: this,
              uiController: uc,
          });
          uc.viewModel.emitter.on('dispose', this.onListItemDispose_);
          uc.viewModel.emitter.on('change', this.onListItemLayout_);
          if (uc instanceof input_binding_1.InputBindingController) {
              var emitter = uc.binding.emitter;
              // TODO: Find more type-safe way
              emitter.on('change', this.onItemInputChange_);
          }
          else if (uc instanceof monitor_binding_1.MonitorBindingController) {
              var emitter = uc.binding.emitter;
              // TODO: Find more type-safe way
              emitter.on('update', this.onItemMonitorUpdate_);
          }
          else if (uc instanceof folder_1.FolderController) {
              uc.folder.emitter.on('change', this.onItemFolderFold_);
              var emitter = uc.uiContainer.emitter;
              emitter.on('itemfold', this.onSubitemFolderFold_);
              emitter.on('itemlayout', this.onSubitemLayout_);
              emitter.on('inputchange', this.onSubitemInputChange_);
              emitter.on('monitorupdate', this.onSubitemMonitorUpdate_);
          }
      };
      UiContainer.prototype.onListRemove_ = function (_) {
          this.emitter.emit('remove', {
              sender: this,
          });
      };
      UiContainer.prototype.onListItemLayout_ = function (ev) {
          if (ev.propertyName === 'hidden' || ev.propertyName === 'positions') {
              this.emitter.emit('itemlayout', {
                  sender: this,
              });
          }
      };
      UiContainer.prototype.onListItemDispose_ = function (_) {
          var _this = this;
          var disposedUcs = this.ucList_.items.filter(function (uc) {
              return uc.viewModel.disposed;
          });
          disposedUcs.forEach(function (uc) {
              _this.ucList_.remove(uc);
          });
      };
      UiContainer.prototype.onItemInputChange_ = function (ev) {
          this.emitter.emit('inputchange', {
              inputBinding: ev.sender,
              sender: this,
              value: ev.rawValue,
          });
      };
      UiContainer.prototype.onItemMonitorUpdate_ = function (ev) {
          this.emitter.emit('monitorupdate', {
              monitorBinding: ev.sender,
              sender: this,
              value: ev.rawValue,
          });
      };
      UiContainer.prototype.onItemFolderFold_ = function (ev) {
          if (ev.propertyName !== 'expanded') {
              return;
          }
          this.emitter.emit('itemfold', {
              expanded: ev.sender.expanded,
              sender: this,
          });
      };
      UiContainer.prototype.onSubitemLayout_ = function (_) {
          this.emitter.emit('itemlayout', {
              sender: this,
          });
      };
      UiContainer.prototype.onSubitemInputChange_ = function (ev) {
          this.emitter.emit('inputchange', {
              inputBinding: ev.inputBinding,
              sender: this,
              value: ev.value,
          });
      };
      UiContainer.prototype.onSubitemMonitorUpdate_ = function (ev) {
          this.emitter.emit('monitorupdate', {
              monitorBinding: ev.monitorBinding,
              sender: this,
              value: ev.value,
          });
      };
      UiContainer.prototype.onSubitemFolderFold_ = function (ev) {
          this.emitter.emit('itemfold', {
              expanded: ev.expanded,
              sender: this,
          });
      };
      return UiContainer;
  }());
  exports.UiContainer = UiContainer;


  /***/ }),

  /***/ "./src/main/js/model/view-model.ts":
  /*!*****************************************!*\
    !*** ./src/main/js/model/view-model.ts ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ViewModel = void 0;
  var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var disposable_1 = __webpack_require__(/*! ./disposable */ "./src/main/js/model/disposable.ts");
  var ViewModel = /** @class */ (function () {
      function ViewModel() {
          this.onDispose_ = this.onDispose_.bind(this);
          this.emitter = new emitter_1.Emitter();
          this.positions_ = [];
          this.hidden_ = false;
          this.disposable_ = new disposable_1.Disposable();
          this.disposable_.emitter.on('dispose', this.onDispose_);
      }
      Object.defineProperty(ViewModel.prototype, "hidden", {
          get: function () {
              return this.hidden_;
          },
          set: function (hidden) {
              if (this.hidden_ === hidden) {
                  return;
              }
              this.hidden_ = hidden;
              this.emitter.emit('change', {
                  propertyName: 'hidden',
                  sender: this,
              });
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ViewModel.prototype, "positions", {
          get: function () {
              return this.positions_;
          },
          set: function (positions) {
              if (type_util_1.TypeUtil.deepEqualsArray(positions, this.positions_)) {
                  return;
              }
              this.positions_ = positions;
              this.emitter.emit('change', {
                  propertyName: 'positions',
                  sender: this,
              });
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ViewModel.prototype, "disposed", {
          get: function () {
              return this.disposable_.disposed;
          },
          enumerable: false,
          configurable: true
      });
      ViewModel.prototype.dispose = function () {
          this.disposable_.dispose();
      };
      ViewModel.prototype.onDispose_ = function () {
          this.emitter.emit('dispose', {
              sender: this,
          });
      };
      return ViewModel;
  }());
  exports.ViewModel = ViewModel;


  /***/ }),

  /***/ "./src/main/js/model/view-positions.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/model/view-positions.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAll = void 0;
  function getAll() {
      return ['first', 'last'];
  }
  exports.getAll = getAll;


  /***/ }),

  /***/ "./src/main/js/parser/any-point-2d.ts":
  /*!********************************************!*\
    !*** ./src/main/js/parser/any-point-2d.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AnyPoint2dParser = void 0;
  var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var point_2d_1 = __webpack_require__(/*! ../model/point-2d */ "./src/main/js/model/point-2d.ts");
  /**
   * @hidden
   */
  exports.AnyPoint2dParser = function (obj) {
      if (type_util_1.TypeUtil.isEmpty(obj)) {
          return null;
      }
      var x = obj.x;
      var y = obj.y;
      if (typeof x !== 'number' || typeof y !== 'number') {
          return null;
      }
      return new point_2d_1.Point2d(x, y);
  };


  /***/ }),

  /***/ "./src/main/js/parser/number-color.ts":
  /*!********************************************!*\
    !*** ./src/main/js/parser/number-color.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RgbaParser = exports.RgbParser = void 0;
  var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var color_1 = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.ts");
  /**
   * @hidden
   */
  exports.RgbParser = function (num) {
      return new color_1.Color([(num >> 16) & 0xff, (num >> 8) & 0xff, num & 0xff], 'rgb');
  };
  /**
   * @hidden
   */
  exports.RgbaParser = function (num) {
      return new color_1.Color([
          (num >> 24) & 0xff,
          (num >> 16) & 0xff,
          (num >> 8) & 0xff,
          number_util_1.NumberUtil.map(num & 0xff, 0, 255, 0, 1),
      ], 'rgb');
  };


  /***/ }),

  /***/ "./src/main/js/parser/string-color.ts":
  /*!********************************************!*\
    !*** ./src/main/js/parser/string-color.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.hasAlphaComponent = exports.CompositeParser = exports.getNotation = void 0;
  var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var color_1 = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.ts");
  function parseCssNumberOrPercentage(text, maxValue) {
      var m = text.match(/^(.+)%$/);
      if (!m) {
          return Math.min(parseFloat(text), maxValue);
      }
      return Math.min(parseFloat(m[1]) * 0.01 * maxValue, maxValue);
  }
  var ANGLE_TO_DEG_MAP = {
      deg: function (angle) { return angle; },
      grad: function (angle) { return (angle * 360) / 400; },
      rad: function (angle) { return (angle * 360) / (2 * Math.PI); },
      turn: function (angle) { return angle * 360; },
  };
  function parseCssNumberOrAngle(text) {
      var m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
      if (!m) {
          return parseFloat(text);
      }
      var angle = parseFloat(m[1]);
      var unit = m[2];
      return ANGLE_TO_DEG_MAP[unit](angle);
  }
  var NOTATION_TO_PARSER_MAP = {
      'func.rgb': function (text) {
          var m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!m) {
              return null;
          }
          var comps = [
              parseCssNumberOrPercentage(m[1], 255),
              parseCssNumberOrPercentage(m[2], 255),
              parseCssNumberOrPercentage(m[3], 255),
          ];
          if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
              return null;
          }
          return new color_1.Color(comps, 'rgb');
      },
      'func.rgba': function (text) {
          var m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!m) {
              return null;
          }
          var comps = [
              parseCssNumberOrPercentage(m[1], 255),
              parseCssNumberOrPercentage(m[2], 255),
              parseCssNumberOrPercentage(m[3], 255),
              parseCssNumberOrPercentage(m[4], 1),
          ];
          if (isNaN(comps[0]) ||
              isNaN(comps[1]) ||
              isNaN(comps[2]) ||
              isNaN(comps[3])) {
              return null;
          }
          return new color_1.Color(comps, 'rgb');
      },
      'func.hsl': function (text) {
          var m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!m) {
              return null;
          }
          var comps = [
              parseCssNumberOrAngle(m[1]),
              parseCssNumberOrPercentage(m[2], 100),
              parseCssNumberOrPercentage(m[3], 100),
          ];
          if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
              return null;
          }
          return new color_1.Color(comps, 'hsl');
      },
      'func.hsla': function (text) {
          var m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!m) {
              return null;
          }
          var comps = [
              parseCssNumberOrAngle(m[1]),
              parseCssNumberOrPercentage(m[2], 100),
              parseCssNumberOrPercentage(m[3], 100),
              parseCssNumberOrPercentage(m[4], 1),
          ];
          if (isNaN(comps[0]) ||
              isNaN(comps[1]) ||
              isNaN(comps[2]) ||
              isNaN(comps[3])) {
              return null;
          }
          return new color_1.Color(comps, 'hsl');
      },
      'hex.rgb': function (text) {
          var mRrggbb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
          if (mRrggbb) {
              return new color_1.Color([
                  parseInt(mRrggbb[1] + mRrggbb[1], 16),
                  parseInt(mRrggbb[2] + mRrggbb[2], 16),
                  parseInt(mRrggbb[3] + mRrggbb[3], 16),
              ], 'rgb');
          }
          var mRgb = text.match(/^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
          if (mRgb) {
              return new color_1.Color([parseInt(mRgb[1], 16), parseInt(mRgb[2], 16), parseInt(mRgb[3], 16)], 'rgb');
          }
          return null;
      },
      'hex.rgba': function (text) {
          var mRrggbb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
          if (mRrggbb) {
              return new color_1.Color([
                  parseInt(mRrggbb[1] + mRrggbb[1], 16),
                  parseInt(mRrggbb[2] + mRrggbb[2], 16),
                  parseInt(mRrggbb[3] + mRrggbb[3], 16),
                  number_util_1.NumberUtil.map(parseInt(mRrggbb[4] + mRrggbb[4], 16), 0, 255, 0, 1),
              ], 'rgb');
          }
          var mRgb = text.match(/^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
          if (mRgb) {
              return new color_1.Color([
                  parseInt(mRgb[1], 16),
                  parseInt(mRgb[2], 16),
                  parseInt(mRgb[3], 16),
                  number_util_1.NumberUtil.map(parseInt(mRgb[4], 16), 0, 255, 0, 1),
              ], 'rgb');
          }
          return null;
      },
  };
  /**
   * @hidden
   */
  function getNotation(text) {
      var notations = Object.keys(NOTATION_TO_PARSER_MAP);
      return notations.reduce(function (result, notation) {
          if (result) {
              return result;
          }
          var subparser = NOTATION_TO_PARSER_MAP[notation];
          return subparser(text) ? notation : null;
      }, null);
  }
  exports.getNotation = getNotation;
  /**
   * @hidden
   */
  exports.CompositeParser = function (text) {
      var notation = getNotation(text);
      return notation ? NOTATION_TO_PARSER_MAP[notation](text) : null;
  };
  function hasAlphaComponent(notation) {
      return (notation === 'func.hsla' ||
          notation === 'func.rgba' ||
          notation === 'hex.rgba');
  }
  exports.hasAlphaComponent = hasAlphaComponent;


  /***/ }),

  /***/ "./src/main/js/parser/string-number.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/parser/string-number.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StringNumberParser = void 0;
  /**
   * @hidden
   */
  exports.StringNumberParser = function (text) {
      var num = parseFloat(text);
      if (isNaN(num)) {
          return null;
      }
      return num;
  };


  /***/ }),

  /***/ "./src/main/js/tweakpane-without-style.ts":
  /*!************************************************!*\
    !*** ./src/main/js/tweakpane-without-style.ts ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TweakpaneWithoutStyle = void 0;
  var root_1 = __webpack_require__(/*! ./api/root */ "./src/main/js/api/root.ts");
  var root_2 = __webpack_require__(/*! ./controller/root */ "./src/main/js/controller/root.ts");
  var class_name_1 = __webpack_require__(/*! ./misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DomUtil = __webpack_require__(/*! ./misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var pane_error_1 = __webpack_require__(/*! ./misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var type_util_1 = __webpack_require__(/*! ./misc/type-util */ "./src/main/js/misc/type-util.ts");
  var view_model_1 = __webpack_require__(/*! ./model/view-model */ "./src/main/js/model/view-model.ts");
  function createDefaultWrapperElement(document) {
      var elem = document.createElement('div');
      elem.classList.add(class_name_1.ClassName('dfw')());
      if (document.body) {
          document.body.appendChild(elem);
      }
      return elem;
  }
  var TweakpaneWithoutStyle = /** @class */ (function (_super) {
      __extends(TweakpaneWithoutStyle, _super);
      function TweakpaneWithoutStyle(opt_config) {
          var _this = this;
          var config = opt_config || {};
          var document = type_util_1.TypeUtil.getOrDefault(config.document, DomUtil.getWindowDocument());
          var rootController = new root_2.RootController(document, {
              expanded: config.expanded,
              viewModel: new view_model_1.ViewModel(),
              title: config.title,
          });
          _this = _super.call(this, rootController) || this;
          _this.containerElem_ =
              config.container || createDefaultWrapperElement(document);
          _this.containerElem_.appendChild(_this.element);
          _this.doc_ = document;
          _this.usesDefaultWrapper_ = !config.container;
          return _this;
      }
      TweakpaneWithoutStyle.prototype.dispose = function () {
          var containerElem = this.containerElem_;
          if (!containerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          if (this.usesDefaultWrapper_) {
              var parentElem = containerElem.parentElement;
              if (parentElem) {
                  parentElem.removeChild(containerElem);
              }
          }
          this.containerElem_ = null;
          this.doc_ = null;
          _super.prototype.dispose.call(this);
      };
      Object.defineProperty(TweakpaneWithoutStyle.prototype, "document", {
          get: function () {
              if (!this.doc_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.doc_;
          },
          enumerable: false,
          configurable: true
      });
      return TweakpaneWithoutStyle;
  }(root_1.RootApi));
  exports.TweakpaneWithoutStyle = TweakpaneWithoutStyle;


  /***/ }),

  /***/ "./src/main/js/view/button.ts":
  /*!************************************!*\
    !*** ./src/main/js/view/button.ts ***!
    \************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ButtonView = void 0;
  var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('btn');
  /**
   * @hidden
   */
  var ButtonView = /** @class */ (function (_super) {
      __extends(ButtonView, _super);
      function ButtonView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.button = config.button;
          _this.element.classList.add(className());
          var buttonElem = document.createElement('button');
          buttonElem.classList.add(className('b'));
          buttonElem.textContent = _this.button.title;
          _this.element.appendChild(buttonElem);
          _this.buttonElem_ = buttonElem;
          config.model.emitter.on('dispose', function () {
              _this.buttonElem_ = DisposingUtil.disposeElement(_this.buttonElem_);
          });
          return _this;
      }
      Object.defineProperty(ButtonView.prototype, "buttonElement", {
          get: function () {
              if (!this.buttonElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.buttonElem_;
          },
          enumerable: false,
          configurable: true
      });
      return ButtonView;
  }(view_1.View));
  exports.ButtonView = ButtonView;


  /***/ }),

  /***/ "./src/main/js/view/folder.ts":
  /*!************************************!*\
    !*** ./src/main/js/view/folder.ts ***!
    \************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FolderView = void 0;
  var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('fld');
  /**
   * @hidden
   */
  var FolderView = /** @class */ (function (_super) {
      __extends(FolderView, _super);
      function FolderView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onFolderChange_ = _this.onFolderChange_.bind(_this);
          _this.folder_ = config.folder;
          _this.folder_.emitter.on('change', _this.onFolderChange_);
          _this.element.classList.add(className());
          var titleElem = document.createElement('button');
          titleElem.classList.add(className('t'));
          titleElem.textContent = _this.folder_.title;
          _this.element.appendChild(titleElem);
          _this.titleElem_ = titleElem;
          var markElem = document.createElement('div');
          markElem.classList.add(className('m'));
          _this.titleElem_.appendChild(markElem);
          var containerElem = document.createElement('div');
          containerElem.classList.add(className('c'));
          _this.element.appendChild(containerElem);
          _this.containerElem_ = containerElem;
          _this.applyModel_();
          config.model.emitter.on('dispose', function () {
              _this.containerElem_ = DisposingUtil.disposeElement(_this.containerElem_);
              _this.titleElem_ = DisposingUtil.disposeElement(_this.titleElem_);
          });
          return _this;
      }
      Object.defineProperty(FolderView.prototype, "titleElement", {
          get: function () {
              if (!this.titleElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.titleElem_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(FolderView.prototype, "containerElement", {
          get: function () {
              if (!this.containerElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.containerElem_;
          },
          enumerable: false,
          configurable: true
      });
      FolderView.prototype.applyModel_ = function () {
          var containerElem = this.containerElem_;
          if (!containerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var expanded = this.folder_.styleExpanded;
          var expandedClass = className(undefined, 'expanded');
          if (expanded) {
              this.element.classList.add(expandedClass);
          }
          else {
              this.element.classList.remove(expandedClass);
          }
          containerElem.style.height = this.folder_.styleHeight;
      };
      FolderView.prototype.onFolderChange_ = function () {
          this.applyModel_();
      };
      return FolderView;
  }(view_1.View));
  exports.FolderView = FolderView;


  /***/ }),

  /***/ "./src/main/js/view/input/a-palette.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/view/input/a-palette.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.APaletteInputView = void 0;
  var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('apl', 'input');
  /**
   * @hidden
   */
  var APaletteInputView = /** @class */ (function (_super) {
      __extends(APaletteInputView, _super);
      function APaletteInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.value = config.value;
          _this.value.emitter.on('change', _this.onValueChange_);
          _this.element.classList.add(className());
          _this.element.tabIndex = 0;
          var barElem = document.createElement('div');
          barElem.classList.add(className('b'));
          _this.element.appendChild(barElem);
          var colorElem = document.createElement('div');
          colorElem.classList.add(className('c'));
          barElem.appendChild(colorElem);
          _this.colorElem_ = colorElem;
          var markerElem = document.createElement('div');
          markerElem.classList.add(className('m'));
          _this.element.appendChild(markerElem);
          _this.markerElem_ = markerElem;
          var previewElem = document.createElement('div');
          previewElem.classList.add(className('p'));
          _this.markerElem_.appendChild(previewElem);
          _this.previewElem_ = previewElem;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.colorElem_ = DisposingUtil.disposeElement(_this.colorElem_);
              _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
          });
          return _this;
      }
      APaletteInputView.prototype.update = function () {
          if (!this.markerElem_ || !this.previewElem_ || !this.colorElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var c = this.value.rawValue;
          var rgbaComps = c.getComponents('rgb');
          var leftColor = new color_1.Color([rgbaComps[0], rgbaComps[1], rgbaComps[2], 0], 'rgb');
          var rightColor = new color_1.Color([rgbaComps[0], rgbaComps[1], rgbaComps[2], 255], 'rgb');
          var gradientComps = [
              'to right',
              ColorConverter.toFunctionalRgbaString(leftColor),
              ColorConverter.toFunctionalRgbaString(rightColor),
          ];
          this.colorElem_.style.background = "linear-gradient(" + gradientComps.join(',') + ")";
          this.previewElem_.style.backgroundColor = ColorConverter.toFunctionalRgbaString(c);
          var left = number_util_1.NumberUtil.map(rgbaComps[3], 0, 1, 0, 100);
          this.markerElem_.style.left = left + "%";
      };
      APaletteInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return APaletteInputView;
  }(view_1.View));
  exports.APaletteInputView = APaletteInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/checkbox.ts":
  /*!********************************************!*\
    !*** ./src/main/js/view/input/checkbox.ts ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CheckboxInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('ckb', 'input');
  /**
   * @hidden
   */
  var CheckboxInputView = /** @class */ (function (_super) {
      __extends(CheckboxInputView, _super);
      function CheckboxInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.element.classList.add(className());
          var labelElem = document.createElement('label');
          labelElem.classList.add(className('l'));
          _this.element.appendChild(labelElem);
          var inputElem = document.createElement('input');
          inputElem.classList.add(className('i'));
          inputElem.type = 'checkbox';
          labelElem.appendChild(inputElem);
          _this.inputElem_ = inputElem;
          var markElem = document.createElement('div');
          markElem.classList.add(className('m'));
          labelElem.appendChild(markElem);
          config.value.emitter.on('change', _this.onValueChange_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
          });
          return _this;
      }
      Object.defineProperty(CheckboxInputView.prototype, "inputElement", {
          get: function () {
              if (!this.inputElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElem_;
          },
          enumerable: false,
          configurable: true
      });
      CheckboxInputView.prototype.update = function () {
          if (!this.inputElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          this.inputElem_.checked = this.value.rawValue;
      };
      CheckboxInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return CheckboxInputView;
  }(view_1.View));
  exports.CheckboxInputView = CheckboxInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/color-component-texts.ts":
  /*!*********************************************************!*\
    !*** ./src/main/js/view/input/color-component-texts.ts ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorComponentTextsInputView = void 0;
  var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('cctxts', 'input');
  var FORMATTER = new number_1.NumberFormatter(0);
  function createModeSelectElement(document) {
      var selectElem = document.createElement('select');
      var items = [
          { text: 'RGB', value: 'rgb' },
          { text: 'HSL', value: 'hsl' },
          { text: 'HSV', value: 'hsv' },
      ];
      selectElem.appendChild(items.reduce(function (frag, item) {
          var optElem = document.createElement('option');
          optElem.textContent = item.text;
          optElem.value = item.value;
          frag.appendChild(optElem);
          return frag;
      }, document.createDocumentFragment()));
      return selectElem;
  }
  /**
   * @hidden
   */
  var ColorComponentTextsInputView = /** @class */ (function (_super) {
      __extends(ColorComponentTextsInputView, _super);
      function ColorComponentTextsInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.element.classList.add(className());
          var modeElem = document.createElement('div');
          modeElem.classList.add(className('m'));
          _this.modeSelectElement = createModeSelectElement(document);
          _this.modeSelectElement.classList.add(className('ms'));
          modeElem.appendChild(_this.modeSelectElement);
          var modeMarkerElem = document.createElement('div');
          modeMarkerElem.classList.add(className('mm'));
          modeElem.appendChild(modeMarkerElem);
          _this.element.appendChild(modeElem);
          var wrapperElem = document.createElement('div');
          wrapperElem.classList.add(className('w'));
          _this.element.appendChild(wrapperElem);
          var inputElems = [0, 1, 2].map(function () {
              var inputElem = document.createElement('input');
              inputElem.classList.add(className('i'));
              inputElem.type = 'text';
              return inputElem;
          });
          inputElems.forEach(function (elem) {
              wrapperElem.appendChild(elem);
          });
          _this.inputElems_ = [inputElems[0], inputElems[1], inputElems[2]];
          _this.pickedColor = config.pickedColor;
          _this.pickedColor.emitter.on('change', _this.onValueChange_);
          _this.update();
          config.model.emitter.on('dispose', function () {
              if (_this.inputElems_) {
                  _this.inputElems_.forEach(function (elem) {
                      DisposingUtil.disposeElement(elem);
                  });
                  _this.inputElems_ = null;
              }
          });
          return _this;
      }
      Object.defineProperty(ColorComponentTextsInputView.prototype, "inputElements", {
          get: function () {
              if (!this.inputElems_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElems_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ColorComponentTextsInputView.prototype, "value", {
          get: function () {
              return this.pickedColor.value;
          },
          enumerable: false,
          configurable: true
      });
      ColorComponentTextsInputView.prototype.update = function () {
          var inputElems = this.inputElems_;
          if (!inputElems) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var comps = this.pickedColor.value.rawValue.getComponents(this.pickedColor.mode);
          comps.forEach(function (comp, index) {
              var inputElem = inputElems[index];
              if (!inputElem) {
                  return;
              }
              inputElem.value = FORMATTER.format(comp);
          });
      };
      ColorComponentTextsInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return ColorComponentTextsInputView;
  }(view_1.View));
  exports.ColorComponentTextsInputView = ColorComponentTextsInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/color-picker.ts":
  /*!************************************************!*\
    !*** ./src/main/js/view/input/color-picker.ts ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __spreadArrays = (this && this.__spreadArrays) || function () {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorPickerInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('clp', 'input');
  /**
   * @hidden
   */
  var ColorPickerInputView = /** @class */ (function (_super) {
      __extends(ColorPickerInputView, _super);
      function ColorPickerInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onFoldableChange_ = _this.onFoldableChange_.bind(_this);
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.pickedColor = config.pickedColor;
          _this.pickedColor.value.emitter.on('change', _this.onValueChange_);
          _this.foldable = config.foldable;
          _this.foldable.emitter.on('change', _this.onFoldableChange_);
          _this.element.classList.add(className());
          var hsvElem = document.createElement('div');
          hsvElem.classList.add(className('hsv'));
          var svElem = document.createElement('div');
          svElem.classList.add(className('sv'));
          _this.svPaletteView_ = config.svPaletteInputView;
          svElem.appendChild(_this.svPaletteView_.element);
          hsvElem.appendChild(svElem);
          var hElem = document.createElement('div');
          hElem.classList.add(className('h'));
          _this.hPaletteView_ = config.hPaletteInputView;
          hElem.appendChild(_this.hPaletteView_.element);
          hsvElem.appendChild(hElem);
          _this.element.appendChild(hsvElem);
          var rgbElem = document.createElement('div');
          rgbElem.classList.add(className('rgb'));
          _this.compTextsView_ = config.componentTextsView;
          rgbElem.appendChild(_this.compTextsView_.element);
          _this.element.appendChild(rgbElem);
          if (config.alphaInputViews) {
              _this.alphaViews_ = {
                  palette: config.alphaInputViews.palette,
                  text: config.alphaInputViews.text,
              };
              var aElem = document.createElement('div');
              aElem.classList.add(className('a'));
              var apElem = document.createElement('div');
              apElem.classList.add(className('ap'));
              apElem.appendChild(_this.alphaViews_.palette.element);
              aElem.appendChild(apElem);
              var atElem = document.createElement('div');
              atElem.classList.add(className('at'));
              atElem.appendChild(_this.alphaViews_.text.element);
              aElem.appendChild(atElem);
              _this.element.appendChild(aElem);
          }
          _this.update();
          return _this;
      }
      Object.defineProperty(ColorPickerInputView.prototype, "allFocusableElements", {
          get: function () {
              var elems = __spreadArrays([
                  this.svPaletteView_.element,
                  this.hPaletteView_.element
              ], this.compTextsView_.inputElements);
              if (this.alphaViews_) {
                  elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
              }
              return type_util_1.TypeUtil.forceCast(elems);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ColorPickerInputView.prototype, "value", {
          get: function () {
              return this.pickedColor.value;
          },
          enumerable: false,
          configurable: true
      });
      ColorPickerInputView.prototype.update = function () {
          if (this.foldable.expanded) {
              this.element.classList.add(className(undefined, 'expanded'));
          }
          else {
              this.element.classList.remove(className(undefined, 'expanded'));
          }
      };
      ColorPickerInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      ColorPickerInputView.prototype.onFoldableChange_ = function () {
          this.update();
      };
      return ColorPickerInputView;
  }(view_1.View));
  exports.ColorPickerInputView = ColorPickerInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/color-swatch-text.ts":
  /*!*****************************************************!*\
    !*** ./src/main/js/view/input/color-swatch-text.ts ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorSwatchTextInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('cswtxt', 'input');
  /**
   * @hidden
   */
  var ColorSwatchTextInputView = /** @class */ (function (_super) {
      __extends(ColorSwatchTextInputView, _super);
      function ColorSwatchTextInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.element.classList.add(className());
          var swatchElem = document.createElement('div');
          swatchElem.classList.add(className('s'));
          _this.swatchInputView_ = config.swatchInputView;
          swatchElem.appendChild(_this.swatchInputView_.element);
          _this.element.appendChild(swatchElem);
          var textElem = document.createElement('div');
          textElem.classList.add(className('t'));
          _this.textInputView = config.textInputView;
          textElem.appendChild(_this.textInputView.element);
          _this.element.appendChild(textElem);
          return _this;
      }
      Object.defineProperty(ColorSwatchTextInputView.prototype, "value", {
          get: function () {
              return this.textInputView.value;
          },
          enumerable: false,
          configurable: true
      });
      ColorSwatchTextInputView.prototype.update = function () {
          this.swatchInputView_.update();
          this.textInputView.update();
      };
      return ColorSwatchTextInputView;
  }(view_1.View));
  exports.ColorSwatchTextInputView = ColorSwatchTextInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/color-swatch.ts":
  /*!************************************************!*\
    !*** ./src/main/js/view/input/color-swatch.ts ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorSwatchInputView = void 0;
  var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('csw', 'input');
  /**
   * @hidden
   */
  var ColorSwatchInputView = /** @class */ (function (_super) {
      __extends(ColorSwatchInputView, _super);
      function ColorSwatchInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          if (_this.element === null) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          config.value.emitter.on('change', _this.onValueChange_);
          _this.value = config.value;
          _this.element.classList.add(className());
          var swatchElem = document.createElement('div');
          swatchElem.classList.add(className('sw'));
          _this.element.appendChild(swatchElem);
          _this.swatchElem_ = swatchElem;
          var buttonElem = document.createElement('button');
          buttonElem.classList.add(className('b'));
          _this.element.appendChild(buttonElem);
          _this.buttonElem_ = buttonElem;
          var pickerElem = document.createElement('div');
          pickerElem.classList.add(className('p'));
          _this.pickerView_ = config.pickerInputView;
          pickerElem.appendChild(_this.pickerView_.element);
          _this.element.appendChild(pickerElem);
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.buttonElem_ = DisposingUtil.disposeElement(_this.buttonElem_);
              _this.swatchElem_ = DisposingUtil.disposeElement(_this.swatchElem_);
          });
          return _this;
      }
      Object.defineProperty(ColorSwatchInputView.prototype, "buttonElement", {
          get: function () {
              if (this.buttonElem_ === null) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.buttonElem_;
          },
          enumerable: false,
          configurable: true
      });
      ColorSwatchInputView.prototype.update = function () {
          if (!this.swatchElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var value = this.value.rawValue;
          this.swatchElem_.style.backgroundColor = ColorConverter.toHexRgbaString(value);
      };
      ColorSwatchInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return ColorSwatchInputView;
  }(view_1.View));
  exports.ColorSwatchInputView = ColorSwatchInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/h-palette.ts":
  /*!*********************************************!*\
    !*** ./src/main/js/view/input/h-palette.ts ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HPaletteInputView = void 0;
  var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('hpl', 'input');
  /**
   * @hidden
   */
  var HPaletteInputView = /** @class */ (function (_super) {
      __extends(HPaletteInputView, _super);
      function HPaletteInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.value = config.value;
          _this.value.emitter.on('change', _this.onValueChange_);
          _this.element.classList.add(className());
          _this.element.tabIndex = 0;
          var colorElem = document.createElement('div');
          colorElem.classList.add(className('c'));
          _this.element.appendChild(colorElem);
          _this.colorElem_ = colorElem;
          var markerElem = document.createElement('div');
          markerElem.classList.add(className('m'));
          _this.element.appendChild(markerElem);
          _this.markerElem_ = markerElem;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.colorElem_ = DisposingUtil.disposeElement(_this.colorElem_);
              _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
          });
          return _this;
      }
      HPaletteInputView.prototype.update = function () {
          if (!this.markerElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var c = this.value.rawValue;
          var h = c.getComponents('hsv')[0];
          this.markerElem_.style.backgroundColor = ColorConverter.toFunctionalRgbString(new color_1.Color([h, 100, 100], 'hsv'));
          var left = number_util_1.NumberUtil.map(h, 0, 360, 0, 100);
          this.markerElem_.style.left = left + "%";
      };
      HPaletteInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return HPaletteInputView;
  }(view_1.View));
  exports.HPaletteInputView = HPaletteInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/list.ts":
  /*!****************************************!*\
    !*** ./src/main/js/view/input/list.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ListInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('lst', 'input');
  /**
   * @hidden
   */
  var ListInputView = /** @class */ (function (_super) {
      __extends(ListInputView, _super);
      function ListInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.element.classList.add(className());
          _this.stringifyValue_ = config.stringifyValue;
          var selectElem = document.createElement('select');
          selectElem.classList.add(className('s'));
          config.options.forEach(function (item, index) {
              var optionElem = document.createElement('option');
              optionElem.dataset.index = String(index);
              optionElem.textContent = item.text;
              optionElem.value = _this.stringifyValue_(item.value);
              selectElem.appendChild(optionElem);
          });
          _this.element.appendChild(selectElem);
          _this.selectElem_ = selectElem;
          var markElem = document.createElement('div');
          markElem.classList.add(className('m'));
          _this.element.appendChild(markElem);
          config.value.emitter.on('change', _this.onValueChange_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.selectElem_ = DisposingUtil.disposeElement(_this.selectElem_);
          });
          return _this;
      }
      Object.defineProperty(ListInputView.prototype, "selectElement", {
          get: function () {
              if (!this.selectElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.selectElem_;
          },
          enumerable: false,
          configurable: true
      });
      ListInputView.prototype.update = function () {
          if (!this.selectElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          this.selectElem_.value = this.stringifyValue_(this.value.rawValue);
      };
      ListInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return ListInputView;
  }(view_1.View));
  exports.ListInputView = ListInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/point-2d-pad-text.ts":
  /*!*****************************************************!*\
    !*** ./src/main/js/view/input/point-2d-pad-text.ts ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2dPadTextInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('p2dpadtxt', 'input');
  /**
   * @hidden
   */
  var Point2dPadTextInputView = /** @class */ (function (_super) {
      __extends(Point2dPadTextInputView, _super);
      function Point2dPadTextInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.element.classList.add(className());
          var padWrapperElem = document.createElement('div');
          padWrapperElem.classList.add(className('w'));
          _this.element.appendChild(padWrapperElem);
          var buttonElem = document.createElement('button');
          buttonElem.classList.add(className('b'));
          buttonElem.appendChild(DomUtil.createSvgIconElement(document, 'p2dpad'));
          padWrapperElem.appendChild(buttonElem);
          _this.padButtonElem_ = buttonElem;
          var padElem = document.createElement('div');
          padElem.classList.add(className('p'));
          padWrapperElem.appendChild(padElem);
          _this.padInputView_ = config.padInputView;
          padElem.appendChild(_this.padInputView_.element);
          var textElem = document.createElement('div');
          textElem.classList.add(className('t'));
          _this.textInputView_ = config.textInputView;
          textElem.appendChild(_this.textInputView_.element);
          _this.element.appendChild(textElem);
          return _this;
      }
      Object.defineProperty(Point2dPadTextInputView.prototype, "value", {
          get: function () {
              return this.textInputView_.value;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Point2dPadTextInputView.prototype, "padButtonElement", {
          get: function () {
              return this.padButtonElem_;
          },
          enumerable: false,
          configurable: true
      });
      Point2dPadTextInputView.prototype.update = function () {
          this.padInputView_.update();
          this.textInputView_.update();
      };
      return Point2dPadTextInputView;
  }(view_1.View));
  exports.Point2dPadTextInputView = Point2dPadTextInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/point-2d-pad.ts":
  /*!************************************************!*\
    !*** ./src/main/js/view/input/point-2d-pad.ts ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2dPadInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var SVG_NS = DomUtil.SVG_NS;
  var className = class_name_1.ClassName('p2dpad', 'input');
  /**
   * @hidden
   */
  var Point2dPadInputView = /** @class */ (function (_super) {
      __extends(Point2dPadInputView, _super);
      function Point2dPadInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onFoldableChange_ = _this.onFoldableChange_.bind(_this);
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.foldable = config.foldable;
          _this.foldable.emitter.on('change', _this.onFoldableChange_);
          _this.invertsY_ = config.invertsY;
          _this.maxValue_ = config.maxValue;
          _this.element.classList.add(className());
          var padElem = document.createElement('div');
          padElem.tabIndex = 0;
          padElem.classList.add(className('p'));
          _this.element.appendChild(padElem);
          _this.padElem_ = padElem;
          var svgElem = document.createElementNS(SVG_NS, 'svg');
          svgElem.classList.add(className('g'));
          _this.padElem_.appendChild(svgElem);
          _this.svgElem_ = svgElem;
          var xAxisElem = document.createElementNS(SVG_NS, 'line');
          xAxisElem.classList.add(className('ax'));
          xAxisElem.setAttributeNS(null, 'x1', '0');
          xAxisElem.setAttributeNS(null, 'y1', '50%');
          xAxisElem.setAttributeNS(null, 'x2', '100%');
          xAxisElem.setAttributeNS(null, 'y2', '50%');
          _this.svgElem_.appendChild(xAxisElem);
          var yAxisElem = document.createElementNS(SVG_NS, 'line');
          yAxisElem.classList.add(className('ax'));
          yAxisElem.setAttributeNS(null, 'x1', '50%');
          yAxisElem.setAttributeNS(null, 'y1', '0');
          yAxisElem.setAttributeNS(null, 'x2', '50%');
          yAxisElem.setAttributeNS(null, 'y2', '100%');
          _this.svgElem_.appendChild(yAxisElem);
          var lineElem = document.createElementNS(SVG_NS, 'line');
          lineElem.classList.add(className('l'));
          lineElem.setAttributeNS(null, 'x1', '50%');
          lineElem.setAttributeNS(null, 'y1', '50%');
          _this.svgElem_.appendChild(lineElem);
          _this.lineElem_ = lineElem;
          var markerElem = document.createElementNS(SVG_NS, 'circle');
          markerElem.classList.add(className('m'));
          markerElem.setAttributeNS(null, 'r', '2px');
          _this.svgElem_.appendChild(markerElem);
          _this.markerElem_ = markerElem;
          config.value.emitter.on('change', _this.onValueChange_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.padElem_ = DisposingUtil.disposeElement(_this.padElem_);
          });
          return _this;
      }
      Object.defineProperty(Point2dPadInputView.prototype, "padElement", {
          get: function () {
              if (!this.padElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.padElem_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Point2dPadInputView.prototype, "allFocusableElements", {
          get: function () {
              if (!this.padElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return [this.padElem_];
          },
          enumerable: false,
          configurable: true
      });
      Point2dPadInputView.prototype.update = function () {
          if (this.foldable.expanded) {
              this.element.classList.add(className(undefined, 'expanded'));
          }
          else {
              this.element.classList.remove(className(undefined, 'expanded'));
          }
          var lineElem = this.lineElem_;
          var markerElem = this.markerElem_;
          if (!lineElem || !markerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var _a = this.value.rawValue.getComponents(), x = _a[0], y = _a[1];
          var max = this.maxValue_;
          var px = number_util_1.NumberUtil.map(x, -max, +max, 0, 100);
          var py = number_util_1.NumberUtil.map(y, -max, +max, 0, 100);
          var ipy = this.invertsY_ ? 100 - py : py;
          lineElem.setAttributeNS(null, 'x2', px + "%");
          lineElem.setAttributeNS(null, 'y2', ipy + "%");
          markerElem.setAttributeNS(null, 'cx', px + "%");
          markerElem.setAttributeNS(null, 'cy', ipy + "%");
      };
      Point2dPadInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      Point2dPadInputView.prototype.onFoldableChange_ = function () {
          this.update();
      };
      return Point2dPadInputView;
  }(view_1.View));
  exports.Point2dPadInputView = Point2dPadInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/point-2d-text.ts":
  /*!*************************************************!*\
    !*** ./src/main/js/view/input/point-2d-text.ts ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Point2dTextInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var COMPONENT_LABELS = ['X', 'Y'];
  var className = class_name_1.ClassName('p2dtxt', 'input');
  /**
   * @hidden
   */
  var Point2dTextInputView = /** @class */ (function (_super) {
      __extends(Point2dTextInputView, _super);
      function Point2dTextInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.formatters_ = [config.xFormatter, config.yFormatter];
          _this.element.classList.add(className());
          var inputElems = COMPONENT_LABELS.map(function () {
              var inputElem = document.createElement('input');
              inputElem.classList.add(className('i'));
              inputElem.type = 'text';
              return inputElem;
          });
          COMPONENT_LABELS.forEach(function (_, index) {
              var elem = document.createElement('div');
              elem.classList.add(className('w'));
              elem.appendChild(inputElems[index]);
              _this.element.appendChild(elem);
          });
          _this.inputElems_ = [inputElems[0], inputElems[1]];
          config.value.emitter.on('change', _this.onValueChange_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              if (_this.inputElems_) {
                  _this.inputElems_.forEach(function (elem) {
                      DisposingUtil.disposeElement(elem);
                  });
                  _this.inputElems_ = null;
              }
          });
          return _this;
      }
      Object.defineProperty(Point2dTextInputView.prototype, "inputElements", {
          get: function () {
              if (!this.inputElems_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElems_;
          },
          enumerable: false,
          configurable: true
      });
      Point2dTextInputView.prototype.update = function () {
          var _this = this;
          var inputElems = this.inputElems_;
          if (!inputElems) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var xyComps = this.value.rawValue.getComponents();
          xyComps.forEach(function (comp, index) {
              var inputElem = inputElems[index];
              inputElem.value = _this.formatters_[index].format(comp);
          });
      };
      Point2dTextInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return Point2dTextInputView;
  }(view_1.View));
  exports.Point2dTextInputView = Point2dTextInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/slider-text.ts":
  /*!***********************************************!*\
    !*** ./src/main/js/view/input/slider-text.ts ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SliderTextInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('sldtxt', 'input');
  /**
   * @hidden
   */
  var SliderTextInputView = /** @class */ (function (_super) {
      __extends(SliderTextInputView, _super);
      function SliderTextInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.element.classList.add(className());
          var sliderElem = document.createElement('div');
          sliderElem.classList.add(className('s'));
          _this.sliderInputView_ = config.sliderInputView;
          sliderElem.appendChild(_this.sliderInputView_.element);
          _this.element.appendChild(sliderElem);
          var textElem = document.createElement('div');
          textElem.classList.add(className('t'));
          _this.textInputView_ = config.textInputView;
          textElem.appendChild(_this.textInputView_.element);
          _this.element.appendChild(textElem);
          return _this;
      }
      Object.defineProperty(SliderTextInputView.prototype, "value", {
          get: function () {
              return this.sliderInputView_.value;
          },
          enumerable: false,
          configurable: true
      });
      SliderTextInputView.prototype.update = function () {
          this.sliderInputView_.update();
          this.textInputView_.update();
      };
      return SliderTextInputView;
  }(view_1.View));
  exports.SliderTextInputView = SliderTextInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/slider.ts":
  /*!******************************************!*\
    !*** ./src/main/js/view/input/slider.ts ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SliderInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('sld', 'input');
  /**
   * @hidden
   */
  var SliderInputView = /** @class */ (function (_super) {
      __extends(SliderInputView, _super);
      function SliderInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.minValue_ = config.minValue;
          _this.maxValue_ = config.maxValue;
          _this.element.classList.add(className());
          var outerElem = document.createElement('div');
          outerElem.classList.add(className('o'));
          outerElem.tabIndex = 0;
          _this.element.appendChild(outerElem);
          _this.outerElem_ = outerElem;
          var innerElem = document.createElement('div');
          innerElem.classList.add(className('i'));
          _this.outerElem_.appendChild(innerElem);
          _this.innerElem_ = innerElem;
          config.value.emitter.on('change', _this.onValueChange_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.innerElem_ = DisposingUtil.disposeElement(_this.innerElem_);
              _this.outerElem_ = DisposingUtil.disposeElement(_this.outerElem_);
          });
          return _this;
      }
      Object.defineProperty(SliderInputView.prototype, "outerElement", {
          get: function () {
              if (!this.outerElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.outerElem_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(SliderInputView.prototype, "innerElement", {
          get: function () {
              if (!this.innerElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.innerElem_;
          },
          enumerable: false,
          configurable: true
      });
      SliderInputView.prototype.update = function () {
          if (!this.innerElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var p = number_util_1.NumberUtil.constrain(number_util_1.NumberUtil.map(this.value.rawValue, this.minValue_, this.maxValue_, 0, 100), 0, 100);
          this.innerElem_.style.width = p + "%";
      };
      SliderInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return SliderInputView;
  }(view_1.View));
  exports.SliderInputView = SliderInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/sv-palette.ts":
  /*!**********************************************!*\
    !*** ./src/main/js/view/input/sv-palette.ts ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SvPaletteInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var color_model_1 = __webpack_require__(/*! ../../misc/color-model */ "./src/main/js/misc/color-model.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('svp', 'input');
  var CANVAS_RESOL = 64;
  /**
   * @hidden
   */
  var SvPaletteInputView = /** @class */ (function (_super) {
      __extends(SvPaletteInputView, _super);
      function SvPaletteInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.value = config.value;
          _this.value.emitter.on('change', _this.onValueChange_);
          _this.element.classList.add(className());
          _this.element.tabIndex = 0;
          var canvasElem = document.createElement('canvas');
          canvasElem.height = CANVAS_RESOL;
          canvasElem.width = CANVAS_RESOL;
          canvasElem.classList.add(className('c'));
          _this.element.appendChild(canvasElem);
          _this.canvasElem_ = canvasElem;
          var markerElem = document.createElement('div');
          markerElem.classList.add(className('m'));
          _this.element.appendChild(markerElem);
          _this.markerElem_ = markerElem;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.canvasElem_ = DisposingUtil.disposeElement(_this.canvasElem_);
              _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
          });
          return _this;
      }
      Object.defineProperty(SvPaletteInputView.prototype, "canvasElement", {
          get: function () {
              if (!this.canvasElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.canvasElem_;
          },
          enumerable: false,
          configurable: true
      });
      SvPaletteInputView.prototype.update = function () {
          if (!this.markerElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var ctx = DomUtil.getCanvasContext(this.canvasElement);
          if (!ctx) {
              return;
          }
          var c = this.value.rawValue;
          var hsvComps = c.getComponents('hsv');
          var width = this.canvasElement.width;
          var height = this.canvasElement.height;
          var imgData = ctx.getImageData(0, 0, width, height);
          var data = imgData.data;
          for (var iy = 0; iy < height; iy++) {
              for (var ix = 0; ix < width; ix++) {
                  var s = number_util_1.NumberUtil.map(ix, 0, width, 0, 100);
                  var v = number_util_1.NumberUtil.map(iy, 0, height, 100, 0);
                  var rgbComps = color_model_1.hsvToRgb(hsvComps[0], s, v);
                  var i = (iy * width + ix) * 4;
                  data[i] = rgbComps[0];
                  data[i + 1] = rgbComps[1];
                  data[i + 2] = rgbComps[2];
                  data[i + 3] = 255;
              }
          }
          ctx.putImageData(imgData, 0, 0);
          var left = number_util_1.NumberUtil.map(hsvComps[1], 0, 100, 0, 100);
          this.markerElem_.style.left = left + "%";
          var top = number_util_1.NumberUtil.map(hsvComps[2], 0, 100, 100, 0);
          this.markerElem_.style.top = top + "%";
      };
      SvPaletteInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return SvPaletteInputView;
  }(view_1.View));
  exports.SvPaletteInputView = SvPaletteInputView;


  /***/ }),

  /***/ "./src/main/js/view/input/text.ts":
  /*!****************************************!*\
    !*** ./src/main/js/view/input/text.ts ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TextInputView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('txt', 'input');
  /**
   * @hidden
   */
  var TextInputView = /** @class */ (function (_super) {
      __extends(TextInputView, _super);
      function TextInputView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueChange_ = _this.onValueChange_.bind(_this);
          _this.formatter_ = config.formatter;
          _this.element.classList.add(className());
          var inputElem = document.createElement('input');
          inputElem.classList.add(className('i'));
          inputElem.type = 'text';
          _this.element.appendChild(inputElem);
          _this.inputElem_ = inputElem;
          config.value.emitter.on('change', _this.onValueChange_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
          });
          return _this;
      }
      Object.defineProperty(TextInputView.prototype, "inputElement", {
          get: function () {
              if (!this.inputElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.inputElem_;
          },
          enumerable: false,
          configurable: true
      });
      TextInputView.prototype.update = function () {
          if (!this.inputElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          this.inputElem_.value = this.formatter_.format(this.value.rawValue);
      };
      TextInputView.prototype.onValueChange_ = function () {
          this.update();
      };
      return TextInputView;
  }(view_1.View));
  exports.TextInputView = TextInputView;


  /***/ }),

  /***/ "./src/main/js/view/labeled.ts":
  /*!*************************************!*\
    !*** ./src/main/js/view/labeled.ts ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LabeledView = void 0;
  var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('lbl');
  function createLabelNode(document, label) {
      var frag = document.createDocumentFragment();
      var lineNodes = label.split('\n').map(function (line) {
          return document.createTextNode(line);
      });
      lineNodes.forEach(function (lineNode, index) {
          if (index > 0) {
              frag.appendChild(document.createElement('br'));
          }
          frag.appendChild(lineNode);
      });
      return frag;
  }
  /**
   * @hidden
   */
  var LabeledView = /** @class */ (function (_super) {
      __extends(LabeledView, _super);
      function LabeledView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.label = config.label;
          _this.element.classList.add(className());
          var labelElem = document.createElement('div');
          labelElem.classList.add(className('l'));
          labelElem.appendChild(createLabelNode(document, _this.label));
          _this.element.appendChild(labelElem);
          var viewElem = document.createElement('div');
          viewElem.classList.add(className('v'));
          viewElem.appendChild(config.view.element);
          _this.element.appendChild(viewElem);
          return _this;
      }
      return LabeledView;
  }(view_1.View));
  exports.LabeledView = LabeledView;


  /***/ }),

  /***/ "./src/main/js/view/monitor/graph.ts":
  /*!*******************************************!*\
    !*** ./src/main/js/view/monitor/graph.ts ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GraphMonitorView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
  var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var SVG_NS = DomUtil.SVG_NS;
  var className = class_name_1.ClassName('grp', 'monitor');
  /**
   * @hidden
   */
  var GraphMonitorView = /** @class */ (function (_super) {
      __extends(GraphMonitorView, _super);
      function GraphMonitorView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onCursorChange_ = _this.onCursorChange_.bind(_this);
          _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
          _this.element.classList.add(className());
          _this.formatter_ = config.formatter;
          _this.minValue_ = config.minValue;
          _this.maxValue_ = config.maxValue;
          _this.cursor_ = config.cursor;
          _this.cursor_.emitter.on('change', _this.onCursorChange_);
          var svgElem = document.createElementNS(SVG_NS, 'svg');
          svgElem.classList.add(className('g'));
          _this.element.appendChild(svgElem);
          _this.svgElem_ = svgElem;
          var lineElem = document.createElementNS(SVG_NS, 'polyline');
          _this.svgElem_.appendChild(lineElem);
          _this.lineElem_ = lineElem;
          var tooltipElem = document.createElement('div');
          tooltipElem.classList.add(className('t'));
          _this.element.appendChild(tooltipElem);
          _this.tooltipElem_ = tooltipElem;
          config.value.emitter.on('update', _this.onValueUpdate_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.lineElem_ = DisposingUtil.disposeElement(_this.lineElem_);
              _this.svgElem_ = DisposingUtil.disposeElement(_this.svgElem_);
              _this.tooltipElem_ = DisposingUtil.disposeElement(_this.tooltipElem_);
          });
          return _this;
      }
      Object.defineProperty(GraphMonitorView.prototype, "graphElement", {
          get: function () {
              if (!this.svgElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.svgElem_;
          },
          enumerable: false,
          configurable: true
      });
      GraphMonitorView.prototype.update = function () {
          var tooltipElem = this.tooltipElem_;
          if (!this.lineElem_ || !this.svgElem_ || !tooltipElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var bounds = this.svgElem_.getBoundingClientRect();
          // Graph
          var maxIndex = this.value.totalCount - 1;
          var min = this.minValue_;
          var max = this.maxValue_;
          this.lineElem_.setAttributeNS(null, 'points', this.value.rawValues
              .map(function (v, index) {
              var x = number_util_1.NumberUtil.map(index, 0, maxIndex, 0, bounds.width);
              var y = number_util_1.NumberUtil.map(v, min, max, bounds.height, 0);
              return [x, y].join(',');
          })
              .join(' '));
          // Cursor
          var value = this.value.rawValues[this.cursor_.index];
          if (value === undefined) {
              tooltipElem.classList.remove(className('t', 'valid'));
              return;
          }
          tooltipElem.classList.add(className('t', 'valid'));
          var tx = number_util_1.NumberUtil.map(this.cursor_.index, 0, maxIndex, 0, bounds.width);
          var ty = number_util_1.NumberUtil.map(value, min, max, bounds.height, 0);
          tooltipElem.style.left = tx + "px";
          tooltipElem.style.top = ty + "px";
          tooltipElem.textContent = "" + this.formatter_.format(value);
      };
      GraphMonitorView.prototype.onValueUpdate_ = function () {
          this.update();
      };
      GraphMonitorView.prototype.onCursorChange_ = function () {
          this.update();
      };
      return GraphMonitorView;
  }(view_1.View));
  exports.GraphMonitorView = GraphMonitorView;


  /***/ }),

  /***/ "./src/main/js/view/monitor/multi-log.ts":
  /*!***********************************************!*\
    !*** ./src/main/js/view/monitor/multi-log.ts ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MultiLogMonitorView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('mll', 'monitor');
  /**
   * @hidden
   */
  var MultiLogMonitorView = /** @class */ (function (_super) {
      __extends(MultiLogMonitorView, _super);
      function MultiLogMonitorView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
          _this.formatter_ = config.formatter;
          _this.element.classList.add(className());
          var textareaElem = document.createElement('textarea');
          textareaElem.classList.add(className('i'));
          textareaElem.readOnly = true;
          _this.element.appendChild(textareaElem);
          _this.textareaElem_ = textareaElem;
          config.value.emitter.on('update', _this.onValueUpdate_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.textareaElem_ = DisposingUtil.disposeElement(_this.textareaElem_);
          });
          return _this;
      }
      MultiLogMonitorView.prototype.update = function () {
          var _this = this;
          var elem = this.textareaElem_;
          if (!elem) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
          elem.textContent = this.value.rawValues
              .map(function (value) {
              return _this.formatter_.format(value);
          })
              .join('\n');
          if (shouldScroll) {
              elem.scrollTop = elem.scrollHeight;
          }
      };
      MultiLogMonitorView.prototype.onValueUpdate_ = function () {
          this.update();
      };
      return MultiLogMonitorView;
  }(view_1.View));
  exports.MultiLogMonitorView = MultiLogMonitorView;


  /***/ }),

  /***/ "./src/main/js/view/monitor/single-log.ts":
  /*!************************************************!*\
    !*** ./src/main/js/view/monitor/single-log.ts ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SingleLogMonitorView = void 0;
  var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('sgl', 'monitor');
  /**
   * @hidden
   */
  var SingleLogMonitorView = /** @class */ (function (_super) {
      __extends(SingleLogMonitorView, _super);
      function SingleLogMonitorView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
          _this.formatter_ = config.formatter;
          _this.element.classList.add(className());
          var inputElem = document.createElement('input');
          inputElem.classList.add(className('i'));
          inputElem.readOnly = true;
          inputElem.type = 'text';
          _this.element.appendChild(inputElem);
          _this.inputElem_ = inputElem;
          config.value.emitter.on('update', _this.onValueUpdate_);
          _this.value = config.value;
          _this.update();
          config.model.emitter.on('dispose', function () {
              _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
          });
          return _this;
      }
      SingleLogMonitorView.prototype.update = function () {
          if (!this.inputElem_) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var values = this.value.rawValues;
          this.inputElem_.value =
              values.length > 0
                  ? this.formatter_.format(values[values.length - 1])
                  : '';
      };
      SingleLogMonitorView.prototype.onValueUpdate_ = function () {
          this.update();
      };
      return SingleLogMonitorView;
  }(view_1.View));
  exports.SingleLogMonitorView = SingleLogMonitorView;


  /***/ }),

  /***/ "./src/main/js/view/root.ts":
  /*!**********************************!*\
    !*** ./src/main/js/view/root.ts ***!
    \**********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RootView = void 0;
  var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('rot');
  /**
   * @hidden
   */
  var RootView = /** @class */ (function (_super) {
      __extends(RootView, _super);
      function RootView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.onFolderChange_ = _this.onFolderChange_.bind(_this);
          _this.folder_ = config.folder;
          if (_this.folder_) {
              _this.folder_.emitter.on('change', _this.onFolderChange_);
          }
          _this.element.classList.add(className());
          var folder = _this.folder_;
          if (folder) {
              var titleElem = document.createElement('button');
              titleElem.classList.add(className('t'));
              titleElem.textContent = folder.title;
              _this.element.appendChild(titleElem);
              var markElem = document.createElement('div');
              markElem.classList.add(className('m'));
              titleElem.appendChild(markElem);
              _this.titleElem_ = titleElem;
          }
          var containerElem = document.createElement('div');
          containerElem.classList.add(className('c'));
          _this.element.appendChild(containerElem);
          _this.containerElem_ = containerElem;
          _this.applyModel_();
          config.model.emitter.on('dispose', function () {
              _this.containerElem_ = DisposingUtil.disposeElement(_this.containerElem_);
              _this.folder_ = null;
              _this.titleElem_ = DisposingUtil.disposeElement(_this.titleElem_);
          });
          return _this;
      }
      Object.defineProperty(RootView.prototype, "titleElement", {
          get: function () {
              return this.titleElem_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(RootView.prototype, "containerElement", {
          get: function () {
              if (!this.containerElem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.containerElem_;
          },
          enumerable: false,
          configurable: true
      });
      RootView.prototype.applyModel_ = function () {
          var containerElem = this.containerElem_;
          if (!containerElem) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          var expanded = this.folder_ ? this.folder_.styleExpanded : true;
          var expandedClass = className(undefined, 'expanded');
          if (expanded) {
              this.element.classList.add(expandedClass);
          }
          else {
              this.element.classList.remove(expandedClass);
          }
          containerElem.style.height = this.folder_
              ? this.folder_.styleHeight
              : 'auto';
      };
      RootView.prototype.onFolderChange_ = function () {
          this.applyModel_();
      };
      return RootView;
  }(view_1.View));
  exports.RootView = RootView;


  /***/ }),

  /***/ "./src/main/js/view/separator.ts":
  /*!***************************************!*\
    !*** ./src/main/js/view/separator.ts ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SeparatorView = void 0;
  var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
  var className = class_name_1.ClassName('spt');
  /**
   * @hidden
   */
  var SeparatorView = /** @class */ (function (_super) {
      __extends(SeparatorView, _super);
      function SeparatorView(document, config) {
          var _this = _super.call(this, document, config) || this;
          _this.element.classList.add(className());
          var hrElem = document.createElement('hr');
          hrElem.classList.add(className('r'));
          _this.element.appendChild(hrElem);
          return _this;
      }
      return SeparatorView;
  }(view_1.View));
  exports.SeparatorView = SeparatorView;


  /***/ }),

  /***/ "./src/main/js/view/view.ts":
  /*!**********************************!*\
    !*** ./src/main/js/view/view.ts ***!
    \**********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.View = void 0;
  var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
  var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
  var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
  var ViewPositions = __webpack_require__(/*! ../model/view-positions */ "./src/main/js/model/view-positions.ts");
  var className = class_name_1.ClassName('');
  /**
   * @hidden
   */
  var View = /** @class */ (function () {
      function View(document, config) {
          this.onChange_ = this.onChange_.bind(this);
          this.onDispose_ = this.onDispose_.bind(this);
          this.model_ = config.model;
          this.model_.emitter.on('change', this.onChange_);
          this.model_.emitter.on('dispose', this.onDispose_);
          this.doc_ = document;
          this.elem_ = this.doc_.createElement('div');
          this.elem_.classList.add(className());
      }
      Object.defineProperty(View.prototype, "document", {
          get: function () {
              if (!this.doc_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.doc_;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(View.prototype, "element", {
          get: function () {
              if (!this.elem_) {
                  throw pane_error_1.PaneError.alreadyDisposed();
              }
              return this.elem_;
          },
          enumerable: false,
          configurable: true
      });
      View.prototype.onDispose_ = function () {
          this.doc_ = null;
          this.elem_ = DisposingUtil.disposeElement(this.elem_);
      };
      View.prototype.onChange_ = function (ev) {
          var elem = this.elem_;
          if (!elem) {
              throw pane_error_1.PaneError.alreadyDisposed();
          }
          if (ev.propertyName === 'hidden') {
              var hiddenClass = className(undefined, 'hidden');
              if (this.model_.hidden) {
                  elem.classList.add(hiddenClass);
              }
              else {
                  elem.classList.remove(hiddenClass);
              }
          }
          else if (ev.propertyName === 'positions') {
              ViewPositions.getAll().forEach(function (pos) {
                  elem.classList.remove(className(undefined, pos));
              });
              this.model_.positions.forEach(function (pos) {
                  elem.classList.add(className(undefined, pos));
              });
          }
      };
      return View;
  }());
  exports.View = View;


  /***/ }),

  /***/ "./src/main/sass/bundle.scss":
  /*!***********************************!*\
    !*** ./src/main/sass/bundle.scss ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
  // imports


  // module
  exports.push([module.i, ".tp-fldv_t,.tp-rotv_t{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--folder-background-color);color:var(--folder-foreground-color);cursor:pointer;display:block;height:24px;line-height:24px;overflow:hidden;padding-left:30px;position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-fldv_t:hover,.tp-rotv_t:hover{background-color:var(--folder-background-color-hover)}.tp-fldv_t:focus,.tp-rotv_t:focus{background-color:var(--folder-background-color-focus)}.tp-fldv_t:active,.tp-rotv_t:active{background-color:var(--folder-background-color-active)}.tp-fldv_m,.tp-rotv_m{background:linear-gradient(to left, var(--folder-foreground-color), var(--folder-foreground-color) 2px, transparent 2px, transparent 4px, var(--folder-foreground-color) 4px);border-radius:2px;bottom:0;content:'';display:block;height:6px;left:12px;margin:auto;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-fldv.tp-fldv-expanded>.tp-fldv_t>.tp-fldv_m,.tp-rotv.tp-rotv-expanded .tp-rotv_m{transform:none}.tp-fldv_c,.tp-rotv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-fldv_c>.tp-fldv.tp-v-first,.tp-rotv_c>.tp-fldv.tp-v-first{margin-top:-4px}.tp-fldv_c>.tp-fldv.tp-v-last,.tp-rotv_c>.tp-fldv.tp-v-last{margin-bottom:-4px}.tp-fldv_c>*:not(.tp-v-first),.tp-rotv_c>*:not(.tp-v-first){margin-top:4px}.tp-fldv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv,.tp-rotv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv{margin-top:0}.tp-fldv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv,.tp-rotv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv{margin-top:0}.tp-fldv.tp-fldv-expanded>.tp-fldv_c,.tp-rotv.tp-rotv-expanded .tp-rotv_c{opacity:1;padding-bottom:4px;padding-top:4px;transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-btnv{padding:0 4px}.tp-btnv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;font-weight:bold;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.tp-btnv_b:hover{background-color:var(--button-background-color-hover)}.tp-btnv_b:focus{background-color:var(--button-background-color-focus)}.tp-btnv_b:active{background-color:var(--button-background-color-active)}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-expanded .tp-fldv_t{transition:border-radius 0s}.tp-fldv_c{border-left:var(--folder-background-color) solid 4px}.tp-fldv_t:hover+.tp-fldv_c{border-left-color:var(--folder-background-color-hover)}.tp-fldv_t:focus+.tp-fldv_c{border-left-color:var(--folder-background-color-focus)}.tp-fldv_t:active+.tp-fldv_c{border-left-color:var(--folder-background-color-active)}.tp-fldv_c>.tp-fldv{margin-left:4px}.tp-fldv_c>.tp-fldv>.tp-fldv_t{border-top-left-radius:2px;border-bottom-left-radius:2px}.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_t{border-bottom-left-radius:0}.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:2px}.tp-ckbiv_l{display:block;position:relative}.tp-ckbiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background:red;left:0;opacity:0;position:absolute;top:0}.tp-ckbiv_m{background-color:var(--input-background-color);border-radius:2px;cursor:pointer;display:block;height:20px;position:relative;width:20px}.tp-ckbiv_m::before{background-color:var(--input-foreground-color);border-radius:2px;bottom:4px;content:'';display:block;left:4px;opacity:0;position:absolute;right:4px;top:4px}.tp-ckbiv_i:hover+.tp-ckbiv_m{background-color:var(--input-background-color-hover)}.tp-ckbiv_i:focus+.tp-ckbiv_m{background-color:var(--input-background-color-focus)}.tp-ckbiv_i:active+.tp-ckbiv_m{background-color:var(--input-background-color-active)}.tp-ckbiv_i:checked+.tp-ckbiv_m::before{opacity:1}.tp-cctxtsiv{display:flex;width:100%}.tp-cctxtsiv_m{margin-right:4px;position:relative}.tp-cctxtsiv_ms{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;border-radius:2px;color:var(--label-foreground-color);cursor:pointer;height:20px;line-height:20px;padding:0 18px 0 4px}.tp-cctxtsiv_ms:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsiv_ms:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsiv_ms:active{background-color:var(--input-background-color-active)}.tp-cctxtsiv_mm{border-color:var(--label-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-cctxtsiv_w{display:flex;flex:1}.tp-cctxtsiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;border-radius:0;flex:1;padding:0 4px}.tp-cctxtsiv_i:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsiv_i:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsiv_i:active{background-color:var(--input-background-color-active)}.tp-cctxtsiv_i:first-child{border-bottom-left-radius:2px;border-top-left-radius:2px}.tp-cctxtsiv_i:last-child{border-bottom-right-radius:2px;border-top-right-radius:2px}.tp-cctxtsiv_i+.tp-cctxtsiv_i{margin-left:2px}.tp-clpiv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px;position:relative;visibility:hidden;z-index:1000}.tp-clpiv.tp-clpiv-expanded{display:block;visibility:visible}.tp-clpiv_h,.tp-clpiv_ap{margin-left:6px;margin-right:6px}.tp-clpiv_h{margin-top:4px}.tp-clpiv_rgb{display:flex;margin-top:4px;width:100%}.tp-clpiv_a{display:flex;margin-top:4px;padding-top:8px;position:relative}.tp-clpiv_a:before{background-color:var(--separator-color);content:'';height:4px;left:-4px;position:absolute;right:-4px;top:0}.tp-clpiv_ap{flex:3}.tp-clpiv_at{flex:1;margin-left:4px}.tp-svpiv{border-radius:2px;outline:none;overflow:hidden;position:relative}.tp-svpiv_c{cursor:crosshair;display:block;height:80px;width:100%}.tp-svpiv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;-webkit-filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpiv:focus .tp-svpiv_m{border-color:#fff}.tp-hpliv{cursor:pointer;height:20px;outline:none;position:relative}.tp-hpliv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hpliv_m{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,0.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hpliv:focus .tp-hpliv_m{border-color:#fff}.tp-apliv{cursor:pointer;height:20px;outline:none;position:relative}.tp-apliv_b{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;background-color:#fff;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-apliv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-apliv_m{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,0.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-apliv_p{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-apliv:focus .tp-apliv_p{border-color:#fff}.tp-lstiv{display:block;padding:0;position:relative}.tp-lstiv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;height:20px;line-height:20px;padding:0 4px;width:100%}.tp-lstiv_s:hover{background-color:var(--button-background-color-hover)}.tp-lstiv_s:focus{background-color:var(--button-background-color-focus)}.tp-lstiv_s:active{background-color:var(--button-background-color-active)}.tp-lstiv_m{border-color:var(--button-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-p2dpadiv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px 4px 4px 28px;position:relative;visibility:hidden;z-index:1000}.tp-p2dpadiv.tp-p2dpadiv-expanded{display:block;visibility:visible}.tp-p2dpadiv_p{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpadiv_p:hover{background-color:var(--input-background-color-hover)}.tp-p2dpadiv_p:focus{background-color:var(--input-background-color-focus)}.tp-p2dpadiv_p:active{background-color:var(--input-background-color-active)}.tp-p2dpadiv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpadiv_ax{stroke:var(--input-guide-color)}.tp-p2dpadiv_l{stroke:var(--input-foreground-color);stroke-linecap:round;stroke-dasharray:1px 3px}.tp-p2dpadiv_m{fill:var(--input-foreground-color)}.tp-p2dpadtxtiv{display:flex;position:relative}.tp-p2dpadtxtiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;font-weight:bold;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:20px;position:relative;width:20px}.tp-p2dpadtxtiv_b:hover{background-color:var(--button-background-color-hover)}.tp-p2dpadtxtiv_b:focus{background-color:var(--button-background-color-focus)}.tp-p2dpadtxtiv_b:active{background-color:var(--button-background-color-active)}.tp-p2dpadtxtiv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dpadtxtiv_p{left:-4px;position:absolute;right:-4px;top:20px}.tp-p2dpadtxtiv_t{margin-left:4px}.tp-p2dtxtiv{display:flex}.tp-p2dtxtiv_w{align-items:center;display:flex}.tp-p2dtxtiv_w+.tp-p2dtxtiv_w{margin-left:2px}.tp-p2dtxtiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;padding:0 4px;width:100%}.tp-p2dtxtiv_i:hover{background-color:var(--input-background-color-hover)}.tp-p2dtxtiv_i:focus{background-color:var(--input-background-color-focus)}.tp-p2dtxtiv_i:active{background-color:var(--input-background-color-active)}.tp-p2dtxtiv_w:nth-child(1) .tp-p2dtxtiv_i{border-top-right-radius:0;border-bottom-right-radius:0}.tp-p2dtxtiv_w:nth-child(2) .tp-p2dtxtiv_i{border-top-left-radius:0;border-bottom-left-radius:0}.tp-sldiv{display:block;padding:0}.tp-sldiv_o{box-sizing:border-box;cursor:pointer;height:20px;margin:0 6px;outline:none;position:relative}.tp-sldiv_o::before{background-color:var(--input-background-color);border-radius:1px;bottom:0;content:'';display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldiv_i{height:100%;left:0;position:absolute;top:0}.tp-sldiv_i::before{background-color:var(--button-background-color);border-radius:2px;bottom:0;content:'';display:block;height:12px;margin:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldiv_o:hover .tp-sldiv_i::before{background-color:var(--button-background-color-hover)}.tp-sldiv_o:focus .tp-sldiv_i::before{background-color:var(--button-background-color-focus)}.tp-sldiv_o:active .tp-sldiv_i::before{background-color:var(--button-background-color-active)}.tp-txtiv{display:block;padding:0}.tp-txtiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;padding:0 4px}.tp-txtiv_i:hover{background-color:var(--input-background-color-hover)}.tp-txtiv_i:focus{background-color:var(--input-background-color-focus)}.tp-txtiv_i:active{background-color:var(--input-background-color-active)}.tp-cswiv{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;background-color:#fff;border-radius:2px}.tp-cswiv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%}.tp-cswiv_sw:hover{background-color:var(--input-background-color-hover)}.tp-cswiv_sw:focus{background-color:var(--input-background-color-focus)}.tp-cswiv_sw:active{background-color:var(--input-background-color-active)}.tp-cswiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:20px;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:20px}.tp-cswiv_b:focus::after{border:rgba(255,255,255,0.75) solid 2px;border-radius:2px;bottom:0;content:'';display:block;left:0;position:absolute;right:0;top:0}.tp-cswiv_p{left:-4px;position:absolute;right:-4px;top:20px}.tp-cswtxtiv{display:flex;position:relative}.tp-cswtxtiv_s{flex-grow:0;flex-shrink:0;width:20px}.tp-cswtxtiv_t{flex:1;margin-left:4px}.tp-sldtxtiv{display:flex}.tp-sldtxtiv_s{flex:2}.tp-sldtxtiv_t{flex:1;margin-left:4px}.tp-lblv{align-items:center;display:flex;padding-left:4px;padding-right:4px}.tp-lblv_l{color:var(--label-foreground-color);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-grpmv{display:block;padding:0;position:relative}.tp-grpmv_g{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;display:block;height:60px}.tp-grpmv_g polyline{fill:none;stroke:var(--monitor-foreground-color);stroke-linejoin:round}.tp-grpmv_t{color:var(--monitor-foreground-color);font-size:0.9em;left:0;pointer-events:none;position:absolute;text-indent:4px;top:0;visibility:hidden}.tp-grpmv_t.tp-grpmv_t-valid{visibility:visible}.tp-grpmv_t::before{background-color:var(--monitor-foreground-color);border-radius:100%;content:'';display:block;height:4px;left:-2px;position:absolute;top:-2px;width:4px}.tp-sglmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;padding:0 4px}.tp-mllmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;display:block;height:60px;line-height:20px;padding:0 4px;resize:none;white-space:pre}.tp-cswmv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono,Source Code Pro,Menlo,Courier,monospace);--base-background-color: var(--tp-base-background-color, #2f3137);--base-shadow-color: var(--tp-base-shadow-color, rgba(0,0,0,0.2));--button-background-color: var(--tp-button-background-color, #adafb8);--button-background-color-active: var(--tp-button-background-color-active, #d6d7db);--button-background-color-focus: var(--tp-button-background-color-focus, #c8cad0);--button-background-color-hover: var(--tp-button-background-color-hover, #bbbcc4);--button-foreground-color: var(--tp-button-foreground-color, #2f3137);--folder-background-color: var(--tp-folder-background-color, rgba(200,202,208,0.1));--folder-background-color-active: var(--tp-folder-background-color-active, rgba(200,202,208,0.25));--folder-background-color-focus: var(--tp-folder-background-color-focus, rgba(200,202,208,0.2));--folder-background-color-hover: var(--tp-folder-background-color-hover, rgba(200,202,208,0.15));--folder-foreground-color: var(--tp-folder-foreground-color, #c8cad0);--input-background-color: var(--tp-input-background-color, rgba(200,202,208,0.15));--input-background-color-active: var(--tp-input-background-color-active, rgba(200,202,208,0.35));--input-background-color-focus: var(--tp-input-background-color-focus, rgba(200,202,208,0.25));--input-background-color-hover: var(--tp-input-background-color-hover, rgba(200,202,208,0.15));--input-foreground-color: var(--tp-input-foreground-color, #c8cad0);--input-guide-color: var(--tp-input-guide-color, rgba(47,49,55,0.5));--label-foreground-color: var(--tp-label-foreground-color, rgba(200,202,208,0.8));--monitor-background-color: var(--tp-monitor-background-color, rgba(24,24,27,0.5));--monitor-foreground-color: var(--tp-monitor-foreground-color, rgba(200,202,208,0.7));--separator-color: var(--tp-separator-color, rgba(24,24,27,0.3));background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);font-family:var(--font-family);font-size:11px;font-weight:500;text-align:left}.tp-rotv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top-left-radius:6px;border-top-right-radius:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_t{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv_m{transition:none}.tp-rotv_c>.tp-fldv:last-child>.tp-fldv_c{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:last-child:not(.tp-fldv-expanded)>.tp-fldv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:first-child>.tp-fldv_t{border-top-left-radius:6px;border-top-right-radius:6px}.tp-sptv_r{background-color:var(--separator-color);border-width:0;display:block;height:4px;margin:0;width:100%}.tp-v.tp-v-hidden{display:none}\n", ""]);

  // exports


  /***/ })

  /******/ })["default"];
  });
  });

  var Tweakpane = unwrapExports(tweakpane);

  function create_ui (PARAMS, reset, reset_with_new_seed) {
    const pane = new Tweakpane({ title: 'Ornament options' });
    pane.addInput(PARAMS, 'tile_dim', {
      label: 'Tile size',
      x: { min: 2, max: 80, step: 2 },
      y: { min: 2, max: 80, step: 2 },
    });
    pane.addInput(PARAMS, 'symmetries', {
      label: 'Tile symmetry',
      options: {
        none: 'none',
        rotate_180: 'rotate_180',
        rotate_90: 'rotate_90',
        rotate_reflect_h: 'rotate_reflect_h',
        rotate_reflect_v: 'rotate_reflect_v',
        translate_reflect_h: 'translate_reflect_h',
        translate_reflect_v: 'translate_reflect_v',
      },
    });
    pane.addInput(PARAMS, 'tile_copies', {
      label: 'Tiles in a segment',
      x: { min: 1, max: 10, step: 1 },
      y: { min: 1, max: 10, step: 1 },
    });

    pane.addInput(PARAMS, 'horizontal_reflection', { label: 'Horizontal reflection' });
    pane.addInput(PARAMS, 'vertical_reflection', { label: 'Vertical reflection' });

    pane.addInput(PARAMS, 'segment_copies', { label: 'Segment copies', min: 1, max: 8, step: 1 });

    let stylePane = pane.addFolder({ title: 'Style' });
    stylePane.addInput(PARAMS, 'ornament_scale', { label: 'Scale', min: 2, max: 50, step: 2 });
    stylePane.addInput(PARAMS, 'resolution', { label: 'Resolution', min: 1, max: 10, step: 1 });
    stylePane.addInput(PARAMS, 'spacing', { label: 'Spacing', min: 0.1, max: 2, step: 0.05 });
    stylePane.addInput(PARAMS, 'noise_intensity', { label: 'Distortion', min: 0, max: 2, step: 0.1 });
    stylePane.addSeparator();
    stylePane.addInput(PARAMS, 'palette', {
      label: 'Color palette',
      options: Object.assign({}, ...getNames().map((n) => ({ [n]: n }))),
    });
    stylePane.addInput(PARAMS, 'interpolate_colors', { label: 'Interpolate palette' });
    stylePane.addSeparator();
    stylePane.addInput(PARAMS, 'segment_padding', { label: 'Segment padding', min: 0, max: 3, step: 1 });
    stylePane.addInput(PARAMS, 'border_padding', { label: 'Border padding', min: 0, max: 6, step: 1 });
    stylePane.addInput(PARAMS, 'display_borders', { label: 'Display borders' });
    stylePane.addInput(PARAMS, 'display_base', { label: 'Display base' });

    let explorerPane = pane.addFolder({ title: 'Explorer' });
    explorerPane.addInput(PARAMS, 'split_chance', { label: 'Split chance', min: 0, max: 0.5, step: 0.05 });
    explorerPane.addInput(PARAMS, 'blank_chance', { label: 'Blank chance', min: 0, max: 0.9, step: 0.1 });
    explorerPane.addInput(PARAMS, 'path_priority', { label: 'Path priority', min: 0.1, max: 1, step: 0.1 });

    let controlPane = pane.addFolder({ title: 'Control' });
    controlPane.addInput(PARAMS, 'animate_drawing', { label: 'Animate drawing' });

    const btn = pane.addButton({ title: 'Redraw' });
    btn.on('click', () => reset_with_new_seed(PARAMS));
    pane.on('change', (_) => reset(PARAMS));
  }

  function get_symmetry(s) {
    if (s === 'none') return [[0, false, false, 0, 0]];
    if (s === 'rotate_180')
      return [
        [0, false, false, 0, 0],
        [2, false, false, 0, 0],
      ];
    if (s === 'rotate_90')
      return [
        [0, false, false, 0, 0],
        [1, false, false, 0, 0],
        [2, false, false, 0, 0],
        [3, false, false, 0, 0],
      ];
    if (s === 'rotate_reflect_v')
      return [
        [0, false, false, 0, 0],
        [1, false, true, 0, 0],
      ];
    if (s === 'rotate_reflect_h')
      return [
        [0, false, false, 0, 0],
        [1, true, false, 0, 0],
      ];
    if (s === 'translate_reflect_v')
      return [
        [0, false, false, 0, 0],
        [0, false, true, 0.5, 0],
      ];
    if (s === 'translate_reflect_h')
      return [
        [0, false, false, 0, 0],
        [0, true, false, 0, 0.5],
      ];
  }

  const mod = (n, m) => ((n % m) + m) % m;

  const random_int = (rng, max) => Math.floor(rng() * max);

  function shuffle(a, rng) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = random_int(rng, i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function reflected({ x, y, parent_pos }, cell_w, cell_h, horizontal, vertical) {
    let lx = cell_w * (Math.floor(x / cell_w) + 1) - (x % cell_w) - 1;
    let ly = cell_h * (Math.floor(y / cell_h) + 1) - (y % cell_h) - 1;

    let nx = horizontal ? lx : x;
    let ny = vertical ? ly : y;

    return { x: nx, y: ny, parent_pos: parent_reflected(parent_pos, horizontal, vertical) };
  }

  function rotated({ x, y, parent_pos }, cell_w, cell_h, quartile) {
    let x_init = cell_w * Math.floor(x / cell_w);
    let y_init = cell_h * Math.floor(y / cell_h);

    let x_cell = x % cell_w;
    let y_cell = y % cell_h;

    let parent = parent_rotated(parent_pos, quartile);

    if (quartile == 1) return { x: x_init + (cell_h - y_cell - 1), y: y_init + x_cell, parent_pos: parent };
    if (quartile == 2)
      return { x: x_init + (cell_w - x_cell - 1), y: y_init + (cell_h - y_cell - 1), parent_pos: parent };
    if (quartile == 3) return { x: x_init + y_cell, y: y_init + (cell_w - x_cell - 1), parent_pos: parent };

    return { x, y, parent_pos: parent };
  }

  function translated({ x, y, parent_pos }, grid_w, grid_h, dx, dy) {
    let nx = (x + dx) % grid_w;
    let ny = (y + dy) % grid_h;

    return { x: nx, y: ny, parent_pos: parent_pos };
  }

  function parent_reflected(pos, horizontal, vertical) {
    if (pos === 'N') return vertical ? 'S' : 'N';
    if (pos === 'S') return vertical ? 'N' : 'S';
    if (pos === 'W') return horizontal ? 'E' : 'W';
    if (pos === 'E') return horizontal ? 'W' : 'E';
    return '';
  }

  function parent_rotated(pos, quartile) {
    let positions = ['N', 'E', 'S', 'W'];
    if (pos === 'N') return positions[quartile % 4];
    if (pos === 'E') return positions[(1 + quartile) % 4];
    if (pos === 'S') return positions[(2 + quartile) % 4];
    if (pos === 'W') return positions[(3 + quartile) % 4];
    return '';
  }

  function create_explorer(
    local_w,
    local_h,
    copies_x,
    copies_y,
    number_of_cols,
    {
      init_x = 0,
      init_y = 0,
      split_chance = 0,
      blank_chance = 0,
      cand_size = 0.1,
      symmetries = [],
      frame = -1,
      href,
      vref,
      rng,
    } = {}
  ) {
    const grid_w = local_w * copies_x;
    const grid_h = local_h * copies_y;
    const frame_fn = get_frame_function(grid_w, grid_h, frame);
    const grid = [...Array(grid_h)].map((_, y) =>
      [...Array(grid_w)].map((_, x) => ({ x, y, explored: frame_fn(x, y), barren: false }))
    );
    const explored = [];
    let neighbors = [];

    let init_cell = grid[init_y][init_x];
    init_cell.parent_pos = '';
    init_cell.generation = 0;
    init_cell.color = random_int(rng, number_of_cols);
    init_cell.weight = 1;
    neighbors.push(init_cell);

    return () => {
      const candidates = shuffle(neighbors, rng).slice(0, Math.ceil(cand_size * neighbors.length));
      const pick = candidates.sort((a, b) => b.generation - a.generation)[0];

      if (pick === undefined) return null;

      pick.explored = true;
      explored.push(pick);

      if (rng() < split_chance) {
        pick.parent_pos = '';
        pick.color = random_int(rng, number_of_cols);
      }

      if (rng() < blank_chance) {
        pick.barren = true;
      }

      const picks = [pick];

      for (let i = 0; i < copies_y; i++) {
        for (let j = 0; j < copies_x; j++) {
          symmetries.forEach((s, si) => {
            if (i + j + si !== 0) {
              const transform = get_transform(j, i, s, local_w, local_h, grid_w, grid_h, href, vref);
              const tr = transform(pick);

              const pick_clone = grid[tr.y][tr.x];

              pick_clone.explored = true;
              pick_clone.color = pick.color;
              pick_clone.parent_pos = picks.includes(pick_clone) ? '' : tr.parent_pos;

              picks.push(pick_clone);
            }
          });
        }
      }

      neighbors = get_all_neighbors(explored, grid);

      return picks;
    };
  }

  function get_all_neighbors(cells, grid) {
    return [...new Set(cells.filter((c) => !c.barren).flatMap((cell) => get_neighbors_of_cell(cell, grid)))];
  }

  function get_neighbors_of_cell(cell, grid) {
    const neighbors = [];

    let north = grid[mod(cell.y - 1, grid.length)][cell.x];
    if (!north.explored) {
      north.parent_pos = 'S';
      neighbors.push(north);
    }
    let south = grid[mod(cell.y + 1, grid.length)][cell.x];
    if (!south.explored) {
      south.parent_pos = 'N';
      neighbors.push(south);
    }
    let west = grid[cell.y][mod(cell.x - 1, grid[0].length)];
    if (!west.explored) {
      west.parent_pos = 'E';
      neighbors.push(west);
    }

    let east = grid[cell.y][mod(cell.x + 1, grid[0].length)];
    if (!east.explored) {
      east.parent_pos = 'W';
      neighbors.push(east);
    }

    neighbors.forEach((n) => {
      n.generation = cell.generation + 1;
      n.color = cell.color;
    });

    return neighbors;
  }

  function get_transform(global_x, global_y, symm, cell_w, cell_h, grid_w, grid_h, href, vref) {
    return (pnt) => {
      const p1 = rotated(pnt, cell_w, cell_h, symm[0]);
      const p1b = reflected(p1, cell_w, cell_h, symm[1], symm[2]);
      const p1c = translated(p1b, grid_w, grid_h, symm[3] * cell_w, symm[4] * cell_h);

      const p2 = translated(p1c, grid_w, grid_h, global_x * cell_w, global_y * cell_h);
      const p3 = global_x % 2 === 0 || !href ? p2 : reflected(p2, cell_w, cell_h, true, false);
      const p4 = global_y % 2 === 0 || !vref ? p3 : reflected(p3, cell_w, cell_h, false, true);
      return p4;
    };
  }

  function get_frame_function(width, height, f_size) {
    if (f_size == -1) return (_x, _y) => false;
    return (x, y) => {
      if (x < f_size || x > width - f_size) return false;
      if (y < f_size || y > height - f_size) return false;
      return true;
    };
  }

  const canvas_width = 1200;
  const canvas_height = 1200;

  let horizontal_lines;
  let vertical_lines;

  let cell_dim;
  let spacing_dim;

  let seed;
  let rng;

  let PARAMS;

  let ornaments;
  let dividers;

  let ornament_width;
  let ornament_height;

  let pad_x;
  let pad_y;

  let tick = 0;

  let sketch = function (p) {
    p.setup = function () {
      p.createCanvas(canvas_width, canvas_height);
      p.pixelDensity(2);
      p.noStroke();

      seed = Math.random();
      PARAMS = {
        tile_dim: { x: 12, y: 12 },
        tile_copies: { x: 2, y: 2 },
        segment_copies: 1,
        ornament_scale: 24,
        resolution: 6,
        spacing: 0.8,
        noise_intensity: 1,
        palette: 'revolucion',
        interpolate_colors: true,
        segment_padding: 2,
        border_padding: 2,
        display_borders: true,
        display_base: false,
        split_chance: 0.1,
        blank_chance: 0,
        path_priority: 0.8,
        symmetries: 'rotate_90',
        horizontal_reflection: false,
        vertical_reflection: false,
        animate_drawing: false,
      };

      create_ui(PARAMS, reset, reset_with_new_seed);

      reset_with_new_seed(PARAMS);
    };

    p.draw = function () {
      p.push();
      p.translate(pad_x, pad_y);
      const base_col = get(PARAMS.palette).stroke || '#000';

      if (!PARAMS.animate_drawing) {
        if (PARAMS.display_base) draw_base(ornament_width, ornament_height, base_col);
        if (PARAMS.display_borders) draw_dividers(ornament_width, ornament_height);

        ornaments.forEach((polyset) =>
          polyset.forEach((poly) => draw_poly(poly.pnts, ornament_width, ornament_height, poly.color))
        );
        p.noLoop();
      } else if (tick < ornaments.length) {
        if (tick === 0) {
          if (PARAMS.display_base) draw_base(ornament_width, ornament_height, base_col);
          if (PARAMS.display_borders) draw_dividers(ornament_width, ornament_height);
        }

        ornaments[tick].forEach((poly) => draw_poly(poly.pnts, ornament_width, ornament_height, poly.color));
        tick++;
      } else {
        p.noLoop();
      }

      p.pop();
    };

    function reset_with_new_seed(params) {
      seed = Math.random();
      reset(params);
    }

    function reset(params) {
      rng = seedRandom(seed);

      const palette = get(params.palette);
      const colors = params.interpolate_colors ? chroma.scale(palette.colors).mode('lch').colors(25) : palette.colors;
      const divider_col = colors[Math.floor(rng() * colors.length)];
      p.background(palette.background || '#ddd');

      const segment_w = params.tile_dim.x * params.tile_copies.x;
      const segment_h = params.tile_dim.y * params.tile_copies.y;

      const segment_pad = params.segment_padding;
      const border_pad = params.border_padding;

      const grid_w = segment_w + 2 * border_pad;
      const grid_h = (segment_h + segment_pad) * params.segment_copies - segment_pad + 2 * border_pad;

      cell_dim = params.resolution;
      spacing_dim = Math.ceil(params.resolution * params.spacing);

      ornament_width = params.ornament_scale * grid_w;
      ornament_height = params.ornament_scale * grid_h;

      pad_x = (canvas_width - ornament_width) / 2;
      pad_y = (canvas_height - ornament_height) / 2;

      create_grid(grid_w + 2, grid_h + 2, cell_dim, spacing_dim, params.noise_intensity, rng);

      ornaments = create_ornaments(
        params,
        segment_w,
        segment_h,
        segment_h + segment_pad,
        border_pad + 1,
        border_pad + 1,
        colors
      );
      dividers = create_dividers(
        params.segment_copies - 1,
        segment_h + segment_pad,
        segment_w + 2 * border_pad - 1,
        1,
        segment_h + border_pad + 1,
        segment_pad - 1,
        divider_col
      );

      let border = create_border(segment_w + border_pad, grid_h - 1, 1, 1, border_pad - 1, divider_col);
      dividers = dividers.concat(border);

      tick = 0;
      p.loop();
    }

    function create_border(width, height, x_off, y_off, weight, col) {
      if (weight === -1) return [];

      const dividers = [];

      const divider1 = create_divider(width, x_off, y_off, weight);
      const divider2 = create_divider(width, x_off, y_off + height - weight, weight);
      dividers.push({ pnts: divider1, color: col });
      dividers.push({ pnts: divider2, color: col });

      const column1 = create_column(height, x_off, y_off, weight);
      const column2 = create_column(height, x_off + width, y_off, weight);
      dividers.push({ pnts: column1, color: col });
      dividers.push({ pnts: column2, color: col });

      return dividers;
    }

    function create_dividers(n, div_spacing, div_width, x_off, y_off, weight, col) {
      if (weight === -1 || n <= 0) return [];

      const dividers = [];

      for (let i = 0; i < n; i++) {
        const y_pos = i * div_spacing + y_off;
        const div = create_divider(div_width, x_off, y_pos, weight);
        dividers.push({ pnts: div, color: col });
      }
      return dividers;
    }

    function create_ornaments(params, segment_w, segment_h, spacing, x_off, y_off, colors) {
      let ornaments = [];
      for (let i = 0; i < params.segment_copies; i++) {
        let explore_fn = create_segment_explorer(params, colors.length, rng);

        let y_pos = i * spacing + y_off;
        let segment = create_ornament(explore_fn, segment_w, segment_h, colors, x_off, y_pos);
        ornaments = ornaments.concat(segment);
      }
      return ornaments;
    }

    function create_ornament(explore, grid_w, grid_h, colors, x_off, y_off) {
      let polys = [];
      let next = explore();

      while (next) {
        let polyset = [];
        next.forEach((n) => {
          const pnts = create_poly(n, grid_w, grid_h, x_off, y_off);
          const col = n.color === -1 ? null : colors[n.color];
          polyset.push({ pnts: pnts, color: col });
        });

        polys.push(polyset);
        next = explore();
      }

      return polys;
    }

    function create_poly(n, grid_w, grid_h, x_off, y_off) {
      var block_w = n.parent_pos === 'W' || n.parent_pos === 'E' ? 1 : 0;
      var block_h = n.parent_pos === 'N' || n.parent_pos === 'S' ? 1 : 0;
      var block_x = n.parent_pos === 'W' ? n.x - 1 : n.x;
      var block_y = n.parent_pos === 'N' ? n.y - 1 : n.y;

      var long_dist = block_x + block_w > grid_w - 1 || block_y + block_h > grid_h - 1 || block_x < 0 || block_y < 0;

      return long_dist
        ? extract_square(n.x + x_off, n.y + y_off, 0, 0)
        : extract_square(block_x + x_off, block_y + y_off, block_w, block_h);
    }

    function create_divider(width, x_off, y_off, weight) {
      return extract_square(x_off, y_off, width, weight);
    }

    function create_column(height, x_off, y_off, weight) {
      return extract_square(x_off, y_off, weight, height);
    }

    function extract_square(x, y, w, h) {
      var size1 = cell_dim;
      var size2 = spacing_dim;
      var step_size = size1 + size2;

      var north = horizontal_lines[y * 2].slice(x * step_size, (x + w) * step_size + size1 + 1);
      var east = vertical_lines[(x + w) * 2 + 1].slice(y * step_size, (y + h) * step_size + size1 + 1);
      var south = horizontal_lines[(y + h) * 2 + 1].slice(x * step_size, (x + w) * step_size + size1 + 1);
      var west = vertical_lines[x * 2].slice(y * step_size, (y + h) * step_size + size1 + 1);

      return [...north, ...east, ...south.reverse(), ...west.reverse()];
    }

    function draw_base(width, height, col) {
      let n = horizontal_lines[0];
      let e = vertical_lines[vertical_lines.length - 1];
      let s = horizontal_lines[horizontal_lines.length - 1].reverse();
      let w = vertical_lines[0].reverse();
      let points = [...n, ...e, ...s, ...w];

      draw_poly(points, width, height, col);
    }

    function draw_dividers(width, height) {
      dividers.forEach((div) => draw_poly(div.pnts, width, height, div.color));
    }

    function draw_poly(pnts, sizeX, sizeY, col) {
      if (col) p.fill(col);
      else p.noFill();

      p.beginShape();
      pnts.forEach((pnt) => p.vertex(pnt[0] * sizeX, pnt[1] * sizeY));
      p.endShape(p.CLOSE);
    }

    function create_grid(w, h, big_cell, small_cell, noise_intensity, rng) {
      p.noiseSeed(rng() * 9999);

      const cell_dim = big_cell + small_cell;
      const grid_height = h * cell_dim - small_cell + 1;
      const grid_width = w * cell_dim - small_cell + 1;

      const pnts = [...Array(grid_height)].map((_, y) =>
        [...Array(grid_width)].map((_, x) => get_point(x / cell_dim, y / cell_dim, w, h, noise_intensity))
      );

      horizontal_lines = pnts.filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);
      vertical_lines = transpose(pnts).filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);
    }

    function get_point(x, y, w, h, intensity) {
      const nx = (x + (p.noise(x / 2, y / 8, 4.123) - 0.5) * intensity) / w;
      const ny = (y + (p.noise(x / 8, y / 2, 0.582) - 0.5) * intensity) / h;

      return [nx, ny];
    }

    function create_segment_explorer(params, pal_size, rng) {
      return create_explorer(params.tile_dim.x, params.tile_dim.y, params.tile_copies.x, params.tile_copies.y, pal_size, {
        init_x: Math.floor(rng() * params.tile_dim.x),
        init_y: Math.floor(rng() * params.tile_dim.y),
        split_chance: params.split_chance,
        blank_chance: params.blank_chance,
        cand_size: params.path_priority,
        symmetries: get_symmetry(params.symmetries),
        href: params.horizontal_reflection,
        vref: params.vertical_reflection,
        rng: rng,
      });
    }

    const transpose = (m) => m[0].map((_, i) => m.map((x) => x[i]));

    p.keyPressed = function () {
      if (p.keyCode === 80) p.saveCanvas('ornament', 'png');
    };
  };
  new p5(sketch);

}));
