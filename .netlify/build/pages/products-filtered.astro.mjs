import { c as $$TitleHidden, a as $$Wrapper } from '../chunks/Button_Bg__GjAN.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderComponent } from '../chunks/astro/server_BeXiVzIq.mjs';
import 'kleur/colors';
import { $ as $$Section, P as PERPAGE, _ as _getPageData, a as $$Base, b as $$StoryblokComponent } from '../chunks/storyblok_BdQRXyrl.mjs';
import StoryblokClient from 'storyblok-js-client';
export { renderers } from '../renderers.mjs';

function _getVisibleItems(totalItems, search, current, maxItems) {
    const stemWord = (word) => {
        return word.toLowerCase().replace(/(?:s|es)$/, '')
    };

    const matchWords = (searchTerm, content) => {
        const searchWords = searchTerm.toLowerCase().split(/\s+/);
        const contentWords = content.toLowerCase().split(/\s+/);

        return searchWords.every(searchWord =>
            searchWord.length === 1
                ? contentWords.some(contentWord => contentWord.includes(searchWord))
                : contentWords.some(contentWord =>
                    stemWord(contentWord).includes(stemWord(searchWord)) ||
                    stemWord(searchWord).includes(stemWord(contentWord))
                )
        )
    };

    const filteredItems = totalItems.filter((item) =>
        !search ||
        search.trim().length === 0 ||
        (item.content.name && matchWords(search, item.content.name)) ||
        (item.content.title && matchWords(search, item.content.title))
    );

    const visibleItems = filteredItems.slice(
        (current - 1) * maxItems,
        current * maxItems
    );

    return { filteredItems, visibleItems }
}

function _paginateLink(baseURL, current) {
    const url = new URL(baseURL);
    url.searchParams.set('page', current);

    return url.toString()
}

function _truncatesPagination(totalPages, currentPage) {
    const max = 5;

    if (totalPages <= max) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const hasStartEllipsis = currentPage > max - 2;
    const hasEndEllipsis = currentPage < totalPages - (max - 2);

    if (hasStartEllipsis && !hasEndEllipsis) {
        return [
            1,
            { text: '...' },
            ...Array.from({ length: 3 }, (_, i) => totalPages - 3 + i),
        ]
    }

    if (!hasStartEllipsis && hasEndEllipsis) {
        return [
            ...Array.from({ length: 3 }, (_, i) => i + 1),
            { text: '...' },
            totalPages,
        ]
    }

    return [
        1,
        { text: '...' },
        ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i),
        { text: '...' },
        totalPages,
    ]
}

const $$Astro$2 = createAstro("https://komponents.ng");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { ariaLabel = "Pagination", ...attrs } = Astro2.props;
  const { total, size, current } = Astro2.props, numberOfPages = Math.ceil(total / size);
  const { href } = Astro2.url;
  const truncatedPagination = _truncatesPagination(numberOfPages, current);
  return renderTemplate`${numberOfPages > 1 && renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(attrs)}${addAttribute(["flex items-center w-full"], "class:list")}>${renderComponent($$result, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": ariaLabel })}<ul class="flex items-center w-full justify-center lg:justify-start gap-0.5 sm:gap-3">${current > 1 && renderTemplate`<li><a${addAttribute(_paginateLink(href, current - 1), "href")}${addAttribute(`Go to page ${current - 1} of ${numberOfPages}`, "aria-label")}>${`Go to page ${current - 1} of ${numberOfPages}`}</a></li>`}<li><ul class="flex items-center gap-1.5 sm:gap-3">${truncatedPagination.map((number, index) => renderTemplate`<li class="page [&>a[aria-current=&quot;page&quot;]]:bg-[var(--color-emphasis)] [&>a]:rounded-full [&>a[aria-current=&quot;page&quot;]]:text-white [&>a:not([aria-current=&quot;page&quot;])]:hover:bg-[var(--color-bg-default-elevated)]">${typeof number === "object" ? renderTemplate`<p>${number.text}</p>` : renderTemplate`<a${addAttribute(_paginateLink(href, number), "href")}${addAttribute(
    number === current ? "page" : void 0,
    "aria-current"
  )} class="flex h-10 w-10 items-center justify-center relative">${number}</a>`}</li>`)}</ul></li>${current < numberOfPages && renderTemplate`<li><a${addAttribute(_paginateLink(href, current + 1), "href")}${addAttribute(`Go to page ${current + 1} of ${numberOfPages}`, "aria-label")}>${`Go to page ${current + 1} of ${numberOfPages}`}</a></li>`}</ul></nav>`}`;
}, "/Users/kb/Documents/komponents/src/blocks/Pagination.astro", void 0);

const $$Astro$1 = createAstro("https://komponents.ng");
const $$ProductsFiltered$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductsFiltered$1;
  const perPage = PERPAGE;
  const page = Astro2.url.searchParams.get("page") || "1";
  Astro2.props;
  const Storyblok = new StoryblokClient({
    accessToken: "Hz3HBxQstzCE8ie97bXLnAtt",
    cache: {
      clear: "auto",
      type: "memory"
    }
  });
  const params = {
    starts_with: "products/",
    version: "published",
    is_startpage: false
  };
  const products = await Storyblok.getAll("cdn/stories", params);
  const search = Astro2.url.searchParams.get("s");
  const current = parseInt(page, 10);
  const { filteredItems, visibleItems } = _getVisibleItems(
    products,
    search,
    current,
    perPage
  );
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "All Products (Filtered)", "component": "products-filtered", "class:list": "pt-8 xs:pt-12 lg:pt-8" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "inner": true, "tag": "ul", "padB": "b", "class:list": "w-full relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3", "data-all-products": true }, { "default": ($$result3) => renderTemplate`${visibleItems.length > 0 ? visibleItems.map((i) => renderTemplate`${maybeRenderHead()}<p>${i.content.name}</p>`) : renderTemplate`<p class="text-2xl text-center">No results found</p>`}${renderComponent($$result3, "Pagination", $$Pagination, { "total": filteredItems.length, "size": perPage, "current": current })} ` })} ` })}`;
}, "/Users/kb/Documents/komponents/src/composites/ProductsFiltered.astro", void 0);

const $$Astro = createAstro("https://komponents.ng");
const prerender = false;
const $$ProductsFiltered = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductsFiltered;
  const slug = Astro2.url.pathname.slice(1);
  const { page, content, meta } = await _getPageData(slug);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "pageTitle": meta.title, "pageDescription": meta.description, "pageThumbnail": meta.image.filename }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": content })} ${renderComponent($$result2, "ProductsFiltered", $$ProductsFiltered$1, {})} ` })}`;
}, "/Users/kb/Documents/komponents/src/pages/products-filtered.astro", void 0);

const $$file = "/Users/kb/Documents/komponents/src/pages/products-filtered.astro";
const $$url = "/products-filtered";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ProductsFiltered,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
