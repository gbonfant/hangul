// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t31026 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31026 = (function (f,fn_handler,meta31027){
this.f = f;
this.fn_handler = fn_handler;
this.meta31027 = meta31027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31026.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31028){
var self__ = this;
var _31028__$1 = this;
return self__.meta31027;
});

cljs.core.async.t31026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31028,meta31027__$1){
var self__ = this;
var _31028__$1 = this;
return (new cljs.core.async.t31026(self__.f,self__.fn_handler,meta31027__$1));
});

cljs.core.async.t31026.cljs$lang$type = true;

cljs.core.async.t31026.cljs$lang$ctorStr = "cljs.core.async/t31026";

cljs.core.async.t31026.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31026");
});

cljs.core.async.__GT_t31026 = (function __GT_t31026(f__$1,fn_handler__$1,meta31027){
return (new cljs.core.async.t31026(f__$1,fn_handler__$1,meta31027));
});

}

return (new cljs.core.async.t31026(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__31030 = buff;
if(G__31030){
var bit__16339__auto__ = null;
if(cljs.core.truth_((function (){var or__15658__auto__ = bit__16339__auto__;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return G__31030.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31030.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31030);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31030);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31031 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31031);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31031,ret){
return (function (){
return fn1.call(null,val_31031);
});})(val_31031,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__16545__auto___31032 = n;
var x_31033 = (0);
while(true){
if((x_31033 < n__16545__auto___31032)){
(a[x_31033] = (0));

var G__31034 = (x_31033 + (1));
x_31033 = G__31034;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31035 = (i + (1));
i = G__31035;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31039 = (function (flag,alt_flag,meta31040){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31040 = meta31040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31039.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31041){
var self__ = this;
var _31041__$1 = this;
return self__.meta31040;
});})(flag))
;

cljs.core.async.t31039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31041,meta31040__$1){
var self__ = this;
var _31041__$1 = this;
return (new cljs.core.async.t31039(self__.flag,self__.alt_flag,meta31040__$1));
});})(flag))
;

cljs.core.async.t31039.cljs$lang$type = true;

cljs.core.async.t31039.cljs$lang$ctorStr = "cljs.core.async/t31039";

cljs.core.async.t31039.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31039");
});})(flag))
;

cljs.core.async.__GT_t31039 = ((function (flag){
return (function __GT_t31039(flag__$1,alt_flag__$1,meta31040){
return (new cljs.core.async.t31039(flag__$1,alt_flag__$1,meta31040));
});})(flag))
;

}

return (new cljs.core.async.t31039(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31045 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31045 = (function (cb,flag,alt_handler,meta31046){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31046 = meta31046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31045.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31047){
var self__ = this;
var _31047__$1 = this;
return self__.meta31046;
});

cljs.core.async.t31045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31047,meta31046__$1){
var self__ = this;
var _31047__$1 = this;
return (new cljs.core.async.t31045(self__.cb,self__.flag,self__.alt_handler,meta31046__$1));
});

cljs.core.async.t31045.cljs$lang$type = true;

cljs.core.async.t31045.cljs$lang$ctorStr = "cljs.core.async/t31045";

cljs.core.async.t31045.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31045");
});

cljs.core.async.__GT_t31045 = (function __GT_t31045(cb__$1,flag__$1,alt_handler__$1,meta31046){
return (new cljs.core.async.t31045(cb__$1,flag__$1,alt_handler__$1,meta31046));
});

}

return (new cljs.core.async.t31045(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31048_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31048_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31049_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31049_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15658__auto__ = wport;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31050 = (i + (1));
i = G__31050;
continue;
}
} else {
return null;
}
break;
}
})();
var or__15658__auto__ = ret;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__15646__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__15646__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__15646__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__31051){
var map__31053 = p__31051;
var map__31053__$1 = ((cljs.core.seq_QMARK_.call(null,map__31053))?cljs.core.apply.call(null,cljs.core.hash_map,map__31053):map__31053);
var opts = map__31053__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31051 = null;
if (arguments.length > 1) {
var G__31054__i = 0, G__31054__a = new Array(arguments.length -  1);
while (G__31054__i < G__31054__a.length) {G__31054__a[G__31054__i] = arguments[G__31054__i + 1]; ++G__31054__i;}
  p__31051 = new cljs.core.IndexedSeq(G__31054__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31051);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31055){
var ports = cljs.core.first(arglist__31055);
var p__31051 = cljs.core.rest(arglist__31055);
return alts_BANG___delegate(ports,p__31051);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__18529__auto___31150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___31150){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___31150){
return (function (state_31126){
var state_val_31127 = (state_31126[(1)]);
if((state_val_31127 === (7))){
var inst_31122 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
var statearr_31128_31151 = state_31126__$1;
(statearr_31128_31151[(2)] = inst_31122);

(statearr_31128_31151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (1))){
var state_31126__$1 = state_31126;
var statearr_31129_31152 = state_31126__$1;
(statearr_31129_31152[(2)] = null);

(statearr_31129_31152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (4))){
var inst_31105 = (state_31126[(7)]);
var inst_31105__$1 = (state_31126[(2)]);
var inst_31106 = (inst_31105__$1 == null);
var state_31126__$1 = (function (){var statearr_31130 = state_31126;
(statearr_31130[(7)] = inst_31105__$1);

return statearr_31130;
})();
if(cljs.core.truth_(inst_31106)){
var statearr_31131_31153 = state_31126__$1;
(statearr_31131_31153[(1)] = (5));

} else {
var statearr_31132_31154 = state_31126__$1;
(statearr_31132_31154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (13))){
var state_31126__$1 = state_31126;
var statearr_31133_31155 = state_31126__$1;
(statearr_31133_31155[(2)] = null);

(statearr_31133_31155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (6))){
var inst_31105 = (state_31126[(7)]);
var state_31126__$1 = state_31126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31126__$1,(11),to,inst_31105);
} else {
if((state_val_31127 === (3))){
var inst_31124 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31126__$1,inst_31124);
} else {
if((state_val_31127 === (12))){
var state_31126__$1 = state_31126;
var statearr_31134_31156 = state_31126__$1;
(statearr_31134_31156[(2)] = null);

(statearr_31134_31156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (2))){
var state_31126__$1 = state_31126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31126__$1,(4),from);
} else {
if((state_val_31127 === (11))){
var inst_31115 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
if(cljs.core.truth_(inst_31115)){
var statearr_31135_31157 = state_31126__$1;
(statearr_31135_31157[(1)] = (12));

} else {
var statearr_31136_31158 = state_31126__$1;
(statearr_31136_31158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (9))){
var state_31126__$1 = state_31126;
var statearr_31137_31159 = state_31126__$1;
(statearr_31137_31159[(2)] = null);

(statearr_31137_31159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (5))){
var state_31126__$1 = state_31126;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31138_31160 = state_31126__$1;
(statearr_31138_31160[(1)] = (8));

} else {
var statearr_31139_31161 = state_31126__$1;
(statearr_31139_31161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (14))){
var inst_31120 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
var statearr_31140_31162 = state_31126__$1;
(statearr_31140_31162[(2)] = inst_31120);

(statearr_31140_31162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (10))){
var inst_31112 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
var statearr_31141_31163 = state_31126__$1;
(statearr_31141_31163[(2)] = inst_31112);

(statearr_31141_31163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (8))){
var inst_31109 = cljs.core.async.close_BANG_.call(null,to);
var state_31126__$1 = state_31126;
var statearr_31142_31164 = state_31126__$1;
(statearr_31142_31164[(2)] = inst_31109);

(statearr_31142_31164[(1)] = (10));


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
});})(c__18529__auto___31150))
;
return ((function (switch__18473__auto__,c__18529__auto___31150){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31146 = [null,null,null,null,null,null,null,null];
(statearr_31146[(0)] = state_machine__18474__auto__);

(statearr_31146[(1)] = (1));

return statearr_31146;
});
var state_machine__18474__auto____1 = (function (state_31126){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31147){if((e31147 instanceof Object)){
var ex__18477__auto__ = e31147;
var statearr_31148_31165 = state_31126;
(statearr_31148_31165[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31166 = state_31126;
state_31126 = G__31166;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31126){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___31150))
})();
var state__18531__auto__ = (function (){var statearr_31149 = f__18530__auto__.call(null);
(statearr_31149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___31150);

return statearr_31149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___31150))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31350){
var vec__31351 = p__31350;
var v = cljs.core.nth.call(null,vec__31351,(0),null);
var p = cljs.core.nth.call(null,vec__31351,(1),null);
var job = vec__31351;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18529__auto___31533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___31533,res,vec__31351,v,p,job,jobs,results){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___31533,res,vec__31351,v,p,job,jobs,results){
return (function (state_31356){
var state_val_31357 = (state_31356[(1)]);
if((state_val_31357 === (2))){
var inst_31353 = (state_31356[(2)]);
var inst_31354 = cljs.core.async.close_BANG_.call(null,res);
var state_31356__$1 = (function (){var statearr_31358 = state_31356;
(statearr_31358[(7)] = inst_31353);

return statearr_31358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31356__$1,inst_31354);
} else {
if((state_val_31357 === (1))){
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31356__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18529__auto___31533,res,vec__31351,v,p,job,jobs,results))
;
return ((function (switch__18473__auto__,c__18529__auto___31533,res,vec__31351,v,p,job,jobs,results){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31362 = [null,null,null,null,null,null,null,null];
(statearr_31362[(0)] = state_machine__18474__auto__);

(statearr_31362[(1)] = (1));

return statearr_31362;
});
var state_machine__18474__auto____1 = (function (state_31356){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31363){if((e31363 instanceof Object)){
var ex__18477__auto__ = e31363;
var statearr_31364_31534 = state_31356;
(statearr_31364_31534[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31535 = state_31356;
state_31356 = G__31535;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31356){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___31533,res,vec__31351,v,p,job,jobs,results))
})();
var state__18531__auto__ = (function (){var statearr_31365 = f__18530__auto__.call(null);
(statearr_31365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___31533);

return statearr_31365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___31533,res,vec__31351,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31366){
var vec__31367 = p__31366;
var v = cljs.core.nth.call(null,vec__31367,(0),null);
var p = cljs.core.nth.call(null,vec__31367,(1),null);
var job = vec__31367;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16545__auto___31536 = n;
var __31537 = (0);
while(true){
if((__31537 < n__16545__auto___31536)){
var G__31368_31538 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31368_31538) {
case "async":
var c__18529__auto___31540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31537,c__18529__auto___31540,G__31368_31538,n__16545__auto___31536,jobs,results,process,async){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (__31537,c__18529__auto___31540,G__31368_31538,n__16545__auto___31536,jobs,results,process,async){
return (function (state_31381){
var state_val_31382 = (state_31381[(1)]);
if((state_val_31382 === (7))){
var inst_31377 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31383_31541 = state_31381__$1;
(statearr_31383_31541[(2)] = inst_31377);

(statearr_31383_31541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (6))){
var state_31381__$1 = state_31381;
var statearr_31384_31542 = state_31381__$1;
(statearr_31384_31542[(2)] = null);

(statearr_31384_31542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (5))){
var state_31381__$1 = state_31381;
var statearr_31385_31543 = state_31381__$1;
(statearr_31385_31543[(2)] = null);

(statearr_31385_31543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (4))){
var inst_31371 = (state_31381[(2)]);
var inst_31372 = async.call(null,inst_31371);
var state_31381__$1 = state_31381;
if(cljs.core.truth_(inst_31372)){
var statearr_31386_31544 = state_31381__$1;
(statearr_31386_31544[(1)] = (5));

} else {
var statearr_31387_31545 = state_31381__$1;
(statearr_31387_31545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (3))){
var inst_31379 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31381__$1,inst_31379);
} else {
if((state_val_31382 === (2))){
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31381__$1,(4),jobs);
} else {
if((state_val_31382 === (1))){
var state_31381__$1 = state_31381;
var statearr_31388_31546 = state_31381__$1;
(statearr_31388_31546[(2)] = null);

(statearr_31388_31546[(1)] = (2));


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
});})(__31537,c__18529__auto___31540,G__31368_31538,n__16545__auto___31536,jobs,results,process,async))
;
return ((function (__31537,switch__18473__auto__,c__18529__auto___31540,G__31368_31538,n__16545__auto___31536,jobs,results,process,async){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31392 = [null,null,null,null,null,null,null];
(statearr_31392[(0)] = state_machine__18474__auto__);

(statearr_31392[(1)] = (1));

return statearr_31392;
});
var state_machine__18474__auto____1 = (function (state_31381){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31393){if((e31393 instanceof Object)){
var ex__18477__auto__ = e31393;
var statearr_31394_31547 = state_31381;
(statearr_31394_31547[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31548 = state_31381;
state_31381 = G__31548;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31381){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(__31537,switch__18473__auto__,c__18529__auto___31540,G__31368_31538,n__16545__auto___31536,jobs,results,process,async))
})();
var state__18531__auto__ = (function (){var statearr_31395 = f__18530__auto__.call(null);
(statearr_31395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___31540);

return statearr_31395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(__31537,c__18529__auto___31540,G__31368_31538,n__16545__auto___31536,jobs,results,process,async))
);


break;
case "compute":
var c__18529__auto___31549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31537,c__18529__auto___31549,G__31368_31538,n__16545__auto___31536,jobs,results,process,async){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (__31537,c__18529__auto___31549,G__31368_31538,n__16545__auto___31536,jobs,results,process,async){
return (function (state_31408){
var state_val_31409 = (state_31408[(1)]);
if((state_val_31409 === (7))){
var inst_31404 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31410_31550 = state_31408__$1;
(statearr_31410_31550[(2)] = inst_31404);

(statearr_31410_31550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (6))){
var state_31408__$1 = state_31408;
var statearr_31411_31551 = state_31408__$1;
(statearr_31411_31551[(2)] = null);

(statearr_31411_31551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (5))){
var state_31408__$1 = state_31408;
var statearr_31412_31552 = state_31408__$1;
(statearr_31412_31552[(2)] = null);

(statearr_31412_31552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (4))){
var inst_31398 = (state_31408[(2)]);
var inst_31399 = process.call(null,inst_31398);
var state_31408__$1 = state_31408;
if(cljs.core.truth_(inst_31399)){
var statearr_31413_31553 = state_31408__$1;
(statearr_31413_31553[(1)] = (5));

} else {
var statearr_31414_31554 = state_31408__$1;
(statearr_31414_31554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (3))){
var inst_31406 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31408__$1,inst_31406);
} else {
if((state_val_31409 === (2))){
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31408__$1,(4),jobs);
} else {
if((state_val_31409 === (1))){
var state_31408__$1 = state_31408;
var statearr_31415_31555 = state_31408__$1;
(statearr_31415_31555[(2)] = null);

(statearr_31415_31555[(1)] = (2));


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
});})(__31537,c__18529__auto___31549,G__31368_31538,n__16545__auto___31536,jobs,results,process,async))
;
return ((function (__31537,switch__18473__auto__,c__18529__auto___31549,G__31368_31538,n__16545__auto___31536,jobs,results,process,async){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31419 = [null,null,null,null,null,null,null];
(statearr_31419[(0)] = state_machine__18474__auto__);

(statearr_31419[(1)] = (1));

return statearr_31419;
});
var state_machine__18474__auto____1 = (function (state_31408){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31420){if((e31420 instanceof Object)){
var ex__18477__auto__ = e31420;
var statearr_31421_31556 = state_31408;
(statearr_31421_31556[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31557 = state_31408;
state_31408 = G__31557;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31408){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(__31537,switch__18473__auto__,c__18529__auto___31549,G__31368_31538,n__16545__auto___31536,jobs,results,process,async))
})();
var state__18531__auto__ = (function (){var statearr_31422 = f__18530__auto__.call(null);
(statearr_31422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___31549);

return statearr_31422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(__31537,c__18529__auto___31549,G__31368_31538,n__16545__auto___31536,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31558 = (__31537 + (1));
__31537 = G__31558;
continue;
} else {
}
break;
}

var c__18529__auto___31559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___31559,jobs,results,process,async){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___31559,jobs,results,process,async){
return (function (state_31444){
var state_val_31445 = (state_31444[(1)]);
if((state_val_31445 === (9))){
var inst_31437 = (state_31444[(2)]);
var state_31444__$1 = (function (){var statearr_31446 = state_31444;
(statearr_31446[(7)] = inst_31437);

return statearr_31446;
})();
var statearr_31447_31560 = state_31444__$1;
(statearr_31447_31560[(2)] = null);

(statearr_31447_31560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (8))){
var inst_31430 = (state_31444[(8)]);
var inst_31435 = (state_31444[(2)]);
var state_31444__$1 = (function (){var statearr_31448 = state_31444;
(statearr_31448[(9)] = inst_31435);

return statearr_31448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31444__$1,(9),results,inst_31430);
} else {
if((state_val_31445 === (7))){
var inst_31440 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31449_31561 = state_31444__$1;
(statearr_31449_31561[(2)] = inst_31440);

(statearr_31449_31561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (6))){
var inst_31425 = (state_31444[(10)]);
var inst_31430 = (state_31444[(8)]);
var inst_31430__$1 = cljs.core.async.chan.call(null,(1));
var inst_31431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31432 = [inst_31425,inst_31430__$1];
var inst_31433 = (new cljs.core.PersistentVector(null,2,(5),inst_31431,inst_31432,null));
var state_31444__$1 = (function (){var statearr_31450 = state_31444;
(statearr_31450[(8)] = inst_31430__$1);

return statearr_31450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31444__$1,(8),jobs,inst_31433);
} else {
if((state_val_31445 === (5))){
var inst_31428 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31444__$1 = state_31444;
var statearr_31451_31562 = state_31444__$1;
(statearr_31451_31562[(2)] = inst_31428);

(statearr_31451_31562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (4))){
var inst_31425 = (state_31444[(10)]);
var inst_31425__$1 = (state_31444[(2)]);
var inst_31426 = (inst_31425__$1 == null);
var state_31444__$1 = (function (){var statearr_31452 = state_31444;
(statearr_31452[(10)] = inst_31425__$1);

return statearr_31452;
})();
if(cljs.core.truth_(inst_31426)){
var statearr_31453_31563 = state_31444__$1;
(statearr_31453_31563[(1)] = (5));

} else {
var statearr_31454_31564 = state_31444__$1;
(statearr_31454_31564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (3))){
var inst_31442 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31444__$1,inst_31442);
} else {
if((state_val_31445 === (2))){
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31444__$1,(4),from);
} else {
if((state_val_31445 === (1))){
var state_31444__$1 = state_31444;
var statearr_31455_31565 = state_31444__$1;
(statearr_31455_31565[(2)] = null);

(statearr_31455_31565[(1)] = (2));


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
});})(c__18529__auto___31559,jobs,results,process,async))
;
return ((function (switch__18473__auto__,c__18529__auto___31559,jobs,results,process,async){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31459[(0)] = state_machine__18474__auto__);

(statearr_31459[(1)] = (1));

return statearr_31459;
});
var state_machine__18474__auto____1 = (function (state_31444){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31460){if((e31460 instanceof Object)){
var ex__18477__auto__ = e31460;
var statearr_31461_31566 = state_31444;
(statearr_31461_31566[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31567 = state_31444;
state_31444 = G__31567;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31444){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___31559,jobs,results,process,async))
})();
var state__18531__auto__ = (function (){var statearr_31462 = f__18530__auto__.call(null);
(statearr_31462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___31559);

return statearr_31462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___31559,jobs,results,process,async))
);


var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__,jobs,results,process,async){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__,jobs,results,process,async){
return (function (state_31500){
var state_val_31501 = (state_31500[(1)]);
if((state_val_31501 === (7))){
var inst_31496 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31502_31568 = state_31500__$1;
(statearr_31502_31568[(2)] = inst_31496);

(statearr_31502_31568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (20))){
var state_31500__$1 = state_31500;
var statearr_31503_31569 = state_31500__$1;
(statearr_31503_31569[(2)] = null);

(statearr_31503_31569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (1))){
var state_31500__$1 = state_31500;
var statearr_31504_31570 = state_31500__$1;
(statearr_31504_31570[(2)] = null);

(statearr_31504_31570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (4))){
var inst_31465 = (state_31500[(7)]);
var inst_31465__$1 = (state_31500[(2)]);
var inst_31466 = (inst_31465__$1 == null);
var state_31500__$1 = (function (){var statearr_31505 = state_31500;
(statearr_31505[(7)] = inst_31465__$1);

return statearr_31505;
})();
if(cljs.core.truth_(inst_31466)){
var statearr_31506_31571 = state_31500__$1;
(statearr_31506_31571[(1)] = (5));

} else {
var statearr_31507_31572 = state_31500__$1;
(statearr_31507_31572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (15))){
var inst_31478 = (state_31500[(8)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31500__$1,(18),to,inst_31478);
} else {
if((state_val_31501 === (21))){
var inst_31491 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31508_31573 = state_31500__$1;
(statearr_31508_31573[(2)] = inst_31491);

(statearr_31508_31573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (13))){
var inst_31493 = (state_31500[(2)]);
var state_31500__$1 = (function (){var statearr_31509 = state_31500;
(statearr_31509[(9)] = inst_31493);

return statearr_31509;
})();
var statearr_31510_31574 = state_31500__$1;
(statearr_31510_31574[(2)] = null);

(statearr_31510_31574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (6))){
var inst_31465 = (state_31500[(7)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31500__$1,(11),inst_31465);
} else {
if((state_val_31501 === (17))){
var inst_31486 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
if(cljs.core.truth_(inst_31486)){
var statearr_31511_31575 = state_31500__$1;
(statearr_31511_31575[(1)] = (19));

} else {
var statearr_31512_31576 = state_31500__$1;
(statearr_31512_31576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (3))){
var inst_31498 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31500__$1,inst_31498);
} else {
if((state_val_31501 === (12))){
var inst_31475 = (state_31500[(10)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31500__$1,(14),inst_31475);
} else {
if((state_val_31501 === (2))){
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31500__$1,(4),results);
} else {
if((state_val_31501 === (19))){
var state_31500__$1 = state_31500;
var statearr_31513_31577 = state_31500__$1;
(statearr_31513_31577[(2)] = null);

(statearr_31513_31577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (11))){
var inst_31475 = (state_31500[(2)]);
var state_31500__$1 = (function (){var statearr_31514 = state_31500;
(statearr_31514[(10)] = inst_31475);

return statearr_31514;
})();
var statearr_31515_31578 = state_31500__$1;
(statearr_31515_31578[(2)] = null);

(statearr_31515_31578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (9))){
var state_31500__$1 = state_31500;
var statearr_31516_31579 = state_31500__$1;
(statearr_31516_31579[(2)] = null);

(statearr_31516_31579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (5))){
var state_31500__$1 = state_31500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31517_31580 = state_31500__$1;
(statearr_31517_31580[(1)] = (8));

} else {
var statearr_31518_31581 = state_31500__$1;
(statearr_31518_31581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (14))){
var inst_31478 = (state_31500[(8)]);
var inst_31480 = (state_31500[(11)]);
var inst_31478__$1 = (state_31500[(2)]);
var inst_31479 = (inst_31478__$1 == null);
var inst_31480__$1 = cljs.core.not.call(null,inst_31479);
var state_31500__$1 = (function (){var statearr_31519 = state_31500;
(statearr_31519[(8)] = inst_31478__$1);

(statearr_31519[(11)] = inst_31480__$1);

return statearr_31519;
})();
if(inst_31480__$1){
var statearr_31520_31582 = state_31500__$1;
(statearr_31520_31582[(1)] = (15));

} else {
var statearr_31521_31583 = state_31500__$1;
(statearr_31521_31583[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (16))){
var inst_31480 = (state_31500[(11)]);
var state_31500__$1 = state_31500;
var statearr_31522_31584 = state_31500__$1;
(statearr_31522_31584[(2)] = inst_31480);

(statearr_31522_31584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (10))){
var inst_31472 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31523_31585 = state_31500__$1;
(statearr_31523_31585[(2)] = inst_31472);

(statearr_31523_31585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (18))){
var inst_31483 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31524_31586 = state_31500__$1;
(statearr_31524_31586[(2)] = inst_31483);

(statearr_31524_31586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (8))){
var inst_31469 = cljs.core.async.close_BANG_.call(null,to);
var state_31500__$1 = state_31500;
var statearr_31525_31587 = state_31500__$1;
(statearr_31525_31587[(2)] = inst_31469);

(statearr_31525_31587[(1)] = (10));


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
});})(c__18529__auto__,jobs,results,process,async))
;
return ((function (switch__18473__auto__,c__18529__auto__,jobs,results,process,async){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31529 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31529[(0)] = state_machine__18474__auto__);

(statearr_31529[(1)] = (1));

return statearr_31529;
});
var state_machine__18474__auto____1 = (function (state_31500){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31530){if((e31530 instanceof Object)){
var ex__18477__auto__ = e31530;
var statearr_31531_31588 = state_31500;
(statearr_31531_31588[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31589 = state_31500;
state_31500 = G__31589;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31500){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__,jobs,results,process,async))
})();
var state__18531__auto__ = (function (){var statearr_31532 = f__18530__auto__.call(null);
(statearr_31532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_31532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__,jobs,results,process,async))
);

return c__18529__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18529__auto___31690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___31690,tc,fc){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___31690,tc,fc){
return (function (state_31665){
var state_val_31666 = (state_31665[(1)]);
if((state_val_31666 === (7))){
var inst_31661 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31667_31691 = state_31665__$1;
(statearr_31667_31691[(2)] = inst_31661);

(statearr_31667_31691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (1))){
var state_31665__$1 = state_31665;
var statearr_31668_31692 = state_31665__$1;
(statearr_31668_31692[(2)] = null);

(statearr_31668_31692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (4))){
var inst_31642 = (state_31665[(7)]);
var inst_31642__$1 = (state_31665[(2)]);
var inst_31643 = (inst_31642__$1 == null);
var state_31665__$1 = (function (){var statearr_31669 = state_31665;
(statearr_31669[(7)] = inst_31642__$1);

return statearr_31669;
})();
if(cljs.core.truth_(inst_31643)){
var statearr_31670_31693 = state_31665__$1;
(statearr_31670_31693[(1)] = (5));

} else {
var statearr_31671_31694 = state_31665__$1;
(statearr_31671_31694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (13))){
var state_31665__$1 = state_31665;
var statearr_31672_31695 = state_31665__$1;
(statearr_31672_31695[(2)] = null);

(statearr_31672_31695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (6))){
var inst_31642 = (state_31665[(7)]);
var inst_31648 = p.call(null,inst_31642);
var state_31665__$1 = state_31665;
if(cljs.core.truth_(inst_31648)){
var statearr_31673_31696 = state_31665__$1;
(statearr_31673_31696[(1)] = (9));

} else {
var statearr_31674_31697 = state_31665__$1;
(statearr_31674_31697[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (3))){
var inst_31663 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31665__$1,inst_31663);
} else {
if((state_val_31666 === (12))){
var state_31665__$1 = state_31665;
var statearr_31675_31698 = state_31665__$1;
(statearr_31675_31698[(2)] = null);

(statearr_31675_31698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (2))){
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31665__$1,(4),ch);
} else {
if((state_val_31666 === (11))){
var inst_31642 = (state_31665[(7)]);
var inst_31652 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31665__$1,(8),inst_31652,inst_31642);
} else {
if((state_val_31666 === (9))){
var state_31665__$1 = state_31665;
var statearr_31676_31699 = state_31665__$1;
(statearr_31676_31699[(2)] = tc);

(statearr_31676_31699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (5))){
var inst_31645 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31646 = cljs.core.async.close_BANG_.call(null,fc);
var state_31665__$1 = (function (){var statearr_31677 = state_31665;
(statearr_31677[(8)] = inst_31645);

return statearr_31677;
})();
var statearr_31678_31700 = state_31665__$1;
(statearr_31678_31700[(2)] = inst_31646);

(statearr_31678_31700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (14))){
var inst_31659 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31679_31701 = state_31665__$1;
(statearr_31679_31701[(2)] = inst_31659);

(statearr_31679_31701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (10))){
var state_31665__$1 = state_31665;
var statearr_31680_31702 = state_31665__$1;
(statearr_31680_31702[(2)] = fc);

(statearr_31680_31702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (8))){
var inst_31654 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
if(cljs.core.truth_(inst_31654)){
var statearr_31681_31703 = state_31665__$1;
(statearr_31681_31703[(1)] = (12));

} else {
var statearr_31682_31704 = state_31665__$1;
(statearr_31682_31704[(1)] = (13));

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
});})(c__18529__auto___31690,tc,fc))
;
return ((function (switch__18473__auto__,c__18529__auto___31690,tc,fc){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31686 = [null,null,null,null,null,null,null,null,null];
(statearr_31686[(0)] = state_machine__18474__auto__);

(statearr_31686[(1)] = (1));

return statearr_31686;
});
var state_machine__18474__auto____1 = (function (state_31665){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31687){if((e31687 instanceof Object)){
var ex__18477__auto__ = e31687;
var statearr_31688_31705 = state_31665;
(statearr_31688_31705[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_31665;
state_31665 = G__31706;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___31690,tc,fc))
})();
var state__18531__auto__ = (function (){var statearr_31689 = f__18530__auto__.call(null);
(statearr_31689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___31690);

return statearr_31689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___31690,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__){
return (function (state_31753){
var state_val_31754 = (state_31753[(1)]);
if((state_val_31754 === (7))){
var inst_31749 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
var statearr_31755_31771 = state_31753__$1;
(statearr_31755_31771[(2)] = inst_31749);

(statearr_31755_31771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (6))){
var inst_31742 = (state_31753[(7)]);
var inst_31739 = (state_31753[(8)]);
var inst_31746 = f.call(null,inst_31739,inst_31742);
var inst_31739__$1 = inst_31746;
var state_31753__$1 = (function (){var statearr_31756 = state_31753;
(statearr_31756[(8)] = inst_31739__$1);

return statearr_31756;
})();
var statearr_31757_31772 = state_31753__$1;
(statearr_31757_31772[(2)] = null);

(statearr_31757_31772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (5))){
var inst_31739 = (state_31753[(8)]);
var state_31753__$1 = state_31753;
var statearr_31758_31773 = state_31753__$1;
(statearr_31758_31773[(2)] = inst_31739);

(statearr_31758_31773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (4))){
var inst_31742 = (state_31753[(7)]);
var inst_31742__$1 = (state_31753[(2)]);
var inst_31743 = (inst_31742__$1 == null);
var state_31753__$1 = (function (){var statearr_31759 = state_31753;
(statearr_31759[(7)] = inst_31742__$1);

return statearr_31759;
})();
if(cljs.core.truth_(inst_31743)){
var statearr_31760_31774 = state_31753__$1;
(statearr_31760_31774[(1)] = (5));

} else {
var statearr_31761_31775 = state_31753__$1;
(statearr_31761_31775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (3))){
var inst_31751 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31753__$1,inst_31751);
} else {
if((state_val_31754 === (2))){
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31753__$1,(4),ch);
} else {
if((state_val_31754 === (1))){
var inst_31739 = init;
var state_31753__$1 = (function (){var statearr_31762 = state_31753;
(statearr_31762[(8)] = inst_31739);

return statearr_31762;
})();
var statearr_31763_31776 = state_31753__$1;
(statearr_31763_31776[(2)] = null);

(statearr_31763_31776[(1)] = (2));


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
});})(c__18529__auto__))
;
return ((function (switch__18473__auto__,c__18529__auto__){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31767 = [null,null,null,null,null,null,null,null,null];
(statearr_31767[(0)] = state_machine__18474__auto__);

(statearr_31767[(1)] = (1));

return statearr_31767;
});
var state_machine__18474__auto____1 = (function (state_31753){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31768){if((e31768 instanceof Object)){
var ex__18477__auto__ = e31768;
var statearr_31769_31777 = state_31753;
(statearr_31769_31777[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31778 = state_31753;
state_31753 = G__31778;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31753){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__))
})();
var state__18531__auto__ = (function (){var statearr_31770 = f__18530__auto__.call(null);
(statearr_31770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_31770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__))
);

return c__18529__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__){
return (function (state_31852){
var state_val_31853 = (state_31852[(1)]);
if((state_val_31853 === (7))){
var inst_31834 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31854_31877 = state_31852__$1;
(statearr_31854_31877[(2)] = inst_31834);

(statearr_31854_31877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (1))){
var inst_31828 = cljs.core.seq.call(null,coll);
var inst_31829 = inst_31828;
var state_31852__$1 = (function (){var statearr_31855 = state_31852;
(statearr_31855[(7)] = inst_31829);

return statearr_31855;
})();
var statearr_31856_31878 = state_31852__$1;
(statearr_31856_31878[(2)] = null);

(statearr_31856_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (4))){
var inst_31829 = (state_31852[(7)]);
var inst_31832 = cljs.core.first.call(null,inst_31829);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31852__$1,(7),ch,inst_31832);
} else {
if((state_val_31853 === (13))){
var inst_31846 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31857_31879 = state_31852__$1;
(statearr_31857_31879[(2)] = inst_31846);

(statearr_31857_31879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (6))){
var inst_31837 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
if(cljs.core.truth_(inst_31837)){
var statearr_31858_31880 = state_31852__$1;
(statearr_31858_31880[(1)] = (8));

} else {
var statearr_31859_31881 = state_31852__$1;
(statearr_31859_31881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (3))){
var inst_31850 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31852__$1,inst_31850);
} else {
if((state_val_31853 === (12))){
var state_31852__$1 = state_31852;
var statearr_31860_31882 = state_31852__$1;
(statearr_31860_31882[(2)] = null);

(statearr_31860_31882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (2))){
var inst_31829 = (state_31852[(7)]);
var state_31852__$1 = state_31852;
if(cljs.core.truth_(inst_31829)){
var statearr_31861_31883 = state_31852__$1;
(statearr_31861_31883[(1)] = (4));

} else {
var statearr_31862_31884 = state_31852__$1;
(statearr_31862_31884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (11))){
var inst_31843 = cljs.core.async.close_BANG_.call(null,ch);
var state_31852__$1 = state_31852;
var statearr_31863_31885 = state_31852__$1;
(statearr_31863_31885[(2)] = inst_31843);

(statearr_31863_31885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (9))){
var state_31852__$1 = state_31852;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31864_31886 = state_31852__$1;
(statearr_31864_31886[(1)] = (11));

} else {
var statearr_31865_31887 = state_31852__$1;
(statearr_31865_31887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (5))){
var inst_31829 = (state_31852[(7)]);
var state_31852__$1 = state_31852;
var statearr_31866_31888 = state_31852__$1;
(statearr_31866_31888[(2)] = inst_31829);

(statearr_31866_31888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (10))){
var inst_31848 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31867_31889 = state_31852__$1;
(statearr_31867_31889[(2)] = inst_31848);

(statearr_31867_31889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (8))){
var inst_31829 = (state_31852[(7)]);
var inst_31839 = cljs.core.next.call(null,inst_31829);
var inst_31829__$1 = inst_31839;
var state_31852__$1 = (function (){var statearr_31868 = state_31852;
(statearr_31868[(7)] = inst_31829__$1);

return statearr_31868;
})();
var statearr_31869_31890 = state_31852__$1;
(statearr_31869_31890[(2)] = null);

(statearr_31869_31890[(1)] = (2));


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
});})(c__18529__auto__))
;
return ((function (switch__18473__auto__,c__18529__auto__){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_31873 = [null,null,null,null,null,null,null,null];
(statearr_31873[(0)] = state_machine__18474__auto__);

(statearr_31873[(1)] = (1));

return statearr_31873;
});
var state_machine__18474__auto____1 = (function (state_31852){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_31852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e31874){if((e31874 instanceof Object)){
var ex__18477__auto__ = e31874;
var statearr_31875_31891 = state_31852;
(statearr_31875_31891[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31892 = state_31852;
state_31852 = G__31892;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_31852){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_31852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__))
})();
var state__18531__auto__ = (function (){var statearr_31876 = f__18530__auto__.call(null);
(statearr_31876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_31876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__))
);

return c__18529__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31894 = {};
return obj31894;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__15646__auto__ = _;
if(and__15646__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16302__auto__ = (((_ == null))?null:_);
return (function (){var or__15658__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31896 = {};
return obj31896;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t32118 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32118 = (function (cs,ch,mult,meta32119){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32119 = meta32119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32118.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32118.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32118.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32118.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32118.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32120){
var self__ = this;
var _32120__$1 = this;
return self__.meta32119;
});})(cs))
;

cljs.core.async.t32118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32120,meta32119__$1){
var self__ = this;
var _32120__$1 = this;
return (new cljs.core.async.t32118(self__.cs,self__.ch,self__.mult,meta32119__$1));
});})(cs))
;

cljs.core.async.t32118.cljs$lang$type = true;

cljs.core.async.t32118.cljs$lang$ctorStr = "cljs.core.async/t32118";

cljs.core.async.t32118.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t32118");
});})(cs))
;

cljs.core.async.__GT_t32118 = ((function (cs){
return (function __GT_t32118(cs__$1,ch__$1,mult__$1,meta32119){
return (new cljs.core.async.t32118(cs__$1,ch__$1,mult__$1,meta32119));
});})(cs))
;

}

return (new cljs.core.async.t32118(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18529__auto___32339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___32339,cs,m,dchan,dctr,done){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___32339,cs,m,dchan,dctr,done){
return (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (7))){
var inst_32247 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32253_32340 = state_32251__$1;
(statearr_32253_32340[(2)] = inst_32247);

(statearr_32253_32340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (20))){
var inst_32152 = (state_32251[(7)]);
var inst_32162 = cljs.core.first.call(null,inst_32152);
var inst_32163 = cljs.core.nth.call(null,inst_32162,(0),null);
var inst_32164 = cljs.core.nth.call(null,inst_32162,(1),null);
var state_32251__$1 = (function (){var statearr_32254 = state_32251;
(statearr_32254[(8)] = inst_32163);

return statearr_32254;
})();
if(cljs.core.truth_(inst_32164)){
var statearr_32255_32341 = state_32251__$1;
(statearr_32255_32341[(1)] = (22));

} else {
var statearr_32256_32342 = state_32251__$1;
(statearr_32256_32342[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (27))){
var inst_32199 = (state_32251[(9)]);
var inst_32192 = (state_32251[(10)]);
var inst_32123 = (state_32251[(11)]);
var inst_32194 = (state_32251[(12)]);
var inst_32199__$1 = cljs.core._nth.call(null,inst_32192,inst_32194);
var inst_32200 = cljs.core.async.put_BANG_.call(null,inst_32199__$1,inst_32123,done);
var state_32251__$1 = (function (){var statearr_32257 = state_32251;
(statearr_32257[(9)] = inst_32199__$1);

return statearr_32257;
})();
if(cljs.core.truth_(inst_32200)){
var statearr_32258_32343 = state_32251__$1;
(statearr_32258_32343[(1)] = (30));

} else {
var statearr_32259_32344 = state_32251__$1;
(statearr_32259_32344[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (1))){
var state_32251__$1 = state_32251;
var statearr_32260_32345 = state_32251__$1;
(statearr_32260_32345[(2)] = null);

(statearr_32260_32345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (24))){
var inst_32152 = (state_32251[(7)]);
var inst_32169 = (state_32251[(2)]);
var inst_32170 = cljs.core.next.call(null,inst_32152);
var inst_32132 = inst_32170;
var inst_32133 = null;
var inst_32134 = (0);
var inst_32135 = (0);
var state_32251__$1 = (function (){var statearr_32261 = state_32251;
(statearr_32261[(13)] = inst_32134);

(statearr_32261[(14)] = inst_32135);

(statearr_32261[(15)] = inst_32132);

(statearr_32261[(16)] = inst_32169);

(statearr_32261[(17)] = inst_32133);

return statearr_32261;
})();
var statearr_32262_32346 = state_32251__$1;
(statearr_32262_32346[(2)] = null);

(statearr_32262_32346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (39))){
var state_32251__$1 = state_32251;
var statearr_32266_32347 = state_32251__$1;
(statearr_32266_32347[(2)] = null);

(statearr_32266_32347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (4))){
var inst_32123 = (state_32251[(11)]);
var inst_32123__$1 = (state_32251[(2)]);
var inst_32124 = (inst_32123__$1 == null);
var state_32251__$1 = (function (){var statearr_32267 = state_32251;
(statearr_32267[(11)] = inst_32123__$1);

return statearr_32267;
})();
if(cljs.core.truth_(inst_32124)){
var statearr_32268_32348 = state_32251__$1;
(statearr_32268_32348[(1)] = (5));

} else {
var statearr_32269_32349 = state_32251__$1;
(statearr_32269_32349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (15))){
var inst_32134 = (state_32251[(13)]);
var inst_32135 = (state_32251[(14)]);
var inst_32132 = (state_32251[(15)]);
var inst_32133 = (state_32251[(17)]);
var inst_32148 = (state_32251[(2)]);
var inst_32149 = (inst_32135 + (1));
var tmp32263 = inst_32134;
var tmp32264 = inst_32132;
var tmp32265 = inst_32133;
var inst_32132__$1 = tmp32264;
var inst_32133__$1 = tmp32265;
var inst_32134__$1 = tmp32263;
var inst_32135__$1 = inst_32149;
var state_32251__$1 = (function (){var statearr_32270 = state_32251;
(statearr_32270[(13)] = inst_32134__$1);

(statearr_32270[(14)] = inst_32135__$1);

(statearr_32270[(15)] = inst_32132__$1);

(statearr_32270[(18)] = inst_32148);

(statearr_32270[(17)] = inst_32133__$1);

return statearr_32270;
})();
var statearr_32271_32350 = state_32251__$1;
(statearr_32271_32350[(2)] = null);

(statearr_32271_32350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (21))){
var inst_32173 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32275_32351 = state_32251__$1;
(statearr_32275_32351[(2)] = inst_32173);

(statearr_32275_32351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (31))){
var inst_32199 = (state_32251[(9)]);
var inst_32203 = done.call(null,null);
var inst_32204 = cljs.core.async.untap_STAR_.call(null,m,inst_32199);
var state_32251__$1 = (function (){var statearr_32276 = state_32251;
(statearr_32276[(19)] = inst_32203);

return statearr_32276;
})();
var statearr_32277_32352 = state_32251__$1;
(statearr_32277_32352[(2)] = inst_32204);

(statearr_32277_32352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (32))){
var inst_32191 = (state_32251[(20)]);
var inst_32192 = (state_32251[(10)]);
var inst_32193 = (state_32251[(21)]);
var inst_32194 = (state_32251[(12)]);
var inst_32206 = (state_32251[(2)]);
var inst_32207 = (inst_32194 + (1));
var tmp32272 = inst_32191;
var tmp32273 = inst_32192;
var tmp32274 = inst_32193;
var inst_32191__$1 = tmp32272;
var inst_32192__$1 = tmp32273;
var inst_32193__$1 = tmp32274;
var inst_32194__$1 = inst_32207;
var state_32251__$1 = (function (){var statearr_32278 = state_32251;
(statearr_32278[(20)] = inst_32191__$1);

(statearr_32278[(10)] = inst_32192__$1);

(statearr_32278[(21)] = inst_32193__$1);

(statearr_32278[(22)] = inst_32206);

(statearr_32278[(12)] = inst_32194__$1);

return statearr_32278;
})();
var statearr_32279_32353 = state_32251__$1;
(statearr_32279_32353[(2)] = null);

(statearr_32279_32353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (40))){
var inst_32219 = (state_32251[(23)]);
var inst_32223 = done.call(null,null);
var inst_32224 = cljs.core.async.untap_STAR_.call(null,m,inst_32219);
var state_32251__$1 = (function (){var statearr_32280 = state_32251;
(statearr_32280[(24)] = inst_32223);

return statearr_32280;
})();
var statearr_32281_32354 = state_32251__$1;
(statearr_32281_32354[(2)] = inst_32224);

(statearr_32281_32354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (33))){
var inst_32210 = (state_32251[(25)]);
var inst_32212 = cljs.core.chunked_seq_QMARK_.call(null,inst_32210);
var state_32251__$1 = state_32251;
if(inst_32212){
var statearr_32282_32355 = state_32251__$1;
(statearr_32282_32355[(1)] = (36));

} else {
var statearr_32283_32356 = state_32251__$1;
(statearr_32283_32356[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (13))){
var inst_32142 = (state_32251[(26)]);
var inst_32145 = cljs.core.async.close_BANG_.call(null,inst_32142);
var state_32251__$1 = state_32251;
var statearr_32284_32357 = state_32251__$1;
(statearr_32284_32357[(2)] = inst_32145);

(statearr_32284_32357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (22))){
var inst_32163 = (state_32251[(8)]);
var inst_32166 = cljs.core.async.close_BANG_.call(null,inst_32163);
var state_32251__$1 = state_32251;
var statearr_32285_32358 = state_32251__$1;
(statearr_32285_32358[(2)] = inst_32166);

(statearr_32285_32358[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (36))){
var inst_32210 = (state_32251[(25)]);
var inst_32214 = cljs.core.chunk_first.call(null,inst_32210);
var inst_32215 = cljs.core.chunk_rest.call(null,inst_32210);
var inst_32216 = cljs.core.count.call(null,inst_32214);
var inst_32191 = inst_32215;
var inst_32192 = inst_32214;
var inst_32193 = inst_32216;
var inst_32194 = (0);
var state_32251__$1 = (function (){var statearr_32286 = state_32251;
(statearr_32286[(20)] = inst_32191);

(statearr_32286[(10)] = inst_32192);

(statearr_32286[(21)] = inst_32193);

(statearr_32286[(12)] = inst_32194);

return statearr_32286;
})();
var statearr_32287_32359 = state_32251__$1;
(statearr_32287_32359[(2)] = null);

(statearr_32287_32359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (41))){
var inst_32210 = (state_32251[(25)]);
var inst_32226 = (state_32251[(2)]);
var inst_32227 = cljs.core.next.call(null,inst_32210);
var inst_32191 = inst_32227;
var inst_32192 = null;
var inst_32193 = (0);
var inst_32194 = (0);
var state_32251__$1 = (function (){var statearr_32288 = state_32251;
(statearr_32288[(20)] = inst_32191);

(statearr_32288[(10)] = inst_32192);

(statearr_32288[(27)] = inst_32226);

(statearr_32288[(21)] = inst_32193);

(statearr_32288[(12)] = inst_32194);

return statearr_32288;
})();
var statearr_32289_32360 = state_32251__$1;
(statearr_32289_32360[(2)] = null);

(statearr_32289_32360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (43))){
var state_32251__$1 = state_32251;
var statearr_32290_32361 = state_32251__$1;
(statearr_32290_32361[(2)] = null);

(statearr_32290_32361[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (29))){
var inst_32235 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32291_32362 = state_32251__$1;
(statearr_32291_32362[(2)] = inst_32235);

(statearr_32291_32362[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (44))){
var inst_32244 = (state_32251[(2)]);
var state_32251__$1 = (function (){var statearr_32292 = state_32251;
(statearr_32292[(28)] = inst_32244);

return statearr_32292;
})();
var statearr_32293_32363 = state_32251__$1;
(statearr_32293_32363[(2)] = null);

(statearr_32293_32363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (6))){
var inst_32183 = (state_32251[(29)]);
var inst_32182 = cljs.core.deref.call(null,cs);
var inst_32183__$1 = cljs.core.keys.call(null,inst_32182);
var inst_32184 = cljs.core.count.call(null,inst_32183__$1);
var inst_32185 = cljs.core.reset_BANG_.call(null,dctr,inst_32184);
var inst_32190 = cljs.core.seq.call(null,inst_32183__$1);
var inst_32191 = inst_32190;
var inst_32192 = null;
var inst_32193 = (0);
var inst_32194 = (0);
var state_32251__$1 = (function (){var statearr_32294 = state_32251;
(statearr_32294[(20)] = inst_32191);

(statearr_32294[(10)] = inst_32192);

(statearr_32294[(21)] = inst_32193);

(statearr_32294[(30)] = inst_32185);

(statearr_32294[(12)] = inst_32194);

(statearr_32294[(29)] = inst_32183__$1);

return statearr_32294;
})();
var statearr_32295_32364 = state_32251__$1;
(statearr_32295_32364[(2)] = null);

(statearr_32295_32364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (28))){
var inst_32210 = (state_32251[(25)]);
var inst_32191 = (state_32251[(20)]);
var inst_32210__$1 = cljs.core.seq.call(null,inst_32191);
var state_32251__$1 = (function (){var statearr_32296 = state_32251;
(statearr_32296[(25)] = inst_32210__$1);

return statearr_32296;
})();
if(inst_32210__$1){
var statearr_32297_32365 = state_32251__$1;
(statearr_32297_32365[(1)] = (33));

} else {
var statearr_32298_32366 = state_32251__$1;
(statearr_32298_32366[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (25))){
var inst_32193 = (state_32251[(21)]);
var inst_32194 = (state_32251[(12)]);
var inst_32196 = (inst_32194 < inst_32193);
var inst_32197 = inst_32196;
var state_32251__$1 = state_32251;
if(cljs.core.truth_(inst_32197)){
var statearr_32299_32367 = state_32251__$1;
(statearr_32299_32367[(1)] = (27));

} else {
var statearr_32300_32368 = state_32251__$1;
(statearr_32300_32368[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (34))){
var state_32251__$1 = state_32251;
var statearr_32301_32369 = state_32251__$1;
(statearr_32301_32369[(2)] = null);

(statearr_32301_32369[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (17))){
var state_32251__$1 = state_32251;
var statearr_32302_32370 = state_32251__$1;
(statearr_32302_32370[(2)] = null);

(statearr_32302_32370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (3))){
var inst_32249 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32251__$1,inst_32249);
} else {
if((state_val_32252 === (12))){
var inst_32178 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32303_32371 = state_32251__$1;
(statearr_32303_32371[(2)] = inst_32178);

(statearr_32303_32371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (2))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32251__$1,(4),ch);
} else {
if((state_val_32252 === (23))){
var state_32251__$1 = state_32251;
var statearr_32304_32372 = state_32251__$1;
(statearr_32304_32372[(2)] = null);

(statearr_32304_32372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (35))){
var inst_32233 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32305_32373 = state_32251__$1;
(statearr_32305_32373[(2)] = inst_32233);

(statearr_32305_32373[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (19))){
var inst_32152 = (state_32251[(7)]);
var inst_32156 = cljs.core.chunk_first.call(null,inst_32152);
var inst_32157 = cljs.core.chunk_rest.call(null,inst_32152);
var inst_32158 = cljs.core.count.call(null,inst_32156);
var inst_32132 = inst_32157;
var inst_32133 = inst_32156;
var inst_32134 = inst_32158;
var inst_32135 = (0);
var state_32251__$1 = (function (){var statearr_32306 = state_32251;
(statearr_32306[(13)] = inst_32134);

(statearr_32306[(14)] = inst_32135);

(statearr_32306[(15)] = inst_32132);

(statearr_32306[(17)] = inst_32133);

return statearr_32306;
})();
var statearr_32307_32374 = state_32251__$1;
(statearr_32307_32374[(2)] = null);

(statearr_32307_32374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (11))){
var inst_32152 = (state_32251[(7)]);
var inst_32132 = (state_32251[(15)]);
var inst_32152__$1 = cljs.core.seq.call(null,inst_32132);
var state_32251__$1 = (function (){var statearr_32308 = state_32251;
(statearr_32308[(7)] = inst_32152__$1);

return statearr_32308;
})();
if(inst_32152__$1){
var statearr_32309_32375 = state_32251__$1;
(statearr_32309_32375[(1)] = (16));

} else {
var statearr_32310_32376 = state_32251__$1;
(statearr_32310_32376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (9))){
var inst_32180 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32311_32377 = state_32251__$1;
(statearr_32311_32377[(2)] = inst_32180);

(statearr_32311_32377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (5))){
var inst_32130 = cljs.core.deref.call(null,cs);
var inst_32131 = cljs.core.seq.call(null,inst_32130);
var inst_32132 = inst_32131;
var inst_32133 = null;
var inst_32134 = (0);
var inst_32135 = (0);
var state_32251__$1 = (function (){var statearr_32312 = state_32251;
(statearr_32312[(13)] = inst_32134);

(statearr_32312[(14)] = inst_32135);

(statearr_32312[(15)] = inst_32132);

(statearr_32312[(17)] = inst_32133);

return statearr_32312;
})();
var statearr_32313_32378 = state_32251__$1;
(statearr_32313_32378[(2)] = null);

(statearr_32313_32378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (14))){
var state_32251__$1 = state_32251;
var statearr_32314_32379 = state_32251__$1;
(statearr_32314_32379[(2)] = null);

(statearr_32314_32379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (45))){
var inst_32241 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32315_32380 = state_32251__$1;
(statearr_32315_32380[(2)] = inst_32241);

(statearr_32315_32380[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (26))){
var inst_32183 = (state_32251[(29)]);
var inst_32237 = (state_32251[(2)]);
var inst_32238 = cljs.core.seq.call(null,inst_32183);
var state_32251__$1 = (function (){var statearr_32316 = state_32251;
(statearr_32316[(31)] = inst_32237);

return statearr_32316;
})();
if(inst_32238){
var statearr_32317_32381 = state_32251__$1;
(statearr_32317_32381[(1)] = (42));

} else {
var statearr_32318_32382 = state_32251__$1;
(statearr_32318_32382[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (16))){
var inst_32152 = (state_32251[(7)]);
var inst_32154 = cljs.core.chunked_seq_QMARK_.call(null,inst_32152);
var state_32251__$1 = state_32251;
if(inst_32154){
var statearr_32319_32383 = state_32251__$1;
(statearr_32319_32383[(1)] = (19));

} else {
var statearr_32320_32384 = state_32251__$1;
(statearr_32320_32384[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (38))){
var inst_32230 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32321_32385 = state_32251__$1;
(statearr_32321_32385[(2)] = inst_32230);

(statearr_32321_32385[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (30))){
var state_32251__$1 = state_32251;
var statearr_32322_32386 = state_32251__$1;
(statearr_32322_32386[(2)] = null);

(statearr_32322_32386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (10))){
var inst_32135 = (state_32251[(14)]);
var inst_32133 = (state_32251[(17)]);
var inst_32141 = cljs.core._nth.call(null,inst_32133,inst_32135);
var inst_32142 = cljs.core.nth.call(null,inst_32141,(0),null);
var inst_32143 = cljs.core.nth.call(null,inst_32141,(1),null);
var state_32251__$1 = (function (){var statearr_32323 = state_32251;
(statearr_32323[(26)] = inst_32142);

return statearr_32323;
})();
if(cljs.core.truth_(inst_32143)){
var statearr_32324_32387 = state_32251__$1;
(statearr_32324_32387[(1)] = (13));

} else {
var statearr_32325_32388 = state_32251__$1;
(statearr_32325_32388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (18))){
var inst_32176 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32326_32389 = state_32251__$1;
(statearr_32326_32389[(2)] = inst_32176);

(statearr_32326_32389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (42))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32251__$1,(45),dchan);
} else {
if((state_val_32252 === (37))){
var inst_32210 = (state_32251[(25)]);
var inst_32123 = (state_32251[(11)]);
var inst_32219 = (state_32251[(23)]);
var inst_32219__$1 = cljs.core.first.call(null,inst_32210);
var inst_32220 = cljs.core.async.put_BANG_.call(null,inst_32219__$1,inst_32123,done);
var state_32251__$1 = (function (){var statearr_32327 = state_32251;
(statearr_32327[(23)] = inst_32219__$1);

return statearr_32327;
})();
if(cljs.core.truth_(inst_32220)){
var statearr_32328_32390 = state_32251__$1;
(statearr_32328_32390[(1)] = (39));

} else {
var statearr_32329_32391 = state_32251__$1;
(statearr_32329_32391[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (8))){
var inst_32134 = (state_32251[(13)]);
var inst_32135 = (state_32251[(14)]);
var inst_32137 = (inst_32135 < inst_32134);
var inst_32138 = inst_32137;
var state_32251__$1 = state_32251;
if(cljs.core.truth_(inst_32138)){
var statearr_32330_32392 = state_32251__$1;
(statearr_32330_32392[(1)] = (10));

} else {
var statearr_32331_32393 = state_32251__$1;
(statearr_32331_32393[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18529__auto___32339,cs,m,dchan,dctr,done))
;
return ((function (switch__18473__auto__,c__18529__auto___32339,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_32335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32335[(0)] = state_machine__18474__auto__);

(statearr_32335[(1)] = (1));

return statearr_32335;
});
var state_machine__18474__auto____1 = (function (state_32251){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_32251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e32336){if((e32336 instanceof Object)){
var ex__18477__auto__ = e32336;
var statearr_32337_32394 = state_32251;
(statearr_32337_32394[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32395 = state_32251;
state_32251 = G__32395;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___32339,cs,m,dchan,dctr,done))
})();
var state__18531__auto__ = (function (){var statearr_32338 = f__18530__auto__.call(null);
(statearr_32338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___32339);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___32339,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32397 = {};
return obj32397;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32398){
var map__32403 = p__32398;
var map__32403__$1 = ((cljs.core.seq_QMARK_.call(null,map__32403))?cljs.core.apply.call(null,cljs.core.hash_map,map__32403):map__32403);
var opts = map__32403__$1;
var statearr_32404_32407 = state;
(statearr_32404_32407[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32403,map__32403__$1,opts){
return (function (val){
var statearr_32405_32408 = state;
(statearr_32405_32408[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32403,map__32403__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32406_32409 = state;
(statearr_32406_32409[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32398 = null;
if (arguments.length > 3) {
var G__32410__i = 0, G__32410__a = new Array(arguments.length -  3);
while (G__32410__i < G__32410__a.length) {G__32410__a[G__32410__i] = arguments[G__32410__i + 3]; ++G__32410__i;}
  p__32398 = new cljs.core.IndexedSeq(G__32410__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32398);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32411){
var state = cljs.core.first(arglist__32411);
arglist__32411 = cljs.core.next(arglist__32411);
var cont_block = cljs.core.first(arglist__32411);
arglist__32411 = cljs.core.next(arglist__32411);
var ports = cljs.core.first(arglist__32411);
var p__32398 = cljs.core.rest(arglist__32411);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32398);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32531 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32531 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32532){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32532 = meta32532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32531.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32531.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32533){
var self__ = this;
var _32533__$1 = this;
return self__.meta32532;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32533,meta32532__$1){
var self__ = this;
var _32533__$1 = this;
return (new cljs.core.async.t32531(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32532__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32531.cljs$lang$type = true;

cljs.core.async.t32531.cljs$lang$ctorStr = "cljs.core.async/t32531";

cljs.core.async.t32531.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t32531");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32531 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32531(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32532){
return (new cljs.core.async.t32531(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32532));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32531(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18529__auto___32650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___32650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___32650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32603){
var state_val_32604 = (state_32603[(1)]);
if((state_val_32604 === (7))){
var inst_32547 = (state_32603[(7)]);
var inst_32552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32547);
var state_32603__$1 = state_32603;
var statearr_32605_32651 = state_32603__$1;
(statearr_32605_32651[(2)] = inst_32552);

(statearr_32605_32651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (20))){
var inst_32562 = (state_32603[(8)]);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32603__$1,(23),out,inst_32562);
} else {
if((state_val_32604 === (1))){
var inst_32537 = (state_32603[(9)]);
var inst_32537__$1 = calc_state.call(null);
var inst_32538 = cljs.core.seq_QMARK_.call(null,inst_32537__$1);
var state_32603__$1 = (function (){var statearr_32606 = state_32603;
(statearr_32606[(9)] = inst_32537__$1);

return statearr_32606;
})();
if(inst_32538){
var statearr_32607_32652 = state_32603__$1;
(statearr_32607_32652[(1)] = (2));

} else {
var statearr_32608_32653 = state_32603__$1;
(statearr_32608_32653[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (24))){
var inst_32555 = (state_32603[(10)]);
var inst_32547 = inst_32555;
var state_32603__$1 = (function (){var statearr_32609 = state_32603;
(statearr_32609[(7)] = inst_32547);

return statearr_32609;
})();
var statearr_32610_32654 = state_32603__$1;
(statearr_32610_32654[(2)] = null);

(statearr_32610_32654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (4))){
var inst_32537 = (state_32603[(9)]);
var inst_32543 = (state_32603[(2)]);
var inst_32544 = cljs.core.get.call(null,inst_32543,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32545 = cljs.core.get.call(null,inst_32543,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32546 = cljs.core.get.call(null,inst_32543,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32547 = inst_32537;
var state_32603__$1 = (function (){var statearr_32611 = state_32603;
(statearr_32611[(11)] = inst_32545);

(statearr_32611[(12)] = inst_32544);

(statearr_32611[(13)] = inst_32546);

(statearr_32611[(7)] = inst_32547);

return statearr_32611;
})();
var statearr_32612_32655 = state_32603__$1;
(statearr_32612_32655[(2)] = null);

(statearr_32612_32655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (15))){
var state_32603__$1 = state_32603;
var statearr_32613_32656 = state_32603__$1;
(statearr_32613_32656[(2)] = null);

(statearr_32613_32656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (21))){
var inst_32555 = (state_32603[(10)]);
var inst_32547 = inst_32555;
var state_32603__$1 = (function (){var statearr_32614 = state_32603;
(statearr_32614[(7)] = inst_32547);

return statearr_32614;
})();
var statearr_32615_32657 = state_32603__$1;
(statearr_32615_32657[(2)] = null);

(statearr_32615_32657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (13))){
var inst_32599 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32616_32658 = state_32603__$1;
(statearr_32616_32658[(2)] = inst_32599);

(statearr_32616_32658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (22))){
var inst_32597 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32617_32659 = state_32603__$1;
(statearr_32617_32659[(2)] = inst_32597);

(statearr_32617_32659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (6))){
var inst_32601 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32603__$1,inst_32601);
} else {
if((state_val_32604 === (25))){
var state_32603__$1 = state_32603;
var statearr_32618_32660 = state_32603__$1;
(statearr_32618_32660[(2)] = null);

(statearr_32618_32660[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (17))){
var inst_32577 = (state_32603[(14)]);
var state_32603__$1 = state_32603;
var statearr_32619_32661 = state_32603__$1;
(statearr_32619_32661[(2)] = inst_32577);

(statearr_32619_32661[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (3))){
var inst_32537 = (state_32603[(9)]);
var state_32603__$1 = state_32603;
var statearr_32620_32662 = state_32603__$1;
(statearr_32620_32662[(2)] = inst_32537);

(statearr_32620_32662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (12))){
var inst_32563 = (state_32603[(15)]);
var inst_32577 = (state_32603[(14)]);
var inst_32558 = (state_32603[(16)]);
var inst_32577__$1 = inst_32558.call(null,inst_32563);
var state_32603__$1 = (function (){var statearr_32621 = state_32603;
(statearr_32621[(14)] = inst_32577__$1);

return statearr_32621;
})();
if(cljs.core.truth_(inst_32577__$1)){
var statearr_32622_32663 = state_32603__$1;
(statearr_32622_32663[(1)] = (17));

} else {
var statearr_32623_32664 = state_32603__$1;
(statearr_32623_32664[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (2))){
var inst_32537 = (state_32603[(9)]);
var inst_32540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32537);
var state_32603__$1 = state_32603;
var statearr_32624_32665 = state_32603__$1;
(statearr_32624_32665[(2)] = inst_32540);

(statearr_32624_32665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (23))){
var inst_32588 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
if(cljs.core.truth_(inst_32588)){
var statearr_32625_32666 = state_32603__$1;
(statearr_32625_32666[(1)] = (24));

} else {
var statearr_32626_32667 = state_32603__$1;
(statearr_32626_32667[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (19))){
var inst_32585 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
if(cljs.core.truth_(inst_32585)){
var statearr_32627_32668 = state_32603__$1;
(statearr_32627_32668[(1)] = (20));

} else {
var statearr_32628_32669 = state_32603__$1;
(statearr_32628_32669[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (11))){
var inst_32562 = (state_32603[(8)]);
var inst_32568 = (inst_32562 == null);
var state_32603__$1 = state_32603;
if(cljs.core.truth_(inst_32568)){
var statearr_32629_32670 = state_32603__$1;
(statearr_32629_32670[(1)] = (14));

} else {
var statearr_32630_32671 = state_32603__$1;
(statearr_32630_32671[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (9))){
var inst_32555 = (state_32603[(10)]);
var inst_32555__$1 = (state_32603[(2)]);
var inst_32556 = cljs.core.get.call(null,inst_32555__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32557 = cljs.core.get.call(null,inst_32555__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32558 = cljs.core.get.call(null,inst_32555__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32603__$1 = (function (){var statearr_32631 = state_32603;
(statearr_32631[(17)] = inst_32557);

(statearr_32631[(10)] = inst_32555__$1);

(statearr_32631[(16)] = inst_32558);

return statearr_32631;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32603__$1,(10),inst_32556);
} else {
if((state_val_32604 === (5))){
var inst_32547 = (state_32603[(7)]);
var inst_32550 = cljs.core.seq_QMARK_.call(null,inst_32547);
var state_32603__$1 = state_32603;
if(inst_32550){
var statearr_32632_32672 = state_32603__$1;
(statearr_32632_32672[(1)] = (7));

} else {
var statearr_32633_32673 = state_32603__$1;
(statearr_32633_32673[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (14))){
var inst_32563 = (state_32603[(15)]);
var inst_32570 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32563);
var state_32603__$1 = state_32603;
var statearr_32634_32674 = state_32603__$1;
(statearr_32634_32674[(2)] = inst_32570);

(statearr_32634_32674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (26))){
var inst_32593 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32635_32675 = state_32603__$1;
(statearr_32635_32675[(2)] = inst_32593);

(statearr_32635_32675[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (16))){
var inst_32573 = (state_32603[(2)]);
var inst_32574 = calc_state.call(null);
var inst_32547 = inst_32574;
var state_32603__$1 = (function (){var statearr_32636 = state_32603;
(statearr_32636[(18)] = inst_32573);

(statearr_32636[(7)] = inst_32547);

return statearr_32636;
})();
var statearr_32637_32676 = state_32603__$1;
(statearr_32637_32676[(2)] = null);

(statearr_32637_32676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (10))){
var inst_32562 = (state_32603[(8)]);
var inst_32563 = (state_32603[(15)]);
var inst_32561 = (state_32603[(2)]);
var inst_32562__$1 = cljs.core.nth.call(null,inst_32561,(0),null);
var inst_32563__$1 = cljs.core.nth.call(null,inst_32561,(1),null);
var inst_32564 = (inst_32562__$1 == null);
var inst_32565 = cljs.core._EQ_.call(null,inst_32563__$1,change);
var inst_32566 = (inst_32564) || (inst_32565);
var state_32603__$1 = (function (){var statearr_32638 = state_32603;
(statearr_32638[(8)] = inst_32562__$1);

(statearr_32638[(15)] = inst_32563__$1);

return statearr_32638;
})();
if(cljs.core.truth_(inst_32566)){
var statearr_32639_32677 = state_32603__$1;
(statearr_32639_32677[(1)] = (11));

} else {
var statearr_32640_32678 = state_32603__$1;
(statearr_32640_32678[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (18))){
var inst_32563 = (state_32603[(15)]);
var inst_32557 = (state_32603[(17)]);
var inst_32558 = (state_32603[(16)]);
var inst_32580 = cljs.core.empty_QMARK_.call(null,inst_32558);
var inst_32581 = inst_32557.call(null,inst_32563);
var inst_32582 = cljs.core.not.call(null,inst_32581);
var inst_32583 = (inst_32580) && (inst_32582);
var state_32603__$1 = state_32603;
var statearr_32641_32679 = state_32603__$1;
(statearr_32641_32679[(2)] = inst_32583);

(statearr_32641_32679[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (8))){
var inst_32547 = (state_32603[(7)]);
var state_32603__$1 = state_32603;
var statearr_32642_32680 = state_32603__$1;
(statearr_32642_32680[(2)] = inst_32547);

(statearr_32642_32680[(1)] = (9));


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
});})(c__18529__auto___32650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18473__auto__,c__18529__auto___32650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_32646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32646[(0)] = state_machine__18474__auto__);

(statearr_32646[(1)] = (1));

return statearr_32646;
});
var state_machine__18474__auto____1 = (function (state_32603){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_32603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e32647){if((e32647 instanceof Object)){
var ex__18477__auto__ = e32647;
var statearr_32648_32681 = state_32603;
(statearr_32648_32681[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32603;
state_32603 = G__32682;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_32603){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_32603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___32650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18531__auto__ = (function (){var statearr_32649 = f__18530__auto__.call(null);
(statearr_32649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___32650);

return statearr_32649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___32650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32684 = {};
return obj32684;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__15658__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15658__auto__,mults){
return (function (p1__32685_SHARP_){
if(cljs.core.truth_(p1__32685_SHARP_.call(null,topic))){
return p1__32685_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32685_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15658__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32808 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32808 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32809){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32809 = meta32809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32808.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32808.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32808.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32808.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32810){
var self__ = this;
var _32810__$1 = this;
return self__.meta32809;
});})(mults,ensure_mult))
;

cljs.core.async.t32808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32810,meta32809__$1){
var self__ = this;
var _32810__$1 = this;
return (new cljs.core.async.t32808(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32809__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32808.cljs$lang$type = true;

cljs.core.async.t32808.cljs$lang$ctorStr = "cljs.core.async/t32808";

cljs.core.async.t32808.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t32808");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32808 = ((function (mults,ensure_mult){
return (function __GT_t32808(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32809){
return (new cljs.core.async.t32808(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32809));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32808(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18529__auto___32930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___32930,mults,ensure_mult,p){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___32930,mults,ensure_mult,p){
return (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (7))){
var inst_32878 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32884_32931 = state_32882__$1;
(statearr_32884_32931[(2)] = inst_32878);

(statearr_32884_32931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (20))){
var state_32882__$1 = state_32882;
var statearr_32885_32932 = state_32882__$1;
(statearr_32885_32932[(2)] = null);

(statearr_32885_32932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (1))){
var state_32882__$1 = state_32882;
var statearr_32886_32933 = state_32882__$1;
(statearr_32886_32933[(2)] = null);

(statearr_32886_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (24))){
var inst_32861 = (state_32882[(7)]);
var inst_32870 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32861);
var state_32882__$1 = state_32882;
var statearr_32887_32934 = state_32882__$1;
(statearr_32887_32934[(2)] = inst_32870);

(statearr_32887_32934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (4))){
var inst_32813 = (state_32882[(8)]);
var inst_32813__$1 = (state_32882[(2)]);
var inst_32814 = (inst_32813__$1 == null);
var state_32882__$1 = (function (){var statearr_32888 = state_32882;
(statearr_32888[(8)] = inst_32813__$1);

return statearr_32888;
})();
if(cljs.core.truth_(inst_32814)){
var statearr_32889_32935 = state_32882__$1;
(statearr_32889_32935[(1)] = (5));

} else {
var statearr_32890_32936 = state_32882__$1;
(statearr_32890_32936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (15))){
var inst_32855 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32891_32937 = state_32882__$1;
(statearr_32891_32937[(2)] = inst_32855);

(statearr_32891_32937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (21))){
var inst_32875 = (state_32882[(2)]);
var state_32882__$1 = (function (){var statearr_32892 = state_32882;
(statearr_32892[(9)] = inst_32875);

return statearr_32892;
})();
var statearr_32893_32938 = state_32882__$1;
(statearr_32893_32938[(2)] = null);

(statearr_32893_32938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (13))){
var inst_32837 = (state_32882[(10)]);
var inst_32839 = cljs.core.chunked_seq_QMARK_.call(null,inst_32837);
var state_32882__$1 = state_32882;
if(inst_32839){
var statearr_32894_32939 = state_32882__$1;
(statearr_32894_32939[(1)] = (16));

} else {
var statearr_32895_32940 = state_32882__$1;
(statearr_32895_32940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (22))){
var inst_32867 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
if(cljs.core.truth_(inst_32867)){
var statearr_32896_32941 = state_32882__$1;
(statearr_32896_32941[(1)] = (23));

} else {
var statearr_32897_32942 = state_32882__$1;
(statearr_32897_32942[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (6))){
var inst_32861 = (state_32882[(7)]);
var inst_32813 = (state_32882[(8)]);
var inst_32863 = (state_32882[(11)]);
var inst_32861__$1 = topic_fn.call(null,inst_32813);
var inst_32862 = cljs.core.deref.call(null,mults);
var inst_32863__$1 = cljs.core.get.call(null,inst_32862,inst_32861__$1);
var state_32882__$1 = (function (){var statearr_32898 = state_32882;
(statearr_32898[(7)] = inst_32861__$1);

(statearr_32898[(11)] = inst_32863__$1);

return statearr_32898;
})();
if(cljs.core.truth_(inst_32863__$1)){
var statearr_32899_32943 = state_32882__$1;
(statearr_32899_32943[(1)] = (19));

} else {
var statearr_32900_32944 = state_32882__$1;
(statearr_32900_32944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (25))){
var inst_32872 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32901_32945 = state_32882__$1;
(statearr_32901_32945[(2)] = inst_32872);

(statearr_32901_32945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (17))){
var inst_32837 = (state_32882[(10)]);
var inst_32846 = cljs.core.first.call(null,inst_32837);
var inst_32847 = cljs.core.async.muxch_STAR_.call(null,inst_32846);
var inst_32848 = cljs.core.async.close_BANG_.call(null,inst_32847);
var inst_32849 = cljs.core.next.call(null,inst_32837);
var inst_32823 = inst_32849;
var inst_32824 = null;
var inst_32825 = (0);
var inst_32826 = (0);
var state_32882__$1 = (function (){var statearr_32902 = state_32882;
(statearr_32902[(12)] = inst_32826);

(statearr_32902[(13)] = inst_32848);

(statearr_32902[(14)] = inst_32824);

(statearr_32902[(15)] = inst_32823);

(statearr_32902[(16)] = inst_32825);

return statearr_32902;
})();
var statearr_32903_32946 = state_32882__$1;
(statearr_32903_32946[(2)] = null);

(statearr_32903_32946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (3))){
var inst_32880 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32882__$1,inst_32880);
} else {
if((state_val_32883 === (12))){
var inst_32857 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32904_32947 = state_32882__$1;
(statearr_32904_32947[(2)] = inst_32857);

(statearr_32904_32947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (2))){
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32882__$1,(4),ch);
} else {
if((state_val_32883 === (23))){
var state_32882__$1 = state_32882;
var statearr_32905_32948 = state_32882__$1;
(statearr_32905_32948[(2)] = null);

(statearr_32905_32948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (19))){
var inst_32813 = (state_32882[(8)]);
var inst_32863 = (state_32882[(11)]);
var inst_32865 = cljs.core.async.muxch_STAR_.call(null,inst_32863);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32882__$1,(22),inst_32865,inst_32813);
} else {
if((state_val_32883 === (11))){
var inst_32837 = (state_32882[(10)]);
var inst_32823 = (state_32882[(15)]);
var inst_32837__$1 = cljs.core.seq.call(null,inst_32823);
var state_32882__$1 = (function (){var statearr_32906 = state_32882;
(statearr_32906[(10)] = inst_32837__$1);

return statearr_32906;
})();
if(inst_32837__$1){
var statearr_32907_32949 = state_32882__$1;
(statearr_32907_32949[(1)] = (13));

} else {
var statearr_32908_32950 = state_32882__$1;
(statearr_32908_32950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (9))){
var inst_32859 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32909_32951 = state_32882__$1;
(statearr_32909_32951[(2)] = inst_32859);

(statearr_32909_32951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (5))){
var inst_32820 = cljs.core.deref.call(null,mults);
var inst_32821 = cljs.core.vals.call(null,inst_32820);
var inst_32822 = cljs.core.seq.call(null,inst_32821);
var inst_32823 = inst_32822;
var inst_32824 = null;
var inst_32825 = (0);
var inst_32826 = (0);
var state_32882__$1 = (function (){var statearr_32910 = state_32882;
(statearr_32910[(12)] = inst_32826);

(statearr_32910[(14)] = inst_32824);

(statearr_32910[(15)] = inst_32823);

(statearr_32910[(16)] = inst_32825);

return statearr_32910;
})();
var statearr_32911_32952 = state_32882__$1;
(statearr_32911_32952[(2)] = null);

(statearr_32911_32952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (14))){
var state_32882__$1 = state_32882;
var statearr_32915_32953 = state_32882__$1;
(statearr_32915_32953[(2)] = null);

(statearr_32915_32953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (16))){
var inst_32837 = (state_32882[(10)]);
var inst_32841 = cljs.core.chunk_first.call(null,inst_32837);
var inst_32842 = cljs.core.chunk_rest.call(null,inst_32837);
var inst_32843 = cljs.core.count.call(null,inst_32841);
var inst_32823 = inst_32842;
var inst_32824 = inst_32841;
var inst_32825 = inst_32843;
var inst_32826 = (0);
var state_32882__$1 = (function (){var statearr_32916 = state_32882;
(statearr_32916[(12)] = inst_32826);

(statearr_32916[(14)] = inst_32824);

(statearr_32916[(15)] = inst_32823);

(statearr_32916[(16)] = inst_32825);

return statearr_32916;
})();
var statearr_32917_32954 = state_32882__$1;
(statearr_32917_32954[(2)] = null);

(statearr_32917_32954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (10))){
var inst_32826 = (state_32882[(12)]);
var inst_32824 = (state_32882[(14)]);
var inst_32823 = (state_32882[(15)]);
var inst_32825 = (state_32882[(16)]);
var inst_32831 = cljs.core._nth.call(null,inst_32824,inst_32826);
var inst_32832 = cljs.core.async.muxch_STAR_.call(null,inst_32831);
var inst_32833 = cljs.core.async.close_BANG_.call(null,inst_32832);
var inst_32834 = (inst_32826 + (1));
var tmp32912 = inst_32824;
var tmp32913 = inst_32823;
var tmp32914 = inst_32825;
var inst_32823__$1 = tmp32913;
var inst_32824__$1 = tmp32912;
var inst_32825__$1 = tmp32914;
var inst_32826__$1 = inst_32834;
var state_32882__$1 = (function (){var statearr_32918 = state_32882;
(statearr_32918[(12)] = inst_32826__$1);

(statearr_32918[(17)] = inst_32833);

(statearr_32918[(14)] = inst_32824__$1);

(statearr_32918[(15)] = inst_32823__$1);

(statearr_32918[(16)] = inst_32825__$1);

return statearr_32918;
})();
var statearr_32919_32955 = state_32882__$1;
(statearr_32919_32955[(2)] = null);

(statearr_32919_32955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (18))){
var inst_32852 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32920_32956 = state_32882__$1;
(statearr_32920_32956[(2)] = inst_32852);

(statearr_32920_32956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (8))){
var inst_32826 = (state_32882[(12)]);
var inst_32825 = (state_32882[(16)]);
var inst_32828 = (inst_32826 < inst_32825);
var inst_32829 = inst_32828;
var state_32882__$1 = state_32882;
if(cljs.core.truth_(inst_32829)){
var statearr_32921_32957 = state_32882__$1;
(statearr_32921_32957[(1)] = (10));

} else {
var statearr_32922_32958 = state_32882__$1;
(statearr_32922_32958[(1)] = (11));

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
});})(c__18529__auto___32930,mults,ensure_mult,p))
;
return ((function (switch__18473__auto__,c__18529__auto___32930,mults,ensure_mult,p){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_32926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32926[(0)] = state_machine__18474__auto__);

(statearr_32926[(1)] = (1));

return statearr_32926;
});
var state_machine__18474__auto____1 = (function (state_32882){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_32882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e32927){if((e32927 instanceof Object)){
var ex__18477__auto__ = e32927;
var statearr_32928_32959 = state_32882;
(statearr_32928_32959[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32960 = state_32882;
state_32882 = G__32960;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___32930,mults,ensure_mult,p))
})();
var state__18531__auto__ = (function (){var statearr_32929 = f__18530__auto__.call(null);
(statearr_32929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___32930);

return statearr_32929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___32930,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18529__auto___33097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___33097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___33097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33067){
var state_val_33068 = (state_33067[(1)]);
if((state_val_33068 === (7))){
var state_33067__$1 = state_33067;
var statearr_33069_33098 = state_33067__$1;
(statearr_33069_33098[(2)] = null);

(statearr_33069_33098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (1))){
var state_33067__$1 = state_33067;
var statearr_33070_33099 = state_33067__$1;
(statearr_33070_33099[(2)] = null);

(statearr_33070_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (4))){
var inst_33031 = (state_33067[(7)]);
var inst_33033 = (inst_33031 < cnt);
var state_33067__$1 = state_33067;
if(cljs.core.truth_(inst_33033)){
var statearr_33071_33100 = state_33067__$1;
(statearr_33071_33100[(1)] = (6));

} else {
var statearr_33072_33101 = state_33067__$1;
(statearr_33072_33101[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (15))){
var inst_33063 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
var statearr_33073_33102 = state_33067__$1;
(statearr_33073_33102[(2)] = inst_33063);

(statearr_33073_33102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (13))){
var inst_33056 = cljs.core.async.close_BANG_.call(null,out);
var state_33067__$1 = state_33067;
var statearr_33074_33103 = state_33067__$1;
(statearr_33074_33103[(2)] = inst_33056);

(statearr_33074_33103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (6))){
var state_33067__$1 = state_33067;
var statearr_33075_33104 = state_33067__$1;
(statearr_33075_33104[(2)] = null);

(statearr_33075_33104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (3))){
var inst_33065 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33067__$1,inst_33065);
} else {
if((state_val_33068 === (12))){
var inst_33053 = (state_33067[(8)]);
var inst_33053__$1 = (state_33067[(2)]);
var inst_33054 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33053__$1);
var state_33067__$1 = (function (){var statearr_33076 = state_33067;
(statearr_33076[(8)] = inst_33053__$1);

return statearr_33076;
})();
if(cljs.core.truth_(inst_33054)){
var statearr_33077_33105 = state_33067__$1;
(statearr_33077_33105[(1)] = (13));

} else {
var statearr_33078_33106 = state_33067__$1;
(statearr_33078_33106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (2))){
var inst_33030 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33031 = (0);
var state_33067__$1 = (function (){var statearr_33079 = state_33067;
(statearr_33079[(7)] = inst_33031);

(statearr_33079[(9)] = inst_33030);

return statearr_33079;
})();
var statearr_33080_33107 = state_33067__$1;
(statearr_33080_33107[(2)] = null);

(statearr_33080_33107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (11))){
var inst_33031 = (state_33067[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33067,(10),Object,null,(9));
var inst_33040 = chs__$1.call(null,inst_33031);
var inst_33041 = done.call(null,inst_33031);
var inst_33042 = cljs.core.async.take_BANG_.call(null,inst_33040,inst_33041);
var state_33067__$1 = state_33067;
var statearr_33081_33108 = state_33067__$1;
(statearr_33081_33108[(2)] = inst_33042);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (9))){
var inst_33031 = (state_33067[(7)]);
var inst_33044 = (state_33067[(2)]);
var inst_33045 = (inst_33031 + (1));
var inst_33031__$1 = inst_33045;
var state_33067__$1 = (function (){var statearr_33082 = state_33067;
(statearr_33082[(7)] = inst_33031__$1);

(statearr_33082[(10)] = inst_33044);

return statearr_33082;
})();
var statearr_33083_33109 = state_33067__$1;
(statearr_33083_33109[(2)] = null);

(statearr_33083_33109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (5))){
var inst_33051 = (state_33067[(2)]);
var state_33067__$1 = (function (){var statearr_33084 = state_33067;
(statearr_33084[(11)] = inst_33051);

return statearr_33084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33067__$1,(12),dchan);
} else {
if((state_val_33068 === (14))){
var inst_33053 = (state_33067[(8)]);
var inst_33058 = cljs.core.apply.call(null,f,inst_33053);
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33067__$1,(16),out,inst_33058);
} else {
if((state_val_33068 === (16))){
var inst_33060 = (state_33067[(2)]);
var state_33067__$1 = (function (){var statearr_33085 = state_33067;
(statearr_33085[(12)] = inst_33060);

return statearr_33085;
})();
var statearr_33086_33110 = state_33067__$1;
(statearr_33086_33110[(2)] = null);

(statearr_33086_33110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (10))){
var inst_33035 = (state_33067[(2)]);
var inst_33036 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33067__$1 = (function (){var statearr_33087 = state_33067;
(statearr_33087[(13)] = inst_33035);

return statearr_33087;
})();
var statearr_33088_33111 = state_33067__$1;
(statearr_33088_33111[(2)] = inst_33036);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (8))){
var inst_33049 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
var statearr_33089_33112 = state_33067__$1;
(statearr_33089_33112[(2)] = inst_33049);

(statearr_33089_33112[(1)] = (5));


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
});})(c__18529__auto___33097,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18473__auto__,c__18529__auto___33097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_33093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33093[(0)] = state_machine__18474__auto__);

(statearr_33093[(1)] = (1));

return statearr_33093;
});
var state_machine__18474__auto____1 = (function (state_33067){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_33067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e33094){if((e33094 instanceof Object)){
var ex__18477__auto__ = e33094;
var statearr_33095_33113 = state_33067;
(statearr_33095_33113[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33114 = state_33067;
state_33067 = G__33114;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_33067){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_33067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___33097,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18531__auto__ = (function (){var statearr_33096 = f__18530__auto__.call(null);
(statearr_33096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___33097);

return statearr_33096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___33097,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18529__auto___33222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___33222,out){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___33222,out){
return (function (state_33198){
var state_val_33199 = (state_33198[(1)]);
if((state_val_33199 === (7))){
var inst_33177 = (state_33198[(7)]);
var inst_33178 = (state_33198[(8)]);
var inst_33177__$1 = (state_33198[(2)]);
var inst_33178__$1 = cljs.core.nth.call(null,inst_33177__$1,(0),null);
var inst_33179 = cljs.core.nth.call(null,inst_33177__$1,(1),null);
var inst_33180 = (inst_33178__$1 == null);
var state_33198__$1 = (function (){var statearr_33200 = state_33198;
(statearr_33200[(7)] = inst_33177__$1);

(statearr_33200[(9)] = inst_33179);

(statearr_33200[(8)] = inst_33178__$1);

return statearr_33200;
})();
if(cljs.core.truth_(inst_33180)){
var statearr_33201_33223 = state_33198__$1;
(statearr_33201_33223[(1)] = (8));

} else {
var statearr_33202_33224 = state_33198__$1;
(statearr_33202_33224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (1))){
var inst_33169 = cljs.core.vec.call(null,chs);
var inst_33170 = inst_33169;
var state_33198__$1 = (function (){var statearr_33203 = state_33198;
(statearr_33203[(10)] = inst_33170);

return statearr_33203;
})();
var statearr_33204_33225 = state_33198__$1;
(statearr_33204_33225[(2)] = null);

(statearr_33204_33225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (4))){
var inst_33170 = (state_33198[(10)]);
var state_33198__$1 = state_33198;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33198__$1,(7),inst_33170);
} else {
if((state_val_33199 === (6))){
var inst_33194 = (state_33198[(2)]);
var state_33198__$1 = state_33198;
var statearr_33205_33226 = state_33198__$1;
(statearr_33205_33226[(2)] = inst_33194);

(statearr_33205_33226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (3))){
var inst_33196 = (state_33198[(2)]);
var state_33198__$1 = state_33198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33198__$1,inst_33196);
} else {
if((state_val_33199 === (2))){
var inst_33170 = (state_33198[(10)]);
var inst_33172 = cljs.core.count.call(null,inst_33170);
var inst_33173 = (inst_33172 > (0));
var state_33198__$1 = state_33198;
if(cljs.core.truth_(inst_33173)){
var statearr_33207_33227 = state_33198__$1;
(statearr_33207_33227[(1)] = (4));

} else {
var statearr_33208_33228 = state_33198__$1;
(statearr_33208_33228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (11))){
var inst_33170 = (state_33198[(10)]);
var inst_33187 = (state_33198[(2)]);
var tmp33206 = inst_33170;
var inst_33170__$1 = tmp33206;
var state_33198__$1 = (function (){var statearr_33209 = state_33198;
(statearr_33209[(10)] = inst_33170__$1);

(statearr_33209[(11)] = inst_33187);

return statearr_33209;
})();
var statearr_33210_33229 = state_33198__$1;
(statearr_33210_33229[(2)] = null);

(statearr_33210_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (9))){
var inst_33178 = (state_33198[(8)]);
var state_33198__$1 = state_33198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33198__$1,(11),out,inst_33178);
} else {
if((state_val_33199 === (5))){
var inst_33192 = cljs.core.async.close_BANG_.call(null,out);
var state_33198__$1 = state_33198;
var statearr_33211_33230 = state_33198__$1;
(statearr_33211_33230[(2)] = inst_33192);

(statearr_33211_33230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (10))){
var inst_33190 = (state_33198[(2)]);
var state_33198__$1 = state_33198;
var statearr_33212_33231 = state_33198__$1;
(statearr_33212_33231[(2)] = inst_33190);

(statearr_33212_33231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33199 === (8))){
var inst_33177 = (state_33198[(7)]);
var inst_33179 = (state_33198[(9)]);
var inst_33178 = (state_33198[(8)]);
var inst_33170 = (state_33198[(10)]);
var inst_33182 = (function (){var c = inst_33179;
var v = inst_33178;
var vec__33175 = inst_33177;
var cs = inst_33170;
return ((function (c,v,vec__33175,cs,inst_33177,inst_33179,inst_33178,inst_33170,state_val_33199,c__18529__auto___33222,out){
return (function (p1__33115_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33115_SHARP_);
});
;})(c,v,vec__33175,cs,inst_33177,inst_33179,inst_33178,inst_33170,state_val_33199,c__18529__auto___33222,out))
})();
var inst_33183 = cljs.core.filterv.call(null,inst_33182,inst_33170);
var inst_33170__$1 = inst_33183;
var state_33198__$1 = (function (){var statearr_33213 = state_33198;
(statearr_33213[(10)] = inst_33170__$1);

return statearr_33213;
})();
var statearr_33214_33232 = state_33198__$1;
(statearr_33214_33232[(2)] = null);

(statearr_33214_33232[(1)] = (2));


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
});})(c__18529__auto___33222,out))
;
return ((function (switch__18473__auto__,c__18529__auto___33222,out){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_33218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33218[(0)] = state_machine__18474__auto__);

(statearr_33218[(1)] = (1));

return statearr_33218;
});
var state_machine__18474__auto____1 = (function (state_33198){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_33198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e33219){if((e33219 instanceof Object)){
var ex__18477__auto__ = e33219;
var statearr_33220_33233 = state_33198;
(statearr_33220_33233[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33234 = state_33198;
state_33198 = G__33234;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_33198){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_33198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___33222,out))
})();
var state__18531__auto__ = (function (){var statearr_33221 = f__18530__auto__.call(null);
(statearr_33221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___33222);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___33222,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18529__auto___33327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___33327,out){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___33327,out){
return (function (state_33304){
var state_val_33305 = (state_33304[(1)]);
if((state_val_33305 === (7))){
var inst_33286 = (state_33304[(7)]);
var inst_33286__$1 = (state_33304[(2)]);
var inst_33287 = (inst_33286__$1 == null);
var inst_33288 = cljs.core.not.call(null,inst_33287);
var state_33304__$1 = (function (){var statearr_33306 = state_33304;
(statearr_33306[(7)] = inst_33286__$1);

return statearr_33306;
})();
if(inst_33288){
var statearr_33307_33328 = state_33304__$1;
(statearr_33307_33328[(1)] = (8));

} else {
var statearr_33308_33329 = state_33304__$1;
(statearr_33308_33329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (1))){
var inst_33281 = (0);
var state_33304__$1 = (function (){var statearr_33309 = state_33304;
(statearr_33309[(8)] = inst_33281);

return statearr_33309;
})();
var statearr_33310_33330 = state_33304__$1;
(statearr_33310_33330[(2)] = null);

(statearr_33310_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (4))){
var state_33304__$1 = state_33304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33304__$1,(7),ch);
} else {
if((state_val_33305 === (6))){
var inst_33299 = (state_33304[(2)]);
var state_33304__$1 = state_33304;
var statearr_33311_33331 = state_33304__$1;
(statearr_33311_33331[(2)] = inst_33299);

(statearr_33311_33331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (3))){
var inst_33301 = (state_33304[(2)]);
var inst_33302 = cljs.core.async.close_BANG_.call(null,out);
var state_33304__$1 = (function (){var statearr_33312 = state_33304;
(statearr_33312[(9)] = inst_33301);

return statearr_33312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33304__$1,inst_33302);
} else {
if((state_val_33305 === (2))){
var inst_33281 = (state_33304[(8)]);
var inst_33283 = (inst_33281 < n);
var state_33304__$1 = state_33304;
if(cljs.core.truth_(inst_33283)){
var statearr_33313_33332 = state_33304__$1;
(statearr_33313_33332[(1)] = (4));

} else {
var statearr_33314_33333 = state_33304__$1;
(statearr_33314_33333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (11))){
var inst_33281 = (state_33304[(8)]);
var inst_33291 = (state_33304[(2)]);
var inst_33292 = (inst_33281 + (1));
var inst_33281__$1 = inst_33292;
var state_33304__$1 = (function (){var statearr_33315 = state_33304;
(statearr_33315[(10)] = inst_33291);

(statearr_33315[(8)] = inst_33281__$1);

return statearr_33315;
})();
var statearr_33316_33334 = state_33304__$1;
(statearr_33316_33334[(2)] = null);

(statearr_33316_33334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (9))){
var state_33304__$1 = state_33304;
var statearr_33317_33335 = state_33304__$1;
(statearr_33317_33335[(2)] = null);

(statearr_33317_33335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (5))){
var state_33304__$1 = state_33304;
var statearr_33318_33336 = state_33304__$1;
(statearr_33318_33336[(2)] = null);

(statearr_33318_33336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (10))){
var inst_33296 = (state_33304[(2)]);
var state_33304__$1 = state_33304;
var statearr_33319_33337 = state_33304__$1;
(statearr_33319_33337[(2)] = inst_33296);

(statearr_33319_33337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33305 === (8))){
var inst_33286 = (state_33304[(7)]);
var state_33304__$1 = state_33304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33304__$1,(11),out,inst_33286);
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
});})(c__18529__auto___33327,out))
;
return ((function (switch__18473__auto__,c__18529__auto___33327,out){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_33323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33323[(0)] = state_machine__18474__auto__);

(statearr_33323[(1)] = (1));

return statearr_33323;
});
var state_machine__18474__auto____1 = (function (state_33304){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_33304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e33324){if((e33324 instanceof Object)){
var ex__18477__auto__ = e33324;
var statearr_33325_33338 = state_33304;
(statearr_33325_33338[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33339 = state_33304;
state_33304 = G__33339;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_33304){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_33304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___33327,out))
})();
var state__18531__auto__ = (function (){var statearr_33326 = f__18530__auto__.call(null);
(statearr_33326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___33327);

return statearr_33326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___33327,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t33347 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33347 = (function (ch,f,map_LT_,meta33348){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33348 = meta33348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33347.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33347.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33350 = (function (fn1,_,meta33348,map_LT_,f,ch,meta33351){
this.fn1 = fn1;
this._ = _;
this.meta33348 = meta33348;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33351 = meta33351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33340_SHARP_){
return f1.call(null,(((p1__33340_SHARP_ == null))?null:self__.f.call(null,p1__33340_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33352){
var self__ = this;
var _33352__$1 = this;
return self__.meta33351;
});})(___$1))
;

cljs.core.async.t33350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33352,meta33351__$1){
var self__ = this;
var _33352__$1 = this;
return (new cljs.core.async.t33350(self__.fn1,self__._,self__.meta33348,self__.map_LT_,self__.f,self__.ch,meta33351__$1));
});})(___$1))
;

cljs.core.async.t33350.cljs$lang$type = true;

cljs.core.async.t33350.cljs$lang$ctorStr = "cljs.core.async/t33350";

cljs.core.async.t33350.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33350");
});})(___$1))
;

cljs.core.async.__GT_t33350 = ((function (___$1){
return (function __GT_t33350(fn1__$1,___$2,meta33348__$1,map_LT___$1,f__$1,ch__$1,meta33351){
return (new cljs.core.async.t33350(fn1__$1,___$2,meta33348__$1,map_LT___$1,f__$1,ch__$1,meta33351));
});})(___$1))
;

}

return (new cljs.core.async.t33350(fn1,___$1,self__.meta33348,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__15646__auto__ = ret;
if(cljs.core.truth_(and__15646__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__15646__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33347.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33349){
var self__ = this;
var _33349__$1 = this;
return self__.meta33348;
});

cljs.core.async.t33347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33349,meta33348__$1){
var self__ = this;
var _33349__$1 = this;
return (new cljs.core.async.t33347(self__.ch,self__.f,self__.map_LT_,meta33348__$1));
});

cljs.core.async.t33347.cljs$lang$type = true;

cljs.core.async.t33347.cljs$lang$ctorStr = "cljs.core.async/t33347";

cljs.core.async.t33347.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33347");
});

cljs.core.async.__GT_t33347 = (function __GT_t33347(ch__$1,f__$1,map_LT___$1,meta33348){
return (new cljs.core.async.t33347(ch__$1,f__$1,map_LT___$1,meta33348));
});

}

return (new cljs.core.async.t33347(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33356 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33356 = (function (ch,f,map_GT_,meta33357){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33357 = meta33357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33358){
var self__ = this;
var _33358__$1 = this;
return self__.meta33357;
});

cljs.core.async.t33356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33358,meta33357__$1){
var self__ = this;
var _33358__$1 = this;
return (new cljs.core.async.t33356(self__.ch,self__.f,self__.map_GT_,meta33357__$1));
});

cljs.core.async.t33356.cljs$lang$type = true;

cljs.core.async.t33356.cljs$lang$ctorStr = "cljs.core.async/t33356";

cljs.core.async.t33356.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33356");
});

cljs.core.async.__GT_t33356 = (function __GT_t33356(ch__$1,f__$1,map_GT___$1,meta33357){
return (new cljs.core.async.t33356(ch__$1,f__$1,map_GT___$1,meta33357));
});

}

return (new cljs.core.async.t33356(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33362 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33362 = (function (ch,p,filter_GT_,meta33363){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33363 = meta33363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33362.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33362.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33362.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33364){
var self__ = this;
var _33364__$1 = this;
return self__.meta33363;
});

cljs.core.async.t33362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33364,meta33363__$1){
var self__ = this;
var _33364__$1 = this;
return (new cljs.core.async.t33362(self__.ch,self__.p,self__.filter_GT_,meta33363__$1));
});

cljs.core.async.t33362.cljs$lang$type = true;

cljs.core.async.t33362.cljs$lang$ctorStr = "cljs.core.async/t33362";

cljs.core.async.t33362.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33362");
});

cljs.core.async.__GT_t33362 = (function __GT_t33362(ch__$1,p__$1,filter_GT___$1,meta33363){
return (new cljs.core.async.t33362(ch__$1,p__$1,filter_GT___$1,meta33363));
});

}

return (new cljs.core.async.t33362(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18529__auto___33447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___33447,out){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___33447,out){
return (function (state_33426){
var state_val_33427 = (state_33426[(1)]);
if((state_val_33427 === (7))){
var inst_33422 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33428_33448 = state_33426__$1;
(statearr_33428_33448[(2)] = inst_33422);

(statearr_33428_33448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (1))){
var state_33426__$1 = state_33426;
var statearr_33429_33449 = state_33426__$1;
(statearr_33429_33449[(2)] = null);

(statearr_33429_33449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (4))){
var inst_33408 = (state_33426[(7)]);
var inst_33408__$1 = (state_33426[(2)]);
var inst_33409 = (inst_33408__$1 == null);
var state_33426__$1 = (function (){var statearr_33430 = state_33426;
(statearr_33430[(7)] = inst_33408__$1);

return statearr_33430;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33431_33450 = state_33426__$1;
(statearr_33431_33450[(1)] = (5));

} else {
var statearr_33432_33451 = state_33426__$1;
(statearr_33432_33451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (6))){
var inst_33408 = (state_33426[(7)]);
var inst_33413 = p.call(null,inst_33408);
var state_33426__$1 = state_33426;
if(cljs.core.truth_(inst_33413)){
var statearr_33433_33452 = state_33426__$1;
(statearr_33433_33452[(1)] = (8));

} else {
var statearr_33434_33453 = state_33426__$1;
(statearr_33434_33453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (3))){
var inst_33424 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33426__$1,inst_33424);
} else {
if((state_val_33427 === (2))){
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33426__$1,(4),ch);
} else {
if((state_val_33427 === (11))){
var inst_33416 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33435_33454 = state_33426__$1;
(statearr_33435_33454[(2)] = inst_33416);

(statearr_33435_33454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (9))){
var state_33426__$1 = state_33426;
var statearr_33436_33455 = state_33426__$1;
(statearr_33436_33455[(2)] = null);

(statearr_33436_33455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (5))){
var inst_33411 = cljs.core.async.close_BANG_.call(null,out);
var state_33426__$1 = state_33426;
var statearr_33437_33456 = state_33426__$1;
(statearr_33437_33456[(2)] = inst_33411);

(statearr_33437_33456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (10))){
var inst_33419 = (state_33426[(2)]);
var state_33426__$1 = (function (){var statearr_33438 = state_33426;
(statearr_33438[(8)] = inst_33419);

return statearr_33438;
})();
var statearr_33439_33457 = state_33426__$1;
(statearr_33439_33457[(2)] = null);

(statearr_33439_33457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (8))){
var inst_33408 = (state_33426[(7)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33426__$1,(11),out,inst_33408);
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
});})(c__18529__auto___33447,out))
;
return ((function (switch__18473__auto__,c__18529__auto___33447,out){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_33443 = [null,null,null,null,null,null,null,null,null];
(statearr_33443[(0)] = state_machine__18474__auto__);

(statearr_33443[(1)] = (1));

return statearr_33443;
});
var state_machine__18474__auto____1 = (function (state_33426){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_33426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e33444){if((e33444 instanceof Object)){
var ex__18477__auto__ = e33444;
var statearr_33445_33458 = state_33426;
(statearr_33445_33458[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33459 = state_33426;
state_33426 = G__33459;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_33426){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_33426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___33447,out))
})();
var state__18531__auto__ = (function (){var statearr_33446 = f__18530__auto__.call(null);
(statearr_33446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___33447);

return statearr_33446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___33447,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__18529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto__){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto__){
return (function (state_33625){
var state_val_33626 = (state_33625[(1)]);
if((state_val_33626 === (7))){
var inst_33621 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33627_33668 = state_33625__$1;
(statearr_33627_33668[(2)] = inst_33621);

(statearr_33627_33668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (20))){
var inst_33591 = (state_33625[(7)]);
var inst_33602 = (state_33625[(2)]);
var inst_33603 = cljs.core.next.call(null,inst_33591);
var inst_33577 = inst_33603;
var inst_33578 = null;
var inst_33579 = (0);
var inst_33580 = (0);
var state_33625__$1 = (function (){var statearr_33628 = state_33625;
(statearr_33628[(8)] = inst_33578);

(statearr_33628[(9)] = inst_33579);

(statearr_33628[(10)] = inst_33577);

(statearr_33628[(11)] = inst_33580);

(statearr_33628[(12)] = inst_33602);

return statearr_33628;
})();
var statearr_33629_33669 = state_33625__$1;
(statearr_33629_33669[(2)] = null);

(statearr_33629_33669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (1))){
var state_33625__$1 = state_33625;
var statearr_33630_33670 = state_33625__$1;
(statearr_33630_33670[(2)] = null);

(statearr_33630_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (4))){
var inst_33566 = (state_33625[(13)]);
var inst_33566__$1 = (state_33625[(2)]);
var inst_33567 = (inst_33566__$1 == null);
var state_33625__$1 = (function (){var statearr_33631 = state_33625;
(statearr_33631[(13)] = inst_33566__$1);

return statearr_33631;
})();
if(cljs.core.truth_(inst_33567)){
var statearr_33632_33671 = state_33625__$1;
(statearr_33632_33671[(1)] = (5));

} else {
var statearr_33633_33672 = state_33625__$1;
(statearr_33633_33672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (15))){
var state_33625__$1 = state_33625;
var statearr_33637_33673 = state_33625__$1;
(statearr_33637_33673[(2)] = null);

(statearr_33637_33673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (21))){
var state_33625__$1 = state_33625;
var statearr_33638_33674 = state_33625__$1;
(statearr_33638_33674[(2)] = null);

(statearr_33638_33674[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (13))){
var inst_33578 = (state_33625[(8)]);
var inst_33579 = (state_33625[(9)]);
var inst_33577 = (state_33625[(10)]);
var inst_33580 = (state_33625[(11)]);
var inst_33587 = (state_33625[(2)]);
var inst_33588 = (inst_33580 + (1));
var tmp33634 = inst_33578;
var tmp33635 = inst_33579;
var tmp33636 = inst_33577;
var inst_33577__$1 = tmp33636;
var inst_33578__$1 = tmp33634;
var inst_33579__$1 = tmp33635;
var inst_33580__$1 = inst_33588;
var state_33625__$1 = (function (){var statearr_33639 = state_33625;
(statearr_33639[(8)] = inst_33578__$1);

(statearr_33639[(14)] = inst_33587);

(statearr_33639[(9)] = inst_33579__$1);

(statearr_33639[(10)] = inst_33577__$1);

(statearr_33639[(11)] = inst_33580__$1);

return statearr_33639;
})();
var statearr_33640_33675 = state_33625__$1;
(statearr_33640_33675[(2)] = null);

(statearr_33640_33675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (22))){
var state_33625__$1 = state_33625;
var statearr_33641_33676 = state_33625__$1;
(statearr_33641_33676[(2)] = null);

(statearr_33641_33676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (6))){
var inst_33566 = (state_33625[(13)]);
var inst_33575 = f.call(null,inst_33566);
var inst_33576 = cljs.core.seq.call(null,inst_33575);
var inst_33577 = inst_33576;
var inst_33578 = null;
var inst_33579 = (0);
var inst_33580 = (0);
var state_33625__$1 = (function (){var statearr_33642 = state_33625;
(statearr_33642[(8)] = inst_33578);

(statearr_33642[(9)] = inst_33579);

(statearr_33642[(10)] = inst_33577);

(statearr_33642[(11)] = inst_33580);

return statearr_33642;
})();
var statearr_33643_33677 = state_33625__$1;
(statearr_33643_33677[(2)] = null);

(statearr_33643_33677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (17))){
var inst_33591 = (state_33625[(7)]);
var inst_33595 = cljs.core.chunk_first.call(null,inst_33591);
var inst_33596 = cljs.core.chunk_rest.call(null,inst_33591);
var inst_33597 = cljs.core.count.call(null,inst_33595);
var inst_33577 = inst_33596;
var inst_33578 = inst_33595;
var inst_33579 = inst_33597;
var inst_33580 = (0);
var state_33625__$1 = (function (){var statearr_33644 = state_33625;
(statearr_33644[(8)] = inst_33578);

(statearr_33644[(9)] = inst_33579);

(statearr_33644[(10)] = inst_33577);

(statearr_33644[(11)] = inst_33580);

return statearr_33644;
})();
var statearr_33645_33678 = state_33625__$1;
(statearr_33645_33678[(2)] = null);

(statearr_33645_33678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (3))){
var inst_33623 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33625__$1,inst_33623);
} else {
if((state_val_33626 === (12))){
var inst_33611 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33646_33679 = state_33625__$1;
(statearr_33646_33679[(2)] = inst_33611);

(statearr_33646_33679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (2))){
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33625__$1,(4),in$);
} else {
if((state_val_33626 === (23))){
var inst_33619 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33647_33680 = state_33625__$1;
(statearr_33647_33680[(2)] = inst_33619);

(statearr_33647_33680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (19))){
var inst_33606 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33648_33681 = state_33625__$1;
(statearr_33648_33681[(2)] = inst_33606);

(statearr_33648_33681[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (11))){
var inst_33591 = (state_33625[(7)]);
var inst_33577 = (state_33625[(10)]);
var inst_33591__$1 = cljs.core.seq.call(null,inst_33577);
var state_33625__$1 = (function (){var statearr_33649 = state_33625;
(statearr_33649[(7)] = inst_33591__$1);

return statearr_33649;
})();
if(inst_33591__$1){
var statearr_33650_33682 = state_33625__$1;
(statearr_33650_33682[(1)] = (14));

} else {
var statearr_33651_33683 = state_33625__$1;
(statearr_33651_33683[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (9))){
var inst_33613 = (state_33625[(2)]);
var inst_33614 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33625__$1 = (function (){var statearr_33652 = state_33625;
(statearr_33652[(15)] = inst_33613);

return statearr_33652;
})();
if(cljs.core.truth_(inst_33614)){
var statearr_33653_33684 = state_33625__$1;
(statearr_33653_33684[(1)] = (21));

} else {
var statearr_33654_33685 = state_33625__$1;
(statearr_33654_33685[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (5))){
var inst_33569 = cljs.core.async.close_BANG_.call(null,out);
var state_33625__$1 = state_33625;
var statearr_33655_33686 = state_33625__$1;
(statearr_33655_33686[(2)] = inst_33569);

(statearr_33655_33686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (14))){
var inst_33591 = (state_33625[(7)]);
var inst_33593 = cljs.core.chunked_seq_QMARK_.call(null,inst_33591);
var state_33625__$1 = state_33625;
if(inst_33593){
var statearr_33656_33687 = state_33625__$1;
(statearr_33656_33687[(1)] = (17));

} else {
var statearr_33657_33688 = state_33625__$1;
(statearr_33657_33688[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (16))){
var inst_33609 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33658_33689 = state_33625__$1;
(statearr_33658_33689[(2)] = inst_33609);

(statearr_33658_33689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (10))){
var inst_33578 = (state_33625[(8)]);
var inst_33580 = (state_33625[(11)]);
var inst_33585 = cljs.core._nth.call(null,inst_33578,inst_33580);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33625__$1,(13),out,inst_33585);
} else {
if((state_val_33626 === (18))){
var inst_33591 = (state_33625[(7)]);
var inst_33600 = cljs.core.first.call(null,inst_33591);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33625__$1,(20),out,inst_33600);
} else {
if((state_val_33626 === (8))){
var inst_33579 = (state_33625[(9)]);
var inst_33580 = (state_33625[(11)]);
var inst_33582 = (inst_33580 < inst_33579);
var inst_33583 = inst_33582;
var state_33625__$1 = state_33625;
if(cljs.core.truth_(inst_33583)){
var statearr_33659_33690 = state_33625__$1;
(statearr_33659_33690[(1)] = (10));

} else {
var statearr_33660_33691 = state_33625__$1;
(statearr_33660_33691[(1)] = (11));

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
});})(c__18529__auto__))
;
return ((function (switch__18473__auto__,c__18529__auto__){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_33664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33664[(0)] = state_machine__18474__auto__);

(statearr_33664[(1)] = (1));

return statearr_33664;
});
var state_machine__18474__auto____1 = (function (state_33625){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_33625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e33665){if((e33665 instanceof Object)){
var ex__18477__auto__ = e33665;
var statearr_33666_33692 = state_33625;
(statearr_33666_33692[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33693 = state_33625;
state_33625 = G__33693;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_33625){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_33625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto__))
})();
var state__18531__auto__ = (function (){var statearr_33667 = f__18530__auto__.call(null);
(statearr_33667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto__);

return statearr_33667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto__))
);

return c__18529__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18529__auto___33790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___33790,out){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___33790,out){
return (function (state_33765){
var state_val_33766 = (state_33765[(1)]);
if((state_val_33766 === (7))){
var inst_33760 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33767_33791 = state_33765__$1;
(statearr_33767_33791[(2)] = inst_33760);

(statearr_33767_33791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (1))){
var inst_33742 = null;
var state_33765__$1 = (function (){var statearr_33768 = state_33765;
(statearr_33768[(7)] = inst_33742);

return statearr_33768;
})();
var statearr_33769_33792 = state_33765__$1;
(statearr_33769_33792[(2)] = null);

(statearr_33769_33792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (4))){
var inst_33745 = (state_33765[(8)]);
var inst_33745__$1 = (state_33765[(2)]);
var inst_33746 = (inst_33745__$1 == null);
var inst_33747 = cljs.core.not.call(null,inst_33746);
var state_33765__$1 = (function (){var statearr_33770 = state_33765;
(statearr_33770[(8)] = inst_33745__$1);

return statearr_33770;
})();
if(inst_33747){
var statearr_33771_33793 = state_33765__$1;
(statearr_33771_33793[(1)] = (5));

} else {
var statearr_33772_33794 = state_33765__$1;
(statearr_33772_33794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (6))){
var state_33765__$1 = state_33765;
var statearr_33773_33795 = state_33765__$1;
(statearr_33773_33795[(2)] = null);

(statearr_33773_33795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (3))){
var inst_33762 = (state_33765[(2)]);
var inst_33763 = cljs.core.async.close_BANG_.call(null,out);
var state_33765__$1 = (function (){var statearr_33774 = state_33765;
(statearr_33774[(9)] = inst_33762);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33765__$1,inst_33763);
} else {
if((state_val_33766 === (2))){
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33765__$1,(4),ch);
} else {
if((state_val_33766 === (11))){
var inst_33745 = (state_33765[(8)]);
var inst_33754 = (state_33765[(2)]);
var inst_33742 = inst_33745;
var state_33765__$1 = (function (){var statearr_33775 = state_33765;
(statearr_33775[(10)] = inst_33754);

(statearr_33775[(7)] = inst_33742);

return statearr_33775;
})();
var statearr_33776_33796 = state_33765__$1;
(statearr_33776_33796[(2)] = null);

(statearr_33776_33796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (9))){
var inst_33745 = (state_33765[(8)]);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33765__$1,(11),out,inst_33745);
} else {
if((state_val_33766 === (5))){
var inst_33745 = (state_33765[(8)]);
var inst_33742 = (state_33765[(7)]);
var inst_33749 = cljs.core._EQ_.call(null,inst_33745,inst_33742);
var state_33765__$1 = state_33765;
if(inst_33749){
var statearr_33778_33797 = state_33765__$1;
(statearr_33778_33797[(1)] = (8));

} else {
var statearr_33779_33798 = state_33765__$1;
(statearr_33779_33798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (10))){
var inst_33757 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33780_33799 = state_33765__$1;
(statearr_33780_33799[(2)] = inst_33757);

(statearr_33780_33799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (8))){
var inst_33742 = (state_33765[(7)]);
var tmp33777 = inst_33742;
var inst_33742__$1 = tmp33777;
var state_33765__$1 = (function (){var statearr_33781 = state_33765;
(statearr_33781[(7)] = inst_33742__$1);

return statearr_33781;
})();
var statearr_33782_33800 = state_33765__$1;
(statearr_33782_33800[(2)] = null);

(statearr_33782_33800[(1)] = (2));


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
});})(c__18529__auto___33790,out))
;
return ((function (switch__18473__auto__,c__18529__auto___33790,out){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_33786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33786[(0)] = state_machine__18474__auto__);

(statearr_33786[(1)] = (1));

return statearr_33786;
});
var state_machine__18474__auto____1 = (function (state_33765){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_33765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e33787){if((e33787 instanceof Object)){
var ex__18477__auto__ = e33787;
var statearr_33788_33801 = state_33765;
(statearr_33788_33801[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33802 = state_33765;
state_33765 = G__33802;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_33765){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_33765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___33790,out))
})();
var state__18531__auto__ = (function (){var statearr_33789 = f__18530__auto__.call(null);
(statearr_33789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___33790);

return statearr_33789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___33790,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18529__auto___33937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___33937,out){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___33937,out){
return (function (state_33907){
var state_val_33908 = (state_33907[(1)]);
if((state_val_33908 === (7))){
var inst_33903 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33909_33938 = state_33907__$1;
(statearr_33909_33938[(2)] = inst_33903);

(statearr_33909_33938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (1))){
var inst_33870 = (new Array(n));
var inst_33871 = inst_33870;
var inst_33872 = (0);
var state_33907__$1 = (function (){var statearr_33910 = state_33907;
(statearr_33910[(7)] = inst_33872);

(statearr_33910[(8)] = inst_33871);

return statearr_33910;
})();
var statearr_33911_33939 = state_33907__$1;
(statearr_33911_33939[(2)] = null);

(statearr_33911_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (4))){
var inst_33875 = (state_33907[(9)]);
var inst_33875__$1 = (state_33907[(2)]);
var inst_33876 = (inst_33875__$1 == null);
var inst_33877 = cljs.core.not.call(null,inst_33876);
var state_33907__$1 = (function (){var statearr_33912 = state_33907;
(statearr_33912[(9)] = inst_33875__$1);

return statearr_33912;
})();
if(inst_33877){
var statearr_33913_33940 = state_33907__$1;
(statearr_33913_33940[(1)] = (5));

} else {
var statearr_33914_33941 = state_33907__$1;
(statearr_33914_33941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (15))){
var inst_33897 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33915_33942 = state_33907__$1;
(statearr_33915_33942[(2)] = inst_33897);

(statearr_33915_33942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (13))){
var state_33907__$1 = state_33907;
var statearr_33916_33943 = state_33907__$1;
(statearr_33916_33943[(2)] = null);

(statearr_33916_33943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (6))){
var inst_33872 = (state_33907[(7)]);
var inst_33893 = (inst_33872 > (0));
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33893)){
var statearr_33917_33944 = state_33907__$1;
(statearr_33917_33944[(1)] = (12));

} else {
var statearr_33918_33945 = state_33907__$1;
(statearr_33918_33945[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (3))){
var inst_33905 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33907__$1,inst_33905);
} else {
if((state_val_33908 === (12))){
var inst_33871 = (state_33907[(8)]);
var inst_33895 = cljs.core.vec.call(null,inst_33871);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33907__$1,(15),out,inst_33895);
} else {
if((state_val_33908 === (2))){
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,(4),ch);
} else {
if((state_val_33908 === (11))){
var inst_33887 = (state_33907[(2)]);
var inst_33888 = (new Array(n));
var inst_33871 = inst_33888;
var inst_33872 = (0);
var state_33907__$1 = (function (){var statearr_33919 = state_33907;
(statearr_33919[(7)] = inst_33872);

(statearr_33919[(10)] = inst_33887);

(statearr_33919[(8)] = inst_33871);

return statearr_33919;
})();
var statearr_33920_33946 = state_33907__$1;
(statearr_33920_33946[(2)] = null);

(statearr_33920_33946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (9))){
var inst_33871 = (state_33907[(8)]);
var inst_33885 = cljs.core.vec.call(null,inst_33871);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33907__$1,(11),out,inst_33885);
} else {
if((state_val_33908 === (5))){
var inst_33872 = (state_33907[(7)]);
var inst_33880 = (state_33907[(11)]);
var inst_33871 = (state_33907[(8)]);
var inst_33875 = (state_33907[(9)]);
var inst_33879 = (inst_33871[inst_33872] = inst_33875);
var inst_33880__$1 = (inst_33872 + (1));
var inst_33881 = (inst_33880__$1 < n);
var state_33907__$1 = (function (){var statearr_33921 = state_33907;
(statearr_33921[(11)] = inst_33880__$1);

(statearr_33921[(12)] = inst_33879);

return statearr_33921;
})();
if(cljs.core.truth_(inst_33881)){
var statearr_33922_33947 = state_33907__$1;
(statearr_33922_33947[(1)] = (8));

} else {
var statearr_33923_33948 = state_33907__$1;
(statearr_33923_33948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (14))){
var inst_33900 = (state_33907[(2)]);
var inst_33901 = cljs.core.async.close_BANG_.call(null,out);
var state_33907__$1 = (function (){var statearr_33925 = state_33907;
(statearr_33925[(13)] = inst_33900);

return statearr_33925;
})();
var statearr_33926_33949 = state_33907__$1;
(statearr_33926_33949[(2)] = inst_33901);

(statearr_33926_33949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (10))){
var inst_33891 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33927_33950 = state_33907__$1;
(statearr_33927_33950[(2)] = inst_33891);

(statearr_33927_33950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (8))){
var inst_33880 = (state_33907[(11)]);
var inst_33871 = (state_33907[(8)]);
var tmp33924 = inst_33871;
var inst_33871__$1 = tmp33924;
var inst_33872 = inst_33880;
var state_33907__$1 = (function (){var statearr_33928 = state_33907;
(statearr_33928[(7)] = inst_33872);

(statearr_33928[(8)] = inst_33871__$1);

return statearr_33928;
})();
var statearr_33929_33951 = state_33907__$1;
(statearr_33929_33951[(2)] = null);

(statearr_33929_33951[(1)] = (2));


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
});})(c__18529__auto___33937,out))
;
return ((function (switch__18473__auto__,c__18529__auto___33937,out){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_33933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33933[(0)] = state_machine__18474__auto__);

(statearr_33933[(1)] = (1));

return statearr_33933;
});
var state_machine__18474__auto____1 = (function (state_33907){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_33907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e33934){if((e33934 instanceof Object)){
var ex__18477__auto__ = e33934;
var statearr_33935_33952 = state_33907;
(statearr_33935_33952[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33953 = state_33907;
state_33907 = G__33953;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___33937,out))
})();
var state__18531__auto__ = (function (){var statearr_33936 = f__18530__auto__.call(null);
(statearr_33936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___33937);

return statearr_33936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___33937,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18529__auto___34096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18529__auto___34096,out){
return (function (){
var f__18530__auto__ = (function (){var switch__18473__auto__ = ((function (c__18529__auto___34096,out){
return (function (state_34066){
var state_val_34067 = (state_34066[(1)]);
if((state_val_34067 === (7))){
var inst_34062 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34068_34097 = state_34066__$1;
(statearr_34068_34097[(2)] = inst_34062);

(statearr_34068_34097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (1))){
var inst_34025 = [];
var inst_34026 = inst_34025;
var inst_34027 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34066__$1 = (function (){var statearr_34069 = state_34066;
(statearr_34069[(7)] = inst_34027);

(statearr_34069[(8)] = inst_34026);

return statearr_34069;
})();
var statearr_34070_34098 = state_34066__$1;
(statearr_34070_34098[(2)] = null);

(statearr_34070_34098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (4))){
var inst_34030 = (state_34066[(9)]);
var inst_34030__$1 = (state_34066[(2)]);
var inst_34031 = (inst_34030__$1 == null);
var inst_34032 = cljs.core.not.call(null,inst_34031);
var state_34066__$1 = (function (){var statearr_34071 = state_34066;
(statearr_34071[(9)] = inst_34030__$1);

return statearr_34071;
})();
if(inst_34032){
var statearr_34072_34099 = state_34066__$1;
(statearr_34072_34099[(1)] = (5));

} else {
var statearr_34073_34100 = state_34066__$1;
(statearr_34073_34100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (15))){
var inst_34056 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34074_34101 = state_34066__$1;
(statearr_34074_34101[(2)] = inst_34056);

(statearr_34074_34101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (13))){
var state_34066__$1 = state_34066;
var statearr_34075_34102 = state_34066__$1;
(statearr_34075_34102[(2)] = null);

(statearr_34075_34102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (6))){
var inst_34026 = (state_34066[(8)]);
var inst_34051 = inst_34026.length;
var inst_34052 = (inst_34051 > (0));
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_34052)){
var statearr_34076_34103 = state_34066__$1;
(statearr_34076_34103[(1)] = (12));

} else {
var statearr_34077_34104 = state_34066__$1;
(statearr_34077_34104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (3))){
var inst_34064 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34066__$1,inst_34064);
} else {
if((state_val_34067 === (12))){
var inst_34026 = (state_34066[(8)]);
var inst_34054 = cljs.core.vec.call(null,inst_34026);
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34066__$1,(15),out,inst_34054);
} else {
if((state_val_34067 === (2))){
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34066__$1,(4),ch);
} else {
if((state_val_34067 === (11))){
var inst_34034 = (state_34066[(10)]);
var inst_34030 = (state_34066[(9)]);
var inst_34044 = (state_34066[(2)]);
var inst_34045 = [];
var inst_34046 = inst_34045.push(inst_34030);
var inst_34026 = inst_34045;
var inst_34027 = inst_34034;
var state_34066__$1 = (function (){var statearr_34078 = state_34066;
(statearr_34078[(7)] = inst_34027);

(statearr_34078[(11)] = inst_34046);

(statearr_34078[(8)] = inst_34026);

(statearr_34078[(12)] = inst_34044);

return statearr_34078;
})();
var statearr_34079_34105 = state_34066__$1;
(statearr_34079_34105[(2)] = null);

(statearr_34079_34105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (9))){
var inst_34026 = (state_34066[(8)]);
var inst_34042 = cljs.core.vec.call(null,inst_34026);
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34066__$1,(11),out,inst_34042);
} else {
if((state_val_34067 === (5))){
var inst_34027 = (state_34066[(7)]);
var inst_34034 = (state_34066[(10)]);
var inst_34030 = (state_34066[(9)]);
var inst_34034__$1 = f.call(null,inst_34030);
var inst_34035 = cljs.core._EQ_.call(null,inst_34034__$1,inst_34027);
var inst_34036 = cljs.core.keyword_identical_QMARK_.call(null,inst_34027,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34037 = (inst_34035) || (inst_34036);
var state_34066__$1 = (function (){var statearr_34080 = state_34066;
(statearr_34080[(10)] = inst_34034__$1);

return statearr_34080;
})();
if(cljs.core.truth_(inst_34037)){
var statearr_34081_34106 = state_34066__$1;
(statearr_34081_34106[(1)] = (8));

} else {
var statearr_34082_34107 = state_34066__$1;
(statearr_34082_34107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (14))){
var inst_34059 = (state_34066[(2)]);
var inst_34060 = cljs.core.async.close_BANG_.call(null,out);
var state_34066__$1 = (function (){var statearr_34084 = state_34066;
(statearr_34084[(13)] = inst_34059);

return statearr_34084;
})();
var statearr_34085_34108 = state_34066__$1;
(statearr_34085_34108[(2)] = inst_34060);

(statearr_34085_34108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (10))){
var inst_34049 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34086_34109 = state_34066__$1;
(statearr_34086_34109[(2)] = inst_34049);

(statearr_34086_34109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (8))){
var inst_34034 = (state_34066[(10)]);
var inst_34030 = (state_34066[(9)]);
var inst_34026 = (state_34066[(8)]);
var inst_34039 = inst_34026.push(inst_34030);
var tmp34083 = inst_34026;
var inst_34026__$1 = tmp34083;
var inst_34027 = inst_34034;
var state_34066__$1 = (function (){var statearr_34087 = state_34066;
(statearr_34087[(14)] = inst_34039);

(statearr_34087[(7)] = inst_34027);

(statearr_34087[(8)] = inst_34026__$1);

return statearr_34087;
})();
var statearr_34088_34110 = state_34066__$1;
(statearr_34088_34110[(2)] = null);

(statearr_34088_34110[(1)] = (2));


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
});})(c__18529__auto___34096,out))
;
return ((function (switch__18473__auto__,c__18529__auto___34096,out){
return (function() {
var state_machine__18474__auto__ = null;
var state_machine__18474__auto____0 = (function (){
var statearr_34092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34092[(0)] = state_machine__18474__auto__);

(statearr_34092[(1)] = (1));

return statearr_34092;
});
var state_machine__18474__auto____1 = (function (state_34066){
while(true){
var ret_value__18475__auto__ = (function (){try{while(true){
var result__18476__auto__ = switch__18473__auto__.call(null,state_34066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18476__auto__;
}
break;
}
}catch (e34093){if((e34093 instanceof Object)){
var ex__18477__auto__ = e34093;
var statearr_34094_34111 = state_34066;
(statearr_34094_34111[(5)] = ex__18477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34112 = state_34066;
state_34066 = G__34112;
continue;
} else {
return ret_value__18475__auto__;
}
break;
}
});
state_machine__18474__auto__ = function(state_34066){
switch(arguments.length){
case 0:
return state_machine__18474__auto____0.call(this);
case 1:
return state_machine__18474__auto____1.call(this,state_34066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18474__auto____0;
state_machine__18474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18474__auto____1;
return state_machine__18474__auto__;
})()
;})(switch__18473__auto__,c__18529__auto___34096,out))
})();
var state__18531__auto__ = (function (){var statearr_34095 = f__18530__auto__.call(null);
(statearr_34095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18529__auto___34096);

return statearr_34095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18531__auto__);
});})(c__18529__auto___34096,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map