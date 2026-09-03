const seedEvents = [
  { id: 'bls-20260904', date: '2026-09-04', time: '08:30', title: '就业形势（非农）· 8月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/empsit.htm', notes: 'BLS 官方发布时间；美国东部时间。' },
  { id: 'bls-20260910', date: '2026-09-10', time: '08:30', title: 'PPI · 8月', category: 'macro', importance: 'medium', url: 'https://www.bls.gov/schedule/news_release/ppi.htm', notes: '生产者价格指数。' },
  { id: 'bls-20260911', date: '2026-09-11', time: '08:30', title: 'CPI · 8月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/cpi.htm', notes: '消费者价格指数；美国东部时间。' },
  { id: 'fed-20260915', date: '2026-09-15', time: '', title: 'FOMC 会议（第1天）', category: 'fed', importance: 'high', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '9月15–16日；利率决定通常在第2天发布。' },
  { id: 'fed-20260916', date: '2026-09-16', time: '14:00', title: 'FOMC 利率决定 / 发布会', category: 'fed', importance: 'high', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '具体发布时间以美联储当日安排为准。' },
  { id: 'bls-20260929', date: '2026-09-29', time: '10:00', title: 'JOLTS 职位空缺 · 8月', category: 'macro', importance: 'medium', url: 'https://www.bls.gov/schedule/news_release/jolts.htm', notes: '职位空缺与劳动力流动调查。' },
  { id: 'bea-20260930', date: '2026-09-30', time: '08:30', title: 'GDP（第三次估值）/ PCE · 8月', category: 'macro', importance: 'high', url: 'https://www.bea.gov/news/schedule/', notes: 'BEA：Q2 GDP 第三次估值、8月个人收入与支出。' },
  { id: 'bls-20261002', date: '2026-10-02', time: '08:30', title: '就业形势（非农）· 9月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/empsit.htm', notes: 'BLS 官方发布时间；美国东部时间。' },
  { id: 'fed-20261007', date: '2026-10-07', time: '14:00', title: 'FOMC 会议纪要（预计）', category: 'fed', importance: 'medium', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '通常在政策决定后三周发布，日期以官方更新为准。' },
  { id: 'bls-20261014', date: '2026-10-14', time: '08:30', title: 'CPI · 9月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/cpi.htm', notes: '消费者价格指数。' },
  { id: 'bls-20261015', date: '2026-10-15', time: '08:30', title: 'PPI · 9月', category: 'macro', importance: 'medium', url: 'https://www.bls.gov/schedule/news_release/ppi.htm', notes: '生产者价格指数。' },
  { id: 'fed-20261027', date: '2026-10-27', time: '', title: 'FOMC 会议（第1天）', category: 'fed', importance: 'high', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '10月27–28日；利率决定通常在第2天发布。' },
  { id: 'fed-20261028', date: '2026-10-28', time: '14:00', title: 'FOMC 利率决定 / 发布会', category: 'fed', importance: 'high', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '具体发布时间以美联储当日安排为准。' },
  { id: 'bea-20261029', date: '2026-10-29', time: '08:30', title: 'GDP（提前估值）/ PCE · 9月', category: 'macro', importance: 'high', url: 'https://www.bea.gov/news/schedule/', notes: 'BEA：Q3 GDP 提前估值、9月个人收入与支出。' },
  { id: 'bls-20261103', date: '2026-11-03', time: '10:00', title: 'JOLTS 职位空缺 · 9月', category: 'macro', importance: 'medium', url: 'https://www.bls.gov/schedule/news_release/jolts.htm', notes: '职位空缺与劳动力流动调查。' },
  { id: 'fed-20261118', date: '2026-11-18', time: '14:00', title: 'FOMC 会议纪要（预计）', category: 'fed', importance: 'medium', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '通常在政策决定后三周发布，日期以官方更新为准。' },
  { id: 'bls-20261106', date: '2026-11-06', time: '08:30', title: '就业形势（非农）· 10月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/empsit.htm', notes: 'BLS 官方发布时间；美国东部时间。' },
  { id: 'bls-20261110', date: '2026-11-10', time: '08:30', title: 'CPI · 10月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/cpi.htm', notes: '消费者价格指数。' },
  { id: 'bls-20261113', date: '2026-11-13', time: '08:30', title: 'PPI · 10月', category: 'macro', importance: 'medium', url: 'https://www.bls.gov/schedule/news_release/ppi.htm', notes: '生产者价格指数。' },
  { id: 'bea-20261125', date: '2026-11-25', time: '08:30', title: 'GDP（二次估值）/ PCE · 10月', category: 'macro', importance: 'high', url: 'https://www.bea.gov/news/schedule/', notes: 'BEA：Q3 GDP 第二次估值、10月个人收入与支出。' },
  { id: 'bls-20261201', date: '2026-12-01', time: '10:00', title: 'JOLTS 职位空缺 · 10月', category: 'macro', importance: 'medium', url: 'https://www.bls.gov/schedule/news_release/jolts.htm', notes: '职位空缺与劳动力流动调查。' },
  { id: 'bls-20261204', date: '2026-12-04', time: '08:30', title: '就业形势（非农）· 11月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/empsit.htm', notes: 'BLS 官方发布时间；美国东部时间。' },
  { id: 'fed-20261208', date: '2026-12-08', time: '', title: 'FOMC 会议（第1天）', category: 'fed', importance: 'high', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '12月8–9日；伴随经济预测摘要。' },
  { id: 'fed-20261209', date: '2026-12-09', time: '14:00', title: 'FOMC 利率决定 / 发布会', category: 'fed', importance: 'high', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '具体发布时间以美联储当日安排为准。' },
  { id: 'bls-20261210', date: '2026-12-10', time: '08:30', title: 'CPI · 11月', category: 'macro', importance: 'high', url: 'https://www.bls.gov/schedule/news_release/cpi.htm', notes: '消费者价格指数。' },
  { id: 'bls-20261215', date: '2026-12-15', time: '08:30', title: 'PPI · 11月', category: 'macro', importance: 'medium', url: 'https://www.bls.gov/schedule/news_release/ppi.htm', notes: '生产者价格指数。' },
  { id: 'fed-20270106', date: '2027-01-06', time: '14:00', title: 'FOMC 会议纪要（预计）', category: 'fed', importance: 'medium', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm', notes: '预计为12月会议纪要，日期以官方更新为准。' },
  { id: 'earnings-cost-20260924', date: '2026-09-24', time: '', title: 'COST 好市多 · 2026财年第四季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'medium', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Costco Investor Relations 为准。' },
  { id: 'earnings-mu-20260930', date: '2026-09-30', time: '', title: 'MU 美光科技 · 2026财年第四季度财报（预计）', category: 'earnings', subtype: 'techhot', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Micron Investor Relations 为准。' },
  { id: 'earnings-nflx-20261020', date: '2026-10-20', time: '', title: 'NFLX 奈飞 · 2026年第三季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Netflix Investor Relations 为准。' },
  { id: 'earnings-amzn-20261022', date: '2026-10-22', time: '', title: 'AMZN 亚马逊 · 2026年第三季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Amazon Investor Relations 为准。' },
  { id: 'earnings-googl-20261027', date: '2026-10-27', time: '', title: 'GOOGL 谷歌 · 2026年第三季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Alphabet Investor Relations 为准。' },
  { id: 'earnings-msft-20261027', date: '2026-10-27', time: '', title: 'MSFT 微软 · 2027财年第一季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Microsoft Investor Relations 为准。' },
  { id: 'earnings-meta-20261028', date: '2026-10-28', time: '', title: 'META 元平台 · 2026年第三季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Meta Investor Relations 为准。' },
  { id: 'earnings-tsla-20261028', date: '2026-10-28', time: '', title: 'TSLA 特斯拉 · 2026年第三季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Tesla Investor Relations 为准。' },
  { id: 'earnings-aapl-20261029', date: '2026-10-29', time: '', title: 'AAPL 苹果 · 2026财年第四季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Apple Investor Relations 为准。' },
  { id: 'earnings-amd-20261103', date: '2026-11-03', time: '', title: 'AMD 超威半导体 · 2026年第三季度财报（预计）', category: 'earnings', subtype: 'techhot', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 AMD Investor Relations 为准。' },
  { id: 'earnings-pltr-20261109', date: '2026-11-09', time: '', title: 'PLTR 帕兰提尔 · 2026年第三季度财报（预计）', category: 'earnings', subtype: 'techhot', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Palantir Investor Relations 为准。' },
  { id: 'earnings-wmt-20261119', date: '2026-11-19', time: '', title: 'WMT 沃尔玛 · 2027财年第三季度财报（预计）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investingcalendar.com/exchange/nasdaq/earnings', notes: '公开财报日历预计日期，尚未由公司正式确认；以 Walmart Investor Relations 为准。' },
  { id: 'earnings-nvda-20261117', date: '2026-11-17', time: '', title: 'NVDA 英伟达 · 2027财年第三季度财报（已确认）', category: 'earnings', subtype: 'largecap', importance: 'high', url: 'https://investor.nvidia.com/files/content_files/TRANSCRIPT_-NVIDIA-Corp-NVDA-US-Q2-2027-Earnings-Call-26-August-2026-5_00-PM-ET.pdf', notes: '英伟达在 2026 年 8 月 26 日财报电话会中明确安排 2026 年 11 月 17 日讨论 FY2027 第三季度业绩。' },
  { id: 'company-aapl-20260909', date: '2026-09-09', time: '10:00', title: 'AAPL 苹果 · 秋季产品发布会（已确认）', category: 'company', subtype: 'product', importance: 'high', url: 'https://developer.apple.com/hello/september26/', notes: '苹果官方页面确认 9 月 9 日太平洋时间上午 10:00 举行 Apple Event。' },
  { id: 'company-amd-20260904', date: '2026-09-04', time: '', title: 'AMD 超威半导体 · IFA 柏林 2026（已确认）', category: 'company', subtype: 'product', importance: 'medium', url: 'https://www.amd.com/en/corporate/events.html', notes: 'AMD 官方活动页列出 9 月 4–8 日 IFA Berlin 2026，主题为 Personal AI。' },
  { id: 'company-nvda-20260910', date: '2026-09-10', time: '', title: 'NVDA 英伟达 · 高盛科技会议（已确认）', category: 'company', subtype: 'investorday', importance: 'medium', url: 'https://investor.nvidia.com/home/default.aspx', notes: 'NVIDIA Investor Relations 列出 9 月 10 日 Goldman Sachs Communacopia + Technology Conference。' },
  { id: 'company-nvda-20260915', date: '2026-09-15', time: '', title: 'NVDA 英伟达 · AI 基础设施峰会（已确认）', category: 'company', subtype: 'investorday', importance: 'high', url: 'https://www.nvidia.com/en-us/events/ai-infra-summit/', notes: 'NVIDIA 官方页面确认 AI Infra Summit 2026 为 9 月 15–17 日在 Santa Clara 举行。' },
  { id: 'company-meta-20260923', date: '2026-09-23', time: '', title: 'META 元平台 · Connect 开发者大会（已确认）', category: 'company', subtype: 'product', importance: 'high', url: 'https://www.meta.com/blog/connect-2026-save-the-date/', notes: 'Meta 官方公布 Connect 2026 为 9 月 23–24 日，地点为 Menlo Park。' },
  { id: 'company-nvda-20260922', date: '2026-09-22', time: '', title: 'NVDA 英伟达 · AI Day 新加坡（已确认）', category: 'company', subtype: 'product', importance: 'medium', url: 'https://www.nvidia.com/en-us/ai-days/', notes: 'NVIDIA 官方 AI Days 页面列出新加坡站为 9 月 22–23 日。' },
  { id: 'company-amd-20260929', date: '2026-09-29', time: '', title: 'AMD 超威半导体 · 嵌入式计算峰会（已确认）', category: 'company', subtype: 'product', importance: 'low', url: 'https://www.amd.com/en/corporate/events.html', notes: 'AMD 官方活动页列出 9 月 29 日在 Krakow 举行的 ECS Global Series。' },
  { id: 'company-amd-20261012', date: '2026-10-12', time: '', title: 'AMD 超威半导体 · OCP 全球峰会（已确认）', category: 'company', subtype: 'investorday', importance: 'medium', url: 'https://www.amd.com/en/corporate/events.html', notes: 'AMD 官方活动页列出 10 月 12–15 日在 San Jose 举行的 OCP Global Summit。' },
  { id: 'company-nvda-20261021', date: '2026-10-21', time: '', title: 'NVDA 英伟达 · GTC 柏林主题演讲（已确认）', category: 'company', subtype: 'product', importance: 'high', url: 'https://investor.nvidia.com/files/content_files/TRANSCRIPT_-NVIDIA-Corp-NVDA-US-Q2-2027-Earnings-Call-26-August-2026-5_00-PM-ET.pdf', notes: 'NVIDIA 8 月 26 日财报电话会记录列出 Jensen Huang 10 月 21 日 GTC Berlin keynote。' },
  { id: 'company-msft-20261117', date: '2026-11-17', time: '', title: 'MSFT 微软 · Ignite 技术大会（已确认）', category: 'company', subtype: 'product', importance: 'high', url: 'https://ignite.microsoft.com/en-US/home', notes: 'Microsoft 官方活动页确认 Ignite 2026 为 11 月 17–20 日在旧金山举行。' },
  { id: 'company-nvda-20261109', date: '2026-11-09', time: '', title: 'NVDA 英伟达 · AI Day 首尔（已确认）', category: 'company', subtype: 'product', importance: 'medium', url: 'https://www.nvidia.com/en-us/ai-days/', notes: 'NVIDIA 官方 AI Days 页面列出首尔站为 11 月 9–10 日。' },
  { id: 'company-amzn-20261130', date: '2026-11-30', time: '', title: 'AMZN 亚马逊 · AWS re:Invent 云计算大会（已确认）', category: 'company', subtype: 'product', importance: 'high', url: 'https://aws.amazon.com/events/reinvent/', notes: 'AWS 官方页面确认 re:Invent 2026 为 11 月 30 日–12 月 4 日在拉斯维加斯举行。' },
  { id: 'tsla-20260903', date: '2026-09-03', time: '', title: 'TSLA 特斯拉 · Cybercab 发布会（已确认）', category: 'company', subtype: 'product', importance: 'high', url: 'https://www.tesla.com/en_ae/event/cybercab-event-sweepstakes', notes: 'Tesla 官方活动页列出奥斯汀活动窗口为 2026 年 8 月 17 日–9 月 3 日；用户所称“Saber Cup”应为 Cybercab。' },
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
  market: { title: '市场子类', options: [['holiday', '交易所假期'], ['expiry', '期权到期'], ['rebalance', '指数再平衡'], ['other', '其他']] }
};
const earningsWatchlists = {
  largecap: [['AAPL', '苹果', '苹果'], ['MSFT', '微软', '微软'], ['NVDA', '英伟达', '英伟达'], ['AMZN', '亚马逊', '亚马逊'], ['GOOGL', '谷歌', '谷歌'], ['META', 'Meta', '元平台'], ['AVGO', '博通', '博通'], ['TSLA', '特斯拉', '特斯拉'], ['TSM', '台积电', '台积电'], ['BRK.B', '伯克希尔', '伯克希尔'], ['WMT', '沃尔玛', '沃尔玛'], ['LLY', '礼来', '礼来'], ['JPM', '摩根大通', '摩根大通'], ['V', 'Visa', '维萨'], ['ORCL', '甲骨文', '甲骨文'], ['NFLX', '奈飞', '奈飞'], ['XOM', '埃克森美孚', '埃克森美孚'], ['MA', '万事达', '万事达'], ['COST', '好市多', '好市多'], ['PG', '宝洁', '宝洁']],
  techhot: [['AMD', '超威半导体', '超威半导体'], ['PLTR', 'Palantir', '帕兰提尔'], ['ARM', 'Arm', '安谋'], ['MU', '美光科技', '美光科技'], ['MRVL', '迈威尔科技', '迈威尔科技'], ['SNOW', 'Snowflake', '雪花科技'], ['CRWD', 'CrowdStrike', '众击网络'], ['NOW', 'ServiceNow', '服务诺'], ['UBER', 'Uber', '优步'], ['COIN', 'Coinbase', '币库']]
};
const defaultSubfilters = Object.fromEntries(Object.entries(subfilterDefinitions).map(([category, definition]) => [category, Object.fromEntries(definition.options.map(([key]) => [key, true]))]));
function refreshEventSubtypeOptions() { const category = document.getElementById('eventCategory')?.value; const select = document.getElementById('eventSubtype'); if (!select || !category) return; const options = subfilterDefinitions[category]?.options || [['other', '其他']]; select.innerHTML = options.map(([key, label]) => `<option value="${key}">${label}</option>`).join(''); }
const storage = (() => { try { const value = window.localStorage; const probe = '__market_pulse_probe__'; value.setItem(probe, '1'); value.removeItem(probe); return value; } catch (_) { return { getItem: () => null, setItem: () => {}, removeItem: () => {}, key: () => null, length: 0 }; } })();
const defaultFilters = { macro: true, fed: true, earnings: true, company: true, market: true };
let savedFilters = {}; try { savedFilters = JSON.parse(storage.getItem('market-pulse-filters-v1') || '{}'); } catch (_) {}
let savedSubfilters = {}; try { savedSubfilters = JSON.parse(storage.getItem('market-pulse-subfilters-v1') || '{}'); } catch (_) {}
const savedTimezone = storage.getItem('market-pulse-timezone-v1');
const savedLanguage = storage.getItem('market-pulse-language-v1');
const state = { cursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1), selected: '', filters: { ...defaultFilters, ...savedFilters }, subfilters: Object.fromEntries(Object.entries(defaultSubfilters).map(([category, values]) => [category, { ...values, ...(savedSubfilters[category] || {}) }])), openGear: null, language: savedLanguage === 'zh' ? 'zh' : 'mixed', timezone: timezoneNames[savedTimezone] ? savedTimezone : SOURCE_TZ, events: [] };
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
function horizonEndKey() { const end = parseDate(todayKey()); end.setDate(end.getDate() + 90); return localDateKey(end); }
function withinDisplayWindow(key) { return key <= horizonEndKey(); }
function eventMatchesSubfilters(event) { const options = Array.isArray(event.subtypes) ? event.subtypes : [event.subtype || 'other']; const filters = state.subfilters[event.category] || {}; return options.some(option => filters[option] !== false); }
function visibleEvents() { return state.events.filter(event => Boolean(state.filters[event.category]) && withinDisplayWindow(eventDisplayDate(event)) && eventMatchesSubfilters(event)); }
function eventsFor(key) { return visibleEvents().filter(event => eventDisplayDate(event) === key).sort((a, b) => (a.time || '99:99').localeCompare(b.time || '99:99')); }
function persist() { storage.setItem('market-pulse-events-v1', JSON.stringify(state.events.filter(event => !event.seed))); }
function inferSubtypes(event) { const title = String(event.title || '').toLowerCase(); if (event.subtypes || event.subtype) return event.subtypes || [event.subtype]; if (event.category === 'macro') { const values = []; if (title.includes('cpi')) values.push('cpi'); if (title.includes('非农') || title.includes('就业形势')) values.push('nfp'); if (title.includes('ppi')) values.push('ppi'); if (title.includes('jolts')) values.push('jolts'); if (title.includes('gdp')) values.push('gdp'); if (title.includes('pce')) values.push('pce'); return values.length ? values : ['other']; } if (event.category === 'fed') { if (title.includes('纪要')) return ['minutes']; if (title.includes('利率决定') || title.includes('发布会')) return ['decision', 'sep']; return ['meeting']; } if (event.category === 'company') return ['product']; if (event.category === 'earnings') return ['other']; if (event.category === 'market') return ['other']; return ['other']; }
function normalizeEvent(event) { const normalized = { ...event }; const subtypes = inferSubtypes(normalized); normalized.subtypes = subtypes; normalized.subtype = subtypes[0]; return normalized; }
function loadEvents() { let extra = []; let updates = {}; try { extra = JSON.parse(storage.getItem('market-pulse-events-v1') || '[]'); } catch (_) {} try { updates = JSON.parse(storage.getItem('market-pulse-updates-v1') || '{}'); } catch (_) {} if (!updates || typeof updates !== 'object' || Array.isArray(updates)) updates = {}; const applyUpdates = event => normalizeEvent(updates[event.id] ? { ...event, ...updates[event.id] } : event); state.events = [...seedEvents.map(event => applyUpdates({ ...event, seed: true, sourceTimeZone: SOURCE_TZ })), ...(Array.isArray(extra) ? extra.map(applyUpdates) : [])]; }
function archivePastEvents() { let archived = {}; try { archived = JSON.parse(storage.getItem('market-pulse-history-v1') || '{}'); } catch (_) {} if (!archived || typeof archived !== 'object' || Array.isArray(archived)) archived = {}; const today = todayKey(); state.events.forEach(event => { if (eventDisplayDate(event) < today) archived[event.id] = { ...event, archivedAt: new Date().toISOString() }; }); storage.setItem('market-pulse-history-v1', JSON.stringify(archived)); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c])); }
function escapeAttr(value) { return escapeHtml(value); }
function eventCard(event) { const importance = event.importance === 'high' ? '重要' : event.importance === 'medium' ? '关注' : '一般'; return `<article class="event-detail ${event.category}"><div class="event-detail-top"><h4>${escapeHtml(localizeText(event.title))}</h4><span class="importance ${event.importance}">${importance}</span></div><div class="event-time">${formatEventTime(event)} · ${categoryNames[event.category] || event.category}</div>${event.notes ? `<p class="event-note">${escapeHtml(localizeText(event.notes))}</p>` : ''}${event.url ? `<a class="source-link" href="${escapeAttr(event.url)}" target="_blank" rel="noreferrer">查看来源 ↗</a>` : ''}</article>`; }

function insightFor(event) {
  let fallback;
  if (event.category === 'macro') fallback = { progress: '发布时间已由官方日程列出；实际值尚未发布。', consensus: '临近发布时补充市场一致预期、前值和重要分项；尚未抓到可靠数字时不虚构数值。', view: '高于预期通常推升利率预期并压制长久期成长股；低于预期通常相反。' };
  else if (event.category === 'fed') fallback = { progress: '会议/纪要日期已列入官方日历；具体措辞和点阵图仍待发布。', consensus: '市场通常先看利率期货隐含路径、声明措辞和经济预测摘要。', view: '偏鹰会抬高实际利率并压制成长股估值；偏鸽则可能改善风险偏好。' };
  else if (event.category === 'earnings') { const confirmed = /已确认/.test(event.title || ''); fallback = { progress: confirmed ? '公司已确认该财报日期；具体业绩仍待发布。' : '该日期为公开日历预计值，仍需公司 Investor Relations 正式确认。', consensus: '发布前补充收入、EPS、指引和隐含波动的一致预期；未发布数据标记为待发布。', view: '超预期与上调指引偏利好；只超收入但利润率或指引走弱，股价可能下跌。' }; }
  else if (event.category === 'company') fallback = { progress: '公司活动已列入清单；后续以官方公告、演示和监管文件更新。', consensus: '市场关注可量化的交付、订单、时间表和单位经济性，而不只是愿景。', view: '只有新增信息能进入收入/利润模型时，才更可能形成持续性重估。' };
  else fallback = { progress: '事件已列入市场日历，具体内容以主办方公告为准。', consensus: '临近事件时补充市场定价、预期差和相关资产表现。', view: '把成交量、价格位置和消息兑现程度一起看，避免单看标题追涨杀跌。' };
  return { ...fallback, ...(event.analysis || {}) };
}

function updateToolbarMonth() { const monthPrefix = `${state.cursor.getFullYear()}-${String(state.cursor.getMonth() + 1).padStart(2, '0')}`; document.getElementById('monthTitle').textContent = formatMonth(state.cursor); document.getElementById('monthMeta').textContent = `${visibleEvents().filter(event => eventDisplayDate(event).startsWith(monthPrefix)).length} 项事件 · ${timezoneLabel(state.timezone)}`; }
function renderCalendarCell(date, eventMap) { const key = localDateKey(date); const monthPrefix = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`; const monthStart = date.getDate() === 1; const cell = document.createElement('button'); cell.type = 'button'; cell.className = `day-cell${monthStart ? ' month-start' : ''}${key === todayKey() ? ' today' : ''}${key === state.selected ? ' selected' : ''}`; if (monthStart) cell.dataset.month = monthPrefix; cell.setAttribute('aria-label', formatLongDate(key)); const events = eventMap.get(key) || []; const pills = events.slice(0, 3).map(event => `<span class="event-pill ${event.category}"><span class="pill-dot"></span><span>${escapeHtml(localizeText(event.title))}</span></span>`).join(''); const more = events.length > 3 ? `<span class="more-pill">+${events.length - 3} 项</span>` : ''; cell.innerHTML = `${monthStart ? `<span class="month-marker">${formatMonth(date)}</span>` : ''}<span class="date-number">${date.getDate()}</span><span class="day-events">${pills}${more}</span>`; cell.addEventListener('click', () => { const previousMonth = `${state.cursor.getFullYear()}-${String(state.cursor.getMonth() + 1).padStart(2, '0')}`; state.selected = key; state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); render(previousMonth !== monthPrefix); }); return cell; }

function renderDailyBrief(selected) { const node = document.getElementById('dailyBrief'); if (!selected.length) { node.innerHTML = '<div class="empty-state">这一天没有可用的事件简报。</div>'; return; } node.innerHTML = selected.map(event => { const insight = insightFor(event); return `<article class="brief-card"><h4>${escapeHtml(localizeText(event.title))}</h4><div class="brief-row"><span class="brief-label">当前进展</span><p>${escapeHtml(localizeText(insight.progress))}</p></div><div class="brief-row"><span class="brief-label">市场预期</span><p>${escapeHtml(localizeText(insight.consensus))}</p></div><div class="brief-row"><span class="brief-label">影响判断</span><p>${escapeHtml(localizeText(insight.view))}</p></div></article>`; }).join(''); }
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
function applyLanguage() { const full = state.language === 'zh'; const text = { brand: full ? '市场脉搏' : 'MARKET PULSE', selected: full ? '选中日期' : 'SELECTED DAY', brief: full ? '市场简报' : 'MARKET BRIEF', sources: full ? '来源链接' : 'SOURCE LINKS', local: full ? '本地事件' : 'LOCAL EVENT' }; document.title = full ? '投资日历' : 'Market Pulse · 投资日历'; document.getElementById('brandEyebrow').textContent = text.brand; document.getElementById('selectedDayLabel').textContent = text.selected; document.getElementById('marketBriefLabel').textContent = text.brief; document.getElementById('sourceLinksLabel').textContent = text.sources; document.getElementById('localEventLabel').textContent = text.local; const timezoneOptions = full ? ['纽约时间', '北京时间', '香港时间', '伦敦时间', '协调世界时'] : ['纽约时间 · ET', '北京时间 · CST', '香港时间 · HKT', '伦敦时间 · GMT/BST', '协调世界时 · UTC']; document.querySelectorAll('#timezoneSelect option').forEach((option, index) => { option.textContent = timezoneOptions[index]; }); document.getElementById('blsSourceLink').textContent = full ? '美国劳工统计局 · 消费者价格指数 / 非农' : 'BLS · CPI / 非农'; document.getElementById('fedSourceLink').textContent = full ? '美联储 · 联邦公开市场委员会' : 'Federal Reserve · FOMC'; document.getElementById('beaSourceLink').textContent = full ? '美国经济分析局 · 国内生产总值 / 个人消费支出' : 'BEA · GDP / PCE'; document.getElementById('nasdaqSourceLink').textContent = full ? '纳斯达克 · 财报' : 'Nasdaq · Earnings'; document.getElementById('languageSelect').value = state.language; }
function render(focusMonth = false) { applyLanguage(); renderCalendar(focusMonth); renderSidePanel(); renderSubfilterPanel(); renderStorage(); const allChecked = Object.values(state.filters).every(Boolean); document.getElementById('filterAll').checked = allChecked; document.querySelectorAll('input[data-filter]').forEach(input => { input.checked = Boolean(state.filters[input.dataset.filter]); }); document.getElementById('timezoneSelect').value = state.timezone; }

function openModal() { const modal = document.getElementById('modalBackdrop'); modal.hidden = false; const form = document.getElementById('eventForm'); form.reset(); form.elements.date.value = state.selected; form.elements.category.value = 'macro'; refreshEventSubtypeOptions(); setTimeout(() => form.elements.title.focus(), 0); }
function closeModal() { document.getElementById('modalBackdrop').hidden = true; }
function handleFormSubmit(event) { event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); const item = normalizeEvent({ id: `local-${Date.now()}`, date: data.get('date'), time: data.get('time'), title: data.get('title').trim(), category: data.get('category'), subtype: data.get('subtype'), importance: data.get('importance'), url: data.get('url').trim(), notes: data.get('notes').trim(), sourceTimeZone: state.timezone, seed: false }); state.events.push(item); persist(); state.selected = item.date; const date = parseDate(item.date); state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); closeModal(); render(true); }
function clearLocalData() { if (!window.confirm('清除本机保存的自定义事件、每日更新快照和筛选偏好？内置官方日程会保留。')) return; ['market-pulse-events-v1', 'market-pulse-history-v1', 'market-pulse-updates-v1', 'market-pulse-filters-v1', 'market-pulse-subfilters-v1', 'market-pulse-timezone-v1', 'market-pulse-language-v1'].forEach(key => storage.removeItem(key)); state.events = []; state.filters = { ...defaultFilters }; state.subfilters = Object.fromEntries(Object.entries(defaultSubfilters).map(([category, values]) => [category, { ...values }])); state.openGear = null; state.language = 'mixed'; state.timezone = SOURCE_TZ; state.selected = todayKey(); const today = parseDate(state.selected); state.cursor = new Date(today.getFullYear(), today.getMonth(), 1); loadEvents(); render(true); }
function exportIcs() { const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Market Pulse//Investment Events//ZH', 'CALSCALE:GREGORIAN', `X-WR-CALNAME:Market Pulse 投资事件 · ${timezoneLabel(state.timezone)}`]; visibleEvents().forEach(event => { const displayDate = eventDisplayDate(event).replaceAll('-', ''); const instant = eventInstant(event); let startLine; let endLine = ''; if (instant) { const parts = getZonedParts(instant, state.timezone); const stamp = `${parts.year}${String(parts.month).padStart(2, '0')}${String(parts.day).padStart(2, '0')}T${String(parts.hour).padStart(2, '0')}${String(parts.minute).padStart(2, '0')}00`; startLine = `DTSTART;TZID=${state.timezone}:${stamp}`; const end = new Date(instant.getTime() + 30 * 60 * 1000); const endParts = getZonedParts(end, state.timezone); endLine = `DTEND;TZID=${state.timezone}:${endParts.year}${String(endParts.month).padStart(2, '0')}${String(endParts.day).padStart(2, '0')}T${String(endParts.hour).padStart(2, '0')}${String(endParts.minute).padStart(2, '0')}00`; } else { startLine = `DTSTART;VALUE=DATE:${displayDate}`; } lines.push('BEGIN:VEVENT', `UID:${event.id}@market-pulse.local`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`, startLine, ...(endLine ? [endLine] : []), `SUMMARY:${icsEscape(localizeText(event.title))}`, `CATEGORIES:${icsEscape(categoryNames[event.category] || event.category)}`, ...(event.url ? [`URL:${event.url}`] : []), ...(event.notes ? [`DESCRIPTION:${icsEscape(localizeText(event.notes))}`] : []), 'END:VEVENT'); }); lines.push('END:VCALENDAR'); const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'market-pulse-investment-events.ics'; a.click(); URL.revokeObjectURL(url); }
function icsEscape(value) { return String(value).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }

document.getElementById('prevMonthBtn').addEventListener('click', () => changeMonth(-1));
document.getElementById('nextMonthBtn').addEventListener('click', () => changeMonth(1));
document.getElementById('todayBtn').addEventListener('click', () => { const key = todayKey(); const date = parseDate(key); state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); state.selected = key; render(true); });
document.getElementById('filterAll').addEventListener('change', event => { Object.keys(state.filters).forEach(key => { state.filters[key] = event.target.checked; }); storage.setItem('market-pulse-filters-v1', JSON.stringify(state.filters)); render(); });
document.querySelectorAll('input[data-filter]').forEach(input => input.addEventListener('change', event => { state.filters[event.target.dataset.filter] = event.target.checked; storage.setItem('market-pulse-filters-v1', JSON.stringify(state.filters)); render(); }));
document.querySelectorAll('.gear-btn').forEach(button => button.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); const category = button.dataset.gear; state.openGear = state.openGear === category ? null : category; render(); }));
document.getElementById('eventCategory').addEventListener('change', refreshEventSubtypeOptions);
document.getElementById('timezoneSelect').addEventListener('change', event => { state.timezone = event.target.value; storage.setItem('market-pulse-timezone-v1', state.timezone); const key = todayKey(); const date = parseDate(key); state.selected = key; state.cursor = new Date(date.getFullYear(), date.getMonth(), 1); render(true); });
document.getElementById('languageSelect').addEventListener('change', event => { state.language = event.target.value === 'zh' ? 'zh' : 'mixed'; storage.setItem('market-pulse-language-v1', state.language); render(); });
document.getElementById('clearDataBtn').addEventListener('click', clearLocalData);
document.getElementById('addEventBtn').addEventListener('click', openModal); document.getElementById('closeModalBtn').addEventListener('click', closeModal); document.getElementById('cancelModalBtn').addEventListener('click', closeModal); document.getElementById('modalBackdrop').addEventListener('click', event => { if (event.target.id === 'modalBackdrop') closeModal(); }); document.getElementById('eventForm').addEventListener('submit', handleFormSubmit); document.getElementById('exportBtn').addEventListener('click', exportIcs);
const calendarScroll = document.getElementById('calendarScroll');
let scrollRaf = 0;
calendarScroll.addEventListener('scroll', () => { if (scrollRaf) return; scrollRaf = window.requestAnimationFrame(() => { scrollRaf = 0; const marker = calendarScroll.scrollTop + 50; const monthStarts = [...document.querySelectorAll('.day-cell.month-start')]; let current = monthStarts[0]; monthStarts.forEach(cell => { if (cell.offsetTop <= marker) current = cell; }); if (!current) return; const [year, month] = current.dataset.month.split('-').map(Number); if (state.cursor.getFullYear() !== year || state.cursor.getMonth() + 1 !== month) { state.cursor = new Date(year, month - 1, 1); updateToolbarMonth(); } }); }, { passive: true });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); if (event.target.matches('input, textarea, select')) return; if (event.key === 'PageDown') changeMonth(1); if (event.key === 'PageUp') changeMonth(-1); });

/* Keep the visible surface to the current month plus the rolling 90-day window. */
function calendarWindowBounds() {
  const today = parseDate(todayKey());
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

refreshEventSubtypeOptions(); loadEvents(); archivePastEvents(); render(true);
