import BranchesSection from '@/components/Home/BranchesSection'
import ExperienceSection from '@/components/Home/ExperienceSection'
import Hero from '@/components/Home/Hero'
import MobileAppSection from '@/components/Home/MobileAppSection'
import NewsSection from '@/components/Home/NewsSection'
import OfferUltimateSection from '@/components/Home/OfferUltimateSection'
import ProfitabilitySection from '@/components/Home/ProfitabilitySection'
import React from 'react'

function HomePage() {
    return (
        <>
        <Hero/>
        <ProfitabilitySection/>
        <OfferUltimateSection/>
        <ExperienceSection/>
        <MobileAppSection/>
        <BranchesSection/>
        <NewsSection/>
        </>
    )
}

export default HomePage
