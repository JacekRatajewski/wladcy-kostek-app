export interface ISidebarItem {
    route: string
    iconPath: string
    tooltip: string
    type?: SidebarItemType
    onClick: (id: number) => void
}

export enum SidebarItemType {
    settings
}