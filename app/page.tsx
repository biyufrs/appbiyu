import CallToAction from '@/components/call-to-action'
import ContentSection from '@/components/content-2'
import FAQsTwo from '@/components/faqs-2'
import Features from '@/components/features-10'
import FooterSection from '@/components/footer'
import HeroSection from '@/components/hero-section'
import IntegrationsSection from '@/components/integrations-7'
import Pricing from '@/components/pricing'
import PricingComparator from '@/components/pricing-comparator'
import StatsSection from '@/components/stats-4'
import TeamSection from '@/components/team'
import WallOfLoveSection from '@/components/testimonials'
// import { Content } from 'next/font/google'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <IntegrationsSection/>
      <ContentSection/>
      <StatsSection/>
      <TeamSection/>
      <WallOfLoveSection/>
      <Pricing/>
      <PricingComparator/>
      <FAQsTwo/>
      <CallToAction/>
      <FooterSection/>
    </div>
  )
}
