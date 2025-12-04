const licoes = {

    // ==========================================================
    // 1. FRANCÊS (Chave principal: "frances")
    // ==========================================================
    "frances": {
        "licao1": { // Acessado por licoes["frances"]["licao1"]
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Je", resposta: "eu", opcoes: ["eu", "ele", "ela", "nós"] },
                { etapa: 2, tipo: "frase", frase: "mange", resposta: "como", opcoes: ["como", "bebo", "corro", "durmo"] },
                { etapa: 3, tipo: "frase", frase: "ici", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "ontem"] },
                { etapa: 4, tipo: "frase", frase: "Je mange ___", resposta: "ici", opcoes: ["ici", "hamburger", "je"] },
                { etapa: 5, tipo: "frase", frase: "Le", resposta: "o", opcoes: ["o", "a", "os", "as"] },
                { etapa: 6, tipo: "frase", frase: "Je mange le pain", resposta: "Eu como o pão", opcoes: ["Eu como o pão", "Eu bebo o suco", "Ela come aqui", "Nós comemos"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Tu", resposta: "você", opcoes: ["você", "ele", "nós", "eles"] },
                { etapa: 2, tipo: "frase", frase: "bois", resposta: "bebe", opcoes: ["bebe", "come", "corre", "dorme"] },
                { etapa: 3, tipo: "frase", frase: "une eau", resposta: "uma água", opcoes: ["uma água", "o suco", "o café", "um leite"] },
                { etapa: 4, tipo: "frase", frase: "Tu bois ___", resposta: "une eau", opcoes: ["une eau", "un café", "le pain"] },
                { etapa: 5, tipo: "frase", frase: "Un", resposta: "um", opcoes: ["um", "uma", "os", "a"] },
                { etapa: 6, tipo: "frase", frase: "Tu bois un café ici", resposta: "Você bebe um café aqui", opcoes: ["Você bebe um café aqui", "Eu como um pão", "Eles bebem água", "Nós comemos aqui"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "La", resposta: "a", opcoes: ["a", "o", "os", "as"] },
                { etapa: 2, tipo: "frase", frase: "pomme", resposta: "maçã", opcoes: ["maçã", "laranja", "suco", "carne"] },
                { etapa: 3, tipo: "frase", frase: "avec", resposta: "com", opcoes: ["com", "sem", "e", "ou"] },
                { etapa: 4, tipo: "frase", frase: "Je mange la pomme ___ le pain", resposta: "avec", opcoes: ["avec", "sans", "bois"] },
                { etapa: 5, tipo: "frase", frase: "Nous", resposta: "nós", opcoes: ["nós", "eu", "você", "eles"] },
                { etapa: 6, tipo: "frase", frase: "Nous mangeons le menu", resposta: "Nós comemos o menu", opcoes: ["Nós comemos o menu", "Eu bebo água", "Eles comem pão", "Você come maçã"] },
            ]
        },
    },

    // ==========================================================
    // 2. INGLÊS (Chave principal: "ingles")
    // ==========================================================
    "ingles": {
        "licao1": {
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "I", resposta: "eu", opcoes: ["eu", "você", "ele", "ela"] },
                { etapa: 2, tipo: "frase", frase: "eat", resposta: "como", opcoes: ["como", "bebo", "corro", "durmo"] },
                { etapa: 3, tipo: "frase", frase: "here", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "agora"] },
                { etapa: 4, tipo: "frase", frase: "I eat ___ hamburger", resposta: "a", opcoes: ["a", "the", "an", "this"] },
                { etapa: 5, tipo: "frase", frase: "The", resposta: "o/a", opcoes: ["o/a", "um/uma", "isto", "aquilo"] },
                { etapa: 6, tipo: "frase", frase: "I eat the sandwich here", resposta: "Eu como o sanduíche aqui", opcoes: ["Eu como o sanduíche aqui", "Você bebe a água", "Eles correm lá", "Eu bebo café"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "You", resposta: "você", opcoes: ["você", "eu", "nós", "eles"] },
                { etapa: 2, tipo: "frase", frase: "drink", resposta: "bebe", opcoes: ["bebe", "come", "corre", "dorme"] },
                { etapa: 3, tipo: "frase", frase: "juice", resposta: "suco", opcoes: ["suco", "água", "café", "leite"] },
                { etapa: 4, tipo: "frase", frase: "You drink ___ water", resposta: "the", opcoes: ["the", "a", "an", "with"] },
                { etapa: 5, tipo: "frase", frase: "An", resposta: "um/uma", opcoes: ["um/uma", "o/a", "isto", "aquilo"] },
                { etapa: 6, tipo: "frase", frase: "You drink a juice", resposta: "Você bebe um suco", opcoes: ["Você bebe um suco", "Eu como um hambúrguer", "Eles bebem água", "Nós comemos aqui"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "menu", resposta: "menu", opcoes: ["menu", "mesa", "conta", "cozinha"] },
                { etapa: 2, tipo: "frase", frase: "with", resposta: "com", opcoes: ["com", "sem", "e", "ou"] },
                { etapa: 3, tipo: "frase", frase: "We", resposta: "nós", opcoes: ["nós", "eu", "você", "eles"] },
                { etapa: 4, tipo: "frase", frase: "We eat ___ drink the juice", resposta: "and", opcoes: ["and", "or", "with", "without"] },
                { etapa: 5, tipo: "frase", frase: "We want a ___", resposta: "menu", opcoes: ["menu", "food", "drink"] },
                { etapa: 6, tipo: "frase", frase: "I want the menu, please", resposta: "Eu quero o menu, por favor", opcoes: ["Eu quero o menu, por favor", "Você come aqui", "Nós bebemos água", "Eles querem o pão"] },
            ]
        },
    },

    // ==========================================================
    // 3. ESPANHOL (Chave principal: "espanhol")
    // ==========================================================
    "espanhol": {
        "licao1": {
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Yo", resposta: "eu", opcoes: ["eu", "você", "ele", "ela"] },
                { etapa: 2, tipo: "frase", frase: "como", resposta: "como", opcoes: ["como", "bebo", "corro", "durmo"] },
                { etapa: 3, tipo: "frase", frase: "aquí", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "ontem"] },
                { etapa: 4, tipo: "frase", frase: "Yo como ___", resposta: "aquí", opcoes: ["aquí", "pan", "yo"] },
                { etapa: 5, tipo: "frase", frase: "El", resposta: "o", opcoes: ["o", "a", "os", "as"] },
                { etapa: 6, tipo: "frase", frase: "Yo como el pan aquí", resposta: "Eu como o pão aqui", opcoes: ["Eu como o pão aqui", "Você bebe a água", "Ela come lá", "Nós comemos"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Tú", resposta: "você", opcoes: ["você", "eu", "nós", "eles"] },
                { etapa: 2, tipo: "frase", frase: "bebes", resposta: "bebe", opcoes: ["bebe", "come", "corre", "dorme"] },
                { etapa: 3, tipo: "frase", frase: "una agua", resposta: "uma água", opcoes: ["uma água", "o suco", "o café", "um leite"] },
                { etapa: 4, tipo: "frase", frase: "Tú bebes ___", resposta: "una agua", opcoes: ["una agua", "un café", "el pan"] },
                { etapa: 5, tipo: "frase", frase: "Un", resposta: "um", opcoes: ["um", "uma", "os", "a"] },
                { etapa: 6, tipo: "frase", frase: "Tú bebes un refresco", resposta: "Você bebe um refrigerante", opcoes: ["Você bebe um refrigerante", "Eu como um pão", "Eles bebem suco", "Nós comemos aqui"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "la cuenta", resposta: "a conta", opcoes: ["a conta", "o menu", "a mesa", "a comida"] },
                { etapa: 2, tipo: "frase", frase: "con", resposta: "com", opcoes: ["com", "sem", "e", "ou"] },
                { etapa: 3, tipo: "frase", frase: "Nosotros", resposta: "nós", opcoes: ["nós", "eu", "você", "eles"] },
                { etapa: 4, tipo: "frase", frase: "Quiero la cuenta, ___ favor", resposta: "por", opcoes: ["por", "con", "y"] },
                { etapa: 5, tipo: "frase", frase: "Yo quiero la ___", resposta: "cuenta", opcoes: ["cuenta", "pan", "refresco"] },
                { etapa: 6, tipo: "frase", frase: "Nosotros comemos con pan", resposta: "Nós comemos com pão", opcoes: ["Nós comemos com pão", "Eu bebo água", "Eles querem o menu", "Você come maçã"] },
            ]
        },
    },

    // ==========================================================
    // 4. JAPONÊS (Chave principal: "japones")
    // ==========================================================
    "japones": {
        "licao1": {
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "私 (watashi)", resposta: "eu", opcoes: ["eu", "você", "ele", "ela"] },
                { etapa: 2, tipo: "frase", frase: "食べる (taberu)", resposta: "comer", opcoes: ["comer", "beber", "correr", "dormir"] },
                { etapa: 3, tipo: "frase", frase: "ここ (koko)", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "ontem"] },
                { etapa: 4, tipo: "frase", frase: "私は ___ を食べる", resposta: "パン", opcoes: ["パン", "水", "私"] }, // パン (pan - pão)
                { etapa: 5, tipo: "frase", frase: "です (desu)", resposta: "é/sou", opcoes: ["é/sou", "comer", "beber", "querer"] },
                { etapa: 6, tipo: "frase", frase: "私はここで食べる", resposta: "Eu como aqui", opcoes: ["Eu como aqui", "Você bebe água", "Ela come pão", "Nós bebemos"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "飲む (nomu)", resposta: "beber", opcoes: ["beber", "comer", "correr", "dormir"] },
                { etapa: 2, tipo: "frase", frase: "水 (mizu)", resposta: "água", opcoes: ["água", "suco", "chá", "café"] },
                { etapa: 3, tipo: "frase", frase: "貴方 (anata)", resposta: "você", opcoes: ["você", "eu", "nós", "eles"] },
                { etapa: 4, tipo: "frase", frase: "貴方は水を ___", resposta: "飲む", opcoes: ["飲む", "食べる", "走る"] },
                { etapa: 5, tipo: "frase", frase: "の (no)", resposta: "de", opcoes: ["de", "e", "com", "sem"] },
                { etapa: 6, tipo: "frase", frase: "貴方はお茶を飲む", resposta: "Você bebe chá", opcoes: ["Você bebe chá", "Eu como pão", "Eles querem suco", "Nós comemos"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "メニュー (menyuu)", resposta: "menu", opcoes: ["menu", "conta", "mesa", "lanche"] },
                { etapa: 2, tipo: "frase", frase: "お願いします (onegaishimasu)", resposta: "por favor", opcoes: ["por favor", "obrigado", "sim", "não"] },
                { etapa: 3, tipo: "frase", frase: "と (to)", resposta: "e", opcoes: ["e", "com", "sem", "ou"] },
                { etapa: 4, tipo: "frase", frase: "ハンバーガー (hanbāgā)", resposta: "hambúrguer", opcoes: ["hambúrguer", "pão", "água", "suco"] },
                { etapa: 5, tipo: "frase", frase: "メニューを ___", resposta: "お願いします", opcoes: ["お願いします", "食べる", "飲む"] },
                { etapa: 6, tipo: "frase", frase: "私はメニューと水を飲む", resposta: "Eu bebo água e menu", opcoes: ["Eu bebo água e menu", "Eu como pão e carne", "Nós queremos o menu", "Você bebe suco e pão"] },
            ]
        },
    },

    // ==========================================================
    // 5. ITALIANO (Chave principal: "italiano")
    // ==========================================================
    "italiano": {
        "licao1": {
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Io", resposta: "eu", opcoes: ["eu", "você", "ele", "nós"] },
                { etapa: 2, tipo: "frase", frase: "mangio", resposta: "como", opcoes: ["como", "bebo", "corro", "durmo"] },
                { etapa: 3, tipo: "frase", frase: "qui", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "ontem"] },
                { etapa: 4, tipo: "frase", frase: "Io mangio ___", resposta: "qui", opcoes: ["qui", "pane", "io"] },
                { etapa: 5, tipo: "frase", frase: "Il", resposta: "o", opcoes: ["o", "a", "os", "as"] },
                { etapa: 6, tipo: "frase", frase: "Io mangio il panino qui", resposta: "Eu como o sanduíche aqui", opcoes: ["Eu como o sanduíche aqui", "Eu bebo a água", "Ele come aqui", "Nós comemos"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Tu", resposta: "você", opcoes: ["você", "eu", "nós", "eles"] },
                { etapa: 2, tipo: "frase", frase: "bevi", resposta: "bebe", opcoes: ["bebe", "come", "corre", "dorme"] },
                { etapa: 3, tipo: "frase", frase: "acqua", resposta: "água", opcoes: ["água", "suco", "café", "leite"] },
                { etapa: 4, tipo: "frase", frase: "Tu bevi l'___", resposta: "acqua", opcoes: ["acqua", "pane", "birra"] },
                { etapa: 5, tipo: "frase", frase: "Una", resposta: "uma", opcoes: ["uma", "um", "os", "a"] },
                { etapa: 6, tipo: "frase", frase: "Tu bevi un caffè", resposta: "Você bebe um café", opcoes: ["Você bebe um café", "Eu como um pão", "Eles bebem água", "Nós comemos aqui"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "il conto", resposta: "a conta", opcoes: ["a conta", "o menu", "a mesa", "o pão"] },
                { etapa: 2, tipo: "frase", frase: "con", resposta: "com", opcoes: ["com", "sem", "e", "ou"] },
                { etapa: 3, tipo: "frase", frase: "Noi", resposta: "nós", opcoes: ["nós", "eu", "você", "eles"] },
                { etapa: 4, tipo: "frase", frase: "Vorrei il conto, ___ favore", resposta: "per", opcoes: ["per", "con", "e"] },
                { etapa: 5, tipo: "frase", frase: "Noi mangiamo ___", resposta: "carne", opcoes: ["carne", "acqua", "succo"] },
                { etapa: 6, tipo: "frase", frase: "Noi mangiamo la carne con pane", resposta: "Nós comemos a carne com pão", opcoes: ["Nós comemos a carne com pão", "Eu bebo água", "Eles querem o menu", "Você come maçã"] },
            ]
        },
    },

    // ==========================================================
    // 6. MANDARIM (Chave principal: "mandarim")
    // ==========================================================
    "mandarim": {
        "licao1": {
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "我 (wǒ)", resposta: "eu", opcoes: ["eu", "você", "ele", "ela"] },
                { etapa: 2, tipo: "frase", frase: "吃 (chī)", resposta: "comer", opcoes: ["comer", "beber", "correr", "dormir"] },
                { etapa: 3, tipo: "frase", frase: "这里 (zhèlǐ)", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "ontem"] },
                { etapa: 4, tipo: "frase", frase: "我在这里 ___", resposta: "吃", opcoes: ["吃", "喝", "跑"] },
                { etapa: 5, tipo: "frase", frase: "面包 (miànbāo)", resposta: "pão", opcoes: ["pão", "água", "suco", "café"] },
                { etapa: 6, tipo: "frase", frase: "我吃面包", resposta: "Eu como pão", opcoes: ["Eu como pão", "Eu bebo água", "Ela come aqui", "Nós comemos"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "你 (nǐ)", resposta: "você", opcoes: ["você", "eu", "nós", "eles"] },
                { etapa: 2, tipo: "frase", frase: "喝 (hē)", resposta: "beber", opcoes: ["beber", "comer", "correr", "dormir"] },
                { etapa: 3, tipo: "frase", frase: "水 (shuǐ)", resposta: "água", opcoes: ["água", "suco", "chá", "café"] },
                { etapa: 4, tipo: "frase", frase: "你喝 ___", resposta: "水", opcoes: ["水", "面包", "肉"] },
                { etapa: 5, tipo: "frase", frase: "和 (hé)", resposta: "e", opcoes: ["e", "com", "sem", "ou"] },
                { etapa: 6, tipo: "frase", frase: "你喝水", resposta: "Você bebe água", opcoes: ["Você bebe água", "Eu como um hambúrguer", "Eles bebem suco", "Nós comemos aqui"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "菜单 (càidān)", resposta: "menu", opcoes: ["menu", "conta", "mesa", "lanche"] },
                { etapa: 2, tipo: "frase", frase: "请 (qǐng)", resposta: "por favor", opcoes: ["por favor", "obrigado", "sim", "não"] },
                { etapa: 3, tipo: "frase", frase: "我们 (wǒmen)", resposta: "nós", opcoes: ["nós", "eu", "você", "eles"] },
                { etapa: 4, tipo: "frase", frase: "我们要 ___", resposta: "菜单", opcoes: ["菜单", "水", "面包"] },
                { etapa: 5, tipo: "frase", frase: "肉 (ròu)", resposta: "carne", opcoes: ["carne", "pão", "água", "suco"] },
                { etapa: 6, tipo: "frase", frase: "我们要菜单，请", resposta: "Nós queremos o menu, por favor", opcoes: ["Nós queremos o menu, por favor", "Eu como pão e carne", "Eles bebem água", "Você come aqui"] },
            ]
        },
    },

    // ==========================================================
    // 7. COREANO (Chave principal: "coreano")
    // ==========================================================
    "coreano": {
        "licao1": {
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "나 (na)", resposta: "eu", opcoes: ["eu", "você", "ele", "ela"] },
                { etapa: 2, tipo: "frase", frase: "먹어요 (meogeoyo)", resposta: "como", opcoes: ["como", "bebo", "corro", "durmo"] },
                { etapa: 3, tipo: "frase", frase: "여기 (yeogi)", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "ontem"] },
                { etapa: 4, tipo: "frase", frase: "나 ___ 먹어요", resposta: "여기", opcoes: ["여기", "밥", "나"] },
                { etapa: 5, tipo: "frase", frase: "빵 (ppang)", resposta: "pão", opcoes: ["pão", "água", "suco", "arroz"] },
                { etapa: 6, tipo: "frase", frase: "나 여기 빵 먹어요", resposta: "Eu como pão aqui", opcoes: ["Eu como pão aqui", "Você bebe água", "Ele come aqui", "Nós comemos"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "너 (neo)", resposta: "você", opcoes: ["você", "eu", "nós", "eles"] },
                { etapa: 2, tipo: "frase", frase: "마셔요 (masyeoyo)", resposta: "bebo", opcoes: ["bebo", "como", "corro", "durmo"] },
                { etapa: 3, tipo: "frase", frase: "물 (mul)", resposta: "água", opcoes: ["água", "suco", "chá", "café"] },
                { etapa: 4, tipo: "frase", frase: "너 물을 ___", resposta: "마셔요", opcoes: ["마셔요", "먹어요", "달려요"] },
                { etapa: 5, tipo: "frase", frase: "커피 (keopi)", resposta: "café", opcoes: ["café", "água", "chá", "suco"] },
                { etapa: 6, tipo: "frase", frase: "너 커피 마셔요", resposta: "Você bebe café", opcoes: ["Você bebe café", "Eu como um hambúrguer", "Eles bebem água", "Nós comemos aqui"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "메뉴 (menyu)", resposta: "menu", opcoes: ["menu", "conta", "mesa", "lanche"] },
                { etapa: 2, tipo: "frase", frase: "주세요 (juseyo)", resposta: "por favor", opcoes: ["por favor", "obrigado", "sim", "não"] },
                { etapa: 3, tipo: "frase", frase: "우리 (uri)", resposta: "nós", opcoes: ["nós", "eu", "você", "eles"] },
                { etapa: 4, tipo: "frase", frase: "메뉴 ___", resposta: "주세요", opcoes: ["주세요", "먹어요", "마셔요"] },
                { etapa: 5, tipo: "frase", frase: "고기 (gogi)", resposta: "carne", opcoes: ["carne", "pão", "água", "suco"] },
                { etapa: 6, tipo: "frase", frase: "우리 메뉴 주세요", resposta: "Nós queremos o menu, por favor", opcoes: ["Nós queremos o menu, por favor", "Eu como pão e carne", "Eles bebem água", "Você come aqui"] },
            ]
        },
    },

    // ==========================================================
    // 8. ALEMÃO (Chave principal: "alemao")
    "alemao": {
        "licao1": {
            proximoNivel: "licao2",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Ich", resposta: "eu", opcoes: ["eu", "você", "ele", "ela"] },
                { etapa: 2, tipo: "frase", frase: "esse", resposta: "como", opcoes: ["como", "bebo", "corro", "durmo"] },
                { etapa: 3, tipo: "frase", frase: "hier", resposta: "aqui", opcoes: ["aqui", "ali", "lá", "ontem"] },
                { etapa: 4, tipo: "frase", frase: "Ich esse ___", resposta: "hier", opcoes: ["hier", "brot", "ich"] },
                { etapa: 5, tipo: "frase", frase: "Das", resposta: "o/a", opcoes: ["o/a", "um/uma", "isto", "aquilo"] },
                { etapa: 6, tipo: "frase", frase: "Ich esse das Brot hier", resposta: "Eu como o pão aqui", opcoes: ["Eu como o pão aqui", "Eu bebo a água", "Ele come aqui", "Nós comemos"] },
            ]
        },
        "licao2": {
            proximoNivel: "licao3",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "Du", resposta: "você", opcoes: ["você", "eu", "nós", "eles"] },
                { etapa: 2, tipo: "frase", frase: "trinkst", resposta: "bebe", opcoes: ["bebe", "come", "corre", "dorme"] },
                { etapa: 3, tipo: "frase", frase: "Wasser", resposta: "água", opcoes: ["água", "suco", "chá", "café"] },
                { etapa: 4, tipo: "frase", frase: "Du trinkst ___ Wasser", resposta: "das", opcoes: ["das", "ein", "einen"] },
                { etapa: 5, tipo: "frase", frase: "Ein", resposta: "um/uma", opcoes: ["um/uma", "o/a", "isto", "aquilo"] },
                { etapa: 6, tipo: "frase", frase: "Du trinkst einen Kaffee", resposta: "Você bebe um café", opcoes: ["Você bebe um café", "Eu como um hambúrguer", "Eles bebem água", "Nós comemos aqui"] },
            ]
        },
        "licao3": {
            proximoNivel: "concluido",
            etapas: [
                { etapa: 1, tipo: "frase", frase: "die Rechnung", resposta: "a conta", opcoes: ["a conta", "o menu", "a mesa", "a comida"] },
                { etapa: 2, tipo: "frase", frase: "mit", resposta: "com", opcoes: ["com", "sem", "e", "ou"] },
                { etapa: 3, tipo: "frase", frase: "Wir", resposta: "nós", opcoes: ["nós", "eu", "você", "eles"] },
                { etapa: 4, tipo: "frase", frase: "Ich will die Rechnung, ___", resposta: "bitte", opcoes: ["bitte", "danke", "ja"] },
                { etapa: 5, tipo: "frase", frase: "Wir essen ___", resposta: "Fleisch", opcoes: ["Fleisch", "Wasser", "Kaffee"] },
                { etapa: 6, tipo: "frase", frase: "Wir essen Fleisch mit Brot", resposta: "Nós comemos carne com pão", opcoes: ["Nós comemos carne com pão", "Eu bebo água", "Eles querem o menu", "Você come maçã"] },
            ]
        },
    }

}; // Fecha todo o conteudo
