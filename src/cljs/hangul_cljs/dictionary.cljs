;; here be dragons
(ns hangul-cljs.dictionary)

(def hangul-cards
  [{ :roman "a"   :hangul "ㅏ" }
   { :roman "eo"  :hangul "ㅓ" }
   { :roman "o"   :hangul "ㅗ" }
   { :roman "u"   :hangul "ㅜ" }
   { :roman "eu"  :hangul "ㅡ" }
   { :roman "i"   :hangul "ㅣ" }
   { :roman "ya"  :hangul "ㅑ" }
   { :roman "yeo" :hangul "ㅕ" }
   { :roman "yo"  :hangul "ㅛ" }
   { :roman "yu"  :hangul "ㅠ" }
   { :roman "ae"  :hangul "ㅐ" }
   { :roman "yae" :hangul "ㅒ" }
   { :roman "e"   :hangul "ㅔ" }
   { :roman "ye"  :hangul "ㅖ" }
   { :roman "ui"  :hangul "ㅢ" }
   { :roman "wa"  :hangul "ㅘ" }
   { :roman "wae" :hangul "ㅙ" }
   { :roman "oe"  :hangul "ㅚ" }
   { :roman "wo"  :hangul "ㅝ" }
   { :roman "we"  :hangul "ㅞ" }
   { :roman "wi"  :hangul "ㅟ" }])

(defn random-card []
  (rand-nth hangul-cards))
