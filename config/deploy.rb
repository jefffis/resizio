set :application, 'resizio'
set :repository,  'git@github.com:jefffis/resizio.git'

#require 'ballcap/capistrano'

set :scm, 'git'
set :scm_dir, 'jefffis'
set :branch, 'master'
set :deploy_host, 'gunray.browsermedia.com'
#set :deploy_to, '/var/www/vhosts/#{application}'
role :app, 'gunray.browsermedia.com'
role :web, 'gunray.browsermedia.com'

#role :web, "gunray.browsermedia.com"                          # Your HTTP server, Apache/etc
#role :app, "gunray.browsermedia.com"                          # This may be the same as your `Web` server
#role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

ssh_options[:forward_agent] = true
set :keep_releases, 5

#task :link_shared_directories do
#	run "ln -s #{shared_path}/uploads #{release_path}/public/uploads"
#end

after 'deploy:update_code', :link_shared_directories, 'deploy:cleanup'

# Automatically runs bundle install on the server. Puts gems into the shared directory.
set :bundle_cmd, '/opt/ruby-ee/bin/bundle'