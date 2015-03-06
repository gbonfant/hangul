// Compiled by ClojureScript 0.0-2913 {}
goog.provide('hangul_cljs.core');
goog.require('cljs.core');
goog.require('hangul_cljs.dictionary');
goog.require('reagent.core');
hangul_cljs.core.guess = reagent.core.atom.call(null,"");
hangul_cljs.core.generated_character = (function (){var hangul = hangul_cljs.dictionary.random_card.call(null);
return hangul;
})();
hangul_cljs.core.hangul_character = (function hangul_character(){
var character = hangul_cljs.core.generated_character;
return new cljs.core.Keyword(null,"hangul","hangul",1557913044).cljs$core$IFn$_invoke$arity$1(character);
});
hangul_cljs.core.hangul_input = (function hangul_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hangul_cljs.core.guess),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23361_SHARP_){
return cljs.core.reset_BANG_.call(null,hangul_cljs.core.guess,p1__23361_SHARP_.target.value);
})], null)], null);
});
hangul_cljs.core.verify = (function verify(){
return console.log(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"roman","roman",-360862900).cljs$core$IFn$_invoke$arity$1(hangul_cljs.core.generated_character),cljs.core.deref.call(null,hangul_cljs.core.guess)));
});
hangul_cljs.core.submit_btn = (function submit_btn(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Check",new cljs.core.Keyword(null,"on-click","on-click",1632826543),hangul_cljs.core.verify], null)], null);
});
hangul_cljs.core.hangul_card = (function hangul_card(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hangul-card","div.hangul-card",-1715257964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hangul-character","div.hangul-character",1867471231),hangul_cljs.core.hangul_character.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hangul-input","div.hangul-input",635851419),hangul_cljs.core.hangul_input.call(null),hangul_cljs.core.submit_btn.call(null)], null)], null);
});
hangul_cljs.core.init_BANG_ = (function init_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangul_cljs.core.hangul_card], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map