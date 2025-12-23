import { Heart, Search, Users, Zap, Globe } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { trendingCauses } from '../data/ImpactData';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Find NGOs',
      description: 'Discover verified organizations making real change',
      filter: 'organizations'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Join Campaigns',
      description: 'Participate in active movements worldwide',
      filter: 'campaigns'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Volunteer',
      description: 'Find opportunities that match your skills',
      filter: 'volunteer'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Micro-Actions',
      description: 'Make an impact in just 5 minutes',
      filter: 'actions'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-foreground/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 pt-20 pb-32">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-sm">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Impact<span className="text-primary">Search</span>
              </h1>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Search for a cause.
              <br />
              <span className="text-primary">Find ways to help.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              The search engine that connects you with NGOs, campaigns, volunteer opportunities, and micro-actions to make a difference.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <SearchBar variant="hero" />
          </div>

          {/* Trending Causes */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-muted-foreground">Trending:</span>
            {trendingCauses.map((cause) => (
              <button
                key={cause}
                onClick={() => navigate(`/search?q=${encodeURIComponent(cause)}`)}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {cause}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <h3 className="text-center text-2xl font-bold text-foreground mb-12">
            Every search leads to impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => navigate(`/search?filter=${feature.filter}`)}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group text-left cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10K+', label: 'NGOs Listed' },
            { value: '50K+', label: 'Volunteers Connected' },
            { value: '1M+', label: 'Actions Taken' },
            { value: '100+', label: 'Countries' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 ImpactSearch. Making it easy to do good.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
