import type { AlternativesPost } from '@/lib/content-types';
import canvaAlternatives from './canva-alternatives';
import mailchimpAlternatives from './mailchimp-alternatives';
import hubspotAlternatives from './hubspot-alternatives';
import photoshopAlternatives from './photoshop-alternatives';
import slackAlternatives from './slack-alternatives';

export const alternatives: AlternativesPost[] = [
  canvaAlternatives,
  mailchimpAlternatives,
  hubspotAlternatives,
  photoshopAlternatives,
  slackAlternatives,
];
