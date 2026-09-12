// 堅守協定：盟約 発動閾値データ
// このファイルをテキストエディタで直接編集してください。
// キーは operators_data.js 内の meiyaku[].name と一致させること。
// activate: 発動に必要な人数
// max: 「最大」とみなす人数（ゲーム内で明確な上限がない盟約は、実用上の目安値を手打ち）
const MEIYAKU_THRESHOLDS = {
  // ── 核心盟約 ──
  "炎":         { activate: 3, max: 9 },
  "サルゴン":    { activate: 3, max: 6 },
  "ヴィクトリア": { activate: 3, max: 6 },
  "イェラグ":    { activate: 3, max: 6 },
  "ラテラーノ":  { activate: 3, max: 6 },
  "エーギル":    { activate: 3, max: 5 },
  "シラクーザ":  { activate: 3, max: 6 },
  "カジミエーシュ": { activate: 3, max: 6 },

  // ── 追加盟約 ──
  "精密":   { activate: 2, max: 3 },
  "俊敏":   { activate: 2, max: 2 },
  "器用":   { activate: 2, max: 2 },
  "秘術":   { activate: 2, max: 3 },
  "堅守":   { activate: 2, max: 3 },
  "助力":   { activate: 2, max: 3 },
  "先見":   { activate: 2, max: 2 },
  "奇跡":   { activate: 2, max: 2 },
  "投資家": { activate: 3, max: 3 },
  "強襲":   { activate: 2, max: 2 },
  "不屈":   { activate: 2, max: 3 },
  "調和":   { activate: 1, max: 1 },
  "共同防衛": { activate: 2, max: 2 },
  "孤高":   { activate: 1, max: 1, exact: true },
  "秘技":   { activate: 2, max: 2 },
};

// operators_data.js側の表記ゆれを吸収するためのエイリアス
const MEIYAKU_NAME_ALIASES = {
  "共同防衛陣営": "共同防衛",
};

function getMeiyakuThreshold(name) {
  const key = MEIYAKU_NAME_ALIASES[name] || name;
  return MEIYAKU_THRESHOLDS[key] || null;
}

// 盟約名 → アイコン画像ファイル名(meiyaku_icon/フォルダ内、正方形png)
// 「秘技」は対応アイコンなし(未使用)
const MEIYAKU_ICON_FILES = {
  // ── 核心盟約 ──
  "炎":           "icon_meiyaku_Yan.png",
  "サルゴン":      "icon_meiyaku_Sargon.png",
  "ヴィクトリア":   "icon_meiyaku_Victoria.png",
  "イェラグ":      "icon_meiyaku_Kjerag.png",
  "ラテラーノ":    "icon_meiyaku_Laterano.png",
  "エーギル":      "icon_meiyaku_AEgir.png",
  "シラクーザ":    "icon_meiyaku_Siracusa.png",
  "カジミエーシュ": "icon_meiyaku_Kazimierz.png",

  // ── 追加盟約 ──
  "調和":     "icon_meiyaku_chowa.png",
  "秘術":     "icon_meiyaku_hijutsu.png",
  "不屈":     "icon_meiyaku_hukutsu.png",
  "助力":     "icon_meiyaku_joryoku.png",
  "堅守":     "icon_meiyaku_kenshu.png",
  "奇跡":     "icon_meiyaku_kiseki.png",
  "器用":     "icon_meiyaku_kiyo.png",
  "孤高":     "icon_meiyaku_koko.png",
  "共同防衛":  "icon_meiyaku_kyodo.png",
  "強襲":     "icon_meiyaku_kyoshu.png",
  "精密":     "icon_meiyaku_seimitsu.png",
  "先見":     "icon_meiyaku_senken.png",
  "俊敏":     "icon_meiyaku_shunbin.png",
  "投資家":   "icon_meiyaku_toshika.png",
};

function getMeiyakuIconPath(name) {
  const key = MEIYAKU_NAME_ALIASES[name] || name;
  const file = MEIYAKU_ICON_FILES[key];
  return file ? `meiyaku_icon/${file}` : null;
}
