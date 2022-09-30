/*
 * @Author: zoujiahao
 * @Date: 2022-09-26 14:25:58
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-30 22:36:42
 * @FilePath: \CookBooks\src\util\defaultData.ts
 * @Description: 
 */
export const treeSelectData = [
   {
    title: '菜品',
    typeId: 1,
    child: [{ name: '家常菜' }, { name: '快手菜' }, { name: '创意菜' }, { name: '下酒菜' }, { name: '凉菜' }, { name: '素菜' }, { name: '面食' }, { name: '烘焙' }],
  },
  {
    title: '其他菜品',
    typeId: 1,
    child: [{ name: '烧烤' }, { name: '拼盘' }, { name: '寿司' }, { name: '便当' }, { name: '杂烩' }, { name: '火锅' }, { name: '佐料' }, { name: '酱汁' }, { name: '披萨' }],
  },
  {
    title: '中餐',
    typeId: 1,
    child: [
      { name: '徽菜' },
      { name: '浙菜' },
      { name: '川菜' },
      { name: '湘菜' },
      { name: '粤菜' },
      { name: '京菜' },
      { name: '闽菜' },
      { name: '鲁菜' },
      { name: '豫菜' },
      { name: '赣菜' },
      { name: '客家菜' },
      { name: '新疆菜' },
      { name: '云南菜' },
      { name: '潮州菜' },
      { name: '淮扬菜' },
      { name: '湖北菜' },
      { name: '贵州菜' },
      { name: '香港美食' },
      { name: '其他美食' },
    ],
  },
  {
    title: '素菜',
    typeId: 2,
    child: [{ name: '白菜' }, { name: '娃娃菜' }, { name: '青菜' }, { name: '木耳菜' }, { name: '银耳' }, { name: '莲子' }, { name: '金针菇' }, { name: '海鲜菇' }, { name: '浙江白菇' }],
  },
  {
    title: '荤菜',
    typeId: 2,
    child: [{ name: '猪蹄' }, { name: '招财' }, { name: '猪耳' }, { name: '心肺' }, { name: '牛骨' }, { name: '大筒骨' }, { name: '羊蝎子' }, { name: '肝脏' }],
  },
   {
    title: '养生',
    typeId: 3,
    child: [{ name: '养神益气' }, { name: '驻颜' }, { name: '调利肠胃' }, { name: '下气' }, { name: '治渴' }, { name: '利五脏' }, { name: '明目' }, { name: '宁神' }],
  },
  {
    title: '调理',
    typeId: 3,
    child: [{ name: '补虚' }, { name: '除胃热' }, { name: '猪耳' }, { name: '利五脏' }, { name: '消水肿' }, { name: '益气' }, { name: '治血脉' }],
  },
   {
    title: '南方',
    typeId: 4,
    child: [{ name: '米面' }, { name: '馒头' }, { name: '包子' }, { name: '番薯' }, { name: '玉米' }, { name: '小麦' }, { name: '大米' }],
  },
  {
    title: '北方',
    typeId: 4,
    child: [{ name: '米粉' }, { name: '肠粉' }, { name: '河粉' }, { name: '米线' }, { name: '灌汤包' }, { name: '饺子' }, { name: '馄饨' }, { name: '煎饼' }],
  },
]


// img 680*352  2-102-r
export const knowItemData=[
  {
    id:'1-101',
    title: '牛奶和香蕉一起吃可以减肥吗?香蕉牛奶汁可以减肥吗?',
    time: '2022-8-27',
    source: '网络',
    contentList: [
      {
        type: 'text',
        content:
          '减肥一直以来都是人们非常关心的一个话题，尤其是对于女性朋友们来讲，减肥的话题在任何场合都是可以被提及起来的，随着人们对于减肥的需求越来越大，在目前的情况下，减肥的方法也是不少的，那么牛奶和香蕉一起吃可以减肥吗？香蕉牛奶汁可以减肥吗？',
      },
      {
        type: 'text',
        content:
          '在我们的生活中，经常听有人利用香蕉牛奶榨汁的方法来帮助减肥，但事实上使用香蕉牛奶汁是不可以帮助起到减肥作用的，肥胖发生的最主要的原因其实就是摄入的热量超过了消耗的热量，而减肥最重要的方法就是减少热量的摄入，使能量的消耗量有所增加。',
      },
      { type: 'img', content: 'knowledge/knowItem1.png' },
      { type: 'text', content: '香蕉、牛奶可以给我们的身体增加适量的蛋白质、矿物质以及维生素，有利于身体营养的吸收，也是有利于身体健康的。'},
      { type: 'img', content: 'knowledge/knowItem2.png' },
      {
        type: 'text',
        content: `在生活中不少超重的肥胖人群，都是非常希望可以快速且轻松减肥的，香蕉牛奶汁减肥法的特点是不均衡营养、吃东西，短时间体重会下降，但减少的是水、肌肉和少量的脂肪，而且会带来营养不均衡，损
          害身体，影响健康，还会出现体重的反弹，也叫减肥溜溜球效应，增加更多的脂肪，流失大量的肌肉，往往屡战屡败大病一场，不得不放弃。`,
      },
      { type: 'img', content: 'knowledge/knowItem3.png' },
      {
        type: 'text',
        content: `其实对于所有的减肥者来讲，如果想要控制好自己的体重的话，最健康的生活方式才是最重要的减肥方法。合理均衡的营养、科学适度的锻炼、戒烟、戒酒、心理的平衡、规律的作息、充足的睡眠最重要，所
          以香蕉牛奶汁是不可以减肥的。`,
      },
    ],
  },
  {
    id:'2-102-l',
    title: '花雕酒应该怎么喝才好呢?',
    time: '2022-6-21',
    source: '邹心安',
    contentList: [
      {
        type: 'text',content:'有很多朋友都听说过绍兴花雕，绍兴花雕酒在喝的时候有很多的讲究，今天小编就主要给大家介绍绍兴花雕的喝法，一起来看看吧!',
      },
      { type: 'img', content: 'knowledge/knowItem4.jpg' },
      {
        type: 'text',content:'1.绍兴花雕可以不加热，直接喝，这个时候可以在里面加入一些其他的食材，比如说话梅和生姜，会使得口感更加的丰富。绍兴花雕还可以和其他的果汁饮料一起勾兑着喝，非常适合女性朋友，这样喝口感更加柔和，非常的好喝!',
      },
      { type: 'text', content: '2.花雕酒最正宗的喝法是加热了之后喝，花雕酒加热到60度左右是合适的，如果温度再高，酒精就挥发了，这样酒的味道就变得不浓烈了。平日里开封的花雕酒千万别放太多时间，因为很容易就会氧化。'},
      // { type: 'img', content: 'knowledge/knowItem2.png' },
      {
        type: 'text',content: `3.在冬天，花雕酒还有一种独特的喝法，就是和生姜以及枸杞子一起放入到锅里煮，煮十分钟之后，趁热喝下去，有非常好的养生保健的效果。一般来说，煮过的花雕酒在45摄氏度的左右喝是最合适的。`,
      },
      { type: 'img', content: 'knowledge/knowItem5.jpg' },
      {
        type: 'text',content: `花雕酒含有多种人体需要的营养物质，具有非常好的养生滋补效果，它的确是生活中喝酒时候的一个不错的选择，如果你们有机会购买到正宗的绍兴花雕酒的，一定要尝试一下，但是酒虽好不宜饮用过多!`,
      },
    ],
  },
  {
    id:'2-102-r',
    title: '生榨胡萝卜汁可以喝吗?怎么做呢?',
    time: '2021-9-16',
    source: '邹心安',
    contentList: [
      {
        type: 'text',content:'胡萝卜在大家的生活中比较常见，是蔬菜中的一类，含有丰富的营养元素，多吃胡萝卜对于身体的好处是比较大的。现在也有许多人把胡萝卜榨成鲜汁来喝，这样营养更丰富，那么鲜榨胡萝卜汁怎么做呢？',
      },
      { type: 'img', content: 'knowledge/knowItem8.jpg' },
      {
        type: 'text',content:'首先准备食材：胡萝卜1根、蜂蜜2勺、温水适量。取适量新鲜胡萝卜去皮切成小丁；将胡萝卜丁倒入豆浆机，加入适量水位的温水和两勺蜂蜜，按果汁键功能就完成了；最后搅打完毕的胡萝卜汁，可以过滤也可以不过滤。',
      },
      {
        type: 'text',content:'每日喝1杯胡萝卜汁有祛斑作用，因为胡萝卜含有丰富的维生素A原，维生素A原在体内可转化为维生素A，维生素A具有滑润、强健皮肤的作用，并可防治皮肤粗糙及雀斑。',
      },
      { type: 'img', content: 'knowledge/knowItem9.jpg' },
      {
        type: 'text',content:'鲜榨胡萝卜汁的做法特别的简单，就是把胡萝卜、蜂蜜和水加入豆浆机中搅打，这样鲜榨胡萝卜汁就做成了，而且经常喝胡萝卜汁有祛斑作用。',
      },
    ],
  },
  {
    id:'3-103',
    title: '番茄茄红素吸收率提升50%的4大绝招 让你吃出惊人美肌力',
    time: '2021-8-24',
    source: '小编',
    contentList: [
      {
        type: 'text',content:'番茄是我很喜欢使用的蔬菜，酸甜又多汁，不管是搭配海鲜、面条吃起来都有很棒的异国风味，而且番茄的营养价值非常高，尤其里头含的茄红素是很强的抗氧化物，能够延缓老化及疾病的产生，皮肤也能越吃越好!如果想要当个美魔女，一定要常常吃番茄，而且只要吃对方法，吃一颗番茄可抵两颗喔!番茄该怎么吃才能发挥他的最大营养价值?快来看看着我的4大绝招吧',
      },
      { type: 'img', content: 'knowledge/knowItem6.jpg' },
      {
        type: 'text',content:'第一招、不要去皮!\n番茄皮的茄红素含量比果肉还多，尤其是越红的外皮，含量可能是果肉的两三倍，建议吃番茄时可连皮一起吃喔!',
      },
      {
        type: 'text',content:'第二招、加热煮熟吃\n茄红素大多存在细胞壁内，如果加热烹调后，可以让番茄释放更多的茄红素，营养更加倍。',
      },
      {
        type: 'text',content:'第三招、与油一起吃\n茄红素属于脂溶性维生素，和油一起吃可以提高两到三倍的吸收率唷!',
      },
      {
        type: 'text',content:'第四招、生食可饭后吃\n如果要生吃番茄，可以饭后吃，因为肚子里已经有肉类油脂等食物，饭后吃番茄，更可以提高人体对番茄的吸收率唷!提供好吃又健康的番茄食谱， 大家一起多吃番茄。整颗番茄饭─奶油培根番茄饭',
      },
      { type: 'img', content: 'knowledge/knowItem7.jpg' },
      {
        type: 'text',content: `此外,建议大家选用番茄时要注意，番茄有许多种类，小颗的番茄含糖量较高，为水果类;大颗的番茄(如牛番茄、桃太郎番茄等)为蔬菜类。其中，大番茄好携带又可生食，建议蔬菜量摄食不足者、减重者，可以选择其为饭后点心，达到蔬菜建议摄取量及增加饱足感。`,
      },
    ],
  },
  {
    id:'1-104',
    title: '秋天为什么要多吃藕？秋天吃藕的好处这么多，就算不喜欢也要多吃。',
    time: '2021-10-29',
    source: '兔子说健康',
    contentList: [
      {
        type: 'text',
        content:
          '秋天的饮食很重要，吃对了可以让寒冷的冬天更好过。在秋天，莲藕是应该多吃的食物。为什么冬天要吃莲藕呢？到了秋天，莲藕就会大量上市，在南方莲藕的主产区湖北、湖南、安徽等地，批发市场、菜市场的莲藕堆积如山，当地人买菜几乎都会买几个莲藕回家煲汤喝。',
      },
      { type: 'img', content: 'knowledge/knowItem10.webp' },
      {
        type: 'text',
        content:
          `好处1、美容养颜\n对于女性朋友而言，与其花大价钱买化妆品往脸上涂抹，还不如食补让自己由内而外健康起来，变得更加美丽。食补也是有讲究的，并不是所有的食物都具有美容养颜的作用。研究表明，女性在秋季多吃莲藕，其所含的维生素A、C和E都可以起到抗衰老、排毒素的作用，从而让女性容颜焕发光彩。`,
      },
      {
        type: 'text',
        content:
          '好处2、缓解干燥\n秋高气爽，空气中的水分较少，很干燥，尤其是在北方，大风肆虐，很少降雨，所以会让人的皮肤、咽喉变得干燥，进而出现脱皮、咽喉不适、流鼻血等情况。在秋天，如果多吃莲藕，可以去秋燥，帮助缓解因干燥带来的不适症状。',
      },
      { type: 'img', content: 'knowledge/knowItem11.webp' },
      {
        type: 'text',
        content:
          '好处3、健脾开胃\n到了秋天，有不少人都会因为天气变化多端而没有胃口，不妨多吃莲藕，可以健脾养胃，让你的食欲变好，胃口大开，有助于预防一些秋冬季节的肠胃不适症状。',
      },
      {
        type: 'text',
        content: `秋天吃藕好处这么多，可别错过了。那么莲藕应该怎么吃呢？莲藕的吃法有很多，主要有煲汤、清炒、凉拌这几种。`,
      },
    ],
  },
  {
    id:'3-105',
    title: '哺乳妈妈必知的黄金高品质母乳的6大关键营养素',
    time: '2020-07-25',
    source: '小编',
    contentList: [
      {
        type: 'text',content:'古语有云“民以食为天”，即饮食的重要。换现代科学的说法是，每日膳食营养素补充均衡的重要性。',
      },
      {
        type: 'text',content:'营养素简单来说就是能供给人体生长、发育、劳动、并维持人体健康的各种物质，包含6种，即蛋白质、脂肪、碳水化合物、水、维生素、矿物质。',
      },
      
      { type: 'img', content: 'knowledge/knowItem12.jpg' },
      {
        type: 'text',content:'蛋白质是人体细胞的主要组成成分，是新陈代谢修复受损组织的重要物质，我们身体每个细胞都是由蛋白质组成的，也就是说蛋白质是构成生命的物质基础。',
      },
      { type: 'img', content: 'knowledge/knowItem13.jpg' },
      {
        type: 'text',content:'脂肪是人体重要组成部分和储能物质，它不仅能给我们提供热能，是我们身体的热量储藏库，保持身体正常体温，同时还保护我们的体内脏器免受外力的冲击，还是我们体内激素的组成材料。',
      },
      {
        type: 'text',content:'碳水化合物是供给身体生命活动所需能量的主要来源，我们身体的生长、运动、繁殖都需要其提供主要能源，同时，它也是构成人体组织的重要物质，因此我们在平时要科学补充碳水化合物，不能过多也不能过少，尤其要多进食含有大量膳食纤维的碳水化合物。',
      },
      {
        type: 'text',content:'我们人体大部分是由水组成的，构成人体的主要物质，水在我们身体中发现代谢、载体运输功能、溶解、调节抑制等多种功能，我们人体如果缺乏水，就会出现生命的危险。',
      },
      { type: 'img', content: 'knowledge/knowItem14.jpg' },
      {
        type: 'text',content: `维生素维持我们身体健康必不可少的物质，起到调节人体物质的功能，我们身体如果长时间缺乏某种维生素，往往会出现严重生理障碍。`,
      },
    ],
  },
  {
    id:'2-106-l',
    title: '男人吃香菜好吗?香菜有什么功效呢？',
    time: '2021-4-25',
    source: '王老师',
    contentList: [
      {
        type: 'text',content:'香菜是一种很常见的调味蔬菜，传统中医认为，香菜性温味甘，能健胃消食，发汗透疹，利尿通便，驱风解毒。《本草纲目》说：“胡荽辛温香窜，内通心脾，外达四肢。”《罗氏会约医镜》谓“辟一切不正之气，散风寒、发热头痛，消谷食停滞，顺二便，去目翳，益发痘疹。”',
      },
      { type: 'img', content: 'knowledge/knowItem15.webp' },
      {
        type: 'text',content:'现代研究发现，香菜之所以香，获得香菜的美名，主要是因为它含有挥发油和挥发性香味物质。香菜营养丰富，香菜内含维生素c、胡萝卜素、维生素b1、b2等，同时还含有丰富的矿物质，如钙、铁、磷、镁等，其挥发油含有甘露糖醇、正葵醛、壬醛和芳樟醇等，可开胃醒脾。香菜内还含有苹果酸钾等。香菜中含的维生素c的量比普通蔬菜高得多，一般人食用7～10克香菜叶就能满足人体对维生素c的需求量;香菜中所含的胡萝卜素要比西红柿、菜豆、黄瓜等高出10倍多。',
      },
      { type: 'img', content: 'knowledge/knowItem16.webp' },
      { type: 'text', content: '香菜里含有大量黑色素,经常吃的话,皮肤容易变黑，不过常吃香菜可以提高视力，专家认为它的保健和药用价值不可忽视。香菜所含的物质,可起到清热解毒,防治荨麻和止痒的作用。有研究资料证明,由于香菜含有多种维生素,它的清热能,对提高视力、减少眼疾具有很好的作用。'},
      {
        type: 'text',content: `中医认为香菜性温味甘，能健胃消食，发汗透疹，利尿通便，驱风解毒。香菜营养丰富，香菜内含维生素c、胡萝卜素、维生素b1、b2等，同时还含有丰富的矿物质，如钙、铁、磷、镁等。香菜内还含有苹果酸钾等。香菜中含的维生素c的量比普通蔬菜高得多，一般人食用7～10克香菜叶就能满足人体对维生素c的需求量;香菜中所含的胡萝卜素要比西红柿、菜豆、黄瓜等高出10倍多。`,
      },
      { type: 'img', content: 'knowledge/knowItem17.webp' },
      {
        type: 'text',content: `通过上面小编给大家介绍的香菜的功效，大家是否对香菜有着重新的认识呢?还会认为香菜对男人的精子是有伤害的吗?这个说法是没有科学的依据的哦!香菜中富含多种的维生素，对提高视力、减少眼疾具有很好的作用哦!`,
      },
    ],
  },
  {
    id:'2-106-r',
    title: '西蓝花焯水几分钟能熟?',
    time: '2020-12-03',
    source: '肉丸说车',
    contentList: [
      {
        type: 'text',content:'西兰花又叫花菜，原产地是意大利，19世纪末传入中国。因其营养成分含量高，矿物质含量也非常的丰富，是一些其他类蔬菜所无法比拟的，所以西兰花有着蔬菜之王的称呼',
      },
      { type: 'img', content: 'knowledge/knowItem18.webp' },
      {
        type: 'text',content:'在各种各样的蔬菜中，哪种营养价值最高，你可能觉得很难比较。不过，日本最近一项研究得出结论：西蓝花的平均营养价值及防病作用远远超出其他蔬菜，名列第一。',
      },
      {
        type: 'text',content:'西兰花焯水一般三分钟能熟，西兰花焯水三分钟以后捞出即可。一般西兰花焯水再吃比较好。西兰花的味道有点涩，也很易变色，所以焯水可以保容持西兰花的绿色、还可以去除西兰花中的涩味以及其他不好的物质，焯水后再炒西兰花味道会更好。',
      },
      { type: 'img', content: 'knowledge/knowItem19.webp' },
      { type: 'text', content: '一般焯水时间太短，焯水的作用就太小了，焯水时间太长，会让水溶性的营养成分损失更多，不同蔬菜的焯水时间也是不同的，对西兰花这种蔬菜来说，一般焯水3分钟就足够了。'},
      {
        type: 'text',content: `西蓝花中的营养成分，不仅含量高，而且十分全面，主要包括蛋白质、碳水化合物、脂肪、矿物质、维生素C和胡萝卜素等。此外，西蓝花中矿物质成分比其他蔬菜更全面，钙、磷、铁、钾、锌、锰等含量都很丰富，比同属于十字花科的白菜花高出很多。`,
      },
      { type: 'img', content: 'knowledge/knowItem20.webp' },
      {
        type: 'text',content: `通过上面小编给大家介绍的香菜的功效，大家是否对香菜有着重新的认识呢?还会认为香菜对男人的精子是有伤害的吗?这个说法是没有科学的依据的哦!香菜中富含多种的维生素，对提高视力、减少眼疾具有很好的作用哦!`,
      },
    ],
  },
]


export class FamousData {
  data:any[]=[
  {
    id:314,
    url:'famous10.jpg', //上一个页面的图片
    title:'芝士芒果慕斯',
    seeNo:'10.8w',
    starNo:'12534',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous1.jpg',
    videoTime:'59:06',
    chefName:'路笑天',
    chefurl:'famous/chef1.png',
    chefTag:3,
    chefDesc:'中国顶级厨师，精通中式川菜热、冷菜肴的烹制，旁通川式面点技艺、鲁菜、苏菜、粤菜、宫廷菜，尤擅墩、炉，餐 饮和厨政管理，烹饪教学。',
    paperList :[
      {
        name: '豆腐',
        num: 1,
        unit: '盒',
      },
      {
        name: '肉末',
        num: 150,
        unit: 'g',
      },
      {
        name: '蒜蓉酱',
        num: 2,
        unit: '瓣',
      },
      {
        name: '玉米淀粉',
        num: 1,
        unit: '勺',
      },
      {
        name: '蚝油',
        num: 1,
        unit: '勺',
      },

      {
        name: '生抽',
        num: 1,
        unit: '勺',
      },
      {
        name: '豆瓣酱',
        num: 1,
        unit: '大勺',
      },
      {
        name: '姜末',
        num: 150,
        unit: 'g',
      },
      {
        name: '花椒粒',
        num: '',
        unit: '适量',
      },
      {
        name: '食用油',
        num: '',
        unit: '适量',
      },
    ],
    cookStep:[
      '将90克水里加入9克吉利丁粉搅拌均匀，放入冰箱 冷藏',
      '80克消化饼干放入打蛋盆捣碎',
      '将175克奶油芝士隔水加热融化，融化搅拌至无颗粒状，加入15mm柠檬加入50克细纱糖，继续搅拌均匀，倒入之前搅拌好的芒果泥继续搅拌均匀'
    ]
  },
  {
    id:311,
    url:'famous10.png',
    title:'奶油香煎龙虾',
    seeNo:'12.4w',
    starNo:'18657',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous10.jpg',
    videoTime:'32:15',
    chefName:'路笑天',
    chefurl:'famous/chef1.png',
    chefTag:1,
    chefDesc:'中国顶级厨师，精通中式川菜热、冷菜 肴的烹制，旁通川式面点技艺、鲁菜、 苏菜、粤菜、宫廷菜，尤擅墩、炉，餐 饮和厨政管理，烹饪教学。',
    paperList :[
      {
        name: '波士顿龙虾',
        num: 1,
        unit: '只',
      },
      {
        name: '酥皮',
        num: 4,
        unit: '块',
      },
      {
        name: '蘑菇',
        num: 6,
        unit: '个',
      },
      {
        name: '洋葱',
        num: 1,
        unit: '个半',
      },
      {
        name: '奶油',
        num: 150,
        unit: '毫升',
      },

      {
        name: '水',
        num: 250,
        unit: '毫升',
      },
      {
        name: '黑胡椒',
        num: '',
        unit: '适量',
      },
      {
        name: '盐',
        num: '',
        unit: '少许',
      },
      {
        name: '淀粉',
        num: '',
        unit: '适量',
      },
    ],
    cookStep:[
      '龙虾90度水烫2分钟，入冰水泡5分钟，去壳留肉',
      '洋葱切片，热锅煸炒至香味出，倒入切好的蘑菇片，煸炒1分钟',
      '倒入奶油和水，煮到冒泡，下盐、胡椒调味',
      '淀粉加少许水拌匀，倒入汤内，关火，快速搅拌均匀，倒入烤碗',
      '放入切成块的龙虾肉，盖上酥皮，放入预热好的烤箱，175度8-10分钟，即可完成'
    ]
  },
  {
    id:312,
    url:'famous2.png',
    title:'牛油果冰淇淋',
    seeNo:'18.3w',
    starNo:'10005',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous2.jpg',
    videoTime:'16:12',
    chefName:'丝塔夫',
    chefurl:'famous/chef2.jpg',
    chefTag:2,
    chefDesc:'丝塔夫是世界上拥有米其林星星最多的厨师，他从小就周游全国，学习各地美食，积累经验，烹饪美食。并也是在全球拥有16家餐厅的世界十大顶级厨师。',
    paperList :[
      {
        name: '淡奶油',
        num: 200,
        unit: '克',
      },
      {
        name: '细砂糖',
        num: 400,
        unit: '克',
      },
      {
        name: '抹茶粉',
        num: 15,
        unit: '克',
      },
      {
        name: '巧克力外皮',
        num: 1,
        unit: '块',
      },
      {
        name: '黑巧克力',
        num: 100,
        unit: '克',
      },

      {
        name: '白巧克力',
        num: 100,
        unit: '克',
      },
      {
        name: '淡奶油',
        num: 50,
        unit: '克',
      },
    ],
    cookStep:[
      '先做巧克力外皮：先备好模具和做巧克力外皮的黑巧克力100克。',
      '将黑巧克力倒入杯中，放入微波炉，小火加热30秒，融化成液态（也可以隔水融化，但是不要让水汽进入巧克力中）。',
      '把锡纸撕成小块，在模具中压紧铺好，再用融化的黑巧克力涂满锡纸内层，放入冰箱冷藏到凝固。',
      '接下来做抹茶冰淇淋：将冷藏了一夜的200克淡奶油、40克细砂糖和15克抹茶粉倒入打蛋盆中，用电动打蛋器低速打发。',
      '把淡奶油打发到缓缓流动的状态即可，抹茶冰淇淋糊就做好了。',
      '然后将它倒入凝固的巧克力外皮中，表面刮平，放入冰箱冷冻3/4个小时至凝固,接着把冷冻好的抹茶冰淇淋从模具中提出来，撕掉外层锡纸',
      '最后把做好的巧克力核放在上面即可'
    ]
  },
  {
    id:321,
    url:'famous4.png',
    title:'银耳枸杞羹',
    seeNo:'86.9w',
    starNo:'56881',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous4.jpg',
    videoTime:'16:12',
    chefName:'拉姆齐',
    chefurl:'famous/chef3.jpg',
    chefTag:1,
    chefDesc:'拉姆齐是一位出生于1966年英国格拉斯哥因主持各种烹饪节目而走红的世界顶级厨神，被媒体誉为地狱厨师。',
    paperList :[
      {
        name: '南瓜',
        num: 250,
        unit: '克',
      },
      {
        name: '鲜银耳',
        num: '4/1',
        unit: '朵',
      },
      {
        name: '枸杞',
        num: 15,
        unit: '克',
      },
      {
        name: '冰糖',
        num: 5,
        unit: '克',
      },
    ],
    cookStep:[
      '南瓜去皮去籽切块、银耳洗净撕成小朵、枸杞洗净备用',
      '把银耳和枸杞一起放入锅中',
      '加入适量清水大火煮开，转中小火煮至南瓜熟透，银耳软糯',
      '加入枸杞和冰糖再煮3分钟就可以准备出锅了',
    ]
  },
  {
    id:322,
    url:'famous5.png',
    title:'冰糖燕窝',
    seeNo:'46.2w',
    starNo:'20334',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous5.jpg',
    videoTime:'16:12',
    chefName:'路笑天',
    chefurl:'famous/chef1.png',
    chefTag:1,
    chefDesc:'中国顶级厨师，精通中式川菜热、冷菜肴的烹制，旁通川式面点技艺、鲁菜、苏菜、粤菜、宫廷菜，尤擅墩、炉，餐 饮和厨政管理，烹饪教学。',
    paperList :[
      {
        name: '燕窝',
        num: 2,
        unit: '盏',
      },
      {
        name: '冰糖',
        num: 15,
        unit: '克',
      },
      {
        name: '枸杞',
        num: '3-5',
        unit: '粒',
      },
      {
        name: '纯净水',
        num: 200,
        unit: '毫升',
      },
    ],
    cookStep:[
      '准备燕窝2盏,倒入纯净水泡发，一般泡4-5小时差不多就可以了。中间换2-3次水,然后用小镊子清除残留的绒毛。',
      '再次清洗燕窝后按照燕窝的纹理将其撕开,把撕好的燕窝放入慢炖锅的炖盅里。',
      '加入纯净水，没过燕窝一指节。',
      '将炖盅放入慢炖锅中，选择燕窝功能',
      '等待炖盅完成即可出锅，出锅前加入冰糖和枸杞即可。'
    ]
  },
  {
    id:331,
    url:'famous7.png',
    title:'人参炖鸡汤',
    seeNo:'16.8w',
    starNo:'9983',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous7.jpg',
    videoTime:'16:12',
    chefName:'路笑天',
    chefurl:'famous/chef1.png',
    chefTag:1,
    chefDesc:'中国顶级厨师，精通中式川菜热、冷菜肴的烹制，旁通川式面点技艺、鲁菜、苏菜、粤菜、宫廷菜，尤擅墩、炉，餐 饮和厨政管理，烹饪教学。',
    paperList :[
      {
        name: '鸡',
        num: '半',
        unit: '只',
      },
      {
        name: '人参',
        num: 1,
        unit: '根',
      },
      {
        name: '红枣',
        num: '3',
        unit: '个',
      },
      {
        name: '姜',
        num: '2',
        unit: '片',
      },
      {
        name: '盐',
        num: '',
        unit: '适量',
      },
      {
        name: '枸杞',
        num: '',
        unit: '适量',
      },
    ],
    cookStep:[
      '将所有食材备好，人参、红枣洗净，鸡斩块后焯水',
      '将所有材料放入电炖盅内胆，加入适量的水',
      '将炖盅内胆放入电炖盅内',
      '选择炖汤功能，隔水炖3小时',
      '等待炖盅完成即可。'
    ]
  },
  {
    id:332,
    url:'famous8.png',
    title:'姬松茸茶树菇汤',
    seeNo:'3.6w',
    starNo:'8885',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous8.jpg',
    videoTime:'16:12',
    chefName:'路笑天',
    chefurl:'famous/chef1.png',
    chefTag:1,
    chefDesc:'中国顶级厨师，精通中式川菜热、冷菜肴的烹制，旁通川式面点技艺、鲁菜、苏菜、粤菜、宫廷菜，尤擅墩、炉，餐 饮和厨政管理，烹饪教学。',
    paperList :[
      {
        name: '老母鸡',
        num: '半',
        unit: '只',
      },
      {
        name: '茶树菇',
        num: '',
        unit: '适量',
      },
      {
        name: '红枣',
        num: '6',
        unit: '颗',
      },
      {
        name: '姜',
        num: '3',
        unit: '片',
      },
      {
        name: '盐',
        num: '',
        unit: '依个人口味',
      },
      {
        name: '枸杞',
        num: '',
        unit: '适量',
      },
    ],
    cookStep:[
      '将红枣枸杞，西洋参片洗净，茶树泡发洗净,准备好一锅水',
      '洗净切块的鸡肉倒进去，烧开后多煮几分钟，再把锅里的水倒掉 这是去血水 很脏，最后多冲洗几遍。',
      '砂锅内倒入适量清水，冲洗干净的鸡肉倒入砂锅内，红枣枸杞姜片，西洋参片也一起放进去。',
      '烧开后转小火，把鸡油撇清,避免腥味。',
      '放入姜片，最小火熬煮至2-3个小时，。',
      '快煲好的时候倒入茶树菇 再小火炖30分钟即可。'
    ]
  },
   {
    id:333,
    url:'famous9.png',
    title:'姬松茸茶树菇汤',
    seeNo:'3.6w',
    starNo:'8885',
    videoUrl:'https://video.ecook.xiaochushuo.com/76bd353630be47f0b5447ec06201ee56.mp4',
    videoPoster:'famous/famous9.jpg',
    videoTime:'16:12',
    chefName:'路笑天',
    chefurl:'famous/chef1.png',
    chefTag:1,
    chefDesc:'中国顶级厨师，精通中式川菜热、冷菜肴的烹制，旁通川式面点技艺、鲁菜、苏菜、粤菜、宫廷菜，尤擅墩、炉，餐 饮和厨政管理，烹饪教学。',
    paperList :[
      {
        name: '鲫鱼',
        num: 1,
        unit: '条',
      },
      {
        name: '豆腐',
        num: 200,
        unit: '克',
      },
      {
        name: '姜',
        num: '3',
        unit: '片',
      },
      {
        name: '葱',
        num: '2',
        unit: '段',
      },
      {
        name: '盐',
        num: '',
        unit: '适量',
      },
      {
        name: '料酒',
        num: 1,
        unit: '勺',
      },
    ],
    cookStep:[
      '准备主要食材，生姜两三片，大葱两段，鲫鱼一条（这条有点大，要是小鲫鱼就用两条，豆腐鲫鱼的重量比例差不多是1:1.）。',
      '鲫鱼收拾干净，用厨房纸把上边的水分吸干，平底锅放油，（和平时炒菜油量差不多）油烧热后，手提鱼尾顺着锅的边缘把鱼放进去，煎至两面金黄，使鱼定型.',
      '把炖锅或者是砂锅里放开水，把煎好的鲫鱼，豆腐，葱段、姜片，一起下锅，倒入一勺料酒，一小勺食盐，（喝汤的时候如果觉得没有咸味可以再加，不要放盐放多了.）',
      '大火煮开，转中火炖二十五分钟，（一次放足量的热水，不要中途加水，如果非加不可，那就加开水）',
      '煮二十五分钟，使汤汁为乳白色.',
      '出锅后可以撒点香菜末或者葱花，也可以放几滴芝麻油或者是少量白胡椒粉调味，这个根据自己口味.',
    ]
  }
]
  getDataById(id:number|string){
    return this.data.find(item=>item.id===id)
  }
}


export class CookDetail{
  data:any[]=[
    {
      id:101,
      title:'麻婆豆腐',
      author:'小心安',
      cookType:'家常菜',
      Module:['hot','today','eazy'],
      url:'cookDetail/cookItem1.png',
      bigUrl:'cookDetail/cookBigItem1.png',
      photoType:'Short',
      seeNo:'20.4W',
      starNo:'18256',
      desc:'麻婆豆腐的特点是：在细嫩雪白的豆腐上，点缀着棕红色的牛肉酥馅，碧绿色的蒜苗，红红的辣油。视之如玉镶琥珀， 闻之则浓香扑鼻，食之更是集麻、辣、烫、嫩、酥、鲜、香 于一馔，让你越吃越上瘾',
      perpareList:[
        {
          name: '豆腐',
          num: 400,
          unit: 'g',
        },
        {
          name: '肉末',
          num: 150,
          unit: 'g',
        },
        {
          name: '蒜蓉酱',
          num: 2,
          unit: '瓣',
        },
        {
          name: '玉米淀粉',
          num: 1,
          unit: '勺',
        },
        {
          name: '蚝油',
          num: 1,
          unit: '勺',
        },

        {
          name: '生抽',
          num: 1,
          unit: '勺',
        },
        {
          name: '豆瓣酱',
          num: 1,
          unit: '大勺',
        },
        {
          name: '姜末',
          num: 150,
          unit: 'g',
        },
        {
          name: '花椒粒',
          num: '',
          unit: '适量',
        },
        {
          name: '食用油',
          num: '',
          unit: '适量',
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep1-1.jpg',
          desc: '准备食材：豆腐400克、肉末50克、小葱1棵、大蒜3瓣、郫县豆瓣酱1汤匙、呷哺台式XO麻婆炒酱80克、生抽1勺、花椒粉0.5克、米醋1克、香油1茶匙、黄酒1茶匙、白糖1茶匙、水淀粉1小碗、白芝麻适量；',
        },
        {
          url: 'cookDetail/cookStep1-2.jpg',
          desc: '豆腐切小块，锅里水开后放一点盐，放入豆腐焯一分钟。',
        },
        {
          url: 'cookDetail/cookStep1-3.jpg',
          desc: '一块豆腐煮的时候可放2克左右盐一起煮，这样盐的渗透压会更快逼出豆腐里的水分，而且会让豆腐有一点点的咸味，记得这个程序一定要做，想做出好的麻婆豆腐这是关键步骤。',
        },
        {
          url: 'cookDetail/cookStep1-4.jpg',
          desc: '豆腐要煮差不多2-3分钟（小火，大火容易滚碎豆腐），差不多豆腐微微有些膨胀了就好了，但别捞出来，先泡着，避免豆腐捞上来后黏在一起；',
        },
        {
          url: 'cookDetail/cookStep1-5.jpg',
          desc: '锅中热油，迅速炒熟肉沫；（此时注意油温不要太高，慢慢炒，炒到肉末开始微黄）',
        },
        {
          url: 'cookDetail/cookStep1-6.jpg',
          desc: '出红油后下蒜末煸香，然后加入80克呷哺台式XO麻婆炒酱搅拌均匀。',
        },
        {
          url: 'cookDetail/cookStep1-7.jpg',
          desc: '汤煮开后加入黄酒1小勺，生抽一点点（只是提个味道，因郫县豆瓣已经很咸了，所以别放太多）；',
        },
        {
          url: 'cookDetail/cookStep1-8.jpg',
          desc: '调好味道后加入煮好的豆腐，直接捞出来放进汤汁里，稍微烧一个2-3分钟；',
        },
        {
          url: 'cookDetail/cookStep1-9.jpg',
          desc: '撒上0.5克花椒面，放少许提味即可；（花椒面不要早放，会黑，会使整锅豆腐变黑掉），再淋入1茶匙麻油和1克米醋提味即可出锅；',
        },
      ],
    },
    {
      id:102,
      title:'米粉蒸肉',
      author:'希味淡',
      cookType:'蒸肉',
      Module:['hot','eazy'],
      url:'cookDetail/cookItem2.png',
      bigUrl:'cookDetail/cookBigItem2.jpg',
      photoType:'Long',
      seeNo:'18.2W',
      starNo:'13492',
      desc:'【粉蒸肉】此菜遍布全国各地，大江南北，上得厅堂，入得家常，人人都爱，家家都做。一个人一个口味，一个地方一个特色。五花肉最适合做粉蒸肉吃，这样吃起来不油腻。',
      perpareList:[
        {
          name: '五花肉',
          num: 200,
          unit: '克',
        },
        {
          name: '南瓜',
          num: 1,
          unit: '圈',
        },
        {
          name: '蒸米粉',
          num: 100,
          unit: '克',
        },
        {
          name: '黄豆酱',
          num: 1,
          unit: '勺',
        },
        {
          name: '豆瓣酱',
          num: 1,
          unit: '小勺',
        },

        {
          name: '生抽',
          num: 1,
          unit: '勺',
        },
        {
          name: '生抽',
          num: '',
          unit: '少许',
        },
        {
          name: '姜末',
          num: 150,
          unit: 'g',
        },
        {
          name: '姜蒜末',
          num: '',
          unit: '适量',
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep2-1.jpg',
          desc: '首先把五花肉洗净，不去皮，切均匀厚度的片状放入碗中。',
        },
        {
          url: 'cookDetail/cookStep2-2.jpg',
          desc: '把料酒，生抽倒入，姜蒜末也放入用筷子混合均匀。再分别倒入黄豆酱和豆瓣酱用筷子混合均匀，腌制10分钟。接着倒入蒸米粉，每一块肉都要裹上米粉备用。',
        },
        {
          url: 'cookDetail/cookStep2-3.jpg',
          desc: '南瓜去皮去籽，切块裹上少许米粉，铺入容器底部。',
        },
        {
          url: 'cookDetail/cookStep2-4.jpg',
          desc: '把裹好的米粉的五花肉，一片片依次铺在南瓜上。',
        },
        {
          url: 'cookDetail/cookStep2-5.jpg',
          desc: '把食材容器放入蒸锅上，蒸制时间是：1小时。期间给蒸锅的水箱添加几次水，以防蒸干，必须纯净水这样食物更美味。',
        },
      ],
    },
    {
      id:103,
      title:'凉拌秋葵',
      author:'美食小编',
      cookType:'美容瘦身',
      Module:['hot','today'],
      url:'cookDetail/cookItem3.png',
      bigUrl:'cookDetail/cookBigItem3.jpg',
      photoType:'Long',
      seeNo:'11.2W',
      starNo:'1160421',
      desc:'秋葵脆嫩多汁，滑润不腻，香味独特的秋葵被誉为人类最佳的蔬菜之一，其营养价值十分丰富，是男女共同饮食的不二之选。吃秋葵美容又补肾，因此，广大朋友在夏天可以多吃秋葵哦。 秋葵不适合炖烧，会使其营养物质大量流失，秋葵最佳吃法就是凉拌或者爆炒',
      perpareList:[
        {
          name: '秋葵',
          num: 200,
          unit: '克',
        },
        {
          name: '小葱',
          num: 1,
          unit: '根',
        },
        {
          name: '红辣椒',
          num: 1,
          unit: '根',
        },
        {
          name: '白砂糖',
          num: 3,
          unit: '克',
        },
        {
          name: '生抽',
          num: 5,
          unit: '克',
        },

        {
          name: '鲜辣露',
          num: 2,
          unit: '克',
        },
        {
          name: '蒜末',
          num: '',
          unit: '适量',
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep3-1.jpg',
          desc: '清水煮沸，倒入秋葵，焯水30秒',
        },
        {
          url: 'cookDetail/cookStep3-2.jpg',
          desc: '小葱焯水30秒',
        },
        {
          url: 'cookDetail/cookStep3-3.jpg',
          desc: '用小葱绑起秋葵',
        },
        {
          url: 'cookDetail/cookStep3-4.jpg',
          desc: '倒入辅料，加醋、生抽、白砂糖、鲜辣露，搅拌均匀',
        },
        {
          url: 'cookDetail/cookStep3-5.jpg',
          desc: '倒入盛放秋葵盘中',
        },
      ],
    },
    {
      id:104,
      title:'百合南瓜',
      cookType:'润燥止渴',
      author:'蕾宝的烟味生活',
      Module:['today','eazy'],
      url:'cookDetail/cookItem4.png',
      bigUrl:'cookDetail/cookBigItem4.jpg',
      photoType:'Short',
      seeNo:'9.99W',
      starNo:'16425',
      desc:'最近天气炎热，很多人容易上火、咳嗽等，所以蕾宝第一想到了南瓜蒸百合这一做法，将南瓜和百合同煮后食用，能清暑润肺、滋补营养，正适合现在食用，所以感兴趣的朋友下面来看看具体做法吧！',
      perpareList:[
        {
          name: '老南瓜',
          num: 1,
          unit: '块',
        },
        {
          name: '新鲜百合',
          num: 1,
          unit: '个',
        },
        {
          name: '冰糖',
          num: '',
          unit: '适量',
        },
        {
          name: '红枣',
          num: '',
          unit: '适量', 
        },
        {
          name: '枸杞',
          num: '',
          unit: '适量', 
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep4-1.jpg',
          desc: '准备所需食材，将鲜百合一片一片剥下来，再仔细清洗掉表面的泥土，沥干水分备用，而南瓜也切掉表面表皮，掏去内瓤，清洗干净备用；',
        },
        {
          url: 'cookDetail/cookStep4-2.jpg',
          desc: '将南瓜切成6厘米左右的厚片，均匀码放在盘中，再将鲜百合撒在表面即可；',
        },
        {
          url: 'cookDetail/cookStep4-3.jpg',
          desc: '将蒸碗放入蒸锅中，隔水蒸20分钟左右，南瓜能用筷子轻易戳透即可，再将蒸出来的多余汤汁倒入锅中；',
        },
        {
          url: 'cookDetail/cookStep4-4.jpg',
          desc: '红枣用面粉搓洗干净，剪成红枣片，去掉内核，再和枸杞、冰糖一起下入锅中，并根据蒸出来的南瓜汤汁的多少，加入适量清水，一起熬煮5分钟左右，煮出枸杞和红枣的味道；',
        },
        {
          url: 'cookDetail/cookStep4-5.jpg',
          desc: '另取一碗，倒入2勺清水、半勺淀粉，搅拌成均匀的薄淀粉水，倒入锅中，煮至糖水粘稠即可；',
        },
        {
          url: 'cookDetail/cookStep4-6.jpg',
          desc: '最后均匀淋在碗中即可，晶莹剔透，色泽诱人，看着就非常美味！',
        },
      ],
    },
    {  
      id:105,
      title:'四味香肠',
      cookType:'腊肠',
      author:'阿瓜的春夏秋冬',
      Module:['today','hot'],
      url:'cookDetail/cookItem5.png',
      bigUrl:'cookDetail/cookBigItem5.jpg',
      photoType:'Short',
      seeNo:'8.65W',
      starNo:'18564',
      desc:'过了元旦，大家最期待的就是过春节啦！马上就要进入农历的腊月了，一提到腊月，立刻想到的是腊肉和香肠！腊肉以往是在腊月进行腌制，所以称作“腊肉”。每当过年，家家户户都会准备腊肉和香肠，腊味就成了很多小厨心中的年味。',
      perpareList:[
        {
          name: '川味香肠用后臀尖',
          num: 5,
          unit: '斤',
        },
        {
          name: '高度白酒',
          num: 30,
          unit: '毫升',
        },
        {
          name: '白砂糖',
          num: 20,
          unit: '克',
        },
        {
          name: '盐',
          num: 55,
          unit: '克',
        },
        {
          name: '花椒面',
          num: 30,
          unit: '克',
        },
        {
          name: '辣椒面',
          num: 30,
          unit: '克',
        },
        {
          name: '花椒',
          num: '',
          unit: '适量', 
        },
        {
          name: '肠衣',
          num: '',
          unit: '适量', 
        },
        {
          name: '棉线',
          num: '',
          unit: '适量', 
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep5-1.jpg',
          desc: '腌肉：将后臀尖（肥和瘦的比例是3：7）切成肉块。',
        },
        {
          url: 'cookDetail/cookStep5-2.jpg',
          desc: '将川味用的所有调料放进切好的肉中，拌匀后腌制12-24小时。',
        },
        {
          url: 'cookDetail/cookStep5-3.jpg',
          desc: '肠衣洗净后泡在清水中备用。',
        },
        {
          url: 'cookDetail/cookStep5-4.jpg',
          desc: '灌香肠：在塑料饮料瓶的瓶口1/3处将瓶口剪下，制成漏斗。肠衣的一头用棉线扎紧，另一头套在瓶口处。将腌好的肉填入漏斗，用筷子较粗的一头向下填充入肠衣。灌肉时中间不要留有空隙。',
        },
        {
          url: 'cookDetail/cookStep5-5.jpg',
          desc: '将所有肉都灌入肠衣，肠衣的开口处要用棉线扎紧。香肠灌好后，用针将肠衣扎一些小孔，防止肠衣在晾晒时涨破。',
        },
        {
          url: 'cookDetail/cookStep5-6.jpg',
          desc: '灌好的香肠放在干燥通风处晾晒10天左右，待肠衣变皱，香肠变成暗红色就可以了。',
        },
      ],
    },
    {
      id:106,
      title:'鸡蛋羹',
      author:'美美家的厨房',
      cookType:'美容瘦身',
      Module:['hot','today'],
      url:'cookDetail/cookItem6.png',
      bigUrl:'cookDetail/cookBigItem6.jpg',
      photoType:'Long',
      seeNo:'3.39W',
      starNo:'49064',
      desc:'鸡蛋羹是我家老公最爱的一道菜，自从有了微波炉后，蒸鸡蛋羹更是简单方便了，一分半钟的时间，一碗香浓细滑的鸡蛋羹就上桌啦！放了少量的鸡粉，香气四溢哦！',
      perpareList:[
        {
          name: '鸡蛋',
          num: 1,
          unit: '个',
        },
        {
          name: '盐',
          num: '1/2',
          unit: '勺',
        },
        {
          name: '鸡粉',
          num: '1/2',
          unit: '勺',
        },
        {
          name: '葱花',
          num: '',
          unit: '少许',
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep6-1.jpg',
          desc: '鸡蛋打散，兑入一倍的清水，充分搅拌',
        },
        {
          url: 'cookDetail/cookStep6-2.jpg',
          desc: '拌好的蛋液过筛',
        },
        {
          url: 'cookDetail/cookStep6-3.jpg',
          desc: '放入适量盐,撒入适量鸡粉',
        },
        {
          url: 'cookDetail/cookStep6-4.jpg',
          desc: '拌匀后放入微波炉',
        },
        {
          url: 'cookDetail/cookStep6-5.jpg',
          desc: '高火1分半钟即可，出锅后撒上葱花',
        },
      ],
    },
    {  
      id:107,
      title:'果味双皮奶',
      cookType:'美容养颜',
      author:'午后柠檬树下的阳光9299',
      Module:['eazy','hot'],
      url:'cookDetail/cookItem7.png',
      bigUrl:'cookDetail/cookBigItem7.jpg',
      photoType:'Short',
      seeNo:'5.57W',
      starNo:'6956',
      desc:'双皮奶是一种很多人都喜欢吃的美食，那么如何做才好吃呢？关于这个问题，小编就和大家分享一下我的经验，希望能够帮助到大家。如果大家喜欢小编的文章，记得关注小编并转发哦！谢谢大家！',
      perpareList:[
        {
          name: '牛奶',
          num: 180,
          unit: '毫升',
        },
        {
          name: '鸡蛋清',
          num: 2,
          unit: '个',
        },
        {
          name: '白糖',
          num: 1,
          unit: '茶匙',
        },
        {
          name: '芒果',
          num: 10,
          unit: '克',
        },
        {
          name: '火龙果',
          num: 10,
          unit: '克',
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep7-1.jpg',
          desc: '将牛奶加入锅中，将牛奶煮至微开，并把准备的水果切丁。碗中打入2个鸡蛋清，放入白糖，充分搅拌均匀。',
        },
        {
          url: 'cookDetail/cookStep7-2.jpg',
          desc: '将煮开的牛奶加入鸡蛋清中，再次搅拌均匀。',
        },
        {
          url: 'cookDetail/cookStep7-3.jpg',
          desc: '然后用滤网过滤一下后撇去上面的浮沫。',
        },
        {
          url: 'cookDetail/cookStep7-4.jpg',
          desc: '然后盖上保鲜膜，用牙签扎上几个透气孔，上蒸锅蒸15分钟后，再闷5分钟。',
        },
        {
          url: 'cookDetail/cookStep7-5.jpg',
          desc: '最后，将蒸好的双皮奶上面加入水果丁，一道美味的双皮奶就做好了，希望大家能够喜欢。',
        },
      ],
    },
    {  
      id:108,
      title:'菠萝炒饭',
      cookType:'菠萝',
      author:'僖儿2005',
      Module:['eazy','hot'],
      url:'cookDetail/cookItem8.png',
      bigUrl:'cookDetail/cookBigItem8.jpg',
      photoType:'Short',
      seeNo:'1.36W',
      starNo:'14622',
      desc:'现在四月份是菠萝上市的时间，满街的菠萝一个几块钱，便宜又美味，赶紧做了菠萝炒饭解解馋。',
      perpareList:[
        {
          name: '菠萝',
          num: 1,
          unit: '个',
        },
        {
          name: '豌豆',
          num: 100,
          unit: '克',
        },
        {
          name: '米饭',
          num: 1,
          unit: '碗',
        },
        {
          name: '鲜虾',
          num: 100,
          unit: '克',
        },
        {
          name: '胡萝卜',
          num: '半',
          unit: '根',
        },
        {
          name: '盐',
          num: '',
          unit: '适量',
        },
        {
          name: '食用油',
          num: '',
          unit: '适量',
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep8-1.jpg',
          desc: '菠萝从三分之一处切开，取肉，放入盐水浸泡',
        },
        {
          url: 'cookDetail/cookStep8-2.jpg',
          desc: '电磁炉链接电源，放上搪瓷锅',
        },
        {
          url: 'cookDetail/cookStep8-3.jpg',
          desc: '豌豆先煮熟，胡萝卜切粒，启动火锅模式，火候设置900，锅内倒入食用油，放入豌豆和胡萝卜粒，炒熟',
        },
        {
          url: 'cookDetail/cookStep8-4.jpg',
          desc: '放入虾球，放入适量的盐和调味品，翻炒至所有配料熟透，关火。从电饭煲里取出煮好的米饭，倒入配菜内，拌匀',
        },
        {
          url: 'cookDetail/cookStep8-5.jpg',
          desc: '将菠萝肉倒入炒饭内，一样拌匀即可',
        }, {
          url: 'cookDetail/cookStep8-6.jpg',
          desc: '将炒好的菠萝饭盛出，放入菠萝盛器内',
        },
      ],
    },
    {
      id:109,
      title:'秋葵炒蛋',
      author:'美食小编',
      cookType:'美容瘦身',
      Module:['hot','today'],
      url:'cookDetail/cookItem9.png',
      bigUrl:'cookDetail/cookBigItem9.png',
      photoType:'Long',
      seeNo:'11.2W',
      starNo:'1160421',
      desc:'秋葵脆嫩多汁，滑润不腻，香味独特的秋葵被誉为人类最佳的蔬菜之一，其营养价值十分丰富，是男女共同饮食的不二之选。吃秋葵美容又补肾，因此，广大朋友在夏天可以多吃秋葵哦。 秋葵不适合炖烧，会使其营养物质大量流失，秋葵最佳吃法就是凉拌或者爆炒',
      perpareList:[
        {
          name: '秋葵',
          num: 200,
          unit: '克',
        },
        {
          name: '小葱',
          num: 1,
          unit: '根',
        },
        {
          name: '红辣椒',
          num: 1,
          unit: '根',
        },
        {
          name: '白砂糖',
          num: 3,
          unit: '克',
        },
        {
          name: '生抽',
          num: 5,
          unit: '克',
        },

        {
          name: '鲜辣露',
          num: 2,
          unit: '克',
        },
        {
          name: '蒜末',
          num: '',
          unit: '适量',
        },
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep3-1.jpg',
          desc: '清水煮沸，倒入秋葵，焯水30秒',
        },
        {
          url: 'cookDetail/cookStep3-2.jpg',
          desc: '小葱焯水30秒',
        },
        {
          url: 'cookDetail/cookStep3-3.jpg',
          desc: '用小葱绑起秋葵',
        },
        {
          url: 'cookDetail/cookStep3-4.jpg',
          desc: '倒入辅料，加醋、生抽、白砂糖、鲜辣露，搅拌均匀',
        },
        {
          url: 'cookDetail/cookStep3-5.jpg',
          desc: '倒入盛放秋葵盘中',
        },
      ],
    },
    {  
      id:110,
      title:'麻辣小龙虾球',
      cookType:'龙虾',
      author:'灵子美食厨房',
      Module:['today','hot'],
      url:'cookDetail/cookItem10.png',
      bigUrl:'cookDetail/cookBigItem10.jpg',
      photoType:'Short',
      seeNo:'1.43W',
      starNo:'14005',
      desc:'麻辣小龙虾，简称麻小，湖南特色小吃，又叫口味虾、长沙口味虾、香辣小龙虾、十三香小龙虾等。以小龙虾制成，口感麻辣鲜香。',
      perpareList:[
        {
          name: '虾球',
          num: 500,
          unit: '克',
        },
        {
          name: '生姜',
          num: '',
          unit: '少许',
        },
        {
          name: '豆瓣酱',
          num: 1,
          unit: '勺',
        },
        {
          name: '鲜虾',
          num: 100,
          unit: '克',
        },
        {
          name: '酱油',
          num: '',
          unit: '适量',
        },
        {
          name: '盐',
          num: '',
          unit: '适量',
        },
        {
          name: '干辣椒',
          num: 1,
          unit: '个',
        },{
          name: '花椒',
          num: '',
          unit: '适量',
        }
      ],
      cookStep:[
        {
          url: 'cookDetail/cookStep10-1.jpg',
          desc: '锅烧热，加入色拉油；加入干辣椒和花椒，炒香；',
        },
        {
          url: 'cookDetail/cookStep10-2.jpg',
          desc: '再加入豆瓣酱炒香；',
        },
        {
          url: 'cookDetail/cookStep10-3.jpg',
          desc: '倒入处理好的虾球，翻炒均匀；加入姜丝，去腥；',
        },
        {
          url: 'cookDetail/cookStep10-4.jpg',
          desc: '加入酱油，和适量清水，煮五分钟；',
        },
        {
          url: 'cookDetail/cookStep10-5.jpg',
          desc: '一盘香喷喷的香辣虾球出锅了。',
        },
      ],
    },
  ]

  getDataById(id:string|number){
    return this.data.find(item=>item.id===id)
  }

  getHotCook(){
    return this.data.filter(item=>[105,108,109,110].includes( item.id))
  }
  getAllData(){
     return this.data
  }

  getRandom(){
    let list =  this.data.reduce((pre,next)=>{
       if (0.5-Math.random()>0) {
         pre.push(next)
       }
       console.log(pre);
       return pre
     },[])
     if (list.length===0) {
       list.push(this.data[0])
     }
     return list
  }

  getTypeData(type:string){
    return this.data.filter(item=>item.Module.includes(type))
  }


}