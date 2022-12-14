export function openLink(link: string) {
  if (link.startsWith('http')) {
    window.open(link);
  } else {
    window.open(`https://${link}`);
  }
}

export function postJson(url: string, data: any) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

export function getJson(url: string) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json());
}
