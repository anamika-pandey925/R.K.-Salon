import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, Send, Scissors } from 'lucide-react';
import { appointmentServices, salonInfo } from '../config/salonData';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Valid email is required';
    
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // TODO: Send formData to backend (Firebase, API, etc.)
      console.log('Submitting appointment data:', formData);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-wider font-semibold text-sm mb-3 block">
              Book Now
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
              Book Your Appointment
            </h2>
            <p className="text-charcoal/60 text-lg mb-8 max-w-lg">
              Reserve your spot and let our experts take care of you. We look forward to seeing you at R.K. Salon.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Easy online booking',
                'Choose your preferred service',
                'Pick a convenient date & time',
                'Confirmation details'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                  <span className="text-charcoal/80">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider">Call Us</p>
                  <a href={`tel:${salonInfo.phone}`} className="font-medium text-charcoal hover:text-gold transition">
                    {salonInfo.phone || salonInfo.contact?.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider">Email Us</p>
                  <a href={`mailto:${salonInfo.email}`} className="font-medium text-charcoal hover:text-gold transition">
                    {salonInfo.email || salonInfo.contact?.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#faf9f6] rounded-2xl p-8 shadow-xl border border-charcoal/5"
          >
            {isSubmitted ? (
              <div className="text-center py-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Appointment Request Submitted!</h3>
                <p className="text-charcoal/60 mb-8 max-w-sm mx-auto">
                  We will contact you shortly to confirm your appointment. Thank you for choosing R.K. Salon.
                </p>
                <button
                  onClick={resetForm}
                  className="px-8 py-3 bg-charcoal text-white rounded-lg hover:bg-black transition duration-300 font-medium inline-block"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal/70 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-charcoal/40" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.name ? 'border-red-500' : 'border-charcoal/10'} rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal/70 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-charcoal/40" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.phone ? 'border-red-500' : 'border-charcoal/10'} rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition`}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal/70 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-charcoal/40" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.email ? 'border-red-500' : 'border-charcoal/10'} rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal/70 mb-2">
                      Select Service
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Scissors className="h-5 w-5 text-charcoal/40" />
                      </div>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.service ? 'border-red-500' : 'border-charcoal/10'} rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition appearance-none`}
                      >
                        <option value="" disabled>Select a Service</option>
                        {appointmentServices.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-charcoal/70 mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-charcoal/40" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.date ? 'border-red-500' : 'border-charcoal/10'} rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-charcoal`}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-charcoal/70 mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-charcoal/40" />
                      </div>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.time ? 'border-red-500' : 'border-charcoal/10'} rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-charcoal`}
                      />
                    </div>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal/70 mb-2">
                    Special Requests (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-charcoal/40" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition resize-none"
                      placeholder="Any specific requests or questions?"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-charcoal text-white rounded-xl hover:bg-black transition duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Book Appointment
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
