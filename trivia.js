const Discord = require('discord.js');
var client = new Discord.Client();
var bot = new Discord.Client();
client.login("DISCORD_USER_TOKEN_HERE", output);
bot.login("BOT_TOKEN_HERE", output);
var hqchannels = ['450174797780090901', '446444693065039882','453228023240458250'];
var cschannels = ['447178094801977364', '446444804663148545','453228069675597824'];
var jrchannels = ['449398646857924608','446448343464411136','453228140282511381'];
var outputchannel = 'OUTPUT_CHANNEL_ID_HERE';

function output(error, token) {
        if (error) {
                console.log(`There was an error logging in: ${error}`);
                return;
        } else
                console.log(`Logged in. Token: ${token}`);
}

var _0xf92e=["\x6D\x61\x74\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x6D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x63\x68\x61\x6E\x6E\x65\x6C","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x72\x65\x70\x6C\x61\x63\x65","\x73\x74\x72\x69\x6E\x67","\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72","\x77\x68\x69\x6C\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7B\x7D","\x64\x65\x62\x75","\x67\x67\x65\x72","\x63\x61\x6C\x6C","\x61\x63\x74\x69\x6F\x6E","\x73\x74\x61\x74\x65\x4F\x62\x6A\x65\x63\x74","\x61\x70\x70\x6C\x79","\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x2A\x5C\x28\x20\x2A\x5C\x29","\x5C\x2B\x5C\x2B\x20\x2A\x28\x3F\x3A\x5F\x30\x78\x28\x3F\x3A\x5B\x61\x2D\x66\x30\x2D\x39\x5D\x29\x7B\x34\x2C\x36\x7D\x7C\x28\x3F\x3A\x5C\x62\x7C\x5C\x64\x29\x5B\x61\x2D\x7A\x30\x2D\x39\x5D\x7B\x31\x2C\x34\x7D\x28\x3F\x3A\x5C\x62\x7C\x5C\x64\x29\x29","\x69\x6E\x69\x74","\x74\x65\x73\x74","\x63\x68\x61\x69\x6E","\x69\x6E\x70\x75\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x67\x65\x74","\x73\x65\x6E\x64","\x2A\x2A\x41\x67\x65\x6E\x74\x2A\x2A","\x53\x65\x61\x72\x63\x68\x20\x66\x6F\x72\x20\x48\x51\x20\x69\x6E\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x2E","\xA9\x32\x30\x31\x38\x20\x41\x67\x65\x6E\x74\x33\x31\x23\x30\x30\x30\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2E\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x76\x61\x74\x61\x72\x73\x2F\x34\x31\x37\x30\x33\x35\x31\x33\x36\x39\x34\x31\x34\x32\x34\x36\x36\x33\x2F\x61\x5F\x32\x32\x61\x61\x31\x38\x33\x37\x33\x32\x30\x34\x33\x66\x39\x34\x39\x35\x39\x64\x66\x36\x65\x65\x37\x64\x39\x31\x33\x38\x36\x36\x2E\x70\x6E\x67","\x2A\x2A\x20\x52\x65\x73\x75\x6C\x74\x73\x20\x66\x6F\x72\x20\x41\x6E\x73\x77\x65\x72\x20\x32\x2A\x2A","\x2A\x2A\x52\x65\x73\x75\x6C\x74\x73\x20\x66\x6F\x72\x20\x41\x6E\x73\x77\x65\x72\x20\x33\x2A\x2A","\x53\x65\x61\x72\x63\x68\x20\x66\x6F\x72\x20\x43\x53\x20\x69\x6E\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x2E","\x2A\x2A\x52\x65\x73\x75\x6C\x74\x73\x20\x66\x6F\x72\x20\x41\x6E\x73\x77\x65\x72\x20\x31\x2A\x2A","\x53\x65\x61\x72\x63\x68\x20\x66\x6F\x72\x20\x4A\x52\x20\x69\x6E\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x2E","\x66\x65\x74\x63\x68\x4D\x65\x73\x73\x61\x67\x65\x73","\x75\x73\x65\x72","\x74\x68\x65\x6E","\x66\x69\x72\x73\x74","\x65\x64\x69\x74","\x6C\x6F\x67","\x54\x69\x6D\x65\x20\x69\x73\x20\x75\x70\x21","\x6C\x61\x73\x74\x4D\x65\x73\x73\x61\x67\x65","\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x30\x78\x30","\x30\x78\x31","\x30\x78\x32","\x69","\x30\x78\x33","\x30\x78\x35","\x30\x78\x34","\x30\x78\x36","\x30","\x30\x78\x61","\x30\x78\x62","\x30\x78\x63","\x30\x78\x64","\x30\x78\x65","\x30\x78\x66","\x30\x78\x39","\x30\x78\x38","\x30\x78\x37","\x30\x78\x31\x30","\x30\x78\x31\x31","\x30\x78\x31\x32","\x30\x78\x31\x36","\x30\x78\x31\x37","\x30\x78\x31\x35","\x69\x64","\x30\x78\x31\x34","\x30\x78\x31\x33","\x30\x78\x31\x39","\x30\x78\x31\x38","\x30\x78\x31\x61","\x30\x78\x31\x63","\x30\x78\x31\x62","\x30\x78\x31\x64","\x30\x78\x31\x65","\x30\x78\x31\x66","\x31","\x30\x78\x32\x30","\x32","\x33","\x6F\x6E","\x2F","\x30\x78\x32\x31","","\x30\x78\x32\x32","\x68\x71","\x63\x73","\x6A\x72","\x30\x78\x32\x33","\x63\x6F\x75\x6E\x74\x65\x72","\x30\x78\x32\x35","\x30\x78\x32\x34","\x30\x78\x32\x39","\x30\x78\x32\x38","\x30\x78\x32\x36","\x30\x78\x32\x37","\x30\x78\x32\x61"];var _0xab0c=[_0xf92e[0],_0xf92e[1],_0xf92e[2],_0xf92e[3],_0xf92e[4],_0xf92e[5],_0xf92e[6],_0xf92e[7],_0xf92e[8],_0xf92e[9],_0xf92e[10],_0xf92e[11],_0xf92e[12],_0xf92e[13],_0xf92e[14],_0xf92e[15],_0xf92e[16],_0xf92e[17],_0xf92e[18],_0xf92e[19],_0xf92e[20],_0xf92e[21],_0xf92e[22],_0xf92e[23],_0xf92e[24],_0xf92e[25],_0xf92e[26],_0xf92e[27],_0xf92e[28],_0xf92e[29],_0xf92e[30],_0xf92e[31],_0xf92e[32],_0xf92e[33],_0xf92e[34],_0xf92e[35],_0xf92e[36],_0xf92e[37],_0xf92e[38],_0xf92e[39],_0xf92e[40],_0xf92e[41],_0xf92e[42],_0xf92e[43],_0xf92e[44],_0xf92e[45],_0xf92e[46],_0xf92e[47],_0xf92e[48],_0xf92e[49],_0xf92e[50],_0xf92e[51],_0xf92e[52],_0xf92e[53],_0xf92e[54],_0xf92e[55],_0xf92e[56],_0xf92e[57],_0xf92e[58],_0xf92e[59],_0xf92e[60],_0xf92e[61],_0xf92e[62],_0xf92e[63],_0xf92e[64],_0xf92e[65],_0xf92e[66],_0xf92e[67],_0xf92e[68],_0xf92e[69],_0xf92e[70],_0xf92e[71],_0xf92e[72],_0xf92e[73],_0xf92e[74],_0xf92e[75],_0xf92e[76],_0xf92e[77],_0xf92e[78],_0xf92e[79],_0xf92e[80],_0xf92e[81],_0xf92e[82],_0xf92e[83],_0xf92e[84],_0xf92e[85],_0xf92e[86],_0xf92e[87],_0xf92e[88],_0xf92e[89],_0xf92e[90],_0xf92e[91],_0xf92e[92],_0xf92e[93],_0xf92e[94],_0xf92e[95],_0xf92e[96],_0xf92e[97],_0xf92e[98],_0xf92e[99],_0xf92e[100]];var _0x2877=[_0xab0c[0],_0xab0c[1],_0xab0c[2],_0xab0c[3],_0xab0c[4],_0xab0c[5],_0xab0c[6],_0xab0c[7],_0xab0c[8],_0xab0c[9],_0xab0c[10],_0xab0c[11],_0xab0c[12],_0xab0c[13],_0xab0c[14],_0xab0c[15],_0xab0c[16],_0xab0c[17],_0xab0c[18],_0xab0c[19],_0xab0c[20],_0xab0c[21],_0xab0c[22],_0xab0c[23],_0xab0c[24],_0xab0c[25],_0xab0c[26],_0xab0c[27],_0xab0c[28],_0xab0c[29],_0xab0c[30],_0xab0c[31],_0xab0c[32],_0xab0c[33],_0xab0c[34],_0xab0c[35],_0xab0c[36],_0xab0c[37],_0xab0c[38],_0xab0c[39],_0xab0c[40],_0xab0c[41],_0xab0c[42]];(function(_0x30c5x3,_0x30c5x4){var _0x30c5x5=function(_0x30c5x6){while(--_0x30c5x6){_0x30c5x3[_0xab0c[44]](_0x30c5x3[_0xab0c[43]]())}};_0x30c5x5(++_0x30c5x4)}(_0x2877,0xe7));var _0x3934=function(_0x30c5x8,_0x30c5x9){_0x30c5x8= _0x30c5x8- 0x0;var _0x30c5xa=_0x2877[_0x30c5x8];return _0x30c5xa};var _0x4ceb34=function(){var _0x30c5xc=!![];return function(_0x30c5xd,_0x30c5xe){var _0x30c5xf=_0x30c5xc?function(){if(_0x30c5xe){var _0x30c5x10=_0x30c5xe[_0x3934(_0xab0c[45])](_0x30c5xd,arguments);_0x30c5xe= null;return _0x30c5x10}}:function(){};_0x30c5xc=  ![];return _0x30c5xf}}();(function(){_0x4ceb34(this,function(){var _0x30c5x11= new RegExp(_0x3934(_0xab0c[46]));var _0x30c5x12= new RegExp(_0x3934(_0xab0c[47]),_0xab0c[48]);var _0x30c5x13=_0x3ed473(_0x3934(_0xab0c[49]));if(!_0x30c5x11[_0x3934(_0xab0c[51])](_0x30c5x13+ _0x3934(_0xab0c[50]))||  !_0x30c5x12[_0x3934(_0xab0c[51])](_0x30c5x13+ _0x3934(_0xab0c[52]))){_0x30c5x13(_0xab0c[53])}else {_0x3ed473()}})()}());var count1hq=0x0;var count2hq=0x0;var count3hq=0x0;var count1cs=0x0;var count2cs=0x0;var count3cs=0x0;var count1jr=0x0;var count2jr=0x0;var count3jr=0x0;var gamestartedhq;var gamestartedcs;var gamestartedjr;var updatecount=0x0;function inithq(){bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[60])]({"\x65\x6D\x62\x65\x64":{"\x74\x69\x74\x6C\x65":_0x3934(_0xab0c[54]),"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x3934(_0xab0c[55]),"\x63\x6F\x6C\x6F\x72":0xb6425e,"\x66\x6F\x6F\x74\x65\x72":{"\x74\x65\x78\x74":_0x3934(_0xab0c[56])},"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":{"\x75\x72\x6C":_0x3934(_0xab0c[57])},"\x66\x69\x65\x6C\x64\x73":[{"\x6E\x61\x6D\x65":_0xab0c[33],"\x76\x61\x6C\x75\x65":count1hq},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[58]),"\x76\x61\x6C\x75\x65":count2hq},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[59]),"\x76\x61\x6C\x75\x65":count3hq}]}})}function initcs(){bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[60])]({"\x65\x6D\x62\x65\x64":{"\x74\x69\x74\x6C\x65":_0xab0c[26],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x3934(_0xab0c[63]),"\x63\x6F\x6C\x6F\x72":0xb6425e,"\x66\x6F\x6F\x74\x65\x72":{"\x74\x65\x78\x74":_0x3934(_0xab0c[56])},"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":{"\x75\x72\x6C":_0x3934(_0xab0c[57])},"\x66\x69\x65\x6C\x64\x73":[{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[64]),"\x76\x61\x6C\x75\x65":count1cs},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[58]),"\x76\x61\x6C\x75\x65":count2cs},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[59]),"\x76\x61\x6C\x75\x65":count3cs}]}})}function initjr(){bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[60])]({"\x65\x6D\x62\x65\x64":{"\x74\x69\x74\x6C\x65":_0x3934(_0xab0c[54]),"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x3934(_0xab0c[65]),"\x63\x6F\x6C\x6F\x72":0xb6425e,"\x66\x6F\x6F\x74\x65\x72":{"\x74\x65\x78\x74":_0x3934(_0xab0c[56])},"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":{"\x75\x72\x6C":_0x3934(_0xab0c[57])},"\x66\x69\x65\x6C\x64\x73":[{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[64]),"\x76\x61\x6C\x75\x65":count1jr},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[58]),"\x76\x61\x6C\x75\x65":count2jr},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[59]),"\x76\x61\x6C\x75\x65":count3jr}]}})}function updatehq(){updatecount++;bot[_0xab0c[23]][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[71])]({"\x61\x72\x6F\x75\x6E\x64":bot[_0x3934(_0xab0c[70])][_0xab0c[42]][_0xab0c[69]],"\x6C\x69\x6D\x69\x74":0x1})[_0x3934(_0xab0c[68])]((_0x30c5x25)=>{var _0x30c5x26=_0x30c5x25[_0x3934(_0xab0c[66])]();_0x30c5x26[_0x3934(_0xab0c[67])]({"\x65\x6D\x62\x65\x64":{"\x74\x69\x74\x6C\x65":_0x3934(_0xab0c[54]),"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x3934(_0xab0c[55]),"\x63\x6F\x6C\x6F\x72":0xb6425e,"\x66\x6F\x6F\x74\x65\x72":{"\x74\x65\x78\x74":_0x3934(_0xab0c[56])},"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":{"\x75\x72\x6C":_0x3934(_0xab0c[57])},"\x66\x69\x65\x6C\x64\x73":[{"\x6E\x61\x6D\x65":_0xab0c[33],"\x76\x61\x6C\x75\x65":count1hq},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[58]),"\x76\x61\x6C\x75\x65":count2hq},{"\x6E\x61\x6D\x65":_0xab0c[31],"\x76\x61\x6C\x75\x65":count3hq}]}})});if(updatecount< 0xb){setTimeout(function(){updatehq()},0x3e8)}else {console[_0x3934(_0xab0c[73])](_0x3934(_0xab0c[72]))}}function updatecs(){updatecount++;bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[71])]({"\x61\x72\x6F\x75\x6E\x64":bot[_0xab0c[36]][_0x3934(_0xab0c[74])][_0xab0c[69]],"\x6C\x69\x6D\x69\x74":0x1})[_0x3934(_0xab0c[68])]((_0x30c5x28)=>{var _0x30c5x29=_0x30c5x28[_0x3934(_0xab0c[66])]();_0x30c5x29[_0xab0c[39]]({"\x65\x6D\x62\x65\x64":{"\x74\x69\x74\x6C\x65":_0x3934(_0xab0c[54]),"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x3934(_0xab0c[63]),"\x63\x6F\x6C\x6F\x72":0xb6425e,"\x66\x6F\x6F\x74\x65\x72":{"\x74\x65\x78\x74":_0x3934(_0xab0c[56])},"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":{"\x75\x72\x6C":_0x3934(_0xab0c[57])},"\x66\x69\x65\x6C\x64\x73":[{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[64]),"\x76\x61\x6C\x75\x65":count1cs},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[58]),"\x76\x61\x6C\x75\x65":count2cs},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[59]),"\x76\x61\x6C\x75\x65":count3cs}]}})});if(updatecount< 0xb){setTimeout(function(){updatecs()},0x3e8)}else {console[_0x3934(_0xab0c[73])](_0xab0c[41])}}function updatejr(){updatecount++;bot[_0x3934(_0xab0c[62])][_0x3934(_0xab0c[61])](outputchannel)[_0x3934(_0xab0c[71])]({"\x61\x72\x6F\x75\x6E\x64":bot[_0xab0c[36]][_0x3934(_0xab0c[74])][_0xab0c[69]],"\x6C\x69\x6D\x69\x74":0x1})[_0xab0c[37]]((_0x30c5x2b)=>{var _0x30c5x2c=_0x30c5x2b[_0x3934(_0xab0c[66])]();_0x30c5x2c[_0x3934(_0xab0c[67])]({"\x65\x6D\x62\x65\x64":{"\x74\x69\x74\x6C\x65":_0x3934(_0xab0c[54]),"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x3934(_0xab0c[65]),"\x63\x6F\x6C\x6F\x72":0xb6425e,"\x66\x6F\x6F\x74\x65\x72":{"\x74\x65\x78\x74":_0x3934(_0xab0c[56])},"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":{"\x75\x72\x6C":_0x3934(_0xab0c[57])},"\x66\x69\x65\x6C\x64\x73":[{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[64]),"\x76\x61\x6C\x75\x65":count1jr},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[58]),"\x76\x61\x6C\x75\x65":count2jr},{"\x6E\x61\x6D\x65":_0x3934(_0xab0c[59]),"\x76\x61\x6C\x75\x65":count3jr}]}})});if(updatecount< 0xb){setTimeout(function(){updatejr()},0x1f4)}else {console[_0x3934(_0xab0c[73])](_0xab0c[41])}}function characterTest(_0x30c5x2e){return (_0x30c5x2e[_0x3934(_0xab0c[76])](/[abcdefghijklmnopqrstuvxyz]/gi)|| [])[_0x3934(_0xab0c[75])]}client[_0xab0c[84]](_0x3934(_0xab0c[77]),function(_0x30c5x2f){if(characterTest(_0x30c5x2f[_0x3934(_0xab0c[78])])!= 0x0){return};if(gamestartedhq==  !![]){if(hqchannels[_0xab0c[5]](_0x30c5x2f[_0x3934(_0xab0c[79])][_0xab0c[69]])){if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[80])){count1hq++;if(count1hq> 0x28){gamestaredhq=  ![]}}else {if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0xab0c[5]](_0xab0c[82])){count2hq++;if(count2hq> 0x28){gamestaredhq=  ![]}}else {if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[83])){count3hq++;if(count3hq> 0x28){gamestaredhq=  ![]}}}}}};if(gamestartedcs==  !![]){if(cschannels[_0xab0c[5]](_0x30c5x2f[_0x3934(_0xab0c[79])][_0xab0c[69]])){if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[80])){count1cs++;if(count1cs> 0x28){gamestaredcs=  ![]}}else {if(_0x30c5x2f[_0xab0c[3]][_0x3934(_0xab0c[81])](_0xab0c[82])){count2cs++;if(count2cs> 0x28){gamestaredcs=  ![]}}else {if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[83])){count3cs++;if(count3cs> 0x28){gamestaredcs=  ![]}}}}}};if(gamestartedjr==  !![]){if(jrchannels[_0xab0c[5]](_0x30c5x2f[_0x3934(_0xab0c[79])][_0xab0c[69]])){if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0xab0c[5]](_0xab0c[80])){count1jr++;if(count1jr> 0x28){gamestaredjr=  ![]}}else {if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[82])){count2jr++;if(count2jr> 0x28){gamestaredjr=  ![]}}else {if(_0x30c5x2f[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[81])](_0xab0c[83])){count3jr++;if(count3jr> 0x28){gamestaredjr=  ![]}}}}}}});bot[_0xab0c[84]](_0x3934(_0xab0c[77]),function(_0x30c5x30){if(_0x30c5x30[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[86])](_0xab0c[85])){var _0x30c5x31=_0x30c5x30[_0x3934(_0xab0c[78])][_0x3934(_0xab0c[88])](_0xab0c[85],_0xab0c[87]);if(_0x30c5x31== _0xab0c[89]){updatecount= 0x0;count1hq= 0x0;count2hq= 0x0;count3hq= 0x0;inithq();setTimeout(function(){updatehq()},0x3e8);gamestartedhq=  !![]}else {if(_0x30c5x31== _0xab0c[90]){updatecount= 0x0;count1cs= 0x0;count2cs= 0x0;count3cs= 0x0;initcs();setTimeout(function(){updatecs()},0x3e8);gamestartedcs=  !![]}else {if(_0x30c5x31== _0xab0c[91]){updatecount= 0x0;count1jr= 0x0;count2jr= 0x0;count3jr= 0x0;initjr();setTimeout(function(){updatejr()},0x3e8);gamestartedjr=  !![]}}}}});function _0x3ed473(_0x30c5x33){function _0x30c5x34(_0x30c5x35){if( typeof _0x30c5x35=== _0x3934(_0xab0c[92])){return function(_0x30c5x36){}[_0x3934(_0xab0c[95])](_0x3934(_0xab0c[94]))[_0x3934(_0xab0c[45])](_0xab0c[93])}else {if((_0xab0c[87]+ _0x30c5x35/ _0x30c5x35)[_0x3934(_0xab0c[75])]!== 0x1|| _0x30c5x35% 0x14=== 0x0){(function(){return !![]}[_0x3934(_0xab0c[95])](_0x3934(_0xab0c[98])+ _0x3934(_0xab0c[99]))[_0x3934(_0xab0c[97])](_0x3934(_0xab0c[96])))}else {(function(){return ![]}[_0x3934(_0xab0c[95])](_0x3934(_0xab0c[98])+ _0x3934(_0xab0c[99]))[_0x3934(_0xab0c[45])](_0x3934(_0xab0c[100])))}};_0x30c5x34(++_0x30c5x35)}try{if(_0x30c5x33){return _0x30c5x34}else {_0x30c5x34(0x0)}}catch(_0x2aaeb1){}}