import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { HSEPage } from '@/pages/HSEPage';
import { CertificationsPage } from '@/pages/CertificationsPage';
import { CareersPage } from '@/pages/CareersPage';
import { ContactPage } from '@/pages/ContactPage';
import { CommunityImpactPage } from '@/pages/CommunityImpactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/community-impact" component={CommunityImpactPage} />
            <Route path="/hse" component={HSEPage} />
            <Route path="/certifications" component={CertificationsPage} />
            <Route path="/careers" component={CareersPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <ScrollToTop />
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
