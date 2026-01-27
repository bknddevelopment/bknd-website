export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
}

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: 'home-services-marketing-guide',
    title: 'The Home Services Marketing Guide That Actually Works',
    date: '2026-01-26',
    excerpt: 'Most marketing advice is written for tech startups and e-commerce. Here\'s what actually moves the needle for roofers, HVAC contractors, and home service businesses.',
    content: `
Everything you've read about marketing is probably wrong for your business.

I've spent years watching contractors burn through marketing budgets following advice meant for software companies. A roofing company isn't a SaaS startup. An HVAC contractor isn't selling shoes online. The playbook is different.

This guide is what I wish existed when I started working with home service businesses. No fluff. No "build your brand" nonsense. Just what actually generates jobs.

## Why Generic Marketing Advice Fails Home Services

Here's the fundamental problem: most marketing content is written by people who've never had to explain to a frustrated business owner why their $5,000 ad spend generated lots of "engagement" but zero phone calls.

Home services marketing has unique constraints that break standard advice:

**The lead-to-job gap is massive.** A software company counts a form submission as a conversion. You count a signed contract after an in-person estimate. That's two completely different games.

**Geography limits everything.** You can't scale by reaching more people. You scale by converting more of the people in your service area. A viral post doesn't help when your trucks only drive 30 miles.

**Seasonality hits hard.** HVAC companies live and die by weather. Roofers watch insurance adjusters like farmers watch rain. Your marketing can't pretend this doesn't exist.

**Trust is the product.** You're asking someone to let strangers into their home and write a check for $8,000. That requires a different kind of persuasion than selling a $50 product online.

The advice that follows accounts for all of this.

## The Foundation: Tracking That Actually Works

I'm putting this first because nothing else matters without it. I've audited hundreds of contractor marketing setups. Maybe 5% had tracking that could actually tell them which marketing generated which jobs.

Most have Google Analytics installed. Almost none have it configured to measure what matters.

**GA4 Setup That Works for Services**

Standard GA4 tracks page views. Useless. You need it tracking what matters for [proper analytics setup](/services/analytics):

Phone call clicks from your website. This requires setting up event tracking for tel: links. If your developer tells you this is hard, get a new developer. It's 10 lines of code.

Form submissions with source attribution. Not just "form submitted" but "form submitted by someone who found us through Google organic search for 'roof repair austin'."

Scroll depth on service pages. If someone reads 75% of your roofing page, they're a warmer lead than someone who bounced after 3 seconds. Treat them differently.

Here's the GA4 event setup you actually need:

Create custom events for: phone_click, form_submit, chat_initiated, and quote_request. Tag each with the traffic source, landing page, and service category. This takes about two hours to set up properly. Those two hours will save you from making $50,000 in bad marketing decisions.

**Call Tracking Implementation**

This is where most contractors lose the plot entirely.

You need a call tracking system. CallRail, CallTrackingMetrics, WhatConverts—pick one. They all work. The point is getting a unique phone number for each marketing channel so you know what's generating calls.

The setup: Your Google Ads get one tracking number. Your organic search traffic sees a different number on your website (dynamic number insertion). Your Google Business Profile gets another. Your Facebook ads get another.

Now when someone calls, you know exactly which marketing brought them in. Revolutionary, right? Yet 90% of contractors I talk to have no idea which of their marketing channels actually generate phone calls. They're just guessing.

One warning: don't use too many tracking numbers or you'll dilute your NAP (Name, Address, Phone) consistency for local SEO. Use dynamic number insertion on your website instead of hard-coding multiple numbers.

**Attribution That Connects to Closed Jobs**

Here's where [proper attribution](/services/analytics) gets into territory most marketing guides won't touch because it requires actual work.

Your marketing attribution is worthless if it stops at "lead generated." The lead that turned into a $15,000 job matters more than the ten leads that ghosted you.

The fix: your CRM needs to talk to your marketing data.

This means either using a CRM that integrates with your call tracking and analytics (Housecall Pro, ServiceTitan, Jobber all have varying levels of this), or building the connection yourself. We've built custom integrations using Zapier and webhooks that push closed job data back to Google Analytics and ad platforms.

When you close a job, you should be able to trace it back to: which keyword they searched, which ad they clicked, which page they landed on, and which phone number they called. This is table stakes for making smart budget decisions.

Without this, you're optimizing for leads. With it, you're optimizing for revenue.

## Local SEO: The 80/20 That Moves the Needle

I could write 50,000 words on [local SEO](/services/seo). But you don't need 50,000 words. You need to know what actually matters and what's a waste of time.

**Google Business Profile Optimization**

Your Google Business Profile is probably your single most important marketing asset. Not your website. Not your ads. The thing that shows up when someone searches "roofer near me."

Here's what actually moves rankings:

Primary category matters most. Pick the most specific category that matches your primary service. "Roofing Contractor" beats "Contractor." "HVAC Contractor" beats "Home Services."

Complete every field. Hours, services, service area, attributes—all of it. Google rewards completeness. This takes 30 minutes and most competitors skip it.

Photos that aren't stock images. Real job photos, team photos, truck photos. Before and afters of actual work you did. Google can tell the difference between stock photos and real ones. So can customers.

Posts every week. Not because anyone reads them—they don't. Because consistent posting signals to Google that your business is active. We've tested this extensively. Profiles that post weekly rank better than identical profiles that don't.

Q&A optimization. Add your own questions and answers with keywords in them. "Do you offer emergency roof repair?" "Yes, we provide 24/7 emergency roof repair services throughout Austin and surrounding areas." It's free keyword optimization most competitors ignore.

**Reviews: Strategy Without Sleaze**

More reviews generally means better rankings and more conversions. But the "how" matters.

Never offer incentives for reviews. It's against Google's terms, it's transparent to customers, and it undermines trust. One negative "this company paid me to write this" review can tank your conversion rate.

Instead: make leaving a review stupidly easy.

Send a text with a direct link to your Google review page immediately after job completion, while they're still feeling good about the work. Not an email buried in their inbox. A text. The tap-to-review rate on texts is 10x higher than email.

The script that works: "Hi [Name], thanks for choosing us. If you have 30 seconds, a Google review helps other homeowners find us: [link]" That's it. No begging. No "it would really mean a lot." Just the ask and the link.

Respond to every review. Positive: quick thanks. Negative: professional response that acknowledges the issue and offers resolution. Future customers read your responses more carefully than the reviews themselves.

**Citations That Matter vs. Waste of Time**

"Citation building" used to be a thing. Agencies would charge thousands to get you listed on 200 directories nobody's ever heard of.

Most of that is worthless now. Here's what actually matters:

The big four: Google Business Profile, Apple Maps, Bing Places, Facebook. Get these right first.

Industry-specific directories: Angi, HomeAdvisor, Thumbtack, Houzz, and industry-specific directories for your trade. These actually send traffic.

Local directories: Your local Chamber of Commerce, BBB if you're a member, local business associations.

That's roughly 15-20 citations that actually matter. Beyond that, you're chasing diminishing returns. Don't let an agency convince you that your 47th directory listing is moving the needle.

The key across all citations: NAP consistency. Your name, address, and phone number should be identical everywhere. Not similar. Identical. "123 Main Street" and "123 Main St." are not the same to Google.

## Paid Advertising: Where to Actually Spend

Everyone wants to know: Google Ads or Facebook? LSAs or display? Here's the honest breakdown based on spending millions of dollars across home service clients.

**Google Ads vs. LSAs vs. Facebook**

Understanding the differences between [paid advertising channels](/services/paid-advertising) is critical. Local Service Ads (LSAs) have the highest intent. When someone searches "emergency plumber" and calls directly from the LSA, they need a plumber right now. LSAs work on a pay-per-lead model, so you only pay when someone actually contacts you.

The catch: LSAs have limited inventory. You can't just spend more to get more leads. Google shows them based on proximity, reviews, and responsiveness. Max out LSAs first, then look elsewhere.

Google Search Ads capture high-intent searches that LSAs don't cover. Someone searching "best roofing company austin" or "hvac installation cost" is actively shopping. These leads are more expensive but convert well.

The key with Search Ads: ruthless negative keyword management. You'll blow through budget fast on worthless searches like "roofing jobs" (people looking for employment) or "diy roof repair" if you don't actively exclude them.

Start with exact match and phrase match keywords only. Broad match is a budget incinerator for home services. Google will gleefully spend your money on tangentially related searches.

[Facebook and Instagram ads](/services/paid-advertising) work differently. Lower intent, lower cost per click, higher volume. Nobody's on Facebook looking for a roofer. But you can reach people who might need one.

Facebook works best for: high-value services with longer consideration cycles (new HVAC systems, bathroom remodels), brand building in your service area, and retargeting people who visited your website but didn't convert.

Facebook doesn't work for: emergency services, low-ticket repairs, time-sensitive needs.

**Budget Allocation by Business Stage**

If you're spending under $3,000/month total on advertising:

Put 100% into LSAs until you've maxed them out, then move to Google Search. Don't split your budget across platforms. Concentration beats diversification when you're small.

If you're spending $3,000-10,000/month:

60% Google (LSAs + Search), 30% Facebook/Instagram for retargeting and high-value services, 10% testing new channels.

If you're spending $10,000+/month:

Now you can test properly. 50% to proven channels, 25% to expansion, 25% to experiments. At this budget, you should be running incrementality tests to verify each channel's true contribution.

**The Metrics That Matter**

Stop looking at:
- Cost per click
- Click-through rate
- Impressions
- Reach

Start looking at:
- Cost per qualified lead (someone who actually wants your service in your area)
- Cost per estimate (leads that became appointments)
- Cost per job (the actual metric that matters)
- Return on ad spend (revenue generated divided by ad cost)

A campaign with $50 cost per click that generates $12,000 jobs beats a campaign with $5 cost per click that generates tire-kickers every time.

## Content & Website Optimization

Your website exists to convert visitors into leads. That's it. Everything else is secondary. This is where [conversion rate optimization](/services/cro) becomes essential.

**Pages That Convert for Service Businesses**

You need these pages, optimized for both search and conversion:

Homepage: Clear value proposition, primary service areas, trust signals (reviews, certifications, years in business), and obvious contact options. Don't bury the phone number.

Individual service pages: One page per major service. Not a generic "services" page. "Roof Replacement" gets its own page. "Roof Repair" gets its own page. "Storm Damage Repair" gets its own page. Each page targets specific keywords and addresses specific concerns.

Location pages: If you serve multiple cities, each city gets a page. "Roofing Contractor in Round Rock" is a different page than "Roofing Contractor in Cedar Park." Yes, it's more work. Yes, it matters.

About/Team page: Real photos of real people. Bios that establish credibility. This is where you build the trust that converts browsers into callers.

Reviews/testimonials page: Aggregated proof that you do good work. Embed your Google reviews, add photos of completed projects, include video testimonials if you have them.

**The One Thing Most Contractor Websites Get Wrong**

Buried contact information.

I've seen contractor websites where you have to scroll through three screens of content to find a phone number. I've seen sites where "Contact Us" is a tiny link in the footer. I've seen sites where the only way to reach the company is through a contact form hidden on a separate page.

Your phone number should be visible without scrolling on every page. Click-to-call on mobile. Sticky header with contact info that follows the user.

People searching for home services often have urgent needs. Make it stupidly easy to call you. If someone lands on your site and can't immediately figure out how to contact you, they're gone.

Secondary to this: your mobile experience matters more than desktop. Over 70% of local searches happen on phones. If your site is slow or clunky on mobile, you're hemorrhaging leads.

## Marketing Automation Without Enterprise Tools

ServiceTitan costs $500+/month. HubSpot enterprise is thousands. You don't need either to automate your marketing.

**Practical Workflows Using Accessible Tools**

The goal is simple: no lead should fall through the cracks because someone forgot to follow up.

Stack we recommend for sub-$200/month:

CRM: Housecall Pro or Jobber ($50-100/month). Both handle scheduling, invoicing, and basic automation.

Email automation: Mailchimp or MailerLite free tiers get you started. ConvertKit if you need more sophistication.

Text automation: TextMagic or SimpleTexting ($25-50/month). Critical for lead response speed.

Integration glue: Zapier ($20-50/month). Connects everything.

**Lead Follow-Up Sequences That Work**

When a lead comes in—whether from a form, call, or chat—this sequence should fire automatically:

0-5 minutes: Automated text confirming receipt. "Thanks for reaching out about [service]. Someone from our team will contact you within the hour."

5-15 minutes: Phone call from your team. Speed-to-lead is everything. The contractor who calls first gets the job 70%+ of the time.

Same day: If no answer, follow-up text. "Hi [Name], tried calling about your [service] request. When's a good time to reach you?"

Day 2: Another call attempt + email with helpful information about the service they requested.

Day 4: "Checking in" text. Low pressure.

Day 7: Final "want us to close your request?" message.

This entire sequence can be automated with the tools above. Your job is just making the phone calls. Everything else runs itself.

The mistake I see: contractors who respond to leads within 2-3 days. By then, the customer has already scheduled with two other companies. Speed is your competitive advantage.

## Measuring What Matters

At this point, you're tracking properly, generating leads from multiple channels, and following up automatically. Now you need to make sense of it all.

**ROI Calculation Framework**

Monthly marketing ROI shouldn't be complicated. Here's the spreadsheet you need:

For each marketing channel, track:
- Total spend (ads + tools + agency fees)
- Leads generated
- Estimates scheduled
- Jobs closed
- Revenue from those jobs

Then calculate:
- Cost per lead (spend / leads)
- Cost per estimate (spend / estimates)
- Cost per job (spend / jobs)
- Return on investment ((revenue - spend) / spend)

A channel with 5x ROI (you spend $1,000, you get $5,000 in revenue) is printing money. A channel with 1.5x ROI barely covers your overhead. A channel below 1x ROI is losing money.

Most contractors can't produce these numbers. Which means they can't make informed decisions about where to spend more or less.

**Dashboard Setup**

You don't need a fancy BI tool. You need a spreadsheet that answers three questions:

1. Where did our leads come from this month?
2. What did each lead cost us?
3. Which channels are generating profitable jobs?

Update it weekly. Review it monthly. Adjust spend quarterly.

We build these dashboards in Google Sheets connected to call tracking and CRM data via Zapier. Takes about 4 hours to set up, saves thousands in wasted spend.

## The 12-Month Marketing Plan

If you're starting from scratch or rebuilding a failed marketing effort, here's how to phase it.

**Months 1-3: Foundation**

Fix your tracking. This is not optional. You cannot optimize what you cannot measure. GA4 properly configured. Call tracking installed. CRM integrated.

Optimize your Google Business Profile completely. Every field, weekly posts, photo uploads.

Launch LSAs if you haven't. Get through Google's verification process and start generating high-intent leads.

Build or fix your core website pages. Homepage, service pages, contact page. Mobile-optimized, fast-loading, clear CTAs.

Set up basic automation. Lead response texts at minimum.

**Months 4-6: Expansion**

Layer in Google Search Ads. Start conservative with exact match keywords. Monitor search terms report weekly to add negatives.

Begin review generation system. Text follow-ups after every job.

Create remaining service and location pages. Expand your SEO footprint.

Test Facebook retargeting. Small budget, focused on people who visited your site but didn't convert.

**Months 7-12: Optimization**

Now you have data. Use it.

Double down on channels with highest ROI. Cut or reduce channels underperforming.

[A/B test landing pages](/services/cro). Try different headlines, different CTAs, different layouts.

Expand geographic targeting if demand supports it.

Add seasonal campaigns for predictable spikes (spring for roofing, fall for HVAC).

Build out [content for longer-tail keywords](/services/content). "How to know if you need a new roof" type guides that capture early-stage research.

## What Happens Next

This guide is around 4,000 words. The implementation is hundreds of hours. Most contractors won't do it. They'll hire an agency that shows them pretty reports full of impressions, or they'll try one thing for two months, not see results, and quit.

The contractors who dominate their local markets do this work. They track everything. They follow up fast. They optimize ruthlessly. It's not complicated, but it is hard.

If you want help implementing this—actually building the tracking, setting up the automation, running the ads—that's what we do. We've built these systems for dozens of home service companies. We'll build you a dashboard where you can see exactly which marketing generates which jobs. No vanity metrics. No mystery.

[Reach out](/contact) when you're ready to stop guessing.
    `.trim(),
    author: 'Charwin Vanryck deGroot',
    readTime: '18 min read',
  },
  {
    slug: 'marketing-agency-lying-to-you',
    title: 'Your Marketing Agency is Lying to You',
    date: '2026-01-26',
    excerpt: 'That $3,000/month report full of "impressions" and "reach"? It might be hiding the fact that you\'re getting nothing in return.',
    content: `
Last month, a contractor I know showed me his marketing report. He'd been paying $3,000 a month for "digital marketing services" for eight months. That's $24,000.

I asked him a simple question: "How many leads did this generate?"

He didn't know. The reports talked about impressions, reach, engagement rates. Lots of colorful graphs. Not a single mention of phone calls, form submissions, or actual customers. When he asked his agency directly, they sent him a longer PDF. Still no answer.

This isn't an isolated case. It's the damn industry standard.

## Red Flag #1: Vanity Metrics

Here's what a typical agency report looks like:

- 50,000 impressions
- 12,000 reach
- 3.2% engagement rate
- "Strong brand visibility"

Here's what that same report should say:

- 50,000 impressions
- 0 phone calls
- 0 form submissions
- **$0 in value**

"Impressions" means your ad loaded on someone's screen. They probably didn't see it. They definitely didn't care. Engagement rate? Someone scrolled past your post slightly slower than the others.

None of this matters if it doesn't turn into business. A report without lead counts, cost per lead, and conversion rates is a report designed to hide failure. If your agency can't tell you how many customers they brought in last month, they're either incompetent or hoping you won't ask.

## Red Flag #2: The "Brand Building" Excuse

When you press an agency for real numbers, they'll often retreat to "brand awareness."

"We're building your brand. You can't measure that directly. It takes time to see results."

This is cover for having nothing to show. Real brand building has milestones. After 3 months, direct search traffic should increase. After 6 months, you should see branded keyword growth. These are measurable.

If your agency talks about brand awareness without specific timelines and metrics, they're hoping you'll keep paying while they figure out what they're doing. Real agencies set expectations: "By month three, we expect X. If we don't hit it, here's what we'll change."

## Red Flag #3: Data Hostages

Ask your agency for login access to your Google Analytics. Your Google Ads account. Your Facebook Business Manager.

If they hesitate, that's a problem. If they say "we manage that for you," that's a bigger problem.

**You should own everything.** Your analytics, your ad accounts, your domain, your hosting. All of it. An agency that sets up accounts in their name is holding your data hostage. When you leave, you lose your history, your audiences, your everything.

We set up every account in our clients' names on day one. Full admin access. If you fire us tomorrow, you walk away with everything we built. That's how it should work.

## Red Flag #4: The Escape Tax

Watch out for:

- "Setup fees" that mysteriously equal one month's payment
- "Ramp-up periods" where results don't count
- 6-12 month contracts with early termination penalties
- Vague language about "campaign momentum" if you consider leaving

These are designed to trap you. If an agency is confident in their work, they don't need to lock you in. Good results keep clients around. Contracts keep hostages around.

We work month-to-month. No setup fees. No termination penalties. Every month, we have to earn your business again. That's how it should be.

## What to Demand Instead

Before signing with any agency—including us—ask these five questions:

**1. "Can I see my Google Analytics in real time?"**
You should have your own login. If they won't give it to you, walk away.

**2. "How many leads or calls did we get last month?"**
An actual number. Not impressions. Not reach. Leads.

**3. "What's my cost per lead?"**
Total spend divided by total leads. If they can't answer this, they're not tracking properly.

**4. "Do I own all my accounts and data?"**
Google Ads, Facebook, Analytics, Search Console—all should be in your name.

**5. "What happens if I cancel next month?"**
The answer should be: "You keep everything, we part ways." Anything else is a red flag.

## Why We Built BKND This Way

I'm a developer by trade. Spent years building software where everything is measured, tested, and accountable. Every feature either works or it doesn't. You can't hide behind "brand awareness" when the code doesn't compile.

I got tired of watching businesses waste money on marketing that couldn't prove its value. So I built an agency that treats clients like adults. We show you the real numbers. We give you full ownership. We earn your business every single month.

If that sounds refreshing, we should talk. If you like the mystery, there are plenty of other agencies happy to take your $3,000.
    `.trim(),
    author: 'Charwin Vanryck deGroot',
    readTime: '5 min read',
  },
  {
    slug: 'the-real-cost-of-vanity-metrics',
    title: 'The Real Cost of Vanity Metrics',
    date: '2026-01-15',
    excerpt: 'Impressions and engagement rates feel good to report, but they can hide the truth about whether your marketing is actually working.',
    content: `
Your marketing report lands in your inbox. Impressions are up 200%. Engagement rate hit an all-time high. Social followers grew by 15%.

Everything looks great. Except revenue is flat.

## What Are Vanity Metrics?

Vanity metrics are numbers that look impressive but don't correlate with business outcomes. They're easy to grow, easy to report, and completely useless for making decisions.

Common vanity metrics include:

- **Impressions**: How many times your ad was displayed (not how many people actually noticed it)
- **Follower counts**: How many people clicked follow (not how many care about what you post)
- **Page views**: How many times a page loaded (not how many people read the content)

## The Opportunity Cost

Every hour spent optimizing for vanity metrics is an hour not spent on what matters. While your team celebrates a viral post that generated zero leads, your competitor is running A/B tests on landing pages that convert.

## What to Measure Instead

Focus on metrics that connect to revenue:

**Cost Per Acquisition (CPA)**: How much does it cost to acquire a customer?

**Customer Lifetime Value (LTV)**: How much revenue does a customer generate over time?

**Return on Ad Spend (ROAS)**: For every dollar spent on advertising, how much revenue comes back?

**Pipeline Velocity**: How quickly are leads moving through your funnel?

These metrics might not look as impressive in a slide deck, but they'll tell you whether your marketing is actually working.

## Making the Shift

The transition from vanity metrics to meaningful metrics isn't easy. It requires better tracking, clearer attribution, and often uncomfortable conversations about what's really driving growth.

But once you make the shift, you'll wonder how you ever operated any other way.
    `.trim(),
    author: 'Charwin Vanryck deGroot',
    readTime: '3 min read',
  },
  {
    slug: 'attribution-is-harder-than-you-think',
    title: 'Attribution Is Harder Than You Think',
    date: '2026-01-10',
    excerpt: 'Understanding which marketing channels actually drive revenue requires more than just looking at last-click data.',
    content: `
A customer finds you through a Google ad, reads three blog posts over two weeks, clicks a retargeting ad on LinkedIn, and finally converts after receiving an email.

Which channel gets credit for the sale?

## The Last-Click Fallacy

Most businesses default to last-click attribution. Whatever touchpoint happened right before conversion gets 100% of the credit. It's simple, but it's wrong.

In our example, the email would get all the credit. But would that customer have converted without the initial Google ad that introduced them to your brand? Without the blog content that built trust? Without the retargeting that kept you top of mind?

## Why Attribution Matters

If you're making budget decisions based on bad attribution data, you're probably:

- Over-investing in bottom-of-funnel channels
- Under-investing in awareness and consideration
- Missing the full picture of your customer journey

## Better Approaches

**Multi-Touch Attribution**: Distribute credit across all touchpoints based on their role in the journey. First touch introduced the prospect. Middle touches nurtured them. Last touch closed the deal.

**Incrementality Testing**: Run controlled experiments to measure the true impact of each channel. What happens to revenue when you turn off a specific ad campaign?

**Marketing Mix Modeling**: Use statistical analysis to understand how different channels contribute to overall performance, accounting for factors like seasonality and market conditions.

## The Honest Truth

Perfect attribution is impossible. Customer journeys are messy. Some touchpoints happen offline. Some influence can't be tracked.

But imperfect attribution based on solid methodology is infinitely better than last-click guessing. The goal isn't perfect data—it's better decisions.
    `.trim(),
    author: 'Charwin Vanryck deGroot',
    readTime: '4 min read',
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
