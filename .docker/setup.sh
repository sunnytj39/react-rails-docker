docker-compose run --rm web bundle --jobs=10 --retry=5
docker-compose run --rm web bundle exec rails new . --api --force --database=postgresql --skip-bundle --skip-turbolinks --skip-sprockets --skip-test-unit --skip-javascript
cp -f .docker/config/database.yml config/database.yml
cp -f .docker/bin/start.sh bin/start.sh
chmod +x bin/start.sh
rm -rf .docker
