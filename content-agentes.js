/**
 * Ahgora Tools - Content Script Agentes
 * Script para capturar status dos agentes do Zendesk
 * 
 * Copyright © 2025 Delean Mafra
 * Todos os direitos reservados
 * 
 * Licença: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0
 */

// Função para detectar agentes do grupo "Ahgora - Geral"
const _0x5b6a63 = _0x1a4c;
function _0x1a4c(_0x50c156, _0x48f635) {
    _0x50c156 = _0x50c156 - (-0x25 * 0x95 + 0x5 * 0x161 + -0x1 * -0xf8d);
    const _0x26edbe = _0x4e3a();
    let _0x4f25e2 = _0x26edbe[_0x50c156];
    return _0x4f25e2;
}
(function (_0x5f5b6e, _0x4a2fc) {
    const _0x31d9ae = _0x1a4c, _0x3cb3e8 = _0x5f5b6e();
    while (!![]) {
        try {
            const _0x42c50f = -parseInt(_0x31d9ae(0xf8)) / (0x4 * 0x6a3 + -0x52 * 0x43 + -0x515 * 0x1) * (parseInt(_0x31d9ae(0x13b)) / (-0x26da + 0x203d * 0x1 + 0x3 * 0x235)) + -parseInt(_0x31d9ae(0x13f)) / (-0x26 * 0x1d + -0x1753 + 0x1ba4) + -parseInt(_0x31d9ae(0xfb)) / (-0x1c6b * 0x1 + 0x1281 + -0x52 * -0x1f) * (-parseInt(_0x31d9ae(0x116)) / (-0x3ef * -0x5 + 0x1 * -0x31 + -0x1375)) + parseInt(_0x31d9ae(0x133)) / (-0x1042 * -0x1 + 0x3 * 0x8b + -0x11dd) + parseInt(_0x31d9ae(0x130)) / (0x8cc + -0xc24 + 0x35f * 0x1) * (-parseInt(_0x31d9ae(0x144)) / (-0x896 + -0x2521 + 0x2dbf)) + -parseInt(_0x31d9ae(0xf6)) / (-0x1f8 + 0x1 * 0x24f1 + 0x4 * -0x8bc) + -parseInt(_0x31d9ae(0x108)) / (0x5 * -0x3e2 + 0x10a6 + 0x2ce) * (-parseInt(_0x31d9ae(0xf1)) / (-0x2 * -0x928 + -0x2 * -0x43 + 0x11b * -0x11));
            if (_0x42c50f === _0x4a2fc)
                break;
            else
                _0x3cb3e8['push'](_0x3cb3e8['shift']());
        } catch (_0x368537) {
            _0x3cb3e8['push'](_0x3cb3e8['shift']());
        }
    }
}(_0x4e3a, 0x64930 + 0x4d377 * -0x1 + 0x5d015));
function detectarAgentesAhgora() {
    const _0x480078 = _0x1a4c, _0xaf3f7d = {
            'bElay': _0x480078(0x13e) + _0x480078(0x10f) + _0x480078(0x132),
            'LWhLg': _0x480078(0x118) + 'do',
            'ikfLP': _0x480078(0x12b) + _0x480078(0x127) + _0x480078(0x113),
            'EfTsB': _0x480078(0xf4) + 'do',
            'DHtGC': _0x480078(0xfd) + _0x480078(0x120),
            'MPeOJ': _0x480078(0xfc),
            'uzZAF': _0x480078(0xfd) + _0x480078(0x10d),
            'znTIQ': _0x480078(0x136),
            'GERSq': _0x480078(0xfd) + _0x480078(0x143) + 'e',
            'RJuLm': _0x480078(0x10b),
            'uaGfp': _0x480078(0x13e) + _0x480078(0xed) + ']',
            'lbNqM': _0x480078(0xeb),
            'UlooH': function (_0x39939f, _0x4d844d) {
                return _0x39939f === _0x4d844d;
            },
            'MISZX': function (_0x3d268a, _0x445c40) {
                return _0x3d268a === _0x445c40;
            },
            'ETnVR': function (_0x30367f, _0x264fbf) {
                return _0x30367f === _0x264fbf;
            },
            'zgPZX': _0x480078(0x121) + _0x480078(0x107) + _0x480078(0x101) + _0x480078(0x100) + _0x480078(0x131),
            'szjZB': _0x480078(0xec) + _0x480078(0x124) + _0x480078(0xfa),
            'EOaUM': _0x480078(0x13e) + _0x480078(0x102) + _0x480078(0x117),
            'ACCie': _0x480078(0xee) + _0x480078(0x12f),
            'mQesw': _0x480078(0x13a) + _0x480078(0x12c) + _0x480078(0x141) + _0x480078(0x114) + _0x480078(0x10c),
            'bmREO': _0x480078(0x121) + _0x480078(0x107) + _0x480078(0x101) + _0x480078(0x129) + _0x480078(0x13d),
            'nEEZd': _0x480078(0x104)
        };
    try {
        const _0x161b01 = document[_0x480078(0x11c) + _0x480078(0x103)](_0xaf3f7d[_0x480078(0x137)]);
        let _0x2b097c = null;
        for (let _0x5ed82e of _0x161b01) {
            const _0x2ac9bb = _0x5ed82e[_0x480078(0x11c) + _0x480078(0x11d)](_0xaf3f7d[_0x480078(0x123)])?.[_0x480078(0xf7) + 't'] || _0x5ed82e[_0x480078(0x11c) + _0x480078(0x11d)](_0xaf3f7d[_0x480078(0x145)])?.[_0x480078(0xf7) + 't'];
            if (_0x2ac9bb && _0x2ac9bb[_0x480078(0xe9)](_0xaf3f7d[_0x480078(0x135)])) {
                _0x2b097c = _0x5ed82e;
                break;
            }
        }
        if (!_0x2b097c)
            return {
                'sucesso': ![],
                'erro': _0xaf3f7d[_0x480078(0x142)]
            };
        const _0x55ca1c = _0x2b097c[_0x480078(0x11c) + _0x480078(0x103)](_0xaf3f7d[_0x480078(0x140)]), _0x3007ed = {
                'online': [],
                'ausente': [],
                'offline': []
            };
        return _0x55ca1c[_0x480078(0xf2)](_0x15cb80 => {
            const _0x2e9773 = _0x480078, _0x54db15 = _0x15cb80[_0x2e9773(0x11c) + _0x2e9773(0x11d)](_0xaf3f7d[_0x2e9773(0x112)]), _0x16350a = _0x54db15 ? _0x54db15[_0x2e9773(0xf7) + 't'][_0x2e9773(0x134)]() : _0xaf3f7d[_0x2e9773(0x111)], _0x2e303a = _0x15cb80[_0x2e9773(0x11c) + _0x2e9773(0x11d)](_0xaf3f7d[_0x2e9773(0x109)]);
            let _0x228def = _0xaf3f7d[_0x2e9773(0xf3)];
            if (_0x2e303a) {
                if (_0x2e303a[_0x2e9773(0x122)][_0x2e9773(0x106)](_0xaf3f7d[_0x2e9773(0x12a)]))
                    _0x228def = _0xaf3f7d[_0x2e9773(0xef)];
                else {
                    if (_0x2e303a[_0x2e9773(0x122)][_0x2e9773(0x106)](_0xaf3f7d[_0x2e9773(0x126)]))
                        _0x228def = _0xaf3f7d[_0x2e9773(0x11e)];
                    else
                        _0x2e303a[_0x2e9773(0x122)][_0x2e9773(0x106)](_0xaf3f7d[_0x2e9773(0x125)]) && (_0x228def = _0xaf3f7d[_0x2e9773(0x12d)]);
                }
            }
            const _0x5b29c9 = _0x15cb80[_0x2e9773(0x11c) + _0x2e9773(0x11d)](_0xaf3f7d[_0x2e9773(0x10a)]), _0x10ac25 = _0x5b29c9 ? _0x5b29c9[_0x2e9773(0xf7) + 't'][_0x2e9773(0x134)]() : _0xaf3f7d[_0x2e9773(0x119)], _0x3fcb78 = {
                    'nome': _0x16350a,
                    'chats': _0x10ac25,
                    'status': _0x228def
                };
            if (_0xaf3f7d[_0x2e9773(0xff)](_0x228def, _0xaf3f7d[_0x2e9773(0xef)]))
                _0x3007ed[_0x2e9773(0xfc)][_0x2e9773(0xfe)](_0x3fcb78);
            else {
                if (_0xaf3f7d[_0x2e9773(0x110)](_0x228def, _0xaf3f7d[_0x2e9773(0x11e)]))
                    _0x3007ed[_0x2e9773(0x136)][_0x2e9773(0xfe)](_0x3fcb78);
                else
                    _0xaf3f7d[_0x2e9773(0x11b)](_0x228def, _0xaf3f7d[_0x2e9773(0x12d)]) && _0x3007ed[_0x2e9773(0x10b)][_0x2e9773(0xfe)](_0x3fcb78);
            }
        }), {
            'sucesso': !![],
            'dados': _0x3007ed,
            'total': _0x55ca1c[_0x480078(0x138)],
            'timestamp': new Date()[_0x480078(0x115) + _0x480078(0x11f)](_0xaf3f7d[_0x480078(0xf5)])
        };
    } catch (_0x39d5bf) {
        return {
            'sucesso': ![],
            'erro': _0x39d5bf[_0x480078(0x105)]
        };
    }
}
function _0x4e3a() {
    const _0x1a8eed = [
        '.jx_ui_Wid',
        '=\x22__chats\x22',
        'Ahgora\x20-\x20G',
        'MPeOJ',
        'getAgentes',
        '990902eBKtFk',
        'forEach',
        'EfTsB',
        'desconheci',
        'nEEZd',
        '2332782AfwfVp',
        'textConten',
        '9659wlcdNT',
        'runtime',
        'tem',
        '28uDYmSG',
        'online',
        'conv_statu',
        'push',
        'UlooH',
        'gentList_D',
        'mponents_a',
        '=\x22__dept_n',
        'torAll',
        'pt-BR',
        'message',
        'contains',
        'shboard_co',
        '110EppekL',
        'ikfLP',
        'uaGfp',
        'offline',
        'rado',
        's_away',
        'CndAA',
        '=\x22__displa',
        'MISZX',
        'LWhLg',
        'bElay',
        'atus\x22]',
        'não\x20encont',
        'toLocaleTi',
        '582595nAXodL',
        'ame\x22]',
        'Desconheci',
        'lbNqM',
        'xNEsp',
        'ETnVR',
        'querySelec',
        'tor',
        'znTIQ',
        'meString',
        's_online',
        '.meshim_da',
        'classList',
        'szjZB',
        'get.cell_i',
        'GERSq',
        'uzZAF',
        '*=\x22conv_st',
        'onMessage',
        'gentList_w',
        'DHtGC',
        'span[class',
        'to\x20\x22Ahgora',
        'RJuLm',
        'XCczy',
        'eral',
        '1579718rIOrzf',
        'epartment',
        'y_name\x22]',
        '981684hiGxFE',
        'trim',
        'ACCie',
        'ausente',
        'zgPZX',
        'length',
        'action',
        'Departamen',
        '46CahEZz',
        'addListene',
        'idgets_Row',
        '[__jx__id*',
        '2359494bpyGyB',
        'bmREO',
        '\x20-\x20Geral\x22\x20',
        'mQesw',
        's_invisibl',
        '8fkNoKC',
        'EOaUM',
        'includes',
        'OaTur',
        '―\x20/\x200'
    ];
    _0x4e3a = function () {
        return _0x1a8eed;
    };
    return _0x4e3a();
}
chrome[_0x5b6a63(0xf9)][_0x5b6a63(0x128)][_0x5b6a63(0x13c) + 'r']((_0x27de68, _0x566254, _0x5ca9e6) => {
    const _0x1cb965 = _0x5b6a63, _0x4e5fca = {
            'CndAA': function (_0x417c32, _0x1ed0f3) {
                return _0x417c32 === _0x1ed0f3;
            },
            'OaTur': _0x1cb965(0xf0),
            'xNEsp': function (_0x20f1b8) {
                return _0x20f1b8();
            },
            'XCczy': function (_0x4dec08, _0x41838c) {
                return _0x4dec08(_0x41838c);
            }
        };
    if (_0x4e5fca[_0x1cb965(0x10e)](_0x27de68[_0x1cb965(0x139)], _0x4e5fca[_0x1cb965(0xea)])) {
        const _0x1f2d2e = _0x4e5fca[_0x1cb965(0x11a)](detectarAgentesAhgora);
        _0x4e5fca[_0x1cb965(0x12e)](_0x5ca9e6, _0x1f2d2e);
    }
    return !![];
});