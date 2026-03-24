/*
 * Ahgora Tools - Content Script para Zendesk
 * 
 * Copyright © 2025 Delean Mafra
 * Todos os direitos reservados
 * 
 * Licença: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * http://delean-mafra.github.io/Ahtools/CC_BY_NC_4.0
 */

// Script para clicar automaticamente no botão de puxar chat do Zendesk

const _0x2d01e2 = _0xa4b3;
(function (_0x45d3d2, _0x562ba4) {
    const _0x1c8ec2 = _0xa4b3, _0x1f8c6f = _0x45d3d2();
    while (!![]) {
        try {
            const _0x1487d8 = -parseInt(_0x1c8ec2(0x17a)) / (0x1 * -0x86d + 0xae5 + -0x277 * 0x1) + parseInt(_0x1c8ec2(0x252)) / (-0x69 * -0xd + 0x455 * -0x9 + 0x21aa) + -parseInt(_0x1c8ec2(0x448)) / (-0x751 * 0x1 + -0x2442 + 0x2b96) + -parseInt(_0x1c8ec2(0x1b8)) / (-0xce3 + 0x21 * 0xc1 + -0xbfa) * (-parseInt(_0x1c8ec2(0x243)) / (0x2533 + -0x4 * 0x203 + -0x1d22)) + parseInt(_0x1c8ec2(0x22a)) / (0x11 * 0x23f + -0x194 * 0x7 + 0x1b1d * -0x1) * (parseInt(_0x1c8ec2(0x34f)) / (-0x115 * -0x1e + -0x144b + -0xc24)) + parseInt(_0x1c8ec2(0x1e7)) / (-0x9b9 + -0xbe2 * 0x1 + 0x15a3 * 0x1) + -parseInt(_0x1c8ec2(0x21d)) / (-0x563 * 0x5 + -0x5a6 * -0x5 + 0x146 * -0x1);
            if (_0x1487d8 === _0x562ba4)
                break;
            else
                _0x1f8c6f['push'](_0x1f8c6f['shift']());
        } catch (_0xe26c5) {
            _0x1f8c6f['push'](_0x1f8c6f['shift']());
        }
    }
}(_0x2c1c, 0x3 * -0x4669d + 0x12ba82 * 0x1 + 0x10e39 * 0x9));
const INTERVALO_VERIFICACAO = 0x11 * -0xef + -0x13c5 + 0x6 * 0x73e;
let intervaloClick = (0x30 * 0x4a + 0x902 + -0x16dd) * (0x19 * 0x55 + 0x27f * 0xc + 0x1 * -0x2605) * (0x1492 + -0x903 + 0x3 * -0x28d), limiteChats = -0x623 + 0x23a3 + -0x1d7d, notificacoesAtivas = !![], ultimoClick = null, intervaloId = null, tempoOnlineSegundos = 0x103 * -0xb + -0xee5 * 0x1 + 0xd03 * 0x2, statusAnterior = ![], intervaloTempoOnline = null, confirmarCliqueManual = !![], copiarTicketListaAoClicar = ![];
function removerNotificacoesZendesk() {
    const _0x413603 = _0xa4b3, _0x576992 = {
            'nULKA': _0x413603(0x2bf) + _0x413603(0x2d6) + _0x413603(0x168) + _0x413603(0x35f),
            'zxsMo': _0x413603(0x362) + _0x413603(0x203),
            'FNifA': _0x413603(0x1b4) + 'ne',
            'OgLRD': _0x413603(0x366) + _0x413603(0x357),
            'QFaLh': _0x413603(0x2ff) + _0x413603(0x2ba) + _0x413603(0x24f) + _0x413603(0x2f7) + _0x413603(0x16b) + _0x413603(0x31d) + _0x413603(0x373) + _0x413603(0x2b9),
            'kyick': _0x413603(0x43a) + _0x413603(0x37f) + _0x413603(0x29b) + _0x413603(0x1bb) + _0x413603(0x272),
            'KRIXY': _0x413603(0x3d4) + _0x413603(0x1f1) + _0x413603(0x279) + _0x413603(0x155) + _0x413603(0x222)
        }, _0x303417 = [
            _0x576992[_0x413603(0x411)],
            _0x576992[_0x413603(0x400)]
        ];
    _0x303417[_0x413603(0x225)](_0x150b22 => {
        const _0x207c20 = _0x413603, _0x4d1c10 = {
                'NBJVq': _0x576992[_0x207c20(0x32d)],
                'PRtsS': _0x576992[_0x207c20(0x3d0)],
                'rZUEm': _0x576992[_0x207c20(0x2ee)],
                'ImegG': _0x576992[_0x207c20(0x2dd)],
                'aJCfC': _0x576992[_0x207c20(0x2fa)]
            }, _0x408368 = document[_0x207c20(0x14d) + _0x207c20(0x3ed)](_0x150b22);
        _0x408368[_0x207c20(0x225)](_0x3b5632 => {
            const _0x563702 = _0x207c20, _0x33d2ac = _0x3b5632[_0x563702(0x14d) + _0x563702(0x287)](_0x4d1c10[_0x563702(0x22c)]);
            _0x33d2ac && (_0x33d2ac[_0x563702(0x1f4) + 't'][_0x563702(0x1a7)](_0x4d1c10[_0x563702(0x449)]) || _0x33d2ac[_0x563702(0x1f4) + 't'][_0x563702(0x1a7)](_0x4d1c10[_0x563702(0x3fd)]) || _0x33d2ac[_0x563702(0x1f4) + 't'][_0x563702(0x1a7)](_0x4d1c10[_0x563702(0x2c9)])) && (_0x3b5632[_0x563702(0x183)](), console[_0x563702(0x28a)](_0x4d1c10[_0x563702(0x24d)]));
        });
    });
}
function iniciarObserverNotificacoes() {
    const _0x5d95e6 = _0xa4b3, _0x2f7f90 = {
            'QSZfE': function (_0x28be87) {
                return _0x28be87();
            },
            'iPQMf': function (_0x5009ea) {
                return _0x5009ea();
            },
            'KeXxx': _0x5d95e6(0x2ff) + _0x5d95e6(0x2ba) + _0x5d95e6(0x20a) + _0x5d95e6(0x446) + _0x5d95e6(0x25d) + _0x5d95e6(0x1e4)
        }, _0x224530 = new MutationObserver(_0x384f1f => {
            const _0x4b042a = _0x5d95e6;
            _0x384f1f[_0x4b042a(0x225)](() => {
                const _0x423297 = _0x4b042a;
                _0x2f7f90[_0x423297(0x1f0)](removerNotificacoesZendesk);
            });
        });
    _0x224530[_0x5d95e6(0x19c)](document[_0x5d95e6(0x335)], {
        'childList': !![],
        'subtree': !![]
    }), _0x2f7f90[_0x5d95e6(0x256)](removerNotificacoesZendesk), console[_0x5d95e6(0x28a)](_0x2f7f90[_0x5d95e6(0x3da)]);
}
function interceptarBotaoNaFila() {
    const _0x13c7a7 = _0xa4b3, _0x5439c1 = {
            'rZpPg': _0x13c7a7(0x283) + _0x13c7a7(0x249) + _0x13c7a7(0x41b) + _0x13c7a7(0x35c) + _0x13c7a7(0x3d2) + _0x13c7a7(0x283) + _0x13c7a7(0x1ac) + _0x13c7a7(0x41e) + _0x13c7a7(0x26e) + _0x13c7a7(0x2de),
            'vOfHb': function (_0x5e8ad5, _0x1b7bac) {
                return _0x5e8ad5(_0x1b7bac);
            },
            'MHgQF': _0x13c7a7(0x36b),
            'geLeT': _0x13c7a7(0x2ff) + _0x13c7a7(0x2ba) + _0x13c7a7(0x24c) + _0x13c7a7(0x280) + _0x13c7a7(0x2b2) + _0x13c7a7(0x377) + _0x13c7a7(0x38e)
        };
    document[_0x13c7a7(0x245) + _0x13c7a7(0x3f6)](_0x5439c1[_0x13c7a7(0x370)], function (_0x4421ad) {
        const _0x14856c = _0x13c7a7;
        if (!confirmarCliqueManual)
            return;
        const _0x39fd5 = _0x4421ad[_0x14856c(0x173)], _0x3effac = _0x39fd5[_0x14856c(0x257)](_0x5439c1[_0x14856c(0x198)]);
        _0x3effac && (!_0x3effac[_0x14856c(0x17b)][_0x14856c(0x2fd) + _0x14856c(0x3e5)] && (_0x4421ad[_0x14856c(0x219) + _0x14856c(0x430)](), _0x4421ad[_0x14856c(0x2f4) + _0x14856c(0x17c)](), _0x4421ad[_0x14856c(0x1f3) + _0x14856c(0x317) + _0x14856c(0x18d)](), _0x5439c1[_0x14856c(0x1d0)](mostrarDialogoConfirmacao, _0x3effac)));
    }, !![]), console[_0x13c7a7(0x28a)](_0x5439c1[_0x13c7a7(0x19f)]);
}
function mostrarDialogoConfirmacao(_0xd1d97d) {
    const _0x430b2f = _0xa4b3, _0x3b4c5e = {
            'GCuPL': function (_0x14c132, _0xe6d30b, _0x20335a) {
                return _0x14c132(_0xe6d30b, _0x20335a);
            },
            'iHChd': _0x430b2f(0x1c6) + _0x430b2f(0x2ce),
            'QiCgT': _0x430b2f(0x3a6),
            'GCdeW': _0x430b2f(0x21e),
            'PtbCj': _0x430b2f(0x180),
            'tEyRS': _0x430b2f(0x1e2) + _0x430b2f(0x43e) + _0x430b2f(0x33b),
            'imrXJ': _0x430b2f(0x177),
            'fpueF': function (_0x33469d, _0x533295) {
                return _0x33469d === _0x533295;
            },
            'TaiRr': _0x430b2f(0x1a4) + _0x430b2f(0x2c5) + _0x430b2f(0x38b),
            'lhlFP': _0x430b2f(0x14f),
            'NshMo': _0x430b2f(0x29c) + _0x430b2f(0x28b),
            'UcBJC': _0x430b2f(0x36b),
            'JUuKr': _0x430b2f(0x29c) + _0x430b2f(0x2e4)
        }, _0x3224c6 = document[_0x430b2f(0x1c5) + _0x430b2f(0x24a)](_0x3b4c5e[_0x430b2f(0x418)]);
    if (_0x3224c6)
        _0x3224c6[_0x430b2f(0x183)]();
    const _0x4ae449 = document[_0x430b2f(0x313) + _0x430b2f(0x2eb)](_0x3b4c5e[_0x430b2f(0x216)]);
    _0x4ae449['id'] = _0x3b4c5e[_0x430b2f(0x418)], _0x4ae449[_0x430b2f(0x433)][_0x430b2f(0x2ab)] = _0x430b2f(0x1d3) + _0x430b2f(0x427) + _0x430b2f(0x33a) + _0x430b2f(0x3b4) + _0x430b2f(0x20c) + _0x430b2f(0x310) + _0x430b2f(0x3ad) + _0x430b2f(0x265) + _0x430b2f(0x3e7) + _0x430b2f(0x210) + _0x430b2f(0x20c) + _0x430b2f(0x251) + _0x430b2f(0x21f) + _0x430b2f(0x30a) + _0x430b2f(0x20c) + _0x430b2f(0x32b) + _0x430b2f(0x440) + _0x430b2f(0x244) + _0x430b2f(0x3fb) + _0x430b2f(0x2d1) + _0x430b2f(0x1ee) + _0x430b2f(0x1fb) + _0x430b2f(0x2d7) + _0x430b2f(0x1d6) + _0x430b2f(0x16a) + _0x430b2f(0x151) + _0x430b2f(0x378) + _0x430b2f(0x3f5) + _0x430b2f(0x270) + _0x430b2f(0x3fe);
    const _0x19098c = document[_0x430b2f(0x313) + _0x430b2f(0x2eb)](_0x3b4c5e[_0x430b2f(0x216)]);
    _0x19098c[_0x430b2f(0x433)][_0x430b2f(0x2ab)] = _0x430b2f(0x36e) + _0x430b2f(0x2ae) + _0x430b2f(0x30f) + _0x430b2f(0x442) + _0x430b2f(0x367) + _0x430b2f(0x36e) + _0x430b2f(0x160) + _0x430b2f(0x414) + _0x430b2f(0x158) + _0x430b2f(0x3ee) + _0x430b2f(0x3c9) + _0x430b2f(0x196) + _0x430b2f(0x182) + _0x430b2f(0x2b1) + _0x430b2f(0x39f) + _0x430b2f(0x3f1) + _0x430b2f(0x172) + _0x430b2f(0x3ea) + _0x430b2f(0x396), _0x19098c[_0x430b2f(0x274)] = _0x430b2f(0x422) + _0x430b2f(0x23f) + _0x430b2f(0x327) + _0x430b2f(0x304) + _0x430b2f(0x28e) + _0x430b2f(0x3bd) + _0x430b2f(0x2b0) + _0x430b2f(0x1a3) + _0x430b2f(0x372) + _0x430b2f(0x3b2) + _0x430b2f(0x3c4) + _0x430b2f(0x221) + _0x430b2f(0x355) + _0x430b2f(0x178) + _0x430b2f(0x2a4) + _0x430b2f(0x1d1) + _0x430b2f(0x2d0) + _0x430b2f(0x26d) + _0x430b2f(0x197) + _0x430b2f(0x1c7) + _0x430b2f(0x351) + _0x430b2f(0x226) + _0x430b2f(0x1f7) + _0x430b2f(0x13c) + _0x430b2f(0x1ba) + _0x430b2f(0x24e) + _0x430b2f(0x28f) + _0x430b2f(0x36c) + _0x430b2f(0x204) + _0x430b2f(0x27e) + _0x430b2f(0x262) + _0x430b2f(0x413) + _0x430b2f(0x1dd) + _0x430b2f(0x2d5) + _0x430b2f(0x2f9) + _0x430b2f(0x143) + _0x430b2f(0x3c5) + _0x430b2f(0x21a) + _0x430b2f(0x3d8) + _0x430b2f(0x350) + _0x430b2f(0x1d6) + _0x430b2f(0x16a) + _0x430b2f(0x37d) + _0x430b2f(0x38f) + _0x430b2f(0x213) + _0x430b2f(0x419) + _0x430b2f(0x431) + _0x430b2f(0x3db) + _0x430b2f(0x262) + _0x430b2f(0x14c) + _0x430b2f(0x1b6) + _0x430b2f(0x447) + _0x430b2f(0x262) + _0x430b2f(0x298) + _0x430b2f(0x3ce) + _0x430b2f(0x390) + _0x430b2f(0x262) + _0x430b2f(0x35d) + _0x430b2f(0x1a1) + _0x430b2f(0x20c) + _0x430b2f(0x2d8) + _0x430b2f(0x361) + _0x430b2f(0x2f8) + _0x430b2f(0x262) + _0x430b2f(0x1ff) + _0x430b2f(0x170) + _0x430b2f(0x262) + _0x430b2f(0x190) + _0x430b2f(0x20b) + _0x430b2f(0x345) + _0x430b2f(0x262) + _0x430b2f(0x34a) + _0x430b2f(0x169) + _0x430b2f(0x262) + _0x430b2f(0x34d) + _0x430b2f(0x228) + _0x430b2f(0x438) + _0x430b2f(0x1ce) + _0x430b2f(0x15a) + _0x430b2f(0x37c) + _0x430b2f(0x1df) + _0x430b2f(0x42e) + _0x430b2f(0x2a7) + _0x430b2f(0x1dc) + _0x430b2f(0x14a) + _0x430b2f(0x262) + _0x430b2f(0x2d3) + _0x430b2f(0x18c) + _0x430b2f(0x3dc) + _0x430b2f(0x23b) + _0x430b2f(0x41d) + _0x430b2f(0x3f0) + _0x430b2f(0x23b) + _0x430b2f(0x2ae) + _0x430b2f(0x215) + _0x430b2f(0x374) + _0x430b2f(0x1cc) + _0x430b2f(0x3ca) + _0x430b2f(0x3be) + _0x430b2f(0x262) + (_0x430b2f(0x184) + _0x430b2f(0x217) + _0x430b2f(0x262) + _0x430b2f(0x1ff) + _0x430b2f(0x170) + _0x430b2f(0x262) + _0x430b2f(0x190) + _0x430b2f(0x20b) + _0x430b2f(0x345) + _0x430b2f(0x262) + _0x430b2f(0x34a) + _0x430b2f(0x169) + _0x430b2f(0x262) + _0x430b2f(0x34d) + _0x430b2f(0x228) + _0x430b2f(0x438) + _0x430b2f(0x340) + _0x430b2f(0x1c2) + _0x430b2f(0x42f) + _0x430b2f(0x181) + _0x430b2f(0x1d9)), _0x4ae449[_0x430b2f(0x231) + 'd'](_0x19098c), document[_0x430b2f(0x335)][_0x430b2f(0x231) + 'd'](_0x4ae449), document[_0x430b2f(0x1c5) + _0x430b2f(0x24a)](_0x3b4c5e[_0x430b2f(0x266)])[_0x430b2f(0x245) + _0x430b2f(0x3f6)](_0x3b4c5e[_0x430b2f(0x31a)], () => {
        const _0x31bc1d = _0x430b2f;
        _0x4ae449[_0x31bc1d(0x183)](), _0x3b4c5e[_0x31bc1d(0x332)](mostrarNotificacao, _0x3b4c5e[_0x31bc1d(0x260)], _0x3b4c5e[_0x31bc1d(0x3f4)]);
    }), document[_0x430b2f(0x1c5) + _0x430b2f(0x24a)](_0x3b4c5e[_0x430b2f(0x321)])[_0x430b2f(0x245) + _0x430b2f(0x3f6)](_0x3b4c5e[_0x430b2f(0x31a)], () => {
        const _0x1841d4 = _0x430b2f, _0x30c8b4 = _0x3b4c5e[_0x1841d4(0x2f1)][_0x1841d4(0x428)]('|');
        let _0x9dcf8a = 0x906 + -0x1 * -0x21f7 + -0x2afd;
        while (!![]) {
            switch (_0x30c8b4[_0x9dcf8a++]) {
            case '0':
                _0xd1d97d[_0x1841d4(0x17b)][_0x1841d4(0x2fd) + _0x1841d4(0x3e5)] = _0x3b4c5e[_0x1841d4(0x31e)];
                continue;
            case '1':
                _0x4ae449[_0x1841d4(0x183)]();
                continue;
            case '2':
                _0x3b4c5e[_0x1841d4(0x332)](mostrarNotificacao, _0x3b4c5e[_0x1841d4(0x2fc)], _0x3b4c5e[_0x1841d4(0x1d5)]);
                continue;
            case '3':
                _0xd1d97d[_0x1841d4(0x36b)]();
                continue;
            case '4':
                delete _0xd1d97d[_0x1841d4(0x17b)][_0x1841d4(0x2fd) + _0x1841d4(0x3e5)];
                continue;
            }
            break;
        }
    }), _0x4ae449[_0x430b2f(0x245) + _0x430b2f(0x3f6)](_0x3b4c5e[_0x430b2f(0x31a)], _0x7311d2 => {
        const _0x20ce0c = _0x430b2f;
        _0x3b4c5e[_0x20ce0c(0x365)](_0x7311d2[_0x20ce0c(0x173)], _0x4ae449) && _0x4ae449[_0x20ce0c(0x183)]();
    });
}
function extrairNumeroTicket(_0x19f021) {
    const _0x167718 = _0xa4b3;
    if (!_0x19f021)
        return null;
    const _0x3a037f = _0x19f021[_0x167718(0x22e)]();
    if (!_0x3a037f[_0x167718(0x1a7)]('#'))
        return null;
    const _0x434c31 = _0x3a037f[_0x167718(0x1b0)](/#\s*(\d{4,})/);
    return _0x434c31 ? _0x434c31[0x25b3 + 0x13 * 0x12a + -0x3bd0] : null;
}
async function copiarTextoParaClipboard(_0x49bff7) {
    const _0x193f3b = _0xa4b3, _0x5a96cd = {
            'enClx': _0x193f3b(0x2ff) + _0x193f3b(0x2ba) + _0x193f3b(0x208) + _0x193f3b(0x209) + _0x193f3b(0x36d) + _0x193f3b(0x3e9) + _0x193f3b(0x1ea),
            'viyxR': _0x193f3b(0x35e),
            'ZmvDU': _0x193f3b(0x2a9),
            'TUlPd': _0x193f3b(0x146),
            'ifljg': _0x193f3b(0x40e),
            'GGKGF': _0x193f3b(0x3ab),
            'pjGuc': _0x193f3b(0x2ff) + _0x193f3b(0x2ba) + _0x193f3b(0x3c1) + _0x193f3b(0x30e) + _0x193f3b(0x2f6)
        };
    if (!_0x49bff7)
        return ![];
    if (navigator[_0x193f3b(0x1de)] && window[_0x193f3b(0x305) + _0x193f3b(0x37b)])
        try {
            return await navigator[_0x193f3b(0x1de)][_0x193f3b(0x394)](_0x49bff7), !![];
        } catch (_0x5f2c88) {
            console[_0x193f3b(0x347)](_0x5a96cd[_0x193f3b(0x17f)], _0x5f2c88);
        }
    try {
        const _0x5ced24 = document[_0x193f3b(0x313) + _0x193f3b(0x2eb)](_0x5a96cd[_0x193f3b(0x2fb)]);
        _0x5ced24[_0x193f3b(0x27d)] = _0x49bff7, _0x5ced24[_0x193f3b(0x30b) + 'te'](_0x5a96cd[_0x193f3b(0x15e)], ''), _0x5ced24[_0x193f3b(0x433)][_0x193f3b(0x20d)] = _0x5a96cd[_0x193f3b(0x284)], _0x5ced24[_0x193f3b(0x433)][_0x193f3b(0x2dc)] = '0', _0x5ced24[_0x193f3b(0x433)][_0x193f3b(0x161)] = _0x5a96cd[_0x193f3b(0x1e5)], document[_0x193f3b(0x335)][_0x193f3b(0x231) + 'd'](_0x5ced24), _0x5ced24[_0x193f3b(0x341)](), _0x5ced24[_0x193f3b(0x232) + _0x193f3b(0x154)](0x21ad + 0x20a0 * -0x1 + 0x10d * -0x1, _0x49bff7[_0x193f3b(0x37e)]);
        const _0x565639 = document[_0x193f3b(0x3b6) + 'd'](_0x5a96cd[_0x193f3b(0x2ea)]);
        return _0x5ced24[_0x193f3b(0x183)](), _0x565639;
    } catch (_0x1f23f8) {
        return console[_0x193f3b(0x319)](_0x5a96cd[_0x193f3b(0x237)], _0x1f23f8), ![];
    }
}
function desmarcarCheckboxesFusao() {
    const _0x35d29f = _0xa4b3, _0x55003d = {
            'DiPAI': _0x35d29f(0x43b) + _0x35d29f(0x3e4),
            'QFyyT': _0x35d29f(0x145),
            'sZUxu': _0x35d29f(0x407),
            'OeRmj': _0x35d29f(0x2ff) + _0x35d29f(0x2ba) + _0x35d29f(0x323) + _0x35d29f(0x331) + _0x35d29f(0x31c) + _0x35d29f(0x186),
            'uSyav': _0x35d29f(0x36b),
            'kxnuL': _0x35d29f(0x2cd) + _0x35d29f(0x3e4),
            'RyRuN': _0x35d29f(0x2d9),
            'JMlKL': _0x35d29f(0x2ff) + _0x35d29f(0x2ba) + _0x35d29f(0x323) + _0x35d29f(0x207) + _0x35d29f(0x3c2) + _0x35d29f(0x186),
            'JvkSa': function (_0x47510d, _0x5869e2) {
                return _0x47510d > _0x5869e2;
            }
        };
    let _0x2cff8e = -0x1 * 0x18f4 + -0x10ee + -0x3 * -0xdf6;
    const _0x491432 = document[_0x35d29f(0x1c5) + _0x35d29f(0x24a)](_0x55003d[_0x35d29f(0x33f)]);
    if (_0x491432) {
        if (_0x491432[_0x35d29f(0x1f5)]) {
            const _0x583c1f = _0x55003d[_0x35d29f(0x199)][_0x35d29f(0x428)]('|');
            let _0x3bc352 = 0x1526 + 0x1f5f + -0x1 * 0x3485;
            while (!![]) {
                switch (_0x583c1f[_0x3bc352++]) {
                case '0':
                    _0x2cff8e++;
                    continue;
                case '1':
                    _0x491432[_0x35d29f(0x32a) + _0x35d29f(0x2eb)](new Event(_0x55003d[_0x35d29f(0x19a)], { 'bubbles': !![] }));
                    continue;
                case '2':
                    console[_0x35d29f(0x28a)](_0x55003d[_0x35d29f(0x3af)]);
                    continue;
                case '3':
                    _0x491432[_0x35d29f(0x1f5)] = ![];
                    continue;
                case '4':
                    _0x491432[_0x35d29f(0x32a) + _0x35d29f(0x2eb)](new Event(_0x55003d[_0x35d29f(0x200)], { 'bubbles': !![] }));
                    continue;
                }
                break;
            }
        }
    }
    const _0x34bb53 = document[_0x35d29f(0x1c5) + _0x35d29f(0x24a)](_0x55003d[_0x35d29f(0x288)]);
    if (_0x34bb53) {
        if (_0x34bb53[_0x35d29f(0x1f5)]) {
            const _0x4988f1 = _0x55003d[_0x35d29f(0x299)][_0x35d29f(0x428)]('|');
            let _0x14d7e6 = -0x1 * 0x62d + -0x1 * -0x7ed + -0x1c0;
            while (!![]) {
                switch (_0x4988f1[_0x14d7e6++]) {
                case '0':
                    _0x34bb53[_0x35d29f(0x32a) + _0x35d29f(0x2eb)](new Event(_0x55003d[_0x35d29f(0x19a)], { 'bubbles': !![] }));
                    continue;
                case '1':
                    _0x2cff8e++;
                    continue;
                case '2':
                    _0x34bb53[_0x35d29f(0x32a) + _0x35d29f(0x2eb)](new Event(_0x55003d[_0x35d29f(0x200)], { 'bubbles': !![] }));
                    continue;
                case '3':
                    console[_0x35d29f(0x28a)](_0x55003d[_0x35d29f(0x30c)]);
                    continue;
                case '4':
                    _0x34bb53[_0x35d29f(0x1f5)] = ![];
                    continue;
                }
                break;
            }
        }
    }
    return _0x55003d[_0x35d29f(0x141)](_0x2cff8e, -0x1d0 * -0x8 + -0x1788 + -0x8 * -0x121) && console[_0x35d29f(0x28a)](_0x35d29f(0x2ff) + _0x35d29f(0x2ba) + _0x35d29f(0x149) + _0x2cff8e + (_0x35d29f(0x3d9) + _0x35d29f(0x39b) + _0x35d29f(0x294))), _0x55003d[_0x35d29f(0x141)](_0x2cff8e, 0x1c6d + 0x48 * -0x10 + -0x17ed);
}
function iniciarObserverCheckboxesFusao() {
    const _0x17ec66 = _0xa4b3, _0x34d5d2 = {
            'kLLOZ': function (_0x185428, _0x2b500b) {
                return _0x185428 === _0x2b500b;
            },
            'fEFQH': _0x17ec66(0x20f),
            'fwDcN': function (_0x452829, _0x3412db) {
                return _0x452829 || _0x3412db;
            },
            'vRDvU': _0x17ec66(0x2ff) + _0x17ec66(0x2ba) + _0x17ec66(0x2e5) + _0x17ec66(0x3eb) + _0x17ec66(0x1ab) + _0x17ec66(0x2f5) + _0x17ec66(0x376),
            'HpQHJ': function (_0x55417a) {
                return _0x55417a();
            },
            'nWauX': _0x17ec66(0x185),
            'REDLD': _0x17ec66(0x43b) + _0x17ec66(0x3e4),
            'CtBEk': function (_0x49180c, _0x467514) {
                return _0x49180c === _0x467514;
            },
            'wVRer': _0x17ec66(0x2cd) + _0x17ec66(0x3e4),
            'EcVKL': _0x17ec66(0x407),
            'EEtNP': function (_0x104652, _0x3074c0) {
                return _0x104652 > _0x3074c0;
            },
            'aJvlo': function (_0x1d0062, _0x4b2b78) {
                return _0x1d0062(_0x4b2b78);
            },
            'eCHzx': function (_0x43c071) {
                return _0x43c071();
            },
            'YFceh': _0x17ec66(0x1f5),
            'zjuiL': function (_0x4cc5ca, _0x55e4d4, _0xd964a6) {
                return _0x4cc5ca(_0x55e4d4, _0xd964a6);
            },
            'rmgsP': _0x17ec66(0x2ff) + _0x17ec66(0x2ba) + _0x17ec66(0x2cf) + _0x17ec66(0x1c9) + _0x17ec66(0x415) + _0x17ec66(0x19d) + _0x17ec66(0x1bc) + _0x17ec66(0x1cf) + _0x17ec66(0x142)
        };
    _0x34d5d2[_0x17ec66(0x3ff)](desmarcarCheckboxesFusao);
    const _0x4fb4e4 = new MutationObserver(_0x17b59f => {
        const _0x4dc955 = _0x17ec66;
        for (const _0xbebdc6 of _0x17b59f) {
            if (_0x34d5d2[_0x4dc955(0x206)](_0xbebdc6[_0x4dc955(0x286)], _0x34d5d2[_0x4dc955(0x3ba)])) {
                const _0x45b69c = Array[_0x4dc955(0x192)](_0xbebdc6[_0x4dc955(0x3e3)])[_0x4dc955(0x1aa)](_0x100e74 => _0x100e74['id'] === _0x4dc955(0x43b) + _0x4dc955(0x3e4) || _0x100e74[_0x4dc955(0x14d) + _0x4dc955(0x287)] && _0x100e74[_0x4dc955(0x14d) + _0x4dc955(0x287)](_0x4dc955(0x354) + _0x4dc955(0x40f))), _0x780de4 = Array[_0x4dc955(0x192)](_0xbebdc6[_0x4dc955(0x3e3)])[_0x4dc955(0x1aa)](_0x26a63f => _0x26a63f['id'] === _0x4dc955(0x2cd) + _0x4dc955(0x3e4) || _0x26a63f[_0x4dc955(0x14d) + _0x4dc955(0x287)] && _0x26a63f[_0x4dc955(0x14d) + _0x4dc955(0x287)](_0x4dc955(0x2b7) + _0x4dc955(0x40f)));
                _0x34d5d2[_0x4dc955(0x3b0)](_0x45b69c, _0x780de4) && (console[_0x4dc955(0x28a)](_0x34d5d2[_0x4dc955(0x39e)]), _0x34d5d2[_0x4dc955(0x1f2)](desmarcarCheckboxesFusao));
            } else {
                if (_0x34d5d2[_0x4dc955(0x206)](_0xbebdc6[_0x4dc955(0x286)], _0x34d5d2[_0x4dc955(0x19e)])) {
                    const _0x556c73 = _0xbebdc6[_0x4dc955(0x173)];
                    (_0x34d5d2[_0x4dc955(0x206)](_0x556c73['id'], _0x34d5d2[_0x4dc955(0x165)]) || _0x34d5d2[_0x4dc955(0x255)](_0x556c73['id'], _0x34d5d2[_0x4dc955(0x32c)])) && _0x556c73[_0x4dc955(0x1f5)] && (_0x556c73[_0x4dc955(0x1f5)] = ![], _0x556c73[_0x4dc955(0x32a) + _0x4dc955(0x2eb)](new Event(_0x34d5d2[_0x4dc955(0x264)], { 'bubbles': !![] })), console[_0x4dc955(0x28a)](_0x4dc955(0x2ff) + _0x4dc955(0x2ba) + _0x4dc955(0x323) + _0x4dc955(0x389) + _0x556c73['id']));
                }
            }
        }
    });
    _0x4fb4e4[_0x17ec66(0x19c)](document[_0x17ec66(0x335)], {
        'childList': !![],
        'subtree': !![],
        'attributes': !![],
        'attributeFilter': [_0x34d5d2[_0x17ec66(0x1fc)]],
        'attributeOldValue': !![]
    });
    let _0x59e294 = 0xa3 * -0x1 + -0x260a + 0x26ad;
    const _0x183969 = _0x34d5d2[_0x17ec66(0x235)](setInterval, () => {
        const _0x13ac48 = _0x17ec66;
        (_0x34d5d2[_0x13ac48(0x1f2)](desmarcarCheckboxesFusao) || _0x34d5d2[_0x13ac48(0x3a7)](_0x59e294++, -0x1e98 * 0x1 + 0x6 * 0x3b7 + 0x862)) && _0x34d5d2[_0x13ac48(0x166)](clearInterval, _0x183969);
    }, -0xc * 0xba + -0x3ea + 0xe96);
    console[_0x17ec66(0x28a)](_0x34d5d2[_0x17ec66(0x15f)]);
}
function interceptarCliqueTicketLista() {
    const _0x58b01d = _0xa4b3, _0x5f4f48 = {
            'nVxQU': function (_0x16302b, _0x3632cc, _0x89fe19) {
                return _0x16302b(_0x3632cc, _0x89fe19);
            },
            'KrvbH': _0x58b01d(0x177),
            'HQbQH': _0x58b01d(0x23e) + _0x58b01d(0x2c1) + _0x58b01d(0x325) + _0x58b01d(0x2c6),
            'fWWro': _0x58b01d(0x319),
            'eOoSC': function (_0x3e9716, _0x153851) {
                return _0x3e9716 !== _0x153851;
            },
            'XVMYL': function (_0x7e1698, _0xd83f1a) {
                return _0x7e1698 instanceof _0xd83f1a;
            },
            'IQKuK': _0x58b01d(0x423) + _0x58b01d(0x29d) + _0x58b01d(0x328) + _0x58b01d(0x379) + _0x58b01d(0x3ec) + _0x58b01d(0x193) + _0x58b01d(0x3c0) + _0x58b01d(0x3a2) + '\x22]',
            'cifhF': function (_0x2b80ff, _0x13a08c) {
                return _0x2b80ff(_0x13a08c);
            },
            'TfdnK': _0x58b01d(0x36b),
            'mrCpJ': _0x58b01d(0x2ff) + _0x58b01d(0x2ba) + _0x58b01d(0x2e8) + _0x58b01d(0x280) + _0x58b01d(0x2b2) + _0x58b01d(0x16e) + _0x58b01d(0x42b)
        };
    document[_0x58b01d(0x245) + _0x58b01d(0x3f6)](_0x5f4f48[_0x58b01d(0x360)], function (_0x5de233) {
        const _0x5b0c38 = _0x58b01d, _0x5cc565 = {
                'ZypuH': function (_0x356b8e, _0x5db506, _0x2a7e1c) {
                    const _0x200161 = _0xa4b3;
                    return _0x5f4f48[_0x200161(0x1d2)](_0x356b8e, _0x5db506, _0x2a7e1c);
                },
                'bZfms': _0x5f4f48[_0x5b0c38(0x2ed)],
                'eswRm': _0x5f4f48[_0x5b0c38(0x1f6)],
                'yWUqD': _0x5f4f48[_0x5b0c38(0x297)]
            };
        if (!copiarTicketListaAoClicar)
            return;
        if (!_0x5de233[_0x5b0c38(0x348)])
            return;
        if (_0x5f4f48[_0x5b0c38(0x31f)](_0x5de233[_0x5b0c38(0x32e)], -0x1ac1 + 0x20f3 + -0x632))
            return;
        if (_0x5de233[_0x5b0c38(0x308)] || _0x5de233[_0x5b0c38(0x397)] || _0x5de233[_0x5b0c38(0x36f)] || _0x5de233[_0x5b0c38(0x25c)])
            return;
        const _0x1dd88b = _0x5de233[_0x5b0c38(0x173)];
        if (!_0x5f4f48[_0x5b0c38(0x234)](_0x1dd88b, Element))
            return;
        const _0x33ba41 = _0x1dd88b[_0x5b0c38(0x257)](_0x5f4f48[_0x5b0c38(0x2d4)]);
        if (!_0x33ba41)
            return;
        const _0x5b1a5d = _0x5f4f48[_0x5b0c38(0x42c)](extrairNumeroTicket, _0x33ba41[_0x5b0c38(0x1f4) + 't']);
        if (!_0x5b1a5d)
            return;
        _0x5de233[_0x5b0c38(0x219) + _0x5b0c38(0x430)](), _0x5de233[_0x5b0c38(0x2f4) + _0x5b0c38(0x17c)](), _0x5de233[_0x5b0c38(0x1f3) + _0x5b0c38(0x317) + _0x5b0c38(0x18d)](), _0x5f4f48[_0x5b0c38(0x42c)](copiarTextoParaClipboard, _0x5b1a5d)[_0x5b0c38(0x3e6)](_0x492016 => {
            const _0x270c24 = _0x5b0c38;
            _0x492016 ? _0x5cc565[_0x270c24(0x3a0)](mostrarNotificacao, _0x270c24(0x316) + _0x5b1a5d + _0x270c24(0x20e), _0x5cc565[_0x270c24(0x1a5)]) : _0x5cc565[_0x270c24(0x3a0)](mostrarNotificacao, _0x5cc565[_0x270c24(0x309)], _0x5cc565[_0x270c24(0x429)]);
        });
    }, !![]), console[_0x58b01d(0x28a)](_0x5f4f48[_0x58b01d(0x35a)]);
}
function formatarTempo(_0x31e46a) {
    const _0x59e00d = _0xa4b3, _0x5cb6dd = {
            'aGcQx': function (_0x514565, _0x3c8927) {
                return _0x514565 / _0x3c8927;
            },
            'YZwJb': function (_0x20df62, _0x5af8ad) {
                return _0x20df62 / _0x5af8ad;
            },
            'cUmBe': function (_0x472226, _0x5b67e9) {
                return _0x472226 % _0x5b67e9;
            },
            'PYgLL': function (_0x5728be, _0x403f5b) {
                return _0x5728be(_0x403f5b);
            },
            'HosYm': function (_0x10c9d6, _0x556e8f) {
                return _0x10c9d6(_0x556e8f);
            },
            'OlTSY': function (_0x1a21c7, _0x473272) {
                return _0x1a21c7(_0x473272);
            }
        }, _0x5431b8 = Math[_0x59e00d(0x296)](_0x5cb6dd[_0x59e00d(0x388)](_0x31e46a, -0xc5 * -0x11 + 0x25f1 + -0x24f6)), _0x258c0c = Math[_0x59e00d(0x296)](_0x5cb6dd[_0x59e00d(0x25f)](_0x5cb6dd[_0x59e00d(0x25e)](_0x31e46a, -0x2 * -0xf72 + 0xa87 + -0x1b5b), -0x1996 * 0x1 + -0xb * -0x2ef + -0x673)), _0x4d5975 = _0x5cb6dd[_0x59e00d(0x25e)](_0x31e46a, -0x53 + -0x7a7 + 0x836);
    return _0x5cb6dd[_0x59e00d(0x384)](String, _0x5431b8)[_0x59e00d(0x14e)](0x4aa + -0x1355 * 0x1 + 0x121 * 0xd, '0') + ':' + _0x5cb6dd[_0x59e00d(0x302)](String, _0x258c0c)[_0x59e00d(0x14e)](0x213c + 0x2340 + 0x447a * -0x1, '0') + ':' + _0x5cb6dd[_0x59e00d(0x1a2)](String, _0x4d5975)[_0x59e00d(0x14e)](0x7f * 0x1d + 0x1e24 + -0x83 * 0x57, '0');
}
function iniciarCronometro() {
    const _0xd424bc = _0xa4b3, _0x3d5837 = {
            'sjwOB': function (_0x1d8308) {
                return _0x1d8308();
            },
            'TKFOy': function (_0x230d7b, _0x4c72ba) {
                return _0x230d7b === _0x4c72ba;
            },
            'wCkxZ': function (_0x2f15b0, _0x2ea8f7) {
                return _0x2f15b0 % _0x2ea8f7;
            },
            'cPGVv': function (_0x1d25ef, _0x3e48ce) {
                return _0x1d25ef && _0x3e48ce;
            },
            'jtZjd': function (_0x1e9259, _0xa3564c, _0xcddbed) {
                return _0x1e9259(_0xa3564c, _0xcddbed);
            },
            'LkMLZ': _0xd424bc(0x2ff) + _0xd424bc(0x2ba) + _0xd424bc(0x167) + _0xd424bc(0x240) + _0xd424bc(0x44b) + _0xd424bc(0x2a8) + 'do'
        };
    !intervaloTempoOnline && (intervaloTempoOnline = _0x3d5837[_0xd424bc(0x1b9)](setInterval, () => {
        const _0x43403b = _0xd424bc, _0x41f97d = _0x3d5837[_0x43403b(0x1fd)](verificarStatusOnline);
        if (_0x41f97d)
            tempoOnlineSegundos++, _0x3d5837[_0x43403b(0x3c8)](_0x3d5837[_0x43403b(0x410)](tempoOnlineSegundos, 0x25e7 + -0xf2e + -0x65 * 0x39), 0x4a6 + 0x1 * -0x1001 + 0x99 * 0x13) && chrome[_0x43403b(0x3b8)][_0x43403b(0x229)][_0x43403b(0x271)]({ 'tempoOnlineSegundos': tempoOnlineSegundos });
        else
            _0x3d5837[_0x43403b(0x439)](statusAnterior, !_0x41f97d) && (tempoOnlineSegundos = -0x12ed + 0x7 * -0xae + 0x17af, chrome[_0x43403b(0x3b8)][_0x43403b(0x229)][_0x43403b(0x271)]({ 'tempoOnlineSegundos': 0x0 }));
        statusAnterior = _0x41f97d;
    }, -0x14 * 0x33 + -0x266 * 0x9 + 0xebd * 0x2), console[_0xd424bc(0x28a)](_0x3d5837[_0xd424bc(0x401)]));
}
function verificarStatusOnline() {
    const _0x2b04fd = _0xa4b3, _0x4dc24a = {
            'sdYhJ': _0x2b04fd(0x283) + _0x2b04fd(0x1ac) + _0x2b04fd(0x306) + _0x2b04fd(0x1bf) + _0x2b04fd(0x254) + _0x2b04fd(0x363),
            'oZzTu': _0x2b04fd(0x22f),
            'MJYlb': function (_0x176629, _0x4328f8) {
                return _0x176629 === _0x4328f8;
            },
            'rSqIE': _0x2b04fd(0x23c),
            'NqRhk': _0x2b04fd(0x3d6),
            'TizMX': _0x2b04fd(0x2a1),
            'tOEKq': _0x2b04fd(0x2ff) + _0x2b04fd(0x2ba) + _0x2b04fd(0x1a9) + _0x2b04fd(0x2cc) + _0x2b04fd(0x40c) + _0x2b04fd(0x320) + 'us'
        }, _0x483656 = document[_0x2b04fd(0x14d) + _0x2b04fd(0x287)](_0x4dc24a[_0x2b04fd(0x2e7)]);
    if (_0x483656) {
        const _0x32c563 = _0x483656[_0x2b04fd(0x15c) + 'te'](_0x4dc24a[_0x2b04fd(0x164)]), _0x5d8306 = _0x4dc24a[_0x2b04fd(0x3a9)](_0x32c563, _0x4dc24a[_0x2b04fd(0x30d)]);
        return console[_0x2b04fd(0x28a)](_0x2b04fd(0x2ff) + _0x2b04fd(0x2ba) + _0x2b04fd(0x2ad) + _0x2b04fd(0x1e6) + _0x32c563 + '\x20(' + (_0x5d8306 ? _0x4dc24a[_0x2b04fd(0x2d2)] : _0x4dc24a[_0x2b04fd(0x277)]) + ')'), _0x5d8306;
    }
    return console[_0x2b04fd(0x28a)](_0x4dc24a[_0x2b04fd(0x33e)]), ![];
}
function _0x2c1c() {
    const _0x177c0d = [
        'Click',
        'then',
        '\x20\x20\x20\x20\x20\x20\x20\x20he',
        '🛡️\x20Confirma',
        '\x20tentando\x20',
        'ign:\x20cente',
        'ckboxes\x20de',
        '],\x20[data-t',
        'torAll',
        'x-shadow:\x20',
        'FypEk',
        'e;\x0a\x20\x20\x20\x20\x20\x20\x20',
        '0px;\x0a\x20\x20\x20\x20\x20',
        'ensão\x20inic',
        'esk]\x20💬\x20Lim',
        'QiCgT',
        'ly:\x20Arial,',
        'stener',
        '#dc3545',
        'notificaco',
        'DESATIVA',
        '\x20chats',
        'lay:\x20flex;',
        'NPymv',
        'rZUEm',
        'f;\x0a\x20\x20\x20\x20',
        'eCHzx',
        'KRIXY',
        'LkMLZ',
        'ZkGJM',
        'licar',
        'fCjEB',
        'nsform:\x20tr',
        '#000',
        'change',
        'VDPgc',
        '6|5|1|3|4|',
        'intervaloM',
        'XlUwf',
        'vel\x20verifi',
        'SgjXy',
        '-9999px',
        '_public',
        'wCkxZ',
        'kyick',
        'lziqQ',
        '\x20Deseja\x20re',
        'us:\x2010px;\x0a',
        'ção\x20de\x20fus',
        'Tawmr',
        'LVPVQ',
        'TaiRr',
        'hgora-btn-',
        'lterado\x20pa',
        'onboarding',
        'ggUHh',
        'order:\x20non',
        '\x22toolbar-s',
        '⏸️\x20Limite\x20d',
        'QxWRw',
        'oTEgy',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<',
        'td[data-te',
        'toggle',
        'etListaAoC',
        'from\x20{\x20tra',
        'osition:\x20f',
        'split',
        'yWUqD',
        'setInterva',
        '\x20ativado',
        'cifhF',
        'd=\x22serveBu',
        'on\x20id=\x22ahg',
        '</button>\x0a',
        'ault',
        'cancelar\x22\x20',
        'a-state=\x22i',
        'style',
        'BsXQK',
        'jRqxo',
        'XjQrz',
        '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'cPGVv',
        'div[role=\x22',
        'source_is_',
        'mDlUk',
        'uIlwo',
        'ado\x20manual',
        'AxzKE',
        '999999;\x0a\x20\x20',
        'led',
        '\x20\x20\x20\x20\x20\x20padd',
        'IVADAS',
        'city:\x200;\x20}',
        'VrkCv',
        'erver\x20de\x20n',
        'px;\x0a\x20\x20\x20\x20\x20\x20',
        '1251153HAIESB',
        'PRtsS',
        'hats',
        '\x20tempo\x20onl',
        'wZScJ',
        'px;\x22>\x0a\x20\x20\x20\x20',
        'ra\x20puxar\x20c',
        'VgSWu',
        'regado:\x20',
        'ZAQDX',
        'JvkSa',
        'ailsafe)',
        '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'Intervalo\x20',
        '3|1|4|0|2',
        'fixed',
        'esk]\x20✅\x20Bot',
        'FkXAO',
        'esk]\x20✅\x20',
        'tyle=\x22\x0a\x20\x20\x20',
        'RETWl',
        '\x20\x20\x20\x20paddin',
        'querySelec',
        'padStart',
        'div',
        'lEisI',
        'r;\x0a\x20\x20\x20\x20\x20\x20\x20',
        'ardando...',
        'offsetHeig',
        'onRange',
        'ons.notifi',
        'tPLFo',
        'getCopiarT',
        '\x20\x20\x20\x20\x20\x20\x20\x20bo',
        'rder-radiu',
        'lar</butto',
        'confirmarC',
        'getAttribu',
        'ra\x20',
        'ZmvDU',
        'rmgsP',
        'order-radi',
        'left',
        'padding:\x201',
        'clickNow',
        'oZzTu',
        'REDLD',
        'aJvlo',
        'esk]\x20⏱️\x20Cro',
        'ication-ti',
        'ointer;\x0a\x20\x20',
        'ent:\x20cente',
        'emovida:\x20\x22',
        'FfKby',
        'ns-serif;\x0a',
        '\x20em\x20ticket',
        'parentNode',
        'ius:\x206px;\x0a',
        'iada\x20-\x20Cli',
        '\x20\x20\x20text-al',
        'target',
        'po\x20online\x20',
        'DOMContent',
        '5px\x2020px;\x0a',
        'success',
        '\x2018px;\x22>Co',
        '.3s\x20ease-o',
        '1902180kevRCc',
        'dataset',
        'ation',
        'fQqnZ',
        '\x20\x20\x20\x20\x20\x20box-',
        'enClx',
        'true',
        '\x20\x20\x20\x20\x20\x20\x20\x20</',
        ',0,0.3);\x0a\x20',
        'remove',
        'color:\x20whi',
        'attributes',
        'ublic',
        'y:\x200;\x20}\x0a\x20\x20',
        'ts\x20carrega',
        'x);\x20opacit',
        'icket\x20ao\x20c',
        'nXyCV',
        ':\x2010px\x2025p',
        'tion',
        'zGPme',
        'o\x20{\x20transf',
        '\x20\x20\x20\x20\x20\x20font',
        'e\x20ser\x20entr',
        'from',
        'est-id=\x22ge',
        'carregado:',
        'esk]\x20💬\x20Cha',
        'x\x20rgba(0,0',
        'e=\x22color:\x20',
        'rZpPg',
        'QFyyT',
        'sZUxu',
        'iHIjj',
        'observe',
        'ão\x20ativa\x20(',
        'nWauX',
        'geLeT',
        'que\x20DESATI',
        'und:\x20white',
        'OlTSY',
        '\x20\x20\x20\x20\x20\x20<h3\x20',
        'ahgora-dia',
        'bZfms',
        'JauJI',
        'includes',
        '00px);\x20opa',
        'esk]\x20⚠️\x20Não',
        'some',
        '\x20fusão\x20det',
        'a-test-id=',
        'disabled',
        'anslateX(4',
        'ngido.\x20Agu',
        'match',
        'nubhL',
        'removeChil',
        'round',
        'Fique\x20onli',
        '⚠️\x20Você\x20pre',
        'g:\x2010px\x2025',
        'fila',
        '10684mCraCx',
        'jtZjd',
        '\x20\x20\x20\x20\x20\x20\x20\x20Vo',
        '=\x22notifica',
        'MutationOb',
        'NbUlT',
        'FKApY',
        'el-agent-s',
        'ção\x20de\x20cli',
        'ORqgn',
        'Puxar\x20Chat',
        'wEtcN',
        'djLAc',
        'getElement',
        '❌\x20Clique\x20c',
        '#666;\x20marg',
        'QkyjX',
        'o-desmarca',
        'shadow:\x200\x20',
        'nt-size:\x201',
        'deg,\x20#28a7',
        'maKWZ',
        '\x20\x20\x20\x22>Cance',
        'server\x20+\x20F',
        'vOfHb',
        'xar\x20Chat?<',
        'nVxQU',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20p',
        'addListene',
        'imrXJ',
        'stify-cont',
        'hdmiw',
        'ogSwm',
        'div>\x0a\x20\x20\x20\x20',
        'anual:\x20',
        'dqsTw',
        'nfirmar\x22\x20s',
        'almente\x20co',
        'clipboard',
        '\x20\x20\x20\x20\x20<butt',
        'status',
        'que\x20ATIVAD',
        '✅\x20Chat\x20pux',
        '4px;\x0a\x20\x20\x20\x20\x20',
        's\x20iniciado',
        'ifljg',
        'tus:\x20',
        '6558376cRkzdU',
        'BrmVv',
        'runtime',
        'fallback.',
        'ATIVA',
        'ário\x20não\x20e',
        'get',
        'lign-items',
        'DAS',
        'QSZfE',
        'arden-id=\x22',
        'HpQHJ',
        'stopImmedi',
        'textConten',
        'checked',
        'HQbQH',
        't-size:\x2014',
        'setLimiteC',
        'da\x20',
        'vBVau',
        ':\x20center;\x0a',
        'YFceh',
        'sjwOB',
        'n-queue\x22]',
        'border-rad',
        'uSyav',
        '\x20\x20\x20\x20\x20\x20\x20to\x20',
        'acity:\x201;\x20',
        '\x20operação',
        't\x20manualme',
        'UaFNI',
        'kLLOZ',
        'marcado:\x20t',
        'esk]\x20⚠️\x20Fal',
        'ha\x20no\x20Clip',
        'esk]\x20👁️\x20Obs',
        '-weight:\x20b',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'position',
        '\x20copiado!',
        'childList',
        'ight:\x20100%',
        'rUqNY',
        'ZOEHr',
        'tton\x20id=\x22a',
        '\x20para\x20',
        '\x20linear-gr',
        'lhlFP',
        'te;\x0a\x20\x20\x20\x20\x20\x20',
        '#17a2b8',
        'preventDef',
        '=\x22display:',
        'itle\x22]',
        'YToOQ',
        '13365981VXWhPx',
        '1|0|3|4|2',
        ':\x20rgba(0,\x20',
        'Loaded',
        'or:\x20#333;\x20',
        'cation\x22]',
        'liqueManua',
        'loading',
        'forEach',
        '\x2020px;\x20fon',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20t',
        'ize:\x2014px;',
        'local',
        '243462uOfjaN',
        'tempoOnlin',
        'NBJVq',
        'ZRswe',
        'trim',
        'data-state',
        'dRTKB',
        'appendChil',
        'setSelecti',
        'ADO',
        'XVMYL',
        'zjuiL',
        'JNZaF',
        'pjGuc',
        's:\x205px;\x0a\x20\x20',
        '\x20ao\x20clicar',
        'ções\x20ATIVA',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20b',
        'online',
        'hats!',
        '❌\x20Não\x20foi\x20',
        'div\x20style=',
        'nômetro\x20de',
        'DESATIVO',
        'esk]\x20🚫\x20Usu',
        '2700lYJBWh',
        '\x20\x20\x20\x20\x20\x20disp',
        'addEventLi',
        '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20',
        '💬\x20Limite\x20a',
        'e\x201\x20e\x2010\x20c',
        'a-polaris-',
        'ById',
        'nviTq',
        'esk]\x20🛡️\x20Int',
        'aJCfC',
        'cê\x20está\x20pr',
        'esk]\x20🗑️\x20Not',
        'qAFVB',
        'background',
        '1645434OlcDGX',
        'ateX(0);\x20o',
        'tatus-menu',
        'CtBEk',
        'iPQMf',
        'closest',
        'hQPXg',
        'ticamente!',
        'ba(0,0,0,0',
        'esk]\x20🚀\x20Ext',
        'altKey',
        'otificaçõe',
        'cUmBe',
        'YZwJb',
        'iHChd',
        'SZeFl',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'a-agent-wo',
        'EcVKL',
        'th:\x20100%;\x0a',
        'NshMo',
        'yPLbj',
        '-id=\x22heade',
        'cisa\x20estar',
        '\x20minutos',
        'teX(0);\x20op',
        'CTmjt',
        '\x20\x20\x20<p\x20styl',
        'erve-chat-',
        'ZvMox',
        '\x20sans-seri',
        'set',
        'tion\x22]',
        'animation:',
        'innerHTML',
        'AeVbY',
        '\x20às\x20',
        'TizMX',
        '\x20Arial,\x20sa',
        'notificati',
        'aLKpL',
        'aria-disab',
        'YmPGa',
        'value',
        'nte.<br>\x0a\x20',
        '{\x20transfor',
        'erceptador',
        'ado\x20automa',
        'DzRuK',
        'button[dat',
        'TUlPd',
        'nKyMs',
        'type',
        'tor',
        'kxnuL',
        '\x20\x20\x20right:\x20',
        'log',
        '-cancelar',
        'esk]\x20📋\x20Cop',
        'n\x20{\x0a\x20\x20\x20\x20\x20\x20',
        'rgin-botto',
        'estes\x20a\x20pu',
        '📋\x20Copiar\x20t',
        'firmação\x20m',
        'ATIVO',
        'IOrvf',
        'cado(s)',
        'DMhPa',
        'floor',
        'fWWro',
        'border:\x202p',
        'RyRuN',
        'TmVhn',
        'ta-test-id',
        'ahgora-btn',
        'st-id=\x22gen',
        'esk]\x20🛡️\x20Con',
        'Wazkq',
        'head',
        'OFFLINE',
        'rVVNR',
        'mPkCB',
        'nfirmar\x20Pu',
        'slideOut\x200',
        'sKgji',
        'ora-btn-co',
        'ine\x20inicia',
        'readonly',
        'ervalo:\x20',
        'cssText',
        'pacity:\x201;',
        'esk]\x20📡\x20Sta',
        'ackground:',
        'xjTeq',
        '⚠️</div>\x0a\x20\x20',
        '\x20\x20\x20\x20\x20\x20\x20max',
        '\x20de\x20clique',
        'ntre\x201\x20e\x206',
        'YVOAS',
        'deve\x20ser\x20e',
        '20px;\x0a\x20\x20\x20\x20',
        '#target_is',
        'KqPzN',
        'começou\x22',
        'ols\x20-\x20Zend',
        'oUCee',
        'rm:\x20transl',
        'esk]\x20⏱️\x20Int',
        'hkjJJ',
        '[data-test',
        'getConfirm',
        'possível\x20c',
        '\x20\x20\x20\x20top:\x202',
        'ut;\x0a\x20\x20\x20\x20',
        'stá\x20online',
        'logo-confi',
        'cket.',
        '#28a745',
        'NARtd',
        'ImegG',
        'MesDa',
        'inutos',
        '\x20foi\x20possí',
        'target_is_',
        'ancelado',
        'esk]\x20✅\x20Aut',
        '/h3>\x0a\x20\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20a',
        'NqRhk',
        '\x20\x20\x20padding',
        'IQKuK',
        'ntinuar?\x0a\x20',
        '-id=\x22notif',
        '\x20\x20\x20\x20\x20\x20\x20\x20ju',
        '\x20\x20\x20\x20\x20\x20\x20\x20co',
        '4|0|2|1|3',
        'ZIjaf',
        'UedjL',
        'opacity',
        'OgLRD',
        'button\x22]',
        'qAeOP',
        'lmVRy',
        'exHiB',
        'zJfZL',
        'PMHVO',
        '-confirmar',
        'esk]\x20🔍\x20Che',
        'r-tab-subt',
        'sdYhJ',
        'esk]\x20📋\x20Int',
        'NsoFJ',
        'GGKGF',
        'ent',
        'Na\x20fila',
        'KrvbH',
        'FNifA',
        'warning',
        'Button\x22]',
        'GCdeW',
        'deIpB',
        'ahgora-too',
        'stopPropag',
        'ectados\x20no',
        'r\x20ticket.',
        'ificação\x20r',
        '45;\x0a\x20\x20\x20\x20\x20\x20',
        '\x20\x20\x20\x20\x20\x20\x20</p',
        'QFaLh',
        'viyxR',
        'tEyRS',
        'ahgoraAuto',
        'limiteChat',
        '[Ahgora\x20To',
        'orm:\x20trans',
        '#fff',
        'HosYm',
        'vsMGM',
        ':\x2040px;\x20ma',
        'isSecureCo',
        '\x22omnichann',
        '\x20\x20\x20\x20\x20\x20from',
        'metaKey',
        'eswRm',
        '0,\x200,\x200.6)',
        'setAttribu',
        'JMlKL',
        'rSqIE',
        'o\x20ao\x20copia',
        '\x20white;\x0a\x20\x20',
        'left:\x200;\x0a\x20',
        'esAtivas',
        'ão\x20clicado',
        'createElem',
        '2|0',
        'licar\x20ATIV',
        '📋\x20Ticket\x20',
        'atePropaga',
        'lXemY',
        'error',
        'UcBJC',
        '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
        'ource_is_p',
        'Horário\x20de',
        'PtbCj',
        'eOoSC',
        'car\x20o\x20stat',
        'JUuKr',
        '⏱️\x20Interval',
        'esk]\x20📋\x20Des',
        'Bdavq',
        'opiar\x20o\x20ti',
        'bpNFZ',
        '\x22font-size',
        'eric-table',
        'jplvM',
        'dispatchEv',
        'z-index:\x209',
        'wVRer',
        'nULKA',
        'button',
        'tton\x22]',
        'licar\x20DESA',
        'marcado:\x20s',
        'GCuPL',
        'bbfmI',
        'ight:\x20bold',
        'body',
        'TmAUU',
        'TchPD',
        'AoClicar',
        'onMessage',
        'ixed;\x0a\x20\x20\x20\x20',
        'mente!',
        '0\x20minutos',
        'ite\x20de\x20cha',
        'tOEKq',
        'DiPAI',
        '\x20\x20\x20\x22>Sim,\x20',
        'select',
        'readyState',
        'icketLista',
        'm:\x20transla',
        'old;\x0a\x20\x20\x20\x20\x20',
        'WGkRR',
        'warn',
        'isTrusted',
        'Nenhum',
        '\x20cursor:\x20p',
        'ound-color',
        'mes\x20slideI',
        '\x20\x20\x20\x20font-s',
        'GoSFW',
        '294YkLHhi',
        ':\x2010px;\x20ju',
        'in-bottom:',
        '.3s\x20ease-i',
        'meString',
        '#source_is',
        'font-size:',
        'UzHKr',
        'omeçou',
        'keMjl',
        'Tmrun',
        'mrCpJ',
        '\x20\x20\x20font-we',
        '-id=\x22serve',
        '\x20\x20\x20backgro',
        'textarea',
        'tle\x22]',
        'TfdnK',
        'lor:\x20#dc35',
        'horário\x20de',
        '-button\x22]',
        'IfUcf',
        'fpueF',
        'operação\x20c',
        'ing:\x2025px;',
        'iar\x20ticket',
        '\x20\x20\x20\x20\x20\x20\x20\x20@k',
        'wORgB',
        'click',
        'xar\x20um\x20cha',
        'board\x20API,',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20b',
        'shiftKey',
        'MHgQF',
        'setConfirm',
        'style=\x22mar',
        '\x20operação\x20',
        'adient(135',
        'oIfrA',
        '\x20DOM',
        '\x20manual\x20at',
        '\x20font-fami',
        '-cells-id\x22',
        '\x20\x20\x20z-index',
        'ntext',
        'n>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'r;\x22>\x0a\x20\x20\x20\x20\x20',
        'length',
        'alert\x22][da',
        'lideOut\x20{\x0a',
        'setCopiarT',
        'fXAWm',
        'do:\x20',
        'PYgLL',
        'ZTcnw',
        'OIwVM',
        'jKVLm',
        'aGcQx',
        'marcado:\x20',
        'boarding-i',
        'rmacao',
        '\x20slideIn\x200',
        'action',
        'ivado',
        '\x20\x20\x20\x20\x20\x20\x20<bu',
        'c3545;\x0a\x20\x20\x20',
        'nt-family:',
        '\x20{\x20transfo',
        'color:\x20',
        'writeText',
        'ções\x20DESAT',
        'r;\x0a\x20\x20\x20\x20',
        'ctrlKey',
        'lateX(400p',
        'offsetWidt',
        'TIVADO',
        'es)\x20desmar',
        'eSegundos',
        '\x20\x20\x20\x20\x20\x20\x20\x20fo',
        'vRDvU',
        '-width:\x2040',
        'ZypuH',
        ':\x20999999;\x0a',
        'e-cells-id',
        'HBxIY',
        '3|4|2|0|1',
        'cando\x20a\x20ca',
        'info',
        'EEtNP',
        'igbGx',
        'MJYlb',
        '4px\x206px\x20rg',
        'copy',
        'TiLPO',
        '\x20\x20\x20\x20\x20\x20\x20wid',
        'animation',
        'OeRmj',
        'fwDcN',
        'ls-styles',
        'gin:\x200\x200\x201',
        'esk]\x20⏱️\x20Tem',
        '\x20\x20\x20\x20top:\x200',
        'VADA',
        'execComman',
        'acaoManual',
        'storage',
        '\x20\x20\x20@keyfra',
        'fEFQH',
        '\x20chats\x20ati',
        'copiarTick',
        'm:\x2015px;\x22>',
        '7);\x0a\x20\x20\x20\x20\x20\x20',
        '\x20\x20\x20\x20backgr',
        'neric-tabl',
        'esk]\x20❌\x20Err',
        'arget_is_p',
        'TIyEA',
        '5px\x200;\x20col',
        '<div\x20style',
        'EGMIL',
        'Limite\x20dev',
        'TKFOy',
        '0\x2010px\x2030p',
        '45,\x20#20c99',
        'xGaUg',
        '.1);\x0a\x20\x20\x20\x20\x20',
        'eyframes\x20s',
        'x\x20solid\x20#d',
        'xWSGA',
        'zxsMo',
        '🔔\x20Notifica',
        'Button\x22],\x20',
        'o\x20alterado',
        'div[data-g',
        'ts\x20ativos:',
        'ONLINE',
        'ervalo\x20car',
        '\x20flex;\x20gap',
        '\x20checkbox(',
        'KeXxx',
        'style=\x22\x0a\x20\x20',
        'x;\x0a\x20\x20\x20\x20\x20\x20\x20',
        'rkspace-on',
        '#ffc107',
        'BqDYY',
        '\x20ONLINE\x20pa',
        'toLocaleTi',
        '🔕\x20Notifica',
        'addedNodes',
        'public'
    ];
    _0x2c1c = function () {
        return _0x177c0d;
    };
    return _0x2c1c();
}
function contarChatsAtivos() {
    const _0x7efa46 = _0xa4b3, _0x4abb9f = { 'deIpB': _0x7efa46(0x2bf) + _0x7efa46(0x268) + _0x7efa46(0x2e6) + _0x7efa46(0x21b) }, _0x3e6109 = document[_0x7efa46(0x14d) + _0x7efa46(0x3ed)](_0x4abb9f[_0x7efa46(0x2f2)]), _0x5b4c4e = _0x3e6109[_0x7efa46(0x37e)];
    return console[_0x7efa46(0x28a)](_0x7efa46(0x2ff) + _0x7efa46(0x2ba) + _0x7efa46(0x195) + _0x7efa46(0x3d5) + '\x20' + _0x5b4c4e + '/' + limiteChats), _0x5b4c4e;
}
function _0xa4b3(_0x42765f, _0x2dbcee) {
    _0x42765f = _0x42765f - (0xa60 + 0xf96 + 0x1 * -0x18bb);
    const _0x24b379 = _0x2c1c();
    let _0x4fd73a = _0x24b379[_0x42765f];
    return _0x4fd73a;
}
function clicarBotaoPuxarChat() {
    const _0x15c33a = _0xa4b3, _0x1097dd = {
            'YVOAS': function (_0x549166) {
                return _0x549166();
            },
            'rVVNR': _0x15c33a(0x2ff) + _0x15c33a(0x2ba) + _0x15c33a(0x242) + _0x15c33a(0x1ec) + _0x15c33a(0x2c4) + '.',
            'lziqQ': function (_0x94bd51, _0x27bf38, _0x1dcf46) {
                return _0x94bd51(_0x27bf38, _0x1dcf46);
            },
            'QxWRw': _0x15c33a(0x1b5) + _0x15c33a(0x269) + _0x15c33a(0x3e0) + _0x15c33a(0x13d) + _0x15c33a(0x23d),
            'IfUcf': _0x15c33a(0x2ef),
            'ZAQDX': function (_0x3e0929, _0x115506) {
                return _0x3e0929 >= _0x115506;
            },
            'jRqxo': function (_0x472540, _0x15b2d1, _0x602935) {
                return _0x472540(_0x15b2d1, _0x602935);
            },
            'Wazkq': _0x15c33a(0x3a6),
            'keMjl': _0x15c33a(0x283) + _0x15c33a(0x1ac) + _0x15c33a(0x41e) + _0x15c33a(0x26e) + _0x15c33a(0x2de),
            'ORqgn': _0x15c33a(0x283) + _0x15c33a(0x249) + _0x15c33a(0x41b) + _0x15c33a(0x35c) + _0x15c33a(0x2f0),
            'ZkGJM': _0x15c33a(0x283) + _0x15c33a(0x263) + _0x15c33a(0x3dd) + _0x15c33a(0x38a) + _0x15c33a(0x42d) + _0x15c33a(0x32f),
            'XjQrz': _0x15c33a(0x283) + _0x15c33a(0x432) + _0x15c33a(0x1fe),
            'nXyCV': _0x15c33a(0x32e),
            'VgSWu': _0x15c33a(0x2ec),
            'JauJI': _0x15c33a(0x1b7),
            'qAFVB': function (_0x2197fe, _0xfb58ea) {
                return _0x2197fe > _0xfb58ea;
            },
            'ZRswe': function (_0x3cf5f9, _0x1ecc9d) {
                return _0x3cf5f9 > _0x1ecc9d;
            },
            'sKgji': function (_0x4c9ea8, _0x5933a6) {
                return _0x4c9ea8 === _0x5933a6;
            },
            'YToOQ': _0x15c33a(0x27b) + _0x15c33a(0x441),
            'OIwVM': _0x15c33a(0x180),
            'hdmiw': function (_0x38c8db, _0x2cf059) {
                return _0x38c8db && _0x2cf059;
            },
            'KqPzN': _0x15c33a(0x3a4),
            'DzRuK': function (_0xb022bf, _0x3a969a, _0x5e68de) {
                return _0xb022bf(_0x3a969a, _0x5e68de);
            },
            'IOrvf': _0x15c33a(0x1e2) + _0x15c33a(0x281) + _0x15c33a(0x259),
            'LVPVQ': _0x15c33a(0x177)
        };
    if (!_0x1097dd[_0x15c33a(0x2b4)](verificarStatusOnline))
        return console[_0x15c33a(0x28a)](_0x1097dd[_0x15c33a(0x2a2)]), notificacoesAtivas && _0x1097dd[_0x15c33a(0x412)](mostrarNotificacao, _0x1097dd[_0x15c33a(0x420)], _0x1097dd[_0x15c33a(0x364)]), ![];
    const _0x5407a9 = _0x1097dd[_0x15c33a(0x2b4)](contarChatsAtivos);
    if (_0x1097dd[_0x15c33a(0x140)](_0x5407a9, limiteChats))
        return notificacoesAtivas && _0x1097dd[_0x15c33a(0x435)](mostrarNotificacao, _0x15c33a(0x41f) + 'e\x20' + limiteChats + (_0x15c33a(0x3bb) + _0x15c33a(0x1af) + _0x15c33a(0x152)), _0x1097dd[_0x15c33a(0x29f)]), ![];
    const _0x53c186 = [
        _0x1097dd[_0x15c33a(0x358)],
        _0x1097dd[_0x15c33a(0x1c1)],
        _0x1097dd[_0x15c33a(0x402)],
        _0x1097dd[_0x15c33a(0x436)]
    ];
    let _0x2b88ae = null;
    for (const _0x5cf618 of _0x53c186) {
        _0x2b88ae = document[_0x15c33a(0x14d) + _0x15c33a(0x287)](_0x5cf618);
        if (_0x2b88ae)
            break;
    }
    if (!_0x2b88ae) {
        const _0x2466a4 = document[_0x15c33a(0x14d) + _0x15c33a(0x3ed)](_0x1097dd[_0x15c33a(0x18b)]);
        for (const _0x90f4da of _0x2466a4) {
            if (_0x90f4da[_0x15c33a(0x1f4) + 't'][_0x15c33a(0x1a7)](_0x1097dd[_0x15c33a(0x13e)]) || _0x90f4da[_0x15c33a(0x1f4) + 't'][_0x15c33a(0x1a7)](_0x1097dd[_0x15c33a(0x1a6)])) {
                _0x2b88ae = _0x90f4da;
                break;
            }
        }
    }
    if (_0x2b88ae) {
        const _0x402f85 = _0x1097dd[_0x15c33a(0x250)](_0x2b88ae[_0x15c33a(0x399) + 'h'], 0xa * -0x2bd + -0xf * -0x25b + -0x7f3) && _0x1097dd[_0x15c33a(0x22d)](_0x2b88ae[_0x15c33a(0x153) + 'ht'], 0xc8a + -0x1d39 * 0x1 + 0x10af), _0x7a5feb = _0x2b88ae[_0x15c33a(0x1ad)] || _0x1097dd[_0x15c33a(0x2a6)](_0x2b88ae[_0x15c33a(0x15c) + 'te'](_0x1097dd[_0x15c33a(0x21c)]), _0x1097dd[_0x15c33a(0x386)]);
        if (_0x1097dd[_0x15c33a(0x1d7)](_0x402f85, !_0x7a5feb)) {
            const _0x26cfdd = _0x1097dd[_0x15c33a(0x2b8)][_0x15c33a(0x428)]('|');
            let _0xba6f12 = 0x7 * -0x19f + 0x2 * 0x1105 + 0x9d * -0x25;
            while (!![]) {
                switch (_0x26cfdd[_0xba6f12++]) {
                case '0':
                    _0x1097dd[_0x15c33a(0x282)](mostrarNotificacao, _0x1097dd[_0x15c33a(0x293)], _0x1097dd[_0x15c33a(0x417)]);
                    continue;
                case '1':
                    return !![];
                case '2':
                    console[_0x15c33a(0x28a)](_0x15c33a(0x2ff) + _0x15c33a(0x2ba) + _0x15c33a(0x147) + _0x15c33a(0x312) + _0x15c33a(0x276) + ultimoClick[_0x15c33a(0x3e1) + _0x15c33a(0x353)]());
                    continue;
                case '3':
                    _0x2b88ae[_0x15c33a(0x36b)]();
                    continue;
                case '4':
                    ultimoClick = new Date();
                    continue;
                }
                break;
            }
        }
    }
    return ![];
}
function mostrarNotificacao(_0xcc3a79, _0x2d9bab = _0x2d01e2(0x177)) {
    const _0x1fb1b7 = _0x2d01e2, _0x590bf0 = {
            'iHIjj': _0x1fb1b7(0x2a5) + _0x1fb1b7(0x352) + 'n',
            'oTEgy': function (_0x5ddd05, _0x3d0b86, _0x43b798) {
                return _0x5ddd05(_0x3d0b86, _0x43b798);
            },
            'fXAWm': _0x1fb1b7(0x14f),
            'RETWl': _0x1fb1b7(0x177),
            'NsoFJ': _0x1fb1b7(0x2c7),
            'jKVLm': _0x1fb1b7(0x2ef),
            'BrmVv': _0x1fb1b7(0x3de),
            'FypEk': _0x1fb1b7(0x3a6),
            'YmPGa': _0x1fb1b7(0x218),
            'rUqNY': _0x1fb1b7(0x319),
            'UaFNI': _0x1fb1b7(0x3f7),
            'wORgB': function (_0x22c491, _0x240de5) {
                return _0x22c491 === _0x240de5;
            },
            'ggUHh': _0x1fb1b7(0x406),
            'uIlwo': _0x1fb1b7(0x301),
            'fQqnZ': _0x1fb1b7(0x2f3) + _0x1fb1b7(0x3b1),
            'Bdavq': _0x1fb1b7(0x433),
            'UzHKr': function (_0x35ae68, _0x2d2ffb, _0x4ca86f) {
                return _0x35ae68(_0x2d2ffb, _0x4ca86f);
            }
        }, _0x153526 = document[_0x1fb1b7(0x313) + _0x1fb1b7(0x2eb)](_0x590bf0[_0x1fb1b7(0x382)]);
    _0x153526[_0x1fb1b7(0x1f4) + 't'] = _0xcc3a79;
    let _0x16a21e;
    switch (_0x2d9bab) {
    case _0x590bf0[_0x1fb1b7(0x14b)]:
        _0x16a21e = _0x590bf0[_0x1fb1b7(0x2e9)];
        break;
    case _0x590bf0[_0x1fb1b7(0x387)]:
        _0x16a21e = _0x590bf0[_0x1fb1b7(0x1e8)];
        break;
    case _0x590bf0[_0x1fb1b7(0x3ef)]:
        _0x16a21e = _0x590bf0[_0x1fb1b7(0x27c)];
        break;
    case _0x590bf0[_0x1fb1b7(0x211)]:
        _0x16a21e = _0x590bf0[_0x1fb1b7(0x205)];
        break;
    default:
        _0x16a21e = _0x590bf0[_0x1fb1b7(0x2e9)];
    }
    _0x153526[_0x1fb1b7(0x433)][_0x1fb1b7(0x2ab)] = _0x1fb1b7(0x1d3) + _0x1fb1b7(0x427) + _0x1fb1b7(0x33a) + _0x1fb1b7(0x2c2) + _0x1fb1b7(0x3f1) + _0x1fb1b7(0x289) + _0x1fb1b7(0x2b6) + _0x1fb1b7(0x3bf) + _0x1fb1b7(0x34b) + ':\x20' + _0x16a21e + (_0x1fb1b7(0x20c) + _0x1fb1b7(0x393)) + (_0x590bf0[_0x1fb1b7(0x36a)](_0x2d9bab, _0x590bf0[_0x1fb1b7(0x387)]) ? _0x590bf0[_0x1fb1b7(0x41c)] : _0x590bf0[_0x1fb1b7(0x43d)]) + (_0x1fb1b7(0x20c) + _0x1fb1b7(0x162) + _0x1fb1b7(0x176) + _0x1fb1b7(0x158) + _0x1fb1b7(0x159) + _0x1fb1b7(0x238) + _0x1fb1b7(0x17e) + _0x1fb1b7(0x1ca) + _0x1fb1b7(0x3aa) + _0x1fb1b7(0x25a) + _0x1fb1b7(0x3cc) + _0x1fb1b7(0x37a) + _0x1fb1b7(0x3a1) + _0x1fb1b7(0x39d) + _0x1fb1b7(0x391) + _0x1fb1b7(0x278) + _0x1fb1b7(0x16d) + _0x1fb1b7(0x39d) + _0x1fb1b7(0x1cb) + _0x1fb1b7(0x1e3) + _0x1fb1b7(0x35b) + _0x1fb1b7(0x334) + _0x1fb1b7(0x20c) + _0x1fb1b7(0x273) + _0x1fb1b7(0x38c) + _0x1fb1b7(0x179) + _0x1fb1b7(0x2c3));
    if (!document[_0x1fb1b7(0x1c5) + _0x1fb1b7(0x24a)](_0x590bf0[_0x1fb1b7(0x17d)])) {
        const _0x22c045 = document[_0x1fb1b7(0x313) + _0x1fb1b7(0x2eb)](_0x590bf0[_0x1fb1b7(0x324)]);
        _0x22c045['id'] = _0x590bf0[_0x1fb1b7(0x17d)], _0x22c045[_0x1fb1b7(0x1f4) + 't'] = _0x1fb1b7(0x438) + _0x1fb1b7(0x3b9) + _0x1fb1b7(0x34c) + _0x1fb1b7(0x28d) + _0x1fb1b7(0x262) + _0x1fb1b7(0x426) + _0x1fb1b7(0x405) + _0x1fb1b7(0x1ae) + _0x1fb1b7(0x1a8) + _0x1fb1b7(0x444) + _0x1fb1b7(0x438) + _0x1fb1b7(0x201) + _0x1fb1b7(0x27f) + _0x1fb1b7(0x344) + _0x1fb1b7(0x26b) + _0x1fb1b7(0x202) + _0x1fb1b7(0x437) + _0x1fb1b7(0x31b) + _0x1fb1b7(0x369) + _0x1fb1b7(0x3cd) + _0x1fb1b7(0x380) + _0x1fb1b7(0x262) + _0x1fb1b7(0x307) + _0x1fb1b7(0x392) + _0x1fb1b7(0x2bc) + _0x1fb1b7(0x253) + _0x1fb1b7(0x2ac) + _0x1fb1b7(0x246) + _0x1fb1b7(0x227) + _0x1fb1b7(0x18f) + _0x1fb1b7(0x300) + _0x1fb1b7(0x398) + _0x1fb1b7(0x189) + _0x1fb1b7(0x187) + _0x1fb1b7(0x262) + _0x1fb1b7(0x437), document[_0x1fb1b7(0x2a0)][_0x1fb1b7(0x231) + 'd'](_0x22c045);
    }
    document[_0x1fb1b7(0x335)][_0x1fb1b7(0x231) + 'd'](_0x153526), _0x590bf0[_0x1fb1b7(0x356)](setTimeout, () => {
        const _0xbfce7c = _0x1fb1b7;
        _0x153526[_0xbfce7c(0x433)][_0xbfce7c(0x3ae)] = _0x590bf0[_0xbfce7c(0x19b)], _0x590bf0[_0xbfce7c(0x421)](setTimeout, () => {
            const _0x23758e = _0xbfce7c;
            _0x153526[_0x23758e(0x16f)] && _0x153526[_0x23758e(0x16f)][_0x23758e(0x1b2) + 'd'](_0x153526);
        }, 0x15fd + -0x7be + 0xd13 * -0x1);
    }, 0x1a * -0x124 + -0x18f0 + 0x4250);
}
function configurarIntervalo() {
    const _0x2cc7f8 = _0x2d01e2, _0x6677f1 = {
            'BqDYY': function (_0x2acf3c) {
                return _0x2acf3c();
            },
            'exHiB': function (_0x195f77, _0x1ef757) {
                return _0x195f77(_0x1ef757);
            },
            'EGMIL': function (_0x34a8c6, _0x90ad33, _0x17ee42) {
                return _0x34a8c6(_0x90ad33, _0x17ee42);
            },
            'ogSwm': function (_0x2c590a, _0x1fd854) {
                return _0x2c590a / _0x1fd854;
            }
        };
    intervaloId && _0x6677f1[_0x2cc7f8(0x2e1)](clearInterval, intervaloId);
    intervaloId = _0x6677f1[_0x2cc7f8(0x3c6)](setInterval, () => {
        const _0x1d9db5 = _0x2cc7f8;
        _0x6677f1[_0x1d9db5(0x3df)](clicarBotaoPuxarChat);
    }, intervaloClick);
    const _0x80cdfe = Math[_0x2cc7f8(0x1b3)](_0x6677f1[_0x2cc7f8(0x1d8)](intervaloClick, 0x16da1 + -0x6543 + -0x1dfe * 0x1));
    console[_0x2cc7f8(0x28a)](_0x2cc7f8(0x2ff) + _0x2cc7f8(0x2ba) + _0x2cc7f8(0x2bd) + _0x2cc7f8(0x2aa) + _0x80cdfe + _0x2cc7f8(0x26a));
}
function iniciarAutoPuxar() {
    const _0x1c323b = _0x2d01e2, _0x3e0da6 = {
            'AeVbY': function (_0x3fc0dd) {
                return _0x3fc0dd();
            },
            'ZOEHr': function (_0x48054a, _0x4b094c) {
                return _0x48054a - _0x4b094c;
            },
            'lmVRy': function (_0x5286c9, _0x65dad3) {
                return _0x5286c9 >= _0x65dad3;
            },
            'CTmjt': function (_0x1056d9) {
                return _0x1056d9();
            },
            'zGPme': function (_0x413ffc, _0x55ac0a) {
                return _0x413ffc / _0x55ac0a;
            },
            'igbGx': function (_0x4e9320, _0x2dab19, _0x449ede) {
                return _0x4e9320(_0x2dab19, _0x449ede);
            },
            'WGkRR': function (_0x12860c, _0x18a09b, _0x2fedb8) {
                return _0x12860c(_0x18a09b, _0x2fedb8);
            }
        }, _0x4cd0ad = Math[_0x1c323b(0x1b3)](_0x3e0da6[_0x1c323b(0x18e)](intervaloClick, -0x4cf * -0x5 + 0x1ab48 + -0xd8f3));
    console[_0x1c323b(0x28a)](_0x1c323b(0x2ff) + _0x1c323b(0x2ba) + _0x1c323b(0x25b) + _0x1c323b(0x3f2) + _0x1c323b(0x171) + _0x1c323b(0x3a5) + _0x1c323b(0x1f9) + _0x4cd0ad + _0x1c323b(0x26a)), _0x3e0da6[_0x1c323b(0x275)](iniciarObserverNotificacoes), _0x3e0da6[_0x1c323b(0x275)](interceptarBotaoNaFila), _0x3e0da6[_0x1c323b(0x26c)](interceptarCliqueTicketLista), _0x3e0da6[_0x1c323b(0x26c)](iniciarCronometro), _0x3e0da6[_0x1c323b(0x3a8)](setTimeout, () => {
        const _0x50ddc8 = _0x1c323b;
        _0x3e0da6[_0x50ddc8(0x275)](clicarBotaoPuxarChat);
    }, 0x1e9b + 0x1 * 0x1a50 + -0x2563), _0x3e0da6[_0x1c323b(0x275)](configurarIntervalo), _0x3e0da6[_0x1c323b(0x346)](setInterval, () => {
        const _0x2e4f48 = _0x1c323b;
        if (ultimoClick) {
            const _0x24ed93 = _0x3e0da6[_0x2e4f48(0x212)](new Date(), ultimoClick);
            _0x3e0da6[_0x2e4f48(0x2e0)](_0x24ed93, intervaloClick) && _0x3e0da6[_0x2e4f48(0x26c)](clicarBotaoPuxarChat);
        }
    }, INTERVALO_VERIFICACAO), _0x3e0da6[_0x1c323b(0x26c)](iniciarObserverCheckboxesFusao);
}
chrome[_0x2d01e2(0x1e9)][_0x2d01e2(0x339)][_0x2d01e2(0x1d4) + 'r']((_0x3cde53, _0x4c0248, _0x42ae06) => {
    const _0x9b15dc = _0x2d01e2, _0x35435b = {
            'DMhPa': function (_0x2a7472, _0x4e3148) {
                return _0x2a7472 === _0x4e3148;
            },
            'GoSFW': _0x9b15dc(0x424),
            'wEtcN': function (_0x18129c, _0x31424d) {
                return _0x18129c !== _0x31424d;
            },
            'xGaUg': function (_0x45bc8d, _0x565b91, _0x3c3d6a) {
                return _0x45bc8d(_0x565b91, _0x3c3d6a);
            },
            'hkjJJ': _0x9b15dc(0x3d1) + _0x9b15dc(0x23a) + _0x9b15dc(0x1ef),
            'QkyjX': _0x9b15dc(0x3e2) + _0x9b15dc(0x395) + _0x9b15dc(0x443),
            'dRTKB': _0x9b15dc(0x3a6),
            'NARtd': function (_0x5a5274, _0x3423bf) {
                return _0x5a5274(_0x3423bf);
            },
            'XlUwf': _0x9b15dc(0x1e0),
            'lXemY': function (_0x55dadc) {
                return _0x55dadc();
            },
            'Tmrun': function (_0x3be4cb) {
                return _0x3be4cb();
            },
            'lEisI': function (_0x3955e7, _0x404e77) {
                return _0x3955e7 / _0x404e77;
            },
            'mDlUk': function (_0x5adf9a, _0x3a27ac) {
                return _0x5adf9a(_0x3a27ac);
            },
            'oUCee': _0x9b15dc(0x349),
            'nviTq': _0x9b15dc(0x163),
            'Tawmr': function (_0x15eab2, _0x1ca926) {
                return _0x15eab2 === _0x1ca926;
            },
            'djLAc': _0x9b15dc(0x42a) + 'lo',
            'JNZaF': function (_0x2c46d3, _0x5eb397) {
                return _0x2c46d3 >= _0x5eb397;
            },
            'TiLPO': function (_0x2b8ac0, _0x324076) {
                return _0x2b8ac0 <= _0x324076;
            },
            'wZScJ': _0x9b15dc(0x3a4),
            'zJfZL': function (_0x56d1b6, _0xd2568c, _0x2d2978) {
                return _0x56d1b6(_0xd2568c, _0x2d2978);
            },
            'aLKpL': function (_0x296d73, _0x338338) {
                return _0x296d73(_0x338338);
            },
            'qAeOP': function (_0x4d3f03, _0xb2dbd7) {
                return _0x4d3f03 * _0xb2dbd7;
            },
            'TIyEA': function (_0x3356d1, _0x2cfb7c) {
                return _0x3356d1 * _0x2cfb7c;
            },
            'VDPgc': _0x9b15dc(0x144) + _0x9b15dc(0x2b5) + _0x9b15dc(0x2b3) + _0x9b15dc(0x33c),
            'FKApY': _0x9b15dc(0x1f8) + _0x9b15dc(0x44a),
            'oIfrA': function (_0x4e15aa, _0x19ffc1) {
                return _0x4e15aa >= _0x19ffc1;
            },
            'mPkCB': function (_0x1ebdaf, _0x51355a, _0x137cd8) {
                return _0x1ebdaf(_0x51355a, _0x137cd8);
            },
            'HBxIY': function (_0x41316f, _0x599276) {
                return _0x41316f(_0x599276);
            },
            'ZIjaf': _0x9b15dc(0x3c7) + _0x9b15dc(0x191) + _0x9b15dc(0x248) + _0x9b15dc(0x44a),
            'tPLFo': function (_0x5bf6f4, _0x59b1c1) {
                return _0x5bf6f4 === _0x59b1c1;
            },
            'NPymv': _0x9b15dc(0x371) + _0x9b15dc(0x3b7),
            'jplvM': _0x9b15dc(0x3e8) + _0x9b15dc(0x1c0) + _0x9b15dc(0x1e1) + 'A',
            'SZeFl': _0x9b15dc(0x3e8) + _0x9b15dc(0x1c0) + _0x9b15dc(0x1a0) + _0x9b15dc(0x3b5),
            'NbUlT': function (_0x1d7a5b, _0x43c175) {
                return _0x1d7a5b === _0x43c175;
            },
            'TmVhn': _0x9b15dc(0x381) + _0x9b15dc(0x343) + _0x9b15dc(0x338),
            'bpNFZ': function (_0x4533e7, _0x2850ec, _0x9f29f0) {
                return _0x4533e7(_0x2850ec, _0x9f29f0);
            },
            'TmAUU': _0x9b15dc(0x290) + _0x9b15dc(0x18a) + _0x9b15dc(0x315) + _0x9b15dc(0x233),
            'UedjL': _0x9b15dc(0x290) + _0x9b15dc(0x18a) + _0x9b15dc(0x330) + _0x9b15dc(0x39a),
            'PMHVO': function (_0x28bd07, _0xa77f19) {
                return _0x28bd07(_0xa77f19);
            },
            'xWSGA': function (_0x539a17, _0x3ae8b6) {
                return _0x539a17 === _0x3ae8b6;
            },
            'vsMGM': _0x9b15dc(0x157) + _0x9b15dc(0x343) + _0x9b15dc(0x338),
            'AxzKE': _0x9b15dc(0x2c0) + _0x9b15dc(0x3b7),
            'ZvMox': function (_0x18b8c2, _0x2c0d37) {
                return _0x18b8c2(_0x2c0d37);
            }
        };
    if (_0x35435b[_0x9b15dc(0x295)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x34e)]))
        notificacoesAtivas = _0x35435b[_0x9b15dc(0x1c3)](_0x3cde53[_0x9b15dc(0x27d)], undefined) ? _0x3cde53[_0x9b15dc(0x27d)] : !notificacoesAtivas, chrome[_0x9b15dc(0x3b8)][_0x9b15dc(0x229)][_0x9b15dc(0x271)]({ 'notificacoesAtivas': notificacoesAtivas }), _0x35435b[_0x9b15dc(0x3cb)](mostrarNotificacao, notificacoesAtivas ? _0x35435b[_0x9b15dc(0x2be)] : _0x35435b[_0x9b15dc(0x1c8)], _0x35435b[_0x9b15dc(0x230)]), _0x35435b[_0x9b15dc(0x2c8)](_0x42ae06, { 'notificacoesAtivas': notificacoesAtivas });
    else {
        if (_0x35435b[_0x9b15dc(0x295)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x40b)])) {
            const _0x2287a2 = _0x35435b[_0x9b15dc(0x318)](verificarStatusOnline), _0xeb534a = _0x35435b[_0x9b15dc(0x359)](contarChatsAtivos), _0xc7ba10 = Math[_0x9b15dc(0x1b3)](_0x35435b[_0x9b15dc(0x150)](intervaloClick, -0x10e22 + -0x19451 + 0x38cd3));
            _0x35435b[_0x9b15dc(0x43c)](_0x42ae06, {
                'notificacoesAtivas': notificacoesAtivas,
                'ultimoClick': ultimoClick ? ultimoClick[_0x9b15dc(0x3e1) + _0x9b15dc(0x353)]() : _0x35435b[_0x9b15dc(0x2bb)],
                'online': _0x2287a2,
                'chatsAtivos': _0xeb534a,
                'intervalo': _0xc7ba10,
                'limiteChats': limiteChats,
                'tempoOnline': _0x35435b[_0x9b15dc(0x2c8)](formatarTempo, tempoOnlineSegundos)
            });
        } else {
            if (_0x35435b[_0x9b15dc(0x295)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x24b)])) {
                const _0x50da1d = _0x35435b[_0x9b15dc(0x318)](clicarBotaoPuxarChat);
                _0x35435b[_0x9b15dc(0x43c)](_0x42ae06, { 'sucesso': _0x50da1d });
            } else {
                if (_0x35435b[_0x9b15dc(0x416)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x1c4)])) {
                    const _0x41b413 = _0x3cde53[_0x9b15dc(0x27d)];
                    if (_0x41b413 && _0x35435b[_0x9b15dc(0x236)](_0x41b413, 0x1ac4 + -0x296 * 0x8 + -0x613) && _0x35435b[_0x9b15dc(0x3ac)](_0x41b413, 0x211 * 0x3 + 0x57 * 0xe + 0xb7 * -0xf)) {
                        const _0x2a152b = _0x35435b[_0x9b15dc(0x13b)][_0x9b15dc(0x428)]('|');
                        let _0x2e4a3 = 0x15 * -0x15d + 0x7d5 + 0x14cc;
                        while (!![]) {
                            switch (_0x2a152b[_0x2e4a3++]) {
                            case '0':
                                _0x35435b[_0x9b15dc(0x2e2)](mostrarNotificacao, _0x9b15dc(0x322) + _0x9b15dc(0x3d3) + _0x9b15dc(0x214) + _0x41b413 + _0x9b15dc(0x26a), _0x35435b[_0x9b15dc(0x230)]);
                                continue;
                            case '1':
                                _0x35435b[_0x9b15dc(0x27a)](_0x42ae06, {
                                    'sucesso': !![],
                                    'intervalo': _0x41b413
                                });
                                continue;
                            case '2':
                                _0x35435b[_0x9b15dc(0x359)](configurarIntervalo);
                                continue;
                            case '3':
                                intervaloClick = _0x35435b[_0x9b15dc(0x2df)](_0x35435b[_0x9b15dc(0x3c3)](_0x41b413, 0x19 * 0x13 + 0x1ff4 + 0xf * -0x23d), 0x26dc + 0x74c + -0x2a40);
                                continue;
                            case '4':
                                chrome[_0x9b15dc(0x3b8)][_0x9b15dc(0x229)][_0x9b15dc(0x271)]({ 'intervaloMinutos': _0x41b413 });
                                continue;
                            }
                            break;
                        }
                    } else
                        _0x35435b[_0x9b15dc(0x43c)](_0x42ae06, {
                            'sucesso': ![],
                            'erro': _0x35435b[_0x9b15dc(0x408)]
                        });
                } else {
                    if (_0x35435b[_0x9b15dc(0x295)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x1be)])) {
                        const _0x529fb4 = _0x3cde53[_0x9b15dc(0x27d)];
                        _0x529fb4 && _0x35435b[_0x9b15dc(0x375)](_0x529fb4, -0x126b + 0x37c * 0x3 + 0xa * 0xcc) && _0x35435b[_0x9b15dc(0x3ac)](_0x529fb4, 0x18c0 + 0x7 * -0x441 + -0x1 * -0x511) ? (limiteChats = _0x529fb4, chrome[_0x9b15dc(0x3b8)][_0x9b15dc(0x229)][_0x9b15dc(0x271)]({ 'limiteChats': _0x529fb4 }), _0x35435b[_0x9b15dc(0x2a3)](mostrarNotificacao, _0x9b15dc(0x247) + _0x9b15dc(0x41a) + _0x9b15dc(0x15d) + _0x529fb4 + _0x9b15dc(0x3fa), _0x35435b[_0x9b15dc(0x230)]), _0x35435b[_0x9b15dc(0x43c)](_0x42ae06, {
                            'sucesso': !![],
                            'limiteChats': _0x529fb4
                        })) : _0x35435b[_0x9b15dc(0x3a3)](_0x42ae06, {
                            'sucesso': ![],
                            'erro': _0x35435b[_0x9b15dc(0x2da)]
                        });
                    } else {
                        if (_0x35435b[_0x9b15dc(0x156)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x3fc)]))
                            confirmarCliqueManual = _0x3cde53[_0x9b15dc(0x27d)], chrome[_0x9b15dc(0x3b8)][_0x9b15dc(0x229)][_0x9b15dc(0x271)]({ 'confirmarCliqueManual': confirmarCliqueManual }), _0x35435b[_0x9b15dc(0x2e2)](mostrarNotificacao, confirmarCliqueManual ? _0x35435b[_0x9b15dc(0x329)] : _0x35435b[_0x9b15dc(0x261)], _0x35435b[_0x9b15dc(0x230)]), _0x35435b[_0x9b15dc(0x27a)](_0x42ae06, {
                                'sucesso': !![],
                                'confirmarCliqueManual': confirmarCliqueManual
                            });
                        else {
                            if (_0x35435b[_0x9b15dc(0x1bd)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x29a)]))
                                copiarTicketListaAoClicar = !!_0x3cde53[_0x9b15dc(0x27d)], chrome[_0x9b15dc(0x3b8)][_0x9b15dc(0x229)][_0x9b15dc(0x271)]({ 'copiarTicketListaAoClicar': copiarTicketListaAoClicar }), _0x35435b[_0x9b15dc(0x326)](mostrarNotificacao, copiarTicketListaAoClicar ? _0x35435b[_0x9b15dc(0x336)] : _0x35435b[_0x9b15dc(0x2db)], _0x35435b[_0x9b15dc(0x230)]), _0x35435b[_0x9b15dc(0x2e3)](_0x42ae06, {
                                    'sucesso': !![],
                                    'copiarTicketListaAoClicar': copiarTicketListaAoClicar
                                });
                            else {
                                if (_0x35435b[_0x9b15dc(0x3cf)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x303)]))
                                    _0x35435b[_0x9b15dc(0x43c)](_0x42ae06, { 'copiarTicketListaAoClicar': copiarTicketListaAoClicar });
                                else
                                    _0x35435b[_0x9b15dc(0x416)](_0x3cde53[_0x9b15dc(0x38d)], _0x35435b[_0x9b15dc(0x43f)]) && _0x35435b[_0x9b15dc(0x26f)](_0x42ae06, { 'confirmarCliqueManual': confirmarCliqueManual });
                            }
                        }
                    }
                }
            }
        }
    }
    return !![];
});
let autoPuxarIniciado = ![];
function iniciarAutoPuxarSeNecessario() {
    const _0x1837fa = _0x2d01e2, _0x3a65e5 = {
            'maKWZ': function (_0x3c9df9) {
                return _0x3c9df9();
            }
        };
    if (autoPuxarIniciado)
        return;
    autoPuxarIniciado = !![], _0x3a65e5[_0x1837fa(0x1cd)](iniciarAutoPuxar);
}
function carregarConfiguracoesEIniciar() {
    const _0x2ec973 = _0x2d01e2, _0x4f43de = {
            'nubhL': _0x2ec973(0x409) + _0x2ec973(0x314),
            'xjTeq': function (_0x1fae09) {
                return _0x1fae09();
            },
            'yPLbj': function (_0x3b800d, _0x2c963d) {
                return _0x3b800d !== _0x2c963d;
            },
            'FfKby': function (_0x5992a8, _0x4a8ced) {
                return _0x5992a8 !== _0x4a8ced;
            },
            'hQPXg': _0x2ec973(0x292),
            'fCjEB': _0x2ec973(0x241),
            'MesDa': function (_0x169eb3, _0x4f4ef2) {
                return _0x169eb3(_0x4f4ef2);
            },
            'FkXAO': _0x2ec973(0x1eb),
            'VrkCv': _0x2ec973(0x3f9),
            'BsXQK': function (_0x505344, _0x48ef35) {
                return _0x505344 * _0x48ef35;
            },
            'SgjXy': function (_0x42915d, _0x2324c0) {
                return _0x42915d * _0x2324c0;
            },
            'nKyMs': _0x2ec973(0x3f8) + _0x2ec973(0x311),
            'bbfmI': _0x2ec973(0x40a) + _0x2ec973(0x2cb),
            'vBVau': _0x2ec973(0x2fe) + 's',
            'ZTcnw': _0x2ec973(0x22b) + _0x2ec973(0x39c),
            'dqsTw': _0x2ec973(0x15b) + _0x2ec973(0x223) + 'l',
            'TchPD': _0x2ec973(0x3bc) + _0x2ec973(0x425) + _0x2ec973(0x403)
        };
    chrome[_0x2ec973(0x3b8)][_0x2ec973(0x229)][_0x2ec973(0x1ed)]([
        _0x4f43de[_0x2ec973(0x285)],
        _0x4f43de[_0x2ec973(0x333)],
        _0x4f43de[_0x2ec973(0x1fa)],
        _0x4f43de[_0x2ec973(0x385)],
        _0x4f43de[_0x2ec973(0x1db)],
        _0x4f43de[_0x2ec973(0x337)]
    ], function (_0x1da3bb) {
        const _0x173f9e = _0x2ec973, _0x3e1530 = _0x4f43de[_0x173f9e(0x1b1)][_0x173f9e(0x428)]('|');
        let _0xfe9190 = 0x11b1 * 0x1 + -0x1893 + 0x6e2;
        while (!![]) {
            switch (_0x3e1530[_0xfe9190++]) {
            case '0':
                _0x4f43de[_0x173f9e(0x2af)](iniciarAutoPuxarSeNecessario);
                continue;
            case '1':
                _0x4f43de[_0x173f9e(0x267)](_0x1da3bb[_0x173f9e(0x2fe) + 's'], undefined) && (limiteChats = _0x1da3bb[_0x173f9e(0x2fe) + 's'], console[_0x173f9e(0x28a)](_0x173f9e(0x2ff) + _0x173f9e(0x2ba) + _0x173f9e(0x3f3) + _0x173f9e(0x33d) + _0x173f9e(0x188) + _0x173f9e(0x383) + _0x1da3bb[_0x173f9e(0x2fe) + 's']));
                continue;
            case '2':
                _0x4f43de[_0x173f9e(0x16c)](_0x1da3bb[_0x173f9e(0x3bc) + _0x173f9e(0x425) + _0x173f9e(0x403)], undefined) && (copiarTicketListaAoClicar = _0x1da3bb[_0x173f9e(0x3bc) + _0x173f9e(0x425) + _0x173f9e(0x403)], console[_0x173f9e(0x28a)](_0x173f9e(0x2ff) + _0x173f9e(0x2ba) + _0x173f9e(0x28c) + _0x173f9e(0x368) + _0x173f9e(0x239) + ':\x20' + (copiarTicketListaAoClicar ? _0x4f43de[_0x173f9e(0x258)] : _0x4f43de[_0x173f9e(0x404)])));
                continue;
            case '3':
                _0x4f43de[_0x173f9e(0x267)](_0x1da3bb[_0x173f9e(0x22b) + _0x173f9e(0x39c)], undefined) && (tempoOnlineSegundos = _0x1da3bb[_0x173f9e(0x22b) + _0x173f9e(0x39c)], console[_0x173f9e(0x28a)](_0x173f9e(0x2ff) + _0x173f9e(0x2ba) + _0x173f9e(0x3b3) + _0x173f9e(0x174) + _0x173f9e(0x194) + '\x20' + _0x4f43de[_0x173f9e(0x2ca)](formatarTempo, tempoOnlineSegundos)));
                continue;
            case '4':
                _0x4f43de[_0x173f9e(0x267)](_0x1da3bb[_0x173f9e(0x15b) + _0x173f9e(0x223) + 'l'], undefined) && (confirmarCliqueManual = _0x1da3bb[_0x173f9e(0x15b) + _0x173f9e(0x223) + 'l'], console[_0x173f9e(0x28a)](_0x173f9e(0x2ff) + _0x173f9e(0x2ba) + _0x173f9e(0x29e) + _0x173f9e(0x291) + _0x173f9e(0x1da) + (confirmarCliqueManual ? _0x4f43de[_0x173f9e(0x148)] : _0x4f43de[_0x173f9e(0x445)])));
                continue;
            case '5':
                _0x4f43de[_0x173f9e(0x267)](_0x1da3bb[_0x173f9e(0x40a) + _0x173f9e(0x2cb)], undefined) && (intervaloClick = _0x4f43de[_0x173f9e(0x434)](_0x4f43de[_0x173f9e(0x40d)](_0x1da3bb[_0x173f9e(0x40a) + _0x173f9e(0x2cb)], 0x1d69 + -0x1b5a + -0x1d3), -0x3 * 0x3ac + 0x4b * 0x1f + -0x1 * -0x5d7), console[_0x173f9e(0x28a)](_0x173f9e(0x2ff) + _0x173f9e(0x2ba) + _0x173f9e(0x2bd) + _0x173f9e(0x3d7) + _0x173f9e(0x13f) + _0x1da3bb[_0x173f9e(0x40a) + _0x173f9e(0x2cb)] + _0x173f9e(0x26a)));
                continue;
            case '6':
                _0x4f43de[_0x173f9e(0x267)](_0x1da3bb[_0x173f9e(0x3f8) + _0x173f9e(0x311)], undefined) && (notificacoesAtivas = _0x1da3bb[_0x173f9e(0x3f8) + _0x173f9e(0x311)]);
                continue;
            }
            break;
        }
    });
}
document[_0x2d01e2(0x342)] === _0x2d01e2(0x224) ? document[_0x2d01e2(0x245) + _0x2d01e2(0x3f6)](_0x2d01e2(0x175) + _0x2d01e2(0x220), carregarConfiguracoesEIniciar) : carregarConfiguracoesEIniciar();