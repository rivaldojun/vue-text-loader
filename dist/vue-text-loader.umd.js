(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.InfiniteTextLoader = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var __default__ = {
    name: 'InfiniteTextLoader',
    props: {
      text: { type: String, default: 'LOADER' },
      viewBox: { type: String, default: '0 0 400 100' },
      svgClasses: { type: String, default: 'rivaldo-text' },
      textClasses: { type: String, default: '' },
      textX: { type: String, default: '50%' },
      textY: { type: String, default: '50%' },
      textDy: { type: String, default: '.35em' },
      textAnchor: { type: String, default: 'middle' },
      fillColor: { type: String, default: '#0066cc' },
      outlineColor: { type: String, default: '#cbcbcb' },
      fontSize: { type: String, default: '12px' },
      fontWeight: { type: String, default: '900' },
      letterSpacing: { type: String, default: '0.1em' },
      strokeWidth: { type: String, default: '1px' },
      animationDuration: { type: String, default: '1s' },
      animationTimingFunction: { type: String, default: 'linear' },
      animationIterationCount: { type: String, default: 'infinite' },
      animationDirection: { type: String, default: 'alternate' },
      fontFamily: { type: String, default: 'Roboto' },
      backdropColor: { type: String, default: 'rgba(0, 0, 0, 0.5)' }, // Couleur par défaut
      backdropBlur: { type: String, default: '1px' }, // Flou par défaut
      textAnimation: {
        type: String,
        default: 'scale',
        validator: function (value) { return ['none', 'rotate', 'scale', 'translate', 'bounce'].includes(value); },
      },
    },
    computed: {
      gradientId: function gradientId() {
        return ("fill-gradient-" + (Math.random().toString(36).substr(2, 9)));
      },
      fillPercentage: function fillPercentage() {
        return this.animationDirection === 'alternate' ? '100%' : '100%';
      },
      fontStyle: function fontStyle() {
        return ("'" + (this.fontFamily) + "', sans-serif");
      },
      computedViewBox: function computedViewBox() {
        var viewBoxValues = this.viewBox.split(' ').map(Number);
        var textWidth = this.text.length * (parseInt(this.fontSize) * 0.6); // Estimation approximative de la largeur du texte
        return ("0 0 " + (Math.max(viewBoxValues[2], textWidth)) + " " + (viewBoxValues[3]));
      },
      textAnimationClass: function textAnimationClass() {
        return ("animation-" + (this.textAnimation));
      },
      backdropStyle: function backdropStyle() {
      return {
        backgroundColor: this.backdropColor,
        backdropFilter: ("blur(" + (this.backdropBlur) + ")"),
      };
    },
    },
    methods: {
      loadGoogleFont: function loadGoogleFont(font) {
        if (!document.querySelector(("link[href=\"https://fonts.googleapis.com/css?family=" + font + "\"]"))) {
          var link = document.createElement('link');
          link.href = "https://fonts.googleapis.com/css?family=" + font;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
      }
    },
    mounted: function mounted() {
      this.loadGoogleFont(this.fontFamily);
    },
    watch: {
      fontFamily: function fontFamily(newFont) {
        this.loadGoogleFont(newFont);
      }
    }
  };
  var __injectCSSVars__ = function () {
  vue.useCssVars(function (_ctx) { return ({
    "e3677df8-fontSize": (_ctx.fontSize),
    "e3677df8-fontWeight": (_ctx.fontWeight),
    "e3677df8-letterSpacing": (_ctx.letterSpacing),
    "e3677df8-outlineColor": (_ctx.outlineColor),
    "e3677df8-strokeWidth": (_ctx.strokeWidth),
    "e3677df8-fontStyle": (_ctx.fontStyle),
    "e3677df8-\`url\(\#\$\{gradientId\}\)\`": (("url(#" + (_ctx.gradientId) + ")")),
    "e3677df8-fillColor": (_ctx.fillColor),
    "e3677df8-animationDuration": (_ctx.animationDuration),
    "e3677df8-animationTimingFunction": (_ctx.animationTimingFunction),
    "e3677df8-animationIterationCount": (_ctx.animationIterationCount),
    "e3677df8-animationDirection": (_ctx.animationDirection)
  }); });};
  var __setup__ = __default__.setup;
  __default__.setup = __setup__
    ? function (props, ctx) { __injectCSSVars__();return __setup__(props, ctx) }
    : __injectCSSVars__;

  var _hoisted_1 = { class: "rivaldo-container" };
  var _hoisted_2 = ["viewBox"];
  var _hoisted_3 = ["id"];
  var _hoisted_4 = ["offset", "stop-color"];
  var _hoisted_5 = ["offset", "stop-color"];
  var _hoisted_6 = ["x", "y", "dy", "text-anchor"];
  var _hoisted_7 = ["x", "y", "dy", "text-anchor"];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: "rivaldo-loader-container",
      style: vue.normalizeStyle($options.backdropStyle)
    }, [
      vue.createElementVNode("div", _hoisted_1, [
        (vue.openBlock(), vue.createElementBlock("svg", {
          viewBox: $options.computedViewBox,
          class: vue.normalizeClass([$props.svgClasses, $options.textAnimationClass])
        }, [
          vue.createElementVNode("defs", null, [
            vue.createElementVNode("linearGradient", {
              id: $options.gradientId,
              x1: "0",
              x2: "0",
              y1: "1",
              y2: "0"
            }, [
              vue.createElementVNode("stop", {
                offset: $options.fillPercentage,
                "stop-color": $props.fillColor
              }, null, 8 /* PROPS */, _hoisted_4),
              vue.createElementVNode("stop", {
                offset: $options.fillPercentage,
                "stop-color": $props.fillColor,
                "stop-opacity": "0"
              }, null, 8 /* PROPS */, _hoisted_5)
            ], 8 /* PROPS */, _hoisted_3)
          ]),
          vue.createElementVNode("text", {
            x: $props.textX,
            y: $props.textY,
            dy: $props.textDy,
            "text-anchor": $props.textAnchor,
            class: vue.normalizeClass(['rivaldo-text-content', $props.textClasses])
          }, vue.toDisplayString($props.text), 11 /* TEXT, CLASS, PROPS */, _hoisted_6),
          vue.createElementVNode("text", {
            x: $props.textX,
            y: $props.textY,
            dy: $props.textDy,
            "text-anchor": $props.textAnchor,
            class: vue.normalizeClass(['rivaldo-text-fill', 'rivaldo-text-content', $props.textClasses])
          }, vue.toDisplayString($props.text), 11 /* TEXT, CLASS, PROPS */, _hoisted_7)
        ], 10 /* CLASS, PROPS */, _hoisted_2))
      ])
    ], 4 /* STYLE */))
  }

  __default__.render = render;
  __default__.__scopeId = "data-v-e3677df8";
  __default__.__file = "src/components/InfiniteTextLoader.vue";

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('InfiniteTextLoader', __default__);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  exports.default = __default__;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
