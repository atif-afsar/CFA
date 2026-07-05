import AnimateIn from "../components/AnimateIn";
import { MEMBERSHIP_FORM_EMBED_URL } from "../constants/site";

const OBJECTIVES = [
  { icon: "diversity_3", title: "Unity Among Institutes", text: "Fostering a collaborative ecosystem where competition is healthy and communication is transparent between all member centers." },
  { icon: "policy", title: "Protecting Rights", text: "Legal and administrative advocacy to protect the operational rights and interests of Aligarh's coaching entrepreneurs." },
  { icon: "verified_user", title: "Ethical Standards", text: "Defining and enforcing a code of conduct that ensures fair practices, quality education, and transparency in fee structures." },
  { icon: "account_balance", title: "Advocacy & Representation", text: "Representing the coaching industry at government forums, district administration meetings, and municipal discussions." },
  { icon: "share_reviews", title: "Resource Sharing", text: "Creating platforms for sharing educational best practices, infrastructural insights, and digital teaching advancements." },
  { icon: "gavel", title: "Grievance Redressal", text: "Internal mediation for disputes among institutes or with stakeholders to maintain industrial peace and decorum." },
];

const BENEFITS = [
  { title: "Institutional Legitimacy", text: "Official recognition as a vetted member of the Aligarh coaching fraternity." },
  { title: "Collective Bargaining", text: "Unified voice for negotiations with vendors, digital platforms, and publishers." },
  { title: "Professional Development", text: "Access to exclusive faculty training workshops and modern pedagogy seminars." },
  { title: "Networking Events", text: "Annual summits and monthly mixers with Aligarh's top educators and administrators." },
];

const STEPS = [
  { num: 1, title: "Apply Online", text: "Submit your initial interest and institute credentials." },
  { num: 2, title: "Verification", text: "Review of pedagogical standards and facility hygiene." },
  { num: 3, title: "Review", text: "Final appraisal by the CFA Executive Council member." },
  { num: 4, title: "Certification", text: "Receive your official CFA Membership Plaque." },
];

const LEADERS = [
  { name: "Vineet Sharma Sir", role: "President", image: "/images/vineet-sharma.png", bio: "Leading CFA's vision and representing coaching institutes of Aligarh with dedication and integrity." },
  { name: "Nawab Saquib Ibrahim Sir", role: "Secretary", image: "/images/nawab-saquib-ibrahim.png", bio: "Managing federation operations, communications, and day-to-day coordination among member institutes." },
  { name: "Yasir Ali Sir", role: "Treasurer", image: "/images/yasir-ali.png", bio: "Overseeing financial stewardship, membership records, and transparent accounting for the federation." },
  { name: "Vipresh Sharma Sir", role: "Vice President", image: "/images/vipresh-sharma.png", bio: "Supporting strategic initiatives and strengthening collaboration across Aligarh's coaching community." },
  { name: "Lokesh Chaudhary Sir", role: "Joint Secretary", image: "/images/lokesh-chaudhary.png", bio: "Assisting secretarial functions and fostering engagement between members and the executive council." },
];

const EVENTS = [
  { date: "MAR 2026", title: "CFA Inaugural General Meeting", text: "The founding session bringing together coaching institutes across Aligarh to establish a unified federation.", accent: "secondary" },
  { date: "APR 2026", title: "Member Onboarding Drive", text: "Welcoming the first cohort of verified member institutes into the Coaching Federation of Aligarh.", accent: "primary" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section relative flex flex-col items-center justify-start text-center px-gutter pt-4 pb-8 sm:pt-6 sm:pb-10 md:pt-10 md:pb-16 overflow-hidden" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="watermark absolute bottom-0 right-0 w-1/2 sm:w-2/3 md:w-1/3 opacity-5">
            <img alt="" className="grayscale w-full" src="/images/watermark.png" />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="hero-animate hero-badge mx-auto w-fit">
            <span className="hero-badge-dot" aria-hidden="true" />
            Official Federation · Founded 2026 · Aligarh
          </div>
          <div className="hero-animate hero-seal-wrap seal-float">
            <img alt="CFA Official Seal" className="hero-seal" src="/images/seal-hero.png" />
          </div>
          <h1 className="hero-animate hero-animate-delay-1 hero-title text-primary mb-2.5 sm:mb-4 font-bold px-0.5">
            Uniting Coaching Institutes
            <span className="block text-secondary mt-0.5">of Aligarh</span>
          </h1>
          <p className="hero-animate hero-animate-delay-2 hero-subtitle text-on-surface-variant mb-5 sm:mb-6">
            Protecting rights, promoting ethical standards, and fostering unity among educators in Aligarh, U.P.
          </p>
          <div className="hero-animate hero-animate-delay-3 hero-actions-mobile justify-center">
            <a className="btn-primary btn-touch rounded-lg sm:rounded font-bold uppercase shadow-md" href="#membership">
              <span className="sm:hidden">Join CFA</span>
              <span className="hidden sm:inline">Become a Member</span>
            </a>
            <a className="btn-secondary btn-touch rounded-lg sm:rounded font-bold uppercase bg-white/60 sm:bg-transparent" href="#about">
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full px-gutter">
          <div className="gold-thread max-w-container-max mx-auto section-title-line" />
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-surface-container-lowest" id="about">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <AnimateIn className="order-2 md:order-1">
            <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.15em] md:tracking-[0.2em] mb-3 md:mb-4 font-semibold">Foundation & Identity</h2>
            <h3 className="text-headline-responsive text-primary mb-4 md:mb-6 font-bold">Our Mission</h3>
            <div className="space-y-3 md:space-y-4 text-on-surface-variant text-[15px] md:text-base leading-relaxed">
                <p>The Coaching Federation of Aligarh (CFA) was founded in 2026 in Aligarh as the authoritative body representing the diverse landscape of coaching institutes in our historic city. Founded on the principles of mutual respect and professional excellence, we serve as a shield for the coaching fraternity.</p>
              <p>Our role is multifaceted: we act as an official liaison between educators and local administration, advocate for the rights of private educational centers, and ensure that the highest ethical standards of teaching are maintained across all member institutes.</p>
              <p>In an era of rapid educational reform, CFA provides the necessary framework for Aligarh&apos;s coaching centers to thrive collectively, ensuring student welfare remains at the heart of our mission.</p>
            </div>
          </AnimateIn>
          <AnimateIn className="order-1 md:order-2 flex justify-center" delay={120} animation="scale-in">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[4/3] md:aspect-square bg-surface-container rounded-xl border border-outline-variant/10 flex items-center justify-center p-6 md:p-12 overflow-hidden">
              <span className="material-symbols-outlined text-[80px] md:text-[120px] text-primary/10 absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              <img className="w-full h-full object-cover rounded-lg shadow-lg" alt="Educators shaking hands" src="/images/about-handshake.png" />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-surface-bright relative" id="objectives">
        <div className="max-w-container-max mx-auto px-gutter">
          <AnimateIn className="text-center mb-8 md:mb-16">
            <h2 className="text-headline-responsive text-primary mb-3 md:mb-4 font-bold">Core Objectives</h2>
            <div className="w-20 md:w-24 h-1 bg-secondary-fixed mx-auto section-title-line" />
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {OBJECTIVES.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 80}>
                <div className="bg-surface-container-lowest p-5 md:p-8 border border-outline-variant/20 gold-glow transition-all duration-300 h-full rounded-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary flex items-center justify-center mb-4 md:mb-6 rounded-sm border border-secondary">
                    <span className="material-symbols-outlined text-secondary-fixed text-2xl md:text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="font-headline-md text-xl md:text-headline-md text-primary mb-2 md:mb-4 font-semibold">{item.title}</h4>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-surface-container" id="membership">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <AnimateIn className="lg:col-span-5">
              <h2 className="text-headline-responsive text-primary mb-6 md:mb-8 font-bold">Membership Benefits</h2>
              <ul className="space-y-4 md:space-y-6">
                {BENEFITS.map((item) => (
                  <li key={item.title} className="flex gap-3 md:gap-4 p-3 md:p-0 rounded-lg bg-surface-container-lowest/60 md:bg-transparent">
                    <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0">check_circle</span>
                    <div>
                      <h5 className="font-bold text-primary text-[15px] md:text-base">{item.title}</h5>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn className="lg:col-span-7" delay={150}>
              <div className="bg-surface-container-lowest p-5 md:p-10 shadow-sm border-t-2 border-secondary rounded-xl">
                <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-6 md:mb-10 font-semibold">Membership Process</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative">
                  <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant/40" aria-hidden="true" />
                  {STEPS.map((step) => (
                    <div
                      key={step.num}
                      className="relative flex flex-col items-center text-center bg-surface-container/80 md:bg-transparent rounded-xl p-4 md:p-2 border border-outline-variant/15 md:border-0 group"
                    >
                      <div className="relative z-10 w-11 h-11 md:w-12 md:h-12 bg-secondary text-on-secondary rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-md mb-3 transition-transform group-hover:scale-105">
                        {step.num}
                      </div>
                      <h6 className="font-bold text-primary mb-1 text-sm md:text-base leading-snug">{step.title}</h6>
                      <p className="text-[11px] md:text-xs text-on-surface-variant leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 md:mt-10">
                  <a className="w-full md:w-auto inline-flex justify-center px-8 py-3.5 btn-primary btn-touch rounded-lg md:rounded font-bold uppercase tracking-widest text-sm" href="#contact">
                    Start Application
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-primary text-on-primary relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <AnimateIn>
            <div className="stats-grid text-center">
              {[
                { value: "150+", label: "Member Institutes" },
                { value: "2026", label: "Founded in Aligarh" },
                { value: "50K+", label: "Students Represented" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center bg-primary-container/40 md:bg-transparent rounded-xl py-4 md:py-0 px-2">
                  <span className="text-secondary-fixed font-display-lg text-3xl sm:text-4xl md:text-5xl mb-1 md:mb-2 font-bold">{stat.value}</span>
                  <p className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wide md:tracking-widest text-on-primary/70 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn className="mt-12 md:mt-20 border-t border-on-primary/10 pt-8 md:pt-12" delay={100}>
            <h4 className="text-center font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed mb-6 md:mb-10 font-semibold">Our Prominent Members</h4>
            <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible md:gap-8 md:opacity-40 md:grayscale md:hover:grayscale-0 transition-all scrollbar-hide snap-x snap-mandatory">
              {["INSTITUTE A", "INSTITUTE B", "INSTITUTE C", "INSTITUTE D", "INSTITUTE E"].map((name) => (
                <div key={name} className="shrink-0 snap-center h-11 md:h-12 min-w-[120px] md:w-32 px-4 bg-on-primary/20 rounded flex items-center justify-center font-bold italic text-sm">
                  {name}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-surface-bright" id="leadership">
        <div className="max-w-container-max mx-auto px-gutter">
          <AnimateIn className="text-center mb-8 md:mb-16">
            <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.15em] md:tracking-[0.2em] mb-3 md:mb-4 font-semibold">Leadership</h2>
            <h3 className="text-headline-responsive text-primary font-bold">The Executive Council</h3>
            <p className="md:hidden text-xs text-on-surface-variant mt-2">Swipe to see all council members →</p>
          </AnimateIn>
          <div className="leaders-scroll">
            {LEADERS.map((leader, i) => (
              <AnimateIn key={leader.name} delay={i * 100} className="h-full">
                <div className="bg-surface-container-lowest border border-outline-variant/10 p-5 md:p-6 flex flex-col items-center text-center gold-glow transition-all h-full rounded-xl">
                  <div className="w-full max-w-[200px] md:w-full aspect-[3/4] bg-surface-container mb-4 md:mb-5 overflow-hidden rounded-lg shadow-inner">
                    <img className="w-full h-full object-cover object-top" alt={leader.name} src={leader.image} loading="lazy" />
                  </div>
                  <h4 className="font-headline-md text-lg md:text-xl text-primary font-semibold leading-snug">{leader.name}</h4>
                  <p className="text-secondary font-bold uppercase text-xs tracking-wider mt-1">{leader.role}</p>
                  <div className="w-12 h-0.5 bg-outline-variant my-3 md:my-4" />
                  <p className="text-on-surface-variant text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-surface-container-low border-t border-outline-variant/30" id="contact">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <AnimateIn>
              <h3 className="text-headline-responsive text-primary mb-6 md:mb-8 font-bold">Latest Initiatives</h3>
              <div className="space-y-4 md:space-y-6">
                {EVENTS.map((event) => (
                  <div key={event.title} className={`bg-surface-container-lowest p-5 md:p-6 border-l-4 ${event.accent === "secondary" ? "border-secondary" : "border-primary"} shadow-sm rounded-r-lg`}>
                    <span className={`text-xs font-bold ${event.accent === "secondary" ? "text-secondary" : "text-primary"}`}>{event.date}</span>
                    <h5 className="font-bold text-primary mt-1 mb-2 text-[15px] md:text-base leading-snug">{event.title}</h5>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{event.text}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div className="bg-primary p-4 sm:p-5 md:p-6 rounded-xl shadow-2xl text-on-primary">
                <h3 className="font-headline-md text-lg md:text-xl mb-1.5 font-semibold">Join the Federation Today</h3>
                <p className="text-on-primary-container mb-4 text-sm leading-relaxed">Establish your institute as a certified member of the official body.</p>
                <div className="membership-form-wrap rounded-lg overflow-hidden bg-white shadow-inner">
                  <iframe
                    src={MEMBERSHIP_FORM_EMBED_URL}
                    title="CFA Membership Application"
                    className="membership-form-embed w-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
