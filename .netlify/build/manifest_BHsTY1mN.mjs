import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_BeXiVzIq.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kb/Documents/komponents/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.D0rg8HhH.css"},{"type":"external","src":"/_astro/_slug_.DsfR3Xpq.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\nli>p{margin-top:0!important;margin-bottom:0!important}\n"}],"routeData":{"route":"/products-filtered","isIndex":false,"type":"page","pattern":"^\\/products-filtered\\/?$","segments":[[{"content":"products-filtered","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products-filtered.astro","pathname":"/products-filtered","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://komponents.ng","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kb/Documents/komponents/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/kb/Documents/komponents/src/pages/products-filtered.astro",{"propagation":"none","containsHead":true}],["/Users/kb/Documents/komponents/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/products-filtered@_@astro":"pages/products-filtered.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BHsTY1mN.mjs","/Users/kb/Documents/komponents/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ZISg-Q_Y.mjs","/Users/kb/Documents/komponents/src/layouts/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.CojhUYXm.js","/Users/kb/Documents/komponents/src/layouts/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.dbjB6ZX2.js","astro:scripts/page.js":"_astro/page.7qqag-5g.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/kumbh-sans-symbols-wght-normal.CysWjyVr.woff2","/_astro/kumbh-sans-math-wght-normal.F8t5Oz2u.woff2","/_astro/kumbh-sans-latin-wght-normal.9_PmqMxx.woff2","/_astro/kumbh-sans-latin-ext-wght-normal.tMZHC8RE.woff2","/_astro/_slug_.DsfR3Xpq.css","/_astro/_slug_.D0rg8HhH.css","/_headers","/browserconfig.xml","/favicon.ico","/favicon.svg","/humans.txt","/site.webmanifest","/thumbnail.png","/_astro/Base.astro_astro_type_script_index_0_lang.CojhUYXm.js","/_astro/Header.astro_astro_type_script_index_0_lang.dbjB6ZX2.js","/_astro/gsap.DV8oAp2J.js","/_astro/page.7qqag-5g.js","/favicons/android-chrome-192x192.png","/favicons/android-chrome-512x512.png","/favicons/apple-touch-icon.png","/favicons/favicon-16x16.png","/favicons/favicon-32x32.png","/favicons/mstile-144x144.png","/favicons/mstile-150x150.png","/favicons/mstile-310x150.png","/favicons/mstile-310x310.png","/favicons/mstile-70x70.png","/favicons/safari-pinned-tab.svg","/unsplash/ben-iwara-scxzJbUaU9A-unsplash.jpg","/unsplash/dan-lefebvre-RFAHj4tI37Y-unsplash.jpg","/unsplash/david-cristian-vvKKnVDlQtY-unsplash.jpg","/unsplash/emmanuel-ikwuegbu-KHO_jvns5Xc-unsplash.jpg","/unsplash/getty-images-Gb_RX9fSkr4-unsplash.jpg","/unsplash/getty-images-L5nd7rPrEic-unsplash.jpg","/unsplash/getty-images-TQZKQ9CGNl8-unsplash.jpg","/unsplash/getty-images-btKLB42155g-unsplash.jpg","/unsplash/getty-images-e6aHgRI75sM-unsplash.jpg","/unsplash/getty-images-loAV8Aq0KdQ-unsplash.jpg","/unsplash/getty-images-mZSf3p45Wwo-unsplash.jpg","/unsplash/justin-lim-Fpcy-AdFhUg-unsplash.jpg","/unsplash/kumpan-electric-B28EU1hTHLU-unsplash.jpg","/unsplash/markus-spiske-rNn_TU8dvoY-unsplash.jpg","/unsplash/ricardo-gomez-angel-MagdWoazARo-unsplash.jpg","/unsplash/thisisengineering-raeng-ntZM993INp0-unsplash.jpg","/unsplash/thomas-kelley-xVptEZzgVfo-unsplash.jpg","/_astro/page.7qqag-5g.js","/404.html"],"buildFormat":"preserve","checkOrigin":true,"serverIslandNameMap":[],"key":"idiVlHcNg0A6vrXQy5tepTAFjsXWFRNVsTKP3M9MxlQ="});

export { manifest };
