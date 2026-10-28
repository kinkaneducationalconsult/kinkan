'use client'

import { useState } from 'react'
import {
  ArrowRight,
  AtSign,
  BookHeart,
  BookOpen,
  BookOpenText,
  Calculator,
  Camera,
  Check,
  ChevronDown,
  GraduationCap,
  Mail,
  Menu,
  PenLine,
  PhoneCall,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'

const programs = [
  { title: 'Phonics & literacy', description: 'Building the sounds, words, and confidence children need to become capable readers.', icon: BookOpenText, tone: 'coral', marker: 'A' },
  { title: 'Mathematics', description: 'Making numbers feel approachable through clear thinking, practice, and play.', icon: Calculator, tone: 'teal', marker: '1' },
  { title: 'Reading support', description: 'Helping children discover the joy of stories while developing their reading fluency.', icon: BookHeart, tone: 'mustard', marker: 'R' },
  { title: 'Learner & teacher support', description: 'Practical resources and guidance for the people who make learning happen every day.', icon: GraduationCap, tone: 'lilac', marker: 'L' },
]

const learningAreas = ['Early learning', 'Phonics', 'Reading & literacy', 'Mathematics', 'Teacher support', 'Educational resources']

const schoolPartners = [
  { name: 'KAF International', short: 'KAF', tone: 'teal' },
  { name: 'Gloryhills', short: 'GH', tone: 'coral' },
  { name: 'Hillview Academy', short: 'HA', tone: 'mustard' },
]

const team = [
  { name: 'Mr. Yaw Afriyie Anane', role: 'Lead Facilitator', bio: 'Guiding Kinkan\'s learning experiences with clarity, care, and a focus on learner growth.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afriyie-I7N5Mq8NqWYwvBTGIfCcZoFILycd4t.jpg', alt: 'Portrait of Mr. Yaw Afriyie Anane', tone: 'coral' },
  { name: 'Ms. Susan Lomo', role: 'Lead Administrator', bio: 'Keeping Kinkan\'s programmes, learners, and communities connected and supported.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sussan%203-r4x29gxwV1FHfXp47KxnRTYbeMjvb1.jpg', alt: 'Portrait of Ms. Susan Lomo', tone: 'teal' },
  { name: 'Mr. Nat Obour-Awuku', role: 'Marketing/Brands Lead', bio: 'Growing Kinkan\'s voice and making its educational mission visible to more communities.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nat-HiDJ57wGSM7peUMgPAPyma6HiKrLt4.jpg', alt: 'Portrait of Mr. Nat Obour-Awuku', tone: 'mustard' },
]

const faqs = [
  { question: 'Who is Kinkan for?', answer: 'We support learners, families, schools, and teachers who want practical, caring educational guidance that strengthens everyday learning.' },
  { question: 'Do you work with schools directly?', answer: 'Yes. We partner with schools and communities to build structured learning support that improves confidence, literacy, and classroom outcomes.' },
  { question: 'What kinds of programmes do you offer?', answer: 'Our offer includes phonics, reading support, mathematics, teacher support, and learner-focused resources tailored to local needs.' },
  { question: 'How can I get started?', answer: 'You can contact us through the form or call us directly to talk about your child, school, or community support needs.' },
]

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3 text-[#09859b]" aria-label="Kinkan home">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#09859b]/10 bg-white p-1.5 shadow-[2px_2px_0_#09859b] transition-transform duration-200 group-hover:-rotate-3">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-z9rFMSA50QQkeJynfTwW9iJS7QRa6X.png"
          alt="Kinkan logo"
          className="h-full w-full object-contain"
          width={128}
          height={128}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[1.5rem] font-black tracking-[-0.06em]">Kin <span className="text-[#ff516f]">Kan</span></span>
        <span className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.13em] text-[#09859b]/65">Educational consult</span>
      </span>
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff516f]"><span className="inline-block size-2 rounded-full bg-current" />{children}</p> }

export function KinkanSite() {
  const [open, setOpen] = useState(false)
  const [letter, setLetter] = useState('A')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const letters = ['A', 'B', 'C']
  const close = () => setOpen(false)

  return <div className="min-h-screen overflow-x-hidden bg-[#fbf8f3] text-[#09859b]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#09859b]/10 bg-[#fbf8f3]/95 shadow-[0_4px_18px_rgba(9,133,155,0.08)] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"><Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#09859b]/75 md:flex"><a href="#about" className="transition-colors hover:text-[#ff516f]">About</a><a href="#programs" className="transition-colors hover:text-[#ff516f]">Programs</a><a href="#impact" className="transition-colors hover:text-[#ff516f]">Impact</a><a href="#team" className="transition-colors hover:text-[#ff516f]">Team</a><a href="#contact" className="transition-colors hover:text-[#ff516f]">Contact</a></nav>
        <a href="#contact" className="hidden rounded-full bg-[#09859b] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 md:block">Get in touch <ArrowRight className="ml-2 inline size-4" /></a>
        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="flex flex-col gap-5 border-t border-[#09859b]/10 bg-[#fbf8f3] px-5 py-6 font-semibold md:hidden"><a href="#about" onClick={close}>About</a><a href="#programs" onClick={close}>Programs</a><a href="#impact" onClick={close}>Impact</a><a href="#team" onClick={close}>Team</a><a href="#contact" onClick={close}>Contact</a></nav>}
    </header>

    <main id="home" className="pt-[76px]">
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:pb-28 lg:pt-24">
        <div className="relative z-10"><h1 className="max-w-2xl text-[clamp(3.5rem,7vw,6.8rem)] font-black leading-[0.92] tracking-[-0.065em]">Brighter <span className="relative inline-block text-[#ff516f]">beginnings<svg className="absolute -bottom-3 left-0 h-3 w-full" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 7C72 1 217 2 298 7" fill="none" stroke="#eecc3b" strokeLinecap="round" strokeWidth="5" /></svg></span> through learning.</h1><p className="mt-8 max-w-lg text-lg leading-8 text-[#09859b]/70">Kinkan Educational Consult equips learners and communities with locally-centred knowledge, skills, and resources to unlock their full potential.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#programs" className="rounded-full bg-[#ff516f] px-6 py-4 font-bold text-white shadow-[4px_4px_0_#09859b] transition-transform hover:-translate-y-1">Explore our programs <ArrowRight className="ml-2 inline size-4" /></a><a href="#contact" className="rounded-full border-2 border-[#09859b] px-6 py-[14px] font-bold transition-colors hover:bg-[#09859b] hover:text-white">Get in touch</a></div></div>
        <div className="relative mx-auto w-full max-w-[530px] lg:ml-auto"><div className="hero-paper relative aspect-square overflow-hidden rounded-[38%_62%_55%_45%/45%_42%_58%_55%] bg-[#d9f7f5]"><div className="absolute left-[12%] top-[16%] rotate-[-8deg] font-black text-[#ff516f]/20 text-8xl">A</div><div className="absolute right-[12%] top-[9%] rotate-12 font-black text-[#eecc3b]/60 text-6xl">2</div><div className="absolute bottom-[15%] left-[7%] rotate-[-12deg] font-black text-[#7c9e9d]/40 text-5xl">B</div><div className="absolute bottom-[10%] right-[9%] flex size-12 items-center justify-center rounded-full bg-white/80 text-[#ff516f] shadow-md"><Sparkles className="size-5" /></div><div className="absolute left-1/2 top-1/2 flex size-[63%] -translate-x-1/2 -translate-y-1/2 rotate-3 items-end justify-center rounded-[45%_45%_24%_24%] bg-[#ff516f] pb-0 shadow-[12px_12px_0_#09859b]" aria-label="Illustration of a child reading"><div className="absolute -top-[14%] left-[24%] size-[52%] rounded-full bg-[#8f5b43]" /><div className="absolute -top-[7%] left-[17%] size-[62%] rounded-[50%_50%_42%_42%] bg-[#e4a97b]" /><div className="absolute left-[32%] top-[19%] size-3 rounded-full bg-[#09859b] shadow-[38px_0_0_#09859b]" /><div className="absolute left-[39%] top-[37%] h-2 w-10 rounded-full border-b-2 border-[#09859b]" /><div className="absolute bottom-[24%] left-[13%] z-10 h-[25%] w-[74%] rotate-[-7deg] rounded-lg bg-[#fffaf0] shadow-[4px_4px_0_#09859b]/30"><div className="mt-5 h-1 w-2/3 bg-[#eecc3b]" /><div className="mt-3 h-1 w-1/2 bg-[#d9f7f5]" /></div></div></div><div className="absolute -bottom-4 left-6 rounded-2xl bg-[#eecc3b] px-4 py-3 text-sm font-black shadow-[4px_4px_0_#09859b]">Read. Explore. Grow.</div><div className="absolute -right-2 top-8 flex size-16 rotate-12 items-center justify-center rounded-2xl bg-white shadow-lg"><PenLine className="size-7 text-[#09859b]" /></div></div>
      </section>

      <section className="border-y border-[#09859b]/10 bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#09859b]/60">Schools we work with</p>
          <div className="school-marquee overflow-hidden">
            <div className="school-track flex w-max min-w-full items-center gap-4">
              {[...schoolPartners, ...schoolPartners].map((school, index) => (
                <div key={`${school.name}-${index}`} className="school-logo flex shrink-0 items-center gap-3 rounded-full border border-[#09859b]/10 bg-[#fbf8f3] px-4 py-2.5 shadow-[0_6px_18px_rgba(9,133,155,0.04)]">
                  <span className={`flex size-8 items-center justify-center rounded-full text-[0.6rem] font-black ${school.tone === 'teal' ? 'bg-[#d9f7f5] text-[#09859b]' : school.tone === 'coral' ? 'bg-[#f9d7d5] text-[#ff516f]' : school.tone === 'mustard' ? 'bg-[#f7efc6] text-[#9b7100]' : 'bg-[#e9e0f8] text-[#5d4d8a]'}`}>
                    {school.short}
                  </span>
                  <span className="text-sm font-bold tracking-[-0.03em] text-[#09859b]/75">{school.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="max-w-2xl"><SectionLabel>What we do</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">The building blocks of confident learning.</h2><p className="mt-5 text-lg leading-8 text-[#09859b]/65">Every child learns differently. We create the support, structure, and encouragement that helps each one find their way forward.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2">{programs.map((program, i) => { const Icon = program.icon; return <article key={program.title} className={`program-card tone-${program.tone} group relative min-h-[250px] overflow-hidden rounded-[28px] p-7 transition-transform hover:-translate-y-1`}><div className="flex items-start justify-between"><span className="flex size-14 items-center justify-center rounded-2xl bg-white/80 shadow-sm"><Icon className="size-6 text-[#09859b]" /></span><span className="text-sm font-bold opacity-50">0{i + 1}</span></div><div className="relative z-10 mt-12 max-w-sm"><h3 className="text-2xl font-black tracking-tight">{program.title}</h3><p className="mt-2 leading-7 opacity-75">{program.description}</p></div><div className="absolute -bottom-12 -right-4 text-[10rem] font-black leading-none opacity-10 transition-transform group-hover:rotate-6">{program.marker}</div></article> })}</div></section>

      <section id="about" className="bg-[#09859b] px-5 py-24 text-[#fbf8f3] sm:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-4"><div><SectionLabel>Why Kinkan</SectionLabel><h2 className="max-w-md text-4xl font-black tracking-[-0.04em] sm:text-5xl">Small steps. Strong foundations.</h2></div><div><p className="max-w-2xl text-2xl font-medium leading-relaxed text-[#fbf8f3]/90">Kinkan exists to empower African communities through locally-centred, high-quality educational support. When children feel supported as they learn to read, write, and work with numbers, they carry that confidence with them.</p><div className="mt-10 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-2"><div><Check className="mb-3 size-6 text-[#eecc3b]" /><h3 className="font-bold">Child-focused</h3><p className="mt-2 leading-7 text-white/60">Learning support shaped around the learner in front of us.</p></div><div><Check className="mb-3 size-6 text-[#ff516f]" /><h3 className="font-bold">Practical & caring</h3><p className="mt-2 leading-7 text-white/60">Clear guidance that families, teachers, and children can use.</p></div></div></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-32"><div><SectionLabel>Learning corner</SectionLabel><h2 className="max-w-lg text-4xl font-black tracking-[-0.04em] sm:text-5xl">A little curiosity goes a long way.</h2><p className="mt-5 max-w-md text-lg leading-8 text-[#09859b]/65">Tap a letter, make a word, and remember: learning is not about getting everything right the first time.</p><div className="mt-9 flex gap-3">{letters.map(item => <button key={item} onClick={() => setLetter(item)} className={`flex size-14 items-center justify-center rounded-2xl border-2 text-xl font-black transition-all ${letter === item ? 'border-[#ff516f] bg-[#ff516f] text-white shadow-[3px_3px_0_#09859b]' : 'border-[#09859b]/20 bg-white hover:border-[#ff516f]'}`} aria-pressed={letter === item}>{item}</button>)}</div></div><div className="flex min-h-[330px] items-center justify-center rounded-[32px] bg-[#eecc3b] p-8"><div className="text-center"><div className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#09859b]/55">Can you make a word?</div><div className="flex items-center justify-center gap-2 text-7xl font-black tracking-[-0.08em] sm:text-9xl"><span className="text-[#ff516f]">{letter}</span><span className="text-[#09859b]">+</span><span className="text-white">B</span><span className="text-[#09859b]">=</span><span className="text-[#ff516f]">?</span></div><div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-bold"><Star className="size-4 fill-[#ff516f] text-[#ff516f]" /> Keep exploring</div></div></div></section>

      <section className="bg-[#f3e9dc] px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto max-w-7xl lg:px-4"><SectionLabel>Our learning areas</SectionLabel><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><h2 className="max-w-md text-4xl font-black tracking-[-0.04em] sm:text-5xl">Support for every part of the journey.</h2><div className="grid gap-3 sm:grid-cols-2">{learningAreas.map((area, i) => <a href="#contact" key={area} className="group flex items-center justify-between border-b border-[#09859b]/20 py-4 text-xl font-bold transition-colors hover:text-[#ff516f]"><span><span className="mr-4 text-sm text-[#ff516f]">0{i + 1}</span>{area}</span><ArrowRight className="size-5 -rotate-45 transition-transform group-hover:rotate-0" /></a>)}</div></div></div></section>

      <section id="team" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="max-w-2xl"><SectionLabel>The people behind Kinkan</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Meet the team.</h2><p className="mt-5 text-lg leading-8 text-[#09859b]/65">The people working behind Kinkan&apos;s educational programmes, learner support, and broader mission.</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{team.map(person => <article key={person.role} className="group overflow-hidden rounded-[28px] border border-[#09859b]/10 bg-white p-4 shadow-[0_10px_30px_rgba(25,59,59,0.05)]"><div className={`team-photo tone-${person.tone} relative aspect-[1.08] overflow-hidden rounded-[20px]`}><img src={person.image} alt={person.alt} className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105" width="640" height="640" style={{ objectPosition: 'center top' }} /><div className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/80 shadow-sm"><Sparkles className="size-4 text-[#09859b]" /></div></div><div className="px-2 pb-2 pt-5"><h3 className="text-xl font-black">{person.name}</h3><p className="mt-1 text-sm font-bold text-[#ff516f]">{person.role}</p><p className="mt-3 text-sm leading-6 text-[#09859b]/65">{person.bio}</p></div></article>)}</div></section>

      <section id="impact" className="bg-[#ff516f] px-5 py-24 text-white sm:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.75fr] lg:px-4"><div><SectionLabel>Our mission</SectionLabel><h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl">Education creates opportunities.</h2></div><div><p className="text-lg leading-8 text-white/85">We believe every child deserves the chance to build a strong foundation, discover what they can do, and feel proud of how they learn.</p><div className="mt-8 flex items-center gap-3 font-bold"><BookOpen className="size-6" /> Building brighter beginnings, together.</div></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-2xl"><SectionLabel>FAQ</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Common questions.</h2></div>
        <div className="mt-10 grid gap-4">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <div key={item.question} className="overflow-hidden rounded-[24px] border border-[#09859b]/10 bg-white shadow-[0_10px_30px_rgba(25,59,59,0.04)]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-black text-[#09859b]">{item.question}</span>
                  <span className={`flex size-9 items-center justify-center rounded-full border border-[#09859b]/10 bg-[#f7fbfb] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="size-4 text-[#09859b]" />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-[#09859b]/10 px-6 py-5">
                    <p className="text-base leading-7 text-[#09859b]/70">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-32"><div><SectionLabel>Let&apos;s talk</SectionLabel><h2 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl">Let&apos;s make learning brighter.</h2><p className="mt-7 max-w-lg text-lg leading-8 text-[#09859b]/65">Whether you&apos;re a parent, school, teacher, or organisation, we&apos;d love to hear how Kinkan can support your learning community.</p><a href="mailto:info@kinkan.org" className="mt-8 inline-flex items-center rounded-full bg-[#09859b] px-6 py-4 font-bold text-white transition-transform hover:-translate-y-1"><Mail className="mr-2 size-4" /> Talk to Kinkan</a></div><div className="flex flex-col justify-end gap-6 rounded-[28px] bg-[#d9f7f5] p-8"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#09859b]/50">Our address</p><p className="mt-2 text-xl font-bold">No. 3 Wisdom Street, Glory Hills, West Frafraha</p></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#09859b]/50">Email us</p><a href="mailto:info@kinkan.org" className="mt-2 block text-xl font-bold hover:text-[#ff516f]">info@kinkan.org</a></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#09859b]/50">Call us</p><div className="mt-2 flex items-center gap-2 text-xl font-bold hover:text-[#ff516f]"><PhoneCall className="size-5" /><a href="tel:+233208560866">+233 20 856 0866</a></div></div><div className="flex gap-3 border-t border-[#09859b]/15 pt-6"><a href="#contact" aria-label="Instagram" className="flex size-11 items-center justify-center rounded-full bg-white hover:bg-[#eecc3b]"><Camera className="size-4" /></a><a href="#contact" aria-label="X / Twitter" className="flex size-11 items-center justify-center rounded-full bg-white hover:bg-[#eecc3b]"><AtSign className="size-4" /></a><a href="#contact" aria-label="Facebook" className="flex size-11 items-center justify-center rounded-full bg-white hover:bg-[#eecc3b]"><Users className="size-4" /></a></div></div></section>
    </main>

    <footer className="border-t border-[#09859b]/10 bg-white px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><Logo /></div><div className="flex flex-wrap gap-5 text-sm font-semibold text-[#09859b]/60"><a href="#about">About</a><a href="#programs">Programs</a><a href="#team">Team</a><a href="#contact">Contact</a></div><p className="text-xs text-[#09859b]/45">© 2026 Kinkan Educational Consult</p></div></footer>
  </div>
}

export default KinkanSite

// Imported for a compact, self-contained icon vocabulary used throughout the brand.
void PenLine
void ChevronDown
void Users
