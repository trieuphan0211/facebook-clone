export const fallbackLng = "en-US";
export const languages = [fallbackLng, "vi-VN"];
export const defaultNS = "translation";
export const cookieName = "accept-language";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
