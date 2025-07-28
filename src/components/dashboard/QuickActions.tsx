import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Video, Calendar, Users, Plus, Zap } from "lucide-react"

const actions = [
  {
    title: 'Start Call',
    description: 'Begin an instant call',
    icon: Phone,
    variant: 'default' as const,
    gradient: true
  },
  {
    title: 'Video Meeting',
    description: 'Start video conference',
    icon: Video,
    variant: 'default' as const,
    gradient: true
  },
  {
    title: 'Schedule',
    description: 'Plan future meeting',
    icon: Calendar,
    variant: 'outline' as const,
    gradient: false
  },
  {
    title: 'Invite Team',
    description: 'Add team members',
    icon: Users,
    variant: 'outline' as const,
    gradient: false
  }
]

export function QuickActions() {
  return (
    <Card className="animate-scale-in">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-primary" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <Button
              key={action.title}
              variant={action.variant}
              className={`h-auto p-4 flex flex-col space-y-2 text-left group hover:scale-105 transition-all duration-200 ${
                action.gradient ? 'bg-gradient-primary hover:shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className={`h-6 w-6 ${action.gradient ? 'text-primary-foreground' : 'text-primary'} group-hover:scale-110 transition-transform`} />
              <div>
                <div className={`font-medium text-sm ${action.gradient ? 'text-primary-foreground' : ''}`}>
                  {action.title}
                </div>
                <div className={`text-xs ${action.gradient ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {action.description}
                </div>
              </div>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}