import type { CostGuidePost } from '@/lib/content-types';

import googleAdsCost from './google-ads-cost';
import facebookAdsCost from './facebook-ads-cost';
import mobileAppDevelopmentCost from './mobile-app-development-cost';
import webHostingCost from './web-hosting-cost';
import emailMarketingCost from './email-marketing-cost';

export const costGuides: CostGuidePost[] = [
  googleAdsCost,
  facebookAdsCost,
  mobileAppDevelopmentCost,
  webHostingCost,
  emailMarketingCost,
];
