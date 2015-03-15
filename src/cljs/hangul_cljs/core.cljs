(ns hangul-cljs.core
    (:require [reagent.core :as reagent :refer [atom]]
              [cljsjs.react :as react]
              [hangul-cljs.dictionary :as dictionary]))

;; -------------------------
;; State

(def guess (atom ""))
(def show-notice (atom false))
(def notice-message (atom ""))
(def generated-card (atom (dictionary/random-card)))

;; -------------------------
;; Functions

(defn hangul-character []
  (let [character @generated-card] (:hangul character)))

(defn reset-card-state []
  (swap! generated-card dictionary/random-card)
  (swap! guess (fn [] "")))

(defn toggle-notice [message]
  (swap! show-notice (fn [] true))
  (swap! notice-message (fn [] message)))

(defn show-success-notice []
  (reset-card-state)
  (toggle-notice "Correct!"))

(defn show-failure-notice []
  (toggle-notice "Incorrect!"))

(defn verify []
  (if (= (:roman @generated-card) @guess)
    (show-success-notice)
    (show-failure-notice)))

;; -------------------------
;; Components

(defn hangul-input []
  [:input {:type "text"
           :value @guess
           :on-change #(reset! guess (-> % .-target .-value))}])

(defn submit-btn []
  [:input {:type "button"
           :value "Check"
           :on-click verify}])

(defn success-notice []
  (if @show-notice
    [:div @notice-message]))

(defn hangul-card []
  [:div.hangul-card
   [:div.hangul-character (hangul-character)]
   [:div.hangul-input (hangul-input) (submit-btn)]])

(defn app []
  [:div
   [success-notice]
   [hangul-card]])

;; -------------------------
;; Initialize app
(defn init! []
  (reagent/render-component [app] (.getElementById js/document "app")))
