const result = await fetch('https://api64.ipify.org?format=json');
await console.log(await result.json());
