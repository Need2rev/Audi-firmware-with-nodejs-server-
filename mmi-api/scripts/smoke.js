const endpoints = [
  "http://127.0.0.1:14713/api/health",
  "http://127.0.0.1:14713/etc/eso/rudi.json",
  "http://127.0.0.1:14713/etc/eso/tracing.json",
];

async function run() {
  let hasFailure = false;
  for (const url of endpoints) {
    try {
      const response = await fetch(url);
      const ok = response.status >= 200 && response.status < 400;
      console.log(`${response.status} ${url}`);
      if (!ok) {
        hasFailure = true;
      }
    } catch (error) {
      hasFailure = true;
      console.error(`ERR ${url} -> ${error.message}`);
    }
  }
  if (hasFailure) {
    process.exit(1);
  }
}

run();
