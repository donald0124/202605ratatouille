"use strict";
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.333" x 7.5"

// ── 讀取 AI 插畫 ─────────────────────────────────────────────────────
const illus = JSON.parse(fs.readFileSync(path.join(__dirname, "illus_b64.json"), "utf8"));

// ── 色彩系統（軍綠＋白底＋橘紅警示）────────────────────────────────────
const C = {
  darkGreen:  "1B3A0F",  // 封面/結語深底
  midGreen:   "2D5A1B",  // 主色標題欄
  lightGreen: "4A7C2A",  // 次色
  accent:     "8FAD45",  // 淺綠點綴
  paleGreen:  "EFF5E8",  // 極淡底色
  warning:    "D64000",  // 橘紅警示
  amber:      "F5A623",  // 金黃強調
  white:      "FFFFFF",
  dark:       "1A2A1A",
  gray:       "6B7B6B",
  lightGray:  "E8EDE8",
  icuOrange:  "FF6B35",
};

const FF = "Microsoft JhengHei";  // 字體

// ── 共用：綠色標題欄 ─────────────────────────────────────────────────
function header(slide, title, sub) {
  slide.addShape(pptx.shapes.RECTANGLE, { x:0, y:0, w:13.333, h:1.15, fill:{color:C.midGreen}, line:{color:C.midGreen} });
  slide.addShape(pptx.shapes.RECTANGLE, { x:0, y:0, w:13.333, h:0.12, fill:{color:C.warning}, line:{color:C.warning} });
  slide.addText(title, { x:0.5, y:0.05, w:12, h:0.85, fontSize:36, bold:true, color:C.white, fontFace:FF, valign:"middle" });
  if (sub) slide.addText(sub, { x:0.5, y:0.95, w:12, h:0.35, fontSize:14, color:"A8C890", fontFace:FF });
}

// ── 共用：分隔線 ─────────────────────────────────────────────────────
function divider(slide, y, color) {
  slide.addShape(pptx.shapes.RECTANGLE, { x:0.5, y, w:12.3, h:0.04, fill:{color:color||C.lightGreen}, line:{color:color||C.lightGreen} });
}

// ─────────────────────────────────────────────────────────────────────
// Slide 1 ▌封面頁（hero + 深色底）
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  // 右半版 AI 英雄圖
  s.addImage({ data:illus["slide_1_hero"], x:5.8, y:0, w:7.533, h:7.5, sizing:{type:"cover",w:7.533,h:7.5} });
  // 左側深綠遮罩
  s.addShape(pptx.shapes.RECTANGLE, { x:0, y:0, w:6.5, h:7.5, fill:{color:C.darkGreen}, line:{color:C.darkGreen} });
  // 頂端橘紅條
  s.addShape(pptx.shapes.RECTANGLE, { x:0, y:0, w:13.333, h:0.15, fill:{color:C.warning}, line:{color:C.warning} });
  // 底端橘紅條
  s.addShape(pptx.shapes.RECTANGLE, { x:0, y:7.35, w:13.333, h:0.15, fill:{color:C.warning}, line:{color:C.warning} });
  // 右側漸層過渡（深綠半透明）
  s.addShape(pptx.shapes.RECTANGLE, { x:5.3, y:0, w:1.5, h:7.5, fill:{color:C.darkGreen,transparency:50}, line:{color:C.darkGreen,transparency:100} });

  // 主標題
  s.addText("敵從鼠來", { x:0.5, y:1.2, w:5.5, h:1.6, fontSize:72, bold:true, color:C.white, fontFace:FF });
  // 副標
  s.addText("漢他病毒防治衛教", { x:0.5, y:2.9, w:5.5, h:0.9, fontSize:34, bold:true, color:C.accent, fontFace:FF });
  // 分隔線
  s.addShape(pptx.shapes.RECTANGLE, { x:0.5, y:4.0, w:4.0, h:0.06, fill:{color:C.warning}, line:{color:C.warning} });
  // 單位、日期
  s.addText("桃園單位衛生醫療部門", { x:0.5, y:4.2, w:5.5, h:0.45, fontSize:18, color:"B8CCA8", fontFace:FF });
  s.addText("2026年5月　｜　報告時間：10–12 分鐘", { x:0.5, y:4.65, w:5.5, h:0.4, fontSize:16, color:"B8CCA8", fontFace:FF });
  // 警示徽章
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x:0.5, y:5.3, w:3.8, h:0.65, fill:{color:C.warning}, line:{color:C.warning}, rectRadius:0.08 });
  s.addText("⚠  法定傳染病・第三類通報", { x:0.5, y:5.3, w:3.8, h:0.65, fontSize:16, bold:true, color:C.white, fontFace:FF, align:"center", valign:"middle" });
  // 底部引言
  s.addText("「一隻鼠的排泄物，可以讓一個人住進 ICU」", { x:0.5, y:6.4, w:5.5, h:0.7, fontSize:14, color:C.amber, fontFace:FF, italic:true });
}

// ─────────────────────────────────────────────────────────────────────
// Slide 2 ▌台灣疫情現況（2026 最新）
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "2026 台灣疫情現況", "最新資料（截至2026年5月）");

  // 死亡警示橫幅
  s.addShape(pptx.shapes.RECTANGLE, { x:0.5, y:1.35, w:12.3, h:1.05, fill:{color:"FFF0E8"}, line:{color:C.warning,pt:2} });
  s.addShape(pptx.shapes.RECTANGLE, { x:0.5, y:1.35, w:0.18, h:1.05, fill:{color:C.warning}, line:{color:C.warning} });
  s.addText("⚠  2000 年以來首起死亡案例", { x:0.85, y:1.38, w:11.7, h:0.45, fontSize:20, bold:true, color:C.warning, fontFace:FF });
  s.addText("台北市70多歲男性，1月發病，敗血症併多重器官衰竭死亡", { x:0.85, y:1.82, w:11.7, h:0.4, fontSize:15, color:C.dark, fontFace:FF });

  // 大數字區塊
  s.addShape(pptx.shapes.RECTANGLE, { x:0.5, y:2.55, w:2.9, h:2.8, fill:{color:C.paleGreen}, line:{color:C.lightGreen,pt:1} });
  s.addText("2", { x:0.5, y:2.65, w:2.9, h:1.4, fontSize:96, bold:true, color:C.midGreen, fontFace:FF, align:"center" });
  s.addText("2026年確診", { x:0.5, y:4.0, w:2.9, h:0.4, fontSize:15, bold:true, color:C.dark, fontFace:FF, align:"center" });
  s.addText("（截至5月）", { x:0.5, y:4.4, w:2.9, h:0.35, fontSize:13, color:C.gray, fontFace:FF, align:"center" });

  // 案例詳情
  s.addText([{text:"第1例：",options:{bold:true,color:C.warning}},{text:"台北市男性・1月・死亡（多重器官衰竭）",options:{color:C.dark}}],
    { x:3.7, y:2.65, w:8.9, h:0.6, fontSize:16, fontFace:FF, bullet:{type:"bullet"} });
  s.addText([{text:"第2例：",options:{bold:true,color:C.midGreen}},{text:"新北市男性・3月・治療後出院",options:{color:C.dark}}],
    { x:3.7, y:3.25, w:8.9, h:0.6, fontSize:16, fontFace:FF, bullet:{type:"bullet"} });
  s.addText("主要病毒株：漢他病毒（Hantaan）、首爾病毒（Seoul）", { x:3.7, y:3.9, w:8.9, h:0.45, fontSize:14, color:C.gray, fontFace:FF });

  // 三個統計方塊
  [
    {v:"45 例",l:"自2017年起累計",s:"確診案例總數",x:0.5},
    {v:"67%",l:"男性占比",s:"男性患者為主",x:4.6},
    {v:"67%",l:"40歲以上",s:"中高齡族群風險高",x:8.7},
  ].forEach(b=>{
    s.addShape(pptx.shapes.RECTANGLE, {x:b.x,y:5.0,w:3.8,h:2.1,fill:{color:C.paleGreen},line:{color:C.accent,pt:1}});
    s.addText(b.v,{x:b.x,y:5.05,w:3.8,h:0.9,fontSize:36,bold:true,color:C.midGreen,fontFace:FF,align:"center"});
    s.addText(b.l,{x:b.x,y:5.95,w:3.8,h:0.4,fontSize:15,bold:true,color:C.dark,fontFace:FF,align:"center"});
    s.addText(b.s,{x:b.x,y:6.35,w:3.8,h:0.4,fontSize:12,color:C.gray,fontFace:FF,align:"center"});
  });
}

// ─────────────────────────────────────────────────────────────────────
// Slide 3 ▌為什麼我們要在意？（ICU 側板）
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "為什麼我們要在意？", "漢他病毒對軍事場域的威脅層面");

  // 右側 ICU 插畫側板
  s.addImage({ data:illus["slide_3_panel"], x:10.2, y:1.15, w:3.133, h:6.35, sizing:{type:"cover",w:3.133,h:6.35} });
  s.addShape(pptx.shapes.RECTANGLE, { x:10.0, y:1.15, w:0.3, h:6.35, fill:{color:C.white}, line:{color:C.white} });

  // 引言大字
  s.addShape(pptx.shapes.RECTANGLE, { x:0.5, y:1.35, w:9.3, h:1.15, fill:{color:C.darkGreen}, line:{color:C.darkGreen} });
  s.addText("「一隻鼠的排泄物，可以讓一個人住進 ICU」", { x:0.5, y:1.35, w:9.3, h:1.15, fontSize:22, bold:true, color:C.amber, fontFace:FF, align:"center", valign:"middle" });

  // 三張威脅卡片
  [
    {n:"1",t:"致死率 1–15%",b:"重症需加護病房（ICU）\n漢他出血熱腎症候群（HFRS）",c:C.warning},
    {n:"2",t:"法定傳染病・第三類",b:"1週內通報義務\n軍事單位有特殊管理責任",c:C.midGreen},
    {n:"3",t:"軍事場域特殊風險",b:"糧倉・地下設施\n廢棄空間・野訓環境",c:"4A7C2A"},
  ].forEach((card,i)=>{
    const x = 0.5 + i * 3.1;
    s.addShape(pptx.shapes.RECTANGLE, {x,y:2.7,w:2.85,h:4.5,fill:{color:C.white},line:{color:card.c,pt:2}});
    s.addShape(pptx.shapes.RECTANGLE, {x,y:2.7,w:2.85,h:0.85,fill:{color:card.c},line:{color:card.c}});
    s.addShape(pptx.shapes.OVAL, {x:x+0.08,y:2.78,w:0.65,h:0.65,fill:{color:C.white},line:{color:C.white}});
    s.addText(card.n, {x:x+0.08,y:2.78,w:0.65,h:0.65,fontSize:18,bold:true,color:card.c,fontFace:FF,align:"center",valign:"middle"});
    s.addText(card.t, {x:x+0.1,y:2.78,w:2.65,h:0.85,fontSize:16,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});
    s.addText(card.b, {x:x+0.15,y:3.75,w:2.55,h:3.2,fontSize:15,color:C.dark,fontFace:FF,align:"center",valign:"top"});
  });
}

// ─────────────────────────────────────────────────────────────────────
// Slide 4 ▌傳播途徑（AI 示意插畫）
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "傳播途徑——怎麼感染的？", "關鍵認知：不是被咬才感染！");

  // 傳播流程四步
  [
    {t:"鼠類排泄物",s:"（糞・尿・唾液）",c:C.warning,x:0.5},
    {t:"乾燥揚塵",s:"（掃地・翻舊物）",c:"D05A00",x:3.3},
    {t:"吸入塵埃",s:"最主要感染途徑",c:C.midGreen,x:6.1},
    {t:"漢他感染",s:"病毒侵入人體",c:C.darkGreen,x:8.9},
  ].forEach((step,i)=>{
    s.addShape(pptx.shapes.RECTANGLE, {x:step.x,y:1.4,w:2.5,h:1.5,fill:{color:step.c},line:{color:step.c}});
    s.addText(step.t,{x:step.x,y:1.45,w:2.5,h:0.85,fontSize:18,bold:true,color:C.white,fontFace:FF,align:"center"});
    s.addText(step.s,{x:step.x,y:2.3,w:2.5,h:0.5,fontSize:12,color:"E8DDD0",fontFace:FF,align:"center"});
    if(i<3) s.addText("▶",{x:step.x+2.5,y:1.85,w:0.7,h:0.7,fontSize:24,color:C.gray,align:"center"});
  });

  // AI 插畫（傳播示意）
  s.addImage({ data:illus["slide_4_illus"], x:8.7, y:3.0, w:4.4, h:4.0, sizing:{type:"contain",w:4.4,h:4.0} });

  // 關鍵說明卡片
  [
    {icon:"❌",t:"不需被咬",b:"吸入含病毒塵埃即感染\n不需直接接觸鼠隻",c:C.paleGreen,bc:C.lightGreen,x:0.5},
    {icon:"❌",t:"不會人傳人",b:"接觸患者無感染風險\n安心照護",c:C.paleGreen,bc:C.lightGreen,x:4.3},
  ].forEach(kp=>{
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {x:kp.x,y:3.15,w:3.5,h:3.6,fill:{color:kp.c},line:{color:kp.bc,pt:1.5},rectRadius:0.1});
    s.addText(kp.icon,{x:kp.x,y:3.3,w:3.5,h:0.8,fontSize:34,align:"center"});
    s.addText(kp.t,{x:kp.x+0.15,y:4.15,w:3.2,h:0.6,fontSize:19,bold:true,color:C.midGreen,fontFace:FF,align:"center"});
    s.addText(kp.b,{x:kp.x+0.15,y:4.8,w:3.2,h:1.7,fontSize:14,color:C.dark,fontFace:FF,align:"center"});
  });

  // 底部警示
  s.addShape(pptx.shapes.RECTANGLE, {x:0.5,y:6.85,w:12.3,h:0.5,fill:{color:C.warning},line:{color:C.warning}});
  s.addText("⚠  最高風險行為：清掃廢棄空間、翻動舊箱 → 必須先通風、先噴消毒、再戴口罩手套",
    {x:0.5,y:6.85,w:12.3,h:0.5,fontSize:14,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 5 ▌臨床症狀
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "臨床症狀——怎麼判斷？", "漢他出血熱腎症候群（HFRS）三期病程");

  // 三期卡片
  [
    {p:"前驅期",d:"發病 1–4 天",sx:["突發高燒（>38.5°C）","頭痛・肌肉痠痛","眼眶周圍疼痛"],c:C.lightGreen,y:1.4},
    {p:"出血／低血壓期",d:"4–8 天",sx:["皮膚出血點（petechiae）","血壓下降・少尿","嚴重者進入 ICU"],c:C.warning,y:1.4},
    {p:"多尿／恢復期",d:"1–2 週",sx:["尿量逐漸增加","腎功能恢復","需持續監測"],c:"28703A",y:1.4},
  ].forEach((ph,i)=>{
    const x = 0.5 + i * 4.3;
    s.addShape(pptx.shapes.RECTANGLE, {x,y:ph.y,w:4.0,h:4.6,fill:{color:C.white},line:{color:ph.c,pt:2}});
    s.addShape(pptx.shapes.RECTANGLE, {x,y:ph.y,w:4.0,h:1.05,fill:{color:ph.c},line:{color:ph.c}});
    s.addText(ph.p,{x:x+0.1,y:ph.y+0.05,w:3.8,h:0.6,fontSize:18,bold:true,color:C.white,fontFace:FF,align:"center"});
    s.addText(ph.d,{x:x+0.1,y:ph.y+0.65,w:3.8,h:0.35,fontSize:13,color:"E8E8E8",fontFace:FF,align:"center"});
    ph.sx.forEach((sym,j)=>{
      s.addText("• "+sym,{x:x+0.25,y:ph.y+1.2+j*0.95,w:3.5,h:0.8,fontSize:16,color:C.dark,fontFace:FF,valign:"middle"});
    });
  });

  // 警示組合方塊
  s.addShape(pptx.shapes.RECTANGLE, {x:0.5,y:6.2,w:12.3,h:1.1,fill:{color:"FFF0E8"},line:{color:C.warning,pt:2}});
  s.addShape(pptx.shapes.RECTANGLE, {x:0.5,y:6.2,w:0.18,h:1.1,fill:{color:C.warning},line:{color:C.warning}});
  s.addText("⚠  關鍵警示",{x:0.85,y:6.24,w:3.0,h:0.45,fontSize:18,bold:true,color:C.warning,fontFace:FF});
  s.addText("有鼠接觸史  ＋  發燒  ＋  血小板低下  ＝  高度懷疑漢他・立即就醫",
    {x:0.85,y:6.68,w:11.7,h:0.5,fontSize:17,bold:true,color:C.dark,fontFace:FF});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 6 ▌通報 SOP 流程
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "如何通報——SOP 流程", "法定傳染病第三類，1 週內完成通報");

  const steps = [
    {n:"01",t:"發現疑似個案",d:"發燒＋鼠接觸史＋符合症狀組合"},
    {n:"02",t:"立即通知醫務所",d:"不要等待觀察，主動聯繫醫療人員"},
    {n:"03",t:"協助安排就醫",d:"送急診（非自行在家觀察）"},
    {n:"04",t:"醫院完成法定通報",d:"由醫院通報疾管署／衛生局，1週內"},
  ];
  steps.forEach((step,i)=>{
    const y = 1.45 + i * 1.38;
    // 步驟圓圈
    s.addShape(pptx.shapes.OVAL, {x:0.5,y:y+0.05,w:0.95,h:0.95,fill:{color:C.midGreen},line:{color:C.midGreen}});
    s.addText(step.n,{x:0.5,y:y+0.05,w:0.95,h:0.95,fontSize:20,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});
    // 連接線
    if(i<3) s.addShape(pptx.shapes.RECTANGLE,{x:0.92,y:y+1.0,w:0.12,h:0.4,fill:{color:C.accent},line:{color:C.accent}});
    // 內容框
    s.addShape(pptx.shapes.RECTANGLE, {x:1.7,y,w:11.1,h:0.95,fill:{color:i%2===0?C.paleGreen:C.white},line:{color:C.lightGreen,pt:0.5}});
    s.addText(step.t,{x:1.95,y,w:5.0,h:0.95,fontSize:22,bold:true,color:C.midGreen,fontFace:FF,valign:"middle"});
    s.addText(step.d,{x:7.1,y,w:5.4,h:0.95,fontSize:15,color:C.gray,fontFace:FF,valign:"middle"});
  });

  // 底部強調
  s.addShape(pptx.shapes.RECTANGLE, {x:0.5,y:7.0,w:12.3,h:0.35,fill:{color:C.midGreen},line:{color:C.midGreen}});
  s.addText("醫療部門角色：啟動流程・協助就醫——不是診斷，是行動",
    {x:0.5,y:7.0,w:12.3,h:0.35,fontSize:14,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 7 ▌就醫時要說什麼？
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "就醫時要說什麼？", "兩句話讓醫生做對的檢查");

  [
    {n:"1",ph:"「我最近有接觸鼠類活動場域」",why:"觸發醫生排查漢他病毒暴露史，避免誤診",c:C.midGreen,bg:C.paleGreen},
    {n:"2",ph:"「症狀：發燒第 X 天，有頭痛、肌肉痠痛」",why:"幫助醫生判斷病程階段，決定是否抽血驗IgM",c:"28703A",bg:"E8F5E8"},
  ].forEach((p,i)=>{
    const y = 1.4 + i * 2.6;
    s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y,w:12.3,h:2.2,fill:{color:p.bg},line:{color:p.c,pt:2}});
    s.addShape(pptx.shapes.OVAL,{x:0.65,y:y+0.6,w:0.9,h:0.9,fill:{color:p.c},line:{color:p.c}});
    s.addText(p.n,{x:0.65,y:y+0.6,w:0.9,h:0.9,fontSize:26,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});
    s.addText(p.ph,{x:1.75,y:y+0.15,w:10.8,h:0.95,fontSize:24,bold:true,color:p.c,fontFace:FF,valign:"middle"});
    s.addText("→ "+p.why,{x:1.75,y:y+1.1,w:10.8,h:0.85,fontSize:16,color:C.gray,fontFace:FF,valign:"middle"});
  });

  // 補充資訊
  s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y:6.85,w:12.3,h:0.5,fill:{color:C.lightGray},line:{color:C.lightGray}});
  s.addText("就醫地點：一般急診即可　｜　醫院檢查：CBC血小板・腎功能・漢他病毒抗體IgM",
    {x:0.5,y:6.85,w:12.3,h:0.5,fontSize:14,color:C.gray,fontFace:FF,align:"center",valign:"middle"});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 8 ▌鼠患識別 Checklist
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "鼠患識別——知道牠在哪", "現場可操作 Checklist，發現即回報");

  const items = [
    {icon:"🐀",l:"鼠糞",d:"黑色小顆粒，沿牆邊分布"},
    {icon:"🦷",l:"咬痕",d:"電線、紙箱、食品袋"},
    {icon:"🖤",l:"油脂痕跡",d:"沿鼠行路徑的黑色油漬"},
    {icon:"👃",l:"異味",d:"濃烈鼠尿腥味，密閉空間尤明顯"},
    {icon:"👁",l:"目視或聲音",d:"夜間聽見異聲，或直接目擊"},
  ];
  items.forEach((item,i)=>{
    const y = 1.5 + i * 1.0;
    s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y,w:8.0,h:0.88,fill:{color:i%2===0?C.paleGreen:C.white},line:{color:C.lightGreen,pt:0.5}});
    s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y,w:0.55,h:0.88,fill:{color:C.midGreen},line:{color:C.midGreen}});
    s.addText("✓",{x:0.5,y,w:0.55,h:0.88,fontSize:20,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});
    s.addText(item.icon+" "+item.l,{x:1.15,y,w:2.6,h:0.88,fontSize:18,bold:true,color:C.midGreen,fontFace:FF,valign:"middle"});
    s.addText(item.d,{x:3.8,y,w:4.5,h:0.88,fontSize:15,color:C.dark,fontFace:FF,valign:"middle"});
  });

  // 右側高風險場域
  s.addShape(pptx.shapes.RECTANGLE,{x:8.8,y:1.5,w:4.0,h:4.95,fill:{color:C.darkGreen},line:{color:C.darkGreen}});
  s.addText("重點高風險場域",{x:8.8,y:1.55,w:4.0,h:0.7,fontSize:17,bold:true,color:C.amber,fontFace:FF,align:"center"});
  ["🏪 糧食倉庫","🍳 廚房區域","🏚 廢棄倉庫","🕳 地下設施"].forEach((area,i)=>{
    s.addText(area,{x:9.0,y:2.35+i*0.88,w:3.6,h:0.75,fontSize:18,color:C.white,fontFace:FF});
  });
  s.addShape(pptx.shapes.RECTANGLE,{x:8.8,y:6.1,w:4.0,h:0.35,fill:{color:C.warning},line:{color:C.warning}});
  s.addText("回報環境衛生管理單位",{x:8.8,y:6.1,w:4.0,h:0.35,fontSize:13,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});

  // 底部提示
  s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y:6.75,w:12.3,h:0.6,fill:{color:C.lightGray},line:{color:C.lightGray}});
  s.addText("發現跡象 → 回報環境衛生管理單位處理（消毒滅鼠非醫療部門業務）",
    {x:0.5,y:6.75,w:12.3,h:0.6,fontSize:15,bold:true,color:C.midGreen,fontFace:FF,align:"center",valign:"middle"});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 9 ▌物理防治三道防線
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "物理防治——三道防線", "系統性消除鼠患的正確順序");

  const lines = [
    {n:"1",t:"阻絕（Exclusion）",items:["封堵所有 > 6mm 縫隙","鐵絲網・水泥補縫","門縫加裝門掃"],c:"1B3A0F"},
    {n:"2",t:"清除食源與棲所",items:["食物密封儲存","垃圾當日清除","清除草叢・廢棄紙箱"],c:C.midGreen},
    {n:"3",t:"捕殺（Trapping）",items:["捕鼠夾優先（可確認捕獲）","使用滅鼠藥需記錄標示","指定人員統一管理"],c:C.lightGreen},
  ];
  lines.forEach((line,i)=>{
    const x = 0.5 + i * 4.28;
    s.addShape(pptx.shapes.RECTANGLE,{x,y:1.4,w:4.0,h:5.7,fill:{color:C.white},line:{color:line.c,pt:2}});
    s.addShape(pptx.shapes.RECTANGLE,{x,y:1.4,w:4.0,h:1.05,fill:{color:line.c},line:{color:line.c}});
    s.addShape(pptx.shapes.OVAL,{x:x+0.15,y:1.48,w:0.75,h:0.75,fill:{color:C.white},line:{color:C.white}});
    s.addText(line.n,{x:x+0.15,y:1.48,w:0.75,h:0.75,fontSize:22,bold:true,color:line.c,fontFace:FF,align:"center",valign:"middle"});
    s.addText("第"+line.n+"道防線",{x:x+0.1,y:1.5,w:3.8,h:0.35,fontSize:12,color:"C8E0B0",fontFace:FF,align:"center"});
    s.addText(line.t,{x:x+0.1,y:1.85,w:3.8,h:0.55,fontSize:16,bold:true,color:C.white,fontFace:FF,align:"center"});
    line.items.forEach((item,j)=>{
      s.addShape(pptx.shapes.RECTANGLE,{x:x+0.2,y:2.65+j*1.2,w:3.55,h:0.95,fill:{color:j%2===0?C.paleGreen:"F5F9F0"},line:{color:C.lightGreen,pt:0.5}});
      s.addText("• "+item,{x:x+0.35,y:2.68+j*1.2,w:3.25,h:0.88,fontSize:15,color:C.dark,fontFace:FF,valign:"middle"});
    });
  });

  // 底部
  s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y:7.15,w:12.3,h:0.22,fill:{color:C.accent},line:{color:C.accent}});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 10 ▌清理鼠患現場（AI 防護圖）
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "清理鼠患現場——最危險的環節", "乾掃＝揚起含病毒塵埃，正確步驟不能省");

  // 大警示橫幅
  s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y:1.35,w:12.3,h:0.9,fill:{color:C.warning},line:{color:C.warning}});
  s.addText("⚠  乾掃・用嘴吹氣 = 最危險！立即有感染風險",
    {x:0.5,y:1.35,w:12.3,h:0.9,fontSize:22,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});

  // 5 個步驟方塊
  const steps = [
    {n:"1",l:"先通風",d:"開窗 30分鐘以上再進入",c:C.lightGreen},
    {n:"2",l:"穿戴防護",d:"外科口罩＋手套，不摸臉",c:C.midGreen},
    {n:"3",l:"噴濕消毒",d:"漂白水1:10噴濕，靜置5分鐘",c:"28703A"},
    {n:"4",l:"擦拭清除",d:"紙巾擦起，密封丟棄",c:"1B4A20"},
    {n:"5",l:"立即洗手",d:"脫手套後洗手，不可省略",c:C.darkGreen},
  ];
  steps.forEach((step,i)=>{
    const x = 0.5 + i * 2.46;
    s.addShape(pptx.shapes.RECTANGLE,{x,y:2.45,w:2.2,h:3.3,fill:{color:step.c},line:{color:step.c}});
    s.addText(step.n,{x,y:2.5,w:2.2,h:0.85,fontSize:40,bold:true,color:C.white,fontFace:FF,align:"center"});
    s.addText(step.l,{x:x+0.1,y:3.35,w:2.0,h:0.7,fontSize:18,bold:true,color:C.white,fontFace:FF,align:"center"});
    s.addText(step.d,{x:x+0.1,y:4.05,w:2.0,h:1.55,fontSize:12,color:"C8E8C0",fontFace:FF,align:"center"});
    if(i<4) s.addText("→",{x:x+2.2,y:3.55,w:0.24,h:0.7,fontSize:20,color:C.gray,align:"center"});
  });

  // AI 清潔插畫
  s.addImage({ data:illus["slide_10_illus"], x:9.3, y:2.45, w:3.5, h:3.3, sizing:{type:"contain",w:3.5,h:3.3} });

  // 事後監測提示
  s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y:5.95,w:12.3,h:0.95,fill:{color:"FFF0E8"},line:{color:C.warning,pt:1.5}});
  s.addText("清理後監測：事後 1–8 週內若出現發燒，需主動告知醫務所曾接觸鼠患現場",
    {x:0.5,y:5.95,w:12.3,h:0.95,fontSize:17,bold:true,color:C.warning,fontFace:FF,align:"center",valign:"middle"});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 11 ▌醫務所能幫你什麼
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  s.background = { color:C.white };
  header(s, "醫務所能幫你什麼", "資源分配與職責劃分");

  // 表格
  const rows = [
    [
      {text:"情境",options:{bold:true,color:C.white,fill:{color:C.midGreen},fontSize:18,fontFace:FF,align:"center",valign:"middle"}},
      {text:"找誰處理",options:{bold:true,color:C.white,fill:{color:C.midGreen},fontSize:18,fontFace:FF,align:"center",valign:"middle"}},
    ],
    [
      {text:"🐀  發現鼠跡、鼠患",options:{fontSize:17,fontFace:FF,valign:"middle"}},
      {text:"環境衛生管理單位（非醫療部門）",options:{fontSize:17,fontFace:FF,valign:"middle"}},
    ],
    [
      {text:"🤒  有人發燒懷疑感染",options:{bold:true,color:C.warning,fontSize:17,fontFace:FF,valign:"middle"}},
      {text:"醫務所",options:{bold:true,color:C.midGreen,fontSize:17,fontFace:FF,valign:"middle"}},
    ],
    [
      {text:"🚑  協助轉診就醫",options:{fontSize:17,fontFace:FF,valign:"middle"}},
      {text:"醫務所",options:{color:C.midGreen,fontSize:17,fontFace:FF,valign:"middle"}},
    ],
    [
      {text:"🧤  防護物資（口罩・手套・漂白水）",options:{fontSize:17,fontFace:FF,valign:"middle"}},
      {text:"醫務所提供",options:{color:C.midGreen,fontSize:17,fontFace:FF,valign:"middle"}},
    ],
  ];

  s.addTable(rows, {
    x:0.5, y:1.45, w:12.3,
    colW:[6.0,6.3],
    rowH:0.82,
    border:{type:"solid",color:"D0D8D0",pt:0.5},
    fontFace:FF, fontSize:17,
    align:"left", valign:"middle",
  });

  // 底部強調
  s.addShape(pptx.shapes.RECTANGLE,{x:0.5,y:5.75,w:12.3,h:1.55,fill:{color:C.darkGreen},line:{color:C.darkGreen}});
  s.addText("醫療問題找醫務所　　　環境滅鼠找環境衛生管理單位",
    {x:0.5,y:5.82,w:12.3,h:0.7,fontSize:22,bold:true,color:C.amber,fontFace:FF,align:"center"});
  s.addText("分工明確，才能快速應對、保護戰力",
    {x:0.5,y:6.52,w:12.3,h:0.6,fontSize:16,color:"B8CCA8",fontFace:FF,align:"center"});
}

// ─────────────────────────────────────────────────────────────────────
// Slide 12 ▌結語與行動呼籲
// ─────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  // 深色全版底
  s.addShape(pptx.shapes.RECTANGLE,{x:0,y:0,w:13.333,h:7.5,fill:{color:C.darkGreen},line:{color:C.darkGreen}});
  s.addShape(pptx.shapes.RECTANGLE,{x:0,y:0,w:13.333,h:0.15,fill:{color:C.warning},line:{color:C.warning}});
  s.addShape(pptx.shapes.RECTANGLE,{x:0,y:7.35,w:13.333,h:0.15,fill:{color:C.warning},line:{color:C.warning}});
  // 裝飾圓
  s.addShape(pptx.shapes.OVAL,{x:9.5,y:-1.5,w:6,h:6,fill:{color:"24500A",transparency:70},line:{color:"3A7A15",transparency:50,pt:1.5}});

  // 標題
  s.addText("帶走的三個行動",{x:0.5,y:0.3,w:12.3,h:0.75,fontSize:30,bold:true,color:C.accent,fontFace:FF,align:"center"});
  divider(s, 1.15, "3A6A1A");

  const actions = [
    {n:"1",t:"看到鼠跡，馬上回報",b:"別等、別自己動手清——回報環境衛生管理單位"},
    {n:"2",t:"清掃前：通風→噴消毒→戴口罩手套",b:"漂白水1:10噴濕，靜置5分鐘後再擦拭"},
    {n:"3",t:"發燒＋鼠接觸史，立刻就醫",b:"主動告知接觸史，讓醫生做正確的漢他篩檢"},
  ];
  actions.forEach((a,i)=>{
    const y = 1.35 + i * 1.72;
    s.addShape(pptx.shapes.OVAL,{x:0.5,y:y+0.2,w:0.9,h:0.9,fill:{color:C.warning},line:{color:C.warning}});
    s.addText(a.n,{x:0.5,y:y+0.2,w:0.9,h:0.9,fontSize:28,bold:true,color:C.white,fontFace:FF,align:"center",valign:"middle"});
    s.addText(a.t,{x:1.6,y:y+0.1,w:11.2,h:0.7,fontSize:22,bold:true,color:C.white,fontFace:FF});
    s.addText(a.b,{x:1.6,y:y+0.8,w:11.2,h:0.65,fontSize:15,color:"B8CCA8",fontFace:FF});
    if(i<2) divider(s, y+1.55, "3A6A1A");
  });

  // 最終結語
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE,{x:1.5,y:6.55,w:10.3,h:0.75,fill:{color:"24500A",transparency:20},line:{color:C.accent,pt:1},rectRadius:0.08});
  s.addText("防鼠就是防病，防病就是戰力保存",
    {x:1.5,y:6.55,w:10.3,h:0.75,fontSize:24,bold:true,color:C.amber,fontFace:FF,align:"center",valign:"middle"});
}

// ── 輸出 ──────────────────────────────────────────────────────────────
const outPath = path.resolve(__dirname, "..", "漢他病毒防治衛教.pptx");
pptx.writeFile({ fileName: outPath })
  .then(() => console.log("✅ 完成：" + outPath))
  .catch(err => { console.error("❌ 錯誤：", err); process.exit(1); });
