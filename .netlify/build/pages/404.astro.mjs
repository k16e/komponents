import { _ as _transition, $ as $$Icon, a as $$Wrapper, b as $$Head, c as $$TitleHidden, P as Pn, d as $$Grid, e as $$Inner, f as $$BannerTitle, g as $$BannerSubtitle, h as $$Copy, i as $$Anchor, j as $$Button } from '../chunks/Button_Bg__GjAN.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderComponent, e as renderSlot } from '../chunks/astro/server_BeXiVzIq.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://komponents.ng");
const $$HeaderBrand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderBrand;
  const {
    title,
    contactActions,
    showNav = true,
    nav,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["z-50 bg-white", _transition(), classes], "class:list")} data-header-brand${spreadAttributes(attrs)}> ${renderComponent($$result, "Wrapper", $$Wrapper, { "padX": false, "class:list": "flex items-center justify-between h-full" }, { "default": ($$result2) => renderTemplate` <a href="/" class="flex p-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon", "class": "w-9 lg:hidden text-accent-600" })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "logo", "class": "h-10 hidden lg:block" })} <span class="sr-only">Komponents</span> </a> ` })} </header>`;
}, "/Users/kb/Documents/komponents/src/layouts/HeaderBrand.astro", void 0);

const $$Astro$1 = createAstro("https://komponents.ng");
const $$Slats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Slats;
  const {
    qty,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="overflow-clip"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 translate-y-[12%] sm:translate-y-[25%]"> ${Array.apply(null, { length: qty }).map((n) => renderTemplate`<div${addAttribute([`
                    last:hidden [&:nth-child(-n+1)]:hidden sm:[&:nth-child(-n+1)]:block lg:last:block aspect-[3/4]
                    bg-accent-600 h-[480px] w-full
                    clip-path-sm
                `], "class:list")}></div>`)} </div> </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/Slats.astro", void 0);

const $$Astro = createAstro("https://komponents.ng");
const $$Error = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error;
  const {
    pageTitle,
    pageDescription,
    pageThumbnail
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth bg-white"> ${renderComponent($$result, "Head", $$Head, { "title": pageTitle, "description": pageDescription, "image": pageThumbnail || "/thumbnail.png" })}${maybeRenderHead()}<body class="text-surface-700 bg-white flex h-svh lg:h-dvh flex-col"> ${renderComponent($$result, "TitleHidden", $$TitleHidden, { "title": pageTitle })} ${renderComponent($$result, "HeaderBrand", $$HeaderBrand, {})} <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Slats", $$Slats, { "qty": 3 })} </body></html>`;
}, "/Users/kb/Documents/komponents/src/layouts/Error.astro", void 0);

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const storyblokApi = Pn(), { data: settings } = await storyblokApi.get("cdn/stories/settings", {
    version: "published",
    resolve_links: "url"
  }), error = settings.story.content.error[0], link = error.link[0];
  return renderTemplate`${renderComponent($$result, "Error", $$Error, { "pageTitle": error.title, "pageDescription": error.description, "showNav": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "padY": "top" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": "pt-8 sm:pt-12 lg:pt-4" }, { "leading": ($$result4) => renderTemplate`${renderComponent($$result4, "Inner", $$Inner, { "slot": "leading", "class": "space-y-4 sm:space-y-6 lg:space-y-12 lg:pb-8" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "BannerTitle", $$BannerTitle, { "title": error.headline, "size": "4xl", "weight": "extra", "color": "accent", "class:list": "text-accent-600" })} ${renderComponent($$result5, "BannerSubtitle", $$BannerSubtitle, { "title": error.subheadline })} ` })}`, "trailing": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="space-y-8 md:space-y-10 lg:space-y-14"> ${renderComponent($$result4, "Copy", $$Copy, { "content": error.description })} ${renderComponent($$result4, "Anchor", $$Anchor, { "href": "/", "hover": "shadow" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", $$Button, { "icon": link.icon, "label": link.title, "iconPosition": link.icon_position, "color": link.color, "class": "w-full" })} ` })} </div>` })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/pages/404.astro", void 0);
const $$file = "/Users/kb/Documents/komponents/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
