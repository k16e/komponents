import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderSlot, d as renderComponent, F as Fragment, u as unescapeHTML, f as renderScript } from './astro/server_BeXiVzIq.mjs';
import 'kleur/colors';
import camelcase from 'camelcase';
import 'clsx';
import { $ as $$Icon, _ as _transition, k as $$Heading, l as $$LinkText, a as $$Wrapper, m as _empty, n as _gradientLight, d as $$Grid, e as $$Inner, f as $$BannerTitle, g as $$BannerSubtitle, h as $$Copy, i as $$Anchor, j as $$Button, o as _padB, p as _gradientSurface, q as _padY, N as Nn, r as _even, s as _capitalize, P as Pn, t as _padT, c as $$TitleHidden, b as $$Head } from './Button_Bg__GjAN.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_CV-EndFB.mjs';
import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
/* empty css                          */

const $$Astro$11 = createAstro("https://komponents.ng");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$11, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    component = null,
    title,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    `_section _section-${component} relative`,
    classes
  ], "class:list")}${spreadAttributes(attrs)}> ${title && renderTemplate`<h2 class="sr-only">${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/kb/Documents/komponents/src/layouts/Section.astro", void 0);

atom(false);
    atom(false);
    const _products = atom([]),
    _productsNew = atom([]),
    _affiliates = atom([]);
    persistentAtom('affiliate', '');
    const _partners = atom([]),
    _productsByd = atom([]);

function _addProductsNew(item) { _productsNew.set(item); }
function _addAffiliates(item) { _affiliates.set(item); }
function _addProducts(item) { _products.set(item); }
function _addProductsByd(item) { _productsByd.set(item); }
function _addPartners(item) { _partners.set(item); }

const $$Astro$10 = createAstro("https://komponents.ng");
const $$ImageProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$10, $$props, $$slots);
  Astro2.self = $$ImageProduct;
  const {
    filename,
    small = true,
    medium,
    large,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": filename, "alt": "", "width": "576", "height": "576", "quality": "100", "draggable": "false", "class:list": [
    "object-contain aspect-square",
    small && "max-w-52",
    large && "max-w-80",
    classes
  ], ...attrs })}`;
}, "/Users/kb/Documents/komponents/src/atoms/ImageProduct.astro", void 0);

const $$Astro$$ = createAstro("https://komponents.ng");
const $$Chip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$$, $$props, $$slots);
  Astro2.self = $$Chip;
  const { text = "New", icon = "bolt", class: classes, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([
    "flex items-center font-semibold font-display uppercase tracking-widest text-xs pl-3 pr-5 bg-accent-600 py-2 text-accent-50 space-x-1",
    classes
  ], "class:list")}${spreadAttributes(rest)}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class:list": "w-5" })} <span>${text}</span> </span>`;
}, "/Users/kb/Documents/komponents/src/atoms/Chip.astro", void 0);

const $$Astro$_ = createAstro("https://komponents.ng");
const $$CardProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$_, $$props, $$slots);
  Astro2.self = $$CardProduct;
  const {
    filename,
    name,
    link,
    isNew = false,
    class: classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link || "#", "href")}${addAttribute([
    "border-surface-200 border flex flex-col h-full p-3 gap-3 group hover:shadow-lg relative",
    _transition(),
    classes
  ], "class:list")}${spreadAttributes(rest)}> <div class="flex items-center justify-center w-full h-full py-3 pointer-events-none"> ${renderComponent($$result, "ImageProduct", $$ImageProduct, { "filename": filename })} </div> <div class="h-28 flex flex-col justify-between pointer-events-none"> ${renderComponent($$result, "Heading", $$Heading, { "level": "h3", "size": "base", "weight": "medium", "color": "dark", "text": name, "class:list": "line-clamp-2" })} ${link && renderTemplate`<div class="flex items-end justify-between text-accent-600"> ${renderComponent($$result, "LinkText", $$LinkText, { "tiny": false, "titleCase": true, "text": "View Details" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right-up", "class:list": "w-5" })} </div>`} </div> ${isNew && renderTemplate`${renderComponent($$result, "Chip", $$Chip, { "class:list": "absolute top-3 left-0 pointer-events-none" })}`} </a>`;
}, "/Users/kb/Documents/komponents/src/blocks/CardProduct.astro", void 0);

function _unslash(str) { return str.endsWith('/') ? str.slice(0, -1) : str }

function _slug(linkObj) {
    const
        iLink = linkObj.linktype === 'story',
        xLink = linkObj.linktype === 'url';

    if (iLink && linkObj.story) {
        return linkObj.story.full_slug === 'home' ? '/' : `/${ _unslash(linkObj.story.full_slug) }`
    } else if (!linkObj.story && !xLink) {
        return linkObj
    }
    if (xLink) return linkObj.cached_url
}

const $$Astro$Z = createAstro("https://komponents.ng");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Z, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props, { pathname } = Astro2.url, pathArr = pathname.split("/"), isPartner = pathArr.length > 2, partner = pathArr[2] ??= "fronius", products = _productsByd.value.stories, productsByPartner = products.filter(
    (el) => el.content.partner.slug === partner
  );
  return renderTemplate`${blok.body.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })}${isPartner && renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Products", "component": "products", "class:list": "pt-8 xs:pt-12 lg:pt-8" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "tag": "ul", "padB": "b", "class:list": "w-full relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3", "data-list-products": true }, { "default": ($$result3) => renderTemplate`${productsByPartner.map((el, idx) => renderTemplate`${maybeRenderHead()}<li>${renderComponent($$result3, "CardProduct", $$CardProduct, { "filename": el.content.image[0].file.filename, "link": !_empty(el.content.link) && _slug(el.content.link[0].link), "name": el.content.name, "isNew": el.content.is_new, "data-modal-trigger": el.content.is_new, "data-display": `product-at-${idx}`, "data-partner": el.content.partner.slug })}</li>`)}` })}` })}`}`;
}, "/Users/kb/Documents/komponents/src/templates/Page.astro", void 0);

const $$Astro$Y = createAstro("https://komponents.ng");
const $$Product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Y, $$props, $$slots);
  Astro2.self = $$Product;
  const { blok } = Astro2.props;
  return renderTemplate`${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })}`;
}, "/Users/kb/Documents/komponents/src/templates/Product.astro", void 0);

const $$Astro$X = createAstro("https://komponents.ng");
const $$Partner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$Partner;
  const { blok } = Astro2.props;
  return renderTemplate`${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })}`;
}, "/Users/kb/Documents/komponents/src/templates/Partner.astro", void 0);

const $$Astro$W = createAstro("https://komponents.ng");
const $$ImageSquare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$ImageSquare;
  const {
    filename,
    square = true,
    loading = "eager",
    lelo,
    slat,
    cover,
    clip,
    asArray,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": filename, "alt": "", "widths": [576, 768, 960, 1280, 1600], "sizes": `(max-width: 475px) 576px,
        (max-width: 640px) 768px,
        (max-width: 768px) 960px,
        (max-width: 1024px) 1280px,
        (max-width: 1280px) 1600px`, "quality": "high", "inferSize": true, "draggable": "false", "loading": loading, "class:list": [
    "object-cover",
    square && "aspect-square",
    (lelo || slat) && "aspect-[3/4] h-[520px] sm:h-[640px]",
    lelo && "md:h-[720px]",
    slat && "clip-path-xs",
    cover && "aspect-video min-h-[376px] max-h-[376px] sm:min-h-[480px] sm:max-h-[520px] lg:min-h-[640px] lg:max-h-[640px]",
    clip === "y" && "clip-path-y",
    asArray && "h-[520px] sm:h-[640px] md:h-[720px] max-h-[720px]",
    classes
  ], ...attrs })}`;
}, "/Users/kb/Documents/komponents/src/atoms/ImageSquare.astro", void 0);

const $$Astro$V = createAstro("https://komponents.ng");
const $$ElevatorPitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$ElevatorPitch;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [_gradientLight()] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "padY": "y" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": "pt-8 sm:pt-12 lg:pt-4" }, { "leading": ($$result4) => renderTemplate`${renderComponent($$result4, "Inner", $$Inner, { "slot": "leading", "class": "space-y-3 sm:space-y-5 lg:space-y-10 lg:pb-8" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "BannerTitle", $$BannerTitle, { "title": blok.headline, "size": "4xl", "weight": "extra", "color": "accent", "class:list": "text-accent-600" })} ${renderComponent($$result5, "BannerSubtitle", $$BannerSubtitle, { "title": blok.subheadline })} ` })}`, "trailing": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="space-y-8 md:space-y-10 lg:space-y-14"> ${renderComponent($$result4, "Copy", $$Copy, { "content": blok.copy })} <ul class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"> ${blok.links.map((el) => renderTemplate`<li class="group"> ${renderComponent($$result4, "Anchor", $$Anchor, { "href": _slug(el.link), "hover": "shadow" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", $$Button, { "icon": el.icon, "label": el.title, "iconPosition": el.icon_position, "color": el.color, "class": "w-full" })} ` })} </li>`)} </ul> </div>` })} ` })} <div${addAttribute([_padB(), "relative"], "class:list")} data-elevator-pitch> <div${addAttribute([
    `group gap-3 py-4 scrollbar-hide glide__track relative`
  ], "class:list")} data-glide-el="track"> <div class="glide__slides"> ${blok.images.map((image) => renderTemplate`${renderComponent($$result2, "ImageSquare", $$ImageSquare, { "slat": true, "filename": image.file.filename, "class": "max-w-[89%] sm:max-w-[47%] lg:max-w-[33.33%] glide__slide" })}`)} </div> <div class="hidden md:block" data-glide-el="controls"> ${renderComponent($$result2, "Button", $$Button, { "tag": "button", "icon": "arrow-left-fill", "color": "accent", "fab": true, "class:list": "absolute top-1/2 -translate-y-1/2 left-4 md:left-12 lg:left-16 xl:left-28 z-[2]", "data-glide-dir": "<" })} ${renderComponent($$result2, "Button", $$Button, { "tag": "button", "icon": "arrow-right-fill", "color": "accent", "fab": true, "class:list": "absolute top-1/2 -translate-y-1/2 right-4 md:right-12 lg:right-16 xl:right-28 z-[2]", "data-glide-dir": ">" })} </div> </div> <div class="absolute inset-x-0 bottom-0 lg:bottom-3 xl:bottom-7 z-[2] flex items-center justify-center box-content -space-x-3" data-glide-el="controls[nav]"> ${blok.images.map((x, i) => renderTemplate`<button${addAttribute("size-12 group flex items-center justify-center", "class:list")}${addAttribute(`=${i}`, "data-glide-dir")}> <span${addAttribute(`
                                transition-all duration-300 ease-in-out
                                block size-2.5 rounded-full group-[.active]:bg-accent-500
                                bg-accent-300 group-hover:bg-accent-500 group-focus:bg-accent-500 group-[.active]:size-4
                            `, "class:list")}></span> </button>`)} </div> </div> ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/ElevatorPitch.astro", void 0);

const $$Astro$U = createAstro("https://komponents.ng");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const {
    title,
    showSlat = true,
    centered,
    slatColor = "accent",
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "flex",
    centered ? "flex-col items-center justify-center gap-y-4" : "items-end space-x-2",
    classes
  ], "class:list")}${spreadAttributes(attrs)}> ${showSlat && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": centered ? "centerbar" : "leadingbar", "class:list": [
    "w-[24px] h-[4px]",
    centered && "order-2",
    slatColor === "accent" && "text-accent-600",
    slatColor === "surface" && "text-surface-700"
  ] })}`} ${renderComponent($$result, "Heading", $$Heading, { "text": title, "size": "md", "weight": "semi", "color": "surface", "tighten": true, "class:list": "opacity-70" })} </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/SectionTitle.astro", void 0);

const $$Astro$T = createAstro("https://komponents.ng");
const $$BannerEntry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$BannerEntry;
  const {
    subtitle,
    title,
    showSubtitle = true,
    showTitle = true,
    showSlat = true,
    showCopy = true,
    copy,
    color = "dark",
    slatColor = "accent",
    hLevel = 3,
    centered,
    links,
    link,
    size,
    weight = "extra",
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "space-y-8 lg:space-y-10",
    centered && "text-center",
    classes
  ], "class:list")}${spreadAttributes(attrs)}> <div${addAttribute(["flex flex-col gap-y-4"], "class:list")}> ${showSubtitle && renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "text": subtitle, "size": "sm", "weight": "semi", "color": color, "uppercase": true, "loosen": true, "class": "opacity-60" })}`} ${showTitle && renderTemplate`<div${addAttribute([
    "flex",
    centered ? "flex-col items-center gap-y-4" : "space-x-3 lg:space-x-4 items-end"
  ], "class:list")}> ${showSlat && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": centered ? "centerbar" : "leadingbar", "class:list": [
    size === "md" && "w-[30px] h-[5px]",
    size === "lg" && "w-[30px] h-[6px] lg:w-[40px] lg:h-[7px]",
    size === "xl" && "w-[32px] h-[6px] lg:w-[48px] lg:h-[7px]",
    size === "2xl" && "w-[36px] h-[7px] md:w-[52px] md:h-[9px] lg:w-[56px] lg:h-[10px]",
    slatColor === "accent" && "text-accent-600",
    slatColor === "surface" && "text-surface-950",
    slatColor === "white" && "text-white",
    centered && "order-2"
  ] })}`} ${size === "md" && renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "text": title, "size": "md", "weight": "bold", "color": color, "tighten": true })}`} ${size === "lg" && renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "text": title, "size": "lg", "weight": weight, "color": color, "tighten": true })}`} ${size === "xl" && renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "text": title, "level": hLevel, "size": "xl", "weight": "extra", "color": color, "tighten": true })}`} ${size === "2xl" && renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "text": title, "size": "2xl", "weight": weight, "color": color, "tighten": true })}`} </div>`} </div> ${(copy || showCopy || !_empty(links) || link) && renderTemplate`<div${addAttribute([centered && "text-center", "space-y-6"], "class:list")}> ${(copy || showCopy) && renderTemplate`${renderComponent($$result, "Copy", $$Copy, { "content": copy, "color": color, "Tag": "p" })}`} ${!_empty(links) && renderTemplate`<ul${addAttribute([
    "flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3",
    centered && "justify-center"
  ], "class:list")}> ${links.map((link2) => renderTemplate`<li class="group flex justify-center"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": _slug(link2.link), "hover": "shadow" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "icon": link2.icon, "label": link2.title, "iconPosition": link2.icon_position, "color": link2.color })} ` })} </li>`)} </ul>`} ${link && renderTemplate`${renderComponent($$result, "Anchor", $$Anchor, { "href": _slug(link), "hover": "shadow" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "icon": "arrow-right", "label": "View Project", "color": "light_a" })} ` })}`} </div>`} </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/BannerEntry.astro", void 0);

function _slugify(str) {
    return str
        .replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .replace(/\/+/g, '-')
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/-+$/g, '')
}

const $$Astro$S = createAstro("https://komponents.ng");
const $$Flipfone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$Flipfone;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [..._gradientSurface()], "data-flipfone": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "padY": "y", "padX": false, "releaseXlUp": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "flipped": true }, { "leading": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="lg:bg-white lg:shadow-md lg:p-12 lg:h-[576px] lg:-translate-y-4 overflow-clip flex flex-col justify-between"> <div class="space-y-14 sm:space-y-16 lg:space-y-0 relative"> ${blok.banners.map((entry) => renderTemplate`<div${addAttribute([`
                                lg:absolute top-0 left-0
                                [&:nth-child(2)]:lg:invisible [&:nth-child(2)]:lg:translate-y-12 [&:nth-child(2)]:lg:opacity-0
                                last:lg:invisible last:lg:translate-y-12 last:lg:opacity-0
                            `], "class:list")}${addAttribute(_slugify(entry.subtitle), "data-flipfone-content")}> ${renderComponent($$result4, "BannerEntry", $$BannerEntry, { "subtitle": entry.subtitle, "title": entry.title, "copy": entry.copy, "showCopy": entry.show_copy, "size": "xl" })} </div>`)} </div> <div aria-hidden="true" class="hidden lg:block relative"> <div class="h-2 w-full absolute inset-x-0 top-0 bg-surface-200"></div> <div class="h-2 absolute inset-x-0 top-0 bg-accent-600" data-progressbar></div> </div> </div>`, "trailing": ($$result4) => renderTemplate`<div class="lg:space-y-14 lg:pl-4 xl:pl-0"> ${renderComponent($$result4, "SectionTitle", $$SectionTitle, { "title": blok.title, "slatColor": "surface" })} <div class="hidden lg:flex flex-col space-y-16"> ${blok.banners.map((entry, idx) => renderTemplate`<button${addAttribute([
    `opacity-40 [&.active]:opacity-100 hover:opacity-100`,
    idx === 0 && "active",
    _transition()
  ], "class:list")}${addAttribute(_slugify(entry.subtitle), "data-flipfone-toggle")}> ${renderComponent($$result4, "Heading", $$Heading, { "text": entry.subtitle, "size": "2xl", "weight": "extra", "color": "dark", "tighten": true, "class:list": "pointer-events-none" })} </button>`)} </div> </div>` })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Flipfone.astro", void 0);

const $$Astro$R = createAstro("https://komponents.ng");
const $$Readable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$Readable;
  const {
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(props)}${addAttribute([
    "w-full xs:max-w-screen-sm lg:max-w-screen-md mx-auto px-4 sm:px-8",
    classes
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/kb/Documents/komponents/src/layouts/Readable.astro", void 0);

const $$Astro$Q = createAstro("https://komponents.ng");
const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$Callout;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [
    "overflow-clip h-[640px] md:h-[728px] box-content grid grid-cols-12 grid-rows-12",
    _padY()
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div aria-hidden="true" class="z-[3] [grid-area:2/1/12/2] sm:[grid-area:3/1/12/2] transform-none sm:-translate-x-full"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "symbol", "aria-hidden": "true", "aria-label": "Decoration leading", "class": "text-accent-400 opacity-20 h-full" })} </div> <div aria-hidden="true" class="hidden xl:block z-[3] xl:[grid-area:1/9/11/13]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "symbol", "aria-hidden": "true", "aria-label": "Decoration trailing", "class": "text-accent-400 opacity-20 h-full" })} </div> <div aria-hidden="true" class="[grid-area:1/1/13/13] xl:[grid-column-start:2] xl:[grid-column-end:12]"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": "h-full clip-path-xs lg:clip-path-sm bg-accent-600 lg:px-4" })} </div> <div class="z-10 [grid-area:1/1/13/13]"> ${renderComponent($$result2, "Readable", $$Readable, { "class:list": "h-full flex flex-col items-center justify-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BannerEntry", $$BannerEntry, { "subtitle": blok.callout[0].subtitle, "title": blok.callout[0].title, "copy": blok.callout[0].copy, "color": "white", "slatColor": "white", "size": "2xl", "centered": true, "links": blok.callout[0].links })} ` })} </div> ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Callout.astro", void 0);

const $$Astro$P = createAstro("https://komponents.ng");
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$Feature;
  const { blok } = Astro2.props, entry = blok.entry, feature = entry.content.meta[0], padding = () => {
    if (blok.is_header && !blok.is_collection) return _padB();
    else if (blok.is_hero && !blok.is_collection) return _padB();
    else if (blok.is_collection) return "";
    else return _padY();
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [padding()] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative lg:grid lg:grid-cols-12 lg:grid-rows-12"> ${renderComponent($$result2, "ImageSquare", $$ImageSquare, { "cover": true, "square": false, "filename": feature.image.filename, "alt": "", "class:list": "lg:[grid-area:1/1/13/13]" })} <div class="lg:[grid-area:1/1/13/13] bg-accent-600 lg:bg-transparent"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": [
    "flex lg:justify-end h-full",
    blok.is_header && "lg:items-center relative"
  ] }, { "default": ($$result3) => renderTemplate` <div${addAttribute([
    `bg-accent-600 lg:w-[480px] h-full flex flex-col lg:justify-end lg:px-12 py-8 sm:py-12`,
    blok.is_header && "lg:max-h-[488px]"
  ], "class:list")}> <div class="py-8 sm:py-12 lg:py-0"> ${renderComponent($$result3, "BannerEntry", $$BannerEntry, { "subtitle": blok.title, "title": feature.title, "copy": feature.description, "color": "white", "slatColor": "white", "size": blok.is_header && !blok.is_collection ? "2xl" : "xl", "link": !blok.is_header && entry.full_slug })} </div> </div> ${blok.is_header && renderTemplate`${renderComponent($$result3, "Button", $$Button, { "tag": "button", "icon": "arrow-down", "color": "accent", "fab": true, "class:list": "hidden lg:flex absolute lg:-bottom-8 lg:left-4 z-10", "data-scroll-into-view": true })}`}` })} </div> </div> ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Feature.astro", void 0);

const $$Astro$O = createAstro("https://komponents.ng");
const $$DashedBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$DashedBox;
  const {
    tag = "div",
    all = true,
    top,
    bottom,
    class: classes,
    ...attrs
  } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "border-dashed border-surface-200",
    all && "border",
    top && "border-t",
    classes
  ], ...attrs }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/kb/Documents/komponents/src/layouts/DashedBox.astro", void 0);

const $$Astro$N = createAstro("https://komponents.ng");
const $$Cloud = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$Cloud;
  const {
    filename,
    aspect = "rect"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": filename, "alt": "", "width": "480", "height": "320", "quality": "100", "draggable": "false", "class:list": [
    "object-contain",
    aspect === "rect" && "w-full h-8 sm:h-10 lg:h-11",
    (aspect === "box" || aspect === "square") && "size-28 sm:size-32"
  ] })}`;
}, "/Users/kb/Documents/komponents/src/atoms/Cloud.astro", void 0);

const $$Astro$M = createAstro("https://komponents.ng");
const $$LogoClouds = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$LogoClouds;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [..._padY()] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DashedBox", $$DashedBox, { "class:list": "relative" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["px-4 sm:px-8 lg:px-12 space-y-12 lg:space-y-24", ..._padY()], "class:list")}> ${renderComponent($$result4, "SectionTitle", $$SectionTitle, { "title": blok.title, "centered": true, "slatColor": "accent" })} <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 gap-y-14 lg:gap-x-32 lg:gap-y-20"> ${blok.logos.map((entry) => renderTemplate`<li> ${renderComponent($$result4, "Cloud", $$Cloud, { "filename": entry.image.filename })} </li>`)} </ul> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/LogoClouds.astro", void 0);

const $$Astro$L = createAstro("https://komponents.ng");
const $$Prose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$Prose;
  const { class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(props)}${addAttribute([
    `
            prose !max-w-none
            prose-a:text-accent-600 hover:prose-a:text-accent-800
            prose-strong:text-dark-950
            prose-h3:text-2xl prose-h3:font-bold prose-h3:text-dark-950 prose-h3:mt-7
            prose-h1:font-bold prose-h1:text-xl prose-headings:underline prose-p:leading-[1.55]
            prose-headings:first-of-type:mt-0

        `,
    classes
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/kb/Documents/komponents/src/atoms/Prose.astro", void 0);

const $$Astro$K = createAstro("https://komponents.ng");
const $$RichText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$RichText;
  const {
    text,
    growText = true,
    color = "surface",
    class: classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Prose", $$Prose, { "class:list": [
    growText ? "text-base sm:text-md font-sans" : "text-base",
    color === "surface" && "text-surface-800",
    color === "white" && "text-white/80",
    classes
  ], ...rest }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(Nn(text))}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/atoms/RichText.astro", void 0);

const $$Astro$J = createAstro("https://komponents.ng");
const $$SplitContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$SplitContent;
  const { blok } = Astro2.props, leading = blok.leading[0], trailing = blok.trailing[0];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "padY": "y", "padX": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "padX": true }, { "leading": ($$result4) => renderTemplate`${renderComponent($$result4, "Inner", $$Inner, { "slot": "leading" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "BannerEntry", $$BannerEntry, { "subtitle": leading.subtitle, "title": leading.title, "size": "2xl", "showCopy": leading.show_copy })} ` })}`, "trailing": ($$result4) => renderTemplate`${renderComponent($$result4, "RichText", $$RichText, { "text": trailing.text, "slot": "trailing" })}` })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/SplitContent.astro", void 0);

const $$Astro$I = createAstro("https://komponents.ng");
const $$Split$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$Split$1;
  const {
    alternate,
    alternateLg,
    color = "accent",
    gap = true,
    tag = "div",
    class: classes,
    ...attrs
  } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "grid grid-cols-1 lg:grid-cols-2",
    gap && "gap-3",
    classes
  ], ...attrs }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "group",
    alternate ? "order-2" : "order-1",
    alternateLg ? "lg:order-2" : "lg:order-1"
  ], "class:list")}> ${renderSlot($$result2, $$slots["leading"])} </div> <div${addAttribute([
    "group",
    alternate ? "order-1" : "order-2",
    alternateLg ? "lg:order-1" : "lg:order-2"
  ], "class:list")}> ${renderSlot($$result2, $$slots["trailing"])} </div> ` })}`;
}, "/Users/kb/Documents/komponents/src/layouts/Split.astro", void 0);

const $$Astro$H = createAstro("https://komponents.ng");
const $$TwinSlats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$TwinSlats;
  const { blok } = Astro2.props, leading = blok.leading[0], trailing = blok.trailing[0];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class:list": [..._padY()], "title": blok.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "padX": false, "containXlUp": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Split", $$Split$1, { "alternate": blok.alternate }, { "leading": ($$result4) => renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "min-h-full flex flex-col justify-center xl:items-center xl:px-20 group-[&.order-1]:clip-path-t group-[&.order-2]:clip-path-b lg:!clip-path-y",
    blok.color === "accent" && "bg-accent-600 text-white",
    blok.color === "surface" && "bg-surface-100 text-surface-800",
    blok.color === "dark" && "bg-surface-950 text-white",
    blok.color === "transparent" && "bg-transparent",
    blok.color === "light_a" && "bg-accent-50 text-accent-600",
    _padY()
  ], "class:list")}> ${renderComponent($$result4, "Wrapper", $$Wrapper, { "inner": true, "padY": "y", "padX": false, "class:list": "px-4 xl:px-0" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "BannerEntry", $$BannerEntry, { "title": leading.title, "size": "2xl", "copy": leading.copy, "color": blok.color === "accent" || blok.color === "surface" ? "white" : "surface", "slatColor": blok.color === "accent" || blok.color === "surface" ? "white" : "accent" })} ` })} </div>`, "trailing": ($$result4) => renderTemplate`${renderComponent($$result4, "ImageSquare", $$ImageSquare, { "lelo": true, "slot": "trailing", "filename": trailing.file.filename, "class:list": "group-[&.order-2]:clip-path-b group-[&.order-1]:clip-path-t lg:!clip-path-y" })}` })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/TwinSlats.astro", void 0);

const $$Astro$G = createAstro("https://komponents.ng");
const $$Flipper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$Flipper;
  const {
    title,
    copy,
    tag,
    class: classes,
    ...attrs
  } = Astro2.props, Tag = "div";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["relative min-h-[456px] xl:min-h-[424px]", classes], "data-flipper": true, ...attrs }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "bg-accent-600 text-white flex flex-col justify-between h-full absolute inset-0 z-[2]",
    _transition()
  ], "class:list")} data-flipper="face"> <div class="flex items-center justify-end p-5 w-full pointer-events-none"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-down", "class:list": "w-7 pointer-events-none animate-bounce [animation-play-state:paused] group-hover:[animation-play-state:running]" })} </div> <div class="flex items-end gap-2 p-5 pointer-events-none"> ${renderComponent($$result2, "BannerTitle", $$BannerTitle, { "title": title, "size": "lg", "weight": "extra", "color": "white" })} </div> </div> <div${addAttribute([
    "bg-surface-50 flex flex-col justify-between p-5 h-full absolute inset-0 z-[1]",
    _transition()
  ], "class:list")} data-flipper="back"> <div class="flex flex-col gap-y-5 pointer-events-none"> ${renderComponent($$result2, "BannerTitle", $$BannerTitle, { "title": title, "level": "h3", "size": "md", "weight": "bold", "color": "dark", ",": true, "slatColor": "accent" })} ${renderComponent($$result2, "Copy", $$Copy, { "content": copy, "growText": false })} </div> <div class="flex items-center justify-end w-full pointer-events-none"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-up", "class:list": "w-7 pointer-events-none text-accent-600 animate-bounce [animation-play-state:paused] group-hover:[animation-play-state:running]" })} </div> </div> ` })}`;
}, "/Users/kb/Documents/komponents/src/blocks/Flipper.astro", void 0);

const $$Astro$F = createAstro("https://komponents.ng");
const $$Values = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Values;
  const { blok } = Astro2.props, banner = blok.banner[0], values = blok.values;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class:list": [..._padY()], "title": blok.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BannerEntry", $$BannerEntry, { "subtitle": banner.subtitle, "title": banner.title, "copy": banner.copy, "size": "2xl", "color": "dark", "slatColor": "accent", "class:list": "lg:max-w-screen-md" })} ${maybeRenderHead()}<div${addAttribute([
    "relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pt-8 sm:pt-12 lg:pt-16"
  ], "class:list")}> ${values.map((entry) => renderTemplate`${renderComponent($$result3, "Flipper", $$Flipper, { "title": entry.title, "copy": entry.copy, "class:list": ["group overflow-clip cursor-pointer"] })}`)} </div> ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Values.astro", void 0);

const $$Astro$E = createAstro("https://komponents.ng");
const $$VSplit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$VSplit;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [blok.is_header ? "" : _padY()] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "padY": "y", "padX": false, "class:list": [blok.is_header && "relative"] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": "sm:px-4 xl:px-0 pt-8 sm:pt-12 lg:pt-0" }, { "leading": ($$result4) => renderTemplate`${renderComponent($$result4, "Inner", $$Inner, { "slot": "leading", "class:list": "pl-4 pr-4 sm:pl-0 sm:pr-0" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "BannerEntry", $$BannerEntry, { "subtitle": blok.subtitle, "title": blok.title, "size": "2xl" })} ${renderComponent($$result5, "RichText", $$RichText, { "text": blok.content })} ` })}`, "trailing": ($$result4) => renderTemplate`${renderComponent($$result4, "ImageSquare", $$ImageSquare, { "slot": "trailing", "filename": blok.image.filename, "clip": "y" })}` })} ${blok.is_header && renderTemplate`${renderComponent($$result3, "Button", $$Button, { "tag": "button", "icon": "arrow-down", "color": "accent", "fab": true, "class:list": "hidden lg:flex absolute lg:bottom-24 lg:left-4 xl:left-0 z-10", "data-scroll-into-view": true })}`}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/VSplit.astro", void 0);

const $$Astro$D = createAstro("https://komponents.ng");
const $$SolarArray = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$SolarArray;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [..._padY()] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "tag": "ul", "padX": false, "containXlUp": true, "class:list": "space-y-[-92px] lg:space-y-[-74px]" }, { "default": ($$result3) => renderTemplate`${blok.list.map((el, idx) => renderTemplate`${renderComponent($$result3, "Split", $$Split$1, { "tag": "li", "gap": true, "alternateLg": _even(idx) ? false : true, "id": _slugify(el.title), "class:list": "scroll-mt-[var(--r-spacing-16)] lg:scroll-mt-[var(--r-spacing-20)]" }, { "leading": ($$result4) => renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "bg-surface-100 min-h-full flex flex-col justify-center xl:items-center xl:px-20 group-[&.order-1]:clip-path-t group-[&.order-2]:clip-path-b lg:!clip-path-y max-h-[720px]",
    _padY()
  ], "class:list")}> ${renderComponent($$result4, "Wrapper", $$Wrapper, { "inner": true, "padY": "y", "padX": false, "class": "flex flex-col space-y-6 lg:space-y-8 px-4 xl:px-0" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "BannerTitle", $$BannerTitle, { "title": el.title, "level": "h3", "size": "xl", "weight": "bold", "slatColor": "accent", "class:list": "pt-12 lg:pt-0" })} ${renderComponent($$result5, "RichText", $$RichText, { "text": el.summary })} <div class="inline-flex group/nested"> ${renderComponent($$result5, "Anchor", $$Anchor, { "href": _slug(el.link[0].link), "hover": "shadow", "nested": true, "class:list": "mt-3" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Button", $$Button, { "icon": el.link[0].icon, "label": el.link[0].title, "iconPosition": el.link[0].icon_position, "color": el.link[0].color })} ` })} </div> ` })} </div>`, "trailing": ($$result4) => renderTemplate`${renderComponent($$result4, "ImageSquare", $$ImageSquare, { "slot": "trailing", "filename": el.image.filename, "asArray": true, "class:list": [
    "group-[&.order-2]:clip-path-b group-[&.order-1]:clip-path-t lg:!clip-path-y"
  ] })}` })}`)}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/SolarArray.astro", void 0);

const $$Astro$C = createAstro("https://komponents.ng");
const $$AwardsCloud = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$AwardsCloud;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "class:list": [..._padY()] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DashedBox", $$DashedBox, { "class:list": ["px-4 sm:px-8 lg:px-12 space-y-12 lg:space-y-20", ..._padY()] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 gap-y-14 lg:gap-y-20"> ${blok.awards.map((el) => renderTemplate`<li> ${renderComponent($$result4, "Cloud", $$Cloud, { "filename": el.image[0].file.filename, "aspect": "box" })} </li>`)} </ul> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/AwardsCloud.astro", void 0);

const $$Astro$B = createAstro("https://komponents.ng");
const $$InputSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$InputSearch;
  const {
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative size-full flex items-center"> <div class="absolute left-2 sm:left-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class:list": "w-6 text-surface-400" })} </div> <input type="search"${addAttribute([
    `
                block size-full pl-10 sm:pl-11 peer
                text-surface-800
                border-0 border-b-2 border-surface-300 focus:border-accent-600
                placeholder:text-surface-600
                search-cancel:appearance-none
            `,
    _transition(),
    classes
  ], "class:list")} placeholder="Find products..."${spreadAttributes(props)}> </div>`;
}, "/Users/kb/Documents/komponents/src/atoms/InputSearch.astro", void 0);

const $$Astro$A = createAstro("https://komponents.ng");
const $$InputSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$InputSelect;
  const {
    label,
    id,
    required,
    firstOpt,
    showLabel = true,
    ringed = true,
    inset,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "group",
    classes,
    inset && "h-[calc(100%-1rem)] min-w-32 max-w-40"
  ], "class:list")}${addAttribute(_slugify(label), "data-label")}${spreadAttributes(attrs)}> <label${addAttribute(_slugify(id), "for")}${addAttribute(showLabel ? "flex" : "hidden", "class:list")}> <span class="block mr-0.5 group-[:focus-within]:font-medium group-[:focus-within]:text-dark-950">${label}</span> ${required && renderTemplate`<span class="text-red-600">*</span>`} </label> <select${addAttribute(_slugify(id), "id")}${addAttribute(_capitalize(id), "name")}${addAttribute([
    "block w-full border-0 bg-transparent py-3",
    showLabel && "mt-1",
    ringed && `ring-[1.5px] ring-inset ring-surface-200 focus:ring-2 focus:ring-inset focus:ring-accent-600`,
    inset && "h-full pl-4 focus:ring-0 truncate"
  ], "class:list")}> <option${addAttribute(_slugify(firstOpt), "data-first-option")}${addAttribute(_slugify(firstOpt), "value")}> ${renderSlot($$result, $$slots["default"])} </option></select> </div>`;
}, "/Users/kb/Documents/komponents/src/atoms/InputSelect.astro", void 0);

function _uniquefy(set) { return [...new Set(set)] }

const $$Astro$z = createAstro("https://komponents.ng");
const $$Searchbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Searchbar;
  const {
    class: classes,
    ...rest
  } = Astro2.props, partners = _uniquefy(_products.value.map((el) => el.partner));
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "w-full lg:max-w-[680px] mx-auto px-4 absolute bottom-[-80px] left-1/2 -translate-x-1/2",
    classes
  ], "class:list")}${spreadAttributes(rest)}> <div class="bg-white shadow-lg h-16 sm:h-[72px] flex items-center overflow-clip relative"> ${renderComponent($$result, "InputSearch", $$InputSearch, {})} ${renderComponent($$result, "InputSelect", $$InputSelect, { "label": "Filter by Partners", "id": "partners", "firstOpt": "All Partners", "showLabel": false, "ringed": false, "inset": true, "class:list": "absolute right-0 border-l-[1.5px] border-surface-300" }, { "default": ($$result2) => renderTemplate`${partners.map((el) => renderTemplate`<option${addAttribute(_slugify(el), "data-partner")}${addAttribute(_slugify(el), "value")}>${el}</option>`)}` })} </div> </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/Searchbar.astro", void 0);

const $$Astro$y = createAstro("https://komponents.ng");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const {
    blok
  } = Astro2.props, banner = blok.banner[0];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [
    "py-8 sm:py-12 bg-surface-100 flex items-center justify-center min-h-48",
    blok.product_filter && "mb-4 sm:mb-8 lg:mb-12"
  ] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": [
    "w-full relative pt-4 sm:pt-6",
    blok.product_filter && !blok.overlap && "pb-6 sm:pb-8",
    !blok.product_filter && "pb-4",
    blok.overlap && "pb-6 sm:pb-8"
  ] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BannerEntry", $$BannerEntry, { "subtitle": banner.subtitle, "title": banner.title, "color": "dark", "slatColor": "accent", "size": "2xl", "centered": true, "showCopy": banner.show_copy, "copy": banner.copy, "showSubtitle": !_empty(banner.subtitle), "class:list": "max-w-screen-sm mx-auto" })} ${blok.product_filter && renderTemplate`${renderComponent($$result3, "Searchbar", $$Searchbar, { "data-fuzzy-search": true, "data-list": "products" })}`}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/PageHeader.astro", void 0);

const $$Astro$x = createAstro("https://komponents.ng");
const $$Products = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Products;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": "pt-8 xs:pt-12 lg:pt-8" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "tag": "ul", "padB": "b", "class:list": "w-full relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3", "data-list-products": true }, { "default": ($$result3) => renderTemplate`${_products.value.map((el, idx) => renderTemplate`${maybeRenderHead()}<li> ${renderComponent($$result3, "CardProduct", $$CardProduct, { "filename": el.image[0].file.filename, "link": !_empty(el.link) && _slug(el.link[0].link), "name": el.name, "isNew": el.is_new, "data-modal-trigger": el.is_new, "data-display": `product-at-${idx}`, "data-partner": _slugify(el.partner) })} </li>`)}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Products.astro", void 0);

const $$Astro$w = createAstro("https://komponents.ng");
const $$ImageProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$ImageProfile;
  const {
    filename,
    small = true,
    medium,
    large,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": filename, "alt": "", "width": "1024", "height": "1440", "quality": "100", "draggable": "false", "class:list": [
    "object-cover object-top",
    classes
  ], ...attrs })}`;
}, "/Users/kb/Documents/komponents/src/atoms/ImageProfile.astro", void 0);

const $$Astro$v = createAstro("https://komponents.ng");
const $$CardAffiliate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$CardAffiliate;
  const {
    filename,
    name,
    link,
    class: classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "relative cursor-pointer",
    _transition(),
    classes
  ], "class:list")}${spreadAttributes(rest)}> <div class="pointer-events-none relative z-[2] h-[520px] sm:h-[640px] md:h-[576px] lg:h-[640px] flex group-even:justify-end group-odd:justify-start"> <div class="relative w-[calc(100%-24px)] lg:w-[calc(100%-32px)] h-[calc(100%-24px)] lg:h-[calc(100%-32px)] shadow overflow-clip"> ${renderComponent($$result, "ImageProfile", $$ImageProfile, { "filename": filename, "class:list": [
    "w-full h-full group-hover:scale-105 !duration-700",
    _transition()
  ] })} <div aria-hidden class="bg-gradient-to-b from-transparent via-transparent to-black/70 absolute inset-0"></div> ${renderComponent($$result, "BannerTitle", $$BannerTitle, { "title": name, "level": "h3", "size": "lg", "weight": "extra", "slatColor": "white", "class:list": "absolute bottom-8 left-8 pr-3 text-white" })} </div> </div> <div aria-hidden${addAttribute([
    `
            absolute bottom-0 group-odd:right-0 group-even:left-0
            h-[368px] w-[calc(100%-32px)]
            bg-accent-600
            group-even:zoid-right group-odd:zoid-left
            z-[1] pointer-events-none`
  ], "class:list")}></div> </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/CardAffiliate.astro", void 0);

const $$Astro$u = createAstro("https://komponents.ng");
const $$Affiliates = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Affiliates;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": "pt-8 xs:pt-12 lg:pt-8" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "tag": "ul", "padY": "y", "class:list": "w-full relative grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 md:gap-y-1" }, { "default": ($$result3) => renderTemplate`${_affiliates.value.map((el, idx) => renderTemplate`${maybeRenderHead()}<li class="group sm:odd:pt-12 sm:even:-mt-4"> ${renderComponent($$result3, "CardAffiliate", $$CardAffiliate, { "filename": el.image[0].file.filename, "name": el.bio[0].title, "link": _slug(el.link[0].link), "data-modal-trigger": true, "data-display": `affiliate-at-${idx}` })} </li>`)}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Affiliates.astro", void 0);

const $$Astro$t = createAstro("https://komponents.ng");
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$CardProject;
  const {
    link,
    filename,
    title,
    class: classes,
    ...a
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute([
    "grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 xs:gap-y-10 sm:gap-y-12 items-center",
    classes
  ], "class:list")}${spreadAttributes(a)}> <div class="relative pointer-events-none size-full md:size-[344px] lg:size-[424px] xl:size-[480px] overflow-clip flex group-even:justify-end group-odd:justify-start md:group-odd:order-1 md:group-even:order-2"> <div class="w-[calc(100%-24px)] lg:w-[calc(100%-32px)] h-[calc(100%-24px)] lg:h-[calc(100%-32px)] shadow relative z-[2] overflow-clip"> ${renderComponent($$result, "ImageSquare", $$ImageSquare, { "filename": filename, "class:list": [
    "w-full h-full group-hover:scale-105 !duration-700",
    _transition()
  ] })} </div> <div aria-hidden${addAttribute([
    `
                absolute bottom-0 group-odd:right-0 group-even:left-0
                w-[calc(100%-32px)] h-[72%]
                bg-accent-600
                group-even:zoid-right group-odd:zoid-left
                z-[1] pointer-events-none`
  ], "class:list")}></div> </div> <div class="md:group-odd:order-2 md:group-even:order-1 space-y-4 sm:space-y-6 lg:space-y-12"> ${renderComponent($$result, "BannerTitle", $$BannerTitle, { "title": title, "level": "h3", "size": "2xl", "showSlat": false, "weight": "bold", "color": "dark", "class:list": " group-hover:text-accent-700" })} ${renderComponent($$result, "Button", $$Button, { "icon": "arrow-right-fill", "label": "Read More", "left": true, "class:list": "text-accent-600 group-hover:text-accent-700" })} </div> </a>`;
}, "/Users/kb/Documents/komponents/src/blocks/CardProject.astro", void 0);

const $$Astro$s = createAstro("https://komponents.ng");
const $$Collection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Collection;
  const { blok } = Astro2.props, api = Pn(), { data } = await api.get(`cdn/stories/`, {
    version: "published",
    starts_with: `${blok.collection}/`
  }), collection = data.stories.filter((el) => !el.is_startpage);
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": "pt-8 xs:pt-12 lg:pt-8" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "tag": "ul", "padB": "b", "class:list": "w-full relative grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:gap-y-24" }, { "default": ($$result3) => renderTemplate`${collection.map((el) => renderTemplate`${maybeRenderHead()}<li class="group"> ${renderComponent($$result3, "CardProject", $$CardProject, { "link": `/${_slug(el.full_slug)}`, "filename": el.content.meta[0].image.filename, "title": el.content.meta[0].title })} </li>`)}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Collection.astro", void 0);

const $$Astro$r = createAstro("https://komponents.ng");
const $$Checklist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Checklist;
  const {
    text,
    class: classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(["flex items-start gap-3 text-base", classes], "class:list")}${spreadAttributes(rest)}> ${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class:list": "text-accent-600 w-5 mt-0.5" })} <span>${text}</span> </p>`;
}, "/Users/kb/Documents/komponents/src/atoms/Checklist.astro", void 0);

const $$Astro$q = createAstro("https://komponents.ng");
const $$PlotSummary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$PlotSummary;
  const {
    blok
  } = Astro2.props, highlights = blok.highlights;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [_padY()] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": "space-y-10 sm:space-y-12 lg:space-y-14" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BannerEntry", $$BannerEntry, { "title": blok.headline, "size": "lg", "weight": "bold", "color": "dark", "slatColor": "accent", "showSubtitle": false, "showCopy": false })} ${!_empty(highlights) && renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:max-w-screen-md gap-4"> ${highlights[0].highlights.map((el) => renderTemplate`<li> ${renderComponent($$result3, "Checklist", $$Checklist, { "text": el.item })} </li>`)} </ul>`}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/PlotSummary.astro", void 0);

const $$Astro$p = createAstro("https://komponents.ng");
const $$Split = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Split;
  const {
    heading,
    copy,
    slat,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "space-y-4 sm:space-y-5 md:space-y-0 md:grid md:grid-cols-2 items-start gap-x-4 lg:gap-x-8",
    classes
  ], "class:list")}${spreadAttributes(attrs)}> ${renderComponent($$result, "BannerTitle", $$BannerTitle, { "title": heading, "level": "h3", "size": "xl", "weight": "extra", "showSlat": slat, "slatColor": "accent" })} ${renderComponent($$result, "RichText", $$RichText, { "text": copy })} </div>`;
}, "/Users/kb/Documents/komponents/src/atoms/Split.astro", void 0);

const $$Astro$o = createAstro("https://komponents.ng");
const $$CopySplit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$CopySplit;
  const {
    blok
  } = Astro2.props, splits = blok.splits;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [_padY(), "bg-surface-200"] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": "space-y-6 sm:space-y-8 lg:space-y-12" }, { "default": ($$result3) => renderTemplate`${splits.map((el, idx) => renderTemplate`${renderComponent($$result3, "Split", $$Split, { "heading": el.headline, "copy": el.copy, "slat": idx == 1 })}`)}` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/CopySplit.astro", void 0);

const $$Astro$n = createAstro("https://komponents.ng");
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Quote;
  const { blok } = Astro2.props, item = blok.quote[0];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [
    "overflow-clip h-[640px] md:h-[728px] box-content grid grid-cols-12 grid-rows-12",
    _padY()
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div aria-hidden class="z-[3] [grid-area:2/1/12/2] sm:[grid-area:3/1/12/2] transform-none sm:-translate-x-full"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "symbol", "aria-hidden": true, "aria-label": "Decoration leading", "class": "text-accent-400 opacity-20 h-full" })} </div> <div aria-hidden class="hidden xl:block z-[3] xl:[grid-area:1/9/11/13]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "symbol", "aria-hidden": true, "aria-label": "Decoration trailing", "class": "text-accent-400 opacity-20 h-full" })} </div> <div aria-hidden class="[grid-area:1/1/13/13] xl:[grid-column-start:2] xl:[grid-column-end:12]"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": "h-full clip-path-xs lg:clip-path-sm bg-accent-600 lg:px-4" })} </div> <div class="z-10 [grid-area:1/1/13/13]"> ${renderComponent($$result2, "Readable", $$Readable, { "class:list": "h-full flex flex-col items-center justify-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "quotes-right", "class:list": "w-16 sm:w-20 lg:w-24 text-white sm:mb-4" })} ${renderComponent($$result3, "BannerEntry", $$BannerEntry, { "title": item.quote, "color": "white", "slatColor": "white", "size": "lg", "weight": "bold", "centered": true })} ${renderComponent($$result3, "Copy", $$Copy, { "content": item.byline, "color": "white", "class:list": "mb-4" })} ` })} </div> ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Quote.astro", void 0);

const $$Astro$m = createAstro("https://komponents.ng");
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    type,
    label,
    placeholder,
    autocomplete,
    required,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(["group", classes], "class:list")}${addAttribute(_slugify(label), "data-label")}${spreadAttributes(attrs)}> <div class="flex"> <span class="block mr-0.5 group-[:focus-within]:font-medium group-[:focus-within]:text-dark-950">${label}</span> ${required && renderTemplate`<span class="text-red-600">*</span>`} </div> <div class="mt-1"> <input${addAttribute(type, "type")}${addAttribute(label, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(required, "required")}${addAttribute([`
                block w-full border-0 py-3
                bg-surface-100 focus:bg-white text-surface-800
                shadow-inner ring-1 ring-inset ring-gray-300
                placeholder:text-surface-600
                focus:ring-2 focus:ring-inset focus:ring-accent-600
            `], "class:list")}> </div> </label>`;
}, "/Users/kb/Documents/komponents/src/atoms/Input.astro", void 0);

const $$Astro$l = createAstro("https://komponents.ng");
const $$InputArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$InputArea;
  const {
    label,
    id,
    autocomplete,
    required,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["group", classes], "class:list")}${addAttribute(_slugify(label), "data-label")}${spreadAttributes(attrs)}> <label${addAttribute(id, "for")} class="flex"> <span class="block mr-0.5 group-[:focus-within]:font-medium group-[:focus-within]:text-dark-950">${label}</span> ${required && renderTemplate`<span class="text-red-600">*</span>`} </label> <div class="mt-1"> <textarea rows="4"${addAttribute(_capitalize(label), "name")}${addAttribute(id, "id")}${addAttribute(required, "required")}${addAttribute([`
                block w-full border-0 py-3 resize-y
                bg-surface-100 focus:bg-white text-surface-800
                ring-[1.5px] ring-inset ring-surface-200
                placeholder:text-surface-600
                focus:ring-2 focus:ring-inset focus:ring-accent-600
            `], "class:list")}></textarea> </div> </div>`;
}, "/Users/kb/Documents/komponents/src/atoms/InputArea.astro", void 0);

const $$Astro$k = createAstro("https://komponents.ng");
const $$InputCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$InputCheck;
  const {
    label,
    required,
    consent,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "flex",
    consent ? "items-start" : "items-center"
  ], "class:list")}> <input${addAttribute(_slugify(label), "id")}${addAttribute(label, "name")} type="checkbox"${addAttribute(required, "required")}${addAttribute(consent, "checked")}${addAttribute([
    `h-5 w-5 border-[1.5px]
            border-surface-400 text-accent-600 focus:ring-accent-600
            cursor-pointer`,
    consent && "mt-2"
  ], "class:list")}${spreadAttributes(attrs)}> <label${addAttribute(_slugify(label), "for")} class="cursor-pointer pl-3"> <span${addAttribute(consent, "hidden")}>${label}</span> ${consent && renderTemplate`${renderSlot($$result, $$slots["default"])}`} </label> </div>`;
}, "/Users/kb/Documents/komponents/src/atoms/InputCheck.astro", void 0);

const FORM_CONTACT = 'mB9D4ynIB';
const FORM_REPAIR_CENTER = 'btz2qs5IC';
const PERPAGE = 4;
const RELATIONS = [
    'feature.entry'
];

const $$Astro$j = createAstro("https://komponents.ng");
const $$FormContact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$FormContact;
  const { consent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form class="grid grid-cols-1 gap-6 [&>:nth-last-child(2)]:mb-4" id="contact-form"${addAttribute(FORM_CONTACT, "form-id")}> <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-3"> ${renderComponent($$result, "Input", $$Input, { "type": "text", "label": "First Name", "placeholder": "Jane", "autocomplete": "Given Name", "required": true })} ${renderComponent($$result, "Input", $$Input, { "type": "text", "label": "Last Name", "placeholder": "Diaz", "autocomplete": "Family Name", "required": true })} </div> ${renderComponent($$result, "Input", $$Input, { "type": "email", "label": "Work Email", "placeholder": "jane@example.com", "autocomplete": "Email", "required": true })} ${renderComponent($$result, "InputArea", $$InputArea, { "label": "Brief", "id": "message", "required": true })} ${consent && renderTemplate`${renderComponent($$result, "DashedBox", $$DashedBox, { "all": false, "top": true, "class:list": "pt-6 grid grid-cols-1 gap-6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InputCheck", $$InputCheck, { "label": "Consent", "required": true, "consent": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RichText", $$RichText, { "text": consent, "tag": "span" })} ` })} ` })}`} <button class="group/button" data-form-submit> ${renderComponent($$result, "Button", $$Button, { "icon": "send-plane-fill", "label": "Send Message", "iconPosition": "trailing", "color": "accent", "class:list": "group-hover/button:shadow-md w-full", "responsive": true })} </button> </form>`;
}, "/Users/kb/Documents/komponents/src/blocks/FormContact.astro", void 0);

const $$Astro$i = createAstro("https://komponents.ng");
const $$InputDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$InputDate;
  const {
    label,
    required,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(["group", classes], "class:list")}${addAttribute(_slugify(label), "data-label")}${spreadAttributes(attrs)}> <div class="flex"> <span class="block mr-0.5 group-[:focus-within]:font-medium group-[:focus-within]:text-dark-950">${label}</span> ${required && renderTemplate`<span class="text-red-600">*</span>`} </div> <input type="date"${addAttribute(label, "name")}${addAttribute(required, "required")}${addAttribute([`
            block w-full border-0 py-3 mt-1
            bg-surface-100 focus:bg-white text-surface-800
            shadow-inner ring-1 ring-inset ring-gray-300
            placeholder:text-surface-600
            focus:ring-2 focus:ring-inset focus:ring-accent-600
        `], "class:list")}> </label>`;
}, "/Users/kb/Documents/komponents/src/atoms/InputDate.astro", void 0);

const $$Astro$h = createAstro("https://komponents.ng");
const $$FormRepairCenter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$FormRepairCenter;
  const { consent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form class="grid grid-cols-1 gap-6 [&>:nth-last-child(2)]:mb-4" id="repair-center"${addAttribute(FORM_REPAIR_CENTER, "form-id")}> <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-3"> ${renderComponent($$result, "Input", $$Input, { "type": "text", "label": "Serial Number", "placeholder": "Serial Number", "required": true })} ${renderComponent($$result, "Input", $$Input, { "type": "text", "label": "Product Number", "placeholder": "Product Number", "required": true })} </div> ${renderComponent($$result, "Input", $$Input, { "type": "text", "label": "Device Name", "placeholder": "Device Name", "required": true })} ${renderComponent($$result, "InputArea", $$InputArea, { "label": "Brief", "id": "message" })} ${renderComponent($$result, "DashedBox", $$DashedBox, { "all": false, "top": true, "class:list": "pt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-3" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InputDate", $$InputDate, { "label": "Installation Date", "required": true })} ${renderComponent($$result2, "InputDate", $$InputDate, { "label": "Failure Date", "required": true })} ` })} ${renderComponent($$result, "DashedBox", $$DashedBox, { "all": false, "top": true }, { "default": ($$result2) => renderTemplate` <fieldset class="grid grid-cols-1"> <legend class="flex py-4">Device Status</legend> <div class="flex flex-wrap gap-x-6 gap-y-4"> ${renderComponent($$result2, "InputCheck", $$InputCheck, { "label": "Not coming on" })} ${renderComponent($$result2, "InputCheck", $$InputCheck, { "label": "Making Sound" })} ${renderComponent($$result2, "InputCheck", $$InputCheck, { "label": "LED Light Alarm" })} </div> </fieldset> ` })} ${renderComponent($$result, "DashedBox", $$DashedBox, { "all": false, "top": true, "class:list": "pt-6 grid grid-cols-1 gap-6" }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-3"> ${renderComponent($$result2, "Input", $$Input, { "type": "text", "label": "Full Name", "placeholder": "Jane Diaz", "required": true })} ${renderComponent($$result2, "Input", $$Input, { "type": "text", "label": "Company/Device Owner Name", "placeholder": "Device Owner Name" })} </div> ${renderComponent($$result2, "Input", $$Input, { "type": "text", "label": "Address", "placeholder": "Your address", "required": true })} <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-3"> ${renderComponent($$result2, "Input", $$Input, { "type": "text", "label": "Phone", "placeholder": "Your phone number", "required": true })} ${renderComponent($$result2, "Input", $$Input, { "type": "email", "label": "Email", "placeholder": "jane.diaz@example.com", "required": true })} </div> ` })} ${consent && renderTemplate`${renderComponent($$result, "DashedBox", $$DashedBox, { "all": false, "top": true, "class:list": "pt-6 grid grid-cols-1 gap-6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InputCheck", $$InputCheck, { "label": "Consent", "required": true, "consent": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RichText", $$RichText, { "text": consent, "tag": "span" })} ` })} ` })}`} <button class="group/button" data-form-submit> ${renderComponent($$result, "Button", $$Button, { "icon": "send-plane-fill", "label": "Send Complaint", "iconPosition": "trailing", "color": "accent", "class:list": "group-hover/button:shadow-md w-full", "responsive": true })} </button> </form>`;
}, "/Users/kb/Documents/komponents/src/blocks/FormRepairCenter.astro", void 0);

const $$Astro$g = createAstro("https://komponents.ng");
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Form;
  const { blok } = Astro2.props, description = blok.description, success = blok.form_success;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [
    _empty(blok.context_image) ? _padY() : _padT(),
    _gradientSurface()
  ] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": [blok.is_header && "relative"] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "flipped": true, "sticky": true, "clip": false }, { "leading": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="bg-white shadow-md lg:shadow-lg p-4 sm:p-8 relative overflow-clip"> ${blok.form === "contact" && renderTemplate`${renderComponent($$result4, "FormContact", $$FormContact, { "consent": blok.form_consent })}`} ${blok.form === "repair-center" && renderTemplate`${renderComponent($$result4, "FormRepairCenter", $$FormRepairCenter, { "consent": blok.form_consent })}`} </div>`, "trailing": ($$result4) => renderTemplate`${renderComponent($$result4, "Inner", $$Inner, { "slot": "trailing" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "BannerEntry", $$BannerEntry, { "title": blok.headline, "size": "2xl", "weight": "bold", "showSlat": false, "showSubtitle": false, "showCopy": false })} ${!_empty(description) && renderTemplate`${renderComponent($$result5, "RichText", $$RichText, { "text": description[0].text, "class:list": "mt-4 sm:mt-6 lg:mt-8" })}`}` })}` })} ` })} ${!_empty(blok.context_image) && renderTemplate`<div class="grid grid-cols-12"> <div aria-hidden="true"${addAttribute([
    `[grid-area:1/1/13/13] xl:[grid-column-start:2] xl:[grid-column-end:12] translate-y-14 sm:translate-y-16 md:translate-y-20 lg:translate-y-24 xl:translate-y-0 lg:pt-24`
  ], "class:list")}> ${renderComponent($$result2, "ImageSquare", $$ImageSquare, { "slat": true, "filename": blok.context_image[0].file.filename, "class:list": `md:h-[720px]` })} </div> </div>`}<p hidden data-form-success-message>${success}</p> ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Form.astro", void 0);

const $$Astro$f = createAstro("https://komponents.ng");
const $$Longform = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Longform;
  const {
    blok
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": blok.title, "component": blok.component, "class:list": [_padB()] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "class:list": [
    "w-full relative"
  ] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Readable", $$Readable, { "class:list": "-mt-8 sm:-mt-10 lg:-mt-16 bg-white shadow" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.body[0].text, "class:list": "py-4 sm:py-8" })} ` })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/Longform.astro", void 0);

const components = {page: $$Page,product: $$Product,partner: $$Partner,elevatorPitch: $$ElevatorPitch,flipfone: $$Flipfone,callout: $$Callout,feature: $$Feature,logoClouds: $$LogoClouds,splitContent: $$SplitContent,twinSlats: $$TwinSlats,values: $$Values,vSplit: $$VSplit,solarArray: $$SolarArray,awardsCloud: $$AwardsCloud,pageHeader: $$PageHeader,products: $$Products,affiliates: $$Affiliates,collection: $$Collection,plotSummary: $$PlotSummary,copySplit: $$CopySplit,quote: $$Quote,form: $$Form,longform: $$Longform};

const $$Astro$e = createAstro("https://komponents.ng");
const $$StoryblokComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = camelcase(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/Users/kb/Documents/komponents/node_modules/@storyblok/astro/components/StoryblokComponent.astro", void 0);

const $$Astro$d = createAstro("https://komponents.ng");
const $$ContactActions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ContactActions;
  const { links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="flex space-x-[12px]"> ${links.map((el, idx) => renderTemplate`<li class="first:hidden md:first:block group first:text-surface-700"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": _slug(el.link), "hover": idx == 0 ? "accent" : "shadow", "data-anchor": _slugify(el.link.story.full_slug), "class:list": [`
                        relative group/anchor group-first:[&.active]:text-accent-600
                    `] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "icon": el.icon, "label": el.title, "iconPosition": el.icon_position, "color": el.color, "responsive": true })} ${idx == 0 && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "centerbar", "class:list": "absolute bottom-0 left-1/2 -translate-x-1/2 w-[24px] h-[3px] text-accent-600 hidden group-[&.active]/anchor:block" })}`}` })} </li>`)} </ul>`;
}, "/Users/kb/Documents/komponents/src/blocks/ContactActions.astro", void 0);

const $$Astro$c = createAstro("https://komponents.ng");
const $$NavDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$NavDropdown;
  const { list, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    classes,
    "absolute top-[var(--r-spacing-16)] -left-16 z-50 w-[16rem] h-[25rem] r-shadow-100"
  ], "class:list")}${spreadAttributes(props)}> <div class="size-full bg-[var(--r-color-layer-1)] r-clip-path"> <ul class="py-10 space-y-2"> ${list.value.list.map((el, idx) => renderTemplate`<li class="flex items-center h-10 w-full group/anchor"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": `/partners/#${_slugify(el.title)}`, "hover": "accent", "class:list": "relative [&.active]:text-accent-600 group-hover/anchor:text-accent-600 size-full px-5", "aria-label": `${el.title} Section of Our OEM Partners` }, { "default": ($$result2) => renderTemplate` <span class="font-semibold uppercase tracking-wider text-xs">${el.title}</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "leadingbar", "class:list": [
    "absolute bottom-1 left-5 w-[24px] h-[4px] text-accent-600 opacity-0 group-hover/anchor:opacity-100",
    _transition()
  ] })} ` })} </li>`)} </ul> </div> </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/NavDropdown.astro", void 0);

const $$Astro$b = createAstro("https://komponents.ng");
const $$NavDesktop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NavDesktop;
  const { links, list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="hidden xl:flex text-surface-700"> ${links.map((link) => renderTemplate`<li class="group/li relative"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": _slug(link.link), "hover": "accent", "class:list": "relative group/anchor [&.active]:text-accent-600 group-hover/li:text-accent-600", "data-anchor": _slugify(link.link.story.full_slug), "aria-label": `${link.title} Page`, "data-toggle": "submenu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "label": link.title, "color": link.color, "underbar": link.gets_underbar })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "centerbar", "class:list": "absolute bottom-0 left-1/2 -translate-x-1/2 w-[24px] h-[3px] text-accent-600 hidden group-[&.active]/anchor:block" })} ` })} ${_slugify(link.link.story.full_slug) === "partners" && renderTemplate`${renderComponent($$result, "NavDropdown", $$NavDropdown, { "list": list, "data-menu": "submenu", "class:list": "translate-y-4 transition duration-300 opacity-0 invisible group-hover/li:-translate-y-6 group-hover/li:opacity-100 group-hover/li:visible" })}`} </li>`)} </ul>`;
}, "/Users/kb/Documents/komponents/src/blocks/NavDesktop.astro", void 0);

const $$Astro$a = createAstro("https://komponents.ng");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    title,
    contactActions,
    showNav = true,
    nav,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    "z-50 fixed top-0 inset-x-0 bg-white h-[var(--r-spacing-16)] lg:h-[var(--r-spacing-20)]",
    _transition(),
    classes
  ], "class:list")} data-header-main${spreadAttributes(attrs)}> ${renderComponent($$result, "Wrapper", $$Wrapper, { "padX": false, "class:list": "flex items-center justify-between h-full" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center space-x-10"> <a href="/" class="flex py-3 px-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon", "class": "h-10 lg:hidden text-accent-600" })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "logo", "class": "h-11 hidden lg:block" })} <span class="sr-only">Komponents</span> </a> ${showNav && renderTemplate`<nav> ${renderComponent($$result2, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": "Navigation for Desktop" })} ${renderComponent($$result2, "NavDesktop", $$NavDesktop, { "links": nav, "list": _partners })} </nav>`} </div> <div${addAttribute(["flex", !showNav && "pr-4"], "class:list")}> ${renderComponent($$result2, "ContactActions", $$ContactActions, { "links": contactActions })} ${showNav && renderTemplate`<button${addAttribute([
    "xl:hidden px-4 bg-surface-100 hover:bg-surface-200 text-accent-600",
    _transition()
  ], "class:list")} data-sheet-trigger="nav-mobile"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "menu", "class": "w-7 pointer-events-none" })} </button>`} </div> ` })} </header> ${renderScript($$result, "/Users/kb/Documents/komponents/src/layouts/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kb/Documents/komponents/src/layouts/Header.astro", void 0);

const $$Astro$9 = createAstro("https://komponents.ng");
const $$Legal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Legal;
  const { links } = Astro2.props;
  const isDev = false;
  return renderTemplate`${maybeRenderHead()}<ul class="flex items-center text-white/65"> ${links.map((link) => renderTemplate`<li class="group"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": `/${link.link.story.full_slug === "home" ? "" : link.link.story.full_slug}`, "hover": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "label": link.title, "color": link.color, "titleCase": link.is_titlecase, "class:list": "group-first:!pl-0 lg:group-first:!pl-3" })} ` })} </li>`)} ${isDev} </ul>`;
}, "/Users/kb/Documents/komponents/src/blocks/Legal.astro", void 0);

const $$Astro$8 = createAstro("https://komponents.ng");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Social;
  const {
    links,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["flex space-x-4", classes], "class:list")}${spreadAttributes(attrs)}> ${links.map((el) => renderTemplate`<li class="group text-white/60 flex items-center"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": _slug(el.link), "hover": "white", "aria-label": `Visit us on ${el.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": el.icon, "class": "w-6" })} ` })} </li>`)} </ul>`;
}, "/Users/kb/Documents/komponents/src/blocks/Social.astro", void 0);

const $$Astro$7 = createAstro("https://komponents.ng");
const $$BigAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BigAction;
  const {
    title,
    subtitle,
    class: classes,
    ...attrs
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([classes, "space-y-2"], "class:list")}${spreadAttributes(attrs)}> ${renderComponent($$result, "Heading", $$Heading, { "text": title, "level": "h2", "size": "xl", "weight": "bold", "tighten": true })} ${renderComponent($$result, "Heading", $$Heading, { "text": subtitle, "size": "sm", "weight": "medium", "loosen": true, "uppercase": true, "class:list": "opacity-60" })} </div>`;
}, "/Users/kb/Documents/komponents/src/atoms/BigAction.astro", void 0);

const $$Astro$6 = createAstro("https://komponents.ng");
const $$TwinActions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwinActions;
  const { actions, class: classes, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([
    "grid grid-cols-1 items-end relative lg:static overflow-x-clip",
    classes
  ], "class:list")}${spreadAttributes(attrs)}> <li class="group flex items-center justify-center h-[192px] lg:h-[360px] lg:relative overflow-clip clip-path-slat bg-gradient-to-b from-surface-900 to-surface-950"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": _slug(actions[1].link), "class:list": "h-full w-full" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "class:list": "w-full z-20 absolute left-0 pt-8 pb-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BigAction", $$BigAction, { "title": actions[1].title, "subtitle": actions[1].subtitle, "class:list": "text-white text-center" })} ` })} ` })} </li> </ul> <!-- <ul class:list={[
        'grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2 items-end relative lg:static overflow-x-clip',
        classes
    ]} { ...attrs }>
    { actions.map((el: any, idx: number) => (
        <li
            class="group flex items-center justify-center h-[160px] sm:h-[192px] lg:first:h-[272px] lg:last:h-[368px] lg:relative lg:overflow-clip lg:clip-path-slat">
            <Anchor href={ _slug(el.link) } class:list="h-full w-full">
                <Icon
                    name={ idx === 0 ? 'slat-leading' : 'slat-trailing' }
                    class="z-10 h-[496px] sm:h-[520px] lg:w-full lg:h-full absolute group-first:-inset-x-1 group-first:-bottom-1.5 group-last:-bottom-3 group-last:hidden lg:group-last:block"
                />
                <Wrapper class:list="w-full z-20 absolute left-0 lg:group-first:pt-14 lg:group-last:pt-8">
                    <BigAction
                        title={ el.title }
                        subtitle={ el.subtitle }
                        class:list="text-white text-center"
                    />
                </Wrapper>
            </Anchor>
        </li>
    )) }
</ul> -->`;
}, "/Users/kb/Documents/komponents/src/blocks/TwinActions.astro", void 0);

const $$Astro$5 = createAstro("https://komponents.ng");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const {
    legalName,
    legalLinks,
    social,
    actions,
    showActions,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer id="footer"${addAttribute(["-space-y-0.5", showActions && "xl:mt-24", classes], "class:list")}${spreadAttributes(props)}> ${!showActions && renderTemplate`${renderComponent($$result, "TwinActions", $$TwinActions, { "actions": actions })}`} <div class="flex items-center lg:h-[72px] bg-surface-950 border-t border-surface-900/70 py-8 lg:py-0 relative z-30"> ${renderComponent($$result, "Wrapper", $$Wrapper, { "class:list": "w-full grid grid-cols-1 lg:grid-cols-3 gap-6" }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:col-span-2 items-center"> <div class="flex items-center space-x-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon", "class": "w-8 text-white" })} <small class="text-sm text-white/65">
Copyright
<span class="text-base">${"\xA9"}</span> ${year} ${legalName} </small> </div> ${renderComponent($$result2, "Legal", $$Legal, { "links": legalLinks })} </div> ${renderComponent($$result2, "Social", $$Social, { "links": social, "class:list": "lg:justify-self-end" })} ` })} </div> </footer>`;
}, "/Users/kb/Documents/komponents/src/layouts/Footer.astro", void 0);

const $$Backdrop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([`
        fixed inset-0 bg-dark-950 z-[51]
        cursor-pointer transition duration-500 ease-in-out
        opacity-0 invisible
    `], "class:list")} data-backdrop></div>`;
}, "/Users/kb/Documents/komponents/src/blocks/Backdrop.astro", void 0);

const $$Astro$4 = createAstro("https://komponents.ng");
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Modal;
  const {
    class: classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div aria-labelledby="modal-title" role="dialog" aria-modal="true"${addAttribute([
    "fixed z-[52] w-full md:w-auto right-0 flex items-center h-dvh opacity-0 translate-x-full overflow-clip",
    _transition(),
    classes
  ], "class:list")} data-modal${spreadAttributes(rest)}> <button class="p-3 md:p-5 absolute top-0 right-0 group/close" data-modal-close> ${renderComponent($$result, "Icon", $$Icon, { "name": "close-x", "class:list": [
    "text-white w-7 opacity-70 group-hover/close:opacity-100",
    _transition()
  ] })} </button> <div class="bg-white size-full xs:w-[456px] sm:w-[520px] max-h-[calc(100vh-104px)] lg:h-[680px] mx-auto md:ml-auto md:mr-16 overflow-clip [transform:translateZ(0)]"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/Modal.astro", void 0);

const $$Astro$3 = createAstro("https://komponents.ng");
const $$ModalProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ModalProduct;
  const { item, class: classes, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["overflow-auto h-full", classes], "class:list")}${spreadAttributes(rest)}> <div class="px-4 py-4 sm:px-8 sm:py-8 h-full flex flex-col justify-between"> <div class="flex items-center justify-center pb-4 border-b border-surface-200 border-dashed"> ${renderComponent($$result, "ImageProduct", $$ImageProduct, { "filename": item.image[0].file.filename, "large": true })} </div> ${renderComponent($$result, "BannerEntry", $$BannerEntry, { "subtitle": item.oem, "title": item.name, "copy": item.description, "size": "lg", "color": "surface", "slatColor": "accent", "class:list": "py-8" })} ${!_empty(item.highlights) && renderTemplate`<ul class="border-t border-surface-200 border-dashed py-8 space-y-3"> ${item.highlights.map((el) => renderTemplate`<li> ${renderComponent($$result, "Checklist", $$Checklist, { "text": el.item })} </li>`)} </ul>`} ${renderComponent($$result, "RichText", $$RichText, { "text": item.long_description[0].text, "class:list": "pt-8 pb-20 border-t border-surface-200 border-dashed" })} </div> ${renderComponent($$result, "Anchor", $$Anchor, { "href": _slug(item.link[0].link), "hover": "shadow", "class:list": "fixed left-0 bottom-0 z-[2]", "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "icon": item.link[0].icon, "label": item.link[0].title, "iconPosition": item.link[0].icon_position, "color": item.link[0].color, "responsive": true })} ` })} </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/ModalProduct.astro", void 0);

const $$Toast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([`
        fixed right-0 sm:right-4 bottom-4 z-50
        shadow-xl bg-accent-600
        h-32 w-[96%] sm:w-96
        [clip-path:polygon(0_40%,_100%_0%,_100%_100%,_0%_100%)]
        opacity-0 invisible translate-y-full
    `], "class:list")} data-toast> <div class="px-4 sm:px-5 pb-4 pt-[68px] flex items-center h-full"> <button${addAttribute([
    "p-4 absolute right-0 top-0 text-white hover:text-white/70",
    _transition()
  ], "class:list")} data-toast-close> ${renderComponent($$result, "Icon", $$Icon, { "name": "close-x", "class:list": "w-6 pointer-events-none" })} </button> <p class="text-white/80" data-toast-value>Tada! It's a toast! !!!</p> </div> </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/Toast.astro", void 0);

const $$Sheet = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([`
        fixed inset-x-0 bottom-0 z-[52]
        bg-white
        h-[72dvh]
        clip-path-t
        opacity-0 invisible translate-y-full
    `], "class:list")} data-sheet> <button${addAttribute([
    "p-4 absolute -right-0.5 -top-0.5 text-accent-600 hover:text-accent-800 z-50 bg-surface-100",
    _transition()
  ], "class:list")} data-sheet-close> ${renderComponent($$result, "Icon", $$Icon, { "name": "close-x", "class:list": "w-6 pointer-events-none" })} </button> <div class="overflow-auto h-full relative *:pt-[16%] *:xs:pt-[12%] *:sm:pt-[10%]"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/kb/Documents/komponents/src/blocks/Sheet.astro", void 0);

const $$Astro$2 = createAstro("https://komponents.ng");
const $$NavMobileLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavMobileLink;
  const {
    href,
    anchor,
    title
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group/li"> ${renderComponent($$result, "Anchor", $$Anchor, { "href": href, "hover": "accent", "class:list": [`
            relative group/anchor transition duration-200 ease-linear
            [&.active]:border-accent-400 hover:text-accent-600
            px-4 py-5 border-b border-dashed group-[:last-child]/li:border-0
        `], "data-anchor": anchor, "aria-label": `${title} Page` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTitle", $$BannerTitle, { "title": title, "size": "md", "weight": "bold", "showSlat": false, "class:list": [
    `group-hover/li:text-accent-600 group-[.active]/anchor:text-accent-600`,
    _transition()
  ] })} ` })} </li>`;
}, "/Users/kb/Documents/komponents/src/blocks/NavMobileLink.astro", void 0);

const $$Astro$1 = createAstro("https://komponents.ng");
const $$NavMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavMobile;
  const {
    links,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute([
    classes
  ], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": "Navigation for Mobile" })} <ul class="py-4"> ${links.map((link) => renderTemplate`${renderComponent($$result, "NavMobileLink", $$NavMobileLink, { "href": _slug(link.link), "anchor": _slugify(link.link.story.full_slug), "title": link.title })}`)} ${renderComponent($$result, "NavMobileLink", $$NavMobileLink, { "href": "/contact", "anchor": "contact", "title": "Contact Us" })} </ul> </nav>`;
}, "/Users/kb/Documents/komponents/src/blocks/NavMobile.astro", void 0);

const $$Astro = createAstro("https://komponents.ng");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { pageTitle, pageDescription, pageThumbnail, showNav, isError } = Astro2.props, api = Pn(), { data: settings } = await api.get("cdn/stories/settings", {
    version: "published",
    resolve_links: "url"
  }), site = settings.story.content, noActions = ["/repair-center"], { pathname } = Astro2.url, showActions = noActions.includes(pathname.replace(/\.html$/, ""));
  let { data: dataProducts } = await api.get(`cdn/stories/products`, {
    version: "published"
  }), products = dataProducts.story.content.body.filter((el) => el.component === "products")[0].products.filter((el) => el.in_stock).sort((a, b) => b.is_new - a.is_new), { data: dataAffiliates } = await api.get(`cdn/stories/affiliates`, {
    version: "published",
    resolve_links: "url"
  }), affiliates = dataAffiliates.story.content.body.filter((el) => el.component === "affiliates")[0].affiliates.filter((el) => el.available), { data: dataPartners } = await api.get(`cdn/stories/partners`, {
    version: "published"
  }), partners = dataPartners.story.content.body.filter(
    (el) => el.component === "solar_array"
  )[0], { data: productsByd } = await api.get(`cdn/stories`, {
    is_startpage: false,
    starts_with: "products/",
    resolve_relations: "product.partner",
    version: "published"
  });
  _addProducts(products);
  _addProductsNew(products.filter((el) => el.is_new));
  _addAffiliates(affiliates);
  _addPartners(partners);
  _addProductsByd(productsByd);
  return renderTemplate`<html lang="en" class="scroll-smooth bg-white"> ${renderComponent($$result, "Head", $$Head, { "title": `${pageTitle} | ${site.title}`, "description": pageDescription || site.description, "image": pageThumbnail || "/thumbnail.png" })}${maybeRenderHead()}<body class="text-surface-700 bg-white flex min-h-svh lg:min-h-dvh flex-col group/modal" data-body-exit> ${renderComponent($$result, "TitleHidden", $$TitleHidden, { "title": pageTitle })} ${renderComponent($$result, "Header", $$Header, { "title": site.title, "contactActions": site.contact_actions[0].links, "nav": site.nav, "showNav": showNav })} <main${addAttribute([
    showActions && "overflow-y-clip",
    "flex-1 swup-in pt-14 lg:pt-16"
  ], "class:list")} id="swup"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "legalName": site.legalName, "legalLinks": site.legalnav, "social": site.social, "actions": site.cta, "showActions": showActions })} ${renderComponent($$result, "Modal", $$Modal, {}, { "default": ($$result2) => renderTemplate`${_productsNew.value.map((el, idx) => renderTemplate`${renderComponent($$result2, "ModalProduct", $$ModalProduct, { "item": el, "data-modal-display": `product-at-${idx}` })}`)}` })} ${renderComponent($$result, "Toast", $$Toast, {})} ${renderComponent($$result, "Sheet", $$Sheet, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavMobile", $$NavMobile, { "data-sheet-display": "nav-mobile", "links": site.nav })} ` })} ${renderComponent($$result, "Backdrop", $$Backdrop, {})} ${renderScript($$result, "/Users/kb/Documents/komponents/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/kb/Documents/komponents/src/layouts/Base.astro", void 0);

async function _getPageData(slug) {
    const storyblokApi = Pn();

    const { data } = await storyblokApi.get(
        `cdn/stories/${slug === undefined ? 'home' : slug}`,
        {
            version: 'published',
            resolve_links: 'url',
            resolve_relations: RELATIONS,
        }
    );

    const page = data.story;
    const content = page.content;
    const meta = content.meta[0];

    return { page, content, meta }
}

export { $$Section as $, PERPAGE as P, _getPageData as _, $$Base as a, $$StoryblokComponent as b };
