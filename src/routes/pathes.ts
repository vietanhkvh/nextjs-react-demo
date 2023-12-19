/**
 * Header
 */
export const ROUTE_INDEX = '/';
export const ROUTE_REDIRECT_TO_PAGE = '/redirect-to-page';
export const ROUTE_TO_DO_LIST = '/to-do-list';

/**
 * Demo pages
 */

// routing
export const ROUTE_DEMO_ROUTING = '/routing';

// subsequents routing
export const SLUG_DEMO_ROUTING_CATCH_ALL_SEGMENTS = '/catch-all-segments';
export const SLUG_DEMO_ROUTING_OPTIONAL_CATCH_ALL_SEGMENTS =
  '/optional-catch-all-segments';
export const SLUG_DEMO_LOADING_STREAM = '/loading-stream';

export const ROUTE_DEMO_ROUTING_CATCH_ALL_SEGMENTS = `${ROUTE_DEMO_ROUTING}${SLUG_DEMO_ROUTING_CATCH_ALL_SEGMENTS}`;
export const ROUTE_DEMO_ROUTING_OPTIONAL_CATCH_ALL_SEGMENTS = `${ROUTE_DEMO_ROUTING}${SLUG_DEMO_ROUTING_OPTIONAL_CATCH_ALL_SEGMENTS}`;
export const ROUTE_DEMO_LOADING_STREAM = `${ROUTE_DEMO_ROUTING}${SLUG_DEMO_LOADING_STREAM}`;
