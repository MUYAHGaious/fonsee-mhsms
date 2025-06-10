import React, { useState, useEffect } from 'react';
import { Globe, Shield, Users, AlertTriangle, TrendingUp, Search, Bell, User, Settings, Menu, X, Eye, Filter, Calendar, MapPin, Activity, Database, FileText, UserCheck, Lock, Mail, Github, ChevronDown, ChevronRight, Play, Pause, Download, Zap, BarChart3, Network, Cpu, Brain, Radar, Home, MessageSquare, Target, Clock, CheckCircle, XCircle, AlertCircle, Wifi, WifiOff, ChevronUp, MoreVertical, ExternalLink, Layers, Map, Hash, Flame, Camera, Video, FileImage, Share2, Flag, Heart, ThumbsUp, MessageCircle, RotateCcw, UserPlus, Building, Phone, Globe2, Monitor, Smartphone, Users2, AlertOctagon, TrendingDown, Sun, Moon, Loader2 } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart } from 'recharts';

// ==================== THEME SYSTEM ====================

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Dark theme (default)
      primary: '#0070f3',
      primaryHover: '#0060df',
      secondary: '#7c3aed',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      
      // Backgrounds
      bg: '#000000',
      bgSecondary: '#111111',
      bgTertiary: '#1a1a1a',
      bgCard: 'rgba(255, 255, 255, 0.05)',
      bgCardHover: 'rgba(255, 255, 255, 0.08)',
      
      // Borders
      border: 'rgba(255, 255, 255, 0.1)',
      borderHover: 'rgba(255, 255, 255, 0.2)',
      
      // Text
      text: '#ffffff',
      textSecondary: '#a1a1aa',
      textMuted: '#71717a',
      
      // Gradients
      gradientPrimary: 'linear-gradient(135deg, #0070f3 0%, #00d4ff 100%)',
      gradientSecondary: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      gradientDanger: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
      gradientSuccess: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      
      // Navigation
      navBg: 'rgba(0, 0, 0, 0.8)',
      navBorder: 'rgba(255, 255, 255, 0.1)',
    } : {
      // Light theme
      primary: '#0070f3',
      primaryHover: '#0060df',
      secondary: '#7c3aed',
      success: '#059669',
      warning: '#d97706',
      danger: '#dc2626',
      
      // Backgrounds
      bg: '#ffffff',
      bgSecondary: '#fafafa',
      bgTertiary: '#f5f5f5',
      bgCard: 'rgba(255, 255, 255, 0.8)',
      bgCardHover: 'rgba(255, 255, 255, 0.95)',
      
      // Borders
      border: 'rgba(0, 0, 0, 0.1)',
      borderHover: 'rgba(0, 0, 0, 0.2)',
      
      // Text
      text: '#000000',
      textSecondary: '#525252',
      textMuted: '#737373',
      
      // Gradients
      gradientPrimary: 'linear-gradient(135deg, #0070f3 0%, #00d4ff 100%)',
      gradientSecondary: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      gradientDanger: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)',
      gradientSuccess: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
      
      // Navigation
      navBg: 'rgba(255, 255, 255, 0.8)',
      navBorder: 'rgba(0, 0, 0, 0.1)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ==================== LOADING COMPONENT ====================

const PageLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      />
      <div className="relative">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <div className="absolute inset-0 w-12 h-12 border-2 border-blue-500 border-opacity-20 rounded-full animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <p className="text-sm font-medium text-white">Loading...</p>
        </div>
      </div>
    </div>
  );
};

// ==================== UTILITY COMPONENTS ====================

const Card = ({ children, className = "", glow = false }) => {
  const { colors } = useTheme();
  
  return (
    <div 
      className={`backdrop-blur-sm border rounded-xl transition-all duration-300 ${glow ? 'shadow-lg' : ''} ${className}`}
      style={{ 
        backgroundColor: colors.bgCard,
        borderColor: colors.border,
        boxShadow: glow ? `0 0 20px ${colors.primary}20` : 'none'
      }}
    >
      {children}
    </div>
  );
};

const Button = ({ children, variant = "primary", size = "md", icon: Icon, onClick, className = "", disabled = false, ...props }) => {
  const { colors } = useTheme();
  
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";
  
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return {
          background: colors.gradientPrimary,
          color: '#ffffff'
        };
      case 'secondary':
        return {
          backgroundColor: colors.bgTertiary,
          color: colors.text,
          borderColor: colors.border
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: colors.textSecondary
        };
      case 'danger':
        return {
          background: colors.gradientDanger,
          color: '#ffffff'
        };
      case 'success':
        return {
          background: colors.gradientSuccess,
          color: '#ffffff'
        };
      case 'warning':
        return {
          background: colors.gradientSecondary,
          color: '#ffffff'
        };
      default:
        return {
          background: colors.gradientPrimary,
          color: '#ffffff'
        };
    }
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${sizes[size]} ${className}`}
      style={getVariantStyles()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
};

const Badge = ({ children, variant = "default", size = "md" }) => {
  const { colors } = useTheme();
  
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return { background: colors.gradientPrimary, color: '#ffffff' };
      case 'success':
        return { background: colors.gradientSuccess, color: '#ffffff' };
      case 'warning':
        return { backgroundColor: colors.warning, color: '#ffffff' };
      case 'danger':
        return { background: colors.gradientDanger, color: '#ffffff' };
      case 'outline':
        return { 
          backgroundColor: 'transparent', 
          color: colors.text,
          border: `1px solid ${colors.border}`
        };
      default:
        return { 
          backgroundColor: colors.bgTertiary, 
          color: colors.text 
        };
    }
  };
  
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5"
  };

  return (
    <span 
      className={`inline-flex items-center rounded-full font-medium transition-all duration-200 ${sizes[size]}`}
      style={getVariantStyles()}
    >
      {children}
    </span>
  );
};

// ==================== THEME TOGGLE COMPONENT ====================

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleTheme}
      className="relative"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`} 
        />
      </div>
    </Button>
  );
};

// ==================== MAIN APP COMPONENT ====================

export default function FonSeeApp() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { colors } = useTheme();
  
  // State management
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);

  // Page transition with loading
  const navigateWithLoading = (page, delay = 1000) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, delay);
  };

  const handleAuthClick = (mode = 'login') => {
    setAuthMode(mode);
    setShowAuth(true);
    navigateWithLoading('auth', 500);
  };

  const handleDemoClick = () => {
    setUser({
      name: 'Alex Johnson',
      role: 'Senior Analyst',
      email: 'alex.johnson@fonsee.ai'
    });
    navigateWithLoading('dashboard', 1200);
  };

  const handleAnalystClick = () => {
    navigateWithLoading('analyst', 800);
  };

  const handleLogout = () => {
    setUser(null);
    navigateWithLoading('landing', 600);
  };

  const handleAuthSubmit = () => {
    setUser({
      name: authMode === 'login' ? 'Alex Johnson' : 'New User',
      role: 'Senior Analyst',
      email: authMode === 'login' ? 'alex.johnson@fonsee.ai' : 'newuser@fonsee.ai'
    });
    navigateWithLoading('dashboard', 1000);
  };

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{ backgroundColor: colors.bg }}
    >
      <PageLoader isLoading={isLoading} />
      
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
        style={{ 
          backgroundColor: colors.navBg,
          borderColor: colors.navBorder 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: colors.gradientPrimary }}
              >
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: colors.text }}>FonSee</h1>
                <p className="text-xs" style={{ color: colors.textMuted }}>MHSMS</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {user ? (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm font-medium" style={{ color: colors.text }}>{user.name}</p>
                      <p className="text-xs" style={{ color: colors.textMuted }}>{user.role}</p>
                    </div>
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.bgTertiary }}
                    >
                      <User className="w-4 h-4" style={{ color: colors.textSecondary }} />
                    </div>
                  </div>
                  <Button variant="ghost" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" onClick={() => handleAuthClick('login')}>
                    Login
                  </Button>
                  <Button variant="primary" onClick={() => handleAuthClick('register')}>
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {currentPage === 'landing' && (
        <LandingPage onAuthClick={handleAuthClick} onDemoClick={handleDemoClick} />
      )}

      {currentPage === 'auth' && (
        <AuthPage 
          mode={authMode} 
          onSubmit={handleAuthSubmit}
          onModeSwitch={(mode) => setAuthMode(mode)}
          onBack={() => navigateWithLoading('landing', 400)}
        />
      )}

      {currentPage === 'dashboard' && user && (
        <ExecutiveDashboard user={user} onLogout={handleLogout} onAnalystClick={handleAnalystClick} />
      )}

      {currentPage === 'analyst' && user && (
        <AnalystWorkstation user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

// ==================== ANALYST WORKSTATION COMPONENT ====================

const AnalystWorkstation = ({ user, onLogout }) => {
  const { colors } = useTheme();
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [filters, setFilters] = useState({
    severity: 'all',
    type: 'all',
    platform: 'all',
    status: 'pending'
  });
  const [analysisData, setAnalysisData] = useState({
    classification: '',
    confidence: 75,
    notes: '',
    priority: 'medium'
  });

  // Mock detailed content data for analyst review
  const detailedAlerts = [
    {
      id: 1,
      type: 'misinformation',
      severity: 'critical',
      title: 'False Election Information Spreading',
      platform: 'Facebook',
      location: 'Douala, Cameroon',
      time: '2 minutes ago',
      engagement: 1250,
      status: 'pending',
      content: {
        text: "URGENT: The election commission has changed voting dates to next month due to technical issues. Share this to inform others!",
        author: {
          name: "News Update Cameroon",
          verified: false,
          followers: 15420,
          account_age: "3 months"
        },
        media: [{ type: 'image', description: 'Fake election notice document' }],
        reactions: { likes: 342, shares: 189, comments: 76 },
        url: "https://facebook.com/example-post-123"
      },
      ai_analysis: {
        confidence: 89,
        threat_indicators: [
          "Urgent language designed to create panic",
          "False information about official processes",
          "Encourages viral sharing",
          "Unverified source with recent account creation"
        ],
        similar_patterns: 3
      }
    },
    {
      id: 2,
      type: 'hate_speech',
      severity: 'high',
      title: 'Ethnic Tension Content Detected',
      platform: 'WhatsApp',
      location: 'Yaoundé, Cameroon',
      time: '8 minutes ago',
      engagement: 890,
      status: 'pending',
      content: {
        text: "These people from [ethnic group] are destroying our economy. We need to stop them before they take everything from us. Share in all your groups.",
        author: {
          name: "+237 6XX XXX XXX",
          verified: false,
          groups: 23
        },
        media: [],
        forwarded_count: 45
      },
      ai_analysis: {
        confidence: 76,
        threat_indicators: [
          "Ethnic targeting language",
          "Economic scapegoating", 
          "Call for group action",
          "Encourages widespread distribution"
        ],
        similar_patterns: 7
      }
    },
    {
      id: 3,
      type: 'misinformation',
      severity: 'medium',
      title: 'Health Misinformation Campaign',
      platform: 'Twitter/X',
      location: 'Lagos, Nigeria',
      time: '15 minutes ago',
      engagement: 2100,
      status: 'investigating',
      content: {
        text: "BREAKING: Local doctors confirm traditional herb mixture cures COVID-19 100%. Big pharma doesn't want you to know! Recipe in comments. #NaturalCure #COVID19",
        author: {
          name: "@HealthTruthNG",
          verified: false,
          followers: 2340,
          account_age: "6 months"
        },
        media: [{ type: 'image', description: 'Photo of herbal mixture' }],
        reactions: { likes: 876, retweets: 234, comments: 145 },
        url: "https://twitter.com/example-tweet-456"
      },
      ai_analysis: {
        confidence: 82,
        threat_indicators: [
          "False medical claims",
          "Conspiracy theory elements",
          "Encourages self-medication",
          "Potential public health risk"
        ],
        similar_patterns: 12
      }
    }
  ];

  const ContentReviewInterface = () => {
    if (!selectedAlert) {
      return (
        <Card className="p-8 text-center">
          <MessageSquare className="w-16 h-16 mx-auto mb-4" style={{ color: colors.textMuted }} />
          <h3 className="text-xl mb-2" style={{ color: colors.text }}>Select Content to Analyze</h3>
          <p style={{ color: colors.textSecondary }}>Choose an alert from the list to begin detailed analysis</p>
        </Card>
      );
    }

    const alert = selectedAlert;
    const content = alert.content;

    return (
      <div className="space-y-6">
        {/* Content Header */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Badge 
                variant={alert.severity === 'critical' ? 'danger' : alert.severity === 'high' ? 'warning' : 'default'}
                size="lg"
              >
                {alert.severity}
              </Badge>
              <Badge variant="default">{alert.type.replace('_', ' ')}</Badge>
              <Badge variant="outline">{alert.platform}</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="primary" size="sm">
                <Flag size={16} />
                Flag as Threat
              </Button>
              <Button variant="secondary" size="sm">
                <CheckCircle size={16} />
                Mark Reviewed
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>{alert.title}</h2>
          <div className="flex items-center gap-4 text-sm" style={{ color: colors.textSecondary }}>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {alert.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {alert.time}
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} />
              {alert.engagement.toLocaleString()} engaged
            </span>
          </div>
        </Card>

        {/* Original Content */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
            <FileText className="w-5 h-5" />
            Original Content
          </h3>
          
          <div 
            className="rounded-lg p-4 mb-4"
            style={{ backgroundColor: colors.bgTertiary }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.bgCard }}
              >
                <User className="w-5 h-5" style={{ color: colors.textSecondary }} />
              </div>
              <div>
                <div className="font-medium" style={{ color: colors.text }}>{content.author.name}</div>
                <div className="text-sm" style={{ color: colors.textSecondary }}>
                  {content.author.followers && `${content.author.followers.toLocaleString()} followers`}
                  {content.author.account_age && ` • Account: ${content.author.account_age}`}
                  {content.author.groups && ` • ${content.author.groups} groups`}
                </div>
              </div>
            </div>
            
            <p className="leading-relaxed mb-4" style={{ color: colors.text }}>{content.text}</p>
            
            {content.media && content.media.length > 0 && (
              <div 
                className="border rounded p-3 mb-4"
                style={{ borderColor: colors.border }}
              >
                <div className="flex items-center gap-2 text-sm" style={{ color: colors.textSecondary }}>
                  <FileImage size={16} />
                  Media: {content.media[0].description}
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-6 text-sm" style={{ color: colors.textSecondary }}>
              {content.reactions && (
                <>
                  <span className="flex items-center gap-1">
                    <Heart size={14} />
                    {content.reactions.likes || content.reactions.reactions}
                  </span>
                  <span className="flex items-center gap-1">
                    <Share2 size={14} />
                    {content.reactions.shares || content.reactions.retweets}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {content.reactions.comments}
                  </span>
                </>
              )}
              {content.forwarded_count && (
                <span className="flex items-center gap-1">
                  <RotateCcw size={14} />
                  {content.forwarded_count} forwards
                </span>
              )}
            </div>
          </div>

          {content.url && (
            <Button variant="ghost" size="sm" className="mb-4">
              <ExternalLink size={14} className="mr-2" />
              View Original Post
            </Button>
          )}
        </Card>

        {/* AI Analysis */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
            <Brain className="w-5 h-5" style={{ color: colors.secondary }} />
            AI Analysis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span style={{ color: colors.textSecondary }}>Confidence Score</span>
                  <span className="font-bold" style={{ color: colors.text }}>{alert.ai_analysis.confidence}%</span>
                </div>
                <div 
                  className="w-full rounded-full h-2"
                  style={{ backgroundColor: colors.bgTertiary }}
                >
                  <div 
                    className="h-2 rounded-full"
                    style={{ 
                      width: `${alert.ai_analysis.confidence}%`,
                      background: 'linear-gradient(to right, #f59e0b, #ef4444)'
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <span className="text-sm" style={{ color: colors.textSecondary }}>Similar Patterns Found</span>
                <p className="text-2xl font-bold" style={{ color: colors.text }}>{alert.ai_analysis.similar_patterns}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: colors.text }}>Threat Indicators</h4>
              <ul className="space-y-1">
                {alert.ai_analysis.threat_indicators.map((indicator, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm" style={{ color: colors.textSecondary }}>
                    <AlertCircle size={12} style={{ color: colors.warning }} />
                    {indicator}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Analyst Tools */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
            <Settings className="w-5 h-5" style={{ color: colors.primary }} />
            Analysis Tools
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Classification */}
            <div>
              <h4 className="font-medium mb-3" style={{ color: colors.text }}>Classification</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm mb-1" style={{ color: colors.textSecondary }}>Threat Type</label>
                  <select 
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: colors.bgTertiary,
                      borderColor: colors.border,
                      color: colors.text,
                      focusRingColor: colors.primary
                    }}
                    value={analysisData.classification}
                    onChange={(e) => setAnalysisData(prev => ({ ...prev, classification: e.target.value }))}
                  >
                    <option value="">Select classification...</option>
                    <option value="misinformation">Misinformation</option>
                    <option value="hate_speech">Hate Speech</option>
                    <option value="incitement">Incitement to Violence</option>
                    <option value="spam">Spam/Bot Activity</option>
                    <option value="false_positive">False Positive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1" style={{ color: colors.textSecondary }}>Priority Level</label>
                  <select 
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: colors.bgTertiary,
                      borderColor: colors.border,
                      color: colors.text
                    }}
                    value={analysisData.priority}
                    onChange={(e) => setAnalysisData(prev => ({ ...prev, priority: e.target.value }))}
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1" style={{ color: colors.textSecondary }}>
                    Confidence ({analysisData.confidence}%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={analysisData.confidence}
                    onChange={(e) => setAnalysisData(prev => ({ ...prev, confidence: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h4 className="font-medium mb-3" style={{ color: colors.text }}>Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="primary" className="w-full">
                  <Camera size={16} className="mr-2" />
                  Take Screenshot
                </Button>
                <Button variant="secondary" className="w-full">
                  <Download size={16} className="mr-2" />
                  Save Evidence
                </Button>
                <Button variant="secondary" className="w-full">
                  <Share2 size={16} className="mr-2" />
                  Share with Team
                </Button>
                <Button variant="warning" className="w-full">
                  <AlertTriangle size={16} className="mr-2" />
                  Escalate to Supervisor
                </Button>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mt-6">
            <label className="block text-sm mb-2" style={{ color: colors.textSecondary }}>Analysis Notes</label>
            <textarea
              className="w-full border rounded px-3 py-2 h-24 focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: colors.bgTertiary,
                borderColor: colors.border,
                color: colors.text
              }}
              placeholder="Add your analysis notes, context, and recommendations..."
              value={analysisData.notes}
              onChange={(e) => setAnalysisData(prev => ({ ...prev, notes: e.target.value }))}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button variant="success">
              <CheckCircle size={16} className="mr-2" />
              Complete Analysis
            </Button>
            <Button variant="secondary">
              <Clock size={16} className="mr-2" />
              Save Draft
            </Button>
            <Button variant="danger">
              <XCircle size={16} className="mr-2" />
              Reject/Archive
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  const AlertsList = () => (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold" style={{ color: colors.text }}>Content Queue</h3>
        <div className="flex gap-2">
          <select 
            className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: colors.bgTertiary,
              borderColor: colors.border,
              color: colors.text
            }}
            value={filters.status}
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
          >
            <option value="pending">Pending Review</option>
            <option value="investigating">Investigating</option>
            <option value="completed">Completed</option>
            <option value="all">All Status</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {detailedAlerts.map(alert => (
          <div 
            key={alert.id}
            onClick={() => setSelectedAlert(alert)}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
              selectedAlert?.id === alert.id ? 'ring-2' : ''
            }`}
            style={{ 
              borderColor: selectedAlert?.id === alert.id ? colors.primary : colors.border,
              backgroundColor: selectedAlert?.id === alert.id ? `${colors.primary}10` : colors.bgCard,
              ringColor: colors.primary
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge 
                    variant={alert.severity === 'critical' ? 'danger' : alert.severity === 'high' ? 'warning' : 'default'}
                    size="sm"
                  >
                    {alert.severity}
                  </Badge>
                  <Badge variant="default" size="sm">{alert.type.replace('_', ' ')}</Badge>
                  <span className="text-xs" style={{ color: colors.textMuted }}>{alert.platform}</span>
                </div>
                
                <h4 className="font-medium mb-1" style={{ color: colors.text }}>{alert.title}</h4>
                <p className="text-sm mb-2" style={{ color: colors.textSecondary }}>
                  {alert.content.text.substring(0, 120)}...
                </p>
                
                <div className="flex items-center gap-4 text-xs" style={{ color: colors.textMuted }}>
                  <span>{alert.location}</span>
                  <span>{alert.time}</span>
                  <span>{alert.engagement.toLocaleString()} engaged</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-medium" style={{ color: colors.text }}>{alert.ai_analysis.confidence}%</div>
                <div className="text-xs" style={{ color: colors.textMuted }}>confidence</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{ backgroundColor: colors.bg }}
    >
      <AnalystSideNavigation onLogout={onLogout} />
      
      <div className="ml-64 pt-16">
        {/* Header */}
        <div 
          className="backdrop-blur-sm border-b px-6 py-4 transition-all duration-300"
          style={{ 
            backgroundColor: colors.navBg,
            borderColor: colors.navBorder 
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3" style={{ color: colors.text }}>
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: colors.gradientSecondary }}
                >
                  <Search className="w-5 h-5 text-white" />
                </div>
                Analyst Workstation
              </h1>
              <p className="mt-1" style={{ color: colors.textSecondary }}>
                Detailed content analysis and threat investigation • {user?.name} • {user?.role}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="primary" size="lg">
                {detailedAlerts.filter(a => a.status === 'pending').length} Pending Review
              </Badge>
              
              <Button variant="ghost" size="sm">
                <Settings size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Panel - Alerts List */}
            <div className="lg:col-span-2">
              <AlertsList />
            </div>
            
            {/* Right Panel - Content Review */}
            <div className="lg:col-span-3">
              <ContentReviewInterface />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalystSideNavigation = ({ onLogout }) => {
  const { colors } = useTheme();
  const [currentApp, setCurrentApp] = useState('analyst');

  const navItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: Home },
    { id: 'analyst', label: 'Analyst Workstation', icon: Search },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleNavigation = (id) => {
    if (id === 'dashboard') {
      window.location.reload();
    } else {
      setCurrentApp(id);
    }
  };

  return (
    <div 
      className="w-64 backdrop-blur-sm border-r h-screen fixed left-0 top-16 z-40 transition-all duration-300"
      style={{ 
        backgroundColor: colors.navBg,
        borderColor: colors.navBorder 
      }}
    >
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 transform hover:scale-105 ${
                currentApp === item.id ? 'shadow-lg' : ''
              }`}
              style={{
                backgroundColor: currentApp === item.id ? colors.primary : 'transparent',
                color: currentApp === item.id ? '#ffffff' : colors.textSecondary
              }}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>
        
        <div 
          className="border-t mt-6 pt-6"
          style={{ borderColor: colors.border }}
        >
          <Button variant="danger" className="w-full" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

// ==================== DASHBOARD NAVIGATION ====================

const SideNavigation = ({ activeTab, setActiveTab, onLogout, onAnalystClick }) => {
  const { colors } = useTheme();
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analyst', label: 'Analyst Workstation', icon: Search, isAnalyst: true },
    { id: 'monitoring', label: 'Live Monitoring', icon: Activity },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'geographic', label: 'Geographic Intel', icon: Globe2 },
    { id: 'platforms', label: 'Platform Analysis', icon: Monitor },
    { id: 'alerts', label: 'Alert Management', icon: Bell },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleItemClick = (item) => {
    if (item.isAnalyst) {
      onAnalystClick();
    } else {
      setActiveTab(item.id);
    }
  };

  return (
    <div 
      className="w-64 backdrop-blur-sm border-r h-screen fixed left-0 top-16 z-40 transition-all duration-300"
      style={{ 
        backgroundColor: colors.navBg,
        borderColor: colors.navBorder 
      }}
    >
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 transform hover:scale-105 ${
                activeTab === item.id ? 'shadow-lg' : ''
              }`}
              style={{
                backgroundColor: activeTab === item.id ? colors.primary : 'transparent',
                color: activeTab === item.id ? '#ffffff' : colors.textSecondary
              }}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>
        
        <div 
          className="border-t mt-6 pt-6"
          style={{ borderColor: colors.border }}
        >
          <Button variant="danger" className="w-full" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

// ==================== DASHBOARD COMPONENTS ====================

const LandingPage = ({ onAuthClick, onDemoClick }) => {
  const { colors, isDark } = useTheme();
  const [stats] = useState({
    contentMonitored: 2480000,
    accuracyRate: 94,
    platformsMonitored: 8,
    threatsDetected: 12500,
    countriesProtected: 15,
    responseTime: 2.3
  });

  // Dynamic Text Animation Component
  const DynamicWelcomeText = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = [
      'FonSee',
      'Digital Safety', 
      'AI Protection',
      'Smart Defense',
      'Cyber Security',
      'Africa Monitor'
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [words.length]);

    return (
      <div className="relative h-20 overflow-hidden">
        {words.map((word, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentWordIndex 
                ? 'transform translate-y-0 opacity-100' 
                : index < currentWordIndex 
                  ? 'transform -translate-y-full opacity-0'
                  : 'transform translate-y-full opacity-0'
            }`}
          >
            <span 
              className="bg-clip-text text-transparent text-6xl lg:text-7xl font-bold block"
              style={{ 
                background: colors.gradientPrimary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    );
  };

  // Holographic 3D Cameroon Map (Based on your reference image)
 

  // Floating background elements
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main flowing curves */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="curve1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: colors.primary, stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: colors.secondary, stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: colors.primary, stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="curve2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: colors.secondary, stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: colors.primary, stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        
        {/* Large flowing curve */}
        <path
          d="M0,400 Q300,200 600,300 T1200,250"
          stroke="url(#curve1)"
          strokeWidth="100"
          fill="none"
          className="animate-pulse"
        />
        
        {/* Secondary curve */}
        <path
          d="M200,600 Q500,400 800,500 T1400,450"
          stroke="url(#curve2)"
          strokeWidth="60"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Subtle accent curves */}
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M${i * 200},${300 + i * 50} Q${300 + i * 100},${200 + i * 30} ${600 + i * 150},${250 + i * 40}`}
            stroke={colors.primary}
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-pulse"
          style={{
            backgroundColor: colors.primary,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div 
      className="pt-16 min-h-screen relative overflow-hidden transition-all duration-500"
      style={{ backgroundColor: colors.bg }}
    >
      <FloatingElements />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div 
                className="inline-flex items-center px-6 py-3 border rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}10)`,
                  borderColor: `${colors.primary}30`,
                  boxShadow: `0 0 30px ${colors.primary}20`
                }}
              >
                <Zap className="w-5 h-5 mr-3" style={{ color: colors.primary }} />
                <span className="font-medium" style={{ color: colors.primary }}>AI-Powered Detection System</span>
                <div className="ml-3 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.success }} />
              </div>
              
              {/* Main Heading with Dynamic Text */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    <span style={{ color: colors.text }}>Welcome to</span>
                  </h1>
                  <DynamicWelcomeText />
                </div>
                
                <div className="text-2xl font-light leading-relaxed max-w-2xl" style={{ color: colors.textSecondary }}>
                  Advanced <span className="font-semibold" style={{ color: colors.primary }}>misinformation</span> and{' '}
                  <span className="font-semibold" style={{ color: colors.secondary }}>hate speech</span> monitoring
                  for African digital communities
                </div>
              </div>

              {/* Search Bar */}
              <div className="max-w-md">
                <div 
                  className="flex items-center px-6 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 focus-within:scale-105"
                  style={{ 
                    backgroundColor: colors.bgCard,
                    borderColor: colors.border,
                    boxShadow: `0 0 40px ${colors.primary}10`
                  }}
                >
                  <Search className="w-5 h-5 mr-4" style={{ color: colors.textMuted }} />
                  <input
                    type="text"
                    placeholder="Search threats, content, or regions..."
                    className="flex-1 bg-transparent outline-none text-lg"
                    style={{ color: colors.text }}
                  />
                  <Button variant="primary" size="sm" className="ml-2">
                    <Search size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={onDemoClick}
                className="px-8 py-4 text-lg font-semibold"
              >
                <Eye className="w-6 h-6 mr-3" />
                Explore Demo
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={() => onAuthClick('register')}
                className="px-8 py-4 text-lg"
              >
                <UserPlus className="w-6 h-6 mr-3" />
                Start Free Trial
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: colors.text }}>
                  {(stats.contentMonitored / 1000000).toFixed(1)}M+
                </div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Content Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: colors.text }}>
                  {stats.accuracyRate}%
                </div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: colors.text }}>
                  {stats.responseTime}s
                </div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Response Time</div>
              </div>
            </div>
          </div>

         {/* Right Column - 3D Cameroon */}
        <div className="flex justify-center lg:justify-end">
          <div>
          <img src="/map.png" alt="3D map of Cameroon" />          </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: colors.text }}>
              Protecting Digital Africa
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              Real-time monitoring and analysis across multiple platforms with AI-powered threat detection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card 
              className="p-8 text-center transition-all duration-300 hover:scale-105 relative overflow-hidden" 
              glow
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ background: colors.gradientPrimary }} />
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: colors.gradientPrimary }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.text }}>
                {stats.threatsDetected.toLocaleString()}+
              </div>
              <div className="text-lg font-medium mb-2" style={{ color: colors.primary }}>Threats Detected</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>This month</div>
            </Card>

            <Card 
              className="p-8 text-center transition-all duration-300 hover:scale-105 relative overflow-hidden" 
              glow
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ background: colors.gradientSecondary }} />
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: colors.gradientSecondary }}
              >
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.text }}>
                {stats.countriesProtected}
              </div>
              <div className="text-lg font-medium mb-2" style={{ color: colors.secondary }}>Countries Protected</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>Across Africa</div>
            </Card>

            <Card 
              className="p-8 text-center transition-all duration-300 hover:scale-105 relative overflow-hidden" 
              glow
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ background: colors.gradientSuccess }} />
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: colors.gradientSuccess }}
              >
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.text }}>
                24/7
              </div>
              <div className="text-lg font-medium mb-2" style={{ color: colors.success }}>Live Monitoring</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>Always active</div>
            </Card>

            <Card 
              className="p-8 text-center transition-all duration-300 hover:scale-105 relative overflow-hidden" 
              glow
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ background: colors.gradientDanger }} />
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: colors.gradientDanger }}
              >
                <Network className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.text }}>
                {stats.platformsMonitored}+
              </div>
              <div className="text-lg font-medium mb-2" style={{ color: colors.danger }}>Platforms</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>Monitored</div>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: colors.text }}>
              Advanced AI Detection
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              Cutting-edge technology specifically trained for African contexts and languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 transition-all duration-300 hover:scale-105 relative overflow-hidden" glow>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-full" style={{ background: colors.gradientPrimary }} />
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <Brain className="w-7 h-7" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text }}>AI Detection</h3>
              <p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
                Machine learning algorithms trained on African languages and cultural contexts for accurate threat identification.
              </p>
            </Card>

            <Card className="p-8 transition-all duration-300 hover:scale-105 relative overflow-hidden" glow>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-full" style={{ background: colors.gradientSecondary }} />
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.secondary}20` }}
              >
                <Radar className="w-7 h-7" style={{ color: colors.secondary }} />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text }}>Real-time Analysis</h3>
              <p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
                Monitor social media platforms in real-time with instant threat detection and automated response systems.
              </p>
            </Card>

            <Card className="p-8 transition-all duration-300 hover:scale-105 relative overflow-hidden" glow>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-full" style={{ background: colors.gradientSuccess }} />
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.success}20` }}
              >
                <Target className="w-7 h-7" style={{ color: colors.success }} />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text }}>Precision Alerts</h3>
              <p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
                Intelligent alert system that prioritizes threats and provides actionable insights for rapid response.
              </p>
            </Card>
          </div>
        </div>

        {/* Testimonials/Social Proof */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: colors.text }}>
              Trusted by Organizations
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              Leading institutions across Africa trust FonSee for digital safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ministry of Communication", country: "Cameroon", logo: Building },
              { name: "Digital Rights Foundation", country: "Nigeria", logo: Shield },
              { name: "Tech Innovation Hub", country: "Kenya", logo: Cpu }
            ].map((org, index) => (
              <Card key={index} className="p-8 text-center transition-all duration-300 hover:scale-105">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: colors.bgTertiary }}
                >
                  <org.logo className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h4 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>{org.name}</h4>
                <p style={{ color: colors.textSecondary }}>{org.country}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <Card className="p-12 relative overflow-hidden" glow>
            <div className="absolute inset-0 bg-gradient-to-r opacity-5" style={{ background: colors.gradientPrimary }} />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6" style={{ color: colors.text }}>
                Ready to Secure Your Digital Space?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
                Join the mission to protect African digital communities from misinformation and hate speech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={onDemoClick}
                  className="px-10 py-5 text-lg font-semibold"
                >
                  <Eye className="w-6 h-6 mr-3" />
                  Start Free Demo
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={() => onAuthClick('register')}
                  className="px-10 py-5 text-lg"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const AuthPage = ({ mode, onSubmit, onModeSwitch, onBack }) => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    organization: ''
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div 
      className="pt-16 min-h-screen flex items-center justify-center transition-all duration-500"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-md w-full mx-4">
        <Card className="p-8">
          <div className="text-center mb-8">
            <Button variant="ghost" onClick={onBack} className="absolute top-6 left-6">
              ← Back
            </Button>
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: colors.gradientPrimary }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p style={{ color: colors.textSecondary }}>
              {mode === 'login' ? 'Sign in to your FonSee account' : 'Join the FonSee monitoring platform'}
            </p>
          </div>

          <div className="space-y-6">
            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ 
                      backgroundColor: colors.bgTertiary,
                      borderColor: colors.border,
                      color: colors.text
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ 
                      backgroundColor: colors.bgTertiary,
                      borderColor: colors.border,
                      color: colors.text
                    }}
                    placeholder="Your organization"
                  />
                </div>
              </>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ 
                  backgroundColor: colors.bgTertiary,
                  borderColor: colors.border,
                  color: colors.text
                }}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ 
                  backgroundColor: colors.bgTertiary,
                  borderColor: colors.border,
                  color: colors.text
                }}
                placeholder="Enter your password"
              />
            </div>

            <Button onClick={onSubmit} variant="primary" size="lg" className="w-full">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </div>

          <div className="mt-6 text-center">
            <span style={{ color: colors.textSecondary }}>
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              onClick={() => onModeSwitch(mode === 'login' ? 'register' : 'login')}
              className="font-medium transition-colors duration-200"
              style={{ color: colors.primary }}
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Executive Dashboard component
const ExecutiveDashboard = ({ user, onLogout, onAnalystClick }) => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [realTimeData, setRealTimeData] = useState({
    totalContent: 2480000,
    activeThreats: 23,
    accuracy: 94.2,
    platforms: 8,
    lastUpdate: new Date()
  });

  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [isLive, setIsLive] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState('connected');

  // Mock real-time data updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        totalContent: prev.totalContent + Math.floor(Math.random() * 100),
        activeThreats: Math.max(0, prev.activeThreats + (Math.random() > 0.7 ? 1 : -1)),
        accuracy: Math.min(100, Math.max(90, prev.accuracy + (Math.random() - 0.5) * 0.2)),
        lastUpdate: new Date()
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  // Mock chart data
  const threatTrendData = [
    { time: '00:00', threats: 15, misinformation: 8, hate_speech: 7 },
    { time: '04:00', threats: 12, misinformation: 6, hate_speech: 6 },
    { time: '08:00', threats: 18, misinformation: 11, hate_speech: 7 },
    { time: '12:00', threats: 25, misinformation: 15, hate_speech: 10 },
    { time: '16:00', threats: 31, misinformation: 18, hate_speech: 13 },
    { time: '20:00', threats: 23, misinformation: 12, hate_speech: 11 },
    { time: '24:00', threats: 23, misinformation: 13, hate_speech: 10 }
  ];

  const platformData = [
    { name: 'Facebook', threats: 35, color: '#1877F2' },
    { name: 'Twitter/X', threats: 28, color: '#000000' },
    { name: 'WhatsApp', threats: 22, color: '#25D366' },
    { name: 'TikTok', threats: 18, color: '#FE2C55' },
    { name: 'Instagram', threats: 15, color: '#E4405F' },
    { name: 'YouTube', threats: 12, color: '#FF0000' },
    { name: 'Telegram', threats: 8, color: '#0088CC' },
    { name: 'Others', threats: 5, color: '#666666' }
  ];

  const geographicData = [
    { region: 'Cameroon', threats: 45, population: 27.9, severity: 'high' },
    { region: 'Nigeria', threats: 38, population: 218.5, severity: 'high' },
    { region: 'Kenya', threats: 22, population: 54.9, severity: 'medium' },
    { region: 'Ghana', threats: 18, population: 32.8, severity: 'medium' },
    { region: 'Uganda', threats: 15, population: 47.1, severity: 'low' },
    { region: 'Tanzania', threats: 12, population: 61.5, severity: 'low' }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'misinformation',
      severity: 'critical',
      title: 'False Election Information Spreading',
      platform: 'Facebook',
      location: 'Douala, Cameroon',
      time: '2 minutes ago',
      engagement: 1250,
      status: 'active'
    },
    {
      id: 2,
      type: 'hate_speech',
      severity: 'high',
      title: 'Ethnic Tension Content Detected',
      platform: 'WhatsApp',
      location: 'Yaoundé, Cameroon',
      time: '8 minutes ago',
      engagement: 890,
      status: 'investigating'
    },
    {
      id: 3,
      type: 'misinformation',
      severity: 'medium',
      title: 'Health Misinformation Campaign',
      platform: 'Twitter/X',
      location: 'Lagos, Nigeria',
      time: '15 minutes ago',
      engagement: 2100,
      status: 'resolved'
    }
  ];

  const ContentMonitoringFeed = () => (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold flex items-center gap-2" style={{ color: colors.text }}>
          <Activity className="w-5 h-5" style={{ color: colors.primary }} />
          Live Content Monitoring
        </h3>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLive ? 'animate-pulse' : ''}`} style={{ backgroundColor: isLive ? colors.success : colors.textMuted }}></div>
          <span className="text-sm" style={{ color: colors.textSecondary }}>{isLive ? 'Live' : 'Paused'}</span>
          <Button variant="ghost" size="sm" onClick={() => setIsLive(!isLive)}>
            {isLive ? <Pause size={16} /> : <Play size={16} />}
          </Button>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {recentAlerts.map(alert => (
          <div 
            key={alert.id} 
            className="border rounded-lg p-4 transition-all duration-200 hover:scale-[1.02]"
            style={{ 
              borderColor: colors.border,
              backgroundColor: colors.bgCard
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge 
                    variant={alert.severity === 'critical' ? 'danger' : alert.severity === 'high' ? 'warning' : 'default'}
                    size="sm"
                  >
                    {alert.severity}
                  </Badge>
                  <Badge variant="default" size="sm">{alert.type.replace('_', ' ')}</Badge>
                  <span className="text-xs" style={{ color: colors.textMuted }}>{alert.platform}</span>
                </div>
                
                <h4 className="font-medium mb-1" style={{ color: colors.text }}>{alert.title}</h4>
                
                <div className="flex items-center gap-4 text-sm" style={{ color: colors.textSecondary }}>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {alert.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {alert.engagement.toLocaleString()} engaged
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {alert.time}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={onAnalystClick}>
                  <Search size={14} />
                  Analyze
                </Button>
                <Badge 
                  variant={
                    alert.status === 'active' ? 'danger' : 
                    alert.status === 'investigating' ? 'warning' : 'success'
                  }
                  size="sm"
                >
                  {alert.status}
                </Badge>
                <Button variant="ghost" size="sm">
                  <ExternalLink size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const GeographicIntelligence = () => (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: colors.text }}>
        <Map className="w-5 h-5" style={{ color: colors.secondary }} />
        Geographic Intelligence
      </h3>
      
      <div className="space-y-4">
        {geographicData.map((region, index) => (
          <div 
            key={region.region} 
            className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: colors.bgTertiary }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: region.severity === 'high' ? colors.danger :
                                   region.severity === 'medium' ? colors.warning : colors.success
                }}
              ></div>
              <div>
                <div className="font-medium" style={{ color: colors.text }}>{region.region}</div>
                <div className="text-sm" style={{ color: colors.textSecondary }}>{region.population}M population</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-bold" style={{ color: colors.text }}>{region.threats}</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>active threats</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card 
                className="p-6 transition-all duration-300 hover:scale-105" 
                glow
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.primary}10 100%)`,
                  borderColor: `${colors.primary}30`
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: colors.primary }}>Total Content Monitored</p>
                    <p className="text-3xl font-bold mt-1" style={{ color: colors.text }}>
                      {(realTimeData.totalContent / 1000000).toFixed(2)}M
                    </p>
                    <p className="text-xs mt-1" style={{ color: colors.primary }}>
                      +{Math.floor(Math.random() * 50 + 20)}K today
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <Database className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 transition-all duration-300 hover:scale-105" 
                glow
                style={{ 
                  background: `linear-gradient(135deg, ${colors.danger}20 0%, ${colors.danger}10 100%)`,
                  borderColor: `${colors.danger}30`
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: colors.danger }}>Active Threats</p>
                    <p className="text-3xl font-bold mt-1" style={{ color: colors.text }}>{realTimeData.activeThreats}</p>
                    <p className="text-xs mt-1" style={{ color: colors.danger }}>
                      {Math.random() > 0.5 ? '+2' : '-1'} from yesterday
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.danger}20` }}
                  >
                    <AlertTriangle className="w-6 h-6" style={{ color: colors.danger }} />
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 transition-all duration-300 hover:scale-105" 
                glow
                style={{ 
                  background: `linear-gradient(135deg, ${colors.success}20 0%, ${colors.success}10 100%)`,
                  borderColor: `${colors.success}30`
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: colors.success }}>Detection Accuracy</p>
                    <p className="text-3xl font-bold mt-1" style={{ color: colors.text }}>{realTimeData.accuracy.toFixed(1)}%</p>
                    <p className="text-xs mt-1" style={{ color: colors.success }}>
                      +0.3% this week
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.success}20` }}
                  >
                    <Target className="w-6 h-6" style={{ color: colors.success }} />
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 transition-all duration-300 hover:scale-105" 
                glow
                style={{ 
                  background: `linear-gradient(135deg, ${colors.secondary}20 0%, ${colors.secondary}10 100%)`,
                  borderColor: `${colors.secondary}30`
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: colors.secondary }}>Platforms Monitored</p>
                    <p className="text-3xl font-bold mt-1" style={{ color: colors.text }}>{realTimeData.platforms}</p>
                    <p className="text-xs mt-1" style={{ color: colors.secondary }}>
                      All systems operational
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <Network className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                </div>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Threat Trends */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold" style={{ color: colors.text }}>Threat Trends (24h)</h3>
                  <div className="flex gap-2">
                    {['6h', '24h', '7d', '30d'].map(period => (
                      <Button
                        key={period}
                        variant={selectedTimeframe === period ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => setSelectedTimeframe(period)}
                      >
                        {period}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={threatTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                    <XAxis dataKey="time" stroke={colors.textSecondary} />
                    <YAxis stroke={colors.textSecondary} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: colors.bgCard, 
                        border: `1px solid ${colors.border}`,
                        borderRadius: '8px',
                        color: colors.text
                      }}
                    />
                    <Area type="monotone" dataKey="threats" stackId="1" stroke={colors.danger} fill={colors.danger} fillOpacity={0.2} />
                    <Line type="monotone" dataKey="misinformation" stroke={colors.warning} strokeWidth={2} />
                    <Line type="monotone" dataKey="hate_speech" stroke={colors.secondary} strokeWidth={2} />
                  </ComposedChart>
                </ResponsiveContainer>
              </Card>

              {/* Platform Distribution */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6" style={{ color: colors.text }}>Platform Distribution</h3>
                
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      dataKey="threats"
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: colors.bgCard, 
                        border: `1px solid ${colors.border}`,
                        borderRadius: '8px',
                        color: colors.text
                      }}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Lower Section: Live Feed & Geographic Intelligence */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {ContentMonitoringFeed()}
              </div>
              <div>
                <GeographicIntelligence />
              </div>
            </div>
          </>
        );
      
      case 'monitoring':
        return (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text }}>Live Content Monitoring</h3>
              <p style={{ color: colors.textSecondary }}>Real-time content analysis and threat detection across all monitored platforms.</p>
            </Card>
            {ContentMonitoringFeed()}
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text }}>Advanced Analytics</h3>
              <p style={{ color: colors.textSecondary }}>Deep insights and trend analysis for strategic decision making.</p>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>Threat Pattern Analysis</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={threatTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                    <XAxis dataKey="time" stroke={colors.textSecondary} />
                    <YAxis stroke={colors.textSecondary} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: colors.bgCard, 
                        border: `1px solid ${colors.border}`, 
                        borderRadius: '8px',
                        color: colors.text
                      }} 
                    />
                    <Area type="monotone" dataKey="threats" stroke={colors.primary} fill={colors.primary} fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>Geographic Distribution</h4>
                <GeographicIntelligence />
              </Card>
            </div>
          </div>
        );
      
      case 'geographic':
        return (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text }}>Geographic Intelligence</h3>
              <p style={{ color: colors.textSecondary }}>Regional analysis and geospatial threat mapping.</p>
            </Card>
            <GeographicIntelligence />
          </div>
        );
      
      default:
        return (
          <Card className="p-8 text-center">
            <h3 className="text-xl mb-4" style={{ color: colors.text }}>Coming Soon</h3>
            <p style={{ color: colors.textSecondary }}>This section is under development.</p>
          </Card>
        );
    }
  };

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{ backgroundColor: colors.bg }}
    >
      <SideNavigation activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} onAnalystClick={onAnalystClick} />
      
      <div className="ml-64 pt-16">
        {/* Header */}
        <div 
          className="backdrop-blur-sm border-b px-6 py-4 transition-all duration-300"
          style={{ 
            backgroundColor: colors.navBg,
            borderColor: colors.navBorder 
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3" style={{ color: colors.text }}>
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: colors.gradientPrimary }}
                >
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                {activeTab === 'dashboard' ? 'Executive Dashboard' :
                 activeTab === 'monitoring' ? 'Live Monitoring' :
                 activeTab === 'analytics' ? 'Advanced Analytics' :
                 activeTab === 'geographic' ? 'Geographic Intelligence' :
                 activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
              <p className="mt-1" style={{ color: colors.textSecondary }}>
                Real-time misinformation and hate speech monitoring
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div 
                  className={`w-2 h-2 rounded-full ${connectionStatus === 'connected' ? 'animate-pulse' : ''}`}
                  style={{ backgroundColor: connectionStatus === 'connected' ? colors.success : colors.danger }}
                ></div>
                <span style={{ color: colors.textSecondary }}>
                  {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
                </span>
                <Wifi size={16} style={{ color: colors.textSecondary }} />
              </div>
              
              <div className="text-xs" style={{ color: colors.textMuted }}>
                Last updated: {realTimeData.lastUpdate.toLocaleTimeString()}
              </div>
              
              <Button variant="ghost" size="sm">
                <Settings size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          {renderTabContent()}

          {/* Quick Actions - Only show on dashboard */}
          {activeTab === 'dashboard' && (
            <Card className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" icon={Search} onClick={onAnalystClick}>
                  Open Analyst Workstation
                </Button>
                <Button variant="primary" icon={Download}>Export Report</Button>
                <Button variant="secondary" icon={Settings}>Configure Alerts</Button>
                <Button variant="secondary" icon={Calendar}>Schedule Analysis</Button>
                <Button variant="ghost" icon={FileText}>View Detailed Reports</Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};