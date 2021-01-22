import { Guide, GuideDetail } from "../../types/guide";

export const mockGuideData: Guide = {
  id: "2021011515550",
  event_id: "15550",
  start_time: "2021-01-15T04:50:00+09:00",
  end_time: "2021-01-15T05:00:00+09:00",
  area: {
    id: "130",
    name: "東京",
  },
  service: {
    id: "g1",
    name: "ＮＨＫ総合１",
    logo_s: {
      url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
      width: "100",
      height: "50",
    },
    logo_m: {
      url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
      width: "200",
      height: "100",
    },
    logo_l: {
      url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
      width: "200",
      height: "200",
    },
  },
  title: "時論公論「緊急事態宣言　休業手当を急げ！」",
  subtitle:
    "長引くコロナ禍。休業手当が受け取れない従業員が続出。企業が立て替える仕組みのため、その余裕がないか忌避したとみられる。新たな支援金も利用が伸びない。どうすれば？",
  content: "【出演】ＮＨＫ解説委員…竹田忠",
  act: "竹田忠",
  genres: ["0006", "0000", "0007"],
};

export const mockGuideDetail: GuideDetail = {
  id: "2021012319870",
  event_id: "19870",
  start_time: "2021-01-23T23:00:00+09:00",
  end_time: "2021-01-23T23:30:00+09:00",
  area: {
    id: "130",
    name: "東京",
  },
  service: {
    id: "g1",
    name: "ＮＨＫ総合１",
    logo_s: {
      url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
      width: "100",
      height: "50",
    },
    logo_m: {
      url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
      width: "200",
      height: "100",
    },
    logo_l: {
      url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
      width: "200",
      height: "200",
    },
  },
  title: "ＳＯＮＧＳ「密着！大泉洋紅白歌合戦ＳＰ」",
  subtitle:
    "ＳＯＮＧＳ責任者・大泉洋が白組司会を務めた去年の第７１回ＮＨＫ紅白歌合戦。ＳＯＮＧＳは大泉に密着。けん玉シーンの舞台裏や大泉が感動した歌唱シーンを一挙お届け！",
  content:
    "ＳＯＮＧＳ責任者・大泉洋が白組司会を務めた去年の紅白歌合戦。ＳＯＮＧＳでは大泉に独占密着！実はヒヤヒヤだったけん玉シーンの舞台裏や、大泉が心を打ち抜かれた感動の歌唱シーンを一挙お届け！放送終了後まさかの展開に大泉タジタジ！？内村光良、二階堂ふみからのメッセージも！出演：あいみょん、石川さゆり、鈴木雅之、Ｓｕｐｅｒｆｌｙ、玉置浩二、氷川きよし、福山雅治、ＭＩＳＩＡ、三山ひろし、ＬｉＳＡ",
  act:
    "【出演】大泉洋，内村光良，二階堂ふみ，あいみょん，石川さゆり，鈴木雅之，Ｓｕｐｅｒｆｌｙ，玉置浩二，氷川きよし，福山雅治，ＭＩＳＩＡ，三山ひろし，ＬｉＳＡ，【語り】戸次重幸",
  genres: ["0400", "0401", "0415"],
  program_logo: {
    url: "//www.nhk.or.jp/prog/img/599/599.png",
    width: "640",
    height: "640",
  },
  program_url: "//nhk.jp/P599",
  hashtags: ["#SONGS"],
};

export const mockGuideListData: Guide[] = [
  {
    id: "2021011515550",
    event_id: "15550",
    start_time: "2021-01-15T04:50:00+09:00",
    end_time: "2021-01-15T05:00:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "時論公論「緊急事態宣言　休業手当を急げ！」",
    subtitle:
      "長引くコロナ禍。休業手当が受け取れない従業員が続出。企業が立て替える仕組みのため、その余裕がないか忌避したとみられる。新たな支援金も利用が伸びない。どうすれば？",
    content: "【出演】ＮＨＫ解説委員…竹田忠",
    act: "【出演】ＮＨＫ解説委員…竹田忠",
    genres: ["0006", "0000", "0007"],
  },
  {
    id: "2021011515551",
    event_id: "15551",
    start_time: "2021-01-15T05:00:00+09:00",
    end_time: "2021-01-15T06:00:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title:
      "ＮＨＫニュース　おはよう日本　緊急事態宣言地域拡大　行動変容どう促す",
    subtitle:
      "▼緊急事態宣言・対象地域拡大　行動変容どう促す▼“入院勧告拒否に刑事罰”学会が反対声明▼ＷＨＯ武漢調査の行方▼コロナ禍で盲導犬連れた人が苦慮▼サウナで町おこし",
    content:
      "▼緊急事態宣言・対象地域拡大　行動変容どう促す　人々にみずから進んで望ましい行動とってもらうには▼“入院勧告拒否に刑事罰”学会が反対声明▼“公演中止で仕事なくなる”文化関係者の深刻な状況▼ＷＨＯ調査チーム　武漢現地調査の行方　詳細調査はできるのか　中国の対応は▼コロナ禍で盲導犬連れた人が苦慮　周囲からの声かけ減り理由なき入店拒否も▼エコパーク登録の清流など地域の魅力生かせ！サウナで町おこしに期待",
    act:
      "【キャスター】塩田慎二，【キャスター】森下絵理香，【気象】佐藤公俊，山神明理",
    genres: ["0000", "0002", "0100"],
  },
  {
    id: "2021011515557",
    event_id: "15557",
    start_time: "2021-01-15T06:00:00+09:00",
    end_time: "2021-01-15T07:00:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title:
      "ＮＨＫニュース　おはよう日本　緊急事態宣言地域拡大　行動変容どう促す",
    subtitle:
      "▼緊急事態宣言・対象地域拡大　行動変容どう促す▼“入院勧告拒否に刑事罰”学会が反対声明▼ＷＨＯ武漢現地調査▼限界集落に暮らす“山奥ニート”月２万円の生活とは",
    content:
      "▼緊急事態宣言・対象地域拡大　行動変容どう促す　人々に進んで望ましい行動とってもらうには▼“入院勧告拒否に刑事罰”学会が反対声明▼ＷＨＯ調査チーム　武漢で詳細調査はできるのか　中国の対応は▼ルノー・スナール会長インタビュー　３社連合の“脱ガソリン”への戦略は▼限界集落に住む“山奥ニート”月２万円で生活　ネットで動画やゲームも堪能…　若者の心を捉える暮らしに迫る▼まちかど情報室「自動でラクラク」",
    act:
      "【キャスター】高瀬耕造，桑子真帆，岩野吉樹，森下絵理香，【気象】佐藤公俊，山神明理，【スポーツ】武本大樹，【おはＢｉｚ】関口博之",
    genres: ["0000", "0002", "0100"],
  },
  {
    id: "2021011515562",
    event_id: "15562",
    start_time: "2021-01-15T07:00:00+09:00",
    end_time: "2021-01-15T07:45:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ＮＨＫニュース　おはよう日本",
    subtitle:
      "【７時台】届いたばかりのニュースを分かりやすくお届け。社会の深層に迫る特集。便利なアイディアを紹介する「まちかど情報室」。スポーツ、気象情報　など",
    content:
      "お出かけ前値の今、知りたい！朝いちばんの最新情報が満載！けさの関心事やとれたてのニュースをわかりやすく生き生きとお伝えします！おでかけ＆お帰りの天気は？１日の天気を３時間ごとにお見せするきめ細かい気象情報！出勤前にチェックしたい最新ニュースを一覧・おさえておきたいポイントをズバリ！注目のスポーツを多角的にたっぷりと！くらしのヒントが満載・まちかど情報室！知りたい情報が一目でわかります！",
    act:
      "【キャスター】高瀬耕造，桑子真帆，岩野吉樹，【気象】佐藤公俊，山神明理，【スポーツ】武本大樹",
    genres: ["0000", "0002", "0100"],
  },
  {
    id: "2021011515563",
    event_id: "15563",
    start_time: "2021-01-15T07:45:00+09:00",
    end_time: "2021-01-15T08:00:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ＮＨＫニュース　おはよう日本（関東甲信越）",
    subtitle:
      "▽大切な人の命を守る　防災のカタログギフト　【キャスター】高瀬耕造，桑子真帆，【気象キャスター】佐藤公俊",
    content: "関東甲信越のニュースと交通・気象情報▽各地のいまを見つめる特集も",
    act: "【キャスター】高瀬耕造，桑子真帆，【気象キャスター】佐藤公俊",
    genres: ["0000", "0009", "0010"],
  },
  {
    id: "2021011515572",
    event_id: "15572",
    start_time: "2021-01-15T10:00:00+09:00",
    end_time: "2021-01-15T10:05:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース・気象情報",
    subtitle: "",
    content: "",
    act: "",
    genres: ["0000", "0001"],
  },
  {
    id: "2021011521339",
    event_id: "21339",
    start_time: "2021-01-15T11:00:00+09:00",
    end_time: "2021-01-15T11:05:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース・気象情報",
    subtitle: "",
    content: "",
    act: "",
    genres: ["0000", "0001"],
  },
  {
    id: "2021011515588",
    event_id: "15588",
    start_time: "2021-01-15T12:00:00+09:00",
    end_time: "2021-01-15T12:15:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース",
    subtitle: "【キャスター】三條雅幸",
    content: "",
    act: "【キャスター】三條雅幸",
    genres: ["0000"],
  },
  {
    id: "2021011515589",
    event_id: "15589",
    start_time: "2021-01-15T12:15:00+09:00",
    end_time: "2021-01-15T12:20:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース（関東）",
    subtitle: "",
    content: "",
    act: "",
    genres: ["0000"],
  },
  {
    id: "2021011515596",
    event_id: "15596",
    start_time: "2021-01-15T13:00:00+09:00",
    end_time: "2021-01-15T13:05:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース",
    subtitle: "",
    content: "",
    act: "",
    genres: ["0000"],
  },
  {
    id: "2021011515597",
    event_id: "15597",
    start_time: "2021-01-15T13:05:00+09:00",
    end_time: "2021-01-15T13:40:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "列島ニュース",
    subtitle:
      "各放送局の正午ニュースを集めて北から南まで全国を網羅▽大阪拠点放送局をキーステーションに全国各地の新型コロナ関連ニュースなどを詳しくダイジェストでお届けします",
    content:
      "北から南まで全国各地の正午ニュースを集め、その地域ならではの情報を発信します▽大阪拠点放送局をキーステーションに、各地の新型コロナウイルス関連ニュースなどをダイジェストでお届けします▽各地の自治体・医療・福祉・教育・働き方など、人々の暮らしへの影響を詳しく▽全国各地の気象予報士のネットワークもいかします",
    act: "",
    genres: ["0000"],
  },
  {
    id: "2021011515599",
    event_id: "15599",
    start_time: "2021-01-15T14:00:00+09:00",
    end_time: "2021-01-15T14:05:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース・気象情報",
    subtitle: "",
    content: "",
    act: "",
    genres: ["0000", "0001"],
  },
  {
    id: "2021011515604",
    event_id: "15604",
    start_time: "2021-01-15T15:00:00+09:00",
    end_time: "2021-01-15T15:15:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース・気象情報",
    subtitle: "",
    content: "",
    act: "",
    genres: ["0000", "0001"],
  },
  {
    id: "2021011515608",
    event_id: "15608",
    start_time: "2021-01-15T18:00:00+09:00",
    end_time: "2021-01-15T18:10:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュース",
    subtitle: "【キャスター】三條雅幸",
    content: "",
    act: "【キャスター】三條雅幸",
    genres: ["0000"],
  },
  {
    id: "2021011515616",
    event_id: "15616",
    start_time: "2021-01-15T19:00:00+09:00",
    end_time: "2021-01-15T19:30:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ＮＨＫニュース７　コロナ初の感染確認から１年　意識・生活はどう変化",
    subtitle:
      "▽宣言から１週間収束見えず▽後遺症若い世代でも▽コロナ禍１年対策は転換点に▽感染防げあす「共通テスト」▽吉川元農相収賄罪で在宅起訴▽北朝鮮異例の軍事パレード",
    content:
      "夜７時、「一歩先へ、一歩深く」　今、このニュースを届けたい　【キャスター】井上裕貴，【サブキャスター】上原光紀，伊藤海彦，【気象キャスター】平野有海",
    act:
      "【キャスター】井上裕貴，【サブキャスター】上原光紀，伊藤海彦，【気象キャスター】平野有海",
    genres: ["0000", "0001", "0100"],
  },
  {
    id: "2021011515621",
    event_id: "15621",
    start_time: "2021-01-15T21:00:00+09:00",
    end_time: "2021-01-15T22:00:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュースウオッチ９▽緊急事態宣言１週間…東京感染　再び２０００人超",
    subtitle:
      "▽新型コロナ・若い世代にも“後遺症”　▽感染症法改正案　“罰則”方針了承　▽“自由の制限”に世論調査では…　▽保育所の疲弊　▽「脱炭素」の衝撃に日本企業は",
    content:
      "▽夜９時　ニュースの焦点は？▽あなたの“わかりたい”にこたえたい▽有馬・和久田両キャスターがテーマを掘り下げて伝えます！▽ニュースの現場にリポーターが直行▽きょうのイチ押しスポーツを速報▽あすの天気　ポイントをやさしく解説",
    act:
      "【キャスター】有馬嘉男，和久田麻由子，【スポーツキャスター】一橋忠之，【気象キャスター】平野有海",
    genres: ["0000", "0001", "0100"],
  },
  {
    id: "2021011515627",
    event_id: "15627",
    start_time: "2021-01-15T23:15:00+09:00",
    end_time: "2021-01-15T23:30:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "ニュースきょう一日　若い世代にもコロナ“後遺症”　けん怠感・脱毛も",
    subtitle:
      "コロナ感染者７０００人超▽１都３県　緊急事態宣言で人出はどう変わったか▽入院勧告拒否などに厳罰　厚生労働省方針▽ＪＲ東海　１日４００人規模で従業員「一時帰休」",
    content:
      "きょう一日がわかる、おやすみ前の１５分。仕事や家事で忙しかったあなたに。ポイントをわかりやすく。あしたにつながる、ささやかだけど役に立つ情報をまとめてお届け。　【キャスター】井上あさひ，【気象キャスター】平井信行",
    act: "【キャスター】井上あさひ，【気象キャスター】平井信行",
    genres: ["0000"],
  },
  {
    id: "2021011515628",
    event_id: "15628",
    start_time: "2021-01-15T23:30:00+09:00",
    end_time: "2021-01-15T23:40:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title: "時論公論「感染対策を万全に！　あすから大学入学共通テスト」",
    subtitle:
      "センター試験に代わる「共通テスト」があすから始まる。緊急事態宣言中だが、試験会場の感染対策を徹底したうえで実施される。受験生の安全安心は確保できるのか？課題は？",
    content: "【出演】ＮＨＫ解説委員…二宮徹",
    act: "【出演】ＮＨＫ解説委員…二宮徹",
    genres: ["0006", "0000", "0007"],
  },
  {
    id: "2021011515976",
    event_id: "15976",
    start_time: "2021-01-16T02:00:00+09:00",
    end_time: "2021-01-16T02:30:00+09:00",
    area: {
      id: "130",
      name: "東京",
    },
    service: {
      id: "g1",
      name: "ＮＨＫ総合１",
      logo_s: {
        url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
        width: "100",
        height: "50",
      },
      logo_m: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
        width: "200",
        height: "100",
      },
      logo_l: {
        url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
        width: "200",
        height: "200",
      },
    },
    title:
      "クローズアップ現代＋選▽感染爆発抑えるカギ　変異株はワクチンは　最新知見に注目",
    subtitle:
      "変異株・どうやって調べている？日本の状況は？感染力は？最新情報▽飲食店の空気の流れはどうなっている？実証実験▽感染者急増の英米・ワクチン接種に思わぬカベが",
    content:
      "西浦博教授（京都大学）が緊急事態宣言を受けてシミュレーション・感染者数を十分減少させるには何をどこまで行うべき？人と人の接触をどこまで減らさないとダメ？いつ十分に減少？一人一人がどんな行動をすべきか▽感染爆発が起きるとワクチン接種がスムーズに進められなくなる懸念が…「この先」のためにも「いま」感染を徹底的に抑え込むことが重要という指摘が",
    act: "【キャスター】武田真一，【ゲスト】東京医科大学　教授…濱田篤郎",
    genres: ["0002", "0800", "0000"],
  },
];
