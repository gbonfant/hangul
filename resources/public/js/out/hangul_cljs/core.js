// Compiled by ClojureScript 0.0-2913 {}
goog.provide('hangul_cljs.core');
goog.require('cljs.core');
goog.require('hangul_cljs.dictionary');
goog.require('reagent.core');
hangul_cljs.core.guess = reagent.core.atom.call(null,"");
hangul_cljs.core.show_notice = reagent.core.atom.call(null,false);
hangul_cljs.core.notice_message = reagent.core.atom.call(null,"");
hangul_cljs.core.generated_card = reagent.core.atom.call(null,hangul_cljs.dictionary.random_card.call(null));
hangul_cljs.core.hangul_character = (function hangul_character(){
var character = cljs.core.deref.call(null,hangul_cljs.core.generated_card);
return new cljs.core.Keyword(null,"hangul","hangul",1557913044).cljs$core$IFn$_invoke$arity$1(character);
});
hangul_cljs.core.reset_card_state = (function reset_card_state(){
cljs.core.swap_BANG_.call(null,hangul_cljs.core.generated_card,hangul_cljs.dictionary.random_card);

return cljs.core.swap_BANG_.call(null,hangul_cljs.core.guess,(function (){
return "";
}));
});
hangul_cljs.core.toggle_notice = (function toggle_notice(message){
cljs.core.swap_BANG_.call(null,hangul_cljs.core.show_notice,(function (){
return true;
}));

return cljs.core.swap_BANG_.call(null,hangul_cljs.core.notice_message,(function (){
return message;
}));
});
hangul_cljs.core.show_success_notice = (function show_success_notice(){
hangul_cljs.core.reset_card_state.call(null);

return hangul_cljs.core.toggle_notice.call(null,"Correct!");
});
hangul_cljs.core.show_failure_notice = (function show_failure_notice(){
return hangul_cljs.core.toggle_notice.call(null,"Incorrect!");
});
hangul_cljs.core.verify = (function verify(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"roman","roman",-360862900).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hangul_cljs.core.generated_card)),cljs.core.deref.call(null,hangul_cljs.core.guess))){
return hangul_cljs.core.show_success_notice.call(null);
} else {
return hangul_cljs.core.show_failure_notice.call(null);
}
});
hangul_cljs.core.hangul_input = (function hangul_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hangul_cljs.core.guess),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23038_SHARP_){
return cljs.core.reset_BANG_.call(null,hangul_cljs.core.guess,p1__23038_SHARP_.target.value);
})], null)], null);
});
hangul_cljs.core.submit_btn = (function submit_btn(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Check",new cljs.core.Keyword(null,"on-click","on-click",1632826543),hangul_cljs.core.verify], null)], null);
});
hangul_cljs.core.success_notice = (function success_notice(){
if(cljs.core.truth_(cljs.core.deref.call(null,hangul_cljs.core.show_notice))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,hangul_cljs.core.notice_message)], null);
} else {
return null;
}
});
hangul_cljs.core.hangul_card = (function hangul_card(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hangul-card","div.hangul-card",-1715257964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hangul-character","div.hangul-character",1867471231),hangul_cljs.core.hangul_character.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hangul-input","div.hangul-input",635851419),hangul_cljs.core.hangul_input.call(null),hangul_cljs.core.submit_btn.call(null)], null)], null);
});
hangul_cljs.core.app = (function app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangul_cljs.core.success_notice], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangul_cljs.core.hangul_card], null)], null);
});
hangul_cljs.core.init_BANG_ = (function init_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangul_cljs.core.app], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map