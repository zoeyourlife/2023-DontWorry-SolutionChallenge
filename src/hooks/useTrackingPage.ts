import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "src/libs/analytics/gtag";
import { mixpanelTrack } from "src/libs/mixpanel/mixpanel";

const useTrackingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
      mixpanelTrack("Page view", { url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

export default useTrackingPage;
