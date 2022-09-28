/*
 * @Author: zoujiahao
 * @Date: 2022-09-26 14:25:58
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-28 16:55:30
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
      { type: 'img', content: 'knowLedge/knowItem1.png' },
      { type: 'text', content: '香蕉、牛奶可以给我们的身体增加适量的蛋白质、矿物质以及维生素，有利于身体营养的吸收，也是有利于身体健康的。'},
      { type: 'img', content: 'knowLedge/knowItem2.png' },
      {
        type: 'text',
        content: `在生活中不少超重的肥胖人群，都是非常希望可以快速且轻松减肥的，香蕉牛奶汁减肥法的特点是不均衡营养、吃东西，短时间体重会下降，但减少的是水、肌肉和少量的脂肪，而且会带来营养不均衡，损
          害身体，影响健康，还会出现体重的反弹，也叫减肥溜溜球效应，增加更多的脂肪，流失大量的肌肉，往往屡战屡败大病一场，不得不放弃。`,
      },
      { type: 'img', content: 'knowLedge/knowItem3.png' },
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
      { type: 'img', content: 'knowLedge/knowItem4.jpg' },
      {
        type: 'text',content:'1.绍兴花雕可以不加热，直接喝，这个时候可以在里面加入一些其他的食材，比如说话梅和生姜，会使得口感更加的丰富。绍兴花雕还可以和其他的果汁饮料一起勾兑着喝，非常适合女性朋友，这样喝口感更加柔和，非常的好喝!',
      },
      { type: 'text', content: '2.花雕酒最正宗的喝法是加热了之后喝，花雕酒加热到60度左右是合适的，如果温度再高，酒精就挥发了，这样酒的味道就变得不浓烈了。平日里开封的花雕酒千万别放太多时间，因为很容易就会氧化。'},
      // { type: 'img', content: 'knowLedge/knowItem2.png' },
      {
        type: 'text',content: `3.在冬天，花雕酒还有一种独特的喝法，就是和生姜以及枸杞子一起放入到锅里煮，煮十分钟之后，趁热喝下去，有非常好的养生保健的效果。一般来说，煮过的花雕酒在45摄氏度的左右喝是最合适的。`,
      },
      { type: 'img', content: 'knowLedge/knowItem5.jpg' },
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
      { type: 'img', content: 'knowLedge/knowItem8.jpg' },
      {
        type: 'text',content:'首先准备食材：胡萝卜1根、蜂蜜2勺、温水适量。取适量新鲜胡萝卜去皮切成小丁；将胡萝卜丁倒入豆浆机，加入适量水位的温水和两勺蜂蜜，按果汁键功能就完成了；最后搅打完毕的胡萝卜汁，可以过滤也可以不过滤。',
      },
      {
        type: 'text',content:'每日喝1杯胡萝卜汁有祛斑作用，因为胡萝卜含有丰富的维生素A原，维生素A原在体内可转化为维生素A，维生素A具有滑润、强健皮肤的作用，并可防治皮肤粗糙及雀斑。',
      },
      { type: 'img', content: 'knowLedge/knowItem9.jpg' },
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
      { type: 'img', content: 'knowLedge/knowItem6.jpg' },
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
      { type: 'img', content: 'knowLedge/knowItem7.jpg' },
      {
        type: 'text',content: `此外,建议大家选用番茄时要注意，番茄有许多种类，小颗的番茄含糖量较高，为水果类;大颗的番茄(如牛番茄、桃太郎番茄等)为蔬菜类。其中，大番茄好携带又可生食，建议蔬菜量摄食不足者、减重者，可以选择其为饭后点心，达到蔬菜建议摄取量及增加饱足感。`,
      },
    ],
  }
]