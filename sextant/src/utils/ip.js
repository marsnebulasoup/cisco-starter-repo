export async function getIPv4() {
  return await getIP("https://api.ipify.org?format=json");
}

export async function getIPv6() {
  return await getIP("https://api6.ipify.org?format=json");
}

async function getIP(url) {
  let ip = "Unable to fetch IP";
  try {
    const resp = await fetch(url);
    const json = await resp.json();
    ip = json.ip;
  } catch (e) {
    console.error("Error trying to fetch IP", e)
  }
  return ip;
}