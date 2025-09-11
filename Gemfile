source "https://rubygems.org"

gem "minima", "~> 2.5"
gem "csv", "~> 3.3"
gem "base64", "~> 0.2"
gem "bigdecimal", "~> 3.1"
gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem 'jekyll-paginate-v2', github: 'sverrirs/jekyll-paginate-v2'
  gem 'jekyll-tagging'
  gem 'jekyll-archives'
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows

# gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?

gem "webrick", "~> 1.9"
