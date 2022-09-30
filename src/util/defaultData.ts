/*
 * @Author: zoujiahao
 * @Date: 2022-09-26 14:25:58
 * @LastEditors: zoujiahao
 * @LastEditTime: 2022-09-29 17:29:29
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