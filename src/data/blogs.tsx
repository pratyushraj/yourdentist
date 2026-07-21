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
    slug: "kids-painless-tooth-extraction-patna",
    title: "Painless Kids Tooth Extraction in Patna: A Gentle, Fear-Free Experience",
    category: "Pediatric Dentistry",
    readTime: "4 min read",
    publishDate: "July 21, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Is your child afraid of tooth extractions? See how Dr. Aryan Parmar at YOUR DENTIST Patna makes milk tooth and permanent tooth extractions completely painless, comfortable, and stress-free for kids.",
    featuredImage: "/assets/yourdentist/kids_tooth_extraction.png",
    metaDescription: "Gentle and painless milk tooth extraction for kids at YOUR DENTIST Patna by Dr. Aryan Parmar. Read pediatric dental care tips, post-extraction advice, and space maintainers guidance.",
    faqs: [
      {
        question: "Is milk tooth extraction painful for kids?",
        answer: "No. At YOUR DENTIST Patna, we apply a flavored topical numbing gel to the gums first so your child doesn't even feel the local anesthesia pinch. The extraction itself is completed in seconds with zero pain."
      },
      {
        question: "When does a child need a milk tooth extracted?",
        answer: "A milk tooth (deciduous tooth) is extracted if it has severe decay beyond repair, an abscess/infection, or if it is an over-retained tooth blocking the normal eruption path of the underlying permanent tooth."
      },
      {
        question: "What should kids eat after a tooth extraction?",
        answer: "For the first 24 hours, children should eat soft, cool foods like ice cream, yogurt, mashed potatoes, or cold smoothies. Avoid hot soups, crunchy chips, or drinking through a straw to allow proper blood clot formation."
      },
      {
        question: "What is a space maintainer and when is it needed?",
        answer: "If a milk tooth is extracted prematurely due to cavity or trauma long before the permanent tooth is ready to emerge, a space maintainer appliance is placed to hold the gap open so surrounding teeth don't shift."
      },
      {
        question: "How do you handle dental anxiety in young children?",
        answer: "Dr. Aryan Parmar uses child-friendly communication (the 'Tell-Show-Do' technique), positive reinforcement, and a calm clinic environment. Children leave with a happy smile and a bravery thumbs-up!"
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Dental visits can be intimidating for young children — especially when a stubborn milk tooth needs to come out. However, with modern pediatric dental techniques, gentle behavior management, and painless numbing gels, <strong>a child's tooth extraction can be a completely positive, fear-free milestone</strong>.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          At <strong>YOUR DENTIST, New Patliputra Colony</strong>, Dr. Aryan Parmar provides specialized child dentistry (pediatric care) that ensures young patients feel safe, brave, and comfortable throughout their visit.
        </p>

        {/* Featured Patient Photo */}
        <div className="rounded-2xl overflow-hidden border border-neutral-200 my-6 shadow-lg max-w-md mx-auto bg-white">
          <img
            src="/assets/yourdentist/kids_tooth_extraction.png"
            alt="Brave young patient giving a thumbs up in the dental chair after painless milk tooth extraction by Dr. Aryan Parmar at YOUR DENTIST Patna"
            className="w-full object-cover"
          />
          <div className="p-3 bg-neutral-50 text-center border-t border-neutral-100">
            <p className="text-xs font-bold text-neutral-800">
              Brave Champion! Thumbs Up After a 100% Painless Tooth Extraction with Dr. Aryan Parmar
            </p>
            <p className="text-[10px] text-neutral-500 mt-0.5">
              YOUR DENTIST Patna — Gentle Pediatric & Family Dental Care
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why Do Milk Teeth Sometimes Need Extraction?</h2>
        <p className="text-neutral-700 leading-relaxed">
          While we always aim to preserve natural baby teeth until they fall out on their own, certain conditions require clinical removal to protect your child’s permanent smile:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Over-Retained Milk Teeth:</strong> When a baby tooth refuses to loosen, causing the permanent tooth to erupt behind it (double row of teeth or "shark teeth").</li>
          <li><strong>Severe Tooth Decay:</strong> Deep cavities that have extended beyond what a pediatric root canal (pulpotomy) or filling can repair.</li>
          <li><strong>Dental Infection or Abscess:</strong> Infection at the root tip that could damage the developing permanent tooth underneath.</li>
          <li><strong>Orthodontic Crowding:</strong> Removing over-crowded teeth to create space for braces or clear aligners.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Our Gentle 4-Step Kids Extraction Process</h2>
        <ol className="list-decimal pl-6 space-y-4 text-neutral-700">
          <li>
            <strong>Friendly Consultation & 'Tell-Show-Do':</strong> We explain everything to your child in fun, friendly terms so there are no surprises or scary medical jargon.
          </li>
          <li>
            <strong>Flavored Topical Numbing Gel:</strong> A pleasant fruit-flavored gel is applied to the gums to completely numb the surface before any local anesthesia is administered.
          </li>
          <li>
            <strong>Micro-Gentle Removal:</strong> Using specialized pediatric instruments, Dr. Aryan gently loosens and removes the tooth in just a few seconds.
          </li>
          <li>
            <strong>Ice Cream & Bravery Celebration:</strong> The patient bites on a sterile gauze pad, receives post-op instructions, and gets to enjoy cold ice cream to soothe the area!
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Post-Extraction Care Tips for Parents</h2>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4">
          <p className="text-sm font-semibold text-neutral-800 mb-2">
            🍦 <strong>Parent Checklist After Extraction:</strong>
          </p>
          <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1">
            <li>Keep the gauze pad in place for 30 minutes with gentle biting pressure.</li>
            <li>Give cool, soft foods (ice cream, custard, cold milk) for the rest of the day.</li>
            <li>Do NOT allow drinking through a straw or forceful spitting for 24 hours.</li>
            <li>Ensure your child does not bite their numb cheek or lip while the anesthesia wears off.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Book a Gentle Pediatric Checkup in Patna</h2>
        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Is your child experiencing tooth pain or loose milk teeth? Visit <strong>YOUR DENTIST, New Patliputra Colony, Patna</strong>. Call <strong>062014 78033</strong> or <strong>6201478043</strong> to schedule a gentle, child-friendly appointment with Dr. Aryan Parmar.
          </p>
        </div>
      </div>
    )
  },

  {
    slug: "rct-tooth-infection-healed-patna",
    title: "Tooth Infection Healed by Painless Root Canal (RCT) in Patna: Video & Case Study",
    category: "Endodontics",
    readTime: "4 min read",
    publishDate: "July 21, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Experiencing severe toothache, gum swelling, or pus from a deep infection? Watch how computerized rotary Root Canal Treatment (RCT) at YOUR DENTIST Patna saved the natural tooth and completely healed the infection.",
    featuredImage: "/assets/yourdentist/exterior_day.jpg",
    metaDescription: "Watch real clinical video of a severe tooth infection healed by painless Root Canal Treatment (RCT) at YOUR DENTIST Patna by Dr. Aryan Parmar. Read symptoms, treatment steps, and recovery tips.",
    faqs: [
      {
        question: "Can a root canal heal a tooth infection completely?",
        answer: "Yes! Root Canal Treatment (RCT) physically removes the infected pulp, bacteria, and nerve tissue inside the root canals. The canal is then thoroughly disinfected with antibacterial irrigants, sealed with gutta-percha, and topped with a crown to prevent re-infection."
      },
      {
        question: "Is root canal treatment for an infected tooth painful?",
        answer: "No. At YOUR DENTIST Patna, RCT is performed using painless computerized local anesthesia. Once the area is numb, you will feel zero pain during the procedure. Relief from severe toothache is often immediate once the pressure inside the infected pulp is released."
      },
      {
        question: "How long does it take for a tooth infection to heal after RCT?",
        answer: "Most acute pain subsides within 24 to 48 hours after the first sitting. Any surrounding gum swelling or bone infection heals completely within 1 to 2 weeks as the body naturally resorbs inflammation."
      },
      {
        question: "How many sittings are needed for an RCT on an infected tooth?",
        answer: "In cases with active infection or swelling, a 2-sitting RCT is typically recommended. The first sitting cleans and places antibacterial medication inside the tooth. The second sitting (after 3–5 days) seals the canals and prepares the tooth for a porcelain or zirconia crown."
      },
      {
        question: "What is the cost of Root Canal Treatment in Patna?",
        answer: "RCT at YOUR DENTIST Patna starts from ₹3,000 to ₹5,500 depending on whether it is a front tooth or a multi-rooted molar, and whether single-visit rotary endodontics is selected."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          A deep toothache is rarely just a cavity — when bacteria penetrate through enamel and dentin into the dental pulp, it causes a painful, throbbing <strong>root canal infection</strong>. If left untreated, the infection can spread into the surrounding jawbone, causing severe swelling, pus discharge, and eventual tooth loss.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          At <strong>YOUR DENTIST, New Patliputra Colony</strong>, Dr. Aryan Parmar specializes in <strong>painless rotary root canal treatments (RCT)</strong> that eliminate infection while saving your natural tooth.
        </p>

        {/* Clinical Video Component */}
        <div className="rounded-2xl overflow-hidden border border-neutral-200 my-6 shadow-lg max-w-sm mx-auto bg-neutral-950">
          <video
            src="/assets/yourdentist/rct_infection_healed.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-[9/16] object-cover"
          />
          <div className="p-3 bg-neutral-900 text-white text-center">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Clinical Video Case: Painless RCT & Complete Infection Healing
            </p>
            <p className="text-[10px] text-neutral-400 mt-1">
              Demonstrating full healing and natural tooth preservation by Dr. Aryan Parmar
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Signs Your Tooth Has a Deep Infection</h2>
        <p className="text-neutral-700 leading-relaxed">
          You should consult a dentist immediately if you experience any of the following symptoms:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Severe, Throbbing Tooth Pain:</strong> Especially when biting, chewing, or lying down at night.</li>
          <li><strong>Pimple-like Bump on Gums:</strong> A gum boil or fistula discharging pus or bad taste.</li>
          <li><strong>Extreme Sensitivity:</strong> Lingering pain after eating hot or cold foods and liquids.</li>
          <li><strong>Dark Discoloration:</strong> The tooth turns greyish or yellow-brown due to dead pulp tissue inside.</li>
          <li><strong>Swollen Jaw or Face:</strong> Facial swelling indicating that bacteria has spread into soft tissues.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">How Rotary RCT Heals the Infection</h2>
        <p className="text-neutral-700 leading-relaxed">
          Unlike traditional manual root canals that were slow and uncomfortable, Dr. Aryan Parmar utilizes <strong>computerized rotary endodontics</strong>:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-neutral-700">
          <li>
            <strong>Painless Local Anesthesia:</strong> Computerized delivery ensures 100% pain-free numbness before any work begins.
          </li>
          <li>
            <strong>Pulp & Infection Removal:</strong> Flexible nickel-titanium (NiTi) rotary instruments clean out infected nerve tissue and bacteria down to the apex of the root.
          </li>
          <li>
            <strong>Medicament & Sterilization:</strong> Antibacterial calcium hydroxide medicament is placed inside the root canal to neutralize deep-seated bacteria and promote bone healing.
          </li>
          <li>
            <strong>Hermetic Sealing & Crown Placement:</strong> Canals are sealed with bio-compatible gutta-percha. A high-strength Zirconia or Porcelain crown is fitted to restore 100% chewing force.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why Save Your Natural Tooth?</h2>
        <p className="text-neutral-700 leading-relaxed">
          Nothing looks, feels, or functions as well as a natural tooth. Saving your tooth with an RCT prevents neighboring teeth from drifting out of alignment, preserves jawbone structure, and eliminates the higher cost of extractions and dental implants.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Schedule a Painless Emergency Consultation</h2>
        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            If you are suffering from severe tooth pain or gum swelling in Patna, don't wait for the infection to worsen. Visit <strong>YOUR DENTIST, New Patliputra Colony</strong>. Call <strong>062014 78033</strong> or <strong>6201478043</strong> for emergency RCT appointment booking with Dr. Aryan Parmar.
          </p>
        </div>
      </div>
    )
  },

  {
    slug: "instant-smile-makeover-patna",
    title: "60-Minute Smile Makeover: Instant Composite Bonding & Scaling in Patna",
    category: "Cosmetic Dentistry",
    readTime: "4 min read",
    publishDate: "July 17, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Can you get a perfect smile in just one sitting? Learn how professional dental scaling combined with direct composite bonding can fix gaps, chips, tartar, and staining in under 60 minutes at YOUR DENTIST Patna.",
    featuredImage: "/assets/yourdentist/instant_transformation_card.png",
    metaDescription: "Discover how single-visit composite bonding and deep scaling at YOUR DENTIST Patna can instantly transform your smile in just 60 minutes. Read our real patient case study.",
    faqs: [
      {
        question: "How long does a composite bonding procedure take?",
        answer: "At YOUR DENTIST Patna, direct composite bonding takes about 30 to 60 minutes per tooth. For a full front-teeth smile makeover (closing multiple gaps and smoothing edges), the entire procedure is completed in a single session of 1 to 2 hours."
      },
      {
        question: "Does dental scaling remove enamel or weaken teeth?",
        answer: "No. Professional ultrasonic dental scaling only removes hardened tartar (calculus) and plaque deposits from the tooth surface. It does not affect or damage your natural tooth enamel. In fact, scaling is essential to prevent gum disease and bone loss."
      },
      {
        question: "How long do composite veneers or bonding last?",
        answer: "With good oral hygiene (regular brushing, flossing, and 6-month checkups), composite bonding typically lasts between 3 to 7 years. Unlike porcelain veneers, they can be easily touched up or polished if they stain or chip over time."
      },
      {
        question: "Is the 60-minute smile makeover painful?",
        answer: "No, the procedure is completely painless. Professional scaling might cause mild, temporary sensitivity, but composite bonding requires zero drilling or tooth shaving, meaning no needles or anesthesia are necessary."
      },
      {
        question: "What is the cost of composite bonding in Patna?",
        answer: "Composite bonding at YOUR DENTIST Patna starts from ₹2,500 to ₹4,500 per tooth depending on the complexity of the gap closure or tooth reconstruction. Schedule a free consultation to get an exact estimate."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Many people believe that correcting dental gaps, removing stubborn stains, or replacing chipped teeth requires multiple clinic visits, temporary crowns, and weeks of waiting. However, with modern adhesive dentistry, a <strong>complete smile transformation can happen in just under 60 minutes</strong>. 
        </p>
        <p className="text-neutral-700 leading-relaxed">
          At <strong>YOUR DENTIST, New Patliputra Colony</strong>, Dr. Aryan Parmar frequently performs single-visit smile makeovers using a combination of professional ultrasonic scaling (teeth cleaning) and direct composite bonding.
        </p>
        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Dual Approach: Clean first, then Bond</h2>
        <p className="text-neutral-700 leading-relaxed">
          For an instant smile makeover to look natural and last long, the foundation must be perfectly clean. That is why Dr. Aryan Parmar uses a dual-step clinical protocol:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-neutral-700">
          <li>
            <strong>Ultrasonic Scaling & Polishing:</strong> Hardened tartar (calculus) builds up at the gum line over time, causing dark stains and bleeding gums. We use micro-vibrational ultrasonic tips to instantly release these deposits and wash them away.
          </li>
          <li>
            <strong>Direct Composite Artistry:</strong> Once the teeth are clean and dry, a biocompatible dental composite resin is shade-matched to the natural teeth. Dr. Aryan manually sculpts this resin to close gaps, rebuild worn edges, or replace missing tooth structure in real-time.
          </li>
        </ol>

        {/* Vertical Before/After Image */}
        <div className="rounded-2xl overflow-hidden border border-neutral-100 my-6 shadow-sm max-w-md mx-auto">
          <img
            src="/assets/yourdentist/scaling_bonding_before_after.jpg"
            alt="Before and After dental scaling and broken tooth replacement with a premium Zirconia crown at YOUR DENTIST Patna"
            className="w-full object-cover"
          />
          <p className="text-center text-xs text-neutral-400 py-2 bg-neutral-50">
            Case 2: Heavy tartar/calculus scaling and gum treatment, combined with a premium CAD/CAM Zirconia Crown to replace a broken upper front tooth.
          </p>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">Case study details: Broken Tooth & Deep Scaling</h3>
        <p className="text-neutral-700 leading-relaxed">
          In Case 2 shown above, the patient had two major dental challenges: a broken central incisor (front tooth) and severe calculus (tartar) build-up with inflamed gums along the lower arch. 
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Dr. Aryan Parmar performed full-mouth ultrasonic scaling to restore gum health and remove the dark deposits. The broken front tooth was then prepared and restored using a metal-free, premium <strong>Zirconia Crown</strong>. Engineered using CAD/CAM technology, the Zirconia crown mimics natural light transmission and tooth shading perfectly while offering maximum chewing durability.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why Choose an Instant Smile Makeover?</h2>
        <p className="text-neutral-700 leading-relaxed">
          Direct composite bonding and scaling offers several distinct clinical advantages over traditional treatments like crowns or braces:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>No Tooth Prep / Drilling:</strong> Unlike porcelain veneers or crowns, composite bonding does not require shaving down your healthy enamel. Your natural tooth structure remains completely intact.</li>
          <li><strong>Single Appointment:</strong> Completed in just one visit. You walk in with self-consciousness and walk out with a brand-new smile.</li>
          <li><strong>Zero Pain:</strong> Because it is non-invasive, no anesthesia or injections are needed.</li>
          <li><strong>Highly Budget-Friendly:</strong> An excellent alternative to orthodontic braces or porcelain laminates, especially for closing minor midline gaps (diastemas).</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Post-Treatment Care for Composite Bonding</h2>
        <p className="text-neutral-700 leading-relaxed">
          While modern composite materials are incredibly strong, they are made of a dental resin that requires basic care to keep looking shiny and stain-free:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li>Avoid biting directly into very hard foods (like bones, hard candy, or ice) with your front bonded teeth.</li>
          <li>Minimize foods and drinks that cause heavy staining, such as black coffee, tea, and turmeric-heavy dishes, or rinse your mouth immediately after consuming them.</li>
          <li>Brush twice daily with a soft-bristled toothbrush and use non-abrasive toothpaste.</li>
          <li>Visit your dentist every 6 months for a routine polish to maintain the composite’s natural luster.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Get a Free Smile Assessment Today</h2>
        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            If you want to instantly fix gaps, staining, or chipped teeth, visit <strong>YOUR DENTIST, New Patliputra Colony, Patna</strong>. Call our team at <strong>6201478043</strong> or <strong>6201478033</strong> to secure your slot for a personalized consultation with Dr. Aryan Parmar.
          </p>
        </div>
      </div>
    )
  },

  {
    slug: "dental-implant-case-study-patna-missing-teeth",
    title: "Real Patient Story: Replacing 2 Missing Teeth with Dental Implants in Patna",
    category: "Implants",
    readTime: "5 min read",
    publishDate: "July 11, 2026",
    author: "Dr. Aryan Parmar",
    summary: "A real patient came to YOUR DENTIST with two missing lower front teeth. See the complete before-and-after of a dual dental implant procedure performed by Dr. Aryan Parmar using premium DENTIS titanium implants.",
    featuredImage: "/assets/yourdentist/implant_case_before_after.png",
    metaDescription: "Real before-and-after case of 2 missing teeth replaced with dental implants at YOUR DENTIST Patna. See the procedure, DENTIS implant technology, and final ceramic crown results by Dr. Aryan Parmar.",
    faqs: [
      {
        question: "How many sittings does a dental implant take in Patna?",
        answer: "A standard dental implant at YOUR DENTIST Patna involves 2–3 sittings: the implant placement surgery, a healing/osseointegration period of 2–4 months, and the final crown fitting. The surgical session itself takes 45–90 minutes depending on the number of implants."
      },
      {
        question: "Is dental implant surgery painful?",
        answer: "Dental implant surgery at YOUR DENTIST is performed under strong local anaesthesia — you will feel zero pain during the procedure. Mild soreness for 2–3 days after surgery is normal and is easily managed with prescribed pain relief. Most patients return to work the very next day."
      },
      {
        question: "How much do dental implants cost in Patna?",
        answer: "Dental implants at YOUR DENTIST Patna start from ₹25,000 per tooth using premium DENTIS implants from South Korea. 0% EMI financing is available through Bajaj Finance. The cost includes implant placement, healing abutment, and final ceramic crown."
      },
      {
        question: "How long do dental implants last?",
        answer: "With proper oral hygiene — brushing twice daily, regular 6-month checkups, and avoiding hard foods — dental implants can last 15–25 years or even a lifetime. The titanium post fuses with the jawbone permanently through a process called osseointegration."
      },
      {
        question: "What brand of implants does YOUR DENTIST use?",
        answer: "YOUR DENTIST uses DENTIS implants — a premium South Korean implant system. Dr. Aryan Parmar holds a Clinical Implant Mastership from DENTIS and a Fellowship in Implantology from South Korea, giving him specialized expertise in this implant system."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Missing teeth are more than just a cosmetic concern — they affect chewing, speech, and even jawbone density over time. When this patient from Patna walked into <strong>YOUR DENTIST, New Patliputra Colony</strong>, they had two missing lower front teeth that had been left untreated for over a year. Dr. Aryan Parmar evaluated the case and recommended <strong>two individual dental implants</strong> — the gold-standard, permanent solution for missing teeth.
        </p>

        {/* Before/After Image */}
        <div className="rounded-2xl overflow-hidden border border-neutral-100 my-6 shadow-sm">
          <img
            src="/assets/yourdentist/implant_case_before_after.png"
            alt="Before and after dental implant case at YOUR DENTIST Patna — two missing lower teeth replaced with DENTIS titanium implants and ceramic crowns by Dr. Aryan Parmar"
            className="w-full object-cover"
          />
          <p className="text-center text-xs text-neutral-400 py-2 bg-neutral-50">
            Real Patient Case: <strong>Before</strong> (titanium abutment posts placed) → <strong>After</strong> (ceramic crowns fitted, smile fully restored) | YOUR DENTIST Patna
          </p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Problem: Two Missing Lower Teeth</h2>
        <p className="text-neutral-700 leading-relaxed">
          The patient presented with two adjacent missing teeth in the lower front region of the jaw. The remaining teeth had begun to shift slightly toward the gap — a common and accelerating problem when missing teeth are left untreated. The patient reported difficulty chewing, self-consciousness while smiling, and mild speech difficulty.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4">
          <p className="text-sm font-semibold text-neutral-800">
            ⚠️ <strong>Did You Know?</strong> Leaving a missing tooth untreated for over 6 months causes the jawbone to shrink (resorb) below the gap — making future implant placement harder and sometimes requiring a bone graft. Early treatment is always better.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Solution: DENTIS Titanium Implants</h2>
        <p className="text-neutral-700 leading-relaxed">
          After reviewing the patient's CBCT (3D jaw X-ray) scan and bone density measurements, Dr. Aryan Parmar confirmed that bone volume was sufficient for direct implant placement — no bone grafting required. Two <strong>DENTIS titanium implants</strong> (South Korea) were selected for this case.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-3">
          <li><strong>DENTIS Implants:</strong> Premium South Korean titanium implant brand — known for superior osseointegration rates and long-term stability. Dr. Parmar holds a Clinical Mastership from DENTIS.</li>
          <li><strong>Minimally Invasive Surgery:</strong> Guided implant placement with a surgical stent ensures precise positioning with minimal tissue disruption.</li>
          <li><strong>Single-Stage Protocol:</strong> Healing abutments were placed at the same time as the implants, reducing the total number of surgical visits.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step-by-Step: What Happened at YOUR DENTIST</h2>
        <ol className="list-decimal pl-6 space-y-4 text-neutral-700">
          <li>
            <strong>Consultation & 3D Scan (Day 1):</strong> CBCT scan taken to assess bone height, width, and nerve proximity. Treatment plan created and shared with the patient with full cost transparency.
          </li>
          <li>
            <strong>Implant Placement Surgery (Day 2):</strong> Under local anaesthesia, two small titanium posts were drilled into the jawbone at precise angles and depths as planned. The entire surgery took under 60 minutes. The patient felt no pain during the procedure.
          </li>
          <li>
            <strong>Osseointegration — Healing Phase (Weeks 6–12):</strong> The titanium implants fused with the surrounding bone (osseointegration). Temporary guidance was provided for diet and care during this period.
          </li>
          <li>
            <strong>Final Crown Fitting (Day of Completion):</strong> Custom-shade-matched ceramic crowns were attached to the healed implant abutments. The patient left the clinic with a fully restored, natural-looking smile — as seen in the "After" photo above.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Result: A Complete, Natural Smile</h2>
        <p className="text-neutral-700 leading-relaxed">
          As visible in the clinical photograph above, the two ceramic implant crowns blend seamlessly with the patient's natural teeth. The shape, shade, and spacing were custom-designed to match the upper arch. The patient reported immediate improvement in chewing ability, speech, and confidence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 text-center">
            <span className="block text-2xl font-black text-neutral-900">2</span>
            <span className="block text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-1">Implants Placed</span>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 text-center">
            <span className="block text-2xl font-black text-neutral-900">~10 Weeks</span>
            <span className="block text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-1">Total Treatment Time</span>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 text-center">
            <span className="block text-2xl font-black text-neutral-900">Zero</span>
            <span className="block text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-1">Pain During Surgery</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why Dental Implants Are the Best Option for Missing Teeth</h2>
        <p className="text-neutral-700 leading-relaxed">
          Unlike removable dentures or fixed bridges, <strong>dental implants are the only solution that replaces both the root and the crown</strong>. This is critical because it's the root that stimulates the jawbone and prevents bone loss.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100">
                <th className="px-4 py-3 font-bold text-neutral-800 rounded-tl-xl">Feature</th>
                <th className="px-4 py-3 font-bold text-[#5b72ff]">Implants ✓</th>
                <th className="px-4 py-3 font-bold text-neutral-500">Bridge</th>
                <th className="px-4 py-3 font-bold text-neutral-500 rounded-tr-xl">Denture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="px-4 py-3 font-medium text-neutral-700">Bone Loss Prevention</td>
                <td className="px-4 py-3 text-green-600 font-bold">✅ Yes</td>
                <td className="px-4 py-3 text-red-500">❌ No</td>
                <td className="px-4 py-3 text-red-500">❌ No</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 font-medium text-neutral-700">Natural Feel</td>
                <td className="px-4 py-3 text-green-600 font-bold">✅ Yes</td>
                <td className="px-4 py-3 text-yellow-600">⚠️ Partial</td>
                <td className="px-4 py-3 text-red-500">❌ No</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-neutral-700">Adjacent Teeth Affected</td>
                <td className="px-4 py-3 text-green-600 font-bold">✅ None</td>
                <td className="px-4 py-3 text-red-500">❌ Shaved</td>
                <td className="px-4 py-3 text-green-600 font-bold">✅ None</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 font-medium text-neutral-700">Lifespan</td>
                <td className="px-4 py-3 text-green-600 font-bold">✅ 15–25+ yrs</td>
                <td className="px-4 py-3 text-yellow-600">⚠️ 7–10 yrs</td>
                <td className="px-4 py-3 text-yellow-600">⚠️ 3–5 yrs</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-neutral-700">Eating Comfort</td>
                <td className="px-4 py-3 text-green-600 font-bold">✅ Full</td>
                <td className="px-4 py-3 text-yellow-600">⚠️ Good</td>
                <td className="px-4 py-3 text-red-500">❌ Limited</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Book a Free Implant Assessment in Patna</h2>
        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Are you missing one or more teeth? Don't wait — the longer you wait, the more bone you lose. Visit <strong>YOUR DENTIST, New Patliputra Colony, Patna</strong> for a free implant consultation. Dr. Aryan Parmar will review your CBCT scan, assess bone density, and provide a full treatment plan with transparent pricing. Call <strong>062014 78033</strong> or walk in during clinic hours (Mon–Sat, 10 AM – 8 PM).
          </p>
        </div>
      </div>
    )
  },

  {
    slug: "free-dental-camp-patna-community-dentistry",
    title: "Free Dental Camp in Patna: Community Health Initiative by YOUR DENTIST",
    category: "Community Service",
    readTime: "4 min read",
    publishDate: "July 11, 2026",
    author: "Dr. Aryan Parmar",
    summary: "YOUR DENTIST organized a Free Dental Camp in Patna to check, diagnose, and guide local families on oral hygiene. Read about the event highlights, key findings, and future camp schedules.",
    featuredImage: "/assets/yourdentist/dental_camp.jpg",
    metaDescription: "Read about the Free Dental Camp in Patna hosted by YOUR DENTIST. Free oral health screening, expert diagnostic sessions, and community dental care schedules.",
    faqs: [
      {
        question: "When is the next free dental camp in Patna?",
        answer: "YOUR DENTIST Patna organizes community dental camps periodically. To receive notifications on future schedules, registration links, and checkup slots, call our front desk at 062014 78033 or subscribe to our newsletter."
      },
      {
        question: "What is included in the free dental checkup camp?",
        answer: "Our free checkup camps include visual oral screening, dental diagnostics, dental hygiene guidance, orthodontic assessments, and custom treatment planning. Basic procedures are also offered at exclusive camp discounts."
      },
      {
        question: "Where was the dental camp held in Patna?",
        answer: "Our recent free oral screening camp was held in the local Patliputra Colony community center to provide easy diagnostic access to families, children, and elderly residents in North and West Patna."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Access to high-quality dental care is a cornerstone of a healthy community. To support families in Patna and raise awareness about oral health, the clinical team at <strong>YOUR DENTIST, New Patliputra Colony</strong>, successfully hosted a comprehensive <strong>Free Dental Camp in Patna</strong>. Led by Dr. Aryan Parmar and senior dental associates, the camp focused on visual oral screenings, expert diagnostics, and education on preventing oral diseases.
        </p>

        <div className="rounded-2xl overflow-hidden border border-neutral-100 my-6">
          <img
            src="/assets/yourdentist/dental_camp.jpg"
            alt="Dr. Aryan Parmar and clinical team at the Free Dental Camp in Patna hosted by YOUR DENTIST"
            className="w-full object-cover"
          />
          <p className="text-center text-xs text-neutral-400 py-2 bg-neutral-50">Community Outreach: Dr. Aryan Parmar and team receiving flowers at the Free Dental Camp in Patna</p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Highlights & Patient Impact</h2>
        <p className="text-neutral-700 leading-relaxed">
          The event was open to all local residents, with a particular focus on children, teenagers, and elderly citizens who benefit from early preventive diagnostics. Here are the key highlights of the day:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>150+ Patient Screenings:</strong> Over 150 local residents received free visual diagnostics and clinical assessments.</li>
          <li><strong>Orthodontic Screening:</strong> Specialized screening for kids and teenagers to identify early signs of teeth misalignment and recommend braces or clear aligners.</li>
          <li><strong>Hygiene Kits & Education:</strong> Free dental hygiene kits (brushes, pastes, and clinical guides) were distributed to raise awareness on brushing techniques and plaque control.</li>
        </ul>

        <div className="rounded-2xl overflow-hidden border border-neutral-100 my-6">
          <img
            src="/assets/yourdentist/dental_camp_team.png"
            alt="YOUR DENTIST Patna clinical staff and doctors at the free dental camp event"
            className="w-full object-cover"
          />
          <p className="text-center text-xs text-neutral-400 py-2 bg-neutral-50">Team Dedication: Our doctors, clinical staff, and support team at the camp venue</p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Common Oral Health Findings in Patna</h2>
        <p className="text-neutral-700 leading-relaxed">
          During the screening camp, our diagnostic board identified several recurring oral health issues among Patna residents:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-neutral-700">
          <li>
            <strong>Early Stage Cavities (Teens & Young Adults):</strong> Caused by high sugar intake and inconsistent brushing habits. These can be treated with simple fillings before they require painful root canals.
          </li>
          <li>
            <strong>Plaque Accumulation & Gingivitis:</strong> Gum bleeding and tartar build-up were found in over 60% of screened adults. Professional scaling (teeth cleaning) every 6 months was highly recommended to prevent gum deterioration.
          </li>
          <li>
            <strong>Gaps & Bite Misalignment:</strong> Many teenagers presented with untreated diastema (gaps) and orthodontic issues, which can be easily resolved using modern cosmetic bonding or invisible aligners.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Join Our Next Community Dental Initiative</h2>
        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            YOUR DENTIST is committed to raising oral health standards in Patna. If you want us to host a free screening camp in your school, society, or corporate office, please get in touch with our team at <strong>062014 78033</strong> or visit our clinic at Tara Kunj, New Patliputra Colony.
          </p>
        </div>
      </div>
    )
  },
  {
    slug: "composite-veneers-patna-smile-makeover",
    title: "Composite Veneers in Patna: The Fast Path to a Perfect Smile",
    category: "Smile Makeover",
    readTime: "5 min read",
    publishDate: "July 9, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Want to fix chipped, discolored, or gapped teeth without waiting weeks? Discover how composite veneers at YOUR DENTIST Patna can completely transform your smile in just one visit.",
    featuredImage: "/assets/yourdentist/composite_veneers_case.png",
    metaDescription: "Get the smile of your dreams with composite veneers in Patna at YOUR DENTIST. Read our case study, compare costs with porcelain veneers, and book your smile makeover today.",
    faqs: [
      {
        question: "What are composite veneers?",
        answer: "Composite veneers are thin layers of tooth-colored composite resin applied directly to the front surface of your teeth to correct gaps, chips, stains, or minor misalignments in a single visit."
      },
      {
        question: "How long do composite veneers last?",
        answer: "Typically, composite veneers last between 4 to 8 years depending on your oral hygiene, diet, and habits (like teeth grinding or drinking coffee). They can be easily repaired or polished if they chip or stain over time."
      },
      {
        question: "What is the difference between composite and porcelain veneers?",
        answer: "Composite veneers are built directly on your teeth in a single visit, require minimal tooth preparation (no drilling), and are highly affordable. Porcelain veneers are custom-made in a laboratory, require two visits, have higher stain-resistance, and last 10–15 years."
      },
      {
        question: "How much do veneers cost in Patna?",
        answer: "The cost of veneers in Patna depends on the material (composite vs. porcelain) and the number of teeth treated. At YOUR DENTIST, we provide clear, transparent pricing during your initial diagnostic scan. We also offer 0% EMI payment options through Bajaj Finance."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          If you have ever felt self-conscious about gaps, discolorations, or chips in your front teeth, you are not alone. A beautiful smile is a key part of your self-confidence. Traditional cosmetic dental options often require multiple diagnostic visits and tooth shaving. Today, however, <strong>composite veneers in Patna</strong> offer a fast, conservative, and highly aesthetic solution that can be completed in a single afternoon.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Real Patient Case Study: Diastema & Aesthetic Alignment</h2>
        <p className="text-neutral-700 leading-relaxed">
          At <strong>YOUR DENTIST, New Patliputra Colony</strong>, we recently treated a patient who wanted to fix a dark gap between her front teeth and improve the shape of her central incisors. She was looking for a solution that was non-invasive, fast, and within a moderate budget. 
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Dr. Aryan Parmar recommended direct composite veneers. The result speaks for itself:
        </p>

        <div className="rounded-2xl overflow-hidden border border-neutral-100 my-6">
          <img
            src="/assets/yourdentist/composite_veneers_case.png"
            alt="Composite veneers before and after transformation at YOUR DENTIST Patna"
            className="w-full object-cover"
          />
          <p className="text-center text-xs text-neutral-400 py-2 bg-neutral-50">Before (Left) vs After (Right): Front teeth gap closure and cosmetic alignment using composite veneers</p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step-by-Step Procedure at YOUR DENTIST</h2>
        <p className="text-neutral-700 leading-relaxed">
          Unlike laboratory-made porcelain veneers, direct composite veneers are crafted artistically by the dentist directly on your teeth. Here is how Dr. Aryan Parmar completes the process:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-neutral-700">
          <li>
            <strong>Digital Diagnostics & Planning:</strong> We analyze your smile architecture to match the length, width, and proportions of your natural teeth.
          </li>
          <li>
            <strong>Teeth Cleaning & Prep:</strong> The teeth are thoroughly cleaned and polished. A mild conditioning gel is applied to ensure a strong chemical bond — no tooth reduction or drilling is required.
          </li>
          <li>
            <strong>Resin Layering:</strong> Using premium composite materials, Dr. Aryan carefully builds up the veneers layer by layer, shaping the margins to close gaps and fix misalignments.
          </li>
          <li>
            <strong>Curing & Hardening:</strong> A special ultraviolet curing light is used to dry and set the composite resin in seconds.
          </li>
          <li>
            <strong>Sculpting & High-Shine Polishing:</strong> The veneers are polished using specialized micro-grain disks to mimic the natural gloss and light reflection of real enamel.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Composite vs. Porcelain Veneers: Which is right for you?</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-100">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Feature</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Composite Veneers</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase">Porcelain Veneers</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Time Required</td>
                <td className="px-6 py-4 text-[#5b72ff] font-bold">1 Visit (Single Day)</td>
                <td className="px-6 py-4 text-neutral-600">2 Visits (10–14 days)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Tooth Shaving</td>
                <td className="px-6 py-4 text-neutral-600">Minimal to None (Reversible)</td>
                <td className="px-6 py-4 text-neutral-600">Mild Shaving required</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Durability</td>
                <td className="px-6 py-4 text-neutral-600">4 – 8 years</td>
                <td className="px-6 py-4 text-neutral-600">10 – 15 years</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Stain Resistance</td>
                <td className="px-6 py-4 text-neutral-600">Moderate</td>
                <td className="px-6 py-4 text-neutral-600">Excellent (Stain-proof)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-neutral-800">Repairability</td>
                <td className="px-6 py-4 text-neutral-600">Easy to repair in clinic</td>
                <td className="px-6 py-4 text-neutral-600">Must be remade in lab</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Post-Treatment Care Tips</h2>
        <p className="text-neutral-700 leading-relaxed">
          To maintain the high-gloss shine and maximize the life of your composite veneers:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Avoid Hard Foods:</strong> Do not use your front veneers to open packaging, bite nails, or chew ice.</li>
          <li><strong>Limit Staining Agents:</strong> Rinse your mouth with water after drinking coffee, tea, red wine, or eating turmeric-rich foods.</li>
          <li><strong>Regular Polishing:</strong> Schedule a professional cleaning and polishing visit at YOUR DENTIST every 6 months to maintain their bright luster.</li>
        </ul>

        <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-5 my-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <img
              src="/assets/yourdentist/aesthetic_dentistry_fellowship.jpg"
              alt="Dr. Aryan Parmar Fellowship in Aesthetic Dentistry FAD board certification"
              className="w-full sm:w-[180px] rounded-xl border border-neutral-200 object-cover shadow-sm"
            />
            <div className="space-y-2 text-left">
              <span className="px-2 py-0.5 bg-[#5b72ff]/10 text-[#5b72ff] rounded text-[8px] font-black uppercase tracking-wider">Cosmetic Credential</span>
              <h4 className="text-sm font-black uppercase tracking-wide text-neutral-900">Aesthetic Dentistry Fellowship</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                Dr. Aryan Parmar holds an official <strong>Fellowship in Aesthetic Dentistry (FAD)</strong> board certification, demonstrating specialized training in cosmetic smile makeovers, dental veneer sculpting, and advanced facial harmony analysis.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-6 rounded-r-xl my-8">
          <h3 className="text-lg font-bold text-neutral-800 mb-2">Book Your Smile Design Session Today</h3>
          <p className="text-neutral-600 text-sm mb-4">
            If you are looking for the best cosmetic dentist in Patna to evaluate your suitability for composite veneers, book your slot at YOUR DENTIST, Tara Kunj, Patliputra Colony. We offer complete computerized diagnostics and flexible 0% interest EMI options.
          </p>
          <p className="text-sm font-bold text-neutral-800">📞 Call: 062014 78033 &nbsp;|&nbsp; Monday – Saturday: 10 AM – 8 PM</p>
        </div>
      </div>
    )
  },
  {

    slug: "yash-agarwal-gap-closure-patna",
    title: "Yash Agarwal's Smile Makeover: Porcelain Veneers at YOUR DENTIST Patna",
    category: "Patient Stories",
    readTime: "4 min read",
    publishDate: "July 8, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Yash Agarwal from Patna had a central diastema (gap between front teeth) that stopped him from smiling freely. Read how Dr. Aryan Parmar transformed his smile with premium porcelain veneers at YOUR DENTIST, Patliputra Colony.",
    featuredImage: "/assets/yourdentist/yash_gap_after.png",
    metaDescription: "Read Yash Agarwal's real smile transformation story — premium porcelain veneers treatment at YOUR DENTIST Patna by Dr. Aryan Parmar. Painless, long-lasting, and natural-looking.",
    faqs: [
      {
        question: "Can front teeth gaps be closed with porcelain veneers in Patna?",
        answer: "Yes. At YOUR DENTIST Patna, we routinely close front teeth gaps (diastema) using ultra-thin porcelain veneers. As seen in Yash Agarwal's case, the result is a highly durable, stain-proof, and natural-looking smile makeover completed in just two visits."
      },
      {
        question: "What is the difference between composite and porcelain veneers for gap closure?",
        answer: "Composite bonding is completed in a single visit using tooth-colored resin, whereas porcelain veneers are custom ceramic shells fabricated in a specialized lab. Porcelain veneers offer superior aesthetics, are completely stain-resistant, and last 10 to 15 years compared to composite's 4 to 8 years."
      },
      {
        question: "Is porcelain veneers treatment painful?",
        answer: "No. The procedure is virtually painless. A very thin layer of enamel (less than 0.5mm) is prepared under local anesthesia if necessary, and custom temporaries are placed. The final porcelain veneers are then bonded securely to your teeth."
      },
      {
        question: "Who is the best dentist in Patna for porcelain veneers?",
        answer: "Dr. Aryan Parmar at YOUR DENTIST, New Patliputra Colony, Patna is widely recognized as one of the top cosmetic dentists in Patna. With 5,000+ patients treated and a 5.0 Google rating, the clinic specializes in customized smile designing, porcelain veneers, and implants."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Yash Agarwal, a 24-year-old from Patna, had always felt self-conscious about the gap between his front teeth. Despite having a bright personality, he would instinctively cover his mouth when laughing or smiling in photos. He came to <strong>YOUR DENTIST, Patliputra Colony</strong> after searching for the <strong>best cosmetic dentist in Patna</strong> to explore permanent gap closure options.
        </p>

        <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 my-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-2">Patient Profile</h3>
          <ul className="space-y-1 text-sm text-neutral-600">
            <li><strong>Patient:</strong> Yash Agarwal</li>
            <li><strong>Age:</strong> 24 years</li>
            <li><strong>Concern:</strong> Central diastema (gap between upper front teeth)</li>
            <li><strong>Treatment:</strong> Premium E-Max Porcelain Veneers</li>
            <li><strong>Duration:</strong> 2 sessions (7 days total)</li>
            <li><strong>Result:</strong> Permanent, stain-proof, highly aesthetic smile makeover</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Before: What Yash Came In With</h2>
        <p className="text-neutral-700 leading-relaxed">
          Yash presented with a visible central diastema — a gap between his two upper central incisors. His teeth were otherwise healthy. Because Yash was looking for a highly durable, premium, and stain-proof solution that would last for over a decade, Dr. Aryan Parmar recommended custom-fabricated <strong>E-Max Porcelain Veneers</strong> rather than composite bonding.
        </p>

        <div className="rounded-2xl overflow-hidden border border-neutral-100 my-6">
          <img
            src="/assets/yourdentist/yash_gap_before.png"
            alt="Yash Agarwal before porcelain veneers treatment at YOUR DENTIST Patna"
            className="w-full object-cover"
          />
          <p className="text-center text-xs text-neutral-400 py-2 bg-neutral-50">Before: Yash's central diastema before porcelain veneers treatment at YOUR DENTIST Patna</p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Treatment: Custom Porcelain Veneer Journey</h2>
        <p className="text-neutral-700 leading-relaxed">
          The porcelain veneer process was completed in two comfortable sessions at YOUR DENTIST Patna:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-neutral-700">
          <li>
            <strong>Digital Assessment & Mapping:</strong> We captured a high-resolution 3D digital scan of Yash's mouth to design his new smile proportions.
          </li>
          <li>
            <strong>Minimal Preparation & Impression:</strong> In the first session, less than 0.5mm of enamel was prepared to make space for the veneer. A precise digital impression was sent to our lab to fabricate custom E-Max ceramic veneers. Temporary veneers were placed immediately.
          </li>
          <li>
            <strong>Veneer Bonding:</strong> One week later, the temporaries were removed. Dr. Aryan checked the fit, shape, and shade-match of the final porcelain veneers before bonding them securely to Yash's natural teeth using a high-strength adhesive resin.
          </li>
        </ol>

        <div className="rounded-2xl overflow-hidden border border-neutral-100 my-6">
          <img
            src="/assets/yourdentist/yash_gap_after.png"
            alt="Yash Agarwal after porcelain veneers treatment at YOUR DENTIST Patna — beautiful smile transformation"
            className="w-full object-cover"
          />
          <p className="text-center text-xs text-neutral-400 py-2 bg-neutral-50">After: Yash's smile after premium porcelain veneers bonding at YOUR DENTIST Patna</p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Yash's Reaction</h2>
        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-4">
          <p className="text-neutral-700 italic leading-relaxed">
            "I wanted a permanent solution and chose porcelain veneers after speaking to Dr. Aryan. The process was extremely smooth. I am amazed by how natural they look and feel. I can drink coffee and eat anything without worrying about stains or chips. It was worth every rupee!"
          </p>
          <p className="text-sm font-bold text-neutral-500 mt-3">— Yash Agarwal, Patna</p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why YOUR DENTIST is the Best Choice for Veneers in Patna</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Ultra-Durable Materials:</strong> We use premium imported E-Max and Zirconia ceramics that last 10–15 years.</li>
          <li><strong>Digital Proportions:</strong> No manual guesswork. Computerized mockups simulate your final smile before bonding.</li>
          <li><strong>Painless Procedure:</strong> Gentle prep work completed under local anesthesia for a zero-discomfort experience.</li>
          <li><strong>Expert Cosmetic Team:</strong> Led by Dr. Aryan Parmar with comprehensive experience in advanced aesthetic dentistry.</li>
          <li><strong>0% EMI Plans:</strong> Finance your smile makeover easily with interest-free monthly installment plans.</li>
        </ul>

        <div className="bg-neutral-900 text-white rounded-2xl p-6 my-8">
          <p className="text-lg font-bold mb-2">Want a smile like Yash's?</p>
          <p className="text-neutral-300 text-sm mb-4">Book your free smile assessment at YOUR DENTIST, New Patliputra Colony, Patna. Dr. Aryan Parmar will evaluate your case and recommend the best veneer treatment for you.</p>
          <p className="text-sm font-bold text-[#a0b0ff]">📞 062014 78033 &nbsp;|&nbsp; Mon–Sat: 10 AM – 8 PM</p>
        </div>
      </div>
    )
  },
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

        <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-5 my-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <img
              src="/assets/yourdentist/implantology_mastership.jpg"
              alt="Dr. Aryan Parmar clinical implant mastership board certification"
              className="w-full sm:w-[180px] rounded-xl border border-neutral-200 object-cover shadow-sm"
            />
            <div className="space-y-2 text-left">
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-[8px] font-black uppercase tracking-wider">Clinical Credentials</span>
              <h4 className="text-sm font-black uppercase tracking-wide text-neutral-900">Advanced Implantology Training</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                Dr. Aryan Parmar holds an official <strong>Clinical Implant Mastership</strong> board certification and has completed a prestigious international <strong>Fellowship in Implantology in South Korea</strong>, specializing in advanced 3D guided surgery, digital smile scanning, and complex prosthodontic oral rehabilitation.
              </p>
            </div>
          </div>
        </div>

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
  },
  {
    slug: "teeth-whitening-in-patna",
    title: "Laser Teeth Whitening in Patna: Procedure, Cost & Safety",
    category: "Aesthetics",
    readTime: "4 min read",
    publishDate: "July 6, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Want a brighter smile? Learn about professional laser teeth whitening options, results, and what to expect during the session at YOUR DENTIST Patna.",
    featuredImage: "/assets/yourdentist/laser_whitening.png",
    metaDescription: "Looking for teeth whitening in Patna? Compare professional laser whitening vs. home kits, check treatment safety, and find out details at YOUR DENTIST.",
    faqs: [
      {
        question: "How long does laser teeth whitening take in Patna?",
        answer: "A typical in-office laser teeth whitening session at YOUR DENTIST Patna takes about 45 to 60 minutes, offering immediate shade improvement."
      },
      {
        question: "Is professional teeth whitening safe for enamel?",
        answer: "Yes, professional teeth whitening under dental supervision is 100% safe. We use high-quality, pH-balanced bleaching gels that protect your enamel."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          A bright, sparkling smile is one of your best social assets. However, consuming tea, coffee, mustard oil, or smoking can yellow teeth over time. If you want to restore your smile's natural brightness, here is a patient guide to <strong>laser teeth whitening in Patna</strong>.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Professional Laser Whitening vs. Over-the-Counter Kits</h2>
        <p className="text-neutral-700 leading-relaxed">
          While many store-bought pastes and charcoal powders claim to whiten teeth, they often contain highly abrasive substances that permanently wear down your protective enamel. 
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Controlled Bleaching:</strong> We use medical-grade hydrogen peroxide gels activated by specialized light frequencies.</li>
          <li><strong>Gum Protection:</strong> Before applying the whitening agent, a light-cured liquid barrier is applied to your gums to prevent chemical sensitivity.</li>
          <li><strong>Predictable Results:</strong> Professional treatments can brighten your teeth by 3 to 8 shades in a single 60-minute appointment.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">What to Expect During Your Session</h2>
        <p className="text-neutral-700 leading-relaxed">
          The procedure is simple, straightforward, and painless:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-neutral-700">
          <li><strong>Shade Assessment:</strong> We measure your starting tooth shade using a standard dental guide.</li>
          <li><strong>Teeth Cleaning:</strong> We perform a quick scaling to remove surface plaque and tartar for optimal whitening results.</li>
          <li><strong>Gel Application:</strong> The whitening gel is carefully painted on the front surface of your teeth.</li>
          <li><strong>Laser Activation:</strong> The dental laser activates the gel's oxygen molecules, lifting deep-set stains. This step is repeated in 2-3 cycles of 15 minutes.</li>
        </ol>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Keep your smile looking brand new. Book a cosmetic smile evaluation at YOUR DENTIST Patna today.
          </p>
        </div>
      </div>
    )
  },
  {
    slug: "wisdom-tooth-extraction-in-patna",
    title: "Wisdom Tooth Extraction in Patna: Painless Removal & Care",
    category: "Oral Surgery",
    readTime: "4 min read",
    publishDate: "July 6, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Experiencing pain in the back of your jaw? Read our comprehensive patient guide to painless wisdom tooth removal, extraction procedure, and post-op care in Patna.",
    featuredImage: "/assets/yourdentist/clinic_in_action.jpg",
    metaDescription: "Need a wisdom tooth extraction in Patna? Learn about painless surgical removal, recovery tips, and custom consultations at YOUR DENTIST Patliputra Colony.",
    faqs: [
      {
        question: "Is wisdom tooth extraction painful?",
        answer: "No. At YOUR DENTIST Patna, we use advanced local anesthesia to ensure the entire extraction process is completely painless. Post-treatment recovery is managed with simple medications."
      },
      {
        question: "How long does it take to recover from wisdom tooth surgery?",
        answer: "Most patients recover within 3 to 5 days. We provide a detailed post-care guide and a complimentary follow-up appointment to monitor healing."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Wisdom teeth, or third molars, usually erupt between the ages of 17 and 25. If there is insufficient space in your jawbone, these teeth can become impacted (trapped under the bone or gums) or grow sideways, causing swelling, decay, and pressure-pain on adjacent healthy teeth. If you are experiencing discomfort, here is what you need to know about <strong>wisdom tooth extraction in Patna</strong>.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">When is Wisdom Tooth Removal Necessary?</h2>
        <p className="text-neutral-700 leading-relaxed">
          Not all wisdom teeth require removal, but an extraction is highly recommended in the following cases:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Pericoronitis:</strong> Recurrent infections in the gum flaps surrounding a partially erupted tooth.</li>
          <li><strong>Damage to Second Molars:</strong> Sideways-growing wisdom molars pushing directly against neighboring roots, causing cavities.</li>
          <li><strong>Cysts or Bone Loss:</strong> Fluid-filled sacs forming around impacted teeth, weakening the jawbone structure.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Painless Extractions at YOUR DENTIST</h2>
        <p className="text-neutral-700 leading-relaxed">
          Many patients delay extraction due to dental fear. However, modern surgical techniques make this a routine, low-discomfort process:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Advanced Anesthesia Protocols:</strong> We ensure the extraction site is fully numb. You will feel minor pressure, but zero sharp pain.</li>
          <li><strong>Micro-Surgical Instruments:</strong> We use specialized instruments to extract teeth with minimal bone removal, expediting post-op healing.</li>
          <li><strong>Stitch Care:</strong> When required, we place dissolvable sutures that vanish naturally within a week.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Crucial Post-Extraction Recovery Tips</h2>
        <p className="text-neutral-700 leading-relaxed">
          Following these guidelines during the first 24 hours ensures smooth healing and prevents dry socket:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>No Spitting or Using Straws:</strong> Creating suction in your mouth can dislodge the healing blood clot.</li>
          <li><strong>Eat Soft, Cool Foods:</strong> Stick to ice creams, yogurts, or lukewarm porridge. Avoid hot, spicy, or crunchy foods.</li>
          <li><strong>Apply Cold Packs:</strong> Place a cold compress on the outside of your cheek for 10-minute intervals to limit swelling.</li>
        </ul>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Experiencing wisdom tooth pressure or inflammation? Book an digital diagnostic scan at YOUR DENTIST Patliputra Colony for a quick, painless solution.
          </p>
        </div>
      </div>
    )
  },
  {
    slug: "best-5-dentist-in-patna",
    title: "5 Best Dentists in Patna: The Ultimate Comparison & Choices Guide",
    category: "Guides",
    readTime: "5 min read",
    publishDate: "July 6, 2026",
    author: "Dr. Aryan Parmar",
    summary: "Looking for the best dentist in Patna? Compare the top dental clinics, technology, qualifications, and patient transparency to make the right choice.",
    featuredImage: "/assets/yourdentist/clinic_in_action.jpg",
    metaDescription: "Compare the 5 best dentists in Patna. Read our comprehensive guide on clinic technology, qualifications, and patient transparency to make the right choice.",
    faqs: [
      {
        question: "How do I find the best dentist in Patna?",
        answer: "When choosing a dentist in Patna, prioritize clinics equipped with digital 3D scanners, certified specialists (such as implantologists or orthodontists), sterilization chambers, and clear pricing models."
      },
      {
        question: "Who is the top dentist in Patna for painless treatments?",
        answer: "Dr. Aryan Parmar at YOUR DENTIST Patna is highly rated for painless, digitized treatments using computerized anesthesia and micro-dentistry."
      }
    ],
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          Finding the right dental care is crucial for long-term health. With hundreds of clinics in Bihar, patients often search for the <strong>best dentists in Patna</strong> to ensure they receive quality treatment. Here is an objective guide comparing what key metrics separate a premium dental studio from standard clinics.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">5 Key Criteria for Evaluating a Dental Clinic</h2>
        <p className="text-neutral-700 leading-relaxed">
          Before booking an appointment, verify if the clinic fulfills these vital standards:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Specialist Expertise:</strong> Ensure your dentist has dedicated postgraduate qualifications for specific procedures (e.g. Master of Dental Surgery for Implants or Orthodontics).</li>
          <li><strong>Digital Treatment Planning:</strong> Leading clinics use 3D intraoral scanners and CBCT radiography instead of manual clay impressions.</li>
          <li><strong>Hygiene and Sterilization:</strong> Look for class-B autoclave certification, ensuring medical-grade tool sterilization.</li>
          <li><strong>Painless Delivery Systems:</strong> Painless dentistry is now achievable via computerized local anesthesia delivery systems.</li>
          <li><strong>Transparent Pricing & Financing:</strong> Top clinics provide clear upfront quotes and offer interest-free monthly installment (EMI) options.</li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why YOUR DENTIST in Patna is Highly Recommended</h2>
        <p className="text-neutral-700 leading-relaxed">
          Led by <strong>Dr. Aryan Parmar</strong>, YOUR DENTIST is a premium dental center in New Patliputra Colony, Patna. The clinic stands out for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><strong>Full Smile Makeovers:</strong> Certified computerized Veneers and Smile design treatments.</li>
          <li><strong>Computerized Implantology:</strong> Safe, surgical-guided, pain-free dental implants.</li>
          <li><strong>Affordable Premium Care:</strong> Zero-interest EMI packages through banking partners.</li>
        </ul>

        <div className="bg-[#5b72ff]/5 border-l-4 border-[#5b72ff] p-5 rounded-r-xl my-6">
          <p className="text-sm font-semibold text-neutral-800">
            Compare options and prioritize quality for your dental health. Contact YOUR DENTIST Patna today to book your detailed smile assessment session.
          </p>
        </div>
      </div>
    )
  }
];

