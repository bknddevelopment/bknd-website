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
