
const ICONS = {
  calendar:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>`,
  clock:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  alert:`<svg viewBox="0 0 24 24"><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 18h.01"/></svg>`,
  shuffle:`<svg viewBox="0 0 24 24"><path d="M3 7h3c4 0 5 10 9 10h6"/><path d="m18 14 3 3-3 3"/><path d="M3 17h3c1.4 0 2.5-1.2 3.5-2.8M14.5 9.8C15.8 8 17 7 19 7h2"/><path d="m18 4 3 3-3 3"/></svg>`,
  inbox:`<svg viewBox="0 0 24 24"><path d="M4 5h16l2 12H15l-2 3h-2l-2-3H2L4 5Z"/><path d="M8 10h8"/></svg>`,
  task:`<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="m8.5 12 2 2 5-5M9 4V2h6v2"/></svg>`,
  plus:`<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  arrow:`<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>`,
  week:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
  month:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M7 14h3M14 14h3M7 18h3M14 18h3"/></svg>`,
  chart:`<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`,
  users:`<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2"/><circle cx="18" cy="9" r="2"/><path d="M16 14a5 5 0 0 1 5 5v1"/></svg>`,
  settings:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>`,
  target:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>`,
  search:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`,
  note:`<svg viewBox="0 0 24 24"><path d="M5 3h11l3 3v15H5V3Z"/><path d="M16 3v4h4M8 11h8M8 15h8"/></svg>`,
  monitor:`<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
};

const data = {
  today:[
    {time:"08:00",end:"09:00",title:"Ward round",meta:"Clinical · Aster Hospital"},
    {time:"10:00",end:"11:00",title:"Research coordination call",meta:"Research · Online"},
    {time:"13:30",end:"14:15",title:"Review KROS implementation",meta:"Innovation · Office"},
    {time:"17:30",end:"18:00",title:"Patient consultation",meta:"Clinical · Aster Hospital"},
  ],
  tasks:[
    {title:"Finalize KROS frontend mapping",meta:"Innovation · High priority · Today",status:"Scheduled"},
    {title:"Review hospitality skills-gap submission",meta:"Corporate / Business · Tomorrow",status:"Scheduled"},
    {title:"Prepare undergraduate research supervision notes",meta:"Teaching · Unscheduled",status:"Unscheduled"},
    {title:"Update Op-Sym phone capture test log",meta:"Innovation · Unscheduled",status:"Unscheduled"},
  ],
  inbox:[
    {source:"ANDROID SHARE",title:"Article to review for research methods",text:"Shared from Chrome · review and decide whether to add to reading list."},
    {source:"WHATSAPP CAPTURE",title:"Call Gilbert tomorrow morning",text:"Follow up on technical architecture and frontend milestones."},
    {source:"GMAIL CAPTURE",title:"Nova Pioneer payment statement",text:"Review attachment and confirm if any action is required."},
  ],
  commitments:[
    {state:"WAITING",title:"Gilbert - frontend response",text:"Waiting for confirmation on KROS screen integration.",due:"Review today"},
    {state:"CLOSURE",title:"Hospital contract amendment",text:"Confirm final professional fee wording after HR response.",due:"Due tomorrow"},
    {state:"DO",title:"Send updated research instruments",text:"Share final KII / FGD instruments with the project team.",due:"Today"},
  ]
};

let planningMode = "Conservative";

function icon(name){return ICONS[name]||ICONS.note}
function isLandscape(){return matchMedia("(orientation: landscape) and (max-height: 720px)").matches}
function nowText(){return new Intl.DateTimeFormat(undefined,{hour:"numeric",minute:"2-digit"}).format(new Date())}
function greeting(){
  const h=new Date().getHours();
  if(h<11)return ["GOOD MORNING","Make it happen today.","A calmer mind. A clearer plan. A more productive you."];
  if(h<17)return ["GOOD AFTERNOON","Keep the day moving.","Know what is next, protect focus and adjust before pressure becomes a clash."];
  if(h<21)return ["GOOD EVENING","Close the day with clarity.","Close open loops, protect tomorrow and finish with a clear head."];
  return ["GOOD NIGHT","Clear the mind. Protect tomorrow.","Capture what matters now so tomorrow starts clean."];
}

function actionRow(iconName,title,sub,warn=false,route=""){
  return `<button class="action-row ${warn?"warn":""}" ${route?`data-route="${route}"`:""}>
    <span class="row-icon">${icon(iconName)}</span>
    <span class="row-copy"><strong>${title}</strong><small>${sub}</small></span>
    <span class="row-arrow">›</span>
  </button>`;
}

function timelineRows(){
  return data.today.map(x=>`<button class="timeline-row" data-route="task-detail">
    <span class="time">${x.time}<br>${x.end}</span><span class="line"></span>
    <span><strong>${x.title}</strong><small>${x.meta}</small></span><span class="row-arrow">›</span>
  </button>`).join("");
}
function taskCards(){
  return data.tasks.map((t,i)=>`<article class="task-card">
    <div class="task-top"><div><h3>${t.title}</h3><div class="meta">${t.meta}</div></div><span class="pill">${t.status}</span></div>
    <div class="task-actions"><button class="done" data-demo="completed">Complete</button><button data-route="task-detail">Details</button></div>
  </article>`).join("");
}
function inboxRows(){
  return data.inbox.map(x=>`<article class="inbox-row"><span class="source">${x.source}</span><h3>${x.title}</h3><p>${x.text}</p>
    <div class="inbox-actions"><button data-demo="clarify">Clarify</button><button data-demo="schedule">Schedule</button></div></article>`).join("");
}
function commitmentRows(){
  return data.commitments.map(x=>`<article class="commitment-card"><div class="state">${x.state}</div><h3>${x.title}</h3><p>${x.text}</p><div class="meta">${x.due}</div></article>`).join("");
}

function split(left,right,cls=""){return `<div class="landscape-split ${cls}"><div class="landscape-left">${left}</div><div class="landscape-right">${right}</div></div>`}

function home(){
  const [g,title,sub]=greeting();
  const hero=`<section class="home-hero">
    <div class="hero-top">
      <div><span class="eyebrow">${g}</span><h1>${title}</h1><p>${sub}</p></div>
      <div class="hero-status-stack">
        <span class="now-chip">NOW · ${nowText()}</span>
        <button class="hero-mode-chip" id="heroModeButton" type="button" aria-label="Planning mode">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.7 2.9 8.2 7 10 4.1-1.8 7-5.3 7-10V6l-7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></svg>
          <span>${planningMode}</span>
          <b>⌄</b>
        </button>
      </div>
    </div>
    <div class="intel-grid">
      <button class="intel-card" data-route="today"><span class="intel-icon">${icon("clock")}</span><span class="intel-copy"><small>NEXT</small><strong>17:30</strong><em>Patient consultation</em></span><span class="chev">›</span></button>
      <button class="intel-card attention" data-route="tasks"><span class="intel-icon">${icon("alert")}</span><span class="intel-copy"><small>ATTENTION</small><strong>2 clashes</strong><em>Resolve before they affect the day.</em></span><span class="chev">›</span></button>
    </div>
  </section>`;
  const context=`<section class="section white"><div class="section-head"><div><span class="kicker">NOW</span><h2>What matters now</h2></div></div><div class="action-list">
    ${actionRow("shuffle","Resolve 2 schedule clashes","Protect the next commitment before pressure becomes disruptive.",true,"tasks")}
    ${actionRow("clock","3 unscheduled tasks","Place the most important open work into a realistic time.",false,"tasks")}
    ${actionRow("inbox","Review 3 Inbox items","Clarify captured work while the context is still fresh.",false,"inbox")}
  </div></section>`;
  return `<section class="page">${isLandscape()?`<div class="home-landscape">${hero}${context}</div>`:hero+context}</section>`;
}

function intro(type,title,sub,button="",tone=""){
  return `<section class="intro ${tone}"><span class="eyebrow">${type}</span><h1 class="page-title">${title}</h1><p class="page-subtitle">${sub}</p>${button}</section>`;
}
function today(){
  const left=intro("TODAY","Own your day.","See what is next, what needs attention and what can move.",`<button class="primary-btn" data-route="capture">Add to today</button>`,"blue");
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">WEDNESDAY</span><h2>Today's plan</h2><p>4 scheduled items · 2 planning conflicts</p></div><button class="ghost-btn" data-demo="find-time">Find time</button></div><div class="timeline">${timelineRows()}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function tasks(){
  const left=intro("TASKS","Turn work into progress.","Focus on the next useful action instead of carrying the whole list in your head.",`<button class="primary-btn" data-route="capture">New task</button>`);
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">OPEN WORK</span><h2>Tasks</h2></div></div><div class="chip-row"><button class="chip active">All open</button><button class="chip">Today</button><button class="chip">Unscheduled</button><button class="chip">Clashes</button></div><div class="list" style="margin-top:12px">${taskCards()}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function inbox(){
  const left=intro("INBOX","Capture first. Clarify next.","Nothing important should depend on remembering it later.",`<button class="primary-btn" data-route="capture">Capture something</button>`,"teal");
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">CAPTURED</span><h2>Inbox</h2><p>3 items waiting for clarification</p></div></div><div class="list">${inboxRows()}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function week(){
  const left=intro("WEEK","Shape the week before it shapes you.","Protect important work and see pressure before it becomes a clash.",`<button class="primary-btn" data-demo="plan-week">Plan my week</button>`);
  const days=[["Mon","5","3"],["Tue","6","5"],["Wed","7","4"],["Thu","8","6"],["Fri","9","3"],["Sat","10","1"],["Sun","11","0"]];
  const strip=days.map((d,i)=>`<div class="day ${i===2?"today":""}"><b>${d[0]}</b><span>${d[1]} Oct</span><em>${d[2]} items</em></div>`).join("");
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">NEXT 7 DAYS</span><h2>Weekly plan</h2><p>Wednesday is your pressure point.</p></div></div><div class="week-strip">${strip}</div><div class="list" style="margin-top:14px">${actionRow("alert","Wednesday needs attention","Two clinical commitments overlap with research work.",true,"today")}${actionRow("calendar","Friday has protected focus time","14:00-16:00 is currently clear.",false,"today")}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function month(){
  const left=intro("MONTH","Keep the month in perspective.","Major commitments, deadlines and workload without spreadsheet thinking.");
  const weeks=[
    ["Week 1","7 activities",["Ward round · 2 Oct","KROS review · 4 Oct"]],
    ["Week 2","11 activities",["Research supervision · 8 Oct","Aster clinic · 9 Oct"]],
    ["Week 3","8 activities",["Proposal review · 15 Oct","Management meeting · 16 Oct"]],
    ["Week 4","13 activities",["Major deadline · 24 Oct","Theatre list · 27 Oct"]],
  ];
  const cards=weeks.map(w=>`<article class="week-block"><div class="section-head"><div><h3>${w[0]}</h3><p>${w[1]}</p></div></div>${w[2].map(r=>{let [a,b]=r.split(" · ");return `<div class="mini-row"><span>${a}</span><small>${b}</small></div>`}).join("")}</article>`).join("");
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">OCTOBER 2026</span><h2>Weeks</h2></div></div><div class="card-grid">${cards}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function year(){
  const left=intro("YEAR","Keep direction visible.","See milestones and recurring work that matter across the year.");
  const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const cards=months.map((m,i)=>`<article class="month-card ${i===9?"current":""}"><small>${m.toUpperCase()}</small><strong>${i===9?"13":"4"} items</strong><span>${i===9?"3 major milestones":"Steady workload"}</span></article>`).join("");
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">2026</span><h2>Year at a glance</h2></div></div><div class="month-grid">${cards}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function commitments(){
  const left=intro("COMMITMENTS","Close the loops.","Op-Sym keeps unfinished promises visible until they are resolved.",`<button class="primary-btn" data-route="capture">Capture commitment</button>`,"champagne");
  const right=`<section class="section"><div class="metric-grid"><article class="metric-card"><small>OPEN LOOPS</small><strong>6</strong></article><article class="metric-card"><small>WAITING</small><strong>2</strong></article><article class="metric-card"><small>CLOSURE</small><strong>3</strong></article><article class="metric-card"><small>OVERDUE</small><strong>1</strong></article></div><div class="section-head" style="margin-top:20px"><div><span class="kicker">NEXT ACTION</span><h2>Commitment inbox</h2></div></div><div class="list">${commitmentRows()}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function analytics(){
  const left=intro("ANALYTICS","See the pattern, not just the list.","Useful planning signals only. No decorative dashboard noise.",`<button class="secondary-btn" data-demo="refresh">Refresh insights</button>`);
  const right=`<section class="section"><div class="card-grid">
    <article class="insight"><span class="kicker">SCHEDULE PRESSURE</span><div class="number-row"><strong>2</strong><span>active clashes</span></div><p>Most pressure is clustered around Wednesday afternoon.</p><div class="bar"><span style="width:62%"></span></div></article>
    <article class="insight"><span class="kicker">UNSCHEDULED WORK</span><div class="number-row"><strong>3</strong><span>tasks</span></div><p>Two can be placed into currently protected focus windows.</p><div class="bar"><span style="width:38%"></span></div></article>
    <article class="insight"><h3>Useful pattern</h3><p>Clinical work is consistently concentrated in the morning. Your strongest uninterrupted innovation window remains 14:00-16:00 on Fridays.</p></article>
  </div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function more(){
  const items=[
    ["week","week","Week","Plan the next seven days."],
    ["month","month","Month","See commitments grouped by week."],
    ["calendar","year","Year","Keep milestones visible."],
    ["inbox","inbox","Inbox","Clarify captured work."],
    ["target","commitments","Commitments","Close waiting and open loops."],
    ["chart","analytics","Analytics","See actionable planning patterns."],
    ["settings","settings","Settings","Preferences and interface."],
  ];
  return `<section class="page"><section class="intro"><span class="eyebrow">MORE</span><h1 class="page-title">Everything else.</h1><p class="page-subtitle">Less-used areas stay one tap away without crowding everyday navigation.</p></section><section class="section"><div class="more-grid">${items.map(i=>`<button class="more-card" data-route="${i[1]}">${icon(i[0])}<strong>${i[2]}</strong><small>${i[3]}</small></button>`).join("")}</div></section></section>`;
}
function settings(){
  const row=(ic,title,sub,end)=>`<button class="setting-row" data-demo="${title}"><span class="row-icon">${icon(ic)}</span><span class="row-copy"><strong>${title}</strong><small>${sub}</small></span>${end}</button>`;
  const right=`<section class="section"><div class="settings-group">
    ${row("clock","Region & time","Africa/Nairobi · 24-hour clock",`<span class="setting-value">Kenya</span>`)}
    ${row("calendar","Scheduling","Working days, gap rules and buffers",`<span class="setting-value">Edit</span>`)}
    ${row("alert","Notifications","Quiet hours and reminders",`<span class="toggle on"></span>`)}
    ${row("target","CICE","Closure and waiting-for intelligence",`<span class="toggle on"></span>`)}
    ${row("monitor","Interface","Mobile visual prototype",`<span class="setting-value">Mobile</span>`)}
  </div></section>`;
  const left=intro("SETTINGS","Make Op-Sym work your way.","Preferences should support your workflow without becoming another task.");
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function capture(){
  const left=`<section class="capture-hero"><span class="eyebrow">CAPTURE</span><h1 class="page-title">Get it out of your head.</h1><p class="page-subtitle">Type naturally. Op-Sym should structure the next step after you capture it.</p></section>`;
  const right=`<section class="section white"><div class="capture-box"><textarea id="captureText" placeholder="e.g. Meet Gilbert tomorrow at 10 am to review the KROS frontend..."></textarea><div class="capture-primary"><button class="interpret" data-demo="interpret">Interpret & schedule</button><button class="inbox" data-demo="inbox-only">Inbox only</button></div><div class="shortcut-grid">
    <button class="shortcut" data-demo="task">${icon("task")}<strong>Task</strong></button>
    <button class="shortcut" data-demo="event">${icon("calendar")}<strong>Event</strong></button>
    <button class="shortcut" data-demo="commitment">${icon("target")}<strong>Commitment</strong></button>
    <button class="shortcut" data-demo="paste">${icon("note")}<strong>Paste</strong></button>
  </div></div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function taskDetail(){
  const left=`<section class="task-detail-hero"><span class="eyebrow">TASK</span><h1>Finalize KROS frontend mapping</h1><p class="page-subtitle">Convert approved screens into a verified screen-to-API implementation map.</p><div class="progress"><span></span></div><div class="meta">35% complete</div></section>`;
  const right=`<section class="section"><div class="detail-grid">
    <article class="detail-card"><small>PRIORITY</small><strong>High</strong></article>
    <article class="detail-card"><small>DUE</small><strong>Today · 18:00</strong></article>
    <article class="detail-card"><small>ROLE</small><strong>Innovation</strong></article>
    <article class="detail-card"><small>LOCATION</small><strong>Office</strong></article>
  </div><div class="section-head" style="margin-top:20px"><div><span class="kicker">NOTES</span><h2>Working context</h2></div></div><article class="note"><p>Keep the approved 115-screen structure. Verify role, lifecycle stage, object, API, permissions, event and acceptance test before marking each screen complete.</p></article><div class="task-actions" style="margin-top:12px"><button class="done" data-demo="complete-task">Complete</button><button data-demo="reschedule">Reschedule</button><button data-demo="more-actions">More</button></div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}

const routes={home,today,tasks,inbox,week,month,year,commitments,analytics,more,settings,capture,"task-detail":taskDetail};

function setActiveNav(route){
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.route===route));
  if(!["home","today","tasks"].includes(route) && route!=="capture"){
    document.querySelector('.nav-item[data-route="more"]')?.classList.add("active");
  }
}
function render(route,replaceHash=false){
  const fn=routes[route]||routes.home;
  document.getElementById("appMain").innerHTML=fn();
  setActiveNav(route);
  if(!replaceHash) history.pushState({route},"","#"+route);
  bindDynamic();
  document.getElementById("appMain").focus({preventScroll:true});
  window.scrollTo(0,0);
}
function bindDynamic(){
  document.querySelectorAll("[data-route]").forEach(el=>{
    el.addEventListener("click",e=>{
      const r=el.dataset.route;
      if(r){e.preventDefault();render(r);}
    });
  });
  document.querySelectorAll("[data-demo]").forEach(el=>{
    el.addEventListener("click",()=>{
      const label=el.dataset.demo.replace(/-/g," ");
      toast(label.charAt(0).toUpperCase()+label.slice(1)+" - visual prototype");
    });
  });
  document.querySelectorAll(".chip").forEach(el=>el.addEventListener("click",()=>{
    el.parentElement.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
    el.classList.add("active");
  }));
  document.querySelectorAll(".toggle").forEach(el=>el.addEventListener("click",e=>{
    e.preventDefault();e.stopPropagation();el.classList.toggle("on");
  }));

  const heroModeButton=document.getElementById("heroModeButton");
  if(heroModeButton){
    heroModeButton.addEventListener("click",()=>{
      const modes=["Conservative","Assisted","Autonomous"];
      planningMode=modes[(modes.indexOf(planningMode)+1)%modes.length];
      const label=heroModeButton.querySelector("span");
      if(label)label.textContent=planningMode;
      toast("Planning mode: "+planningMode);
    });
  }
}
function toast(msg){
  const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");
  clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>t.classList.remove("show"),1700);
}

document.querySelectorAll(".brand,.top-actions [data-route],.bottom-nav [data-route]").forEach(el=>{
  el.addEventListener("click",()=>render(el.dataset.route));
});
window.addEventListener("popstate",()=>render(location.hash.replace("#","")||"home",true));
matchMedia("(orientation: landscape)").addEventListener?.("change",()=>render(location.hash.replace("#","")||"home",true));

render(location.hash.replace("#","")||"home",true);
