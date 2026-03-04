export function logStep(scope: string, message: string, data?: unknown) {
  const time = new Date().toISOString();

  if (data !== undefined) {
    console.log(`[${time}] [${scope}] ${message}`, data);
  }

  console.log(`[${time}] [${scope}] ${message}`);
}
