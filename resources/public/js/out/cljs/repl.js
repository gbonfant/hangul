// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30284_30288 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30285_30289 = null;
var count__30286_30290 = (0);
var i__30287_30291 = (0);
while(true){
if((i__30287_30291 < count__30286_30290)){
var f_30292 = cljs.core._nth.call(null,chunk__30285_30289,i__30287_30291);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30292);

var G__30293 = seq__30284_30288;
var G__30294 = chunk__30285_30289;
var G__30295 = count__30286_30290;
var G__30296 = (i__30287_30291 + (1));
seq__30284_30288 = G__30293;
chunk__30285_30289 = G__30294;
count__30286_30290 = G__30295;
i__30287_30291 = G__30296;
continue;
} else {
var temp__4126__auto___30297 = cljs.core.seq.call(null,seq__30284_30288);
if(temp__4126__auto___30297){
var seq__30284_30298__$1 = temp__4126__auto___30297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30284_30298__$1)){
var c__16445__auto___30299 = cljs.core.chunk_first.call(null,seq__30284_30298__$1);
var G__30300 = cljs.core.chunk_rest.call(null,seq__30284_30298__$1);
var G__30301 = c__16445__auto___30299;
var G__30302 = cljs.core.count.call(null,c__16445__auto___30299);
var G__30303 = (0);
seq__30284_30288 = G__30300;
chunk__30285_30289 = G__30301;
count__30286_30290 = G__30302;
i__30287_30291 = G__30303;
continue;
} else {
var f_30304 = cljs.core.first.call(null,seq__30284_30298__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30304);

var G__30305 = cljs.core.next.call(null,seq__30284_30298__$1);
var G__30306 = null;
var G__30307 = (0);
var G__30308 = (0);
seq__30284_30288 = G__30305;
chunk__30285_30289 = G__30306;
count__30286_30290 = G__30307;
i__30287_30291 = G__30308;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map