/* Quiz data: Work Style. Copy this file to create a new quiz. */
(function (QH) {
  'use strict';

  QH.quizzes['work-style'] = {
    id: 'work-style',

    title: { en: 'Work Style', zh: '工作风格', ja: '仕事のスタイル', id: 'Gaya Kerja' },

    intro: {
      en: 'Five quick choices reveal how you naturally approach projects, plans and deadlines.',
      zh: '五个简单选择，揭示你在项目、计划和截止日期前的自然做事方式。',
      ja: '5つの簡単な選択で、プロジェクトや計画、締め切りへの自然なアプローチがわかります。',
      id: 'Lima pilihan singkat mengungkap cara alamimu menghadapi proyek, rencana, dan tenggat waktu.'
    },

    questions: [
      {
        image: 'assets/img/questions/work-style-q1.svg',
        prompt: {
          en: 'A big project lands on your desk with no instructions. What do you do first?',
          zh: '一个大项目放到你桌上，却没有任何说明。你第一步会做什么？',
          ja: '大きなプロジェクトが指示なしで届きました。まず何をしますか？',
          id: 'Sebuah proyek besar datang ke mejamu tanpa instruksi. Apa yang kamu lakukan pertama?'
        },
        options: [
          { trait: 'architect', text: {
            en: 'Sketch the full structure and milestones before touching anything.',
            zh: '先勾勒完整结构和里程碑，再动手。',
            ja: '何にも手を付けず、まず全体の構成とマイルストーンを描く。',
            id: 'Gambar struktur dan tonggak utama sebelum menyentuh apa pun.' } },
          { trait: 'explorer', text: {
            en: 'Try a small experiment to see what the problem really is.',
            zh: '做个小实验，看看问题到底是什么。',
            ja: '小さな実験をして、本当の問題を確かめる。',
            id: 'Coba eksperimen kecil untuk melihat masalah yang sebenarnya.' } },
          { trait: 'connector', text: {
            en: 'Ask who is affected and gather everyone’s input.',
            zh: '先问清楚谁会受影响，收集大家的意见。',
            ja: '影響を受ける人を確認し、全員の意見を集める。',
            id: 'Tanya siapa yang terdampak dan kumpulkan masukan semua orang.' } },
          { trait: 'closer', text: {
            en: 'Pick the most urgent piece and start knocking it out.',
            zh: '挑最紧急的部分，马上开始攻克。',
            ja: '最も急ぎの部分を選び、すぐに片付け始める。',
            id: 'Pilih bagian paling mendesak dan langsung kerjakan.' } }
        ]
      },
      {
        image: 'assets/img/questions/work-style-q2.svg',
        prompt: {
          en: 'Your ideal workspace looks like…',
          zh: '你理想的工作空间是……',
          ja: '理想の仕事環境は…',
          id: 'Ruang kerja idealmu terlihat seperti…'
        },
        options: [
          { trait: 'architect', text: {
            en: 'Organised and quiet, with everything in its place.',
            zh: '整洁安静，每样东西都在它该在的位置。',
            ja: '整理整頓されて静か、すべてが定位置にある。',
            id: 'Rapi dan tenang, semuanya di tempatnya.' } },
          { trait: 'explorer', text: {
            en: 'Flexible, with room to wander and sketch ideas.',
            zh: '灵活自由，有空间走动、随手画草图。',
            ja: '柔軟で、歩き回ったりアイデアを描いたりできる。',
            id: 'Fleksibel, ada ruang untuk berjalan dan menggambar ide.' } },
          { trait: 'connector', text: {
            en: 'Busy and social, where ideas are shared freely.',
            zh: '热闹有人气，想法可以自由分享。',
            ja: 'にぎやかで人が集まり、アイデアを自由に共有できる。',
            id: 'Ramai dan sosial, ide bebas dibagikan.' } },
          { trait: 'closer', text: {
            en: 'Clear goals on a board, with a visible countdown.',
            zh: '白板上目标清晰，还有可见的倒计时。',
            ja: 'ボードに明確な目標があり、カウントダウンが見える。',
            id: 'Tujuan jelas di papan, dengan hitung mundur yang terlihat.' } }
        ]
      },
      {
        image: 'assets/img/questions/work-style-q3.svg',
        prompt: {
          en: 'When a plan changes at the last minute, you…',
          zh: '计划临时改变时，你会……',
          ja: '直前に計画が変わったら…',
          id: 'Saat rencana berubah mendadak, kamu…'
        },
        options: [
          { trait: 'architect', text: {
            en: 'Stay uneasy until the plan is rebuilt properly.',
            zh: '在计划重新理顺之前，会一直不安。',
            ja: '計画を作り直すまで落ち着かない。',
            id: 'Tetap gelisah sampai rencana dibangun ulang dengan benar.' } },
          { trait: 'explorer', text: {
            en: 'See it as a chance to try a different approach.',
            zh: '把它看作尝试新方法的机会。',
            ja: '別のやり方を試すチャンスと捉える。',
            id: 'Melihatnya sebagai kesempatan mencoba pendekatan lain.' } },
          { trait: 'connector', text: {
            en: 'Check in with the team and rebalance the workload.',
            zh: '和团队沟通，重新分配工作量。',
            ja: 'チームに確認し、作業量を調整し直す。',
            id: 'Berkoordinasi dengan tim dan menyeimbangkan beban kerja.' } },
          { trait: 'closer', text: {
            en: 'Adjust quickly and push to meet the new deadline.',
            zh: '快速调整，全力赶上新的截止日期。',
            ja: 'すばやく調整し、新しい締め切りに間に合わせる。',
            id: 'Segera menyesuaikan dan mengejar tenggat baru.' } }
        ]
      },
      {
        image: 'assets/img/questions/work-style-q4.svg',
        prompt: {
          en: 'Which praise would mean the most to you?',
          zh: '哪句夸奖对你意义最大？',
          ja: 'どんな褒め言葉が一番嬉しい？',
          id: 'Pujian mana yang paling berarti bagimu?'
        },
        options: [
          { trait: 'architect', text: {
            en: '“Your work is thorough and reliable.”',
            zh: '“你的工作细致可靠。”',
            ja: '「あなたの仕事は丁寧で信頼できる。」',
            id: '“Pekerjaanmu teliti dan dapat diandalkan.”' } },
          { trait: 'explorer', text: {
            en: '“You always find the unexpected angle.”',
            zh: '“你总能找到意想不到的角度。”',
            ja: '「あなたはいつも意外な視点を見つける。」',
            id: '“Kamu selalu menemukan sudut pandang yang tak terduga.”' } },
          { trait: 'connector', text: {
            en: '“You make everyone feel part of the team.”',
            zh: '“你让每个人都觉得自己是团队的一员。”',
            ja: '「あなたは誰もがチームの一員だと感じさせる。」',
            id: '“Kamu membuat semua orang merasa menjadi bagian tim.”' } },
          { trait: 'closer', text: {
            en: '“You get things over the line.”',
            zh: '“你总能把事情做到底。”',
            ja: '「あなたはやり遂げる力がある。」',
            id: '“Kamu selalu menuntaskan segala hal.”' } }
        ]
      },
      {
        image: 'assets/img/questions/work-style-q5.svg',
        prompt: {
          en: 'Your to-do list at the end of the week is…',
          zh: '周末时你的待办清单是……',
          ja: '週末の時点でのToDoリストは…',
          id: 'Daftar tugasmu di akhir minggu…'
        },
        options: [
          { trait: 'architect', text: {
            en: 'Sorted by priority, with a tidy plan for next week.',
            zh: '按优先级排好，下周计划也整理妥当。',
            ja: '優先順位順に整理され、来週の計画もきれいにまとまっている。',
            id: 'Diurutkan berdasarkan prioritas, dengan rencana rapi untuk minggu depan.' } },
          { trait: 'explorer', text: {
            en: 'Full of new threads you want to explore.',
            zh: '满是你想继续探索的新线索。',
            ja: '探ってみたい新しいテーマでいっぱい。',
            id: 'Penuh dengan topik baru yang ingin kamu jelajahi.' } },
          { trait: 'connector', text: {
            en: 'Mostly notes about people you need to follow up with.',
            zh: '大多是需要跟进的人的备注。',
            ja: 'フォローアップが必要な人へのメモが中心。',
            id: 'Sebagian besar catatan tentang orang yang perlu kamu hubungi lagi.' } },
          { trait: 'closer', text: {
            en: 'Ticked off, with a few stragglers for Monday.',
            zh: '基本都划掉了，剩下几件留到周一。',
            ja: 'ほとんど完了し、数件は月曜に回す。',
            id: 'Sudah tercentang, dengan beberapa sisa untuk Senin.' } }
        ]
      }
    ],

    results: {
      architect: {
        image: 'assets/img/results/work-style-architect.svg',
        title: { en: 'The Architect', zh: '建筑师', ja: 'アーキテクト', id: 'Sang Arsitek' },
        text: {
          en: 'You like a clear map before you move. You plan carefully and feel most at ease when the pieces fit. Your strength is building things that last; your risk is over-planning when a rough prototype would teach you more.',
          zh: '行动前你喜欢先有清晰的蓝图。你做事周全，当各部分严丝合缝时最安心。你的优势是打造经久耐用的东西；风险在于过度规划，而一个粗糙的原型可能更能教会你东西。',
          ja: '動く前に明確な地図が欲しいタイプ。慎重に計画を立て、すべてがかみ合うと最も安心します。強みは長持ちするものを作ること。リスクは、粗いプロトタイプの方が多くを教えてくれる場面でも計画しすぎてしまうことです。',
          id: 'Kamu suka peta yang jelas sebelum bergerak. Kamu merencanakan dengan cermat dan paling tenang saat semua bagian pas. Kekuatanmu adalah membangun sesuatu yang awet; risikomu adalah terlalu banyak merencanakan padahal prototipe kasar bisa mengajarkanmu lebih banyak.'
        }
      },
      explorer: {
        image: 'assets/img/results/work-style-explorer.svg',
        title: { en: 'The Explorer', zh: '探索者', ja: 'エクスプローラー', id: 'Sang Penjelajah' },
        text: {
          en: 'You thrive on new problems and open questions. You test ideas quickly, follow your curiosity and adapt as you go. Your strength is discovery; your risk is starting more than you finish.',
          zh: '你在新问题和开放性问题中如鱼得水。你会快速验证想法、跟随好奇心，并边走边调整。你的优势是发现；风险在于开始的事情多过完成的。',
          ja: '新しい課題や答えの出ない問いに燃えるタイプ。アイデアをすぐ試し、好奇心に従い、進みながら適応します。強みは発見すること。リスクは、終わらせるより始めるほうが多いことです。',
          id: 'Kamu berkembang dengan masalah baru dan pertanyaan terbuka. Kamu cepat menguji ide, mengikuti rasa ingin tahu, dan beradaptasi di tengah jalan. Kekuatanmu adalah penemuan; risikomu adalah memulai lebih banyak daripada yang selesai.'
        }
      },
      connector: {
        image: 'assets/img/results/work-style-connector.svg',
        title: { en: 'The Connector', zh: '连接者', ja: 'コネクター', id: 'Sang Penghubung' },
        text: {
          en: 'You get the best results through people. You notice who needs what, bring others together and keep communication flowing. Your strength is alignment; your risk is saying yes to too many requests.',
          zh: '你通过人获得最好的结果。你能察觉谁需要什么，把人们聚在一起，并让沟通顺畅。你的优势是凝聚共识；风险在于对太多请求说了好。',
          ja: '最良の結果は人を通じて得られると考えるタイプ。誰が何を必要としているかに気づき、人をつなぎ、コミュニケーションを流れ続けさせます。強みは方向をそろえること。リスクは、頼まれごとに何でも「はい」と答えてしまうことです。',
          id: 'Kamu mendapat hasil terbaik melalui orang. Kamu menyadari siapa butuh apa, mempertemukan orang, dan menjaga komunikasi tetap lancar. Kekuatanmu adalah keselarasan; risikomu adalah terlalu sering menerima permintaan.'
        }
      },
      closer: {
        image: 'assets/img/results/work-style-closer.svg',
        title: { en: 'The Closer', zh: '终结者', ja: 'クローザー', id: 'Sang Penuntas' },
        text: {
          en: 'You are happiest when something is done. You set firm deadlines, cut what is not needed and push through to the finish. Your strength is delivery; your risk is moving on before the details are polished.',
          zh: '看到事情完成时你最开心。你会设定明确的期限，砍掉不必要的部分，然后一路推进到终点。你的优势是交付；风险在于细节还没打磨好就急着往下走。',
          ja: '何かが完成したときに最も幸せを感じるタイプ。確かな締め切りを設定し、不要なものを削ぎ落とし、最後までやり切ります。強みは成果を届けること。リスクは、細部を磨き切る前に次へ進んでしまうことです。',
          id: 'Kamu paling bahagia saat sesuatu selesai. Kamu menetapkan tenggat yang tegas, memangkas yang tidak perlu, dan terus maju hingga selesai. Kekuatanmu adalah penyelesaian; risikomu adalah pindah sebelum detailnya dipoles.'
        }
      }
    }
  };
})(window.QH);
