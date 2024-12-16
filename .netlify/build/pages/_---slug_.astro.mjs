import { P as Pn } from '../chunks/Button_Bg__GjAN.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BeXiVzIq.mjs';
import 'kleur/colors';
import { _ as _getPageData, a as $$Base, b as $$StoryblokComponent } from '../chunks/storyblok_BdQRXyrl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://komponents.ng");
async function getStaticPaths() {
  const storyblokApi = Pn();
  const ssrRoutes = ["products-filtered"];
  const { data } = await storyblokApi.get("cdn/links/", {
    version: "published"
  });
  let links = data.links;
  links = Object.values(links).filter(
    (link) => !(link.slug === "settings") && !ssrRoutes.includes(link.slug)
  );
  return links.map((link) => {
    return {
      params: {
        slug: link.slug === "home" ? void 0 : link.slug
      }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { page, content, meta } = await _getPageData(slug);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "pageTitle": meta.title, "pageDescription": meta.description, "pageThumbnail": meta.image.filename }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": content })} ` })}`;
}, "/Users/kb/Documents/komponents/src/pages/[...slug].astro", void 0);
const $$file = "/Users/kb/Documents/komponents/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
