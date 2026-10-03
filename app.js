
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

/* -------------------------------------------------------
   Mobile Backend Integration v1.5.1 - SMART RESCHEDULE SUGGESTIONS
   UI remains frozen. No write actions are enabled.
-------------------------------------------------------- */
let liveHomeData = null;
let liveHomeLoaded = false;
let liveHomeError = null;

let liveTodayData = null;
let liveTodayLoaded = false;
let liveTodayError = null;

let liveTasksData = null;
let liveTasksLoaded = false;
let liveTasksError = null;
let activeTaskFilter = "all";

let selectedTaskId = "";
let liveTaskDetailData = null;
let liveTaskDetailLoaded = false;
let liveTaskDetailLoading = false;
let liveTaskDetailError = null;
let activeTaskDetailTab = "details";
let completeActionInFlight = false;
let rescheduleActionInFlight = false;

const mobileBridge = {
  endpoint: localStorage.getItem("opsym_mobile_bridge_url") || "",
  key: localStorage.getItem("opsym_mobile_bridge_key") || ""
};

function escapeHtml(value){
  return String(value == null ? "" : value)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

function currentRoute(){
  return location.hash.replace("#","") || "home";
}

function saveMobileBridgeConfig(endpoint,key=""){
  const clean=String(endpoint||"").trim().replace(/\/$/,"");
  const secret=String(key||"").trim();
  if(!/^https:\/\/script\.google\.com\/macros\/s\/.+\/(exec|dev)$/.test(clean)){
    throw new Error("Use the complete Apps Script Web App URL ending in /exec or /dev.");
  }
  localStorage.setItem("opsym_mobile_bridge_url",clean);
  localStorage.setItem("opsym_mobile_bridge_key",secret);
  mobileBridge.endpoint=clean;
  mobileBridge.key=secret;
}

function clearMobileBridgeConfig(){
  localStorage.removeItem("opsym_mobile_bridge_url");
  localStorage.removeItem("opsym_mobile_bridge_key");
  mobileBridge.endpoint="";
  mobileBridge.key="";
  liveHomeData=null;
  liveHomeLoaded=false;
  liveTodayData=null;
  liveTodayLoaded=false;
  liveTasksData=null;
  liveTasksLoaded=false;
  selectedTaskId="";
  liveTaskDetailData=null;
  liveTaskDetailLoaded=false;
  liveTaskDetailLoading=false;
}

function jsonpRequest(url,params,timeoutMs=9000){
  return new Promise((resolve,reject)=>{
    const cb="__opsym_cb_"+Date.now()+"_"+Math.random().toString(36).slice(2);
    const script=document.createElement("script");
    let finished=false;
    const timer=setTimeout(()=>finish(new Error("Home data request timed out.")),timeoutMs);

    function finish(err,value){
      if(finished)return;
      finished=true;
      clearTimeout(timer);
      try{delete window[cb]}catch(_){window[cb]=undefined}
      script.remove();
      err?reject(err):resolve(value);
    }

    window[cb]=payload=>finish(null,payload);
    const q=new URLSearchParams({...params,callback:cb,_:Date.now().toString()});
    script.src=url+"?"+q.toString();
    script.async=true;
    script.referrerPolicy="no-referrer";
    script.onerror=()=>finish(new Error("Could not reach the Op-Sym Mobile Bridge."));
    document.head.appendChild(script);
  });
}

async function loadLiveHomeData(showFailureToast=false){
  if(!mobileBridge.endpoint) return false;
  try{
    const params={action:"home"};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params);
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Home response.");
    liveHomeData=payload.data || null;
    liveHomeLoaded=!!liveHomeData;
    liveHomeError=null;
    if(liveHomeData?.planningMode) planningMode=liveHomeData.planningMode;
    if(currentRoute()==="home") render("home",true);
    return true;
  }catch(err){
    liveHomeError=err;
    liveHomeLoaded=false;
    if(showFailureToast) toast("Home data unavailable - using frozen demo view");
    return false;
  }
}

async function loadLiveTodayData(showFailureToast=false){
  if(!mobileBridge.endpoint) return false;
  try{
    const params={action:"today"};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params);
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Today response.");
    liveTodayData=payload.data || null;
    liveTodayLoaded=!!liveTodayData;
    liveTodayError=null;
    if(currentRoute()==="today") render("today",true);
    return true;
  }catch(err){
    liveTodayError=err;
    liveTodayLoaded=false;
    if(showFailureToast) toast("Today data unavailable - using frozen demo view");
    return false;
  }
}


async function loadLiveTasksData(showFailureToast=false){
  if(!mobileBridge.endpoint) return false;
  try{
    const params={action:"tasks"};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params);
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Tasks response.");
    liveTasksData=payload.data || null;
    liveTasksLoaded=!!liveTasksData;
    liveTasksError=null;
    if(currentRoute()==="tasks") render("tasks",true);
    return true;
  }catch(err){
    liveTasksError=err;
    liveTasksLoaded=false;
    if(showFailureToast) toast("Tasks data unavailable - using frozen demo view");
    return false;
  }
}

async function loadLiveTaskDetailData(taskId,showFailureToast=false){
  const id=String(taskId||selectedTaskId||"").trim();
  if(!mobileBridge.endpoint || !id) return false;

  selectedTaskId=id;
  liveTaskDetailLoading=true;
  liveTaskDetailLoaded=false;
  liveTaskDetailError=null;
  if(currentRoute()==="task-detail") render("task-detail",true);

  try{
    const params={action:"task-detail",taskId:id};
    if(mobileBridge.key) params.key=mobileBridge.key;
    const payload=await jsonpRequest(mobileBridge.endpoint,params);
    if(!payload || payload.ok!==true) throw new Error(payload?.error || "Invalid Task Detail response.");

    liveTaskDetailData=payload.data || null;
    liveTaskDetailLoaded=!!liveTaskDetailData;
    liveTaskDetailLoading=false;
    liveTaskDetailError=null;

    if(currentRoute()==="task-detail") render("task-detail",true);
    return true;
  }catch(err){
    liveTaskDetailError=err;
    liveTaskDetailLoaded=false;
    liveTaskDetailLoading=false;
    if(currentRoute()==="task-detail") render("task-detail",true);
    if(showFailureToast) toast("Task detail unavailable");
    return false;
  }
}


async function completeTaskById(taskId,title=""){
  const id=String(taskId||"").trim();
  if(!id || completeActionInFlight) return false;

  const label=String(title||id).trim();
  const ok=confirm(
    `Complete this task?\n\n${label}\n${id}\n\nThis will set Status to Completed and % Complete to 100%.`
  );
  if(!ok) return false;

  completeActionInFlight=true;
  try{
    const params={action:"complete-task",taskId:id};
    if(mobileBridge.key) params.key=mobileBridge.key;

    const payload=await jsonpRequest(mobileBridge.endpoint,params,12000);
    if(!payload || payload.ok!==true){
      throw new Error(payload?.error || "The task could not be completed.");
    }

    const result=payload.data || {};
    toast(result.changed===false ? "Task was already closed" : "Task completed");

    // Refresh every live surface that can be affected by completion.
    liveHomeLoaded=false;
    liveTodayLoaded=false;
    liveTasksLoaded=false;
    liveTaskDetailLoaded=false;
    liveTaskDetailData=null;
    liveTaskDetailError=null;

    await Promise.all([
      loadLiveHomeData(false),
      loadLiveTodayData(false),
      loadLiveTasksData(false)
    ]);

    // A completed task disappears from open Tasks/Today, so return there
    // rather than leaving a stale detail page onscreen.
    if(currentRoute()==="task-detail"){
      selectedTaskId="";
      activeTaskDetailTab="details";
      render("tasks",true);
    }else if(currentRoute()==="tasks"){
      render("tasks",true);
    }

    return true;
  }catch(err){
    alert("Could not complete task:\n"+(err?.message || err));
    return false;
  }finally{
    completeActionInFlight=false;
  }
}


function normalizeDateInput(value){
  const s=String(value||"").trim();
  if(/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  return "";
}

function normalizeTimeInput(value){
  const s=String(value||"").trim();
  if(/^\d{2}:\d{2}$/.test(s)) return s;
  return "";
}

function formatConflictList(conflicts){
  if(!conflicts?.length) return "";
  return conflicts.slice(0,5).map(c=>`• ${c.title} (${c.start}–${c.end})`).join("\n");
}

async function rescheduleTaskById(taskId,title="",currentDate="",currentTime=""){
  const id=String(taskId||"").trim();
  if(!id || rescheduleActionInFlight) return false;

  const proposedDate=prompt(
    `Reschedule ${title||id}\n\nEnter new date as YYYY-MM-DD:`,
    normalizeDateInput(currentDate)
  );
  if(proposedDate===null) return false;

  const proposedTime=prompt(
    `Enter new start time in 24-hour format HH:MM:`,
    normalizeTimeInput(currentTime)
  );
  if(proposedTime===null) return false;

  if(!/^\d{4}-\d{2}-\d{2}$/.test(proposedDate.trim())){
    alert("Date must use YYYY-MM-DD.");
    return false;
  }
  if(!/^\d{2}:\d{2}$/.test(proposedTime.trim())){
    alert("Time must use HH:MM in 24-hour format.");
    return false;
  }

  rescheduleActionInFlight=true;
  try{
    const checkParams={
      action:"check-reschedule",
      taskId:id,
      date:proposedDate.trim(),
      time:proposedTime.trim()
    };
    if(mobileBridge.key) checkParams.key=mobileBridge.key;

    const check=await jsonpRequest(mobileBridge.endpoint,checkParams,12000);
    if(!check || check.ok!==true){
      throw new Error(check?.error || "Could not check the proposed time.");
    }

    const preview=check.data || {};
    if(preview.hasConflict){
      const suggestions=await fetchSmartRescheduleSuggestions(id,preview.date);
      showSmartRescheduleSheet({
        taskId:id,
        title:title||id,
        conflictPreview:preview,
        suggestions
      });
      return false;
    }

    return await confirmAndWriteReschedule(id,title||id,preview);
  }catch(err){
    alert("Could not reschedule task:\n"+(err?.message || err));
    return false;
  }finally{
    rescheduleActionInFlight=false;
  }
}

async function fetchSmartRescheduleSuggestions(taskId,date){
  const params={action:"suggest-reschedule",taskId,date};
  if(mobileBridge.key) params.key=mobileBridge.key;
  const payload=await jsonpRequest(mobileBridge.endpoint,params,12000);
  if(!payload || payload.ok!==true){
    throw new Error(payload?.error || "Could not calculate available times.");
  }
  return payload.data || {};
}

async function confirmAndWriteReschedule(taskId,title,preview){
  const confirmed=confirm(
    `Reschedule this task?\n\n${title}\n${taskId}\n\n`+
    `New slot: ${preview.date} at ${preview.time}\n`+
    `Estimated end: ${preview.endTime}\n\n`+
    `No direct task overlap was found.`
  );
  if(!confirmed) return false;

  const params={
    action:"reschedule-task",
    taskId,
    date:preview.date,
    time:preview.time
  };
  if(mobileBridge.key) params.key=mobileBridge.key;

  const payload=await jsonpRequest(mobileBridge.endpoint,params,12000);
  if(!payload || payload.ok!==true){
    throw new Error(payload?.error || "The task could not be rescheduled.");
  }

  const result=payload.data || {};
  if(result.blocked){
    const suggestions=await fetchSmartRescheduleSuggestions(taskId,preview.date);
    showSmartRescheduleSheet({
      taskId,
      title,
      conflictPreview:{conflicts:result.conflicts||[],date:preview.date},
      suggestions
    });
    return false;
  }

  closeSmartRescheduleSheet();
  toast("Task rescheduled");

  liveHomeLoaded=false;
  liveTodayLoaded=false;
  liveTasksLoaded=false;
  liveTaskDetailLoaded=false;
  liveTaskDetailData=null;
  liveTaskDetailError=null;

  await Promise.all([
    loadLiveHomeData(false),
    loadLiveTodayData(false),
    loadLiveTasksData(false)
  ]);

  if(currentRoute()==="task-detail"){
    await loadLiveTaskDetailData(taskId,false);
  }else if(currentRoute()==="tasks"){
    render("tasks",true);
  }

  return true;
}

function smartRescheduleSlotMarkup(slot){
  return `<button class="smart-slot"
    data-smart-slot-date="${escapeHtml(slot.date||"")}"
    data-smart-slot-start="${escapeHtml(slot.startTime||"")}"
    data-smart-slot-end="${escapeHtml(slot.endTime||"")}">
    <strong>${escapeHtml(slot.label||"Available")}</strong>
    <small>Available</small>
  </button>`;
}

function showSmartRescheduleSheet({taskId,title,conflictPreview,suggestions}){
  closeSmartRescheduleSheet();

  const conflicts=conflictPreview?.conflicts || [];
  const sameDay=suggestions?.slots || [];
  const first=sameDay.slice(0,5);
  const extra=sameDay.slice(5);
  const next=suggestions?.nextAvailableDay || null;

  const conflictHtml=conflicts.length
    ? `<div class="smart-conflicts">${conflicts.map(c=>`
        <div class="smart-conflict-row">
          <span>${escapeHtml(c.title||c.taskId||"Task")}</span>
          <strong>${escapeHtml((c.start||"")+"-"+(c.end||""))}</strong>
        </div>`).join("")}</div>`
    : "";

  let slotHtml="";
  if(first.length){
    slotHtml=`
      <div class="smart-section-label">Available times ${escapeHtml(suggestions.requestedDateLabel||"that day")}</div>
      <div class="smart-slots">${first.map(smartRescheduleSlotMarkup).join("")}</div>
      ${extra.length?`<button class="smart-more-times" data-smart-more-times>More times</button>
        <div class="smart-slots smart-extra-slots" hidden>${extra.map(smartRescheduleSlotMarkup).join("")}</div>`:""}`;
  }else if(next?.slots?.length){
    slotHtml=`
      <div class="smart-no-slots">No suitable slot remains on ${escapeHtml(suggestions.requestedDateLabel||"that day")}.</div>
      <button class="smart-next-day" data-smart-next-day>Show next available day</button>
      <div class="smart-next-day-slots" hidden>
        <div class="smart-section-label">${escapeHtml(next.dateLabel||next.date||"Next available day")}</div>
        <div class="smart-slots">${next.slots.map(smartRescheduleSlotMarkup).join("")}</div>
      </div>`;
  }else{
    slotHtml=`<div class="smart-no-slots">No suitable slot was found in the next 7 days within the current 06:00-23:00 development window.</div>`;
  }

  const overlay=document.createElement("div");
  overlay.id="smartRescheduleOverlay";
  overlay.className="smart-reschedule-overlay";
  overlay.innerHTML=`
    <section class="smart-reschedule-sheet" role="dialog" aria-modal="true" aria-label="Smart reschedule suggestions">
      <div class="smart-sheet-handle"></div>
      <div class="smart-sheet-head">
        <div>
          <span class="kicker">SMART RESCHEDULE</span>
          <h2>Choose an available time</h2>
          <p>Your first choice conflicts with existing work.</p>
        </div>
        <button class="smart-close" data-smart-close aria-label="Close">×</button>
      </div>
      ${conflictHtml}
      ${slotHtml}
      <button class="smart-manual" data-smart-manual>Enter another time manually</button>
    </section>`;

  document.body.appendChild(overlay);

  const chooseSlot=async btn=>{
    const date=btn.dataset.smartSlotDate;
    const time=btn.dataset.smartSlotStart;
    const end=btn.dataset.smartSlotEnd;
    const preview={date,time,endTime:end,hasConflict:false,conflicts:[]};

    rescheduleActionInFlight=true;
    try{
      await confirmAndWriteReschedule(taskId,title,preview);
    }catch(err){
      alert("Could not reschedule task:\n"+(err?.message||err));
    }finally{
      rescheduleActionInFlight=false;
    }
  };

  overlay.querySelectorAll("[data-smart-slot-date]").forEach(btn=>{
    btn.addEventListener("click",()=>chooseSlot(btn));
  });

  overlay.querySelector("[data-smart-close]")?.addEventListener("click",closeSmartRescheduleSheet);

  overlay.querySelector("[data-smart-more-times]")?.addEventListener("click",e=>{
    const extraBox=overlay.querySelector(".smart-extra-slots");
    if(extraBox){
      extraBox.hidden=false;
      e.currentTarget.hidden=true;
    }
  });

  overlay.querySelector("[data-smart-next-day]")?.addEventListener("click",e=>{
    const box=overlay.querySelector(".smart-next-day-slots");
    if(box){
      box.hidden=false;
      e.currentTarget.hidden=true;
    }
  });

  overlay.querySelector("[data-smart-manual]")?.addEventListener("click",()=>{
    closeSmartRescheduleSheet();
    setTimeout(()=>rescheduleTaskById(taskId,title,conflictPreview?.date||"", ""),50);
  });

  overlay.addEventListener("click",e=>{
    if(e.target===overlay) closeSmartRescheduleSheet();
  });
}

function closeSmartRescheduleSheet(){
  document.getElementById("smartRescheduleOverlay")?.remove();
}

function detailValue(value,fallback="—"){
  const s=String(value==null?"":value).trim();
  return escapeHtml(s || fallback);
}

function taskDetailTabButton(key,label){
  return `<button class="chip ${activeTaskDetailTab===key?"active":""}" data-task-detail-tab="${key}">${label}</button>`;
}

function taskInfoRow(label,value){
  return `<div class="detail-list-row"><span>${escapeHtml(label)}</span><strong>${detailValue(value)}</strong></div>`;
}

function taskNotesMarkup(notes){
  if(!notes?.length){
    return `<div class="empty-card"><strong>No task notes yet</strong><small>Notes will appear here when this task has entries in 34_TASK_NOTES.</small></div>`;
  }
  return `<div class="detail-stack">${notes.map(n=>`<article class="note detail-note">
    <div class="detail-note-head"><strong>${detailValue(n.updatedAt || n.createdAt,"Note")}</strong>${n.pinned?`<span class="pill">${detailValue(n.pinned)}</span>`:""}</div>
    <p>${detailValue(n.note,"")}</p>
    ${n.createdBy?`<small>${detailValue(n.createdBy)}</small>`:""}
  </article>`).join("")}</div>`;
}

function taskHistoryMarkup(history){
  if(!history?.length){
    return `<div class="empty-card"><strong>No task history yet</strong><small>Events from 36_TASK_EVENT_LOG will appear here.</small></div>`;
  }
  return `<div class="detail-stack">${history.map(e=>`<article class="history-card">
    <div class="history-head"><strong>${detailValue(e.eventType,"Task event")}</strong><span>${detailValue(e.timestamp,"")}</span></div>
    ${e.details?`<p>${detailValue(e.details,"")}</p>`:""}
    ${(e.oldValue||e.newValue)?`<div class="history-change"><span>${detailValue(e.oldValue,"—")}</span><b>→</b><span>${detailValue(e.newValue,"—")}</span></div>`:""}
    <small>${[e.source,e.actor].filter(Boolean).map(escapeHtml).join(" · ")}</small>
  </article>`).join("")}</div>`;
}


function filteredLiveTasks(){
  if(!liveTasksLoaded) return null;
  const items=liveTasksData?.tasks || [];
  if(activeTaskFilter==="today") return items.filter(x=>x.isToday);
  if(activeTaskFilter==="unscheduled") return items.filter(x=>x.isUnscheduled);
  if(activeTaskFilter==="clashes") return items.filter(x=>x.hasClash);
  return items;
}

function taskFilterLabel(key){
  return ({all:"All open",today:"Today",unscheduled:"Unscheduled",clashes:"Clashes"})[key] || "All open";
}

function homeActionIcon(kind){
  return ({
    clash:"shuffle",
    overdue:"alert",
    unscheduled:"clock",
    risk:"alert",
    inbox:"inbox",
    today:"calendar",
    clear:"target"
  })[kind] || "task";
}

function runBackendSetupFromQuery(){
  const p=new URLSearchParams(location.search);
  if(p.get("resetapi")==="1"){
    clearMobileBridgeConfig();
    history.replaceState({},"",location.pathname+location.hash);
    setTimeout(()=>alert("Op-Sym Mobile Bridge settings were removed from this phone."),50);
    return;
  }
  if(p.get("setup")!=="1") return;

  setTimeout(async()=>{
    const endpoint=prompt(
      "Op-Sym Mobile Bridge setup\n\nPaste the Apps Script Web App URL ending in /exec:",
      mobileBridge.endpoint || ""
    );
    if(endpoint===null)return;
    try{
      saveMobileBridgeConfig(endpoint,"");
      history.replaceState({},"",location.pathname+"#home");
      const homeOk=await loadLiveHomeData(false);
      const todayOk=homeOk ? await loadLiveTodayData(false) : false;
      const tasksOk=todayOk ? await loadLiveTasksData(false) : false;
      alert(homeOk && todayOk && tasksOk
        ? "Connected. Home, Today and Tasks are now reading live Op-Sym data."
        : "Settings saved, but a live-data test failed. Check the bridge deployment and version.");
    }catch(err){
      alert("Setup was not saved:\n"+err.message);
    }
  },120);
}

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
  const items=(liveTodayLoaded ? (liveTodayData?.items || []) : data.today);
  if(!items.length){
    return `<div class="empty-card"><strong>No scheduled items today</strong><small>Your Today plan is currently clear.</small></div>`;
  }
  return items.map(x=>`<button class="timeline-row" data-route="task-detail" data-task-id="${escapeHtml(x.taskId || "")}">
    <span class="time">${escapeHtml(x.time || "ANY")}<br>${escapeHtml(x.end || "")}</span><span class="line"></span>
    <span><strong>${escapeHtml(x.title)}</strong><small>${escapeHtml(x.meta || "Op-Sym task")}</small></span><span class="row-arrow">›</span>
  </button>`).join("");
}
function taskCards(){
  const liveItems=filteredLiveTasks();
  const items=liveItems===null ? data.tasks : liveItems;

  if(!items.length){
    const labels={
      all:"No open tasks",
      today:"No open tasks scheduled today",
      unscheduled:"No unscheduled tasks",
      clashes:"No tasks with active clashes"
    };
    return `<div class="empty-card"><strong>${labels[activeTaskFilter] || labels.all}</strong><small>This view is currently clear.</small></div>`;
  }

  return items.map(t=>`<article class="task-card">
    <div class="task-top"><div><h3>${escapeHtml(t.title)}</h3><div class="meta">${escapeHtml(t.meta || "")}</div></div><span class="pill">${escapeHtml(t.status || "Open")}</span></div>
    <div class="task-actions"><button class="done" data-complete-task="${escapeHtml(t.taskId || "")}" data-task-title="${escapeHtml(t.title || "")}">Complete</button><button data-route="task-detail" data-task-id="${escapeHtml(t.taskId || "")}">Details</button></div>
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
  const hd=liveHomeData;

  const nextTime=escapeHtml(hd?.next?.time || "17:30");
  const nextTitle=escapeHtml(hd?.next?.title || "Patient consultation");
  const attentionPrimary=escapeHtml(hd?.attention?.primary || "2 clashes");
  const attentionSecondary=escapeHtml(hd?.attention?.secondary || "Schedule conflicts");

  const hero=`<section class="home-hero">
    <div class="hero-top">
      <div><span class="eyebrow">${g}</span><h1>${title}</h1><p>${sub}</p></div>
      <div class="hero-status-stack">
        <span class="now-chip">NOW · ${nowText()}</span>
        <button class="hero-mode-chip" id="heroModeButton" type="button" aria-label="Planning mode">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.7 2.9 8.2 7 10 4.1-1.8 7-5.3 7-10V6l-7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></svg>
          <span>${escapeHtml(planningMode)}</span>
          <b>⌄</b>
        </button>
      </div>
    </div>
    <div class="intel-grid">
      <button class="intel-card" data-route="today" aria-label="Next: ${nextTime} ${nextTitle}">
        <span class="intel-copy">
          <small>NEXT</small>
          <strong>${nextTime}</strong>
          <em>${nextTitle}</em>
        </span>
      </button>
      <button class="intel-card attention" data-route="tasks" aria-label="Attention: ${attentionPrimary}">
        <span class="intel-copy">
          <small>ATTENTION</small>
          <strong>${attentionPrimary}</strong>
          <em>${attentionSecondary}</em>
        </span>
      </button>
    </div>
  </section>`;

  const defaultMatters=[
    {kind:"clash",title:"Resolve 2 schedule clashes",subtitle:"Protect the next commitment before pressure becomes disruptive.",warn:true,route:"tasks"},
    {kind:"unscheduled",title:"3 unscheduled tasks",subtitle:"Place the most important open work into a realistic time.",warn:false,route:"tasks"},
    {kind:"inbox",title:"Review 3 Inbox items",subtitle:"Clarify captured work while the context is still fresh.",warn:false,route:"inbox"}
  ];
  const matters=(hd?.matters?.length ? hd.matters : defaultMatters).slice(0,3);

  const context=`<section class="section white"><div class="section-head"><div><span class="kicker">NOW</span><h2>What matters now</h2></div></div><div class="action-list">
    ${matters.map(item=>actionRow(
      homeActionIcon(item.kind),
      escapeHtml(item.title),
      escapeHtml(item.subtitle),
      !!item.warn,
      item.route || "tasks"
    )).join("")}
  </div></section>`;
  return `<section class="page">${isLandscape()?`<div class="home-landscape">${hero}${context}</div>`:hero+context}</section>`;
}

function intro(type,title,sub,button="",tone=""){
  return `<section class="intro ${tone}"><span class="eyebrow">${type}</span><h1 class="page-title">${title}</h1><p class="page-subtitle">${sub}</p>${button}</section>`;
}
function today(){
  const td=liveTodayData;
  const dayLabel=escapeHtml(td?.dayLabel || "WEDNESDAY");
  const scheduled=td?.summary?.scheduledItems ?? 4;
  const conflicts=td?.summary?.conflicts ?? 2;
  const summary=`${scheduled} scheduled ${scheduled===1?"item":"items"} · ${conflicts} planning ${conflicts===1?"conflict":"conflicts"}`;

  const left=intro(
    "TODAY",
    "Own your day.",
    "See what is next, what needs attention and what can move.",
    `<button class="primary-btn" data-route="capture">Add to today</button>`,
    "blue"
  );
  const right=`<section class="section"><div class="section-head"><div><span class="kicker">${dayLabel}</span><h2>Today's plan</h2><p>${summary}</p></div><button class="ghost-btn" data-demo="find-time">Find time</button></div><div class="timeline">${timelineRows()}</div></section>`;
  return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
}
function tasks(){
  const summary=liveTasksData?.summary;
  const openCount=summary?.open ?? data.tasks.length;
  const left=intro(
    "TASKS",
    "Turn work into progress.",
    "Focus on the next useful action instead of carrying the whole list in your head.",
    `<button class="primary-btn" data-route="capture">New task</button>`
  );

  const filterButton=(key,label)=>`<button class="chip ${activeTaskFilter===key?"active":""}" data-task-filter="${key}">${label}</button>`;

  const right=`<section class="section">
    <div class="section-head"><div><span class="kicker">OPEN WORK</span><h2>Tasks</h2><p>${openCount} open ${openCount===1?"task":"tasks"}</p></div></div>
    <div class="chip-row">
      ${filterButton("all","All open")}
      ${filterButton("today","Today")}
      ${filterButton("unscheduled","Unscheduled")}
      ${filterButton("clashes","Clashes")}
    </div>
    <div class="list" style="margin-top:12px">${taskCards()}</div>
  </section>`;
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
  if(!selectedTaskId){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK</span><h1>Select a task</h1><p class="page-subtitle">Open a task from Today or Tasks to view its live record.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>No task selected</strong><small>Return to Tasks and choose Details.</small></div><div class="task-actions" style="margin-top:12px"><button data-route="tasks">Back to Tasks</button></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  if(liveTaskDetailLoading && !liveTaskDetailLoaded){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK · ${escapeHtml(selectedTaskId)}</span><h1>Loading task…</h1><p class="page-subtitle">Reading the live task record.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>Loading task detail</strong><small>Please wait a moment.</small></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  if(liveTaskDetailError && !liveTaskDetailLoaded){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK · ${escapeHtml(selectedTaskId)}</span><h1>Task detail unavailable</h1><p class="page-subtitle">The live task record could not be loaded.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>Could not load this task</strong><small>${escapeHtml(liveTaskDetailError.message || "Check the Mobile Bridge deployment.")}</small></div><div class="task-actions" style="margin-top:12px"><button data-retry-task-detail>Retry</button><button data-route="tasks">Back to Tasks</button></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  const payload=liveTaskDetailData;
  const t=payload?.task;

  if(!t){
    const left=`<section class="task-detail-hero"><span class="eyebrow">TASK · ${escapeHtml(selectedTaskId)}</span><h1>Loading task…</h1><p class="page-subtitle">Reading the live task record.</p></section>`;
    const right=`<section class="section"><div class="empty-card"><strong>Loading task detail</strong><small>Please wait a moment.</small></div></section>`;
    return `<section class="page">${isLandscape()?split(left,right):left+right}</section>`;
  }

  const pct=Math.max(0,Math.min(100,Number(t.percentComplete)||0));
  const description=t.description || t.notesField || "No description has been entered for this task.";

  const left=`<section class="task-detail-hero">
    <span class="eyebrow">TASK · ${escapeHtml(t.taskId)}</span>
    <h1>${escapeHtml(t.title)}</h1>
    <p class="page-subtitle">${escapeHtml(description)}</p>
    <div class="progress"><span style="width:${pct}%"></span></div>
    <div class="meta">${pct}% complete · ${escapeHtml(t.status || "Open")}</div>
  </section>`;

  let content="";
  if(activeTaskDetailTab==="notes"){
    content=`<div class="section-head"><div><span class="kicker">NOTES</span><h2>Task notes</h2><p>Read-only entries from 34_TASK_NOTES</p></div></div>${taskNotesMarkup(payload.notes || [])}`;
  }else if(activeTaskDetailTab==="history"){
    content=`<div class="section-head"><div><span class="kicker">HISTORY</span><h2>Task history</h2><p>Read-only events from 36_TASK_EVENT_LOG</p></div></div>${taskHistoryMarkup(payload.history || [])}`;
  }else{
    content=`<div class="detail-grid">
      <article class="detail-card"><small>PRIORITY</small><strong>${detailValue(t.priority)}</strong></article>
      <article class="detail-card"><small>DEADLINE</small><strong>${detailValue(t.deadline)}</strong></article>
      <article class="detail-card"><small>ROLE</small><strong>${detailValue(t.role)}</strong></article>
      <article class="detail-card"><small>LOCATION</small><strong>${detailValue(t.location)}</strong></article>
    </div>
    <div class="section-head" style="margin-top:20px"><div><span class="kicker">DETAILS</span><h2>Task information</h2></div></div>
    <div class="detail-list">
      ${taskInfoRow("Project",t.project)}
      ${taskInfoRow("Owner",t.owner)}
      ${taskInfoRow("Strategic importance",t.strategicImportance)}
      ${taskInfoRow("Scheduled date",t.scheduledDate)}
      ${taskInfoRow("Start time",t.startTime)}
      ${taskInfoRow("Planned hours",t.plannedHours)}
      ${taskInfoRow("Earliest start",t.earliestStart)}
      ${taskInfoRow("Flexibility",t.flexibility)}
      ${taskInfoRow("Travel / buffer",t.travelBufferMin ? t.travelBufferMin+" min" : "")}
      ${taskInfoRow("Energy",t.energy)}
      ${taskInfoRow("Splittable",t.splittable)}
      ${taskInfoRow("Dependency",t.dependencyTaskId)}
      ${taskInfoRow("Reminder",t.reminderRule)}
      ${taskInfoRow("Original scheduled date",t.originalScheduledDate)}
      ${taskInfoRow("Reschedule count",t.rescheduleCount)}
      ${taskInfoRow("Clash flag",t.clashFlag)}
      ${taskInfoRow("Deadline risk",t.deadlineRisk)}
      ${taskInfoRow("Created",t.created)}
    </div>`;
  }

  const right=`<section class="section">
    <div class="chip-row task-detail-tabs">
      ${taskDetailTabButton("details","Details")}
      ${taskDetailTabButton("notes","Notes")}
      ${taskDetailTabButton("history","History")}
    </div>
    <div class="task-detail-tab-content">${content}</div>
    <div class="task-actions" style="margin-top:14px">
      <button class="done" data-complete-task="${escapeHtml(t.taskId)}" data-task-title="${escapeHtml(t.title)}">Complete</button>
      <button data-reschedule-task="${escapeHtml(t.taskId)}" data-task-title="${escapeHtml(t.title)}" data-current-date="${escapeHtml(t.scheduledDateIso || "")}" data-current-time="${escapeHtml(t.startTime || "")}">Reschedule</button>
      <button data-demo="more-actions">More</button>
    </div>
  </section>`;

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

  if(route==="today" && mobileBridge.endpoint && !liveTodayLoaded){
    loadLiveTodayData(false);
  }
  if(route==="tasks" && mobileBridge.endpoint && !liveTasksLoaded){
    loadLiveTasksData(false);
  }
  if(route==="task-detail" && mobileBridge.endpoint && selectedTaskId &&
     !liveTaskDetailLoaded && !liveTaskDetailLoading && !liveTaskDetailError){
    loadLiveTaskDetailData(selectedTaskId,false);
  }
}
function bindDynamic(){
  document.querySelectorAll("[data-route]").forEach(el=>{
    el.addEventListener("click",e=>{
      const r=el.dataset.route;
      if(!r)return;
      e.preventDefault();

      if(r==="task-detail"){
        const id=String(el.dataset.taskId||"").trim();
        if(id){
          selectedTaskId=id;
          activeTaskDetailTab="details";
          liveTaskDetailData=null;
          liveTaskDetailLoaded=false;
          liveTaskDetailLoading=false;
          liveTaskDetailError=null;
        }
      }

      render(r);
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

  document.querySelectorAll("[data-task-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    activeTaskFilter=btn.dataset.taskFilter || "all";
    if(currentRoute()==="tasks") render("tasks",true);
  }));

  document.querySelectorAll("[data-complete-task]").forEach(btn=>btn.addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
    completeTaskById(btn.dataset.completeTask,btn.dataset.taskTitle || "");
  }));

  document.querySelectorAll("[data-reschedule-task]").forEach(btn=>btn.addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
    rescheduleTaskById(
      btn.dataset.rescheduleTask,
      btn.dataset.taskTitle || "",
      btn.dataset.currentDate || "",
      btn.dataset.currentTime || ""
    );
  }));

  document.querySelectorAll("[data-task-detail-tab]").forEach(btn=>btn.addEventListener("click",()=>{
    activeTaskDetailTab=btn.dataset.taskDetailTab || "details";
    if(currentRoute()==="task-detail") render("task-detail",true);
  }));

  document.querySelectorAll("[data-retry-task-detail]").forEach(btn=>btn.addEventListener("click",()=>{
    loadLiveTaskDetailData(selectedTaskId,true);
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

runBackendSetupFromQuery();
render(location.hash.replace("#","")||"home",true);
loadLiveHomeData(false);
loadLiveTodayData(false);
loadLiveTasksData(false);

// Refresh live Home, Today and Tasks data when returning to the app after 60 seconds or more.
let __lastHomeRefresh=Date.now();
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="visible" && Date.now()-__lastHomeRefresh>60000){
    __lastHomeRefresh=Date.now();
    loadLiveHomeData(false);
    loadLiveTodayData(false);
    loadLiveTasksData(false);
  }
});
