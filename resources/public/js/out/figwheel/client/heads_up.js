// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30047_30055 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30048_30056 = null;
var count__30049_30057 = (0);
var i__30050_30058 = (0);
while(true){
if((i__30050_30058 < count__30049_30057)){
var k_30059 = cljs.core._nth.call(null,chunk__30048_30056,i__30050_30058);
e.setAttribute(cljs.core.name.call(null,k_30059),cljs.core.get.call(null,attrs,k_30059));

var G__30060 = seq__30047_30055;
var G__30061 = chunk__30048_30056;
var G__30062 = count__30049_30057;
var G__30063 = (i__30050_30058 + (1));
seq__30047_30055 = G__30060;
chunk__30048_30056 = G__30061;
count__30049_30057 = G__30062;
i__30050_30058 = G__30063;
continue;
} else {
var temp__4126__auto___30064 = cljs.core.seq.call(null,seq__30047_30055);
if(temp__4126__auto___30064){
var seq__30047_30065__$1 = temp__4126__auto___30064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30047_30065__$1)){
var c__16445__auto___30066 = cljs.core.chunk_first.call(null,seq__30047_30065__$1);
var G__30067 = cljs.core.chunk_rest.call(null,seq__30047_30065__$1);
var G__30068 = c__16445__auto___30066;
var G__30069 = cljs.core.count.call(null,c__16445__auto___30066);
var G__30070 = (0);
seq__30047_30055 = G__30067;
chunk__30048_30056 = G__30068;
count__30049_30057 = G__30069;
i__30050_30058 = G__30070;
continue;
} else {
var k_30071 = cljs.core.first.call(null,seq__30047_30065__$1);
e.setAttribute(cljs.core.name.call(null,k_30071),cljs.core.get.call(null,attrs,k_30071));

var G__30072 = cljs.core.next.call(null,seq__30047_30065__$1);
var G__30073 = null;
var G__30074 = (0);
var G__30075 = (0);
seq__30047_30055 = G__30072;
chunk__30048_30056 = G__30073;
count__30049_30057 = G__30074;
i__30050_30058 = G__30075;
continue;
}
} else {
}
}
break;
}

var seq__30051_30076 = cljs.core.seq.call(null,children);
var chunk__30052_30077 = null;
var count__30053_30078 = (0);
var i__30054_30079 = (0);
while(true){
if((i__30054_30079 < count__30053_30078)){
var ch_30080 = cljs.core._nth.call(null,chunk__30052_30077,i__30054_30079);
e.appendChild(ch_30080);

var G__30081 = seq__30051_30076;
var G__30082 = chunk__30052_30077;
var G__30083 = count__30053_30078;
var G__30084 = (i__30054_30079 + (1));
seq__30051_30076 = G__30081;
chunk__30052_30077 = G__30082;
count__30053_30078 = G__30083;
i__30054_30079 = G__30084;
continue;
} else {
var temp__4126__auto___30085 = cljs.core.seq.call(null,seq__30051_30076);
if(temp__4126__auto___30085){
var seq__30051_30086__$1 = temp__4126__auto___30085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30051_30086__$1)){
var c__16445__auto___30087 = cljs.core.chunk_first.call(null,seq__30051_30086__$1);
var G__30088 = cljs.core.chunk_rest.call(null,seq__30051_30086__$1);
var G__30089 = c__16445__auto___30087;
var G__30090 = cljs.core.count.call(null,c__16445__auto___30087);
var G__30091 = (0);
seq__30051_30076 = G__30088;
chunk__30052_30077 = G__30089;
count__30053_30078 = G__30090;
i__30054_30079 = G__30091;
continue;
} else {
var ch_30092 = cljs.core.first.call(null,seq__30051_30086__$1);
e.appendChild(ch_30092);

var G__30093 = cljs.core.next.call(null,seq__30051_30086__$1);
var G__30094 = null;
var G__30095 = (0);
var G__30096 = (0);
seq__30051_30076 = G__30093;
chunk__30052_30077 = G__30094;
count__30053_30078 = G__30095;
i__30054_30079 = G__30096;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__30097__i = 0, G__30097__a = new Array(arguments.length -  2);
while (G__30097__i < G__30097__a.length) {G__30097__a[G__30097__i] = arguments[G__30097__i + 2]; ++G__30097__i;}
  children = new cljs.core.IndexedSeq(G__30097__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__30098){
var t = cljs.core.first(arglist__30098);
arglist__30098 = cljs.core.next(arglist__30098);
var attrs = cljs.core.first(arglist__30098);
var children = cljs.core.rest(arglist__30098);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16559__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__,hierarchy__16559__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__,hierarchy__16559__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16559__auto__,method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30099 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30099.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30099.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30099.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30099);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__30100,st_map){
var map__30104 = p__30100;
var map__30104__$1 = ((cljs.core.seq_QMARK_.call(null,map__30104))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var container_el = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30104,map__30104__$1,container_el){
return (function (p__30105){
var vec__30106 = p__30105;
var k = cljs.core.nth.call(null,vec__30106,(0),null);
var v = cljs.core.nth.call(null,vec__30106,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30104,map__30104__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__30107,dom_str){
var map__30109 = p__30107;
var map__30109__$1 = ((cljs.core.seq_QMARK_.call(null,map__30109))?cljs.core.apply.call(null,cljs.core.hash_map,map__30109):map__30109);
var c = map__30109__$1;
var content_area_el = cljs.core.get.call(null,map__30109__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__30110){
var map__30112 = p__30110;
var map__30112__$1 = ((cljs.core.seq_QMARK_.call(null,map__30112))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);
var content_area_el = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__){
return (function (state_30154){
var state_val_30155 = (state_30154[(1)]);
if((state_val_30155 === (2))){
var inst_30139 = (state_30154[(7)]);
var inst_30148 = (state_30154[(2)]);
var inst_30149 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30150 = ["auto"];
var inst_30151 = cljs.core.PersistentHashMap.fromArrays(inst_30149,inst_30150);
var inst_30152 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30139,inst_30151);
var state_30154__$1 = (function (){var statearr_30156 = state_30154;
(statearr_30156[(8)] = inst_30148);

return statearr_30156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30154__$1,inst_30152);
} else {
if((state_val_30155 === (1))){
var inst_30139 = (state_30154[(7)]);
var inst_30139__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30140 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30141 = ["10px","10px","100%","68px","1.0"];
var inst_30142 = cljs.core.PersistentHashMap.fromArrays(inst_30140,inst_30141);
var inst_30143 = cljs.core.merge.call(null,inst_30142,style);
var inst_30144 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30139__$1,inst_30143);
var inst_30145 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30139__$1,msg);
var inst_30146 = cljs.core.async.timeout.call(null,(300));
var state_30154__$1 = (function (){var statearr_30157 = state_30154;
(statearr_30157[(9)] = inst_30145);

(statearr_30157[(10)] = inst_30144);

(statearr_30157[(7)] = inst_30139__$1);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30154__$1,(2),inst_30146);
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
var statearr_30161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30161[(0)] = state_machine__18474__auto__);

(statearr_30161[(1)] = (1));

return statearr_30161;
});
var state_machine__18474__auto____1 = (function (state_30154){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_30154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e30162){if((e30162 instanceof Object)){
var ex__18477__auto__ = e30162;
var statearr_30163_30165 = state_30154;
(statearr_30163_30165[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30166 = state_30154;
state_30154 = G__30166;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_30154){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_30154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__))
})();
var state__18531__auto__ = (function (){var statearr_30164 = f__18530__auto__.call(null);
(statearr_30164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_30164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__))
);

return c__18529__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30168 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30168,(0),null);
var ln = cljs.core.nth.call(null,vec__30168,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__30171 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__30171,(0),null);
var file_line = cljs.core.nth.call(null,vec__30171,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30171,file_name,file_line){
return (function (p1__30169_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30169_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30171,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__30173 = figwheel.client.heads_up.ensure_container.call(null);
var map__30173__$1 = ((cljs.core.seq_QMARK_.call(null,map__30173))?cljs.core.apply.call(null,cljs.core.hash_map,map__30173):map__30173);
var content_area_el = cljs.core.get.call(null,map__30173__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__){
return (function (state_30220){
var state_val_30221 = (state_30220[(1)]);
if((state_val_30221 === (3))){
var inst_30203 = (state_30220[(7)]);
var inst_30217 = (state_30220[(2)]);
var inst_30218 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30203,"");
var state_30220__$1 = (function (){var statearr_30222 = state_30220;
(statearr_30222[(8)] = inst_30217);

return statearr_30222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30220__$1,inst_30218);
} else {
if((state_val_30221 === (2))){
var inst_30203 = (state_30220[(7)]);
var inst_30210 = (state_30220[(2)]);
var inst_30211 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30212 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30213 = cljs.core.PersistentHashMap.fromArrays(inst_30211,inst_30212);
var inst_30214 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30203,inst_30213);
var inst_30215 = cljs.core.async.timeout.call(null,(200));
var state_30220__$1 = (function (){var statearr_30223 = state_30220;
(statearr_30223[(9)] = inst_30214);

(statearr_30223[(10)] = inst_30210);

return statearr_30223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30220__$1,(3),inst_30215);
} else {
if((state_val_30221 === (1))){
var inst_30203 = (state_30220[(7)]);
var inst_30203__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30204 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30205 = ["0.0"];
var inst_30206 = cljs.core.PersistentHashMap.fromArrays(inst_30204,inst_30205);
var inst_30207 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30203__$1,inst_30206);
var inst_30208 = cljs.core.async.timeout.call(null,(300));
var state_30220__$1 = (function (){var statearr_30224 = state_30220;
(statearr_30224[(11)] = inst_30207);

(statearr_30224[(7)] = inst_30203__$1);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30220__$1,(2),inst_30208);
} else {
return null;
}
}
}
});})(c__18529__auto__))
;
return ((function (switch__18473__auto__,c__18529__auto__){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_30228 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30228[(0)] = state_machine__18474__auto__);

(statearr_30228[(1)] = (1));

return statearr_30228;
});
var state_machine__18474__auto____1 = (function (state_30220){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_30220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e30229){if((e30229 instanceof Object)){
var ex__18477__auto__ = e30229;
var statearr_30230_30232 = state_30220;
(statearr_30230_30232[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30233 = state_30220;
state_30220 = G__30233;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_30220){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_30220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__))
})();
var state__18531__auto__ = (function (){var statearr_30231 = f__18530__auto__.call(null);
(statearr_30231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_30231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__))
);

return c__18529__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__){
return (function (state_30265){
var state_val_30266 = (state_30265[(1)]);
if((state_val_30266 === (4))){
var inst_30263 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30265__$1,inst_30263);
} else {
if((state_val_30266 === (3))){
var inst_30260 = (state_30265[(2)]);
var inst_30261 = figwheel.client.heads_up.clear.call(null);
var state_30265__$1 = (function (){var statearr_30267 = state_30265;
(statearr_30267[(7)] = inst_30260);

return statearr_30267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(4),inst_30261);
} else {
if((state_val_30266 === (2))){
var inst_30257 = (state_30265[(2)]);
var inst_30258 = cljs.core.async.timeout.call(null,(400));
var state_30265__$1 = (function (){var statearr_30268 = state_30265;
(statearr_30268[(8)] = inst_30257);

return statearr_30268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(3),inst_30258);
} else {
if((state_val_30266 === (1))){
var inst_30255 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(2),inst_30255);
} else {
return null;
}
}
}
}
});})(c__18529__auto__))
;
return ((function (switch__18473__auto__,c__18529__auto__){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_30272 = [null,null,null,null,null,null,null,null,null];
(statearr_30272[(0)] = state_machine__18474__auto__);

(statearr_30272[(1)] = (1));

return statearr_30272;
});
var state_machine__18474__auto____1 = (function (state_30265){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_30265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e30273){if((e30273 instanceof Object)){
var ex__18477__auto__ = e30273;
var statearr_30274_30276 = state_30265;
(statearr_30274_30276[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30277 = state_30265;
state_30265 = G__30277;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_30265){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_30265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__))
})();
var state__18531__auto__ = (function (){var statearr_30275 = f__18530__auto__.call(null);
(statearr_30275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_30275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__))
);

return c__18529__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map