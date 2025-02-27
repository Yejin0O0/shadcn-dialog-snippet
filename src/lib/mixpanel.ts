import mixpanel from "mixpanel-browser";

let MIXPANEL_TOKEN = "";

if (import.meta.env.NODE_ENV === "production") {
  MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_PROD_TOKEN;
} else {
  MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_DEV_TOKEN;
}

if (typeof window !== "undefined" && MIXPANEL_TOKEN) {
  // 카테고리별로 이벤트 분기할 수 있으니 찾아볼 것
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: import.meta.env.NODE_ENV !== "production",
    track_pageview: false,
    persistence: "localStorage",
    // TODO: Apply Autocapture
  });
}

export default mixpanel;
