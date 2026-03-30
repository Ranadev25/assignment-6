import React from 'react'
import PricingCard from './PricingCard';


const pricingPlans = [
  {
    id: 1,
    plan: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    buttonText: "Get Started Free",
    buttonStyle: "bg-gradient-to-r from-[#4F39F6] to-[#8839f6] text-white",
    isPopular: false,
    highlight: false
  },
  {
    id: 2,
    plan: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    buttonText: "Start Pro Trial",
    buttonStyle: "bg-white text-purple-700 font-semibold",
    isPopular: true,
    highlight: true
  },
  {
    id: 3,
    plan: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    buttonText: "Contact Sales",
    buttonStyle: "bg-gradient-to-r from-[#4F39F6] to-[#8839f6] text-white",
    isPopular: false,
    highlight: false
  }
];


const Pricing = () => {
  return (
    <div className='md:w-[90%] lg:w-[85%] mx-auto py-16'>
      <div  className="text-center my-5">
        <h1 className="text-3xl md:text-4xl font-medium">Simple, Transparent Pricing</h1>
        <p className="text-gray-400 my-3 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10 max-md:mx-3'>
        {
          pricingPlans.map(item=> <PricingCard key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default Pricing