import React from 'react';

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  summary: string;
  featuredImage: string;
  metaDescription: string;
  content: React.ReactNode;
  faqs: Array<{ question: string; answer: string }>;
}

export const BLOGS: BlogArticle[] = [
  {
    slug: "best-dentist-in-patna-for-braces",
    title: "Best Dentist in Patna for Braces: The Ultimate Patient Guide",
    category: "Orthodontics",
    readTime: "5 min read",
    publishDate: "June 24, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Looking for braces in Patna? Discover the top options, dental technology, treatment duration, and why Dr. Aryan Parmar at YOUR DENTIST is highly recommended.",
    featuredImage: "/assets/yourdentist/clinic_in_action.jpg",
    metaDescription: "Looking for the best dentist in Patna for braces? Read our patient guide on orthodontic options, treatment durations, and braces care at YOUR DENTIST.",
    faqs: [
      {
        question: "Who is the best dentist in Patna for braces?",
        answer: "Dr. Aryan Parmar at YOUR DENTIST in Patliputra Colony, Patna is widely recognized as one of the best dental specialists for braces. The clinic utilizes advanced 3D imaging, digital diagnostic planning, and a suite of modern options including metal, ceramic, and clear aligners."
      },
      {
        question: "What is the best age to get braces?",
        answer: "While orthodontic treatment is highly effective for teenagers, braces are suitable for adults of all ages. At YOUR DENTIST Patna, we offer aesthetic solutions like ceramic braces and invisible clear aligners specifically designed for working professionals."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Choosing the right orthodontic specialist is a life-changing decision. A beautiful, aligned smile doesn't just improve your appearance; it prevents tooth decay, chewing difficulties, and gum disease. If you are searching for the <strong>best dentist in Patna for braces</strong>, here is what you need to look for before making your choice.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why Dr. Aryan Parmar's YOUR DENTIST is the Top Choice</h2>
        <p className="text-neutral-700 leading-relaxed">
          At YOUR DENTIST, located in the accessible Patliputra Colony area of Patna, patients receive specialized treatment under the supervision of senior specialists. Here are the core factors that set our clinic apart:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Digital 3D Smile Scanning:</strong> No messy manual impressions. We capture a high-accuracy digital map of your teeth to simulate results before starting.</li>
          <li><strong>Orthodontic Variety:</strong> From traditional metal braces to self-ligating brackets and imported invisible aligners.</li>
          <li><strong>Zero-Pain Protocols:</strong> Modern materials and memory-shape wires minimize discomfort during tightening sessions.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Braces Options Available in Patna</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-100">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Braces Type</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Aesthetics</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Treatment Speed</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Ideal For</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Traditional Metal</td>
                <td className="px-6 py-4 text-neutral-600">Visible metal brackets</td>
                <td className="px-6 py-4 text-neutral-600">Standard (12-24 months)</td>
                <td className="px-6 py-4 text-neutral-600">Children & Teenagers</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Ceramic Braces</td>
                <td className="px-6 py-4 text-neutral-600">Tooth-colored (Discreet)</td>
                <td className="px-6 py-4 text-neutral-600">Standard (12-24 months)</td>
                <td className="px-6 py-4 text-neutral-600">Students & Professionals</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Clear Aligners</td>
                <td className="px-6 py-4 text-neutral-600">Virtually Invisible</td>
                <td className="px-6 py-4 text-neutral-600">Fast (6-18 months)</td>
                <td className="px-6 py-4 text-neutral-600">Adults seeking high comfort</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Patient Journey & Expected Timelines</h2>
        <p className="text-neutral-700 leading-relaxed">
          Typically, an orthodontic treatment takes between 12 to 18 months depending on the severity of overcrowding, spacing, or bite issues. Routine visits are scheduled every 4 to 6 weeks for standard adjustments. For aligners, visits are much fewer (typically once in 2-3 months) since you receive multiple custom trays at once.
        </p>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            <strong>Ready to start?</strong> Book a free 3D smile preview and clinical consultation with Dr. Aryan Parmar.
          </p>
        </div>
      </div>
    )
  },
  {
    slug: "aligners-treatment-in-patna",
    title: "Clear Aligners in Patna: Complete Patient Guide",
    category: "Guides",
    readTime: "4 min read",
    publishDate: "June 24, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Interested in invisible braces? Read our comprehensive breakdown of clear aligners in Patna, with monthly EMI details.",
    featuredImage: "/assets/yourdentist/dr_with_patient_1.jpg",
    metaDescription: "Find out about clear aligners in Patna. View brand differences, treatment options, and 0% interest EMI options at YOUR DENTIST.",
    faqs: [
      {
        question: "How are clear aligners planned in Patna?",
        answer: "Clear aligners planning in Patna depends on the complexity of teeth alignment and the brand chosen (e.g. standard aligners or international brands like Invisalign). We offer complete diagnostic consultations to provide detailed transparent care plans."
      },
      {
        question: "Are EMI payment plans available for aligners?",
        answer: "Yes, YOUR DENTIST Patna offers 0% interest monthly financing (EMI) through Bajaj Finance and other banking partners, making payments highly affordable."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Clear aligners have revolutionized dental treatments. By replacing metallic brackets with comfortable, transparent plastic trays, aligners let you straighten your teeth completely in secret. Here is a complete guide to clear aligners in Patna.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Treatment Options at YOUR DENTIST</h2>
        <p className="text-neutral-700 leading-relaxed">
          Aligner treatment options depend on the brand, case complexity (mild, moderate, or severe alignment issues), and treatment duration. Here is a baseline guide to clear aligner options in Patna:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-100">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Aligner Brand Category</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Pricing Plan</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Ideal Case Complexity</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Features</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Essential Class (Local Brands)</td>
                <td className="px-6 py-4 text-[#5b72ff] font-bold">Custom Quote</td>
                <td className="px-6 py-4 text-neutral-600">Mild crowding, small gaps</td>
                <td className="px-6 py-4 text-neutral-600">High efficiency, basic plastic material</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Premium Domestic Brands</td>
                <td className="px-6 py-4 text-[#5b72ff] font-bold">Custom Quote</td>
                <td className="px-6 py-4 text-neutral-600">Moderate spacing or crowding</td>
                <td className="px-6 py-4 text-neutral-600">US-FDA approved plastics, high comfort</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">International Brands (Invisalign)</td>
                <td className="px-6 py-4 text-[#5b72ff] font-bold">Custom Quote</td>
                <td className="px-6 py-4 text-neutral-600">Complex bites, severe overcrowding</td>
                <td className="px-6 py-4 text-neutral-600">SmartTrack material, global tracking app</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Factors Influencing the Aligner Plan</h2>
        <p className="text-neutral-700 leading-relaxed">
          Why does the aligner plan vary? Here are the primary considerations:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Number of Alignment Trays:</strong> Mild cases require 10 to 15 trays, while complex skeletal alignments can require up to 40+ customized trays.</li>
          <li><strong>Digital Monitoring:</strong> Advanced scanners allow doctors to monitor progress remotely, which may include custom software licensing fees.</li>
          <li><strong>Refinement Trays:</strong> Some high-end packages include secondary \"refinement\" trays free of charge if teeth need minor adjustments at the end.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">0% Interest Financing Options</h2>
        <p className="text-neutral-700 leading-relaxed">
          At YOUR DENTIST Patna, we believe everyone deserves a premium smile. We offer customized 0% interest EMI options. You can select your treatment plan and split the costs over 6, 9, or 12 months with no hidden costs.
        </p>
      </div>
    )
  },
  {
    slug: "is-teeth-cleaning-safe",
    title: "Is Professional Teeth Cleaning Safe? Myths vs. Facts Revealed",
    category: "General Dentistry",
    readTime: "3 min read",
    publishDate: "June 24, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Will teeth scaling loosen your gums or wear down enamel? Learn why professional teeth cleaning is safe and highly recommended by dentists.",
    featuredImage: "/assets/yourdentist/patient_happy_3.png",
    metaDescription: "Is professional teeth cleaning safe? Bust common scaling myths (like weakening teeth or creating gaps) with medical facts from YOUR DENTIST Patna.",
    faqs: [
      {
        question: "Is professional teeth cleaning safe?",
        answer: "Yes, professional teeth scaling is 100% safe. It uses gentle ultrasonic vibrations to disintegrate plaque and hard tartar deposits without scraping or damaging the tooth enamel."
      },
      {
        question: "Does teeth cleaning cause gaps between teeth?",
        answer: "No. Cleaning does not create new gaps. Scaling simply removes hard tartar deposits that were previously filling the existing gaps between your teeth, which makes the gaps temporarily visible."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Gum health is the foundation of a healthy body. However, many people avoid scheduling routine checkups due to standard dental myths. The most frequent question we hear is: <strong>Is professional teeth cleaning safe?</strong> Here are the scientific facts about scaling.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Myth 1: Scaling makes teeth loose or weak</h2>
        <p className="text-neutral-700 leading-relaxed">
          <strong>Fact:</strong> Scaling uses sound waves (ultrasonic vibrations) and a cool spray of water to loosen hard calcified plaque (tartar) from your teeth. The metal tip does not scrape or drill your teeth, leaving the enamel completely intact. If teeth feel slightly mobile after a deep scaling, it is because heavy tartar deposits (which act like artificial concrete holds) were removed, allowing the gums to finally heal and tighten back around the tooth root.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Myth 2: Scaling creates gaps between teeth</h2>
        <p className="text-neutral-700 leading-relaxed">
          <strong>Fact:</strong> Tartar buildup usually starts along the gumline and spreads into the spaces between teeth. When tartar is cleaned away, those empty spaces are uncovered. This is a sign of healthy hygiene. Over the next few weeks, your gums will naturally swell and fill those healthy clean spaces.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Benefits of Routine Scaling (Every 6 Months)</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Stops Gum Bleeding:</strong> Plaque bacteria irritate gum tissues, leading to swelling and bleeding (gingivitis). Cleaning reverses this.</li>
          <li><strong>Prevents Bad Breath:</strong> Decaying food debris in tartar is the primary trigger for persistent bad breath.</li>
          <li><strong>Protects Your Heart:</strong> Research shows a direct link between chronic gum disease bacteria and cardiovascular inflammation.</li>
        </ul>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Professional teeth cleaning and polishing is available at YOUR DENTIST Patna. Maintain your smile with a painless 45-minute session today.
          </p>
        </div>
      </div>
    )
  },
  {
    slug: "gap-closure-treatments-in-patna",
    title: "Teeth Gap Closure in Patna: Treatments Compared",
    category: "Aesthetics",
    readTime: "4 min read",
    publishDate: "June 24, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Want to fix gaps in your front teeth? Compare duration and durability of composite bonding, porcelain veneers, and invisible aligners in Patna.",
    featuredImage: "/assets/yourdentist/gap_after.png",
    metaDescription: "How is teeth gap closure completed in Patna? Read a detailed comparison of composite bonding, veneers, and invisible aligners at YOUR DENTIST.",
    faqs: [
      {
        question: "What are the options for teeth gap closure in Patna?",
        answer: "Gap closure options in Patna include cosmetic composite bonding (single session) and high-durability porcelain veneers. Aligner options are also available for complete natural alignment. Book a diagnostic checkup for custom estimates."
      },
      {
        question: "Can front teeth gaps be closed in one day?",
        answer: "Yes. Composite bonding allows dentists to fill front teeth gaps in just 45 minutes. It is a painless, immediate cosmetic solution."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Gaps in the front teeth (known medically as a diastema) can prevent you from smiling freely. Fortunately, modern aesthetic dentistry provides multiple treatments to close these spaces. If you are comparing options, here is a complete guide to <strong>teeth gap closure in Patna</strong>.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Treatment Comparison Chart</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-100">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Treatment Option</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Pricing Plan</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Sessions Required</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Durability</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Composite Bonding</td>
                <td className="px-6 py-4 text-[#5b72ff] font-bold">Custom Quote</td>
                <td className="px-6 py-4 text-neutral-600">1 session (45 mins)</td>
                <td className="px-6 py-4 text-neutral-600">3 - 5 years</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Porcelain Veneers</td>
                <td className="px-6 py-4 text-[#5b72ff] font-bold">Custom Quote</td>
                <td className="px-6 py-4 text-neutral-600">2 sessions (10 days)</td>
                <td className="px-6 py-4 text-neutral-600">10 - 15 years</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Clear Aligners</td>
                <td className="px-6 py-4 text-[#5b72ff] font-bold">Custom Quote</td>
                <td className="px-6 py-4 text-neutral-600">Continuous trays</td>
                <td className="px-6 py-4 text-neutral-600">Permanent (with retainers)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Detailed Guide on Options</h2>
        <ol className="list-decimal pl-6 space-y-4 text-neutral-700">
          <li>
            <strong>Composite Bonding (Immediate & Affordable):</strong>
            <br />
            Our dentists use resin matches that adhere to your natural teeth, filling in the gap instantly. It is non-invasive and requires zero grinding of your teeth.
          </li>
          <li>
            <strong>Porcelain Veneers (Highly Aesthetic & Permanent):</strong>
            <br />
            Custom ceramic shells are bonded to the front teeth. Porcelain is stain-resistant and mimics the natural light reflection of tooth enamel, offering a premium smile makeover.
          </li>
          <li>
            <strong>Clear Aligners (Natural Tooth Movement):</strong>
            <br />
            If you want to move your teeth naturally to close gaps instead of filling them with materials, aligners are the ideal long-term treatment.
          </li>
        </ol>
      </div>
    )
  },
  {
    slug: "dental-implants-in-patna",
    title: "Dental Implants in Patna: The Ultimate Guide to Tooth Replacement",
    category: "Implants",
    readTime: "5 min read",
    publishDate: "June 25, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Need to replace a missing tooth? Learn why dental implants are the gold standard for tooth replacement in Patna and how the procedure works.",
    featuredImage: "/assets/yourdentist/premium_implants.png",
    metaDescription: "Read the ultimate patient guide to dental implants in Patna. Learn about procedure steps, titanium implants, and 0% interest EMI options at YOUR DENTIST.",
    faqs: [
      {
        question: "What is a dental implant?",
        answer: "A dental implant is a titanium post surgically positioned into the jawbone beneath your gums. Once in place, it allows your dentist to mount replacement teeth or a bridge onto them, mimicking natural tooth roots."
      },
      {
        question: "How long do dental implants last?",
        answer: "With proper oral hygiene and regular dental checkups, dental implants can last a lifetime. Unlike traditional bridges or dentures, implants integrate directly with your jawbone."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Missing teeth can affect your self-confidence, alter your speech, and lead to jawbone deterioration over time. While dentures and bridges are traditional solutions, <strong>dental implants in Patna</strong> have emerged as the gold standard for permanent, natural-looking tooth replacement.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why Choose Dental Implants?</h2>
        <p className="text-neutral-700 leading-relaxed">
          Dental implants look, feel, and function exactly like your natural teeth. Here are the top benefits:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Preserves Jaw Structure:</strong> Implants stimulate bone growth and prevent the bone loss that naturally occurs after tooth extraction.</li>
          <li><strong>No Damage to Adjacent Teeth:</strong> Traditional bridges require grinding down adjacent healthy teeth to support the bridge. Implants are standalone.</li>
          <li><strong>Superior Stability:</strong> Eat, talk, and smile comfortably without worrying about slipping or moving parts.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Implant Journey at YOUR DENTIST</h2>
        <ol className="list-decimal pl-6 space-y-4 text-neutral-700">
          <li>
            <strong>Digital Assessment & Planning:</strong>
            <br />
            We perform advanced 3D CBCT scans to evaluate your bone density and design a digital surgical template for microscopic placement accuracy.
          </li>
          <li>
            <strong>Implant Placement:</strong>
            <br />
            The titanium fixture is gently placed into the jawbone under computerized local anesthesia to ensure a painless experience.
          </li>
          <li>
            <strong>Osseointegration:</strong>
            <br />
            Over a period of 3 to 6 months, the jawbone naturally grows and fuses around the titanium implant, creating an unbreakable anchor.
          </li>
          <li>
            <strong>Crown Placement:</strong>
            <br />
            A custom porcelain or zirconia crown is securely attached, instantly restoring your chew capability and smile aesthetics.
          </li>
        </ol>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Interested in permanent tooth replacement? Book a diagnostic checkup at YOUR DENTIST Patna to receive a customized implant treatment blueprint. We offer zero-interest EMI financing plans for your comfort.
          </p>
        </div>
      </div>
    )
  },
  {
    slug: "painless-root-canal-in-patna",
    title: "Painless Root Canal Treatment in Patna: Technology & Timelines",
    category: "Endodontics",
    readTime: "4 min read",
    publishDate: "June 25, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Worried about root canal pain? Discover how computerized micro-dentistry makes root canal treatments (RCT) painless, fast, and comfortable at YOUR DENTIST.",
    featuredImage: "/assets/yourdentist/painless_root_canal.png",
    metaDescription: "Worried about root canal pain? Learn about painless root canal treatment (RCT) in Patna using advanced rotary tools and single-visit procedures at YOUR DENTIST.",
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer: "No. With advanced local anesthetics and computerized rotary instruments, modern root canal treatment is completely painless and feels similar to receiving a standard dental filling."
      },
      {
        question: "Can a root canal be completed in a single visit?",
        answer: "Yes. For many cases where infection has not spread severely, we perform single-visit root canal treatments at YOUR DENTIST Patna, saving you multiple clinic trips."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          A severe toothache is often a sign that dental decay has reached the pulp—the innermost chamber containing nerves and blood vessels. When this happens, a root canal is the only way to save your natural tooth. If you are anxious about the procedure, here is why modern <strong>root canal treatment in Patna</strong> is completely painless.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">How Modern Technology Removes the Pain</h2>
        <p className="text-neutral-700 leading-relaxed">
          The days of noisy, uncomfortable dental procedures are gone. At YOUR DENTIST Patliputra Colony, we employ cutting-edge endodontic systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Computerized Local Anesthesia:</strong> Pre-programmed micro-delivery ensures targeted numbing with zero sting.</li>
          <li><strong>Rotary Endodontics:</strong> Flexible nickel-titanium files clean the root canal system faster and far more smoothly than manual hand files.</li>
          <li><strong>Digital Apex Locators:</strong> High-precision electronic trackers calculate root lengths instantly, preventing over-instrumentation and post-op soreness.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">RCT vs. Tooth Extraction</h2>
        <p className="text-neutral-700 leading-relaxed">
          Many patients ask if they should simply pull the painful tooth. Saving your natural tooth is always the superior health choice. Extracted teeth cause neighboring teeth to drift, resulting in bite misalignment and chewing difficulties. A root canal saves the tooth structure, which is then reinforced with a custom porcelain crown to restore 100% chew capacity.
        </p>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Don't let dental pain disrupt your life. Schedule a digital diagnostics scan and consultation with Dr. Aryan Parmar to relieve your pain safely and comfortably.
          </p>
        </div>
      </div>
    )
  }
];

