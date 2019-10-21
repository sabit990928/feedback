localtunnel() {		
  lt -s leaaspeciall --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

# "webhook": "lt --port 5000 --subdomain leaaspeciall"
  