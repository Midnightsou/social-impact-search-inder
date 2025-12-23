import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Building2, Megaphone, HandHeart, Zap, ArrowLeft, Search } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import ResultCard from '@/components/ResultCard';
import CategorySection from '@/components/CategorySection';
import { searchImpact, getAllData, ImpactResult } from '../data/ImpactData';

type FilterType = 'all' | 'organizations' | 'campaigns' | 'volunteer' | 'actions';

const filterTitles: Record<FilterType, string> = {
  all: 'All Results',
  organizations: 'Find NGOs',
  campaigns: 'Join Campaigns',
  volunteer: 'Volunteer Opportunities',
  actions: 'Micro-Actions'
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const filter = (searchParams.get('filter') as FilterType) || 'all';
  const [results, setResults] = useState<ImpactResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (query) {
        const data = searchImpact(query);
        setResults(data);
      } else if (filter && filter !== 'all') {
        // No query but has filter - show all data for that category
        const allData = getAllData();
        setResults(allData);
      } else {
        setResults(null);
      }
      setIsLoading(false);
    }, 500);
  }, [query, filter]);

  const handleSearch = (newQuery: string) => {
    navigate(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  const showOrganizations = filter === 'all' || filter === 'organizations';
  const showCampaigns = filter === 'all' || filter === 'campaigns';
  const showVolunteer = filter === 'all' || filter === 'volunteer';
  const showActions = filter === 'all' || filter === 'actions';

  const totalResults = results
    ? (showOrganizations ? results.organizations.length : 0) +
      (showCampaigns ? results.campaigns.length : 0) +
      (showVolunteer ? results.volunteerOpportunities.length : 0) +
      (showActions ? results.microActions.length : 0)
    : 0;

  const pageTitle = query 
    ? `Results for "${query}"` 
    : filterTitles[filter];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">
                  Impact<span className="text-primary">Search</span>
                </span>
              </div>
            </button>
            <div className="flex-1 max-w-xl">
              <SearchBar initialQuery={query} variant="compact" onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {(['all', 'organizations', 'campaigns', 'volunteer', 'actions'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  params.set('filter', f);
                  navigate(`/search?${params.toString()}`);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                }`}
              >
                {filterTitles[f]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground">Searching for ways to help...</p>
          </div>
        ) : results && totalResults > 0 ? (
          <>
            {/* Results Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {query ? (
                  <>Results for "<span className="text-primary">{query}</span>"</>
                ) : (
                  <span className="text-primary">{pageTitle}</span>
                )}
              </h1>
              <p className="text-muted-foreground">
                Found {totalResults} ways to make an impact
              </p>
            </div>

            {/* Organizations */}
            {showOrganizations && results.organizations.length > 0 && (
              <CategorySection
                title="Organizations"
                description="Verified NGOs and nonprofits working on this cause"
                icon={<Building2 className="w-5 h-5 text-primary" />}
                count={results.organizations.length}
              >
                {results.organizations.map((org) => (
                  <ResultCard
                    key={org.id}
                    type="ngo"
                    title={org.name}
                    description={org.description}
                    link={org.website}
                    badge={{ text: org.category, variant: 'secondary' }}
                    icon={<Building2 className="w-4 h-4 text-primary" />}
                  />
                ))}
              </CategorySection>
            )}

            {/* Campaigns */}
            {showCampaigns && results.campaigns.length > 0 && (
              <CategorySection
                title="Active Campaigns"
                description="Current movements you can join right now"
                icon={<Megaphone className="w-5 h-5 text-destructive" />}
                count={results.campaigns.length}
              >
                {results.campaigns.map((campaign) => (
                  <ResultCard
                    key={campaign.id}
                    type="campaign"
                    title={campaign.title}
                    description={campaign.description}
                    link={campaign.link}
                    badge={{
                      text: campaign.urgency === 'high' ? 'Urgent' : campaign.urgency === 'medium' ? 'Active' : 'Ongoing',
                      variant: campaign.urgency === 'high' ? 'destructive' : 'secondary'
                    }}
                    metadata={[{ label: 'By', value: campaign.organization }]}
                    icon={<Megaphone className="w-4 h-4 text-destructive" />}
                  />
                ))}
              </CategorySection>
            )}

            {/* Volunteer Opportunities */}
            {showVolunteer && results.volunteerOpportunities.length > 0 && (
              <CategorySection
                title="Volunteer Opportunities"
                description="Give your time and skills to make a difference"
                icon={<HandHeart className="w-5 h-5 text-accent-foreground" />}
                count={results.volunteerOpportunities.length}
              >
                {results.volunteerOpportunities.map((opportunity) => (
                  <ResultCard
                    key={opportunity.id}
                    type="volunteer"
                    title={opportunity.title}
                    description={`Join ${opportunity.organization} and contribute to meaningful change.`}
                    link={opportunity.link}
                    badge={{
                      text: opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1),
                      variant: 'outline'
                    }}
                    metadata={[
                      { label: 'Location', value: opportunity.location },
                      { label: 'Commitment', value: opportunity.commitment }
                    ]}
                    icon={<HandHeart className="w-4 h-4 text-accent-foreground" />}
                  />
                ))}
              </CategorySection>
            )}

            {/* Micro-Actions */}
            {showActions && results.microActions.length > 0 && (
              <CategorySection
                title="Micro-Actions"
                description="Quick actions you can take in minutes"
                icon={<Zap className="w-5 h-5 text-secondary" />}
                count={results.microActions.length}
              >
                {results.microActions.map((action) => (
                  <ResultCard
                    key={action.id}
                    type="action"
                    title={action.title}
                    description={action.description}
                    link={action.link}
                    metadata={[
                      { label: 'Time', value: action.timeRequired },
                      { label: 'Impact', value: action.impact }
                    ]}
                    icon={<Zap className="w-4 h-4 text-secondary" />}
                  />
                ))}
              </CategorySection>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              {query ? 'No results found. Try a different search term.' : 'Enter a search term to find ways to help.'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchResults;