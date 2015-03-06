(ns hangul-cljs.core
    (:require [reagent.core :as reagent :refer [atom]]
              [cljsjs.react :as react]
              [hangul-cljs.dictionary :as dictionary]))

;; -------------------------
;; Views

(def guess (atom ""))
(def generated-character
  (let [hangul (dictionary/random-card)] hangul))

(defn hangul-character []
  (let [character generated-character] (:hangul character)))

(defn hangul-input []
  [:input {:type "text"
           :value @guess
           :on-change #(reset! guess (-> % .-target .-value))}])

(defn verify []
  (.log js/console (= (:roman generated-character) @guess)))


(defn submit-btn []
  [:input {:type "button"
           :value "Check"
           :on-click verify}])


(defn hangul-card []
  [:div.hangul-card
   [:div.hangul-character (hangul-character)]
   [:div.hangul-input (hangul-input) (submit-btn)]])


;; -------------------------
;; Initialize app
(defn init! []
  (reagent/render-component [hangul-card] (.getElementById js/document "app")))
