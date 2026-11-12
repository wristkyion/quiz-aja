/* Quiz data: Social Energy. */
(function (QH) {
  'use strict';

  QH.quizzes['social-energy'] = {
    id: 'social-energy',

    title: { en: 'Social Energy', zh: '社交能量', ja: 'ソーシャルエナジー', id: 'Energi Sosial' },

    intro: {
      en: 'Find out where you recharge and how you show up when you are around other people.',
      zh: '了解你在哪里充电，以及和他人相处时你的状态。',
      ja: 'どこで充電するのか、人と一緒にいるときどう振る舞うのかを知ろう。',
      id: 'Cari tahu di mana kamu mengisi ulang energi dan bagaimana sikapmu saat bersama orang lain.'
    },

    questions: [
      {
        image: 'assets/img/questions/social-energy-q1.svg',
        prompt: {
          en: 'It is Friday night and a last-minute invitation arrives. You…',
          zh: '周五晚上突然收到一个临时邀请，你会……',
          ja: '金曜の夜、直前の誘いが届きました。あなたは…',
          id: 'Malam Jumat, ada undangan mendadak. Kamu…'
        },
        options: [
          { trait: 'spark', text: {
            en: 'Head out, you will figure out the details when you get there.',
            zh: '直接出发，到了再说细节。',
            ja: 'すぐ出かけ、詳細は着いてから考える。',
            id: 'Berangkat saja, detailnya dipikirkan nanti.' } },
          { trait: 'anchor', text: {
            en: 'Go if a close friend is going, otherwise stay in.',
            zh: '如果好朋友去就去，否则待在家里。',
            ja: '親しい友人が行くなら行く、そうでなければ家にいる。',
            id: 'Pergi kalau sahabat dekat ikut, kalau tidak di rumah saja.' } },
          { trait: 'observer', text: {
            en: 'Read the group chat for a while before deciding.',
            zh: '先看看群聊一会儿再决定。',
            ja: 'しばらくグループチャットを眺めてから決める。',
            id: 'Baca grup chat dulu sebentar sebelum memutuskan.' } }
        ]
      },
      {
        image: 'assets/img/questions/social-energy-q2.svg',
        prompt: {
          en: 'At a party where you know only a few people, you usually…',
          zh: '在一个只认识几个人的派对上，你通常会……',
          ja: '知り合いが数人しかいないパーティーでは、普段…',
          id: 'Di pesta yang hanya kamu kenal beberapa orang, biasanya kamu…'
        },
        options: [
          { trait: 'spark', text: {
            en: 'Start conversations with whoever is nearest.',
            zh: '和身边最近的人开始聊天。',
            ja: '一番近くにいる人に話しかける。',
            id: 'Mulai mengobrol dengan siapa pun yang paling dekat.' } },
          { trait: 'anchor', text: {
            en: 'Stay close to the people you came with.',
            zh: '紧跟着和你一起来的人。',
            ja: '一緒に来た人のそばにいる。',
            id: 'Tetap dekat dengan orang yang datang bersamamu.' } },
          { trait: 'observer', text: {
            en: 'Find a quiet spot and watch how the room moves.',
            zh: '找个安静的角落，观察整个房间的动向。',
            ja: '静かな場所を見つけて、会場の動きを眺める。',
            id: 'Cari tempat tenang dan perhatikan suasana ruangan.' } }
        ]
      },
      {
        image: 'assets/img/questions/social-energy-q3.svg',
        prompt: {
          en: 'After a busy day with lots of people, you feel…',
          zh: '经历了充满人群的忙碌一天后，你感觉……',
          ja: '人に囲まれた忙しい一日の後、あなたは…',
          id: 'Setelah hari sibuk penuh orang, kamu merasa…'
        },
        options: [
          { trait: 'spark', text: {
            en: 'Still buzzing, ready for more conversation.',
            zh: '依然兴奋，还想多聊聊。',
            ja: 'まだ興奮していて、もっと話したい。',
            id: 'Masih bersemangat, siap ngobrol lagi.' } },
          { trait: 'anchor', text: {
            en: 'Content, especially after a long talk with one person.',
            zh: '很满足，尤其是和某个人长谈之后。',
            ja: '満足している。特に一人と長く話したあとは。',
            id: 'Puas, terutama setelah ngobrol panjang dengan satu orang.' } },
          { trait: 'observer', text: {
            en: 'Drained, and glad for an evening alone.',
            zh: '精疲力尽，庆幸能独自待一晚。',
            ja: '消耗していて、一人の夜にほっとする。',
            id: 'Terkuras, dan senang punya malam sendiri.' } }
        ]
      },
      {
        image: 'assets/img/questions/social-energy-q4.svg',
        prompt: {
          en: 'Your friends would most likely describe you as…',
          zh: '朋友们最可能怎样形容你？',
          ja: '友人はあなたをどう表現するでしょう？',
          id: 'Temanmu paling mungkin menggambarkanmu sebagai…'
        },
        options: [
          { trait: 'spark', text: {
            en: 'The one who gets the plans going.',
            zh: '总是让计划动起来的那个人。',
            ja: '計画を動かしてくれる人。',
            id: 'Orang yang membuat rencana berjalan.' } },
          { trait: 'anchor', text: {
            en: 'The one they can always count on.',
            zh: '永远可以依靠的那个人。',
            ja: 'いつも頼りになる人。',
            id: 'Orang yang selalu bisa diandalkan.' } },
          { trait: 'observer', text: {
            en: 'The one who notices what others miss.',
            zh: '总能注意到别人忽略之处的那个人。',
            ja: '他の人が見逃すことに気づく人。',
            id: 'Orang yang menyadari hal yang terlewat oleh orang lain.' } }
        ]
      },
      {
        image: 'assets/img/questions/social-energy-q5.svg',
        prompt: {
          en: 'In a group video call, you tend to…',
          zh: '在多人视频通话中，你通常会……',
          ja: 'グループのビデオ通話では、あなたは…',
          id: 'Dalam panggilan video grup, kamu cenderung…'
        },
        options: [
          { trait: 'spark', text: {
            en: 'Jump in with jokes and stories.',
            zh: '抢先加入，讲笑话和故事。',
            ja: '冗談や話を挟んで飛び込む。',
            id: 'Langsung nimbrung dengan lelucon dan cerita.' } },
          { trait: 'anchor', text: {
            en: 'Check in with each person by name.',
            zh: '逐一点名问候每个人。',
            ja: '一人ずつ名前を呼んで声をかける。',
            id: 'Menyapa setiap orang dengan namanya.' } },
          { trait: 'observer', text: {
            en: 'Listen closely and speak when you have something to add.',
            zh: '认真倾听，有补充时才发言。',
            ja: 'よく聞いて、付け加えることがあるときに話す。',
            id: 'Mendengarkan dengan saksama dan bicara saat ada yang ingin ditambahkan.' } }
        ]
      }
    ],

    results: {
      spark: {
        image: 'assets/img/results/social-energy-spark.svg',
        title: { en: 'The Spark', zh: '火花', ja: 'スパーク', id: 'Sang Percikan' },
        text: {
          en: 'You energise a room and draw people in. New faces and fast conversations feed you. Your strength is momentum; your risk is running on empty when the calendar never slows down.',
          zh: '你能点燃整个房间，吸引大家靠近。新面孔和快节奏的对话会给你能量。你的优势是带动气氛；风险在于日程从不放慢，你会在没电的状态下硬撑。',
          ja: '場を明るくし、人を引き寄せるタイプ。新しい顔ぶれとテンポのよい会話があなたの力になります。強みは勢いを生むこと。リスクは、予定が途切れないとエネルギーが尽きてしまうことです。',
          id: 'Kamu memberi energi pada ruangan dan menarik orang masuk. Wajah baru dan percakapan cepat menghidupkanmu. Kekuatanmu adalah momentum; risikomu adalah kehabisan tenaga saat jadwal tidak pernah melambat.'
        }
      },
      anchor: {
        image: 'assets/img/results/social-energy-anchor.svg',
        title: { en: 'The Anchor', zh: '锚', ja: 'アンカー', id: 'Sang Jangkar' },
        text: {
          en: 'Loyalty and depth matter most to you. You invest in a smaller circle and show up for it. Your strength is trust; your risk is holding back from new people who would enjoy knowing you.',
          zh: '忠诚与深度对你最重要。你把精力投入在一个小圈子里，并始终在场。你的优势是信任；风险在于对可能很喜欢你的新朋友保持距离。',
          ja: '忠誠心と深い関係がなによりも大切。小さな輪に時間と気持ちを注ぎ、そこに寄り添います。強みは信頼。リスクは、あなたを知れば気に入ってくれたかもしれない新しい人に、心を開くのをためらうことです。',
          id: 'Kesetiaan dan kedalaman paling penting bagimu. Kamu menginvestasikan diri pada lingkaran kecil dan selalu hadir untuknya. Kekuatanmu adalah kepercayaan; risikomu adalah menahan diri dari orang baru yang sebenarnya akan senang mengenalmu.'
        }
      },
      observer: {
        image: 'assets/img/results/social-energy-observer.svg',
        title: { en: 'The Observer', zh: '观察者', ja: 'オブザーバー', id: 'Sang Pengamat' },
        text: {
          en: 'You see the details others overlook and prefer meaningful exchanges to noise. Your strength is perceptiveness; your risk is staying on the sidelines when your voice is wanted.',
          zh: '你能看见别人忽略的细节，更喜欢有意义的交流而不是喧闹。你的优势是洞察力；风险在于大家需要你发声时，你仍站在一旁。',
          ja: '他の人が見落とす細部に気づき、騒がしさより意味のある対話を好みます。強みは洞察力。リスクは、あなたの声が求められているときにも端で見ていることです。',
          id: 'Kamu melihat detail yang terlewat oleh orang lain dan lebih suka percakapan yang bermakna daripada keramaian. Kekuatanmu adalah kepekaan; risikomu adalah tetap di pinggir saat suaramu dibutuhkan.'
        }
      }
    }
  };
})(window.QH);
