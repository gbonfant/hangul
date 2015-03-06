// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__30323_SHARP_,p2__30324_SHARP_){
var and__15646__auto__ = p1__30323_SHARP_;
if(cljs.core.truth_(and__15646__auto__)){
return p2__30324_SHARP_;
} else {
return and__15646__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__15658__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__15658__auto__){
return or__15658__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30326_SHARP_,p2__30325_SHARP_){
return [cljs.core.str(p2__30325_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__15658__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__15658__auto__){
return or__15658__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__15658__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16559__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16559__auto__,method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30327){
var map__30328 = p__30327;
var map__30328__$1 = ((cljs.core.seq_QMARK_.call(null,map__30328))?cljs.core.apply.call(null,cljs.core.hash_map,map__30328):map__30328);
var file = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30329){
var map__30330 = p__30329;
var map__30330__$1 = ((cljs.core.seq_QMARK_.call(null,map__30330))?cljs.core.apply.call(null,cljs.core.hash_map,map__30330):map__30330);
var namespace = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__16555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16559__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16559__auto__,method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30331){if((e30331 instanceof Error)){
var e = e30331;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30331;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__30332,callback){
var map__30334 = p__30332;
var map__30334__$1 = ((cljs.core.seq_QMARK_.call(null,map__30334))?cljs.core.apply.call(null,cljs.core.hash_map,map__30334):map__30334);
var file_msg = map__30334__$1;
var request_url = cljs.core.get.call(null,map__30334__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30334,map__30334__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30334,map__30334__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__30335){
var map__30337 = p__30335;
var map__30337__$1 = ((cljs.core.seq_QMARK_.call(null,map__30337))?cljs.core.apply.call(null,cljs.core.hash_map,map__30337):map__30337);
var file_msg = map__30337__$1;
var meta_data = cljs.core.get.call(null,map__30337__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30337__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__15658__auto__ = meta_data;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__15646__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__15646__auto__){
var or__15658__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15658__auto____$1)){
return or__15658__auto____$1;
} else {
var and__15646__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__15646__auto____$1){
var or__15658__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__15658__auto____$2){
return or__15658__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__15646__auto____$1;
}
}
}
} else {
return and__15646__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__30338,callback){
var map__30340 = p__30338;
var map__30340__$1 = ((cljs.core.seq_QMARK_.call(null,map__30340))?cljs.core.apply.call(null,cljs.core.hash_map,map__30340):map__30340);
var file_msg = map__30340__$1;
var namespace = cljs.core.get.call(null,map__30340__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30340__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18529__auto___30427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___30427,out){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___30427,out){
return (function (state_30409){
var state_val_30410 = (state_30409[(1)]);
if((state_val_30410 === (7))){
var inst_30393 = (state_30409[(7)]);
var inst_30399 = (state_30409[(2)]);
var inst_30400 = cljs.core.async.put_BANG_.call(null,out,inst_30399);
var inst_30389 = inst_30393;
var state_30409__$1 = (function (){var statearr_30411 = state_30409;
(statearr_30411[(8)] = inst_30400);

(statearr_30411[(9)] = inst_30389);

return statearr_30411;
})();
var statearr_30412_30428 = state_30409__$1;
(statearr_30412_30428[(2)] = null);

(statearr_30412_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (6))){
var inst_30405 = (state_30409[(2)]);
var state_30409__$1 = state_30409;
var statearr_30413_30429 = state_30409__$1;
(statearr_30413_30429[(2)] = inst_30405);

(statearr_30413_30429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (5))){
var inst_30403 = cljs.core.async.close_BANG_.call(null,out);
var state_30409__$1 = state_30409;
var statearr_30414_30430 = state_30409__$1;
(statearr_30414_30430[(2)] = inst_30403);

(statearr_30414_30430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (4))){
var inst_30392 = (state_30409[(10)]);
var inst_30397 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30392);
var state_30409__$1 = state_30409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30409__$1,(7),inst_30397);
} else {
if((state_val_30410 === (3))){
var inst_30407 = (state_30409[(2)]);
var state_30409__$1 = state_30409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30409__$1,inst_30407);
} else {
if((state_val_30410 === (2))){
var inst_30392 = (state_30409[(10)]);
var inst_30389 = (state_30409[(9)]);
var inst_30392__$1 = cljs.core.nth.call(null,inst_30389,(0),null);
var inst_30393 = cljs.core.nthnext.call(null,inst_30389,(1));
var inst_30394 = (inst_30392__$1 == null);
var inst_30395 = cljs.core.not.call(null,inst_30394);
var state_30409__$1 = (function (){var statearr_30415 = state_30409;
(statearr_30415[(10)] = inst_30392__$1);

(statearr_30415[(7)] = inst_30393);

return statearr_30415;
})();
if(inst_30395){
var statearr_30416_30431 = state_30409__$1;
(statearr_30416_30431[(1)] = (4));

} else {
var statearr_30417_30432 = state_30409__$1;
(statearr_30417_30432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (1))){
var inst_30387 = cljs.core.nth.call(null,files,(0),null);
var inst_30388 = cljs.core.nthnext.call(null,files,(1));
var inst_30389 = files;
var state_30409__$1 = (function (){var statearr_30418 = state_30409;
(statearr_30418[(11)] = inst_30387);

(statearr_30418[(9)] = inst_30389);

(statearr_30418[(12)] = inst_30388);

return statearr_30418;
})();
var statearr_30419_30433 = state_30409__$1;
(statearr_30419_30433[(2)] = null);

(statearr_30419_30433[(1)] = (2));


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
});})(c__18529__auto___30427,out))
;
return ((function (switch__18473__auto__,c__18529__auto___30427,out){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_30423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30423[(0)] = state_machine__18474__auto__);

(statearr_30423[(1)] = (1));

return statearr_30423;
});
var state_machine__18474__auto____1 = (function (state_30409){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_30409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e30424){if((e30424 instanceof Object)){
var ex__18477__auto__ = e30424;
var statearr_30425_30434 = state_30409;
(statearr_30425_30434[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30435 = state_30409;
state_30409 = G__30435;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_30409){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_30409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___30427,out))
})();
var state__18531__auto__ = (function (){var statearr_30426 = f__18530__auto__.call(null);
(statearr_30426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___30427);

return statearr_30426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___30427,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30436,p__30437){
var map__30440 = p__30436;
var map__30440__$1 = ((cljs.core.seq_QMARK_.call(null,map__30440))?cljs.core.apply.call(null,cljs.core.hash_map,map__30440):map__30440);
var opts = map__30440__$1;
var url_rewriter = cljs.core.get.call(null,map__30440__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30441 = p__30437;
var map__30441__$1 = ((cljs.core.seq_QMARK_.call(null,map__30441))?cljs.core.apply.call(null,cljs.core.hash_map,map__30441):map__30441);
var file_msg = map__30441__$1;
var file = cljs.core.get.call(null,map__30441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__30442){
var map__30445 = p__30442;
var map__30445__$1 = ((cljs.core.seq_QMARK_.call(null,map__30445))?cljs.core.apply.call(null,cljs.core.hash_map,map__30445):map__30445);
var file = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__15646__auto__ = eval_body__$1;
if(cljs.core.truth_(and__15646__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__15646__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e30446){var e = e30446;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30451,p__30452){
var map__30653 = p__30451;
var map__30653__$1 = ((cljs.core.seq_QMARK_.call(null,map__30653))?cljs.core.apply.call(null,cljs.core.hash_map,map__30653):map__30653);
var opts = map__30653__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30654 = p__30452;
var map__30654__$1 = ((cljs.core.seq_QMARK_.call(null,map__30654))?cljs.core.apply.call(null,cljs.core.hash_map,map__30654):map__30654);
var msg = map__30654__$1;
var files = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (state_30778){
var state_val_30779 = (state_30778[(1)]);
if((state_val_30779 === (7))){
var inst_30668 = (state_30778[(7)]);
var inst_30666 = (state_30778[(8)]);
var inst_30667 = (state_30778[(9)]);
var inst_30665 = (state_30778[(10)]);
var inst_30673 = cljs.core._nth.call(null,inst_30666,inst_30668);
var inst_30674 = figwheel.client.file_reloading.eval_body.call(null,inst_30673);
var inst_30675 = (inst_30668 + (1));
var tmp30780 = inst_30666;
var tmp30781 = inst_30667;
var tmp30782 = inst_30665;
var inst_30665__$1 = tmp30782;
var inst_30666__$1 = tmp30780;
var inst_30667__$1 = tmp30781;
var inst_30668__$1 = inst_30675;
var state_30778__$1 = (function (){var statearr_30783 = state_30778;
(statearr_30783[(7)] = inst_30668__$1);

(statearr_30783[(8)] = inst_30666__$1);

(statearr_30783[(9)] = inst_30667__$1);

(statearr_30783[(10)] = inst_30665__$1);

(statearr_30783[(11)] = inst_30674);

return statearr_30783;
})();
var statearr_30784_30853 = state_30778__$1;
(statearr_30784_30853[(2)] = null);

(statearr_30784_30853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (20))){
var inst_30711 = (state_30778[(12)]);
var inst_30715 = (state_30778[(13)]);
var inst_30714 = (state_30778[(14)]);
var inst_30717 = (state_30778[(15)]);
var inst_30710 = (state_30778[(16)]);
var inst_30720 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30722 = (function (){var files_not_loaded = inst_30717;
var res = inst_30715;
var res_SINGLEQUOTE_ = inst_30714;
var files_SINGLEQUOTE_ = inst_30711;
var all_files = inst_30710;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30714,inst_30717,inst_30710,inst_30720,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (p__30721){
var map__30785 = p__30721;
var map__30785__$1 = ((cljs.core.seq_QMARK_.call(null,map__30785))?cljs.core.apply.call(null,cljs.core.hash_map,map__30785):map__30785);
var file = cljs.core.get.call(null,map__30785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30785__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30714,inst_30717,inst_30710,inst_30720,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var inst_30723 = cljs.core.map.call(null,inst_30722,inst_30715);
var inst_30724 = cljs.core.pr_str.call(null,inst_30723);
var inst_30725 = figwheel.client.utils.log.call(null,inst_30724);
var inst_30726 = (function (){var files_not_loaded = inst_30717;
var res = inst_30715;
var res_SINGLEQUOTE_ = inst_30714;
var files_SINGLEQUOTE_ = inst_30711;
var all_files = inst_30710;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30714,inst_30717,inst_30710,inst_30720,inst_30722,inst_30723,inst_30724,inst_30725,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30714,inst_30717,inst_30710,inst_30720,inst_30722,inst_30723,inst_30724,inst_30725,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var inst_30727 = setTimeout(inst_30726,(10));
var state_30778__$1 = (function (){var statearr_30786 = state_30778;
(statearr_30786[(17)] = inst_30725);

(statearr_30786[(18)] = inst_30720);

return statearr_30786;
})();
var statearr_30787_30854 = state_30778__$1;
(statearr_30787_30854[(2)] = inst_30727);

(statearr_30787_30854[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (27))){
var inst_30737 = (state_30778[(19)]);
var state_30778__$1 = state_30778;
var statearr_30788_30855 = state_30778__$1;
(statearr_30788_30855[(2)] = inst_30737);

(statearr_30788_30855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (1))){
var inst_30657 = (state_30778[(20)]);
var inst_30655 = before_jsload.call(null,files);
var inst_30656 = (function (){return ((function (inst_30657,inst_30655,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (p1__30447_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30447_SHARP_);
});
;})(inst_30657,inst_30655,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var inst_30657__$1 = cljs.core.filter.call(null,inst_30656,files);
var inst_30658 = cljs.core.not_empty.call(null,inst_30657__$1);
var state_30778__$1 = (function (){var statearr_30789 = state_30778;
(statearr_30789[(20)] = inst_30657__$1);

(statearr_30789[(21)] = inst_30655);

return statearr_30789;
})();
if(cljs.core.truth_(inst_30658)){
var statearr_30790_30856 = state_30778__$1;
(statearr_30790_30856[(1)] = (2));

} else {
var statearr_30791_30857 = state_30778__$1;
(statearr_30791_30857[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (24))){
var state_30778__$1 = state_30778;
var statearr_30792_30858 = state_30778__$1;
(statearr_30792_30858[(2)] = null);

(statearr_30792_30858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (4))){
var inst_30702 = (state_30778[(2)]);
var inst_30703 = (function (){return ((function (inst_30702,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (p1__30448_SHARP_){
var and__15646__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30448_SHARP_);
if(cljs.core.truth_(and__15646__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30448_SHARP_));
} else {
return and__15646__auto__;
}
});
;})(inst_30702,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var inst_30704 = cljs.core.filter.call(null,inst_30703,files);
var state_30778__$1 = (function (){var statearr_30793 = state_30778;
(statearr_30793[(22)] = inst_30704);

(statearr_30793[(23)] = inst_30702);

return statearr_30793;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30794_30859 = state_30778__$1;
(statearr_30794_30859[(1)] = (16));

} else {
var statearr_30795_30860 = state_30778__$1;
(statearr_30795_30860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (15))){
var inst_30692 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30796_30861 = state_30778__$1;
(statearr_30796_30861[(2)] = inst_30692);

(statearr_30796_30861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (21))){
var state_30778__$1 = state_30778;
var statearr_30797_30862 = state_30778__$1;
(statearr_30797_30862[(2)] = null);

(statearr_30797_30862[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (31))){
var inst_30745 = (state_30778[(24)]);
var inst_30755 = (state_30778[(2)]);
var inst_30756 = cljs.core.not_empty.call(null,inst_30745);
var state_30778__$1 = (function (){var statearr_30798 = state_30778;
(statearr_30798[(25)] = inst_30755);

return statearr_30798;
})();
if(cljs.core.truth_(inst_30756)){
var statearr_30799_30863 = state_30778__$1;
(statearr_30799_30863[(1)] = (32));

} else {
var statearr_30800_30864 = state_30778__$1;
(statearr_30800_30864[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (32))){
var inst_30745 = (state_30778[(24)]);
var inst_30758 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30745);
var inst_30759 = cljs.core.pr_str.call(null,inst_30758);
var inst_30760 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30759)].join('');
var inst_30761 = figwheel.client.utils.log.call(null,inst_30760);
var state_30778__$1 = state_30778;
var statearr_30801_30865 = state_30778__$1;
(statearr_30801_30865[(2)] = inst_30761);

(statearr_30801_30865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (33))){
var state_30778__$1 = state_30778;
var statearr_30802_30866 = state_30778__$1;
(statearr_30802_30866[(2)] = null);

(statearr_30802_30866[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (13))){
var inst_30678 = (state_30778[(26)]);
var inst_30682 = cljs.core.chunk_first.call(null,inst_30678);
var inst_30683 = cljs.core.chunk_rest.call(null,inst_30678);
var inst_30684 = cljs.core.count.call(null,inst_30682);
var inst_30665 = inst_30683;
var inst_30666 = inst_30682;
var inst_30667 = inst_30684;
var inst_30668 = (0);
var state_30778__$1 = (function (){var statearr_30803 = state_30778;
(statearr_30803[(7)] = inst_30668);

(statearr_30803[(8)] = inst_30666);

(statearr_30803[(9)] = inst_30667);

(statearr_30803[(10)] = inst_30665);

return statearr_30803;
})();
var statearr_30804_30867 = state_30778__$1;
(statearr_30804_30867[(2)] = null);

(statearr_30804_30867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (22))){
var inst_30717 = (state_30778[(15)]);
var inst_30730 = (state_30778[(2)]);
var inst_30731 = cljs.core.not_empty.call(null,inst_30717);
var state_30778__$1 = (function (){var statearr_30805 = state_30778;
(statearr_30805[(27)] = inst_30730);

return statearr_30805;
})();
if(cljs.core.truth_(inst_30731)){
var statearr_30806_30868 = state_30778__$1;
(statearr_30806_30868[(1)] = (23));

} else {
var statearr_30807_30869 = state_30778__$1;
(statearr_30807_30869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (36))){
var state_30778__$1 = state_30778;
var statearr_30808_30870 = state_30778__$1;
(statearr_30808_30870[(2)] = null);

(statearr_30808_30870[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (29))){
var inst_30746 = (state_30778[(28)]);
var inst_30749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30746);
var inst_30750 = cljs.core.pr_str.call(null,inst_30749);
var inst_30751 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30750)].join('');
var inst_30752 = figwheel.client.utils.log.call(null,inst_30751);
var state_30778__$1 = state_30778;
var statearr_30809_30871 = state_30778__$1;
(statearr_30809_30871[(2)] = inst_30752);

(statearr_30809_30871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (6))){
var inst_30699 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30810_30872 = state_30778__$1;
(statearr_30810_30872[(2)] = inst_30699);

(statearr_30810_30872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (28))){
var inst_30746 = (state_30778[(28)]);
var inst_30743 = (state_30778[(2)]);
var inst_30744 = cljs.core.get.call(null,inst_30743,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30745 = cljs.core.get.call(null,inst_30743,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30746__$1 = cljs.core.get.call(null,inst_30743,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30747 = cljs.core.not_empty.call(null,inst_30746__$1);
var state_30778__$1 = (function (){var statearr_30811 = state_30778;
(statearr_30811[(28)] = inst_30746__$1);

(statearr_30811[(24)] = inst_30745);

(statearr_30811[(29)] = inst_30744);

return statearr_30811;
})();
if(cljs.core.truth_(inst_30747)){
var statearr_30812_30873 = state_30778__$1;
(statearr_30812_30873[(1)] = (29));

} else {
var statearr_30813_30874 = state_30778__$1;
(statearr_30813_30874[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (25))){
var inst_30776 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30778__$1,inst_30776);
} else {
if((state_val_30779 === (34))){
var inst_30744 = (state_30778[(29)]);
var inst_30764 = (state_30778[(2)]);
var inst_30765 = cljs.core.not_empty.call(null,inst_30744);
var state_30778__$1 = (function (){var statearr_30814 = state_30778;
(statearr_30814[(30)] = inst_30764);

return statearr_30814;
})();
if(cljs.core.truth_(inst_30765)){
var statearr_30815_30875 = state_30778__$1;
(statearr_30815_30875[(1)] = (35));

} else {
var statearr_30816_30876 = state_30778__$1;
(statearr_30816_30876[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (17))){
var inst_30704 = (state_30778[(22)]);
var state_30778__$1 = state_30778;
var statearr_30817_30877 = state_30778__$1;
(statearr_30817_30877[(2)] = inst_30704);

(statearr_30817_30877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (3))){
var state_30778__$1 = state_30778;
var statearr_30818_30878 = state_30778__$1;
(statearr_30818_30878[(2)] = null);

(statearr_30818_30878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (12))){
var inst_30695 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30819_30879 = state_30778__$1;
(statearr_30819_30879[(2)] = inst_30695);

(statearr_30819_30879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (2))){
var inst_30657 = (state_30778[(20)]);
var inst_30664 = cljs.core.seq.call(null,inst_30657);
var inst_30665 = inst_30664;
var inst_30666 = null;
var inst_30667 = (0);
var inst_30668 = (0);
var state_30778__$1 = (function (){var statearr_30820 = state_30778;
(statearr_30820[(7)] = inst_30668);

(statearr_30820[(8)] = inst_30666);

(statearr_30820[(9)] = inst_30667);

(statearr_30820[(10)] = inst_30665);

return statearr_30820;
})();
var statearr_30821_30880 = state_30778__$1;
(statearr_30821_30880[(2)] = null);

(statearr_30821_30880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (23))){
var inst_30711 = (state_30778[(12)]);
var inst_30715 = (state_30778[(13)]);
var inst_30737 = (state_30778[(19)]);
var inst_30714 = (state_30778[(14)]);
var inst_30717 = (state_30778[(15)]);
var inst_30710 = (state_30778[(16)]);
var inst_30733 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30736 = (function (){var files_not_loaded = inst_30717;
var res = inst_30715;
var res_SINGLEQUOTE_ = inst_30714;
var files_SINGLEQUOTE_ = inst_30711;
var all_files = inst_30710;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30737,inst_30714,inst_30717,inst_30710,inst_30733,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (p__30735){
var map__30822 = p__30735;
var map__30822__$1 = ((cljs.core.seq_QMARK_.call(null,map__30822))?cljs.core.apply.call(null,cljs.core.hash_map,map__30822):map__30822);
var meta_data = cljs.core.get.call(null,map__30822__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30737,inst_30714,inst_30717,inst_30710,inst_30733,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var inst_30737__$1 = cljs.core.group_by.call(null,inst_30736,inst_30717);
var inst_30738 = cljs.core.seq_QMARK_.call(null,inst_30737__$1);
var state_30778__$1 = (function (){var statearr_30823 = state_30778;
(statearr_30823[(19)] = inst_30737__$1);

(statearr_30823[(31)] = inst_30733);

return statearr_30823;
})();
if(inst_30738){
var statearr_30824_30881 = state_30778__$1;
(statearr_30824_30881[(1)] = (26));

} else {
var statearr_30825_30882 = state_30778__$1;
(statearr_30825_30882[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (35))){
var inst_30744 = (state_30778[(29)]);
var inst_30767 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30744);
var inst_30768 = cljs.core.pr_str.call(null,inst_30767);
var inst_30769 = [cljs.core.str("not required: "),cljs.core.str(inst_30768)].join('');
var inst_30770 = figwheel.client.utils.log.call(null,inst_30769);
var state_30778__$1 = state_30778;
var statearr_30826_30883 = state_30778__$1;
(statearr_30826_30883[(2)] = inst_30770);

(statearr_30826_30883[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (19))){
var inst_30711 = (state_30778[(12)]);
var inst_30715 = (state_30778[(13)]);
var inst_30714 = (state_30778[(14)]);
var inst_30710 = (state_30778[(16)]);
var inst_30714__$1 = (state_30778[(2)]);
var inst_30715__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30714__$1);
var inst_30716 = (function (){var res = inst_30715__$1;
var res_SINGLEQUOTE_ = inst_30714__$1;
var files_SINGLEQUOTE_ = inst_30711;
var all_files = inst_30710;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30714,inst_30710,inst_30714__$1,inst_30715__$1,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (p1__30450_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30450_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30711,inst_30715,inst_30714,inst_30710,inst_30714__$1,inst_30715__$1,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var inst_30717 = cljs.core.filter.call(null,inst_30716,inst_30714__$1);
var inst_30718 = cljs.core.not_empty.call(null,inst_30715__$1);
var state_30778__$1 = (function (){var statearr_30827 = state_30778;
(statearr_30827[(13)] = inst_30715__$1);

(statearr_30827[(14)] = inst_30714__$1);

(statearr_30827[(15)] = inst_30717);

return statearr_30827;
})();
if(cljs.core.truth_(inst_30718)){
var statearr_30828_30884 = state_30778__$1;
(statearr_30828_30884[(1)] = (20));

} else {
var statearr_30829_30885 = state_30778__$1;
(statearr_30829_30885[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (11))){
var state_30778__$1 = state_30778;
var statearr_30830_30886 = state_30778__$1;
(statearr_30830_30886[(2)] = null);

(statearr_30830_30886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (9))){
var inst_30697 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30831_30887 = state_30778__$1;
(statearr_30831_30887[(2)] = inst_30697);

(statearr_30831_30887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (5))){
var inst_30668 = (state_30778[(7)]);
var inst_30667 = (state_30778[(9)]);
var inst_30670 = (inst_30668 < inst_30667);
var inst_30671 = inst_30670;
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30671)){
var statearr_30832_30888 = state_30778__$1;
(statearr_30832_30888[(1)] = (7));

} else {
var statearr_30833_30889 = state_30778__$1;
(statearr_30833_30889[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (14))){
var inst_30678 = (state_30778[(26)]);
var inst_30687 = cljs.core.first.call(null,inst_30678);
var inst_30688 = figwheel.client.file_reloading.eval_body.call(null,inst_30687);
var inst_30689 = cljs.core.next.call(null,inst_30678);
var inst_30665 = inst_30689;
var inst_30666 = null;
var inst_30667 = (0);
var inst_30668 = (0);
var state_30778__$1 = (function (){var statearr_30834 = state_30778;
(statearr_30834[(32)] = inst_30688);

(statearr_30834[(7)] = inst_30668);

(statearr_30834[(8)] = inst_30666);

(statearr_30834[(9)] = inst_30667);

(statearr_30834[(10)] = inst_30665);

return statearr_30834;
})();
var statearr_30835_30890 = state_30778__$1;
(statearr_30835_30890[(2)] = null);

(statearr_30835_30890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (26))){
var inst_30737 = (state_30778[(19)]);
var inst_30740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30737);
var state_30778__$1 = state_30778;
var statearr_30836_30891 = state_30778__$1;
(statearr_30836_30891[(2)] = inst_30740);

(statearr_30836_30891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (16))){
var inst_30704 = (state_30778[(22)]);
var inst_30706 = (function (){var all_files = inst_30704;
return ((function (all_files,inst_30704,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function (p1__30449_SHARP_){
return cljs.core.update_in.call(null,p1__30449_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30704,state_val_30779,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var inst_30707 = cljs.core.map.call(null,inst_30706,inst_30704);
var state_30778__$1 = state_30778;
var statearr_30837_30892 = state_30778__$1;
(statearr_30837_30892[(2)] = inst_30707);

(statearr_30837_30892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (30))){
var state_30778__$1 = state_30778;
var statearr_30838_30893 = state_30778__$1;
(statearr_30838_30893[(2)] = null);

(statearr_30838_30893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (10))){
var inst_30678 = (state_30778[(26)]);
var inst_30680 = cljs.core.chunked_seq_QMARK_.call(null,inst_30678);
var state_30778__$1 = state_30778;
if(inst_30680){
var statearr_30839_30894 = state_30778__$1;
(statearr_30839_30894[(1)] = (13));

} else {
var statearr_30840_30895 = state_30778__$1;
(statearr_30840_30895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (18))){
var inst_30711 = (state_30778[(12)]);
var inst_30710 = (state_30778[(16)]);
var inst_30710__$1 = (state_30778[(2)]);
var inst_30711__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30710__$1);
var inst_30712 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30711__$1);
var state_30778__$1 = (function (){var statearr_30841 = state_30778;
(statearr_30841[(12)] = inst_30711__$1);

(statearr_30841[(16)] = inst_30710__$1);

return statearr_30841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(19),inst_30712);
} else {
if((state_val_30779 === (37))){
var inst_30773 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30842_30896 = state_30778__$1;
(statearr_30842_30896[(2)] = inst_30773);

(statearr_30842_30896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (8))){
var inst_30678 = (state_30778[(26)]);
var inst_30665 = (state_30778[(10)]);
var inst_30678__$1 = cljs.core.seq.call(null,inst_30665);
var state_30778__$1 = (function (){var statearr_30843 = state_30778;
(statearr_30843[(26)] = inst_30678__$1);

return statearr_30843;
})();
if(inst_30678__$1){
var statearr_30844_30897 = state_30778__$1;
(statearr_30844_30897[(1)] = (10));

} else {
var statearr_30845_30898 = state_30778__$1;
(statearr_30845_30898[(1)] = (11));

}

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
}
}
}
});})(c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
;
return ((function (switch__18473__auto__,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_30849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30849[(0)] = state_machine__18474__auto__);

(statearr_30849[(1)] = (1));

return statearr_30849;
});
var state_machine__18474__auto____1 = (function (state_30778){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_30778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e30850){if((e30850 instanceof Object)){
var ex__18477__auto__ = e30850;
var statearr_30851_30899 = state_30778;
(statearr_30851_30899[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30900 = state_30778;
state_30778 = G__30900;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_30778){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_30778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
})();
var state__18531__auto__ = (function (){var statearr_30852 = f__18530__auto__.call(null);
(statearr_30852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_30852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__,map__30653,map__30653__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30654,map__30654__$1,msg,files))
);

return c__18529__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__30903,link){
var map__30905 = p__30903;
var map__30905__$1 = ((cljs.core.seq_QMARK_.call(null,map__30905))?cljs.core.apply.call(null,cljs.core.hash_map,map__30905):map__30905);
var file = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30905,map__30905__$1,file){
return (function (p1__30901_SHARP_,p2__30902_SHARP_){
if(cljs.core._EQ_.call(null,p1__30901_SHARP_,p2__30902_SHARP_)){
return p1__30901_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30905,map__30905__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30909){
var map__30910 = p__30909;
var map__30910__$1 = ((cljs.core.seq_QMARK_.call(null,map__30910))?cljs.core.apply.call(null,cljs.core.hash_map,map__30910):map__30910);
var current_url_length = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30906_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30906_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__30911){
var map__30913 = p__30911;
var map__30913__$1 = ((cljs.core.seq_QMARK_.call(null,map__30913))?cljs.core.apply.call(null,cljs.core.hash_map,map__30913):map__30913);
var f_data = map__30913__$1;
var request_url = cljs.core.get.call(null,map__30913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__15658__auto__ = request_url;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__30914,files_msg){
var map__30936 = p__30914;
var map__30936__$1 = ((cljs.core.seq_QMARK_.call(null,map__30936))?cljs.core.apply.call(null,cljs.core.hash_map,map__30936):map__30936);
var opts = map__30936__$1;
var on_cssload = cljs.core.get.call(null,map__30936__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30937_30957 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30938_30958 = null;
var count__30939_30959 = (0);
var i__30940_30960 = (0);
while(true){
if((i__30940_30960 < count__30939_30959)){
var f_30961 = cljs.core._nth.call(null,chunk__30938_30958,i__30940_30960);
figwheel.client.file_reloading.reload_css_file.call(null,f_30961);

var G__30962 = seq__30937_30957;
var G__30963 = chunk__30938_30958;
var G__30964 = count__30939_30959;
var G__30965 = (i__30940_30960 + (1));
seq__30937_30957 = G__30962;
chunk__30938_30958 = G__30963;
count__30939_30959 = G__30964;
i__30940_30960 = G__30965;
continue;
} else {
var temp__4126__auto___30966 = cljs.core.seq.call(null,seq__30937_30957);
if(temp__4126__auto___30966){
var seq__30937_30967__$1 = temp__4126__auto___30966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30937_30967__$1)){
var c__16445__auto___30968 = cljs.core.chunk_first.call(null,seq__30937_30967__$1);
var G__30969 = cljs.core.chunk_rest.call(null,seq__30937_30967__$1);
var G__30970 = c__16445__auto___30968;
var G__30971 = cljs.core.count.call(null,c__16445__auto___30968);
var G__30972 = (0);
seq__30937_30957 = G__30969;
chunk__30938_30958 = G__30970;
count__30939_30959 = G__30971;
i__30940_30960 = G__30972;
continue;
} else {
var f_30973 = cljs.core.first.call(null,seq__30937_30967__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30973);

var G__30974 = cljs.core.next.call(null,seq__30937_30967__$1);
var G__30975 = null;
var G__30976 = (0);
var G__30977 = (0);
seq__30937_30957 = G__30974;
chunk__30938_30958 = G__30975;
count__30939_30959 = G__30976;
i__30940_30960 = G__30977;
continue;
}
} else {
}
}
break;
}

var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__,map__30936,map__30936__$1,opts,on_cssload){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__,map__30936,map__30936__$1,opts,on_cssload){
return (function (state_30947){
var state_val_30948 = (state_30947[(1)]);
if((state_val_30948 === (2))){
var inst_30943 = (state_30947[(2)]);
var inst_30944 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30945 = on_cssload.call(null,inst_30944);
var state_30947__$1 = (function (){var statearr_30949 = state_30947;
(statearr_30949[(7)] = inst_30943);

return statearr_30949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30947__$1,inst_30945);
} else {
if((state_val_30948 === (1))){
var inst_30941 = cljs.core.async.timeout.call(null,(100));
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30947__$1,(2),inst_30941);
} else {
return null;
}
}
});})(c__18529__auto__,map__30936,map__30936__$1,opts,on_cssload))
;
return ((function (switch__18473__auto__,c__18529__auto__,map__30936,map__30936__$1,opts,on_cssload){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_30953 = [null,null,null,null,null,null,null,null];
(statearr_30953[(0)] = state_machine__18474__auto__);

(statearr_30953[(1)] = (1));

return statearr_30953;
});
var state_machine__18474__auto____1 = (function (state_30947){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_30947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e30954){if((e30954 instanceof Object)){
var ex__18477__auto__ = e30954;
var statearr_30955_30978 = state_30947;
(statearr_30955_30978[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30979 = state_30947;
state_30947 = G__30979;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_30947){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_30947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__,map__30936,map__30936__$1,opts,on_cssload))
})();
var state__18531__auto__ = (function (){var statearr_30956 = f__18530__auto__.call(null);
(statearr_30956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_30956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__,map__30936,map__30936__$1,opts,on_cssload))
);

return c__18529__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map