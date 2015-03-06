// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__22946 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__22946,(0),null);
var parts = cljs.core.nthnext.call(null,vec__22946,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__22948__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__15658__auto___22949 = self__.p;
if(cljs.core.truth_(or__15658__auto___22949)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__22948 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__22950__i = 0, G__22950__a = new Array(arguments.length -  1);
while (G__22950__i < G__22950__a.length) {G__22950__a[G__22950__i] = arguments[G__22950__i + 1]; ++G__22950__i;}
  a = new cljs.core.IndexedSeq(G__22950__a,0);
} 
return G__22948__delegate.call(this,self__,a);};
G__22948.cljs$lang$maxFixedArity = 1;
G__22948.cljs$lang$applyTo = (function (arglist__22951){
var self__ = cljs.core.first(arglist__22951);
var a = cljs.core.rest(arglist__22951);
return G__22948__delegate(self__,a);
});
G__22948.cljs$core$IFn$_invoke$arity$variadic = G__22948__delegate;
return G__22948;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args22947){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22947)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__22952__delegate = function (a){
var _ = this;
var or__15658__auto___22953 = self__.p;
if(cljs.core.truth_(or__15658__auto___22953)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__22952 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__22954__i = 0, G__22954__a = new Array(arguments.length -  0);
while (G__22954__i < G__22954__a.length) {G__22954__a[G__22954__i] = arguments[G__22954__i + 0]; ++G__22954__i;}
  a = new cljs.core.IndexedSeq(G__22954__a,0);
} 
return G__22952__delegate.call(this,a);};
G__22952.cljs$lang$maxFixedArity = 0;
G__22952.cljs$lang$applyTo = (function (arglist__22955){
var a = cljs.core.seq(arglist__22955);
return G__22952__delegate(a);
});
G__22952.cljs$core$IFn$_invoke$arity$variadic = G__22952__delegate;
return G__22952;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e22957){if((e22957 instanceof Object)){
var e = e22957;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e22957;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_22962 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_22962){
return (function (){
var _STAR_always_update_STAR_22963 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22963;
}});})(_STAR_always_update_STAR_22962))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22962;
}}catch (e22961){if((e22961 instanceof Object)){
var e = e22961;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e22961;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__22968_22972 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__22969_22973 = null;
var count__22970_22974 = (0);
var i__22971_22975 = (0);
while(true){
if((i__22971_22975 < count__22970_22974)){
var v_22976 = cljs.core._nth.call(null,chunk__22969_22973,i__22971_22975);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_22976);

var G__22977 = seq__22968_22972;
var G__22978 = chunk__22969_22973;
var G__22979 = count__22970_22974;
var G__22980 = (i__22971_22975 + (1));
seq__22968_22972 = G__22977;
chunk__22969_22973 = G__22978;
count__22970_22974 = G__22979;
i__22971_22975 = G__22980;
continue;
} else {
var temp__4126__auto___22981 = cljs.core.seq.call(null,seq__22968_22972);
if(temp__4126__auto___22981){
var seq__22968_22982__$1 = temp__4126__auto___22981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22968_22982__$1)){
var c__16445__auto___22983 = cljs.core.chunk_first.call(null,seq__22968_22982__$1);
var G__22984 = cljs.core.chunk_rest.call(null,seq__22968_22982__$1);
var G__22985 = c__16445__auto___22983;
var G__22986 = cljs.core.count.call(null,c__16445__auto___22983);
var G__22987 = (0);
seq__22968_22972 = G__22984;
chunk__22969_22973 = G__22985;
count__22970_22974 = G__22986;
i__22971_22975 = G__22987;
continue;
} else {
var v_22988 = cljs.core.first.call(null,seq__22968_22982__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_22988);

var G__22989 = cljs.core.next.call(null,seq__22968_22982__$1);
var G__22990 = null;
var G__22991 = (0);
var G__22992 = (0);
seq__22968_22972 = G__22989;
chunk__22969_22973 = G__22990;
count__22970_22974 = G__22991;
i__22971_22975 = G__22992;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map