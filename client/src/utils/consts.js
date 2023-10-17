export const LOGIN_ROUTE = '/'
export const REGISTRATION_ROUTE = '/registration'
export const ERROR_404_ROUTE = '/*'


export const PROFILE_ROUTE = '/profile'
export const DASHBOARD_ROUTE = '/dashboard'
export const WORKPLACES_ROUTE = '/workplaces'
export const EMPLOYEES_ROUTE = '/employees'
export const MESSAGES_ROUTE = '/messages'
export const EVENTS_ROUTE = '/events'
export const LEADERS_ROUTE = '/leaders'


export const menuLinks = {
	leaders: [
		{
			index: 1,
			icon: 'pi-map-marker',
			href: WORKPLACES_ROUTE,
			notifications: 32
		},{
			index: 2,
			icon: 'pi-users',
			href: EMPLOYEES_ROUTE
		},{
			index: 3,
			icon: 'pi-home',
			href: DASHBOARD_ROUTE
		},{
			index: 4,
			icon: 'pi-bell',
			href: MESSAGES_ROUTE
		},{
			index: 5,
			icon: 'pi-envelope',
			href: EVENTS_ROUTE
		},
	],
	employees: [
		{
			index: 1,
			icon: 'pi-users',
			href: LEADERS_ROUTE
		},{
			index: 2,
			icon: 'pi-bolt',
			href: DASHBOARD_ROUTE
		},{
			index: 3,
			icon: 'pi-bell',
			href: MESSAGES_ROUTE
		},
	],
	process_ur: [
		{
			index: 1,
			icon: 'pi-users',
			href: LEADERS_ROUTE
		},{
			index: 2,
			icon: 'pi-home',
			href: DASHBOARD_ROUTE
		},{
			index: 3,
			icon: 'pi-bell',
			href: MESSAGES_ROUTE
		},
	]
}