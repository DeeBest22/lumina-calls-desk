import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function UsageChart() {
  const data = [
    { day: 'Mon', calls: 12, meetings: 8 },
    { day: 'Tue', calls: 19, meetings: 12 },
    { day: 'Wed', calls: 8, meetings: 15 },
    { day: 'Thu', calls: 15, meetings: 10 },
    { day: 'Fri', calls: 22, meetings: 18 },
    { day: 'Sat', calls: 5, meetings: 3 },
    { day: 'Sun', calls: 3, meetings: 2 }
  ]

  const maxValue = Math.max(...data.map(d => Math.max(d.calls, d.meetings)))

  return (
    <Card className="animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <span>Weekly Usage</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
              <span>Calls</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Meetings</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={item.day} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="w-8 text-muted-foreground">{item.day}</span>
                  <span className="text-xs text-muted-foreground">{item.calls + item.meetings}</span>
                </div>
                <div className="flex space-x-1 h-2">
                  <div 
                    className="bg-gradient-primary rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${(item.calls / maxValue) * 100}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                  <div 
                    className="bg-accent rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${(item.meetings / maxValue) * 100}%`,
                      animationDelay: `${index * 100 + 50}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}