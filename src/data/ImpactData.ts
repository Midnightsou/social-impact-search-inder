export interface Organization {
  id: string;
  name: string;
  description: string;
  website: string;
  logo?: string;
  category: string;
}

export interface Campaign {
  id: string;
  title: string;
  organization: string;
  description: string;
  link: string;
  urgency: 'high' | 'medium' | 'low';
  endDate?: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: 'remote' | 'onsite' | 'hybrid';
  commitment: string;
  link: string;
}

export interface MicroAction {
  id: string;
  title: string;
  description: string;
  timeRequired: string;
  impact: string;
  link?: string;
}

export interface ImpactResult {
  query: string;
  organizations: Organization[];
  campaigns: Campaign[];
  volunteerOpportunities: VolunteerOpportunity[];
  microActions: MicroAction[];
}

const impactDatabase: Record<string, ImpactResult> = {
  'climate change': {
    query: 'climate change',
    organizations: [
      {
        id: '1',
        name: '350.org',
        description: 'Building a global grassroots movement to solve the climate crisis through online campaigns, grassroots organizing, and mass public actions.',
        website: 'https://350.org',
        category: 'Environmental Advocacy'
      },
      {
        id: '2',
        name: 'Greenpeace',
        description: 'Global campaigning network that acts to change attitudes and behavior, protect and conserve the environment, and promote peace.',
        website: 'https://www.greenpeace.org',
        category: 'Environmental Protection'
      },
      {
        id: '3',
        name: 'The Nature Conservancy',
        description: 'Conserving the lands and waters on which all life depends through science-based solutions.',
        website: 'https://www.nature.org',
        category: 'Conservation'
      },
      {
        id: '4',
        name: 'Climate Reality Project',
        description: 'Founded by Al Gore, training climate activists and advocating for clean energy solutions worldwide.',
        website: 'https://www.climaterealityproject.org',
        category: 'Climate Education'
      }
    ],
    campaigns: [
      {
        id: '1',
        title: 'Stop Fossil Fuel Subsidies',
        organization: '350.org',
        description: 'Join millions demanding governments end fossil fuel subsidies and invest in renewable energy.',
        link: 'https://350.org',
        urgency: 'high'
      },
      {
        id: '2',
        title: 'Plant a Billion Trees',
        organization: 'The Nature Conservancy',
        description: 'Help restore forests worldwide by supporting our goal to plant 1 billion trees by 2030.',
        link: 'https://www.nature.org',
        urgency: 'medium'
      },
      {
        id: '3',
        title: 'Climate Emergency Declaration',
        organization: 'Climate Reality Project',
        description: 'Urge your local government to declare a climate emergency and commit to net-zero emissions.',
        link: 'https://www.climaterealityproject.org',
        urgency: 'high'
      }
    ],
    volunteerOpportunities: [
      {
        id: '1',
        title: 'Climate Reality Leadership Corps',
        organization: 'Climate Reality Project',
        location: 'Worldwide',
        type: 'hybrid',
        commitment: '3-day training + ongoing',
        link: 'https://www.climaterealityproject.org'
      },
      {
        id: '2',
        title: 'Tree Planting Volunteer',
        organization: 'One Tree Planted',
        location: 'Various locations',
        type: 'onsite',
        commitment: '4-8 hours/event',
        link: 'https://onetreeplanted.org'
      },
      {
        id: '3',
        title: 'Climate Science Communicator',
        organization: 'NASA Climate',
        location: 'Remote',
        type: 'remote',
        commitment: '5-10 hours/month',
        link: 'https://climate.nasa.gov'
      }
    ],
    microActions: [
      {
        id: '1',
        title: 'Calculate Your Carbon Footprint',
        description: 'Use an online calculator to understand your environmental impact and identify areas for improvement.',
        timeRequired: '5 minutes',
        impact: 'Personal awareness leads to 10% average reduction in emissions',
        link: 'https://www.carbonfootprint.com/calculator.aspx'
      },
      {
        id: '2',
        title: 'Switch to a Green Energy Provider',
        description: 'Contact your energy provider to switch to renewable energy sources or find a green alternative.',
        timeRequired: '15 minutes',
        impact: 'Can reduce household carbon footprint by up to 1.5 tons/year'
      },
      {
        id: '3',
        title: 'Sign the Climate Petition',
        description: 'Add your voice to millions calling for urgent climate action from world leaders.',
        timeRequired: '2 minutes',
        impact: 'Collective pressure drives policy change',
        link: 'https://www.change.org'
      },
      {
        id: '4',
        title: 'Share Climate Facts',
        description: 'Post verified climate information on your social media to spread awareness.',
        timeRequired: '3 minutes',
        impact: 'Each share reaches an average of 100+ people'
      }
    ]
  },
  'hunger': {
    query: 'hunger',
    organizations: [
      {
        id: '5',
        name: 'World Food Programme',
        description: 'The world\'s largest humanitarian organization saving lives and changing lives, delivering food assistance in emergencies.',
        website: 'https://www.wfp.org',
        category: 'Humanitarian Aid'
      },
      {
        id: '6',
        name: 'Feeding America',
        description: 'Nationwide network of food banks feeding more than 46 million people through pantries and meal programs.',
        website: 'https://www.feedingamerica.org',
        category: 'Food Security'
      },
      {
        id: '7',
        name: 'Action Against Hunger',
        description: 'Global humanitarian organization committed to ending world hunger through nutrition programs.',
        website: 'https://www.actionagainsthunger.org',
        category: 'Nutrition'
      }
    ],
    campaigns: [
      {
        id: '4',
        title: 'Zero Hunger Challenge',
        organization: 'World Food Programme',
        description: 'Support the UN goal to end hunger, achieve food security, and improve nutrition by 2030.',
        link: 'https://www.wfp.org',
        urgency: 'high'
      },
      {
        id: '5',
        title: 'Summer Meals for Kids',
        organization: 'Feeding America',
        description: 'Help provide meals to children who rely on school nutrition programs during summer break.',
        link: 'https://www.feedingamerica.org',
        urgency: 'medium'
      }
    ],
    volunteerOpportunities: [
      {
        id: '4',
        title: 'Food Bank Volunteer',
        organization: 'Feeding America',
        location: 'Local food banks',
        type: 'onsite',
        commitment: '2-4 hours/week',
        link: 'https://www.feedingamerica.org'
      },
      {
        id: '5',
        title: 'Meal Delivery Driver',
        organization: 'Meals on Wheels',
        location: 'Local communities',
        type: 'onsite',
        commitment: '1-2 hours/week',
        link: 'https://www.mealsonwheelsamerica.org'
      }
    ],
    microActions: [
      {
        id: '5',
        title: 'Donate to a Food Bank',
        description: 'Make a monetary or food donation to your local food bank.',
        timeRequired: '5 minutes',
        impact: '$1 can provide 10 meals through food bank networks'
      },
      {
        id: '6',
        title: 'Reduce Food Waste',
        description: 'Plan meals and use leftovers to minimize food waste in your household.',
        timeRequired: '10 minutes',
        impact: 'Average family can save $1,500/year and reduce emissions'
      }
    ]
  },
  'education': {
    query: 'education',
    organizations: [
      {
        id: '8',
        name: 'Room to Read',
        description: 'Transforming the lives of millions of children through literacy and gender equality in education.',
        website: 'https://www.roomtoread.org',
        category: 'Literacy'
      },
      {
        id: '9',
        name: 'Khan Academy',
        description: 'Free, world-class education for anyone, anywhere through online courses and resources.',
        website: 'https://www.khanacademy.org',
        category: 'Online Education'
      },
      {
        id: '10',
        name: 'Teach For All',
        description: 'Global network developing collective leadership to ensure all children can fulfill their potential.',
        website: 'https://teachforall.org',
        category: 'Teaching'
      }
    ],
    campaigns: [
      {
        id: '6',
        title: 'Books for Africa',
        organization: 'Room to Read',
        description: 'Help ship books and educational materials to schools in developing countries.',
        link: 'https://www.roomtoread.org',
        urgency: 'medium'
      }
    ],
    volunteerOpportunities: [
      {
        id: '6',
        title: 'Online Tutor',
        organization: 'Khan Academy',
        location: 'Remote',
        type: 'remote',
        commitment: '2-5 hours/week',
        link: 'https://www.khanacademy.org'
      },
      {
        id: '7',
        title: 'Classroom Teacher',
        organization: 'Teach For All',
        location: 'Various countries',
        type: 'onsite',
        commitment: '2-year commitment',
        link: 'https://teachforall.org'
      }
    ],
    microActions: [
      {
        id: '7',
        title: 'Donate Used Books',
        description: 'Give your used books to local libraries, schools, or literacy programs.',
        timeRequired: '15 minutes',
        impact: 'Each book can educate multiple children over years'
      },
      {
        id: '8',
        title: 'Sponsor a Student',
        description: 'Set up a monthly donation to support a student\'s education.',
        timeRequired: '10 minutes',
        impact: 'Can cover school fees, supplies, and meals for one child'
      }
    ]
  },
  'mental health': {
    query: 'mental health',
    organizations: [
      {
        id: '11',
        name: 'NAMI',
        description: 'National Alliance on Mental Illness - the nation\'s largest grassroots mental health organization.',
        website: 'https://www.nami.org',
        category: 'Mental Health Advocacy'
      },
      {
        id: '12',
        name: 'Mental Health Foundation',
        description: 'Pioneering work in mental health research, policy, and improving services.',
        website: 'https://www.mentalhealth.org',
        category: 'Research & Policy'
      },
      {
        id: '13',
        name: 'Crisis Text Line',
        description: 'Free, 24/7 support for those in crisis via text message.',
        website: 'https://www.crisistextline.org',
        category: 'Crisis Support'
      }
    ],
    campaigns: [
      {
        id: '7',
        title: 'Mental Health Awareness Month',
        organization: 'NAMI',
        description: 'Join the movement to end stigma and promote mental health awareness.',
        link: 'https://www.nami.org',
        urgency: 'medium'
      }
    ],
    volunteerOpportunities: [
      {
        id: '8',
        title: 'Crisis Counselor',
        organization: 'Crisis Text Line',
        location: 'Remote',
        type: 'remote',
        commitment: '4 hours/week',
        link: 'https://www.crisistextline.org'
      },
      {
        id: '9',
        title: 'Peer Support Specialist',
        organization: 'NAMI',
        location: 'Local chapters',
        type: 'hybrid',
        commitment: '5-10 hours/month',
        link: 'https://www.nami.org'
      }
    ],
    microActions: [
      {
        id: '9',
        title: 'Check In on Someone',
        description: 'Reach out to a friend or family member to ask how they\'re really doing.',
        timeRequired: '5 minutes',
        impact: 'A single conversation can prevent crisis'
      },
      {
        id: '10',
        title: 'Share Mental Health Resources',
        description: 'Post helpline numbers and mental health resources on your social media.',
        timeRequired: '2 minutes',
        impact: 'Could save a life by reaching someone in need'
      }
    ]
  },
  'ocean': {
    query: 'ocean',
    organizations: [
      {
        id: '14',
        name: 'Ocean Conservancy',
        description: 'Working to protect the ocean from today\'s greatest global challenges through science-based solutions.',
        website: 'https://oceanconservancy.org',
        category: 'Ocean Protection'
      },
      {
        id: '15',
        name: 'Sea Shepherd',
        description: 'Direct action to defend, conserve, and protect marine wildlife and ecosystems.',
        website: 'https://seashepherd.org',
        category: 'Marine Conservation'
      },
      {
        id: '16',
        name: 'Surfrider Foundation',
        description: 'Dedicated to the protection and enjoyment of the world\'s ocean, waves, and beaches.',
        website: 'https://www.surfrider.org',
        category: 'Coastal Protection'
      }
    ],
    campaigns: [
      {
        id: '8',
        title: 'International Coastal Cleanup',
        organization: 'Ocean Conservancy',
        description: 'Join the world\'s largest volunteer effort to clean up beaches and waterways.',
        link: 'https://oceanconservancy.org',
        urgency: 'medium'
      },
      {
        id: '9',
        title: 'Plastic Free July',
        organization: 'Surfrider Foundation',
        description: 'Commit to reducing single-use plastic for one month and beyond.',
        link: 'https://www.surfrider.org',
        urgency: 'low'
      }
    ],
    volunteerOpportunities: [
      {
        id: '10',
        title: 'Beach Cleanup Volunteer',
        organization: 'Surfrider Foundation',
        location: 'Coastal areas',
        type: 'onsite',
        commitment: '2-3 hours/event',
        link: 'https://www.surfrider.org'
      }
    ],
    microActions: [
      {
        id: '11',
        title: 'Refuse Single-Use Plastics',
        description: 'Say no to plastic bags, straws, and bottles for one week.',
        timeRequired: 'Ongoing',
        impact: 'Prevents 100+ plastic items from entering oceans/year'
      },
      {
        id: '12',
        title: 'Report Marine Pollution',
        description: 'Use apps to report and document ocean pollution when you spot it.',
        timeRequired: '3 minutes',
        impact: 'Data helps target cleanup and policy efforts'
      }
    ]
  }
};

// Get all data combined for category filtering
export const getAllData = (): ImpactResult => {
  const allOrganizations: Organization[] = [];
  const allCampaigns: Campaign[] = [];
  const allVolunteerOpportunities: VolunteerOpportunity[] = [];
  const allMicroActions: MicroAction[] = [];

  Object.values(impactDatabase).forEach((result) => {
    allOrganizations.push(...result.organizations);
    allCampaigns.push(...result.campaigns);
    allVolunteerOpportunities.push(...result.volunteerOpportunities);
    allMicroActions.push(...result.microActions);
  });

  return {
    query: 'all',
    organizations: allOrganizations,
    campaigns: allCampaigns,
    volunteerOpportunities: allVolunteerOpportunities,
    microActions: allMicroActions
  };
};

export const searchImpact = (query: string): ImpactResult | null => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Direct match
  if (impactDatabase[normalizedQuery]) {
    return impactDatabase[normalizedQuery];
  }
  
  // Partial match
  for (const key of Object.keys(impactDatabase)) {
    if (key.includes(normalizedQuery) || normalizedQuery.includes(key)) {
      return impactDatabase[key];
    }
  }
  
  // Keyword match
  const keywords: Record<string, string> = {
    'global warming': 'climate change',
    'environment': 'climate change',
    'carbon': 'climate change',
    'emissions': 'climate change',
    'food': 'hunger',
    'poverty': 'hunger',
    'famine': 'hunger',
    'school': 'education',
    'learning': 'education',
    'teaching': 'education',
    'literacy': 'education',
    'depression': 'mental health',
    'anxiety': 'mental health',
    'therapy': 'mental health',
    'wellness': 'mental health',
    'sea': 'ocean',
    'marine': 'ocean',
    'plastic': 'ocean',
    'beach': 'ocean',
    'water': 'ocean'
  };

  for (const [keyword, cause] of Object.entries(keywords)) {
    if (normalizedQuery.includes(keyword)) {
      return impactDatabase[cause];
    }
  }

  return null;
};

export const trendingCauses = [
  'Climate Change',
  'Hunger',
  'Education',
  'Mental Health',
  'Ocean Conservation'
];