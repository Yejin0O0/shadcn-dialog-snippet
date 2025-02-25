import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;

if (typeof window !== "undefined" && MIXPANEL_TOKEN) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: process.env.NODE_ENV !== "production",
    track_pageview: false,
    persistence: "localStorage",
    // TODO: Apply Autocapture
  });
}

export default mixpanel;
