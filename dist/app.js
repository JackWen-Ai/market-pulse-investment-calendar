// Updated by the cloud maintenance task after a verified GitHub data update.
const LAST_DATA_UPDATE_AT = '2026-09-04T14:17:06+08:00';
const CURRENT_LAYOUT_VERSION = '2026-09-v2';
const HISTORY_STORAGE_KEY = 'market-pulse-history-v2';
const REMOTE_HISTORY_URL = 'data/history.json';

const seedEvents = [
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-04",
    "id": "bls-20260904",
    "importance": "high",
    "notes": "BLS 官方发布时间；美国东部时间。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-04 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "就业形势（非农）· 8月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-10",
    "id": "bls-20260910",
    "importance": "medium",
    "notes": "生产者价格指数。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-10 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "PPI · 8月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-11",
    "id": "bls-20260911",
    "importance": "high",
    "notes": "消费者价格指数；美国东部时间。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-11 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "CPI · 8月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-09-15",
    "id": "fed-20260915",
    "importance": "high",
    "notes": "9月15–16日；利率决定通常在第2天发布。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "日期已确认；具体时刻待确认",
    "subtypes": [
      "meeting"
    ],
    "time": "",
    "title": "FOMC 会议（第1天）",
    "url": "https://www.federalreserve.gov/newsevents/2026-september.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-09-16",
    "id": "fed-20260916",
    "importance": "high",
    "notes": "官方日历：14:00美国东部时间发布利率决定；14:30新闻发布会单列。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-17 02:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "decision"
    ],
    "time": "14:00",
    "title": "FOMC 利率决定（已确认）",
    "url": "https://www.federalreserve.gov/newsevents/2026-september.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-29",
    "id": "bls-20260929",
    "importance": "medium",
    "notes": "职位空缺与劳动力流动调查。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-29 22:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "10:00",
    "title": "JOLTS 职位空缺 · 8月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-30",
    "id": "bea-20260930",
    "importance": "high",
    "notes": "BEA：Q2 GDP 第三次估值、8月个人收入与支出。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-30 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "GDP（第三次估值）/ PCE · 8月",
    "url": "https://www.bea.gov/news/schedule/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-02",
    "id": "bls-20261002",
    "importance": "high",
    "notes": "BLS 官方发布时间；美国东部时间。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-02 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "就业形势（非农）· 9月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-10-07",
    "id": "fed-20261007",
    "importance": "medium",
    "notes": "9月15–16日会议纪要；美联储月历确认10月7日14:00美国东部时间发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-08 02:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "minutes"
    ],
    "time": "14:00",
    "title": "FOMC 会议纪要 · 9月会议（已确认）",
    "url": "https://www.federalreserve.gov/newsevents/2026-october.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-14",
    "id": "bls-20261014",
    "importance": "high",
    "notes": "消费者价格指数。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-14 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "CPI · 9月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-15",
    "id": "bls-20261015",
    "importance": "medium",
    "notes": "生产者价格指数。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-15 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "PPI · 9月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-10-27",
    "id": "fed-20261027",
    "importance": "high",
    "notes": "10月27–28日；利率决定通常在第2天发布。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "日期已确认；具体时刻待确认",
    "subtypes": [
      "meeting"
    ],
    "time": "",
    "title": "FOMC 会议（第1天）",
    "url": "https://www.federalreserve.gov/newsevents/2026-october.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-10-28",
    "id": "fed-20261028",
    "importance": "high",
    "notes": "官方日历：14:00美国东部时间发布利率决定；14:30新闻发布会单列。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-29 02:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "decision"
    ],
    "time": "14:00",
    "title": "FOMC 利率决定（已确认）",
    "url": "https://www.federalreserve.gov/newsevents/2026-october.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-29",
    "id": "bea-20261029",
    "importance": "high",
    "notes": "BEA：Q3 GDP 提前估值、9月个人收入与支出。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-29 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "GDP（提前估值）/ PCE · 9月",
    "url": "https://www.bea.gov/news/schedule/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-03",
    "id": "bls-20261103",
    "importance": "medium",
    "notes": "职位空缺与劳动力流动调查。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-03 23:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "10:00",
    "title": "JOLTS 职位空缺 · 9月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-11-18",
    "id": "fed-20261118",
    "importance": "medium",
    "notes": "10月27–28日会议纪要；美联储月历确认11月18日14:00美国东部时间发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-19 03:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "minutes"
    ],
    "time": "14:00",
    "title": "FOMC 会议纪要 · 10月会议（已确认）",
    "url": "https://www.federalreserve.gov/newsevents/2026-november.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-06",
    "id": "bls-20261106",
    "importance": "high",
    "notes": "BLS 官方发布时间；美国东部时间。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-06 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "就业形势（非农）· 10月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-10",
    "id": "bls-20261110",
    "importance": "high",
    "notes": "消费者价格指数。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-10 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "CPI · 10月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-13",
    "id": "bls-20261113",
    "importance": "medium",
    "notes": "生产者价格指数。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-13 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "PPI · 10月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-25",
    "id": "bea-20261125",
    "importance": "high",
    "notes": "BEA：Q3 GDP 第二次估值、10月个人收入与支出。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-25 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "GDP（二次估值）/ PCE · 10月",
    "url": "https://www.bea.gov/news/schedule/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-12-01",
    "id": "bls-20261201",
    "importance": "medium",
    "notes": "职位空缺与劳动力流动调查。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-12-01 23:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "10:00",
    "title": "JOLTS 职位空缺 · 10月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-12-04",
    "id": "bls-20261204",
    "importance": "high",
    "notes": "BLS 官方发布时间；美国东部时间。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-12-04 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "就业形势（非农）· 11月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "category": "fed",
    "date": "2026-12-08",
    "id": "fed-20261208",
    "importance": "high",
    "notes": "12月8–9日；伴随经济预测摘要。",
    "time": "",
    "title": "FOMC 会议（第1天）",
    "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
  },
  {
    "category": "fed",
    "date": "2026-12-09",
    "id": "fed-20261209",
    "importance": "high",
    "notes": "具体发布时间以美联储当日安排为准。",
    "time": "14:00",
    "title": "FOMC 利率决定 / 发布会",
    "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
  },
  {
    "category": "macro",
    "date": "2026-12-10",
    "id": "bls-20261210",
    "importance": "high",
    "notes": "消费者价格指数。",
    "time": "08:30",
    "title": "CPI · 11月",
    "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
  },
  {
    "category": "macro",
    "date": "2026-12-15",
    "id": "bls-20261215",
    "importance": "medium",
    "notes": "生产者价格指数。",
    "time": "08:30",
    "title": "PPI · 11月",
    "url": "https://www.bls.gov/schedule/news_release/ppi.htm"
  },
  {
    "category": "fed",
    "date": "2027-01-06",
    "id": "fed-20270106",
    "importance": "medium",
    "notes": "预计为12月会议纪要，日期以官方更新为准。",
    "time": "14:00",
    "title": "FOMC 会议纪要（预计）",
    "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-10",
    "id": "claims-20260910",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-10 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-17",
    "id": "claims-20260917",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-17 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-24",
    "id": "claims-20260924",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-24 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-01",
    "id": "claims-20261001",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-01 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-08",
    "id": "claims-20261008",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-08 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-15",
    "id": "claims-20261015",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-15 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-22",
    "id": "claims-20261022",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-22 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-29",
    "id": "claims-20261029",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-29 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-05",
    "id": "claims-20261105",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-05 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-12",
    "id": "claims-20261112",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-12 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-19",
    "id": "claims-20261119",
    "importance": "medium",
    "notes": "DOL 周报按周四08:30美国东部时间发布；按日期采用EDT或EST。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-19 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-25",
    "id": "claims-20261125",
    "importance": "medium",
    "notes": "DOL 明确列出感恩节周提前至11月25日08:30美国东部标准时间（EST）。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-25 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报（提前）",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方周度发布规则已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-12-03",
    "id": "claims-20261203",
    "importance": "medium",
    "notes": "DOL 官方页面确认周报通常于周四08:30美国东部时间发布；2026年仅列明感恩节周改至11月25日，本日维持常规周四安排。时间统一按纽约EST（UTC−05:00）记录；北京时间2026-12-03 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "官方周度发布规则已确认",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "category": "macro",
    "date": "2026-12-10",
    "id": "claims-20261210",
    "importance": "medium",
    "notes": "美国劳工部通常每周四 08:30 ET 发布；以当周公告为准。",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "category": "macro",
    "date": "2026-12-17",
    "id": "claims-20261217",
    "importance": "medium",
    "notes": "美国劳工部通常每周四 08:30 ET 发布；以当周公告为准。",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "category": "macro",
    "date": "2026-12-24",
    "id": "claims-20261224",
    "importance": "medium",
    "notes": "美国劳工部通常每周四 08:30 ET 发布；以当周公告为准。",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "category": "macro",
    "date": "2026-12-31",
    "id": "claims-20261231",
    "importance": "medium",
    "notes": "美国劳工部通常每周四 08:30 ET 发布；以当周公告为准。",
    "subtype": "claims",
    "time": "08:30",
    "title": "初请失业金 · 周报",
    "url": "https://oui.doleta.gov/unemploy/claims_arch.asp"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方交易安排已确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-09-07",
    "id": "market-20260907",
    "importance": "high",
    "notes": "NYSE 官方假日日历确认休市；按美国纽约市场当地日期记录。",
    "status": "官方交易安排已确认",
    "subtype": "holiday",
    "time": "",
    "title": "美股休市 · 劳动节",
    "url": "https://www.nyse.com/trade/hours-calendars"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "常规到期窗口；具体合约日期时间待确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-09-18",
    "id": "market-20260918-expiry",
    "importance": "high",
    "notes": "保留原有9月第三个星期五窗口。Cboe日历区分标准、AM结算及季度合约；本次未能读取PDF颜色标记，不将全部合约视为同一截止时间，以具体合约公告为准（美国东部时间）。",
    "status": "常规到期窗口；具体合约日期时间待确认",
    "subtype": "expiry",
    "time": "",
    "title": "美股期权到期 · 9月季度到期窗口（预计）",
    "url": "https://cdn.cboe.com/resources/options/Cboe2026OPTIONSCalendar.pdf"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计季度权重窗口 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-09-18",
    "effective": "预计2026年9月18日纽约收盘后（EDT）；本轮具体安排待公告",
    "funds": [
      "SPY",
      "VOO",
      "IVV",
      "MDY",
      "IJH",
      "SPSM"
    ],
    "id": "market-20260918-rebalance",
    "importance": "medium",
    "indexName": "标普500、标普中盘400、标普小盘600",
    "notes": "S&P官方方法论规定季度股份数更新；标普1500成分变更按需要进行，并非每季固定更换公司。保留原有NYSE日历窗口，具体本轮公告待核验；不猜测成分股。SPSM跟踪标普600的关系由State Street官方基金页确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "removed": [],
    "status": "预计季度权重窗口 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "指数基金被动调仓 · 标普500/400/600季度窗口（预计）",
    "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方方法论推算窗口 · 本轮名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-09-21",
    "effective": "2026年9月21日09:30纽约EDT（北京时间21:30），按官方方法论推算；具体公告待发布",
    "funds": [
      "QQQ",
      "QQQM"
    ],
    "id": "market-20260921-nasdaq100",
    "importance": "high",
    "indexName": "纳斯达克-100",
    "notes": "官方方法论：季度调整于3/6/9/12月第三个星期五后的首个交易日开盘生效；公告在此前第六个交易日收盘后发布。9月窗口据此推算，不代表本轮名单已获确认。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-21 21:30。",
    "removed": [],
    "sourceTimeZone": "America/New_York",
    "status": "官方方法论推算窗口 · 本轮名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "09:30",
    "title": "指数基金被动调仓 · 纳斯达克-100季度调整（预计）",
    "url": "https://indexes.nasdaq.com/docs/Methodology_NDX.pdf"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "季度末规则已确认；具体合约待确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-09-30",
    "id": "market-20260930-quarterly",
    "importance": "medium",
    "notes": "Cboe官方说明季度期权在季度末收盘到期；9月30日为季度最后交易日。各合约适用范围及结算规则需分别核对，不代表所有期权同时到期（美国东部时间）。",
    "status": "季度末规则已确认；具体合约待确认",
    "subtype": "expiry",
    "time": "",
    "title": "季度期权到期 · 9月末",
    "url": "https://cdn.cboe.com/resources/options/Cboe2026OPTIONSCalendar.pdf"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "常规到期窗口；具体合约日期时间待确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-10-16",
    "id": "market-20261016",
    "importance": "medium",
    "notes": "保留原有第三个星期五观察窗口；Cboe日历PDF颜色标记本次未能读取，未将个别合约到期日核验为确认事实。AM结算产品最后交易日可能更早，具体合约以交易所公告为准（美国东部时间）。",
    "status": "常规到期窗口；具体合约日期时间待确认",
    "subtype": "expiry",
    "time": "",
    "title": "美股期权到期 · 10月月度到期（预计）",
    "url": "https://cdn.cboe.com/resources/options/Cboe2026OPTIONSCalendar.pdf"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "时间表已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-10-30",
    "effective": "2026年12月11日美国股市收盘后（纽约EST）；12月14日开盘使用新指数",
    "funds": [
      "IWB",
      "IWM",
      "IWV"
    ],
    "id": "market-20261030-russell",
    "importance": "medium",
    "indexName": "Russell 1000/2000/3000",
    "notes": "FTSE Russell正式公告：10月30日美国收盘为排名参考时点；2026年起每年6月和12月重构。排名日不代表指数已调整，首批名单11月13日盘后公布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-31 04:00。",
    "removed": [],
    "sourceTimeZone": "America/New_York",
    "status": "时间表已确认 · 纳入/移出名单待公告",
    "subtype": "rebalance",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "16:00",
    "title": "Russell 指数排名日 · 调仓前置观察",
    "url": "https://www.lseg.com/en/media-centre/press-releases/ftse-russell/2026/ftse-russell-announces-december-2026-russell-us-indexes-reconstitution-schedule"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "常规到期窗口；具体合约日期时间待确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-11-20",
    "id": "market-20261120",
    "importance": "medium",
    "notes": "保留原有第三个星期五观察窗口；Cboe日历PDF颜色标记本次未能读取，未将个别合约到期日核验为确认事实。AM结算产品最后交易日可能更早，具体合约以交易所公告为准（美国东部时间）。",
    "status": "常规到期窗口；具体合约日期时间待确认",
    "subtype": "expiry",
    "time": "",
    "title": "美股期权到期 · 11月月度到期（预计）",
    "url": "https://cdn.cboe.com/resources/options/Cboe2026OPTIONSCalendar.pdf"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方交易安排已确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-11-26",
    "id": "market-20261126",
    "importance": "high",
    "notes": "NYSE 官方假日日历确认休市；按美国纽约市场当地日期记录。",
    "status": "官方交易安排已确认",
    "subtype": "holiday",
    "time": "",
    "title": "美股休市 · 感恩节",
    "url": "https://www.nyse.com/trade/hours-calendars"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方交易安排已确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-11-27",
    "id": "market-20261127",
    "importance": "medium",
    "notes": "NYSE 正常股票交易时段于13:00美国东部标准时间EST结束；符合条件的期权13:15结束，单列记录。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-28 02:00。",
    "sourceTimeZone": "America/New_York",
    "status": "官方交易安排已确认",
    "subtype": "holiday",
    "time": "13:00",
    "title": "美股提前收市 · 感恩节次日",
    "url": "https://www.nyse.com/trade/hours-calendars"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "公告日及生效日已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-11-30",
    "effective": "2026年12月1日生效；各市场实施时刻以本轮正式公告为准",
    "funds": [
      "各类 MSCI 跟踪 ETF / 指数基金（具体受影响基金待公告）"
    ],
    "id": "market-20261130-msci",
    "importance": "medium",
    "indexName": "MSCI全球可投资市场相关指数",
    "notes": "MSCI 8月12日正式公告：11月11日公布本轮审议，12月1日生效。保留11月30日收盘实施观察窗口；跨市场时区不同，不能统一成纽约16:00，本轮具体实施时刻待正式名单公告。",
    "removed": [],
    "status": "公告日及生效日已确认 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "指数基金被动调仓 · MSCI 月末实施观察窗口（预计）",
    "url": "https://app2.msci.com/eqb/pressreleases/archive/ir_dates.pdf"
  },
  {
    "added": [],
    "category": "market",
    "date": "2026-12-11",
    "effective": "2026年12月11日收盘附近",
    "funds": [
      "IWB",
      "IWM",
      "IWV"
    ],
    "id": "market-20261211-russell",
    "importance": "high",
    "indexName": "Russell 1000/2000/3000",
    "notes": "NYSE 2026 交易日历列为12月11日 Russell Reconstitution final；最终名单和权重以 FTSE Russell 公告为准。",
    "removed": [],
    "status": "最终生效窗口已排期 · 纳入/移出名单待官方公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "指数基金被动调仓 · Russell 年度重构",
    "url": "https://www.nyse.com/publicdocs/nyse/ICE_NYSE_2026_Yearly_Trading_Calendar.pdf"
  },
  {
    "category": "market",
    "date": "2026-12-18",
    "id": "market-20261218-expiry",
    "importance": "high",
    "notes": "NYSE 2026 交易日历列为12月18日 Triple Witch。",
    "subtype": "expiry",
    "time": "",
    "title": "美股期权到期 · 12月四巫日",
    "url": "https://www.nyse.com/publicdocs/nyse/ICE_NYSE_2026_Yearly_Trading_Calendar.pdf"
  },
  {
    "added": [],
    "category": "market",
    "date": "2026-12-18",
    "effective": "2026年12月18日收盘后",
    "funds": [
      "SPY",
      "VOO",
      "IVV",
      "MDY",
      "IJH",
      "SLY"
    ],
    "id": "market-20261218-rebalance",
    "importance": "medium",
    "indexName": "标普500、标普中盘400、标普小盘600",
    "notes": "NYSE 2026 交易日历列出12月第三个星期五的指数再平衡；纳入/移出名单通常在临近窗口由指数公司公布。",
    "removed": [],
    "status": "窗口已排期 · 纳入/移出名单待官方公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "指数基金被动调仓 · 标普500/400/600",
    "url": "https://www.nyse.com/publicdocs/nyse/ICE_NYSE_2026_Yearly_Trading_Calendar.pdf"
  },
  {
    "added": [],
    "category": "market",
    "date": "2026-12-21",
    "effective": "2026年12月21日开盘",
    "funds": [
      "QQQ",
      "QQQM"
    ],
    "id": "market-20261221-nasdaq100",
    "importance": "high",
    "indexName": "纳斯达克-100",
    "notes": "Nasdaq 方法论规定年度重构在12月第三个星期五后的首个交易日开盘生效；官方名单发布后会补充纳入和移出公司。",
    "removed": [],
    "status": "年度窗口已排期 · 纳入/移出名单待官方公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "指数基金被动调仓 · 纳斯达克-100年度重构",
    "url": "https://indexes.nasdaqomx.com/docs/Methodology_NDX_Effective_May_1_2026.pdf"
  },
  {
    "category": "market",
    "date": "2026-12-24",
    "id": "market-20261224",
    "importance": "medium",
    "notes": "Nasdaq 与 NYSE 预计美国东部时间13:00提前收市；期权市场规则可能不同。",
    "subtype": "holiday",
    "time": "13:00",
    "title": "美股提前收市 · 圣诞节前夕",
    "url": "https://www.nasdaq.com/market-activity/stock-market-holiday-schedule"
  },
  {
    "category": "market",
    "date": "2026-12-25",
    "id": "market-20261225",
    "importance": "high",
    "notes": "Nasdaq 与 NYSE 均休市。",
    "subtype": "holiday",
    "time": "",
    "title": "美股休市 · 圣诞节",
    "url": "https://www.nasdaq.com/market-activity/stock-market-holiday-schedule"
  },
  {
    "category": "market",
    "date": "2026-12-31",
    "id": "market-20261231-quarterly",
    "importance": "medium",
    "notes": "NYSE 2026 交易日历列明12月31日为季度期权到期日。",
    "subtype": "expiry",
    "time": "",
    "title": "季度期权到期 · 12月末",
    "url": "https://www.nyse.com/publicdocs/nyse/ICE_NYSE_2026_Yearly_Trading_Calendar.pdf"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-09-24",
    "id": "earnings-cost-20260924",
    "importance": "medium",
    "notes": "官方电话会：9月24日14:00太平洋夏令时PDT（UTC−07:00），即17:00纽约EDT；财报材料发布时间未在此页明确。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-25 05:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "largecap",
    "time": "17:00",
    "title": "COST 好市多 · FY2026 Q4 财报电话会（已确认）",
    "url": "https://investor.costco.com/events-and-presentations/events/event-details/2026/Q4-2026-Earnings-Call/default.aspx"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-09-30",
    "id": "earnings-mu-20260930",
    "importance": "high",
    "notes": "官方电话会：9月30日14:30山地夏令时MDT（UTC−06:00），即16:30纽约EDT；不将电话会时刻当作材料发布时间。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-01 04:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "techhot",
    "time": "16:30",
    "title": "MU 美光科技 · FY2026 Q4 财报电话会（已确认）",
    "url": "https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-Fourth-Quarter-Results-on-September-30-2026/default.aspx"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-20",
    "id": "earnings-nflx-20261020",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "largecap",
    "time": "",
    "title": "NFLX 奈飞 · 2026年第三季度财报（预计）",
    "url": "https://ir.netflix.net/investor-news-and-events/investor-events/default.aspx"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-22",
    "id": "earnings-amzn-20261022",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "largecap",
    "time": "",
    "title": "AMZN 亚马逊 · 2026年第三季度财报（预计）",
    "url": "https://ir.aboutamazon.com/events/default.aspx"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-27",
    "id": "earnings-googl-20261027",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "largecap",
    "time": "",
    "title": "GOOGL 谷歌 · 2026年第三季度财报（预计）",
    "url": "https://abc.xyz/investor/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-27",
    "id": "earnings-msft-20261027",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "largecap",
    "time": "",
    "title": "MSFT 微软 · 2027财年第一季度财报（预计）",
    "url": "https://www.microsoft.com/en-us/investor/faq"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-28",
    "id": "earnings-meta-20261028",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "largecap",
    "time": "",
    "title": "META 元平台 · 2026年第三季度财报（预计）",
    "url": "https://investor.atmeta.com/investor-events/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-28",
    "id": "earnings-tsla-20261028",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "largecap",
    "time": "",
    "title": "TSLA 特斯拉 · 2026年第三季度财报（预计）",
    "url": "https://ir.tesla.com/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-29",
    "id": "earnings-aapl-20261029",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "largecap",
    "time": "",
    "title": "AAPL 苹果 · 2026财年第四季度财报（预计）",
    "url": "https://investor.apple.com/investor-relations/default.aspx"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-11-03",
    "id": "earnings-amd-20261103",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "techhot",
    "time": "",
    "title": "AMD 超威半导体 · 2026年第三季度财报（预计）",
    "url": "https://ir.amd.com/news-events/ir-calendar"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "预计 · 日期及时间待公司官方确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-11-09",
    "id": "earnings-pltr-20261109",
    "importance": "high",
    "notes": "保留仓库原有预计日期作为观察占位；本次读取公司官方 IR 未核验到该日的正式公告，链接仅作后续核对入口，不证明此日期；具体日期与时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "预计 · 日期及时间待公司官方确认",
    "subtype": "techhot",
    "time": "",
    "title": "PLTR 帕兰提尔 · 2026年第三季度财报（预计）",
    "url": "https://investors.palantir.com/events"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-11-19",
    "id": "earnings-wmt-20261119",
    "importance": "high",
    "notes": "官方活动时刻11月19日07:00美国中部标准时间CST（UTC−06:00），即08:00纽约EST。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-19 21:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "largecap",
    "time": "08:00",
    "title": "WMT 沃尔玛 · FY2027 Q3 财报电话会（已确认）",
    "url": "https://corporate.walmart.com/news/events/fy2027-q3-earnings-release"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-11-17",
    "id": "earnings-nvda-20261117",
    "importance": "high",
    "notes": "NVIDIA官方IR发布的8月26日电话会记录明确下一次财报电话会为11月17日；未给出精确时刻，保持空白。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "largecap",
    "time": "",
    "title": "NVDA 英伟达 · FY2027 Q3 财报电话会（已确认）",
    "url": "https://investor.nvidia.com/files/content_files/TRANSCRIPT_-NVIDIA-Corp-NVDA-US-Q2-2027-Earnings-Call-26-August-2026-5_00-PM-ET.pdf"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-09",
    "id": "company-aapl-20260909",
    "importance": "high",
    "notes": "苹果官方：9月9日10:00太平洋夏令时PDT（UTC−07:00），即13:00纽约EDT、北京时间9月10日01:00。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-10 01:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "product",
    "time": "13:00",
    "title": "AAPL 苹果 · 秋季产品发布会（已确认）",
    "url": "https://developer.apple.com/hello/september26/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-04",
    "id": "company-amd-20260904",
    "importance": "medium",
    "notes": "AMD 官方活动页列出 9 月 4–8 日 IFA Berlin 2026，主题为 Personal AI。 日历按开始日记录；9月4–8日柏林当地日期（Europe/Berlin，CEST），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "AMD 超威半导体 · IFA 柏林 2026（已确认）",
    "url": "https://www.amd.com/en/corporate/events.html"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-10",
    "id": "company-nvda-20260910",
    "importance": "medium",
    "notes": "NVIDIA官方IR：9月10日08:50太平洋夏令时PDT，即11:50纽约EDT、北京时间23:50。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-10 23:50。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "11:50",
    "title": "NVDA 英伟达 · 高盛科技会议（已确认）",
    "url": "https://investor.nvidia.com/events-and-presentations/events-and-presentations/event-details/2026/Goldman-Sachs-Communacopia--Technology-Conference-2026-dNGa4j3cy5/default.aspx"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-15",
    "id": "company-nvda-20260915",
    "importance": "high",
    "notes": "NVIDIA 官方页面确认 AI Infra Summit 2026 为 9 月 15–17 日在 Santa Clara 举行。 日历按开始日记录；9月15–17日圣克拉拉当地日期（America/Los_Angeles，PDT），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "NVDA 英伟达 · AI 基础设施峰会（已确认）",
    "url": "https://www.nvidia.com/en-us/events/ai-infra-summit/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-23",
    "id": "company-meta-20260923",
    "importance": "high",
    "notes": "Meta 官方公布 Connect 2026 为 9 月 23–24 日，地点为 Menlo Park。 日历按开始日记录；9月23–24日门洛帕克当地日期（America/Los_Angeles，PDT），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "META 元平台 · Connect 开发者大会（已确认）",
    "url": "https://www.meta.com/blog/connect-2026-save-the-date/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-22",
    "id": "company-nvda-20260922",
    "importance": "medium",
    "notes": "NVIDIA 官方 AI Days 页面列出新加坡站为 9 月 22–23 日。 日历按开始日记录；9月22–23日新加坡当地日期（Asia/Singapore，UTC+08:00），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "NVDA 英伟达 · AI Day 新加坡（已确认）",
    "url": "https://www.nvidia.com/en-us/ai-days/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-29",
    "id": "company-amd-20260929",
    "importance": "low",
    "notes": "AMD 官方活动页列出 9 月 29 日在 Krakow 举行的 ECS Global Series。 日历按开始日记录；9月29日克拉科夫当地日期（Europe/Warsaw，CEST），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "AMD 超威半导体 · 嵌入式计算峰会（已确认）",
    "url": "https://www.amd.com/en/corporate/events.html"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-10-01",
    "id": "company-amd-20261001-ecs",
    "importance": "low",
    "notes": "AMD 官方活动页列出 10 月 1 日在 Frankfurt 举行的 ECS Global Series。日历按当地日期记录；法兰克福采用 Europe/Berlin（CEST），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "AMD 超威半导体 · 嵌入式计算峰会·法兰克福站（已确认）",
    "url": "https://www.amd.com/en/corporate/events.html"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-10-08",
    "id": "company-amd-20261008-ecs",
    "importance": "low",
    "notes": "AMD 官方活动页列出 10 月 8 日在 Paris 举行的 ECS Global Series。日历按当地日期记录；巴黎采用 Europe/Paris（CEST），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "AMD 超威半导体 · 嵌入式计算峰会·巴黎站（已确认）",
    "url": "https://www.amd.com/en/corporate/events.html"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-10-12",
    "id": "company-amd-20261012",
    "importance": "medium",
    "notes": "AMD 官方活动页列出 10 月 12–15 日在 San Jose 举行的 OCP Global Summit。 日历按开始日记录；10月12–15日圣何塞当地日期（America/Los_Angeles，PDT），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "AMD 超威半导体 · OCP 全球峰会（已确认）",
    "url": "https://www.amd.com/en/corporate/events.html"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-10-21",
    "id": "company-nvda-20261021",
    "importance": "high",
    "notes": "NVIDIA 8 月 26 日财报电话会记录列出 Jensen Huang 10 月 21 日 GTC Berlin keynote。 日历按开始日记录；10月21日柏林当地日期（Europe/Berlin，CEST），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "NVDA 英伟达 · GTC 柏林主题演讲（已确认）",
    "url": "https://investor.nvidia.com/files/content_files/TRANSCRIPT_-NVIDIA-Corp-NVDA-US-Q2-2027-Earnings-Call-26-August-2026-5_00-PM-ET.pdf"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-11-17",
    "id": "company-msft-20261117",
    "importance": "high",
    "notes": "Microsoft 官方活动页确认 Ignite 2026 为 11 月 17–20 日在旧金山举行。 日历按开始日记录；11月17–20日旧金山当地日期（America/Los_Angeles，PST），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "MSFT 微软 · Ignite 技术大会（已确认）",
    "url": "https://www.microsoft.com/en-us/events"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-11-09",
    "id": "company-nvda-20261109",
    "importance": "medium",
    "notes": "NVIDIA 官方 AI Days 页面列出首尔站为 11 月 9–10 日。 日历按开始日记录；11月9–10日首尔当地日期（Asia/Seoul，UTC+09:00），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "NVDA 英伟达 · AI Day 首尔（已确认）",
    "url": "https://www.nvidia.com/en-us/ai-days/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-11-30",
    "id": "company-amzn-20261130",
    "importance": "high",
    "notes": "AWS 官方页面确认 re:Invent 2026 为 11 月 30 日–12 月 4 日在拉斯维加斯举行。 日历按开始日记录；11月30日–12月4日拉斯维加斯当地日期（America/Los_Angeles，PST），具体议程时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "product",
    "time": "",
    "title": "AMZN 亚马逊 · AWS re:Invent 云计算大会（已确认）",
    "url": "https://aws.amazon.com/events/reinvent/"
  },
  {
    "category": "company",
    "date": "2026-09-03",
    "id": "tsla-20260903",
    "importance": "high",
    "notes": "Tesla 官方活动页列出奥斯汀活动窗口为 2026 年 8 月 17 日–9 月 3 日；用户所称“Saber Cup”应为 Cybercab。",
    "subtype": "product",
    "time": "",
    "title": "TSLA 特斯拉 · Cybercab 发布会（已确认）",
    "url": "https://www.tesla.com/en_ae/event/cybercab-event-sweepstakes"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-09",
    "id": "cloud-macro-20260909-1000",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-09 22:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "10:00",
    "title": "雇主雇佣成本 · 2026年6月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-16",
    "id": "cloud-macro-20260916-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-16 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "进出口价格指数 · 8月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-16",
    "id": "cloud-macro-20261016-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-16 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "进出口价格指数 · 9月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-17",
    "id": "cloud-macro-20261117-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-17 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "进出口价格指数 · 10月",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-30",
    "id": "cloud-macro-20261030-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-30 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "雇佣成本指数 ECI · 第三季度",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-05",
    "id": "cloud-macro-20261105-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-05 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "生产率与单位劳动力成本 · 第三季度初值",
    "url": "https://www.bls.gov/schedule/2026/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-24",
    "id": "cloud-macro-20260924-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-24 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "美国国际交易与投资头寸 · 第二季度",
    "url": "https://www.bea.gov/news/schedule/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-06",
    "id": "cloud-macro-20261006-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-06 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "美国商品与服务贸易 · 8月",
    "url": "https://www.bea.gov/news/schedule/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-04",
    "id": "cloud-macro-20261104-0830",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-04 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "08:30",
    "title": "美国商品与服务贸易 · 9月",
    "url": "https://www.bea.gov/news/schedule/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-09-16",
    "id": "cloud-fed-20260916-1430",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-17 02:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "sep"
    ],
    "time": "14:30",
    "title": "FOMC 新闻发布会（已确认）",
    "url": "https://www.federalreserve.gov/newsevents/2026-september.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-10-28",
    "id": "cloud-fed-20261028-1430",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-29 02:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "sep"
    ],
    "time": "14:30",
    "title": "FOMC 新闻发布会（已确认）",
    "url": "https://www.federalreserve.gov/newsevents/2026-october.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-10-14",
    "id": "cloud-fed-20261014-1400",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-15 02:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "other"
    ],
    "time": "14:00",
    "title": "美联储褐皮书",
    "url": "https://www.federalreserve.gov/newsevents/2026-october.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-11-25",
    "id": "cloud-fed-20261125-1400",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-26 03:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "other"
    ],
    "time": "14:00",
    "title": "美联储褐皮书",
    "url": "https://www.federalreserve.gov/newsevents/2026-november.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-09-18",
    "id": "cloud-macro-20260918-0915",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-18 21:15。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "09:15",
    "title": "工业产出与产能利用率 · 8月",
    "url": "https://www.federalreserve.gov/newsevents/2026-september.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-10-16",
    "id": "cloud-macro-20261016-0915",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-16 21:15。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "09:15",
    "title": "工业产出与产能利用率 · 9月",
    "url": "https://www.federalreserve.gov/newsevents/2026-october.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：结合就业、通胀及前值修订判断利率预期；方向取决于实际数据相对可靠预期的偏差。"
    },
    "category": "macro",
    "date": "2026-11-17",
    "id": "cloud-macro-20261117-0915",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-17 22:15。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "time": "09:15",
    "title": "工业产出与产能利用率 · 10月",
    "url": "https://www.federalreserve.gov/newsevents/2026-november.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：措辞、通胀判断及政策路径变化可能影响美债收益率和成长股估值。"
    },
    "category": "fed",
    "date": "2026-11-02",
    "id": "cloud-fed-20261102-1400",
    "importance": "medium",
    "notes": "官方发布日历已列明日期与时刻；实际内容待发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-03 03:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtypes": [
      "other"
    ],
    "time": "14:00",
    "title": "高级贷款官银行放贷调查 SLOOS",
    "url": "https://www.federalreserve.gov/newsevents/2026-november.htm"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-09-10",
    "id": "earnings-orcl-20260910",
    "importance": "high",
    "notes": "财报于美国股市收盘后发布，精确发布时间待确认；电话会16:00美国中部夏令时CDT，即17:00纽约EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-11 05:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "largecap",
    "time": "17:00",
    "title": "ORCL 甲骨文 · FY2027 Q1 财报电话会（已确认）",
    "url": "https://investor.oracle.com/investor-news/news-details/2026/Oracle-Sets-the-Date-for-its-First-Quarter-Fiscal-Year-2027-Earnings-Announcement/default.aspx"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-13",
    "id": "earnings-jpm-20261013",
    "importance": "high",
    "notes": "官方电话会08:30美国东部时间；财报材料约06:45发布，约数不作为精确时刻。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-13 20:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "largecap",
    "time": "08:30",
    "title": "JPM 摩根大通 · 2026 Q3 财报电话会（已确认）",
    "url": "https://www.jpmorganchase.com/ir/news/2025/jpmc-announces-conference-calls-to-review-first-quarter-second-quarter-third-quarter-and-fourth-quarter-2026-earnings"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-10-29",
    "id": "earnings-lly-20261029",
    "importance": "high",
    "notes": "官方IR列出10月29日10:00 EDT电话会；材料发布时间待确认。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-29 22:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "largecap",
    "time": "10:00",
    "title": "LLY 礼来 · 2026 Q3 财报电话会（已确认）",
    "url": "https://investor.lilly.com/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注收入、利润率和下一季指引；超预期或指引变化可能放大股价波动。"
    },
    "category": "earnings",
    "date": "2026-11-04",
    "id": "earnings-arm-20261104",
    "importance": "high",
    "notes": "官方年度财报计划列出11月4日；本次未核验到电话会精确时刻。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "techhot",
    "time": "",
    "title": "ARM 安谋 · FY2027 Q2 财报（已确认）",
    "url": "https://investors.arm.com/news-events/investor-events-presentations"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-08",
    "id": "company-amd-20260908-0930",
    "importance": "medium",
    "notes": "官方时刻09:30 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-08 21:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "09:30",
    "title": "AMD · Citi 全球TMT会议（已确认）",
    "url": "https://ir.amd.com/news-events/ir-calendar"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-11",
    "id": "company-amd-20260911-1150",
    "importance": "medium",
    "notes": "官方时刻08:50 PDT，折合11:50 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-11 23:50。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "11:50",
    "title": "AMD · 高盛科技会议（已确认）",
    "url": "https://ir.amd.com/news-events/ir-calendar"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-14",
    "id": "company-lly-20260914-1350",
    "importance": "medium",
    "notes": "官方时刻13:50 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-15 01:50。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "13:50",
    "title": "LLY 礼来 · 摩根士丹利医疗会议（已确认）",
    "url": "https://investor.lilly.com/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期已确认；具体时刻待确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-10-06",
    "id": "company-mrvl-20261006-investorday",
    "importance": "medium",
    "notes": "官方宣布10月6日纽约上午举行，精确时刻待确认。",
    "status": "日期已确认；具体时刻待确认",
    "subtype": "investorday",
    "time": "",
    "title": "MRVL 迈威尔 · 投资者日（已确认）",
    "url": "https://investor.marvell.com/news-events/ir-calendar"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-09",
    "id": "company-xom-20260909-0800",
    "importance": "medium",
    "notes": "官方时刻08:00美国东部时间。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-09 20:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "08:00",
    "title": "XOM 埃克森美孚 · 巴克莱能源会议（已确认）",
    "url": "https://investor.exxonmobil.com/company-information/press-releases/detail/1209/exxonmobil-to-speak-at-barclays-40th-annual-energy-power"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-15",
    "id": "company-jpm-20260915-1445",
    "importance": "medium",
    "notes": "官方时刻14:45美国东部时间。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-16 02:45。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "14:45",
    "title": "JPM 摩根大通 · 巴克莱金融服务会议（已确认）",
    "url": "https://www.jpmorganchase.com/ir/news/2026/jpmc-to-present-at-the-barclays-global-financial-services-conference"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-09",
    "id": "company-wmt-20260909-1430",
    "importance": "medium",
    "notes": "官方时刻13:30美国中部夏令时CDT，折合14:30 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-10 02:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "14:30",
    "title": "WMT 沃尔玛 · 高盛科技会议（已确认）",
    "url": "https://corporate.walmart.com/news/2026/09/q3-leadership-investor-events"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-15",
    "id": "company-wmt-20260915-1235",
    "importance": "medium",
    "notes": "官方时刻11:35 CDT，折合12:35 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-16 00:35。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "12:35",
    "title": "WMT 沃尔玛 · 高盛全球零售会议（已确认）",
    "url": "https://corporate.walmart.com/news/2026/09/q3-leadership-investor-events"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-16",
    "id": "company-wmt-20260916-1200",
    "importance": "medium",
    "notes": "官方时刻11:00 CDT，折合12:00 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-17 00:00。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "12:00",
    "title": "WMT 沃尔玛 · Piper Sandler会议（已确认）",
    "url": "https://corporate.walmart.com/news/2026/09/q3-leadership-investor-events"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-03",
    "id": "company-crwd-20260903-1230",
    "importance": "medium",
    "notes": "官方时刻09:30 PDT，折合12:30 EDT；核验时尚未开始。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "product",
    "time": "12:30",
    "title": "CRWD 众击 · Fal.Con 第三日主题演讲（已确认）",
    "url": "https://ir.crowdstrike.com/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-10",
    "id": "company-crwd-20260910-1130",
    "importance": "medium",
    "notes": "官方时刻11:30 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-10 23:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "11:30",
    "title": "CRWD 众击 · Citi 全球TMT会议（已确认）",
    "url": "https://ir.crowdstrike.com/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-10",
    "id": "company-crwd-20260910-1645",
    "importance": "medium",
    "notes": "官方时刻13:45 PDT，折合16:45 EDT。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-11 04:45。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "other",
    "time": "16:45",
    "title": "CRWD 众击 · 高盛科技会议（已确认）",
    "url": "https://ir.crowdstrike.com/"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-09-10",
    "id": "company-tsm-20260910",
    "importance": "medium",
    "notes": "官方时间13:30台北（Asia/Taipei，UTC+08:00），等于北京时间13:30；实际营收待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-09-10 13:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "delivery",
    "time": "01:30",
    "title": "TSM 台积电 · 8月营收（已确认）",
    "url": "https://investor.tsmc.com/english/financial-calendar"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-10-08",
    "id": "company-tsm-20261008",
    "importance": "medium",
    "notes": "官方时间13:30台北（Asia/Taipei，UTC+08:00），等于北京时间13:30；实际营收待发布。 时间统一按纽约EDT（UTC−04:00）记录；北京时间2026-10-08 13:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "delivery",
    "time": "01:30",
    "title": "TSM 台积电 · 9月营收（已确认）",
    "url": "https://investor.tsmc.com/english/financial-calendar"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "日期时间已确认",
      "view": "影响判断：关注可验证的产品进度、客户需求及资本开支信息，活动本身不代表新增业绩。"
    },
    "category": "company",
    "date": "2026-11-10",
    "id": "company-tsm-20261110",
    "importance": "medium",
    "notes": "官方时间13:30台北（Asia/Taipei，UTC+08:00），等于北京时间13:30；实际营收待发布。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-10 13:30。",
    "sourceTimeZone": "America/New_York",
    "status": "日期时间已确认",
    "subtype": "delivery",
    "time": "00:30",
    "title": "TSM 台积电 · 10月营收（已确认）",
    "url": "https://investor.tsmc.com/english/financial-calendar"
  },
  {
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "官方安排已确认",
      "view": "影响判断：关注流动性、到期及收盘竞价带来的短期波动。"
    },
    "category": "market",
    "date": "2026-11-27",
    "id": "market-20261127-options",
    "importance": "medium",
    "notes": "仅适用于NYSE官方所称 eligible options；13:15美国东部标准时间EST。不能推广为所有交易所和所有期权。 时间统一按纽约EST（UTC−05:00）记录；北京时间2026-11-28 02:15。",
    "sourceTimeZone": "America/New_York",
    "status": "官方安排已确认",
    "subtype": "expiry",
    "time": "13:15",
    "title": "NYSE 合资格期权提前收市（已确认）",
    "url": "https://www.nyse.com/trade/hours-calendars"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "方法论推算公告窗口 · 名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-09-11",
    "effective": "预计2026年9月21日纽约开盘（EDT），以本轮公告为准",
    "funds": [
      "QQQ",
      "QQQM"
    ],
    "id": "market-20260911-nasdaq-notice",
    "importance": "medium",
    "indexName": "纳斯达克-100",
    "notes": "按官方方法论，9月21日生效前第六个交易日为9月11日；公告在美国收盘后，精确时刻和本轮名单待公告。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "removed": [],
    "status": "方法论推算公告窗口 · 名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "纳斯达克-100 · 季度调整公告窗口（预计）",
    "url": "https://indexes.nasdaq.com/docs/Methodology_NDX.pdf"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "公告日及生效日已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-11-11",
    "effective": "2026年12月1日生效；各市场实施时刻以本轮正式公告为准",
    "funds": [
      "各类 MSCI 跟踪 ETF / 指数基金（具体受影响基金待公告）"
    ],
    "id": "market-20261111-msci-notice",
    "importance": "medium",
    "indexName": "MSCI全球可投资市场相关指数",
    "notes": "官方列明11月11日公告、12月1日生效；未给出统一公告时刻，保持空白。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "removed": [],
    "status": "公告日及生效日已确认 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "MSCI · 11月指数审议名单公告日",
    "url": "https://app2.msci.com/eqb/pressreleases/archive/ir_dates.pdf"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "公告日及生效日已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-12-01",
    "effective": "2026年12月1日生效；各市场实施时刻以本轮正式公告为准",
    "funds": [
      "各类 MSCI 跟踪 ETF / 指数基金（具体受影响基金待公告）"
    ],
    "id": "market-20261201-msci-effective",
    "importance": "medium",
    "indexName": "MSCI全球可投资市场相关指数",
    "notes": "官方生效日期为12月1日；此前的11月30日记录是月末实施观察窗口。不同市场按各自时区处理。",
    "removed": [],
    "status": "公告日及生效日已确认 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "MSCI · 11月指数审议生效日",
    "url": "https://app2.msci.com/eqb/pressreleases/archive/ir_dates.pdf"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "时间表已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-11-13",
    "effective": "2026年12月11日美国股市收盘后（纽约EST）；12月14日开盘使用新指数",
    "funds": [
      "IWB",
      "IWM",
      "IWV"
    ],
    "id": "market-20261113-russell-notice",
    "importance": "medium",
    "indexName": "Russell 1000/2000/3000",
    "notes": "美国股市收盘后公布首批纳入与移出名单，精确时刻待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "removed": [],
    "status": "时间表已确认 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "Russell 半年度重构 · 初步名单公告",
    "url": "https://www.lseg.com/en/media-centre/press-releases/ftse-russell/2026/ftse-russell-announces-december-2026-russell-us-indexes-reconstitution-schedule"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "时间表已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-11-20",
    "effective": "2026年12月11日美国股市收盘后（纽约EST）；12月14日开盘使用新指数",
    "funds": [
      "IWB",
      "IWM",
      "IWV"
    ],
    "id": "market-20261120-russell-notice",
    "importance": "medium",
    "indexName": "Russell 1000/2000/3000",
    "notes": "官方更新日已列明，精确发布时间待确认。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "removed": [],
    "status": "时间表已确认 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "Russell 半年度重构 · 初步名单更新",
    "url": "https://www.lseg.com/en/ftse-russell/russell-reconstitution"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "时间表已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-11-27",
    "effective": "2026年12月11日美国股市收盘后（纽约EST）；12月14日开盘使用新指数",
    "funds": [
      "IWB",
      "IWM",
      "IWV"
    ],
    "id": "market-20261127-russell-notice",
    "importance": "medium",
    "indexName": "Russell 1000/2000/3000",
    "notes": "官方更新日已列明；当天美国股票市场提前收市，不能将公告时刻猜定为16:00。",
    "removed": [],
    "status": "时间表已确认 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "Russell 半年度重构 · 初步名单更新",
    "url": "https://www.lseg.com/en/ftse-russell/russell-reconstitution"
  },
  {
    "added": [],
    "analysis": {
      "consensus": "暂无可靠一致预期",
      "progress": "时间表已确认 · 纳入/移出名单待公告",
      "view": "影响判断：调仓可能增加收盘竞价成交；名单、权重和流动性决定影响，尚不能估算个股被动资金规模。"
    },
    "category": "market",
    "date": "2026-11-30",
    "effective": "2026年12月11日美国股市收盘后（纽约EST）；12月14日开盘使用新指数",
    "funds": [
      "IWB",
      "IWM",
      "IWV"
    ],
    "id": "market-20261130-russell-notice",
    "importance": "medium",
    "indexName": "Russell 1000/2000/3000",
    "notes": "官方锁定期开始日；不等于调仓生效日，最终调整在12月11日收盘后。 具体时刻待确认；无时刻日期不做跨时区换日。",
    "removed": [],
    "status": "时间表已确认 · 纳入/移出名单待公告",
    "subtypes": [
      "passive",
      "rebalance"
    ],
    "time": "",
    "title": "Russell 半年度重构 · 名单锁定期开始",
    "url": "https://www.lseg.com/en/media-centre/press-releases/ftse-russell/2026/ftse-russell-announces-december-2026-russell-us-indexes-reconstitution-schedule"
  },
  {
    "id": "cloud-macro-20261202-0830",
    "date": "2026-12-02",
    "time": "08:30",
    "title": "美国县级GDP与个人收入 · 2025年",
    "category": "macro",
    "importance": "medium",
    "url": "https://www.bea.gov/news/schedule/",
    "notes": "BEA 2026年发布表于9月4日更新，确认该项于12月2日美国东部时间08:30发布。",
    "status": "日期时间已确认",
    "analysis": {
      "progress": "BEA 官方发布日程已确认。",
      "consensus": "暂无可靠一致预期",
      "view": "影响判断：属于区域经济补充数据，通常对大盘即时影响有限，可用于观察地区增长和收入分化。"
    }
  },
  {
    "id": "cloud-macro-20261202-1000",
    "date": "2026-12-02",
    "time": "10:00",
    "title": "县级就业与工资 · 2026年第二季度",
    "category": "macro",
    "importance": "medium",
    "url": "https://www.bls.gov/schedule/2026/",
    "notes": "BLS 2026年发布日程确认该项于12月2日美国东部时间10:00发布。",
    "status": "日期时间已确认",
    "analysis": {
      "progress": "BLS 官方发布日程已确认。",
      "consensus": "暂无可靠一致预期",
      "view": "影响判断：属于区域劳动力市场补充数据，通常不主导当日利率定价，但有助于判断就业与工资的地区分布。"
    }
  }
];

const categoryNames = { macro: '宏观数据', fed: '美联储', earnings: '财报', company: '公司事件', market: '市场' };
const weekdays = ['一', '二', '三', '四', '五', '六', '日'];
const SOURCE_TZ = 'America/New_York';
const timezoneNames = { 'America/New_York': '纽约时间 · ET', 'Asia/Shanghai': '北京时间 · CST', 'Asia/Hong_Kong': '香港时间 · HKT', 'Europe/London': '伦敦时间 · GMT/BST', UTC: '协调世界时 · UTC' };
const timezoneChineseNames = { 'America/New_York': '纽约时间', 'Asia/Shanghai': '北京时间', 'Asia/Hong_Kong': '香港时间', 'Europe/London': '伦敦时间', UTC: '协调世界时' };
const fullChineseReplacements = [[/\bMARKET PULSE\b/g, '市场脉搏'], [/\bSELECTED DAY\b/g, '选中日期'], [/\bMARKET BRIEF\b/g, '市场简报'], [/\bSOURCE LINKS\b/g, '来源链接'], [/\bLOCAL EVENT\b/g, '本地事件'], [/\bFederal Reserve\b/g, '美联储'], [/\bNasdaq\b/g, '纳斯达克'], [/\bBLS\b/g, '美国劳工统计局'], [/\bBEA\b/g, '美国经济分析局'], [/\bFOMC\b/g, '联邦公开市场委员会'], [/\bCPI\b/g, '消费者价格指数'], [/\bPPI\b/g, '生产者价格指数'], [/\bGDP\b/g, '国内生产总值'], [/\bPCE\b/g, '个人消费支出'], [/\bJOLTS\b/g, '职位空缺与劳动力流动调查'], [/\bTesla\b/g, '特斯拉'], [/\bCybercab\b/g, '赛博出租车'], [/\bLaunch Event\b/g, '发布会'], [/\bEarnings\b/g, '财报'], [/\bQ([1-4])\b/g, (_, quarter) => `第${quarter}季度`]];
function localizeText(value) { const text = String(value ?? ''); if (state.language !== 'zh') return text; return fullChineseReplacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), text); }
function timezoneLabel(timezone) { return state.language === 'zh' ? timezoneChineseNames[timezone] || timezone : timezoneNames[timezone] || timezone; }
const subfilterDefinitions = {
  macro: { title: '宏观数据子类', options: [['cpi', 'CPI'], ['nfp', '非农'], ['ppi', 'PPI'], ['jolts', 'JOLTS'], ['gdp', 'GDP'], ['pce', 'PCE'], ['claims', '初请失业金'], ['other', '其他']] },
  fed: { title: '美联储子类', options: [['meeting', '会议'], ['decision', '利率决定'], ['minutes', '会议纪要'], ['sep', '经济预测 / 发布会'], ['other', '其他']] },
  earnings: { title: '财报关注池', options: [['largecap', '市值前20核心'], ['techhot', '科技热点公司'], ['other', '自选公司']] },
  company: { title: '公司事件关注池', options: [['product', '产品 / 发布会'], ['investorday', '投资者日'], ['regulatory', '监管 / 许可'], ['delivery', '交付 / 运营'], ['other', '其他']] },
  market: { title: '市场子类', options: [['holiday', '交易所假期'], ['expiry', '期权到期'], ['passive', '指数基金被动调仓'], ['rebalance', '指数再平衡'], ['other', '其他']] }
};
const earningsWatchlists = {
  largecap: [['AAPL', '苹果', '苹果'], ['MSFT', '微软', '微软'], ['NVDA', '英伟达', '英伟达'], ['AMZN', '亚马逊', '亚马逊'], ['GOOGL', '谷歌', '谷歌'], ['META', 'Meta', '元平台'], ['AVGO', '博通', '博通'], ['TSLA', '特斯拉', '特斯拉'], ['TSM', '台积电', '台积电'], ['BRK.B', '伯克希尔', '伯克希尔'], ['WMT', '沃尔玛', '沃尔玛'], ['LLY', '礼来', '礼来'], ['JPM', '摩根大通', '摩根大通'], ['V', 'Visa', '维萨'], ['ORCL', '甲骨文', '甲骨文'], ['NFLX', '奈飞', '奈飞'], ['XOM', '埃克森美孚', '埃克森美孚'], ['MA', '万事达', '万事达'], ['COST', '好市多', '好市多'], ['PG', '宝洁', '宝洁']],
  techhot: [['AMD', '超威半导体', '超威半导体'], ['PLTR', 'Palantir', '帕兰提尔'], ['ARM', 'Arm', '安谋'], ['MU', '美光科技', '美光科技'], ['MRVL', '迈威尔科技', '迈威尔科技'], ['SNOW', 'Snowflake', '雪花科技'], ['CRWD', 'CrowdStrike', '众击网络'], ['NOW', 'ServiceNow', '服务诺'], ['UBER', 'Uber', '优步'], ['COIN', 'Coinbase', '币库']]
};
const defaultSubfilters = Object.fromEntries(Object.entries(subfilterDefinitions).map(([category, definition]) => [category, Object.fromEntries(definition.options.map(([key]) => [key, true]))]));
const storage = (() => { try { const value = window.localStorage; const probe = '__market_pulse_probe__'; value.setItem(probe, '1'); value.removeItem(probe); return value; } catch (_) { return { getItem: () => null, setItem: () => {}, removeItem: () => {}, key: () => null, length: 0 }; } })();
const defaultFilters = { macro: true, fed: true, earnings: true, company: true, market: true };
let savedFilters = {}; try { savedFilters = JSON.parse(storage.getItem('market-pulse-filters-v1') || '{}'); } catch (_) {}
let savedSubfilters = {}; try { savedSubfilters = JSON.parse(storage.getItem('market-pulse-subfilters-v1') || '{}'); } catch (_) {}
const savedTimezone = storage.getItem('market-pulse-timezone-v1');
const savedLanguage = storage.getItem('market-pulse-language-v1');
const state = { cursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1), selected: '', filters: { ...defaultFilters, ...savedFilters }, subfilters: Object.fromEntries(Object.entries(defaultSubfilters).map(([category, values]) => [category, { ...values, ...(savedSubfilters[category] || {}) }])), openGear: null, language: savedLanguage === 'zh' ? 'zh' : 'mixed', timezone: timezoneNames[savedTimezone] ? savedTimezone : SOURCE_TZ, events: [], history: {}, historyDate: null, historyVersion: null, historyCursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1), uiBeforeHistory: null };
state.selected = (() => { const p = getZonedParts(new Date(), state.timezone); return keyFromParts(p.year, p.month, p.day); })();

function keyFromParts(year, month, day) { return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`; }
function localDateKey(date) { return keyFromParts(date.getFullYear(), date.getMonth() + 1, date.getDate()); }
function parseDate(key) { const [y, m, d] = key.split('-').map(Number); return new Date(y, m - 1, d); }
function formatMonth(date) { return `${date.getFullYear()}年${date.getMonth() + 1}月`; }
function formatLongDate(key) { const date = parseDate(key); return `${date.getMonth() + 1}月${date.getDate()}日 · 周${weekdays[(date.getDay() + 6) % 7]}`; }
function timezoneOffsetMillis(date, timezone) { const part = new Intl.DateTimeFormat('en-US', { timeZone: timezone, timeZoneName: 'longOffset' }).formatToParts(date).find(item => item.type === 'timeZoneName'); const value = part?.value || 'GMT'; if (value === 'GMT' || value === 'UTC') return 0; const match = value.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/); if (!match) return 0; const minutes = Number(match[2]) * 60 + Number(match[3] || 0); return (match[1] === '+' ? 1 : -1) * minutes * 60 * 1000; }
function getZonedParts(date, timezone) { const parts = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date); const result = {}; parts.forEach(part => { if (['year', 'month', 'day', 'hour', 'minute'].includes(part.type)) result[part.type] = Number(part.value); }); return result; }
function eventInstant(event) { if (!event.time) return null; const [y, m, d] = event.date.split('-').map(Number); const [h, min] = event.time.split(':').map(Number); const naiveUtc = Date.UTC(y, m - 1, d, h, min); const timezone = event.sourceTimeZone || SOURCE_TZ; return new Date(naiveUtc - timezoneOffsetMillis(new Date(naiveUtc), timezone)); }
function eventDisplayDate(event) { const instant = eventInstant(event); if (!instant) return event.date; const parts = getZonedParts(instant, state.timezone); return keyFromParts(parts.year, parts.month, parts.day); }
function formatEventTime(event) { if (!event.time) return `全天 · ${timezoneLabel(state.timezone)}`; const parts = getZonedParts(eventInstant(event), state.timezone); return `${String(parts.hour).padStart(2, '0')}:${String(parts.minute).padStart(2, '0')} · ${timezoneLabel(state.timezone)}`; }
function todayKey() { const p = getZonedParts(new Date(), state.timezone); return keyFromParts(p.year, p.month, p.day); }
function calendarTodayKey() { return state.historyDate || todayKey(); }
function horizonEndKey() { const end = parseDate(calendarTodayKey()); end.setDate(end.getDate() + 90); return localDateKey(end); }
function snapshotEventFields(event) { return { id: event.id, date: event.date, time: event.time || '', title: event.title || '', category: event.category || '', subtype: event.subtype || '', subtypes: event.subtypes || [], importance: event.importance || '', url: event.url || '', notes: event.notes || '', indexName: event.indexName || '', funds: event.funds || [], added: event.added || [], removed: event.removed || [], effective: event.effective || '', status: event.status || '', analysis: event.analysis || {} }; }
function eventSignature(event) { return JSON.stringify(snapshotEventFields(event)); }
function eventsSignature(events) { return events.map(event => `${event.id}:${eventSignature(event)}`).sort().join('|'); }
function cloneData(value) { return JSON.parse(JSON.stringify(value)); }
function loadHistorySnapshots() { let saved = {}; try { saved = JSON.parse(storage.getItem(HISTORY_STORAGE_KEY) || '{}'); } catch (_) {} state.history = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {}; }
function saveHistorySnapshots() { try { storage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(state.history)); } catch (_) {} }
function historyDates() { return Object.keys(state.history).filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key)).sort(); }
function rawHistoryVersions(date) { const value = state.history[date]; if (Array.isArray(value)) return value; if (value && Array.isArray(value.versions)) return value.versions; return value && typeof value === 'object' ? [value] : []; }
function historyVersions(date) { return rawHistoryVersions(date).map((record, index) => ({ ...record, date, versionIndex: index, versionId: record.versionId || `${date}#${index + 1}` })); }
function latestVersionIndex(date) { const versions = historyVersions(date); return versions.length ? versions.length - 1 : -1; }
function resolveSnapshot(date, versionRef = 'latest', seen = new Set()) { const versions = historyVersions(date); if (!versions.length || seen.has(`${date}#${versionRef}`)) return null; const requested = versionRef === 'latest' || versionRef === null || versionRef === undefined ? versions.length - 1 : (typeof versionRef === 'number' ? versionRef : versions.findIndex(record => record.versionId === versionRef)); const index = requested >= 0 && requested < versions.length ? requested : versions.length - 1; const record = versions[index]; seen.add(`${date}#${index}`); let events = record.events; if (!Array.isArray(events) && record.baseDate) events = resolveSnapshot(record.baseDate, record.baseVersion ?? 'latest', seen)?.events; if (!Array.isArray(events)) events = []; return { ...record, date, versionIndex: index, versionId: record.versionId || `${date}#${index + 1}`, events }; }
function latestSnapshotBefore(date) { return historyDates().filter(key => key < date).pop() || null; }
function previousSnapshotFor(current) { if (!current) return null; if (current.versionIndex > 0) return resolveSnapshot(current.date, current.versionIndex - 1); const previousDate = latestSnapshotBefore(current.date); return previousDate ? resolveSnapshot(previousDate, 'latest') : null; }
function activeSnapshot() { if (state.historyDate) return resolveSnapshot(state.historyDate, state.historyVersion ?? 'latest'); const liveDate = todayKey(); return resolveSnapshot(liveDate, 'latest') || { date: liveDate, versionIndex: -1, versionId: `${liveDate}#live`, layoutVersion: CURRENT_LAYOUT_VERSION, events: state.events, lastDataUpdateAt: LAST_DATA_UPDATE_AT, capturedAt: '' }; }
function sourceEvents() { return activeSnapshot()?.events || state.events; }
function snapshotUi() { return { filters: cloneData(state.filters), subfilters: cloneData(state.subfilters), timezone: state.timezone, language: state.language }; }
function diffSnapshots(previous, current) { const empty = { added: [], removed: [], changed: [], changedIds: new Set(), fieldsById: new Map(), hasChanges: false }; if (!previous || !current) return empty; const before = new Map(previous.events.map(event => [event.id, event])); const after = new Map(current.events.map(event => [event.id, event])); const added = [...after.keys()].filter(id => !before.has(id)).map(id => after.get(id)); const removed = [...before.keys()].filter(id => !after.has(id)).map(id => before.get(id)); const changed = []; const fieldsById = new Map(); after.forEach((event, id) => { if (!before.has(id) || eventSignature(before.get(id)) === eventSignature(event)) return; const fields = Object.keys(snapshotEventFields(event)).filter(field => JSON.stringify(snapshotEventFields(before.get(id))[field]) !== JSON.stringify(snapshotEventFields(event)[field])); changed.push({ before: before.get(id), after: event, fields }); fieldsById.set(id, fields); }); const changedIds = new Set([...added.map(event => event.id), ...changed.map(item => item.after.id)]); return { added, removed, changed, changedIds, fieldsById, hasChanges: Boolean(added.length || removed.length || changed.length || previous.layoutVersion !== current.layoutVersion) }; }
function activeDiff() { const current = activeSnapshot(); return diffSnapshots(previousSnapshotFor(current), current); }
function eventChanged(event) { return activeDiff().changedIds.has(event.id); }
function eventFieldChanged(event, field) { return (activeDiff().fieldsById.get(event.id) || []).includes(field); }
function captureHistorySnapshot() { if (state.historyDate) return; const date = todayKey(); const events = state.events.map(event => cloneData(event)); const hash = eventsSignature(events); const ui = snapshotUi(); const versions = historyVersions(date); const previous = versions.length ? versions[versions.length - 1] : (() => { const previousDate = latestSnapshotBefore(date); return previousDate ? resolveSnapshot(previousDate, 'latest') : null; })(); const existing = versions[versions.length - 1]; if (existing && existing.eventHash === hash && existing.lastDataUpdateAt === LAST_DATA_UPDATE_AT && existing.layoutVersion === CURRENT_LAYOUT_VERSION && JSON.stringify(existing.ui || {}) === JSON.stringify(ui)) return; const canReuseEvents = previous && previous.eventHash === hash && previous.layoutVersion === CURRENT_LAYOUT_VERSION; const record = { date, capturedAt: new Date().toISOString(), layoutVersion: CURRENT_LAYOUT_VERSION, eventHash: hash, lastDataUpdateAt: LAST_DATA_UPDATE_AT, ui, versionId: `${date}#${versions.length + 1}` }; if (canReuseEvents) { record.baseDate = previous.date; record.baseVersion = previous.versionIndex; } else record.events = events; state.history[date] = { versions: [...versions.map(({ versionIndex, versionId, ...item }) => item), record] }; saveHistorySnapshots(); }
function historyLabel(date) { const versions = historyVersions(date); const record = resolveSnapshot(date, 'latest'); return record ? `${formatMonth(parseDate(date))} · ${versions.length} 个版本 · ${record.events.length} 项事件` : formatMonth(parseDate(date)); }
function historySnapshotCount() { return historyDates().length; }
function historyVersionCount() { return historyDates().reduce((total, date) => total + historyVersions(date).length, 0); }
function formatSnapshotTime(snapshot) { const value = snapshot?.capturedAt || snapshot?.lastDataUpdateAt; if (!value) return '未记录时间'; const date = new Date(value); if (Number.isNaN(date.getTime())) return '待核验'; const parts = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).formatToParts(date).reduce((result, part) => ({ ...result, [part.type]: part.value }), {}); return `${parts.year}年${parts.month}月${parts.day}日 ${parts.hour}:${parts.minute}:${parts.second}`; }
function withinDisplayWindow(key) { return key <= horizonEndKey(); }
function eventMatchesSubfilters(event) { const options = Array.isArray(event.subtypes) ? event.subtypes : [event.subtype || 'other']; const filters = state.subfilters[event.category] || {}; return options.some(option => filters[option] !== false); }
function visibleEvents() { return sourceEvents().filter(event => Boolean(state.filters[event.category]) && withinDisplayWindow(eventDisplayDate(event)) && eventMatchesSubfilters(event)); }
function eventsFor(key) { return visibleEvents().filter(event => eventDisplayDate(event) === key).sort((a, b) => (a.time || '99:99').localeCompare(b.time || '99:99')); }
function persist() { storage.setItem('market-pulse-events-v1', JSON.stringify(state.events.filter(event => !event.seed))); }
function inferSubtypes(event) { const title = String(event.title || '').toLowerCase(); if (event.subtypes || event.subtype) return event.subtypes || [event.subtype]; if (event.category === 'macro') { const values = []; if (title.includes('cpi')) values.push('cpi'); if (title.includes('非农') || title.includes('就业形势')) values.push('nfp'); if (title.includes('ppi')) values.push('ppi'); if (title.includes('jolts')) values.push('jolts'); if (title.includes('gdp')) values.push('gdp'); if (title.includes('pce')) values.push('pce'); if (title.includes('初请') || title.includes('失业金') || title.includes('initial claims')) values.push('claims'); return values.length ? values : ['other']; } if (event.category === 'fed') { if (title.includes('纪要')) return ['minutes']; if (title.includes('利率决定') || title.includes('发布会')) return ['decision', 'sep']; return ['meeting']; } if (event.category === 'company') return ['product']; if (event.category === 'earnings') return ['other']; if (event.category === 'market') { const values = []; if (title.includes('休市') || title.includes('假日') || title.includes('holiday') || title.includes('提前收市')) values.push('holiday'); if (title.includes('期权') || title.includes('到期') || title.includes('triple witch') || title.includes('expiry')) values.push('expiry'); if (title.includes('被动调仓') || title.includes('重构') || title.includes('再平衡') || title.includes('reconstitution') || title.includes('rebalance') || title.includes('index')) values.push('passive', 'rebalance'); return values.length ? [...new Set(values)] : ['other']; } return ['other']; }
function normalizeEvent(event) { const normalized = { ...event }; const subtypes = inferSubtypes(normalized); normalized.subtypes = subtypes; normalized.subtype = subtypes[0]; return normalized; }
function loadEvents() { let extra = []; let updates = {}; try { extra = JSON.parse(storage.getItem('market-pulse-events-v1') || '[]'); } catch (_) {} try { updates = JSON.parse(storage.getItem('market-pulse-updates-v1') || '{}'); } catch (_) {} if (!updates || typeof updates !== 'object' || Array.isArray(updates)) updates = {}; const applyUpdates = event => normalizeEvent(updates[event.id] ? { ...event, ...updates[event.id] } : event); state.events = [...seedEvents.map(event => applyUpdates({ ...event, seed: true, sourceTimeZone: SOURCE_TZ })), ...(Array.isArray(extra) ? extra.map(applyUpdates) : [])]; }
function archivePastEvents() { let archived = {}; try { archived = JSON.parse(storage.getItem('market-pulse-history-v1') || '{}'); } catch (_) {} if (!archived || typeof archived !== 'object' || Array.isArray(archived)) archived = {}; const today = todayKey(); state.events.forEach(event => { if (eventDisplayDate(event) < today) archived[event.id] = { ...event, archivedAt: new Date().toISOString() }; }); storage.setItem('market-pulse-history-v1', JSON.stringify(archived)); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c])); }
function escapeAttr(value) { return escapeHtml(value); }
function changeMark(value, changed) { return changed ? `<span class="change-mark">${value}</span>` : value; }
function rebalanceList(values, changed = false) { if (Array.isArray(values) && values.length) return values.map(value => `<li${changed ? ' class="change-mark"' : ''}>${escapeHtml(localizeText(value))}</li>`).join(''); return `<li class="rebalance-pending${changed ? ' change-mark' : ''}">名单尚未由指数公司公布</li>`; }
function rebalanceDetails(event) { if (event.category !== 'market' || !(event.subtypes || []).includes('passive')) return ''; const index = event.indexName ? `<div class="rebalance-meta"><span>指数</span><strong>${changeMark(escapeHtml(localizeText(event.indexName)), eventFieldChanged(event, 'indexName'))}</strong></div>` : ''; const funds = Array.isArray(event.funds) && event.funds.length ? `<div class="rebalance-meta"><span>跟踪基金</span><strong>${changeMark(escapeHtml(localizeText(event.funds.join('、'))), eventFieldChanged(event, 'funds'))}</strong></div>` : ''; const effective = event.effective ? `<div class="rebalance-meta"><span>生效时间</span><strong>${changeMark(escapeHtml(localizeText(event.effective)), eventFieldChanged(event, 'effective'))}</strong></div>` : ''; const status = event.status ? `<div class="rebalance-status">${changeMark(escapeHtml(localizeText(event.status)), eventFieldChanged(event, 'status'))}</div>` : ''; return `<div class="rebalance-details">${index}${funds}${effective}${status}<div class="rebalance-flow"><div class="rebalance-column add"><strong>纳入公司</strong><ul>${rebalanceList(event.added, eventFieldChanged(event, 'added'))}</ul></div><div class="rebalance-column remove"><strong>移出公司</strong><ul>${rebalanceList(event.removed, eventFieldChanged(event, 'removed'))}</ul></div></div></div>`; }
function eventCard(event) { const importance = event.importance === 'high' ? '重要' : event.importance === 'medium' ? '关注' : '一般'; const titleChanged = eventFieldChanged(event, 'title') || eventChanged(event); const timeChanged = eventFieldChanged(event, 'date') || eventFieldChanged(event, 'time'); const notesChanged = eventFieldChanged(event, 'notes'); const categoryChanged = eventFieldChanged(event, 'category'); const importanceChanged = eventFieldChanged(event, 'importance'); const typeLabel = categoryNames[event.category] || event.category; return `<article class="event-detail ${event.category}${eventChanged(event) ? ' changed' : ''}"><div class="event-detail-top"><h4>${changeMark(escapeHtml(localizeText(event.title)), titleChanged)}</h4><span class="importance ${event.importance}">${changeMark(importance, importanceChanged)}</span></div><div class="event-time">${changeMark(`${formatEventTime(event)} · ${typeLabel}`, timeChanged || categoryChanged)}</div>${event.notes ? `<p class="event-note">${changeMark(escapeHtml(localizeText(event.notes)), notesChanged)}</p>` : ''}${rebalanceDetails(event)}${event.url ? `<a class="source-link" href="${escapeAttr(event.url)}" target="_blank" rel="noreferrer">查看来源 ↗</a>` : ''}</article>`; }

function insightFor(event) {
  let fallback;
  if (event.category === 'macro') fallback = { progress: '发布时间已由官方日程列出；实际值尚未发布。', consensus: '临近发布时补充市场一致预期、前值和重要分项；尚未抓到可靠数字时不虚构数值。', view: '高于预期通常推升利率预期并压制长久期成长股；低于预期通常相反。' };
  else if (event.category === 'fed') fallback = { progress: '会议/纪要日期已列入官方日历；具体措辞和点阵图仍待发布。', consensus: '市场通常先看利率期货隐含路径、声明措辞和经济预测摘要。', view: '偏鹰会抬高实际利率并压制成长股估值；偏鸽则可能改善风险偏好。' };
  else if (event.category === 'earnings') { const confirmed = /已确认/.test(event.title || ''); fallback = { progress: confirmed ? '公司已确认该财报日期；具体业绩仍待发布。' : '该日期为公开日历预计值，仍需公司 Investor Relations 正式确认。', consensus: '发布前补充收入、EPS、指引和隐含波动的一致预期；未发布数据标记为待发布。', view: '超预期与上调指引偏利好；只超收入但利润率或指引走弱，股价可能下跌。' }; }
  else if (event.category === 'company') fallback = { progress: '公司活动已列入清单；后续以官方公告、演示和监管文件更新。', consensus: '市场关注可量化的交付、订单、时间表和单位经济性，而不只是愿景。', view: '只有新增信息能进入收入/利润模型时，才更可能形成持续性重估。' };
  else if (event.category === 'market' && (event.subtypes || []).includes('passive')) { const hasNames = (Array.isArray(event.added) && event.added.length) || (Array.isArray(event.removed) && event.removed.length); fallback = { progress: hasNames ? '指数公司已发布部分纳入/移出名单；被动基金通常在生效前后按新权重调仓。' : '已标记指数基金被动调仓窗口；纳入/移出名单待指数公司正式公告。', consensus: '重点观察被动基金预计买入/卖出规模、权重变化和收盘竞价成交量；未公布数字不虚构。', view: '纳入股可能出现被动买盘，移出股可能出现被动卖盘；实际冲击取决于权重、流动性及资金是否提前交易。' }; }
  else fallback = { progress: '事件已列入市场日历，具体内容以主办方公告为准。', consensus: '临近事件时补充市场定价、预期差和相关资产表现。', view: '把成交量、价格位置和消息兑现程度一起看，避免单看标题追涨杀跌。' };
  return { ...fallback, ...(event.analysis || {}) };
}

function updateToolbarMonth() { const monthPrefix = `${state.cursor.getFullYear()}-${String(state.cursor.getMonth() + 1).padStart(2, '0')}`; document.getElementById('monthTitle').textContent = formatMonth(state.cursor); const mode = state.historyDate ? `历史快照 · ${state.historyDate} · 版本 ${((state.historyVersion ?? 0) + 1)}` : '实时数据'; document.getElementById('monthMeta').innerHTML = `<span class="month-meta-item">${visibleEvents().filter(event => eventDisplayDate(event).startsWith(monthPrefix)).length} 项事件</span><span class="month-meta-item">${escapeHtml(timezoneLabel(state.timezone))}</span><span class="month-meta-item">${escapeHtml(mode)}</span>`; }
function renderCalendarCell(date, eventMap) { const key = localDateKey(date); const monthPrefix = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`; const monthStart = date.getDate() === 1; const cell = document.createElement('button'); cell.type = 'button'; cell.className = `day-cell${monthStart ? ' month-start' : ''}${key === calendarTodayKey() ? ' today' : ''}${key === state.selected ? ' selected' : ''}`; if (monthStart) cell.dataset.month = monthPrefix; cell.setAttribute('aria-label', formatLongDate(key)); const events = eventMap.get(key) || []; const pills = events.slice(0, 3).map(event => `<span class="event-pill ${event.category}${eventChanged(event) ? ' changed' : ''}"><span class="pill-dot"></span><span${eventChanged(event) ? ' class="change-mark"' : ''}>${escapeHtml(localizeText(event.title))}</span></span>`).join(''); const more = events.length > 3 ? `<span class="more-pill">+${events.length - 3} 项</span>` : ''; cell.innerHTML = `${monthStart ? `<span class="month-marker">${formatMonth(date)}</span>` : ''}<span class="date-number">${date.getDate()}</span><span class="day-events">${pills}${more}</span>`; cell.addEventListener('click', () => { const previousMonth = `${state.cursor.getFullYear()}-${String(state.cursor.getMonth() + 1).padStart(2, '0')}`; state.selected = key; state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); render(previousMonth !== monthPrefix); }); return cell; }

function renderDailyBrief(selected) { const node = document.getElementById('dailyBrief'); if (!selected.length) { node.innerHTML = '<div class="empty-state">这一天没有可用的事件简报。</div>'; return; } node.innerHTML = selected.map(event => { const insight = insightFor(event); const changed = eventChanged(event); return `<article class="brief-card${changed ? ' changed' : ''}"><h4>${changeMark(escapeHtml(localizeText(event.title)), changed)}</h4><div class="brief-row"><span class="brief-label">当前进展</span><p>${changeMark(escapeHtml(localizeText(insight.progress)), changed || eventFieldChanged(event, 'analysis'))}</p></div><div class="brief-row"><span class="brief-label">市场预期</span><p>${changeMark(escapeHtml(localizeText(insight.consensus)), changed || eventFieldChanged(event, 'analysis'))}</p></div><div class="brief-row"><span class="brief-label">影响判断</span><p>${changeMark(escapeHtml(localizeText(insight.view)), changed || eventFieldChanged(event, 'analysis'))}</p></div></article>`; }).join(''); }
const changeFieldLabels = { date: '日期', time: '时间', title: '标题', category: '类别', subtype: '子类', subtypes: '子类', importance: '重要程度', url: '来源链接', notes: '备注', indexName: '指数', funds: '跟踪基金', added: '纳入公司', removed: '移出公司', effective: '生效时间', status: '状态', analysis: '进展 / 预期' };
function snapshotValue(value, field = '') { if (value === undefined || value === null || value === '') return '—'; if (Array.isArray(value)) return value.length ? value.join('、') : '—'; if (typeof value === 'object') { const values = Object.entries(value).filter(([, item]) => item !== undefined && item !== null && item !== '').map(([key, item]) => `${key}: ${item}`); return values.length ? values.join('；') : '—'; } return String(value); }
function changeReason(fields, kind) { if (kind === 'added') return '恢复或新增经官方来源核验的日程/关注事项。'; if (kind === 'removed') return '官方日程取消、日期迁移或事项不再满足当前关注条件。'; const labels = fields.map(field => changeFieldLabels[field] || field); return `官方来源复核或数据合并纠偏，调整了${labels.join('、')}。`; }
function renderChangeLogItem(event, kind, fields = [], before = {}, after = {}, sequence = 1) {
  const title = escapeHtml(localizeText(event.title || event.id));
  const beforeText = kind === 'added' ? '<span class="changelog-field-line">—</span>' : (kind === 'removed' ? `<strong>${title}</strong>` : `<strong>${title}</strong>${fields.map(field => `<span class="changelog-field-line"><b>${escapeHtml(changeFieldLabels[field] || field)}</b><del>${escapeHtml(snapshotValue(before[field], field))}</del></span>`).join('')}`);
  const afterText = kind === 'removed' ? '<span class="changelog-field-line">—</span>' : (kind === 'added' ? `<strong>${title}</strong>` : `<strong>${title}</strong>${fields.map(field => `<span class="changelog-field-line"><b>${escapeHtml(changeFieldLabels[field] || field)}</b><strong>${escapeHtml(snapshotValue(after[field], field))}</strong></span>`).join('')}`);
  const badge = kind === 'added' ? '新增' : kind === 'removed' ? '移除' : '修改';
  return `<article class="changelog-item ${kind}"><div class="changelog-grid"><div class="changelog-grid-head">序号</div><div class="changelog-grid-head">更新前</div><div class="changelog-grid-head">更新后</div><div class="changelog-grid-head">变更原因</div><div class="changelog-grid-cell changelog-sequence">${sequence}<span>${badge}</span></div><div class="changelog-grid-cell">${beforeText}</div><div class="changelog-grid-cell">${afterText}</div><div class="changelog-grid-cell changelog-reason">${changeReason(fields, kind)}</div></div></article>`;
}
function renderChangelogControls(current, previous) { const controls = document.getElementById('changelogControls'); const beforeNode = document.getElementById('changelogBeforeTime'); const afterSelect = document.getElementById('changelogAfterVersion'); if (!controls || !beforeNode || !afterSelect) return; if (!current) { controls.hidden = true; return; } const versions = historyVersions(current.date); if (!versions.length) { controls.hidden = true; return; } const selectedIndex = Math.max(0, Math.min(current.versionIndex ?? versions.length - 1, versions.length - 1)); const previousVersion = previous; beforeNode.textContent = previousVersion ? formatSnapshotTime(previousVersion) : '没有更早版本'; afterSelect.innerHTML = versions.map((version, index) => `<option value="${index}">版本 ${index + 1} · ${formatSnapshotTime(version)}</option>`).join(''); afterSelect.value = String(selectedIndex); controls.hidden = false; }
function renderChangelog() { const node = document.getElementById('changelogList'); const meta = document.getElementById('changelogMeta'); if (!node || !meta) return; const current = activeSnapshot(); if (!current || !state.historyDate && !state.history[todayKey()]) { meta.textContent = '尚未保存今日快照'; renderChangelogControls(null, null); node.innerHTML = '<div class="empty-state">数据更新或导入新数据后会保存版本，之后可在这里查看差异；刷新和回溯不会新增版本。</div>'; return; } const currentDate = current.date || calendarTodayKey(); const previous = previousSnapshotFor(current); const previousDate = previous?.date || null; const diff = activeDiff(); meta.textContent = `${state.historyDate ? '历史快照' : '今日快照'} · ${currentDate} · 版本 ${((current.versionIndex ?? 0) + 1)} · 布局 ${current.layoutVersion || CURRENT_LAYOUT_VERSION}`; renderChangelogControls(current, previous); if (!diff.hasChanges) { node.innerHTML = `<div class="changelog-empty">相对上一份已保存快照，没有检测到核心信息变化。<span>（已保存快照 ${historySnapshotCount()} 天 · ${historyVersionCount()} 个版本）</span></div>`; return; } const sections = []; if (previous && previous.layoutVersion !== current.layoutVersion) sections.push(`<div class="changelog-section"><h4>页面结构 · 1 项</h4><article class="changelog-item changed"><div class="changelog-grid"><div class="changelog-grid-head">序号</div><div class="changelog-grid-head">更新前</div><div class="changelog-grid-head">更新后</div><div class="changelog-grid-head">变更原因</div><div class="changelog-grid-cell changelog-sequence">1</div><div class="changelog-grid-cell"><strong>页面布局版本</strong><del>${escapeHtml(previous.layoutVersion || '—')}</del></div><div class="changelog-grid-cell"><strong>页面布局版本</strong><strong>${escapeHtml(current.layoutVersion || '—')}</strong></div><div class="changelog-grid-cell changelog-reason">页面结构或显示规则发生更新。</div></div></article></div>`); if (diff.added.length) sections.push(`<div class="changelog-section"><h4>新增事件 · ${diff.added.length} 项</h4>${diff.added.map((event, index) => renderChangeLogItem(event, 'added', [], {}, {}, index + 1)).join('')}</div>`); if (diff.removed.length) sections.push(`<div class="changelog-section"><h4>移除事件 · ${diff.removed.length} 项</h4>${diff.removed.map((event, index) => renderChangeLogItem(event, 'removed', [], {}, {}, index + 1)).join('')}</div>`); if (diff.changed.length) sections.push(`<div class="changelog-section"><h4>信息变更 · ${diff.changed.length} 项</h4>${diff.changed.map((item, index) => renderChangeLogItem(item.after, 'changed', item.fields, item.before, item.after, index + 1)).join('')}</div>`); node.innerHTML = `<div class="changelog-compare">更新前：${previous ? formatSnapshotTime(previous) : '没有更早版本'} · 更新后：${formatSnapshotTime(current)}<br />对比基准：${previousDate || '没有更早的快照'}</div>${sections.join('')}`; }
function renderHistoryPicker() { const title = document.getElementById('historyMonthTitle'); const grid = document.getElementById('historyCalendarGrid'); const note = document.getElementById('historyNote'); if (!title || !grid || !note) return; const cursor = new Date(state.historyCursor.getFullYear(), state.historyCursor.getMonth(), 1); title.textContent = formatMonth(cursor); grid.innerHTML = ''; const offset = (cursor.getDay() + 6) % 7; for (let index = 0; index < offset; index += 1) { const placeholder = document.createElement('span'); placeholder.className = 'history-day placeholder'; grid.appendChild(placeholder); } const last = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate(); const saved = new Set(historyDates()); for (let day = 1; day <= last; day += 1) { const date = keyFromParts(cursor.getFullYear(), cursor.getMonth() + 1, day); const button = document.createElement('button'); button.type = 'button'; button.className = `history-day${saved.has(date) ? ' has-snapshot' : ''}${date === state.historyDate ? ' selected' : ''}`; button.textContent = String(day); button.disabled = !saved.has(date); button.title = saved.has(date) ? historyLabel(date) : '这一天尚未保存快照'; if (saved.has(date)) button.addEventListener('click', () => enterHistory(date)); grid.appendChild(button); } note.textContent = `已保存 ${historySnapshotCount()} 天、${historyVersionCount()} 个版本；只有保存过快照的日期可以回溯。只有数据更新或导入新数据后才会追加版本。刷新、回溯和显示设置不会新增版本。`; }
function openHistoryPicker() { state.historyCursor = state.historyDate ? parseDate(state.historyDate) : parseDate(todayKey()); document.getElementById('historyBackdrop').hidden = false; renderHistoryPicker(); }
function closeHistoryPicker() { document.getElementById('historyBackdrop').hidden = true; }
function enterHistory(date, versionRef = 'latest') { const snapshot = resolveSnapshot(date, versionRef); if (!snapshot) return; if (!state.uiBeforeHistory) state.uiBeforeHistory = { filters: cloneData(state.filters), subfilters: cloneData(state.subfilters), timezone: state.timezone, language: state.language }; state.historyDate = date; state.historyVersion = snapshot.versionIndex; state.historyCursor = parseDate(date); state.selected = date; state.cursor = new Date(parseDate(date).getFullYear(), parseDate(date).getMonth(), 1); if (snapshot.ui) { state.filters = { ...defaultFilters, ...(snapshot.ui.filters || {}) }; state.subfilters = Object.fromEntries(Object.entries(defaultSubfilters).map(([category, values]) => [category, { ...values, ...((snapshot.ui.subfilters || {})[category] || {}) }])); state.timezone = timezoneNames[snapshot.ui.timezone] ? snapshot.ui.timezone : state.timezone; state.language = snapshot.ui.language === 'zh' ? 'zh' : state.language; } closeHistoryPicker(); render(true); }
function selectHistoryVersion(versionRef) { const date = activeSnapshot()?.date || state.historyDate || todayKey(); enterHistory(date, Number(versionRef)); }
function exitHistory() { const liveDate = todayKey(); if (state.uiBeforeHistory) { state.filters = state.uiBeforeHistory.filters; state.subfilters = state.uiBeforeHistory.subfilters; state.timezone = state.uiBeforeHistory.timezone; state.language = state.uiBeforeHistory.language; } state.uiBeforeHistory = null; state.historyDate = null; state.historyVersion = null; state.selected = liveDate; const date = parseDate(liveDate); state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); render(true); }
function updateHistoryButton() { const button = document.getElementById('historyBtn'); if (!button) return; button.textContent = state.historyDate ? '回到今天' : '回溯'; button.classList.toggle('active', Boolean(state.historyDate)); button.setAttribute('aria-label', state.historyDate ? '退出历史回溯' : '打开历史回溯'); }
function renderSidePanel() { document.getElementById('selectedDateTitle').textContent = formatLongDate(state.selected); const selected = eventsFor(state.selected); document.getElementById('selectedCount').textContent = `${selected.length} 项`; const earningsOnly = state.filters.earnings && Object.entries(state.filters).every(([category, enabled]) => category === 'earnings' || !enabled); const emptyMessage = earningsOnly ? '这一天没有财报事件。<br />点击“财报”旁的齿轮可查看关注公司名单。' : '这一天暂时没有符合条件的事件。'; document.getElementById('selectedEvents').innerHTML = selected.length ? selected.map(eventCard).join('') : `<div class="empty-state">${emptyMessage}</div>`; renderDailyBrief(selected); }
function renderSubfilterPanel() {
  const panel = document.getElementById('subfilterPanel');
  document.querySelectorAll('.gear-btn').forEach(button => button.classList.toggle('active', button.dataset.gear === state.openGear));
  if (!state.openGear || !subfilterDefinitions[state.openGear]) {
    panel.hidden = true;
    panel.innerHTML = '';
    return;
  }
  const category = state.openGear;
  const definition = subfilterDefinitions[category];
  const options = definition.options.map(([key, label]) => `<label class="subfilter-option"><input type="checkbox" data-subfilter-category="${category}" data-subfilter="${key}" ${state.subfilters[category]?.[key] !== false ? 'checked' : ''} />${escapeHtml(localizeText(label))}</label>`).join('');
  let companyList = '';
  if (category === 'earnings' || category === 'company') {
    const groups = Object.entries(earningsWatchlists).map(([group, companies]) => `<div class="company-group"><span class="company-group-label">${group === 'largecap' ? '市值前20核心' : '科技热点公司'}</span><span class="company-names">${companies.map(([ticker, name, zhName]) => escapeHtml(state.language === 'zh' ? zhName : `${ticker} · ${name}`)).join('、')}</span></div>`).join('');
    const note = category === 'earnings'
      ? '财报日期按关注池维护；未被公司正式确认的日期会标注“预计”。'
      : '公司事件按同一关注池维护；后续新增发布会、投资者日或运营节点会在这里对应公司。';
    companyList = `<div class="earnings-note">${note}</div><div class="company-list">${groups}</div>`;
  }
  if (category === 'market') companyList = '<div class="earnings-note">“指数基金被动调仓”会显示官方已排期的调整窗口；纳入/移出公司名单只有在指数公司公告后才会补全，未公布时不会猜测。</div>';
  panel.innerHTML = `<span class="subfilter-title">${localizeText(definition.title)}</span><div class="subfilter-options">${options}</div>${companyList}`;
  panel.hidden = false;
  panel.querySelectorAll('input[data-subfilter]').forEach(input => input.addEventListener('change', event => {
    state.subfilters[category][event.target.dataset.subfilter] = event.target.checked;
    storage.setItem('market-pulse-subfilters-v1', JSON.stringify(state.subfilters));
    render();
  }));
}
function storageSizeLabel() { let bytes = 0; try { for (let index = 0; index < storage.length; index += 1) { const key = storage.key(index); if (key && key.startsWith('market-pulse-')) bytes += key.length + String(storage.getItem(key) || '').length; } } catch (_) {} if (bytes < 1024) return `${bytes} B`; if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(bytes < 10 * 1024 ? 1 : 0)} KB`; return `${(bytes / (1024 * 1024)).toFixed(2)} MB`; }
function renderStorage() { const node = document.getElementById('storageUsage'); if (node) node.textContent = storageSizeLabel(); }
function readStorageJson(key, fallback) { try { const value = JSON.parse(storage.getItem(key) || ''); return value ?? fallback; } catch (_) { return fallback; } }
function externalHistoryVersions(history, date) { const value = history?.[date]; if (Array.isArray(value)) return value; if (value && Array.isArray(value.versions)) return value.versions; return value && typeof value === 'object' ? [value] : []; }
function resolveExternalSnapshot(history, date, versionRef = 'latest', seen = new Set()) { const versions = externalHistoryVersions(history, date); if (!versions.length) return null; const requested = versionRef === 'latest' || versionRef === null || versionRef === undefined ? versions.length - 1 : (typeof versionRef === 'number' ? versionRef : versions.findIndex(record => record.versionId === versionRef)); const index = requested >= 0 && requested < versions.length ? requested : versions.length - 1; const key = `${date}#${index}`; if (seen.has(key)) return null; seen.add(key); const record = versions[index]; let events = record.events; if (!Array.isArray(events) && record.baseDate) events = resolveExternalSnapshot(history, record.baseDate, record.baseVersion ?? 'latest', seen)?.events; return { ...record, date, versionIndex: index, versionId: record.versionId || `${date}#${index + 1}`, events: Array.isArray(events) ? events : [] }; }
function materializeHistory(history) { const output = {}; Object.keys(history || {}).filter(date => /^\d{4}-\d{2}-\d{2}$/.test(date)).forEach(date => { const versions = externalHistoryVersions(history, date); output[date] = { versions: versions.map((record, index) => { const resolved = resolveExternalSnapshot(history, date, index) || { events: record.events || [] }; const item = { ...record, date, versionId: record.versionId || `${date}#${index + 1}`, events: cloneData(resolved.events || []) }; delete item.baseDate; delete item.baseVersion; delete item.versionIndex; return item; }) }; }); return output; }
/* A history version represents a data/layout state, not the time it was read or
   the viewer's local display preferences. Keeping those volatile fields out of
   the merge key prevents a refresh from turning the same cloud snapshot into a
   new version. */
function historyRecordFingerprint(record, eventsOverride = record.events || []) {
  const events = Array.isArray(eventsOverride) ? eventsOverride : [];
  const eventIdentity = events.length ? eventsSignature(events) : (record.eventHash || '');
  return JSON.stringify({
    eventIdentity,
    lastDataUpdateAt: record.lastDataUpdateAt || '',
    layoutVersion: record.layoutVersion || ''
  });
}
function mergeHistoryData(incomingHistory) {
  const incomingDates = Object.keys(incomingHistory || {}).filter(date => /^\d{4}-\d{2}-\d{2}$/.test(date));
  if (!incomingDates.length) return { conflicts: 0, duplicates: 0 };
  const incoming = materializeHistory(incomingHistory);
  const merged = {};
  const dates = new Set([...historyDates(), ...Object.keys(incoming)]);
  let conflicts = 0;
  let duplicates = 0;
  dates.forEach(date => {
    const localRecords = rawHistoryVersions(date).map((record, index) => ({
      ...record,
      versionId: record.versionId || `${date}#${index + 1}`,
      __events: resolveSnapshot(date, index)?.events || record.events || []
    }));
    const records = [];
    const fingerprints = new Set();
    localRecords.forEach(({ __events, ...record }) => {
      const fingerprint = historyRecordFingerprint(record, __events);
      if (fingerprints.has(fingerprint)) {
        duplicates += 1;
        return;
      }
      records.push(record);
      fingerprints.add(fingerprint);
    });
    (incoming[date]?.versions || []).forEach(record => {
      const fingerprint = historyRecordFingerprint(record, record.events || []);
      if (fingerprints.has(fingerprint)) {
        duplicates += 1;
        return;
      }
      let versionId = record.versionId || `${date}#${records.length + 1}`;
      if (records.some(item => item.versionId === versionId)) {
        conflicts += 1;
        versionId = `${versionId}-import-${Date.now()}-${conflicts}`;
      }
      const next = { ...record, versionId };
      records.push(next);
      fingerprints.add(historyRecordFingerprint(next, next.events || []));
    });
    const outputRecords = records.map(record => {
      const item = { ...record };
      delete item.date;
      delete item.versionIndex;
      return item;
    });
    merged[date] = { versions: outputRecords };
  });
  state.history = merged;
  return { conflicts, duplicates };
}
function pruneHistory() { const all = []; const materialized = materializeHistory(state.history); Object.entries(materialized).forEach(([date, value]) => value.versions.forEach(record => all.push({ ...record, date }))); if (all.length <= 2) { window.alert('当前最多只有 2 个版本，无需清理。'); return; } if (!window.confirm(`将删除较早的 ${all.length - 2} 个版本，只保留最新 2 个版本用于前后对比。确定继续吗？`)) return; all.sort((a, b) => String(a.capturedAt || a.lastDataUpdateAt || '').localeCompare(String(b.capturedAt || b.lastDataUpdateAt || ''))); const keep = all.slice(-2); const next = {}; keep.forEach(record => { const { date, ...item } = record; if (!next[date]) next[date] = { versions: [] }; next[date].versions.push(item); }); state.history = next; saveHistorySnapshots(); storage.removeItem('market-pulse-history-v1'); if (state.historyDate && !state.history[state.historyDate]) exitHistory(); else render(true); window.alert(`已清理 ${all.length - keep.length} 个旧版本，保留最新 2 个版本。`); }
function archivePayload() { return { schema: 'market-pulse-investment-calendar-archive', schemaVersion: 2, exportedAt: new Date().toISOString(), events: state.events.filter(event => !event.seed).map(event => cloneData(event)), updates: cloneData(readStorageJson('market-pulse-updates-v1', {})), history: cloneData(state.history), preferences: { filters: cloneData(state.filters), subfilters: cloneData(state.subfilters), timezone: state.timezone, language: state.language } }; }
function downloadJson(filename, payload) { const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url); }
function exportDataArchive() { const stamp = new Date().toISOString().replace(/[:.]/g, '-'); downloadJson(`market-pulse-archive-${stamp}.json`, archivePayload()); }
function importDataArchive(event) { const input = event.target; const file = input.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const payload = JSON.parse(String(reader.result || '')); if (!payload || typeof payload !== 'object' || (!Array.isArray(payload.events) && (!payload.history || typeof payload.history !== 'object'))) throw new Error('归档文件格式不正确'); if (!window.confirm('导入会合并事件、历史版本和云端更新；相同版本会自动去重，冲突版本会保留为新的导入版本。确定继续吗？')) return; const existingEvents = new Map(state.events.filter(eventItem => !eventItem.seed).map(eventItem => [eventItem.id, eventItem])); let added = 0; let duplicates = 0; let conflicts = 0; (Array.isArray(payload.events) ? payload.events : []).forEach(raw => { if (!raw || typeof raw !== 'object' || !raw.id) return; const item = normalizeEvent({ ...raw, seed: false }); const existing = existingEvents.get(item.id); if (!existing) { state.events.push(item); existingEvents.set(item.id, item); added += 1; return; } if (eventSignature(existing) === eventSignature(item)) { duplicates += 1; return; } const imported = normalizeEvent({ ...item, id: `import-${Date.now()}-${added + conflicts + 1}-${item.id}` }); state.events.push(imported); conflicts += 1; }); persist(); const currentUpdates = readStorageJson('market-pulse-updates-v1', {}); const importedUpdates = payload.updates && typeof payload.updates === 'object' && !Array.isArray(payload.updates) ? payload.updates : {}; const mergedUpdates = { ...currentUpdates }; Object.entries(importedUpdates).forEach(([id, value]) => { if (!Object.prototype.hasOwnProperty.call(mergedUpdates, id)) mergedUpdates[id] = value; else if (JSON.stringify(mergedUpdates[id]) !== JSON.stringify(value)) conflicts += 1; }); storage.setItem('market-pulse-updates-v1', JSON.stringify(mergedUpdates)); const historyResult = mergeHistoryData(payload.history || {}); conflicts += historyResult.conflicts; duplicates += historyResult.duplicates; saveHistorySnapshots(); if (payload.preferences && typeof payload.preferences === 'object') { if (payload.preferences.filters) state.filters = { ...defaultFilters, ...payload.preferences.filters }; if (payload.preferences.subfilters) state.subfilters = Object.fromEntries(Object.entries(defaultSubfilters).map(([category, values]) => [category, { ...values, ...((payload.preferences.subfilters || {})[category] || {}) }])); if (timezoneNames[payload.preferences.timezone]) state.timezone = payload.preferences.timezone; if (payload.preferences.language === 'zh' || payload.preferences.language === 'mixed') state.language = payload.preferences.language; } state.historyDate = null; state.historyVersion = null; state.uiBeforeHistory = null; state.selected = todayKey(); const today = parseDate(state.selected); state.cursor = new Date(today.getFullYear(), today.getMonth(), 1); loadEvents(); captureHistorySnapshot(); render(true); window.alert(`导入完成：新增 ${added} 个事件，去重 ${duplicates} 项，冲突保留 ${conflicts} 项。`); } catch (error) { window.alert(`导入失败：${error.message || '文件无法读取'}`); } finally { input.value = ''; } }; reader.readAsText(file); }
function toggleStorageMenu(force) { const menu = document.getElementById('storageMenu'); const button = document.getElementById('storageSettingsBtn'); if (!menu || !button) return; const open = typeof force === 'boolean' ? force : menu.hidden; menu.hidden = !open; button.setAttribute('aria-expanded', String(open)); }
async function loadRemoteHistory() { if (typeof fetch !== 'function') return; try { const response = await fetch(`${REMOTE_HISTORY_URL}?v=${Date.now()}`, { cache: 'no-store' }); if (!response.ok) return; const payload = await response.json(); const incoming = payload && payload.history && typeof payload.history === 'object' ? payload.history : payload; if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) return; mergeHistoryData(incoming); saveHistorySnapshots(); const remoteLatest = resolveSnapshot(todayKey(), 'latest'); if (remoteLatest && Array.isArray(remoteLatest.events) && remoteLatest.events.length) { const seedIds = new Set(seedEvents.map(event => event.id)); const remoteEvents = remoteLatest.events.map(event => ({ ...cloneData(event), seed: event.seed ?? seedIds.has(event.id), sourceTimeZone: event.sourceTimeZone || SOURCE_TZ })); const remoteIds = new Set(remoteEvents.map(event => event.id)); const localExtras = state.events.filter(event => !event.seed && !remoteIds.has(event.id)); state.events = [...remoteEvents, ...localExtras]; } render(true); } catch (_) {} }
function renderLastDataUpdate() {
  const card = document.querySelector('.last-update-card');
  const node = document.getElementById('lastUpdateValue');
  if (!node || !card) return;
  const historical = Boolean(state.historyDate);
  const snapshot = activeSnapshot();
  const timestamp = snapshot?.lastDataUpdateAt || (historical ? '' : LAST_DATA_UPDATE_AT);
  card.classList.remove('stale', 'pending', 'historical');
  if (historical) card.classList.add('historical');
  if (!timestamp) {
    node.textContent = historical ? '未记录云端时间' : (state.language === 'zh' ? '等待云端首次更新' : 'Waiting for cloud update');
    if (!historical) card.classList.add('stale', 'pending');
    card.title = historical ? '该历史快照没有记录云端更新时间' : (state.language === 'zh' ? '尚未收到云端首次成功更新' : 'Waiting for the first verified cloud update');
    return;
  }
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    node.textContent = state.language === 'zh' ? '待核验' : 'Pending verification';
    if (!historical) card.classList.add('stale', 'pending');
    card.title = historical ? '该历史快照的云端更新时间无法核验' : (state.language === 'zh' ? '云端更新时间无法核验' : 'Cloud update time could not be verified');
    return;
  }
  const parts = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).formatToParts(date).reduce((result, part) => ({ ...result, [part.type]: part.value }), {});
  node.textContent = `${parts.year}年${parts.month}月${parts.day}日 ${parts.hour}:${parts.minute}:${parts.second}`;
  if (historical) {
    card.title = `历史快照 ${state.historyDate} 的数据更新时间`;
    return;
  }
  const now = new Date();
  const localToday = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const updateDay = `${parts.year}-${parts.month}-${parts.day}`;
  if (updateDay !== localToday) {
    card.classList.add('stale');
    card.title = state.language === 'zh' ? '云端更新时间不是电脑今天的日期，数据可能尚未同步' : 'The cloud update is not from your computer\'s current date';
  } else {
    card.title = state.language === 'zh' ? '云端数据更新时间与电脑今天的日期一致' : 'Cloud data was updated on your computer\'s current date';
  }
}
function applyLanguage() { const full = state.language === 'zh'; const text = { brand: full ? '市场脉搏' : 'MARKET PULSE', selected: full ? '选中日期' : 'SELECTED DAY', brief: full ? '市场简报' : 'MARKET BRIEF', sources: full ? '来源链接' : 'SOURCE LINKS', lastUpdate: full ? '最后数据更新（云端）' : '最后数据更新 · 云端' }; document.title = full ? '投资日历' : 'Market Pulse · 投资日历'; document.getElementById('brandEyebrow').textContent = text.brand; document.getElementById('selectedDayLabel').textContent = text.selected; document.getElementById('marketBriefLabel').textContent = text.brief; document.getElementById('sourceLinksLabel').textContent = text.sources; document.getElementById('lastUpdateLabel').textContent = text.lastUpdate; const timezoneOptions = full ? ['纽约时间', '北京时间', '香港时间', '伦敦时间', '协调世界时'] : ['纽约时间 · ET', '北京时间 · CST', '香港时间 · HKT', '伦敦时间 · GMT/BST', '协调世界时 · UTC']; document.querySelectorAll('#timezoneSelect option').forEach((option, index) => { option.textContent = timezoneOptions[index]; }); document.getElementById('blsSourceLink').textContent = full ? '美国劳工统计局 · 消费者价格指数 / 非农' : 'BLS · CPI / 非农'; document.getElementById('fedSourceLink').textContent = full ? '美联储 · 联邦公开市场委员会' : 'Federal Reserve · FOMC'; document.getElementById('beaSourceLink').textContent = full ? '美国经济分析局 · 国内生产总值 / 个人消费支出' : 'BEA · GDP / PCE'; document.getElementById('nasdaqSourceLink').textContent = full ? '纳斯达克 · 财报' : 'Nasdaq · Earnings'; document.getElementById('languageSelect').value = state.language; }
function render(focusMonth = false) { applyLanguage(); updateHistoryButton(); renderCalendar(focusMonth); renderSidePanel(); renderSubfilterPanel(); renderChangelog(); renderStorage(); renderLastDataUpdate(); renderVersionChangeSummary(); const allChecked = Object.values(state.filters).every(Boolean); document.getElementById('filterAll').checked = allChecked; document.querySelectorAll('input[data-filter]').forEach(input => { input.checked = Boolean(state.filters[input.dataset.filter]); }); document.getElementById('timezoneSelect').value = state.timezone; }

function exportIcs() { const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Market Pulse//Investment Events//ZH', 'CALSCALE:GREGORIAN', `X-WR-CALNAME:Market Pulse 投资事件 · ${timezoneLabel(state.timezone)}`]; visibleEvents().forEach(event => { const displayDate = eventDisplayDate(event).replaceAll('-', ''); const instant = eventInstant(event); let startLine; let endLine = ''; if (instant) { const parts = getZonedParts(instant, state.timezone); const stamp = `${parts.year}${String(parts.month).padStart(2, '0')}${String(parts.day).padStart(2, '0')}T${String(parts.hour).padStart(2, '0')}${String(parts.minute).padStart(2, '0')}00`; startLine = `DTSTART;TZID=${state.timezone}:${stamp}`; const end = new Date(instant.getTime() + 30 * 60 * 1000); const endParts = getZonedParts(end, state.timezone); endLine = `DTEND;TZID=${state.timezone}:${endParts.year}${String(endParts.month).padStart(2, '0')}${String(endParts.day).padStart(2, '0')}T${String(endParts.hour).padStart(2, '0')}${String(endParts.minute).padStart(2, '0')}00`; } else { startLine = `DTSTART;VALUE=DATE:${displayDate}`; } lines.push('BEGIN:VEVENT', `UID:${event.id}@market-pulse.local`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`, startLine, ...(endLine ? [endLine] : []), `SUMMARY:${icsEscape(localizeText(event.title))}`, `CATEGORIES:${icsEscape(categoryNames[event.category] || event.category)}`, ...(event.url ? [`URL:${event.url}`] : []), ...(event.notes ? [`DESCRIPTION:${icsEscape(localizeText(event.notes))}`] : []), 'END:VEVENT'); }); lines.push('END:VCALENDAR'); const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'market-pulse-investment-events.ics'; a.click(); URL.revokeObjectURL(url); }
function icsEscape(value) { return String(value).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }

document.getElementById('prevMonthBtn').addEventListener('click', () => changeMonth(-1));
document.getElementById('nextMonthBtn').addEventListener('click', () => changeMonth(1));
document.getElementById('todayBtn').addEventListener('click', () => { if (state.historyDate) { exitHistory(); return; } const key = todayKey(); const date = parseDate(key); state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); state.selected = key; render(true); });
document.getElementById('historyBtn').addEventListener('click', () => { if (state.historyDate) exitHistory(); else openHistoryPicker(); });
document.getElementById('closeHistoryBtn').addEventListener('click', closeHistoryPicker);
document.getElementById('historyBackdrop').addEventListener('click', event => { if (event.target.id === 'historyBackdrop') closeHistoryPicker(); });
document.getElementById('historyPrevMonthBtn').addEventListener('click', () => { state.historyCursor = new Date(state.historyCursor.getFullYear(), state.historyCursor.getMonth() - 1, 1); renderHistoryPicker(); });
document.getElementById('historyNextMonthBtn').addEventListener('click', () => { state.historyCursor = new Date(state.historyCursor.getFullYear(), state.historyCursor.getMonth() + 1, 1); renderHistoryPicker(); });
document.getElementById('changelogAfterVersion').addEventListener('change', event => selectHistoryVersion(event.target.value));
document.getElementById('storageSettingsBtn').addEventListener('click', event => { event.stopPropagation(); toggleStorageMenu(); });
document.getElementById('pruneHistoryBtn').addEventListener('click', () => { toggleStorageMenu(false); pruneHistory(); });
document.getElementById('exportDataBtn').addEventListener('click', () => { toggleStorageMenu(false); exportDataArchive(); });
document.getElementById('importDataBtn').addEventListener('click', () => { toggleStorageMenu(false); document.getElementById('importDataInput').click(); });
document.getElementById('importDataInput').addEventListener('change', importDataArchive);
document.addEventListener('click', event => { if (!event.target.closest('.storage-card')) toggleStorageMenu(false); });
document.getElementById('filterAll').addEventListener('change', event => { Object.keys(state.filters).forEach(key => { state.filters[key] = event.target.checked; }); storage.setItem('market-pulse-filters-v1', JSON.stringify(state.filters)); render(); });
document.querySelectorAll('input[data-filter]').forEach(input => input.addEventListener('change', event => { state.filters[event.target.dataset.filter] = event.target.checked; storage.setItem('market-pulse-filters-v1', JSON.stringify(state.filters)); render(); }));
document.querySelectorAll('.gear-btn').forEach(button => button.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); const category = button.dataset.gear; state.openGear = state.openGear === category ? null : category; render(); }));
document.getElementById('timezoneSelect').addEventListener('change', event => { state.timezone = event.target.value; storage.setItem('market-pulse-timezone-v1', state.timezone); const key = todayKey(); const date = parseDate(key); state.selected = key; state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); render(true); });
document.getElementById('languageSelect').addEventListener('change', event => { state.language = event.target.value === 'zh' ? 'zh' : 'mixed'; storage.setItem('market-pulse-language-v1', state.language); render(); });
document.getElementById('exportBtn').addEventListener('click', exportIcs);
const calendarScroll = document.getElementById('calendarScroll');
let scrollRaf = 0;
calendarScroll.addEventListener('scroll', () => { if (scrollRaf) return; scrollRaf = window.requestAnimationFrame(() => { scrollRaf = 0; const marker = calendarScroll.scrollTop + 50; const monthStarts = [...document.querySelectorAll('.day-cell.month-start')]; let current = monthStarts[0]; monthStarts.forEach(cell => { if (cell.offsetTop <= marker) current = cell; }); if (!current) return; const [year, month] = current.dataset.month.split('-').map(Number); if (state.cursor.getFullYear() !== year || state.cursor.getMonth() + 1 !== month) { state.cursor = new Date(year, month - 1, 1); updateToolbarMonth(); } }); }, { passive: true });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeHistoryPicker(); if (event.target.matches('input, textarea, select')) return; if (event.key === 'PageDown') changeMonth(1); if (event.key === 'PageUp') changeMonth(-1); });

/* Keep the visible surface to the current month plus the rolling 90-day window. */
function calendarWindowBounds() {
  const today = parseDate(calendarTodayKey());
  return {
    start: new Date(today.getFullYear(), today.getMonth(), 1),
    end: parseDate(horizonEndKey()),
  };
}

renderCalendar = function renderCalendar(focusMonth = false) {
  const scroll = document.getElementById('calendarScroll');
  const grid = document.getElementById('calendarGrid');
  const previousScrollTop = scroll.scrollTop;
  const eventMap = new Map();
  visibleEvents().forEach(event => {
    const key = eventDisplayDate(event);
    if (!eventMap.has(key)) eventMap.set(key, []);
    eventMap.get(key).push(event);
  });
  eventMap.forEach(events => events.sort((a, b) => (a.time || '99:99').localeCompare(b.time || '99:99')));
  const { start, end } = calendarWindowBounds();
  grid.innerHTML = '';
  for (let index = 0; index < (start.getDay() + 6) % 7; index += 1) {
    const placeholder = document.createElement('span');
    placeholder.className = 'day-cell placeholder';
    placeholder.setAttribute('aria-hidden', 'true');
    grid.appendChild(placeholder);
  }
  for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) grid.appendChild(renderCalendarCell(new Date(date), eventMap));
  updateToolbarMonth();
  if (focusMonth) {
    const target = grid.querySelector(`.month-start[data-month="${state.cursor.getFullYear()}-${String(state.cursor.getMonth() + 1).padStart(2, '0')}"]`);
    if (target) scroll.scrollTo({ top: Math.max(0, target.offsetTop - grid.offsetTop - 40), behavior: scroll.dataset.ready ? 'smooth' : 'auto' });
    scroll.dataset.ready = '1';
  } else scroll.scrollTop = previousScrollTop;
};

changeMonth = function changeMonth(delta) {
  const { start, end } = calendarWindowBounds();
  const firstMonth = new Date(start.getFullYear(), start.getMonth(), 1);
  const lastMonth = new Date(end.getFullYear(), end.getMonth(), 1);
  const requested = new Date(state.cursor.getFullYear(), state.cursor.getMonth() + delta, 1);
  const date = requested < firstMonth ? firstMonth : requested > lastMonth ? lastMonth : requested;
  state.cursor = date;
  state.selected = localDateKey(date);
  render(true);
};

loadEvents(); loadHistorySnapshots(); archivePastEvents(); render(true); loadRemoteHistory();

function renderVersionChangeSummary() {
  const node = document.getElementById('versionChangeSummary');
  if (!node) return;
  const current = activeSnapshot();
  const previous = previousSnapshotFor(current);
  node.classList.remove('has-changes');
  if (!previous || !current || current.versionIndex < 0) {
    node.textContent = '本版本相较于前版本：暂无可比版本';
    return;
  }
  const diff = diffSnapshots(previous, current);
  const count = diff.added.length + diff.removed.length + diff.changed.length;
  node.textContent = `本版本相较于前版本：${count} 处更新`;
  node.classList.toggle('has-changes', count > 0);
}
