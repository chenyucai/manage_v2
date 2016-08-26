var config = {};

config.host = "/api";
config.upload_file = "/manage/upload";
config.keUpload = "/manage/keUpload";

config.login = "/manage/login";
config.logout = "/manage/logout";

config.acc_getInfo = "/manage/account/getInfo";
config.acc_updateInfo = "/manage/account/updateInfo";
config.acc_updatePwd = "/manage/account/updatePassword";
config.acc_getOrg = "/manage/account/getOrganization";

config.con_getCon = "/manage/configure/getConfigure";
config.con_saveCon = "/manage/configure/saveConfigure";
config.con_reDomain = "/manage/configure/refreshDomainRecord";

config.wxset_get = "/manage/wxsetting/get";
config.wxset_update = "/manage/wxsetting/update";
config.wxset_reMenus = "/manage/wxsetting/refreshMenus";
config.wxset_reMsg = "/manage/wxsetting/refreshMessageTemplate";
config.wxset_reWx = "/manage/wxsetting/refreshWxConfigure";

config.mod_get = "/manage/relModule/get";
config.mod_update = "/manage/relModule/update";

config.user_query = "/manage/user/query";
config.user_get = "/manage/user/get";
config.user_close = "/manage/user/close";
config.user_open = "/manage/user/open";

config.oper_save = "/manage/operator/save";
config.oper_update = "/manage/operator/update";
config.oper_active = "/manage/operator/active";
config.oper_forbid = "/manage/operator/forbid";
config.oper_resetPwd = "/manage/operator/resetPassword";
config.oper_delete = "/manage/operator/delete";
config.oper_get = "/manage/operator/get";
config.oper_query = "/manage/operator/query";

config.hol_save = "/manage/holiday/save";
config.hol_delete = "/manage/holiday/delete";
config.hol_query = "/manage/holiday/query";

config.doc_save = "/manage/doctor/save";
config.doc_update = "/manage/doctor/update";
config.doc_delete = "/manage/doctor/delete";
config.doc_query = "/manage/doctor/query";
config.doc_get = "/manage/doctor/get";
config.doc_outOpen = "/manage/doctor/outOpen";
config.doc_outClose = "/manage/doctor/outClose";
config.doc_qrcode = "/manage/doctor/generatorQrcode";

config.dset_get = "/manage/dsetting/get";
config.dset_update = "/manage/dsetting/update";
config.dset_bindApp = "/manage/dsetting/bindApp";
config.dset_unbindApp = "/manage/dsetting/unbindApp";
config.dset_unbindWx = "/manage/dsetting/unbindWx";

config.pat_query = "/manage/patient/query";
config.pat_get = "/manage/patient/get";
config.pat_delete = "/manage/patient/delete";
config.pat_update = "/manage/patient/update";
config.pat_save = "/manage/patient/save";
config.pat_import = "/manage/patient/import";
config.pat_impView = "/manage/patient/importView";

config.dschset_get = "/manage/dschsetting/get";
config.dschset_update = "/manage/dschsetting/update";

config.dsch_save = "/manage/dschedule/save";
config.dsch_update = "/manage/dschedule/update";
config.dsch_delete = "/manage/dschedule/delete";
config.dsch_query  = "/manage/dschedule/query";
config.dsch_get = "/manage/dschedule/get";
config.dsch_open = "/manage/dschedule/open";
config.dsch_close = "/manage/dschedule/close";
config.dsch_init = "/manage/dschedule/initOutInfo";
config.dsch_lastDate = "/manage/dschedule/getLastOutDate";


config.dres_query = "/manage/dreservation/query";
config.dres_open = "/manage/dreservation/open";
config.dres_close = "/manage/dreservation/close";
config.dres_trans = "/manage/dreservation/transfer";

config.dstop_save = "/manage/dstop/save";
config.dstop_send = "/manage/dstop/sendNotice";
config.dstop_get = "/manage/dstop/get";
config.dstop_query = "/manage/dstop/query";

config.cha_save = "/manage/channel/save";
config.cha_update = "/manage/channel/update";
config.cha_delete = "/manage/channel/delete";
config.cha_release = "/manage/channel/release";
config.cha_close = "/manage/channel/close";
config.cha_get = "/manage/channel/get";
config.cha_query = "/manage/channel/query";
config.cha_getCh = "/manage/channel/getChildren";

config.art_save = "/manage/article/save";
config.art_update = "/manage/article/update";
config.art_delete = "/manage/article/delete";
config.art_release = "/manage/article/release";
config.art_close = "/manage/article/close";
config.art_move = "/manage/article/move";
config.art_copy = "/manage/article/copy";
config.art_get = "/manage/article/get";
config.art_query = "/manage/article/query";
config.art_import = "/manage/article/import";

config.news_query = "/manage/news/query";
config.news_get = "/manage/news/get";
config.news_import = "/manage/news/import";
config.news_close = "/manage/news/close";
config.news_release = "/manage/news/release";
config.news_delete = "/manage/news/delete";
config.news_update = "/manage/news/update";
config.news_save = "/manage/news/save";
config.news_qStore = "/manage/newsstore/query";
config.news_gStore = "/manage/newsstore/get";
config.news_qChannel = "/manage/newschannel/query";
config.news_gChannel = "/manage/newschannel/get";
config.news_sChannel = "/manage/newschannel/save";
config.news_uChannel = "/manage/newschannel/update";
config.news_dChannel = "/manage/newschannel/delete";

config.mdttm_save = "/manage/mdtteam/save";
config.mdttm_update = "/manage/mdtteam/update";
config.mdttm_delete = "/manage/mdtteam/delete";
config.mdttm_query = "/manage/mdtteam/query";
config.mdttm_get = "/manage/mdtteam/get";

config.mdtdis_save = "/manage/mdtdiscuss/save";
config.mdtdis_update = "/manage/mdtdiscuss/update";
config.mdtdis_delete = "/manage/mdtdiscuss/delete";
config.mdtdis_query = "/manage/mdtdiscuss/query";
config.mdtdis_get = "/manage/mdtdiscuss/get";

config.pro_import = "/manage/project/import";
config.pro_update = "/manage/project/update";
config.pro_delete = "/manage/project/delete";
config.pro_query = "/manage/project/query";
config.pro_get = "/manage/project/get";
config.pro_qStore = "/manage/projectstore/query";
config.pro_gStore = "/manage/projectstore/get";
config.pro_gChild = "/manage/project/getChildren";

config.pstop_save = "/manage/pstop/save";
config.pstop_send = "/manage/pstop/sendNotice";
config.pstop_get = "/manage/pstop/get";
config.pstop_query = "/manage/pstop/query";

config.pitem_import = "/manage/pitem/import";
config.pitem_update = "/manage/pitem/update";
config.pitem_delete = "/manage/pitem/delete";
config.pitem_query = "/manage/pitem/query";
config.pitem_get = "/manage/pitem/get";
config.pitem_qStore = "/manage/pitemstore/query";
config.pitem_gStore = "/manage/pitemstore/get";

config.psch_save = "/manage/pschedule/save";
config.psch_update = "/manage/pschedule/update";
config.psch_delete = "/manage/pschedule/delete";
config.psch_query = "/manage/pschedule/query";
config.psch_get = "/manage/pschedule/get";
config.psch_open = "/manage/pschedule/open";
config.psch_close = "/manage/pschedule/close";
config.psch_init = "/manage/pschedule/initOutInfo";
config.psch_lastDate = "/manage/pschedule/getLastOutDate";

config.pset_get = "/manage/pschsetting/get";
config.pset_update = "/manage/pschsetting/update";

config.pres_query = "/manage/preservation/query";
config.pres_open = "/manage/preservation/open";
config.pres_close = "/manage/preservation/close";
config.pres_trans = "/manage/preservation/transfer";

config.res_qOut = "/manage/reservation/queryOutpatient";
config.res_gOut = "/manage/reservation/getOutpatient";
config.res_pOut = "/manage/reservation/auditPassOutpatient";
config.res_rOut = "/manage/reservation/auditRefuseOutpatient";
config.res_sOut = "/manage/reservation/submitDoctorAudit";
config.res_qAss = "/manage/reservation/queryAssignDoctor";
config.res_qDoc = "/manage/reservation/queryDoctorResInfo";
config.res_qPro = "/manage/reservation/queryProject";
config.res_gPro = "/manage/reservation/getProject";
config.res_mailOut = "/manage/reservation/sendMailOutpatient";
config.res_mailPro = "/manage/reservation/sendMailProject";

config.rep_answer = "/manage/report/answer";
config.rep_sym = "/manage/report/symptom";
config.rep_query = "/manage/report/query";
config.rep_get = "/manage/report/get";

config.rec_save = "/manage/recruitment/save";
config.rec_update = "/manage/recruitment/update";
config.rec_release = "/manage/recruitment/release";
config.rec_close = "/manage/recruitment/close";
config.rec_query = "/manage/recruitment/query";
config.rec_get = "/manage/recruitment/get";
config.rec_delete = "/manage/recruitment/delete";
config.rec_aQuery = "/manage/recapply/query";
config.rec_aGet = "/manage/recapply/get";
config.rec_aPass = "/manage/recapply/pass";
config.rec_aRefuse = "/manage/recapply/refuse";

config.moper_save = "/manage/moperation/save";
config.moper_update = "/manage/moperation/update";
config.moper_delete = "/manage/moperation/delete";
config.moper_get = "/manage/moperation/get";
config.moper_query = "/manage/moperation/query";
config.moper_all = "/manage/moperation/all";
config.moper_import = "/manage/moperation/import";
config.moper_impView = "/manage/moperation/importView";

config.mopset_get = "/manage/mopsetting/get";
config.mopset_update = "/manage/mopsetting/update";

// config.mopsch_save = "/manage/mopschedule/save";
// config.mopsch_update = "/manage/mopschedule/update";
// config.mopsch_get = "/manage/mopschedule/get";
// config.mopsch_delete = "/manage/mopschedule/delete";
// config.mopsch_query = "/manage/mopschedule/query";

config.mopres_save = "/manage/mopreservation/save";
config.mopres_qrcode = "/manage/mopreservation/generatorQrcode";
config.mopres_update = "/manage/mopreservation/update";
config.mopres_updateOper = "/manage/mopreservation/updateOperation";
config.mopres_get = "/manage/mopreservation/get";
config.mopres_count = "/manage/mopreservation/count";
config.mopres_query = "/manage/mopreservation/query";
config.mopres_ptimes = "/manage/mopreservation/queryPtimes";
config.mopres_qSchedule = "/manage/mopreservation/querySchedule";
config.mopres_mail = "/manage/mopreservation/sendMail";
config.mopres_delete = "/manage/mopreservation/cancel";
config.mopres_queryDoctorScheduleDay = "/manage/mopreservation/queryDoctorScheduleDay";

config.salon_save = "/manage/salon/save";
config.salon_get = "/manage/salon/get";
config.salon_update = "/manage/salon/update";
config.salon_delete = "/manage/salon/delete";
config.salon_release = "/manage/salon/release";
config.salon_close = "/manage/salon/close";
config.salon_query = "/manage/salon/query";
config.salon_qSignUp = "/manage/salon/querySignUp";

config.docset_save = "/manage/chemo/docsetting/save";
config.docset_update = "/manage/chemo/docsetting/update";
config.docset_get = "/manage/chemo/docsetting/get";
config.docset_delete = "/manage/chemo/docsetting/delete";
config.docset_query = "/manage/chemo/docsetting/query";

config.schedule_save = "/manage/chemo/schedule/save";
config.schedule_update = "/manage/chemo/schedule/update";
config.schedule_close = "/manage/chemo/schedule/close";
config.schedule_open = "/manage/chemo/schedule/open";
config.schedule_get = "/manage/chemo/schedule/get";
config.schedule_delete = "/manage/chemo/schedule/delete";
config.schedule_query = "/manage/chemo/schedule/query";

config.hossetting_get = "/manage/chemo/hossetting/get";
config.hossetting_update = "/manage/chemo/hossetting/update";

config.outinfo_init = "/manage/chemo/outinfo/init";
config.outinfo_transfer = "/manage/chemo/outinfo/transfer";
config.outinfo_close = "/manage/chemo/outinfo/close";
config.outinfo_open = "/manage/chemo/outinfo/open";
config.outinfo_query = "/manage/chemo/outinfo/query";
config.outinfo_get = "/manage/chemo/outinfo/get";

config.chemo_outinfo_close = "/manage/chemo/outinfo/close";
config.chemo_outinfo_open = "/manage/chemo/outinfo/open";
config.chemo_outinfo_init = "/manage/chemo/outinfo/init";

config.hoschemocase_save = "/manage/chemo/hoscase/save";
config.hoschemocase_update = "/manage/chemo/hoscase/update";
config.hoschemocase_delete = "/manage/chemo/hoscase/delete";
config.hoschemocase_get = "/manage/chemo/hoscase/get";
config.hoschemocase_query = "/manage/chemo/hoscase/query";
config.hoschemocase_close = "/manage/chemo/hoscase/close";
config.hoschemocase_release = "/manage/chemo/hoscase/release";
config.hoschemocase_import = "/manage/chemo/hoscase/import";
config.hoschemocase_querymodel = "/manage/chemo/hoscase/querytype";
config.hoschemocase_getCase = "/manage/chemo/hoscase/getCase";

config.hoschemolevel_save = "/manage/chemo/hoslevel/save";
config.hoschemolevel_update = "/manage/chemo/hoslevel/update";
config.hoschemolevel_delete = "/manage/chemo/hoslevel/delete";
config.hoschemolevel_get = "/manage/chemo/hoslevel/get";
config.hoschemolevel_query = "/manage/chemo/hoslevel/query";
config.hoschemolevel_medicinetype = "/manage/chemo/hoslevel/medicinetype";

config.chemostop_query = "/manage/chemo/stop/query";
config.chemostop_save = "/manage/chemo/stop/save";
config.chemostop_sendNotice = "/manage/chemo/stop/sendNotice";
config.chemostop_get = "/manage/chemo/stop/get";
config.chemostop_delete = "/manage/chemo/stop/delete";

config.teachmanage_save = "/manage/cms/teach/save";
config.teachmanage_update = "/manage/cms/teach/update";
config.teachmanage_delete = "/manage/cms/teach/delete";
config.teachmanage_query = "/manage/cms/teach/query";
config.teachmanage_get = "/manage/cms/teach/get";

config.chemo_usercase_query = "/manage/chemo/usercase/query";
config.chemo_usercase_save = "/manage/chemo/usercase/save";
config.chemo_usercase_update = "/manage/chemo/usercase/update";

config.gail_error_query = "/manage/gail/queryError";
config.gail_userinfo_query = "/manage/gail/queryUserInfo";

config.mopschedule_hasSchedule = "/manage/mopschedule/hasSchedule";
config.mopschedule_get = "/manage/mopschedule/get";
config.mopschedule_save = "/manage/mopschedule/save";

config.Kitems = [
  'preview', 'quickformat', '|', 'undo', 'redo', '|', 'template', 'cut', 'copy', 'paste',
  'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
  'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
  'superscript', 'selectall', '/',
  'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
  'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image',
  'table', 'hr', 'emoticons', 'pagebreak',
  'anchor', 'link', 'unlink', '|', 'fullscreen'
];

config.menu = [
  {
    title:'功能',
    icon:"img/fn.png",
    items:[
      {title:'门诊审核', url:'', isNew:false},
      {title:'服务预约', url:'', isNew:false},
      {title:'手术预约', url:'', isNew:false},
      {title:'解读报告', url:'', isNew:false}
    ]
  },
  {
    title:'内容',
    icon:'img/content.png',
    items:[
      {title:'科普宣教', url:'', isNew:false},
      {title:'科室资讯', url:'', isNew:false},
      {title:'宣教管理', url:'', isNew:false},
      {title:'沙龙活动', url:'', isNew:false},
      {title:'临床招募', url:'', isNew:false}
    ]
  },
  {
    title:'管理',
    icon:'img/mng.png',
    items:[
      {id:'user', title:'用户管理', url:'', isNew:false},
      {id:'patient', title:'患者管理', url:'', isNew:false},
      {id:'doctor', title:'医生管理', url:'', isNew:false},
      {title:'服务管理', url:'', isNew:false},
      {title:'手术管理', url:'', isNew:false},
      {title:'化疗管理', url:'', isNew:false},
    ]
  },
  {
    title:'设置',
    icon:'img/set.png',
    items:[
      {title:'机构设置', url:'', isNew:false},
      {title:'微信设置', url:'', isNew:false},
      {title:'模块设置', url:'', isNew:false},
      {title:'操作员设置', url:'', isNew:false},
    ]
  },
];
