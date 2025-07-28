import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Video, Calendar, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: 'call',
    participant: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    duration: '45m',
    time: '2 hours ago',
    status: 'completed'
  },
  {
    id: 2,
    type: 'meeting',
    participant: 'Team Standup',
    avatar: 'https://i.pravatar.cc/150?img=2',
    duration: '30m',
    time: '4 hours ago',
    status: 'completed'
  },
  {
    id: 3,
    type: 'call',
    participant: 'Alice Smith',
    avatar: 'https://i.pravatar.cc/150?img=3',
    duration: '12m',
    time: '6 hours ago',
    status: 'missed'
  },
  {
    id: 4,
    type: 'meeting',
    participant: 'Client Review',
    avatar: 'https://i.pravatar.cc/150?img=4',
    duration: '1h 15m',
    time: 'Yesterday',
    status: 'completed'
  }
]

export function RecentActivity() {
  const getIcon = (type: string) => {
    return type === 'call' ? Phone : Video
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success'
      case 'missed': return 'bg-destructive'
      default: return 'bg-muted'
    }
  }

  return (
    <Card className="animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = getIcon(activity.type)
          return (
            <div key={activity.id} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activity.avatar} alt={activity.participant} />
                  <AvatarFallback>{activity.participant.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full ${getStatusColor(activity.status)}`} />
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{activity.participant}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>{activity.duration}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
              
              <Badge variant={activity.status === 'missed' ? 'destructive' : 'secondary'}>
                {activity.status}
              </Badge>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}