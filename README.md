# FengHuang - mod

> 由大美女老师发起的 **凤凰mod**。

---

### 内容 ###

1. 转化方式：

   1. 梧桐树事件（凤栖梧桐）

      在森林的最深处新增地点 **梧桐树** （一个看起来生长多年的古树），位置：伊甸小屋

      if 完成腰坠事件阶段2 && 佩戴腰坠：

       1. 摸树：抚摸梧桐树，压力-- 创伤-- 转化值+1（一天限摸一次）pid90001

          >你感觉身上的坠子在接近这棵树时传来一阵阵暖意，你的手不由自主伸过去触碰树干，你感觉到树干上的纹路让你安心。

       2. 唱歌（转化值>=15）：在森林中一展歌喉，转化值+2 压力- 创伤- pid90002

          > 你的尾羽在树下舒适的伸展开，你听着林间传来的沙沙声，忍不住轻吟，你听见树叶上传来的回声，你感觉到心旷神怡。

          如果佩戴了凤凰腰坠，概率触发 **百鸟朝凤 **事件

      else 

      > “隐隐约约看见有一棵巨树，但怎么也走不过去”

      

   2. 凤凰腰坠：佩戴后能避免睡眠降低转化值，每周缓慢增加转化值 +1

      事件

      阶段1：在湖底摸罐子可以摸出一个刻有不知名鸟类图腾的古老腰坠。

      >你看到湖底一个普普通通的罐子里闪过一道光，好奇心使你游了过去。罐子里静静躺着一枚白色带有不知名纹路的坠子，你将它拿在手中，或许博物馆馆长知道这是什么。

      阶段2：去找博物馆 _温特_ 后被告知该图腾是神秘东方古国的一个上古神兽 **凤凰**。

      ​			（**解锁森林深处 梧桐树 地点**）

      > 你看到温特正在擦拭展柜，当他转过头看向你时，他的目光被你手中的坠子牢牢吸引住。
      >
      > “你从哪里搞到这个的？” 他快步走上来，想近距离观察你的坠子。
      >
      > 你下意识后退一步，温特发现了他的失态，“抱歉，我只是有点激动 ”。他看向你手中的坠子，“我在书上见到过这个图案，它来自于遥远东方的神秘古国 ”。他四处望了望，“不过我也只在书里看见过这个图案，用东方人的话说，这是通往神秘处的钥匙 ”。温特顿了顿，“如果你不打算把它给我，那你就离开。”
      >
      > “坠子在你手心里发热，不知为何你突然想到了森林深处那进不去的地方，有空去看看吧”
      >
      > 你现在可以去到森林深处-梧桐树了！

      腰坠描述：

      > “来自于某神秘东方古国的神秘腰坠，刻有神兽 凤凰 的图腾，不清晰具体作用，但对人体似乎无害，可以当作装饰使用。”

      

   3. 百鸟朝凤：

      在森林中 **唱歌** 概率遇到鸟群事件 → 压力-- 创伤-- 疲劳-- 转化值+=1

      > 森林里的鸟儿听见你婉转的歌声后停留在你的身边或是古树上，鸟儿们也在和你一起歌唱，你感觉到很放松。

      

2. 转化值事件：

   1. 转化值>=15：尾羽 tail

      > 你感觉你的尾椎骨传来一丝痒意，有什么柔软的东西在你腿上扫过。

   转化值<=15：

   > 你的尾椎骨感觉空落落的，你看向身后，那里已经什么都没有了。

   2. 转化值>=20：唱歌

      > 你的喉咙时不时感到痒意，你有一股想大声吟唱的冲动。

   转化值<=20：

   > 你想试着再度吟唱，但你的喉咙只传来一丝痛意，无法再发出轻灵婉转的音色了。

   3. 转化值>=30：羽翼

      > 你向你的后背看去，新生的翅膀轻轻地在空气中扇动。

   转化值<=30：

   > 你摸向你的后背，伴随你一段时间的羽翼却已消失于天地间。

   4. 转化值>=40：头羽 crest

      > 你的额头感觉到了一丝说不清道不明的痒意，你忍不住伸手去触碰，触及到的是一片柔软。

   转化值<=40：

   > 你感觉你的额头空落落的，头羽已经掉光了

   5. 转化值>=50：额纹 tattoo

      > 你的眉心正在烧灼，你看了看镜子，银白色的图腾在你的眉心静静地待着。

   转化值<=50：

   > 银白色的图腾正缓慢消失，你在镜子里看着它消散。

   6. 转化值>=65：瞳孔 eyes （文件里名字还没换）

      > 你的眼睛传来炙热的灼烧感，你哀嚎着躬下身想要逃过这感觉，但无济于事。等待疼痛过去的时间是难忍的，但当你看见镜子里流光溢彩的瞳孔时，你认为一切都是值得的。

   转化值<=65：

   > 你的眼睛传来一阵灼烧感，但很轻，过了一会儿后烧灼感消失了。

   

3. 专属特质：

   凤凰祝福：战斗中解锁凤鸣

   凤目：诡术+15 （已测试）阶段6

   专一伴侣：阶段1 （已测试）

   

4. 专属转化动作：

   凤鸣：战斗动作，尖叫强化版，aoe伤害 （参考龙息）fengMing

   $speechfengming 对应回应  (已测试)

5. 涅槃重生事件 - 每月最后一天会逐步增加疼痛，23点过后返祖成一颗蛋（npc遇到蛋会触发特殊剧情），8h后状态初始化（期间无法进行行动），恢复童贞，增加容貌，压力创伤归零




 6. 需要修复：

    1. 万圣节剧情没写

    2. 雨衣会盖掉外翼的图层

    3. 无法对主属性加成，诡术加成未测验

    4. 每天减少转化值 -1 还没写

    5. 每日限制摸树一次没写


---

> _总策划 + 文案：大美女老师_
>
> _代码：猫猫教传教士_
>
> _美工：芝士味手抓饼、黑猫猫团、童贝贝_