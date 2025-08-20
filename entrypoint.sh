#!/bin/sh

cat <<EOF > /usr/share/nginx/html/config.js
window.RUNTIME_CONFIG = {
  DATA_BANK_URL:"${DATA_BANK_URL}",
  GIS_URL:"${GIS_URL}",
  SELF_SERVICE_URL:"${SELF_SERVICE_URL}"
};
EOF

exec nginx -g 'daemon off;'