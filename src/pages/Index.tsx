import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { StatCard } from "@/components/dashboard/StatCard"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { UsageChart } from "@/components/dashboard/UsageChart"
import { 
  Phone, 
  Users, 
  Clock, 
  TrendingUp,
  Video,
  Calendar
} from "lucide-react"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome back, Sarah!
          </h1>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Calls"
            value="247"
            change="+12% from last month"
            changeType="positive"
            icon={Phone}
          />
          <StatCard
            title="Active Users"
            value="89"
            change="+5% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatCard
            title="Meeting Hours"
            value="156h"
            change="+23% from last month"
            changeType="positive"
            icon={Clock}
          />
          <StatCard
            title="Engagement"
            value="94%"
            change="-2% from last month"
            changeType="negative"
            icon={TrendingUp}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <RecentActivity />
            <UsageChart />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <QuickActions />
            
            {/* Upcoming Meetings */}
            <div className="bg-gradient-secondary rounded-lg p-6 animate-scale-in">
              <h3 className="font-semibold mb-4 flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Upcoming Meetings</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Product Review</p>
                    <p className="text-xs text-muted-foreground">2:00 PM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Team Standup</p>
                    <p className="text-xs text-muted-foreground">4:30 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
