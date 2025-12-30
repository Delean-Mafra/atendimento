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

const _0x5cdbe5 = _0x4024;
(function (_0x2a3b71, _0xdf3aa) {
    const _0x387a61 = _0x4024, _0x4d7ab4 = _0x2a3b71();
    while (!![]) {
        try {
            const _0xa3b6ec = parseInt(_0x387a61(0x274)) / (-0xbcb * 0x1 + -0xd3 * -0x27 + -0x1 * 0x1459) * (-parseInt(_0x387a61(0x126)) / (0x98f * -0x2 + -0x14a3 + 0x27c3)) + parseInt(_0x387a61(0x20f)) / (0x30b + -0x39a + 0x49 * 0x2) * (-parseInt(_0x387a61(0x245)) / (-0x41e * 0x2 + 0x15 * -0x17b + 0x1 * 0x2757)) + -parseInt(_0x387a61(0x276)) / (-0x5d * -0x19 + -0x7dc * 0x2 + 0x6a8) + -parseInt(_0x387a61(0x127)) / (-0xe * -0x2b + -0x8e0 + 0x68c) + parseInt(_0x387a61(0x2e4)) / (-0x4 * 0xab + -0x39 * -0xa5 + -0x220a) * (parseInt(_0x387a61(0x343)) / (0x7 * 0x502 + 0x52 * 0x46 + -0x3972)) + parseInt(_0x387a61(0x36f)) / (-0x1ba2 + -0x99f + 0x6 * 0x637) + parseInt(_0x387a61(0x1c6)) / (0x1 * -0x11 + -0x1e5 * 0xd + 0x18bc);
            if (_0xa3b6ec === _0xdf3aa)
                break;
            else
                _0x4d7ab4['push'](_0x4d7ab4['shift']());
        } catch (_0xe585f7) {
            _0x4d7ab4['push'](_0x4d7ab4['shift']());
        }
    }
}(_0x1833, 0x1584ce * -0x1 + -0xa713e + -0xa4e * -0x469));
const INTERVALO_VERIFICACAO = 0xa5f + -0x6 * -0x593 + 0xd * -0x2c5;
let intervaloClick = (0xa4 * 0x1f + -0x2 * 0x112d + -0xa * -0x174) * (0x8a * 0xf + -0x83 * -0x36 + 0x4 * -0x8df) * (-0x10 * -0xb + 0x1e15 + -0x1add * 0x1), limiteChats = -0x1d6 + -0x77 * 0x1 + -0x250 * -0x1, notificacoesAtivas = !![], ultimoClick = null, intervaloId = null, tempoOnlineSegundos = -0xf * 0x26 + -0x2399 + 0x25d3, statusAnterior = ![], intervaloTempoOnline = null, confirmarCliqueManual = !![];
function removerNotificacoesZendesk() {
    const _0x3df926 = _0x4024, _0x128cfd = {
            'cufJS': _0x3df926(0x16f) + _0x3df926(0x25a) + _0x3df926(0x2d7) + _0x3df926(0x252),
            'XFlwR': _0x3df926(0x198) + _0x3df926(0x184),
            'Cfsdg': _0x3df926(0x221) + 'ne',
            'yfZUx': _0x3df926(0x172) + _0x3df926(0x1a9),
            'orGDN': _0x3df926(0x34e) + _0x3df926(0x223) + _0x3df926(0x1a4) + _0x3df926(0x2c7) + _0x3df926(0x15f) + _0x3df926(0x171) + _0x3df926(0x244) + _0x3df926(0x138),
            'GLedH': _0x3df926(0x36d) + _0x3df926(0x346) + _0x3df926(0x2c3) + _0x3df926(0x2fb) + _0x3df926(0x265),
            'kZLhw': _0x3df926(0x1d7) + _0x3df926(0x149) + _0x3df926(0x1c7) + _0x3df926(0x1a1) + _0x3df926(0x331)
        }, _0x3fafe8 = [
            _0x128cfd[_0x3df926(0x21b)],
            _0x128cfd[_0x3df926(0x194)]
        ];
    _0x3fafe8[_0x3df926(0x255)](_0x56fff0 => {
        const _0x128551 = _0x3df926, _0x106a1c = document[_0x128551(0x220) + _0x128551(0x273)](_0x56fff0);
        _0x106a1c[_0x128551(0x255)](_0x28f185 => {
            const _0x49210b = _0x128551, _0xb7ea3 = _0x28f185[_0x49210b(0x220) + _0x49210b(0x1f5)](_0x128cfd[_0x49210b(0x30a)]);
            _0xb7ea3 && (_0xb7ea3[_0x49210b(0x182) + 't'][_0x49210b(0x2d5)](_0x128cfd[_0x49210b(0x35b)]) || _0xb7ea3[_0x49210b(0x182) + 't'][_0x49210b(0x2d5)](_0x128cfd[_0x49210b(0x1a7)]) || _0xb7ea3[_0x49210b(0x182) + 't'][_0x49210b(0x2d5)](_0x128cfd[_0x49210b(0x2d8)])) && (_0x28f185[_0x49210b(0x24c)](), console[_0x49210b(0x29b)](_0x128cfd[_0x49210b(0x224)]));
        });
    });
}
function iniciarObserverNotificacoes() {
    const _0x59ddbc = _0x4024, _0x40517c = {
            'ZHXvq': function (_0x3ae7c6) {
                return _0x3ae7c6();
            },
            'Bdyvu': function (_0x561ee3) {
                return _0x561ee3();
            },
            'ylHXR': _0x59ddbc(0x34e) + _0x59ddbc(0x223) + _0x59ddbc(0x159) + _0x59ddbc(0x17f) + _0x59ddbc(0x193) + _0x59ddbc(0x137)
        }, _0x471cbf = new MutationObserver(_0xa0195d => {
            const _0x5d6945 = _0x59ddbc;
            _0xa0195d[_0x5d6945(0x255)](() => {
                const _0x2fba6b = _0x5d6945;
                _0x40517c[_0x2fba6b(0x2a1)](removerNotificacoesZendesk);
            });
        });
    _0x471cbf[_0x59ddbc(0x1ee)](document[_0x59ddbc(0x189)], {
        'childList': !![],
        'subtree': !![]
    }), _0x40517c[_0x59ddbc(0x24b)](removerNotificacoesZendesk), console[_0x59ddbc(0x29b)](_0x40517c[_0x59ddbc(0x2a8)]);
}
function interceptarBotaoNaFila() {
    const _0x50058b = _0x4024, _0x448531 = {
            'ehEYn': _0x50058b(0x2e8) + _0x50058b(0x2e5) + _0x50058b(0x1bc) + _0x50058b(0x32f) + _0x50058b(0x1c3) + _0x50058b(0x2e8) + _0x50058b(0x21a) + _0x50058b(0x1df) + _0x50058b(0x192) + _0x50058b(0x1e9),
            'Xjfdv': function (_0xab121, _0x4173e3) {
                return _0xab121(_0x4173e3);
            },
            'gTofn': _0x50058b(0x1cf),
            'HsPGq': _0x50058b(0x34e) + _0x50058b(0x223) + _0x50058b(0x1d5) + _0x50058b(0x150) + _0x50058b(0x329) + _0x50058b(0x231) + _0x50058b(0x25c)
        };
    document[_0x50058b(0x14a) + _0x50058b(0x2b5)](_0x448531[_0x50058b(0x323)], function (_0x32612e) {
        const _0x1de590 = _0x50058b;
        if (!confirmarCliqueManual)
            return;
        const _0x28b6d5 = _0x32612e[_0x1de590(0x275)], _0x211880 = _0x28b6d5[_0x1de590(0x1f6)](_0x448531[_0x1de590(0x19c)]);
        _0x211880 && (!_0x211880[_0x1de590(0x2ba)][_0x1de590(0x186) + _0x1de590(0x295)] && (_0x32612e[_0x1de590(0x206) + _0x1de590(0x230)](), _0x32612e[_0x1de590(0x1ba) + _0x1de590(0x258)](), _0x32612e[_0x1de590(0x1ca) + _0x1de590(0x33b) + _0x1de590(0x21c)](), _0x448531[_0x1de590(0x28f)](mostrarDialogoConfirmacao, _0x211880)));
    }, !![]), console[_0x50058b(0x29b)](_0x448531[_0x50058b(0x1ab)]);
}
function _0x1833() {
    const _0x1f50fa = [
        '#ffc107',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20p',
        'da\x20',
        'ixed;\x0a\x20\x20\x20\x20',
        'ylHXR',
        '-id=\x22heade',
        '20px;\x0a\x20\x20\x20\x20',
        '\x20\x20\x20\x22>Sim,\x20',
        'in-bottom:',
        'rmacao',
        'old;\x0a\x20\x20\x20\x20\x20',
        'padStart',
        'GUVBs',
        'CVgAT',
        ':\x2010px;\x20ju',
        '\x20\x20\x20\x20\x20\x20\x20</p',
        'toLocaleTi',
        'stener',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20b',
        '\x2018px;\x22>Co',
        'nômetro\x20de',
        'ções\x20ATIVA',
        'dataset',
        'ONLINE',
        'uGiHo',
        '0,\x200,\x200.6)',
        'NYgJJ',
        'DOMContent',
        'px;\x0a\x20\x20\x20\x20\x20\x20',
        'ATIVA',
        'ahgora-btn',
        'ta-test-id',
        '\x20\x20\x20\x20top:\x200',
        'fila',
        'ut;\x0a\x20\x20\x20\x20',
        'ificação\x20r',
        'r-tab-subt',
        'border-rad',
        'cuTor',
        '\x20\x20\x20@keyfra',
        '#000',
        'JOcoH',
        'm:\x20transla',
        'orm:\x20trans',
        'hmErY',
        'ngstL',
        'esk]\x20🚫\x20Usu',
        '\x20\x20\x20\x20\x20\x20\x20to\x20',
        ',0,0.3);\x0a\x20',
        'includes',
        'osition:\x20f',
        'ication-ti',
        'yfZUx',
        'BFUFp',
        '.1);\x0a\x20\x20\x20\x20\x20',
        'EBfQT',
        '\x20\x20\x20\x20\x20\x20font',
        'button',
        'get',
        'ensão\x20inic',
        'tus:\x20',
        '-weight:\x20b',
        'acity:\x201;\x20',
        '\x20\x20\x20\x20\x20\x20\x20\x20fo',
        '3189837oQFceJ',
        'a-polaris-',
        '\x20\x20\x20\x20\x20\x20\x20\x20@k',
        'lRxdu',
        'button[dat',
        'status',
        'QrCPu',
        '🛡️\x20Confirma',
        'info',
        '⚠️</div>\x0a\x20\x20',
        'onMessage',
        'set',
        'parentNode',
        'pOmTT',
        'r;\x22>\x0a\x20\x20\x20\x20\x20',
        'deve\x20ser\x20e',
        'color:\x20whi',
        '\x20Deseja\x20re',
        'ateX(0);\x20o',
        'LmItg',
        'mes\x20slideI',
        'DESATIVA',
        'uoVhR',
        '=\x22notifica',
        'createElem',
        'ntinuar?\x0a\x20',
        '\x20\x20\x20\x20\x20<butt',
        'stify-cont',
        'zHVFq',
        'QMGoV',
        'order:\x20non',
        'anslateX(4',
        'font-size:',
        'z-index:\x209',
        '\x20\x20\x20\x20\x20\x20<h3\x20',
        'eGCtv',
        'aria-disab',
        'ahgora-dia',
        'cufJS',
        'OFFLINE',
        'iada\x20-\x20Cli',
        'KCdzK',
        'EiAPC',
        '\x20\x20\x20\x20\x20\x20\x20\x20co',
        '0px;\x0a\x20\x20\x20\x20\x20',
        'vXJYu',
        'ervalo\x20car',
        'iUMEe',
        'getAttribu',
        'setLimiteC',
        'esk]\x20📡\x20Sta',
        'loading',
        'ra\x20puxar\x20c',
        'RHcBV',
        'tyle=\x22\x0a\x20\x20\x20',
        'esAtivas',
        'Loaded',
        'jFZIy',
        'Limite\x20dev',
        '7);\x0a\x20\x20\x20\x20\x20\x20',
        'eZXWK',
        'ra\x20',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20t',
        'gTofn',
        'ound-color',
        'cUCRT',
        '\x22omnichann',
        '\x20\x20\x20\x20\x20\x20padd',
        'DAS',
        '\x20de\x20clique',
        'ODcSp',
        'ção\x20de\x20cli',
        'limiteChat',
        'floor',
        'setInterva',
        '-id=\x22serve',
        'MvYfq',
        'cation\x22]',
        'BfwQh',
        'Intervalo\x20',
        '\x20\x20\x20\x22>Cance',
        'logo-confi',
        'color:\x20',
        'lay:\x20flex;',
        'esk]\x20⚠️\x20Não',
        'MZiad',
        '#666;\x20marg',
        'atePropaga',
        'left:\x200;\x0a\x20',
        'ticamente!',
        'DREPQ',
        'ts\x20carrega',
        'sTubV',
        'ardando...',
        'hgora-btn-',
        '8XzNktJ',
        '2|4|0|1|3',
        'esk]\x20🚀\x20Ext',
        'alert\x22][da',
        'PLzpO',
        '\x20chats',
        'nt-family:',
        'runtime',
        'appendChil',
        'offsetHeig',
        '/h3>\x0a\x20\x20\x20\x20\x20',
        '[Ahgora\x20To',
        'ancelado',
        'innerHTML',
        'lkZbq',
        'o\x20{\x20transf',
        ':\x20999999;\x0a',
        'lor:\x20#dc35',
        'e\x201\x20e\x2010\x20c',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'BCPoU',
        '.3s\x20ease-o',
        '0|3|4|1|2',
        'ign:\x20cente',
        'XFlwR',
        'gin:\x200\x200\x201',
        't-size:\x2014',
        'getConfirm',
        'div>\x0a\x20\x20\x20\x20',
        'lterado\x20pa',
        'JTShC',
        'Na\x20fila',
        '45,\x20#20c99',
        'eGDZg',
        'clickNow',
        'firmação\x20m',
        '🔔\x20Notifica',
        'ora-btn-co',
        '\x20ONLINE\x20pa',
        'ById',
        'rm:\x20transl',
        'MgYRU',
        'div[role=\x22',
        'LqgnX',
        '4091058WwfTBM',
        'GWXZR',
        'LNpQo',
        'lideOut\x20{\x0a',
        'UcZhc',
        'EAEId',
        'HSknk',
        'carregado:',
        'esk]\x20🛡️\x20Con',
        'bKdvW',
        'lateX(400p',
        'AWipZ',
        'car\x20o\x20stat',
        'ls-styles',
        'po\x20online\x20',
        'Xskpw',
        'esk]\x20⏱️\x20Int',
        't\x20manualme',
        'DHEVZ',
        'fuMaQ',
        'n\x20{\x0a\x20\x20\x20\x20\x20\x20',
        '3022532tzaJBP',
        '8966772DRRGbF',
        '\x2020px;\x20fon',
        '-width:\x2040',
        'length',
        'AMUQs',
        'lwQdl',
        'ntre\x201\x20e\x206',
        'Yeoxu',
        'ing:\x2025px;',
        'vOACk',
        '\x22font-size',
        'r;\x0a\x20\x20\x20\x20\x20\x20\x20',
        '\x20\x20\x20\x20\x20\x20\x20\x20</',
        'VMpQH',
        'animation',
        'c3545;\x0a\x20\x20\x20',
        's\x20iniciado',
        'começou\x22',
        'qbnGx',
        'boarding-i',
        '4px;\x0a\x20\x20\x20\x20\x20',
        'n>\x0a\x20\x20\x20\x20\x20\x20\x20',
        '⏸️\x20Limite\x20d',
        'und:\x20white',
        '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20',
        'jKnEu',
        'esk]\x20⏱️\x20Cro',
        'ize:\x2014px;',
        'Pdmjx',
        'WFWHu',
        'x\x20rgba(0,0',
        'action',
        'style=\x22\x0a\x20\x20',
        '\x20Arial,\x20sa',
        'arden-id=\x22',
        'addEventLi',
        '\x20\x20\x20font-we',
        'ent',
        'IKDUG',
        'setConfirm',
        'ight:\x20bold',
        'erceptador',
        'VADA',
        'dqYyZ',
        'error',
        '\x20\x20\x20\x20top:\x202',
        'xar\x20um\x20cha',
        '#dc3545',
        '#28a745',
        'getElement',
        'esk]\x20👁️\x20Obs',
        'JCxPs',
        'RNlGi',
        'mente!',
        ':\x20center;\x0a',
        'r;\x0a\x20\x20\x20\x20',
        'emovida:\x20\x22',
        'almente\x20co',
        'ius:\x206px;\x0a',
        '\x20\x20\x20\x20\x20\x20\x20max',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20b',
        'hosFI',
        'GAmIy',
        '00px);\x20opa',
        'cê\x20está\x20pr',
        '=\x22display:',
        'stá\x20online',
        'VfDEG',
        '\x20font-fami',
        'bXCcG',
        'cancelar\x22\x20',
        '[data-test',
        'BYOxU',
        'Horário\x20de',
        'operação\x20c',
        'vfHtg',
        'heaoO',
        'vel\x20verifi',
        '\x20\x20\x20\x20backgr',
        'tton\x20id=\x22a',
        '\x20\x20\x20backgro',
        'lign-items',
        'regado:\x20',
        'style',
        'FCPjP',
        '\x20cursor:\x20p',
        'a-agent-wo',
        'erver\x20de\x20n',
        '\x20\x20\x20\x20\x20\x20\x20\x20he',
        'div',
        'textConten',
        'upeZW',
        '\x20operação',
        'deg,\x20#28a7',
        'ahgoraAuto',
        '-cancelar',
        'nte.<br>\x0a\x20',
        'body',
        'hKDdp',
        '✅\x20Chat\x20pux',
        'aETbd',
        'gocGc',
        'th:\x20100%;\x0a',
        'nfirmar\x22\x20s',
        '\x20\x20\x20\x20\x20\x20from',
        'ALyZz',
        'erve-chat-',
        'otificaçõe',
        'kZLhw',
        'true',
        '❌\x20Clique\x20c',
        '\x20\x20\x20\x20paddin',
        'horário\x20de',
        '45;\x0a\x20\x20\x20\x20\x20\x20',
        'quERP',
        'LAKSx',
        'ehEYn',
        'ly:\x20Arial,',
        '\x20\x20\x20right:\x20',
        'nfirmar\x20Pu',
        'local',
        'ons.notifi',
        'liqueManua',
        'rgin-botto',
        'esk]\x20🗑️\x20Not',
        'VEPkR',
        'on\x20id=\x22ahg',
        'Cfsdg',
        ':\x2010px\x2025p',
        'omeçou',
        '\x20\x20\x20\x20\x20\x20\x20\x20ju',
        'HsPGq',
        '\x20\x20\x20text-al',
        'YRBgD',
        '4px\x206px\x20rg',
        'data-state',
        'd=\x22serveBu',
        'estes\x20a\x20pu',
        'eibUa',
        '\x20tempo\x20onl',
        '\x20\x20\x20padding',
        '🔕\x20Notifica',
        '⏱️\x20Interval',
        'storage',
        'x);\x20opacit',
        '\x20sans-seri',
        'stopPropag',
        'XFgWa',
        'onboarding',
        'x\x20solid\x20#d',
        'XRvwd',
        'e;\x0a\x20\x20\x20\x20\x20\x20\x20',
        'ktvDS',
        'ão\x20clicado',
        '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'Button\x22],\x20',
        '\x20chats\x20ati',
        'head',
        '54260630mgQpCB',
        'notificati',
        'jLIhU',
        'que\x20ATIVAD',
        'stopImmedi',
        '\x20slideIn\x200',
        'nt-size:\x201',
        'confirmarC',
        'FDRnt',
        'click',
        'qZzOz',
        'o\x20alterado',
        'NgUbp',
        'readyState',
        'style=\x22mar',
        'esk]\x20🛡️\x20Int',
        'Nenhum',
        'div[data-g',
        'kjVuC',
        'ervalo:\x20',
        '⚠️\x20Você\x20pre',
        '\x20\x20\x20\x20\x20\x20\x20\x20Vo',
        'ado\x20automa',
        'disabled',
        'intervaloM',
        '\x22toolbar-s',
        'Button\x22]',
        'ite\x20de\x20cha',
        'led',
        '\x20\x20\x20\x20font-s',
        'Lvhye',
        'dEmsy',
        'ackground:',
        '{\x20transfor',
        'pOmvA',
        'button\x22]',
        'hats!',
        'el-agent-s',
        'uoOYc',
        'x-shadow:\x20',
        'observe',
        'border:\x202p',
        'ZOCZy',
        'qdztx',
        'a-state=\x22i',
        'acaoManual',
        'removeChil',
        'tor',
        'closest',
        '💬\x20Limite\x20a',
        '\x20\x20\x20<p\x20styl',
        'Puxar\x20Chat',
        'rdxvG',
        'qeCDu',
        'tempoOnlin',
        'sdMLp',
        'cvjte',
        'ções\x20DESAT',
        'e\x20ser\x20entr',
        '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'meString',
        'slideOut\x200',
        'online',
        'WqUAC',
        'preventDef',
        'XpIqm',
        'offsetWidt',
        'PrTfS',
        'city:\x200;\x20}',
        'sTxdW',
        'ba(0,0,0,0',
        'uGdQl',
        'ts\x20ativos:',
        '359844uSIpAc',
        'tdZuZ',
        '<div\x20style',
        'lar</butto',
        'RrCeW',
        'split',
        'from\x20{\x20tra',
        'pacity:\x201;',
        'cando\x20a\x20ca',
        'FXhRt',
        '\x20{\x20transfo',
        'a-test-id=',
        'GLedH',
        'tion',
        'FLXle',
        'aLLgo',
        '999999;\x0a\x20\x20',
        'querySelec',
        'Fique\x20onli',
        'ent:\x20cente',
        'ols\x20-\x20Zend',
        'orGDN',
        '\x20white;\x0a\x20\x20',
        'ointer;\x0a\x20\x20',
        'ebDRe',
        'hats',
        '0\x2010px\x2030p',
        'que\x20DESATI',
        '\x20\x20\x20\x20\x20\x20box-',
        'y:\x200;\x20}\x0a\x20\x20',
        'FfKFF',
        'shadow:\x200\x20',
        'jCJeS',
        'ault',
        '\x20manual\x20at',
        'rder-radiu',
        's:\x205px;\x0a\x20\x20',
        '\x20para\x20',
        'anual:\x20',
        'oAKye',
        'ário\x20não\x20e',
        'm:\x2015px;\x22>',
        'cRnqG',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20a',
        'div\x20style=',
        'do:\x20',
        '\x20às\x20',
        ':\x2040px;\x20ma',
        'kMohJ',
        'qVJLb',
        'cssText',
        'ciiaX',
        'ns-serif;\x0a',
        '\x20operação\x20',
        '28SycNNE',
        'ight:\x20100%',
        'rkspace-on',
        'or:\x20#333;\x20',
        '-confirmar',
        'asMVC',
        'Bdyvu',
        'remove',
        '\x20\x20\x20\x20\x20\x20\x20<bu',
        'APdvA',
        'igsiT',
        'ngido.\x20Agu',
        'addListene',
        'tle\x22]',
        'g:\x2010px\x2025',
        'IVADAS',
        'forEach',
        'itle\x22]',
        'teX(0);\x20op',
        'ation',
        '\x20\x20\x20\x20\x20\x20disp',
        '-id=\x22notif',
        '\x20\x20\x20\x20\x20\x20\x20\x20bo',
        'ivado',
        '\x20flex;\x20gap',
        '.3s\x20ease-i',
        'tton\x22]',
        'round',
        'CyEdD',
        'hAZeg',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x20linear-gr',
        'tion\x22]',
        'eSegundos',
        'eyframes\x20s',
        'value',
        '5px\x200;\x20col',
        'tatus-menu',
        'adient(135',
        'OLZgi',
        '\x20\x20\x20\x20\x20\x20\x20wid',
        'esk]\x20✅\x20Bot',
        'esk]\x20💬\x20Cha',
        'px;\x22>\x0a\x20\x20\x20\x20',
        '-button\x22]',
        'order-radi',
        'torAll',
        '1QPWGxU',
        'target',
        '8036270XRcDbO',
        '\x20minutos',
        'PFxAz',
        'nsform:\x20tr',
        '4|1|2|0|3',
        'background',
        'us:\x2010px;\x0a',
        '\x20foi\x20possí',
        '#17a2b8',
        'cisa\x20estar',
        'n-queue\x22]',
        '\x20\x20\x20z-index',
        'esk]\x20⏱️\x20Tem',
        '4|2|3|1|0',
        '</button>\x0a',
        'ine\x20inicia',
        'esk]\x20💬\x20Lim',
        'ado\x20manual',
        'yqfAB',
        'padding:\x201',
        'warning',
        'StBFE',
        'x;\x0a\x20\x20\x20\x20\x20\x20\x20',
        ':\x20rgba(0,\x20',
        'f;\x0a\x20\x20\x20\x20',
        'Xjfdv',
        'success',
        'notificaco',
        'xar\x20Chat?<',
        'nYEJX',
        'toggle',
        'Click',
        'xlpWM',
        '5px\x2020px;\x0a',
        'animation:',
        '#fff',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<',
        'log',
        '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
        'inutos',
        'YAFKr',
        'ahgora-too',
        '0\x20minutos',
        'ZHXvq',
        'te;\x0a\x20\x20\x20\x20\x20\x20',
        'e=\x22color:\x20'
    ];
    _0x1833 = function () {
        return _0x1f50fa;
    };
    return _0x1833();
}
function mostrarDialogoConfirmacao(_0x1cc771) {
    const _0x455ccf = _0x4024, _0x34119c = {
            'hAZeg': function (_0xab796, _0x159add, _0x52f7b2) {
                return _0xab796(_0x159add, _0x52f7b2);
            },
            'bKdvW': _0x455ccf(0x196) + _0x455ccf(0x34f),
            'HSknk': _0x455ccf(0x2ec),
            'yqfAB': _0x455ccf(0x27a),
            'JOcoH': _0x455ccf(0x195),
            'kMohJ': _0x455ccf(0x18b) + _0x455ccf(0x287) + _0x455ccf(0x15c),
            'MZiad': _0x455ccf(0x290),
            'VEPkR': function (_0x42e57b, _0x2fd8ff) {
                return _0x42e57b === _0x2fd8ff;
            },
            'lwQdl': _0x455ccf(0x309) + _0x455ccf(0x335) + _0x455ccf(0x2ad),
            'vfHtg': _0x455ccf(0x181),
            'BYOxU': _0x455ccf(0x2c2) + _0x455ccf(0x187),
            'rdxvG': _0x455ccf(0x1cf),
            'Yeoxu': _0x455ccf(0x2c2) + _0x455ccf(0x249)
        }, _0x3d4854 = document[_0x455ccf(0x158) + _0x455ccf(0x36a)](_0x34119c[_0x455ccf(0x12c)]);
    if (_0x3d4854)
        _0x3d4854[_0x455ccf(0x24c)]();
    const _0x3a63b6 = document[_0x455ccf(0x2fc) + _0x455ccf(0x14c)](_0x34119c[_0x455ccf(0x173)]);
    _0x3a63b6['id'] = _0x34119c[_0x455ccf(0x12c)], _0x3a63b6[_0x455ccf(0x17b)][_0x455ccf(0x241)] = _0x455ccf(0x2a5) + _0x455ccf(0x2d6) + _0x455ccf(0x2a7) + _0x455ccf(0x2c4) + _0x455ccf(0x163) + _0x455ccf(0x33c) + _0x455ccf(0x26d) + _0x455ccf(0x18e) + _0x455ccf(0x180) + _0x455ccf(0x246) + _0x455ccf(0x163) + _0x455ccf(0x27b) + _0x455ccf(0x28d) + _0x455ccf(0x2bd) + _0x455ccf(0x163) + _0x455ccf(0x305) + _0x455ccf(0x21f) + _0x455ccf(0x259) + _0x455ccf(0x337) + _0x455ccf(0x23a) + _0x455ccf(0x179) + _0x455ccf(0x15d) + _0x455ccf(0x1aa) + _0x455ccf(0x2ff) + _0x455ccf(0x222) + _0x455ccf(0x132) + _0x455ccf(0x16c) + _0x455ccf(0x19d) + _0x455ccf(0x1b9) + _0x455ccf(0x28e);
    const _0x23010f = document[_0x455ccf(0x2fc) + _0x455ccf(0x14c)](_0x34119c[_0x455ccf(0x173)]);
    _0x23010f[_0x455ccf(0x17b)][_0x455ccf(0x241)] = _0x455ccf(0x164) + _0x455ccf(0x1e6) + _0x455ccf(0x225) + _0x455ccf(0x327) + _0x455ccf(0x12f) + _0x455ccf(0x164) + _0x455ccf(0x272) + _0x455ccf(0x27c) + _0x455ccf(0x25b) + _0x455ccf(0x1ed) + _0x455ccf(0x229) + _0x455ccf(0x145) + _0x455ccf(0x2d4) + _0x455ccf(0x162) + _0x455ccf(0x129) + _0x455ccf(0x310) + _0x455ccf(0x1ac) + _0x455ccf(0x35a) + _0x455ccf(0x15e), _0x23010f[_0x455ccf(0x350)] = _0x455ccf(0x29a) + _0x455ccf(0x23b) + _0x455ccf(0x131) + _0x455ccf(0x23e) + _0x455ccf(0x1a3) + _0x455ccf(0x238) + _0x455ccf(0x2ed) + _0x455ccf(0x306) + _0x455ccf(0x1d4) + _0x455ccf(0x35c) + _0x455ccf(0x269) + _0x455ccf(0x248) + _0x455ccf(0x304) + _0x455ccf(0x2b7) + _0x455ccf(0x19f) + _0x455ccf(0x292) + _0x455ccf(0x34d) + _0x455ccf(0x1f8) + _0x455ccf(0x2a3) + _0x455ccf(0x33a) + _0x455ccf(0x2ac) + _0x455ccf(0x128) + _0x455ccf(0x35d) + _0x455ccf(0x270) + _0x455ccf(0x1db) + _0x455ccf(0x168) + _0x455ccf(0x1b1) + _0x455ccf(0x155) + _0x455ccf(0x122) + _0x455ccf(0x188) + _0x455ccf(0x263) + _0x455ccf(0x2f5) + _0x455ccf(0x160) + _0x455ccf(0x2fd) + _0x455ccf(0x2b3) + _0x455ccf(0x1c2) + _0x455ccf(0x211) + _0x455ccf(0x169) + _0x455ccf(0x25d) + _0x455ccf(0x2b2) + _0x455ccf(0x2ff) + _0x455ccf(0x222) + _0x455ccf(0x2f2) + _0x455ccf(0x24d) + _0x455ccf(0x177) + _0x455ccf(0x342) + _0x455ccf(0x16e) + _0x455ccf(0x147) + _0x455ccf(0x263) + _0x455ccf(0x197) + _0x455ccf(0x253) + _0x455ccf(0x2c0) + _0x455ccf(0x263) + _0x455ccf(0x1ef) + _0x455ccf(0x1bd) + _0x455ccf(0x136) + _0x455ccf(0x263) + _0x455ccf(0x178) + _0x455ccf(0x13e) + _0x455ccf(0x163) + _0x455ccf(0x30f) + _0x455ccf(0x354) + _0x455ccf(0x199) + _0x455ccf(0x263) + _0x455ccf(0x2c9) + _0x455ccf(0x161) + _0x455ccf(0x263) + _0x455ccf(0x2dc) + _0x455ccf(0x2e1) + _0x455ccf(0x2ae) + _0x455ccf(0x263) + _0x455ccf(0x17d) + _0x455ccf(0x226) + _0x455ccf(0x263) + _0x455ccf(0x1e3) + _0x455ccf(0x142) + _0x455ccf(0x356) + _0x455ccf(0x334) + _0x455ccf(0x212) + _0x455ccf(0x13c) + _0x455ccf(0x2fe) + _0x455ccf(0x1a6) + _0x455ccf(0x368) + _0x455ccf(0x18f) + _0x455ccf(0x31a) + _0x455ccf(0x263) + _0x455ccf(0x1b4) + _0x455ccf(0x1a8) + _0x455ccf(0x28c) + _0x455ccf(0x2b6) + _0x455ccf(0x302) + _0x455ccf(0x1bf) + _0x455ccf(0x2b6) + _0x455ccf(0x1e6) + _0x455ccf(0x264) + _0x455ccf(0x26b) + _0x455ccf(0x185) + _0x455ccf(0x363) + _0x455ccf(0x31f) + _0x455ccf(0x263) + (_0x455ccf(0x2f4) + _0x455ccf(0x2a2) + _0x455ccf(0x263) + _0x455ccf(0x2c9) + _0x455ccf(0x161) + _0x455ccf(0x263) + _0x455ccf(0x2dc) + _0x455ccf(0x2e1) + _0x455ccf(0x2ae) + _0x455ccf(0x263) + _0x455ccf(0x17d) + _0x455ccf(0x226) + _0x455ccf(0x263) + _0x455ccf(0x1e3) + _0x455ccf(0x142) + _0x455ccf(0x356) + _0x455ccf(0x2ab) + _0x455ccf(0x1f9) + _0x455ccf(0x284) + _0x455ccf(0x133) + _0x455ccf(0x35f)), _0x3a63b6[_0x455ccf(0x34b) + 'd'](_0x23010f), document[_0x455ccf(0x189)][_0x455ccf(0x34b) + 'd'](_0x3a63b6), document[_0x455ccf(0x158) + _0x455ccf(0x36a)](_0x34119c[_0x455ccf(0x170)])[_0x455ccf(0x14a) + _0x455ccf(0x2b5)](_0x34119c[_0x455ccf(0x1fa)], () => {
        const _0x591bd0 = _0x455ccf;
        _0x3a63b6[_0x591bd0(0x24c)](), _0x34119c[_0x591bd0(0x262)](mostrarNotificacao, _0x34119c[_0x591bd0(0x11a)], _0x34119c[_0x591bd0(0x117)]);
    }), document[_0x455ccf(0x158) + _0x455ccf(0x36a)](_0x34119c[_0x455ccf(0x12e)])[_0x455ccf(0x14a) + _0x455ccf(0x2b5)](_0x34119c[_0x455ccf(0x1fa)], () => {
        const _0x54ddd9 = _0x455ccf, _0x40f681 = _0x34119c[_0x54ddd9(0x288)][_0x54ddd9(0x214)]('|');
        let _0x3ccc0d = 0x1901 + -0x418 * -0x4 + 0xdcb * -0x3;
        while (!![]) {
            switch (_0x40f681[_0x3ccc0d++]) {
            case '0':
                delete _0x1cc771[_0x54ddd9(0x2ba)][_0x54ddd9(0x186) + _0x54ddd9(0x295)];
                continue;
            case '1':
                _0x1cc771[_0x54ddd9(0x2ba)][_0x54ddd9(0x186) + _0x54ddd9(0x295)] = _0x34119c[_0x54ddd9(0x2cd)];
                continue;
            case '2':
                _0x1cc771[_0x54ddd9(0x1cf)]();
                continue;
            case '3':
                _0x34119c[_0x54ddd9(0x262)](mostrarNotificacao, _0x34119c[_0x54ddd9(0x23f)], _0x34119c[_0x54ddd9(0x339)]);
                continue;
            case '4':
                _0x3a63b6[_0x54ddd9(0x24c)]();
                continue;
            }
            break;
        }
    }), _0x3a63b6[_0x455ccf(0x14a) + _0x455ccf(0x2b5)](_0x34119c[_0x455ccf(0x1fa)], _0x93a5ee => {
        const _0x276ac9 = _0x455ccf;
        _0x34119c[_0x276ac9(0x1a5)](_0x93a5ee[_0x276ac9(0x275)], _0x3a63b6) && _0x3a63b6[_0x276ac9(0x24c)]();
    });
}
function formatarTempo(_0x5835ed) {
    const _0x4b0833 = _0x4024, _0x43955b = {
            'YRBgD': function (_0x381d51, _0x34befd) {
                return _0x381d51 / _0x34befd;
            },
            'dqYyZ': function (_0x10ad96, _0x28b87b) {
                return _0x10ad96 / _0x28b87b;
            },
            'sTubV': function (_0xc974c6, _0x458598) {
                return _0xc974c6 % _0x458598;
            },
            'AWipZ': function (_0xa50e3e, _0x281a69) {
                return _0xa50e3e(_0x281a69);
            },
            'ktvDS': function (_0x15c2dc, _0x263215) {
                return _0x15c2dc(_0x263215);
            }
        }, _0x10dfce = Math[_0x4b0833(0x32d)](_0x43955b[_0x4b0833(0x1ad)](_0x5835ed, 0x2253 + 0x1dc0 + 0x19d * -0x1f)), _0x5dfed4 = Math[_0x4b0833(0x32d)](_0x43955b[_0x4b0833(0x152)](_0x43955b[_0x4b0833(0x340)](_0x5835ed, 0x21b8 + 0x5 * -0x38d + -0x1e7), -0x43 * 0x3a + -0x1 * 0x793 + -0x217 * -0xb)), _0x37f2dd = _0x43955b[_0x4b0833(0x340)](_0x5835ed, 0x12a5 + 0xb22 + 0x1d8b * -0x1);
    return _0x43955b[_0x4b0833(0x11c)](String, _0x10dfce)[_0x4b0833(0x2af)](0x1 * 0x26c9 + -0x1eef * 0x1 + -0x7d8, '0') + ':' + _0x43955b[_0x4b0833(0x1c0)](String, _0x5dfed4)[_0x4b0833(0x2af)](-0xe4 * 0x13 + -0x4e6 + -0x1 * -0x15d4, '0') + ':' + _0x43955b[_0x4b0833(0x11c)](String, _0x37f2dd)[_0x4b0833(0x2af)](0x3fc + -0x25 * 0x1f + 0x81, '0');
}
function _0x4024(_0x30876f, _0x1443d9) {
    _0x30876f = _0x30876f - (0x243e + -0x81 * -0x4 + -0x252f);
    const _0x5c545e = _0x1833();
    let _0x3eb890 = _0x5c545e[_0x30876f];
    return _0x3eb890;
}
function iniciarCronometro() {
    const _0x8d76a0 = _0x4024, _0x1d0e01 = {
            'hmErY': function (_0x4c7740) {
                return _0x4c7740();
            },
            'pOmvA': function (_0x25f84b, _0x173d92) {
                return _0x25f84b === _0x173d92;
            },
            'BFUFp': function (_0x1ad046, _0xcda564) {
                return _0x1ad046 % _0xcda564;
            },
            'jKnEu': function (_0x1c8bab, _0x5b9979) {
                return _0x1c8bab && _0x5b9979;
            },
            'Pdmjx': function (_0x356e82, _0x383657, _0x3b40b5) {
                return _0x356e82(_0x383657, _0x3b40b5);
            },
            'AMUQs': _0x8d76a0(0x34e) + _0x8d76a0(0x223) + _0x8d76a0(0x141) + _0x8d76a0(0x2b8) + _0x8d76a0(0x1b3) + _0x8d76a0(0x285) + 'do'
        };
    !intervaloTempoOnline && (intervaloTempoOnline = _0x1d0e01[_0x8d76a0(0x143)](setInterval, () => {
        const _0xf8407f = _0x8d76a0, _0x33b5f4 = _0x1d0e01[_0xf8407f(0x2d0)](verificarStatusOnline);
        if (_0x33b5f4)
            tempoOnlineSegundos++, _0x1d0e01[_0xf8407f(0x1e8)](_0x1d0e01[_0xf8407f(0x2d9)](tempoOnlineSegundos, 0x3af * -0x3 + -0x9f6 * 0x1 + 0x153f), -0xe86 + 0x507 * -0x7 + 0x31b7) && chrome[_0xf8407f(0x1b7)][_0xf8407f(0x1a0)][_0xf8407f(0x2ef)]({ 'tempoOnlineSegundos': tempoOnlineSegundos });
        else
            _0x1d0e01[_0xf8407f(0x140)](statusAnterior, !_0x33b5f4) && (tempoOnlineSegundos = 0x105 * -0x1 + 0x30 * 0xd0 + -0x3 * 0xca9, chrome[_0xf8407f(0x1b7)][_0xf8407f(0x1a0)][_0xf8407f(0x2ef)]({ 'tempoOnlineSegundos': 0x0 }));
        statusAnterior = _0x33b5f4;
    }, -0x1 * 0x7b3 + 0x35 * -0x49 + 0x1ab8), console[_0x8d76a0(0x29b)](_0x1d0e01[_0x8d76a0(0x12b)]));
}
function verificarStatusOnline() {
    const _0x4abf1e = _0x4024, _0x13bb3c = {
            'ciiaX': _0x4abf1e(0x2e8) + _0x4abf1e(0x21a) + _0x4abf1e(0x326) + _0x4abf1e(0x1eb) + _0x4abf1e(0x26a) + _0x4abf1e(0x271),
            'OLZgi': _0x4abf1e(0x1af),
            'cUCRT': function (_0x7a1679, _0x37c0ef) {
                return _0x7a1679 === _0x37c0ef;
            },
            'CyEdD': _0x4abf1e(0x204),
            'JTShC': _0x4abf1e(0x2bb),
            'RrCeW': _0x4abf1e(0x30b),
            'WFWHu': _0x4abf1e(0x34e) + _0x4abf1e(0x223) + _0x4abf1e(0x338) + _0x4abf1e(0x27d) + _0x4abf1e(0x175) + _0x4abf1e(0x11d) + 'us'
        }, _0x52f265 = document[_0x4abf1e(0x220) + _0x4abf1e(0x1f5)](_0x13bb3c[_0x4abf1e(0x242)]);
    if (_0x52f265) {
        const _0xfc3db8 = _0x52f265[_0x4abf1e(0x314) + 'te'](_0x13bb3c[_0x4abf1e(0x26c)]), _0x5871a5 = _0x13bb3c[_0x4abf1e(0x325)](_0xfc3db8, _0x13bb3c[_0x4abf1e(0x261)]);
        return console[_0x4abf1e(0x29b)](_0x4abf1e(0x34e) + _0x4abf1e(0x223) + _0x4abf1e(0x316) + _0x4abf1e(0x2e0) + _0xfc3db8 + '\x20(' + (_0x5871a5 ? _0x13bb3c[_0x4abf1e(0x361)] : _0x13bb3c[_0x4abf1e(0x213)]) + ')'), _0x5871a5;
    }
    return console[_0x4abf1e(0x29b)](_0x13bb3c[_0x4abf1e(0x144)]), ![];
}
function contarChatsAtivos() {
    const _0xe805ae = _0x4024, _0x227cbf = { 'ALyZz': _0xe805ae(0x16f) + _0xe805ae(0x2a9) + _0xe805ae(0x2c8) + _0xe805ae(0x256) }, _0xc2cc8f = document[_0xe805ae(0x220) + _0xe805ae(0x273)](_0x227cbf[_0xe805ae(0x191)]), _0x5b2029 = _0xc2cc8f[_0xe805ae(0x12a)];
    return console[_0xe805ae(0x29b)](_0xe805ae(0x34e) + _0xe805ae(0x223) + _0xe805ae(0x26f) + _0xe805ae(0x20e) + '\x20' + _0x5b2029 + '/' + limiteChats), _0x5b2029;
}
function clicarBotaoPuxarChat() {
    const _0x4daddb = _0x4024, _0x17d60f = {
            'uoVhR': function (_0x134c92) {
                return _0x134c92();
            },
            'BCPoU': _0x4daddb(0x34e) + _0x4daddb(0x223) + _0x4daddb(0x2d2) + _0x4daddb(0x237) + _0x4daddb(0x16a) + '.',
            'QMGoV': function (_0x25d78d, _0x3681a5, _0xf1231a) {
                return _0x25d78d(_0x3681a5, _0xf1231a);
            },
            'kjVuC': _0x4daddb(0x1da) + _0x4daddb(0x27f) + _0x4daddb(0x369) + _0x4daddb(0x318) + _0x4daddb(0x1ea),
            'jCJeS': _0x4daddb(0x28a),
            'cvjte': function (_0x2cdf07) {
                return _0x2cdf07();
            },
            'EAEId': function (_0x55a656, _0x261a25) {
                return _0x55a656 >= _0x261a25;
            },
            'uoOYc': _0x4daddb(0x2ec),
            'qdztx': _0x4daddb(0x2e8) + _0x4daddb(0x21a) + _0x4daddb(0x1df) + _0x4daddb(0x192) + _0x4daddb(0x1e9),
            'LAKSx': _0x4daddb(0x2e8) + _0x4daddb(0x2e5) + _0x4daddb(0x1bc) + _0x4daddb(0x32f) + _0x4daddb(0x1e0),
            'FDRnt': _0x4daddb(0x2e8) + _0x4daddb(0x17e) + _0x4daddb(0x247) + _0x4daddb(0x13a) + _0x4daddb(0x1b0) + _0x4daddb(0x25f),
            'GUVBs': _0x4daddb(0x2e8) + _0x4daddb(0x1f2) + _0x4daddb(0x280),
            'heaoO': _0x4daddb(0x2dd),
            'eZXWK': _0x4daddb(0x362),
            'EiAPC': _0x4daddb(0x2c5),
            'cuTor': function (_0xdb1c6b, _0x4aef42) {
                return _0xdb1c6b > _0x4aef42;
            },
            'qeCDu': function (_0x28a91a, _0x251366) {
                return _0x28a91a === _0x251366;
            },
            'hosFI': _0x4daddb(0x308) + _0x4daddb(0x1e2),
            'DHEVZ': _0x4daddb(0x195),
            'igsiT': function (_0x5143c7, _0x10a6b0) {
                return _0x5143c7 && _0x10a6b0;
            },
            'StBFE': _0x4daddb(0x283),
            'GAmIy': function (_0x44ff23, _0x2278d0, _0x56f116) {
                return _0x44ff23(_0x2278d0, _0x56f116);
            },
            'bXCcG': _0x4daddb(0x18b) + _0x4daddb(0x1dc) + _0x4daddb(0x33d),
            'lkZbq': _0x4daddb(0x290)
        };
    if (!_0x17d60f[_0x4daddb(0x2fa)](verificarStatusOnline))
        return console[_0x4daddb(0x29b)](_0x17d60f[_0x4daddb(0x357)]), notificacoesAtivas && _0x17d60f[_0x4daddb(0x301)](mostrarNotificacao, _0x17d60f[_0x4daddb(0x1d8)], _0x17d60f[_0x4daddb(0x22f)]), ![];
    const _0x13c9b0 = _0x17d60f[_0x4daddb(0x1fe)](contarChatsAtivos);
    if (_0x17d60f[_0x4daddb(0x116)](_0x13c9b0, limiteChats))
        return notificacoesAtivas && _0x17d60f[_0x4daddb(0x301)](mostrarNotificacao, _0x4daddb(0x13d) + 'e\x20' + limiteChats + (_0x4daddb(0x1c4) + _0x4daddb(0x250) + _0x4daddb(0x341)), _0x17d60f[_0x4daddb(0x1ec)]), ![];
    const _0x1e0c26 = [
        _0x17d60f[_0x4daddb(0x1f1)],
        _0x17d60f[_0x4daddb(0x19b)],
        _0x17d60f[_0x4daddb(0x1ce)],
        _0x17d60f[_0x4daddb(0x2b0)]
    ];
    let _0x529f1e = null;
    for (const _0x20e26f of _0x1e0c26) {
        _0x529f1e = document[_0x4daddb(0x220) + _0x4daddb(0x1f5)](_0x20e26f);
        if (_0x529f1e)
            break;
    }
    if (!_0x529f1e) {
        const _0x2ecd6b = document[_0x4daddb(0x220) + _0x4daddb(0x273)](_0x17d60f[_0x4daddb(0x174)]);
        for (const _0x2e740f of _0x2ecd6b) {
            if (_0x2e740f[_0x4daddb(0x182) + 't'][_0x4daddb(0x2d5)](_0x17d60f[_0x4daddb(0x320)]) || _0x2e740f[_0x4daddb(0x182) + 't'][_0x4daddb(0x2d5)](_0x17d60f[_0x4daddb(0x30e)])) {
                _0x529f1e = _0x2e740f;
                break;
            }
        }
    }
    if (_0x529f1e) {
        const _0x1341d4 = _0x17d60f[_0x4daddb(0x2ca)](_0x529f1e[_0x4daddb(0x208) + 'h'], -0x1383 + -0x4eb + 0x186e) && _0x17d60f[_0x4daddb(0x2ca)](_0x529f1e[_0x4daddb(0x34c) + 'ht'], -0xed6 + -0x622 + 0x14f8), _0x33094c = _0x529f1e[_0x4daddb(0x1dd)] || _0x17d60f[_0x4daddb(0x1fb)](_0x529f1e[_0x4daddb(0x314) + 'te'](_0x17d60f[_0x4daddb(0x165)]), _0x17d60f[_0x4daddb(0x123)]);
        if (_0x17d60f[_0x4daddb(0x24f)](_0x1341d4, !_0x33094c)) {
            const _0x362f70 = _0x17d60f[_0x4daddb(0x28b)][_0x4daddb(0x214)]('|');
            let _0x5d4356 = -0x3dc + 0x3 * -0x4ab + 0x11 * 0x10d;
            while (!![]) {
                switch (_0x362f70[_0x5d4356++]) {
                case '0':
                    return !![];
                case '1':
                    _0x17d60f[_0x4daddb(0x166)](mostrarNotificacao, _0x17d60f[_0x4daddb(0x16d)], _0x17d60f[_0x4daddb(0x351)]);
                    continue;
                case '2':
                    ultimoClick = new Date();
                    continue;
                case '3':
                    console[_0x4daddb(0x29b)](_0x4daddb(0x34e) + _0x4daddb(0x223) + _0x4daddb(0x26e) + _0x4daddb(0x1c1) + _0x4daddb(0x23d) + ultimoClick[_0x4daddb(0x2b4) + _0x4daddb(0x202)]());
                    continue;
                case '4':
                    _0x529f1e[_0x4daddb(0x1cf)]();
                    continue;
                }
                break;
            }
        }
    }
    return ![];
}
function mostrarNotificacao(_0x35d47a, _0x11de82 = _0x5cdbe5(0x290)) {
    const _0x28ea38 = _0x5cdbe5, _0x28f26d = {
            'LqgnX': _0x28ea38(0x203) + _0x28ea38(0x25e) + 'n',
            'DREPQ': function (_0x6d7bec, _0x23943b, _0x123189) {
                return _0x6d7bec(_0x23943b, _0x123189);
            },
            'sdMLp': _0x28ea38(0x181),
            'RHcBV': _0x28ea38(0x290),
            'upeZW': _0x28ea38(0x157),
            'NYgJJ': _0x28ea38(0x28a),
            'BfwQh': _0x28ea38(0x2a4),
            'JCxPs': _0x28ea38(0x2ec),
            'eGDZg': _0x28ea38(0x27e),
            'jFZIy': _0x28ea38(0x153),
            'iUMEe': _0x28ea38(0x156),
            'PLzpO': function (_0x35fb97, _0x3af30c) {
                return _0x35fb97 === _0x3af30c;
            },
            'FLXle': _0x28ea38(0x2cc),
            'QrCPu': _0x28ea38(0x299),
            'KCdzK': _0x28ea38(0x29f) + _0x28ea38(0x11e),
            'LNpQo': _0x28ea38(0x17b)
        }, _0x466ebf = document[_0x28ea38(0x2fc) + _0x28ea38(0x14c)](_0x28f26d[_0x28ea38(0x1fd)]);
    _0x466ebf[_0x28ea38(0x182) + 't'] = _0x35d47a;
    let _0x1629e2;
    switch (_0x11de82) {
    case _0x28f26d[_0x28ea38(0x319)]:
        _0x1629e2 = _0x28f26d[_0x28ea38(0x183)];
        break;
    case _0x28f26d[_0x28ea38(0x2be)]:
        _0x1629e2 = _0x28f26d[_0x28ea38(0x332)];
        break;
    case _0x28f26d[_0x28ea38(0x15a)]:
        _0x1629e2 = _0x28f26d[_0x28ea38(0x364)];
        break;
    case _0x28f26d[_0x28ea38(0x31d)]:
        _0x1629e2 = _0x28f26d[_0x28ea38(0x313)];
        break;
    default:
        _0x1629e2 = _0x28f26d[_0x28ea38(0x183)];
    }
    _0x466ebf[_0x28ea38(0x17b)][_0x28ea38(0x241)] = _0x28ea38(0x2a5) + _0x28ea38(0x2d6) + _0x28ea38(0x2a7) + _0x28ea38(0x154) + _0x28ea38(0x310) + _0x28ea38(0x19e) + _0x28ea38(0x2aa) + _0x28ea38(0x176) + _0x28ea38(0x324) + ':\x20' + _0x1629e2 + (_0x28ea38(0x163) + _0x28ea38(0x336)) + (_0x28f26d[_0x28ea38(0x347)](_0x11de82, _0x28f26d[_0x28ea38(0x2be)]) ? _0x28f26d[_0x28ea38(0x21d)] : _0x28f26d[_0x28ea38(0x2ea)]) + (_0x28ea38(0x163) + _0x28ea38(0x289) + _0x28ea38(0x297) + _0x28ea38(0x25b) + _0x28ea38(0x232) + _0x28ea38(0x233) + _0x28ea38(0x22b) + _0x28ea38(0x22e) + _0x28ea38(0x1ae) + _0x28ea38(0x20c) + _0x28ea38(0x2da) + _0x28ea38(0x281) + _0x28ea38(0x353) + _0x28ea38(0x2e3) + _0x28ea38(0x349) + _0x28ea38(0x148) + _0x28ea38(0x243) + _0x28ea38(0x2e3) + _0x28ea38(0x1cc) + _0x28ea38(0x13b) + _0x28ea38(0x14b) + _0x28ea38(0x14f) + _0x28ea38(0x163) + _0x28ea38(0x298) + _0x28ea38(0x1cb) + _0x28ea38(0x358) + _0x28ea38(0x2c6));
    if (!document[_0x28ea38(0x158) + _0x28ea38(0x36a)](_0x28f26d[_0x28ea38(0x30d)])) {
        const _0x11bfee = document[_0x28ea38(0x2fc) + _0x28ea38(0x14c)](_0x28f26d[_0x28ea38(0x113)]);
        _0x11bfee['id'] = _0x28f26d[_0x28ea38(0x30d)], _0x11bfee[_0x28ea38(0x182) + 't'] = _0x28ea38(0x356) + _0x28ea38(0x2cb) + _0x28ea38(0x2f8) + _0x28ea38(0x125) + _0x28ea38(0x263) + _0x28ea38(0x215) + _0x28ea38(0x279) + _0x28ea38(0x303) + _0x28ea38(0x167) + _0x28ea38(0x20a) + _0x28ea38(0x356) + _0x28ea38(0x2d3) + _0x28ea38(0x1e7) + _0x28ea38(0x2ce) + _0x28ea38(0x257) + _0x28ea38(0x2e2) + _0x28ea38(0x201) + _0x28ea38(0x29c) + _0x28ea38(0x2e6) + _0x28ea38(0x267) + _0x28ea38(0x114) + _0x28ea38(0x263) + _0x28ea38(0x190) + _0x28ea38(0x219) + _0x28ea38(0x36b) + _0x28ea38(0x2f6) + _0x28ea38(0x216) + _0x28ea38(0x13f) + _0x28ea38(0x322) + _0x28ea38(0x352) + _0x28ea38(0x2cf) + _0x28ea38(0x11b) + _0x28ea38(0x1b8) + _0x28ea38(0x22c) + _0x28ea38(0x263) + _0x28ea38(0x201), document[_0x28ea38(0x1c5)][_0x28ea38(0x34b) + 'd'](_0x11bfee);
    }
    document[_0x28ea38(0x189)][_0x28ea38(0x34b) + 'd'](_0x466ebf), _0x28f26d[_0x28ea38(0x33e)](setTimeout, () => {
        const _0x38d26c = _0x28ea38;
        _0x466ebf[_0x38d26c(0x17b)][_0x38d26c(0x135)] = _0x28f26d[_0x38d26c(0x36e)], _0x28f26d[_0x38d26c(0x33e)](setTimeout, () => {
            const _0x3613c9 = _0x38d26c;
            _0x466ebf[_0x3613c9(0x2f0)] && _0x466ebf[_0x3613c9(0x2f0)][_0x3613c9(0x1f4) + 'd'](_0x466ebf);
        }, 0x330 + -0x621 + 0x41d);
    }, 0x1b * 0x135 + -0x39 * -0x53 + -0x275a);
}
function configurarIntervalo() {
    const _0x4db50f = _0x5cdbe5, _0xda8115 = {
            'qbnGx': function (_0x253212) {
                return _0x253212();
            },
            'fuMaQ': function (_0x197faf, _0x5ae86b) {
                return _0x197faf(_0x5ae86b);
            },
            'aETbd': function (_0xe89e82, _0x4d0285, _0x793ce7) {
                return _0xe89e82(_0x4d0285, _0x793ce7);
            },
            'oAKye': function (_0x230828, _0x518656) {
                return _0x230828 / _0x518656;
            }
        };
    intervaloId && _0xda8115[_0x4db50f(0x124)](clearInterval, intervaloId);
    intervaloId = _0xda8115[_0x4db50f(0x18c)](setInterval, () => {
        const _0x5b0c32 = _0x4db50f;
        _0xda8115[_0x5b0c32(0x139)](clicarBotaoPuxarChat);
    }, intervaloClick);
    const _0x19f2dd = Math[_0x4db50f(0x260)](_0xda8115[_0x4db50f(0x236)](intervaloClick, -0x19ebc + 0x2 * -0x6f47 + -0x3f * -0xdd6));
    console[_0x4db50f(0x29b)](_0x4db50f(0x34e) + _0x4db50f(0x223) + _0x4db50f(0x121) + _0x4db50f(0x1d9) + _0x19f2dd + _0x4db50f(0x277));
}
function iniciarAutoPuxar() {
    const _0x281f12 = _0x5cdbe5, _0x5ed9db = {
            'aLLgo': function (_0x839d6c) {
                return _0x839d6c();
            },
            'GWXZR': function (_0x5a5992, _0x526d1a) {
                return _0x5a5992 - _0x526d1a;
            },
            'ngstL': function (_0x404896, _0x43510e) {
                return _0x404896 >= _0x43510e;
            },
            'CVgAT': function (_0x316a9c, _0x4ca684) {
                return _0x316a9c / _0x4ca684;
            },
            'YAFKr': function (_0xf0c431) {
                return _0xf0c431();
            },
            'APdvA': function (_0xb45718, _0x32fbfb, _0x5897ab) {
                return _0xb45718(_0x32fbfb, _0x5897ab);
            }
        }, _0x2e86e2 = Math[_0x281f12(0x260)](_0x5ed9db[_0x281f12(0x2b1)](intervaloClick, 0x1 * 0x169d3 + 0x3d5 * 0x53 + 0x19 * -0x11d2));
    console[_0x281f12(0x29b)](_0x281f12(0x34e) + _0x281f12(0x223) + _0x281f12(0x345) + _0x281f12(0x2df) + _0x281f12(0x30c) + _0x281f12(0x217) + _0x281f12(0x2a6) + _0x2e86e2 + _0x281f12(0x277)), _0x5ed9db[_0x281f12(0x21e)](iniciarObserverNotificacoes), _0x5ed9db[_0x281f12(0x21e)](interceptarBotaoNaFila), _0x5ed9db[_0x281f12(0x29e)](iniciarCronometro), _0x5ed9db[_0x281f12(0x24e)](setTimeout, () => {
        const _0x4cfd91 = _0x281f12;
        _0x5ed9db[_0x4cfd91(0x21e)](clicarBotaoPuxarChat);
    }, -0xc91 * 0x1 + 0x9d * -0x27 + 0x1c02 * 0x2), _0x5ed9db[_0x281f12(0x21e)](configurarIntervalo), _0x5ed9db[_0x281f12(0x24e)](setInterval, () => {
        const _0x32620a = _0x281f12;
        if (ultimoClick) {
            const _0x2d6375 = _0x5ed9db[_0x32620a(0x370)](new Date(), ultimoClick);
            _0x5ed9db[_0x32620a(0x2d1)](_0x2d6375, intervaloClick) && _0x5ed9db[_0x32620a(0x21e)](clicarBotaoPuxarChat);
        }
    }, INTERVALO_VERIFICACAO);
}
chrome[_0x5cdbe5(0x34a)][_0x5cdbe5(0x2ee)][_0x5cdbe5(0x251) + 'r']((_0x18a675, _0xbd9708, _0x4eb293) => {
    const _0x21b4dc = _0x5cdbe5, _0x200ccc = {
            'ZOCZy': function (_0x420805, _0x5d2f7e) {
                return _0x420805 === _0x5d2f7e;
            },
            'quERP': _0x21b4dc(0x294),
            'pOmTT': function (_0x80d8f6, _0x5d4aeb) {
                return _0x80d8f6 !== _0x5d4aeb;
            },
            'XpIqm': function (_0x564188, _0x5026e9, _0x3e47e3) {
                return _0x564188(_0x5026e9, _0x3e47e3);
            },
            'cRnqG': _0x21b4dc(0x367) + _0x21b4dc(0x2b9) + _0x21b4dc(0x328),
            'sTxdW': _0x21b4dc(0x1b5) + _0x21b4dc(0x1ff) + _0x21b4dc(0x254),
            'lRxdu': _0x21b4dc(0x2ec),
            'XFgWa': function (_0x2348e4, _0x21238c) {
                return _0x2348e4(_0x21238c);
            },
            'FfKFF': _0x21b4dc(0x2e9),
            'uGdQl': function (_0x2ff897) {
                return _0x2ff897();
            },
            'WqUAC': function (_0x479b05) {
                return _0x479b05();
            },
            'gocGc': function (_0x1e870f, _0x28c0da) {
                return _0x1e870f / _0x28c0da;
            },
            'vOACk': function (_0x437910, _0x32858d) {
                return _0x437910(_0x32858d);
            },
            'eGCtv': _0x21b4dc(0x1d6),
            'tdZuZ': _0x21b4dc(0x365),
            'FXhRt': function (_0x2b2a22) {
                return _0x2b2a22();
            },
            'PrTfS': function (_0x1a9d68, _0x2ceabc) {
                return _0x1a9d68(_0x2ceabc);
            },
            'uGiHo': _0x21b4dc(0x32e) + 'lo',
            'xlpWM': function (_0x35ab9f, _0x4e0c78) {
                return _0x35ab9f >= _0x4e0c78;
            },
            'Lvhye': function (_0xe395df, _0x42ea40) {
                return _0xe395df <= _0x42ea40;
            },
            'asMVC': _0x21b4dc(0x359),
            'ODcSp': function (_0x3a3320, _0x532230) {
                return _0x3a3320 * _0x532230;
            },
            'dEmsy': function (_0x2c0f1a, _0x47bd37, _0x38f95d) {
                return _0x2c0f1a(_0x47bd37, _0x38f95d);
            },
            'FCPjP': function (_0x1b3de3, _0x3479e6) {
                return _0x1b3de3(_0x3479e6);
            },
            'vXJYu': function (_0x512e1b) {
                return _0x512e1b();
            },
            'VfDEG': _0x21b4dc(0x333) + _0x21b4dc(0x2f3) + _0x21b4dc(0x12d) + _0x21b4dc(0x2a0),
            'EBfQT': function (_0x25f130, _0x4224b3) {
                return _0x25f130 === _0x4224b3;
            },
            'NgUbp': _0x21b4dc(0x315) + _0x21b4dc(0x228),
            'UcZhc': function (_0x5ec144, _0x5f1f76, _0x86449f) {
                return _0x5ec144(_0x5f1f76, _0x86449f);
            },
            'ebDRe': _0x21b4dc(0x31e) + _0x21b4dc(0x200) + _0x21b4dc(0x355) + _0x21b4dc(0x228),
            'hKDdp': function (_0x818da9, _0x1d6e3c) {
                return _0x818da9 === _0x1d6e3c;
            },
            'XRvwd': _0x21b4dc(0x14e) + _0x21b4dc(0x1f3),
            'zHVFq': function (_0x41a853, _0x50a3c3, _0x21fffe) {
                return _0x41a853(_0x50a3c3, _0x21fffe);
            },
            'LmItg': _0x21b4dc(0x2eb) + _0x21b4dc(0x32b) + _0x21b4dc(0x1c9) + 'A',
            'VMpQH': _0x21b4dc(0x2eb) + _0x21b4dc(0x32b) + _0x21b4dc(0x22a) + _0x21b4dc(0x151),
            'qZzOz': function (_0x52edd5, _0x6e3770) {
                return _0x52edd5(_0x6e3770);
            },
            'Xskpw': _0x21b4dc(0x35e) + _0x21b4dc(0x1f3),
            'RNlGi': function (_0x1e2249, _0x8c2551) {
                return _0x1e2249(_0x8c2551);
            }
        };
    if (_0x200ccc[_0x21b4dc(0x1f0)](_0x18a675[_0x21b4dc(0x146)], _0x200ccc[_0x21b4dc(0x19a)]))
        notificacoesAtivas = _0x200ccc[_0x21b4dc(0x2f1)](_0x18a675[_0x21b4dc(0x268)], undefined) ? _0x18a675[_0x21b4dc(0x268)] : !notificacoesAtivas, chrome[_0x21b4dc(0x1b7)][_0x21b4dc(0x1a0)][_0x21b4dc(0x2ef)]({ 'notificacoesAtivas': notificacoesAtivas }), _0x200ccc[_0x21b4dc(0x207)](mostrarNotificacao, notificacoesAtivas ? _0x200ccc[_0x21b4dc(0x239)] : _0x200ccc[_0x21b4dc(0x20b)], _0x200ccc[_0x21b4dc(0x2e7)]), _0x200ccc[_0x21b4dc(0x1bb)](_0x4eb293, { 'notificacoesAtivas': notificacoesAtivas });
    else {
        if (_0x200ccc[_0x21b4dc(0x1f0)](_0x18a675[_0x21b4dc(0x146)], _0x200ccc[_0x21b4dc(0x22d)])) {
            const _0x377aa3 = _0x200ccc[_0x21b4dc(0x20d)](verificarStatusOnline), _0x3c6a3e = _0x200ccc[_0x21b4dc(0x205)](contarChatsAtivos), _0x467c07 = Math[_0x21b4dc(0x260)](_0x200ccc[_0x21b4dc(0x18d)](intervaloClick, 0x2743 + -0xcd65 + 0x19082));
            _0x200ccc[_0x21b4dc(0x130)](_0x4eb293, {
                'notificacoesAtivas': notificacoesAtivas,
                'ultimoClick': ultimoClick ? ultimoClick[_0x21b4dc(0x2b4) + _0x21b4dc(0x202)]() : _0x200ccc[_0x21b4dc(0x307)],
                'online': _0x377aa3,
                'chatsAtivos': _0x3c6a3e,
                'intervalo': _0x467c07,
                'limiteChats': limiteChats,
                'tempoOnline': _0x200ccc[_0x21b4dc(0x130)](formatarTempo, tempoOnlineSegundos)
            });
        } else {
            if (_0x200ccc[_0x21b4dc(0x1f0)](_0x18a675[_0x21b4dc(0x146)], _0x200ccc[_0x21b4dc(0x210)])) {
                const _0x131cae = _0x200ccc[_0x21b4dc(0x218)](clicarBotaoPuxarChat);
                _0x200ccc[_0x21b4dc(0x209)](_0x4eb293, { 'sucesso': _0x131cae });
            } else {
                if (_0x200ccc[_0x21b4dc(0x1f0)](_0x18a675[_0x21b4dc(0x146)], _0x200ccc[_0x21b4dc(0x2bc)])) {
                    const _0x44a4a6 = _0x18a675[_0x21b4dc(0x268)];
                    if (_0x44a4a6 && _0x200ccc[_0x21b4dc(0x296)](_0x44a4a6, -0x319 * 0x2 + -0x19c6 * 0x1 + 0x1ff9) && _0x200ccc[_0x21b4dc(0x1e4)](_0x44a4a6, 0x1a73 + 0xde1 + 0xa06 * -0x4)) {
                        const _0x40403a = _0x200ccc[_0x21b4dc(0x24a)][_0x21b4dc(0x214)]('|');
                        let _0x538bcc = 0x111c + 0x22cb + -0x81 * 0x67;
                        while (!![]) {
                            switch (_0x40403a[_0x538bcc++]) {
                            case '0':
                                intervaloClick = _0x200ccc[_0x21b4dc(0x32a)](_0x200ccc[_0x21b4dc(0x32a)](_0x44a4a6, -0x1 * 0x1e83 + 0x175e + 0x761), -0xbda + -0x3b * 0x3e + 0x1e0c);
                                continue;
                            case '1':
                                _0x200ccc[_0x21b4dc(0x1e5)](mostrarNotificacao, _0x21b4dc(0x1b6) + _0x21b4dc(0x1d1) + _0x21b4dc(0x234) + _0x44a4a6 + _0x21b4dc(0x277), _0x200ccc[_0x21b4dc(0x2e7)]);
                                continue;
                            case '2':
                                _0x200ccc[_0x21b4dc(0x17c)](_0x4eb293, {
                                    'sucesso': !![],
                                    'intervalo': _0x44a4a6
                                });
                                continue;
                            case '3':
                                chrome[_0x21b4dc(0x1b7)][_0x21b4dc(0x1a0)][_0x21b4dc(0x2ef)]({ 'intervaloMinutos': _0x44a4a6 });
                                continue;
                            case '4':
                                _0x200ccc[_0x21b4dc(0x311)](configurarIntervalo);
                                continue;
                            }
                            break;
                        }
                    } else
                        _0x200ccc[_0x21b4dc(0x130)](_0x4eb293, {
                            'sucesso': ![],
                            'erro': _0x200ccc[_0x21b4dc(0x16b)]
                        });
                } else {
                    if (_0x200ccc[_0x21b4dc(0x2db)](_0x18a675[_0x21b4dc(0x146)], _0x200ccc[_0x21b4dc(0x1d2)])) {
                        const _0x7ba653 = _0x18a675[_0x21b4dc(0x268)];
                        _0x7ba653 && _0x200ccc[_0x21b4dc(0x296)](_0x7ba653, 0x1 * 0x1faf + -0x57 + -0x1f57) && _0x200ccc[_0x21b4dc(0x1e4)](_0x7ba653, -0x1a * 0xe5 + 0x20e7 + -0x99b) ? (limiteChats = _0x7ba653, chrome[_0x21b4dc(0x1b7)][_0x21b4dc(0x1a0)][_0x21b4dc(0x2ef)]({ 'limiteChats': _0x7ba653 }), _0x200ccc[_0x21b4dc(0x115)](mostrarNotificacao, _0x21b4dc(0x1f7) + _0x21b4dc(0x360) + _0x21b4dc(0x321) + _0x7ba653 + _0x21b4dc(0x348), _0x200ccc[_0x21b4dc(0x2e7)]), _0x200ccc[_0x21b4dc(0x17c)](_0x4eb293, {
                            'sucesso': !![],
                            'limiteChats': _0x7ba653
                        })) : _0x200ccc[_0x21b4dc(0x1bb)](_0x4eb293, {
                            'sucesso': ![],
                            'erro': _0x200ccc[_0x21b4dc(0x227)]
                        });
                    } else {
                        if (_0x200ccc[_0x21b4dc(0x18a)](_0x18a675[_0x21b4dc(0x146)], _0x200ccc[_0x21b4dc(0x1be)]))
                            confirmarCliqueManual = _0x18a675[_0x21b4dc(0x268)], chrome[_0x21b4dc(0x1b7)][_0x21b4dc(0x1a0)][_0x21b4dc(0x2ef)]({ 'confirmarCliqueManual': confirmarCliqueManual }), _0x200ccc[_0x21b4dc(0x300)](mostrarNotificacao, confirmarCliqueManual ? _0x200ccc[_0x21b4dc(0x2f7)] : _0x200ccc[_0x21b4dc(0x134)], _0x200ccc[_0x21b4dc(0x2e7)]), _0x200ccc[_0x21b4dc(0x1d0)](_0x4eb293, {
                                'sucesso': !![],
                                'confirmarCliqueManual': confirmarCliqueManual
                            });
                        else
                            _0x200ccc[_0x21b4dc(0x18a)](_0x18a675[_0x21b4dc(0x146)], _0x200ccc[_0x21b4dc(0x120)]) && _0x200ccc[_0x21b4dc(0x15b)](_0x4eb293, { 'confirmarCliqueManual': confirmarCliqueManual });
                    }
                }
            }
        }
    }
    return !![];
});
document[_0x5cdbe5(0x1d3)] === _0x5cdbe5(0x317) ? document[_0x5cdbe5(0x14a) + _0x5cdbe5(0x2b5)](_0x5cdbe5(0x2bf) + _0x5cdbe5(0x31c), iniciarAutoPuxar) : iniciarAutoPuxar();
chrome[_0x5cdbe5(0x1b7)][_0x5cdbe5(0x1a0)][_0x5cdbe5(0x2de)]([
    _0x5cdbe5(0x291) + _0x5cdbe5(0x31b),
    _0x5cdbe5(0x1de) + _0x5cdbe5(0x29d),
    _0x5cdbe5(0x32c) + 's',
    _0x5cdbe5(0x1fc) + _0x5cdbe5(0x266),
    _0x5cdbe5(0x1cd) + _0x5cdbe5(0x1a2) + 'l'
], function (_0x58fc7d) {
    const _0x5e4651 = _0x5cdbe5, _0xbd37a3 = {
            'PFxAz': _0x5e4651(0x344),
            'eibUa': function (_0x17f68e, _0x1978a7) {
                return _0x17f68e !== _0x1978a7;
            },
            'MgYRU': function (_0x55f53a, _0x49c308) {
                return _0x55f53a !== _0x49c308;
            },
            'IKDUG': function (_0x2d0e80, _0xe0f23a) {
                return _0x2d0e80(_0xe0f23a);
            },
            'jLIhU': _0x5e4651(0x2c1),
            'nYEJX': _0x5e4651(0x2f9),
            'MvYfq': function (_0x3425c3, _0x3f07a8) {
                return _0x3425c3 !== _0x3f07a8;
            },
            'qVJLb': function (_0x2bad30, _0x2cca17) {
                return _0x2bad30 * _0x2cca17;
            }
        }, _0x54e8cf = _0xbd37a3[_0x5e4651(0x278)][_0x5e4651(0x214)]('|');
    let _0x31a540 = -0x1882 * -0x1 + 0x3 * -0x24a + -0x11a4;
    while (!![]) {
        switch (_0x54e8cf[_0x31a540++]) {
        case '0':
            _0xbd37a3[_0x5e4651(0x1b2)](_0x58fc7d[_0x5e4651(0x32c) + 's'], undefined) && (limiteChats = _0x58fc7d[_0x5e4651(0x32c) + 's'], console[_0x5e4651(0x29b)](_0x5e4651(0x34e) + _0x5e4651(0x223) + _0x5e4651(0x286) + _0x5e4651(0x1e1) + _0x5e4651(0x33f) + _0x5e4651(0x23c) + _0x58fc7d[_0x5e4651(0x32c) + 's']));
            continue;
        case '1':
            _0xbd37a3[_0x5e4651(0x36c)](_0x58fc7d[_0x5e4651(0x1fc) + _0x5e4651(0x266)], undefined) && (tempoOnlineSegundos = _0x58fc7d[_0x5e4651(0x1fc) + _0x5e4651(0x266)], console[_0x5e4651(0x29b)](_0x5e4651(0x34e) + _0x5e4651(0x223) + _0x5e4651(0x282) + _0x5e4651(0x11f) + _0x5e4651(0x118) + '\x20' + _0xbd37a3[_0x5e4651(0x14d)](formatarTempo, tempoOnlineSegundos)));
            continue;
        case '2':
            _0xbd37a3[_0x5e4651(0x36c)](_0x58fc7d[_0x5e4651(0x291) + _0x5e4651(0x31b)], undefined) && (notificacoesAtivas = _0x58fc7d[_0x5e4651(0x291) + _0x5e4651(0x31b)]);
            continue;
        case '3':
            _0xbd37a3[_0x5e4651(0x1b2)](_0x58fc7d[_0x5e4651(0x1cd) + _0x5e4651(0x1a2) + 'l'], undefined) && (confirmarCliqueManual = _0x58fc7d[_0x5e4651(0x1cd) + _0x5e4651(0x1a2) + 'l'], console[_0x5e4651(0x29b)](_0x5e4651(0x34e) + _0x5e4651(0x223) + _0x5e4651(0x119) + _0x5e4651(0x366) + _0x5e4651(0x235) + (confirmarCliqueManual ? _0xbd37a3[_0x5e4651(0x1c8)] : _0xbd37a3[_0x5e4651(0x293)])));
            continue;
        case '4':
            _0xbd37a3[_0x5e4651(0x330)](_0x58fc7d[_0x5e4651(0x1de) + _0x5e4651(0x29d)], undefined) && (intervaloClick = _0xbd37a3[_0x5e4651(0x240)](_0xbd37a3[_0x5e4651(0x240)](_0x58fc7d[_0x5e4651(0x1de) + _0x5e4651(0x29d)], 0xf4a + 0x305 * 0x5 + -0x1e27), -0xb29 + 0xd41 + 0x1d0), console[_0x5e4651(0x29b)](_0x5e4651(0x34e) + _0x5e4651(0x223) + _0x5e4651(0x121) + _0x5e4651(0x312) + _0x5e4651(0x17a) + _0x58fc7d[_0x5e4651(0x1de) + _0x5e4651(0x29d)] + _0x5e4651(0x277)));
            continue;
        }
        break;
    }
});
