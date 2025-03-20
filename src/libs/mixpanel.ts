import mixpanel from "mixpanel-browser";

let MIXPANEL_TOKEN = "";

if (import.meta.env.NODE_ENV === "production") {
  MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_PROD_TOKEN;
} else {
  MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_DEV_TOKEN;
}

if (typeof window !== "undefined" && MIXPANEL_TOKEN) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: import.meta.env.NODE_ENV !== "production",
    track_pageview: "full-url", // default: false
    persistence: "localStorage",
    // TODO: Apply Autocapture
  });
}

export default mixpanel;
