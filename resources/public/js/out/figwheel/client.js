// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29391__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29392__i = 0, G__29392__a = new Array(arguments.length -  0);
while (G__29392__i < G__29392__a.length) {G__29392__a[G__29392__i] = arguments[G__29392__i + 0]; ++G__29392__i;}
  args = new cljs.core.IndexedSeq(G__29392__a,0);
} 
return G__29391__delegate.call(this,args);};
G__29391.cljs$lang$maxFixedArity = 0;
G__29391.cljs$lang$applyTo = (function (arglist__29393){
var args = cljs.core.seq(arglist__29393);
return G__29391__delegate(args);
});
G__29391.cljs$core$IFn$_invoke$arity$variadic = G__29391__delegate;
return G__29391;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__29394){
var map__29396 = p__29394;
var map__29396__$1 = ((cljs.core.seq_QMARK_.call(null,map__29396))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);
var class$ = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__15658__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__15646__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__15646__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__15646__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18529__auto___29525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___29525,ch){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___29525,ch){
return (function (state_29499){
var state_val_29500 = (state_29499[(1)]);
if((state_val_29500 === (7))){
var inst_29495 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29501_29526 = state_29499__$1;
(statearr_29501_29526[(2)] = inst_29495);

(statearr_29501_29526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (1))){
var state_29499__$1 = state_29499;
var statearr_29502_29527 = state_29499__$1;
(statearr_29502_29527[(2)] = null);

(statearr_29502_29527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (4))){
var inst_29463 = (state_29499[(7)]);
var inst_29463__$1 = (state_29499[(2)]);
var state_29499__$1 = (function (){var statearr_29503 = state_29499;
(statearr_29503[(7)] = inst_29463__$1);

return statearr_29503;
})();
if(cljs.core.truth_(inst_29463__$1)){
var statearr_29504_29528 = state_29499__$1;
(statearr_29504_29528[(1)] = (5));

} else {
var statearr_29505_29529 = state_29499__$1;
(statearr_29505_29529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (13))){
var state_29499__$1 = state_29499;
var statearr_29506_29530 = state_29499__$1;
(statearr_29506_29530[(2)] = null);

(statearr_29506_29530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (6))){
var state_29499__$1 = state_29499;
var statearr_29507_29531 = state_29499__$1;
(statearr_29507_29531[(2)] = null);

(statearr_29507_29531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (3))){
var inst_29497 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29499__$1,inst_29497);
} else {
if((state_val_29500 === (12))){
var inst_29470 = (state_29499[(8)]);
var inst_29483 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29470);
var inst_29484 = cljs.core.first.call(null,inst_29483);
var inst_29485 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29484);
var inst_29486 = console.warn("Figwheel: Not loading code with warnings - ",inst_29485);
var state_29499__$1 = state_29499;
var statearr_29508_29532 = state_29499__$1;
(statearr_29508_29532[(2)] = inst_29486);

(statearr_29508_29532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (2))){
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29499__$1,(4),ch);
} else {
if((state_val_29500 === (11))){
var inst_29479 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29509_29533 = state_29499__$1;
(statearr_29509_29533[(2)] = inst_29479);

(statearr_29509_29533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (9))){
var inst_29469 = (state_29499[(9)]);
var inst_29481 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29469,opts);
var state_29499__$1 = state_29499;
if(inst_29481){
var statearr_29510_29534 = state_29499__$1;
(statearr_29510_29534[(1)] = (12));

} else {
var statearr_29511_29535 = state_29499__$1;
(statearr_29511_29535[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (5))){
var inst_29469 = (state_29499[(9)]);
var inst_29463 = (state_29499[(7)]);
var inst_29465 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29466 = (new cljs.core.PersistentArrayMap(null,2,inst_29465,null));
var inst_29467 = (new cljs.core.PersistentHashSet(null,inst_29466,null));
var inst_29468 = figwheel.client.focus_msgs.call(null,inst_29467,inst_29463);
var inst_29469__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29468);
var inst_29470 = cljs.core.first.call(null,inst_29468);
var inst_29471 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29469__$1,opts);
var state_29499__$1 = (function (){var statearr_29512 = state_29499;
(statearr_29512[(9)] = inst_29469__$1);

(statearr_29512[(8)] = inst_29470);

return statearr_29512;
})();
if(cljs.core.truth_(inst_29471)){
var statearr_29513_29536 = state_29499__$1;
(statearr_29513_29536[(1)] = (8));

} else {
var statearr_29514_29537 = state_29499__$1;
(statearr_29514_29537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (14))){
var inst_29489 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29515_29538 = state_29499__$1;
(statearr_29515_29538[(2)] = inst_29489);

(statearr_29515_29538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (10))){
var inst_29491 = (state_29499[(2)]);
var state_29499__$1 = (function (){var statearr_29516 = state_29499;
(statearr_29516[(10)] = inst_29491);

return statearr_29516;
})();
var statearr_29517_29539 = state_29499__$1;
(statearr_29517_29539[(2)] = null);

(statearr_29517_29539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (8))){
var inst_29470 = (state_29499[(8)]);
var inst_29473 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29474 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29470);
var inst_29475 = cljs.core.async.timeout.call(null,(1000));
var inst_29476 = [inst_29474,inst_29475];
var inst_29477 = (new cljs.core.PersistentVector(null,2,(5),inst_29473,inst_29476,null));
var state_29499__$1 = state_29499;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29499__$1,(11),inst_29477);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18529__auto___29525,ch))
;
return ((function (switch__18473__auto__,c__18529__auto___29525,ch){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_29521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29521[(0)] = state_machine__18474__auto__);

(statearr_29521[(1)] = (1));

return statearr_29521;
});
var state_machine__18474__auto____1 = (function (state_29499){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_29499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e29522){if((e29522 instanceof Object)){
var ex__18477__auto__ = e29522;
var statearr_29523_29540 = state_29499;
(statearr_29523_29540[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29541 = state_29499;
state_29499 = G__29541;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_29499){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_29499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___29525,ch))
})();
var state__18531__auto__ = (function (){var statearr_29524 = f__18530__auto__.call(null);
(statearr_29524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___29525);

return statearr_29524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___29525,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29542_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29542_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29551 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29544_SHARP_,p2__29543_SHARP_){
return [cljs.core.str(p2__29543_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29551){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29549 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29550 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29549,_STAR_print_newline_STAR_29550,base_path_29551){
return (function() { 
var G__29552__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29553__i = 0, G__29553__a = new Array(arguments.length -  0);
while (G__29553__i < G__29553__a.length) {G__29553__a[G__29553__i] = arguments[G__29553__i + 0]; ++G__29553__i;}
  args = new cljs.core.IndexedSeq(G__29553__a,0);
} 
return G__29552__delegate.call(this,args);};
G__29552.cljs$lang$maxFixedArity = 0;
G__29552.cljs$lang$applyTo = (function (arglist__29554){
var args = cljs.core.seq(arglist__29554);
return G__29552__delegate(args);
});
G__29552.cljs$core$IFn$_invoke$arity$variadic = G__29552__delegate;
return G__29552;
})()
;})(_STAR_print_fn_STAR_29549,_STAR_print_newline_STAR_29550,base_path_29551))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29550;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29549;
}}catch (e29548){if((e29548 instanceof Error)){
var e = e29548;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29551], null));
} else {
var e = e29548;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29551))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__29555){
var map__29560 = p__29555;
var map__29560__$1 = ((cljs.core.seq_QMARK_.call(null,map__29560))?cljs.core.apply.call(null,cljs.core.hash_map,map__29560):map__29560);
var opts = map__29560__$1;
var build_id = cljs.core.get.call(null,map__29560__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29560,map__29560__$1,opts,build_id){
return (function (p__29561){
var vec__29562 = p__29561;
var map__29563 = cljs.core.nth.call(null,vec__29562,(0),null);
var map__29563__$1 = ((cljs.core.seq_QMARK_.call(null,map__29563))?cljs.core.apply.call(null,cljs.core.hash_map,map__29563):map__29563);
var msg = map__29563__$1;
var msg_name = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29562,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29562,map__29563,map__29563__$1,msg,msg_name,_,map__29560,map__29560__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29562,map__29563,map__29563__$1,msg,msg_name,_,map__29560,map__29560__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29560,map__29560__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__29567){
var vec__29568 = p__29567;
var map__29569 = cljs.core.nth.call(null,vec__29568,(0),null);
var map__29569__$1 = ((cljs.core.seq_QMARK_.call(null,map__29569))?cljs.core.apply.call(null,cljs.core.hash_map,map__29569):map__29569);
var msg = map__29569__$1;
var msg_name = cljs.core.get.call(null,map__29569__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29568,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__29570){
var map__29578 = p__29570;
var map__29578__$1 = ((cljs.core.seq_QMARK_.call(null,map__29578))?cljs.core.apply.call(null,cljs.core.hash_map,map__29578):map__29578);
var on_compile_fail = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29578,map__29578__$1,on_compile_fail,on_compile_warning){
return (function (p__29579){
var vec__29580 = p__29579;
var map__29581 = cljs.core.nth.call(null,vec__29580,(0),null);
var map__29581__$1 = ((cljs.core.seq_QMARK_.call(null,map__29581))?cljs.core.apply.call(null,cljs.core.hash_map,map__29581):map__29581);
var msg = map__29581__$1;
var msg_name = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29580,(1));
var pred__29582 = cljs.core._EQ_;
var expr__29583 = msg_name;
if(cljs.core.truth_(pred__29582.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29583))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29582.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29583))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29578,map__29578__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__,msg_hist,msg_names,msg){
return (function (state_29780){
var state_val_29781 = (state_29780[(1)]);
if((state_val_29781 === (7))){
var inst_29716 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29782_29823 = state_29780__$1;
(statearr_29782_29823[(2)] = inst_29716);

(statearr_29782_29823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (20))){
var inst_29742 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29780__$1 = state_29780;
if(inst_29742){
var statearr_29783_29824 = state_29780__$1;
(statearr_29783_29824[(1)] = (22));

} else {
var statearr_29784_29825 = state_29780__$1;
(statearr_29784_29825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (27))){
var inst_29754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29755 = figwheel.client.heads_up.display_warning.call(null,inst_29754);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(30),inst_29755);
} else {
if((state_val_29781 === (1))){
var inst_29704 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29780__$1 = state_29780;
if(cljs.core.truth_(inst_29704)){
var statearr_29785_29826 = state_29780__$1;
(statearr_29785_29826[(1)] = (2));

} else {
var statearr_29786_29827 = state_29780__$1;
(statearr_29786_29827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (24))){
var inst_29770 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29787_29828 = state_29780__$1;
(statearr_29787_29828[(2)] = inst_29770);

(statearr_29787_29828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (4))){
var inst_29778 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29780__$1,inst_29778);
} else {
if((state_val_29781 === (15))){
var inst_29731 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29732 = figwheel.client.format_messages.call(null,inst_29731);
var inst_29733 = figwheel.client.heads_up.display_error.call(null,inst_29732);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(18),inst_29733);
} else {
if((state_val_29781 === (21))){
var inst_29772 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29788_29829 = state_29780__$1;
(statearr_29788_29829[(2)] = inst_29772);

(statearr_29788_29829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (31))){
var inst_29761 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(34),inst_29761);
} else {
if((state_val_29781 === (32))){
var state_29780__$1 = state_29780;
var statearr_29789_29830 = state_29780__$1;
(statearr_29789_29830[(2)] = null);

(statearr_29789_29830[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (33))){
var inst_29766 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29790_29831 = state_29780__$1;
(statearr_29790_29831[(2)] = inst_29766);

(statearr_29790_29831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (13))){
var inst_29722 = (state_29780[(2)]);
var inst_29723 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29724 = figwheel.client.format_messages.call(null,inst_29723);
var inst_29725 = figwheel.client.heads_up.display_error.call(null,inst_29724);
var state_29780__$1 = (function (){var statearr_29791 = state_29780;
(statearr_29791[(7)] = inst_29722);

return statearr_29791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(14),inst_29725);
} else {
if((state_val_29781 === (22))){
var inst_29744 = figwheel.client.heads_up.clear.call(null);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(25),inst_29744);
} else {
if((state_val_29781 === (29))){
var inst_29768 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29792_29832 = state_29780__$1;
(statearr_29792_29832[(2)] = inst_29768);

(statearr_29792_29832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (6))){
var inst_29712 = figwheel.client.heads_up.clear.call(null);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(9),inst_29712);
} else {
if((state_val_29781 === (28))){
var inst_29759 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29780__$1 = state_29780;
if(inst_29759){
var statearr_29793_29833 = state_29780__$1;
(statearr_29793_29833[(1)] = (31));

} else {
var statearr_29794_29834 = state_29780__$1;
(statearr_29794_29834[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (25))){
var inst_29746 = (state_29780[(2)]);
var inst_29747 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29748 = figwheel.client.heads_up.display_warning.call(null,inst_29747);
var state_29780__$1 = (function (){var statearr_29795 = state_29780;
(statearr_29795[(8)] = inst_29746);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(26),inst_29748);
} else {
if((state_val_29781 === (34))){
var inst_29763 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29796_29835 = state_29780__$1;
(statearr_29796_29835[(2)] = inst_29763);

(statearr_29796_29835[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (17))){
var inst_29774 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29797_29836 = state_29780__$1;
(statearr_29797_29836[(2)] = inst_29774);

(statearr_29797_29836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (3))){
var inst_29718 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29780__$1 = state_29780;
if(inst_29718){
var statearr_29798_29837 = state_29780__$1;
(statearr_29798_29837[(1)] = (10));

} else {
var statearr_29799_29838 = state_29780__$1;
(statearr_29799_29838[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (12))){
var inst_29776 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29800_29839 = state_29780__$1;
(statearr_29800_29839[(2)] = inst_29776);

(statearr_29800_29839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (2))){
var inst_29706 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29780__$1 = state_29780;
if(cljs.core.truth_(inst_29706)){
var statearr_29801_29840 = state_29780__$1;
(statearr_29801_29840[(1)] = (5));

} else {
var statearr_29802_29841 = state_29780__$1;
(statearr_29802_29841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (23))){
var inst_29752 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29780__$1 = state_29780;
if(inst_29752){
var statearr_29803_29842 = state_29780__$1;
(statearr_29803_29842[(1)] = (27));

} else {
var statearr_29804_29843 = state_29780__$1;
(statearr_29804_29843[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (19))){
var inst_29739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29740 = figwheel.client.heads_up.append_message.call(null,inst_29739);
var state_29780__$1 = state_29780;
var statearr_29805_29844 = state_29780__$1;
(statearr_29805_29844[(2)] = inst_29740);

(statearr_29805_29844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (11))){
var inst_29729 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29780__$1 = state_29780;
if(inst_29729){
var statearr_29806_29845 = state_29780__$1;
(statearr_29806_29845[(1)] = (15));

} else {
var statearr_29807_29846 = state_29780__$1;
(statearr_29807_29846[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (9))){
var inst_29714 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29808_29847 = state_29780__$1;
(statearr_29808_29847[(2)] = inst_29714);

(statearr_29808_29847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (5))){
var inst_29708 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(8),inst_29708);
} else {
if((state_val_29781 === (14))){
var inst_29727 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29809_29848 = state_29780__$1;
(statearr_29809_29848[(2)] = inst_29727);

(statearr_29809_29848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (26))){
var inst_29750 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29810_29849 = state_29780__$1;
(statearr_29810_29849[(2)] = inst_29750);

(statearr_29810_29849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (16))){
var inst_29737 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29780__$1 = state_29780;
if(inst_29737){
var statearr_29811_29850 = state_29780__$1;
(statearr_29811_29850[(1)] = (19));

} else {
var statearr_29812_29851 = state_29780__$1;
(statearr_29812_29851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (30))){
var inst_29757 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29813_29852 = state_29780__$1;
(statearr_29813_29852[(2)] = inst_29757);

(statearr_29813_29852[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (10))){
var inst_29720 = figwheel.client.heads_up.clear.call(null);
var state_29780__$1 = state_29780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29780__$1,(13),inst_29720);
} else {
if((state_val_29781 === (18))){
var inst_29735 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29814_29853 = state_29780__$1;
(statearr_29814_29853[(2)] = inst_29735);

(statearr_29814_29853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29781 === (8))){
var inst_29710 = (state_29780[(2)]);
var state_29780__$1 = state_29780;
var statearr_29815_29854 = state_29780__$1;
(statearr_29815_29854[(2)] = inst_29710);

(statearr_29815_29854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18529__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18473__auto__,c__18529__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_29819 = [null,null,null,null,null,null,null,null,null];
(statearr_29819[(0)] = state_machine__18474__auto__);

(statearr_29819[(1)] = (1));

return statearr_29819;
});
var state_machine__18474__auto____1 = (function (state_29780){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_29780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e29820){if((e29820 instanceof Object)){
var ex__18477__auto__ = e29820;
var statearr_29821_29855 = state_29780;
(statearr_29821_29855[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29856 = state_29780;
state_29780 = G__29856;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_29780){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_29780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__,msg_hist,msg_names,msg))
})();
var state__18531__auto__ = (function (){var statearr_29822 = f__18530__auto__.call(null);
(statearr_29822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_29822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__,msg_hist,msg_names,msg))
);

return c__18529__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18529__auto___29919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___29919,ch){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___29919,ch){
return (function (state_29902){
var state_val_29903 = (state_29902[(1)]);
if((state_val_29903 === (8))){
var inst_29894 = (state_29902[(2)]);
var state_29902__$1 = (function (){var statearr_29904 = state_29902;
(statearr_29904[(7)] = inst_29894);

return statearr_29904;
})();
var statearr_29905_29920 = state_29902__$1;
(statearr_29905_29920[(2)] = null);

(statearr_29905_29920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (7))){
var inst_29898 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29906_29921 = state_29902__$1;
(statearr_29906_29921[(2)] = inst_29898);

(statearr_29906_29921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (6))){
var state_29902__$1 = state_29902;
var statearr_29907_29922 = state_29902__$1;
(statearr_29907_29922[(2)] = null);

(statearr_29907_29922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (5))){
var inst_29890 = (state_29902[(8)]);
var inst_29892 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29890);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29902__$1,(8),inst_29892);
} else {
if((state_val_29903 === (4))){
var inst_29890 = (state_29902[(8)]);
var inst_29890__$1 = (state_29902[(2)]);
var state_29902__$1 = (function (){var statearr_29908 = state_29902;
(statearr_29908[(8)] = inst_29890__$1);

return statearr_29908;
})();
if(cljs.core.truth_(inst_29890__$1)){
var statearr_29909_29923 = state_29902__$1;
(statearr_29909_29923[(1)] = (5));

} else {
var statearr_29910_29924 = state_29902__$1;
(statearr_29910_29924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (3))){
var inst_29900 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29902__$1,inst_29900);
} else {
if((state_val_29903 === (2))){
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29902__$1,(4),ch);
} else {
if((state_val_29903 === (1))){
var state_29902__$1 = state_29902;
var statearr_29911_29925 = state_29902__$1;
(statearr_29911_29925[(2)] = null);

(statearr_29911_29925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18529__auto___29919,ch))
;
return ((function (switch__18473__auto__,c__18529__auto___29919,ch){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_29915 = [null,null,null,null,null,null,null,null,null];
(statearr_29915[(0)] = state_machine__18474__auto__);

(statearr_29915[(1)] = (1));

return statearr_29915;
});
var state_machine__18474__auto____1 = (function (state_29902){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_29902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e29916){if((e29916 instanceof Object)){
var ex__18477__auto__ = e29916;
var statearr_29917_29926 = state_29902;
(statearr_29917_29926[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29927 = state_29902;
state_29902 = G__29927;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_29902){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_29902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___29919,ch))
})();
var state__18531__auto__ = (function (){var statearr_29918 = f__18530__auto__.call(null);
(statearr_29918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___29919);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___29919,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__){
return (function (state_29948){
var state_val_29949 = (state_29948[(1)]);
if((state_val_29949 === (2))){
var inst_29945 = (state_29948[(2)]);
var inst_29946 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29948__$1 = (function (){var statearr_29950 = state_29948;
(statearr_29950[(7)] = inst_29945);

return statearr_29950;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29948__$1,inst_29946);
} else {
if((state_val_29949 === (1))){
var inst_29943 = cljs.core.async.timeout.call(null,(3000));
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29948__$1,(2),inst_29943);
} else {
return null;
}
}
});})(c__18529__auto__))
;
return ((function (switch__18473__auto__,c__18529__auto__){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_29954 = [null,null,null,null,null,null,null,null];
(statearr_29954[(0)] = state_machine__18474__auto__);

(statearr_29954[(1)] = (1));

return statearr_29954;
});
var state_machine__18474__auto____1 = (function (state_29948){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_29948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e29955){if((e29955 instanceof Object)){
var ex__18477__auto__ = e29955;
var statearr_29956_29958 = state_29948;
(statearr_29956_29958[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29959 = state_29948;
state_29948 = G__29959;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_29948){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_29948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__))
})();
var state__18531__auto__ = (function (){var statearr_29957 = f__18530__auto__.call(null);
(statearr_29957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_29957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__))
);

return c__18529__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__15646__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__15646__auto__)){
return ("CustomEvent" in window);
} else {
return and__15646__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj29963 = {"detail":url};
return obj29963;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__29964){
var map__29970 = p__29964;
var map__29970__$1 = ((cljs.core.seq_QMARK_.call(null,map__29970))?cljs.core.apply.call(null,cljs.core.hash_map,map__29970):map__29970);
var ed = map__29970__$1;
var exception_data = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29971_29975 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29972_29976 = null;
var count__29973_29977 = (0);
var i__29974_29978 = (0);
while(true){
if((i__29974_29978 < count__29973_29977)){
var msg_29979 = cljs.core._nth.call(null,chunk__29972_29976,i__29974_29978);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29979);

var G__29980 = seq__29971_29975;
var G__29981 = chunk__29972_29976;
var G__29982 = count__29973_29977;
var G__29983 = (i__29974_29978 + (1));
seq__29971_29975 = G__29980;
chunk__29972_29976 = G__29981;
count__29973_29977 = G__29982;
i__29974_29978 = G__29983;
continue;
} else {
var temp__4126__auto___29984 = cljs.core.seq.call(null,seq__29971_29975);
if(temp__4126__auto___29984){
var seq__29971_29985__$1 = temp__4126__auto___29984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29971_29985__$1)){
var c__16445__auto___29986 = cljs.core.chunk_first.call(null,seq__29971_29985__$1);
var G__29987 = cljs.core.chunk_rest.call(null,seq__29971_29985__$1);
var G__29988 = c__16445__auto___29986;
var G__29989 = cljs.core.count.call(null,c__16445__auto___29986);
var G__29990 = (0);
seq__29971_29975 = G__29987;
chunk__29972_29976 = G__29988;
count__29973_29977 = G__29989;
i__29974_29978 = G__29990;
continue;
} else {
var msg_29991 = cljs.core.first.call(null,seq__29971_29985__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29991);

var G__29992 = cljs.core.next.call(null,seq__29971_29985__$1);
var G__29993 = null;
var G__29994 = (0);
var G__29995 = (0);
seq__29971_29975 = G__29992;
chunk__29972_29976 = G__29993;
count__29973_29977 = G__29994;
i__29974_29978 = G__29995;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__29996){
var map__29998 = p__29996;
var map__29998__$1 = ((cljs.core.seq_QMARK_.call(null,map__29998))?cljs.core.apply.call(null,cljs.core.hash_map,map__29998):map__29998);
var w = map__29998__$1;
var message = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__15646__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__15646__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__15646__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30005 = cljs.core.seq.call(null,plugins);
var chunk__30006 = null;
var count__30007 = (0);
var i__30008 = (0);
while(true){
if((i__30008 < count__30007)){
var vec__30009 = cljs.core._nth.call(null,chunk__30006,i__30008);
var k = cljs.core.nth.call(null,vec__30009,(0),null);
var plugin = cljs.core.nth.call(null,vec__30009,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30011 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30005,chunk__30006,count__30007,i__30008,pl_30011,vec__30009,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30011.call(null,msg_hist);
});})(seq__30005,chunk__30006,count__30007,i__30008,pl_30011,vec__30009,k,plugin))
);
} else {
}

var G__30012 = seq__30005;
var G__30013 = chunk__30006;
var G__30014 = count__30007;
var G__30015 = (i__30008 + (1));
seq__30005 = G__30012;
chunk__30006 = G__30013;
count__30007 = G__30014;
i__30008 = G__30015;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30005);
if(temp__4126__auto__){
var seq__30005__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30005__$1)){
var c__16445__auto__ = cljs.core.chunk_first.call(null,seq__30005__$1);
var G__30016 = cljs.core.chunk_rest.call(null,seq__30005__$1);
var G__30017 = c__16445__auto__;
var G__30018 = cljs.core.count.call(null,c__16445__auto__);
var G__30019 = (0);
seq__30005 = G__30016;
chunk__30006 = G__30017;
count__30007 = G__30018;
i__30008 = G__30019;
continue;
} else {
var vec__30010 = cljs.core.first.call(null,seq__30005__$1);
var k = cljs.core.nth.call(null,vec__30010,(0),null);
var plugin = cljs.core.nth.call(null,vec__30010,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30020 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30005,chunk__30006,count__30007,i__30008,pl_30020,vec__30010,k,plugin,seq__30005__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30020.call(null,msg_hist);
});})(seq__30005,chunk__30006,count__30007,i__30008,pl_30020,vec__30010,k,plugin,seq__30005__$1,temp__4126__auto__))
);
} else {
}

var G__30021 = cljs.core.next.call(null,seq__30005__$1);
var G__30022 = null;
var G__30023 = (0);
var G__30024 = (0);
seq__30005 = G__30021;
chunk__30006 = G__30022;
count__30007 = G__30023;
i__30008 = G__30024;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__30025){
var map__30027 = p__30025;
var map__30027__$1 = ((cljs.core.seq_QMARK_.call(null,map__30027))?cljs.core.apply.call(null,cljs.core.hash_map,map__30027):map__30027);
var opts = map__30027__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30025 = null;
if (arguments.length > 0) {
var G__30028__i = 0, G__30028__a = new Array(arguments.length -  0);
while (G__30028__i < G__30028__a.length) {G__30028__a[G__30028__i] = arguments[G__30028__i + 0]; ++G__30028__i;}
  p__30025 = new cljs.core.IndexedSeq(G__30028__a,0);
} 
return watch_and_reload__delegate.call(this,p__30025);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30029){
var p__30025 = cljs.core.seq(arglist__30029);
return watch_and_reload__delegate(p__30025);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map