// Curated schematic lessons. Source page numbers refer to the PDF viewer.
const manual='https://palsusa.com/wp-content/uploads/sites/6/2015/11/Dry-Rapid-DR-1500_GB-Operation.pdf';
const brochure='https://cdn.bigdutchman.com/fileadmin/content/pig/products/en/Pig-production-Dry-feeding-DryRapid-Big-Dutchman-en.pdf';
export const LESSONS={
 install:{title:'安装教程',subtitle:'从布置到试运行',steps:[
  {title:'布置与固定料线',short:'固定料线',text:'先核对料线走向、栏位和检修空间，再安装支撑、管段与转角组件。管接头应对齐，切口去毛刺。',check:'观察管段归位，核对转角与支撑的位置。',note:'支撑间距、标高和紧固参数按工程图与对应型号手册确定。',action:'演示管线就位',effect:'pipe-fit',view:'system',part:'conveyor',xray:false,page:100,duration:4},
  {title:'挂装料筒与落料管',short:'挂装料筒',text:'将出料口、料筒和落料管对应到食槽，按厂家结构固定。此类系统应先完成这些组件，再穿入链条。',check:'看进料口对接，以及落料管进入食槽的方向。',note:'位移只表示装配关系，不能作为真实装配间隙或拆装路径。',action:'演示料筒挂装',effect:'dispenser-fit',view:'dispenser',part:'dispenser',xray:false,page:113,duration:4},
  {title:'穿入并连接链盘',short:'穿装链盘',text:'按料线方向穿入链盘，避免链条扭转，再按厂家方法连接、调整张紧。',check:'沿橙色路径，观察链盘如何穿过直管和转角。',note:'动画为穿装路径示意；连接方式、链条余量和张紧值不能从模型读取。',action:'演示链盘穿入',effect:'chain-thread',view:'system',part:'conveyor',xray:true,page:103,duration:7},
  {title:'连接放料与料位检测',short:'连接控制',text:'连接关闭球开口绳与统一放料绳，确认动作顺畅。末端料位检测用于向控制系统提供补料完成信号。',check:'拖动动作进度，观察关闭球抬起、绳索连接与末端传感器。',note:'电气连接由合格人员完成。不要用手协助正在运行的机构排除卡阻。',action:'演示放料联动',effect:'release-check',view:'principle',part:'release',station:6,xray:true,page:136,duration:4},
  {title:'检查后试运行',short:'检查试运行',text:'恢复全部防护，清除工具与散件。按现场程序检查转向、限位和急停，再验证补料、停料与放料。',check:'在模型中走完一个饲喂循环，确认链盘与放料动作先后关系。',note:'模型只演示饲料路径；急停、联锁和电气功能需要现场检验。',action:'播放试运行',effect:'trial',view:'system',part:'system',xray:true,page:152,duration:14}
 ]},
 maintain:{title:'保养教程',subtitle:'停机、检查、清洁、复装',steps:[
  {title:'停机并防止误启动',short:'停机隔离',text:'清洁或检修前，停止设备、切断电源并防止误启动。确认运动部件停止，按现场程序处理其他能源。',check:'定位控制与驱动部件，先建立停机隔离状态。',note:'模型中的状态仅为教学标记，不代表真实设备已断电。',action:'演示停机隔离',effect:'isolate',view:'system',part:'sensor',xray:false,page:21,duration:3},
  {title:'清理料筒与残料',short:'料筒清洁',text:'按对应结构打开可拆部位，清除沉积和残料。清洁后的料筒充分干燥，再装回使用。',check:'点击演示，分开料筒下部，查看内腔与出料口。',note:'展示一种可拆下部结构；清洗剂、用水方式和拆法按具体产品说明执行。',action:'展开清洁部位',effect:'clean',view:'dispenser',part:'dispenser',xray:true,page:159,duration:4},
  {title:'检查传动与冷却',short:'传动检查',text:'检查管道凹陷、链盘损伤和异常磨损，查明原因。保持电机冷却表面清洁，润滑按部件说明执行。',check:'透视静止的链盘，定位驱动和转角检查点。',note:'不要随意加油或混用润滑剂；参考设备的密封转角轴承不需额外润滑。',action:'依次定位检查点',effect:'drive-check',view:'system',part:'conveyor',xray:true,page:155,duration:6},
  {title:'检查拉绳与出口',short:'放料检查',text:'检查绳索、固定点及料筒出口是否完好、顺畅，并清理影响料位检测的附着物。',check:'静态展开标记，查看绳索连接、关闭球座和传感器。',note:'本步骤保持设备停止。密闭驱动内部维修交由厂家授权人员处理。',action:'显示检查位置',effect:'outlet-check',view:'principle',part:'release',station:6,xray:true,page:156,duration:4},
  {title:'复装后验证',short:'复装验证',text:'复装料筒与防护，清除工具和残留物；确认人员离开危险部位后，按现场程序恢复并验证运行。',check:'切回完整设备，观察储料、统一放料和出口复位。',note:'如有异响、卡滞或动作异常，应停机排查。',action:'播放复装验证',effect:'trial',view:'system',part:'system',xray:true,page:21,duration:14}
 ]},
 operate:{title:'使用运行',subtitle:'设定、补料、放料、复位',steps:[
  {title:'设定每筒容积',short:'设定容积',text:'根据现场饲喂方案设置各筒容积。拖动容积滑块，观察刻度位置与料位示意变化。',check:'同一容积的饲料，重量会随密度变化；按实际饲料标定。',note:'本版对 12 个料筒使用同一演示设定，不提供日粮建议。',action:'演示设定位置',effect:'dose',view:'dispenser',part:'dispenser',xray:true,page:5,source:brochure,duration:4},
  {title:'启动输料并等待装满',short:'输料储料',text:'启动料线后，链盘将饲料分配至各筒。末端料筒填满时，料位信号触发停止输料。',check:'沿 A 排到 B 排观察补料，最后查看 B01 的料位检测。',note:'动画次序与速度为教学设定。',action:'播放输料过程',effect:'fill',view:'system',part:'conveyor',xray:true,page:5,source:brochure,duration:10},
  {title:'统一释放储存饲料',short:'统一放料',text:'到达放料环节，统一机构提起关闭球，饲料靠重力沿落料管进入食槽。',check:'显示猪，观察料筒、落料管、食槽与栏位的对应关系。',note:'长料线的动作可能存在先后；动画以同步动作解释原理。',action:'播放放料过程',effect:'release',view:'system',part:'release',xray:true,page:5,source:brochure,duration:7},
  {title:'复位并观察结果',short:'复位检查',text:'放料结束，关闭球重新落座。观察有无残料、堵塞、漏料或异常声音，再按方案进入下一循环。',check:'看出口关闭状态，以及食槽中的已投放饲料。',note:'发现卡阻时，停机隔离后排查，不在运行中伸手处理。',action:'重看出口复位',effect:'reset',view:'principle',part:'release',xray:true,page:18,duration:4}
 ]}
};
for(const group of Object.values(LESSONS))for(const step of group.steps)step.url=`${step.source||manual}#page=${step.page}`;
export function lessonFor(v){return LESSONS[v.lesson]?.steps[v.lessonStep]||null;}
export function lessonCycle(v){const step=lessonFor(v),a=v.lessonProgress;if(!step)return v.progress;switch(step.effect){case'trial':return a;case'fill':return a*.54;case'release':return .61+a*.34;case'reset':return .90+a*.10;case'dose':return .52;default:return 0;}}
export function lessonPose(m,v){const step=lessonFor(v);if(!step)return true;const a=v.lessonProgress,e=step.effect;
 const hopper=['shell','bowl','trim','lid','adjuster','feed','ball','cord'];
 if(e==='pipe-fit'){
  if(m.kind==='pipe')m.offset[1]+=(1-a)*.75;
  if(!['environment','pipe','frame','silo'].includes(m.kind))m.renderAlpha=Math.min(m.renderAlpha,.10);
 }
 if(e==='dispenser-fit'){
  if(hopper.includes(m.kind)){m.offset[0]+=(1-a)*.65;m.offset[1]+=(1-a)*.13;}
  if(m.kind==='downpipe')m.offset[2]+=(1-a)*.55;
 }
 if(e==='chain-thread'){
  if(m.kind==='disc'&&m.disc>=Math.ceil(a*78))return false;
  if(m.kind==='chain')m.drawFraction=a;
  if(!['chain','disc','pipe','frame'].includes(m.kind))m.renderAlpha=Math.min(m.renderAlpha,.12);
 }
 if(e==='release-check'&&['ball','cord'].includes(m.kind)){
  m.offset[1]+=.22*a;
  if(m.kind==='cord')m.scale[1]=(1.45-.22*a)/1.45;
 }
 if(e==='clean'){
  if(m.kind==='bowl')m.offset[1]-=a*.38;
  if(m.kind==='downpipe'){m.offset[0]+=a*.60;m.renderAlpha=.25;}
  if(m.kind==='lid')m.offset[2]+=a*.36;
  if(m.kind==='cord')m.renderAlpha=.20;
 }
 if(e==='isolate'){
  if(m.kind!=='controller'&&m.kind!=='drive')m.renderAlpha=Math.min(m.renderAlpha,.13);
 }
 if(e==='drive-check'){
  const kinds=a<.34?['pipe','chain','disc']:a<.68?['drive']:['frame'];
  if(!kinds.includes(m.kind))m.renderAlpha=Math.min(m.renderAlpha,.12);else m.highlight=1;
 }
 if(e==='outlet-check'){const key=a<.34?'cord':a<.68?'ball':'sensor';if(m.kind===key){m.highlight=1;m.renderAlpha=1;}else m.renderAlpha=Math.min(m.renderAlpha,.20);}
 if(e==='dose'){const amount=1+(v.portion-1)*a;if(m.kind==='adjuster')m.offset[1]=2.62+amount/6*.42;if(m.kind==='feed')m.scale[1]=amount/6*.98;}
 return true;
}
export function lessonLabels(v,s){const step=lessonFor(v),a=v.lessonProgress,e=step?.effect;let all=[];const label=(id,text,p)=>({id,text,p,part:step.part,lesson:true});
 if(e==='pipe-fit')all=[label('pipe','管段归位 · 对齐接头',[.4,3.75+(1-a)*.75,-1.05]),label('support','支撑固定 · 核对标高',[4.55,2.6,1.05]),label('route','栏位与落料方向',[1.2,.3,2.7])];
 if(e==='dispenser-fit')all=[label('joint','进料口对接',[s.x+(1-a)*.65,3.43+(1-a)*.13,s.z]),label('clamp','按型号安装固定件',[s.x-.4,3.1,s.z]),label('drop','落料管对准食槽',[s.x,.74,s.z+(1-a)*.55])];
 if(e==='chain-thread')all=[label('thread','链盘穿入方向',[2.1,3.7,-1.05]),label('turn','转角处避免扭转',[4.45,3.65,1.05]),label('tension','连接与张紧按厂家说明',[-4.25,4.15,.6])];
 if(e==='release-check'||e==='outlet-check')all=[label('rope',e==='release-check'?'开口绳联动':'检查绳索与固定点',[s.x,3.79,s.z]),label('seat',e==='release-check'?'关闭球抬起 / 落座':'检查关闭球与出口',[s.x-.38,2.28+a*.22*(e==='release-check'),s.z]),label('sensor','末端料位检测',[s.x-.41,3.0,s.z])];
 if(e==='outlet-check')all=[all[a<.34?0:a<.68?1:2]];
 if(e==='clean')all=[label('chamber','清除内壁沉积',[s.x-.36,2.94,s.z]),label('bowl','可拆下部 · 开放清洁示意',[s.x,2.33-a*.38,s.z]),label('dry','充分干燥后复装',[s.x+.62,2.75,s.z+.2])];
 if(e==='isolate')all=[label('power',a<.8?'切断电源 · 防止误启动':'停机隔离完成（示意）',[-4.65,2.12,1.7]),label('drive','确认运动部件停止',[-4.25,4.18,.6])];
 if(e==='drive-check')all=[a<.34?label('disc','检查管道 / 链盘损伤',[-3.0,3.72,-1.05]):a<.68?label('cooling','电机冷却 / 指定润滑',[-4.25,4.22,.6]):label('bearing','密封转角轴承 · 不随意加油',[-4.25,3.79,1.05])];
 if(e==='dose')all=[label('setting',`目标容积 · ${v.portion.toFixed(1)} L`,[s.x+.5,2.89,s.z+.25]),label('volume','按实际饲料标定重量',[s.x-.4,2.5,s.z])];
 if(e==='fill'||e==='trial')all=[label('delivery','链盘输送 → 定量储料',[1.8,3.77,-1.05]),label('end','末端装满 → 停止输料',[-3.6,3.1,1.05]),label('release','储料后统一放料',[-4.25,4.12,0])];
 if(e==='release')all=[label('open','统一提起关闭球',[1.8,2.64,1.05]),label('fall','靠重力进入食槽',[.7,.64,1.35])];
 if(e==='reset')all=[label('closed','关闭球复位',[s.x-.3,2.3,s.z]),label('trough','检查放料结果',[s.x,.49,s.z+Math.sign(s.z)*.3])];
 return all;
}
