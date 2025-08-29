const licoes = {
  Inglesum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "I", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "eat", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "here", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "I eat ", resposta: "here", opcoes: ["here","hamburger","I"] },
    { etapa: 5, tipo: "frase", frase: " eat here", resposta: "I", opcoes: ["I","He","She"] },
    { etapa: 6, tipo: "frase", frase: "I ___ here", resposta: "eat", opcoes: ["eats","drink","love"] }
  ],

  Inglesdois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Can", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "You", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "Drink", resposta: "beber", opcoes: ["bêbado","refri","bebe","beber"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Can you ___ ?", resposta: "Drink", opcoes: ["Drink","Soda","It"] },
    { etapa: 5, tipo: "frase", frase: "___ you drink", resposta: "Can", opcoes: ["Eat","Can","We"] },
    { etapa: 6, tipo: "frase", frase: "Can ___ here", resposta: "You", opcoes: ["You","Your","Our"] }
  ],

  InglesTres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "We", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "don't", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "Want", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "We don't ___", resposta: "Want", opcoes: ["Want","Ice cream","Not"] },
    { etapa: 5, tipo: "frase", frase: " ___ don't want", resposta: "We", opcoes: ["Can","Drink","We"] },
    { etapa: 6, tipo: "frase", frase: "We ___ want", resposta: "Don't", opcoes: ["Not","Don't","No"] }
  ]
};

const licoes = {
  Espanholum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Yo", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "como", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "aquí", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Yo como ", resposta: "aquí", opcoes: ["aquí","hamburguesa","Yo"] },
    { etapa: 5, tipo: "frase", frase: " como aquí", resposta: "Yo", opcoes: ["Yo","Él","Ella"] },
    { etapa: 6, tipo: "frase", frase: "Yo ___ aquí", resposta: "como", opcoes: ["come","bebe","ama"] }
  ],

  Espanholdois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Poder", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "Tú", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "Beber", resposta: "beber", opcoes: ["bêbado","refrigerante","bebe","beber"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "¿Puedes ___ ?", resposta: "Beber", opcoes: ["Beber","Refresco","Eso"] },
    { etapa: 5, tipo: "frase", frase: "___ puedes beber", resposta: "Puedes", opcoes: ["Comer","Puedes","Nosotros"] },
    { etapa: 6, tipo: "frase", frase: "Puedes ___ aquí", resposta: "Tú", opcoes: ["Tú","Tu","Nuestro"] }
  ],

  Espanholtres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Nosotros", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "no", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "querer", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Nosotros no ___", resposta: "querer", opcoes: ["querer","helado","no"] },
    { etapa: 5, tipo: "frase", frase: " ___ no queremos", resposta: "Nosotros", opcoes: ["Poder","Beber","Nosotros"] },
    { etapa: 6, tipo: "frase", frase: "Nosotros ___ queremos", resposta: "no", opcoes: ["No","No queremos","No hay"] }
  ]
};

const licoes = {
  Francesum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Je", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "mange", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "ici", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Je mange ", resposta: "ici", opcoes: ["ici","hamburger","Je"] },
    { etapa: 5, tipo: "frase", frase: " mange ici", resposta: "Je", opcoes: ["Je","Il","Elle"] },
    { etapa: 6, tipo: "frase", frase: "Je ___ ici", resposta: "mange", opcoes: ["manges","bois","aime"] }
  ],

  Francesdois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Pouvoir", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "Tu", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "Boire", resposta: "beber", opcoes: ["bêbado","boire","bebe","refri"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Peux-tu ___ ?", resposta: "Boire", opcoes: ["Boire","Soda","Ça"] },
    { etapa: 5, tipo: "frase", frase: "___ tu bois", resposta: "Peux", opcoes: ["Mange","Peux","Nous"] },
    { etapa: 6, tipo: "frase", frase: "Peux ___ ici", resposta: "Tu", opcoes: ["Tu","Ton","Notre"] }
  ],

  Francestres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Nous", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "ne", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "vouloir", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Nous ne ___ pas", resposta: "vouloir", opcoes: ["vouloir","glace","pas"] },
    { etapa: 5, tipo: "frase", frase: " ___ ne voulons pas", resposta: "Nous", opcoes: ["Pouvoir","Boire","Nous"] },
    { etapa: 6, tipo: "frase", frase: "Nous ___ voulons pas", resposta: "ne", opcoes: ["ne","n'avons pas","il n'y a pas"] }
  ]
};

const licoes = {
  Italianoum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Io", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "mangio", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "qui", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Io mangio ", resposta: "qui", opcoes: ["qui","hamburger","Io"] },
    { etapa: 5, tipo: "frase", frase: " mangio qui", resposta: "Io", opcoes: ["Io","Lui","Lei"] },
    { etapa: 6, tipo: "frase", frase: "Io ___ qui", resposta: "mangio", opcoes: ["mangia","bevo","amo"] }
  ],

  Italianodois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Puoi", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "Tu", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "Bere", resposta: "beber", opcoes: ["bêbado","bebê","bebe","beber"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Puoi ___ ?", resposta: "Bere", opcoes: ["Bere","Soda","Esso"] },
    { etapa: 5, tipo: "frase", frase: "___ puoi bere", resposta: "Puoi", opcoes: ["Mangiare","Puoi","Noi"] },
    { etapa: 6, tipo: "frase", frase: "Puoi ___ qui", resposta: "Tu", opcoes: ["Tu","Tuo","Nostro"] }
  ],

  Italianotres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Noi", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "non", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "Volere", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Noi non ___", resposta: "Volere", opcoes: ["Volere","Gelato","Non"] },
    { etapa: 5, tipo: "frase", frase: " ___ non vogliamo", resposta: "Noi", opcoes: ["Potere","Bere","Noi"] },
    { etapa: 6, tipo: "frase", frase: "Noi ___ vogliamo", resposta: "non", opcoes: ["non","non vogliamo","non c'è"] }
  ],

  Alemaooum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Ich", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "esse", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "hier", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Ich esse ", resposta: "hier", opcoes: ["hier","Hamburger","Ich"] },
    { etapa: 5, tipo: "frase", frase: " esse hier", resposta: "Ich", opcoes: ["Ich","Er","Sie"] },
    { etapa: 6, tipo: "frase", frase: "Ich ___ hier", resposta: "esse", opcoes: ["isst","trinke","liebe"] }
  ],

  Alemaoodois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Kann", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "Du", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "Trinken", resposta: "beber", opcoes: ["bêbado","Trinken","bebe","Refri"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Kannst du ___ ?", resposta: "Trinken", opcoes: ["Trinken","Limonade","Es"] },
    { etapa: 5, tipo: "frase", frase: "___ du trinken", resposta: "Kann", opcoes: ["Essen","Kann","Wir"] },
    { etapa: 6, tipo: "frase", frase: "Kann ___ hier", resposta: "Du", opcoes: ["Du","Dein","Unser"] }
  ],

  Alemaootres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "Wir", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "nicht", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "Wollen", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "Wir ___ nicht", resposta: "Wollen", opcoes: ["Wollen","Eis","Nicht"] },
    { etapa: 5, tipo: "frase", frase: " ___ wollen nicht", resposta: "Wir", opcoes: ["Können","Trinken","Wir"] },
    { etapa: 6, tipo: "frase", frase: "Wir ___ wollen nicht", resposta: "nicht", opcoes: ["nicht","wollen nicht","es gibt nicht"] }
  ]
};

const licoes = {
  Japonesum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "私 (Watashi)", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "食べる (Taberu)", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "ここ (Koko)", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "私 は 食べる ", resposta: "ここ", opcoes: ["ここ","ハンバーガー","私"] },
    { etapa: 5, tipo: "frase", frase: " 食べる ここ", resposta: "私", opcoes: ["私","彼","彼女"] },
    { etapa: 6, tipo: "frase", frase: "私 ___ ここ", resposta: "食べる", opcoes: ["食べます","飲む","愛する"] }
  ],

  Japonesdois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "できる (Dekiru)", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "あなた (Anata)", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "飲む (Nomu)", resposta: "beber", opcoes: ["bêbado","飲む","bebe","refri"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "あなた は ___ できますか？", resposta: "飲む", opcoes: ["飲む","ソーダ","それ"] },
    { etapa: 5, tipo: "frase", frase: "___ は飲みますか？", resposta: "できます", opcoes: ["食べる","できます","私たち"] },
    { etapa: 6, tipo: "frase", frase: "できます ___ ここ", resposta: "あなた", opcoes: ["あなた","あなたの","私たちの"] }
  ],

  Japonestres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "私たち (Watashitachi)", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "ない (Nai)", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "欲しい (Hoshii)", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "私たち は ___ ない", resposta: "欲しい", opcoes: ["欲しい","アイスクリーム","ない"] },
    { etapa: 5, tipo: "frase", frase: " ___ は欲しくない", resposta: "私たち", opcoes: ["できる","飲む","私たち"] },
    { etapa: 6, tipo: "frase", frase: "私たち ___ 欲しくない", resposta: "ない", opcoes: ["ない","欲しくない","ありません"] }
  ],

  Coreanoum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "나 (Na)", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "먹다 (Meokda)", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "여기 (Yeogi)", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "나 는 먹다 ", resposta: "여기", opcoes: ["여기","햄버거","나"] },
    { etapa: 5, tipo: "frase", frase: " 먹다 여기", resposta: "나", opcoes: ["나","그","그녀"] },
    { etapa: 6, tipo: "frase", frase: "나 ___ 여기", resposta: "먹다", opcoes: ["먹는다","마시다","사랑하다"] }
  ],

  Coreanodois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "할 수 있다 (Hal su itda)", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "너 (Neo)", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "마시다 (Masida)", resposta: "beber", opcoes: ["술취한","마시다","마신다","음료수"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "너 는 ___ 수 있니?", resposta: "마시다", opcoes: ["마시다","사이다","그것"] },
    { etapa: 5, tipo: "frase", frase: "___ 는 마시다", resposta: "할 수 있다", opcoes: ["먹다","할 수 있다","우리"] },
    { etapa: 6, tipo: "frase", frase: "할 수 ___ 여기", resposta: "너", opcoes: ["너","너의","우리의"] }
  ],

  Coreanotres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "우리 (Uri)", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "아니다 (Anida)", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "원하다 (Wonhada)", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "우리 는 ___ 않는다", resposta: "원하다", opcoes: ["원하다","아이스크림","않다"] },
    { etapa: 5, tipo: "frase", frase: " ___ 원하지 않는다", resposta: "우리", opcoes: ["할 수 있다","마시다","우리"] },
    { etapa: 6, tipo: "frase", frase: "우리 ___ 원하지 않는다", resposta: "않다", opcoes: ["않다","원하지 않는다","없다"] }
  ],

  Chinesum: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "我 (Wǒ)", resposta: "eu", opcoes: ["eu","jarro","ele","lugar"] },
    { etapa: 2, tipo: "palavra", frase: "吃 (Chī)", resposta: "como", opcoes: ["como","bebê","corre","pula"] },
    { etapa: 3, tipo: "palavra", frase: "这里 (Zhèlǐ)", resposta: "aqui", opcoes: ["aqui","ali","lá","ontem"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "我 吃 ", resposta: "这里", opcoes: ["这里","汉堡","我"] },
    { etapa: 5, tipo: "frase", frase: " 吃 这里", resposta: "我", opcoes: ["我","他","她"] },
    { etapa: 6, tipo: "frase", frase: "我 ___ 这里", resposta: "吃", opcoes: ["吃","喝","爱"] }
  ],

  Chinesdois: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "能 (Néng)", resposta: "poder", opcoes: ["canoa","possuo","canudo","poder"] },
    { etapa: 2, tipo: "palavra", frase: "你 (Nǐ)", resposta: "você", opcoes: ["urru","você","eles","nós"] },
    { etapa: 3, tipo: "palavra", frase: "喝 (Hē)", resposta: "beber", opcoes: ["喝","酒","喝了","饮料"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "你 能 ___ 吗？", resposta: "喝", opcoes: ["喝","汽水","它"] },
    { etapa: 5, tipo: "frase", frase: "___ 你喝", resposta: "能", opcoes: ["吃","能","我们"] },
    { etapa: 6, tipo: "frase", frase: "能 ___ 这里", resposta: "你", opcoes: ["你","你的","我们的"] }
  ],

  Chinesetres: [
    // Aprendizado de palavras
    { etapa: 1, tipo: "palavra", frase: "我们 (Wǒmen)", resposta: "nós", opcoes: ["vocês","todos","nós","vencer"] },
    { etapa: 2, tipo: "palavra", frase: "不 (Bù)", resposta: "não", opcoes: ["faça","está","que","não"] },
    { etapa: 3, tipo: "palavra", frase: "想 (Xiǎng)", resposta: "querer", opcoes: ["pular","querer","avante","correr"] },

    // Construção de frases
    { etapa: 4, tipo: "frase", frase: "我们 不 ___", resposta: "想", opcoes: ["想","冰淇淋","不"] },
    { etapa: 5, tipo: "frase", frase: " ___ 不想", resposta: "我们", opcoes: ["能","喝","我们"] },
    { etapa: 6, tipo: "frase", frase: "我们 ___ 不想", resposta: "不", opcoes: ["不","不想","没有"] }
  ]
};