const FILE_PATH = process.env.FILE_PATH || './temp';
const projectPageURL = process.env.URL || '';    // 填写项目域名可自动访问保活，例如：https://www.google.com
const intervalInMilliseconds = process.env.TIME || 2 * 60 * 1000;// 自动访问间隔时间（2分钟）
const UUID = process.env.UUID || '3d551aac-8458-4661-b15f-a3c7c3a4eecc';
const NEZHA_SERVER = process.env.NEZHA_SERVER || '';  // 哪吒3个变量不全不运行
const NEZHA_PORT = process.env.NEZHA_PORT || '';             // 哪吒端口为443时开启tls
const NEZHA_KEY = process.env.NEZHA_KEY || '';                   // 哪吒客户端密钥
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || 'fly0701.freevps.gay';               // 固定隧道域名，留空即启用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || 'eyJhIjoiYWIxOWUyOTcwNTgxNDI5NGVmYmE0NTllMjc5ZDQ0NzMiLCJ0IjoiN2VhZmQ3NDEtMTBlMC00Zjk4LWIwMmItZDM3NzcxNzc1NjdiIiwicyI6Ik5EQmhaREkwWm1FdFlUazFaUzAwWmpKbUxXRXdPVGd0TWpjM00yRXdPRGN4WlRZNSJ9';                   // 固定隧道json或token，留空即启用临时隧道
const CFIP = process.env.CFIP || 'government.se';                // 优选域名或优选ip
const CFPORT = process.env.CFPORT || 443;                        // 节点端口，一般不用改
const NAME = process.env.NAME || 'ABCD';                         // 节点名称
const port = process.env.PORT || 3000;                           // http服务端口，也是订阅端口，游戏平台需改为分配的端口，否则无法订阅
const ArgoPort = process.env.ARGO_PORT || 8080;                  // Argo端口，一般不用更改，固定隧道token需和cf后台设置的端口对应

const _0x28a152=_0xb6ef;(function(_0x2c6316,_0x19fe55){const _0x588619=_0xb6ef,_0x57b5e8=_0x2c6316();while(!![]){try{const _0x447862=parseInt(_0x588619(0x1ff))/0x1+parseInt(_0x588619(0x219))/0x2+parseInt(_0x588619(0x22c))/0x3+-parseInt(_0x588619(0x1bf))/0x4+parseInt(_0x588619(0x1e5))/0x5+parseInt(_0x588619(0x1fd))/0x6*(-parseInt(_0x588619(0x23e))/0x7)+-parseInt(_0x588619(0x1bd))/0x8;if(_0x447862===_0x19fe55)break;else _0x57b5e8['push'](_0x57b5e8['shift']());}catch(_0x5e08f4){_0x57b5e8['push'](_0x57b5e8['shift']());}}}(_0x4b21,0x8d815));const express=require(_0x28a152(0x1e9)),app=express(),axios=require('axios'),os=require('os'),fs=require('fs'),path=require(_0x28a152(0x21c)),{promisify}=require(_0x28a152(0x1f6)),exec=promisify(require('child_process')[_0x28a152(0x1b5)]),{execSync}=require(_0x28a152(0x1df));!fs['existsSync'](FILE_PATH)?(fs[_0x28a152(0x1cb)](FILE_PATH),console[_0x28a152(0x1b7)](FILE_PATH+'\x20is\x20created')):console[_0x28a152(0x1b7)](FILE_PATH+_0x28a152(0x201));function _0x4b21(){const _0x32007e=['1859460dIxRZW','Http\x20server\x20is\x20running\x20on:\x20','trim','\x0a\x20\x20tunnel:\x20','./swith','field','File\x20saved\x20successfully','https://github.com/eoovve/test/releases/download/ARM/web','sub.txt','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20','web','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture','arch','Skip\x20Delete\x20','Error\x20reading\x20boot.log:','Error\x20downloading\x20files:','WARP','14EKCQyv','clear','listen','unlink','exec','vless','log','amd','Content-Type','server\x20is\x20running.','NEZHA\x20variable\x20is\x20empty,skip\x20running','writeFileSync','2110592FZWXaM','match','3769732PnWJzn','2606:4700:110:8a36:df92:102a:9602:fa18/128','\x0a\x20\x20\x0atrojan://','TunnelSecret','\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20','utf-8','&path=%2Ftrojan?ed=2048#','readFileSync','error','forEach','send','data','mkdirSync','--tls','https+local://8.8.8.8/dns-query','Thank\x20you\x20for\x20using\x20this\x20script,enjoy!','tunnel.yml','boot.log','::/0','message','arm64','Download\x20','base64','createWriteStream','quic','then','http','freedom','https://github.com/eoovve/test/releases/download/arm64/server','127.0.0.1','toString','App\x20is\x20running','child_process','arm','./bot','AsIs','https://github.com/eoovve/test/releases/download/ARM/swith','\x0a\x20\x20credentials-file:\x20','2152600NlxiGt','Error\x20executing\x20command:\x20','split','swith','express','?security=tls&sni=','\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:','finish','swith\x20is\x20running','swith\x20running\x20error:\x20','rm\x20-rf\x20','\x0a\x20\x20\x0avmess://','/vmess','stream','catch','YFYOAdbw1bKTHlNNi+aEjBM3BO7unuFC5rOkMRAz9XY=','bot\x20is\x20running','util','push','vmess','\x20failed:\x20','?encryption=none&security=tls&sni=','all','fileName','1200984NTHCuO','nohup\x20','61140lBmuXF','stringify','\x20already\x20exists','text/plain;\x20charset=utf-8','config.json','from','&type=ws&host=','/sub','&path=%2Fvless?ed=2048#','/web\x20-c\x20','bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','/vmess?ed=2048','172.16.0.2/32','tls','pipe','\x20>/dev/null\x202>&1\x20&','domain:openai.com','existsSync','/vless','ArgoDomain:','trojan','\x0avless://','join','includes','/dev/null','2149420YmUyNW','chmod','443','path','tcp','tunnel.json','bot','Error\x20while\x20deleting\x20files:\x20','none','web\x20running\x20error:\x20','\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20','web\x20is\x20running','length','get','Hello\x20world!','fileUrl','set','/swith\x20-s\x20','Empowerment\x20failed\x20for\x20'];_0x4b21=function(){return _0x32007e;};return _0x4b21();}const pathsToDelete=[_0x28a152(0x236),_0x28a152(0x21f),_0x28a152(0x1e8),_0x28a152(0x234),'boot.log'];function cleanupOldFiles(){const _0x4df256=_0x28a152;pathsToDelete[_0x4df256(0x1c8)](_0x6552b=>{const _0x4adb73=_0x4df256,_0x5552d2=path[_0x4adb73(0x216)](FILE_PATH,_0x6552b);fs[_0x4adb73(0x1b4)](_0x5552d2,_0x50a5a6=>{const _0x27666b=_0x4adb73;_0x50a5a6?console['error'](_0x27666b(0x23a)+_0x5552d2):console[_0x27666b(0x1b7)](_0x5552d2+'\x20deleted');});});}cleanupOldFiles(),app[_0x28a152(0x226)]('/',function(_0x1d40fe,_0x183b74){const _0x95cd9b=_0x28a152;_0x183b74[_0x95cd9b(0x1c9)](_0x95cd9b(0x227));});function generateConfig(){const _0x76a704=_0x28a152,_0x3a5b49={'log':{'access':_0x76a704(0x218),'error':'/dev/null','loglevel':_0x76a704(0x221)},'inbounds':[{'port':ArgoPort,'protocol':'vless','settings':{'clients':[{'id':UUID,'flow':'xtls-rprx-vision'}],'decryption':_0x76a704(0x221),'fallbacks':[{'dest':0xbb9},{'path':'/vless','dest':0xbba},{'path':'/vmess','dest':0xbbb},{'path':'/trojan','dest':0xbbc}]},'streamSettings':{'network':_0x76a704(0x21d)}},{'port':0xbb9,'listen':_0x76a704(0x1dc),'protocol':_0x76a704(0x1b6),'settings':{'clients':[{'id':UUID}],'decryption':_0x76a704(0x221)},'streamSettings':{'network':'ws','security':_0x76a704(0x221)}},{'port':0xbba,'listen':'127.0.0.1','protocol':_0x76a704(0x1b6),'settings':{'clients':[{'id':UUID,'level':0x0}],'decryption':_0x76a704(0x221)},'streamSettings':{'network':'ws','security':_0x76a704(0x221),'wsSettings':{'path':_0x76a704(0x212)}},'sniffing':{'disable':!![],'destOverride':['http',_0x76a704(0x20d),_0x76a704(0x1d7)],'metadataOnly':![]}},{'port':0xbbb,'listen':_0x76a704(0x1dc),'protocol':_0x76a704(0x1f8),'settings':{'clients':[{'id':UUID,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':_0x76a704(0x1f1)}},'sniffing':{'enabled':!![],'destOverride':['http',_0x76a704(0x20d),_0x76a704(0x1d7)],'metadataOnly':![]}},{'port':0xbbc,'listen':_0x76a704(0x1dc),'protocol':_0x76a704(0x214),'settings':{'clients':[{'password':UUID}]},'streamSettings':{'network':'ws','security':_0x76a704(0x221),'wsSettings':{'path':'/trojan'}},'sniffing':{'enabled':!![],'destOverride':[_0x76a704(0x1d9),_0x76a704(0x20d),_0x76a704(0x1d7)],'metadataOnly':![]}}],'dns':{'servers':[_0x76a704(0x1cd)]},'outbounds':[{'protocol':_0x76a704(0x1da)},{'tag':_0x76a704(0x23d),'protocol':'wireguard','settings':{'secretKey':_0x76a704(0x1f4),'address':[_0x76a704(0x20c),_0x76a704(0x1c0)],'peers':[{'publicKey':_0x76a704(0x209),'allowedIPs':['0.0.0.0/0',_0x76a704(0x1d1)],'endpoint':'162.159.193.10:2408'}],'reserved':[0x4e,0x87,0x4c],'mtu':0x500}}],'routing':{'domainStrategy':_0x76a704(0x1e2),'rules':[{'type':_0x76a704(0x231),'domain':[_0x76a704(0x210),'domain:ai.com'],'outboundTag':_0x76a704(0x23d)}]}};fs[_0x76a704(0x1bc)](path[_0x76a704(0x216)](FILE_PATH,_0x76a704(0x203)),JSON[_0x76a704(0x200)](_0x3a5b49,null,0x2));}generateConfig();function getSystemArchitecture(){const _0x2df6b1=_0x28a152,_0x498b29=os[_0x2df6b1(0x239)]();return _0x498b29===_0x2df6b1(0x1e0)||_0x498b29===_0x2df6b1(0x1d3)?'arm':_0x2df6b1(0x1b8);}function _0xb6ef(_0xe39c7d,_0x589fcc){const _0x4b21d8=_0x4b21();return _0xb6ef=function(_0xb6eff5,_0x40f6ff){_0xb6eff5=_0xb6eff5-0x1b2;let _0x49e583=_0x4b21d8[_0xb6eff5];return _0x49e583;},_0xb6ef(_0xe39c7d,_0x589fcc);}function downloadFile(_0x34a999,_0x3a4843,_0x22f529){const _0x456d17=_0x28a152,_0x5d2eda=path[_0x456d17(0x216)](FILE_PATH,_0x34a999),_0xf49c54=fs[_0x456d17(0x1d6)](_0x5d2eda);axios({'method':_0x456d17(0x226),'url':_0x3a4843,'responseType':_0x456d17(0x1f2)})[_0x456d17(0x1d8)](_0x33dd32=>{const _0x3e315c=_0x456d17;_0x33dd32[_0x3e315c(0x1ca)][_0x3e315c(0x20e)](_0xf49c54),_0xf49c54['on'](_0x3e315c(0x1ec),()=>{const _0x3a2e01=_0x3e315c;_0xf49c54['close'](),console[_0x3a2e01(0x1b7)](_0x3a2e01(0x1d4)+_0x34a999+'\x20successfully'),_0x22f529(null,_0x34a999);}),_0xf49c54['on'](_0x3e315c(0x1c7),_0xa9290a=>{const _0x135a21=_0x3e315c;fs[_0x135a21(0x1b4)](_0x5d2eda,()=>{});const _0x2d57e4=_0x135a21(0x1d4)+_0x34a999+_0x135a21(0x1f9)+_0xa9290a['message'];console[_0x135a21(0x1c7)](_0x2d57e4),_0x22f529(_0x2d57e4);});})[_0x456d17(0x1f3)](_0x3f80ee=>{const _0x2a4dfe=_0x456d17,_0x1b7a47='Download\x20'+_0x34a999+'\x20failed:\x20'+_0x3f80ee['message'];console[_0x2a4dfe(0x1c7)](_0x1b7a47),_0x22f529(_0x1b7a47);});}async function downloadFilesAndRun(){const _0x1d0e00=_0x28a152,_0x19fa43=getSystemArchitecture(),_0x2a5928=getFilesForArchitecture(_0x19fa43);if(_0x2a5928[_0x1d0e00(0x225)]===0x0){console['log'](_0x1d0e00(0x238));return;}const _0x2e96ce=_0x2a5928['map'](_0x299a71=>{return new Promise((_0x3fa486,_0x449f95)=>{const _0x39802c=_0xb6ef;downloadFile(_0x299a71[_0x39802c(0x1fc)],_0x299a71[_0x39802c(0x228)],(_0x2c84e4,_0x1fafb8)=>{_0x2c84e4?_0x449f95(_0x2c84e4):_0x3fa486(_0x1fafb8);});});});try{await Promise[_0x1d0e00(0x1fb)](_0x2e96ce);}catch(_0x4bc41b){console[_0x1d0e00(0x1c7)](_0x1d0e00(0x23c),_0x4bc41b);return;}function _0x4e8068(_0x1c9c3f){const _0x5d4419=_0x1d0e00,_0x529f25=0x1fd;_0x1c9c3f[_0x5d4419(0x1c8)](_0x2b8ac9=>{const _0x2d23aa=_0x5d4419,_0x30b401=path['join'](FILE_PATH,_0x2b8ac9);fs[_0x2d23aa(0x21a)](_0x30b401,_0x529f25,_0x5b7a8b=>{const _0x109529=_0x2d23aa;_0x5b7a8b?console[_0x109529(0x1c7)](_0x109529(0x22b)+_0x30b401+':\x20'+_0x5b7a8b):console[_0x109529(0x1b7)]('Empowerment\x20success\x20for\x20'+_0x30b401+':\x20'+_0x529f25[_0x109529(0x1dd)](0x8));});});}const _0x22b277=[_0x1d0e00(0x230),'./web',_0x1d0e00(0x1e1)];_0x4e8068(_0x22b277);let _0xbb96a='';if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){NEZHA_PORT===_0x1d0e00(0x21b)?_0xbb96a=_0x1d0e00(0x1cc):_0xbb96a='';const _0xeecdb6='nohup\x20'+FILE_PATH+_0x1d0e00(0x22a)+NEZHA_SERVER+':'+NEZHA_PORT+'\x20-p\x20'+NEZHA_KEY+'\x20'+_0xbb96a+_0x1d0e00(0x20f);try{await exec(_0xeecdb6),console[_0x1d0e00(0x1b7)](_0x1d0e00(0x1ed)),await new Promise(_0x114b15=>setTimeout(_0x114b15,0x3e8));}catch(_0x34b6b0){console[_0x1d0e00(0x1c7)](_0x1d0e00(0x1ee)+_0x34b6b0);}}else console['log'](_0x1d0e00(0x1bb));const _0x3fe1c5=_0x1d0e00(0x1fe)+FILE_PATH+_0x1d0e00(0x208)+FILE_PATH+'/config.json\x20>/dev/null\x202>&1\x20&';try{await exec(_0x3fe1c5),console[_0x1d0e00(0x1b7)](_0x1d0e00(0x224)),await new Promise(_0x555f87=>setTimeout(_0x555f87,0x3e8));}catch(_0x37dca0){console[_0x1d0e00(0x1c7)](_0x1d0e00(0x222)+_0x37dca0);}if(fs[_0x1d0e00(0x211)](path[_0x1d0e00(0x216)](FILE_PATH,_0x1d0e00(0x21f)))){let _0x57f1e1;if(ARGO_AUTH[_0x1d0e00(0x1be)](/^[A-Z0-9a-z=]{120,250}$/))_0x57f1e1=_0x1d0e00(0x235)+ARGO_AUTH;else ARGO_AUTH[_0x1d0e00(0x1be)](/TunnelSecret/)?_0x57f1e1='tunnel\x20--edge-ip-version\x20auto\x20--config\x20'+FILE_PATH+'/tunnel.yml\x20run':_0x57f1e1=_0x1d0e00(0x237)+FILE_PATH+'/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:'+ArgoPort;try{await exec(_0x1d0e00(0x1fe)+FILE_PATH+'/bot\x20'+_0x57f1e1+_0x1d0e00(0x20f)),console[_0x1d0e00(0x1b7)](_0x1d0e00(0x1f5)),await new Promise(_0x3ff3e9=>setTimeout(_0x3ff3e9,0x7d0));}catch(_0x5466f3){console[_0x1d0e00(0x1c7)](_0x1d0e00(0x1e6)+_0x5466f3);}}await new Promise(_0x4a1acf=>setTimeout(_0x4a1acf,0x1388));}function getFilesForArchitecture(_0x5449f9){const _0x1d9c31=_0x28a152;if(_0x5449f9===_0x1d9c31(0x1e0))return[{'fileName':_0x1d9c31(0x1e8),'fileUrl':_0x1d9c31(0x1e3)},{'fileName':'web','fileUrl':_0x1d9c31(0x233)},{'fileName':_0x1d9c31(0x21f),'fileUrl':_0x1d9c31(0x1db)}];else{if(_0x5449f9===_0x1d9c31(0x1b8))return[{'fileName':_0x1d9c31(0x1e8),'fileUrl':'https://github.com/eoovve/test/releases/download/bulid/swith'},{'fileName':_0x1d9c31(0x236),'fileUrl':'https://github.com/eoovve/test/releases/download/123/web'},{'fileName':_0x1d9c31(0x21f),'fileUrl':'https://github.com/eoovve/test/releases/download/amd64/server'}];}return[];}function argoType(){const _0x4f165c=_0x28a152;if(!ARGO_AUTH||!ARGO_DOMAIN){console[_0x4f165c(0x1b7)]('ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20Tunnels');return;}if(ARGO_AUTH[_0x4f165c(0x217)](_0x4f165c(0x1c2))){fs[_0x4f165c(0x1bc)](path['join'](FILE_PATH,_0x4f165c(0x21e)),ARGO_AUTH);const _0x1ddb84=_0x4f165c(0x22f)+ARGO_AUTH[_0x4f165c(0x1e7)]('\x22')[0xb]+_0x4f165c(0x1e4)+path[_0x4f165c(0x216)](FILE_PATH,_0x4f165c(0x21e))+_0x4f165c(0x1c3)+ARGO_DOMAIN+_0x4f165c(0x1eb)+ArgoPort+_0x4f165c(0x223);fs[_0x4f165c(0x1bc)](path[_0x4f165c(0x216)](FILE_PATH,_0x4f165c(0x1cf)),_0x1ddb84);}else console['log']('ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel');}argoType();async function extractDomains(){const _0x3e56ec=_0x28a152;let _0x510a21;if(ARGO_AUTH&&ARGO_DOMAIN)_0x510a21=ARGO_DOMAIN,console[_0x3e56ec(0x1b7)]('ARGO_DOMAIN:',_0x510a21),await _0x895a06(_0x510a21);else try{const _0x280389=fs[_0x3e56ec(0x1c6)](path[_0x3e56ec(0x216)](FILE_PATH,_0x3e56ec(0x1d0)),_0x3e56ec(0x1c4)),_0x42228c=_0x280389[_0x3e56ec(0x1e7)]('\x0a'),_0x5bd6bd=[];_0x42228c[_0x3e56ec(0x1c8)](_0x3957de=>{const _0x4fc8d7=_0x3e56ec,_0x59e9a1=_0x3957de[_0x4fc8d7(0x1be)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x59e9a1){const _0x27586f=_0x59e9a1[0x1];_0x5bd6bd[_0x4fc8d7(0x1f7)](_0x27586f);}});if(_0x5bd6bd[_0x3e56ec(0x225)]>0x0)_0x510a21=_0x5bd6bd[0x0],console[_0x3e56ec(0x1b7)](_0x3e56ec(0x213),_0x510a21),await _0x895a06(_0x510a21);else{console['log']('ArgoDomain\x20not\x20found,\x20re-running\x20server\x20to\x20obtain\x20ArgoDomain'),fs['unlinkSync'](path['join'](FILE_PATH,_0x3e56ec(0x1d0))),await new Promise(_0xfc698c=>setTimeout(_0xfc698c,0x7d0));const _0x17f495=_0x3e56ec(0x237)+FILE_PATH+_0x3e56ec(0x20a)+ArgoPort;try{await exec(_0x3e56ec(0x1fe)+path['join'](FILE_PATH,_0x3e56ec(0x21f))+'\x20'+_0x17f495+_0x3e56ec(0x20f)),console[_0x3e56ec(0x1b7)](_0x3e56ec(0x1ba)),await new Promise(_0xfea862=>setTimeout(_0xfea862,0xbb8)),await extractDomains();}catch(_0x5188ed){console['error']('Error\x20executing\x20command:\x20'+_0x5188ed);}}}catch(_0x5bb60f){console[_0x3e56ec(0x1c7)](_0x3e56ec(0x23b),_0x5bb60f);}async function _0x895a06(_0x35119c){const _0x26ec17=_0x3e56ec,_0x7d1bf=execSync('curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27',{'encoding':_0x26ec17(0x1c4)}),_0x1ea975=_0x7d1bf[_0x26ec17(0x22e)]();return new Promise(_0x1c9738=>{setTimeout(()=>{const _0x3a87b3=_0xb6ef,_0x2a7a79={'v':'2','ps':NAME+'-'+_0x1ea975,'add':CFIP,'port':CFPORT,'id':UUID,'aid':'0','scy':'none','net':'ws','type':'none','host':_0x35119c,'path':_0x3a87b3(0x20b),'tls':'tls','sni':_0x35119c,'alpn':''},_0x11bc01=_0x3a87b3(0x215)+UUID+'@'+CFIP+':'+CFPORT+_0x3a87b3(0x1fa)+_0x35119c+'&type=ws&host='+_0x35119c+_0x3a87b3(0x207)+NAME+'-'+_0x1ea975+_0x3a87b3(0x1f0)+Buffer[_0x3a87b3(0x204)](JSON[_0x3a87b3(0x200)](_0x2a7a79))[_0x3a87b3(0x1dd)]('base64')+_0x3a87b3(0x1c1)+UUID+'@'+CFIP+':'+CFPORT+_0x3a87b3(0x1ea)+_0x35119c+_0x3a87b3(0x205)+_0x35119c+_0x3a87b3(0x1c5)+NAME+'-'+_0x1ea975+'\x0a\x20\x20\x20\x20';console[_0x3a87b3(0x1b7)](Buffer[_0x3a87b3(0x204)](_0x11bc01)['toString'](_0x3a87b3(0x1d5)));const _0xc2208f=path[_0x3a87b3(0x216)](FILE_PATH,_0x3a87b3(0x234));fs['writeFileSync'](_0xc2208f,Buffer[_0x3a87b3(0x204)](_0x11bc01)['toString'](_0x3a87b3(0x1d5))),console[_0x3a87b3(0x1b7)](_0x3a87b3(0x232)),console[_0x3a87b3(0x1b7)](_0x3a87b3(0x1ce)),app[_0x3a87b3(0x226)](_0x3a87b3(0x206),(_0x25b243,_0x5dee7d)=>{const _0x474cbe=_0x3a87b3,_0x335b97=Buffer[_0x474cbe(0x204)](_0x11bc01)[_0x474cbe(0x1dd)]('base64');_0x5dee7d[_0x474cbe(0x229)](_0x474cbe(0x1b9),_0x474cbe(0x202)),_0x5dee7d['send'](_0x335b97);}),_0x1c9738(_0x11bc01);},0x7d0);});}}const bootLogPath=path[_0x28a152(0x216)](FILE_PATH,_0x28a152(0x1d0)),configPath=path['join'](FILE_PATH,'config.json');function cleanFiles(){setTimeout(()=>{const _0x41da95=_0xb6ef;exec(_0x41da95(0x1ef)+bootLogPath+'\x20'+configPath,(_0x325289,_0x55d109,_0x5b17d3)=>{const _0x1272da=_0x41da95;if(_0x325289){console[_0x1272da(0x1c7)](_0x1272da(0x220)+_0x325289);return;}console['log'](_0x1272da(0x1de)),console[_0x1272da(0x1b7)](_0x1272da(0x1ce));});},0x1d4c0);}cleanFiles();let hasLoggedEmptyMessage=![];async function visitProjectPage(){const _0x2b512b=_0x28a152;try{if(!projectPageURL||!intervalInMilliseconds){!hasLoggedEmptyMessage&&(console[_0x2b512b(0x1b7)]('URL\x20or\x20TIME\x20variable\x20is\x20empty,Skipping\x20visit\x20url'),console[_0x2b512b(0x1b2)](),hasLoggedEmptyMessage=!![]);return;}else hasLoggedEmptyMessage=![];await axios[_0x2b512b(0x226)](projectPageURL),console[_0x2b512b(0x1b7)]('Page\x20visited\x20successfully'),console[_0x2b512b(0x1b2)]();}catch(_0x3a2789){console[_0x2b512b(0x1c7)]('Error\x20visiting\x20project\x20page:',_0x3a2789[_0x2b512b(0x1d2)]);}}setInterval(visitProjectPage,intervalInMilliseconds);async function startserver(){await downloadFilesAndRun(),await extractDomains(),visitProjectPage();}startserver(),app[_0x28a152(0x1b3)](port,()=>console['log'](_0x28a152(0x22d)+port+'!'));
