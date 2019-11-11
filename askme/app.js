/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) if (void 0 !== props[i]) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function toArray(obj, offset) {
	        return [].slice.call(obj, offset);
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function empty(x) {
	        return void 0 === x || null === x;
	    }
	    function falsey(value) {
	        return value === !1 || empty(value);
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function h(nodeName, attributes, firstChild) {
	        var children, arr, lastSimple, len = arguments.length;
	        if (len > 2) {
	            var type = typeof firstChild;
	            if (3 === len && 'object' !== type && 'function' !== type) {
	                if (!falsey(firstChild)) children = [ String(firstChild) ];
	            } else {
	                children = [];
	                for (var i = 2; i < len; i++) {
	                    var _p = arguments[i];
	                    if (!falsey(_p)) {
	                        if (_p.join) arr = _p; else (arr = SHARED_TEMP_ARRAY)[0] = _p;
	                        for (var j = 0; j < arr.length; j++) {
	                            var child = arr[j], simple = !(falsey(child) || isFunction(child) || child instanceof VNode);
	                            if (simple && !isString(child)) child = String(child);
	                            if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) {
	                                children.push(child);
	                                lastSimple = simple;
	                            }
	                        }
	                    } else ;
	                }
	            }
	        } else if (attributes && attributes.children) return h(nodeName, attributes, attributes.children);
	        if (attributes) {
	            if (attributes.children) delete attributes.children;
	            if (!isFunction(nodeName)) {
	                if ('className' in attributes) {
	                    attributes.class = attributes.className;
	                    delete attributes.className;
	                }
	                lastSimple = attributes.class;
	                if (lastSimple && !isString(lastSimple)) attributes.class = hashToClassName(lastSimple);
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? toArray(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0];
	        return function(e) {
	            var _component$setState;
	            var v, i, t = e && e.currentTarget || this, s = component.state, obj = s;
	            if (isString(eventPath)) v = delve(e, eventPath); else v = t.nodeName ? (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value : e;
	            if (path.length > 1) {
	                for (i = 0; i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var p, currentItems = items;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            while (p = currentItems.pop()) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function ensureNodeData(node, data) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = data || {});
	    }
	    function getNodeType(node) {
	        if (node instanceof Text) return 3;
	        if (node instanceof Element) return 1; else return 0;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, value, old, isSvg) {
	        ensureNodeData(node)[name] = value;
	        if ('key' !== name && 'children' !== name && 'innerHTML' !== name) if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, empty(value) ? '' : value);
	            if (falsey(value)) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (falsey(value)) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function getRawNodeAttributes(node) {
	        var attrs = {};
	        for (var i = node.attributes.length; i--; ) attrs[node.attributes[i].name] = node.attributes[i].value;
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return 3 === getNodeType(node);
	        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var defaultProps = vnode.nodeName.defaultProps, props = clone(defaultProps || vnode.attributes);
	        if (defaultProps) extend(props, vnode.attributes);
	        if (vnode.children) props.children = vnode.children;
	        return props;
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (1 === getNodeType(node)) {
	            cleanNode(node);
	            var name = toLowerCase(node.nodeName), list = nodes[name];
	            if (list) list.push(node); else nodes[name] = [ node ];
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        ensureNodeData(node);
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function cleanNode(node) {
	        ensureNodeData(node, getRawNodeAttributes(node));
	        node._component = node._componentConstructor = null;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) if (c.componentDidMount) c.componentDidMount();
	    }
	    function diff(dom, vnode, context, mountAll, parent, rootComponent) {
	        diffLevel++;
	        var ret = idiff(dom, vnode, context, mountAll, rootComponent);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) flushMounts();
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll, rootComponent) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (empty(vnode)) {
	            vnode = '';
	            if (rootComponent) {
	                if (dom) {
	                    if (8 === dom.nodeType) return dom;
	                    recollectNodeTree(dom);
	                }
	                return document.createComment(vnode);
	            }
	        }
	        if (isString(vnode)) {
	            if (dom) {
	                if (3 === getNodeType(dom) && dom.parentNode) {
	                    dom.nodeValue = vnode;
	                    return dom;
	                }
	                recollectNodeTree(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var out = dom, nodeName = vnode.nodeName, prevSvgMode = isSvgMode;
	        if (isFunction(nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            recollectNodeTree(dom);
	        }
	        if (vnode.children && 1 === vnode.children.length && 'string' == typeof vnode.children[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) out.firstChild.nodeValue = vnode.children[0]; else if (vnode.children || out.firstChild) innerDiffNode(out, vnode.children, context, mountAll);
	        diffAttributes(out, vnode.attributes);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
	            if (key || 0 === key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (!empty(key)) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) {
	                for (j = min; j < childrenLen; j++) {
	                    c = children[j];
	                    if (c && isSameNodeType(c, vchild)) {
	                        child = c;
	                        children[j] = void 0;
	                        if (j === childrenLen - 1) childrenLen--;
	                        if (j === min) min++;
	                        break;
	                    }
	                }
	                if (!child && min < childrenLen && isFunction(vchild.nodeName) && mountAll) {
	                    child = children[min];
	                    children[min++] = void 0;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs) {
	        var old = dom[ATTR_KEY] || getRawNodeAttributes(dom);
	        for (var _name in old) if (!(attrs && _name in attrs)) setAccessor(dom, _name, null, old[_name], isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!(_name2 in old) || attrs[_name2] != old[_name2] || ('value' === _name2 || 'checked' === _name2) && attrs[_name2] != dom[_name2]) setAccessor(dom, _name2, attrs[_name2], old[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        inst.props = props;
	        inst.context = context;
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        var b = component.base;
	        if (!component._disableRendering) {
	            component._disableRendering = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (empty(b) || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disableRendering = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !b) renderComponent(component, 1, mountAll); else triggerComponentRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll) {
	        if (!component._disableRendering) {
	            var skip, rendered, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, initialBase = isUpdate || component.nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = initialChildComponent, childProps = getNodeProps(rendered);
	                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || mountAll && initialBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1);
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) baseParent.replaceChild(base, initialBase);
	                    if (!toUnmount && component._parentComponent) {
	                        initialBase._component = null;
	                        recollectNodeTree(initialBase);
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) {
	                mounts.unshift(component);
	                if (!diffLevel) flushMounts();
	            } else if (!skip && component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) c.nextBase = dom;
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        var base = component.base;
	        component._disableRendering = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            removeOrphanedChildren(base.childNodes, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context;
	        this.props = props;
	        this.state = this.getInitialState && this.getInitialState() || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var SHARED_TEMP_ARRAY = [];
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var itemsOffline = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + eventPath;
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	var _Intro = __webpack_require__(5);

	var _Intro2 = _interopRequireDefault(_Intro);

	var _FormDescriptionFields = __webpack_require__(4);

	var _FormDescriptionFields2 = _interopRequireDefault(_FormDescriptionFields);

	var _QuestionFields = __webpack_require__(8);

	var _QuestionFields2 = _interopRequireDefault(_QuestionFields);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return (0, _preact.h)(
	    'div',
	    { 'class': 'form-creator' },
	    (0, _preact.h)(_Intro2.default, null),
	    (0, _preact.h)(_FormDescriptionFields2.default, null),
	    (0, _preact.h)(_QuestionFields2.default, null)
	  );
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(0);

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DescriptionField = function (_Component) {
	  _inherits(DescriptionField, _Component);

	  function DescriptionField(props) {
	    _classCallCheck(this, DescriptionField);

	    var _this = _possibleConstructorReturn(this, (DescriptionField.__proto__ || Object.getPrototypeOf(DescriptionField)).call(this, props));

	    _this.state = { what: '', why: '', how: '', description: '', dirty: false };
	    _this.onQuestionChange = _this.onQuestionChange.bind(_this);
	    _this.onDescriptionChange = _this.onDescriptionChange.bind(_this);
	    return _this;
	  }

	  _createClass(DescriptionField, [{
	    key: 'onDescriptionChange',
	    value: function onDescriptionChange(e) {
	      this.setState({
	        dirty: true,
	        description: e.target.value
	      });
	    }
	  }, {
	    key: 'onQuestionChange',
	    value: function onQuestionChange(type, value) {
	      this.setState(_defineProperty({}, type, value));

	      this.setState({
	        description: this.state.dirty ? this.state.description : [this.state.what, this.state.why, this.state.how].join('\n')
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render(_ref, _ref2) {
	      var _this2 = this;

	      var what = _ref2.what;
	      var why = _ref2.why;
	      var how = _ref2.how;
	      var description = _ref2.description;

	      _objectDestructuringEmpty(_ref);

	      return (0, _preact.h)(
	        'div',
	        { 'class': 'card' },
	        (0, _preact.h)(
	          'h2',
	          null,
	          'The Description'
	        ),
	        (0, _preact.h)(
	          'p',
	          null,
	          'After your readers agreed to continue with your questionnaire is important to let them know about some aspect keys'
	        ),
	        (0, _preact.h)(
	          'ul',
	          null,
	          (0, _preact.h)(
	            'li',
	            null,
	            (0, _preact.h)(
	              'strong',
	              null,
	              'What'
	            ),
	            ' is this really about ',
	            (0, _preact.h)('input', { 'class': 'small', type: 'text',
	              placeholder: 'Tell us your story on...', value: what, onInput: function onInput(e) {
	                return _this2.onQuestionChange('what', e.target.value);
	              } })
	          ),
	          (0, _preact.h)(
	            'li',
	            null,
	            (0, _preact.h)(
	              'strong',
	              null,
	              'Why'
	            ),
	            ' are you asking this specific questions ',
	            (0, _preact.h)('input', { 'class': 'small', type: 'text',
	              placeholder: 'We want to know more about what you think because...', value: why, onInput: function onInput(e) {
	                return _this2.onQuestionChange('why', e.target.value);
	              } })
	          ),
	          (0, _preact.h)(
	            'li',
	            null,
	            (0, _preact.h)(
	              'strong',
	              null,
	              'How'
	            ),
	            ' are the answers going to be used ',
	            (0, _preact.h)('input', { 'class': 'small', type: 'text',
	              placeholder: 'We will be anonymizing and aggregating the answers...', value: how, oninput: function oninput(e) {
	                return _this2.onQuestionChange('how', e.target.value);
	              } })
	          )
	        ),
	        (0, _preact.h)('textarea', { value: description, onInput: this.onDescriptionChange })
	      );
	    }
	  }]);

	  return DescriptionField;
	}(_preact.Component);

	exports.default = DescriptionField;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	exports.default = function () {
	  return (0, _preact.h)(
	    "div",
	    { "class": "card" },
	    (0, _preact.h)(
	      "h2",
	      null,
	      "This is a demo"
	    ),
	    (0, _preact.h)(
	      "h3",
	      null,
	      "You'll be able to actually create forms this way soon."
	    ),
	    (0, _preact.h)(
	      "p",
	      null,
	      "In the meanwhile check out this article from our Community Lead on ",
	      (0, _preact.h)(
	        "a",
	        { href: "https://blog.coralproject.net/forms-audience-engagement/" },
	        "how to engage your audience while using Ask"
	      ),
	      "."
	    )
	  );
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	var _TitleField = __webpack_require__(13);

	var _TitleField2 = _interopRequireDefault(_TitleField);

	var _DescriptionField = __webpack_require__(2);

	var _DescriptionField2 = _interopRequireDefault(_DescriptionField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return (0, _preact.h)(
	    'div',
	    null,
	    (0, _preact.h)(_TitleField2.default, null),
	    (0, _preact.h)(_DescriptionField2.default, null)
	  );
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	exports.default = function () {
	  return (0, _preact.h)(
	    'div',
	    null,
	    (0, _preact.h)(
	      'h1',
	      null,
	      'Hi, this is an alternative Coral Project\'s ask creator.'
	    ),
	    (0, _preact.h)(
	      'p',
	      { style: styles.paragraph },
	      'In this oportunity we will guide you into the creation of useful forms focusing on your audience perspective.'
	    )
	  );
	};

	var styles = {
	  paragraph: {
	    fontSize: '1.2em',
	    marginTop: 40
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	exports.default = function (_ref) {
	  var options = _ref.options;
	  return (0, _preact.h)(
	    'ul',
	    { style: styles.container },
	    options.map(function (option) {
	      return (0, _preact.h)(
	        'li',
	        { style: styles.item },
	        option
	      );
	    })
	  );
	};

	var styles = {
	  container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    listStyle: 'none',
	    padding: 0,
	    justifyContent: 'space-between'
	  },
	  item: {
	    background: '#ddd',
	    padding: 20,
	    width: '45%',
	    minWidth: 250,
	    marginTop: 20,
	    color: '#333',
	    borderRadius: 8
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(0);

	var _QuestionTypesDropdown = __webpack_require__(10);

	var _QuestionTypesDropdown2 = _interopRequireDefault(_QuestionTypesDropdown);

	var _TextField = __webpack_require__(12);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _TextAreaField = __webpack_require__(11);

	var _TextAreaField2 = _interopRequireDefault(_TextAreaField);

	var _MultipleChoiceField = __webpack_require__(6);

	var _MultipleChoiceField2 = _interopRequireDefault(_MultipleChoiceField);

	var _QuestionFooter = __webpack_require__(9);

	var _QuestionFooter2 = _interopRequireDefault(_QuestionFooter);

	var _inferQuestionType = __webpack_require__(16);

	var _inferQuestionType2 = _interopRequireDefault(_inferQuestionType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionField = function (_Component) {
	  _inherits(QuestionField, _Component);

	  function QuestionField(props) {
	    _classCallCheck(this, QuestionField);

	    var _this = _possibleConstructorReturn(this, (QuestionField.__proto__ || Object.getPrototypeOf(QuestionField)).call(this, props));

	    _this.state = {
	      question: {
	        title: '',
	        description: '',
	        props: {},
	        type: 'TextField',
	        options: ['First option', 'Second option']
	      }
	    };

	    _this.cardTitle = getCardTitle(props.isFirst);
	    _this.cardDescription = getCardDescription(props.isFirst);
	    return _this;
	  }

	  _createClass(QuestionField, [{
	    key: 'onChange',
	    value: function onChange(key, e) {
	      var val = e.target.value;
	      var question = Object.assign({}, this.state.question);
	      question[key] = val;

	      if (key === 'title' && !question.dirty) {
	        question['type'] = (0, _inferQuestionType2.default)(val);
	      }

	      question['dirty'] = key === 'type' ? true : question.dirty;
	      this.setState({ question: question });
	    }
	  }, {
	    key: 'render',
	    value: function render(_ref, _ref2) {
	      var isFirst = _ref.isFirst;
	      var isLast = _ref.isLast;
	      var onAddQuestion = _ref.onAddQuestion;
	      var onPublish = _ref.onPublish;
	      var onChange = _ref.onChange;
	      var question = _ref2.question;

	      return (0, _preact.h)(
	        'div',
	        { 'class': 'card' },
	        (0, _preact.h)(
	          'h2',
	          null,
	          this.cardTitle
	        ),
	        (0, _preact.h)(
	          'p',
	          null,
	          this.cardDescription
	        ),
	        (0, _preact.h)('input', { type: 'text', placeholder: 'Question title', value: question.title,
	          onInput: this.onChange.bind(this, 'title') }),
	        (0, _preact.h)('textarea', { placeholder: 'Question description', value: question.description,
	          onInput: this.onChange.bind(this, 'description') }),
	        question.type === 'MultipleChoice' ? (0, _preact.h)(ChoiceEditor, { onChange: this.onChange.bind(this, 'options') }) : null,
	        (0, _preact.h)(
	          'h3',
	          null,
	          'Question preview'
	        ),
	        renderQuestionPreview(question),
	        isFirst ? (0, _preact.h)(
	          'p',
	          null,
	          'We tried to infer the best interface for asking the question but we can be wrong so you can manually select the question type'
	        ) : null,
	        (0, _preact.h)(_QuestionTypesDropdown2.default, { type: question.type, onTypeChange: this.onChange.bind(this, 'type') }),
	        isLast ? (0, _preact.h)(_QuestionFooter2.default, { onAddQuestion: onAddQuestion, onPublish: onPublish }) : null
	      );
	    }
	  }]);

	  return QuestionField;
	}(_preact.Component);

	exports.default = QuestionField;


	var ChoiceEditor = function ChoiceEditor(_ref3) {
	  var onChange = _ref3.onChange;
	  var options = _ref3.options;
	  return (0, _preact.h)(
	    'div',
	    null,
	    (0, _preact.h)(
	      'h3',
	      null,
	      'Write down the question options'
	    ),
	    (0, _preact.h)(
	      'textarea',
	      { onInput: function onInput(e) {
	          return onChange({ target: { value: e.target.value.split('\n').filter(function (l) {
	                return l.length;
	              }) } });
	        } },
	      'First option\nSecond option'
	    )
	  );
	};

	var renderQuestionPreview = function renderQuestionPreview(question) {
	  switch (question.type) {
	    case 'Email':
	      return (0, _preact.h)(_TextField2.default, { type: 'email' });
	    case 'Number':
	      return (0, _preact.h)(_TextField2.default, { type: 'number' });
	    case 'Date':
	      return (0, _preact.h)(_TextField2.default, { type: 'date' });
	    case 'Phone':
	      return (0, _preact.h)(_TextField2.default, { type: 'tel' });
	    case 'TextArea':
	      return (0, _preact.h)(_TextAreaField2.default, null);
	    case 'MultipleChoice':
	      return (0, _preact.h)(_MultipleChoiceField2.default, { options: question.options });
	    case 'TextField':
	    default:
	      return (0, _preact.h)(_TextField2.default, { type: 'text' });
	  }
	};

	var getCardTitle = function getCardTitle(isFirst) {
	  var titles = ['a new', 'another', 'add another', 'ask a new'];

	  if (isFirst) {
	    return 'Your first question';
	  } else {
	    return titles[Math.floor(Math.random() * titles.length)] + ' question';
	  }
	};

	var getCardDescription = function getCardDescription(isFirst) {
	  var descriptions = ['Just apply what you learned from the previous questions', 'You can do it one more time', 'This is looking good!', '📝 ？'];

	  if (isFirst) {
	    return 'A question needs context. Providing a title and description for your questions will help your users\n    to understand better what you need. You don\'t need a sexy title here, try to be clear on your needs.';
	  } else {
	    return descriptions[Math.floor(Math.random() * descriptions.length)];
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(0);

	var _QuestionField = __webpack_require__(7);

	var _QuestionField2 = _interopRequireDefault(_QuestionField);

	var _FinishedCard = __webpack_require__(3);

	var _FinishedCard2 = _interopRequireDefault(_FinishedCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionFields = function (_Component) {
	  _inherits(QuestionFields, _Component);

	  function QuestionFields(props) {
	    _classCallCheck(this, QuestionFields);

	    var _this = _possibleConstructorReturn(this, (QuestionFields.__proto__ || Object.getPrototypeOf(QuestionFields)).call(this, props));

	    _this.state = {
	      questions: 1,
	      finished: false
	    };

	    _this.onAddQuestion = _this.onAddQuestion.bind(_this);
	    _this.onPublish = _this.onPublish.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionFields, [{
	    key: 'onAddQuestion',
	    value: function onAddQuestion() {
	      this.setState({
	        questions: this.state.questions + 1
	      });
	    }
	  }, {
	    key: 'onPublish',
	    value: function onPublish() {
	      this.setState({ finished: true });
	    }
	  }, {
	    key: 'render',
	    value: function render(_ref, _ref2) {
	      var questions = _ref2.questions;
	      var finished = _ref2.finished;

	      _objectDestructuringEmpty(_ref);

	      var Fields = [];
	      for (var i = 0; i < questions; i++) {
	        Fields.push((0, _preact.h)(_QuestionField2.default, { key: i,
	          isFirst: !i, isLast: i === questions - 1,
	          onPublish: this.onPublish,
	          onAddQuestion: this.onAddQuestion }));
	      }

	      if (finished) {
	        Fields.push((0, _preact.h)(_FinishedCard2.default, null));
	      }

	      return (0, _preact.h)(
	        'div',
	        null,
	        Fields
	      );
	    }
	  }]);

	  return QuestionFields;
	}(_preact.Component);

	exports.default = QuestionFields;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	exports.default = function (_ref) {
	  var onAddQuestion = _ref.onAddQuestion;
	  var onPublish = _ref.onPublish;
	  return (0, _preact.h)(
	    "div",
	    { "class": "card-footer" },
	    (0, _preact.h)(
	      "button",
	      { onClick: onAddQuestion, "class": "btn large primary" },
	      "Add another question"
	    ),
	    (0, _preact.h)(
	      "button",
	      { onClick: onPublish, "class": "btn large" },
	      "Publish the form"
	    )
	  );
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	exports.default = function (_ref) {
	  var onTypeChange = _ref.onTypeChange;
	  var type = _ref.type;
	  return (0, _preact.h)(
	    "div",
	    { "class": "select" },
	    (0, _preact.h)(
	      "select",
	      { value: type, onChange: onTypeChange },
	      (0, _preact.h)(
	        "option",
	        { value: "TextField" },
	        "Short Text Answer"
	      ),
	      (0, _preact.h)(
	        "option",
	        { value: "TextArea" },
	        "Long Text Answer"
	      ),
	      (0, _preact.h)(
	        "option",
	        { value: "Number" },
	        "Number"
	      ),
	      (0, _preact.h)(
	        "option",
	        { value: "MultipleChoice" },
	        "Multiple Choice"
	      ),
	      (0, _preact.h)(
	        "option",
	        { value: "Email" },
	        "Email"
	      ),
	      (0, _preact.h)(
	        "option",
	        { value: "Date" },
	        "Date"
	      ),
	      (0, _preact.h)(
	        "option",
	        { value: "Phone" },
	        "Phone"
	      )
	    )
	  );
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	exports.default = function (_ref) {
	  _objectDestructuringEmpty(_ref);

	  return (0, _preact.h)('textarea', null);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(0);

	exports.default = function (_ref) {
	  var type = _ref.type;
	  return (0, _preact.h)('input', { placeholder: type[0].toUpperCase() + type.slice(1), type: type });
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(0);

	var _clickbait = __webpack_require__(15);

	var _clickbait2 = _interopRequireDefault(_clickbait);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TitleField = function (_Component) {
	  _inherits(TitleField, _Component);

	  function TitleField(props) {
	    _classCallCheck(this, TitleField);

	    var _this = _possibleConstructorReturn(this, (TitleField.__proto__ || Object.getPrototypeOf(TitleField)).call(this, props));

	    _this.state = { title: '', clickbait: '' };
	    _this.onClickbait = _this.onClickbait.bind(_this);
	    return _this;
	  }

	  _createClass(TitleField, [{
	    key: 'onClickbait',
	    value: function onClickbait(e) {
	      this.setState({ title: (0, _clickbait2.default)(this.state.clickbait) });
	    }
	  }, {
	    key: 'render',
	    value: function render(_ref, _ref2) {
	      var title = _ref2.title;
	      var clickbait = _ref2.clickbait;

	      _objectDestructuringEmpty(_ref);

	      return (0, _preact.h)(
	        'div',
	        { 'class': 'card' },
	        (0, _preact.h)(
	          'h2',
	          null,
	          'The Title'
	        ),
	        (0, _preact.h)(
	          'p',
	          null,
	          'The first thing a person ( or a 😺 ) will want to know before filling your form is what is this all about.'
	        ),
	        (0, _preact.h)(
	          'p',
	          null,
	          'Let\'s start by adding an informative and appealing title.'
	        ),
	        (0, _preact.h)('input', { type: 'text', placeholder: 'Form title', onInput: this.linkState('title'), value: title }),
	        (0, _preact.h)(
	          'p',
	          null,
	          'Out of ideas? try the ClickBait Form title generator'
	        ),
	        (0, _preact.h)(
	          'div',
	          { 'class': 'clickbait-container' },
	          (0, _preact.h)('input', { 'class': 'small', type: 'text', placeholder: 'Form topic', onInput: this.linkState('clickbait'), value: clickbait }),
	          (0, _preact.h)(
	            'button',
	            { 'class': 'btn', onClick: this.onClickbait },
	            'Generate clickbait'
	          )
	        )
	      );
	    }
	  }]);

	  return TitleField;
	}(_preact.Component);

	exports.default = TitleField;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _preact = __webpack_require__(0);

	var _FormCreator = __webpack_require__(1);

	var _FormCreator2 = _interopRequireDefault(_FormCreator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _preact.render)((0, _preact.h)(_FormCreator2.default, null), document.querySelector('#root'));

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// Extracted from http://www.contentrow.com/tools/link-bait-title-generator

	var options = ['why $$ suck/s', '10 ways $$ can suck the life out of you', '11 ways investing in $$ can make you a millionaire', '8 reasons $$ will change the way you think about everything', 'what the government doesn\'t want you to know about $$', '8 unbelievable things you never knew about $$', '9 reasons you can blame the recession on $$', 'the rise of $$ and how to make it stop', 'the connection between $$ and sex', '7 things lady gaga has in common with $$', '13 amazing facts about $$', '6 reasons to be addicted to $$', '12 reasons $$ is/are the end of the world as we know it', 'why you should forget everything you learned about $$', '8 things the media hasn\'t told you about $$', '10 ways marketers are making you addicted to $$', '$$ die/s every minute you don\'t read this article', 'why you should give up sex and devote your life to $$', 'guns don\'t kill people -- $$ kills people', '101 unusual uses of $$', 'why $$ is/are destroying america', '8 deadly uses for $$', 'the most boring article about $$ you\'ll ever read', 'the most incredible article about $$ you\'ll ever read', '10 ways $$ can help you live to 100'];

	exports.default = function (term) {
	  return options[Math.floor(Math.random() * options.length)].replace('$$', term);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (str) {
	  if (/e-?mail/gi.test(str)) {
	    return 'Email';
	  } else if (/age|how many|how old/gi.test(str)) {
	    return 'Number';
	  } else if (/^when/gi.test(str)) {
	    return 'Date';
	  } else if (/^which/gi.test(str)) {
	    return 'MultipleChoice';
	  } else if (/\?.*\?/gi.test(str)) {
	    return 'TextArea';
	  } else if (/phone/gi.test(str)) {
	    return 'Phone';
	  } else {
	    return 'TextField';
	  }
	};

/***/ }
/******/ ]);
