export enum ROUTE_NAMES {
  ROOT = '/',
  ERROR = '/error'
}

export const STATUSES = ['Pending', 'Invitation', 'Archived', 'Rejected'];

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + '/jobs';
