import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import logo from '@/assets/Bhekizizwe_logo_1783348910396.jpg';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please provide more details'),
});

export function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: 'Message Sent',
      description: 'Thank you for contacting Bhekizizwe Projects & Civils. Our team will get back to you shortly.',
    });
    form.reset();
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const officeHours = [
    { day: 'Monday – Friday', hours: '08:00 – 17:00' },
    { day: 'Saturday', hours: 'By Appointment' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <PageHero
        title="Get In Touch"
        subtitle="Contact our team for consultations, site assessments, tender inquiries and project discussions."
      />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          <div className="text-center mb-16">
            <img src={logo} alt="Bhekizizwe Projects" className="h-[80px] w-auto mx-auto mb-6 rounded shadow-sm bg-white p-2" />
            <h2 className="heading-md text-[#1B5E20]">We are ready to build with you</h2>
            <p className="text-gray-600 mt-3">Based in KwaZulu-Natal, operating across South Africa and beyond.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info — 2 cols */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2 space-y-5"
            >
              {/* Phone / WhatsApp */}
              <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 card-hover relative overflow-hidden">
                <div className="absolute right-0 top-0 w-20 h-20 bg-[#F9A825]/10 rounded-bl-full"></div>
                <div className="w-12 h-12 bg-[#1B5E20]/10 rounded-full flex items-center justify-center text-[#1B5E20] mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Director</p>
                <p className="font-display font-bold text-xl text-gray-900">Clinton Stuart</p>
                <p className="font-display font-bold text-2xl text-[#1B5E20] mt-1">060 668 2342</p>
                <div className="flex gap-3 mt-4">
                  <a href="tel:0606682342" className="btn-green py-2 px-4 text-sm w-full text-center">
                    📞 Call
                  </a>
                  <a
                    href="https://wa.me/27606682342"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] text-white py-2 px-4 rounded font-bold text-sm w-full flex justify-center items-center gap-2 hover:bg-[#128C7E] transition-colors"
                  >
                    <FaWhatsapp size={18} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-[#1B5E20]/10 rounded-full flex items-center justify-center text-[#1B5E20] mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                <p className="font-display font-bold text-lg text-gray-900 break-all">bhekizizweinfo@gmail.com</p>
                <a href="mailto:bhekizizweinfo@gmail.com" className="mt-3 inline-block text-sm font-bold text-[#1B5E20] hover:underline">
                  Send Email →
                </a>
              </div>

              {/* Location */}
              <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-[#1B5E20]/10 rounded-full flex items-center justify-center text-[#1B5E20] mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                <p className="font-display font-bold text-lg text-gray-900">KwaZulu-Natal</p>
                <p className="text-gray-600 font-medium mt-1">South Africa</p>
                <p className="text-gray-500 text-sm mt-2">Serving clients nationwide and internationally.</p>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-[#1B5E20]/10 rounded-full flex items-center justify-center text-[#1B5E20] mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Office Hours</p>
                <ul className="space-y-3">
                  {officeHours.map((h) => (
                    <li key={h.day} className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-gray-700">{h.day}</span>
                      <span className={`font-bold ${h.hours === 'Closed' ? 'text-gray-400' : 'text-[#1B5E20]'}`}>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form — 3 cols */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3 bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-12"
            >
              <h3 className="font-display font-bold text-3xl mb-2 text-gray-900">Request a Quote</h3>
              <p className="text-gray-500 mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-wider text-xs font-bold text-gray-600">Full Name</FormLabel>
                          <FormControl>
                            <input {...field} className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/50 focus:border-[#1B5E20] transition-all" placeholder="John Doe" />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-wider text-xs font-bold text-gray-600">Company (Optional)</FormLabel>
                          <FormControl>
                            <input {...field} className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/50 focus:border-[#1B5E20] transition-all" placeholder="Acme Corp" />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-wider text-xs font-bold text-gray-600">Email Address</FormLabel>
                          <FormControl>
                            <input {...field} type="email" className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/50 focus:border-[#1B5E20] transition-all" placeholder="john@example.com" />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-wider text-xs font-bold text-gray-600">Phone Number</FormLabel>
                          <FormControl>
                            <input {...field} className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/50 focus:border-[#1B5E20] transition-all" placeholder="060 123 4567" />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-wider text-xs font-bold text-gray-600">Service Required</FormLabel>
                        <FormControl>
                          <select {...field} className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/50 focus:border-[#1B5E20] transition-all appearance-none cursor-pointer">
                            <option value="" disabled>Select a service...</option>
                            <option value="Residential Construction">Residential Construction</option>
                            <option value="Commercial Construction">Commercial Construction</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Renovations">Renovations</option>
                            <option value="Government / Municipal">Government / Municipal</option>
                            <option value="International Projects">International Projects</option>
                            <option value="Other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-wider text-xs font-bold text-gray-600">Project Details</FormLabel>
                        <FormControl>
                          <textarea {...field} rows={5} className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/50 focus:border-[#1B5E20] transition-all resize-none" placeholder="Tell us about your project requirements..." />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2 py-4 text-lg">
                    Submit Inquiry <Send size={20} />
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full border-t border-gray-200">
        <div className="w-full h-[420px] overflow-hidden">
          <iframe
            title="Bhekizizwe Projects & Civils - KwaZulu-Natal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924249.4117476788!2d29.85873!3d-29.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef5f2b75a7ef7b7%3A0x68d85e4a6b46f97!2sKwaZulu-Natal%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
