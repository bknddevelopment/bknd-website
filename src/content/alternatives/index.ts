import type { AlternativesPost } from '@/lib/content-types';
import canvaAlternatives from './canva-alternatives';
import mailchimpAlternatives from './mailchimp-alternatives';
import hubspotAlternatives from './hubspot-alternatives';
import photoshopAlternatives from './photoshop-alternatives';
import slackAlternatives from './slack-alternatives';
import shopifyAlternatives from './shopify-alternatives';
import trelloAlternatives from './trello-alternatives';
import wordpressAlternatives from './wordpress-alternatives';
import zoomAlternatives from './zoom-alternatives';
import googleAnalyticsAlternatives from './google-analytics-alternatives';

export const alternatives: AlternativesPost[] = [
  canvaAlternatives,
  mailchimpAlternatives,
  hubspotAlternatives,
  photoshopAlternatives,
  slackAlternatives,
  shopifyAlternatives,
  trelloAlternatives,
  wordpressAlternatives,
  zoomAlternatives,
  googleAnalyticsAlternatives,
];
