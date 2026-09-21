import abPro from "../assets/logos/ab-pro.png"
import chob from "../assets/logos/chob.png"
import cityOfDetroit from "../assets/logos/city-of-detroit.png"
import lionesz from "../assets/logos/lionesz.png"
import ops from "../assets/logos/ops.png"
import zerodown from "../assets/logos/zerodown.png"
import antoinePortrait from "../assets/people/antoine-hayes.jpg"
import cristinaPortrait from "../assets/people/cristina-pavloff.jpg"
import moePortrait from "../assets/people/moe-lucas.jpg"
import roddPortrait from "../assets/people/rodd-phillips.jpg"
import clientTeamKitchen from "../assets/photos/client-team-kitchen.jpg"
import closingDayDevonTitle from "../assets/photos/closing-day-devon-title.jpg"
import clientsPorchSelfie from "../assets/photos/clients-porch-selfie.jpg"
import newHomeownersPorch from "../assets/photos/new-homeowners-porch.jpg"
import closingTableFamily from "../assets/photos/closing-table-family.jpg"
import kwroHolidayGathering from "../assets/photos/kwro-holiday-gathering.jpg"
import veteransVillage from "../assets/photos/veterans-village.jpg"

export const CONTACT = {
  phone: "+1 (248) 419-1004",
  phoneHref: "tel:+12484191004",
  email: "info@eurealtypro.com",
  addressLine1: "17515 W 9 Mile Rd STE 440",
  addressLine2: "Southfield MI 48075",
}

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  {
    label: "Programs",
    to: "/programs",
    children: [
      { label: "Homebuyers", to: "/programs" },
      { label: "Investors", to: "/investors" },
    ],
  },
  { label: "Agents", to: "/agents" },
  { label: "Testimonials", to: "/testimonials" },
]

export const STATS = [
  { value: "30+", label: "Years of Experience" },
  { value: "150+", label: "Asset Acquisitions" },
  { value: "2500+", label: "Properties Sold" },
]

export const PARTNERS = [
  { name: "City of Detroit", src: cityOfDetroit },
  { name: "Operation Safe Passage", src: ops },
  { name: "Caring Hands of Benjamin", src: chob },
  { name: "AB Pros", src: abPro },
  { name: "ZeroDown Mortgage", src: zerodown },
]

export const TESTIMONIAL_EXCERPTS = [
  {
    name: "Rodd Phillips",
    role: "Out-of-State Investor",
    image: roddPortrait,
    quote:
      "From the moment we connected, Antoine has been an invaluable asset, providing the expertise, reliability, and dedication needed to bring my projects in Detroit to fruition.",
  },
  {
    name: "Lionesz",
    role: "Out-of-State Investor",
    image: lionesz,
    quote:
      "Your expertise in navigating the local market and identifying opportunities has been a game-changer. I look forward to continuing to partner with you and your firm in future opportunities.",
  },
  {
    name: "Cristina Pavloff",
    role: "Out-of-State Investor",
    image: cristinaPortrait,
    quote:
      "From the start, Antoine demonstrated an exceptional understanding of the Detroit market, its neighborhoods, and the local real estate dynamics.",
  },
]

export const REVIEWS = [
  {
    name: "Lionesz Investments",
    role: "Investments Firm",
    image: lionesz,
    headline: "Highly Professional",
    body: [
      "I am the Owner of LIONESZ INVESTMENTS, and I am writing today to express my outstanding experience working with ELITE URBAN PROFESSIONALS. As an out-of-state investor, investing in properties in Detroit, I was initially concerned about how the distance would impact our communications and progress. However, your professionalism, expertise, and dedication have exceeded my expectations.",
      "Antoine, your exceptional work on the rehab side of the business has been impressive. Your attention to detail, ability to meet deadlines, and commitment to delivering high-quality results have been invaluable to my investments. Your expertise in navigating the local market and identifying opportunities has been a game-changer. I look forward to continuing to partner with you and your firm in future opportunities. In fact, where is our next project? Seriously, sir!",
    ],
  },
  {
    name: "Cristina Pavloff",
    role: "Out of State Investor",
    image: cristinaPortrait,
    headline: "Professionalism and Quality",
    body: [
      "As an out-of-state investor, I was initially hesitant about managing real estate investments in Detroit, especially without a local presence. However, working with Antoine Hayes has completely transformed my experience. From the start, Antoine demonstrated an exceptional understanding of the Detroit market, its neighborhoods, and the local real estate dynamics.",
      "Antoine's services in property management have been invaluable. He's incredibly responsive, always on top of maintenance, tenant relations, and ensuring that my properties are well-kept. I never have to worry about day-to-day operations. He proactively addresses issues before they become problems and ensures that my property remains profitable and hassle-free.",
      "When it comes to deal brokering, Antoine's expertise really shines. He has an eye for solid investment opportunities that I would have never found on my own. His ability to negotiate favorable terms and his deep knowledge of the market helped me secure deals that have already seen impressive returns. Antoine takes the time to understand my goals and consistently aligns the deals he presents with my investment strategy.",
      "What really sets Antoine apart, though, is his honesty, transparency, and dedication. He is always open with me about potential risks and rewards, which I greatly appreciate as an investor. His local connections and reputation in Detroit also give me confidence that I'm working with someone who is truly embedded in the community and is committed to the long-term success of his clients.",
      "I couldn't ask for a better partner in Detroit real estate. If you're looking to invest in the Detroit market, whether for property management, investment opportunities, or real estate brokering, I wholeheartedly recommend Antoine Hayes. His professionalism and integrity have made him an indispensable asset to my investment portfolio.",
    ],
  },
  {
    name: "Rodd Phillips",
    role: "Out Of State Investor",
    image: roddPortrait,
    headline: "Responsiveness and Value",
    body: [
      "I cannot speak highly enough of Antoine and the professionalism he brings to every aspect of his work. As an out-of-state investor, navigating projects from afar can be challenging, and unfortunately, my journey began with a major setback when I was let down by my initial project manager and contractor. However, everything changed when I was introduced to Antoine through a trusted business partner.",
      "From the moment we connected, Antoine has been an invaluable asset, providing the expertise, reliability, and dedication needed to bring my projects in Detroit to fruition. His integrity and commitment to excellence have not only restored my confidence but have also made him someone I wholeheartedly trust as both a businessman and a business partner. I truly appreciate his unwavering support and highly recommend him to anyone seeking a professional they can depend on.",
    ],
  },
]

export const GALLERY = [
  { src: newHomeownersPorch, alt: "New homeowners celebrating on the porch of their renovated Detroit home" },
  { src: closingDayDevonTitle, alt: "Clients celebrating on closing day at Devon Title" },
  { src: closingTableFamily, alt: "A family at the closing table signing on their new home" },
  { src: clientTeamKitchen, alt: "Antoine and clients in the kitchen of a newly renovated home" },
  { src: clientsPorchSelfie, alt: "Antoine and clients taking a selfie together" },
  { src: veteransVillage, alt: "Antoine presenting the Benjamin O. Davis Veterans Village development plans" },
  { src: kwroHolidayGathering, alt: "The Elite Urban team at a holiday gathering" },
]

export const TEAM = [
  { name: "Antoine M. Hayes I", title: "Founder & Associate Broker", image: antoinePortrait },
  { name: "Moe Lucas", title: "Chief Financial Officer & Mortgage Broker", image: moePortrait },
]

export const PURCHASE_STEPS = [
  { n: "1", title: "Consultation", body: "" },
  { n: "2", title: "Application", body: "" },
  { n: "3", title: "Offer Ready Pre Approval", body: "" },
  {
    n: "4",
    title: "House Hunting + Offer",
    body: "Now's the time to find your dream home and make an offer! You'll work with your real estate agent to help you structure the offer in the best way possible.",
  },
  { n: "5", title: "Approval + Inspection", body: "" },
  { n: "6", title: "Closing", body: "" },
]

export const INVESTOR_TIERS = [
  {
    name: "Institutional Investors",
    intro:
      "For those with a minimum of $150,000 to deploy as patient capital, our Institutional Investors empower Elite Urban Realty Professionals to acquire, reposition, and hold income-producing assets privately and strategically. This partnership fuels our ability to secure properties, build long-term value, and drive meaningful change in the community.",
    specs: [
      { k: "Minimum Investment", v: "$150,000" },
      { k: "Use of Funds", v: "Acquisition of income-producing and/or strategic real estate assets." },
      { k: "Return Structure", v: "Negotiated based on terms of participation (equity share or preferred return)." },
      { k: "Liquidity", v: "Long-term hold; illiquid for defined period of participation (equity share or preferred return)." },
      { k: "Documentation", v: "Subscription agreement, private placement memorandum (if applicable), investor accreditation verification." },
    ],
  },
  {
    name: "Growth Partners",
    intro:
      "For those with more modest sums to invest but equally impactful ambitions, our Growth Partners contribute capital that helps us renovate and develop the properties we acquire. This group is perfect for individuals or partners who want to see tangible results in Detroit's neighborhoods while earning competitive returns.",
    specs: [
      { k: "Minimum Investment", v: "Suggested: $25,000 to $50,000" },
      { k: "Use of Funds", v: "Renovation and development of specific properties." },
      { k: "Capital Return", v: "Earn lump-sum return (e.g., 20%) upon property sale." },
      { k: "Residual Return", v: "Earn monthly cash flow from rental income (e.g., ~1% per month or 12% annually)." },
      { k: "Liquidity", v: "Long-term hold; illiquid for defined period of participation." },
      { k: "Documentation", v: "Promissory note or joint venture agreement specifying terms and risks." },
    ],
  },
]

export const INVESTOR_FAQS = [
  {
    q: "What is the difference between Institutional Investors and Growth Partners?",
    a: "Institutional Investors commit $150,000+ of patient capital to help Elite Urban acquire and hold income-producing properties. Growth Partners invest smaller sums directly into individual renovation or rental projects.",
  },
  {
    q: "Are returns guaranteed?",
    a: "No. All investments carry risk, and returns depend on market conditions, project success, and other factors.",
  },
  {
    q: "How long is my money committed?",
    a: "Institutional Investor funds are typically tied up longer, as they support strategic acquisitions. Growth Partner funds vary based on the chosen strategy and project timeline.",
  },
  {
    q: "Do I have to be an accredited investor?",
    a: "Institutional Investors typically must meet accreditation requirements. Growth Partners may not, depending on project structure, but all investors must meet certain suitability criteria.",
  },
  {
    q: "How do I get started?",
    a: "Complete our investor inquiry form, and our team will guide you through the process, including reviewing risks, signing agreements, and deploying funds.",
  },
]

export const INVESTOR_DISCLAIMER =
  "Disclaimer: Investments in real estate involve risk, including potential loss of principal. Past performance does not guarantee future results. All investment opportunities are subject to due diligence, regulatory compliance, and the execution of legally binding agreements. Returns are not guaranteed and may vary based on market conditions and property performance. Consult your legal and financial advisors before making any investment."

export const LEGAL_DISCLAIMER =
  "Elite is independently owned, operated and licensed. A Benjamin Project LLC is not a lender, bank, or broker, and this website is not an offer to accept or handle an application for a mortgage loan. Elite Pro Realty, Inc. supports the Fair Housing Act and equal opportunity housing."
