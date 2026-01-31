import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Clock,
  Shield,
  Pill,
  Store,
  ArrowRight,
  CheckCircle2,
  Zap,
  Heart,
  Package,
  Users,
  TrendingUp,
  BarChart3,
  AlertCircle,
  Sparkles,
  Activity,
  Globe,
  Star,
} from 'lucide-react';
import useAuthStore from '../store/authStore';
import { useState, useEffect } from 'react';

// Animated gradient background
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
  </div>
);

// Floating particles
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
        initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
          y: Math.random() * 600,
        }}
        animate={{
          y: [null, Math.random() * -100, Math.random() * 100],
          x: [null, Math.random() * 50 - 25],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ))}
  </div>
);

// Typewriter effect component
const TypewriterText = ({ texts, className }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentText.length) {
          setText(currentText.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(currentText.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Customer Home Page Component
const CustomerHomePage = ({ user }) => {
  const stats = [
    { value: '10K+', label: 'Medicines', icon: Pill },
    { value: '500+', label: 'Pharmacies', icon: Store },
    { value: '50K+', label: 'Lives Saved', icon: Heart },
    { value: '24/7', label: 'Available', icon: Clock },
  ];

  const features = [
    {
      icon: Search,
      title: 'Instant Search',
      description: 'Find any medicine in seconds with our AI-powered search',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'GPS Navigation',
      description: 'Get turn-by-turn directions to the nearest pharmacy',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Live Stock Updates',
      description: 'Real-time inventory updates from verified pharmacies',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Verified Stores',
      description: '100% verified and licensed pharmacies only',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-white/80 font-medium">Emergency Medicine Locator</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find{' '}
                <span className="gradient-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Life-Saving
                </span>
                <br />
                Medicines{' '}
                <TypewriterText
                  texts={['Instantly', 'Nearby', 'Now']}
                  className="text-primary-400"
                />
              </h1>

              {/* Powerful Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative mb-8"
              >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-primary-500 to-purple-500 rounded-full" />
                <blockquote className="pl-6 py-2">
                  <p className="text-xl sm:text-2xl font-medium text-white/90 italic">
                    "No one should lose a life because they couldn't find a medicine in time."
                  </p>
                </blockquote>
              </motion.div>

              <p className="text-lg text-white/70 mb-8 max-w-lg">
                In medical emergencies, every second counts. Our platform connects you to nearby pharmacies with the medicines you need — fast.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/search">
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-button flex items-center gap-3 w-full sm:w-auto justify-center text-lg px-8 py-4 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                    <Search size={24} />
                    <span className="font-semibold">Find Medicine Now</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                {user && (
                  <Link to="/customer/dashboard">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-button-secondary flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-4"
                    >
                      <Activity size={20} />
                      <span>My Dashboard</span>
                    </motion.button>
                  </Link>
                )}

                {!user && (
                  <Link to="/auth">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-button-secondary flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-4"
                    >
                      <Store size={20} />
                      <span>Register Pharmacy</span>
                    </motion.button>
                  </Link>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-2">
                      <stat.icon size={18} className="text-primary-400" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Interactive Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Demo Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8 relative z-10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center"
                    >
                      <Pill size={32} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold">Emergency Search</h3>
                      <p className="text-white/50">Find medicines instantly</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Search Demo */}
                    <motion.div
                      animate={{ boxShadow: ['0 0 0 0 rgba(20, 184, 166, 0)', '0 0 0 4px rgba(20, 184, 166, 0.1)', '0 0 0 0 rgba(20, 184, 166, 0)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="glass-input flex items-center gap-3"
                    >
                      <Search size={20} className="text-primary-400" />
                      <span className="text-white/70">Paracetamol 500mg...</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-green-400 text-sm"
                    >
                      <CheckCircle2 size={16} />
                      <span>5 pharmacies found within 2km</span>
                    </motion.div>

                    <div className="space-y-2">
                      {[
                        { name: 'Apollo Pharmacy', distance: '0.5 km', stock: 'In Stock' },
                        { name: 'MedPlus Store', distance: '0.8 km', stock: 'In Stock' },
                        { name: 'Wellness Pharma', distance: '1.2 km', stock: 'Low Stock' },
                      ].map((store, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-600/20 flex items-center justify-center">
                              <Store size={18} className="text-primary-400" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{store.name}</div>
                              <div className="text-xs text-white/50 flex items-center gap-1">
                                <MapPin size={10} />
                                {store.distance}
                              </div>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${store.stock === 'In Stock' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                            {store.stock}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl glass flex items-center justify-center"
                >
                  <Zap size={32} className="text-yellow-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass flex items-center justify-center z-0"
                >
                  <Heart size={24} className="text-red-500" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 -right-12 w-14 h-14 rounded-full glass flex items-center justify-center"
                >
                  <Globe size={20} className="text-cyan-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Quote Section */}
      <section className="py-16 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-purple-500/10" />
            <div className="absolute top-4 left-4">
              <Sparkles className="text-primary-400/50" size={24} />
            </div>
            <div className="absolute bottom-4 right-4">
              <Sparkles className="text-purple-400/50" size={24} />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mx-auto mb-6"
              >
                <Heart size={40} className="text-white" />
              </motion.div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Every Minute Matters When
                <br />
                <span className="gradient-text">Lives Are at Stake</span>
              </h2>
              
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
                Our mission is simple: ensure no one suffers because they couldn't locate a critical medicine in time. 
                With real-time data from 500+ pharmacies, we're making emergency medicine access faster than ever.
              </p>

              <div className="flex items-center justify-center gap-8 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-400" />
                  <span className="text-white/70">Average search: 3 seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-white/70">Coverage: Pan India</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">MediFind</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Built for emergencies. Designed to save lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-white/60">Three simple steps to find your medicine</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Search', description: 'Enter the medicine name', icon: Search },
              { step: '02', title: 'Locate', description: 'Find nearest pharmacies', icon: MapPin },
              { step: '03', title: 'Navigate', description: 'Get directions instantly', icon: ArrowRight },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 h-full text-center">
                  <div className="text-6xl font-bold gradient-text opacity-30 mb-4">{item.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-primary-500/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-6"
              >
                <Search size={40} className="text-white" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Find Your Medicine?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Don't waste precious time. Start your search now and find the medicine you need at a pharmacy near you.
              </p>

              <Link to="/search">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(20, 184, 166, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button text-lg px-10 py-4 flex items-center gap-3 mx-auto"
                >
                  <Search size={24} />
                  <span className="font-semibold">Search Medicine</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">+</span>
            </div>
            <span className="font-semibold gradient-text">MediFind</span>
          </div>
          <p className="text-white/50 text-sm text-center">
            © 2026 MediFind. Saving lives, one search at a time.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Pharmacy/Retailer Home Page Component
const PharmacyHomePage = ({ user, profile }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const quickStats = [
    { label: 'Total Products', value: '1,247', icon: Package, color: 'from-blue-500 to-cyan-500' },
    { label: 'Orders Today', value: '48', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Customer Visits', value: '892', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Revenue', value: '₹24.5K', icon: BarChart3, color: 'from-orange-500 to-red-500' },
  ];

  const quickActions = [
    { title: 'Manage Inventory', description: 'Add or update medicines', icon: Package, link: '/retailer/inventory', color: 'from-blue-500 to-cyan-500' },
    { title: 'Store Settings', description: 'Update store details', icon: Store, link: '/retailer/stores', color: 'from-purple-500 to-pink-500' },
    { title: 'View Analytics', description: 'Track performance', icon: BarChart3, link: '/retailer/dashboard', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  Welcome back,{' '}
                  <span className="gradient-text">{profile?.full_name?.split(' ')[0] || 'Partner'}</span>!
                </h1>
                <p className="text-white/60">
                  Manage your pharmacy and help customers find life-saving medicines.
                </p>
              </div>
              
              {/* Quick Search for Pharmacy */}
              <div className="flex-shrink-0 w-full md:w-80">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                  <input
                    type="text"
                    placeholder="Quick search inventory..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="glass-input pl-10 pr-4 py-2 w-full text-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact Quote for Pharmacies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 mb-8 border-l-4 border-primary-500"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Heart size={24} className="text-white" />
              </div>
              <div>
                <p className="text-lg font-medium text-white/90 italic mb-1">
                  "You're not just selling medicines — you're giving hope to families in their darkest moments."
                </p>
                <p className="text-sm text-white/50">
                  Thank you for being part of MediFind's mission to save lives.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3 }}
                className="glass-card p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <TrendingUp size={16} className="text-green-400" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link to={action.link}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card p-6 h-full group cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <action.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-white/60">{action.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary-400 text-sm font-medium">
                      <span>Open</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Tools Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Medicine Search Tool */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Search size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Search Medicines</h3>
                  <p className="text-xs text-white/50">Check market availability</p>
                </div>
              </div>
              <Link to="/search">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-button-secondary flex items-center justify-center gap-2"
                >
                  <Search size={18} />
                  <span>Search in Market</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                  <AlertCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Low Stock Alerts</h3>
                  <p className="text-xs text-white/50">3 items need attention</p>
                </div>
              </div>
              <div className="space-y-2">
                {['Paracetamol 500mg', 'Insulin Glargine', 'Amoxicillin'].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-sm">
                    <span>{item}</span>
                    <span className="text-yellow-400 text-xs">Low Stock</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">+</span>
            </div>
            <span className="font-semibold gradient-text">MediFind Partner</span>
          </div>
          <p className="text-white/50 text-sm text-center">
            © 2026 MediFind. Empowering pharmacies to save lives.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  const { user, profile } = useAuthStore();

  // Determine which home page to show based on user role
  if (user && profile?.role === 'retailer') {
    return <PharmacyHomePage user={user} profile={profile} />;
  }

  return <CustomerHomePage user={user} />;
};

export default HomePage;
