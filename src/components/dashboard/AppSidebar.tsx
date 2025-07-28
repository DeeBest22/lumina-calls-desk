import { useState } from "react"
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Phone, 
  Calendar,
  CreditCard,
  Bell,
  LogOut
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Recent Calls", url: "/calls", icon: Phone },
  { title: "Meetings", url: "/meetings", icon: Calendar },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
]

const accountItems = [
  { title: "Team Members", url: "/team", icon: Users },
  { title: "Billing", url: "/billing", icon: CreditCard },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { open } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = !open

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-primary-foreground shadow-soft" 
      : "hover:bg-secondary/50 transition-colors"

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r bg-gradient-secondary`}
      collapsible="icon"
    >
      <SidebarContent className="flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b">
          {!collapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">VideoCall Pro</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
              <Phone className="h-4 w-4 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account Management */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Notifications & Profile */}
        <div className="p-4 border-t space-y-2">
          <Button 
            variant="ghost" 
            size={collapsed ? "icon" : "sm"}
            className="w-full justify-start"
          >
            <Bell className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Notifications</span>}
          </Button>
          <Button 
            variant="ghost" 
            size={collapsed ? "icon" : "sm"}
            className="w-full justify-start text-destructive hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Sign Out</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}