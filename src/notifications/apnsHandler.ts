export function parseApnsPayload(notification: any) {
  const alert = notification?.aps?.alert || {};
  return {
    title: alert.title || 'Nexus Alert',
    body: alert.body || '',
    category: notification?.category || 'SYSTEM',
  };
}
