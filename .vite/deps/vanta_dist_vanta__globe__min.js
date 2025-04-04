import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/vanta/dist/vanta.globe.min.js
var require_vanta_globe_min = __commonJS({
  "node_modules/vanta/dist/vanta.globe.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports._vantaEffect = e() : t._vantaEffect = e();
    }("undefined" != typeof self ? self : exports, () => (() => {
      "use strict";
      var t = { d: (e2, s2) => {
        for (var i2 in s2) t.o(s2, i2) && !t.o(e2, i2) && Object.defineProperty(e2, i2, { enumerable: true, get: s2[i2] });
      }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, e = {};
      function s(t2, e2) {
        return null == t2 && (t2 = 0), null == e2 && (e2 = 1), t2 + Math.random() * (e2 - t2);
      }
      t.r(e), t.d(e, { default: () => u }), Number.prototype.clamp = function(t2, e2) {
        return Math.min(Math.max(this, t2), e2);
      };
      const i = (t2) => 0.299 * t2.r + 0.587 * t2.g + 0.114 * t2.b;
      function o(t2) {
        for (; t2.children && t2.children.length > 0; ) o(t2.children[0]), t2.remove(t2.children[0]);
        t2.geometry && t2.geometry.dispose(), t2.material && (Object.keys(t2.material).forEach((e2) => {
          t2.material[e2] && null !== t2.material[e2] && "function" == typeof t2.material[e2].dispose && t2.material[e2].dispose();
        }), t2.material.dispose());
      }
      const n = "object" == typeof window;
      let r = n && window.THREE || {};
      n && !window.VANTA && (window.VANTA = {});
      const h = n && window.VANTA || {};
      h.register = (t2, e2) => h[t2] = (t3) => new e2(t3), h.version = "0.5.24";
      const a = function() {
        return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments);
      };
      h.VantaBase = class {
        constructor(t2 = {}) {
          if (!n) return false;
          h.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.windowGyroWrapper = this.windowGyroWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this);
          const e2 = "function" == typeof this.getDefaultOptions ? this.getDefaultOptions() : this.defaultOptions;
          if (this.options = Object.assign({ mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1 }, e2), (t2 instanceof HTMLElement || "string" == typeof t2) && (t2 = { el: t2 }), Object.assign(this.options, t2), this.options.THREE && (r = this.options.THREE), this.el = this.options.el, null == this.el) a('Instance needs "el" param!');
          else if (!(this.options.el instanceof HTMLElement)) {
            const t3 = this.el;
            if (this.el = (s2 = t3, document.querySelector(s2)), !this.el) return void a("Cannot find element", t3);
          }
          var s2, i2;
          this.prepareEl(), this.initThree(), this.setSize();
          try {
            this.init();
          } catch (t3) {
            return a("Init error", t3), this.renderer && this.renderer.domElement && this.el.removeChild(this.renderer.domElement), void (this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = (i2 = this.options.backgroundColor, "number" == typeof i2 ? "#" + ("00000" + i2.toString(16)).slice(-6) : i2)));
          }
          this.initMouse(), this.resize(), this.animationLoop();
          const o2 = window.addEventListener;
          o2("resize", this.resize), window.requestAnimationFrame(this.resize), this.options.mouseControls && (o2("scroll", this.windowMouseMoveWrapper), o2("mousemove", this.windowMouseMoveWrapper)), this.options.touchControls && (o2("touchstart", this.windowTouchWrapper), o2("touchmove", this.windowTouchWrapper)), this.options.gyroControls && o2("deviceorientation", this.windowGyroWrapper);
        }
        setOptions(t2 = {}) {
          Object.assign(this.options, t2), this.triggerMouseMove();
        }
        prepareEl() {
          let t2, e2;
          if ("undefined" != typeof Node && Node.TEXT_NODE) for (t2 = 0; t2 < this.el.childNodes.length; t2++) {
            const e3 = this.el.childNodes[t2];
            if (e3.nodeType === Node.TEXT_NODE) {
              const t3 = document.createElement("span");
              t3.textContent = e3.textContent, e3.parentElement.insertBefore(t3, e3), e3.remove();
            }
          }
          for (t2 = 0; t2 < this.el.children.length; t2++) e2 = this.el.children[t2], "static" === getComputedStyle(e2).position && (e2.style.position = "relative"), "auto" === getComputedStyle(e2).zIndex && (e2.style.zIndex = 1);
          "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
        }
        applyCanvasStyles(t2, e2 = {}) {
          Object.assign(t2.style, { position: "absolute", zIndex: 0, top: 0, left: 0, background: "" }), Object.assign(t2.style, e2), t2.classList.add("vanta-canvas");
        }
        initThree() {
          r.WebGLRenderer ? (this.renderer = new r.WebGLRenderer({ alpha: true, antialias: true }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new r.Scene()) : console.warn("[VANTA] No THREE defined on window");
        }
        getCanvasElement() {
          return this.renderer ? this.renderer.domElement : this.p5renderer ? this.p5renderer.canvas : void 0;
        }
        getCanvasRect() {
          const t2 = this.getCanvasElement();
          return !!t2 && t2.getBoundingClientRect();
        }
        windowMouseMoveWrapper(t2) {
          const e2 = this.getCanvasRect();
          if (!e2) return false;
          const s2 = t2.clientX - e2.left, i2 = t2.clientY - e2.top;
          s2 >= 0 && i2 >= 0 && s2 <= e2.width && i2 <= e2.height && (this.mouseX = s2, this.mouseY = i2, this.options.mouseEase || this.triggerMouseMove(s2, i2));
        }
        windowTouchWrapper(t2) {
          const e2 = this.getCanvasRect();
          if (!e2) return false;
          if (1 === t2.touches.length) {
            const s2 = t2.touches[0].clientX - e2.left, i2 = t2.touches[0].clientY - e2.top;
            s2 >= 0 && i2 >= 0 && s2 <= e2.width && i2 <= e2.height && (this.mouseX = s2, this.mouseY = i2, this.options.mouseEase || this.triggerMouseMove(s2, i2));
          }
        }
        windowGyroWrapper(t2) {
          const e2 = this.getCanvasRect();
          if (!e2) return false;
          const s2 = Math.round(2 * t2.alpha) - e2.left, i2 = Math.round(2 * t2.beta) - e2.top;
          s2 >= 0 && i2 >= 0 && s2 <= e2.width && i2 <= e2.height && (this.mouseX = s2, this.mouseY = i2, this.options.mouseEase || this.triggerMouseMove(s2, i2));
        }
        triggerMouseMove(t2, e2) {
          void 0 === t2 && void 0 === e2 && (this.options.mouseEase ? (t2 = this.mouseEaseX, e2 = this.mouseEaseY) : (t2 = this.mouseX, e2 = this.mouseY)), this.uniforms && (this.uniforms.iMouse.value.x = t2 / this.scale, this.uniforms.iMouse.value.y = e2 / this.scale);
          const s2 = t2 / this.width, i2 = e2 / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(s2, i2);
        }
        setSize() {
          this.scale || (this.scale = 1), "undefined" != typeof navigator && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600) && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = Math.max(this.el.offsetWidth, this.options.minWidth), this.height = Math.max(this.el.offsetHeight, this.options.minHeight);
        }
        initMouse() {
          (!this.mouseX && !this.mouseY || this.mouseX === this.options.minWidth / 2 && this.mouseY === this.options.minHeight / 2) && (this.mouseX = this.width / 2, this.mouseY = this.height / 2, this.triggerMouseMove(this.mouseX, this.mouseY));
        }
        resize() {
          this.setSize(), this.camera && (this.camera.aspect = this.width / this.height, "function" == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize();
        }
        isOnScreen() {
          const t2 = this.el.offsetHeight, e2 = this.el.getBoundingClientRect(), s2 = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop, i2 = e2.top + s2;
          return i2 - window.innerHeight <= s2 && s2 <= i2 + t2;
        }
        animationLoop() {
          this.t || (this.t = 0), this.t2 || (this.t2 = 0);
          const t2 = performance.now();
          if (this.prevNow) {
            let e2 = (t2 - this.prevNow) / (1e3 / 60);
            e2 = Math.max(0.2, Math.min(e2, 5)), this.t += e2, this.t2 += (this.options.speed || 1) * e2, this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2);
          }
          return this.prevNow = t2, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > 0.1 && (this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), (this.isOnScreen() || this.options.forceAnimate) && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update(), "function" == typeof this.afterRender && this.afterRender()), this.req = window.requestAnimationFrame(this.animationLoop);
        }
        restart() {
          if (this.scene) for (; this.scene.children.length; ) this.scene.remove(this.scene.children[0]);
          "function" == typeof this.onRestart && this.onRestart(), this.init();
        }
        init() {
          "function" == typeof this.onInit && this.onInit();
        }
        destroy() {
          "function" == typeof this.onDestroy && this.onDestroy();
          const t2 = window.removeEventListener;
          t2("touchstart", this.windowTouchWrapper), t2("touchmove", this.windowTouchWrapper), t2("scroll", this.windowMouseMoveWrapper), t2("mousemove", this.windowMouseMoveWrapper), t2("deviceorientation", this.windowGyroWrapper), t2("resize", this.resize), window.cancelAnimationFrame(this.req);
          const e2 = this.scene;
          e2 && e2.children && o(e2), this.renderer && (this.renderer.domElement && this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null), h.current === this && (h.current = null);
        }
      };
      const l = h.VantaBase, c = "object" == typeof window;
      let p = c && window.THREE;
      class d extends l {
        static initClass() {
          this.prototype.defaultOptions = { color: 16727937, color2: 16777215, size: 1, backgroundColor: 2299196, points: 10, maxDistance: 20, spacing: 15, showDots: true };
        }
        constructor(t2) {
          p = t2.THREE || p, super(t2);
        }
        genPoint(t2, e2, s2) {
          let i2;
          if (this.points || (this.points = []), this.options.showDots) {
            const t3 = new p.SphereGeometry(0.25, 12, 12), e3 = new p.MeshLambertMaterial({ color: this.options.color });
            i2 = new p.Mesh(t3, e3);
          } else i2 = new p.Object3D();
          return this.cont.add(i2), i2.ox = t2, i2.oy = e2, i2.oz = s2, i2.position.set(t2, e2, s2), i2.r = 0, this.points.push(i2);
        }
        onInit() {
          this.cont = new p.Group(), this.cont.position.set(-50, -20, 0), this.scene.add(this.cont);
          let t2 = this.options.points, { spacing: e2 } = this.options;
          const o2 = t2 * t2 * 2;
          this.linePositions = new Float32Array(o2 * o2 * 3), this.lineColors = new Float32Array(o2 * o2 * 3);
          const n2 = i(new p.Color(this.options.color)), r2 = i(new p.Color(this.options.backgroundColor));
          this.blending = n2 > r2 ? "additive" : "subtractive";
          const h2 = new p.BufferGeometry();
          h2.setAttribute("position", new p.BufferAttribute(this.linePositions, 3).setUsage(p.DynamicDrawUsage)), h2.setAttribute("color", new p.BufferAttribute(this.lineColors, 3).setUsage(p.DynamicDrawUsage)), h2.computeBoundingSphere(), h2.setDrawRange(0, 0);
          const a2 = new p.LineBasicMaterial({ vertexColors: p.VertexColors, blending: "additive" === this.blending ? p.AdditiveBlending : null, transparent: true });
          this.linesMesh = new p.LineSegments(h2, a2), this.cont.add(this.linesMesh);
          for (let s2 = 0; s2 <= t2; s2++) for (let i2 = 0; i2 <= t2; i2++) {
            const o3 = 0, n3 = (s2 - t2 / 2) * e2;
            let r3 = (i2 - t2 / 2) * e2;
            this.genPoint(n3, o3, r3);
          }
          this.camera = new p.PerspectiveCamera(20, this.width / this.height, 0.01, 1e4), this.camera.position.set(50, 100, 150), this.scene.add(this.camera);
          const l2 = new p.AmbientLight(16777215, 0.75);
          this.scene.add(l2), this.spot = new p.SpotLight(16777215, 1), this.spot.position.set(0, 200, 0), this.spot.distance = 400, this.spot.target = this.cont, this.scene.add(this.spot), this.cont2 = new p.Group(), this.cont2.position.set(0, 15, 0), this.scene.add(this.cont2);
          const c2 = new p.LineBasicMaterial({ color: this.options.color2 }), d2 = [];
          for (let t3 = 0; t3 < 80; t3++) {
            const t4 = s(18, 24), e3 = t4 + s(1, 6), i2 = s(-1, 1), o3 = Math.sqrt(1 - i2 * i2), n3 = s(0, 2 * Math.PI), r3 = Math.sin(n3) * o3, h3 = Math.cos(n3) * o3;
            d2.push(new p.Vector3(h3 * t4, r3 * t4, i2 * t4)), d2.push(new p.Vector3(h3 * e3, r3 * e3, i2 * e3));
          }
          const u2 = new p.BufferGeometry().setFromPoints(d2);
          this.linesMesh2 = new p.LineSegments(u2, c2), this.linesMesh2.position.set(0, 0, 0), this.cont2.add(this.linesMesh2);
          const m = new p.LineBasicMaterial({ color: this.options.color2, linewidth: 2 }), w = [];
          w.push(new p.Vector3(0, 30, 0)), w.push(new p.Vector3(0, -30, 0));
          for (let t3 = 0; t3 < 4; t3++) {
            let e3 = 0.15 * Math.cos(t3 / 4 * Math.PI * 2), s2 = 0.15 * Math.sin(t3 / 4 * Math.PI * 2), i2 = [17.9, 12, 8, 5, 3, 2, 1.5, 1.1, 0.8, 0.6, 0.45, 0.3, 0.2, 0.1, 0.05, 0.03, 0.02, 0.01];
            for (let t4 = 0; t4 < i2.length; t4++) {
              let o3 = i2[t4], n3 = 6 * (t4 + 1);
              w.push(new p.Vector3(e3 * n3, o3, s2 * n3)), w.push(new p.Vector3(e3 * n3, -o3, s2 * n3));
            }
          }
          const f = new p.BufferGeometry().setFromPoints(w);
          this.linesMesh3 = new p.LineSegments(f, m), this.linesMesh3.position.set(0, 0, 0), this.cont2.add(this.linesMesh3);
          const g = new p.LineBasicMaterial({ color: this.options.color }), y = new p.SphereGeometry(18 * this.options.size, 18, 14), M = new p.EdgesGeometry(y);
          this.sphere = new p.LineSegments(M, g), this.sphere.position.set(0, 0, 0), this.cont2.add(this.sphere), this.cont2.rotation.x = -0.25;
        }
        onUpdate() {
          let t2;
          null != this.helper && this.helper.update(), null != this.controls && this.controls.update();
          const e2 = this.camera;
          Math.abs(e2.tx - e2.position.x) > 0.01 && (t2 = e2.tx - e2.position.x, e2.position.x += 0.02 * t2), Math.abs(e2.ty - e2.position.y) > 0.01 && (t2 = e2.ty - e2.position.y, e2.position.y += 0.02 * t2), c && window.innerWidth < 480 ? e2.lookAt(new p.Vector3(-10, 0, 0)) : c && window.innerWidth < 720 ? e2.lookAt(new p.Vector3(-20, 0, 0)) : e2.lookAt(new p.Vector3(-40, 0, 0));
          let s2 = 0, i2 = 0, o2 = 0;
          const n2 = new p.Color(this.options.backgroundColor), r2 = new p.Color(this.options.color), h2 = new p.Color(this.options.color2), a2 = r2.clone().sub(n2);
          this.rayCaster && this.rayCaster.setFromCamera(new p.Vector2(this.rcMouseX, this.rcMouseY), this.camera), this.linesMesh2 && (this.linesMesh2.rotation.z += 2e-3, this.linesMesh2.rotation.x += 8e-4, this.linesMesh2.rotation.y += 5e-4), this.sphere && (this.sphere.rotation.y += 2e-3, this.linesMesh3.rotation.y -= 4e-3);
          for (let t3 = 0; t3 < this.points.length; t3++) {
            let e3, h3;
            const l2 = this.points[t3];
            h3 = this.rayCaster ? this.rayCaster.ray.distanceToPoint(l2.position) : 1e3;
            const c2 = h3.clamp(5, 15);
            l2.scale.z = (0.25 * (15 - c2)).clamp(1, 100), l2.scale.x = l2.scale.y = l2.scale.z, l2.position.y = 2 * Math.sin(l2.position.x / 10 + 0.01 * this.t + l2.position.z / 10 * 0.5);
            for (let h4 = t3; h4 < this.points.length; h4++) {
              const t4 = this.points[h4], c3 = l2.position.x - t4.position.x, d2 = l2.position.y - t4.position.y, u2 = l2.position.z - t4.position.z;
              if (e3 = Math.sqrt(c3 * c3 + d2 * d2 + u2 * u2), e3 < this.options.maxDistance) {
                let h5, c4 = 2 * (1 - e3 / this.options.maxDistance);
                c4 = c4.clamp(0, 1), h5 = "additive" === this.blending ? new p.Color(0).lerp(a2, c4) : n2.clone().lerp(r2, c4), this.linePositions[s2++] = l2.position.x, this.linePositions[s2++] = l2.position.y, this.linePositions[s2++] = l2.position.z, this.linePositions[s2++] = t4.position.x, this.linePositions[s2++] = t4.position.y, this.linePositions[s2++] = t4.position.z, this.lineColors[i2++] = h5.r, this.lineColors[i2++] = h5.g, this.lineColors[i2++] = h5.b, this.lineColors[i2++] = h5.r, this.lineColors[i2++] = h5.g, this.lineColors[i2++] = h5.b, o2++;
              }
            }
          }
          return this.linesMesh.geometry.setDrawRange(0, 2 * o2), this.linesMesh.geometry.attributes.position.needsUpdate = true, this.linesMesh.geometry.attributes.color.needsUpdate = true, this.sphere.material.color.set(r2), this.linesMesh2.material.color.set(h2), this.linesMesh3.material.color.set(h2), 1e-3 * this.t;
        }
        onMouseMove(t2, e2) {
          const s2 = this.camera;
          s2.oy || (s2.oy = s2.position.y, s2.ox = s2.position.x, s2.oz = s2.position.z);
          const i2 = Math.atan2(s2.oz, s2.ox), o2 = Math.sqrt(s2.oz * s2.oz + s2.ox * s2.ox), n2 = i2 + 1.5 * (t2 - 0.5) * (this.options.mouseCoeffX || 1);
          s2.tz = o2 * Math.sin(n2), s2.tx = o2 * Math.cos(n2), s2.ty = s2.oy + 80 * (e2 - 0.5) * (this.options.mouseCoeffY || 1), this.rayCaster, this.rcMouseX = 2 * t2 - 1, this.rcMouseY = 2 * -t2 + 1;
        }
        onRestart() {
          this.scene.remove(this.linesMesh), this.points = [];
        }
      }
      d.initClass();
      const u = h.register("GLOBE", d);
      return e;
    })());
  }
});
export default require_vanta_globe_min();
//# sourceMappingURL=vanta_dist_vanta__globe__min.js.map
