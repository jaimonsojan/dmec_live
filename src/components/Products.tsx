import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_CATEGORIES } from '../types';
import { 
  Trash2, Truck, Droplet, Fuel, Layers, ShieldAlert, Home, Shield,
  Check, FileText, Compass, PenTool 
} from 'lucide-react';

const CATEGORY_IMAGES: Record<string, string> = {
  waste: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
  transport: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  liquid: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  fuel: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
  access: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
  emergency: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  site: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  safety: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
};

export default function Products() {
  const [activeTab, setActiveTab] = useState(PRODUCT_CATEGORIES[0].id);

  // Map icon name from string to Lucide Icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trash2': return <Trash2 className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Droplet': return <Droplet className="w-5 h-5" />;
      case 'Fuel': return <Fuel className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      default: return <Shield className="w-5 h-5" />;
    }
  };

  const activeCategory = PRODUCT_CATEGORIES.find(c => c.id === activeTab) || PRODUCT_CATEGORIES[0];

  return (
    <section id="products" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden border-t border-[var(--border-color)] transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.02] z-0">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border-2 border-brand-yellow rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow font-bold">
            02 // CERTIFIED PRODUCT GROUPS
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--text-primary)] mt-2 tracking-tight">
            STANDARD PRODUCT CATALOG
          </h2>
          <p className="max-w-xl text-[var(--text-secondary)] text-sm md:text-base mt-4 leading-relaxed font-light">
            All units are engineered server-side with 100% customizable capacities to suit specific operational vehicle chassis, load conditions, and harsh site environments.
          </p>
        </motion.div>

        {/* Dynamic Selector Panels (Apple/Tesla inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Navigation Rail */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none w-full"
          >
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-left border transition-all duration-300 whitespace-nowrap lg:whitespace-normal cursor-pointer flex-shrink-0 lg:flex-shrink-1 ${
                    isActive
                      ? 'bg-brand-yellow text-black border-brand-yellow shadow-lg shadow-brand-yellow/10 font-semibold'
                      : 'bg-black/5 dark:bg-white/[0.01] text-[var(--text-secondary)] border-[var(--border-color)] hover:bg-black/10 dark:hover:bg-white/[0.03] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-black/10 text-black' : 'bg-black/10 dark:bg-white/5 text-brand-yellow'
                  }`}>
                    {getIcon(cat.iconName || '')}
                  </div>
                  <div>
                    <span className="block font-display text-sm uppercase tracking-wider font-bold">
                      {cat.title}
                    </span>
                    <span className={`hidden md:block font-mono text-[9px] uppercase tracking-widest ${
                      isActive ? 'text-black/60' : 'text-[var(--text-secondary)]'
                    }`}>
                      {cat.products.length} Class Categories
                    </span>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Side: Main Dynamic Display Area with liquid glass details */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="p-8 md:p-10 rounded-3xl liquid-glass text-left relative overflow-hidden border border-brand-yellow/10 glass-glow-yellow"
              >
                <div className="absolute top-8 right-8 text-brand-yellow/5">
                  {getIcon(activeCategory.iconName || '')}
                </div>

                {/* Header info of selected category */}
                <div className="border-b border-[var(--border-color)] pb-8 mb-8">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-brand-yellow bg-brand-yellow/5 px-3 py-1 rounded-md border border-brand-yellow/15 font-bold">
                    PROUDLY FABRICATED IN QATAR
                  </span>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-[var(--text-primary)] mt-4 font-semibold">
                    {activeCategory.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mt-4 font-light">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Banner category image with secure referral policy */}
                <div className="relative h-48 md:h-64 w-full rounded-2xl overflow-hidden mb-8 shadow-inner border border-[var(--border-color)]">
                  <img 
                    src={CATEGORY_IMAGES[activeCategory.id]} 
                    alt={activeCategory.title}
                    className="w-full h-full object-cover brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-widest text-brand-yellow bg-black/70 px-2.5 py-1 rounded border border-brand-yellow/15 font-bold">
                    Certified Asset Quality • Qatar Manufacturing
                  </span>
                </div>

                {/* Content layout split: Products Included & Technical highlight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Product List */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-brand-yellow mb-4 flex items-center gap-2 font-bold">
                      <Compass className="w-3.5 h-3.5" /> Included Equipment Assets
                    </h4>
                    <div className="flex flex-col gap-3">
                      {activeCategory.products.map((prod, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-3 bg-black/5 dark:bg-white/[0.02] border border-[var(--border-color)] rounded-xl hover:bg-black/10 dark:hover:bg-white/[0.04] hover:border-brand-yellow/20 transition-colors"
                        >
                          <div className="w-5 h-5 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-[var(--text-primary)] text-xs md:text-sm font-medium">
                            {prod}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Specs Block */}
                  <div className="flex flex-col justify-between p-6 rounded-2xl bg-black/5 dark:bg-white/[0.02] border border-[var(--border-color)] relative">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3 flex items-center gap-2 font-bold">
                        <FileText className="w-3.5 h-3.5" /> Engineering Highlights
                      </h4>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed font-light">
                        Conforming with international road safety, Qatar Construction Specification (QCS) 2014, AISI, and AWS D1.1 structural welding specifications.
                      </p>
                    </div>

                    {activeCategory.specs && (
                      <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] font-bold mb-1">
                          Material Specification
                        </span>
                        <p className="text-brand-yellow text-xs font-semibold leading-relaxed">
                          {activeCategory.specs}
                        </p>
                      </div>
                    )}

                    <div className="mt-8 flex items-center gap-2 p-3 bg-brand-yellow/5 border border-brand-yellow/15 rounded-xl">
                      <PenTool className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                      <span className="font-sans text-[10px] text-[var(--text-secondary)] font-medium">
                        Contact engineering for custom tank volumes or chassis compatibility.
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
