source "https://rubygems.org"


gem "jekyll", "~> 4.3.2"
gem "minima", "~> 2.5"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
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
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?

gem "webrick", "~> 1.8"
