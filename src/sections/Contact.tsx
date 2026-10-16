import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { portfolio } from '../data/portfolioData'
import { Reveal, SectionHeading, SocialLinks } from '../components/Shared'

interface ContactFields { name: string; email: string; subject: string; message: string }

export default function Contact() {
  const [prepared, setPrepared] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFields>({ mode: 'onTouched' })
  const send = (values: ContactFields) => {
    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    window.location.assign(`mailto:${portfolio.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`)
    setPrepared(true)
  }
  return <section id="contact" className="section contact-section" tabIndex={-1} aria-labelledby="contact-title"><div className="container">
    <SectionHeading number="06" label="GET IN TOUCH" title={<span id="contact-title">Let's Create<br />Something Great</span>} />
    <div className="contact-grid"><Reveal className="contact-copy">{portfolio.contactIntroduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <div className="contact-methods"><a href={`mailto:${portfolio.email}`} className="contact-method"><span className="contact-method-icon"><Mail size={20} /></span><span><small>DROP ME A LINE</small><span>{portfolio.email}</span></span><ArrowUpRight size={18} /></a><div className="contact-method"><span className="contact-method-icon"><MapPin size={20} /></span><span><small>FIND ME IN</small><span>{portfolio.location}</span></span></div></div>
      <div className="contact-social"><span>ELSEWHERE ON THE WEB</span><SocialLinks /></div>
    </Reveal><Reveal><form className="contact-form" onSubmit={handleSubmit(send)} noValidate>
      <div className="form-heading"><span>Have something in mind?</span><ArrowUpRight size={22} /></div>
      <div className="form-row"><div className="form-field"><label htmlFor="full-name">Full name <span>*</span></label><input id="full-name" autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name', { required: 'Please enter your full name.', validate: value => value.trim().length >= 2 || 'Please enter at least 2 characters.', maxLength: { value: 100, message: 'Please use 100 characters or fewer.' } })} />{errors.name && <p className="form-error" id="name-error" role="alert">{errors.name.message}</p>}</div>
      <div className="form-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email', { required: 'Please enter your email address.', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' }, maxLength: { value: 254, message: 'Please use a shorter email address.' } })} />{errors.email && <p className="form-error" id="email-error" role="alert">{errors.email.message}</p>}</div></div>
      <div className="form-field"><label htmlFor="subject">Subject <span>*</span></label><input id="subject" placeholder="What would you like to talk about?" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} {...register('subject', { required: 'Please add a subject.', validate: value => !!value.trim() || 'Please add a subject.', maxLength: { value: 150, message: 'Please keep the subject under 150 characters.' } })} />{errors.subject && <p className="form-error" id="subject-error" role="alert">{errors.subject.message}</p>}</div>
      <div className="form-field"><label htmlFor="message">Message <span>*</span></label><textarea id="message" rows={5} placeholder="Tell me a little about your opportunity or idea…" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message', { required: 'Please write a message.', validate: value => value.trim().length >= 10 || 'Please write at least 10 characters.', maxLength: { value: 1800, message: 'Please keep your message under 1,800 characters for email compatibility.' } })} />{errors.message && <p className="form-error" id="message-error" role="alert">{errors.message.message}</p>}</div>
      <button className="button button-primary form-submit" type="submit">Send Message<ArrowRight size={17} /></button><p className="form-note">Opens your email app with a prepared draft. You send it from there.</p><p className="form-status" role="status">{prepared && <>Your draft is ready in your email app. If it didn't open, email <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a> directly. No message has been sent by this website.</>}</p>
    </form></Reveal></div>
  </div></section>
}
