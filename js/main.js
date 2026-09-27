/* ArloWang Lab | V1 离线局部导航
 * 七个 .html 文件共享同一套导航与页面切换逻辑。
 * file:// 禁止跨文件 fetch，因此七个 <main> 的内容在构建时打包进此文件。
 * 导航只更换 <main>，顶部导航和页脚保持在同一文档中，不再整页刷新。
 * 直接打开任一原 HTML 文件仍可访问；JS 失效则保留普通多页面导航。
 */
(() => {
  'use strict';
  const PAGE_DATA = {"index":{"title":"首页","html":"\n<section aria-label=\"保研服务介绍\" class=\"hero home-hero\">\n<div class=\"container hero-layout\">\n<div class=\"hero-left\">\n<div aria-label=\"保研服务介绍\" aria-roledescription=\"轮播\" class=\"hero-copy\">\n<article aria-hidden=\"false\" class=\"slide is-active\">\n<h1>保研准备<br/><em>从清晰规划开始</em></h1>\n<p class=\"lead\">ArloWang Lab 面向准备保研的本科生，提供择校规划、文书指导、面试辅导及志愿填报相关咨询。围绕个人经历与申请目标，认真准备关键环节。</p>\n<div class=\"actions\"><a class=\"button\" href=\"services.html\">了解服务项目</a><a class=\"button button--outline\" href=\"contact.html\">联系咨询</a></div>\n</article>\n<article aria-hidden=\"true\" class=\"slide\">\n<h1>认真梳理经历<br/><em>清晰呈现个人优势</em></h1>\n<p class=\"lead\">从个人简历到申请陈述，围绕真实经历梳理信息、调整结构，让科研与学习经历得到准确、清晰的表达。</p>\n<div class=\"actions\"><a class=\"button\" href=\"services.html#service-materials\">了解文书指导</a></div>\n</article>\n<article aria-hidden=\"true\" class=\"slide\">\n<h1>面向复试考核<br/><em>建立自己的回答逻辑</em></h1>\n<p class=\"lead\">结合科研经历、专业知识与公开考核信息，开展有针对性的问答训练和模拟面试。</p>\n<div class=\"actions\"><a class=\"button\" href=\"services.html#service-interview\">了解面试辅导</a></div>\n</article>\n<article aria-hidden=\"true\" class=\"slide\">\n<h1>走到志愿填报<br/><em>让选择更有依据</em></h1>\n<p class=\"lead\">面对系统填报、导师沟通与接收通知，梳理公开规则和关键时间节点，结合个人目标，理清需要核实的信息与作出决定的顺序。</p>\n<div class=\"actions\"><a class=\"button\" href=\"services.html#service-planning\">了解规划服务</a></div>\n</article>\n</div>\n<div aria-label=\"轮播控制\" class=\"carousel-controls\">\n<button aria-label=\"上一张\" data-carousel=\"prev\" type=\"button\">‹</button>\n<div class=\"dots\">\n<button aria-label=\"查看第一张\" aria-pressed=\"true\" class=\"dot is-active\" type=\"button\"></button>\n<button aria-label=\"查看第二张\" aria-pressed=\"false\" class=\"dot\" type=\"button\"></button>\n<button aria-label=\"查看第三张\" aria-pressed=\"false\" class=\"dot\" type=\"button\"></button>\n<button aria-label=\"查看第四张\" aria-pressed=\"false\" class=\"dot\" type=\"button\"></button>\n</div>\n<button aria-label=\"下一张\" data-carousel=\"next\" type=\"button\">›</button>\n<span aria-live=\"polite\" class=\"visually-hidden\" id=\"carousel-status\"></span>\n</div>\n</div>\n<div aria-label=\"保研准备中常见的疑问\" class=\"question-glass\">\n<div class=\"question-glass__heading\"><span aria-hidden=\"true\" class=\"question-glass__glint\"></span><strong>保研路上，你是否也在想</strong></div>\n<div aria-hidden=\"true\" class=\"question-marquee\">\n<div class=\"question-lane question-lane--one\"><div class=\"question-track\"><div aria-hidden=\"false\" class=\"question-group\"><span class=\"question-pill\">我的排名能申请哪些学校？</span><span class=\"question-pill\">夏令营和预推免怎么安排？</span><span class=\"question-pill\">跨专业申请有什么要求？</span></div><div aria-hidden=\"true\" class=\"question-group\"><span class=\"question-pill\">我的排名能申请哪些学校？</span><span class=\"question-pill\">夏令营和预推免怎么安排？</span><span class=\"question-pill\">跨专业申请有什么要求？</span></div></div></div>\n<div class=\"question-lane question-lane--two\"><div class=\"question-track\"><div aria-hidden=\"false\" class=\"question-group\"><span class=\"question-pill\">简历里的科研经历怎么写？</span><span class=\"question-pill\">面试老师会追问什么？</span><span class=\"question-pill\">如何准备英文自我介绍？</span></div><div aria-hidden=\"true\" class=\"question-group\"><span class=\"question-pill\">简历里的科研经历怎么写？</span><span class=\"question-pill\">面试老师会追问什么？</span><span class=\"question-pill\">如何准备英文自我介绍？</span></div></div></div>\n<div class=\"question-lane question-lane--three\"><div class=\"question-track\"><div aria-hidden=\"false\" class=\"question-group\"><span class=\"question-pill\">联系导师要注意什么？</span><span class=\"question-pill\">拿到多个通知怎么选择？</span><span class=\"question-pill\">填报系统里的顺序怎么定？</span></div><div aria-hidden=\"true\" class=\"question-group\"><span class=\"question-pill\">联系导师要注意什么？</span><span class=\"question-pill\">拿到多个通知怎么选择？</span><span class=\"question-pill\">填报系统里的顺序怎么定？</span></div></div></div>\n<div class=\"question-lane question-lane--four\"><div class=\"question-track\"><div aria-hidden=\"false\" class=\"question-group\"><span class=\"question-pill\">专业课复习从哪开始？</span><span class=\"question-pill\">如何讲清自己的项目贡献？</span><span class=\"question-pill\">志愿填报时间会冲突吗？</span></div><div aria-hidden=\"true\" class=\"question-group\"><span class=\"question-pill\">专业课复习从哪开始？</span><span class=\"question-pill\">如何讲清自己的项目贡献？</span><span class=\"question-pill\">志愿填报时间会冲突吗？</span></div></div></div>\n</div>\n<p class=\"question-glass__foot\">这些具体的问题，值得认真讨论</p>\n</div>\n</div>\n</section>\n<section aria-labelledby=\"home-fit-title\" class=\"home-fit\">\n<div class=\"container\">\n<header class=\"fit-head reveal\">\n<div><h2 id=\"home-fit-title\">我的服务，<em>适合谁？</em></h2></div>\n<p>聚焦环境科学与工程专业体系，覆盖给排水、地下水与生态方向。无论继续本专业还是跨方向申请，都可以围绕个人经历找到清晰、可信的保研路径。</p>\n</header>\n<h3 class=\"fit-section-title reveal\">适合哪些专业？</h3>\n<div aria-label=\"适合辅导的专业范围\" class=\"fit-major-grid reveal\">\n<article class=\"fit-major\"><span aria-hidden=\"true\" class=\"fit-major__line\"></span><h3>环境科学与工程类</h3><span class=\"fit-major__code\">专业类 0825</span><ul><li><span>环境科学与工程</span><code>082501</code></li><li><span>环境工程</span><code>082502</code></li><li><span>环境科学</span><code>082503</code></li><li><span>环境生态工程</span><code>082504</code></li><li><span>环保设备工程</span><code>082505T</code></li><li><span>资源环境科学</span><code>082506T</code></li><li><span>水质科学与技术</span><code>082507T</code></li></ul></article>\n<article class=\"fit-major\"><span aria-hidden=\"true\" class=\"fit-major__line\"></span><h3>给排水科学与工程类</h3><span class=\"fit-major__code\">本科专业 081003</span><ul><li><span>给排水科学与工程</span><code>081003</code></li></ul><p class=\"fit-major__note\">聚焦饮用水、污水处理与市政水环境等专业方向。</p></article>\n<article class=\"fit-major\"><span aria-hidden=\"true\" class=\"fit-major__line\"></span><h3>地下水科学与工程类</h3><span class=\"fit-major__code\">本科专业 081404T</span><ul><li><span>地下水科学与工程</span><code>081404T</code></li></ul><p class=\"fit-major__note\">聚焦地下水环境、污染迁移与修复等专业方向。</p></article>\n<article class=\"fit-major\"><span aria-hidden=\"true\" class=\"fit-major__line\"></span><h3>生态类</h3><span class=\"fit-major__code\">相关本科专业</span><ul><li><span>生态学</span><code>071004</code></li><li><span>环境生态工程</span><code>082504</code></li></ul><p class=\"fit-major__note\">聚焦生态学与环境科学的交叉方向。</p></article>\n</div>\n<div class=\"fit-meta-grid reveal\">\n<section aria-labelledby=\"fit-path-title\" class=\"fit-meta\"><h3 id=\"fit-path-title\">适合哪些想法？</h3><div class=\"fit-options\"><div class=\"fit-option-row\"><strong>申请方向</strong><div class=\"fit-option-values\"><span>本专业保研</span><span>跨专业保研</span></div></div><div class=\"fit-option-row\"><strong>培养类型</strong><div class=\"fit-option-values\"><span>学硕</span><span>专硕</span><span>直博</span></div></div></div></section>\n<section aria-labelledby=\"fit-destination-title\" class=\"fit-destinations\">\n<div class=\"fit-destinations__head\"><h3 id=\"fit-destination-title\">可去哪些学校？</h3><p>既往学生去向</p></div>\n<p class=\"visually-hidden\">既往学生去向包括：北大深圳、南京大学、浙江大学、中国科学技术大学、哈尔滨工业大学、西安交通大学、武汉大学、华中科技大学、北京师范大学。</p>\n<div aria-hidden=\"true\" class=\"fit-school-marquee\">\n<div class=\"fit-school-lane fit-school-lane--forward\">\n<div class=\"fit-school-group\"><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/pku.svg\"/>北大深圳</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/nju.svg\"/>南京大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/zju.svg\"/>浙江大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/ustc.svg\"/>中国科学技术大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hit.svg\"/>哈尔滨工业大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/xjtu.svg\"/>西安交通大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/whu.svg\"/>武汉大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hust.svg\"/>华中科技大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/bnu.svg\"/>北京师范大学</span></div>\n<div aria-hidden=\"true\" class=\"fit-school-group\"><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/pku.svg\"/>北大深圳</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/nju.svg\"/>南京大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/zju.svg\"/>浙江大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/ustc.svg\"/>中国科学技术大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hit.svg\"/>哈尔滨工业大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/xjtu.svg\"/>西安交通大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/whu.svg\"/>武汉大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hust.svg\"/>华中科技大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/bnu.svg\"/>北京师范大学</span></div>\n</div>\n<div class=\"fit-school-lane fit-school-lane--reverse\">\n<div class=\"fit-school-group\"><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/bnu.svg\"/>北京师范大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hust.svg\"/>华中科技大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/whu.svg\"/>武汉大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/xjtu.svg\"/>西安交通大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hit.svg\"/>哈尔滨工业大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/ustc.svg\"/>中国科学技术大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/zju.svg\"/>浙江大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/nju.svg\"/>南京大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/pku.svg\"/>北大深圳</span></div>\n<div aria-hidden=\"true\" class=\"fit-school-group\"><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/bnu.svg\"/>北京师范大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hust.svg\"/>华中科技大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/whu.svg\"/>武汉大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/xjtu.svg\"/>西安交通大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/hit.svg\"/>哈尔滨工业大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/ustc.svg\"/>中国科学技术大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/zju.svg\"/>浙江大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/nju.svg\"/>南京大学</span><span class=\"fit-school\"><img alt=\"\" src=\"assets/school-logos/pku.svg\"/>北大深圳</span></div>\n</div>\n</div>\n<p class=\"fit-destinations__note\">以上为既往学生去向示例，仅说明个案覆盖，不构成对申请结果的承诺。</p>\n</section>\n</div>\n</div>\n</section>\n<section aria-labelledby=\"home-challenges-title\" class=\"section home-challenges\">\n<div class=\"container\">\n<div class=\"home-challenges__intro reveal\"><h2 id=\"home-challenges-title\">保研阶段，你会面临什么问题</h2><p>从决定申请，到完成最后的志愿填报，每一阶段都有需要厘清的信息和需要准备的事情。</p></div>\n<div class=\"challenge-list\">\n<article class=\"challenge-row reveal\"><div class=\"challenge-row__label\">确定目标</div><div class=\"challenge-row__body\"><h3>信息很多，怎样找到自己的方向</h3><p>院校要求、专业方向、申请时间交织在一起。先梳理已有条件，才能判断下一步应当重点准备什么。</p></div><span aria-hidden=\"true\" class=\"challenge-row__symbol\">↗</span></article>\n<article class=\"challenge-row reveal\"><div class=\"challenge-row__label\">准备材料</div><div class=\"challenge-row__body\"><h3>做过的事情，怎样准确讲清楚</h3><p>课程、竞赛和科研经历并不缺少，但如何筛选重点、说明个人贡献，需要重新组织表达。</p></div><span aria-hidden=\"true\" class=\"challenge-row__symbol\">↗</span></article>\n<article class=\"challenge-row reveal\"><div class=\"challenge-row__label\">面对复试</div><div class=\"challenge-row__body\"><h3>面对连续追问，怎样从容作答</h3><p>从研究背景到实验方法，从专业基础到英文问答，需要理解知识之间的联系，而不只是背诵答案。</p></div><span aria-hidden=\"true\" class=\"challenge-row__symbol\">↗</span></article>\n<article class=\"challenge-row reveal\"><div class=\"challenge-row__label\">志愿填报</div><div class=\"challenge-row__body\"><h3>走到最后一步，怎样核实关键选择</h3><p>接收通知、系统填报和时限要求可能接连出现。及时核对官方信息，厘清自己的选择与操作顺序。</p></div><span aria-hidden=\"true\" class=\"challenge-row__symbol\">↗</span></article>\n</div>\n</div>\n</section>\n<section aria-labelledby=\"home-help-title\" class=\"section home-help\">\n<div class=\"container\">\n<div class=\"home-help__heading reveal\"><h2 id=\"home-help-title\">与你同行，我会提供什么帮助</h2><p>围绕你正在准备的环节，提供清晰、具体的讨论与训练。</p></div>\n<div class=\"home-help__grid\">\n<article class=\"help-item reveal\"><div class=\"help-item__head\"><span aria-hidden=\"true\" class=\"help-item__line\"></span><h3>择校规划</h3></div><p>梳理个人背景和目标院校要求，讨论申请方向、时间节点及志愿填报时需要核实的信息。</p><a class=\"text-link\" href=\"services.html#service-planning\">了解择校规划 <span aria-hidden=\"true\">↗</span></a></article>\n<article class=\"help-item reveal\"><div class=\"help-item__head\"><span aria-hidden=\"true\" class=\"help-item__line\"></span><h3>文书指导</h3></div><p>围绕真实经历，梳理简历、个人陈述与科研项目表达，让重要信息更准确、更有条理。</p><a class=\"text-link\" href=\"services.html#service-materials\">了解文书指导 <span aria-hidden=\"true\">↗</span></a></article>\n<article class=\"help-item reveal\"><div class=\"help-item__head\"><span aria-hidden=\"true\" class=\"help-item__line\"></span><h3>面试辅导</h3></div><p>结合个人材料开展专业知识问答、科研经历追问与模拟面试，练习把思路说明白。</p><a class=\"text-link\" href=\"services.html#service-interview\">了解面试辅导 <span aria-hidden=\"true\">↗</span></a></article>\n<article class=\"help-item reveal\"><div class=\"help-item__head\"><span aria-hidden=\"true\" class=\"help-item__line\"></span><h3>志愿填报</h3></div><p>梳理官方填报规则、时间节点及接收通知，结合个人意向讨论填报前需要核实的事项。</p><a class=\"text-link\" href=\"contact.html\">咨询填报相关问题 <span aria-hidden=\"true\">↗</span></a></article></div>\n</div>\n</section>\n"},"services":{"title":"服务项目","html":"\n<section class=\"service-hero\" aria-labelledby=\"service-page-title\">\n      <div class=\"container reveal\">\n        <h1 id=\"service-page-title\">你会得到哪些<em>帮助</em></h1>\n        <p>从申请规划到志愿填报，根据你当前的准备阶段和真实需求，选择需要的具体帮助。</p>\n      </div>\n    </section>\n\n    <nav class=\"service-path\" aria-label=\"服务项目导航\">\n      <div class=\"container service-path__viewport\">\n        <div class=\"service-path__track\">\n          <span class=\"service-path__flow\" aria-hidden=\"true\"></span>\n          <a class=\"service-path__item\" href=\"#service-planning\" aria-current=\"step\"><span class=\"service-path__dot\"></span><span>申请规划</span></a>\n          <a class=\"service-path__item\" href=\"#service-growth\"><span class=\"service-path__dot\"></span><span>能力积累</span></a>\n          <a class=\"service-path__item\" href=\"#service-materials\"><span class=\"service-path__dot\"></span><span>材料优化</span></a>\n          <a class=\"service-path__item\" href=\"#service-mentor\"><span class=\"service-path__dot\"></span><span>导师沟通</span></a>\n          <a class=\"service-path__item\" href=\"#service-interview\"><span class=\"service-path__dot\"></span><span>面试训练</span></a>\n          <a class=\"service-path__item\" href=\"#service-filling\"><span class=\"service-path__dot\"></span><span>志愿填报</span></a>\n        </div>\n      </div>\n    </nav>\n\n    <div class=\"service-catalogue\">\n      <section class=\"service-chapter\" id=\"service-planning\" data-service-step=\"service-planning\">\n        <div class=\"container service-chapter__layout\">\n          <header class=\"service-chapter__intro reveal\"><div class=\"service-chapter__title\"><span class=\"service-chapter__number\">01</span><h2>申请<em>规划</em></h2></div><p>先理解个人情况与真实需求，再明确院校范围、准备重点和申请节奏。</p></header>\n          <div class=\"service-items reveal\">\n            <article class=\"service-item\"><h3>背景与需求分析</h3><div class=\"service-item__body\"><p>结合专业背景、成绩排名、科研竞赛、实践经历和申请目标，梳理已有优势、当前短板以及需要优先解决的问题。</p><ul class=\"service-item__details\"><li>背景综合评估</li><li>需求优先级梳理</li><li>阶段目标确认</li></ul></div></article>\n            <article class=\"service-item\"><h3>院校定位</h3><div class=\"service-item__body\"><p>围绕个人条件、专业方向和发展意愿，讨论目标院校与项目层次，形成具有梯度的申请范围。</p><ul class=\"service-item__details\"><li>院校层次判断</li><li>方向适配分析</li><li>申请梯度规划</li></ul></div></article>\n            <article class=\"service-item\"><h3>信息与节点管理</h3><div class=\"service-item__body\"><p>整理目标院校的招生信息、申请条件、材料要求和考核方式，并持续关注关键时间节点。</p><ul class=\"service-item__details\"><li>院校信息汇总</li><li>材料清单整理</li><li>关键节点提醒</li></ul></div></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"service-chapter\" id=\"service-growth\" data-service-step=\"service-growth\">\n        <div class=\"container service-chapter__layout\">\n          <header class=\"service-chapter__intro reveal\"><div class=\"service-chapter__title\"><span class=\"service-chapter__number\">02</span><h2>能力<em>积累</em></h2></div><p>把准备工作落实到专业基础、英语表达和科研理解中，为材料与面试建立内容基础。</p></header>\n          <div class=\"service-items reveal\">\n            <article class=\"service-item\"><h3>专业课复习</h3><div class=\"service-item__body\"><p>根据个人基础和目标院校考核特点安排复习顺序，梳理核心课程、重点概念及知识之间的联系。</p><ul class=\"service-item__details\"><li>复习范围规划</li><li>核心知识串联</li><li>重点问题训练</li></ul></div></article>\n            <article class=\"service-item\"><h3>专业英语准备</h3><div class=\"service-item__body\"><p>围绕英文自我介绍、专业术语和常见英文问答进行准备，提升面试场景中的理解与表达能力。</p><ul class=\"service-item__details\"><li>专业词汇整理</li><li>英文问答准备</li><li>表达纠正反馈</li></ul></div></article>\n            <article class=\"service-item\"><h3>科研经历深挖</h3><div class=\"service-item__body\"><p>回到真实项目过程，梳理研究背景、方法选择、结果意义和个人贡献，建立完整的项目叙述逻辑。</p><ul class=\"service-item__details\"><li>研究逻辑梳理</li><li>个人贡献提炼</li><li>追问方向准备</li></ul></div></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"service-chapter\" id=\"service-materials\" data-service-step=\"service-materials\">\n        <div class=\"container service-chapter__layout\">\n          <header class=\"service-chapter__intro reveal\"><div class=\"service-chapter__title\"><span class=\"service-chapter__number\">03</span><h2>材料<em>优化</em></h2></div><p>围绕真实经历组织内容，让不同材料各司其职，又能共同呈现清晰、可信的个人形象。</p></header>\n          <div class=\"service-items reveal\">\n            <article class=\"service-item\"><h3>个人材料</h3><div class=\"service-item__body\"><p>梳理个人经历、申请动机和方向匹配度，优化材料结构、信息重点与具体表达。</p><ul class=\"service-item__details\"><li>CV</li><li>个人陈述</li><li>中英文自我介绍</li></ul></div></article>\n            <article class=\"service-item\"><h3>推荐材料</h3><div class=\"service-item__body\"><p>结合真实师生互动与个人表现，梳理推荐信可呈现的事实依据、能力特点和表达结构。</p><ul class=\"service-item__details\"><li>推荐信内容梳理</li><li>事实依据核对</li><li>结构与表达建议</li></ul></div></article>\n            <article class=\"service-item\"><h3>套磁材料</h3><div class=\"service-item__body\"><p>围绕目标导师的研究方向与个人经历，准备简洁、得体并具有针对性的联系邮件和附件材料。</p><ul class=\"service-item__details\"><li>联系导师邮件</li><li>附件材料整理</li><li>个性化内容调整</li></ul></div></article>\n            <article class=\"service-item\"><h3>展示材料</h3><div class=\"service-item__body\"><p>根据面试或汇报要求组织页面结构、信息层级与讲述顺序，使展示内容易读且便于现场表达。</p><ul class=\"service-item__details\"><li>个人展示 PPT</li><li>学术汇报 PPT</li><li>讲述逻辑调整</li></ul></div></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"service-chapter\" id=\"service-mentor\" data-service-step=\"service-mentor\">\n        <div class=\"container service-chapter__layout\">\n          <header class=\"service-chapter__intro reveal\"><div class=\"service-chapter__title\"><span class=\"service-chapter__number\">04</span><h2>导师<em>沟通</em></h2></div><p>先判断导师与个人方向是否匹配，再选择合适的联系时机、沟通方式与后续跟进节奏。</p></header>\n          <div class=\"service-items reveal\">\n            <article class=\"service-item\"><h3>导师筛选</h3><div class=\"service-item__body\"><p>整理导师研究方向、近期成果与公开招生信息，结合个人兴趣和发展计划讨论筛选优先级。</p><ul class=\"service-item__details\"><li>研究方向梳理</li><li>匹配程度分析</li><li>联系优先级建议</li></ul></div></article>\n            <article class=\"service-item\"><h3>联系与跟进</h3><div class=\"service-item__body\"><p>讨论首次联系、回复处理和后续跟进中的表达方式，保持沟通真诚、准确并尊重导师安排。</p><ul class=\"service-item__details\"><li>联系时机判断</li><li>沟通策略讨论</li><li>回复与跟进建议</li></ul></div></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"service-chapter\" id=\"service-interview\" data-service-step=\"service-interview\">\n        <div class=\"container service-chapter__layout\">\n          <header class=\"service-chapter__intro reveal\"><div class=\"service-chapter__title\"><span class=\"service-chapter__number\">05</span><h2>面试<em>训练</em></h2></div><p>从常见问题到目标院校定向模拟，练习在连续追问中稳定思考并清楚表达。</p></header>\n          <div class=\"service-items reveal\">\n            <article class=\"service-item\"><h3>通用问答模拟</h3><div class=\"service-item__body\"><p>围绕个人介绍、申请动机、优势不足和发展规划等常见问题，建立自然、有依据的回答思路。</p><ul class=\"service-item__details\"><li>回答框架梳理</li><li>中英文表达训练</li><li>常见追问准备</li></ul></div></article>\n            <article class=\"service-item\"><h3>科研经历模拟</h3><div class=\"service-item__body\"><p>针对个人科研材料进行连续追问，检查研究理解、方法细节、结果解释和个人贡献是否能够讲清楚。</p><ul class=\"service-item__details\"><li>项目陈述训练</li><li>连续追问模拟</li><li>研究逻辑反馈</li></ul></div></article>\n            <article class=\"service-item\"><h3>院校定向模拟</h3><div class=\"service-item__body\"><p>结合目标院校公开考核信息和个人申请材料，模拟可能出现的专业、科研与综合问题。</p><ul class=\"service-item__details\"><li>考核信息整理</li><li>定向问题设计</li><li>完整流程模拟</li></ul></div></article>\n            <article class=\"service-item\"><h3>表达与状态调整</h3><div class=\"service-item__body\"><p>从回答节奏、语言组织、临场停顿和状态管理等方面复盘，形成适合自己的面试表达方式。</p><ul class=\"service-item__details\"><li>表达逻辑反馈</li><li>回答节奏调整</li><li>临场状态建议</li></ul></div></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"service-chapter\" id=\"service-filling\" data-service-step=\"service-filling\">\n        <div class=\"container service-chapter__layout\">\n          <header class=\"service-chapter__intro reveal\"><div class=\"service-chapter__title\"><span class=\"service-chapter__number\">06</span><h2>志愿<em>填报</em></h2></div><p>走到申请最后阶段，核对系统规则、时间节点和已有选择，减少操作与决策上的遗漏。</p></header>\n          <div class=\"service-items reveal\">\n            <article class=\"service-item\"><h3>推免系统填报</h3><div class=\"service-item__body\"><p>依据官方规则梳理系统开放时间、填报流程、操作顺序和需要提前确认的信息。</p><ul class=\"service-item__details\"><li>官方规则核对</li><li>填报流程梳理</li><li>操作事项提醒</li></ul></div></article>\n            <article class=\"service-item\"><h3>通知与节点核对</h3><div class=\"service-item__body\"><p>整理复试、待录取通知和确认时限，讨论时间冲突或信息不明确时需要进一步核实的事项。</p><ul class=\"service-item__details\"><li>时间节点整理</li><li>接收通知核对</li><li>冲突事项梳理</li></ul></div></article>\n            <article class=\"service-item\"><h3>最终选择</h3><div class=\"service-item__body\"><p>结合已有录取机会、个人意向和长期发展考虑，梳理最终选择前需要比较和确认的问题。</p><ul class=\"service-item__details\"><li>选择因素比较</li><li>关键信息核实</li><li>最终阶段建议</li></ul></div></article>\n          </div>\n        </div>\n      </section>\n    </div>\n\n    <section class=\"service-consult\" aria-label=\"联系咨询\">\n      <div class=\"container service-consult__row reveal\"><div><h2>不确定先从哪项开始？</h2><p>可以先说明当前准备阶段和希望解决的问题，再讨论适合的服务内容。</p></div><a class=\"button\" href=\"contact.html\">联系咨询</a></div>\n    </section>\n"},"process":{"title":"服务流程","html":"\n<header class=\"process-hero\">\n      <div class=\"container reveal\">\n        <h1>服务如何<em>开展</em></h1>\n        <p>从第一次沟通，到完成阶段目标，每一步都会提前说明。你知道需要准备什么，也知道这一阶段将得到什么。</p>\n      </div>\n    </header>\n\n    <nav class=\"process-path\" aria-label=\"服务流程导航\">\n      <div class=\"container process-path__viewport\">\n        <div class=\"process-path__track\">\n          <span class=\"process-path__flow\" aria-hidden=\"true\"></span>\n          <a class=\"process-path__item\" href=\"#process-submit\" aria-current=\"step\"><span class=\"process-path__dot\"></span><span>提交情况</span></a>\n          <a class=\"process-path__item\" href=\"#process-diagnose\"><span class=\"process-path__dot\"></span><span>需求诊断</span></a>\n          <a class=\"process-path__item\" href=\"#process-confirm\"><span class=\"process-path__dot\"></span><span>确认方案</span></a>\n          <a class=\"process-path__item\" href=\"#process-plan\"><span class=\"process-path__dot\"></span><span>建立计划</span></a>\n          <a class=\"process-path__item\" href=\"#process-guide\"><span class=\"process-path__dot\"></span><span>辅导反馈</span></a>\n          <a class=\"process-path__item\" href=\"#process-review\"><span class=\"process-path__dot\"></span><span>复盘衔接</span></a>\n        </div>\n      </div>\n    </nav>\n\n    <div class=\"process-steps\">\n      <section class=\"process-step\" id=\"process-submit\" data-process-step=\"process-submit\">\n        <div class=\"container\">\n          <header class=\"process-step__head reveal\"><div class=\"process-step__title\"><span class=\"process-step__number\">01</span><h2>提交基本<em>情况</em></h2></div><p>先让我了解你目前在哪里，以及最希望解决什么问题。</p></header>\n          <div class=\"process-step__columns reveal\">\n            <article class=\"process-column\"><span class=\"process-column__label\">你需要准备</span><h3>基本背景与当前进度</h3><p>简要说明本科专业、成绩排名、科研竞赛、目标方向和当前准备阶段。</p><ul><li>无需一次提交全部材料</li><li>初次沟通避免无关敏感信息</li></ul></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">我会完成</span><h3>确认问题与辅导范围</h3><p>理解你的核心困惑，判断问题属于规划、材料、能力、导师沟通、面试还是志愿填报。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">阶段结果</span><h3>形成初步问题清单</h3><p>明确接下来还需要补充哪些信息，以及是否属于我能够提供辅导的专业和服务范围。</p></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"process-step\" id=\"process-diagnose\" data-process-step=\"process-diagnose\">\n        <div class=\"container\">\n          <header class=\"process-step__head reveal\"><div class=\"process-step__title\"><span class=\"process-step__number\">02</span><h2>需求<em>诊断</em></h2></div><p>不急着罗列服务，而是先判断当前最值得解决的问题。</p></header>\n          <div class=\"process-step__columns reveal\">\n            <article class=\"process-column\"><span class=\"process-column__label\">你需要准备</span><h3>补充必要材料</h3><p>根据初步沟通补充与问题直接相关的信息，例如已有简历、科研材料或目标院校范围。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">我会完成</span><h3>分析现状与优先级</h3><p>梳理已有优势、当前短板、时间约束和阶段目标，判断哪些事项需要优先处理。</p><ul><li>不推荐当前并不需要的服务</li><li>超出辅导范围会提前说明</li></ul></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">阶段结果</span><h3>明确真正需求</h3><p>形成清晰的问题判断和准备优先级，为后续服务选择提供依据。</p></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"process-step\" id=\"process-confirm\" data-process-step=\"process-confirm\">\n        <div class=\"container\">\n          <header class=\"process-step__head reveal\"><div class=\"process-step__title\"><span class=\"process-step__number\">03</span><h2>确认辅导<em>方案</em></h2></div><p>开始之前，把服务内容、方式和边界全部说清楚。</p></header>\n          <div class=\"process-step__columns reveal\">\n            <article class=\"process-column\"><span class=\"process-column__label\">你需要确认</span><h3>目标、时间与选择</h3><p>确认希望达到的阶段目标、可投入时间，以及选择单项辅导还是组合安排。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">我会说明</span><h3>范围、方式与费用</h3><p>提前说明辅导内容、沟通形式、预计安排、费用及双方需要完成的事项。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">阶段结果</span><h3>双方确认服务安排</h3><p>服务边界、时间频次、交付形式和开始时间均确认后，再正式进入辅导。</p></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"process-step\" id=\"process-plan\" data-process-step=\"process-plan\">\n        <div class=\"container\">\n          <header class=\"process-step__head reveal\"><div class=\"process-step__title\"><span class=\"process-step__number\">04</span><h2>建立准备<em>计划</em></h2></div><p>把目标拆解为可执行的任务，明确先做什么、后做什么。</p></header>\n          <div class=\"process-step__columns reveal\">\n            <article class=\"process-column\"><span class=\"process-column__label\">你需要准备</span><h3>当前材料与个人时间</h3><p>提交与本次服务有关的材料，并说明课程、考试、科研等现实时间安排。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">我会完成</span><h3>拆解任务与关键节点</h3><p>根据目标和剩余时间安排准备顺序，将较大的任务拆成清晰的小步骤。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">阶段结果</span><h3>得到可执行清单</h3><p>形成阶段任务、材料准备、关键节点和当前优先事项；单项服务会相应简化。</p></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"process-step\" id=\"process-guide\" data-process-step=\"process-guide\">\n        <div class=\"container\">\n          <header class=\"process-step__head reveal\"><div class=\"process-step__title\"><span class=\"process-step__number\">05</span><h2>辅导与持续<em>反馈</em></h2></div><p>以真实准备为基础，在练习和反馈中逐步完善，而不是由我代替完成。</p></header>\n          <div class=\"process-step__columns reveal\">\n            <article class=\"process-column\"><span class=\"process-column__label\">你需要完成</span><h3>准备初稿、思考或训练</h3><p>按照当前任务完成材料准备、知识复习、问题思考或模拟训练。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">我会提供</span><h3>针对性辅导与反馈</h3><p>围绕具体问题进行分析、修改建议、连续追问、表达训练或阶段复盘。</p><ul><li>学生准备</li><li>针对性辅导</li><li>调整后进入下一轮</li></ul></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">阶段结果</span><h3>看到具体改进</h3><p>材料、回答逻辑或准备状态经过逐轮优化，重要问题得到明确处理。</p></article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"process-step\" id=\"process-review\" data-process-step=\"process-review\">\n        <div class=\"container\">\n          <header class=\"process-step__head reveal\"><div class=\"process-step__title\"><span class=\"process-step__number\">06</span><h2>阶段复盘与<em>衔接</em></h2></div><p>完成约定内容后，不只停在“做完”，还要知道下一步怎么走。</p></header>\n          <div class=\"process-step__columns reveal\">\n            <article class=\"process-column\"><span class=\"process-column__label\">你需要确认</span><h3>完成情况与遗留问题</h3><p>核对已完成事项，并提出仍然不确定或希望进一步理解的问题。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">我会完成</span><h3>总结重点与后续建议</h3><p>梳理本阶段成果、仍需提升的部分和下一阶段的准备重点。</p></article>\n            <article class=\"process-column\"><span class=\"process-column__label\">阶段结果</span><h3>形成复盘与行动方向</h3><p>获得完成事项核对、重要问题总结和后续行动建议，便于继续独立推进。</p></article>\n          </div>\n        </div>\n      </section>\n    </div>\n\n    <section class=\"process-modes\" aria-labelledby=\"process-modes-title\">\n      <div class=\"container\">\n        <header class=\"process-modes__head reveal\"><h2 id=\"process-modes-title\">根据需要，选择合适的<em>合作方式</em></h2><p>流程相同，但任务范围与持续时间不同。</p></header>\n        <div class=\"process-modes__grid reveal\">\n          <article class=\"process-mode\"><h3>单项辅导</h3><p>适合当前问题比较明确，希望集中解决某一项材料、面试或规划问题的同学。</p><strong>重点：目标明确 · 范围集中 · 阶段交付</strong></article>\n          <article class=\"process-mode\"><h3>组合安排</h3><p>适合多个准备环节相互关联，希望按照个人节奏持续推进的同学。</p><strong>重点：阶段规划 · 连续反馈 · 动态调整</strong></article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"process-principles\" aria-labelledby=\"process-principles-title\">\n      <div class=\"container process-principles__row\">\n        <header class=\"reveal\"><h2 id=\"process-principles-title\">基本<em>原则</em></h2></header>\n        <div class=\"process-principles__list reveal\">\n          <article class=\"process-principle\"><h3>基于真实经历</h3><p>不虚构履历，不代写无法由学生本人解释和负责的内容。</p></article>\n          <article class=\"process-principle\"><h3>范围提前确认</h3><p>服务内容、方式、时间和费用在正式开始前共同确认。</p></article>\n          <article class=\"process-principle\"><h3>强调共同完成</h3><p>辅导提供分析、反馈与训练，学生仍是申请材料和选择的责任主体。</p></article>\n          <article class=\"process-principle\"><h3>争取最优结果</h3><p>基于真实材料和充分准备提升申请表现，争取个人条件下的更优结果。</p></article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"process-consult\" aria-label=\"联系咨询\">\n      <div class=\"container process-consult__row reveal\"><div><h2>不知道自己应该从哪一步开始？</h2><p>先说明当前阶段和最想解决的问题即可。</p></div><a class=\"button\" href=\"contact.html\">联系咨询</a></div>\n    </section>\n"},"cases":{"title":"成功案例","html":"\n<section class=\"cases-hero\" aria-labelledby=\"cases-page-title\">\n      <div class=\"container cases-hero__layout reveal\">\n        <h1 id=\"cases-page-title\"><em>OFFER</em> 时刻</h1>\n        <p>每一份录取通知背后，都是一次认真准备、反复调整与最终抵达。</p>\n      </div>\n    </section>\n\n    <section class=\"admission-gallery\" aria-labelledby=\"admission-gallery-title\">\n      <div class=\"container\">\n        <header class=\"admission-gallery__head reveal\">\n          <h2 id=\"admission-gallery-title\">部分录取通知</h2>\n        </header>\n        <div class=\"admission-carousel reveal\" id=\"admission-carousel\" aria-roledescription=\"轮播\" aria-label=\"学生拟录取通知\">\n          <button class=\"admission-carousel__arrow admission-carousel__arrow--prev\" type=\"button\" aria-label=\"上一张录取通知\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg></button>\n          <div class=\"admission-carousel__viewport\">\n            <div class=\"admission-carousel__track\">\n              <figure class=\"admission-carousel__slide\"><img src=\"assets/admission-notices/g.png\" alt=\"G 同学吉林大学拟录取通知\" width=\"1765\" height=\"1143\"><figcaption><strong>G 同学</strong><span>吉林大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/k.jpg\" alt=\"K 同学天津大学拟录取通知\" width=\"1536\" height=\"1065\"><figcaption><strong>K 同学</strong><span>天津大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/l-2.png\" alt=\"L 同学南开大学拟录取通知\" width=\"1095\" height=\"725\"><figcaption><strong>L 同学</strong><span>南开大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/l.jpg\" alt=\"L 同学哈尔滨工业大学拟录取通知\" width=\"1208\" height=\"872\"><figcaption><strong>L 同学</strong><span>哈尔滨工业大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/p.jpg\" alt=\"P 同学同济大学拟录取通知\" width=\"1411\" height=\"981\"><figcaption><strong>P 同学</strong><span>同济大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/w-2.png\" alt=\"W 同学西安交通大学拟录取通知\" width=\"1310\" height=\"857\"><figcaption><strong>W 同学</strong><span>西安交通大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/w-3.jpg\" alt=\"W 同学南京大学拟录取通知\" width=\"1564\" height=\"1021\"><figcaption><strong>W 同学</strong><span>南京大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/w-4.jpg\" alt=\"W 同学北京大学拟录取通知\" width=\"1460\" height=\"1064\"><figcaption><strong>W 同学</strong><span>北京大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/w.jpg\" alt=\"W 同学北京师范大学拟录取通知\" width=\"1088\" height=\"713\"><figcaption><strong>W 同学</strong><span>北京师范大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/y-2.png\" alt=\"Y 同学武汉大学拟录取通知\" width=\"1316\" height=\"859\"><figcaption><strong>Y 同学</strong><span>武汉大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/y-3.jpg\" alt=\"Y 同学华南理工大学拟录取通知\" width=\"1191\" height=\"827\"><figcaption><strong>Y 同学</strong><span>华南理工大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/y-4.jpg\" alt=\"Y 同学北京大学深圳研究生院拟录取通知\" width=\"1573\" height=\"1080\"><figcaption><strong>Y 同学</strong><span>北京大学深圳研究生院</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/y.png\" alt=\"Y 同学浙江大学拟录取通知\" width=\"1772\" height=\"992\"><figcaption><strong>Y 同学</strong><span>浙江大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/z-2.jpg\" alt=\"Z 同学清华大学拟录取通知\" width=\"1508\" height=\"988\"><figcaption><strong>Z 同学</strong><span>清华大学</span></figcaption></figure>\n              <figure class=\"admission-carousel__slide\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"assets/admission-notices/z.png\" alt=\"Z 同学浙江大学拟录取通知\" width=\"1299\" height=\"896\"><figcaption><strong>Z 同学</strong><span>浙江大学</span></figcaption></figure>\n            </div>\n          </div>\n          <button class=\"admission-carousel__arrow admission-carousel__arrow--next\" type=\"button\" aria-label=\"下一张录取通知\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg></button>\n          <div class=\"admission-carousel__meta\"><span class=\"admission-carousel__counter\" aria-hidden=\"true\"><b>01</b><i></i><span>15</span></span><div class=\"admission-carousel__dots\" aria-label=\"选择录取通知\"></div></div>\n          <p class=\"visually-hidden\" id=\"admission-carousel-status\" aria-live=\"polite\">第 1 张，共 15 张</p>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"cases-showcase\" aria-labelledby=\"cases-list-title\">\n      <div class=\"container\">\n        <header class=\"cases-showcase__head reveal\">\n          <h2 id=\"cases-list-title\">成功案例</h2>\n        </header>\n\n        <div class=\"cases-carousel reveal\" id=\"cases-carousel\" aria-roledescription=\"轮播\" aria-label=\"学生案例\">\n          <button class=\"cases-carousel__arrow cases-carousel__arrow--prev\" type=\"button\" aria-label=\"上一组案例\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg></button>\n          <div class=\"cases-carousel__viewport\">\n            <div class=\"cases-carousel__track\">\n              <div class=\"cases-slide\" aria-label=\"第 1 组案例\">\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>北京大学深圳研究生院</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>Y 同学</h3><dl><div><dt>本科院校</dt><dd>985</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>北京大学深圳研究生院·环境与能源学院</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>南开大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>L 同学</h3><dl><div><dt>本科院校</dt><dd>四非</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>南开大学</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>同济大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>P 同学</h3><dl><div><dt>本科院校</dt><dd>双非</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>同济大学</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>哈尔滨工业大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>跨专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>Z 同学</h3><dl><div><dt>本科院校</dt><dd>985</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>跨专业保研</dd></div><div><dt>最终去向</dt><dd>哈尔滨工业大学·能源与动力工程</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>吉林大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>跨专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>G 同学</h3><dl><div><dt>本科院校</dt><dd>211</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>跨专业保研</dd></div><div><dt>最终去向</dt><dd>吉林大学·材料科学与工程学院</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>北京师范大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>W 同学</h3><dl><div><dt>本科院校</dt><dd>211</dd></div><div><dt>本科专业</dt><dd>地下水科学与工程</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>北京师范大学·环境工程</dd></div></dl></div></article>\n              </div>\n\n              <div class=\"cases-slide\" aria-label=\"第 2 组案例\" aria-hidden=\"true\">\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>天津大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>K 同学</h3><dl><div><dt>本科院校</dt><dd>985</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>天津大学</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>南京大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>跨专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>W 同学</h3><dl><div><dt>本科院校</dt><dd>211</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>跨专业保研</dd></div><div><dt>最终去向</dt><dd>南京大学·材料科学与工程</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>清华大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>清北</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>Z 同学</h3><dl><div><dt>本科院校</dt><dd>双非</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>清华大学深圳国际研究生院</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>浙江大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>华五</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>Y 同学</h3><dl><div><dt>本科院校</dt><dd>985</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>浙江大学·环境与资源学院</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>西安交通大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>W 同学</h3><dl><div><dt>本科院校</dt><dd>四非</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>西安交通大学</dd></div></dl></div></article>\n                <article class=\"case-item\"><div class=\"case-offer\" aria-hidden=\"true\"><div class=\"case-offer__sheet\"><div class=\"case-offer__top\"><strong>武汉大学</strong><span><i></i><i></i></span></div><div class=\"case-offer__tags\"><span>985</span><span>本专业</span></div><div class=\"case-offer__mock\"><b></b><i></i><i></i><i></i><i></i><em>OFFER</em></div></div></div><div class=\"case-copy\"><h3><span aria-hidden=\"true\"></span>Y 同学</h3><dl><div><dt>本科院校</dt><dd>211</dd></div><div><dt>本科专业</dt><dd>环境科学与工程类</dd></div><div><dt>申请类型</dt><dd>本专业保研</dd></div><div><dt>最终去向</dt><dd>武汉大学·资源与环境科学学院</dd></div></dl></div></article>\n              </div>\n            </div>\n          </div>\n          <button class=\"cases-carousel__arrow cases-carousel__arrow--next\" type=\"button\" aria-label=\"下一组案例\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg></button>\n          <div class=\"cases-carousel__controls\" aria-label=\"选择案例组\"><button type=\"button\" class=\"is-active\" aria-label=\"查看第 1 组案例\" aria-pressed=\"true\"></button><button type=\"button\" aria-label=\"查看第 2 组案例\" aria-pressed=\"false\"></button></div>\n          <p class=\"visually-hidden\" id=\"cases-carousel-status\" aria-live=\"polite\">第 1 组，共 2 组</p>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"cases-contact\" aria-labelledby=\"cases-contact-title\">\n      <div class=\"container cases-contact__layout reveal\"><div><h2 id=\"cases-contact-title\">每个人的起点不同，准备方式也应该不同</h2><p>可以先介绍你的本科背景、当前排名、科研经历和目标方向，再判断现阶段更需要解决什么问题。</p></div><a class=\"button\" href=\"contact.html\">联系咨询</a></div>\n    </section>\n"},"about":{"title":"关于我","html":"\n<section class=\"about-intro\" aria-labelledby=\"about-title\">\n      <div class=\"container about-intro__layout reveal\">\n        <div class=\"about-intro__copy\">\n          <p class=\"about-intro__eyebrow\">你好，我是 Arlo</p>\n          <h1 id=\"about-title\">关于<em>我</em></h1>\n          <p class=\"about-intro__role\">环境科学与工程专业的<br><strong>学习者、研究者与同行者</strong></p>\n          <p class=\"about-intro__lead\">专业前 3，拿过几次学业奖学金，也在国家级学科竞赛里拿过奖。211 保研到了华五，现在是中科大的研究生。这里是我记录自己的一个小地方，也希望把一路走来的经验讲给需要的人。</p>\n          <div class=\"about-intro__tags\" aria-label=\"个人经历关键词\"><span>专业前 3</span><span>国家级竞赛获奖</span><span>中科大研究生</span><span>环境科学与工程</span></div>\n        </div>\n        <div class=\"about-intro__portrait\" aria-label=\"ArloWang Lab 品牌标志\">\n          <img src=\"assets/about-logo-text.png\" alt=\"ArloWang Lab 图形标志与文字组合\" width=\"1107\" height=\"1400\">\n        </div>\n      </div>\n    </section>\n\n    <section class=\"about-section about-section--soft\" id=\"experience\" aria-labelledby=\"experience-title\">\n      <div class=\"container\">\n        <header class=\"about-section__head reveal\"><div class=\"about-section__title\"><span class=\"about-section__number\">01</span><h2 id=\"experience-title\">我的<em>经历</em></h2></div></header>\n        <div class=\"about-experience\">\n          <aside class=\"about-timeline\" aria-label=\"个人经历时间轴\">\n            <svg class=\"about-timeline__wave\" viewBox=\"0 0 22 630\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"M11 0 C1 22 21 45 11 68 C1 91 21 114 11 137 C1 160 21 183 11 206 C1 229 21 252 11 275 C1 298 21 321 11 344 C1 367 21 390 11 413 C1 436 21 459 11 482 C1 505 21 528 11 551 C1 574 21 597 11 630\"/></svg>\n            <svg class=\"about-timeline__wave about-timeline__wave--active\" viewBox=\"0 0 22 630\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"M11 0 C1 22 21 45 11 68 C1 91 21 114 11 137 C1 160 21 183 11 206 C1 229 21 252 11 275 C1 298 21 321 11 344 C1 367 21 390 11 413 C1 436 21 459 11 482 C1 505 21 528 11 551 C1 574 21 597 11 630\"/></svg>\n            <a class=\"about-timeline__link\" href=\"#about-stage-1\" aria-current=\"step\"><span class=\"about-timeline__dot\"></span><span><span class=\"about-timeline__time\">Step 1 · 大学学习</span><span class=\"about-timeline__label\">专业学习</span></span></a>\n            <a class=\"about-timeline__link\" href=\"#about-stage-2\"><span class=\"about-timeline__dot\"></span><span><span class=\"about-timeline__time\">Step 2 · 科研启蒙</span><span class=\"about-timeline__label\">科学研究</span></span></a>\n            <a class=\"about-timeline__link\" href=\"#about-stage-3\"><span class=\"about-timeline__dot\"></span><span><span class=\"about-timeline__time\">Step 3 · 大三上学期</span><span class=\"about-timeline__label\">保研模糊期</span></span></a>\n            <a class=\"about-timeline__link\" href=\"#about-stage-4\"><span class=\"about-timeline__dot\"></span><span><span class=\"about-timeline__time\">Step 4 · 12 月—次年 4 月</span><span class=\"about-timeline__label\">保研准备期</span></span></a>\n            <a class=\"about-timeline__link\" href=\"#about-stage-5\"><span class=\"about-timeline__dot\"></span><span><span class=\"about-timeline__time\">Step 5 · 次年 5—8 月</span><span class=\"about-timeline__label\">保研申请期</span></span></a>\n            <a class=\"about-timeline__link\" href=\"#about-stage-6\"><span class=\"about-timeline__dot\"></span><span><span class=\"about-timeline__time\">Step 6 · 9 月</span><span class=\"about-timeline__label\">尘埃落定</span></span></a>\n            <a class=\"about-timeline__link\" href=\"#about-stage-7\"><span class=\"about-timeline__dot\"></span><span><span class=\"about-timeline__time\">Step 7 · 现今</span><span class=\"about-timeline__label\">仍在继续</span></span></a>\n          </aside>\n\n          <div class=\"about-story\">\n            <article class=\"about-story__block reveal\" id=\"about-stage-1\" data-about-stage=\"about-stage-1\">\n              <h3 class=\"about-story__heading\"><span>Step 1 · 大学学习</span><span class=\"about-story__heading-separator\" aria-hidden=\"true\"></span><span>专业学习</span></h3>\n              <p>刚进大学那会儿，我对“环境科学与工程”这个专业其实没什么概念。大一上的都是数学、化学、物理这些基础课，跟“环境”两个字关系不大。真正开始有点感觉，是大二专业课多起来之后——水、大气、化学过程、工程治理，一门一门啃下来，才慢慢明白自己学的到底是什么。</p>\n              <p>成绩上我一直不算差，最后专业排到了前 3，也拿过几次学业奖学金。但说实话，这个结果看着轻松，过程一点都不轻松。尤其大二之后，一边要顾着绩点，一边又开始做科研、打比赛，常常是一门课还没吃透，另一件事又催上来了。那种感觉不是“学不会”，而是明明每件事单拎出来都能做好，但凑在一起，就是不够用的 24 小时。</p>\n              <p>现在想想，大一大二其实没什么值得讲的高光时刻，就是每天上课、考试、泡实验室，在一件件琐碎的事情里慢慢摸出自己的节奏。也是那时候，我开始觉得，光把成绩守住好像不太够，我还想试试课堂之外的东西。</p>\n            </article>\n\n            <article class=\"about-story__block reveal\" id=\"about-stage-2\" data-about-stage=\"about-stage-2\">\n              <h3 class=\"about-story__heading\"><span>Step 2 · 科研启蒙</span><span class=\"about-story__heading-separator\" aria-hidden=\"true\"></span><span>科学研究</span></h3>\n              <p>大二开始，我第一次正儿八经接触科研。本科期间做了两次大学生创新创业训练计划，两次都是自己拉人组队、自己带。现在回想，那时候真的什么都不太懂，只是有一种挺朴素的想法：既然想做，就得真的扎进去，不能只在旁边打下手。</p>\n              <p>真正带上项目之后才发现，科研跟上课完全是两码事。课程上的题目再难，好歹有范围、有标准答案；科研不是，没有人会提前告诉你下一步该往哪走。研究问题怎么定、实验怎么安排、组员怎么分工、最后怎么总结——每一步都得自己一点点试错。</p>\n              <p>第一次做项目，说实话大部分精力都花在“怎么把这件事做完”上；到第二次，才开始真正琢磨“为什么要这么设计”“数据能说明什么问题”“还有哪里立不住脚”。除了大创，我也参加了不少学科竞赛，这些事情后来占掉了我本科绝大部分的课余时间。</p>\n              <p>那时候完全没想过要把自己包装成什么“保研模板”。就是单纯觉得，做了就要做好。直到后来真的开始准备保研，我才后知后觉地发现——跟成绩和英语比起来，科研和竞赛经历，已经在不知不觉中变成了我手里最拿得出手的东西。</p>\n            </article>\n\n            <article class=\"about-story__block reveal\" id=\"about-stage-3\" data-about-stage=\"about-stage-3\">\n              <h3 class=\"about-story__heading\"><span>Step 3 · 保研模糊期（大三上学期）</span><span class=\"about-story__heading-separator\" aria-hidden=\"true\"></span><span>迷茫与拖延</span></h3>\n              <p>大三上学期，“保研”这两个字第一次从一个遥远的概念，变成一件躲不过去的事。</p>\n              <p>那段时间我的状态挺拧巴的。科研和竞赛不算少，手里不是空的，但成绩卡在保研边缘线上，英语更谈不上有优势，六级只是压线过。所以真正让我焦虑的，从来不是“我什么都没有”，而是我根本不知道，自己手里这些东西，到底值多少钱。</p>\n              <p>我开始一篇一篇地刷保研经验帖，看学校信息、看往年去向、看学长学姐怎么讲自己的路。可越看越焦虑——有人排名遥遥领先，有人英语六级 600+，有人已经手握一作论文，而我的情况，怎么看都不像哪个“标准模板”。有时候安慰自己，科研和竞赛应该能补上短板；下一秒刷到别人的背景，又忍不住怀疑，是不是自己想得太天真。</p>\n              <p>现在回头看，那段时间最大的问题，不是我什么都没做，而是我一直没想明白。知道自己要保研，却不知道从哪一步真正开始；看了很多别人的经验，却分不清哪些是真的对自己有用。很多事情都想着“以后再说也来得及”，就这样，在一次次比较和犹豫里，大三上学期悄无声息地被我拖了过去。</p>\n            </article>\n\n            <article class=\"about-story__block reveal\" id=\"about-stage-4\" data-about-stage=\"about-stage-4\">\n              <h3 class=\"about-story__heading\"><span>Step 4 · 保研准备期（12 月—次年 4 月）</span><span class=\"about-story__heading-separator\" aria-hidden=\"true\"></span><span>焦虑与慌张</span></h3>\n              <p>十二月一到，我才算真正把保研当成一件“要动手做”的事，而不是脑子里想想的事。</p>\n              <p>前面看了那么多经验帖，可真正开始动手做材料才明白，“知道该做什么”和“真的做出来”是两回事。简历怎么排版、科研经历怎么写才不显得单薄、个人陈述该突出哪一点、自己到底能够得上哪些学校——每一个问题都得重新捋一遍。</p>\n              <p>也是在这个阶段，我第一次把本科几年的经历完完整整摊开来看。两次大创、科研、竞赛、成绩、英语，每一项单独拎出来我都很熟，可放进保研申请这张表里，分量完全不一样了。优势很明确——科研和竞赛经历相对丰富；短板也很扎眼——成绩没优势，英语更是拿不出手。于是很多学校都变得很微妙：好像可以冲一冲，又完全没底能不能冲上去。</p>\n              <p>那几个月焦虑的根源，很大一部分就是这种“不知道”。夏令营的日子一天天逼近，可你没办法提前知道自己的材料到底够不够，网上也找不到一个和自己一模一样的人可以参照。能做的，只有一遍遍改材料、一遍遍重新掂量自己。</p>\n              <p>到四月的时候，我对自己的情况总算清楚了一些。不再只是含糊地想“我要保研”，而是开始知道自己的牌在哪、洞在哪，也慢慢有了一条属于自己的申请思路。</p>\n            </article>\n\n            <article class=\"about-story__block reveal\" id=\"about-stage-5\" data-about-stage=\"about-stage-5\">\n              <h3 class=\"about-story__heading\"><span>Step 5 · 保研申请期（次年 5—8 月）</span><span class=\"about-story__heading-separator\" aria-hidden=\"true\"></span><span>怀疑与纠结</span></h3>\n              <p>五月一到，夏令营申请陆续开放，前面几个月攒下的准备，终于要接受检验了。</p>\n              <p>填系统、投材料、等通知，那段时间我几乎是每隔十分钟就刷一次邮箱。收到一份入营通知，会觉得这段时间的努力好像被看见了；碰上没过的学校，又忍不住开始怀疑自己——是不是成绩拖了后腿，是不是英语真的不够看，或者自己的科研经历其实没有想象中那么有分量。</p>\n              <p>真正走进面试以后，这种感觉又不太一样了。科研是我相对有底气的部分，但真坐到老师面前，跟自己在家对着镜子练完全不是一回事。老师会顺着你的项目一路追问下去——为什么这么设计、结果怎么解释、这里面哪些是你自己真正做的。面试多了以后，我慢慢学会把自己的项目讲得更清楚，每次结束都会把答得不好的地方补上，下一场争取不再犯同样的错。</p>\n              <p>申请越往后推进，我越确认一件事：科研和竞赛确实能成为加分项，但它们没办法让成绩和英语的短板凭空消失。不同学校、不同老师在意的东西不一样，所以保研这件事，真的很难用一个指标简单地衡量。</p>\n              <p>再往后，真正让我纠结的，反而不是“能不能拿到 offer”了。手里的选择多起来之后，新的问题变成了学校怎么选、导师怎么选、方向怎么选。以前愁的是没得选，到了这一步才发现，有得选，一样会焦虑，甚至更焦虑。</p>\n            </article>\n\n            <article class=\"about-story__block reveal\" id=\"about-stage-6\" data-about-stage=\"about-stage-6\">\n              <h3 class=\"about-story__heading\"><span>Step 6 · 尘埃落定（9 月）</span><span class=\"about-story__heading-separator\" aria-hidden=\"true\"></span><span>释怀与接受</span></h3>\n              <p>九月到了，前面悬了大半年的事，终于要有个结果了。</p>\n              <p>那段时间我反复比较不同的学校、导师、方向，也没少打电话问学长学姐。一开始总希望能找到一个哪哪都好的答案，后来才慢慢明白，真到了做决定的时候，很难有一个十全十美的选项。平台、导师方向、自己的兴趣、未来几年要过的生活，每一项都重要，但没办法全都按理想的样子排列整齐。</p>\n              <p>纠结到最后，我不再反复问“哪个更好”，而是更认真地问自己：接下来几年，我愿意把时间放在哪，愿意真正投入去做的是什么。</p>\n              <p>最后，我选了中国科学技术大学。</p>\n              <p>真正定下来的那一刻，情绪反而没有想象中那么激烈，更多的是一种“终于可以歇一口气”的感觉。大半年里反反复复的焦虑、等待、纠结，到这里，总算是告一段落了。</p>\n              <p>现在再回头看，保研留给我的，不只是一张录取通知。它第一次逼着我认真审视自己的优势和不足，也第一次让我明白，有些选择根本没有标准答案。能把信息尽量摸清楚，然后接受自己做出的决定——这本身，也是一种成长。</p>\n            </article>\n\n            <article class=\"about-story__block reveal\" id=\"about-stage-7\" data-about-stage=\"about-stage-7\">\n              <h3 class=\"about-story__heading\"><span>Step 7 · 仍在继续</span><span class=\"about-story__heading-separator\" aria-hidden=\"true\"></span><span>坚定</span></h3>\n              <p>现在我已经在读研，继续留在环境这个领域，做着自己的科研。</p>\n              <p>跟本科比，现在面对的问题更具体，也更深。很多时候，一整天可能就围着一个实验现象、一组数据，或者一个研究问题打转。读研并不会让实验自动变顺利，科研里的不确定性还是一样多，只是比起本科刚做项目时的手忙脚乱，我已经更习惯这种“没有标准答案”的状态了。</p>\n              <p>回头再看本科和保研这几年，我慢慢发现，真正留下来的，从来不只是最后去了哪所学校。大二开始做科研、两次自己拉队伍带项目，后来一边死磕成绩一边打比赛，再到大三反复怀疑自己的背景够不够格——这些拼在一起，才拼出了现在的我。</p>\n              <p>后来陆续有学弟学妹来找我聊保研。有人成绩很好，却完全不知道科研该怎么下手；有人科研做了不少，却和当年的我一样，天天为排名和英语焦虑；也有人经验帖看了一堆，还是不知道自己下一步该干什么。听他们讲这些的时候，我经常会想起自己当年的样子。</p>\n              <p>以前总觉得，保研结束了，这些情绪也就该翻篇了。现在反而越来越觉得，那些曾经让我反复纠结的问题，从来不是我一个人的问题。如果我走过的这些弯路，能让后面的人少一点盲目、多一点判断，那这条路，也就没算白走。</p>\n            </article>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"about-section about-section--motivation\" id=\"motivation\" aria-labelledby=\"motivation-title\">\n      <div class=\"container\">\n        <header class=\"about-section__head reveal\">\n          <div class=\"about-section__title\"><span class=\"about-section__number\">02</span><h2 id=\"motivation-title\">我的<em>初心</em></h2></div>\n        </header>\n\n        <section class=\"about-mission-group\" aria-labelledby=\"about-problems-title\">\n          <header class=\"about-mission-group__head reveal\"><h3 id=\"about-problems-title\">我看到的<em>问题</em></h3></header>\n          <div class=\"about-mission-grid about-mission-grid--four reveal\">\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">01</span><h4>信息很多，但缺少完整的路线</h4><p>保研从来不缺经验帖，真正缺的是一条清晰的时间线。<br>很多同学知道要做科研、考六级、准备材料，却不知道什么时候做、先做什么，以及不同阶段真正重要的事情是什么。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">02</span><h4>不断比较，却看不清自己的位置</h4><p>排名、英语、科研、竞赛，每个人的优势和短板都不一样。<br>但很多人习惯拿自己的单项去和别人比较，最后知道别人很强，却始终不知道自己的背景究竟处在什么位置。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">03</span><h4>投入了很多时间，却没有抓住重点</h4><p>保研准备的时间和精力都是有限的，不是所有事情都值得投入同样的成本。<br>有些短板需要提前一年准备，有些问题几周就能改善。如果优先级判断错了，很容易忙了很久，却没有真正提高竞争力。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">04</span><h4>拿到机会以后，反而更难做选择</h4><p>学校、导师、研究方向、城市、培养方式和未来发展，很难用一个指标比较。<br>不少同学前期只想着“先拿到 offer”，真正面对多个选择时，才发现自己从来没有认真想过到底想要什么。</p></article>\n          </div>\n        </section>\n\n        <section class=\"about-mission-group\" aria-labelledby=\"about-help-title\">\n          <header class=\"about-mission-group__head reveal\"><h3 id=\"about-help-title\">我希望帮助你解决<em>什么</em></h3></header>\n          <div class=\"about-mission-grid about-mission-grid--four reveal\">\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">01</span><h4>看清自己的背景</h4><p>先把成绩、英语、科研、竞赛、专业背景和个人目标放在一起分析。<br>不是简单判断“强不强”，而是弄清楚优势在哪里、短板在哪里，以及这些条件会怎样影响后面的申请。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">02</span><h4>建立自己的保研路线</h4><p>根据你现在所处的年级和阶段，重新梳理接下来需要完成的事情。<br>哪些需要提前准备，哪些可以暂缓，哪些已经来不及改变，就不要继续消耗时间，把有限精力用在真正重要的地方。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">03</span><h4>完成院校定位与申请准备</h4><p>结合个人背景、目标方向和往年情况，建立更合理的申请梯度。<br>同时把简历、个人陈述、导师联系、科研梳理和面试准备串联起来，让每一步都服务于最终申请，而不是彼此割裂。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">04</span><h4>形成自己的判断</h4><p>我希望最终解决的，不只是某一次申请，而是让你知道为什么这样选择。<br>当面对学校、导师和方向时，你能够自己比较信息、判断得失，而不是每到一个节点都需要别人替你做决定。</p></article>\n          </div>\n        </section>\n\n        <section class=\"about-mission-group about-mission-group--principles\" aria-labelledby=\"about-principles-title\">\n          <header class=\"about-mission-group__head reveal\"><h3 id=\"about-principles-title\">我的<em>原则</em></h3></header>\n          <div class=\"about-mission-grid about-mission-grid--five reveal\">\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">01</span><h4>看清自己，明确方向</h4><p>先了解自己的优势与短板，再决定接下来怎么走。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">02</span><h4>抓住重点，减少内耗</h4><p>时间和精力有限，优先解决真正影响结果的问题。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">03</span><h4>因人而异，不套模板</h4><p>每个人的背景不同，准备路径也不应该千篇一律。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">04</span><h4>给出建议，讲清逻辑</h4><p>不仅告诉你怎么做，也会把背后的原因讲明白。</p></article>\n            <article class=\"about-mission-item\"><span class=\"about-mission-item__number\">05</span><h4>提供参考，选择在你</h4><p>我会尽可能把信息与利弊讲清楚，最终决定由你自己做。</p></article>\n          </div>\n        </section>\n      </div>\n    </section>\n"},"faq":{"title":"常见问题","html":"\n<section class=\"faq-hero\" aria-labelledby=\"faq-title\">\n      <div class=\"container reveal\">\n        <h1 id=\"faq-title\">常见<em>问题</em></h1>\n        <p>关于服务对象、辅导方式、申请准备与咨询安排的说明。</p>\n      </div>\n    </section>\n\n    <section class=\"faq-area\">\n      <div class=\"container faq-layout\">\n        <aside class=\"faq-sidebar\" role=\"tablist\" aria-label=\"问题分类\">\n          <p class=\"faq-sidebar__title\">问题分类</p>\n          <button class=\"faq-category\" type=\"button\" role=\"tab\" aria-selected=\"true\" aria-controls=\"faq-panel-who\" id=\"faq-tab-who\" data-target=\"faq-panel-who\"><span class=\"faq-category__flow\" aria-hidden=\"true\"></span><span class=\"faq-category__number\">01</span><span class=\"faq-category__label\">咨询对象</span></button>\n          <button class=\"faq-category\" type=\"button\" role=\"tab\" aria-selected=\"false\" aria-controls=\"faq-panel-service\" id=\"faq-tab-service\" data-target=\"faq-panel-service\"><span class=\"faq-category__flow\" aria-hidden=\"true\"></span><span class=\"faq-category__number\">02</span><span class=\"faq-category__label\">服务方式</span></button>\n          <button class=\"faq-category\" type=\"button\" role=\"tab\" aria-selected=\"false\" aria-controls=\"faq-panel-application\" id=\"faq-tab-application\" data-target=\"faq-panel-application\"><span class=\"faq-category__flow\" aria-hidden=\"true\"></span><span class=\"faq-category__number\">03</span><span class=\"faq-category__label\">申请相关</span></button>\n          <button class=\"faq-category\" type=\"button\" role=\"tab\" aria-selected=\"false\" aria-controls=\"faq-panel-result\" id=\"faq-tab-result\" data-target=\"faq-panel-result\"><span class=\"faq-category__flow\" aria-hidden=\"true\"></span><span class=\"faq-category__number\">04</span><span class=\"faq-category__label\">结果与选择</span></button>\n        </aside>\n\n        <div class=\"faq-content\">\n          <section class=\"faq-panel is-active\" id=\"faq-panel-who\" role=\"tabpanel\" aria-labelledby=\"faq-tab-who\">\n            <header class=\"faq-panel__head reveal\"><h2 class=\"faq-panel__title\"><span class=\"faq-panel__number\">01</span>咨询对象</h2><p>先判断这项服务是否适合你，以及应该从哪个阶段开始。</p></header>\n            <div class=\"faq-question-list reveal\">\n              <article class=\"faq-question is-open\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"true\"><span class=\"faq-question__index\">01</span><span class=\"faq-question__title\">哪些学生可以咨询？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>从大一到大三都可以，但不同阶段解决的问题并不一样。大一、大二更适合做长期规划、成绩与英语积累、科研和竞赛选择；大三则更偏向院校定位、材料准备、导师沟通和面试训练。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">02</span><span class=\"faq-question__title\">什么时候开始准备比较合适？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>越早开始越从容，但“晚了”不等于没有空间。关键是先判断你现在所处的阶段，再决定哪些事情值得优先补、哪些事情已经不值得继续消耗时间。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">03</span><span class=\"faq-question__title\">成绩一般、科研较强，还适合冲更好的学校吗？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>需要结合排名、学校背景、科研质量、英语、竞赛和目标方向一起判断。单看某一个指标很难得出结论，真正重要的是先弄清你的长板能否在目标院校的筛选和面试中发挥作用。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">04</span><span class=\"faq-question__title\">还不知道自己该申请什么层次的学校，怎么办？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>这正是院校定位要解决的问题。先梳理你的硬性条件和优势，再结合目标方向、往年要求和个人偏好建立申请梯度，而不是先凭学校名气列名单。</p></div></div>\n              </article>\n            </div>\n          </section>\n\n          <section class=\"faq-panel\" id=\"faq-panel-service\" role=\"tabpanel\" aria-labelledby=\"faq-tab-service\" hidden>\n            <header class=\"faq-panel__head\"><h2 class=\"faq-panel__title\"><span class=\"faq-panel__number\">02</span>服务方式</h2><p>关于单项服务、长期辅导、沟通方式与费用。</p></header>\n            <div class=\"faq-question-list\">\n              <article class=\"faq-question is-open\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"true\"><span class=\"faq-question__index\">01</span><span class=\"faq-question__title\">可以只选择一项服务吗？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>可以。可以只做院校定位、简历与文书优化、导师联系或模拟面试，也可以根据当前阶段选择完整的长期辅导。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">02</span><span class=\"faq-question__title\">辅导采用什么形式？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>以线上为主，根据具体服务采用一对一沟通、文档批注、语音或线上会议等形式。开始前会先明确服务内容、沟通方式和交付边界。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">03</span><span class=\"faq-question__title\">辅导费用如何确定？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>费用根据服务内容、持续时间和投入程度确定。单项服务和长期辅导的计费方式不同，会在沟通需求后先说明具体方案，再由你决定是否开始。</p></div></div>\n              </article>\n            </div>\n          </section>\n\n          <section class=\"faq-panel\" id=\"faq-panel-application\" role=\"tabpanel\" aria-labelledby=\"faq-tab-application\" hidden>\n            <header class=\"faq-panel__head\"><h2 class=\"faq-panel__title\"><span class=\"faq-panel__number\">03</span>申请相关</h2><p>关于院校定位、材料、导师联系与面试准备。</p></header>\n            <div class=\"faq-question-list\">\n              <article class=\"faq-question is-open\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"true\"><span class=\"faq-question__index\">01</span><span class=\"faq-question__title\">院校定位主要看哪些因素？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>重点看本科背景、专业排名、英语、科研、竞赛、目标研究方向，以及目标院校往年的筛选和考核特点。定位不是只看“能不能冲”，而是建立合理的主申、冲刺和保底梯度。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">02</span><span class=\"faq-question__title\">简历和个人陈述主要优化什么？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>不只是润色语言和排版，更重要的是重新梳理信息层级：哪些经历值得展开、科研怎么讲清楚、优势应该放在哪里，以及不同材料之间如何保持一致。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">03</span><span class=\"faq-question__title\">模拟面试会练哪些内容？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>主要围绕自我介绍、科研经历、专业课、英语问答和老师可能继续追问的内容展开。重点不是背答案，而是把自己的经历和专业知识真正讲清楚。</p></div></div>\n              </article>\n            </div>\n          </section>\n\n          <section class=\"faq-panel\" id=\"faq-panel-result\" role=\"tabpanel\" aria-labelledby=\"faq-tab-result\" hidden>\n            <header class=\"faq-panel__head\"><h2 class=\"faq-panel__title\"><span class=\"faq-panel__number\">04</span>结果与选择</h2><p>关于结果边界，以及最终选择应该如何做。</p></header>\n            <div class=\"faq-question-list\">\n              <article class=\"faq-question is-open\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"true\"><span class=\"faq-question__index\">01</span><span class=\"faq-question__title\">能保证拿到目标院校录取吗？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>不能。保研结果受到个人背景、当年竞争、院校政策、导师名额和现场发挥等多方面因素影响。辅导能做的是提高信息质量、准备效率和决策质量，并陪你一起争取更优结果。</p></div></div>\n              </article>\n              <article class=\"faq-question\">\n                <button class=\"faq-question__button\" type=\"button\" aria-expanded=\"false\"><span class=\"faq-question__index\">02</span><span class=\"faq-question__title\">如果最后拿到多个录取机会，怎么选？</span><span class=\"faq-question__icon\" aria-hidden=\"true\"></span></button>\n                <div class=\"faq-question__answer\"><div class=\"faq-question__answer-inner\"><p>会从学校平台、导师、研究方向、培养方式、城市和个人规划等维度一起比较，把利弊尽可能讲清楚。提供参考，选择权在你。</p></div></div>\n              </article>\n            </div>\n          </section>\n\n          <div class=\"faq-contact reveal\">\n            <div><h3>没有找到你的问题？</h3><p>把你的年级、专业、排名和当前困惑告诉我，先一起判断问题属于规划、定位、材料、面试还是最终选择。</p></div>\n            <a class=\"button button--small\" href=\"contact.html\">联系咨询</a>\n          </div>\n        </div>\n      </div>\n    </section>\n"},"contact":{"title":"联系我","html":"\n<section class=\"contact-page\" aria-labelledby=\"contact-title\">\n      <div class=\"container contact-page__inner\">\n        <div class=\"contact-page__portrait reveal\">\n          <img src=\"assets/arlo-avatar.jpg\" alt=\"Arlo 的头像\" width=\"1306\" height=\"1242\">\n        </div>\n        <header class=\"contact-page__head reveal\">\n          <h1 id=\"contact-title\">联系<em>我</em></h1>\n          <p>欢迎通过下面任一方式与我联系。</p>\n        </header>\n        <div class=\"contact-page__methods reveal\" aria-label=\"联系方式\">\n          <div class=\"contact-method\">\n            <span>微信</span>\n            <strong>Hcw102116888</strong>\n          </div>\n          <div class=\"contact-method\">\n            <span>邮箱</span>\n            <a href=\"mailto:Hcw1021@mail.ustc.edu.cn\">Hcw1021@mail.ustc.edu.cn</a>\n          </div>\n          <div class=\"contact-method\">\n            <span>小红书</span>\n            <strong>Doraamon</strong>\n            <small>小红书号 4193795763</small>\n          </div>\n          <div class=\"contact-method\">\n            <span>微信公众号</span>\n            <strong>大瑜号的小灰狼</strong>\n          </div>\n        </div>\n      </div>\n    </section>\n"}};
  const KNOWN = new Set(Object.keys(PAGE_DATA));
  const FALLBACK = (document.body.dataset.page || 'index.html').replace(/\.html$/i, '');
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');
  const HASH_PREFIX = '#/';
  const storedMain = document.querySelector('main');
  let currentPage = KNOWN.has(FALLBACK) ? FALLBACK : 'index';
  let revealObserver = null;
  let pageListenersAbort = null;
  let revealStatus = { total: 0, pending: 0, triggered: 0, skippedInitiallyVisible: 0, reason: 'initializing' };
  window.ARLOWANG_SITE_BUILD = '2026-09-27-school-logos-v1';
  window.ARLOWANG_MOTION_STATUS = () => ({...revealStatus, page:currentPage, build:window.ARLOWANG_SITE_BUILD});

  function parseRoute() {
    if (!window.location.hash.startsWith(HASH_PREFIX)) return null;
    const pieces = window.location.hash.slice(HASH_PREFIX.length).split('/');
    const page = pieces.shift();
    if (!KNOWN.has(page)) return null;
    return {page, anchor: pieces.length ? decodeURIComponent(pieces.join('/')) : ''};
  }

  function highlightNavigation(page) {
    for (const link of document.querySelectorAll('.site-header a[href]')) {
      const isCurrent = link.getAttribute('href') === page + '.html';
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
  }

  function closeMobileMenu() {
    const nav = document.getElementById('site-nav');
    const toggle = document.querySelector('.nav-toggle');
    nav?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }

  function initSmartHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    let previousY = Math.max(0, window.scrollY);
    let direction = 0;
    let travelled = 0;
    let ticking = false;
    const downTrigger = 22;
    const upTrigger = 10;

    const showHeader = () => document.body.classList.remove('is-site-header-hidden');
    const updateHeader = () => {
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - previousY;
      previousY = currentY;
      const menuOpen = document.getElementById('site-nav')?.classList.contains('is-open');

      if (currentY <= 10 || menuOpen) {
        showHeader();
        direction = 0;
        travelled = 0;
        ticking = false;
        return;
      }

      if (Math.abs(delta) < .5) {
        ticking = false;
        return;
      }

      const nextDirection = delta > 0 ? 1 : -1;
      if (nextDirection !== direction) {
        direction = nextDirection;
        travelled = 0;
      }
      travelled += Math.abs(delta);

      if (direction === 1 && travelled >= downTrigger) {
        document.body.classList.add('is-site-header-hidden');
        travelled = 0;
      } else if (direction === -1 && travelled >= upTrigger) {
        showHeader();
        travelled = 0;
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeader);
    }, {passive: true});
    header.addEventListener('focusin', showHeader);
    header.addEventListener('pointerenter', showHeader);
  }

  function stopPageObservers() {
    revealObserver?.disconnect();
    revealObserver = null;
    pageListenersAbort?.abort();
    pageListenersAbort = null;
  }

  function initPageFeatures() {
    stopPageObservers();
    pageListenersAbort = new AbortController();
    const {signal} = pageListenersAbort;
    const slides = [...document.querySelectorAll('main .slide')];
    if (slides.length > 1) {
      const dots = [...document.querySelectorAll('main .dot')];
      const status = document.getElementById('carousel-status');
      let slideIndex = 0;
      const show = next => {
        slideIndex = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => {
          const active = i === slideIndex;
          slide.classList.toggle('is-active', active);
          slide.setAttribute('aria-hidden', String(!active));
          slide.inert = !active;
          for (const link of slide.querySelectorAll('a')) link.tabIndex = active ? 0 : -1;
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle('is-active', i === slideIndex);
          dot.setAttribute('aria-pressed', String(i === slideIndex));
        });
        if (status) status.textContent = `第 ${slideIndex + 1} 张，共 ${slides.length} 张`;
      };
      // 自动播放；用户手动切换后，从最后一次操作起暂停 5 秒，再恢复自动播放。
      const AUTO_INTERVAL = 5400;
      const MANUAL_IDLE = 5000;
      let timer = null;
      const stopTimer = () => { if (timer !== null) clearTimeout(timer); timer = null; };
      const scheduleAuto = (delay = AUTO_INTERVAL) => {
        stopTimer();
        if (REDUCED_MOTION.matches || document.hidden) return;
        timer = setTimeout(() => {
          show(slideIndex + 1);
          scheduleAuto();
        }, delay);
      };
      const manuallySelect = next => { show(next); scheduleAuto(MANUAL_IDLE); };
      document.querySelector('[data-carousel="prev"]')?.addEventListener('click', () => manuallySelect(slideIndex - 1), {signal});
      document.querySelector('[data-carousel="next"]')?.addEventListener('click', () => manuallySelect(slideIndex + 1), {signal});
      dots.forEach((dot, i) => dot.addEventListener('click', () => manuallySelect(i), {signal}));
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopTimer(); else scheduleAuto();
      }, {signal});
      signal.addEventListener('abort', stopTimer, {once:true});
      show(0);
      scheduleAuto();
    }

    const serviceLinks = [...document.querySelectorAll('.service-path__item')];
    const serviceSections = [...document.querySelectorAll('[data-service-step]')];
    const serviceTrack = document.querySelector('.service-path__track');
    const serviceViewport = document.querySelector('.service-path__viewport');
    if (serviceLinks.length && serviceSections.length && serviceTrack && serviceViewport) {
      let activeIndex = -1;
      let flowTimer = 0;
      let navigationTimer = 0;
      let navigationTarget = '';
      const setActiveService = id => {
        const nextIndex = serviceLinks.findIndex(link => link.getAttribute('href') === `#${id}`);
        if (nextIndex < 0 || nextIndex === activeIndex) return;
        activeIndex = nextIndex;
        serviceLinks.forEach((link, index) => {
          link.classList.toggle('is-complete', index < nextIndex);
          if (index === nextIndex) link.setAttribute('aria-current', 'step');
          else link.removeAttribute('aria-current');
        });
        serviceTrack.style.setProperty('--path-progress', `${(nextIndex / (serviceLinks.length - 1)) * 83.334}%`);
        serviceTrack.classList.remove('is-flowing');
        void serviceTrack.offsetWidth;
        serviceTrack.classList.add('is-flowing');
        clearTimeout(flowTimer);
        flowTimer = setTimeout(() => serviceTrack.classList.remove('is-flowing'), 700);
        const activeLink = serviceLinks[nextIndex];
        serviceViewport.scrollTo({
          left: activeLink.offsetLeft - (serviceViewport.clientWidth - activeLink.offsetWidth) / 2,
          behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth'
        });
      };
      setActiveService(serviceSections[0].id);
      serviceLinks.forEach(link => {
        link.addEventListener('click', event => {
          const id = link.getAttribute('href')?.slice(1);
          const target = id && document.getElementById(id);
          if (!target) return;
          event.preventDefault();
          navigationTarget = id;
          setActiveService(id);
          target.scrollIntoView({behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth', block: 'start'});
          const routeHash = window.location.hash.startsWith(HASH_PREFIX) ? `${HASH_PREFIX}services/${id}` : `#${id}`;
          history.replaceState(null, '', routeHash);
          clearTimeout(navigationTimer);
          navigationTimer = setTimeout(() => { navigationTarget = ''; }, 1250);
        }, {signal});
      });
      if ('IntersectionObserver' in window) {
        const serviceObserver = new IntersectionObserver(entries => {
          const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          if (navigationTarget && visible.target.id !== navigationTarget) return;
          if (visible.target.id === navigationTarget) navigationTarget = '';
          setActiveService(visible.target.id);
        }, {rootMargin: '-30% 0px -55% 0px', threshold: [0, .1, .3]});
        serviceSections.forEach(section => serviceObserver.observe(section));
        signal.addEventListener('abort', () => serviceObserver.disconnect(), {once:true});
      }
      signal.addEventListener('abort', () => {
        clearTimeout(flowTimer);
        clearTimeout(navigationTimer);
      }, {once:true});
    }

    const processLinks = [...document.querySelectorAll('.process-path__item')];
    const processSections = [...document.querySelectorAll('[data-process-step]')];
    const processTrack = document.querySelector('.process-path__track');
    const processViewport = document.querySelector('.process-path__viewport');
    if (processLinks.length && processSections.length && processTrack && processViewport) {
      let activeIndex = -1;
      let navigationTimer = 0;
      let navigationTarget = '';
      const setActiveProcess = id => {
        const nextIndex = processLinks.findIndex(link => link.getAttribute('href') === `#${id}`);
        if (nextIndex < 0 || nextIndex === activeIndex) return;
        activeIndex = nextIndex;
        processLinks.forEach((link, index) => {
          link.classList.toggle('is-complete', index < nextIndex);
          if (index === nextIndex) link.setAttribute('aria-current', 'step');
          else link.removeAttribute('aria-current');
        });
        processTrack.style.setProperty('--process-progress', `${(nextIndex / (processLinks.length - 1)) * 83.334}%`);
        const activeLink = processLinks[nextIndex];
        processViewport.scrollTo({
          left: activeLink.offsetLeft - (processViewport.clientWidth - activeLink.offsetWidth) / 2,
          behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth'
        });
      };
      setActiveProcess(processSections[0].id);
      processLinks.forEach(link => {
        link.addEventListener('click', event => {
          const id = link.getAttribute('href')?.slice(1);
          const target = id && document.getElementById(id);
          if (!target) return;
          event.preventDefault();
          navigationTarget = id;
          setActiveProcess(id);
          target.scrollIntoView({behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth', block: 'start'});
          const routeHash = window.location.hash.startsWith(HASH_PREFIX) ? `${HASH_PREFIX}process/${id}` : `#${id}`;
          history.replaceState(null, '', routeHash);
          clearTimeout(navigationTimer);
          navigationTimer = setTimeout(() => { navigationTarget = ''; }, 1250);
        }, {signal});
      });
      if ('IntersectionObserver' in window) {
        const processObserver = new IntersectionObserver(entries => {
          const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          if (navigationTarget && visible.target.id !== navigationTarget) return;
          if (visible.target.id === navigationTarget) navigationTarget = '';
          setActiveProcess(visible.target.id);
        }, {rootMargin: '-30% 0px -55% 0px', threshold: [0, .1, .3]});
        processSections.forEach(section => processObserver.observe(section));
        signal.addEventListener('abort', () => processObserver.disconnect(), {once:true});
      }
      signal.addEventListener('abort', () => clearTimeout(navigationTimer), {once:true});
    }

    const aboutLinks = [...document.querySelectorAll('.about-timeline__link')];
    const aboutSections = [...document.querySelectorAll('[data-about-stage]')];
    const aboutTimeline = document.querySelector('.about-timeline');
    if (aboutLinks.length && aboutSections.length && aboutTimeline) {
      let activeIndex = -1;
      let navigationTimer = 0;
      let navigationTarget = '';
      const setActiveAbout = id => {
        const nextIndex = aboutLinks.findIndex(link => link.getAttribute('href') === `#${id}`);
        if (nextIndex < 0 || nextIndex === activeIndex) return;
        activeIndex = nextIndex;
        aboutLinks.forEach((link, index) => {
          link.classList.toggle('is-complete', index < nextIndex);
          if (index === nextIndex) link.setAttribute('aria-current', 'step');
          else link.removeAttribute('aria-current');
        });
        const denominator = Math.max(aboutLinks.length - 1, 1);
        aboutTimeline.style.setProperty('--timeline-progress', `${(nextIndex / denominator) * 100}%`);
        if (window.matchMedia('(max-width:900px)').matches) {
          const activeLink = aboutLinks[nextIndex];
          aboutTimeline.scrollTo({
            left: activeLink.offsetLeft - (aboutTimeline.clientWidth - activeLink.offsetWidth) / 2,
            behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth'
          });
        }
      };
      setActiveAbout(aboutSections[0].id);
      aboutLinks.forEach(link => {
        link.addEventListener('click', event => {
          const id = link.getAttribute('href')?.slice(1);
          const target = id && document.getElementById(id);
          if (!target) return;
          event.preventDefault();
          navigationTarget = id;
          setActiveAbout(id);
          target.scrollIntoView({behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth', block: 'start'});
          const routeHash = window.location.hash.startsWith(HASH_PREFIX) ? `${HASH_PREFIX}about/${id}` : `#${id}`;
          history.replaceState(null, '', routeHash);
          clearTimeout(navigationTimer);
          navigationTimer = setTimeout(() => { navigationTarget = ''; }, 1250);
        }, {signal});
      });
      if ('IntersectionObserver' in window) {
        const aboutObserver = new IntersectionObserver(entries => {
          const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          if (navigationTarget && visible.target.id !== navigationTarget) return;
          if (visible.target.id === navigationTarget) navigationTarget = '';
          setActiveAbout(visible.target.id);
        }, {rootMargin: '-25% 0px -58% 0px', threshold: [0, .1, .3]});
        aboutSections.forEach(section => aboutObserver.observe(section));
        signal.addEventListener('abort', () => aboutObserver.disconnect(), {once:true});
      }
      signal.addEventListener('abort', () => clearTimeout(navigationTimer), {once:true});
    }

    const admissionCarousel = document.getElementById('admission-carousel');
    if (admissionCarousel) {
      const track = admissionCarousel.querySelector('.admission-carousel__track');
      const slides = [...admissionCarousel.querySelectorAll('.admission-carousel__slide')];
      const dotsRoot = admissionCarousel.querySelector('.admission-carousel__dots');
      const previous = admissionCarousel.querySelector('.admission-carousel__arrow--prev');
      const next = admissionCarousel.querySelector('.admission-carousel__arrow--next');
      const current = admissionCarousel.querySelector('.admission-carousel__counter b');
      const status = admissionCarousel.querySelector('#admission-carousel-status');
      const dots = slides.map((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `查看第 ${index + 1} 张录取通知`);
        dot.setAttribute('aria-pressed', String(index === 0));
        if (index === 0) dot.classList.add('is-active');
        dotsRoot?.append(dot);
        return dot;
      });
      let admissionIndex = 0;
      let admissionTimer = 0;
      let admissionPointerStart = null;
      const stopAdmissionTimer = () => {
        clearTimeout(admissionTimer);
        admissionTimer = 0;
      };
      const showAdmissionSlide = value => {
        if (!track || !slides.length) return;
        admissionIndex = (value + slides.length) % slides.length;
        slides.forEach((slide, index) => {
          const previousIndex = (admissionIndex - 1 + slides.length) % slides.length;
          const nextIndex = (admissionIndex + 1) % slides.length;
          slide.classList.toggle('is-current', index === admissionIndex);
          slide.classList.toggle('is-prev', index === previousIndex);
          slide.classList.toggle('is-next', index === nextIndex);
          slide.classList.toggle('is-hidden', index !== admissionIndex && index !== previousIndex && index !== nextIndex);
          slide.setAttribute('aria-hidden', String(index !== admissionIndex));
        });
        dots.forEach((dot, index) => {
          const active = index === admissionIndex;
          dot.classList.toggle('is-active', active);
          dot.setAttribute('aria-pressed', String(active));
        });
        if (current) current.textContent = String(admissionIndex + 1).padStart(2, '0');
        if (status) status.textContent = `第 ${admissionIndex + 1} 张，共 ${slides.length} 张`;
      };
      const scheduleAdmission = (delay = 5200) => {
        stopAdmissionTimer();
        if (REDUCED_MOTION.matches || slides.length < 2 || document.hidden) return;
        admissionTimer = setTimeout(() => {
          showAdmissionSlide(admissionIndex + 1);
          scheduleAdmission();
        }, delay);
      };
      const selectAdmissionSlide = value => {
        showAdmissionSlide(value);
        scheduleAdmission(6200);
      };
      previous?.addEventListener('click', () => selectAdmissionSlide(admissionIndex - 1), {signal});
      next?.addEventListener('click', () => selectAdmissionSlide(admissionIndex + 1), {signal});
      dots.forEach((dot, index) => dot.addEventListener('click', () => selectAdmissionSlide(index), {signal}));
      admissionCarousel.addEventListener('mouseenter', stopAdmissionTimer, {signal});
      admissionCarousel.addEventListener('mouseleave', () => scheduleAdmission(6200), {signal});
      admissionCarousel.addEventListener('focusin', stopAdmissionTimer, {signal});
      admissionCarousel.addEventListener('focusout', event => {
        if (!admissionCarousel.contains(event.relatedTarget)) scheduleAdmission(6200);
      }, {signal});
      admissionCarousel.addEventListener('pointerdown', event => { admissionPointerStart = event.clientX; }, {signal});
      admissionCarousel.addEventListener('pointerup', event => {
        if (admissionPointerStart === null) return;
        const distance = event.clientX - admissionPointerStart;
        admissionPointerStart = null;
        if (Math.abs(distance) > 55) selectAdmissionSlide(admissionIndex + (distance < 0 ? 1 : -1));
      }, {signal});
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopAdmissionTimer(); else scheduleAdmission();
      }, {signal});
      signal.addEventListener('abort', stopAdmissionTimer, {once:true});
      showAdmissionSlide(0);
      scheduleAdmission();
    }

    const casesCarousel = document.getElementById('cases-carousel');
    if (casesCarousel) {
      const track = casesCarousel.querySelector('.cases-carousel__track');
      const slides = [...casesCarousel.querySelectorAll('.cases-slide')];
      const dots = [...casesCarousel.querySelectorAll('.cases-carousel__controls button')];
      const previous = casesCarousel.querySelector('.cases-carousel__arrow--prev');
      const next = casesCarousel.querySelector('.cases-carousel__arrow--next');
      const status = casesCarousel.querySelector('#cases-carousel-status');
      let caseIndex = 0;
      let caseTimer = 0;
      let pointerStart = null;
      const stopCasesTimer = () => {
        clearTimeout(caseTimer);
        caseTimer = 0;
      };
      const showCasesSlide = value => {
        if (!track || !slides.length) return;
        caseIndex = (value + slides.length) % slides.length;
        track.style.transform = `translate3d(-${caseIndex * 100}%,0,0)`;
        slides.forEach((slide, index) => slide.setAttribute('aria-hidden', String(index !== caseIndex)));
        dots.forEach((dot, index) => {
          const active = index === caseIndex;
          dot.classList.toggle('is-active', active);
          dot.setAttribute('aria-pressed', String(active));
        });
        if (status) status.textContent = `第 ${caseIndex + 1} 组，共 ${slides.length} 组`;
      };
      const scheduleCases = (delay = 7000) => {
        stopCasesTimer();
        if (REDUCED_MOTION.matches || slides.length < 2 || document.hidden) return;
        caseTimer = setTimeout(() => {
          showCasesSlide(caseIndex + 1);
          scheduleCases();
        }, delay);
      };
      const selectCasesSlide = value => {
        showCasesSlide(value);
        scheduleCases(5500);
      };
      previous?.addEventListener('click', () => selectCasesSlide(caseIndex - 1), {signal});
      next?.addEventListener('click', () => selectCasesSlide(caseIndex + 1), {signal});
      dots.forEach((dot, index) => dot.addEventListener('click', () => selectCasesSlide(index), {signal}));
      casesCarousel.addEventListener('mouseenter', stopCasesTimer, {signal});
      casesCarousel.addEventListener('mouseleave', () => scheduleCases(5500), {signal});
      casesCarousel.addEventListener('focusin', stopCasesTimer, {signal});
      casesCarousel.addEventListener('focusout', event => {
        if (!casesCarousel.contains(event.relatedTarget)) scheduleCases(5500);
      }, {signal});
      casesCarousel.addEventListener('pointerdown', event => { pointerStart = event.clientX; }, {signal});
      casesCarousel.addEventListener('pointerup', event => {
        if (pointerStart === null) return;
        const distance = event.clientX - pointerStart;
        pointerStart = null;
        if (Math.abs(distance) > 55) selectCasesSlide(caseIndex + (distance < 0 ? 1 : -1));
      }, {signal});
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopCasesTimer(); else scheduleCases();
      }, {signal});
      signal.addEventListener('abort', stopCasesTimer, {once:true});
      showCasesSlide(0);
      scheduleCases();
    }

    const faqTabs = [...document.querySelectorAll('.faq-category')];
    const faqPanels = [...document.querySelectorAll('.faq-panel')];
    const faqContent = document.querySelector('.faq-content');
    if (faqTabs.length && faqPanels.length) {
      const activateFaqTab = (tab, shouldFocus = false) => {
        const targetId = tab.dataset.target;
        faqTabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
        faqPanels.forEach(panel => {
          const isActive = panel.id === targetId;
          panel.hidden = !isActive;
          panel.classList.toggle('is-active', isActive);
        });
        if (shouldFocus) tab.focus();
      };
      faqTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          activateFaqTab(tab);
          if (window.matchMedia('(max-width:900px)').matches) {
            faqContent?.scrollIntoView({behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth', block: 'start'});
          }
        }, {signal});
        tab.addEventListener('keydown', event => {
          if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
          event.preventDefault();
          const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
          const next = faqTabs[(index + direction + faqTabs.length) % faqTabs.length];
          activateFaqTab(next, true);
        }, {signal});
      });
      document.querySelectorAll('.faq-question__button').forEach(button => {
        button.addEventListener('click', () => {
          const item = button.closest('.faq-question');
          const panel = item?.closest('.faq-panel');
          if (!item || !panel) return;
          const willOpen = !item.classList.contains('is-open');
          panel.querySelectorAll('.faq-question').forEach(question => {
            question.classList.remove('is-open');
            question.querySelector('.faq-question__button')?.setAttribute('aria-expanded', 'false');
          });
          if (willOpen) {
            item.classList.add('is-open');
            button.setAttribute('aria-expanded', 'true');
          }
        }, {signal});
      });
    }

    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', event => {
      event.preventDefault();
      if (form.reportValidity()) window.alert('这是纯静态演示表单，不会发送或保存信息。请添加微信 xxx 咨询。');
    }, {signal});
    const copy = document.getElementById('copy-wechat');
    copy?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('xxx');
        copy.textContent = '已复制微信号';
        setTimeout(() => { if (copy.isConnected) copy.textContent = '复制微信号'; }, 2100);
      } catch { window.alert('微信号：xxx'); }
    }, {signal});

    // 首屏可见内容直接显示，只有初始屏幕下方的元素被预置为待显示。
    const elements = [...document.querySelectorAll('main .reveal')];
    revealStatus = {total: elements.length, pending: 0, triggered: 0,
      skippedInitiallyVisible: 0, reason: 'ready'};
    if (REDUCED_MOTION.matches || !('IntersectionObserver' in window)) {
      revealStatus.reason = REDUCED_MOTION.matches ? 'reduced-motion' : 'no-IntersectionObserver';
      return;
    }
    const height = window.innerHeight || document.documentElement.clientHeight;
    const eligible = elements.filter(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= height + 4) return true;
      revealStatus.skippedInitiallyVisible++;
      return false;
    });
    revealStatus.pending = eligible.length;
    revealStatus.reason = 'scroll-observer-ready';
    revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        revealObserver?.unobserve(el);
        if (!el.classList.contains('is-reveal-pending')) continue;
        if (window.scrollY > 6 && !REDUCED_MOTION.matches) {
          el.classList.add('is-reveal-visible');
          revealStatus.triggered++;
          const cleanup = () => el.classList.remove('is-reveal-pending', 'is-reveal-visible');
          el.addEventListener('transitionend', cleanup, {once:true, signal});
          setTimeout(cleanup, 850);
        } else {
          el.classList.remove('is-reveal-pending');
        }
        revealStatus.pending--;
      }
    }, {rootMargin:'0px 0px -36px 0px', threshold:0.01});
    for (const el of eligible) {
      el.classList.add('is-reveal-pending');
      revealObserver.observe(el);
    }
  }

  function jumpToTop() {
    // 不使用平滑滚动，否则切换内容后会从旧页面中间位置滑回顶部。
    const html = document.documentElement;
    const old = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = old;
  }

  function jumpToAnchor(anchor) {
    if (!anchor) return;
    const target = document.getElementById(anchor);
    if (!target) return;
    const html = document.documentElement;
    const old = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    target.scrollIntoView({block:'start', behavior:'instant'});
    html.style.scrollBehavior = old;
  }

  function render(page, anchor = '') {
    if (!KNOWN.has(page)) return;
    const needsChange = currentPage !== page;
    if (needsChange) {
      // 同一事件轮次内完成滚动归零与主内容替换；导航栏和页脚不变。
      stopPageObservers();
      jumpToTop();
      storedMain.innerHTML = PAGE_DATA[page].html;
      currentPage = page;
      document.body.dataset.page = page + '.html';
      document.title = PAGE_DATA[page].title + ' | ArloWang Lab';
      highlightNavigation(page);
      initPageFeatures();
    }
    closeMobileMenu();
    if (anchor) jumpToAnchor(anchor);
    else if (!needsChange) jumpToTop();
  }

  // 仅拦截当前目录的七个站内 HTML 链接。普通外链、下载、Ctrl/Cmd+点击等仍由浏览器处理。
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    let url;
    try { url = new URL(href, window.location.href); } catch { return; }
    const thisDir = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/') + 1);
    if (url.protocol !== window.location.protocol || url.host !== window.location.host ||
        url.pathname.slice(0, url.pathname.lastIndexOf('/') + 1) !== thisDir) return;
    const match = url.pathname.match(/\/([a-z]+)\.html$/i);
    if (!match || !KNOWN.has(match[1])) return;
    event.preventDefault();
    const next = '#/' + match[1] + (url.hash ? '/' + encodeURIComponent(decodeURIComponent(url.hash.slice(1))) : '');
    if (window.location.hash === next) {
      const route = parseRoute();
      if (route) render(route.page, route.anchor);
    } else {
      window.location.hash = next;
    }
  });

  window.addEventListener('hashchange', () => {
    const route = parseRoute();
    if (route) render(route.page, route.anchor);
    else render(FALLBACK);
  });

  document.addEventListener('DOMContentLoaded', () => {
    initSmartHeader();
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('site-nav');
    toggle?.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });
    document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMobileMenu(); });
    const route = parseRoute();
    if (route) render(route.page, route.anchor);
    else { highlightNavigation(currentPage); initPageFeatures(); }
  });

  // 返回到本页时，若浏览器恢复滚动位置，确保屏幕中已显示的内容不再被隐藏。
  window.addEventListener('pageshow', () => {
    for (const el of document.querySelectorAll('main .is-reveal-pending')) {
      const rect = el.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0) {
        el.classList.remove('is-reveal-pending', 'is-reveal-visible');
        revealObserver?.unobserve(el);
      }
    }
  });
  REDUCED_MOTION.addEventListener?.('change', () => {
    if (!REDUCED_MOTION.matches) return;
    revealObserver?.disconnect();
    document.querySelectorAll('main .is-reveal-pending').forEach(el => el.classList.remove('is-reveal-pending', 'is-reveal-visible'));
  });
})();
