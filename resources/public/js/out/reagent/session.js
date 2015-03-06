// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__22672){
var vec__22674 = p__22672;
var default$ = cljs.core.nth.call(null,vec__22674,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__22672 = null;
if (arguments.length > 1) {
var G__22675__i = 0, G__22675__a = new Array(arguments.length -  1);
while (G__22675__i < G__22675__a.length) {G__22675__a[G__22675__i] = arguments[G__22675__i + 1]; ++G__22675__i;}
  p__22672 = new cljs.core.IndexedSeq(G__22675__a,0);
} 
return get__delegate.call(this,k,p__22672);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22676){
var k = cljs.core.first(arglist__22676);
var p__22672 = cljs.core.rest(arglist__22676);
return get__delegate(k,p__22672);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__22677){
var vec__22679 = p__22677;
var default$ = cljs.core.nth.call(null,vec__22679,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__22677 = null;
if (arguments.length > 1) {
var G__22680__i = 0, G__22680__a = new Array(arguments.length -  1);
while (G__22680__i < G__22680__a.length) {G__22680__a[G__22680__i] = arguments[G__22680__i + 1]; ++G__22680__i;}
  p__22677 = new cljs.core.IndexedSeq(G__22680__a,0);
} 
return get_in__delegate.call(this,ks,p__22677);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__22681){
var ks = cljs.core.first(arglist__22681);
var p__22677 = cljs.core.rest(arglist__22681);
return get_in__delegate(ks,p__22677);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__22682__i = 0, G__22682__a = new Array(arguments.length -  1);
while (G__22682__i < G__22682__a.length) {G__22682__a[G__22682__i] = arguments[G__22682__i + 1]; ++G__22682__i;}
  args = new cljs.core.IndexedSeq(G__22682__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__22683){
var f = cljs.core.first(arglist__22683);
var args = cljs.core.rest(arglist__22683);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22684_SHARP_){
return cljs.core.assoc_in.call(null,p1__22684_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__22685){
var vec__22687 = p__22685;
var default$ = cljs.core.nth.call(null,vec__22687,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__22685 = null;
if (arguments.length > 1) {
var G__22688__i = 0, G__22688__a = new Array(arguments.length -  1);
while (G__22688__i < G__22688__a.length) {G__22688__a[G__22688__i] = arguments[G__22688__i + 1]; ++G__22688__i;}
  p__22685 = new cljs.core.IndexedSeq(G__22688__a,0);
} 
return get_BANG___delegate.call(this,k,p__22685);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__22689){
var k = cljs.core.first(arglist__22689);
var p__22685 = cljs.core.rest(arglist__22689);
return get_BANG___delegate(k,p__22685);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__22690){
var vec__22692 = p__22690;
var default$ = cljs.core.nth.call(null,vec__22692,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__22690 = null;
if (arguments.length > 1) {
var G__22693__i = 0, G__22693__a = new Array(arguments.length -  1);
while (G__22693__i < G__22693__a.length) {G__22693__a[G__22693__i] = arguments[G__22693__i + 1]; ++G__22693__i;}
  p__22690 = new cljs.core.IndexedSeq(G__22693__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__22690);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__22694){
var ks = cljs.core.first(arglist__22694);
var p__22690 = cljs.core.rest(arglist__22694);
return get_in_BANG___delegate(ks,p__22690);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22695_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__22695_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22696__i = 0, G__22696__a = new Array(arguments.length -  2);
while (G__22696__i < G__22696__a.length) {G__22696__a[G__22696__i] = arguments[G__22696__i + 2]; ++G__22696__i;}
  args = new cljs.core.IndexedSeq(G__22696__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__22697){
var ks = cljs.core.first(arglist__22697);
arglist__22697 = cljs.core.next(arglist__22697);
var f = cljs.core.first(arglist__22697);
var args = cljs.core.rest(arglist__22697);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map