import { useState, useRef, useEffect } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trendingCauses } from '../data/ImpactData';

interface SearchBarProps {
  initialQuery?: string;
  variant?: 'hero' | 'compact';
  onSearch?: (query: string) => void;
}

const SearchBar = ({ initialQuery = '', variant = 'hero', onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filteredSuggestions = trendingCauses.filter(cause =>
    cause.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    if (finalQuery.trim()) {
      if (onSearch) {
        onSearch(finalQuery);
      } else {
        navigate(`/search?q=${encodeURIComponent(finalQuery.trim())}`);
      }
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = () => setShowSuggestions(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isHero = variant === 'hero';

  return (
    <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
      <div
        className={`
          flex items-center gap-3 bg-card border-2 transition-all duration-300
          ${isHero ? 'px-6 py-4 rounded-full' : 'px-4 py-3 rounded-lg'}
          ${isFocused ? 'border-primary shadow-lg shadow-primary/20' : 'border-border hover:border-muted'}
        `}
      >
        <Search className={`text-muted transition-colors ${isFocused ? 'text-primary' : ''} ${isHero ? 'w-6 h-6' : 'w-5 h-5'}`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a cause you care about..."
          className={`
            flex-1 bg-transparent outline-none text-foreground placeholder:text-muted
            ${isHero ? 'text-lg' : 'text-base'}
          `}
        />
        <button
          onClick={() => handleSearch()}
          className={`
            bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:opacity-90
            ${isHero ? 'px-6 py-2 rounded-full' : 'px-4 py-1.5 rounded-md text-sm'}
          `}
        >
          Search
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && query.length > 0 && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50">
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => {
                setQuery(suggestion);
                handleSearch(suggestion);
              }}
              className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-3"
            >
              <Sparkles className="w-4 h-4 text-accent-foreground" />
              <span className="text-foreground">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
