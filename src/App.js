import React, { useState, useEffect } from 'react';
import { Globe, Shield, Users, AlertTriangle, TrendingUp, Search, Bell, User, Settings, Menu, X, Eye, Filter, Calendar, MapPin, Activity, Database, FileText, UserCheck, Lock, Mail, Github, ChevronDown, ChevronRight, Play, Pause, Download, Zap, BarChart3, Network, Cpu, Brain, Radar, Home, MessageSquare, Target, Clock, CheckCircle, XCircle, AlertCircle, Wifi, WifiOff, ChevronUp, MoreVertical, ExternalLink, Layers, Map, Hash, Flame, Camera, Video, FileImage, Share2, Flag, Heart, ThumbsUp, MessageCircle, RotateCcw, UserPlus, Building, Phone, Globe2, Monitor, Smartphone, Users2, AlertOctagon, TrendingDown } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart } from 'recharts';

// ==================== UTILITY COMPONENTS ====================

const Card = ({ children, className = "", glow = false }) => (
  <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl ${glow ? 'shadow-lg shadow-blue-500/10' : ''} ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", size = "md", icon: Icon, onClick, className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500",
    ghost: "bg-transparent hover:bg-gray-700 text-gray-300 hover:text-white",
    danger: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white focus:ring-red-500",
    success: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white focus:ring-green-500",
    warning: "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white focus:ring-yellow-500"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
};

const Badge = ({ children, variant = "default", size = "md" }) => {
  const variants = {
    default: "bg-gray-700 text-gray-300",
    primary: "bg-blue-600 text-white",
    success: "bg-green-600 text-white", 
    warning: "bg-yellow-600 text-white",
    danger: "bg-red-600 text-white",
    outline: "border border-gray-600 text-gray-300"
  };
  
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5"
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};

// ==================== MAIN APP COMPONENT ====================

export default function FonSeeApp() {
  // State management
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'auth', 'dashboard', 'analyst'
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [user, setUser] = useState(null);

  const handleAuthClick = (mode = 'login') => {
    setAuthMode(mode);
    setShowAuth(true);
    setCurrentPage('auth');
  };

  const handleDemoClick = () => {
    // Auto-login for demo
    setUser({
      name: 'Alex Johnson',
      role: 'Senior Analyst',
      email: 'alex.johnson@fonsee.ai'
    });
    setCurrentPage('dashboard');
  };

  const handleAnalystClick = () => {
    setCurrentPage('analyst');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  const handleAuthSubmit = () => {
    // Mock authentication
    setUser({
      name: authMode === 'login' ? 'Alex Johnson' : 'New User',
      role: 'Senior Analyst',
      email: authMode === 'login' ? 'alex.johnson@fonsee.ai' : 'newuser@fonsee.ai'
    });
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">FonSee</h1>
                <p className="text-xs text-gray-400">MHSMS</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.role}</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-300" />
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
          onBack={() => setCurrentPage('landing')}
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
}

// ==================== ANALYST WORKSTATION COMPONENT ====================

const AnalystWorkstation = ({ user, onLogout }) => {
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
          <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl text-white mb-2">Select Content to Analyze</h3>
          <p className="text-gray-400">Choose an alert from the list to begin detailed analysis</p>
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

          <h2 className="text-2xl font-bold text-white mb-2">{alert.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-400">
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
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Original Content
          </h3>
          
          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <div className="font-medium text-white">{content.author.name}</div>
                <div className="text-sm text-gray-400">
                  {content.author.followers && `${content.author.followers.toLocaleString()} followers`}
                  {content.author.account_age && ` • Account: ${content.author.account_age}`}
                  {content.author.groups && ` • ${content.author.groups} groups`}
                </div>
              </div>
            </div>
            
            <p className="text-white leading-relaxed mb-4">{content.text}</p>
            
            {content.media && content.media.length > 0 && (
              <div className="border border-gray-600 rounded p-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FileImage size={16} />
                  Media: {content.media[0].description}
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
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
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            AI Analysis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Confidence Score</span>
                  <span className="text-white font-bold">{alert.ai_analysis.confidence}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-red-500 h-2 rounded-full"
                    style={{ width: `${alert.ai_analysis.confidence}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Similar Patterns Found</span>
                <p className="text-2xl font-bold text-white">{alert.ai_analysis.similar_patterns}</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Threat Indicators</h4>
              <ul className="space-y-1">
                {alert.ai_analysis.threat_indicators.map((indicator, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <AlertCircle size={12} className="text-yellow-400" />
                    {indicator}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Analyst Tools */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            Analysis Tools
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Classification */}
            <div>
              <h4 className="text-white font-medium mb-3">Classification</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Threat Type</label>
                  <select 
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
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
                  <label className="block text-sm text-gray-400 mb-1">Priority Level</label>
                  <select 
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
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
                  <label className="block text-sm text-gray-400 mb-1">Confidence ({analysisData.confidence}%)</label>
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
              <h4 className="text-white font-medium mb-3">Quick Actions</h4>
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
            <label className="block text-sm text-gray-400 mb-2">Analysis Notes</label>
            <textarea
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white h-24"
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
        <h3 className="text-xl font-semibold text-white">Content Queue</h3>
        <div className="flex gap-2">
          <select 
            className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
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
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              selectedAlert?.id === alert.id 
                ? 'border-blue-500 bg-blue-500/10' 
                : 'border-gray-700 hover:border-gray-600'
            }`}
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
                  <span className="text-xs text-gray-400">{alert.platform}</span>
                </div>
                
                <h4 className="text-white font-medium mb-1">{alert.title}</h4>
                <p className="text-sm text-gray-400 mb-2">
                  {alert.content.text.substring(0, 120)}...
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{alert.location}</span>
                  <span>{alert.time}</span>
                  <span>{alert.engagement.toLocaleString()} engaged</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-medium text-white">{alert.ai_analysis.confidence}%</div>
                <div className="text-xs text-gray-400">confidence</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <AnalystSideNavigation onLogout={onLogout} />
      
      <div className="ml-64 pt-16">
        {/* Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                Analyst Workstation
              </h1>
              <p className="text-gray-400 mt-1">
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
  const [currentApp, setCurrentApp] = useState('analyst');

  const navItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: Home },
    { id: 'analyst', label: 'Analyst Workstation', icon: Search },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleNavigation = (id) => {
    if (id === 'dashboard') {
      // Go back to Executive Dashboard
      window.location.reload();
    } else {
      setCurrentApp(id);
    }
  };

  return (
    <div className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700/50 h-screen fixed left-0 top-16 z-40">
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                currentApp === item.id 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6">
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
    <div className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700/50 h-screen fixed left-0 top-16 z-40">
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6">
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
  const [stats] = useState({
    contentMonitored: 2480000,
    accuracyRate: 94,
    platformsMonitored: 8
  });

  // 3D Earth Animation Component
  const Earth3D = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 100);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-64 h-64 mx-auto">
        <div 
          className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 shadow-2xl shadow-blue-500/20 relative overflow-hidden"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {/* Earth surface pattern */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-green-500 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 right-1/4 w-6 h-12 bg-green-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-1/3 left-1/4 w-10 h-6 bg-green-600 rounded-full opacity-50"></div>
          </div>
          
          {/* Data points */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-red-400 rounded-full animate-pulse`}
              style={{
                top: `${20 + Math.sin(i * 60 + rotation) * 30}%`,
                left: `${30 + Math.cos(i * 60 + rotation) * 25}%`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
          
          {/* Atmospheric glow */}
          <div className="absolute -inset-2 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <Zap className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI-Powered Detection</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Monitoring the
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Pulse
                </span>
                of Africa
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Advanced misinformation and hate speech monitoring system powered by cutting-edge AI. 
                Protecting digital communities across African social media platforms.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{(stats.contentMonitored / 1000000).toFixed(1)}M</div>
                <div className="text-gray-400 text-sm">Content Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stats.accuracyRate}%</div>
                <div className="text-gray-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stats.platformsMonitored}</div>
                <div className="text-gray-400 text-sm">Platforms</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => onAuthClick('register')}
                className="flex-1 sm:flex-none"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Start Monitoring
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={onDemoClick}
                className="flex-1 sm:flex-none"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Column - 3D Earth */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Earth3D />
              
              {/* Floating cards around earth */}
              <div className="absolute -top-4 -left-8 bg-red-500/20 border border-red-500/30 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-red-300 text-sm">Threat Detected</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-8 bg-green-500/20 border border-green-500/30 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-sm">Verified Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Digital Monitoring</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-time analysis across multiple platforms with advanced AI detection capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center" glow>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Detection</h3>
              <p className="text-gray-400">Advanced machine learning algorithms trained specifically for African contexts</p>
            </Card>

            <Card className="p-6 text-center" glow>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Network className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform</h3>
              <p className="text-gray-400">Monitor Facebook, Twitter, WhatsApp, TikTok, and other popular platforms</p>
            </Card>

            <Card className="p-6 text-center" glow>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Alerts</h3>
              <p className="text-gray-400">Instant notifications for critical threats and emerging patterns</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthPage = ({ mode, onSubmit, onModeSwitch, onBack }) => {
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
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <Card className="p-8">
          <div className="text-center mb-8">
            <Button variant="ghost" onClick={onBack} className="absolute top-6 left-6">
              ← Back
            </Button>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-400">
              {mode === 'login' ? 'Sign in to your FonSee account' : 'Join the FonSee monitoring platform'}
            </p>
          </div>

          <div className="space-y-6">
            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your organization"
                  />
                </div>
              </>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <Button onClick={onSubmit} variant="primary" size="lg" className="w-full">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </div>

          <div className="mt-6 text-center">
            <span className="text-gray-400">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              onClick={() => onModeSwitch(mode === 'login' ? 'register' : 'login')}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Simple dashboard placeholder
const ExecutiveDashboard = ({ user, onLogout, onAnalystClick }) => {
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
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          Live Content Monitoring
        </h3>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
          <span className="text-sm text-gray-400">{isLive ? 'Live' : 'Paused'}</span>
          <Button variant="ghost" size="sm" onClick={() => setIsLive(!isLive)}>
            {isLive ? <Pause size={16} /> : <Play size={16} />}
          </Button>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {recentAlerts.map(alert => (
          <div key={alert.id} className="border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
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
                  <span className="text-xs text-gray-400">{alert.platform}</span>
                </div>
                
                <h4 className="text-white font-medium mb-1">{alert.title}</h4>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
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
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Map className="w-5 h-5 text-purple-400" />
        Geographic Intelligence
      </h3>
      
      <div className="space-y-4">
        {geographicData.map((region, index) => (
          <div key={region.region} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${
                region.severity === 'high' ? 'bg-red-500' :
                region.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
              }`}></div>
              <div>
                <div className="text-white font-medium">{region.region}</div>
                <div className="text-sm text-gray-400">{region.population}M population</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-white font-bold">{region.threats}</div>
              <div className="text-xs text-gray-400">active threats</div>
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
              <Card className="p-6 bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30" glow>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-300 text-sm font-medium">Total Content Monitored</p>
                    <p className="text-3xl font-bold text-white mt-1">
                      {(realTimeData.totalContent / 1000000).toFixed(2)}M
                    </p>
                    <p className="text-blue-300 text-xs mt-1">
                      +{Math.floor(Math.random() * 50 + 20)}K today
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-red-600/20 to-red-800/20 border-red-500/30" glow>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-300 text-sm font-medium">Active Threats</p>
                    <p className="text-3xl font-bold text-white mt-1">{realTimeData.activeThreats}</p>
                    <p className="text-red-300 text-xs mt-1">
                      {Math.random() > 0.5 ? '+2' : '-1'} from yesterday
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30" glow>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-300 text-sm font-medium">Detection Accuracy</p>
                    <p className="text-3xl font-bold text-white mt-1">{realTimeData.accuracy.toFixed(1)}%</p>
                    <p className="text-green-300 text-xs mt-1">
                      +0.3% this week
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30" glow>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-300 text-sm font-medium">Platforms Monitored</p>
                    <p className="text-3xl font-bold text-white mt-1">{realTimeData.platforms}</p>
                    <p className="text-purple-300 text-xs mt-1">
                      All systems operational
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Network className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Threat Trends */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Threat Trends (24h)</h3>
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
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Area type="monotone" dataKey="threats" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.2} />
                    <Line type="monotone" dataKey="misinformation" stroke="#F59E0B" strokeWidth={2} />
                    <Line type="monotone" dataKey="hate_speech" stroke="#8B5CF6" strokeWidth={2} />
                  </ComposedChart>
                </ResponsiveContainer>
              </Card>

              {/* Platform Distribution */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Platform Distribution</h3>
                
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
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
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
              <h3 className="text-2xl font-semibold text-white mb-4">Live Content Monitoring</h3>
              <p className="text-gray-400">Real-time content analysis and threat detection across all monitored platforms.</p>
            </Card>
            <ContentMonitoringFeed />
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-400">Deep insights and trend analysis for strategic decision making.</p>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Threat Pattern Analysis</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={threatTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
                    <Area type="monotone" dataKey="threats" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Geographic Distribution</h4>
                <GeographicIntelligence />
              </Card>
            </div>
          </div>
        );
      
      case 'geographic':
        return (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Geographic Intelligence</h3>
              <p className="text-gray-400">Regional analysis and geospatial threat mapping.</p>
            </Card>
            <GeographicIntelligence />
          </div>
        );
      
      default:
        return (
          <Card className="p-8 text-center">
            <h3 className="text-xl text-white mb-4">Coming Soon</h3>
            <p className="text-gray-400">This section is under development.</p>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <SideNavigation activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} onAnalystClick={onAnalystClick} />
      
      <div className="ml-64 pt-16">
        {/* Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                {activeTab === 'dashboard' ? 'Executive Dashboard' :
                 activeTab === 'monitoring' ? 'Live Monitoring' :
                 activeTab === 'analytics' ? 'Advanced Analytics' :
                 activeTab === 'geographic' ? 'Geographic Intelligence' :
                 activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
              <p className="text-gray-400 mt-1">
                Real-time misinformation and hate speech monitoring
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className={`w-2 h-2 rounded-full ${
                  connectionStatus === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                }`}></div>
                <span className="text-gray-400">
                  {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
                </span>
                <Wifi size={16} className="text-gray-400" />
              </div>
              
              <div className="text-xs text-gray-500">
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
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
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