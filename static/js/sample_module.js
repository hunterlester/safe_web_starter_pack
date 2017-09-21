// To create modules, simple include `module.exports = {}` in a file
// Then require that file in ./client-scripts.js

(async function() {

  const appInfo = {
    id: 'net.maidsafe.web_starter_pack',
    name: 'SAFE web starter pack',
    vendor: 'MaidSafe Ltd.',
    scope: null
  };

  const divEl = document.getElementById('network-output');
  const pEl = document.createElement('p');
  pEl.textContent = 'Interfacing with network...';
  divEl.appendChild(pEl);

  const appHandle = await window.safeApp.initialise(appInfo);
  console.log('App handle: ', appHandle);

  const pE2 = document.createElement('p');
  pE2.textContent = `App handle returned: ${appHandle}`;
  divEl.appendChild(pE2);

  const authUri = await window.safeApp.authorise(appHandle, {}, {own_container: false});
  console.log('Auth URI: ', authUri);

  const pE3 = document.createElement('p');
  pE3.textContent = `Auth URI returned: ${authUri}`;
  divEl.appendChild(pE3);

  await window.safeApp.connectAuthorised(appHandle, authUri);
  console.log('Authorised and connected to network!');

  const pE4 = document.createElement('p');
  pE4.textContent = 'Authorised and connected to network!';
  divEl.appendChild(pE4);

})();

module.exports = {};
