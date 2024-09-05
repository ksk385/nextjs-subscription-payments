/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'nextjs-subscription-payments',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws'
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      // link: [supabaseServiceRoleSecret, stripeKeySecret, stripeWebhookSecret],
      environment: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY:
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY
      }
    });
  }
});
